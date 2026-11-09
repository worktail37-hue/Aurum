var SEED_MENU = [
  { id: 1, name: "Burrata & Heirloom Tomato", price: 650, available: true },
  { id: 2, name: "Herb-Crusted Lamb Rack", price: 3700, available: true },
  { id: 3, name: "Creme Brulee", price: 480, available: true },
  { id: 4, name: "Sparkling Elderflower", price: 350, available: true }
];
function loadMenu() {
  var raw = localStorage.getItem("aurumMenu");
  if (raw == null) {
    localStorage.setItem("aurumMenu", JSON.stringify(SEED_MENU));
    return SEED_MENU;
  }
  return JSON.parse(raw);
}
function saveMenu(menu) { localStorage.setItem("aurumMenu", JSON.stringify(menu)); }
function loadOrders() {
  var raw = localStorage.getItem("aurumOrders");
  if (raw == null) { return []; }
  return JSON.parse(raw);
}
function saveOrders(orders) { localStorage.setItem("aurumOrders", JSON.stringify(orders)); }
function formatMoney(amount) { return "₹" + amount; }
function getNextOrderId(orders) {
  var max = 100;
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].id > max) { max = orders[i].id; }
  }
  return max + 1;
}
function getBadgeClass(status) { return status.toLowerCase(); }
