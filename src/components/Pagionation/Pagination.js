import { useState } from "react";
import PaginationStyled from "./PaginationStyled";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Pagination = ({ cards, setCards }) => {
  const [page, setPage] = useState(1);

  const handleOnClickPlus = () => {
    setCards(cards + 20);
    setPage(page + 1);
  };

  const handleOnClickMinus = () => {
    setCards(cards - 20);
    setPage(page - 1);
  };

  return (
    <PaginationStyled>
      <FaChevronCircleLeft
        className="pagination__button"
        onClick={handleOnClickMinus}
        visibility={cards === 0 ? "hidden" : "visible"}
        data-testid="button-minus"
      />
      <div className="pagination__page--container">
        <span className="pagination__page--pages">{page - 1}</span>
        <span className="pagination__page--this-page">{page}</span>
        <span className="pagination__page--pages">{page + 1}</span>
      </div>
      <FaChevronCircleRight
        className="pagination__button"
        onClick={handleOnClickPlus}
        visibility={cards === 80 ? "hidden" : "visible"}
        data-testid="button-plus"
      />
    </PaginationStyled>
  );
};

export default Pagination;
