//varibles code

const search = document.getElementById("inputApi");
const remBtn = document.getElementById("remBtn");
const searchBtn = document.getElementById("reqBtn");
const form = document.getElementById("form");
const gifAreaDiv = document.getElementById("gif-area");

// function event listener
const remove = () => {
  gifAreaDiv.textContent = "";
  search.value = "";
};
const enterMouseSearch = () => {
  searchBtn.style.backgroundColor = "#999";
  searchBtn.style.border = "none";
  searchBtn.style.color = "#000";
};
const leaveMouseSearch = () => {
  searchBtn.style.backgroundColor = "transparent";
  searchBtn.style.border = "1px solid rgb(66, 66, 66)";
  searchBtn.style.color = "rgb(97, 94, 94)";
  searchBtn.style.boxShadow = "1px 1px 1px rgb(66, 66, 66)";
};
const enterMouseRemove = () => {
  remBtn.style.backgroundColor = "rgb(122, 1, 1)";
  remBtn.style.border = "none";
  remBtn.style.color = "#000";
};
const leaveMouseRemove = () => {
  remBtn.style.backgroundColor = "transparent";
  remBtn.style.border = "1px solid rgb(122, 1, 1)";
  remBtn.style.color = "rgb(150, 22, 22)";
  remBtn.style.boxShadow = "1px 1px 1px rgb(122, 1, 1)";
};

// code event listener
remBtn.addEventListener("click", remove);
searchBtn.addEventListener("mouseenter", enterMouseSearch);
searchBtn.addEventListener("mouseleave", leaveMouseSearch);
remBtn.addEventListener("mouseenter", enterMouseRemove);
remBtn.addEventListener("mouseleave", leaveMouseRemove);
