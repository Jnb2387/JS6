//change value in profile to whatever is typed in the input form.

var nameInput = function(){
    document.getElementById("name2").innerHTML = name1.value
};
    document.querySelector("button").addEventListener('click',nameInput);

var bioInput = function(){
    document.getElementById("bio2").innerHTML = bio.value
};
    document.querySelector("button").addEventListener('click', bioInput);
    
var bookInput =function(){
    document.getElementById("books2").innerHTML = books.value
};
    document.querySelector("button").addEventListener('click', bookInput);
    
var librariesInput = function(){
    document.getElementById("libraries2").innerHTML = libraries.value
};
    document.querySelector('button').addEventListener('click', librariesInput);


//Show or hide form
// if the div form display is equal to "none"
var showForm = function(){
     if(form.style.display === "none"){
    document.getElementById("form").style.display="inherit";
     document.getElementById("show").innerHTML= "Hide Form";
    
     
  } else{
      document.getElementById("form").style.display = "none";
     document.getElementById("show").innerHTML="show Form";
  }
     
    
}
  document.getElementById("show").addEventListener("click", showForm);
// var hide = function(){
//     if(hide ===true){  
//         document.getElementById("show").innerHTML= "Hide Form"}}
