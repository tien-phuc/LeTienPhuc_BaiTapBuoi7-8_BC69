let mangSo = [];
console.log("mangSo: ", mangSo);

// chức năng lưu mảng
function themSo() {
  const soNhap = document.getElementById("themSo").value;
  const so = parseInt(soNhap);

  // Kiểm tra
  if (!isNaN(so)) {
    mangSo.push(so);

    const hienThiMang = document.querySelector(".hienThiMang");
    hienThiMang.textContent = `==> ${mangSo.join(", ")}`;

    document.getElementById("themSo").value = "";
  }
}

// ###########################################
// chức năng tính tổng các số dương
function tongSoDuong() {
  let tong = 0;

  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) {
      tong += mangSo[i];
    }
  }

  // hiện kết quả
  let span = document.getElementById("resulttongSoDuong");
  span.innerHTML = `<i class="fa-solid fa-angles-right bg-transparent"></i
          > Tổng các số dương trong mảng là: ${tong}`;
}

// ###########################################
// chức năng đếm số dương
function demSoDuong() {
  let tongSoDuong = 0;

  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) {
      tongSoDuong++;
    }
  }
  // hiện kết quả
  let span = document.getElementById("resultDemSoDuong");
  span.innerHTML = `<i class="fa-solid fa-angles-right bg-transparent"></i
          > Trong mảng có ${tongSoDuong} số dương`;
}

// ###########################################
// chức năng tìm số nhỏ nhất
function timSoNhoNhat() {
  if (mangSo.length === 0) {
    return; // Trả về nếu mảng rỗng
  }

  let soNhoNhat = mangSo[0]; // Giả sử phần tử đầu tiên là nhỏ nhất

  // Duyệt từng phần tử trong mảng
  for (let i = 1; i < mangSo.length; i++) {
    if (mangSo[i] < soNhoNhat) {
      soNhoNhat = mangSo[i];
    }
  }

  //hiện kết quả
  let span = document.getElementById("resultTimSoNhoNhat");
  span.innerHTML = `<i class="fa-solid fa-angles-right bg-transparent"></i
          > Số nhỏ nhất trong mảng là: ${soNhoNhat}`;
}

// ###########################################
// chức năng tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
  let soDuongNhoNhat = "Không có";

  // Duyệt từng phần tử trong mảng
  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) {
      if (soDuongNhoNhat === "Không có" || mangSo[i] < soDuongNhoNhat) {
        soDuongNhoNhat = mangSo[i];
      }
    }
  }

  // hiện kết quả
  let span = document.getElementById("resultTimSoDuongNhoNhat");
  span.innerHTML = `<i class="fa-solid fa-angles-right bg-transparent"></i> Số dương nhỏ nhất trong mảng: ${soDuongNhoNhat}`;
}

// ###########################################
// chức năng tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
  let soChanCuoiCung = "";
  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] % 2 == 0) {
      soChanCuoiCung = mangSo[i];
    }
  }

  // hiện kết quả
  let span = document.getElementById("resultTimSoChanCuoiCung");
  span.innerHTML = `<i class="fa-solid fa-angles-right bg-transparent"></i> Số chẵn cuối cùng trong mảng: ${soChanCuoiCung}`;
}

// ###########################################
// chức năng đổi chỗ
function doiCho() {
  let pos1 = parseInt(document.getElementById("pos1").value);
  let pos2 = parseInt(document.getElementById("pos2").value);

  // Kiểm tra nhập vào
  if (
    isNaN(pos1) ||
    isNaN(pos2) ||
    pos1 < 0 ||
    pos2 < 0 ||
    pos1 >= mangSo.length ||
    pos2 >= mangSo.length
  ) {
    alert("Vui lòng nhập lại vị trí hợp lệ!");
    return;
  }

  // Đổi chỗ
  let luu1 = mangSo[pos1];
  mangSo[pos1] = mangSo[pos2];
  mangSo[pos2] = luu1;

  // hiện kết quả
  let span = document.getElementById("resultDoiCho");
  span.innerHTML = `<i class="fa-solid fa-angles-right bg-transparent"></i> Mảng sau khi đổi chỗ: [${mangSo.join(
    ", "
  )}]`;
}

// ###########################################
// chức năng sắp xếp mảng
function sapXepMang() {
  mangSo.sort((a, b) => a - b);

  // hiện kết quả
  document.getElementById(
    "resultSapXepMang"
  ).innerHTML = `<i class="fa-solid fa-angles-right bg-transparent"></i> Mảng sau khi sắp xếp: [${mangSo.join(
    ", "
  )}]`;
}

// ###########################################
// chức năng tìm số nguyên tố đầu tiên
function timSoNguyenToDauTien() {
  let soNguyenToDauTien = -1;

  // Hàm kiểm tra số nguyên tố
  const soNguyenTo = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < mangSo.length; i++) {
    if (soNguyenTo(mangSo[i])) {
      soNguyenToDauTien = mangSo[i];
      break;
    }
  }

  // hiện kết quả
  let span = document.getElementById("resultTimSoNguyenToDauTien");
  span.innerHTML = `<i class="fa-solid fa-angles-right bg-transparent"></i> Số nguyên tố đầu tiên trong mảng là: ${
    soNguyenToDauTien === -1 ? "Không có" : soNguyenToDauTien
  }`;
}

// ###########################################
// chức năng đếm số nguyên trong mảng số thực
let mangSoThuc = [];

function themSoThuc() {
  const soNhap = parseFloat(document.getElementById("demSo").value);

  // Kiểm tra
  if (!isNaN(soNhap)) {
    mangSoThuc.push(soNhap);

    const hienThiMangSoThuc = document.getElementById("spanHienMangSo");
    hienThiMangSoThuc.textContent = `Mảng số nguyên và số thực: ${mangSoThuc.join(
      ", "
    )}`;

    document.getElementById("demSo").value = "";
  }
}

function demSoNguyen() {
  let tongSoNguyen = 0;

  for (let i = 0; i < mangSoThuc.length; i++) {
    // Kiểm tra số nguyên bằng Number.isInteger()
    if (Number.isInteger(mangSoThuc[i])) {
      tongSoNguyen++;
    }
  }

  // hiện kết quả
  let span = document.getElementById("resultDemSoNguyen");
  span.innerHTML = `<i class="fa-solid fa-angles-right bg-transparent"></i> Trong mảng trên có: ${tongSoNguyen} số nguyên`;
}

// ###########################################
// chức năng so sánh số lượng số dương và số âm
function soSanhSoDuongVaSoAm() {
  let soDuong = 0;
  let soAm = 0;

  // Duyệt từng phần tử trong mảng
  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) {
      soDuong++;
    } else if (mangSo[i] < 0) {
      soAm++;
    }
  }

  // Hiển thị kết quả
  let span = document.getElementById("resultSoSanhSoDuongVaSoAm");

  let soSanh = "";
  if (soDuong > soAm) {
    soSanh = ">";
  } else if (soDuong < soAm) {
    soSanh = "<";
  } else if (soDuong == soAm) {
    soSanh = "=";
  }

  span.innerHTML = `<i class="fa-solid fa-angles-right bg-transparent"></i> Số lượng số dương: ${soDuong}, Số lượng số âm: ${soAm} ==> SỐ DƯƠNG ${soSanh} SỐ ÂM`;
}
