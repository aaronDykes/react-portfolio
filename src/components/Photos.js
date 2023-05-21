import "../css/page/Gallery.scss";
import
{
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Photos = ({ images, scrollPosition }) =>
{
  return images.map((el) =>
  {
    return (
      <div className="image" key={el.name}>
        <LazyLoadImage
          src={el.image}
          key={el.name}
          threshold={100}
          scrollPosition={scrollPosition}
          effect="blur"
        />
      </div>
    );
  });
};



export default trackWindowScroll(Photos);
