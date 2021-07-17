import { HashLink } from 'react-router-hash-link';

function Navigation() {
  return (
    <div>
        <HashLink to="/#resume">Coach Adam</HashLink>
         | 
        Sign Up
    </div>  
  );
}

export default Navigation;