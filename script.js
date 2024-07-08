const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const listDisplay = document.querySelector('ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	results = fruit.filter(val => val.toLowerCase().includes(str.toLowerCase()))
	return results;
}

function searchHandler(e) {
	if (e.key === 'Backspace' && input.value === ''){
		listDisplay.style.borderStyle = 'none';
		suggestions.innerHTML = '';
		return
	}
	if (e.key !== ' '){
		suggestions.innerHTML = '';
		showSuggestions(search(e.target.value));
		if (!search(e.target.value)[0]){
			listDisplay.style.borderStyle = 'none';
		} else {
			listDisplay.style.borderStyle = 'solid';
		}
	}
}

function showSuggestions(results) {
	results.forEach(val => {
		let suggItem = document.createElement('li');
		suggestions.appendChild(suggItem);
		suggItem.innerText = val;
	});
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
	listDisplay.style.borderStyle = 'none';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);