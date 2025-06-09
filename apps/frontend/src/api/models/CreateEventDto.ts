/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The data required to create a new event
 */
export type CreateEventDto = {
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
     * The type of the event
     */
    type: string;
    /**
     * The lecturers of this event
     */
    lecturers: Array<string>;
};

