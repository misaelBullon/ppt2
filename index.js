
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijeras');


//Funcion de la eleccion de la computadora
function computerSelection(){
    var election = (Math.random().toPrecision(1)) * 10;
    var newElection = Math.round(election);
    var cadena;
    //console.log(newElection);


    if(newElection <= 3){
        cadena = 'piedra';
        //console.log(cadena);
        return cadena;
    }else if(newElection > 3 && newElection <= 6){
        cadena = 'papel';
        //console.log(cadena);
        return cadena;
    }else if(newElection > 6 && newElection <= 10){
        cadena = 'tijera';
        //console.log(cadena);
        return cadena;
    }

}

//Funcion juggar una ronda del juego
function oneround(player, computer){

    var jugador = player;
    var computadora = computer; 
    var j = document.getElementById('jugador');
    var c = document.getElementById('computadora');
    var g = document.getElementById('ganador');

    j.textContent = 'Jugador: ' + jugador;
    c.textContent = 'Computadora: ' + computadora;

    if(jugador === computadora){
        g.textContent = 'Es un empate';
    }else if(jugador == 'piedra' && computadora == 'tijera' || jugador == 'papel' && computadora == 'piedra' || jugador == 'tijera' && computadora == 'papel'){
        g.textContent = 'Has ganado';
        return 'j';
    }else{
       g.textContent = 'Ha ganado la computadora';
       return 'c';
    }
}

/*
//Agrego los eventos click a los botonte
function jugar(){

    
    piedra.addEventListener('click', function(){
        var jugador = piedra.getAttribute('value');
        var computadora = computerSelection();//La computadora elige.
        var roundResult = oneround(jugador, computadora); //Llamo a la funcion oneroun y le paso la eleccion de la computadora y la del juador
    });
    
    papel.addEventListener('click', function(){
        var jugador = papel.getAttribute('value');
        var computadora = computerSelection();
        var roundResult = oneround(jugador, computadora);
    });

    tijera.addEventListener('click', function(){
        var jugador = tijera.getAttribute('value');
        var computadora = computerSelection();
        var roundResult = oneround(jugador, computadora);
    });

}
*/
var b = document.querySelectorAll('button');

 b.forEach((button) => {
    button.addEventListener('click',function(){
        var jugador = button.getAttribute('value');
        var computadora = computerSelection();
        var roundResult = oneround(jugador, computadora) ;
    });
});

//jugar();