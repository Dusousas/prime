import { FaInstagramSquare } from "react-icons/fa";

export default function Main() {
  return (
    <>
      <section className="bgMain relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="maxW relative z-10 flex flex-col justify-center h-full">
          <div className="lg:w-[900px]">
            <p className="uppercase font-Roboto text-AmareloP font-medium tracking-wider text-center lg:text-xl lg:text-left">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <h1 className="font-Over font-bold text-white mt-4 text-center text-4xl lg:text-left lg:text-7xl">
              Build Your Perfect Body And Healthy Growth
            </h1>
            <p className="mt-4 text-white text-center lg:text-xl lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              cumque reiciendis illo voluptas harum debitis minus iusto
              recusandae sint perferendis inventore, eaque animi blanditiis!
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href=""
                className="bg-AmareloP text-black px-8 py-4 font-semibold hover:bg-black hover:text-AmareloP transition-colors duration-300"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
        <article className="bg-AmareloP absolute bottom-0 right-0 panel2 hidden lg:block">
          <div className="z-10 absolute bottom-0 right-0 flex gap-4 w-full justify-center p-4">
            <FaInstagramSquare className="text-black text-3xl cursor-pointer" />
            <FaInstagramSquare className="text-black text-3xl cursor-pointer" />
            <FaInstagramSquare className="text-black text-3xl cursor-pointer" />

          </div>
        </article>
      </section>
    </>
  );
}
