import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {Route, Routes} from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Admin from "./Admin/Admin";
function App(props) {
    return (
        <div>
            <Header />
        <Routes>
            <Route path={'/'} element={<Content />} />
            <Route path={'/posts'} element={<Posts />} />
            <Route path={'/admin'} element={<Admin />} />
        </Routes>
        </div>
    );
}

export default App;