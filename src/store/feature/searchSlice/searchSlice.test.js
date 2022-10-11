import { changeSearchActionCreator, searchReducer } from "./searchSlice";

describe("Given a search reducer", () => {
  describe("When its called with an initial state and an action with payload", () => {
    test("Then it should change the initial state to the payload", () => {
      const initialSearchState = "";
      const actionPayload = "Test-search";

      const newSearch = searchReducer(
        initialSearchState,
        changeSearchActionCreator(actionPayload)
      );

      expect(newSearch).toStrictEqual(actionPayload);
    });
  });
});
