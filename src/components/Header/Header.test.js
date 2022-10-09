import { render, screen, waitFor } from "@testing-library/react";
import Wrapper from "../../test-utils/Wrapper/Wrapper";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

describe("Given a Header component", () => {
  const breadcrumbText = "Home";
  const itemsOnCart = 10;
  describe("When rendered", () => {
    test("Then it should show a title, a breadcrumb and the number of items in cart", () => {
      const titleText = "E-Commerce";

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
  describe("When the home link is clicked", () => {
    test("Then it should call the onclick method of the Link component", async () => {
      render(
        <Wrapper>
          <Header itemsOnCart={itemsOnCart} />
        </Wrapper>
      );

      const breadcrumb = screen.getByRole("link", { name: breadcrumbText });

      breadcrumb.onclick = jest.fn();

      await userEvent.click(breadcrumb);

      await waitFor(() => {
        expect(breadcrumb.onclick).toHaveBeenCalled();
      });
    });
  });
});
