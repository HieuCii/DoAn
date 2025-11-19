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

function login() {
  const user = document.getElementById("ma").value.trim();
  const pass = document.getElementById("matkhau").value.trim();

  const accounts = {
    SV001: "123",
    SV002: "456",
    GV001: "abc",
  };

  if (accounts[user] && accounts[user] === pass) {
    showToast("Đăng nhập thành công!", "success");

    localStorage.setItem("user", user);

    const chucvu = user.substring(0,2);

    setTimeout( () => {
        if(chucvu === "SV"){
            window.location.href = "student.html";
        } else if( chucvu ==="GV"){
            window.location.href = "teacher.html";
        }

    },1000);
  } else {
    showToast(" Sai tên đăng nhập hoặc mật khẩu!", "error")
  }
}
