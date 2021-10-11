
// carousel début // carousel début // carousel début // carousel début// carousel début // carousel début // carousel début // carousel début
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
// carousel fin // carousel fin // carousel fin // carousel fin // carousel fin // carousel fin // carousel fin // carousel fin // carousel fin






// début création affiche 







// début base de données 1  // début base de données 1 // début base de données 1 // début base de données 1 // début base de données 1 // début base de données 1
// const affiche = [
// {
//   id: 1,
//   titrefilm: "Flash",
//     annee: '2014',
//     genre: 'science fiction et fantastique',

//     fav2: 'img/outline_movie_white_24dp.png',
//     fav3: "img/outline_visibility_white_24dp.png",
//     img: 'img/flash-150-x-225.jpg'
    
// },
// {
//     id: 2,
//     titrefilm: "Peaky Blinder",
//     annee: '2013',
//     genre: 'drame',
//     fav1: "img/outline_favorite_white_24dp.png",
//     fav2: 'img/outline_movie_white_24dp.png',
//     fav3: "img/outline_visibility_white_24dp.png",
//     img: 'img/flash-150-x-225.jpg'
// },
// {
//   id: 3,
//   titrefilm: "Squid Game",
//   annee: '2021',
//   genre: 'drame action aventure , mystère',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/squid game 150x225.png'
// },
// {
//   id:4,
//   titrefilm: "Tokyo Revenger",
//   annee: '2021',
//   genre: 'Anime , action et aventure , drame',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/tokyo revengers 150x225.png'
// },
// {
//   id: 5,
//   titrefilm: "Black Widow",
//   annee: '2021',
//   genre: 'Action , aventure , thriller , science-fiction',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/black widow 150x225.png'
// },
// {
//   id: 6,
//   titrefilm: "Baby Boss 2",
//   annee: '2021',
//   genre: 'Anime , comédie , aventure',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/baby boss 2 150x225.png'
// },
// {
//   id: 2,
//   titrefilm: "The suicide squad",
//   annee: '2021',
//   genre: 'action, aventure,fantastique et comédie',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/the suicide squad 150x225.png'
// },
// {
//   id: 2,
//   titrefilm: "The Witcher",
//   annee: '2019',
//   genre: 'science-fiction , fantastique , drame , action et aventure',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/the witcher 150x225.png'
// },
// {
//   id: 2,
//   titrefilm: "The Witcher",
//   annee: '2019',
//   genre: 'science-fiction , fantastique , drame , action et aventure',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/the witcher 150x225.png'
// },
// {
//   id: 2,
//   titrefilm: "The Witcher",
//   annee: '2019',
//   genre: 'science-fiction , fantastique , drame , action et aventure',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/the witcher 150x225.png'
// },

// ]

// fin base de données 1 // fin base de données 1 // fin base de données 1 // fin base de données 1 // fin base de données 1 // fin base de données 1


// début base de donées 2  // début base de donées 2  // début base de donées 2  // début base de donées 2  // début base de donées 2  // début base de donées 2 

// const affiche2 = [
// {
//   id: 1,
//   titrefilm: "Flash",
//     annee: '2014',
//     genre: 'science fiction et fantastique',
//     fav1: "img/outline_favorite_white_24dp.png",
//     fav2: 'img/outline_movie_white_24dp.png',
//     fav3: "img/outline_visibility_white_24dp.png",
//     img: 'img/flash-150-x-225.jpg'
    
// },
// {
//     id: 2,
//     titrefilm: "Peaky Blinder",
//     annee: '2013',
//     genre: 'drame',
//     fav1: "img/outline_favorite_white_24dp.png",
//     fav2: 'img/outline_movie_white_24dp.png',
//     fav3: "img/outline_visibility_white_24dp.png",
//     img: 'img/flash-150-x-225.jpg'
// },
// {
//   id: 3,
//   titrefilm: "Squid Game",
//   annee: '2021',
//   genre: 'drame action aventure , mystère',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/squid game 150x225.png'
// },
// {
//   id:4,
//   titrefilm: "Tokyo Revenger",
//   annee: '2021',
//   genre: 'Anime , action et aventure , drame',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/tokyo revengers 150x225.png'
// },
// {
//   id: 5,
//   titrefilm: "Black Widow",
//   annee: '2021',
//   genre: 'Action , aventure , thriller , science-fiction',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/black widow 150x225.png'
// },
// {
//   id: 6,
//   titrefilm: "Baby Boss 2",
//   annee: '2021',
//   genre: 'Anime , comédie , aventure',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/baby boss 2 150x225.png'
// },
// {
//   id: 2,
//   titrefilm: "The suicide squad",
//   annee: '2021',
//   genre: 'action, aventure,fantastique et comédie',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/the suicide squad 150x225.png'
// },
// {
//   id: 2,
//   titrefilm: "The Witcher",
//   annee: '2019',
//   genre: 'science-fiction , fantastique , drame , action et aventure',
//   fav1: "img/outline_favorite_white_24dp.png",
//   fav2: 'img/outline_movie_white_24dp.png',
//   fav3: "img/outline_visibility_white_24dp.png",
//   img: 'img/the witcher 150x225.png'
// },

// ]
// fin base de données 2 // fin base de données 2 // fin base de données 2 // fin base de données 2 // fin base de données 2 // fin base de données 2 


let affiche = [];
let affiche2=[]





//reliement base de données x fonction 1// reliement base de données x fonction 1 // reliement base de données x fonction 1 // reliement base de données x fonction 1
const displayFilm = () => {
// const filmNode = affiche.map( (affiche, index) => {
//     return createDivElement(affiche, index);
// })
//   divAfficheConteneur.append(...filmNode);
  
  
  
// début mappage pour afficher les films depuis api // début mappage pour afficher les films depuis api // début mappage pour afficher les films depuis api

 
let movies = fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2d9a1d356bd6c472008167c52b7d5235');
movies.then( async response => {
    try {
        let movieContentApi = await response.json();
        affiche = movieContentApi.results
        console.log(affiche);
            const movieNode = affiche.map( (movie) => {
        return createDivElement(movie)
    })
    divAfficheConteneur.append(...movieNode);
    } catch (e){
        console.log(e);
    }
})
.catch(err => console.log(err));
  
}
// fin mappage pour afficher les films depuis api // fin mappage pour afficher les films depuis api // fin mappage pour afficher les films depuis api

// fin reliement base de données x fonction 1// fin reliement base de données x fonction 1// fin reliement base de données x fonction 1// fin reliement base de données x fonction 1





// reliement base de données x fonction 2// reliement base de données x fonction 2// reliement base de données x fonction 2// reliement base de données x fonction 2
const displayFilm2 = () => {
  let movies2 = fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=2d9a1d356bd6c472008167c52b7d5235');
  movies2.then( async response => {
      try {
          let movieContentApi = await response.json();
          affiche2 = movieContentApi.results
          console.log(affiche2);
              const movieNode = affiche2.map( (movie) => {
          return createDivElement(movie)
      })
      divAfficheConteneur2.append(...movieNode);
      } catch (e){
          console.log(e);
      }
  })
  .catch(err => console.log(err));
}
// fin reliement // fin reliement// fin reliement// fin reliement// fin reliement// fin reliement// fin reliement// fin reliement// fin reliement




// point entrée // point entrée // point entrée // point entrée // point entrée // point entrée // point entrée // point entrée // point entrée
const divAfficheConteneur = document.querySelector('.conteneur');
const divAfficheConteneur2 = document.querySelector('.conteneur2');
// fin point entrée // fin point entrée // fin point entrée // fin point entrée // fin point entrée // fin point entrée // fin point entrée


let favoris = [];
// début fonction création de film
const createDivElement = (affiche, index) => {
const divContent = document.createElement('div');
divContent.classList.add('content')



const a4 = document.createElement('a');
a4.href = "produit.html";
const image = document.createElement('img');
image.src = "https://image.tmdb.org/t/p/w500/" + affiche.poster_path
image.alt = "Affiche du film Flash"


const titre = document.createElement('h3')
titre.innerText = affiche.title

const infoFilm = document.createElement('p')
infoFilm.innerText = affiche.release_date;

const textfav = document.createElement('p')
textfav.classList.add('pfav')
const fantome = document.createElement('div')
fantome.classList.add('fantome')
textfav.innerText = "Add to favorite";
const buttonfav = document.createElement('button');
buttonfav.classList.add ('far');
buttonfav.classList.add('fa-heart');
buttonfav.classList.add('buttonfav')



// bouton fav on/off
let condition = false;

buttonfav.addEventListener('click' , () => {
condition = !condition;

  if (condition) {
    buttonfav.classList.add('fas');
    buttonfav.classList.remove('far');
    favoris.push(affiche);
    buttonfav.style.color = 'red';
    console.log(favoris);
    console.log(index);
    console.log(favoris.length);

  } else {
    buttonfav.classList.add('far');
    buttonfav.classList.remove('fas');
    buttonfav.style.color = 'white';
    let favorisIndex = favoris.filter((value) => value.id !== affiche.id)
    favoris = favorisIndex;
    console.log(favoris);
    console.log(favoris.length);
  }
})
  
  // fin bouton fav on/off



const textfav2 = document.createElement('p')
textfav2.classList.add('pfav')
textfav2.innerText = "Déjà vue";
const buttonfav2 = document.createElement('button');
buttonfav2.classList.add ('fas');
buttonfav2.classList.add('fa-film');
buttonfav2.classList.add('buttonfav')


const textfav3 = document.createElement('p')
textfav3.classList.add('pfav')
textfav3.innerText = "A voir";
const buttonfav3 = document.createElement('button');
buttonfav3.classList.add ('far');
buttonfav3.classList.add('fa-eye');
buttonfav3.classList.add('buttonfav')



divContent.append(a4, titre, infoFilm, textfav, textfav2, textfav3);
textfav.appendChild(buttonfav)
a4.appendChild(image)
textfav2.appendChild(buttonfav2)
textfav3.appendChild(buttonfav3)


return divContent

}
// fin foncton crétion film





// barre de recherche fonctionnelle via API // barre de recherche fonctionnelle via API // barre de recherche fonctionnelle via API
const displayMoviesearch = () => {
    let movies = fetch('https://api.themoviedb.org/3/search/company?api_key=37cf1254c9ee3ea79476a11690639c08');
movies.then( async response => {
    try {
        let movieContentApi = await response.json();
        affiche = movieContentApi.results
        console.log(affiche);
            const movieNode = affiche.map( (movies) => {
        return createMovieElement(movies)
    })
    duMoment.append(...movieNode);
    } catch (e){
        console.log(e);
    }
})
.catch(err => console.log(err));
}








let searchBar = document.querySelector(".searchbar");
searchBar.addEventListener("keyup", e => {
const searchString = e.target.value.toLowerCase();
const filteredCharacters = affiche.filter(movies => {
  return (
    affiche.title.includes(searchString)
  );
});
displayMovie3(filteredCharacters);
});

// Fin barre de recherche fonction via API // Fin barre de recherche fonction via API // Fin barre de recherche fonction via API

 


displayFilm();
displayFilm2();