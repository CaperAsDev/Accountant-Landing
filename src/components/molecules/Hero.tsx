function Hero() {
  const baseUrl = import.meta.env.BASE_URL || '';
  // {`${baseUrl}`}
  return (
    <section className="relative w-full h-svh overflow-hidden">
      <div className="absolute top-0 z-10 p-10 w-full h-full">
        <header className="text-ligth-0 font-bold text-xl">Titulo del Hero</header>
        <p className="text-ligth-0">Parrafo de Hero</p>
      </div>
      <picture className="brightness-50 object-cover w-full h-full ">
        <source media="(min-width: 1000px)" srcSet={`${baseUrl}hero-l.jpg`} />
        <source media="(min-width: 700px)" srcSet={`${baseUrl}hero-m.jpg`} />
        <img src={`${baseUrl}hero-s.jpg`} alt="Hero Image" className="w-full h-full"/>
      </picture>
    </section>
  );
}

export default Hero;
