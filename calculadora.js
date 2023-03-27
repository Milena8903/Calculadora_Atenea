var botones = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/"];
//Es para poderlo recorrer y que quede más rapido generar esos botones

function renderizarGUI(){

    //Div Calculadora
        // 1. Crear el elemento
            //representación del marco de la calculadora
                const divCalculadora = document.createElement("div")

        // 2. Agregar atributos (opcional)
            //A este objeto q acabado de enlazar agregue un atributo
            //colocando el nombre y el valor del atributo
                divCalculadora.setAttribute("id", "calculadora");
                divCalculadora.setAttribute("class", "text-center")
                divCalculadora.setAttribute("style", "width:50%; margin:0 auto;")
        // 3. Innsertar el elemento en el DOM
            //inserto en el body
                document.body.appendChild(divCalculadora);

    //Div pantalla
           const divPantalla = document.createElement("div")
           divPantalla.setAttribute("id", "divpantalla");
           //ahora dentro de la division de la calculadora
           divCalculadora.appendChild(divPantalla);
    
        //Pantalla
            const pantalla = document.createElement("input")
            pantalla.setAttribute("id", "pantalla");
            pantalla.setAttribute("type", "text");
            pantalla.setAttribute("value", "0");
            pantalla.setAttribute("disabled", "true");
            pantalla.setAttribute("class", "form-control text-right")
            divPantalla.appendChild(pantalla);

    
    //Div Botones
            const divBotones = document.createElement("div")
            divBotones.setAttribute("id", "botones");
            //ahora dentro de la division de la calculadora
            divCalculadora.appendChild(divBotones);

    //Se hace un ciclo que recorra los botones
    //como se cual es la longitud del arreglo entonces
    //se utiliza el ciclo for
    for(let i = 0; i < botones.length; i++){

        //Crear fila
        //cada vez q se tenga un multiplo de 4 q cree una fila
        //% es modulo de 4
        if(i%4 == 0){
            const divFila = document.createElement("div");
            divFila.setAttribute("Class", "row");
            //el ultimo elemento q se agregue por fa agrege el boton
            divBotones.appendChild(divFila);
        }

        let boton = document.createElement("button");
        //lo q se tenga en la posicion
        //si es cero pongale la info del id
        boton.setAttribute("id", "boton" + botones[i]);
        //hacer q bootstrap coloque un tema bonito
        boton.setAttribute("class", "btn btn-primary col-3 border-white")
        //colocando las etiquetas q se tienen en el arreglo de botones
        boton.innerHTML = botones[i];
        //Agregar un "escuchador de eventos"
        //escuchadores de eventos= son fuciones asincronas
        //se necesita q le pase una funcion de callback
        //darle al boton la capacitad de aceptar eventos
        //del usuario y responder a ellos
        boton.addEventListener("click", function(){
            procesarEvento(boton); //selecciona cada boton
        })
        //si se pone la siguiete linea lo que hace es q el valor no lo muestra
        //como si estuviera dentro del boton, un input si pero es un boton y 
        //así no lo muestra como la etiqueta q se quiere ver
        //boton.setAttribute("value", botones[i]);
        //como el ultimo hijo agreguelo al final de la división
        divBotones.lastChild.appendChild(boton);      
    }
}

//creo la funcion de procesar evento
//hacer lo q quiera q pase cuando oprima el boton
function procesarEvento(boton){
    //console.log(botones.innerHTML); //toma lo que hay en el innerHtml
    let miPantalla = document.getElementById("pantalla");

    //si el valor de la pantalla, es cero, borre la pantalla
    if(miPantalla.value == 0){
        miPantalla.value = "";
    }
    //Ahora para el botos = tiene que hacer algo
    //si el boton de la pantalla es diferente a =
    if(boton.innerHTML != "="){
        //coger el valor q esta en pantalla y agreguele el otro valor
     miPantalla.value = miPantalla.value + boton.innerHTML;
    }else{
        //procesar la expresion
        //Evaluar la expreion con js de la libreria q se importo
        //math.js y mostrar el valor en la patalla
        //se hace un try catch para capturar el error

        try{
            let resultado = math.evaluate(miPantalla.value);
            miPantalla.value = resultado;
        }catch(error){
            display.value = `Expresión no valida`;
        }
        
        
    }
    
}

//Estoy llamando a la funcion
//inmediatamente se carga la pantalla
renderizarGUI();

//otra forma es
//cuando la pantalla se cargue
//muestre tal cosa
//window.onload