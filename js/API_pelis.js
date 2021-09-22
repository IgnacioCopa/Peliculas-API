let nombre;
let url;
let url2;
let Mouse_x;
let Mouse_y;
let scroll_hor;
let scroll_dec;
var open=false;



window.onload = function() {

    document.getElementById("buscar").addEventListener("click",submit_name);
    document.getElementById("change").addEventListener("click",open_menu);

    movies=document.getElementById("other_movies");
    movies2=document.getElementById("other_movies2");
    movies3=document.getElementById("other_movies3");

    res_menu= document.getElementById("block_menu");

    //-------------COTROLADOR DE SLIDER 1-------------------------------------------------------------->
    movies.addEventListener("mousemove",function(mousePosition){

        Mouse_x= mousePosition.x;
        Mouse_y= mousePosition.y;
    
        //console.log(Mouse_x+" , "+Mouse_y); TEST CAPTAR CORDENADAS DE MOUSE

        scroll_hor = movies.scrollLeft= Mouse_x*1.78
        

        if(scroll_hor<=315){

        scroll_hor = movies.scrollLeft= Mouse_x-100

        }

        //movies.addEventListener("mousedown",move_movies);
        //movies.addEventListener("mouseup",block_movies);
            
    });

/*   function move_movies(){

        
        console.log("moviendo");
    }

    function block_movies(){

        console.log("block");
    }
*/

    //-------------COTROLADOR DE SLIDER 2-------------------------------------------------------------->
    movies2.addEventListener("mousemove",function(mousePosition){

        Mouse_x= mousePosition.x;
        Mouse_y= mousePosition.y;

        scroll_hor = movies2.scrollLeft= Mouse_x*1.78
        

        if(scroll_hor<=315){

        scroll_hor = movies2.scrollLeft= Mouse_x-100

        }
            
    });


    //-------------COTROLADOR DE SLIDER 3-------------------------------------------------------------->
    movies3.addEventListener("mousemove",function(mousePosition){

        Mouse_x= mousePosition.x;
        Mouse_y= mousePosition.y;

        scroll_hor = movies3.scrollLeft= Mouse_x*1.78
        

        if(scroll_hor<=315){

        scroll_hor = movies3.scrollLeft= Mouse_x-100

        }
            
    });


}

//Menu Responsive--------------------------------------------------------------------->
function open_menu(){
    
    if(open==false){

        document.querySelector(".container_box").style.display="none";
        document.querySelector(".menu").style.display="block";
        document.getElementById("search").style.display="none";
        document.getElementById("box_content").style.display="block";

        res_menu.style.display="block";
        res_menu.style.position="absolute";
        res_menu.style.zIndex="1";
        res_menu.style.minHeight="100vh";
        open=true;
    }
    else{

        document.querySelector(".container_box").style.display="block";
        document.querySelector(".menu").style.display="none";
        document.getElementById("box_content").style.display="flex";
        document.getElementById("search").style.display="flex";
        res_menu.style.display="block";
        res_menu.style.position="relative";
        res_menu.style.zIndex="0";
        res_menu.style.minHeight="0";
        open=false;

    }

}


//------------MOVIE API--------------------------------------------------------------->
function submit_name(){


    nombre= document.getElementById("name").value;

    url=`http://www.omdbapi.com/?t=${nombre}&apikey=1d86c388`
    

fetch(url)
.then(response => response.json())
.then(data => {

    let videos= document.getElementById("videos");
    let title= document.getElementById("title");
    let description= document.getElementById("description");
    let description2= document.getElementById("description2");
    let description3= document.getElementById("description3");

    

    videos.innerHTML=`
    <img src= "${data.Poster}" class="" style="object-fit: scale-down;" "></img>`

    title.innerHTML=`
    <p class="p-2 text-capitalize fs-1">${data.Title}</p>
    `

    description.innerHTML=`
    <p class="p-2 text-capitalize">Año:   ${data.Released}</p>
    <p class="p-2 text-capitalize">Clasificación:   ${data.Rated}</p>
    <p class="p-2 text-capitalize">Duración:   ${data.Runtime}</p>
    `
    description2.innerHTML=`
    <p class="p-2 text-capitalize">Lenguaje:   ${data.Language}</p>
    <p class="p-2 text-capitalize">Director:   ${data.Director}</p>
    <p class="p-2 text-capitalize">Genero:   ${data.Genre}</p>
   
    `
    description3.innerHTML=`
    <p class="p-2 text-capitalize">Actores:   ${data.Actors}</p>
    <p class="p-2 text-capitalize">${data.Plot}</p>
    `

    console.log(data);
    

})
.catch(err=>console.log(err));
}

//slider (1)---------------------------------------------->

for(let i=1; i<=12;i++){

    url2=`http://www.omdbapi.com/?t=${i}&apikey=1d86c388`




fetch(url2)
.then(response => response.json())
.then(data => {


    let others= document.getElementById("other_movies");
    const img = document.createElement('img');
    img.setAttribute('class','col m-2');
    img.setAttribute('src', `${data.Poster}`);

    others.appendChild(img)

})
.catch(err=>console.log(err));

}

//slider (2)---------------------------------------------->

for(let i=13; i<=24;i++){

    url2=`http://www.omdbapi.com/?t=${i}&apikey=1d86c388`




fetch(url2)
.then(response => response.json())
.then(data => {


    let others= document.getElementById("other_movies2");
    const img = document.createElement('img');
    img.setAttribute('class','col m-2');
    img.setAttribute('src', `${data.Poster}`);

    others.appendChild(img)

})
.catch(err=>console.log(err));

}

//slider (3)---------------------------------------------->

for(let i=25; i<=36;i++){

    url2=`http://www.omdbapi.com/?t=${i}&apikey=1d86c388`




fetch(url2)
.then(response => response.json())
.then(data => {


    let others= document.getElementById("other_movies3");
    const img = document.createElement('img');
    img.setAttribute('class','col m-2');
    img.setAttribute('src', `${data.Poster}`);

    others.appendChild(img)

})
.catch(err=>console.log(err));

}




