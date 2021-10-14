// début création affiche x caroussel
 // début base de données 1
affiche = [];
//  const affiche = [
//     {
//      id: 1,
//         img:"img/flash cat.png" ,
//         tittle: "Flash",
//         year: '2014',
//         genres: 'science fiction et fantastique',
//         duration: '44 minutes',
//         resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
//         fav1: 'img/outline_favorite_white_24dp.png',
//         fav2:'img/outline_movie_white_24dp.png' ,
//         fav3: 'img/outline_watch_later_white_24dp.png'
        
//     },
//     {
//      id: 1,
//         img:"img/flash cat.png" ,
//         tittle: "Flash",
//         year: '2014',
//         genres: 'science fiction et fantastique',
//         duration: '44 minutes',
//         resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
//         fav1: 'img/outline_favorite_white_24dp.png',
//         fav2:'img/outline_movie_white_24dp.png' ,
//         fav3: 'img/outline_visibility_white_24dp.png'
        
//     },
//     {
//      id: 1,
//         img:"img/flash cat.png" ,
//         tittle: "Flash",
//         year: '2014',
//         genres: 'science fiction et fantastique',
//         duration: '44 minutes',
//         resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
//         fav1: 'img/outline_favorite_white_24dp.png',
//         fav2:'img/outline_movie_white_24dp.png' ,
//         fav3: 'img/outline_watch_later_white_24dp.png'
        
//     },
//     {
//      id: 1,
//         img:"img/flash cat.png" ,
//         tittle: "Flash",
//         year: '2014',
//         genres: 'science fiction et fantastique',
//         duration: '44 minutes',
//         resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
//         fav1: 'img/outline_favorite_white_24dp.png',
//         fav2:'img/outline_movie_white_24dp.png' ,
//         fav3: 'img/outline_watch_later_white_24dp.png'
        
//     },
//     {
//      id: 1,
//         img:"img/flash cat.png" ,
//         tittle: "Flash",
//         year: '2014',
//         genres: 'science fiction et fantastique',
//         duration: '44 minutes',
//         resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
//         fav1: 'img/outline_favorite_white_24dp.png',
//         fav2:'img/outline_movie_white_24dp.png' ,
//         fav3: 'img/outline_watch_later_white_24dp.png'
        
//     },
    
    
//   ]
//   // fin base de données 1
  

// point entrée 
const divAfficheConteneur = document.querySelector('.conteneur');

  
// fin point entrée 

// reliement
const displayaffiche = () => {
  // const afficheNode = affiche.map((affiches) => {
  //   return createDivElement(affiches);
  // })
  // divAfficheConteneur.append(...afficheNode);
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

// fin reliement




let favoris= [];
// début fonction création film

const createDivElement = (affiches) => {
  const divContentSep = document.createElement('div');
  const divContent = document.createElement('div');
  divContent.classList.add('content')


  const divImg = document.createElement('div');
  divImg.classList.add('img')
 

  const a = document.createElement('a');
  a.href = 'produit.html'

  const img = document.createElement('img')
  img.src = "https://image.tmdb.org/t/p/w500/" + affiches.poster_path
  img.alt = `affiche du film ${affiches.title}`

  const divInfoFilm = document.createElement('div')
  divInfoFilm.classList.add('infofilm')

  const titre = document.createElement('h3')
  titre.innerText = affiches.title

  const ul = document.createElement('ul')
  const li1 = document.createElement('li')
  li1.innerText = affiches.release_date
  const li2 = document.createElement('li')
  li2.innerText = affiches.genres
  const li3 = document.createElement('li')
  li3.innerText = affiches.duration

  const divResume = document.createElement('div')
  divResume.classList.add('resume')
  const p = document.createElement('p')
  p.innerText = affiches.overview

  const divFav = document.createElement('div')
  divFav.classList.add('fav')
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
    favoris.push(affiches);
    buttonfav.style.color = 'red';
    console.log(favoris);
    console.log(favoris.length);

  } else {
    buttonfav.classList.add('far');
    buttonfav.classList.remove('fas');
    buttonfav.style.color = 'white';
    let favorisIndex = favoris.filter((value) => value.id !== affiches.id)
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

  const sep = document.createElement('div');
  sep.classList.add('barresep')

  

  divContent.append(divImg, a, divInfoFilm, divResume,divFav,)
  a.appendChild(img)
  divInfoFilm.append(titre ,ul)
  ul.append(li1,li2,li3)
  divResume.appendChild(p)
  divFav.append(textfav, textfav2, textfav3)
  textfav.append(buttonfav)
  textfav2.append(buttonfav2)
  textfav3.append(buttonfav3)



  divContentSep.append(divContent, sep)

  return divContentSep
}
displayaffiche();
// fin fonction création film
