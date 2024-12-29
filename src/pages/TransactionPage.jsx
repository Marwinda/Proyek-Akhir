import React from "react";

function TransactionPage() {
  return (
    <div>
      <h1>Halaman Transaksi</h1>
      <table>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Deskripsi</th>
            <th>Jenis</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-12-18</td>
            <td>Pembelian Buku</td>
            <td>Pengeluaran</td>
            <td>Rp100.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionPage;