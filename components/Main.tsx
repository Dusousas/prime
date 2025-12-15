import { FaInstagramSquare } from "react-icons/fa";

export default function Main() {
  return (
    <>
      <section id="home" className="bgMain relative">
        <div className="absolute inset-0 bg-black/60" />

        <div className="maxW relative z-10 flex flex-col justify-center h-full">
          {/* >= xl1: 900px | altura <= 868px: força w-full */}
          <div className="w-full xl1:w-[900px] h868:w-full">
            <p className="uppercase font-Roboto text-AmareloP font-medium tracking-wider text-center xl1:text-left xl1:text-xl h868:text-center">
              Lorem ipsum dolor sit amet consectetur
            </p>

            <h1 className="font-Over font-bold text-white mt-4 text-center text-4xl xl1:text-left xl1:text-7xl h868:text-center">
              Build Your Perfect Body And Healthy Growth
            </h1>

            <p className="mt-4 text-white text-center xl1:text-left xl1:text-xl h868:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              cumque reiciendis illo voluptas harum debitis minus iusto
              recusandae sint perferendis inventore, eaque animi blanditiis!
            </p>

            <div className="mt-8 flex justify-center xl1:justify-start h868:justify-center">
              <a
                href=""
                className="bg-AmareloP text-black uppercase px-8 py-4 font-semibold hover:bg-black hover:text-AmareloP transition-colors duration-300"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </div>

        <article className="bg-AmareloP absolute bottom-0 right-0 panel2 hidden xl1:block">
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
