// components/HeroSection.jsx
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center bg-black text-white p-8 lg:py-16 lg:px-24">
            {/* Conteúdo textual */}
            <div className="text-center lg:text-left lg:w-1/2 space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    HI, I AM <br /> ROBERT GARCIA.
                </h1>
                <p className="text-sm lg:text-base text-gray-400">
                    A Sydney based front-end developer passionate about building
                    accessible and user friendly websites.
                </p>
                {/* Botões e ícones */}
                <div className="flex justify-center lg:justify-start items-center space-x-4">
                    <button className="bg-amber-300 text-black px-6 py-2 rounded-full flex items-center gap-2 font-bold hover:bg-lime-600">
                        CONTACT ME
                        <div className="bg-black w-1.5 h-1.5 rounded-full ml-1"></div>
                    </button>
                    <Link
                        href="#"
                        className="bg-gray-800 blac p-2 rounded-full w-max h-max"
                        aria-label="LinkedIn"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-white"
                        >
                            <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.223.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zm-13.846 20.452H5.62v-9.418h2.762v9.418zm-1.368-10.878h-.017c-.926 0-1.527-.64-1.527-1.441 0-.817.618-1.442 1.561-1.442.945 0 1.528.625 1.544 1.442 0 .801-.615 1.441-1.561 1.441zm11.281 10.878h-2.762v-5.04c0-1.29-.466-2.166-1.638-2.166-.892 0-1.422.602-1.656 1.183-.085.208-.107.498-.107.79v5.233H9.97s.036-8.485 0-9.418h2.762v1.334c.367-.565 1.022-1.371 2.484-1.371 1.813 0 3.176 1.173 3.176 3.692v5.763z" />
                        </svg>
                    </Link>
                    <a
                        href="#"
                        className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
                        aria-label="GitHub"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.599.111.82-.26.82-.579 0-.287-.01-1.044-.015-2.049-3.338.725-4.042-1.61-4.042-1.61-.545-1.382-1.329-1.749-1.329-1.749-1.086-.744.083-.729.083-.729 1.202.085 1.835 1.234 1.835 1.234 1.067 1.831 2.8 1.302 3.486.997.107-.772.417-1.302.76-1.6-2.665-.303-5.466-1.334-5.466-5.933 0-1.311.469-2.382 1.234-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.41 11.41 0 013.004-.404c1.018.005 2.042.137 3.005.404 2.291-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.767.839 1.234 1.91 1.234 3.221 0 4.61-2.804 5.627-5.476 5.922.429.37.812 1.096.812 2.211 0 1.596-.015 2.884-.015 3.276 0 .321.22.694.827.577C20.565 21.798 24 17.301 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Imagem */}
            <div className="lg:w-1/2 mb-1.5">
                <div className="rounded-lg overflow-hidden bg-gray-800 p-4">
                    <Image
                        src="/robert-garcia.jpg"
                        alt="Robert Garcia"
                        width={300}
                        height={400}
                        className="rounded-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}