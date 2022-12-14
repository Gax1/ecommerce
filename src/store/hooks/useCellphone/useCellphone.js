import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import apiUrl from "../../../utils/env/apiUrl";
import { uploadCellPhonesActionCreator } from "../../feature/cellphoneSlice/cellphoneSlice";
import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
} from "../../feature/loadingSlice/loadingSlice";

const useCellphone = () => {
  const { url } = apiUrl;
  const dispatch = useDispatch();

  const uploadCellPhones = useCallback(
    async (uploadData) => {
      dispatch(openLoadingActionCreator());
      try {
        const { data } = await axios.get(`${url}/api/product/`);

        dispatch(uploadCellPhonesActionCreator(data));
        dispatch(closeLoadingActionCreator());
        localStorage.setItem("data", JSON.stringify(data));
        localStorage.setItem(
          "timeStamp",
          JSON.stringify(new Date().getHours())
        );
        return data;
      } catch (error) {
        dispatch(closeLoadingActionCreator());
        return error;
      }
    },
    [url, dispatch]
  );

  const getCellPhoneById = useCallback(
    async (id) => {
      dispatch(openLoadingActionCreator());
      try {
        const { data } = await axios.get(`${url}/api/product/${id}`);
        dispatch(closeLoadingActionCreator());
        return data;
      } catch (error) {
        dispatch(closeLoadingActionCreator());
        return error;
      }
    },
    [url, dispatch]
  );

  const addToCart = async ({ id, colorCode, storageCode }) => {
    try {
      dispatch(openLoadingActionCreator());
      const { data } = await axios.post(`${url}/api/cart`, {
        id,
        colorCode,
        storageCode,
      });
      dispatch(closeLoadingActionCreator());
      return data;
    } catch (error) {
      dispatch(closeLoadingActionCreator());
      return error;
    }
  };

  return { uploadCellPhones, getCellPhoneById, addToCart };
};

export default useCellphone;
