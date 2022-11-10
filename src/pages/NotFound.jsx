import React from "react";
import "@styles/NotFound.scss";

const NotFound = () => {
    return (
        <div>
            <span className="Error">404</span>
            <span className="Message">Whoops!! Something went wrong!</span>
            <button className="Button" type="button" href="./Home.jsx">Take me back!</button>
        </div>
    );
}

export { NotFound }