// Will be modal that has proper information based on the kind of sign up. 
import './SignUpModal.css';

function SignUpModal(props) {
    return (
        <div className="SignUpModal">
            <div className="SignUpForm">
                <div className={"CloseModal"} onClick={() => props.toggleModal(!props.showModal)}>X</div>
                Form in Progress
            </div>
        </div>
    );
}

export default SignUpModal
