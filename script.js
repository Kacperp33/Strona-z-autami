function zmianazdjecia(auto){
    let zdjecie;

    zdjecie = document.getElementById("zdjecie");

    zdjecie.src = auto;
    zdjecie.style.width = "500px";
    zdjecie.style.height = "200px";
    zdjecie.style.border = "solid 10px rgba(29,200,29,1)";
    zdjecie.alt = "samochód"
    

}

var liczba = 1;

function akcja(){


    let zdjecie;

    zdjecie = document.getElementById("zdjecie");

    liczba++;

    if(liczba > 3){
        liczba = 1;
    }


    if(liczba == 1){
        zdjecie.src = "ferrari.jpg";
    }
    else if(liczba == 2){
        zdjecie.src = "mazda.jpg";
    }
    else if(liczba == 3){
        zdjecie.src = "porsche.jpg";
    }

    zdjecie.style.width = "500px";
    zdjecie.style.height = "200px";
    zdjecie.style.border = "solid 10px rgba(29,200,29,1)";
    zdjecie.alt = "samochód"
}

let interwał = setInterval(akcja, 5000)

let wszystkieliczby =[];

function dodajliczbe() {

    let liczbyinput = document.getElementById("liczby"); // pobranie liczb z inputa które potem trzeba przenieś do nowej zmiennej
    let liczby = liczbyinput.value; // definicja zmiennej liczby i dodanie doniej wartości z inputa

    wszystkieliczby.push(parseInt(liczby)); // wysłanie do tablicy liczb z zmiennej "liczby"

    console.log("Wszystkie liczby:", wszystkieliczby) // wyświetlenie w konsoli

    liczbyinput.value = ""; // wyczyszczenie inputa co każde dodanie liczby
}

function licz() {

    let n = wszystkieliczby.length; // dodanie zmiennej do definicji długości tablicy

    console.log(n); // wyświetlenei w konsoli długości tablicy 

    for(let i=0; i<n; i++){
        for(let j = 1; j < n ; j++){
            if(wszystkieliczby[j -1] > wszystkieliczby[j]) {
                let temp = wszystkieliczby[j - 1];
                wszystkieliczby[j - 1] = wszystkieliczby[j];
                wszystkieliczby[j] = temp;
            
            }
        }
    }




    console.log(wszystkieliczby);


    document.getElementById("posrtowane").innerHTML = wszystkieliczby;

    alert("Kys");



}
