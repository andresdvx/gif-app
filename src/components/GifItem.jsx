const GifItem = ({ id, title, url }) => {
  const x = 10;
  return (
    <div key={id} className="flex flex-col animate__animated animate__backInUp">
      <p className="text-xs">{title}</p>
      <img src={url} className="w-full h-[250px] object-cover"/> 
      <a href={url} target="_blank" className="text-center text-md font-bold">View</a>
    </div>
  );
};

export default GifItem;
