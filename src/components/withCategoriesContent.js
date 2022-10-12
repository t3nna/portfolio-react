import React from 'react';
import {useLocation} from "react-router-dom";


const withCategoriesContent = (Component) =>
    (props) => {
        const location = useLocation()

        let path = location.pathname
                .split('/');
        // path[path.length-1].log
        path = path[path.length-1]
        console.log(path)
        if (path === 'backpack'){
            return <Component {...props} filter={'backpack'}/>
        }
        if (path === 'desk'){
            return <Component {...props} filter={'desk'}/>
        }
        if (path === 'computing'){
            return <Component {...props} filter={'computing'}/>
        }




        return <Component {...props}/>;
    }

export default withCategoriesContent;