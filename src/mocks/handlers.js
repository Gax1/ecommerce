import { rest } from "msw";
import { cellphonesTestList } from "../test-utils/utils/test-variables";
import apiUrl from "../utils/env/apiUrl";

export const handlers = [
  rest.get(`${apiUrl.url}/api/product/`, (req, res, ctx) => {
    const status = 200;
    const response = cellphonesTestList;

    return res(ctx.status(status), ctx.json(response));
  }),
];
