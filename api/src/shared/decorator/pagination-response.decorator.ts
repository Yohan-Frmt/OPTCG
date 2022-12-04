import { applyDecorators, Type } from "@nestjs/common";
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from "@nestjs/swagger";
import { PaginationDto } from "../pagination/pagination.dto";

export const PaginationResponse = <TModel extends Type>(
  model: TModel
) =>
  applyDecorators(
    ApiExtraModels(PaginationDto),
    ApiOkResponse({
      description: "Successfully received model list",
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginationDto) },
          {
            properties: {
              data: {
                type: "array",
                items: { $ref: getSchemaPath(model) }
              }
            }
          }
        ]
      }
    })
  );
