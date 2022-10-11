import { render, screen } from "@testing-library/react";
import { cellphoneDetailTest } from "../../test-utils/utils/test-variables";
import Wrapper from "../../test-utils/Wrapper/Wrapper";
import Description from "./Description";

describe("Given the Description component", () => {
  describe("When instantiated with a cellphone data", () => {
    test("Then it should show a list with 8 items", () => {
      render(
        <Wrapper>
          <Description cellphone={cellphoneDetailTest} />
        </Wrapper>
      );
      const list = screen.getByRole("list");
      const listItems = screen.getAllByRole("listitem");

      listItems.forEach((listItem) => {
        expect(listItem).toBeInTheDocument();
      });
      expect(list).toBeInTheDocument();
      expect(listItems).toHaveLength(8);
    });
  });
});
