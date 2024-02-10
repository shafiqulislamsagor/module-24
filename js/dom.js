console.log(' helo');
console.log(document);

const allLiTags = document.getElementsByTagName('li')

for(let li of allLiTags){
    console.log(li)
}

console.log(allLiTags)

let rootId = document.getElementById('root').innerHTML = 'thes';



console.log(rootId);


// Inner Text

const div = document.getElementById('my-details').innerHTML
const divs = document.getElementById('my-details').innerText



console.log(div)
console.log(divs)