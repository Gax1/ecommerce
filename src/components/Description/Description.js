import DescriptionStyled from "./DescriptionStyled";

const Description = ({
  cellphone: {
    brand,
    model,
    price,
    cpu,
    ram,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    os,
    dimentions,
    weight,
  },
}) => {
  return (
    <DescriptionStyled>
      <h2 className="description__title">
        {brand} {model}
      </h2>

      <ul className="description__details">
        <li className="description__detail-item" key={"cpu"}>
          <span className="description__detail--name">CPU </span>
          <span className="description__detail--value">{cpu}</span>
        </li>
        <li className="description__detail-item" key={"ram"}>
          <span className="description__detail--name">RAM </span>
          <span className="description__detail--value">{ram}</span>
        </li>
        <li className="description__detail-item" key={"display-resolution"}>
          <span className="description__detail--name">Display resolution </span>
          <span className="description__detail--value">
            {displayResolution}
          </span>
        </li>
        <li className="description__detail-item">
          <span className="description__detail--name" key={"battery"}>
            Battery
          </span>
          <span className="description__detail--value">{battery}</span>
        </li>
        <li className="description__detail-item">
          <span className="description__detail--name" key={"main-camera"}>
            Main Camera
          </span>
          <span className="description__detail--value">
            {primaryCamera.join(" - ")}
          </span>
        </li>
        <li className="description__detail-item">
          <span className="description__detail--name" key={"secondary-camera"}>
            Secondary Camera
          </span>
          <span className="description__detail--value">
            {secondaryCmera.join(" - ")}
          </span>
        </li>
        <li className="description__detail-item">
          <span className="description__detail--name" key={"Operative System"}>
            Operative System
          </span>
          <span className="description__detail--value">{os}</span>
        </li>
        <li className="description__detail-item">
          <span className="description__detail--name" key={"Dimentions"}>
            Dimentions
          </span>
          <span className="description__detail--value">{dimentions}</span>
        </li>
        <li className="description__detail-item">
          <span className="description__detail--name" key={"Weight"}>
            Weight
          </span>
          <span className="description__detail--value">{weight}</span>
        </li>
      </ul>
      <span className="description__price">
        {price !== "" ? `$${price}.00` : "No Stock"}
      </span>
    </DescriptionStyled>
  );
};

export default Description;
