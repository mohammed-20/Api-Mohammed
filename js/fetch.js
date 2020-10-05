//code fetch

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchVal = search.value;
    console.log=(searchVal)
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
          const a = document.createElement("a");
          img.src = url;
          a.href = url;
          a.target = "_blank";
          a.appendChild(img)
          gifAreaDiv.appendChild(a);
        });
      })
      .catch((err) => {
        const errDiv = document.createElement("span");
        errDiv.textContent = "something went wrong please try agin later";
        gifAreaDiv.textContent = "";
        gifAreaDiv.appendChild(errDiv);
      });
  });

