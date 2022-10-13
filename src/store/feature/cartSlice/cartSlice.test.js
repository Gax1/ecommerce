import { cartReducer, uploadCartActionCreator } from "./cartSlice";

describe("Given a task reducer", () => {
  describe("When its called with an previus state and an action creator", () => {
    test("Then it should return the new state", () => {
      const initialCartState = 0;

      const uploadedCart = cartReducer(
        initialCartState,
        uploadCartActionCreator(5)
      );

      expect(uploadedCart).toStrictEqual(5);
    });
  });
});
