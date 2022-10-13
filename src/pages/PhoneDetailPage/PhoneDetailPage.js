import Description from "../../components/Description/Description";
import SelectProduct from "../../components/SelectProduct/SelectProduct";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import PhoneDetailPageStyled from "./PhoneDetailPageStyled";
import useCellphone from "../../store/hooks/useCellphone/useCellphone";
import { useEffect, useState } from "react";
import { cellphoneDetailTest } from "../../test-utils/utils/test-variables";

const PhoneDetailPage = () => {
  const { getCellPhoneById } = useCellphone();
  const id = "ZmGrkLRPXOTpxsU4jjAcv";

  const [phone, setPhone] = useState(cellphoneDetailTest[0]);

  useEffect(() => {
    (async () => {
      const data = await getCellPhoneById(id);
      setPhone(data);
    })();
  }, [getCellPhoneById]);

  return (
    <PhoneDetailPageStyled>
      <ImageComponent phone={phone} />
      <Description cellphone={phone} />
      <SelectProduct phone={phone} />
    </PhoneDetailPageStyled>
  );
};

export default PhoneDetailPage;
