import { describe, beforeAll, it, expect } from "bun:test";
import { OpenApiBuilder } from "../../src/core/OpenApiBuilder";
import { RootVisitor } from "../../src/core/OpenApiOperator";

describe("Metadata tests for OpenAPIBuilder class.", () => {
  let apiBuilder: OpenApiBuilder;

  beforeAll(() => {
    apiBuilder = new OpenApiBuilder();
  });

  it("OpenApiBuilder immutability tests with metadata visitor", () => {
    // Arrange
    const infoObject = {
        title: "beginningMetadata",
        version: "1.0.0",
        summary: "Hello",
        description: "Best Api",
        license: {
          name: "Stone Liu",
          identifier: "Something",
        },
      }
    const openApiVersion = "3.1.1"
    const metadata = new RootVisitor()
      .with("info", infoObject )
      .with("openApiVersion", openApiVersion);

    // Act
    const newBuilder = apiBuilder.accept(metadata);

    // Assert that the OpenApiBuilder is Immutable
    expect(apiBuilder.metadata).toBeUndefined();
    expect(newBuilder.metadata).not.toBeUndefined();

    // Arrange
    const infoMetadata = new RootVisitor().with("openApiVersion", "3.1.1")

    // Act
    const adjustedBuilder = newBuilder.accept(infoMetadata)

    // Assert
    expect(adjustedBuilder.metadata).not.toBeUndefined()
    expect(adjustedBuilder.metadata?.info).toEqual(infoObject)
    expect(adjustedBuilder.metadata?.openApiVersion).toBe("3.1.1")
  });
});
