# Revolt bot template
This is a revolt bot template very similar to a discord bot template.

this template includes a **command** and **event** handler

## Install
```sh
git glone https://github.com/DAFEX6390/revolt-bot-template.git

cd revolt-bot-template

npm install
```

## Configuration
Go to [src/config/index.ts](./src/config/index.ts) and set the config vars
```ts
export const BOT_TOKEN = ""; // BOT TOKEN
export const OWNER_IDS: string[] = []; // OWNER_IDS
export const PREFIX = "!";  // BOT PREFIX
```

or go to [src/index.ts](./src/index.ts) and add the params here
```ts
client = new CustomClient(
    "bot token",
    ["owner ids"],
    "bot prefix"
);
```

## Usage

### To build the program
```sh
npm run build
```

### To build and start the program
```sh
npm start
```

### To clean the code builded (default only works on linux)
```sh
npm run clean
```

# Info and help
If you need help you can consult the [Revolt API](https://revolt.js.org/) or you can go to their [support server](https://app.revolt.chat/invite/Testers).

If you found a bug, you can report it in the issues in this repository.