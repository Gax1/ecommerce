import { renderHook } from "@testing-library/react";
import useCellphone from "./useCellphone";
import Wrapper from "../../test-utils/Wrapper/Wrapper";
import { cellphonesTestList } from "../../test-utils/utils/test-variables";
import { server } from "../../mocks/server";
import { rest } from "msw";
import apiUrl from "../../utils/env/apiUrl";

describe("Given the useCellphone hook", () => {
  describe("When the uploadCellphones method is called", () => {
    const {
      result: {
        current: { uploadCellPhones },
      },
    } = renderHook(() => useCellphone(), { wrapper: Wrapper });
    test("Then if it succeeded it should return a list of cellphones", async () => {
      const cellPhonesList = await uploadCellPhones();

      expect(cellPhonesList).toStrictEqual(cellphonesTestList);
    });
    test("Then if it fails it should return an error", async () => {
      server.use(
        rest.get(`${apiUrl.url}/api/product/`, (req, res, ctx) => {
          const status = 404;
          const response = new Error("Items not found");

          return res(ctx.status(status), ctx.json(response));
        })
      );

      const cellPhonesList = await uploadCellPhones();

      expect(cellPhonesList).toBeInstanceOf(Error);
    });
  });
});
