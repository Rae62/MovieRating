// début création affiche x caroussel
 // début base de données 1
 const affiche = [
    {
     id: 1,
        img:"img/flash cat.png.jpg" ,
        tittle: "Flash",
        year: '2014',
        genres: 'science fiction et fantastique',
        duration: '44 minutes',
        resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
        fav1: "img/outline_favorite_white_24dp.png.png",
        fav2: 'img/outline_movie_white_24dp.png',
        fav3: 'img/outline_watch_later_white_24dp.png'
        
    },
    
    {
     id: 1,
        img:"img/flash cat.png.jpg" ,
        tittle: "Flash",
        year: '2014',
        genres: 'science fiction et fantastique',
        duration: '44 minutes',
        resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
        fav1: "img/outline_favorite_white_24dp.png.png",
        fav2: 'img/outline_movie_white_24dp.png',
        fav3: 'img/outline_watch_later_white_24dp.png'
        
    },
    
    {
     id: 1,
        img:"img/flash cat.png.jpg" ,
        tittle: "Flash",
        year: '2014',
        genres: 'science fiction et fantastique',
        duration: '44 minutes',
        resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
        fav1: "img/outline_favorite_white_24dp.png.png",
        fav2: 'img/outline_movie_white_24dp.png',
        fav3: 'img/outline_watch_later_white_24dp.png'
        
    },
    
    {
     id: 1,
        img:"img/flash cat.png.jpg" ,
        tittle: "Flash",
        year: '2014',
        genres: 'science fiction et fantastique',
        duration: '44 minutes',
        resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
        fav1: "img/outline_favorite_white_24dp.png.png",
        fav2: 'img/outline_movie_white_24dp.png',
        fav3: 'img/outline_watch_later_white_24dp.png'
        
    },
    
    {
     id: 1,
        img:"img/flash cat.png.jpg" ,
        tittle: "Flash",
        year: '2014',
        genres: 'science fiction et fantastique',
        duration: '44 minutes',
        resume: 'Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d\'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.',
        fav1: "img/outline_favorite_white_24dp.png.png",
        fav2: 'img/outline_movie_white_24dp.png',
        fav3: 'img/outline_watch_later_white_24dp.png'
        
    },
    
   
  ]
  // fin base de données 1
  

// point entrée 
const divAfficheConteneur = document.querySelector('.conteneur');
  
// fin point entrée 

// reliement
const displayaffiche = () => {
  const afficheNode = affiche.map((affiche) => {
    return createDivElement(affiche);
  })
  divAfficheConteneur.append(...afficheNode);
}
// fin reliement




// début fonction création film

const createDivElement = (affiche) => {
  const divContent = document.createElement('div');
  divContent.classList.add('content')


  const divImg = document.createElement('div');
  divImg.classList.add('divImg')
 

  const a = document.createAttribute('a')
  a.href = '#'

  const img = document.createAttribute('img')
  img.src = affiche.img
  img.alt = `affiche du film ${affiche.tittle}`

  const divInfoFilm = document.createElement('div')
  divInfoFilm.classList.add('infofilm')

  const titre = document.createAttribute('h3')
  titre.innerText = affiche.tittle

  const ul = document.createElement('ul')
  const li1 = document.createElement('li')
  li1.innerText = affiche.year
  const li2 = document.createElement('li')
  li2.innerText = affiche.genres
  const li3 = document.createElement('li')
  li3.innerText = affiche.duration

  const divResume = document.createElement('div')
  divResume.classList.add('resume')
  const p = document.createAttribute('p')
  p.innerText = affiche.resume


  const a1 = document.createElement('a');
  a1.href = "#";
  const logoHeart = document.createElement('img');
  logoHeart.src = affiche.fav1;
  logoHeart.alt = "favori";
  a1.innerText = "Add to favorite";

  const a2 = document.createElement('a');
  a2.href = "#";
  const logoHeart2 = document.createElement('img');
  logoHeart2.src = affiche.fav2;
  logoHeart2.alt = "favori";
  a2.innerText = "Add to favorite";

  const a3 = document.createElement('a');
  a3.href = "#";
  const logoHeart3 = document.createElement('img');
  logoHeart3.src = affiche.fav3;
  logoHeart3.alt = "favori";
  a3.innerText = "Add to favorite";
  

  divContent.append(divImg, a, divInfoFilm, titre, ul, divResume, p, a1, a2, a3)
  a.appendChild(img)
  ul.appendChild(li1, li2, li3)
  a1.appendChild(logoHeart)
  a2.appendChild(logoHeart2)
  a3.appendChild(logoHeart3)

  return divContent
}

// fin fonction création film
