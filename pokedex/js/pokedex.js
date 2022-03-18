const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            setImage("./img/ball-404.gif")
            limpiaCampos();
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // console.log(data);            
            let nombre = data.id + '. ' + data.species.name[0].toUpperCase() + data.species.name.substring(1);
            setNumero(data.id);
            setNombre(nombre);

            let tipos = data.types.map(typ => typ.type.name);
            setTipo(tipos);

            let estadisticas = data.stats[0].stat.name + " = " + data.stats[0].base_stat + " " +
                                data.stats[1].stat.name + " = " + data.stats[1].base_stat + " " +
                                data.stats[2].stat.name + " = " + data.stats[2].base_stat + " " +
                                data.stats[3].stat.name + " = " + data.stats[3].base_stat + " " +
                                data.stats[4].stat.name + " = " + data.stats[4].base_stat + " " +
                                data.stats[5].stat.name + " = " + data.stats[5].base_stat;
            setEstadisticas(estadisticas);

            let movimientos = data.moves.map(mov => mov.move.name);
            setMovimientos(movimientos);

            let pokeImg = data.sprites.other.home.front_default;
            setImage(pokeImg);
        }
    });
}

const limpiaCampos = () => {
    setNombre("");
    setTipo("");
    setEstadisticas("");
    setMovimientos("");
    setNumero(1);
}


const incremPokem = () => {
    const inputfield = document.getElementById("numero");
    let numero = inputfield.value;
    inputfield.value = ++numero;
    document.getElementById("pokeName").value = inputfield.value;
    document.getElementById("btnBuscar").click();
}

const decremPokem = () => {
    const inputfield = document.getElementById("numero");
    let numero = inputfield.value;
    inputfield.value = --numero;
    if (inputfield.value <= 0){
        inputfield.value = 1;
    }
    document.getElementById("pokeName").value = inputfield.value;
    document.getElementById("btnBuscar").click();
}

const setNumero = (numero) => {
    const inputfield = document.getElementById("numero");
    inputfield.value = numero;
}

const setMovimientos = (movimientos) => {
    const inputfield = document.getElementById("movimientos");
    inputfield.value = movimientos;
}

const setEstadisticas = (estadisticas) => {
    const inputfield = document.getElementById("estadisticas");
    inputfield.value = estadisticas;
}

const setTipo = (tipo) => {
    const inputfield = document.getElementById("tipo");
    inputfield.value = tipo;
}

const setNombre = (nombre) => {
    const inputfield = document.getElementById("nombre");
    inputfield.value = nombre;
}

const setImage = (url) => {
    const inputfield = document.getElementById("pokeImg");
    inputfield.src = url;
}

var input = document.getElementById("pokeName");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btnBuscar").click();
  }
});