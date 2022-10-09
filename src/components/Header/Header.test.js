import { render, screen } from "@testing-library/react";
import Wrapper from "../../test-utils/wrapper/wrapper";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show a title, a breadcrumb and the number of items in cart", () => {
      const itemsOnCart = 10;
      const titleText = "E-Commerce";
      const breadcrumbText = "Home";

      render(
        <Wrapper>
          <Header itemsOnCart={itemsOnCart} />
        </Wrapper>
      );

      const title = screen.getByRole("heading", { name: titleText });
      const numberOfItems = screen.getByText(itemsOnCart);
      const breadcrumb = screen.getByRole("link", { name: breadcrumbText });

      expect(title).toBeInTheDocument();
      expect(numberOfItems).toBeInTheDocument();
      expect(breadcrumb).toBeInTheDocument();
    });
  });
});
