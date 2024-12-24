//your code here

let articles = ["the","an","a"];

let sortedNames = touristSpots.map ((item) ={
	let words = item.split(" ");
	if( articles.includes( words[0])) words.shift();

	return{ original : item , afterRemovingArticle : words.join(" ")};
}).sort( (a,b) => a.afterRemovingArticle.localCompare(b.afterRemovingArticle))
	.map( item => item.original);

let ul = document.querySelector("ul");
sortedNames.forEach( (item) => {
	let li = document.createElement("li");
	li.innerText = item;
	ul.appendChild(li);
})