import { applyDecorators, HttpStatus } from "@nestjs/common";

import { ApiResponsesOptions } from "../api-responses/api-responses-options.types";
import { ApiResponses } from "../api-responses/api-responses.decorator";

export function ApiPatch({
	type,
	successResponse,
	errorResponses,
}: ApiResponsesOptions) {
	const ApiResponsesDecorator = ApiResponses({
		type,
		successResponse: successResponse ?? HttpStatus.OK,
		errorResponses,
	});

	return applyDecorators(ApiResponsesDecorator);
}
