/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateLecturerDto } from '../models/CreateLecturerDto';
import type { LecturerEntity } from '../models/LecturerEntity';
import type { UpdateLecturerDto } from '../models/UpdateLecturerDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LecturersService {
    /**
     * Create a new lecturer
     * @param requestBody
     * @returns LecturerEntity
     * @throws ApiError
     */
    public static lecturersControllerCreate(
        requestBody: CreateLecturerDto,
    ): CancelablePromise<LecturerEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lecturers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data was provided.`,
                409: `A unique constraint violation occurred.`,
            },
        });
    }
    /**
     * Get all lecturers
     * @returns LecturerEntity
     * @throws ApiError
     */
    public static lecturersControllerFindAll(): CancelablePromise<Array<LecturerEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lecturers',
        });
    }
    /**
     * Get a lecturer by ID
     * @param id
     * @returns LecturerEntity
     * @throws ApiError
     */
    public static lecturersControllerFindOne(
        id: string,
    ): CancelablePromise<LecturerEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lecturers/{id}',
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
     * Update a lecturer by ID
     * @param id
     * @param requestBody
     * @returns LecturerEntity
     * @throws ApiError
     */
    public static lecturersControllerUpdate(
        id: string,
        requestBody: UpdateLecturerDto,
    ): CancelablePromise<LecturerEntity> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/lecturers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid data was provided.`,
                404: `A resource was not found.`,
                409: `A unique constraint violation occurred.`,
            },
        });
    }
    /**
     * Delete a lecturer by ID
     * @param id
     * @returns LecturerEntity
     * @throws ApiError
     */
    public static lecturersControllerRemove(
        id: string,
    ): CancelablePromise<LecturerEntity> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lecturers/{id}',
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
