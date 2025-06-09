/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEventTypeDto } from '../models/CreateEventTypeDto';
import type { EventTypeEntity } from '../models/EventTypeEntity';
import type { UpdateEventTypeDto } from '../models/UpdateEventTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EventTypesService {
    /**
     * Create a new event type
     * @param requestBody
     * @returns EventTypeEntity
     * @throws ApiError
     */
    public static eventTypesControllerCreate(
        requestBody: CreateEventTypeDto,
    ): CancelablePromise<EventTypeEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event-types',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data was provided.`,
            },
        });
    }
    /**
     * Get all event types
     * @returns EventTypeEntity
     * @throws ApiError
     */
    public static eventTypesControllerFindAll(): CancelablePromise<Array<EventTypeEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event-types',
        });
    }
    /**
     * Get an event type by ID
     * @param id
     * @returns EventTypeEntity
     * @throws ApiError
     */
    public static eventTypesControllerFindOne(
        id: string,
    ): CancelablePromise<EventTypeEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event-types/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid data was provided.`,
                404: `A resource was not found.`,
            },
        });
    }
    /**
     * Update an event type by ID
     * @param id
     * @param requestBody
     * @returns EventTypeEntity
     * @throws ApiError
     */
    public static eventTypesControllerUpdate(
        id: string,
        requestBody: UpdateEventTypeDto,
    ): CancelablePromise<EventTypeEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/event-types/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data was provided.`,
                404: `A resource was not found.`,
            },
        });
    }
    /**
     * Delete an event type by ID
     * @param id
     * @returns EventTypeEntity
     * @throws ApiError
     */
    public static eventTypesControllerRemove(
        id: string,
    ): CancelablePromise<EventTypeEntity> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/event-types/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid data was provided.`,
                404: `A resource was not found.`,
            },
        });
    }
}
