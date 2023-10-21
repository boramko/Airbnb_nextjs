npx create-next-app@latest . --typescript --eslint

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

create tailwind,.config.js add content 
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
