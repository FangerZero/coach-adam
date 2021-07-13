import './SignUpLink.css';

function SignUpLink(props) {
    let {title, img} = props
    return (
        <div className="SignUpLink">
            <img src={img} alt={title} />
            <span className="SignUpLink-Title">{title}</span>
        </div>
    );
}

export default SignUpLink