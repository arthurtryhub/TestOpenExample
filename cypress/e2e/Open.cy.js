import ExamplePage from "../page-object/examplePage";

describe("template spec", () => {
  it("passes", () => {
    ExamplePage.open();
    ExamplePage.validateUrlTitle();
  });
});
