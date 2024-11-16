// basit eleman yazdırma

const colors = ["red", "green", "blue"]
colors.forEach(color=> {
    console.log(color);
})


// eleman ve indeksi yazdırma

const fruits = ["apple", "banana", "cherry"]
fruits.forEach((fruit, index)=>{
    console.log(`${index}: ${fruit}`);
})


// elemanların toplamını bulma

const numbers=[5, 16, 15]
let total=0;
numbers.forEach(num=>{
    total+=num;
});
console.log(total);


// şarta bağlı işlem yapma
const ages=[12, 18, 24, 16, 30]
ages.forEach(age=> {
    if(age>=18){
        console.log(`${age} yaşındaki kişi yetişkindir.`);
    }
    else{
        console.log(`${age} yaşındaki kişi çocuktur`);
    }
})

//! örnekler

//! 1
const sayilar = [-5, 3, 9, -2, 7, -1, 6]
sayilar.forEach(pozitifSayi=> {
    console.log(pozitifSayi>0 ?`sayı pozitiftir` : null);
})

//! 2
const studentsGrades = [75, 45, 88, 92, 53, 67, 40, 85];
studentsGrades.forEach(durum=> {
    console.log(durum>=60 ? `geçti` : `kaldı`);
})