# React + Vite

use `npm create vite@latest ` to create react app
go to the directory `cd payments-website`
run `npm install` to install dependencies

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
```
    npm install -D tailwindcss postcss autoprefixer

    npx tailwindcss init -p 
```
Add the paths to all of your template files in your tailwind.config.js file.

```
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {}
    },
    plugins: [],
    }
```


Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

run the app on localhost using `npm run dev`