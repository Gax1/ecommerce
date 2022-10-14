import { LoadingStyled } from "./LoadingStyled";

export const Loading = () => {
  return (
    <LoadingStyled>
      <span className="loader" data-testid="loader-container"></span>;
    </LoadingStyled>
  );
};

export default Loading;
