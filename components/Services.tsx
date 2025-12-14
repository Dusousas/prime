type ServiceCard = {
  number: string; // ex: "01"
  title: string; // ex: "Avaliação Física"
  icon: string; // normal
  iconHover: string; // hover
};

export default function Services() {
  const cards: ServiceCard[] = [
    {
      number: "01",
      title: "Avaliação Física",
      icon: "/icons/icon1.png",
      iconHover: "/icons/icon1-black.png",
    },
    {
      number: "02",
      title: "Avaliação Física",
      icon: "/icons/icon1.png",
      iconHover: "/icons/icon1-black.png",
    },
    {
      number: "03",
      title: "Avaliação Física",
      icon: "/icons/icon1.png",
      iconHover: "/icons/icon1-black.png",
    },
    {
      number: "04",
      title: "Avaliação Física",
      icon: "/icons/icon1.png",
      iconHover: "/icons/icon1-black.png",
    },
    {
      number: "05",
      title: "Avaliação Física",
      icon: "/icons/icon1.png",
      iconHover: "/icons/icon1-black.png",
    },
    {
      number: "06",
      title: "Avaliação Física",
      icon: "/icons/icon1.png",
      iconHover: "/icons/icon1-black.png",
    },
  ];

  return (
    <>
      <section className="py-20 relative">
        <img
          className="absolute w-[340px] top-8 lg:left-55 -z-10"
          src="/iconservice.png"
          alt=""
        />

        <div className="maxW flex flex-col items-center justify-center lg:flex-row">
          <article className="lg:w-1/2">
            {/* FOTO COM TRIANGULOS E CORTE */}
            <img className="w-[80%] z-10 mx-auto" src="/service-img1.png" alt="" />
          </article>

          <article className="lg:w-1/2">
            <h3 className="font-Roboto uppercase text-AmareloP text-xl font-medium text-center mt-10 lg:text-left lg:mt-0">
              Nossos diferenciais
            </h3>
            <h2 className="font-Over font-black text-black mt-4 text-center text-4xl lg:text-left lg:text-5xl">
              Giving Good Health To Good People.
            </h2>
            <p className="mt-4 text-[#444444] font-Roboto text-center lg:text-xl lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              cumque reiciendis illo voluptas harum debitis minus iusto! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Alias
              voluptatum provident vitae. Veritatis, impedit temporibus commodi
              est minus culpa ut!
            </p>
            <p className="mt-2 text-[#444444] font-Roboto text-center lg:text-xl lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              cumque reiciendis illo voluptas harum debitis minus iusto! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Alias
              voluptatum provident vitae. Veritatis, impedit temporibus commodi
              est minus culpa ut!
            </p>

            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href=""
                className="bg-AmareloP text-black uppercase px-8 py-4 font-semibold hover:bg-black hover:text-AmareloP transition-colors duration-300"
              >
                Quero ser Prime
              </a>
            </div>
          </article>
        </div>

        {/* CARDS (DINÂMICOS) */}
        <div className="maxW">
          <article className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-20">
            {cards.map((card) => (
              <div
                key={card.number}
                className="
                  relative group
                  outline outline-[#e6e6e6]
                  py-4
                  lg:py-10 px-8
                  flex justify-center gap-8
                  transition-colors duration-300
                  hover:bg-AmareloP
                "
              >
                <h4 className="absolute top-2 right-2 font-Over font-bold text-xl text-[#8a8a8a] transition-colors duration-300 group-hover:text-white">
                  {card.number}
                </h4>

                <div className="relative w-[64px] h-[64px] flex items-center">
                  {/* normal */}
                  <img
                    className="w-[64px] block group-hover:hidden"
                    src={card.icon}
                    alt={card.title}
                  />
                  {/* hover */}
                  <img
                    className="w-[64px] hidden group-hover:block"
                    src={card.iconHover}
                    alt={card.title}
                  />
                </div>

                <p
                  className="
                    flex items-center justify-center
                    text-xl font-Over tracking-wider uppercase font-bold
                    text-black
                    transition-colors duration-300
                    group-hover:text-white
                  "
                >
                  {card.title}
                </p>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
