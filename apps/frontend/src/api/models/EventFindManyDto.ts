/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EventFindManyDto = {
    /**
     * Filter by event name
     */
    name?: Record<string, any>;
    /**
     * Filter by event city
     */
    city?: Record<string, any>;
    /**
     * Filter by event date
     */
    date?: Record<string, any>;
    /**
     * Filter by event type
     */
    type?: Record<string, any>;
    /**
     * Filter by event lecturers
     */
    lecturers?: Record<string, any>;
    /**
     * Allow filtering by multiple conditions
     */
    AND?: Record<string, any>;
    /**
     * Allow filtering by multiple conditions with OR
     */
    OR?: Array<Record<string, any>>;
    /**
     * Allow filtering by multiple conditions with NOT
     */
    NOT?: Array<Record<string, any>>;
};

