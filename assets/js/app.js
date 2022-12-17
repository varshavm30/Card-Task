let cl = console.log;

//alert('hello')

let imagesarray = [
             "https://source.unsplash.com/random//birds", 
             "https://source.unsplash.com/random/?cup",
             "https://source.unsplash.com/random/?rose",
             "https://source.unsplash.com/random/?books",
             "https://source.unsplash.com/random/?nature",
             "https://source.unsplash.com/random/?food",
             "https://source.unsplash.com/random/?chocolate",
             "https://source.unsplash.com/random/?city",
             "https://source.unsplash.com/random/?butterfly",
             "https://source.unsplash.com/random/?html",
             "https://source.unsplash.com/random/?bootstrap",
             "https://source.unsplash.com/random/?angular",
             "https://source.unsplash.com/random/?javascript",
             "https://source.unsplash.com/random/?nodejs",
             "https://source.unsplash.com/random/?colors",
             "https://source.unsplash.com/random/?pencile",
             "https://source.unsplash.com/random/?laptop",
             "https://source.unsplash.com/random/?mobile",
             "https://source.unsplash.com/random/?remote",
             "https://source.unsplash.com/random/?lab",
             "https://source.unsplash.com/random/?fashion"
]

let radmimg = document.getElementById("imagesid");
cl(radmimg);

let result = "";
 imagesarray.forEach(function(img){
	 result += `<div class="col-sm-4 mb-4">
	              <div class="card">
				    <div class= "card-body"> 
			         <img src=${img} class="img-fluid p-1" alt ="images random" title="images random"> 
			        </div>
				  </div>
	           </div>`
 })
 radmimg.innerHTML=result;
 