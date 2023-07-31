import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifElement = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      {loading && <p className="text-xs">Loading...</p>}
      {images.map((img) => {
        return <GifItem {...img} key={img.id} />;
      })}
    </>
  );
};

export default GifElement;
