// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



// Variables principales asociadas a Queryselector
 addNombre = document.querySelector("#amigo");
 imprimirAmigos = document.querySelector("#listaAmigos");
 imprimirSorteado = document.querySelector("#resultado");
 regex = /^[A-Za-z ]+$/; // valida el uso de solo letras y excluye el uso de numeros
 listaAmigos = [];
 let numAmigos= 0;


function agregarAmigo() {
  
  if (verificarNombre(addNombre.value)) {
    listaAmigos.push(addNombre.value);
    actualizarLista();
    addNombre.value = "";
   //  addNombre.focus();
    return;
  }
  return;
}



function sortearAmigo() {
  if (listaAmigos.length > 1) {
console.log ("numAmigos= ",numAmigos);
console.log ("numero de amigos", listaAmigos.length)
    if (numAmigos < listaAmigos.length){ 
    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);     //  amigoSorteado, es el apuntador aleatorio a la lista de amigos, "el amigo secreto"
    imprimirSorteado.innerHTML = `Tu amigo secreto es: ${listaAmigos[amigoSorteado]}.`;
    numAmigos++;
    return;
    } else  alert("Todos los Amigos secretos fueron Sortedos, Selecciona Refresh para comenzar Nuevamente");   // cuando ya se han sorteado todos los amigos de la lista
  } else {
    alert("La lista de Amigos debe tener al menos dos Nombres.");
    return;
  }
}




function verificarNombre(nombre) {
  if (!regex.test(nombre)) {
    alert("Proporcione un nombre con solo letras");
    
    return;
  } else if (nombre.length < 2) {
    alert("Inserte al menos 2 letras.");
    return;
  }
  return true;
}




function actualizarLista() {
  let newLista = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    newLista += `<li>${listaAmigos[i]}</li>`;
  }
  imprimirAmigos.innerHTML = newLista;
  return;
}
