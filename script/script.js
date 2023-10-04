let products = [
  {
    id: 1,
    title: "White sneaker",
    description:
      "MRP in Indian currency: ₹2,699.00 ₹2,399.00 per pair (Inclusive of all taxes)",
    price: 2399,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChlX8soMik6eDQ0QL4GjAOcJ-JTrW7jAJj2Rvq12A9rtm4nz3dguoCTMU-kTlwNevteU&usqp=CAU",
  },
  {
    id: 2,
    title: "T-rock sneaker",
    description:
      "MRP in Indian currency: ₹2,999.00 ₹2,499.00 per pair (Inclusive of all taxes)",
    price: 2499,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunCVM1eZUbp2YoxYK-8hRMxxRYFbcyukeSuMJs4vCyHOUuIcpiMfgx5HDCrjZj6A__hQ&usqp=CAU",
  },
  {
    id: 3,
    title: "Sneaker",
    description:
      "MRP in Indian currency:₹1,699.00₹1,399.00 per pair (Inclusive of all taxes)",
    price: 1399,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONa-MOx7clS546eloytXT5ABBcrrs0LwlvzrneQQyeM6lB9VAhb8a2_mV-oyJQ4Cyteo&usqp=CAU",
  },
  {
    id: 4,
    title: "Adidas",
    description:
      "MRP in Indian currency: ₹1,999.00 ₹1,499.00 per pair (Inclusive of all taxes)",
    price: 1499,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UswwnHsnghkT25IlV1KfSS_ll2HWko74Kw&usqp=CAU",
  },
  {
    id: 5,
    title: "Adidas Pureboost",
    description:
      "MRP in Indian currency: ₹2,599.00 ₹2,099.00 per pair (Inclusive of all taxes)",
    price: 2099,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCMN1W-RNYdVU_jB8GF79NRKaRYTloE-o8w&usqp=CAU",
  },
  {
    id: 6,
    title: "Adidas Men",
    description:
      "MRP in Indian currency: ₹2,699.00 ₹2,399.00 per pair (Inclusive of all taxes)",
    price: 2399,
    thumbnail:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fh_840%2Cf_auto%2Cq_auto%2Cfl_lossy%2Cc_fill%2Cg_auto%2Ffe530b626c754c9491bdae4e00760785_9366%2FADISCEND_SHOES_Black_GA1103_01_standard.jpg&tbnid=lPECrBSIKO6rOM&vet=12ahUKEwiOnuXO8tyBAxWQ3DgGHXf3A4wQ94IIKAl6BQgBEIUB..i&imgrefurl=https%3A%2F%2Fwww.adidas.co.in%2Fadiscend-shoes%2FGA1103.html&docid=LD3L127TDh-GJM&w=840&h=840&q=adidas%20shoes%20black&hl=en&ved=2ahUKEwiOnuXO8tyBAxWQ3DgGHXf3A4wQ94IIKAl6BQgBEIUB",
  },
  {
    id: 7,
    title: "Casual Shirt",
    description:
      "MRP in Indian currency: ₹1,699.00 ₹1,299.00 per pair (Inclusive of all taxes)",
    price: 1299,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnlviQYiPqBdMJKk28d-VPmzwZ0zpfqrA4fxNq0a_PKLxXOa1eXjOTQTZJgn2S-Iq3eg&usqp=CAU",
  },
  {
    id: 8,
    title: "Black Shirt",
    description:
      "MRP in Indian currency: ₹1,299.00 ₹899.00 per pair (Inclusive of all taxes)",
    price: 899,
    thumbnail:
      "https://img0.junaroad.com/uiproducts/19126302/zoom_0-1673529652.jpg",
  },
  {
    id: 9,
    title: "Casual for Men",
    description:
      "MRP in Indian currency: ₹2,299.00 ₹1,899.00 per pair (Inclusive of all taxes)",
    price: 1899,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ji4pdMQgXo2oye1Fky_eXtSKBoaDe_stkJGrgB97Nx3l7gKM8O1MplIevZY5zBIkEWM&usqp=CAU",
  },
  {
    id: 10,
    title: "Steezy Grey shirt",
    description:
      "MRP in Indian currency: ₹1,699.00 ₹1,399.00 per pair (Inclusive of all taxes)",
    price: 1399,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsaXPt46FAu4GKQbr6Vz9QJSzwi6tuKWbM-xC2TTOmoYc57G2LPv-g4JtPSrXqmoRMo88&usqp=CAU",
  },
  {
    id: 11,
    title: "Casual Checked",
    description:
      "MRP in Indian currency: ₹2,699.00 ₹1,999.00 per pair (Inclusive of all taxes)",
    price: 1999,
    thumbnail:
      "https://www.google.com/imgres?imgurl=http%3A%2F%2Fblackberrys.com%2Fcdn%2Fshop%2Ffiles%2Fcheck-casual-shirt-in-navy-temora-blackberrys-clothing-1.jpg%3Fv%3D1685952840&tbnid=mZwnNig9GjaNoM&vet=12ahUKEwi0-4u28dyBAxXioOkKHXraD7YQMygBegQIARBx..i&imgrefurl=https%3A%2F%2Fblackberrys.com%2Fproducts%2Fcheck-casual-shirt-in-navy-temora&docid=A1daJeU-GJml1M&w=3200&h=4000&q=casual%20check%20shirt&ved=2ahUKEwi0-4u28dyBAxXioOkKHXraD7YQMygBegQIARBx",
  },
  {
    id: 12,
    title: "Plain Shirt",
    description:
      "MRP in Indian currency: ₹1,699.00 ₹1,399.00 per pair (Inclusive of all taxes)",
    price: 1399,
    thumbnail:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.meesho.com%2Fplain-casual-shirt-for-men-premium-cotton-solid-shirt-full-sleeves-slim-fit-stylish-plain-shirt-navy-blue%2Fp%2F2wmn9o&psig=AOvVaw2qlnydGR1nuov2CcgdW5OV&ust=1696526231590000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDu8uvy3IEDFQAAAAAdAAAAABAJ",
  },
  {
    id: 13,
    title: "Casual Pant",
    description:
      "MRP in Indian currency: ₹1,399.00 ₹2,299.00 per pair (Inclusive of all taxes)",
    price: 2299,
    thumbnail:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.jiomart.com%2Fimages%2Fproduct%2Foriginal%2Frvebtlogr0%2Fmen-pure-cotton-casual-trousers-product-images-rvebtlogr0-2-202211250453.jpg%3Fim%3DResize%3D(500%2C630)&tbnid=mVJUJpENSoYX_M&vet=12ahUKEwjow9iI89yBAxXB5TgGHashAUAQMygVegUIARCiAQ..i&imgrefurl=https%3A%2F%2Fwww.jiomart.com%2Fp%2Ffashion%2Fmen-pure-cotton-casual-trousers%2F595541918%3Fsource%3Dshoppingads&docid=bLemBAqtz98OwM&w=339&h=630&itg=1&q=casual%20pants%20for%20men&ved=2ahUKEwjow9iI89yBAxXB5TgGHashAUAQMygVegUIARCiAQ",
  },
  {
    id: 14,
    title: "Grey formal Pant",
    description:
      "MRP in Indian currency: ₹2,299.00 ₹1,899.00 per pair (Inclusive of all taxes)",
    price: 1899,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwRtSBemEwT-hA6bZasCuZic47XEld7Ed9kdomFjeWZWsc0qLWvIM7DFboZqL-fApIRA&usqp=CAU",
  },
  {
    id: 15,
    title: "Casual Pant",
    description:
      "MRP in Indian currency: ₹1,299.00 ₹899.00 per pair (Inclusive of all taxes)",
    price: 899,
    thumbnail:
      "https://5.imimg.com/data5/TF/IW/MY-17554435/men-casual-pant.jpg",
  },

  {
    id: 16,
    title: "Grey jean",
    description:
      "MRP in Indian currency: ₹2,699.00 ₹2,399.00 per pair (Inclusive of all taxes)",
    price: 2399,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygPM1nTNFQVcJSTz7Y_L-cv3vleeb9rnqSQ&usqp=CAU",
  },
  {
    id: 17,
    title: "Blue jean",
    description:
      "MRP in Indian currency: ₹3,699.00 ₹2,999.00 per pair (Inclusive of all taxes)",
    price: 2999,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpyBO8kwkBlpHLjTcpX2FNzXSmDBvp_7ocQ&usqp=CAU",
  },
  {
    id: 18,
    title: "Jogger",
    description:
      "MRP in Indian currency: ₹2,699.00 ₹2,399.00 per pair (Inclusive of all taxes)",
    price: 2399,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtEk1AWnUl5luFwtB2MnERuyt--ipwnoDXg&usqp=CAU",
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
