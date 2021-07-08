import { HashLink } from 'react-router-hash-link';

// const Navigation = () => {
function Navigation() {
  return (
    <div>
        <HashLink to="/#home">Home</HashLink>
        <br /> 
        <HashLink to="/#resume">Coach Adam</HashLink>
        <br /> 
        <HashLink to={{hash: "#sign-up"}}>Sign Up</HashLink>
    </div>  
  );
}

export default Navigation;