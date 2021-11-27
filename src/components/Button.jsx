import "../styles/Button.scss";

function Button({ className, children, click }) {
  return (
    <button className={`btn ${className}`} onClick={click}>
      {children}
    </button>
  );
}

export default Button;
