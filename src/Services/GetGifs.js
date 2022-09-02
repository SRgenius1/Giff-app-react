const apiKey = 'obAjaCVzk9fL5ZAUgcj1XUboSRLpB44b&q';

function getgifs ({keyword = 'morty'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response;
      const gifs = data.map(image => {
        const {images, title, id} = image;
        const {url} = image.images.downsized_medium
        return {title, id, url};
      });
        return gifs;
    });
};


export {getgifs};