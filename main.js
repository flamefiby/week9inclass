let requestURL = 'https://leihan.ca/JavaScript/week9inclass/package.json';
//create new XHR object
let request = new XMLHttpRequest();

request.open('GET', requestURL);
//request type
request.responseType = 'json';
//send the request by using send method
request.send();

//wait for the request to be returned, store the response in a variable
//invoke pizzaTypes function with pozzaTypes as argument
request.onload = function(){
    let plentyPizza = request.response;
    console.log(plentyPizza);
    pizzaTypes(plentyPizza);
};

function pizzaTypes(jsonObj){
    let pizzaTypes = jsonObj.pizzaTypes;
    let section = document.querySelector('section');
    for (let i =0; i < pizzaTypes.length; i++){
        //build HTML elements

        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let ul = document.createElement('ul');

        img.setAttribute('src',
            'https://leihan.ca/JavaScript/week9inclass/assets/' + pizzaTypes[i].image);
        img.setAttribute('alt', pizzaTypes[i].image);

        h2.textContent = pizzaTypes[i].name;
        p1.textContent = 'Size, ' + pizzaTypes[i].size;
        p2.textContent = 'Price, ' + pizzaTypes[i].price;
        let toppings = pizzaTypes[i].toppings;
        for (let j = 0; j < toppings.length; j++){
            let listItem = document.createElement('li');
            listItem.textContent = toppings[j];
            ul.appendChild(listItem);
        }

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        section.appendChild(article);

    }
}