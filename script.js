const header = document.getElementById("header");
const centerContent = document.getElementById("center-content");
const sidebar = document.getElementById("sidebar");
const sidebarCloser = document.getElementById("sidebarClose");
const sidebarOpener = document.getElementById("sidebarOpen");

// Close state
sidebarCloser.addEventListener("click", () => {
    sidebarCloser.classList.add("hidden");
    sidebarOpener.classList.remove("hidden");
    sidebar.classList.add("hidden");

    header.classList.remove("header-sidebarOpen")
    header.classList.add("header-sidebarClosed")

    centerContent.classList.remove("center-content-sidebarOpen");
    centerContent.classList.add("center-content-sidebarClosed");
});

// Open state
sidebarOpener.addEventListener("click", () => { 
    sidebarOpener.classList.add("hidden");
    sidebarCloser.classList.remove("hidden");
    sidebar.classList.remove("hidden");

    header.classList.remove("header-sidebarClosed")
    header.classList.add("header-sidebarOpen")

    centerContent.classList.remove("center-content-sidebarClosed");
    centerContent.classList.add("center-content-sidebarOpen");
});

