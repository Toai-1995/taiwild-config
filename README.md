# taiwild-config
### create pakage.json
### install typescrip
```sh
npm install typescript
```
### install tsc (tsconfig.json)
```sh
npx tsc --init
```

### install taiwild
```sh
npx tailwindcss init
```

Configure your template paths
```sh
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS

```sh 
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start the Tailwind CLI build process

```sh
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Start using Tailwind in your HTML




