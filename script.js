

// ===============================
// 🔹 Xử lý chuyển tab Sinh viên / Giảng viên
// ===============================
// const svBtn = document.getElementById('svBtn');
// const gvBtn = document.getElementById('gvBtn');
const userLabel = document.querySelector('label[for="userID"]');
const user = document.getElementById('ma');
// const slider = document.querySelector('.slider');

// Khi bấm "Sinh viên"
// svBtn.addEventListener('click', () => {
//   svBtn.classList.add('active');
//   gvBtn.classList.remove('active');
//   slider.style.left = '0';
//   masvLabel.textContent = "Mã sinh viên";
//   masvInput.placeholder = "Nhập mã sinh viên";
// });

// // Khi bấm "Giảng viên"
// gvBtn.addEventListener('click', () => {
//   gvBtn.classList.add('active');
//   svBtn.classList.remove('active');
//   slider.style.left = '50%';
//   masvLabel.textContent = "Mã giảng viên";
//   masvInput.placeholder = "Nhập mã giảng viên";
// });


// ===============================
// 🔹 Hàm thông báo đẹp
// ===============================
function showToast(message, type = "success") {
  const overlay = document.getElementById("toast-overlay");
  const toast = document.getElementById("toast");

  toast.className = type === "success" ? "toast-success" : "toast-error";
  toast.innerText = message;

  // Hiện overlay + toast
  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "auto";

  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "scale(1)";
  }, 50);

  // Ẩn sau 2 giây
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "scale(.8)";
    
    setTimeout(() => {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
    }, 200);
  }, 2000);
}


// ===============================
// 🔹 Hàm đăng nhập
// ===============================
function login() {
  const username = document.getElementById("ma").value.trim();
  const password = document.getElementById("matkhau").value.trim();
  // const isStudent = svBtn.classList.contains("active");

  const accounts = {
    "SV001": "123",
    "SV002": "456",
    "GV001": "abc"
  };

  if (accounts[username] && accounts[username] === password) {
    
    showToast("✅ Đăng nhập thành công!", "success");

    localStorage.setItem("user", username);

    setTimeout(() => {
      if (isStudent) {
        window.location.href = "student.html";
      } else {
        window.location.href = "teacher.html";
      }
    }, 1200);

  } else {
    showToast("❌ Sai tên đăng nhập hoặc mật khẩu!", "error");
  }
}
