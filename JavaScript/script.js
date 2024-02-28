function buatInputan() {
    const nama = document.getElementById('nama').value;
    const jumlahPilihan = parseInt(document.getElementById('jumlahPilihan').value);
    const app = document.getElementById('app');
    
    // Bersihkan app kecuali input nama dan jumlah pilihan
    app.innerHTML = `
        <label for="nama">Nama:</label>
        <input type="text" id="nama" value="${nama}" disabled>
        
        <label for="jumlahPilihan">Jumlah Pilihan:</label>
        <input type="number" id="jumlahPilihan" value="${jumlahPilihan}" disabled>
        
        <button onclick="buatInputan()" disabled>OK</button>
    `;

    // Tambahkan input untuk setiap pilihan
    for (let i = 1; i <= jumlahPilihan; i++) {
        app.innerHTML += `
            <label for="pilihan${i}">Pilihan ${i}:</label>
            <input type="text" id="pilihan${i}">
        `;
    }

    // Tambahkan tombol submit
    app.innerHTML += `<button onclick="buatPilihan()">OK</button>`;
}

function buatPilihan() {
    const nama = document.getElementById('nama').value;
    const jumlahPilihan = parseInt(document.getElementById('jumlahPilihan').value);
    const pilihan = [];
    
    for (let i = 1; i <= jumlahPilihan; i++) {
        pilihan.push(document.getElementById(`pilihan${i}`).value);
    }
    
    const app = document.getElementById('app');
    app.innerHTML += `<div id="pilihanFinal">Pilihan: <br>`;

    // Buat radio button atau dropdown
    pilihan.forEach((item, index) => {
        app.innerHTML += `<input type="radio" name="pilihan" value="${item}"> ${item}<br>`;
    });

    app.innerHTML += `</div><button onclick="tampilkanHasil()">OK</button>`;
}

function tampilkanHasil() {
    const nama = document.getElementById('nama').value;
    const jumlahPilihan = document.getElementById('jumlahPilihan').value;
    const pilihanFinal = document.querySelector('input[name="pilihan"]:checked').value;

    const app = document.getElementById('app');
    app.innerHTML = `
        Hallo, nama saya ${nama}, saya mempunyai sejumlah ${jumlahPilihan} pilihan yaitu ${pilihanFinal}, dan saya memilih ${pilihanFinal}
    `;
}
