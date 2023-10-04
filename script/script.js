let products = [
  {
    id: 1,
    title: "White sneaker",
    description:
      "MRP in Indian currency: ₹2,699.00 ₹2,399.00 per pair (Inclusive of all taxes)",
    price: 2399,
    thumbnail: "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    title: "T-rock sneaker",
    description:
      "MRP in Indian currency: ₹2,999.00 ₹2,499.00 per pair (Inclusive of all taxes)",
    price: 2499,
    thumbnail: "/images/images (2).jpg",
  },
  {
    id: 3,
    title: "Sneaker",
    description:
      "MRP in Indian currency:₹1,699.00₹1,399.00 per pair (Inclusive of all taxes)",
    price: 1399,
    thumbnail: "../images/images (1).jpg",
  },
  {
    id: 4,
    title: "Adidas",
    description:
      "MRP in Indian currency: ₹1,999.00 ₹1,499.00 per pair (Inclusive of all taxes)",
    price: 1499,
    thumbnail: "images/download (2).jpg",
  },
  {
    id: 5,
    title: "Adidas Pureboost",
    description:
      "MRP in Indian currency: ₹2,599.00 ₹2,099.00 per pair (Inclusive of all taxes)",
    price: 2099,
    thumbnail: "images/download.jpg",
  },
  {
    id: 6,
    title: "Adidas Men",
    description:
      "MRP in Indian currency: ₹2,699.00 ₹2,399.00 per pair (Inclusive of all taxes)",
    price: 2399,
    thumbnail: "images/download (1).jpg",
  },
  {
    id: 7,
    title: "Casual Shirt",
    description:
      "MRP in Indian currency: ₹1,699.00 ₹1,299.00 per pair (Inclusive of all taxes)",
    price: 1299,
    thumbnail: "images/images (4).jpg",
  },
  {
    id: 8,
    title: "Black Shirt",
    description:
      "MRP in Indian currency: ₹1,299.00 ₹899.00 per pair (Inclusive of all taxes)",
    price: 899,
    thumbnail: "images/zoom_0-1673529652.webp",
  },
  {
    id: 9,
    title: "Casual for Men",
    description:
      "MRP in Indian currency: ₹2,299.00 ₹1,899.00 per pair (Inclusive of all taxes)",
    price: 1899,
    thumbnail: "images/images (3).jpg",
  },
  {
    id: 10,
    title: "Steezy Grey shirt",
    description:
      "MRP in Indian currency: ₹1,699.00 ₹1,399.00 per pair (Inclusive of all taxes)",
    price: 1399,
    thumbnail: "images/images (5).jpg",
  },
  {
    id: 11,
    title: "Casual Checked",
    description:
      "MRP in Indian currency: ₹2,699.00 ₹1,999.00 per pair (Inclusive of all taxes)",
    price: 1999,
    thumbnail: "images/download (5).jpg",
  },
  {
    id: 12,
    title: "Plain Shirt",
    description:
      "MRP in Indian currency: ₹1,699.00 ₹1,399.00 per pair (Inclusive of all taxes)",
    price: 1399,
    thumbnail: "images/download (4).jpg",
  },
  {
    id: 13,
    title: "Casual Pant",
    description:
      "MRP in Indian currency: ₹1,399.00 ₹2,299.00 per pair (Inclusive of all taxes)",
    price: 2299,
    thumbnail: "images/download (3).jpg",
  },
  {
    id: 14,
    title: "Grey formal Pant",
    description:
      "MRP in Indian currency: ₹2,299.00 ₹1,899.00 per pair (Inclusive of all taxes)",
    price: 1899,
    thumbnail: "images/images (7).jpg",
  },
  {
    id: 15,
    title: "Casual Pant",
    description:
      "MRP in Indian currency: ₹1,299.00 ₹899.00 per pair (Inclusive of all taxes)",
    price: 899,
    thumbnail: "images/men-casual-pant.jpg",
  },

  {
    id: 16,
    title: "Grey jean",
    description:
      "MRP in Indian currency: ₹2,699.00 ₹2,399.00 per pair (Inclusive of all taxes)",
    price: 2399,
    thumbnail: "images/images (8).jpg",
  },
  {
    id: 17,
    title: "Blue jean",
    description:
      "MRP in Indian currency: ₹3,699.00 ₹2,999.00 per pair (Inclusive of all taxes)",
    price: 2999,
    thumbnail: "images/images (9).jpg",
  },
  {
    id: 18,
    title: "Jogger",
    description:
      "MRP in Indian currency: ₹2,699.00 ₹2,399.00 per pair (Inclusive of all taxes)",
    price: 2399,
    thumbnail: "images/images (10).jpg",
  },
];

let users = [
  { id: 1, email: "selvin@gmail.com", password: "1234" },
  { id: 2, email: "user@gmail.com", password: "user" },
  { id: 3, email: "gnanesh@gmail.com", password: "gnanesh" },
];

let carts = [
  {
    title: "shoe",
    Quantity: 2,
    price: 2000,
  },
];

window.addEventListener("load", () => {
  if (!localStorage.getItem("productsRef")) {
    localStorage.setItem("productsRef", JSON.stringify(products));
  }
  if (!localStorage.getItem("usersRef")) {
    localStorage.setItem("usersRef", JSON.stringify(users));
  }
  if (location.pathname === "/online_shopping/index.html") {
    userHomePage();
  }
  if (location.pathname === "/online_shopping/admin/index.html") {
    adminHomePage();
  }
  if (location.pathname === "/online_shopping/user/cart.html") {
    cartPage();
  }
  if (location.pathname === "/online_shopping/user/order.html") {
    userOrders();
  }
  if (location.pathname === "/online_shopping/admin/order.html") {
    adminOrders();
  }

  if (
    location.pathname === "/online_shopping/index.html" ||
    location.pathname === "/online_shopping/user/order.html" ||
    location.pathname === "/online_shopping/user/cart.html"
  ) {
    cartCount();
  }

  if (location.pathname === "/online_shopping/admin/add_product.html") {
    let params = new URL(document.location).searchParams;
    let productId = params.get("id");
    if (productId) {
      const products = JSON.parse(localStorage.getItem("productsRef"));
      const product = products.find(
        (product) => product.id === parseInt(productId)
      );
      populateProduct(product);
    }
  }
});

//random number
const randomNumber = () => {
  return Math.floor(Math.random() * 1000);
};

//sign up
const signUp = () => {
  const userRef = document.getElementById("userSignUp");
  const emailRef = document.getElementById("emailSignUp");
  const passwordRef = document.getElementById("passwordSignUp");
  const confirmPasswordRef = document.getElementById("confirmPasswordSignUp");
  const errorRef = document.getElementById("errorSignUp");
  if (
    userRef.value.length > 0 &&
    emailRef.value.length > 0 &&
    passwordRef.value.length > 0 &&
    confirmPasswordRef.value.length > 0
  ) {
    if (passwordRef.value === confirmPasswordRef.value) {
      users.push({
        id: randomNumber(),
        email: emailRef.value,
        password: passwordRef.value,
      });
      localStorage.setItem("usersRef", JSON.stringify(users));
      location.href = "/online_shopping/user/signin.html";
    } else {
      errorRef.innerText = "Password Mismached !!!";
    }
  } else {
    errorRef.innerText = "Fields are Empty !!!";
  }
};

//sign in
const signIn = () => {
  const emailRef = document.getElementById("emailSignIn");
  const passwordRef = document.getElementById("passwordSignIn");
  const errorRef = document.getElementById("errorSignIn");
  if (emailRef.value.length > 0 && passwordRef.value.length > 0) {
    let users = JSON.parse(localStorage.getItem("usersRef"));
    const loggedUser = users.find(
      (user) =>
        user.email === emailRef.value && user.password === passwordRef.value
    );
    if (!loggedUser) {
      errorRef.innerText = "Invalid Credentials !!!";
    } else {
      sessionStorage.setItem("userId", loggedUser.id);
      if (
        emailRef.value === "selvin@gmail.com" &&
        passwordRef.value === "1234"
      ) {
        location.replace("/online_shopping/admin/index.html");
      } else {
        location.replace("/online_shopping/index.html");
      }
    }
  } else {
    errorRef.innerText = "Fields are Empty !!!";
  }
};

//sign out
const signOut = () => {
  sessionStorage.removeItem("userId");
  location.replace("/online_shopping/user/signin.html");
};

// loading products in user home page
const userHomePage = () => {
  
  const productsRef = document.getElementById("productsLoop");
  const productSet = JSON.parse(localStorage.getItem("productsRef"));
  let body = "";
  for (let product of productSet) {
    body += `<div class="col-lg-4">      
    <img
      class="card-img-top height1"
      src="${product.thumbnail}"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">
        ${product.description}
      </p>
      <p class="in">Quantity</p>
      <select name="quantity" id="quantity1">
        <option value="select">1</option>
        <option value="select">2</option>
        <option value="select">3</option>
        <option value="select">4</option>
        <option value="select">5</option>
      </select>
      <input class="cart" type="submit" onclick="addToCart(${product.id})" value="Add to Cart" />
    
      <input class="buy" type="submit" value="Buy Now" />
 </div>
 </div>`;
  }
  productsRef.innerHTML = body;
};

// loading products in admin home page
const adminHomePage = () => {
  const productsRef = document.getElementById("tableBody");
  const productSet = JSON.parse(localStorage.getItem("productsRef"));
  let body = "";
  for (let product of productSet) {
    body += `<tr>
    <td><img src="${product.thumbnail}" alt="image" class="img-fluid img-thumbnail" style="width:150px;height:"50px;"/></td>
    <td>${product.title}</td>
    <td>${product.description}</td>
    <td>${product.price}</td>
    <td class="d-flex">
      <button type="button" class="btn btn-primary mr-3" onclick="editProduct(${product.id})">Edit</button
      ><button type="button" class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
    </td>
  </tr>`;
  }
  productsRef.innerHTML = body;
};

// delete products in admin home page
const deleteProduct = (id) => {
  const products = JSON.parse(localStorage.getItem("productsRef"));
  const filterProduct = products.filter((product) => product.id !== id);
  localStorage.setItem("productsRef", JSON.stringify(filterProduct));
  adminHomePage();
};

// edit products in admin home page
const editProduct = (id) => {
  location.href = `/online_shopping/admin/add_product.html?id=${id}`;
};

// populating products
const populateProduct = (product) => {
  const idRef = document.getElementById("addId");
  const nameRef = document.getElementById("addName");
  const priceRef = document.getElementById("addPrice");
  const descriptionRef = document.getElementById("addDescription");
  const imageRef = document.getElementById("addImage");
  const titleRef = document.getElementById("addTitle");
  const btnRef = document.getElementById("addBtn");

  idRef.value = product.id;
  nameRef.value = product.title;
  priceRef.value = product.price;
  descriptionRef.value = product.description;
  imageRef.value = product.thumbnail;
  titleRef.innerText = "Edit Product";
  btnRef.innerText = "Update Product";
};

// addProduct
const addProduct = () => {
  const idRef = document.getElementById("addId");
  const nameRef = document.getElementById("addName");
  const priceRef = document.getElementById("addPrice");
  const descriptionRef = document.getElementById("addDescription");
  const imageRef = document.getElementById("addImage");
  const errorRef = document.getElementById("addError");
  const successRef = document.getElementById("addSuccess");
  const toastMessageRef = document.getElementById("toastMessage");

  let products = JSON.parse(localStorage.getItem("productsRef"));
  let id = idRef.value;
  if (
    nameRef.value == "" &&
    priceRef.value == "" &&
    descriptionRef.value == "" &&
    imageRef.value == ""
  ) {
    errorRef.innerText = "Fields are Empty !!!";
  } else {
    if (id) {
      const product = products.find((product) => product.id === parseInt(id));
      products = products.filter((product) => product.id !== parseInt(id));
      products.push({
        ...product,
        title: nameRef.value,
        description: descriptionRef.value,
        price: priceRef.value,
        thumbnail: imageRef.value,
      });
      toastMessageRef.innerText = "Product added updatedfully !!!";
    } else {
      products.push({
        id: randomNumber("productsRef"),
        title: nameRef.value,
        description: descriptionRef.value,
        price: priceRef.value,
        thumbnail: imageRef.value,
      });

      toastMessageRef.innerText = "Product added successfully !!!";
    }
    successRef.classList.add("fade", "show");
    localStorage.setItem("productsRef", JSON.stringify(products));
    setTimeout(() => {
      location.href = "/online_shopping/admin/index.html";
    }, 1500);
  }
};

// loading products in cart page
const cart = () => {
  const bodyRef = document.getElementById("cartBody");
  const totalRef = document.getElementById("totalCart");

  const cart = JSON.parse(localStorage.getItem("cart"));
  let userId = parseInt(sessionStorage.getItem("userId"));
  let cartItem = carts.filter((a) => a.userId === userId);
  let body = "";
  let total = 0;
  for (let product of cartItem) {
    total = total + parseInt(product.count) * parseInt(product.price);
    const count = product.count * product.price;
    console.log(count.value);
    body += `<tr>
                  <td>${product.title}</td>
                  <td>${product.Quantity}</td>
                  <td>${product.price}</td>
                  <td>${count}</td>
                </tr>`;
  }
  bodyRef.innerHTML = body;
};

// add to cart
const addToCart = (id) => {
  let products = JSON.parse(localStorage.getItem("productsRef"));
  const product = products.find((product) => product.id === parseInt(id));

  if (!sessionStorage.getItem("userId")) {
    location.href = "/online_shopping/user/signin.html";
  } else {
    let userId = parseInt(sessionStorage.getItem("userId"));
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    const cartProduct = cart.find(
      (c) => c.userId === parseInt(userId) && c.id === parseInt(id)
    );
    if (cartProduct) {
      cart = cart.map((a) => {
        if (a.id === parseInt(id) && a.userId === parseInt(userId)) {
          return { ...a, count: a.count + 1 };
        } else {
          return a;
        }
      });
    } else {
      cart.push({ userId: parseInt(userId), count: 1, ...product });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount();
  }
};

// updating cart
const cartCount = () => {
  const cartCountRef = document.getElementById("cartCount");
  if (sessionStorage.getItem("userId")) {
    const userId = parseInt(sessionStorage.getItem("userId"));
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const userCart = cart.filter((o) => o.userId === userId);

      if (userCart.length > 0) {
        const cartCount = userCart.reduce((acc, curr) => {
          acc += curr.count;
          return acc;
        }, 0);
        cartCountRef.innerText = `Cart - ${cartCount}`;
      } else cartCountRef.innerText = `Cart`;
    }
  } else location.href = "/online_shopping/user/signin.html";
};

// loading Cart Page
const cartPage = () => {
  const cartBodyRef = document.getElementById("cartBody");
  const totalRef = document.getElementById("totalCart");

  if (localStorage.getItem("cart")) {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (sessionStorage.getItem("userId")) {
      const userId = parseInt(sessionStorage.getItem("userId"));
      const userCart = cart.filter((c) => c.userId === userId);

      let body = "";
      let total = 0;
      for (let cartItem of userCart) {
        total = total + parseInt(cartItem.count) * parseInt(cartItem.price);
        const count = cartItem.count * cartItem.price;
        body += `<tr>
                  <td>${cartItem.title}</td>
                  <td>${cartItem.count}</td>
                  <td>${cartItem.price}</td>
                  <td>₹ ${count}</td>
                </tr>`;
      }
      cartBodyRef.innerHTML = body;
      totalRef.innerText = `Total - ₹ ${total}`;
    } else {
      location.href = "/online_shopping/user/signin.html";
    }
  }
};

// checkOutHandler
const checkOut = () => {
  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const userId = parseInt(sessionStorage.getItem("userId"));
      const userCart = cart.filter((c) => c.userId === userId);

      let orders = [];
      if (localStorage.getItem("orders")) {
        orders = JSON.parse(localStorage.getItem("orders"));
      }
      orders.push({
        timestamp: Date.now(),
        userId: userId,
        status: "Pending",
        products: userCart,
      });

      const otherUserCart = cart.filter((c) => c.userId !== userId);
      localStorage.setItem("cart", JSON.stringify(otherUserCart));
      localStorage.setItem("orders", JSON.stringify(orders));
      cartCount();
      location.href = "/online_shopping/index.html";
    } else {
      location.href = "/online_shopping/index.html";
    }
  } else {
    location.href = "/online_shopping/user/signin.html";
  }
};

// loading orders in user Page
const userOrders = () => {
  const tableRef = document.getElementById("orderTable");

  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("orders")) {
      const orders = JSON.parse(localStorage.getItem("orders"));
      const userId = parseInt(sessionStorage.getItem("userId"));
      const userOrder = orders.filter((order) => order.userId === userId);

      let body = "";
      for (let order of userOrder) {
        let product = "";
        let total = 0;
        for (let prod of order.products) {
          product += `<p>${prod.count} * ${prod.title}</p>`;
          total += prod.count * prod.price;
        }

        const date = new Date(order.timestamp);
        const formattedDate =
          date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        body += `<tr>
          <td>${order.timestamp}</td>
          <td>${formattedDate}</td>
          <td>${product}</td>
          <td>₹ ${total}</td>
          <td class="${
            order.status === "Pending"
              ? "text-warning"
              : order.status === "Delivered"
              ? "text-success"
              : "text-danger"
          }">${order.status}</td>
        </tr>`;
      }
      tableRef.innerHTML = body;
    } else {
      location.href = "/online_shopping/index.html";
    }
  } else {
    location.href = "/online_shopping/user/signin.html";
  }
};

// loading orders in admin page
const adminOrders = () => {
  const ordersTableBody = document.getElementById("ordersTableBody");

  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("orders")) {
      const ordersData = JSON.parse(localStorage.getItem("orders"));

      let body = "";
      for (let order of ordersData) {
        let productDetails = "";
        let orderTotal = 0;
        for (let item of order.products) {
          productDetails += `<p>${item.count} * ${item.title}</p>`;
          orderTotal += item.count * item.price;
        }

        const orderDate = new Date(order.timestamp);
        const formattedOrderDate =
          orderDate.getDate() +
          "/" +
          orderDate.getMonth() +
          "/" +
          orderDate.getFullYear();

        const usersData = JSON.parse(localStorage.getItem("usersRef"));
        const orderedUser = usersData.find(
          (user) => user.id === parseInt(order.userId)
        );

        let statusColor = "";
        if (order.status === "Pending") {
          statusColor = "text-warning";
        } else if (order.status === "Delivered") {
          statusColor = "text-success";
        } else if (order.status === "Cancelled") {
          statusColor = "text-danger";
        }

        // Determine the status class
        let statusClass = "";
        if (order.status === "Pending") {
          statusClass = "btn-outline-warning";
        } else if (order.status === "Delivered") {
          statusClass = " btn-outline-success";
        } else if (order.status === "Cancelled") {
          statusClass = "btn-outline-danger";
        }

        // Build the table row with the appropriate status class
        body += `<tr>
            <td>${order.timestamp}</td>
            <td>${formattedOrderDate}</td>
            <td>${orderedUser.email}</td>
            <td>${productDetails}</td>
            <td>₹ ${orderTotal}</td>
            <td>
              <select class="form-select ${statusClass}" id="status-${
          order.timestamp
        }">
                <option value="Pending" ${
                  order.status === "Pending" ? "selected" : ""
                }>Pending</option>
                <option value="Delivered" ${
                  order.status === "Delivered" ? "selected" : ""
                }>Delivered</option>
                <option value="Cancelled" ${
                  order.status === "Cancelled" ? "selected" : ""
                }>Cancelled</option>
              </select>
            </td>
          </tr>`;
      }
      ordersTableBody.innerHTML = body;

      for (let order of ordersData) {
        const statusSelect = document.getElementById(
          `status-${order.timestamp}`
        );
        statusSelect.value = order.status;
        statusSelect.addEventListener("change", () => {
          const updatedOrdersData = JSON.parse(localStorage.getItem("orders"));
          const updatedOrders = updatedOrdersData.map((o) => {
            if (o.timestamp === order.timestamp) {
              return { ...o, status: statusSelect.value };
            } else return o;
          });
          localStorage.setItem("orders", JSON.stringify(updatedOrders));
        });
      }
    } else {
      location.href = "/online_shopping/index.html";
    }
  } else {
    location.href = "/online_shopping/user/signin.html";
  }
};
