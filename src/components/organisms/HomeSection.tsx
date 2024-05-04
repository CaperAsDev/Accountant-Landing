interface HomeSectionProps {
  children: React.ReactNode
  className?: string
}

function HomeSection({ children, className = 'bg-ligth-0' }: HomeSectionProps) {
  return (
    <section className={`w-full h-fit p-5 ${className}`} >
      {children}
    </section>
  );
}

export default HomeSection;
