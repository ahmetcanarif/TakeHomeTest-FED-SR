const openSettings = document.querySelector(".openSettings"),
  openSidebar = document.querySelector(".openSidebar"),
  openFilterBtn = document.querySelector(".open-filter"),
  filterBox = document.querySelector(".filter-box"),
  content = document.querySelector("#content"),
  sidebar = document.querySelector("#sidebar"),
  settings = document.querySelector("#settings"),
  searchBox = document.querySelector(".search-box"),
  tabButtons = document.querySelectorAll(".tab-header .tab-button"),
  tabBody = document.querySelectorAll(".tab-content .tab-body"),
  sidebarLink = document.querySelectorAll(".mini-sidebar-items li"),
  sidebarDropdowns = document.querySelectorAll("#sidebar .dropdown"),
  miniSidebarDropdowns = document.querySelectorAll(
    ".mini-sidebar-hover-menu .dropdown"
  ),
  bookmarks = document.querySelectorAll(".open-toast");
openSettings.addEventListener("click", function () {
  settings.classList.toggle("active");
});
openSidebar.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  content.classList.toggle("ml-16");
  if (document.querySelector(".mini-sidebar-hover-menu.active")) {
    document
      .querySelector(".mini-sidebar-hover-menu")
      .classList.remove("active");
  }
});
openFilterBtn.addEventListener("click", function () {
  filterBox.classList.toggle("active");
});
tabButtons.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    document
      .querySelector(".tab-header .tab-button.active")
      .classList.remove("active");
    this.classList.add("active");
    document
      .querySelector(".tab-content .tab-body.active")
      .classList.remove("active");
    tabBody[index].classList.toggle("active");
  });
});
sidebarLink.forEach((link, index) => {
  link.addEventListener("click", function () {
    if (
      document
        .querySelector(".mini-sidebar-items button.active")
        .classList.remove("active")
    ) {
      document
        .querySelector(".mini-sidebar-items button.active")
        .classList.remove("active");
      this.classList.add("active");
    }
  });
});
miniSidebarDropdowns.forEach((link, index) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    this.nextElementSibling.classList.toggle("active");
  });
});
sidebarLink.forEach((link, index) => {
  link.addEventListener("mouseover", function () {
    let data = this.getAttribute("data-item");
    let menu = document.querySelector(`#${data}-hover`);
    if (!document.querySelector("#sidebar.active")) {
      menu.classList.add("active");
    }
    if (data == "mail-menu") {
      document.querySelector("#message-menu-hover").classList.remove("active");
    }
    if (data == "message-menu") {
      document.querySelector("#mail-menu-hover").classList.remove("active");
    }
  });
  link.addEventListener("mouseleave", function (event) {
    let data = this.getAttribute("data-item");
    let menu = document.querySelector(`#${data}-hover`);
    if (
      data == "mail-menu" &&
      !menu.contains(event.target) &&
      !this.contains(event.target)
    ) {
      menu.classList.remove("active");
      document.querySelector("#message-menu-hover").classList("remove");
    }
    if (
      data == "message-menu" &&
      !menu.contains(event.target) &&
      !this.contains(event.target)
    ) {
      menu.classList.remove("active");
      document.querySelector("#mail-menu-hover").classList("remove");
    }
    if (!menu.contains(event.target) && !this.contains(event.target)) {
      console.log("sad");
    }
  });
});

let arr = ["#message-menu-hover", "#mail-menu-hover"];
arr.forEach((item) => {
  document.querySelector(item).addEventListener("mouseleave", function (event) {
    this.classList.remove("active");
  });
});

sidebarDropdowns.forEach((link, index) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    this.nextElementSibling.classList.toggle("active");
  });
});
document.addEventListener("click", (event) => {
  const isClickInside = filterBox.contains(event.target);
  if (
    !isClickInside &&
    document.querySelector(".filter-box.active") &&
    !openFilterBtn.contains(event.target) &&
    !searchBox.contains(event.target)
  ) {
    filterBox.classList.remove("active");
  }
});
document.addEventListener("mouseover", (event) => {});

if (document.querySelector("#sidebar.active")) {
  document.querySelector(".mini-sidebar-hover-menu").classList.remove("active");
}
document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

bookmarks.forEach((item) => {
  item.addEventListener("click", function () {
    let toastLength = document.querySelectorAll(".toast").length;
    let toastDiv = document.createElement("div");
    toastDiv.className =
      "toast py-2 px-4 rounded bg-green-200 fixed bottom-4 left-20 flex min-w-40 h-10 text-green-900";
    toastDiv.style.marginBottom = `${toastLength * 40 + toastLength * 10}px`;
    toastDiv.innerText = `Toast is awesome <3`;
    setTimeout(() => {
      toastDiv.remove();
    }, 2000);
    document.body.appendChild(toastDiv);
  });
});
