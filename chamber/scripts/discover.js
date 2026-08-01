import { places } from "../data/discover.mjs";

const container = document.querySelector("#discover-grid");

places.forEach((place,index)=>{

const card=document.createElement("article");

card.className=`discover-card area${index+1}`;

card.innerHTML=`

<h2>${place.title}</h2>

<figure>
<img
src="${place.image}"
alt="${place.title}"
loading="lazy"
width="300"
height="200">
</figure>

<address>${place.address}</address>

<p>${place.description}</p>

<button>Learn More</button>

`;

container.append(card);

});


// =============================
// Last Visit
// =============================

const message=document.querySelector("#visit-message");

const lastVisit=localStorage.getItem("lastVisit");

const now=Date.now();

if(!lastVisit){

message.textContent="Welcome! Let us know if you have any questions.";

}

else{

const difference=now-lastVisit;

const days=Math.floor(difference/86400000);

if(days<1){

message.textContent="Back so soon! Awesome!";

}

else if(days===1){

message.textContent="You last visited 1 day ago.";

}

else{

message.textContent=`You last visited ${days} days ago.`;

}

}

localStorage.setItem("lastVisit",now);