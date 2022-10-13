import axios from "axios";
import { useDispatch } from "react-redux";
import apiUrl from "../../../utils/env/apiUrl";
import { uploadCellPhonesActionCreator } from "../../feature/cellphoneSlice/cellphoneSlice";

const useCellphone = () => {
  const { url } = apiUrl;
  const dispatch = useDispatch();

  const uploadCellPhones = async () => {
    try {
      const { data } = await axios.get(`${url}/api/product/`);

      dispatch(uploadCellPhonesActionCreator(data));
      return data;
    } catch (error) {
      return error;
    }
  };

  const getCellPhoneById = async (id) => {
    try {
      const { data } = await axios.get(`${url}/api/product/${id}`);

      return data;
    } catch (error) {
      return error;
    }
  };
  const addToCart = async (id, colorCode, storageCode) => {
    try {
      const { data } = await axios.post(`${url}/api/cart`, {
        id,
        colorCode,
        storageCode,
      });

      return data;
    } catch (error) {
      return error;
    }
  };

  return { uploadCellPhones, getCellPhoneById, addToCart };
};

export default useCellphone;
