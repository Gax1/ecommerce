import PhoneCardStyled from "./PhoneCardStyled";

const PhoneCard = ({ phone: { brand, model, price, imgUrl } }) => {
  return (
    <PhoneCardStyled>
      <div className="phone-card__image-container">
        <img src={imgUrl} alt={`${brand} phone`} />
      </div>
      <div className="phone-card__data-container">
        <h3 className="phone-card__data-container--brand">
          {brand.toUpperCase()}
        </h3>
        <span className="phone-card__data-container--model">{model}</span>
        <span className="phone-card__data-container--price">
          {price !== "" ? `$${price}.00` : "No Stock"}
        </span>
      </div>
    </PhoneCardStyled>
  );
};

export default PhoneCard;
