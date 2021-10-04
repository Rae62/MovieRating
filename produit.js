// Tableaux info début


const info = [
    {
        imageback: "img/flash 1920x411.png",
        titre: "Flash",
        MinutexGenre: "44 Minutes , DRAME , SCIENCE-FICTION & FANTASTIQUE",
        trailer:'https:www.youtube.com/embed/Yj0l7iGKh8g',
        Intrigue: "Jeune expert de la police scientifique de Central City, Barry Allen se retrouve doté d'une vitesse extraordinaire après avoir été frappé par la foudre. Sous le costume de Flash, il utilise ses nouveaux pouvoirs pour combattre le crime.",
        crea1: "greg berlanti",
        crea2: "greg 2",
        crea3: "greg 3",
        imgacteur1: "img/grant gustin.jpg",
        realname1: "Grant Gustin",
        scenename1:"Barry Allen",
        imgacteur2: "img/grant gustin.jpg",
        realname2: "Grant Gustin",
        scenename2:"Barry Allen",
        imgacteur3: "img/grant gustin.jpg",
        realname3: "Grant Gustin",
        scenename3:"Barry Allen",
        imgacteur4: "img/grant gustin.jpg",
        realname4: "Grant Gustin",
        scenename4:"Barry Allen",
        imgacteur5: "img/grant gustin.jpg",
        realname5: "Grant Gustin",
        scenename5:"Barry Allen",       
    }]

//  Tableaux info fin 

// relliement
const displayfilm = () => {
    const filmNode = info.map( (info2) => {
        return createDivElement(info2);
    })
    entryconteneur.append(...filmNode); 
  }
// fin relliement

// Point entrée
const entryconteneur = document.querySelector('.conteneur')
// Fin Point entrée


// Début de la fonction 

const createDivElement = (info) => {
    const divContent = document.createElement('div');
    divContent.classList.add('content')
   
    const divbackgroundfilm = document.createElement('div');
    divbackgroundfilm.classList.add('backgroundfilm')
    const h3p = document.createElement('p')
    h3p.innerText= info.titre
    const contentfilmp = document.createElement('p')
    contentfilmp.innerText=info.MinutexGenre

    const divcontentfilm = document.createElement('div')
    divcontentfilm.classList.add('contentfilm')
    

    const iframetrailer = document.createElement('iframe')
    iframetrailer.src = info.trailer
    
    
    const barredesep = document.createElement('div')
    barredesep.classList.add('barresep')

    const divconteneurresumer = document.createElement('div')
    divconteneurresumer.classList.add('conteneurresumer')
    
    const divresumer = document.createElement('div')
    divresumer.classList.add('resumer')

    const resumerh3 = document.createElement('h3');
    resumerh3.innerText='Synopsis'

    const resumerp = document.createElement('p')
    resumerp.innerText=info.Intrigue

     const barredesep2 = document.createElement('div')
    barredesep2.classList.add('barresep')
    
    const divconteneurcreateur = document.createElement('div')
    divconteneurcreateur.classList.add('conteneurcreateur')

    const divcreateur1 = document.createElement('div')
    divcreateur1.classList.add('createur1')
    const createur1p = document.createElement('p')
    createur1p.innerText = info.crea1
    const createurh3 = document.createElement('h3')
    createurh3.innerText='Créateur/Créatrice'
    
    
    const divcreateur2 = document.createElement('div')
    divcreateur2.classList.add('createur2')
    const createur2p = document.createElement('p')
    createur2p.innerText = info.crea2
    const createurh32 = document.createElement('h3')
    createurh32.innerText='Créateur/Créatrice'


    const divcreateur3 = document.createElement('div')
    divcreateur3.classList.add('createur3')
    const createur3p = document.createElement('p')
    createur3p.innerText = info.crea3
    const createurh33 = document.createElement('h3')
    createurh33.innerText='Créateur/Créatrice'


    const divcontaineracteur = document.createElement('div');
    divcontaineracteur.classList.add('containeracteur')

    const divacteur1 = document.createElement('div')
    divacteur1.classList.add("acteur1")
    const imgacteur1 = document.createElement('img')
    imgacteur1.src=info.imgacteur1
    const nameacteur1 = document.createElement('p')
    nameacteur1.innerText=info.realname1
    const sceneacteur1 = document.createElement('p')
    sceneacteur1.innerText=info.scenename1
    const divacteur2 = document.createElement('div')
    divacteur2.classList.add("acteur2")
    const imgacteur2 = document.createElement('img')
    imgacteur2.src=info.imgacteur2
    const nameacteur2 = document.createElement('p')
    nameacteur2.innerText=info.realname2
    const sceneacteur2 = document.createElement('p')
    sceneacteur2.innerText=info.scenename2
      

    const divacteur3 = document.createElement('div')
    divacteur3.classList.add("acteur3")
    const imgacteur3 = document.createElement('img')
    imgacteur3.src=info.imgacteur3
    const nameacteur3 = document.createElement('p')
    nameacteur3.innerText=info.realname3
    const sceneacteur3 = document.createElement('p')
    sceneacteur3.innerText=info.scenename3

    const divacteur4 = document.createElement('div')
    divacteur4.classList.add("acteur4")
    const imgacteur4 = document.createElement('img')
    imgacteur4.src=info.imgacteur4
    const nameacteur4 = document.createElement('p')
    nameacteur4.innerText=info.realname4
    const sceneacteur4 = document.createElement('p')
    sceneacteur4.innerText=info.scenename4


    const divacteur5 = document.createElement('div')
    divacteur5.classList.add("acteur5")
    const imgacteur5 = document.createElement('img')
    imgacteur5.src=info.imgacteur5
    const nameacteur5 = document.createElement('p')
    nameacteur5.innerText=info.realname5
    const sceneacteur5 = document.createElement('p')
    sceneacteur5.innerText=info.scenename5

    // imbrication
    divContent.append(divbackgroundfilm,divcontentfilm,divconteneurresumer,divresumer,barredesep2,divconteneurcreateur,barredesep,divcontaineracteur,)
    divbackgroundfilm.append(h3p, contentfilmp,iframetrailer)
    divresumer.append(resumerh3, resumerp)
    divconteneurcreateur.append(divcreateur1,divcreateur2,divcreateur3)
    divcreateur1.append(createur1p,createurh3)
    divcreateur2.append(createur2p,createurh32)
    divcreateur3.append(createur3p, createurh33)
    divcontaineracteur.append(divacteur1,divacteur2,divacteur3,divacteur4,divacteur5)
    divacteur1.append(imgacteur1,nameacteur1,sceneacteur1)
    divacteur2.append(imgacteur2,nameacteur2,sceneacteur2)
    divacteur3.append(imgacteur3,nameacteur3,sceneacteur3)
    divacteur4.append(imgacteur4,nameacteur4,sceneacteur4)
    divacteur5.append(imgacteur5, nameacteur5, sceneacteur5)
    
    return divContent
} 
    displayfilm()
// Fin de la fonction



