async function fetchData(req) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/${req}`);
        const data = await response.json();
        
        console.log(data);
    } catch (error) {
        console.error('Erro:', error);
    }
}


const pokemon = 'pokemon'
fetchData(pokemon)


