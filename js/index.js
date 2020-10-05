const search = document.getElementById("inputApi");
const remBtn = document.getElementById("remBtn");
const searchBtn = document.getElementById("reqBtn");
const form = document.getElementById("form");
const gifAreaDiv = document.getElementById("gif-area");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchVal = search.value;
  fetch(
    `https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=Uiat4XTSKIISfcNj64RDzoEqrj4g4HsP`,
    {
      method: "GET",
      Credentials: "same-arigin",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      res.data.forEach((data) => {
        const url = data.images.original.url;
        const img = document.createElement("img");
        img.src = url;
        gifAreaDiv.appendChild(img);
      });
    })
    .catch((err) => {
      const errDiv = document.createElement("span");
      errDiv.textContent = "something went wrong please try agin later";
      gifAreaDiv.textContent = "";
      gifAreaDiv.appendChild(errDiv);
    });
});

remBtn.addEventListener("click", () => {
  gifAreaDiv.textContent = "";
  search.value = "";
});

// code event listener
searchBtn.addEventListener('mouseover', () =>{
    searchBtn.style.backgroundColor=('#999');
    searchBtn.style.border =('none');
    searchBtn.style.color=('#000');
})
searchBtn.addEventListener('mouseleave', () =>{
    searchBtn.style.backgroundColor=('transparent');
    searchBtn.style.border = ('1px solid rgb(66, 66, 66)');
    searchBtn.style.color =('rgb(97, 94, 94)');
    searchBtn.style.boxShadow = ('1px 1px 1px rgb(66, 66, 66)');
    
})
remBtn.addEventListener('mouseover', () =>{
    remBtn.style.backgroundColor=('rgb(122, 1, 1)');
    remBtn.style.border =('none');
    remBtn.style.color=('#000');
})
remBtn.addEventListener('mouseleave', () =>{
    remBtn.style.backgroundColor=('transparent');
    remBtn.style.border = ('1px solid rgb(122, 1, 1)');
    remBtn.style.color =('rgb(150, 22, 22)');
    remBtn.style.boxShadow = ('1px 1px 1px rgb(122, 1, 1)');
    
})
