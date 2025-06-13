/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
       
        "primary": "#3B71CA",  //=> 변경가능
      },
      spacing: {
        "login-container": "400px",
      },
      borderRadius: {
        login: "8px",
      },
      boxShadow: {
        login: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

