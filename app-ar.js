/* ---------------------------------------------------------------
   Fuji Coffee — menu, cart, checkout
   --------------------------------------------------------------- */

const GROUPS = [
  { id: "milkshakes", name: "ميلك شيك", meta: "Milkshake" },
  { id: "frappuccinos", name: "فرابتشينو", meta: "Frappuccino" },
  { id: "coffee", name: "قهوة", meta: "قهوة" },
  { id: "other", name: "Other Beverages", meta: "Cold drink" },
  { id: "pastries", name: "Cheesecakes & Pastries", meta: "Cheesecake & pastry" }
];

const MENU = [
  // Milkshakes
  { id: "mango-milkshake", name: "ميلك شيك مانجو", price: 450, category: "milkshakes",
    desc: "مانجو ناضج مخلوط كثيف مع حليب بارد وقليل من الثلج.", image: "images/Mango Milkshake.jpg" },
  { id: "strawberry-milkshake", name: "ميلك شيك فراولة", price: 450, category: "milkshakes",
    desc: "فراولة، حليب بارد، وحلاوة معتدلة.", image: "images/Strawberry Milkshake.jpg" },
  { id: "chocolate-milkshake", name: "ميلك شيك شوكولاتة", price: 400, category: "milkshakes",
    desc: "كاكاو عميق ممزوج بالحليب حتى يصبح لامعاً وسميكاً.", image: "images/Chocolate Milkshake.jpg" },
  { id: "vanilla-milkshake", name: "ميلك شيك فانيليا", price: 400, category: "milkshakes",
    desc: "فانيليا ناعمة، حليب بارد، ونهاية نظيفة.", image: "images/Vanilla Milkshake.jpg" },
  { id: "caramel-milkshake", name: "ميلك شيك كراميل", price: 400, category: "milkshakes",
    desc: "كراميل سكر محروق مطوي في قاعدة فانيليا باردة.", image: "images/Caramel Milkshake.jpg" },

  // Frappuccinos
  { id: "chocolate-frappuccino", name: "فرابتشينو شوكولاتة", price: 400, category: "frappuccinos",
    desc: "قهوة ممزوجة، كاكاو، وثلج، منتهية بخط داكن.", image: "images/Chocolate Milkshake.jpg" },
  { id: "vanilla-frappuccino", name: "فرابتشينو فانيليا", price: 400, category: "frappuccinos",
    desc: "قهوة باردة وفانيليا، مخفوقة ناعمة على الثلج.", image: "images/Vanilla Milkshake.jpg" },
  { id: "caramel-frappuccino", name: "فرابتشينو كراميل", price: 400, category: "frappuccinos",
    desc: "قهوة، ثلج، وكراميل، ممزوجة حتى تصبح مخملية.", image: "images/Caramel Milkshake.jpg" },

  // Coffee
  { id: "iced-caramel-macchiato", name: "ماكياتو كراميل بارد", price: 250, category: "coffee",
    desc: "Cold milk, espresso poured over, and a caramel cross on top.", image: "images/Iced Caramel Macchiato.png" },
  { id: "iced-latte", name: "لاتيه بارد", price: 250, category: "coffee",
    desc: "Two shots of espresso over cold milk and clear ice.", image: "images/Iced Latte.jpg" },
  { id: "chocolate-cappuccino", name: "كابتشينو شوكولاتة", price: 250, category: "coffee",
    desc: "Steamed milk, espresso, and a dusting of dark cocoa.", image: "images/Chocolate Cappuccino.jpg" },
  { id: "latte", name: "لاتيه", price: 150, category: "coffee",
    desc: "A warm, even pour with a thin cap of milk foam.", image: "images/Latte.jpg" },
  { id: "coffee", name: "قهوة", price: 50, category: "coffee",
    desc: "Simple, hot, and honest. The cup we make most.", image: "images/Coffee.jpg" },

  // Other beverages
  { id: "mojito", name: "موهيتو", price: 250, category: "other",
    desc: "Lime, mint, and soda over crushed ice. Non-alcoholic.", image: "images/Mojito.jpg" },
  { id: "cocktail", name: "كوكتيل", price: 300, category: "other",
    desc: "Layered fruit and citrus, served long over ice.", image: "images/Cocktail.jpg" },

  // Cheesecakes & pastries
  { id: "san-sebastian-cheesecake", name: "تشيز كيك سان سيباستيان", price: 400, category: "pastries",
    desc: "محروق من الأعلى، ناعم في المركز، يُقطع بارداً.", image: "images/San Sebastian Cheesecake.png" },
  { id: "speculoos-lotus-cheesecake", name: "تشيز كيك سبيكولوس (لوتس)", price: 450, category: "pastries",
    desc: "قاعدة بسكويت كراميل مع كريمة لوتس مبهرة.", image: "images/Speculoos (Lotus) Cheesecake.png" },
  { id: "pistachio-cheesecake", name: "تشيز كيك فستق", price: 450, category: "pastries",
    desc: "فستق محمص مطوي في قاعدة جبن مخبوزة.", image: "images/Pistachio Cheesecake.jpg" },
  { id: "kinder-cheesecake", name: "تشيز كيك كيندر", price: 400, category: "pastries",
    desc: "شوكولاتة حليب وبندق على قاعدة كاكاو.", image: "images/Kinder Cheesecake.jpg" },
  { id: "strawberry-cheesecake", name: "تشيز كيك فراولة", price: 350, category: "pastries",
    desc: "تشيز كيك طري مع فراولة على الوجه.", image: "images/Strawberry Cheesecake.jpg" },
  { id: "oreo-cheesecake", name: "تشيز كيك أوريو", price: 350, category: "pastries",
    desc: "قاعدة بسكويت مسحوق، جبن فانيليا، والمزيد من البسكويت.", image: "images/Oreo Cheesecake.png" },
  { id: "coconut-cheesecake", name: "تشيز كيك جوز الهند", price: 350, category: "pastries",
    desc: "جوز هند محمص وطبقة جبن خفيفة وكريمية.", image: "images/Coconut Cheesecake.jpg" },
  { id: "blackberry-cheesecake", name: "تشيز كيك توت أسود", price: 350, category: "pastries",
    desc: "توت داكن ممزوج في تشيز كيك مخبوز.", image: "images/Blackberry Cheesecake.jpg" },
  { id: "raspberry-cheesecake", name: "تشيز كيك توت", price: 350, category: "pastries",
    desc: "توت حامض مقابل قاعدة جبن ناعمة وباردة.", image: "images/Raspberry Cheesecake.jpg" },
  { id: "matilda-cake", name: "كعكة ماتيلدا", price: 450, category: "pastries",
    desc: "كعكة شوكولاتة عميقة مع وسط طري.", image: "images/Matilda Cake.jpg" },
  { id: "puddle-cake", name: "كعكة بودل", price: 350, category: "pastries",
    desc: "كعكة شوكولاتة صغيرة مع مركز منصهر.", image: "images/Puddle Cake.jpg" },
  { id: "red-velvet-cake", name: "كعكة رد فلفت", price: 350, category: "pastries",
    desc: "فتات كاكاو-أحمر مع طبقة رقيقة من كريمة الجبن.", image: "images/Red Velvet Cake.png" },
  { id: "tiramisu", name: "تيراميسو", price: 350, category: "pastries",
    desc: "إسفنج منقوع في إسبريسو تحت كريمة ماسكاربوني.", image: "images/Tiramisu.jpg" },
  { id: "trilece", name: "تريليش", price: 300, category: "pastries",
    desc: "إسفنج هوائي منقوع في ثلاثة ألبان، منتهى بالكراميل.", image: "images/Trileçe.jpg" },
  { id: "dubai-chocolate-cake", name: "كعكة دبي شوكولاتة", price: 800, category: "pastries",
    desc: "كريمة فستق وكطائفي مقرمش تحت غلاف شوكولاتة.", image: "images/Dubai Chocolate Cake.jpg" },
  { id: "brownies", name: "براونيز", price: 180, category: "pastries",
    desc: "مربعات كاكاو كثيفة مع سطح لامع ومتشقق.", image: "images/Brownies.jpg" },
  { id: "fondant-au-chocolat", name: "فوندان أو شوكولا", price: 200, category: "pastries",
    desc: "كعكة شوكولاتة دافئة مع مركز منصهر جارٍ.", image: "images/Fondant au Chocolat.jpg" }
];

const STORAGE_KEY = "fuji-cart-v1";
const AVAILABILITY_KEY = "fuji-availability-v1";
const AVAILABILITY_ENDPOINT = "/api/availability";
const ADMIN_PASS_KEY = "fuji-admin-pass";
const SHOP_WHATSAPP = "213669353529";
const SHEETS_WEBHOOK = "https://script.google.com/macros/s/AKfycbyMaCYsIaXGZjl6teX5nbTaO4pE7JbkFX5z_Y-5eTzXjzXdqlwx6lpufODqgz7TLeXO/exec";

// Delivery zones — edit names/fees to match your area.
const DELIVERY_ZONES = [
  { id: "zone-1", name: "المنطقة 1 — حتى 2 كم", fee: 150 },
  { id: "zone-2", name: "المنطقة 2 — 2 إلى 5 كم", fee: 200 },
  { id: "zone-3", name: "المنطقة 3 — 5 إلى 8 كم", fee: 250 },
  { id: "zone-4", name: "المنطقة 4 — 8 إلى 12 كم", fee: 300 },
  { id: "zone-5", name: "المنطقة 5 — أكثر من 12 كم", fee: 350 }
];

const fmt = (amount) => `${Number(amount).toLocaleString("en-US")} DA`;

const PLACEHOLDER_IMAGE = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">' +
    '<rect width="400" height="400" fill="#f2ede4"/>' +
    '<circle cx="252" cy="152" r="34" fill="none" stroke="#b8b0a2" stroke-width="2"/>' +
    '<path d="M86 268c54 0 88-26 112-64 14-22 24-40 30-54 7 14 17 32 30 54 24 38 58 64 112 64" fill="none" stroke="#b8b0a2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M176 186l10-16 8 11 6-8 7 9 6-11 7 8 6-6 7 9 6-10 6 7 5-5 12 13" fill="none" stroke="#c7c0b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M30 306q25.5-14 51 0t51 0t51 0t51 0t51 0t51 0t51 0" fill="none" stroke="#c7c0b4" stroke-width="1.5" stroke-linecap="round"/>' +
    '<path d="M30 326q25.5-14 51 0t51 0t51 0t51 0t51 0t51 0t51 0" fill="none" stroke="#c7c0b4" stroke-width="1.5" stroke-linecap="round" opacity=".55"/>' +
    '<text x="200" y="362" text-anchor="middle" font-family="Georgia, \'Times New Roman\', serif" font-size="13" fill="#8b8478" letter-spacing="3">PHOTO COMING SOON</text>' +
  '</svg>'
);

function imageFallback(img) {
  if (!img) return;
  img.onerror = null;
  img.src = PLACEHOLDER_IMAGE;
  img.classList.add("is-placeholder");
}

/* ------------------------------ Elements ---------------------------- */

const menuRoot = document.getElementById("menuRoot");
const filters = Array.from(document.querySelectorAll(".filter"));
const cartEl = document.getElementById("cart");
const cartBody = document.getElementById("cartBody");
const cartFoot = document.getElementById("cartFoot");
const cartTitle = document.getElementById("cartTitle");
const cartToggle = document.getElementById("cartToggle");
const cartClose = document.getElementById("cartClose");
const cartCount = document.getElementById("cartCount");
const cartCountSr = document.getElementById("cartCountSr");
const scrim = document.getElementById("scrim");
const checkoutForm = document.getElementById("checkoutForm");
const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");
const deliveryTime = document.getElementById("deliveryTime");
const deliveryArea = document.getElementById("deliveryArea");
const deliveryAddress = document.getElementById("deliveryAddress");
const deliveryFeeEl = document.getElementById("deliveryFee");
const orderNote = document.getElementById("orderNote");
const readyHint = document.getElementById("readyHint");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");
const toastEl = document.getElementById("toast");
const siteHeader = document.getElementById("siteHeader");
const manageToggle = document.getElementById("manageToggle");
const manageHint = document.getElementById("manageHint");

/* ------------------------------- State ------------------------------ */

let cart = loadCart();
let availability = loadAvailability();
let manageMode = false;
let activeFilter = "all";
let lastFocused = null;
let toastTimer = null;
let scrimTimer = null;

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((line) => line && MENU.some((item) => item.id === line.id) && Number(line.qty) > 0)
      .map((line) => ({
        id: line.id,
        qty: Math.min(20, Math.max(1, Math.round(Number(line.qty))))
      }));
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    /* storage may be unavailable; the cart still works for this visit */
  }
}

function loadAvailability() {
  const available = {};
  MENU.forEach((item) => {
    available[item.id] = true;
  });

  try {
    const raw = localStorage.getItem(AVAILABILITY_KEY);
    if (!raw) return available;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return available;
    MENU.forEach((item) => {
      if (parsed[item.id] === false) available[item.id] = false;
    });
  } catch {
    /* fall back to everything being available */
  }

  return available;
}

function saveAvailability() {
  try {
    localStorage.setItem(AVAILABILITY_KEY, JSON.stringify(availability));
  } catch {
    /* storage may be unavailable; toggles still work for this visit */
  }
}

function getAdminPass() {
  try { return sessionStorage.getItem(ADMIN_PASS_KEY) || ""; } catch { return ""; }
}
function setAdminPass(pass) {
  try { sessionStorage.setItem(ADMIN_PASS_KEY, pass); } catch { /* ignore */ }
}
function clearAdminPass() {
  try { sessionStorage.removeItem(ADMIN_PASS_KEY); } catch { /* ignore */ }
}

async function fetchRemoteAvailability() {
  try {
    const res = await fetch(AVAILABILITY_ENDPOINT, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data && data.availability && typeof data.availability === "object"
      ? data.availability
      : null;
  } catch {
    return null; // offline / not deployed
  }
}

async function refreshAvailability() {
  const remote = await fetchRemoteAvailability();
  if (!remote) return;
  let changed = false;
  MENU.forEach((item) => {
    if (remote[item.id] === false && availability[item.id] !== false) {
      availability[item.id] = false; changed = true;
    }
    if (remote[item.id] === true && availability[item.id] === false) {
      availability[item.id] = true; changed = true;
    }
  });
  if (changed) { saveAvailability(); renderMenu(); pruneUnavailableCart(); }
}

function pruneUnavailableCart() {
  const before = cart.length;
  cart = cart.filter((line) => isAvailable(line.id));
  if (cart.length !== before) { saveCart(); renderCart(); }
}

async function verifyAdminPass(pass) {
  try {
    const res = await fetch(AVAILABILITY_ENDPOINT, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "x-admin-pass": pass },
      body: JSON.stringify({ availability: {} })
    });
    return res.ok;
  } catch {
    return true; // offline: allow local editing
  }
}

async function pushAvailability() {
  const pass = getAdminPass();
  if (!pass) return false;
  try {
    const res = await fetch(AVAILABILITY_ENDPOINT, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "x-admin-pass": pass },
      body: JSON.stringify({ availability })
    });
    if (!res.ok) return false;
    const data = await res.json();
    if (data && data.availability && typeof data.availability === "object") {
      MENU.forEach((item) => {
        if (data.availability[item.id] === false) availability[item.id] = false;
        if (data.availability[item.id] === true) availability[item.id] = true;
      });
      saveAvailability();
    }
    return true;
  } catch {
    return false; // offline
  }
}

function isAvailable(id) {
  return availability[id] !== false;
}

function updateCardAvailability(card, item, available) {
  if (!card) return;

  card.classList.toggle("is-soldout", !available);

  const addButton = card.querySelector(".card-add");
  if (addButton) {
    addButton.disabled = !available;
    addButton.setAttribute(
      "aria-label",
      available ? `Add ${item.name} to order` : `${item.name} is sold out`
    );
  }

  const media = card.querySelector(".card-media");
  let badge = card.querySelector(".soldout-badge");

  if (!available && !badge && media) {
    badge = document.createElement("span");
    badge.className = "soldout-badge";
    badge.textContent = "Sold out";
    media.insertBefore(badge, media.firstChild);
  } else if (available && badge) {
    badge.remove();
  }
}

function findItem(id) {
  return MENU.find((item) => item.id === id);
}

function groupFor(category) {
  return GROUPS.find((group) => group.id === category);
}

function linePrice(item) {
  return item.price;
}

function cartTotalQty() {
  return cart.reduce((sum, line) => sum + line.qty, 0);
}

/* ------------------------------- Menu ------------------------------- */

function menuCard(item, index) {
  const available = isAvailable(item.id);

  return `
    <article class="card${available ? "" : " is-soldout"}" style="animation-delay:${index * 30}ms">
      <div class="card-media">
        <img
          class="menu-img"
          src="${escapeHtml(item.image)}"
          alt="${escapeHtml(item.name)}"
          width="800"
          height="1000"
          loading="lazy"
          decoding="async"
          onerror="imageFallback(this)"
        >
        ${available ? "" : '<span class="soldout-badge">Sold out</span>'}
        ${
          manageMode
            ? `<input class="avail-toggle" type="checkbox" role="switch" data-availability="${item.id}" ${
                available ? "checked" : ""
              } aria-label="Mark ${escapeHtml(item.name)} available">`
            : ""
        }
        <button class="card-add" type="button" data-add="${item.id}" ${
          available ? "" : "disabled"
        } aria-label="${
          available
            ? `Add ${escapeHtml(item.name)} to order`
            : `${escapeHtml(item.name)} is sold out`
        }">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
            <path d="M12 5v14M5 12h14"></path>
          </svg>
        </button>
      </div>
      <div class="card-body">
        <div class="card-head">
          <h3 class="card-name">${escapeHtml(item.name)}</h3>
          <p class="card-price">${fmt(item.price)}</p>
        </div>
        <p class="card-desc">${escapeHtml(item.desc)}</p>
        <p class="card-meta">${escapeHtml(groupFor(item.category)?.meta || "")}</p>
      </div>
    </article>
  `;
}

function renderMenu() {
  const groups = GROUPS
    .filter((group) => activeFilter === "all" || group.id === activeFilter)
    .map((group) => ({
      ...group,
      items: MENU.filter((item) => item.category === group.id)
    }))
    .filter((group) => group.items.length > 0);

  if (groups.length === 0) {
    menuRoot.innerHTML = '<p class="menu-empty">Nothing on the menu right now.</p>';
    return;
  }

  menuRoot.innerHTML = groups
    .map((group, groupIndex) => `
      ${groupIndex > 0 ? '<div class="menu-wave" aria-hidden="true"></div>' : ""}
      <section class="menu-group" aria-labelledby="group-${group.id}">
        <div class="group-head">
          <h3 id="group-${group.id}">${group.name}</h3>
          <span class="group-count">${group.items.length} ${group.items.length === 1 ? "item" : "items"}</span>
        </div>
        <div class="menu-grid" data-group="${group.id}">
          ${group.items.map(menuCard).join("")}
        </div>
      </section>
    `)
    .join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
    renderMenu();
  });
});

menuRoot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button || button.disabled) return;
  const item = findItem(button.dataset.add);
  if (!item) return;
  if (!isAvailable(item.id)) {
    showToast(`${item.name} is sold out today`);
    return;
  }
  addToCart(item);
  openCart();
});

manageToggle.addEventListener("click", async () => {
  if (manageMode) {
    manageMode = false;
    manageToggle.setAttribute("aria-pressed", "false");
    manageHint.hidden = true;
    document.body.classList.remove("manage-on");
    renderMenu();
    manageToggle.querySelector("span").textContent = "إدارة التوفر";
    return;
  }

  let pass = getAdminPass();
  if (!pass) {
    pass = window.prompt("Admin passphrase to edit availability:");
    if (!pass) return;
  }

  const ok = await verifyAdminPass(pass);
  if (!ok) {
    clearAdminPass();
    showToast("Incorrect passphrase");
    return;
  }
  setAdminPass(pass);

  manageMode = true;
  manageToggle.setAttribute("aria-pressed", "true");
  manageHint.hidden = false;
  document.body.classList.add("manage-on");
  renderMenu();
  manageToggle.querySelector("span").textContent = "تم التعديل";
});

menuRoot.addEventListener("change", (event) => {
  const toggle = event.target.closest("[data-availability]");
  if (!toggle) return;

  const item = findItem(toggle.dataset.availability);
  if (!item) return;

  const available = toggle.checked;
  availability[item.id] = available;
  saveAvailability();
  updateCardAvailability(toggle.closest(".card"), item, available);

  pushAvailability().then((ok) => {
    if (!ok && getAdminPass()) showToast("Saved locally; could not reach the server");
  });

  if (!available) {
    const wasInCart = cart.some((line) => line.id === item.id);
    if (wasInCart) {
      cart = cart.filter((line) => line.id !== item.id);
      saveCart();
      renderCart();
      showToast(`${item.name} marked sold out and removed from the order`);
    } else {
      showToast(`${item.name} marked sold out`);
    }
  } else {
    showToast(`${item.name} is back on the menu`);
  }
});

/* ------------------------------- Cart ------------------------------- */

function renderCart() {
  const count = cartTotalQty();
  updateBadge(count);
  cartTitle.textContent = "طلبك";

  const lines = cart
    .map((line) => ({ line, item: findItem(line.id) }))
    .filter(({ item }) => Boolean(item));

  if (lines.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 48 48" width="54" height="54" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" aria-hidden="true">
          <path d="M11 16h22v9a11 11 0 0 1-22 0v-9Z"></path>
          <path d="M33 18h3.5a4.5 4.5 0 0 1 0 9H33"></path>
          <path d="M9 39h26"></path>
          <path d="M18 10c2-2 2-4 0-6M24 10c2-2 2-4 0-6M30 10c2-2 2-4 0-6"></path>
        </svg>
        <h3>Nothing here yet</h3>
        <p>Your order is waiting to be filled. Start with something cold.</p>
        <button class="btn btn-ghost" type="button" data-browse>Browse the menu</button>
      </div>
    `;
    cartFoot.hidden = true;
    return;
  }

  cartBody.innerHTML = lines
    .map(({ line, item }) => {
      const key = lineKey(line);
      return `
        <div class="cart-line">
          <div class="cart-line-top">
            <div>
              <h3>${escapeHtml(item.name)}</h3>
              <p class="cart-line-meta">${escapeHtml(groupFor(item.category)?.meta || "")}</p>
            </div>
            <button class="line-remove" type="button" data-remove="${key}" aria-label="Remove ${escapeHtml(item.name)} from order">Remove</button>
          </div>
          <div class="cart-line-bottom">
            <div class="stepper">
              <button type="button" data-step="-1" data-key="${key}" aria-label="Decrease ${escapeHtml(item.name)} quantity">−</button>
              <output aria-label="Quantity">${line.qty}</output>
              <button type="button" data-step="1" data-key="${key}" aria-label="Increase ${escapeHtml(item.name)} quantity">+</button>
            </div>
            <span class="line-price">${fmt(linePrice(item) * line.qty)}</span>
          </div>
        </div>
      `;
    })
    .join("");

  const subtotal = lines.reduce((sum, { line, item }) => sum + linePrice(item) * line.qty, 0);
  const fee = deliveryArea ? (DELIVERY_ZONES.find((z) => z.id === deliveryArea.value)?.fee || 0) : 0;
  const total = subtotal + fee;

  subtotalEl.textContent = fmt(subtotal);
  if (deliveryFeeEl) deliveryFeeEl.textContent = fee ? fmt(fee) : "—";
  totalEl.textContent = fmt(total);
  cartFoot.hidden = false;
  updateReadyHint();
}

function lineKey(line) {
  return line.id;
}

function updateBadge(count, animate = false) {
  cartCount.textContent = String(count);
  cartCount.hidden = count === 0;
  cartCountSr.textContent = `${count} ${count === 1 ? "item" : "items"} in cart`;
  if (animate) {
    cartCount.classList.remove("bump");
    void cartCount.offsetWidth;
    cartCount.classList.add("bump");
  }
}

function addToCart(item, qty = 1) {
  const existing = cart.find((line) => line.id === item.id);
  if (existing) {
    existing.qty = Math.min(20, existing.qty + qty);
  } else {
    cart.push({ id: item.id, qty });
  }
  saveCart();
  renderCart();
  updateBadge(cartTotalQty(), true);
  showToast(`${item.name} added`);
}

function stepLine(key, delta) {
  const line = cart.find((entry) => lineKey(entry) === key);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) {
    cart = cart.filter((entry) => lineKey(entry) !== key);
  } else {
    line.qty = Math.min(20, line.qty);
  }
  saveCart();
  renderCart();
}

function removeLine(key) {
  cart = cart.filter((entry) => lineKey(entry) !== key);
  saveCart();
  renderCart();
}

cartBody.addEventListener("click", (event) => {
  const step = event.target.closest("[data-step]");
  if (step) {
    stepLine(step.dataset.key, Number(step.dataset.step));
    return;
  }

  const remove = event.target.closest("[data-remove]");
  if (remove) {
    removeLine(remove.dataset.remove);
    return;
  }

  if (event.target.closest("[data-browse]")) {
    closeCart();
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (event.target.closest("[data-neworder]")) {
    cart = [];
    saveCart();
    checkoutForm.reset();
    customerName.setCustomValidity("");
    customerPhone.setCustomValidity("");
    renderCart();
    updateBadge(0);
    closeCart();
    window.setTimeout(() => {
      document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    }, 280);
  }
});

/* ---------------------------- Cart drawer --------------------------- */

function openCart() {
  lastFocused = document.activeElement;
  window.clearTimeout(scrimTimer);
  scrim.hidden = false;
  cartEl.classList.add("open");
  cartEl.removeAttribute("inert");
  cartEl.setAttribute("aria-hidden", "false");
  cartToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("no-scroll");
  renderCart();
  window.requestAnimationFrame(() => {
    scrim.classList.add("open");
    cartClose.focus({ preventScroll: true });
  });
}

function closeCart() {
  cartEl.classList.remove("open");
  cartEl.setAttribute("inert", "");
  cartEl.setAttribute("aria-hidden", "true");
  cartToggle.setAttribute("aria-expanded", "false");
  scrim.classList.remove("open");
  document.body.classList.remove("no-scroll");
  window.clearTimeout(scrimTimer);
  scrimTimer = window.setTimeout(() => {
    scrim.hidden = true;
  }, 420);
  const canRestore =
    lastFocused &&
    lastFocused !== document.body &&
    lastFocused.isConnected &&
    !cartEl.contains(lastFocused) &&
    typeof lastFocused.focus === "function";

  if (canRestore) {
    lastFocused.focus({ preventScroll: true });
  } else {
    cartToggle.focus({ preventScroll: true });
  }
}

cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
scrim.addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (!cartEl.classList.contains("open")) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeCart();
    return;
  }

  if (event.key !== "Tab") return;

  const focusables = Array.from(
    cartEl.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => el.getClientRects().length > 0);

  if (focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

/* ----------------------------- Checkout ----------------------------- */

function updateReadyHint() {
  if (cartTotalQty() === 0 || cartFoot.hidden) {
    readyHint.textContent = "";
    return;
  }
  const minutes = Number(deliveryTime.value) || 30;
  const ready = new Date(Date.now() + minutes * 60000);
  const time = ready.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  readyHint.textContent = `Estimated delivery around ${time} · pay on delivery`;
}

deliveryTime.addEventListener("change", updateReadyHint);

customerName.addEventListener("input", () => {
  if (customerName.value.trim()) customerName.setCustomValidity("");
});

customerPhone.addEventListener("input", () => {
  if (customerPhone.value.trim()) customerPhone.setCustomValidity("");
});

if (deliveryArea) {
  deliveryArea.addEventListener("change", () => renderCart());
}

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!customerName.value.trim()) {
    customerName.setCustomValidity("Please add your full name.");
  }

  if (!customerPhone.value.trim()) {
    customerPhone.setCustomValidity("Please add a phone number so we can reach you.");
  } else {
    const phoneDigits = customerPhone.value.replace(/\D/g, "");
    if (phoneDigits.length < 6 || phoneDigits.length > 15) {
      customerPhone.setCustomValidity("Please enter a valid phone number.");
    }
  }

  if (deliveryArea && !deliveryArea.value) {
    deliveryArea.setCustomValidity("Please choose your delivery area.");
  } else if (deliveryArea) {
    deliveryArea.setCustomValidity("");
  }

  if (!checkoutForm.checkValidity()) {
    checkoutForm.reportValidity();
    return;
  }
  customerName.setCustomValidity("");
  customerPhone.setCustomValidity("");
  if (deliveryArea) deliveryArea.setCustomValidity("");

  const name = customerName.value.trim().slice(0, 60);
  const phone = customerPhone.value.trim().slice(0, 20);
  const minutes = Number(deliveryTime.value) || 30;
  const ready = new Date(Date.now() + minutes * 60000);
  const readyTime = ready.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const orderNumber = `#FJ-${Math.floor(1000 + Math.random() * 9000)}`;
  const note = orderNote.value.trim().slice(0, 120);

  const deliveryLabel = deliveryTime.options[deliveryTime.selectedIndex]?.text || "في أقرب وقت ممكن";
  const zone = deliveryArea ? DELIVERY_ZONES.find((z) => z.id === deliveryArea.value) : null;
  const zoneName = zone ? zone.name : "";
  const fee = zone ? zone.fee : 0;
  const address = deliveryAddress ? deliveryAddress.value.trim().slice(0, 200) : "";

  const lines = cart
    .map((line) => ({ line, item: findItem(line.id) }))
    .filter(({ item }) => Boolean(item));

  const subtotal = lines.reduce((sum, { line, item }) => sum + linePrice(item) * line.qty, 0);
  const total = subtotal + fee;

  const itemsText = lines
    .map(({ line, item }) => `${line.qty} x ${item.name} (${fmt(linePrice(item) * line.qty)})`)
    .join("; ");
  const totalText = fmt(total);

  const waLines = [
    "New delivery order - Fuji Coffee",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Delivery area: ${zoneName}`,
    address ? `Address: ${address}` : "",
    `Delivery time: ${deliveryLabel}`,
    `Delivery fee: ${fmt(fee)}`,
    "Items:",
    ...lines.map(({ line, item }) => `  ${line.qty} x ${item.name} - ${fmt(linePrice(item) * line.qty)}`),
    `Subtotal: ${fmt(subtotal)}`,
    `Total: ${totalText}`,
    note ? `Note: ${note}` : ""
  ].filter(Boolean);
  const waText = encodeURIComponent(waLines.join("\\n"));
  const waUrl = `https://wa.me/${SHOP_WHATSAPP}?text=${waText}`;

  // hand the order to Netlify Forms (best effort; works once deployed)
  const orderItemsField = document.getElementById("orderItemsField");
  const orderTotalField = document.getElementById("orderTotalField");
  const orderAreaField = document.getElementById("orderAreaField");
  const orderFeeField = document.getElementById("orderFeeField");
  const orderAddressField = document.getElementById("orderAddressField");
  if (orderItemsField) orderItemsField.value = itemsText;
  if (orderTotalField) orderTotalField.value = totalText;
  if (orderAreaField) orderAreaField.value = zoneName;
  if (orderFeeField) orderFeeField.value = fmt(fee);
  if (orderAddressField) orderAddressField.value = address;
  const formData = new FormData(checkoutForm);
  fetch("/", { method: "POST", body: formData }).catch(() => { /* offline / not deployed */ });

  // Mirror the order to Google Sheets (fire-and-forget; no-cors)
  try {
    const sheetParams = new URLSearchParams();
    sheetParams.set("name", name);
    sheetParams.set("phone", phone);
    sheetParams.set("delivery", deliveryLabel);
    sheetParams.set("area", zoneName);
    sheetParams.set("address", address);
    sheetParams.set("fee", fmt(fee));
    sheetParams.set("items", itemsText);
    sheetParams.set("total", totalText);
    if (note) sheetParams.set("note", note);
    fetch(SHEETS_WEBHOOK, { method: "POST", mode: "no-cors", body: sheetParams })
      .catch(() => { /* ignore */ });
  } catch (err) { /* ignore */ }

  const summary = lines
    .map(
      ({ line, item }) => `
        <li>
          <span>${line.qty} × ${escapeHtml(item.name)}</span>
          <span>${fmt(linePrice(item) * line.qty)}</span>
        </li>`
    )
    .join("");

  cart = [];
  saveCart();
  updateBadge(0);

  cartTitle.textContent = "Order confirmed";
  cartFoot.hidden = true;
  cartBody.innerHTML = `
    <div class="order-done">
      <div class="order-check" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5"></path>
        </svg>
      </div>
      <h3>Thank you, ${escapeHtml(name)}</h3>
      <p class="order-number">Order ${orderNumber}</p>
      <p class="order-ready">Delivery to <strong>${escapeHtml(zoneName)}</strong>${address ? ` · ${escapeHtml(address)}` : ""}. Expected around <strong>${readyTime}</strong>. We'll call you at ${escapeHtml(phone)} when your order is on the way. Pay on delivery.</p>
      ${note ? `<p class="order-ready">“${escapeHtml(note)}”</p>` : ""}
      <div class="order-summary">
        <ul>${summary}</ul>
        <div class="summary-total"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
        <div class="summary-total"><span>Delivery (${escapeHtml(zoneName)})</span><span>${fmt(fee)}</span></div>
        <div class="summary-total"><span>Total</span><span>${fmt(total)}</span></div>
      </div>
      <div class="order-actions">
        <a class="btn btn-ghost" href="${waUrl}" target="_blank" rel="noopener">Send on WhatsApp</a>
        <button class="btn btn-ghost" type="button" data-neworder>Start a new order</button>
      </div>
    </div>
  `;
  cartBody.scrollTop = 0;
});

/* ------------------------------- Toast ------------------------------ */

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2600);
}

/* ------------------------------ Helpers ----------------------------- */

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
  });
}

function handleScroll() {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 10);
}

window.addEventListener("scroll", handleScroll, { passive: true });

/* Reveal on scroll */
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("revealed"));
}

/* -------------------------------- Init ------------------------------ */

cart = cart.filter((line) => isAvailable(line.id));
saveCart();

renderMenu();
renderCart();
handleScroll();

// pull the latest availability from the server (no-op when running locally)
refreshAvailability();
