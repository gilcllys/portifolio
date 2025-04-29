/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Adicione outros caminhos se necessário
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        socialmediaInner: "#D3E97A",
      },
      fontFamily: {
        body: ["Manrope", "sans-serif"],
        heading: ["Roboto", "sans-serif"], // Para cabeçalhos
        special: ["var(--font-special)"],
      },
    },
  },
  plugins: [],
};
