const login = document.querySelector(".js-login");
const modal = document.querySelector(".js-modal-login");
const modalClose = document.querySelector(".js-modal-login-close");
const modalContainer = document.querySelector(".js-modal-login-container");

showLogin = () => {
  modal.classList.add("open");
};

hideLogin = () => {
  modal.classList.remove("open");
};

login.addEventListener("click", showLogin);
modalClose.addEventListener("click", hideLogin);
modal.addEventListener("click", hideLogin);
modalContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});

const signin = document.querySelector(".js-signin");
const modalSignin = document.querySelector(".js-modal-signin");
const modalSigninClose = document.querySelector(".js-modal-signin-close");
const modalSigninContainer = document.querySelector(
  ".js-modal-signin-container"
);

showSignin = () => {
  modalSignin.classList.add("open");
};

hideSignin = () => {
  modalSignin.classList.remove("open");
};

signin.addEventListener("click", showSignin);
modalSigninClose.addEventListener("click", hideSignin);
modalSignin.addEventListener("click", hideSignin);
modalSigninContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});

validate = (event) => {
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("s-email").value;
  var password = document.getElementById("s-password").value;
  var repassword = document.getElementById("s-repassword").value;
  var phonePattern = /^[0-9]{10,11}$/;

  if (!phonePattern.test(phone) || phone === "") {
    event.preventDefault();
    alert("Vui lòng điền đúng định dạng số điện thoại.");
    return false;
  }

  if (password.length <= 8) {
    event.preventDefault();
    alert("Mật khẩu phải từ 8 kí tự trở lên.");
    return false;
  }

  if (password !== repassword) {
    event.preventDefault();
    alert("Mật khẩu không trùng khớp.");
    return false;
  }

  if (email === "" || password === "" || repassword === "") {
    event.preventDefault();
    alert("Vui lòng điền đầy đủ thông tin.");
    return false;
  }

  // In ra giá trị số điện thoại
  console.log("Số điện thoại:", phone);

  // Confirm thông tin
  var choice = confirm(
    "Xác nhận thông tin:\n - Số điện thoại: " +
      phone +
      "\n - Email: " +
      email +
      "\n - Mật khẩu: " +
      password +
      "\n - Nhập lại mật khẩu: " +
      repassword
  );

  if (choice == 1) {
    alert("Đăng ký thành công!");
    return true;
  } else {
    event.preventDefault();
    return false;
  }
};

const signinForm = document.getElementById("signin-form");

if (signinForm) {
  signinForm.addEventListener("submit", function (event) {
    validate(event);
  });
} else {
  console.error("Signin form not found.");
}
let listprds = [
  {
    id: 1,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/9-300x300.jpg",
    name: "Ghế sofa SF108",
    tag: "BÀN GHẾ SOFA",
    price: 13574000,
    class: "sofa",
  },
  {
    id: 2,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/8-2-300x300.jpg",
    name: "Ghế sofa SF132",
    tag: "BÀN GHẾ SOFA",
    price: 15240000,
    class: "sofa",
  },
  {
    id: 3,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/7-300x300.jpg",
    name: "Ghế sofa SF33",
    tag: "BÀN GHẾ SOFA",
    price: 16752000,
    class: "sofa",
  },
  {
    id: 4,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/1-1-300x300.jpg",
    name: "Ghế sofa SF80",
    tag: "BÀN GHẾ SOFA",
    price: 14250000,
    class: "sofa",
  },
  {
    id: 5,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/2-1-300x300.jpg",
    name: "Ghế sofa SF31",
    tag: "BÀN GHẾ SOFA",
    price: 1528000,
    class: "sofa",
  },
  {
    id: 6,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/4-1-300x300.jpg",
    name: "Ghế sofa SF23",
    tag: "BÀN GHẾ SOFA",
    price: 15968000,
    class: "sofa",
  },
  {
    id: 7,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/5-4-300x300.jpg",
    name: "Ghế sofa SF02",
    tag: "BÀN GHẾ SOFA",
    price: 15968000,
    class: "sofa",
  },
  {
    id: 8,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/6-300x300.jpg",
    name: "Ghế sofa SF01",
    tag: "BÀN GHẾ SOFA",
    price: 20896000,
    class: "sofa",
  },
  {
    id: 9,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/2-3-300x300.jpg",
    name: "Kệ tivi phòng khách KTV96",
    tag: "KỆ TIVI",
    price: 4759000,
    class: "keTV",
  },
  {
    id: 10,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/6-300x300.jpg",
    name: "Kệ tivi gỗ tự nhiên KTV91",
    tag: "KỆ TIVI",
    price: 5050000,
    class: "keTV",
  },
  {
    id: 11,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/1-3-300x300.jpg",
    name: "Kệ tivi cao cấp",
    tag: "KỆ TIVI",
    price: 4550000,
    class: "keTV",
  },
  {
    id: 12,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/6-2-300x300.jpg",
    name: "Kệ Tivi Gỗ Xoan Đào",
    tag: "KỆ TIVI",
    price: 5624000,
    class: "keTV",
  },
  {
    id: 13,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/4-3-300x300.jpg",
    name: "Kệ Tivi Gỗ Đinh Hương",
    tag: "KỆ TIVI",
    price: 8952300,
    class: "keTV",
  },
  {
    id: 14,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/9-3-300x300.jpg",
    name: "Kệ Tivi Gỗ Cẩm",
    tag: "KỆ TIVI",
    price: 7509000,
    class: "keTV",
  },
  {
    id: 15,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/04-300x300.jpg",
    name: "Bộ bàn ghế ăn gỗ Sồi 6 ghế mẫu 2 tầng 1m6",
    tag: "BÀN ĂN",
    price: 8569000,
    class: "banAn",
  },
  {
    id: 16,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/9-3-300x300.jpg",
    name: "Bộ bàn ghế ăn tròn xoay gỗ Xoan Đào 6 ghế",
    tag: "BÀN ĂN",
    price: 7568000,
    class: "banAn",
  },
  {
    id: 17,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/01-2-300x300.jpg",
    name: "Bộ bàn ghế ăn gỗ Xoan Đào 6 ghế",
    tag: "BÀN ĂN",
    price: 8672000,
    class: "banAn",
  },
  {
    id: 18,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/07-300x300.jpg",
    name: "Bộ bàn ghế ăn gỗ Sồi Nga",
    tag: "BÀN ĂN",
    price: 6923800,
    class: "banAn",
  },
  {
    id: 19,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/03-2-300x300.jpg",
    name: "Bộ bàn ghế ăn gỗ Sồi 6 ghế vát góc bọc",
    tag: "BÀN ĂN",
    price: 7856900,
    class: "banAn",
  },
  {
    id: 20,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/03-300x300.jpg",
    name: "Bộ bàn ghế ăn gỗ Sồi",
    tag: "BÀN ĂN",
    price: 6582000,
    class: "banAn",
  },
  {
    id: 21,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/09-300x300.jpg",
    name: "Bộ bàn ghế ăn gỗ Cao Su",
    tag: "BÀN ĂN",
    price: 5471000,
    class: "banAn",
  },
  {
    id: 22,
    img: "https://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/01-1-300x300.jpg",
    name: "Bộ bàn ghế ăn gỗ Sồi 6 ghế mẫu Oval 1m6",
    tag: "BÀN ĂN",
    price: 8642200,
    class: "banAn",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.addEventListener("DOMContentLoaded", () => {
  displaySofa();
  displayKeTV();
  displayBanAn();
});

displaySofa = () => {
  let listSofas = listprds.filter((items) => items.class === "sofa");
  let lists = document.querySelector(".content .sofa .list-prod");
  if (!lists) return; // Kiểm tra sự tồn tại của phần tử DOM
  lists.innerHTML = "";
  let wrapper = document.createElement("div");
  wrapper.className = "row";

  listSofas.forEach((items) => {
    let item = document.createElement("div");
    item.classList.add("l-3", "m-4", "c-6", "item");
    item.innerHTML = `
      <img src="${items.img}" alt="ge sofa" class="item-img" />
      <div class="item-body">
        <p class="tag">${items.tag}</p>
        <p class="name">${items.name}</p>
        <p class="price">${items.price.toLocaleString()} <span>đ</span></p>
      </div>
      <div class="add-to-cart">
        <i onclick="addToCart(${items.id})" class="ti-bag"></i>
      </div>
    `;
    wrapper.appendChild(item);
  });
  lists.appendChild(wrapper);
};

displayKeTV = () => {
  let listKeTV = listprds.filter((items) => items.class === "keTV");
  let lists = document.querySelector(".content .tv-self .list-prod");
  if (!lists) return; // Kiểm tra sự tồn tại của phần tử DOM
  lists.innerHTML = "";
  let wrapper = document.createElement("div");
  wrapper.className = "row";

  listKeTV.forEach((items) => {
    let item = document.createElement("div");
    item.classList.add("l-3", "m-4", "c-6", "item");
    item.innerHTML = `
      <img src="${items.img}" alt="keTV" class="item-img" />
      <div class="item-body">
        <p class="tag">${items.tag}</p>
        <p class="name">${items.name}</p>
        <p class="price">${items.price.toLocaleString()} <span>đ</span></p>
      </div>
      <div class="add-to-cart">
        <i onclick="addToCart(${items.id})" class="ti-bag"></i>
      </div>
    `;
    wrapper.appendChild(item);
  });
  lists.appendChild(wrapper);
};

displayBanAn = () => {
  let listBanAn = listprds.filter((items) => items.class === "banAn");
  let lists = document.querySelector(".content .furniture .list-prod");
  if (!lists) return; // Kiểm tra sự tồn tại của phần tử DOM
  lists.innerHTML = "";
  let wrapper = document.createElement("div");
  wrapper.className = "row";

  listBanAn.forEach((items) => {
    let item = document.createElement("div");
    item.classList.add("l-3", "m-4", "c-6", "item");
    item.innerHTML = `
      <img src="${items.img}" alt="banAn" class="item-img" />
      <div class="item-body">
        <p class="tag">${items.tag}</p>
        <p class="name">${items.name}</p>
        <p class="price">${items.price.toLocaleString()} <span>đ</span></p>
      </div>
      <div class="add-to-cart">
        <i onclick="addToCart(${items.id})" class="ti-bag"></i>
      </div>
      
    `;
    wrapper.appendChild(item);
  });
  lists.appendChild(wrapper);
};

removeFromCart = (productId) => {
  cart = cart.filter((item) => item.id !== productId);
  displayCart();
  saveCart();
  updateCartTotal();
};

saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  // sessionStorage.setItem("cart", JSON.stringify(cart)); // Tùy chọn
  // document.cookie = `cart=${JSON.stringify(cart)};path=/;max-age=${60 * 60 * 24 * 7}`;
};

displayCart = () => {
  const content = document.querySelector(".content");
  if (!content) return; // Kiểm tra sự tồn tại của phần tử DOM
  content.innerHTML = "";

  const slider = document.getElementById("slider");
  if (slider) {
    slider.classList.remove("slider");
    slider.innerHTML = "";
  }

  if (cart.length === 0) {
    content.innerHTML =
      '<p class="empty-trash">Giỏ hàng của bạn đang trống.</p>';
    document.getElementById("cartTotal").textContent = "0 VND";
    return;
  }

  const listItem = document.createElement("div");
  listItem.classList.add("grid", "wide", "list-cart");

  cart.forEach((items) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${items.img}" alt="${items.name}">
      <p class="mid"><span class="name">${items.name}</span><br>
      <span class="quantity">Số lượng: <input type="number" value="${
        items.quantity
      }" min="0" onchange="updateCart(${items.id}, this.value)"></span></p>
      <p class="price">${items.price.toLocaleString()} <u>đ</u></p>
      <p class="delete-cart" title="Xóa" onclick="removeFromCart(${
        items.id
      })"><i class="fa-solid fa-trash-can"></i></p>
    `;
    listItem.appendChild(cartItem);
  });

  const footerCart = document.createElement("div");
  footerCart.className = "footer-cart";
  const cartTotal = document.createElement("div");
  cartTotal.className = "cart-total";
  cartTotal.textContent = "Tổng cộng: " + calculateTotal() + " đ";
  const pay = document.createElement("div");
  pay.className = "pay";
  pay.innerHTML = `<button onclick="pay()">Thanh toán</button>`;
  footerCart.appendChild(cartTotal);
  footerCart.appendChild(pay);
  listItem.appendChild(footerCart);

  content.appendChild(listItem);
};

function calculateTotal() {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total.toLocaleString();
}

updateCartTotal = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  const cartTotalElement = document.querySelector(".cart-total");
  if (cartTotalElement) {
    cartTotalElement.textContent =
      "Tổng cộng: " + total.toLocaleString() + " đ";
  }
};

addToCart = (itemId) => {
  const products = listprds.find((p) => p.id === itemId);
  const cartItem = cart.find((item) => item.id === itemId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...products, quantity: 1 });
  }
  saveCart();
  alert("Đã thêm vào giỏ hàng! ");
  updateCartTotal();
};

updateCart = (productId, quantity) => {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity = parseInt(quantity);
    if (isNaN(cartItem.quantity) || cartItem.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      updateCartTotal();
    }
    displayCart();
  }
};

pay = () => {
  const mainContent = document.querySelector(".content");
  if (!mainContent) return; // Kiểm tra sự tồn tại của phần tử DOM
  mainContent.innerHTML = `
    <div class="pay grid wide" style="margin-top: 180px">
      <h1 style="font-size: 24px;font-weight: bold;">Thanh Toán</h1>
      <form id="payForm">
        <label for="name">Họ và Tên:</label>
        <input type="text" id="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <label for="address">Địa chỉ:</label>
        <input type="text" id="address" required>
        <label for="phone">Số điện thoại:</label>
        <input type="tel" id="phone" required>
        <button style=" margin-left: 50%;transform: translateX(-50%);" type="submit">Xác Nhận Thanh Toán</button>
      </form>
    </div>
  `;
  const checkoutForm = document.getElementById("payForm");
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    processPayment();
  });
};

processPayment = () => {
  alert("Thanh toán thành công! Cảm ơn bạn đã mua sắm.");
  cart = []; // Xóa giỏ hàng
  saveCart(); // Cập nhật giỏ hàng trong bộ nhớ
  window.location.href = "index.html";
};
