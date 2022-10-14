import Description from "../../components/Description/Description";
import SelectProduct from "../../components/SelectProduct/SelectProduct";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import PhoneDetailPageStyled from "./PhoneDetailPageStyled";
import useCellphone from "../../store/hooks/useCellphone/useCellphone";
import { useEffect, useState } from "react";
import { cellphoneDetailTest } from "../../test-utils/utils/test-variables";
import { Link, useParams } from "react-router-dom";

const PhoneDetailPage = () => {
  const { getCellPhoneById } = useCellphone();
  const { id } = useParams();

  const [phone, setPhone] = useState(cellphoneDetailTest[0]);

  useEffect(() => {
    (async () => {
      const data = await getCellPhoneById(id);
      setPhone(data);
    })();
  }, [getCellPhoneById, id]);

  return (
    <PhoneDetailPageStyled>
      <Link to={"/home"}>
        <span className="home-link">Back Home</span>
      </Link>
      <h2 className="phone__title">
        {phone.brand} {phone.model}
      </h2>
      <div className="details__phone--container">
        <ImageComponent phone={phone} />
        <SelectProduct phone={phone} />
      </div>
      <Description cellphone={phone} />
    </PhoneDetailPageStyled>
  );
};

export default PhoneDetailPage;
