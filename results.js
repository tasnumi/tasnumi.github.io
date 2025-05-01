import { traitsInfo } from "./data.js";

const params = new URLSearchParams(window.location.search);
const personality = params.get('personality');

if(traitsInfo[personality])
{
    const trait = traitsInfo[personality];

    document.getElementById('result-text').innerText = `Your bear personality is: ${trait.title}`;
    document.getElementById('result-gif').src = trait.image
    document.getElementById('result-description').innerText = trait.description
}
else{
window.location.href="/"
}

