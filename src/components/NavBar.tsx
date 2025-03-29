import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link as RouterLink} from "react-router";
import Typography from "@mui/material/Typography";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link, ListItemIcon} from "@mui/material";
import {LinksList} from "../pages/Links.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        // @ts-ignore
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        color="textPrimary"
                        sx={{ textDecoration: 'none' }}
                        to={`/`}
                    >
                        Insberr
                    </Typography>

                    <Button
                        onClick={handleClick}
                        sx={{ marginLeft: "1rem" }}
                        color="secondary"
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Links
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        { LinksList.map((item, index: number) => (
                            <MenuItem component={Link} href={item.url} target="_blank" key={index} onClick={handleClose} >
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={item.icon} color={item.color} size="lg" />
                                </ListItemIcon>
                                <Typography variant="inherit">{item.name}</Typography>
                            </MenuItem>
                        )) }
                    </Menu>
                    
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Button
                        variant="text"
                        color="secondary"
                        component={RouterLink}
                        to={`/posts`}
                    >
                        Blog
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
