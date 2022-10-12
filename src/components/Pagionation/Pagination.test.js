import { render, screen, waitFor } from "@testing-library/react";
import Pagination from "./Pagination";
import Wrapper from "../../test-utils/Wrapper/Wrapper";
import userEvent from "@testing-library/user-event";

describe("Given a Pagination component", () => {
  const plusTestId = "button-plus";
  const minusTestId = "button-minus";
  const cardsNumbers = 0;
  describe("When rendered", () => {
    test("Then it should show two icons and three numbers", () => {
      const numbersDisplay = [0, 1, 2];

      render(<Pagination cards={cardsNumbers} setCards={() => {}} />, {
        wrapper: Wrapper,
      });

      const plusIcon = screen.getByTestId(plusTestId);
      const minusIcon = screen.getByTestId(minusTestId);
      const pages = [];
      numbersDisplay.forEach((number) => pages.push(screen.getByText(number)));

      expect(plusIcon).toBeInTheDocument();
      expect(minusIcon).toBeInTheDocument();
      pages.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
  describe("When the user clicks on the icon", () => {
    test("Then it should call the onClick function", async () => {
      const mockedOnClick = jest.fn();

      render(<Pagination cards={cardsNumbers} setCards={() => {}} />, {
        wrapper: Wrapper,
      });

      const plusIcon = screen.getByTestId(plusTestId);
      const minusIcon = screen.getByTestId(minusTestId);

      minusIcon.onclick = mockedOnClick;
      plusIcon.onclick = mockedOnClick;

      await userEvent.click(plusIcon);
      await userEvent.click(minusIcon);

      await waitFor(() => {
        expect(mockedOnClick).toHaveBeenCalledTimes(2);
      });
    });
  });
});
