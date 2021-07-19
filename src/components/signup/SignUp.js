import './SignUp.css';
import SignUpLink from './SignUpLink';
import coach from './coach.png';
import test from './test.png';
import train from './train.png';

function SignUp() {
    return (
        <div id="signUp" className="SignUp">
            <SignUpLink title="Test" img={test}/>
            <SignUpLink title="Coach" img={coach}/>
            <SignUpLink title="Train" img={train}/>
        </div>
    );
}

export default SignUp
