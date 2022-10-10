import axios from "axios";
import { useDispatch } from "react-redux";
import apiUrl from "../../utils/env/apiUrl";
import { uploadCellPhonesActionCreator } from "../feature/cellphoneSlice/cellphoneSlice";

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

  return { uploadCellPhones };
};

export default useCellphone;
