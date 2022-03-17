const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/psyduck.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            pokeNombre(data.species.name);
            let pokeImg = data.sprites.other.home.front_default;

            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

const pokeNombre = (nombre) => {
    const pokePhoto = document.getElementById("nombre");
    pokePhoto.value = nombre;
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

var input = document.getElementById("pokeName");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});