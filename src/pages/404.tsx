import React from "react";
import { Container, Typography } from "@mui/material";

const Page_404: React.FC = () => {
    return (
        <Container>
            <Typography variant="h1">
                404 That's an error, In case that wasn't obvious...
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Aw Snap! The spiders found a new room. I guess I need to pull out my sword again.
            </Typography>
            <Typography>
                Please check the URL, or submit an issue to theGithub code.
                <br/>
                Click <a className="link" href="https://insberr.com">here</a> to go to the main page.
            </Typography>
        </Container>
    );
}

export default Page_404;
