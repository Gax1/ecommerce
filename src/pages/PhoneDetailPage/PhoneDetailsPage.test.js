import { render, screen } from "@testing-library/react";
import PhoneDetailPage from "./PhoneDetailPage";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { rest } from "msw";
import { server } from "../../mocks/server";
import { cellphoneDetailTest } from "../../test-utils/utils/test-variables";
import apiUrl from "../../utils/env/apiUrl";
import { act } from "react-dom/test-utils";

describe("Given a Phone Details component", () => {
  describe("When rendered", () => {
    test("Then it should the details, a img and a button", () => {
      server.use(
        rest.get(`${apiUrl.url}/api/product/:id`, (req, res, ctx) => {
          const status = 200;

          return res(ctx.status(status), ctx.json(cellphoneDetailTest[0]));
        })
      );
      const weightText = "260";
      const altImg = "Iconia Talk S phone";
      const inputTestId = "checkbox-input";

      render(<PhoneDetailPage />, { wrapper: Wrapper });

      const img = screen.getByRole("img", { name: altImg });
      const description = screen.getByText(weightText);
      const inputs = screen.getAllByTestId(inputTestId);

      expect(img).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(inputs[0]).toBeInTheDocument();
    });
  });
});
