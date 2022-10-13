import { render, screen, waitFor } from "@testing-library/react";
import SelectProduct from "./SelectProduct";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { cellphoneDetailTest } from "../../test-utils/utils/test-variables";
import userEvent from "@testing-library/user-event";

describe("Given a select prodcut component", () => {
  const phone = {
    id: "id",
    options: cellphoneDetailTest[0].options,
  };
  const buttonText = "Add to Cart";
  describe("When rendered", () => {
    test("Then it should show four inputs and a button", () => {
      const inputTestId = "checkbox-input";

      render(<SelectProduct phone={phone} />, { wrapper: Wrapper });

      const button = screen.getByRole("button", { name: buttonText });
      const inputs = screen.getAllByTestId(inputTestId);

      expect(inputs.length).toStrictEqual(4);
      expect(button).toBeInTheDocument();
    });
  });
  describe("When the user clicks on the button", () => {
    test("Then it should call the onSubmit method of the form", async () => {
      const formTestId = "form-checkbox";
      const mockOnSubmit = jest.fn();

      render(<SelectProduct phone={phone} />, { wrapper: Wrapper });

      const button = screen.getByRole("button", { name: buttonText });
      const form = screen.getByTestId(formTestId);
      form.onsubmit = mockOnSubmit;

      await userEvent.click(button);

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalled();
      });
    });
  });
});
