import { render, screen } from "@testing-library/react";
import PhoneCard from "./PhoneCard";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { cellphonesTestList } from "../../test-utils/utils/test-variables";

describe("Given a PhoneCard component", () => {
  describe("When rendered", () => {
    test("Then it should show a title with the brand, a text with the model, the price and an image", () => {
      const titleText = "test-brand".toUpperCase();
      const modelText = "test-model";
      const priceText = "$test-price.00";
      const imageAlt = "test-brand phone";

      render(<PhoneCard phone={cellphonesTestList[0]} />, { wrapper: Wrapper });

      const title = screen.getByRole("heading", { name: titleText });
      const model = screen.getByText(modelText);
      const price = screen.getByText(priceText);
      const image = screen.getByRole("img", { name: imageAlt });

      expect(title).toBeInTheDocument();
      expect(model).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });
    test("Then when the price is not available it should show no stock", () => {
      const priceText = "No Stock";

      render(<PhoneCard phone={cellphonesTestList[1]} />, { wrapper: Wrapper });

      const noStock = screen.getByText(priceText);

      expect(noStock).toBeInTheDocument();
    });
  });
});
