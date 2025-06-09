/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An event object
 */
export type EventEntity = {
    /**
     * The unique identifier for the event
     */
    id: string;
    /**
     * The name of the event
     */
    name: string;
    /**
     * The city where the event is held
     */
    city: string;
    /**
     * The date and time when the event starts
     */
    date: string;
    /**
     * The event type of the event
     */
    type: string;
    /**
     * The lecturers of this event
     */
    lecturers: Array<string>;
};

