interface HomeSectionProps {
  children: React.ReactNode
}

function HomeSection({ children }: HomeSectionProps) {
  return (
    <section className="w-full h-fit bg-white p-5">
      {children}
    </section>
  );
}

export default HomeSection;
