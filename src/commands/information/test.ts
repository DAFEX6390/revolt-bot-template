import { Message } from "revolt.js/dist/maps/Messages";
import CustomClient from "../../client";
import { Command } from "../../interfaces/Command";

export const command: Command = {
    name: "test",
    alias: [],
    category: "information",
    developer: true,
    run: async (client: CustomClient, message: Message, args: string[]) => {
        return message.channel?.sendMessage("It works!");
    }
}