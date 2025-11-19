// Chuyển đổi tab
const buttons = document.querySelectorAll('.tab-btn');
const slider = document.querySelector('.slider');

// Lấy tab đang active khi load trang
const activeIndex = Array.from(buttons).findIndex(btn => btn.classList.contains('active'));
if (activeIndex !== -1) {
  slider.style.left = `${activeIndex * 25}%`; // tự đặt vị trí ban đầu
}


buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.querySelector('.tab-btn.active').classList.remove('active');
    btn.classList.add('active');
    slider.style.left = `${index * 25}%`; // 4 nút => mỗi nút chiếm 25%
  });
});


const courses = [
  { code: "CS101", name: "Nhập môn Khoa học Máy tính", credit: 3 },
  { code: "MATH101", name: "Toán Cao cấp 1", credit: 4 },
  { code: "PHY101", name: "Vật lý Đại cương", credit: 3 },
  { code: "ENG101", name: "Tiếng Anh cơ bản", credit: 4 },
  { code: "PE101", name: "Giáo dục Thể chất", credit: 3 },
];

function renderTable() {
  const tbody = document.getElementById("courseTable");
  tbody.innerHTML = courses.map(c => `
    <tr>
      <td>${c.code}</td>
      <td>${c.name}</td>
      <td>${c.credit} tín chỉ</td>
      <td><i class="fa fa-trash delete" onclick="deleteCourse('${c.code}')"></i></td>
    </tr>
  `).join("");
}

function deleteCourse(code) {
  const idx = courses.findIndex(c => c.code === code);
  if (idx !== -1) {
    if (confirm("Bạn có chắc muốn xóa môn này không?")) {
      courses.splice(idx, 1);
      renderTable();
    }
  }
}

renderTable();
