import "../css/page/Gallery.scss";
import Images from "./../images/PhotoIndex";
import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HandleImage = ({ scrollPosition }) => {
  return Images.map((el) => {
    return (
      <div className="image" key={el.name}>
        <LazyLoadImage
          src={el.image}
          key={el.name}
          threshold={100}
          height={el.dimension}
          width={el.dimension}
          scrollPosition={scrollPosition}
          effect="blur"
        />
      </div>
    );
  });
};

export default trackWindowScroll(HandleImage);
