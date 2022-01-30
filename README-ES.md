# Revolt bot template
Este es un template de un bot de revolt muy similar a un template de un bot de discord

Este template incluye un manejador de comandos y de eventos

## Instalación
```sh
git glone https://github.com/DAFEX6390/revolt-bot-template.git

cd revolt-bot-template

npm install
```

## Configuración
Ve a [src/config/index.ts](./src/config/index.ts) y establece las variables de configuración
```ts
export const BOT_TOKEN = ""; // BOT TOKEN
export const OWNER_IDS: string[] = []; // OWNER_IDS
export const PREFIX = "!";  // BOT PREFIX
```

o ve a [src/index.ts](./src/index.ts) y añade los parametros aquí
```ts
client = new CustomClient(
    "bot token",
    ["owner ids"],
    "bot prefix"
);
```

## Uso

### Para construir el programa
```sh
npm run build
```

### Para contruir el programa y arrancarlo de una vez
```sh
npm start
```

### Para limpiar el codigo construido (por defecto solo funciona en linux)
```sh
npm run clean
```

# Información y ayuda
Si necesitas ayuda puedes consultar la [API de revolt](https://revolt.js.org/) o puedes dirigirte a su [support server](https://app.revolt.chat/invite/Testers).

Si encontraste un error puedes reportarlo en la sección de problemas de este repositorio.