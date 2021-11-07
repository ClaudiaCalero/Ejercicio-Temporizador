//Almacenamos el tiempo en una variable que empiece en 10
const startingMinutes = 10;
//cantidad total de minutos, que serán los 10 iniciales multiplicados 
//por 60 porque queremos todos los segundos, 600 s en este caso
let time = startingMinutes * 60;

//Añadimos el componente "Cuenta Regresiva" que se encuentra 
//en el elemento del documento (CountDown)
const countdownEl = document.getElementById("countdown");

//Llamaremos a esta función cada segundo
setInterval(updateCountdown, 1000);

//Función que ejecutará cada segundo para actualizar el contador

function updateCountdown() {
    //calcular los minutos
    //cogemos todos los segundos y los dividimos por 60 para obtener los minutis
    // metodo math floor para recuperar el numero más bajo sin decimales
    const minutes = Math.floor(time / 60);
    //creamos los segundos
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    //agregamos los minutos y segundos 
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    // increase the time
    time--;
    //to avoid getting negative numbers
    time = time < 0 ? 0 : time; 

}

