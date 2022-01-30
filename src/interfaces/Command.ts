import { Message } from "revolt.js/dist/maps/Messages";
import CustomClient from "../client";

type CategoryType = "information" | "moderation";

interface CommandRun {
    (client: CustomClient, message: Message, args: string[]): any;
}

export interface Command {
    name: string;
    alias?: string[];
    category: CategoryType;
    description?: string;
    developer?: boolean;
    run: CommandRun;
}