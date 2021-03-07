
const body = document.querySelector('body');
const main = document.createElement('main');
const jokeOne = "Why do duck have feathers? To cover their butt quacks.";
const jokeTwo = "Why did the bullet end up losing his job?  He got fired.";
const jokeThree = "Where does a waitress with only one leg work?  IHOP.";


const template = `
        <main>
        <h1 class="header">My Jokes</h1> 
       <ul>
        <li id="jokeOne">${jokeOne}</li>
        <li id="jokeTwo">${jokeTwo}</li>
        <li id="jokeThree">${jokeThree}</li>

        </ul>

    </main>
`
;

main.innerHTML = template;


body.appendChild(main);
const p = document.createElement('p');
p.textContent = "That's all folks!";
body.append(p);

