import { PaginationItem } from "./PaginationItem/PaginationItem";
import styles from "./Pagination.module.css";
import { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPaginationValueSelector } from "../../redux/slices/paginationSlice";
import { createPaginationForRender } from "../../utils/helpers";
import { LEFT_PAGE, RIGHT_PAGE } from "../../utils/constants";

export const Pagination = ({ totalPages }) => {
  const pageNeighbours = useMemo(() => 1, []);
  const [arrOfPages, setArrOfPages] = useState([]);
  const currentPage = useSelector(getPaginationValueSelector);

  useEffect(() => {
    setArrOfPages(
      createPaginationForRender(
        totalPages,
        currentPage,
        pageNeighbours,
        LEFT_PAGE,
        RIGHT_PAGE
      )
    );
  }, [currentPage, pageNeighbours, totalPages]);

  const returnJSXListPages = () => {

    if (arrOfPages.length > 1)
      return (
        <nav className={styles.paginationContainer}>
          {arrOfPages.map((pageItem, ind) => (
            <PaginationItem key={ind} pageItem={pageItem} />
          ))}
        </nav>
      );
    else return null;
  };

  return returnJSXListPages();
};
