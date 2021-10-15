
favoris = [];

// barre de recherche fonctionnelle via API // barre de recherche fonctionnelle via API // barre de recherche fonctionnelle via API
let main = document.querySelector('main')
let body = document.querySelector('body')
let mainresearch=document.querySelector('.mainresearch')
let formSearch = document.querySelector('.formSearch');
let searchInput = document.querySelector(".searchbar");
let API_TOKEN = "37cf1254c9ee3ea79476a11690639c08";
formSearch.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(searchInput.value);
  let text = searchInput.value;
  let movies = fetch('https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text)
  movies.then(async response => {
      try {
          const movie = await response.json();
          movieSearch = movie.results  
          console.log(movieSearch);
        main.innerHTML = ""
        
          
          const movieNode = movieSearch.map( (movie) => {
            return createMovieElements(movie)
        })
        mainresearch.append(...movieNode);
      } catch(e) {
          console.log(e);
      };
      })
      .catch((error) => console.error(error))
})
    

const createMovieElements = (resultContent) => {
  
  const divContaineur = document.createElement('div')
    divContaineur.classList.add('conteneursearch')
   



  const divContent = document.createElement('div')
    divContent.classList.add('content')
    divContent.classList.add('contentresearch')

  const divsearchaffiche = document.createElement('div')
  divsearchaffiche.classList.add('searchaffiche')

  const a = document.createElement('a')
  a.href = "produit.html"
  const image = document.createElement('img')
  image.classList.add('searchimg')
  image.src = "https://image.tmdb.org/t/p/w500/" + resultContent.poster_path;
  image.alt = ('Affiche film ')
  
  const searchtext = document.createElement('div')
  searchtext.classList.add('searchtext')
  

  const h4 = document.createElement('h4')
  h4.innerText = resultContent.title
  
  const p1 = document.createElement('p')
  p1.classList.add('searchp')
  p1.innerText = resultContent.release_date
  
   
  const p2 = document.createElement('p')
  p2.classList.add('searchp')
  p2.innerText = 'genre'
  
  const p3 = document.createElement('p')
  const button1 = document.createElement('button')
  button1.classList.add('far')
  button1.classList.add('fa-heart')
  button1.classList.add('buttonsearch')
  p3.innerText = ('Favorite')

  // bouton fav on/off
  let condition = false;
  

p3.addEventListener('click' , () => {
condition = !condition;

  if (condition) {
    button1.classList.add('fas');
    button1.classList.remove('far');
    favoris.push(resultContent);
    button1.style.color = 'red';
    console.log(favoris);
    console.log(favoris.length);

  } else {
    button1.classList.add('far');
    button1.classList.remove('fas');
    button1.style.color = 'white';
    let favorisIndex = favoris.filter((value) => value.id !== resultContent.id)
    favoris = favorisIndex;
    console.log(favoris);
    console.log(favoris.length);
  }
})
  
  // fin bouton fav on/off



  const p4 = document.createElement('p')
  const button2 = document.createElement('button')
  button2.classList.add('fas')
  button2.classList.add('fa-film')
  button2.classList.add('buttonsearch')
  p4.innerText = ('Already seen')

  const p5 = document.createElement('p')
  const button3 = document.createElement('button')
  button3.classList.add('buttonsearch')
  button3.classList.add('fas')
  button3.classList.add('fa-eye')
  p5.innerText = ('Watch Later')



  divContaineur.append(divContent)
  divContent.append(divsearchaffiche,a,searchtext,h4,p1,p2,p3,p4,p5)
  a.append(image)
  p3.append(button1)
  p4.append(button2)
  p5.append(button3)

  return divContaineur
}
// Fin barre de recherche fonction via API // Fin barre de recherche fonction via API // Fin barre de recherche fonction via API