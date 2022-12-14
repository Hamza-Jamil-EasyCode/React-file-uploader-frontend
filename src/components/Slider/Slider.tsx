import { memo, ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomControl from "./CustomControl";

type Props = {
  children: ReactNode;
};

const Slider = ({ children }: Props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slider">
      <Carousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomControl />}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default memo(Slider);
