import { render, screen } from "@testing-library/react";
import { cellphoneDetailTest } from "../../test-utils/utils/test-variables";
import Wrapper from "../../test-utils/Wrapper/Wrapper";
import Description from "./Description";

describe("Given the Description component", () => {
  describe("When instantiated with a cellphone data", () => {
    test("Then it should show a list with 9 items", () => {
      render(<Description cellphone={cellphoneDetailTest[0]} />, {
        wrapper: Wrapper,
      });
      const list = screen.getByRole("list");
      const listItems = screen.getAllByRole("listitem");

      listItems.forEach((listItem) => {
        expect(listItem).toBeInTheDocument();
      });
      expect(list).toBeInTheDocument();
      expect(listItems).toHaveLength(9);
    });
  });
  describe("When the price is undefined", () => {
    test("Then it should show a string", () => {
      const noStock = "No Stock";

      render(<Description cellphone={cellphoneDetailTest[1]} />, {
        wrapper: Wrapper,
      });
      const listItem = screen.getByText(noStock);

      expect(listItem).toBeInTheDocument();
    });
  });
});
