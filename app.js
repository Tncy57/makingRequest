const form = document.querySelector('#searchForm')
form.addEventListener("submit", async function(e) {
  try {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const response = await axios.get(` https://api.tvmaze.com/search/shows`, config);
    makeImages(response.data);
    form.elements.query.value = ""; 
  } catch(error) {
    alert("Caught an error! No Shows, sorry.");
  }
})

const makeImages = (shows) => {
  for(let result of shows) {
    if(result.show.image) {  
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      img.classList.add("img");
      document.body.append(img);
    }
  }
}