import './Navigation.css';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import SignUpModal from '../signup/SignUpModal';

function Navigation() {
  const [showModal, setshowModal] = useState();

  const escFunction = (event) => {
    if(showModal && event.keyCode === 27) {
      setshowModal(!showModal)
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  return (
    <div className="Navigation">
        <HashLink className="HashLink" to="/#resume">Coach Adam</HashLink>
        <div className="HashLink" onClick={() => setshowModal(!showModal)}>Sign Up</div>
        {showModal &&
          <SignUpModal showModal={showModal} toggleModal={setshowModal}/>
        }
    </div>  
  );
}

export default Navigation;