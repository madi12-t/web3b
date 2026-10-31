// 1. Data transaksi belanja (array of objects)
const transaksi = [
  { id: 1, barang: "Beras 5kg",     harga: 65000, qty: 2, kategori: "makanan" },
  { id: 2, barang: "Minyak Goreng", harga: 18000, qty: 3, kategori: "makanan" },
  { id: 3, barang: "Sabun Mandi",   harga: 4500,  qty: 6, kategori: "kebersihan" },
  { id: 4, barang: "Shampoo",       harga: 22000, qty: 2, kategori: "kebersihan" },
  { id: 5, barang: "Buku Tulis",    harga: 5000,  qty: 10, kategori: "alat tulis" },
  { id: 6, barang: "Pulpen",        harga: 3000,  qty: 12, kategori: "alat tulis" },
];

// 2. filter(): saring berdasarkan kategori (destructuring + arrow function)
const filterKategori = (data, target) =>
  data.filter(({ kategori }) => kategori === target);

// 3. map(): hitung subtotal tiap barang
const hitungSubtotal = (data) =>
  data.map(({ harga, qty, ...sisa }) => ({
    ...sisa,
    harga,
    qty,
    subtotal: harga * qty,
  }));

// 4. reduce(): total keseluruhan
const hitungTotal = (data) =>
  data.reduce((total, { subtotal }) => total + subtotal, 0);

// --- Pemakaian ---
const kategoriDipilih = "alat tulis";

const hasilFilter = filterKategori(transaksi, kategoriDipilih);
const denganSubtotal = hitungSubtotal(hasilFilter);
const total = hitungTotal(denganSubtotal);

console.log(`Kategori: ${kategoriDipilih}`);
denganSubtotal.forEach(({ barang, harga, qty, subtotal }) => {
  console.log(`${barang}: Rp${harga} x ${qty} = Rp${subtotal}`);
});
console.log(`Total keseluruhan: Rp${total}`);