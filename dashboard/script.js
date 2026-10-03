const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});

document.addEventListener("click", function (event) {
    if (
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        sidebar.classList.remove("active");
    }
});

function addProduct(event) {
    event.preventDefault();
    alert("محصول با موفقیت اضافه شد");
}