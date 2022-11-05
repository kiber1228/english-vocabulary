import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className={'container-fluid bg-danger text-white p-2 d-flex justify-content-between align-items-md-center'}>
            <h1>English</h1>
            <Link to={'/posts'} className={'btn btn-outline-light'}>Add New Vocabulary</Link>
        </div>
    );
}

export default Header;