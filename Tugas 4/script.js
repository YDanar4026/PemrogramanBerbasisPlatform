function buatInputan() {
    const nama = document.getElementById('nama').value;
    const jumlahPilihan = parseInt(document.getElementById('jumlahPilihan').value);
    var app = document.getElementById('app'); // var digunakan sesuai permintaan

    // Membersihkan konten app sebelum menambahkan elemen baru
    app.textContent = '';

    // Membuat dan menambahkan elemen-elemen form yang disabled
    tambahElemenInput(app, 'Nama:', 'nama', nama, true);
    tambahElemenInput(app, 'Jumlah Pilihan:', 'jumlahPilihan', jumlahPilihan, true);

    // Menonaktifkan button setelah digunakan
    var okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.disabled = true;
    app.appendChild(okButton);

    // Membuat inputan untuk setiap pilihan
    for (let i = 1; i <= jumlahPilihan; i++) {
        tambahElemenInput(app, `Pilihan ${i}:`, `pilihan${i}`, '', false);
    }

    // Membuat button untuk submit pilihan
    var submitButton = document.createElement('button');
    submitButton.textContent = 'OK';
    submitButton.onclick = buatPilihan;
    app.appendChild(submitButton);
}

function tambahElemenInput(parent, labelText, id, value, disabled) {
    var label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;
    parent.appendChild(label);

    var input = document.createElement('input');
    input.type = 'text';
    input.id = id;
    input.value = value;
    input.disabled = disabled;
    parent.appendChild(input);
}

function buatPilihan() {
    const jumlahPilihan = parseInt(document.getElementById('jumlahPilihan').value);
    var app = document.getElementById('app'); // var digunakan sesuai permintaan

    // Membuat div untuk menampung pilihan final
    var pilihanFinalDiv = document.createElement('div');
    pilihanFinalDiv.id = 'pilihanFinal';
    app.appendChild(pilihanFinalDiv);

    // Mengumpulkan pilihan dan menambahkannya sebagai radio button
    for (let i = 1; i <= jumlahPilihan; i++) {
        var pilihanValue = document.getElementById(`pilihan${i}`).value;
        var radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'pilihan';
        radioInput.value = pilihanValue;

        var label = document.createElement('label');
        label.textContent = pilihanValue;

        pilihanFinalDiv.appendChild(radioInput);
        pilihanFinalDiv.appendChild(label);
        pilihanFinalDiv.appendChild(document.createElement('br'));
    }

    // Membuat button untuk mengonfirmasi pilihan final
    var confirmButton = document.createElement('button');
    confirmButton.textContent = 'OK';
    confirmButton.onclick = tampilkanHasil;
    app.appendChild(confirmButton);
}

function tampilkanHasil() {
    const nama = document.getElementById('nama').value; // Mengambil nama
    const pilihanRadios = document.getElementsByName('pilihan'); // Mengambil semua radio buttons dengan nama 'pilihan'
    let pilihanTerpilih;
    
    for (const radio of pilihanRadios) {
        if (radio.checked) { // Mengecek radio button mana yang terpilih
            pilihanTerpilih = radio.value;
            break;
        }
    }

    // Mengambil semua pilihan untuk menyusun daftar pilihan
    const jumlahPilihan = parseInt(document.getElementById('jumlahPilihan').value);
    let semuaPilihan = [];
    for (let i = 1; i <= jumlahPilihan; i++) {
        semuaPilihan.push(document.getElementById(`pilihan${i}`).value);
    }

    // Membersihkan app dan menampilkan hasil
    var app = document.getElementById('app');
    app.innerHTML = ''; // Membersihkan konten sebelumnya

    const hasil = document.createElement('p');
    hasil.textContent = `Hallo, nama saya ${nama}, saya mempunyai sejumlah ${jumlahPilihan} pilihan yaitu ${semuaPilihan.join(', ')}, dan saya memilih ${pilihanTerpilih}.`;
    app.appendChild(hasil);
}