let carre = document.querySelector(".carre");
// const carreInfos = carre.value;
let carreStyle = window.getComputedStyle(carre, null);

/*afficher les infos
class :
background color : carreStyle.backgroundColor
color : carreStyle.color
height : carreStyle.height
width : carreStyle.width
display : carreStyle.display
police : carreStyle.font

*/ 


function afficherInfos() {
    alert(`Class : \n
    - BackgroundColor : ${carreStyle.backgroundColor}:\n
    - Color : ${carreStyle.color}\n
    - Height : ${carreStyle.height}\n
    - Width : ${carreStyle.width}\n
    - Display : ${carreStyle.display}\n
    - Police : ${carreStyle.font}\n
    `);
}


carre.addEventListener('click', afficherInfos);

