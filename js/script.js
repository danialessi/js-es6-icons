const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone




// 1
// Ho bisogno del container su cui stampare le icone e l'array, da passare come argomenti alla funzione
// usando jQuery ottengo il container su cui stampare le icone
    const containerIcons = $('.container-icons');

// richiamo la funzione 
    printIcons(icons, containerIcons);

// funzione per stampare icone nel container 
    function printIcons(iconsArray, container) {
    
        iconsArray.forEach(( element ) => {
        
        // destrutturo l'oggetto (element) per leggere le chiavi
            const {name, prefix, family} = element;

        // utilizzo template literal per popolare html 
        const iconHTML = `
        <div class="icons">
            <i class="${family} ${prefix}${name}"></i>
            <div>${name}</div>
        </div>
        `
        // appendo il template al container HTML
        container.append(iconHTML);
        });
    }
    



// APPUNTI 
// 2 - colorare le icone per tipo

// creare array con i colori con una funzione 
    // arrayColori --> array di stringhe, ogni stringa è un colore css 
    
    // funzione nomefunzione ( arrayIcons, arrayColori) {

        // per creare un uovo array uso map
            // creo una copia dell array originale con spread
            // mi serve l'indice di ogni tipo di icone 

            // alla copia aggiungo .color = indice degli elementi dell'array colori
            // return copia 
    // }

// array con solo i tipi (altra funzione)
// return: array di stringhe, ogni stringa è un tipo di icona
    // mi serve array originale
    // ciclo for each su array originale dove scorro gli elementi
        // salvo in una const gli element.type

// 3
// popolare la select per filtrare le icone 
// mi servono:
    // array di tipi di icone ---> array di stringhe ogni stringa è un tipo
    // oggetto jQuery che rappresenti la select a cui aggiungere le options 