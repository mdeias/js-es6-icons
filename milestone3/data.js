
const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];



// funzione che genera le icone 

const generaIcone = (icona) => {

	const {name, prefix, family, color} = icona;

	const boxIcona = `
	<div class="box-icona">
	<i class="${family} ${prefix}${name}" style="color: ${color}; font-size: 30px; margin-top: 15px"=></i>
	<p class="nome">${name}</p>
	</div>
	`;
	
	return boxIcona;
	
}

// funzione per stampare le icone 

const stampaIcone = (iconeDaStampare) => {

	contenitore.innerHTML = "";
	
	iconeDaStampare.forEach( (icona) => {

		contenitore.innerHTML += generaIcone(icona);
	
	});
}

// funzione che durante la selezione mi permette di stampare le giuste icone

const selezione = (event) => {

	const selezionaTipo = event.target.value;
	let iconeSelezionate = [];

	if (selezionaTipo === "all") {
		iconeSelezionate = icone;
	}else{
		iconeSelezionate = icone.filter((icona) => {
			return selezionaTipo === icona.type;
		});	
	}
	stampaIcone(iconeSelezionate);
}


const contenitore = document.querySelector(".container-icons");
console.log(contenitore);

document.querySelector("select").addEventListener("change", selezione);

stampaIcone(icone);







