const input = document.getElementById("numberBox");
const container = document.querySelector(".container");
let numberOfwords;
const generate = (n) => {
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let d = "";
    for (let i = 0; i < n; ++i) {
        const rand = (Math.random() * (25)).toFixed(0);
        d += s[rand];
    }
    return d;
}
const generatePara = () => {
    numberOfwords = Number(input.value);
    console.log(numberOfwords);
    const para = document.createElement("p");
    let s = "";
    for (let i = 0; i < numberOfwords; ++i){
        let rand = (Math.random() * 10).toFixed(0);
        s += generate(rand);
        s += " ";
    }
    para.innerText = s;
    para.setAttribute("class", "paras");
    container.append(para);
}