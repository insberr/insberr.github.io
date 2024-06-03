import React from "react";
import Container from "@mui/material/Container";

const Page_404: React.FC = () => {
    return (
        <Container>
            <div className="font-bold text-20">
                404 Thats an error, In case that wasn't obvious...
            </div>
            <div className="font-bold text-15">
                Aw Snap! The spiders found a new room. I guess I need to pull out my sword again.
            </div>
            <div>
                Please check the URL, or submit an issue to theGithub code.
                <br/>
                Click <a className="link" href="https://insberr.com">here</a> to go to the main page.
            </div>
        </Container>
    );
}

export default Page_404;
