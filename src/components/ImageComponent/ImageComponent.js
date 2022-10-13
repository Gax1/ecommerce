import "./ImageComponent.css";

const ImageComponent = ({ phone: { imgUrl, model } }) => {
  return (
    <img src={imgUrl} alt={`${model} phone`} className="image-container" />
  );
};

export default ImageComponent;
