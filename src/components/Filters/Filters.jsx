import { FilterContainer } from "./FilterContainer/FilterContainer";
import styles from "./Filters.module.css";
import { RangePrice } from "./RangePrice/RangePrice";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../redux/slices/filtersSlice";
import { RangePartyTime } from "./RangePartyTime/RangePartyTime";
import { ButtonWhite } from "../ButtonWhite/ButtonWhite";
import { useEffect, useRef, useState } from "react";

export const Filters = ({data}) => {

  const dispatch = useDispatch();

  // Scroll
  const outerContainer = useRef();
  const innerContainer = useRef();

  const initStylesOwn = {
    transform: "",
    position: "",
  }

  const [scroll, setScroll] = useState();
  const [stylesOwn, setStylesOwn] = useState(initStylesOwn);

  const scrollHandler = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const innerHeight = innerContainer.current.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;
    const sidebarTop = outerContainer.current.getBoundingClientRect().top + window.scrollY;
    const outerBottom = outerContainer.current.getBoundingClientRect().bottom;
    const outerHeight = outerContainer.current.getBoundingClientRect().height;

    const comparisonValueScrollDown = innerHeight - viewportHeight + sidebarTop;

    if (innerHeight < outerHeight) {
      if (outerBottom <= viewportHeight) {
        setStylesOwn({
          position: "absolute",
          bottom: "0px",
        });
      } else if (scroll >= comparisonValueScrollDown) {
        setStylesOwn({
          transform: `translateY(-${comparisonValueScrollDown}px)`,
          position: "fixed",
        });
      } else {
        setStylesOwn(initStylesOwn);
      }
    } else {
      setStylesOwn(initStylesOwn);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, false);
    return () => window.removeEventListener("scroll", scrollHandler, false);
  }, []);
  //


  const clearfiltersHandler = () => {
    dispatch(clearFilters());
  };

  const returnJSXListCategories = () => {
    const listCategories = [];

    for (let name in data.filters) {
      listCategories.push(
        <FilterContainer
          key={name}
          category={data.filters[name]}
          nameCategoryDev={name}
        />
      );
    }

    return listCategories;
  };

  return (
    <aside className={styles.filtersContainer} ref={outerContainer}>
      <div
        className={styles.contentContainer}
        ref={innerContainer}
        style={stylesOwn}
      >
        <RangePrice
          minPriceData = {data.absoluteMinPrice}
          maxPriceData = {data.absoluteMaxPrice}
        />
        <RangePartyTime
          minTimeData = {data.absoluteMinGameDuration}
          maxTimeData = {data.absoluteMaxGameDuration}
        />
        {returnJSXListCategories()}
        <div className={styles.buttonContainer}>
          {/* <ButtonYellow>Показати</ButtonYellow> */}
          <ButtonWhite onClickHandler={clearfiltersHandler}>
            Зняти виділення
          </ButtonWhite>
        </div>
      </div>
    </aside>
  );
};
