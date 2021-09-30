// début création affiche x caroussel
 // début base de données 1
 const affiche = [
    {
     id: 1,
        img:"img/flash cat.png" ,
        tittle: "Flash",
        year: '2014',
        genres: 'science fiction et fantastique',
        duration: '44 minutes',
        resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
        fav1: 'img/outline_favorite_white_24dp.png',
        fav2:'img/outline_movie_white_24dp.png' ,
        fav3: 'img/outline_watch_later_white_24dp.png'
        
    },
    {
     id: 1,
        img:"img/flash cat.png" ,
        tittle: "Flash",
        year: '2014',
        genres: 'science fiction et fantastique',
        duration: '44 minutes',
        resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
        fav1: 'img/outline_favorite_white_24dp.png',
        fav2:'img/outline_movie_white_24dp.png' ,
        fav3: 'img/outline_visibility_white_24dp.png'
        
    },
    {
     id: 1,
        img:"img/flash cat.png" ,
        tittle: "Flash",
        year: '2014',
        genres: 'science fiction et fantastique',
        duration: '44 minutes',
        resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
        fav1: 'img/outline_favorite_white_24dp.png',
        fav2:'img/outline_movie_white_24dp.png' ,
        fav3: 'img/outline_watch_later_white_24dp.png'
        
    },
    {
     id: 1,
        img:"img/flash cat.png" ,
        tittle: "Flash",
        year: '2014',
        genres: 'science fiction et fantastique',
        duration: '44 minutes',
        resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
        fav1: 'img/outline_favorite_white_24dp.png',
        fav2:'img/outline_movie_white_24dp.png' ,
        fav3: 'img/outline_watch_later_white_24dp.png'
        
    },
    {
     id: 1,
        img:"img/flash cat.png" ,
        tittle: "Flash",
        year: '2014',
        genres: 'science fiction et fantastique',
        duration: '44 minutes',
        resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
        fav1: 'img/outline_favorite_white_24dp.png',
        fav2:'img/outline_movie_white_24dp.png' ,
        fav3: 'img/outline_watch_later_white_24dp.png'
        
    },
    
    
  ]
  // fin base de données 1
  

// point entrée 
const divAfficheConteneur = document.querySelector('.conteneur');

  
// fin point entrée 


// reliement
const displayaffiche = () => {
  const afficheNode = affiche.map((affiches) => {
    return createDivElement(affiches);
  })
  divAfficheConteneur.append(...afficheNode);
}
// fin reliement





// début fonction création film

const createDivElement = (affiches) => {
  const divContentSep = document.createElement('div');
  const divContent = document.createElement('div');
  divContent.classList.add('content')


  const divImg = document.createElement('div');
  divImg.classList.add('img')
 

  const a = document.createElement('a');
  a.href = '#'

  const img = document.createElement('img')
  img.src = affiches.img
  img.alt = `affiche du film ${affiches.tittle}`

  const divInfoFilm = document.createElement('div')
  divInfoFilm.classList.add('infofilm')

  const titre = document.createElement('h3')
  titre.innerText = affiches.tittle

  const ul = document.createElement('ul')
  const li1 = document.createElement('li')
  li1.innerText = affiches.year
  const li2 = document.createElement('li')
  li2.innerText = affiches.genres
  const li3 = document.createElement('li')
  li3.innerText = affiches.duration

  const divResume = document.createElement('div')
  divResume.classList.add('resume')
  const p = document.createElement('p')
  p.innerText = affiches.resume

  const divFav = document.createElement('div')
  divFav.classList.add('fav')
  const a1 = document.createElement('a');
  a1.href = "#";
  const logoHeart = document.createElement('img');
  logoHeart.src = affiches.fav1;
  logoHeart.alt = "favori";
  a1.innerText = "favorite";

  const a2 = document.createElement('a');
  a2.href = "#";
  const logoHeart2 = document.createElement('img');
  logoHeart2.src = affiches.fav2;
  logoHeart2.alt = "favori";
  a2.innerText = "Already Seen";

  const a3 = document.createElement('a');
  a3.href = "#";
  const logoHeart3 = document.createElement('img');
  logoHeart3.src = affiches.fav3;
  logoHeart3.alt = "favori";
  a3.innerText = "Watch later";
  

  const sep = document.createElement('div');
  sep.classList.add('barresep')

  

  divContent.append(divImg, a, divInfoFilm, divResume,divFav,)
  a.appendChild(img)
  divInfoFilm.append(titre ,ul)
  ul.append(li1,li2,li3)
  divResume.appendChild(p)
  divFav.append(a1, a2, a3)
  a1.appendChild(logoHeart)
  a2.appendChild(logoHeart2)
  a3.appendChild(logoHeart3)


  divContentSep.append(divContent, sep)

  return divContentSep
}
displayaffiche();
// fin fonction création film
