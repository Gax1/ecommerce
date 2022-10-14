import { loadingReducer, toggleLoadingActionCreator } from "./loadingSlice";

describe("Given a loading reducer", () => {
  describe("When its called with a previus state and an action creator", () => {
    test("Then it should toggle the state", () => {
      const previusState = true;

      const loading = loadingReducer(
        previusState,
        toggleLoadingActionCreator()
      );

      expect(loading).not.toBeTruthy();
    });
  });
});
