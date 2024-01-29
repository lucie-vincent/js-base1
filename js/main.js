const carre = document.querySelector(".carre");
// const carreInfos = carre.value;

function afficherInfos() {
    // alert(`${console.log(carreInfos)}`);
    alert("Class: carre\n -Background color: rgb(47, 79, 79)\n -Height: 200\n -Width: 200\n -Display: flex\n -Display: \"Times New Roman\"(40px)");
}

carre.addEventListener('click', afficherInfos);

