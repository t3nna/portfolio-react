import React from 'react';
import {Link} from "react-router-dom";


function PathNavigation({path}) {

    return (
        <div className={'path-navigation'}>
            <Link to={'/'} className={'path-navigation__index'}>Index</Link>
            {/*<BsChevronRight className={'path-navigation__icon'}/>*/}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={'path-navigation__icon'}>
                <path fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"/>
            </svg>


            <div className={'path-navigation__dynamic | fw-bold'}>{path}</div>
        </div>
    );
}

export default PathNavigation;