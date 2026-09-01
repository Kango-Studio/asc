export const HeroVideo = () => {
  return (
    <section
      id="home"
      className="hero-video-shell relative w-full overflow-hidden bg-black"
      aria-label="Apresentação da ASC Assessoria Contábil"
    >
      <video
        className="hero-video absolute inset-0 block h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/videos/mobile.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source src="/videos/site.mp4" type="video/mp4" />
      </video>
    </section>
  );
};
