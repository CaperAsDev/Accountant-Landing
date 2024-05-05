interface ContactCTAProps {
  title: string,
  footer: string,
  children: React.ReactElement
  className?: string
}

function ContactCTA({
  children, title, footer, className,
}: ContactCTAProps) {
  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  };
  return (
    <button
    className={`flex place-items-center gap-2 p-1 ${className}`}
    onClick={buttonHandler}
    >
      {children}
      <div>
        <p className="font-medium text-ligth-2">{title}</p>
        <p className="text-xs font-extralight text-ligth-2 ">{footer}</p>
      </div>
    </button>
  );
}

export default ContactCTA;
