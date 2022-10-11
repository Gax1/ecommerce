import { rest } from "msw";
import {
  cellphoneDetailTest,
  cellphonesTestList,
} from "../test-utils/utils/test-variables";
import apiUrl from "../utils/env/apiUrl";

export const handlers = [
  rest.get(`${apiUrl.url}/api/product/`, (req, res, ctx) => {
    const status = 200;
    const response = cellphonesTestList;

    return res(ctx.status(status), ctx.json(response));
  }),

  rest.get(`${apiUrl.url}/api/product/success`, (req, res, ctx) => {
    const status = 200;
    const response = cellphoneDetailTest;

    return res(ctx.status(status), ctx.json(response));
  }),

  rest.get(`${apiUrl.url}/api/product/error`, (req, res, ctx) => {
    const status = 400;
const errorResponse = new Error("Bad request")

    return res(ctx.status(status), ctx.json(errorResponse));
  }),
];
