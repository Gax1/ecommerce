import { render, screen, waitFor } from "@testing-library/react";
import Selectors from "./Selectors";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import userEvent from "@testing-library/user-event";

describe("Given a Selectors component", () => {
  const inputTestId = "checkbox-input";
  const options = [
    { name: "test-name1", code: 2000 },
    { name: "test-name2", code: 1000 },
  ];
  describe("When rendered", () => {
    test("Then it should show an input and a label", () => {
      render(<Selectors options={options} setOption={() => {}} />, {
        wrapper: Wrapper,
      });

      const input = screen.getAllByTestId(inputTestId);
      const labelOne = screen.getByText(options[0].name);
      const labelTwo = screen.getByText(options[1].name);

      expect(input.length === 2).toBeTruthy();
      expect(labelOne).toBeInTheDocument();
      expect(labelTwo).toBeInTheDocument();
    });
  });
  describe("When the user click in the checkbox", () => {
    test("Then it should call the onClick method", async () => {
      const onChangeMock = jest.fn();
      render(<Selectors options={options} setOption={() => {}} />, {
        wrapper: Wrapper,
      });
      const input = screen.getAllByTestId(inputTestId);
      input[0].onchange = onChangeMock;

      await userEvent.click(input[0]);

      await waitFor(() => {
        expect(onChangeMock).toHaveBeenCalled();
      });
    });
  });
});
