let toplamGelir = 50000;
let toplamGider = 0;
let kalan = toplamGelir - toplamGider;

function harcamaKaydet() {
    const tarih = document.getElementById('tarih').value;
    const harcamaMiktari = parseFloat(document.getElementById('harcamaMiktari').value);
    const harcamaAlani = document.getElementById('harcamaAlani').value;

    if (harcamaMiktari > 0) {
        toplamGider += harcamaMiktari;
        kalan = toplamGelir - toplamGider;

        // Harcama kaydını tabloya ekle
        const satir = document.createElement('tr');
        satir.innerHTML = `
            <td>${tarih}</td>
            <td>${harcamaAlani}</td>
            <td>${harcamaMiktari.toFixed(2)}</td>
            <td><button class="sil-button" onclick="harcamaSil(this, ${harcamaMiktari})">Sil</button></td>
        `;
        document.getElementById('harcamaTablosu').appendChild(satir);

        // Tabloyu güncelle
        document.getElementById('giderMiktariToplam').textContent = toplamGider.toFixed(2);
        document.getElementById('kalanMiktari').textContent = kalan.toFixed(2);
    } else {
        alert("Geçerli bir harcama miktarı girin.");
    }
}

function gelirEkle() {
    const gelirMiktari = parseFloat(document.getElementById('gelirMiktari').value);

    if (gelirMiktari > 0) {
        toplamGelir += gelirMiktari;
        kalan = toplamGelir - toplamGider;

        // Gelir miktarını güncelle
        document.getElementById('gelirMiktariToplam').textContent = toplamGelir.toFixed(2);
        document.getElementById('kalanMiktari').textContent = kalan.toFixed(2);
    } else {
        alert("Geçerli bir gelir miktarı girin.");
    }
}

function harcamaSil(button, miktar) {
    // Harcama kaydını sil
    button.closest('tr').remove();
    toplamGider -= miktar;
    kalan = toplamGelir - toplamGider;

    // Tabloyu güncelle
    document.getElementById('giderMiktariToplam').textContent = toplamGider.toFixed(2);
    document.getElementById('kalanMiktari').textContent = kalan.toFixed(2);
}

function verileriTemizle() {
    document.getElementById('harcamaTablosu').innerHTML = '';
    toplamGelir = 50000;
    toplamGider = 0;
    kalan = toplamGelir - toplamGider;
    document.getElementById('gelirMiktariToplam').textContent = toplamGelir.toFixed(2);
    document.getElementById('giderMiktariToplam').textContent = '0';
    document.getElementById('kalanMiktari').textContent = toplamGelir.toFixed(2);
}
