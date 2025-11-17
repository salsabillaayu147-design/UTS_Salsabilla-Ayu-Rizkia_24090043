Salsabilla-Ayu-Rizkia_24090043

LINK REPOSITORY = https://github.com/salsabillaayu147-design/UTS_Salsabilla-Ayu-Rizkia_24090043

LINK DEPLOY = https://salsabillaayu147-design.github.io/UTS_Salsabilla-Ayu-Rizkia_24090043/

1. Halaman Login (index.html)
Ini adalah halaman pertama yang diakses pengguna.

   a. Fungsi Utama: Digunakan untuk memvalidasi akses pengguna.
   
   b. Spesifikasi:
   
      • Form berisi dua input: Email (sebagai username) dan Password (diisi dengan NIM). 
      
      • Saat tombol "Login" diklik, JavaScript akan memvalidasi bahwa Email dan Password/NIM tidak boleh kosong. 
      
      • Jika validasi berhasil, akan menampilkan pesan "Login berhasil" lalu melakukan redirect ke dashboard.html.

2. Halaman Dashboard (dashboard.html)
Ini adalah halaman landing page setelah pengguna berhasil login. 

a. Fungsi Utama: Menyajikan ringkasan data produk secara cepat dan menyediakan navigasi.
b. Spesifikasi:
• Menampilkan judul "Dashboard" dan Sidebar Menu. 
• Membuat tiga card summary yang menampilkan Total Produk, Total Penjualan, dan Total Revenue. 
• Data ringkasan (summary) diambil dari array dummy JavaScript.Menggunakan Flexbox atau Grid CSS untuk menata card secara rapi dan responsif. 
• Terdapat tombol "Lihat Data Produk" yang, ketika diklik, mengarahkan pengguna ke halaman products.html.

3. Halaman List Data Produk (products.html)
Ini adalah halaman inti untuk manajemen data. 

a. Fungsi Utama: Menampilkan daftar lengkap data produk dalam format tabel dan memungkinkan manipulasi data (simulasi).
b. Spesifikasi: 
• Menampilkan tabel dengan kolom: No, Product Name, Price, Stock, dan Aksi.
• Data diambil dari array of object (const products = [...]) di file JavaScript.
• Tampilan dan aksi data dijalankan dengan manipulasi DOM.
• Kolom Aksi berisi dua tombol/ikon: - Edit (\small \text{fas fa-pen}) \rightarrow Menampilkan alert "Edit produk (nama produk)". - Delete (\small \text{fas fa-trash}) \rightarrow Menghapus baris produk dari tabel menggunakan metode remove() DOM setelah muncul konfirmasi hapus.
