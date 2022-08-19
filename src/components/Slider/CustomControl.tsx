const CustomControl = (props: any) => {
  const { next, previous, goToSlide, ...rest } = props;
  const {
    carouselState,
    carouselState: { currentSlide, slidesToShow, totalItems },
  } = rest;

  const isStart = () => totalItems - currentSlide === totalItems;
  const isLast = () => totalItems - currentSlide === slidesToShow;

  const renderLeftButton = () => (
    <button disabled={isStart()} onClick={previous}>
      <i className={`fa-solid fa-chevron-left ${isStart() && "disable"}`}></i>
    </button>
  );

  const renderRightButton = () => (
    <button disabled={isLast()} onClick={next}>
      <i className={`fa-solid fa-chevron-right ${isLast() && "disable"}`}></i>
    </button>
  );

  return (
    <div className="custom-control">
      {renderLeftButton()}
      {renderRightButton()}
    </div>
  );
};

export default CustomControl;
