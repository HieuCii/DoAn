let students = [
  { id: "SV001", name: "Nguyễn Văn A", email: "nguyenvana@university.edu.vn", major: "Khoa học Máy tính", year: "Năm 2", active: true },
  { id: "SV002", name: "Trần Thị B", email: "tranthib@university.edu.vn", major: "Công nghệ Thông tin", year: "Năm 3", active: true },
  { id: "SV003", name: "Lê Văn C", email: "levanc@university.edu.vn", major: "Khoa học Máy tính", year: "Năm 1", active: true },
  { id: "SV004", name: "Phạm Thị D", email: "phamthid@university.edu.vn", major: "An toàn Thông tin", year: "Năm 4", active: true },
  { id: "SV005", name: "Hoàng Văn E", email: "hoange@university.edu.vn", major: "Kinh tế Số", year: "Năm 2", active: false }
];

function renderTable() {
  const tbody = document.getElementById("studentTable");
  tbody.innerHTML = "";

  students.forEach((s, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.email}</td>
        <td>${s.major}</td>
        <td>${s.year}</td>
        <td class="status-cell">
          <span class="badge ${s.active ? "active" : "inactive"}">
            ${s.active ? "Đang học" : "Nghỉ"}
          </span>
        </td>

        <td class="action">
            <i class="fa fa-pen" onclick="editStudent(${i})"></i>
            <i class="fa fa-trash" onclick="deleteStudent(${i})"></i>
        </td>
      </tr>
    `;
  });

  document.getElementById("totalStudent").innerText = students.length;
  document.getElementById("activeStudent").innerText = students.filter(s => s.active).length;
}

renderTable();

document.getElementById("searchInput").addEventListener("input", e => {
  const k = e.target.value.toLowerCase();
  students = students.filter(s =>
    s.name.toLowerCase().includes(k) ||
    s.id.toLowerCase().includes(k) ||
    s.email.toLowerCase().includes(k) ||
    s.major.toLowerCase().includes(k)
  );
  renderTable();
});

// Modal handling
const modal = document.getElementById("modal");
document.getElementById("btnAdd").onclick = () => modal.style.display = "flex";
function closeModal() { modal.style.display = "none"; }

function addStudent() {
  students.push({
    id: masv.value, name: fullname.value, email: email.value,
    major: major.value, year: `Năm ${year.value}`, active: true
  });
  closeModal(); renderTable();
}

function deleteStudent(i) {
  if (confirm("Xóa sinh viên này?")) {
    students.splice(i, 1);
    renderTable();
  }
}
function editStudent(i) {
  alert("Demo chức năng sửa!");
}
// Chuyển đổi tab
const buttons = document.querySelectorAll('.tab-btn');
const slider = document.querySelector('.slider');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.querySelector('.tab-btn.active').classList.remove('active');
    btn.classList.add('active');
    slider.style.left = `${index * 25}%`; // 4 nút => mỗi nút chiếm 25%
  });
});
