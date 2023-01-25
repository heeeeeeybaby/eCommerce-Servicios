import ampersandLogo from '../../../img/logo-ampersand.svg';
const Brand = () =>{
    return(
        <a className="navbar-brand" href="#">
        <img src={ampersandLogo} alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
        </a>
    );
}

export default Brand;