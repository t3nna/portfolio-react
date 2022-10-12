import React from "react";

import background from '../images/Background.png'
export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footer-wrapper">
                    <h2 className="created-with | fs-third-heading__neutral">
                        Created with
                    </h2>
                    <ul role="list" className="footer-list theme-border">
                        <li><a href="#">
                            <img src={background} alt=""/>
                            <h3 className="fs-third-heading__neutral">React</h3>
                            <p>Library for interfaces in JS</p>
                        </a></li>
                        <li><a href="#">
                            <img src={background} alt=""/>
                            <h3 className="fs-third-heading__neutral">Sass</h3>
                            <p>Framework for Css</p>
                        </a></li>
                    </ul>
                    <div className="copyright">
                        <p>Some copyright text</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}