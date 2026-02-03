const cronometro = document.querySelector(".cronometer")

let segundos = 0
let minutos = 0
let horas = 0
let intervalo


const start = () => {

    clearInterval(intervalo)
    intervalo = setInterval(() => {
        segundos++
        if(segundos === 60){
            segundos = 0
            minutos++
        }
        if(minutos === 60){
            minutos = 0
            horas++
        }

        const format = 
        (horas < 10 ? "0" + horas : horas) + ":" +
        (minutos < 10 ? "0" + minutos : minutos) + ":" +
        (segundos < 10 ? "0" + segundos : segundos)


        cronometro.innerHTML = format
    }, 1000);
}

const stop = () =>{
    clearInterval(intervalo)
}

const restart = () =>{
    clearInterval(intervalo)
    horas = 0
    minutos = 0
    segundos = 0
    cronometro.innerHTML = "00:00:00" 
}