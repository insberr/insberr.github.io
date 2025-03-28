import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link as RouterLink} from "react-router";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        color="textPrimary"
                        sx={{ flexGrow: 1, textDecoration: 'none' }}
                        to={`/`}
                    >
                        Insberr
                    </Typography>
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
