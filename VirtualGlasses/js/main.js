import Glasses from "./services.js";
let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];
const glassesList = dataGlasses.map((glass) => {
  let glassObject = new Glasses(
    glass.id,
    glass.src,
    glass.virtualImg,
    glass.brand,
    glass.name,
    glass.price,
    glass.color,
    glass.description
  );
  return glassObject;
});
// console.log(glassesList);
window.selectGlass = (virtualImg) => {
  const result = `
            <div class="glasses">
                <img style="width:100" src="${virtualImg}">
            </div>`;
  document.getElementById("avatar").innerHTML = result;
};

const indispensableGlasses = () => {
  const showGlassList = glassesList.reduce((result, glassObject) => {
    let { src, virtualImg } = glassObject;
    return (result += `
                <div  class="col-4 ">
                    <img style="width:150px" src="${src}" onclick="selectGlass('${virtualImg}')">
                </div>
                `);
  }, " ");
  document.getElementById("vglassesList").innerHTML = showGlassList;
};
indispensableGlasses();

let avatar = "";
window.removeGlasses = (remove) => {
  if (remove) {
    avatar = document.getElementById("avatar").innerHTML;
    document.getElementById("avatar").innerHTML = "";
  }
  document.getElementById("avatar").innerHTML = avatar;
  avatar = "";
};

const infoGlasses = () => {
  const infoGlass = glassesList.reduce((result, glassObject) => {
    let { name, brand, color, price, description } = glassObject;
    return (result += `
            <div  onclick="selectGlass('${virtualImg}'>
                <div >
                    <tr>
                        <td>${name}-${brand}(${color})</td>
                    </tr>
                    <br>
                </div>
                <div>
                <tr>
                    <td class="bg-danger">${price}</td>
                </tr>
                </div>
                <div>
                <tr>
                    <td>${description}</td>
                </tr>
                </div>
            </div>
                `);
  }, " ");
  document.getElementById("glassesInfo").innerHTML = infoGlass;
};
infoGlasses();
