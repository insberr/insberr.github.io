import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link as RouterLink } from "react-router";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button
                        variant="contained"
                        color="primary"
                        component={RouterLink}
                        to={`/`}
                    >
                        Insberr
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        component={RouterLink}
                        to={`/posts`}
                    >
                        Posts
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
