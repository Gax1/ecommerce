import { render, screen, waitFor } from "@testing-library/react";
import { mockedWrapper, Wrapper } from "../../test-utils/Wrapper/Wrapper";
import PhonesPage from "./PhonesPage";
import userEvent from "@testing-library/user-event";

describe("Given a PhonesPage component", () => {
  const inputTestId = "search-input";
  describe("When rendered", () => {
    test("Then it should show cards, the search bar and the pagination buttons", () => {
      const cardTitleText = "TEST-BRAND";
      const plusTestId = "button-plus";
      const minusTestId = "button-minus";

      render(<PhonesPage />, { wrapper: mockedWrapper });

      const cardTitle = screen.getAllByRole("heading", { name: cardTitleText });
      const input = screen.getByTestId(inputTestId);
      const minusIcon = screen.getByTestId(minusTestId);
      const plusIcon = screen.getByTestId(plusTestId);

      expect(cardTitle[0]).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(minusIcon).toBeInTheDocument();
      expect(plusIcon).toBeInTheDocument();
    });
  });
  describe("When rendered and searched without any coincidence", () => {
    test("Then it should show a string of there was no match", async () => {
      const searchPatter = "j";
      const noMatch = "Not found any match";

      render(<PhonesPage />, { wrapper: Wrapper });

      const input = screen.getByTestId(inputTestId);
      await userEvent.type(input, searchPatter);
      const stringNoMatch = screen.getByText(noMatch);

      await waitFor(() => {
        expect(stringNoMatch).toBeInTheDocument();
      });
    });
  });
});
