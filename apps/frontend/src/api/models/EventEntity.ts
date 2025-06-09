/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventTypeEntity } from './EventTypeEntity';
import type { LecturerEntity } from './LecturerEntity';
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
     * The unique identifier for the event type of this event
     */
    typeId: string;
    /**
     * The event type of the event
     */
    type: EventTypeEntity;
    /**
     * The lecturers of this event
     */
    lecturers: Array<LecturerEntity>;
};

