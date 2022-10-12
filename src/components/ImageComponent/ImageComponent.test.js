import { render, screen } from "@testing-library/react";
import ImageComponent from "./ImageComponent";

describe("Given an Image Component", () => {
  describe("When rendered", () => {
    test("Then it should show an image", () => {
      const model = "test-model";
      const imageUrl = "test-url";

      render(<ImageComponent img={imageUrl} model={model} />);

      const image = screen.getByRole("img", { name: "test-model phone" });

      expect(image).toBeInTheDocument();
    });
  });
});
