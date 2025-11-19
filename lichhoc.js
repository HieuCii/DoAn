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

  const searchInput = document.getElementById("searchInput");
const rows = document.querySelectorAll("#courseTable tr");

searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase();

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(value) ? "" : "none";
    });
});

// Thêm event listener để đảm bảo code chỉ chạy
// khi toàn bộ HTML đã được tải xong.
document.addEventListener('DOMContentLoaded', () => {

    // Lấy tất cả các mục môn học
    const courseItems = document.querySelectorAll('.course-item');

    // Thêm sự kiện click cho mỗi mục
    courseItems.forEach(item => {
        item.addEventListener('click', () => {
            
            // Thêm/xoá một lớp 'active' khi click
            // (File style.css sẽ xử lý việc thay đổi style)
            item.classList.toggle('active');
            
            // Lấy mã môn học từ data-attribute
            const courseId = item.getAttribute('data-course');
            console.log(`Bạn đã click vào môn: ${courseId}`);
            
            // Từ đây, bạn có thể viết logic để lọc lịch học ở trên
            // (Ví dụ: ẩn/hiện các thẻ lịch học dựa trên courseId)
        });
    });

});

// Click môn → lọc lịch
document.querySelectorAll(".course-item").forEach(item => {
    item.addEventListener("click", () => {
        
        // Lấy ID môn
        const courseId = item.getAttribute("data-course");
        const scheduleItems = document.querySelectorAll(".class-box");

        // Nếu môn đang active -> bỏ lọc, hiện hết
        if (item.classList.contains("active")) {
            item.classList.remove("active");
            scheduleItems.forEach(box => box.classList.remove("hidden"));
        }
        else {
            // Xóa active ở môn khác → để chỉ chọn 1 môn
            document.querySelectorAll(".course-item").forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // Ẩn tất cả trước
            scheduleItems.forEach(box => box.classList.add("hidden"));

            // Hiện đúng môn được chọn
            document.querySelectorAll(`.class-box[data-course='${courseId}']`)
                .forEach(box => box.classList.remove("hidden"));
        }
    });
});
