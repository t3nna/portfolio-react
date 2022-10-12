import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function NotFound(props) {
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/')
        }, 1500)
        return () => {
            clearTimeout(timer)
        };
    }, []);

    return (
        <h1 className={'fs-primary-heading'}>Not found <span>404</span></h1>
    );
}

export default NotFound;

