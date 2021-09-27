
// carousel début
(function () {
    var carousel = {
      ittem: document.getElementById('carousel'),
      interval: 5000,
      items: this.carousel.getElementsByClassName('carousel-active'),
      itemsLength: 0,
      controls: this.carousel.getElementsByClassName('carousel-control'),
      controlsLength: 0
    };
    var carouselTimer = setInterval(carouselPlay, carousel.interval);
  
    carousel.itemsLength = carousel.items.length;
    carousel.controlsLength = carousel.controls.length;
  
    function carouselControls() {
      for (var i = carousel.controlsLength; i--;) {
        carousel.controls[i].addEventListener('click', carouselReset, false);
      }
    }
  
    function carouselPlay() {
      for (var i = carousel.itemsLength; i--;) {
        if (carousel.items[i].checked) {
          if (i !== carousel.itemsLength - 1) {
            carousel.items[i + 1].checked = true;
          } else if (i === carousel.itemsLength - 1) {
            setTimeout(function() {
              carousel.items[0].checked = true;
            }, 0);
          }
        }
      }
    }
  
    function carouselReset() {
      console.log(1)
      clearInterval(carouselTimer);
      carouselTimer = setInterval(carouselPlay, carousel.interval);
    }
    carouselControls();
})();
  // carousel fin

  // affiche scroll A L'AFFICHE
//  Base de données
const affiche = [
  {
    id: 1,
    titrefilm: "Flash",
      annee: '2014',
      genre: 'science fiction et fantastique',
      fav1: "img/outline_favorite_white_24dp.png",
      fav2: 'img/outline_movie_white_24dp.png',
      fav3: "img/outline_visibility_white_24dp.png",
      img: 'img/flash-150-x-225.jpg'
      
  },
  {
      id: 2,
      titrefilm: "Peaky Blinder",
      annee: '2013',
      genre: 'drame',
      fav1: "img/outline_favorite_white_24dp.png",
      fav2: 'img/outline_movie_white_24dp.png',
      fav3: "img/outline_visibility_white_24dp.png",
      img: 'img/flash-150-x-225.jpg'
  },
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
]
// fin base de données
const displayFilm = () => {
  const filmNode = affiche.map( (affiche) => {
      return createDivElement(affiche);
  })
  divAfficheConteneur.append(...filmNode); 
}






  // fonction création
const divAfficheConteneur = document.querySelector('.conteneur');



const createDivElement = (affiche) => {
  const divContent = document.createElement('div');
  divContent.classList.add('content')



  const a4 = document.createElement('a');
  a4.href = "#";
  const image = document.createElement('img');
  image.src = affiche.img
  image.alt = "Affiche du film Flash"


  const titre = document.createElement('h3')
  titre.innerText = affiche.titrefilm

  const infoFilm = document.createElement('p')
  infoFilm.innerText = affiche.annee + "          " + affiche.genre;

  const a = document.createElement('a');
  a.href = "#";
  const logoHeart = document.createElement('img');
  logoHeart.src = affiche.fav1;
  logoHeart.alt = "favori";
  a.innerText = "Add to favorite";

  const a2 = document.createElement('a');
  a2.href = "#";
  const logoHeart2 = document.createElement('img');
  logoHeart2.src =affiche.fav2;
  logoHeart2.alt = "favori";
  a2.innerText = "Add to favorite";

  const a3 = document.createElement('a');
  a3.href = "#";
  const logoHeart3 = document.createElement('img');
  logoHeart3.src =affiche.fav3;
  logoHeart3.alt = "favori";
  a3.innerText = "Add to favorite";

  divContent.append(a4, titre, infoFilm, a, a2, a3);
  a4.appendChild(image)
  a.appendChild(logoHeart)
  a2.appendChild(logoHeart2)
  a3.appendChild(logoHeart3)


return divContent

}
// fin affiche scroll

displayFilm();
 // affiche scroll A L'AFFICHE
//  Base de données
const affiche2 = [
  {
    id: 1,
    titrefilm: "Flash",
      annee: '2014',
      genre: 'science fiction et fantastique',
      fav1: "img/outline_favorite_white_24dp.png",
      fav2: 'img/outline_movie_white_24dp.png',
      fav3: "img/outline_visibility_white_24dp.png",
      img: 'img/flash-150-x-225.jpg'
      
  },
  {
      id: 2,
      titrefilm: "Peaky Blinder",
      annee: '2013',
      genre: 'drame',
      fav1: "img/outline_favorite_white_24dp.png",
      fav2: 'img/outline_movie_white_24dp.png',
      fav3: "img/outline_visibility_white_24dp.png",
      img: 'img/flash-150-x-225.jpg'
  },
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
  {
    id: 2,
    titrefilm: "Peaky Blinder",
    annee: '2013',
    genre: 'drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/flash-150-x-225.jpg'
},
]
// fin base de données
const displayFilm = () => {
  const filmNode = affiche2.map( (affiche2) => {
      return createDivElement(affiche2);
  })
  divAfficheConteneur.append(...filmNode); 
}






  // fonction création
const divAfficheConteneur = document.querySelector('.conteneur2');



const createDivElement = (affiche2) => {
  const divContent = document.createElement('div');
  divContent.classList.add('content')



  const a4 = document.createElement('a');
  a4.href = "#";
  const image = document.createElement('img');
  image.src = affiche.img
  image.alt = "Affiche du film Flash"


  const titre = document.createElement('h3')
  titre.innerText = affiche.titrefilm

  const infoFilm = document.createElement('p')
  infoFilm.innerText = affiche.annee + "          " + affiche.genre;

  const a = document.createElement('a');
  a.href = "#";
  const logoHeart = document.createElement('img');
  logoHeart.src = affiche.fav1;
  logoHeart.alt = "favori";
  a.innerText = "Add to favorite";

  const a2 = document.createElement('a');
  a2.href = "#";
  const logoHeart2 = document.createElement('img');
  logoHeart2.src =affiche.fav2;
  logoHeart2.alt = "favori";
  a2.innerText = "Add to favorite";

  const a3 = document.createElement('a');
  a3.href = "#";
  const logoHeart3 = document.createElement('img');
  logoHeart3.src =affiche.fav3;
  logoHeart3.alt = "favori";
  a3.innerText = "Add to favorite";

  divContent.append(a4, titre, infoFilm, a, a2, a3);
  a4.appendChild(image)
  a.appendChild(logoHeart)
  a2.appendChild(logoHeart2)
  a3.appendChild(logoHeart3)


return divContent

}
// fin affiche scroll

displayFilm();