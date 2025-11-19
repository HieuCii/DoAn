// Giả lập hiệu ứng hoặc chuyển tab menu
const buttons = document.querySelectorAll(".menu button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// document.getElementById("user").addEventListener("click", function() {
//     if (confirm("Bạn có chắc muốn đăng xuất không?")) {
//       // Giả lập hành động đăng xuất
//       alert("Đã đăng xuất!");
//       window.location.href = "login.html"; // Chuyển về trang đăng nhập
//     }
//   });

  const searchInput = document.getElementById("searchInput");
const rows = document.querySelectorAll("#courseTable tr");

searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase();

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(value) ? "" : "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("courseTable");

    table.addEventListener("click", function (e) {
        if (!e.target.classList.contains("btn-register")) return;

        let btn = e.target;
        let row = btn.closest("tr");

        let slotSpan = row.querySelector(".slot");
        let current = parseInt(slotSpan.textContent);

        // Lấy số max từ ô chứa "/60"
        let maxText = row.querySelector("td:nth-child(7)").innerText.split("/")[1];
        let max = parseInt(maxText);

        let statusSpan = row.querySelector("td:nth-child(8) span");

        // Đăng ký
        if (!btn.classList.contains("cancel")) {

            if (current >= max) {
                alert("Lớp đã đầy, không thể đăng ký!");
                return;
            }

            slotSpan.textContent = current + 1;

            btn.textContent = "Huỷ";
            btn.classList.add("cancel", "btn-cancel");

            if (current + 1 === max) {
                statusSpan.className = "badge danger";
                statusSpan.textContent = "Đầy";
            }

        } else {
            // Huỷ đăng ký
            slotSpan.textContent = current - 1;

            btn.textContent = "Đăng ký";
            btn.classList.remove("cancel", "btn-cancel");

            statusSpan.className = "badge success";
            statusSpan.textContent = "Còn chỗ";
        }
    });
});
