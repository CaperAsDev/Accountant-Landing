interface HomeSectionProps {
  children: React.ReactNode
  className?: string
}

function HomeSection({ children, className = 'bg-ligth-0' }: HomeSectionProps) {
  return (
    <section className={`relative w-full h-fit px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 grid place-items-center last:pb-10 ${className}`} >
      {children}
    </section>
  );
}

export default HomeSection;
