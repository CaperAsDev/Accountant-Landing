interface AnchorProps {
  href: string
  text: string
  children: React.ReactNode
}

function Anchor({ href, text, children }: AnchorProps) {
  return (
    <a href={href} className="flex items-center gap-2">
      {children}
      {text}
    </a>
  );
}

export default Anchor;
