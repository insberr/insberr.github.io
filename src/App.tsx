import React from 'react';

import { Routes, Route } from 'react-router';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Links from './pages/Links';
import Page_404 from "./pages/404.tsx";
import NavBar from './components/NavBar';
import Posts from "./pages/Posts.tsx";
import PostView from "./pages/PostView.tsx";
import MakePost from "./pages/MakePost.tsx";

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#222222'
        },
        primary: {
            main: '#ff1744', // Red accent color
        },
        secondary: {
            main: '#f50057', // Another red shade for secondary actions
        },
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/links" element={<Links/>} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                
                <Route path="/posts" element={<Posts />} />
                <Route path="/post/:postId" element={<PostView />} />
                <Route path="/makepost" element={<MakePost />} />
                
                <Route path="*" element={<Page_404 />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
