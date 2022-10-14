import { render, screen } from "@testing-library/react";
import { cellphonesTestList } from "../../test-utils/utils/test-variables";
import ImageComponent from "./ImageComponent";

describe("Given an Image Component", () => {
  describe("When rendered", () => {
    test("Then it should show an image", () => {
      render(<ImageComponent phone={cellphonesTestList[0]} />);

      const image = screen.getByRole("img", { name: "test-model phone" });

      expect(image).toBeInTheDocument();
    });
  });
});
