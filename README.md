# Aprende TDD (Test Driven Development)

_Introducción al TDD (Test Driven Development), el desarrollo de software guiado a base de pruebas. Empezamos con ejemplos básicos y terminamos usando TDD para construir una calculadora con React._
https://www.youtube.com/watch?v=_t9l2TwGioc

## Comenzando 🚀

### Herramientas a instalar 🧰

Vitest -> https://vitest.dev

```
# Framework para relisar los test
npm install -D vitest

# Crear Package.json
np init -y

#Instalar React
npm instal react react-dom -E

#Vite para React
npm install @vitejs/plugin-react -D

# Renderiza elementos de React
npm install @testing-library/react -D

#Para emular el navegador
npm install happy-dom -D

#Reglas para el linter para derectar errores y fallos
npm install standard -D
```
### Configuración ⚙️

Agrergar en el **package.json**
```
"eslintConfig": {
  "extend": "./node_modules/standard/eslintrc.json"
},
"scripts": {
  "dev": "vite",
  "test": "vitest",
  "coverage": "vitest run --coverage"
}
```

Crear archivo **vite.config.js** para configurar que Vite soporte React
```
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: { //<-- config de Vitest
    environment: 'happy-dom'
  }
})
```

## Ejecutando las pruebas 📋
```
#Ejecución de los test
npm run test

#Nos muenstra el procentaje de covertura de los test
npm run coverage
```

## Ejecutando la App 🕹️
```
#Ejecución con Vite
npm run dev
```


