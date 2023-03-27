const pokemonName = document.querySelector('.pokemon__name')
const pokemonId = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')
const prevButton = document.querySelector('.btn-prev')
const nextButton = document.querySelector('.btn-next')
var number = 0;
const fetchPokemon = async(pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(APIResponse.status == 200){
      const data = await APIResponse.json();
      return data;
    }
    
}

const renderPokemon = async (pokemon) =>{
   const data = await fetchPokemon(pokemon);
  
    if(data)
    {
      document.querySelector('.form input').value = ''
      pokemonImage.src = `${data.sprites.versions['generation-v']['black-white']['animated']['front_default']}`
      pokemonName.innerHTML = data.name
      pokemonId.innerHTML =data.id    
      number = data.id;
    }
   else
   {
     alert('Pokemon não encontrado, tente novamente!')
   }
}


let input = document.querySelector('.form').addEventListener('submit',(e)=>{
  e.preventDefault()
  renderPokemon(document.querySelector('.form input').value.toLowerCase())
  
 })
nextButton.addEventListener('click',()=>{
  if(number!=0){
    renderPokemon(number+1)
  }
})
prevButton.addEventListener('click',()=>{
  if(number!=0){
    renderPokemon(number-1)
  }
})