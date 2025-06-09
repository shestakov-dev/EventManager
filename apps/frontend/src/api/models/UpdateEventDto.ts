/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The data required to update an event
 */
export type UpdateEventDto = {
    /**
     * The name of the event
     */
    name?: string;
    /**
     * The city where the event is held
     */
    city?: string;
    /**
     * The date and time when the event starts
     */
    date?: string;
    /**
     * The unique identifier for the event type of this event
     */
    typeId?: string;
    /**
     * The unique identifiers for the lecturers of this event (at least one is required)
     */
    lecturerIds?: Array<string>;
};

