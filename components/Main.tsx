import { FaInstagramSquare } from "react-icons/fa";

export default function Main() {
  return (
    <>
      <section className="bgMain relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="maxW relative z-10 flex flex-col justify-center h-full">
          <div className="lg:w-[900px]">
            <p className="uppercase font-Roboto text-xl text-AmareloP font-medium tracking-wider">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <h1 className="font-Over font-bold text-7xl text-white mt-4">
              Build Your Perfect Body And Healthy Growth
            </h1>
            <p className="mt-4 text-white text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              cumque reiciendis illo voluptas harum debitis minus iusto
              recusandae sint perferendis inventore, eaque animi blanditiis!
            </p>

            <div className="mt-8">
              <a
                href=""
                className="bg-AmareloP text-black px-8 py-4 font-semibold hover:bg-black hover:text-AmareloP transition-colors duration-300"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
        <article className="bg-AmareloP absolute bottom-0 right-0 panel2">
          <div className="z-10 absolute bottom-0 right-0">
            <FaInstagramSquare className="text-black text-3xl" />
            <FaInstagramSquare className="text-black text-3xl" />
            <FaInstagramSquare className="text-black text-3xl" />

          </div>
        </article>
      </section>
    </>
  );
}
