import { Message } from "revolt.js/dist/maps/Messages";
import CustomClient from "../client";
import { Event } from "../interfaces/Event";

export const event: Event = {
    name: "message",
    run: (client: CustomClient, message: Message) => {
        if (!message.content || message.author?.bot || !message.content.toString().startsWith(client.prefix)) return;

        const args = message.content.toString().slice(client.prefix.length).trim().split(/ +/g);

        const command = args.shift()?.toLowerCase() as string;

        let cmd = client.commands.find((e => e.name == command || e.alias && e.alias.includes(command)));

        if (cmd) {
            if (cmd.developer && !client.owner_ids.includes(message.author?._id as string)) {
                return message.reply("**Only my owner can use this command**")
            }
            try {
                cmd.run(client, message, args);
            } catch (e) {
                console.log(e);
                return message.reply("**An error occurred while executing the command**");
            }
        } else {
            return message.reply("**That command does not exist**");
        }
    }
}