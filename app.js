const loadAllProduct = (category = "") => {
  document.getElementById("product-container").innerHTML = "";
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProduct(data));
};

const loadAllCategoris = () => {
  document.getElementById("category-conatiner").innerHTML = "<h1>Categories</h1><br>";
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategoris(data));
};

const displayProduct = (products) => {
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img src=${product.image} class="card-img-top" alt="...">
    <div>
      <h5>${product.title}</h5>
      <h3> Price: $${product.price}</h3>
      <p>${product.description.slice(0, 50)}</p>
      <button type="button" class="cust-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p><b>Product ID:</b> ${product.id}</p>
            <p><b>Product Title:</b> ${product.title}</p>
            <p><b>Product Price:</b> ${product.price}</p>
            <p><b>Product Category:</b> ${product.category}</p>
            <p><b>Product Description:</b> $product.{description}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="cust-btn" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    `;
    productContainer.appendChild(div);
  });
};

const displayCategoris = (categories) => {
  const categoryContainer = document.getElementById("category-conatiner");

  categories.forEach((category) => {
    const div = document.createElement("div");
    div.classList.add("category-card");
    div.innerHTML = `
            <h5 onclick="loadAllProduct('${category}')">${category}</h5>
        `;
    categoryContainer.appendChild(div);
  });
};

loadAllProduct();
loadAllCategoris();
