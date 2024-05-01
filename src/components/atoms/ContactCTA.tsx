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
    className={`flex place-items-center gap-2 p-1 selection:${className}`}
    onClick={buttonHandler}
    >
      {children}
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-xs">{footer}</p>
      </div>
    </button>
  );
}

export default ContactCTA;
