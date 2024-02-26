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



