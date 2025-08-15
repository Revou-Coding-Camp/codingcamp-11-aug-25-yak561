// Cek apakah nama pengguna sudah ada di sessionStorage
var storedName = sessionStorage.getItem('userName');
var isHomePage = window.location.pathname.endsWith('home.html');

// Jika nama belum ada dan berada di halaman utama (index.html), tampilkan popup.
if (!storedName && !isHomePage) {
  document.getElementById('nameDialog').showModal();
}

// Fungsi sambutan yang diperbarui
function greet(form) {
    var name = (form.name.value || '').trim();
    if (!name) {
        alert('Nama belum diisi.');
        form.name.focus();
        return false;
    }
    
    // Simpan nama di sessionStorage
    sessionStorage.setItem('userName', name);

    // Setelah nama diisi, redirect ke home.html
    window.location.href = 'home.html';
    
    return false;
}

// Logika untuk halaman home.html
if (isHomePage) {
    var greetingElement = document.getElementById('greeting');
    var pageBody = document.getElementById('pageBody');

    if (storedName && greetingElement) {
        greetingElement.textContent = 'Hai, ' + storedName + ' Selamat Datang di Moon Entertaiment✨';
    } else if (!storedName) {
        // Jika tidak ada nama, redirect kembali ke index.html
        window.location.href = 'index.html';
    }

    // Tampilkan halaman setelah logika selesai
    if (pageBody) {
        pageBody.style.visibility = 'visible';
    }
}

// Tambahkan kode ini ke file script.js Anda

// Fungsi ini akan dipanggil saat form disubmit
function handleFormSubmit() {
    // Mengambil elemen formulir
    var form = document.forms["messageForm"];
    
    // Mengambil nilai dari input
    var nama = form["nama"].value;
    var tanggal = form["tanggal"].value;
    var jenisKelamin = form["jenis_kelamin"].value;
    var pesan = form["pesan"].value;

    // Mengambil elemen output
    var outputNama = document.getElementById("out-nama");
    var outputTanggal = document.getElementById("out-tanggal");
    var outputJK = document.getElementById("out-jk");
    var outputPesan = document.getElementById("out-pesan");
    var currentTime = document.getElementById("current-time");

    // Menampilkan waktu saat ini
    var now = new Date();
    currentTime.textContent = "Current time : " + now.toLocaleString();

    // Menampilkan data yang diinput ke area output
    outputNama.textContent = nama;
    outputTanggal.textContent = tanggal;
    outputJK.textContent = jenisKelamin;
    outputPesan.textContent = pesan;

    // Mencegah halaman dari refresh (penting!)
    return false;
}