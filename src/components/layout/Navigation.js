import './Navigation.css';
import { HashLink } from 'react-router-hash-link';

function Navigation() {
  return (
    <div className="Navigation">
        <HashLink className="HashLink" to="/#resume">Coach Adam</HashLink>
        <HashLink className="HashLink" to="/#signUp">Sign Up</HashLink>
    </div>  
  );
}

export default Navigation;