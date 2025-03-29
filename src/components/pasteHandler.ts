import { EditorView, ViewPlugin } from "@codemirror/view";
import {PostsAPIURL, PostsAssetsURL} from "../pages/Posts.tsx";

export const handlePaste = async (event: ClipboardEvent) => {
    const items = event.clipboardData?.items;
    if (!items) return;

    for (const item of items) {
        const itemType = item.type;
        const file = item.getAsFile();
        if (file) {
            const reader = new FileReader();
            
            const fileNamePromise = new Promise<string>((resolve, _reject) => {
                reader.onload = async () => {
                    console.log(reader);
                    console.log(itemType);

                    const uuid = crypto.randomUUID();
                    const fileName = `${uuid}.${itemType.split("/")[1]}`;

                    await fetch(
                        PostsAPIURL + `/posts/upload?name=${fileName}`,
                        {
                            method: "PUT",
                            headers: {
                                "Authorization": localStorage.getItem("personal-website-pose-credentials") || "user@password",
                            },
                            body: reader.result
                        }
                    );

                    event.preventDefault();

                    resolve(fileName);
                };
            });
            
            reader.readAsArrayBuffer(file);
            
            return fileNamePromise;
        }
    }
}

class PasteHandler {
    private view: EditorView;
    
    constructor(view: EditorView) {
        this.view = view;
        
        this._handlePaste = this._handlePaste.bind(this);
        this.view.dom.addEventListener("paste", this._handlePaste);
    }

    _handlePaste(event: ClipboardEvent) {
        handlePaste(event).then(fileName => {
            this.view.dispatch({
                changes: {
                    from: this.view.state.selection.main.head,
                    insert: `![Pasted Image](${PostsAssetsURL}/${fileName})`
                },
            });
        });
    }

    destroy() {
        this.view.dom.removeEventListener("paste", this._handlePaste);
    }
}

const pasteHandler = ViewPlugin.fromClass(PasteHandler);
export default pasteHandler;
