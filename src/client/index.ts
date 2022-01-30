import { Client } from "revolt.js";
import config from "../config";
import { __dirname } from "../util";
import { Command } from "../interfaces/Command";

import fs from "fs";
import path from "path";

class CustomClient extends Client {
    public owner_ids = config.OWNER_IDS;

    public BOT_TOKEN = config.BOT_TOKEN;
    
    public prefix = config.PREFIX;

    public commands: Command[] = [];

    constructor (
        botToken: string|undefined=undefined, 
        ownerIds: string[]|undefined=undefined,
        prefix: string|undefined=undefined
    ) {
        super();

        if (botToken) {
            this.BOT_TOKEN = botToken;
        }

        if (ownerIds) {
            this.owner_ids = ownerIds;
        }

        if (prefix) {
            this.prefix;
        }
    }

    protected async installCommandsAndEvents() {

        // COMMANDS //
        const commandPath = path.join(__dirname, "..", "commands");

        for (let dirOrFile of fs.readdirSync(commandPath)) {
            if (fs.lstatSync(`${commandPath}/${dirOrFile}`).isDirectory()) {

                for (let file of fs.readdirSync(`${commandPath}/${dirOrFile}`)) {
                    if (file.endsWith(".js") || file.endsWith(".ts")) {
                        let { command } = await import(`../commands/${dirOrFile}/${file}`);

                        if (command) {
                            this.commands.push(command);
                        }
                    }
                }
            } else {
                let { command } = await import(`../commands/${dirOrFile}`);

                if (command) {
                    this.commands.push(command);
                }
            }
        }

        // EVENTS //
        const eventPath = path.join(__dirname, "..", "events");

        for (let file of fs.readdirSync(eventPath)) {
            if (file.endsWith(".js")) {
                try {
                    let { event } = await import(`../events/${file}`);

                    if (event) {
                        this.on(event.name, event.run.bind(null, this));
                    }
                } catch (e) {}
            }
        }
    }

    run() {
        this.installCommandsAndEvents();

        this.loginBot(this.BOT_TOKEN);
    }
}

export default CustomClient;