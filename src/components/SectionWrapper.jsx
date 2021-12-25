import "../styles/SectionWrapper.scss";

function SectionWrapper({
  children,
  className,
  reverse = false,
  title,
  ...args
}) {
  const sectionClassName = `section-wrapper ${className} ${
    reverse ? "reverse" : ""
  }`;

  return (
    <section className={sectionClassName} {...args}>
      {title ? <h1 className="title">{title}</h1> : null}
      {children}
    </section>
  );
}

export default SectionWrapper;
