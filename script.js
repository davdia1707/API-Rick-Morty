// 1. Save URL
const API_URL = 'https://rickandmortyapi.com/api/character';

// 2. Obtain data
async function obtenerPersonajes() {
    try {
        const respuesta = await fetch(API_URL); // Pedimos los datos
        const datos = await respuesta.json();   // Los convertimos a formato JSON (objeto JS)
        mostrarPersonajes(datos.results);       // Se los pasamos a otra función
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}

// 3.Print HTML
function mostrarPersonajes(personajes) {
    const contenedor = document.getElementById('personajes-container');
    
    personajes.forEach(personaje => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
        
        tarjeta.innerHTML = `
            <img src="${personaje.image}" alt="${personaje.name}">
            <h3>${personaje.name}</h3>
            <p>Estado: ${personaje.status}</p>
        `;
        
        contenedor.appendChild(tarjeta);
    });
}

// Ejecutamos la función al cargar
obtenerPersonajes();
