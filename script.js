window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa();
    esemenyKezeles1();
   
});

function elemekElerese1() {
    const ELEM=document.querySelectorAll("section h2")[0]
    ELEM.innerHTML
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
    ELEM6.addEventListener("click", myFunction);

function myFunction() {
  document.getElementsByClassName("kattintasutan").innerHTML = ELEM6.innerHTML;
}
}