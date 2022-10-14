import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import apiUrl from "../../../utils/env/apiUrl";
import { uploadCellPhonesActionCreator } from "../../feature/cellphoneSlice/cellphoneSlice";
import { toggleLoadingActionCreator } from "../../feature/loadingSlice/loadingSlice";

const useCellphone = () => {
  const { url } = apiUrl;
  const dispatch = useDispatch();

  const uploadCellPhones = async () => {
    dispatch(toggleLoadingActionCreator());
    try {
      const { data } = await axios.get(`${url}/api/product/`);

      dispatch(uploadCellPhonesActionCreator(data));
      dispatch(toggleLoadingActionCreator());
      return data;
    } catch (error) {
      dispatch(toggleLoadingActionCreator());
      return error;
    }
  };

  const getCellPhoneById = useCallback(
    async (id) => {
      dispatch(toggleLoadingActionCreator());
      try {
        const { data } = await axios.get(`${url}/api/product/${id}`);
        dispatch(toggleLoadingActionCreator());
        return data;
      } catch (error) {
        dispatch(toggleLoadingActionCreator());
        return error;
      }
    },
    [url, dispatch]
  );

  const addToCart = async ({ id, colorCode, storageCode }) => {
    try {
      dispatch(toggleLoadingActionCreator());
      const { data } = await axios.post(`${url}/api/cart`, {
        id,
        colorCode,
        storageCode,
      });
      dispatch(toggleLoadingActionCreator());
      return data;
    } catch (error) {
      dispatch(toggleLoadingActionCreator());
      return error;
    }
  };

  return { uploadCellPhones, getCellPhoneById, addToCart };
};

export default useCellphone;
