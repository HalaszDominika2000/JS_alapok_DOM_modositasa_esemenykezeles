window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa();
    esemenyKezeles1();
    esemenyKezeles2();
   
});

function elemekElerese1() {
    const ELEM=document.querySelectorAll("section h2")[0]
    ELEM.innerHTML="<h2>Elemekelérése1</h2>"
    console.log(ELEM)
}
function elemekElerese2() {
    const ELEM2=document.querySelectorAll("#ide")[0]
    ELEM2.innerHTML="<p>Jó reggelt</p>" 
}
function elemekElerese3() {
    const ELEM3=document.querySelectorAll(".ide")[0]
    ELEM3.innerHTML="<p>Jó reggelt</p>"
    
}
function elemekElerese4() {
    const ELEM4=document.querySelectorAll(".lista")[0]
    let html = "<ul>"
    for (let i = 0; i < 5; i++) {
        const veletlenszam = Math.floor(Math.random() * 31 + 0);
        html += "<li>"+ veletlenszam + "</li>"
        }
    html += "</ul>"
    console.log(html)
    ELEM4.innerHTML=html
    
}
function elemekFormazasa() {
    const ELEM5=document.querySelectorAll(".lista")[0]
    ELEM5.classList.add("formazott")

}
function esemenyKezeles1() {
    const ELEM6=document.querySelectorAll(".lista")[0]
    const ELEMKATTINTAS=document.querySelector(".kattintasutan")
    ELEM6.addEventListener("click", myFunction);

    function myFunction() {
        ELEMKATTINTAS.innerHTML=ELEM6.innerHTML
    }
}
function esemenyKezeles2(){
    const ELEM7=document.querySelectorAll(".feladat")[0] /*A . az az class, # pedig a id*/ /*"Fogd meg" a feladat elemet. (ld.:1. feladat )*/
    ELEM7.innerHTML="<button id='feladat_button'>OK</button>" /*Az elembe írd bele a gombot: "<button>OK</button>" (ld.:2. feladat )*/
    const GOMBELEM=document.querySelector("#feladat_button") /*Ezt szeretnénk megfogni feladat_button*/ /*"Fogd meg" a gomb elemet: (".feladat button") (ld.:1. feladat )*/
    GOMBELEM.addEventListener("click", function() { /*Eseménykezelő addEventListener*/
        /*Az eseménykezelő függvényében írd bele a a feladat elembe a divbe ágyazott képet tartalmazó html kódot. (ld.:2. feladat )*/
            ELEM7.innerHTML+=`<div><img id= "kep" src="Cica.jpg" alt="gyönyörű"></div>`
            const KEPELEM=document.querySelector("#kep") /*Így jeleníti meg a képet*/
    }) /*Adj a gomb elemhez eseménykezelőt (ld.: Eseménykezelés 1 ).*/
}