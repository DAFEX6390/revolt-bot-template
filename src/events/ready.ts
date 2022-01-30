import CustomClient from "../client"
import { Event } from "../interfaces/Event"

export const event: Event = {
    name: "ready",
    run: (client: CustomClient) => {
        console.log(`Connected to Revolt as @${client.user?.username}`);
    }
}