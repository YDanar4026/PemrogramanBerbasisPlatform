function buatInputan() {
    const namaDepan = document.getElementById('namaDepan').value;
    const namaBelakang = document.getElementById('namaBelakang').value;
    const email = document.getElementById('email').value;
    const jumlahPilihanInput = parseInt(document.getElementById('jumlahPilihan').value); // Ubah nama variabel menjadi jumlahPilihanInput
    var app = document.getElementById('app'); 

    // Membersihkan konten app sebelum menambahkan elemen baru
    app.textContent = '';

    // Membuat dan menambahkan elemen-elemen form yang disabled
    tambahElemenInput(app, 'Nama Depan:', 'namaDepan', namaDepan, true);
    tambahElemenInput(app, 'Nama Belakang:', 'namaBelakang', namaBelakang, true);
    tambahElemenInput(app, 'Email:', 'email', email, true);
    tambahElemenInput(app, 'Jumlah Pilihan Hobi:', 'jumlahPilihan', jumlahPilihanInput, true); // Ubah nama variabel menjadi jumlahPilihanInput

    // Menonaktifkan button setelah digunakan
    var okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.disabled = true;
    app.appendChild(okButton);

    // Membuat inputan untuk setiap pilihan hobi
    for (let i = 1; i <= jumlahPilihanInput; i++) { // Menggunakan jumlahPilihanInput
        tambahElemenInput(app, `Pilihan Hobi ${i}:`, `hobi${i}`, '', false);
    }

    // Membuat button untuk submit pilihan hobi
    var submitButton = document.createElement('button');
    submitButton.textContent = 'OK';
    submitButton.onclick = buatCheckbox;
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

function buatCheckbox() {
    const jumlahPilihan = parseInt(document.getElementById('jumlahPilihan').value);
    var app = document.getElementById('app'); 

    // Membuat div untuk menampung checkbox pilihan hobi
    var checkboxDiv = document.createElement('div');
    app.appendChild(checkboxDiv);

    // Mengumpulkan pilihan hobi dan menambahkannya sebagai checkbox
    for (let i = 1; i <= jumlahPilihan; i++) {
        var hobiValue = document.getElementById(`hobi${i}`).value;

        var checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.id = `hobiCheckbox${i}`;
        checkboxInput.value = hobiValue;

        var label = document.createElement('label');
        label.setAttribute('for', `hobiCheckbox${i}`);
        label.textContent = hobiValue;

        checkboxDiv.appendChild(checkboxInput);
        checkboxDiv.appendChild(label);
        checkboxDiv.appendChild(document.createElement('br'));
    }

    // Membuat button untuk mengonfirmasi pilihan final
    var confirmButton = document.createElement('button');
    confirmButton.textContent = 'OK';
    confirmButton.onclick = tampilkanHasil;
    app.appendChild(confirmButton);
}

function tampilkanHasil() {
    const namaDepan = document.getElementById('namaDepan').value;
    const namaBelakang = document.getElementById('namaBelakang').value;
    const email = document.getElementById('email').value;
    const jumlahPilihanInput = parseInt(document.getElementById('jumlahPilihan').value);
    var app = document.getElementById('app'); 

    let pilihanHobi = [];

    // Mengumpulkan pilihan hobi yang dipilih
    for (let i = 1; i <= jumlahPilihanInput; i++) { // Menggunakan jumlahPilihanInput
        var checkbox = document.getElementById(`hobiCheckbox${i}`);
        if (checkbox.checked) {
            pilihanHobi.push(checkbox.value);
        }
    }

    // Membersihkan app dan menampilkan hasil
    app.innerHTML = '';

    const hasil = document.createElement('p');
    hasil.textContent = `Hallo, nama saya ${namaDepan} ${namaBelakang}, dengan email ${email}, saya mempunyai sejumlah ${jumlahPilihanInput} pilihan hobi yaitu ${pilihanHobi.join(', ')}, dan saya menyukai ${pilihanHobi.join(', ')}.`;
    app.appendChild(hasil);
}