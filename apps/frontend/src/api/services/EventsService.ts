/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEventDto } from '../models/CreateEventDto';
import type { EventEntity } from '../models/EventEntity';
import type { EventFindManyDto } from '../models/EventFindManyDto';
import type { UpdateEventDto } from '../models/UpdateEventDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EventsService {
    /**
     * Create a new event
     * @param requestBody
     * @returns EventEntity
     * @throws ApiError
     */
    public static eventsControllerCreate(
        requestBody: CreateEventDto,
    ): CancelablePromise<EventEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/events',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data was provided.`,
                404: `A resource was not found.`,
            },
        });
    }
    /**
     * Get all events with a specific filter
     * @param requestBody
     * @returns EventEntity
     * @throws ApiError
     */
    public static eventsControllerFindAllFiltered(
        requestBody: EventFindManyDto,
    ): CancelablePromise<Array<EventEntity>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/events/filtered',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data was provided.`,
            },
        });
    }
    /**
     * Get an event by ID
     * @param id
     * @returns EventEntity
     * @throws ApiError
     */
    public static eventsControllerFindOne(
        id: string,
    ): CancelablePromise<EventEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/{id}',
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
     * Update an event by ID
     * @param id
     * @param requestBody
     * @returns EventEntity
     * @throws ApiError
     */
    public static eventsControllerUpdate(
        id: string,
        requestBody: UpdateEventDto,
    ): CancelablePromise<EventEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/events/{id}',
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
     * Delete an event by ID
     * @param id
     * @returns EventEntity
     * @throws ApiError
     */
    public static eventsControllerRemove(
        id: string,
    ): CancelablePromise<EventEntity> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/events/{id}',
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
