
var products = [];

const ul = document.getElementById("pagination");
const content = document.getElementById("content");
const perPageLimit = 20;

const createPageNumbers = (length) => {
  let totalPages = Math.ceil(length / perPageLimit);

  let lis = "";
  for (let index = 0; index < totalPages; index++) {
    // let liELem = document.cre
    lis += `<li>${index + 1}</li>`;
  }
  ul.innerHTML = lis;
};

ul.addEventListener("click", (event) => {
  const clickedElem = event.target;
  if (clickedElem.tagName == "LI") {
    renderPage(clickedElem.innerText);
  }

});

const renderPage = (pageNo) => {
  console.log(pageNo);
  //   1
  let toShow = products.slice(
    (pageNo - 1) * perPageLimit,
    perPageLimit * pageNo
  );

  let divs = "";
  for (let index = 0; index < toShow.length; index++) {
    // let liELem = document.cre
    divs += `<div class="col">
    <h4>${toShow[index].name}</h4>
    <img src='${toShow[index].image_link}' />
    <h6>price:${toShow[index].price}</h6>
    <p>${toShow[index].description}</p>
    </div>`;
  }
  content.innerHTML = divs;
};
fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
  .then((data) => {
    return data.json();
  })
  .then((prod) => {
    console.log(prod);
    products = prod;
    // Data => Pages create
    renderPage(1);
    createPageNumbers(prod.length);

    // Page and data relation
  })
  .catch((e) => {
    console.log("error", e);
  });
