// 1-Öncelikle bilgisayar bir sayı tutsun
const rastgeleSayi=Math.ceil(Math.random()*20)
const again=document.querySelector(".again")
const guess=document.querySelector(".guess")
const check=document.querySelector(".check")
const message=document.querySelector(".msg")

console.log("rastgeleSayi", rastgeleSayi);

//! 2-Check butonuna basılınca olacaklar - check tetiklenmeli
// check.onclick=()=>{}
check.addEventListener("click", ()=>{
    const tahmin=guess.value;
    console.log(tahmin);

    //! Tahminde kaç durum çıkar
    //? Alt üst sınırı kontrol et
    //? Tahmini yanlışsa arttır azalt kontrolü
    //? Tahminin doğru oluşu 
    //? Hak bitebilir
    
    //? 1-Bir değer girmediyse checke basmasın-Boş boş basmasini engelleme
    if (!tahmin){
        message.textContent="Lütfen bir tahmin giriniz"
    }
    //? 2-Alt sınır üst sınır kontrol edelim
    else if (tahmin<0 || tahmin>20){
        message.textContent="0-20 arasında bir değer giriniz"
    }
})