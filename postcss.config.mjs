/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {}, // This line requires autoprefixer to be installed
  },
};

export default config;
