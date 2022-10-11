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
      <span className="description__price">{price}</span>
      <ul className="description__details">
        <li className="description__detail-item" key={"CPU"}>
          <span className="description__detail--name">CPU </span>
          <span className="description__detail--value">{cpu}</span>
        </li>
        <li className="description__detail-item" key={"RAM"}>
          <span className="description__detail--name">RAM </span>
          <span className="description__detail--value">{ram}</span>
        </li>
        <li className="description__detail-item" key={"Display resolution"}>
          <span className="description__detail--name">Display resolution </span>
          <span className="description__detail--value">
            {displayResolution}
          </span>
        </li>
        <li className="description__detail-item">
          <span className="description__detail--name" key={"Battery"}>
            Battery
          </span>
          <span className="description__detail--value">{battery}</span>
        </li>
        <li className="description__detail-item">
          <span className="description__detail--name" key={"Main Camera"}>
            Main Camera
          </span>
          <span className="description__detail--value">
            {primaryCamera[0]} - {primaryCamera[1]}
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
    </DescriptionStyled>
  );
};

export default Description;
