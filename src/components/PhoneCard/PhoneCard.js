import PhoneCardStyled from "./PhoneCardStyled";

const PhoneCard = ({ phone: { brand, model, price, imgUrl } }) => {
  return (
    <PhoneCardStyled>
      <div className="phone-card__image-container">
        <img src={imgUrl} alt={`${brand} phone`} />
      </div>
      <div className="phone-card__data-container">
        <span className="phone-card__data-container--brand">
          {brand.toUpperCase()}
        </span>
        <span className="phone-card__data-container--model">{model}</span>
        <span className="phone-card__data-container--price">{`$${price}.00`}</span>
      </div>
    </PhoneCardStyled>
  );
};

export default PhoneCard;
