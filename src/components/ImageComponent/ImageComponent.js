import "./ImageComponent.css";

const ImageComponent = ({ img, model }) => {
  return <img src={img} alt={`${model} phone`} className="image-container" />;
};

export default ImageComponent;
