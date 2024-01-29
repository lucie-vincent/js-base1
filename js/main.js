const carre = document.querySelector(".carre");
const carreInfos = carre.value;

function afficherInfos() {
    alert(`${console.log(carreInfos)}`);
}

carre.addEventListener('click', afficherInfos);

