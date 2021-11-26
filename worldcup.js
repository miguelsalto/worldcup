const TEAMS = [
	"Mexico", 
	"Argentina" , 
	"Brazil", 
	"Chile" , 
	"Spain", 
	"England", 
	"Holand", 
	"Belgium", 
	"Canada", 
	"France",
	"Egypt",
	"Bolivia",
	"USA",
	"Germany",
	"Portugal",
	"Servia"];

function random(from, to) {
	return from + Math.floor(Math.random() * (to - from + 1));
}

function swap(arr, idx1, idx2) {
	let temp = arr[idx2];
	arr[idx2] = arr[idx1];
	arr[idx1] = temp;
}

function shuffle(arr) {
	let length = arr.length;
	for (var i = 0; i < length; i++) {
		let to = random(i, length - 1);
		swap(arr, i, to);
	}
}

function split(arr) {
	let length = arr.length;
	let half  = length / 2;
	let subarr1 = arr.slice(0, half);
	let subarr2 = arr.slice(half);
	return [subarr1, subarr2];
}

function createMatches() {
	let matches = new Array();
	createMatchesHelper(TEAMS, matches);
	return matches;
}

function createMatchesHelper(teams, matches) {
	if (teams.length == 2) {
		matches.push(teams);
		return;
	}
	shuffle(teams);
	let groups = split(teams);
	createMatchesHelper(groups[0], matches);
	createMatchesHelper(groups[1], matches);
}

let matches = createMatches();
console.log(matches);


