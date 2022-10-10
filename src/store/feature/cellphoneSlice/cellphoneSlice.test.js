import { cellphonesTestList } from "../../../test-utils/utils/test-variables";
import {
  cellphoneReducer,
  uploadCellPhonesActionCreator,
} from "./cellphoneSlice";

describe("Given a cellphoneSlice", () => {
  describe("When its called with uploadCellPhonesActionCreator and an Action with a payload", () => {
    test("Then it should return the payload", () => {
      const initialCellphonesState = [{}];
      const actionPayload = cellphonesTestList;

      const uploadedCellphones = cellphoneReducer(
        initialCellphonesState,
        uploadCellPhonesActionCreator(actionPayload)
      );

      expect(uploadedCellphones).toStrictEqual(actionPayload);
    });
  });
});
