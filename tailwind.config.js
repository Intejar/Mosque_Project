/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/src/assets/images/home.png')",
        aboutImg: "url('/src/assets/images/about.png')",
        galleryImg: "url('/src/assets/images/gallery.png')",
        vlogImg: "url('/src/assets/images/vlog.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
