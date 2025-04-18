import type {
  RootParams,
  OperatorParams,
  OperatorVisitor,
  RouteParams,
} from "../types/OperatorTypes";

/**
 * OpenApiBuilder is a completely functional DSL for creating elegant OpenAPI definitions in pure TypeScript.
 *
 * Decouples two key points of Web API Design:
 *
 * Route defining
 * Schema defining
 */
export class OpenApiBuilder {

  public readonly metadata?: Partial<RootParams>;
  public readonly routes?: Partial<RouteParams>;

  public constructor(
    metadata?: Partial<RootParams>,
    routes?: Partial<RouteParams>,
  ) {
    if (this.metadata) {
      this.metadata = Object.assign(this.metadata, metadata);
    } else {
      this.metadata = metadata;
    }

    if (this.routes) {
      this.routes = Object.assign(this.routes, routes);
    } else {
      this.routes = routes;
    }
  }

  /**
   * Adds the specified OPENAPI schema, metadata, or route to this OpenAPIBuilder
   */
  public accept(operator: OperatorVisitor<OperatorParams>): OpenApiBuilder {
    return operator.operate(this);
  }

  /**
   * Generates a fully fledged OpenApi Documentation from this OpenApiBuilder.
   */
  public toOpenApiDocument(route: string): void {}

  /**
   * Generates complete Zod validation schemas based off this OpenApiBuilder.
   */
  public toZodTypes(route: string): void {}
}
