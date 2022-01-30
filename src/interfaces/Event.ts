import CustomClient from "../client";

interface EventRun {
    (client: CustomClient, ...args: any[]): any;
}

export interface Event {
    name: string,
    run: EventRun;
}