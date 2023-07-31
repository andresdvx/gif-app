const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=GBqMEAWxjz3v3AwT8bQQGJ13XYszM8R5&q=${encodeURI(
    category
  )}
  &limit=9`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gif = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });
  return gif;
};

export default getGifs;
