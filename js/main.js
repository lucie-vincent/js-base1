let carre = document.querySelector(".carre");
let carreStyle = window.getComputedStyle(carre, null);

function afficherInfos() {
    alert(`Class : ${carre.className}\n
    - BackgroundColor : ${carreStyle.backgroundColor}:\n
    - Color : ${carreStyle.color}\n
    - Height : ${carreStyle.height}\n
    - Width : ${carreStyle.width}\n
    - Display : ${carreStyle.display}\n
    - Police : ${carreStyle.font}\n
    `);
}

carre.addEventListener('click', afficherInfos);

