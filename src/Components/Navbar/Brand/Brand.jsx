import  React  from 'react';
import { Link } from "react-router-dom";
export const Brand = React.memo(() =>{
    return(
        <Link className="navbar-brand" to={'/'}>
        <img src='gs://react-2023-73a32.appspot.com/img/logo-ampersand.svg' alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
        </Link>
    );
    }
)