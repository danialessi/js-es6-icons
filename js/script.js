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




// Milestone 1 - Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.

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
        // appendo il template literal al container HTML
        container.append(iconHTML);
        });
    }
    
// Milestone 2 - Coloriamo le icone per tipo
    // mi serve un array di ogni colore (dichiarata sopra)
    // mi serve un array di tipi

    // richiamo la funzione 
    iconsTypes(icons);
    
    // funzione per array di tipi 
    function iconsTypes (iconsArray) {
        const arrayTypes = [];

        // eseguo un ciclo per selezionare ogni elemento e isolare il suo type
        iconsArray.forEach(( element ) => {
            const type = element.type;
            console.log(type);

        });
    }



// Milestone 3 - Creiamo una select con i tipi di icone e usiamola per filtrare le icone