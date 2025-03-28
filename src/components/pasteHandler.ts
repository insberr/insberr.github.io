import { EditorView, ViewPlugin } from "@codemirror/view";
import {PostsAPIURL, PostsAssetsURL} from "../pages/Posts.tsx";

class PasteHandler {
    private view: EditorView;
    
    constructor(view: EditorView) {
        this.view = view;
        
        this.handlePaste = this.handlePaste.bind(this);
        this.view.dom.addEventListener("paste", this.handlePaste);
    }

    handlePaste(event: ClipboardEvent) {
        const items = event.clipboardData?.items;
        if (!items) return;

        for (const item of items) {
            const itemType = item.type;
            const file = item.getAsFile();
            if (file) {
                const reader = new FileReader();
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

                    this.view.dispatch({
                        changes: {
                            from: this.view.state.selection.main.head,
                            insert: `![Pasted Image](${PostsAssetsURL}/${fileName})`
                        },
                    });
                };
                reader.readAsArrayBuffer(file);
            }
        }
    }

    destroy() {
        this.view.dom.removeEventListener("paste", this.handlePaste);
    }
}

const pasteHandler = ViewPlugin.fromClass(PasteHandler);
export default pasteHandler;
