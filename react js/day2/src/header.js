import { Link } from "react-router-dom";

function Header(){
    return (
        <>
        <Link to="./home">Home</Link> &nbsp;
        <Link to="./about">About</Link> &nbsp;
        <Link to="./contact">Contact</Link> &nbsp; 
        <Link to="./AllFacultyName">All Faculty design</Link> &nbsp; 
        <Link to="./Faculty10exp">fileted Faculty10exp</Link> &nbsp; 
        <Link to="./designf">all faculty details</Link> &nbsp; 
        </>
    );
 }

 export default Header;