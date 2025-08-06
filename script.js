"use strict";

// Lista manual de produtos
const manualProducts = [
  {
    name: "Batom Vermelho Glam",
    brand: "Glamour",
    price: "29.90",
    description: "Batom de longa duração com acabamento matte.",
    api_featured_image: "primeira.png", // Caminho relativo
    category: "maquiagem",
    stock: 13, // Estoque adicionado
  },
  {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "maquiagem",
    stock: 12, // Estoque adicionado
  },
  {
    name: "Rímel Volume Extra",
    brand: "Olhar Fatal",
    price: "34.90",
    description: "Rímel resistente à água com efeito de volume.",
    api_featured_image: "3.png",
    category: "bases",
    stock: 12, // Estoque adicionado
  },
   {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "batom",
    stock: 12, // Estoque adicionado
  },
   {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "sombras",
    stock: 12, // Estoque adicionado
  },
   {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "iluminador",
    stock: 12, // Estoque adicionado
  },
   {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "maquiagem",
    stock: 12, // Estoque adicionado
  },
   {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "maquiagem",
    stock: 12, // Estoque adicionado
  },
   {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "maquiagem",
    stock: 12, // Estoque adicionado
  }, {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "maquiagem",
    stock: 12, // Estoque adicionado
  },
   {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "maquiagem",
    stock: 12, // Estoque adicionado
  },
   {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "maquiagem",
    stock: 12, // Estoque adicionado
  },
   {
    name: "Base Líquida Clara",
    brand: "Beleza Pura",
    price: "45.00",
    description: "Cobertura leve com acabamento natural.",
    api_featured_image: "2.png",
    category: "maquiagem",
    stock: 12, // Estoque adicionado
  }
];


// Evento de clique no menu de categorias
document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-button");

  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedCategory = button.getAttribute("data-category");
      const filteredProducts = selectedCategory === "all"
        ? manualProducts
        : manualProducts.filter(p => p.category === selectedCategory);

      sessionStorage.setItem("currentPage", 1);
      fetchProducts(filteredProducts);
    });
  });

  fetchProducts(manualProducts); // renderiza ao carregar página
});

const stockClass = (product.stock !== undefined && product.stock < 3) ? "product-stock low-stock" : "product-stock";

const card = `
  <div class="card">
    <img class="product-image" src="${product.api_featured_image}" alt="${product.name}">
    <div class="card-content">
      <h3 class="product-name">${product.name}</h3>
      <p class="${stockClass}">Estoque: ${product.stock ?? "Indisponível"}</p>
      <div class="card-footer">
        <p class="product-price">R$ ${parseFloat(product.price || 0).toFixed(2)}</p>
        <p class="product-insta-msg">Peça no <a href="https://instagram.com/seuusuario" target="_blank">Instagram</a></p>
      </div>
    </div>
  </div>
`;

// Função principal de renderização dos produtos
function fetchProducts(products) {
  const container = document.querySelector("main.container");
  container.innerHTML = "";

  let currentPage = parseInt(sessionStorage.getItem("currentPage")) || 1;

  const productsToShow = products.slice((currentPage - 1) * 9, currentPage * 9);

  productsToShow.forEach(product => {
    // Define a classe do estoque conforme quantidade
    let stockClass = "product-stock";
    if (product.stock === 0) {
      stockClass += " out-of-stock";   // cinza
    } else if (product.stock < 3) {
      stockClass += " low-stock";      // laranja
    } else {
      stockClass += " in-stock";       // vermelho padrão
    }

    const card = `
      <div class="card">
        <img class="product-image" src="${product.api_featured_image}" alt="${product.name}">
        <div class="card-content">
          <h3 class="product-name">${product.name}</h3>
          <p class="${stockClass}">Estoque: ${product.stock ?? "Indisponível"} unidades</p>
          <div class="card-footer">
            <p class="product-price">R$ ${parseFloat(product.price || 0).toFixed(2)}</p>
            <p class="product-insta-msg">Peça no <a href="https://instagram.com/seuusuario" target="_blank">Instagram</a></p>
          </div>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", card);

    document.querySelector(".card:last-child").addEventListener("click", () => {
      showModal(product);
    });
  });

  renderNavigation(products);
}

function renderNavigation(products) {
  // Remove navegação antiga
  const oldNav = document.querySelector(".navigation");
  if (oldNav) oldNav.remove();

  const navigation = document.createElement("div");
  navigation.className = "navigation";

  const previous = document.createElement("button");
  previous.classList.add("button", "previous");
  previous.innerHTML = "« Anterior";
  previous.addEventListener("click", () => previousPage(products));

  const next = document.createElement("button");
  next.classList.add("button", "next");
  next.innerHTML = "Próximo »";
  next.addEventListener("click", () => nextPage(products));

  const currentPage = parseInt(sessionStorage.getItem("currentPage"));
  const totalPages = Math.ceil(products.length / 9);

  // Desativa botões quando necessário
  if (currentPage <= 1) disableButton(previous);
  if (currentPage >= totalPages) disableButton(next);

  navigation.append(previous, next);
  document.body.append(navigation);
}

function nextPage(products) {
  let currentPage = parseInt(sessionStorage.getItem("currentPage")) || 1;
  const totalPages = Math.ceil(products.length / 9);

  if (currentPage < totalPages) {
    currentPage += 1;
    sessionStorage.setItem("currentPage", currentPage);
    fetchProducts(products);
    topFunction();
  }
}

function previousPage(products) {
  let currentPage = parseInt(sessionStorage.getItem("currentPage")) || 1;

  if (currentPage > 1) {
    currentPage -= 1;
    sessionStorage.setItem("currentPage", currentPage);
    fetchProducts(products);
    topFunction();
  }
}
console.log("Página atual:", currentPage);


function disableButton(button) {
  button.disabled = true;
  button.style.opacity = "0.4";
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal
function showModal(product) {
  // Evitar múltiplos modals abertos
  if (document.querySelector(".modal")) {
    document.querySelector(".modal").remove();
  }

  const backdrop = document.querySelector(".backdrop");
  const modalElement = `
  <div class="modal">
    <button class="modal-close">X</button>
    <div class="modal-product-image">
      <img src="${product.api_featured_image}" alt="${product.name}">
    </div>
    <div class="modal-product-info">
      <p class="product-brand">${product.brand}</p>
      <h1 class="product-name">${product.name}</h1>
      <p class="product-description">${product.description}</p>
      <p class="product-stock">Estoque disponível: ${product.stock || 0} unidades</p>

      <div class="modal-footer">
        <h1 class="product-price">R$ ${parseFloat(product.price || 0).toFixed(2)}</h1>
        <p class="product-insta-msg">Peça este produto no <a href="https://instagram.com/seuusuario" target="_blank">Instagram</a></p>
      </div>
    </div>
  </div>
`;


  backdrop.insertAdjacentHTML("afterend", modalElement);

  const modal = document.querySelector(".modal");
  backdrop.classList.add("display");
  modal.classList.add("display");

  document.querySelector(".modal-close").addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
}

function closeModal() {
  const backdrop = document.querySelector(".backdrop");
  const modal = document.querySelector(".modal");

  backdrop.classList.remove("display");
  if (modal) modal.remove();
}

