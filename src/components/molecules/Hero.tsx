function Hero() {
  return (
    <section className="relative">
      <div className="absolute top-0 z-10 p-10 w-full h-full">
        <header className="text-white font-bold text-xl">Titulo del Hero</header>
        <p className="text-white">Parrafo de Hero</p>
      </div>
      <picture className="relative">
        <div className="absolute w-full h-full bg-violet-900 bg-opacity-40"></div>
        <img src="https://st4.depositphotos.com/4242891/26607/i/450/depositphotos_266072866-stock-photo-panoramic-aerial-view-of-downtown.jpg" alt="Hero Image" />
      </picture>
    </section>
  );
}

export default Hero;
