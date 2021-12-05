import "../styles/SectionWrapper.scss";

function SectionWrapper({
  className,
  title,
  reverse = false,
  children,
  ...args
}) {
  return (
    <section
      className={`section-wrapper ${className} ${reverse ? "reverse" : ""}`}
      {...args}
    >
      {title && <h1 className="title">{title}</h1>}
      {children}
    </section>
  );
}

export default SectionWrapper;
