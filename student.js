// Giả lập hiệu ứng hoặc chuyển tab menu
const buttons = document.querySelectorAll(".menu button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.getElementById("user").addEventListener("click", function() {
    if (confirm("Bạn có chắc muốn đăng xuất không?")) {
      // Giả lập hành động đăng xuất
      alert("Đã đăng xuất!");
      window.location.href = "login.html"; // Chuyển về trang đăng nhập
    }
  });