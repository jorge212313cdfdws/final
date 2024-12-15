window.onload = initialize;

function initialize() {
    loadProducts();  // Cargar productos desde localStorage

    // Agregar producto
    document.getElementById("form-product").addEventListener("submit", function (event) {
        event.preventDefault();

        let productName = document.getElementById("product-name").value;
        let productPrice = document.getElementById("product-price").value;

        if (productName && productPrice) {
            addProduct(productName, productPrice);
            document.getElementById("product-name").value = '';  // Limpiar campo
            document.getElementById("product-price").value = '';  // Limpiar campo
        }
    });
}

// Cargar productos desde localStorage
function loadProducts() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let productsList = document.getElementById("products-list");
    productsList.innerHTML = '';  // Limpiar la lista antes de agregar productos

    products.forEach((product, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>
                <button class="btn btn-warning btn-edit" onclick="editProduct(${index})">Editar</button>
                <button class="btn btn-danger btn-delete" onclick="deleteProduct(${index})">Eliminar</button>
            </td>
        `;
        productsList.appendChild(row);
    });
}

// Agregar un nuevo producto
function addProduct(name, price) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push({ name, price });
    localStorage.setItem("products", JSON.stringify(products));

    loadProducts();  // Recargar la lista de productos
}

// Editar un producto
function editProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let product = products[index];

    // Rellenar los campos del formulario con los datos del producto
    document.getElementById("product-name").value = product.name;
    document.getElementById("product-price").value = product.price;

    // Cambiar la acción del botón para actualizar
    document.getElementById("form-product").addEventListener("submit", function updateProduct(event) {
        event.preventDefault();

        let updatedName = document.getElementById("product-name").value;
        let updatedPrice = document.getElementById("product-price").value;

        if (updatedName && updatedPrice) {
            products[index] = { name: updatedName, price: updatedPrice };
            localStorage.setItem("products", JSON.stringify(products));
            loadProducts();  // Recargar la lista de productos
        }
    });
}

// Eliminar un producto
function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);  // Eliminar el producto en el índice especificado
    localStorage.setItem("products", JSON.stringify(products));

    loadProducts();  // Recargar la lista de productos
}
