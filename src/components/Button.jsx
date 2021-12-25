import "../styles/Button.scss";

function Button({ children, className, click }) {
  return (
    <button className={`btn ${className}`} onClick={click}>
      {children}
    </button>
  );
}

export default Button;
