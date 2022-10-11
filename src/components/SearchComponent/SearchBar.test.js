import { render, screen, waitFor } from "@testing-library/react";
import SearchBar from "./SearchBar";
import Wrapper from "../../test-utils/Wrapper/Wrapper";
import userEvent from "@testing-library/user-event";
import { changeSearchActionCreator } from "../../store/feature/searchSlice/searchSlice";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a searchBar component", () => {
  const inputTestId = "search-input";
  describe("When rendered", () => {
    test("Then it should a label and an input", () => {
      const searchLabel = "Search Products";

      render(<SearchBar />, { wrapper: Wrapper });

      const input = screen.getByTestId(inputTestId);
      const label = screen.getByLabelText(searchLabel);

      expect(input).toBeInTheDocument();
      expect(label).toBeInTheDocument();
    });
  });
  describe("When the user type on the input", () => {
    test("Then it should call the dispatch with the changeSearch action creator", async () => {
      const userString = "t";

      render(<SearchBar />, { wrapper: Wrapper });

      const input = screen.getByTestId(inputTestId);

      await userEvent.type(input, userString);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          changeSearchActionCreator(userString)
        );
      });
    });
  });
});
