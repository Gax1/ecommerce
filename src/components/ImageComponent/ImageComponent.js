import "./ImageComponent.css";

const ImageComponent = ({ phone: { imgUrl, model } }) => {
  return (
    <img
      src={imgUrl}
      alt={`${model} phone`}
      className="image-container"
      width="400px"
      height="500px"
    />
  );
};

export default ImageComponent;
