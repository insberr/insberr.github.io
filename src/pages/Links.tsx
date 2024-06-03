import React from 'react';
import Container from '@mui/material/Container';
import { Stack } from "@mui/material";

const Links: React.FC = () => {
    return (
        <Container>
            <Stack direction="column" spacing={2}>
                <div>TODO - This Page is under construction.</div>
                <div>Dev YouTube</div>
                <div>Gaming YouTube</div>
                <div>Personal YouTube</div>
            </Stack>
        </Container>
    );
};

export default Links;
