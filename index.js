
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


// début création affiche x caroussel
 // début base de données 1
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
    id: 3,
    titrefilm: "Squid Game",
    annee: '2021',
    genre: 'drame action aventure , mystère',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/squid game 150x225.png'
},
  {
    id:4,
    titrefilm: "Tokyo Revenger",
    annee: '2021',
    genre: 'Anime , action et aventure , drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/tokyo revengers 150x225.png'
},
  {
    id: 5,
    titrefilm: "Black Widow",
    annee: '2021',
    genre: 'Action , aventure , thriller , science-fiction',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/black widow 150x225.png'
},
  {
    id: 6,
    titrefilm: "Baby Boss 2",
    annee: '2021',
    genre: 'Anime , comédie , aventure',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/baby boss 2 150x225.png'
},
  {
    id: 2,
    titrefilm: "The suicide squad",
    annee: '2021',
    genre: 'action, aventure,fantastique et comédie',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/the suicide squad 150x225.png'
},
  {
    id: 2,
    titrefilm: "The Witcher",
    annee: '2019',
    genre: 'science-fiction , fantastique , drame , action et aventure',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/the witcher 150x225.png'
},
  {
    id: 2,
    titrefilm: "The Witcher",
    annee: '2019',
    genre: 'science-fiction , fantastique , drame , action et aventure',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/the witcher 150x225.png'
},
  {
    id: 2,
    titrefilm: "The Witcher",
    annee: '2019',
    genre: 'science-fiction , fantastique , drame , action et aventure',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/the witcher 150x225.png'
},
 
]
// fin base de données 1

// début base de donées 2 

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
    id: 3,
    titrefilm: "Squid Game",
    annee: '2021',
    genre: 'drame action aventure , mystère',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/squid game 150x225.png'
},
  {
    id:4,
    titrefilm: "Tokyo Revenger",
    annee: '2021',
    genre: 'Anime , action et aventure , drame',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/tokyo revengers 150x225.png'
},
  {
    id: 5,
    titrefilm: "Black Widow",
    annee: '2021',
    genre: 'Action , aventure , thriller , science-fiction',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/black widow 150x225.png'
},
  {
    id: 6,
    titrefilm: "Baby Boss 2",
    annee: '2021',
    genre: 'Anime , comédie , aventure',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/baby boss 2 150x225.png'
},
  {
    id: 2,
    titrefilm: "The suicide squad",
    annee: '2021',
    genre: 'action, aventure,fantastique et comédie',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/the suicide squad 150x225.png'
},
  {
    id: 2,
    titrefilm: "The Witcher",
    annee: '2019',
    genre: 'science-fiction , fantastique , drame , action et aventure',
    fav1: "img/outline_favorite_white_24dp.png",
    fav2: 'img/outline_movie_white_24dp.png',
    fav3: "img/outline_visibility_white_24dp.png",
    img: 'img/the witcher 150x225.png'
},
 
]
// fin base de données 2


// reliement base de données x fonction 1
const displayFilm = () => {
  const filmNode = affiche.map( (affiche) => {
      return createDivElement(affiche);
  })
  divAfficheConteneur.append(...filmNode); 
}
// reliement base de données x fonction 1
const displayFilm2 = () => {
  const filmNode = affiche2.map( (affiche) => {
      return createDivElement(affiche);
  })
  divAfficheConteneur2.append(...filmNode); 
}
// fin reliement

// point entrée
const divAfficheConteneur = document.querySelector('.conteneur');
const divAfficheConteneur2 = document.querySelector('.conteneur2');



// début fonction création de film
const createDivElement = (affiche) => {
  const divContent = document.createElement('div');
  divContent.classList.add('content')



  const a4 = document.createElement('a');
  a4.href = "produit.html";
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
// fin foncton crétion film


displayFilm();
displayFilm2();
 

// fin création affiche x caroussel
 