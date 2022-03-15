
//İsmi kullanıcıdan alacağımız fonksiyon
function getName(){
    var name=prompt("Bir isim giriniz","lütfen isminizi giriniz..")
    var spanName=document.querySelector("#myName");
    spanName.innerHTML=name;
}

//Zaman değerlerini hesaplayan ve veren fonksiyon
function showTime(){
    var span=document.getElementById("clock");
    var date=new Date();
    let sec=String(date.getSeconds()).substring(-2);
    let min=String(date.getMinutes()).substring(-2);
    let hours=String(date.getHours()).substring(-2);
    let day=date.getDay();
    let dayName;
    switch(day){
        case 0:
            dayName="Pazar";
            break;
        case 1:
            dayName="Pazartesi";
            break;
        case 2:
            dayName="Salı";
            break;
        case 3:
            dayName="Çarşamba";
            break;
        case 4:
            dayName="Perşembe";
            break;
        case 5:
            dayName="Cuma";
            break;
        default:
            dayName="Cumartesi";
            break;
    }
    let text=`${hours}:${min}:${sec} ${dayName}`;
    span.textContent=text;
}

//1 saniye bekler ve ardında başlatır
setInterval(showTime, 1000);

