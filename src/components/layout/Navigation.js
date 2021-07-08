import { HashLink } from 'react-router-hash-link';

// const Navigation = () => {
function Navigation() {
  return (
    <div>
        <HashLink to="/#resume">Coach Adam</HashLink>
         | 
        <HashLink to={{hash: "#sign-up"}}>Sign Up</HashLink>
    </div>  
  );
}

export default Navigation;