document.addEventListener('DOMContentLoaded',()=>{

    fetchData()
    //call dom elements
    let form =document.getElementById('order-form');
    let orderBtn=document.querySelectorAll('.btn-pry');
    let close=document.getElementById('close');
    let email=document.getElementById('email').value;
    
    //close event
    );
    form.addEventListener('submit',()=>{
        //check if eamilfield is empty
        if(email==""){
            alert("email required")
        }
    })
 
 });
})
//fetch data from api
function fetchData(){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99b1489bc1mshe4869d13ccb8365p164db9jsn74e1339350c1',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
	.then(response => response.json())
	.then(response => {
        console.log(response.hints)
        //appendCard(response)
    })
	.catch(err => console.error(err));
}
const produce=document.getElementById('produce');

function appendCard(response) {
    response.hints.forEach((items) => {
      let list = document.createElement("li");
  
      list.innerHTML = `
      <div class=card>
      <div class="img">
            <figure>
        <img src=${items.image} alt="products">
            <figcaption>
            ${items.label}
            </figcaption>
         </figure>
        </div>
        <button id="order" class="btn-pry">Order now</button>
      </div>`
      
      produce.appendChild(list);
    });
}