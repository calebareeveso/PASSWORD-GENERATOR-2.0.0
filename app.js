

var burger = document.getElementById("burger");
  burger.addEventListener('click',()=> {
  burger.classList.toggle('toggle');
 var sidenav = document.querySelector('.sidenav');
 var main = document.getElementById("main");
 
 sidenav.classList.toggle('active-nav');
 main.classList.toggle('move-main');
 
  
   helpme = document.getElementById("helpme");
   helpme.classList.toggle('active-nav');

 
  })
  alert( "Do remember to copy the passwords if you need it🤸" );
  const createbtn = document.getElementById("createbtn");
  createbtn.addEventListener("click",()=>{
  
  const random = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9"];
  const postrandom = random[Math.floor(Math.random()*random.length)];
  //secondrandom
  const random1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","#","*","$","&","%","!","~","|","+","-",":",";","_","!","/"];
  const postrandom1 = random1[Math.floor(Math.random()*random1.length)];
  //thirdrandom
  const random2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const postrandom2 = random2[Math.floor(Math.random()*random2.length)];
  //fourthrandom
  const random3 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const postrandom3 = random3[Math.floor(Math.random()*random3.length)];
  //fiftyrandom
  const random4 =["-","#","*","$","&","%","!","~","|","+","-","_",":",";","—","–","!","/","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
  const postrandom4 = random4[Math.floor(Math.random()*random4.length)];
  //sixthrandom
  const postrandom5 = Math.floor(Math.random()*9)+1;
  //senventhrandom
  const random6 =["-","#","*","$","&","%","!","~","|","_","+","-",":",";","!","-","_",":",";","—","–","/","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
  const postrandom6 = random6[Math.floor(Math.random()*random6.length)];
  //eightrandom
  const postrandom7 = Math.floor(Math.random()*90)+1;
  
  
  document.getElementById("demo").value= "PASSWORD : " + postrandom + postrandom1 + postrandom2 + postrandom3 + postrandom4 + postrandom5 + postrandom6 + postrandom7;
  

  }); 
  var add = (function () {
  var x = 0;
  return function () {return x += 1;}
})();
   const copybtn = document.getElementById("copybtn");
   copybtn.addEventListener('click',()=>{
       
  
  
    const copyinput = document.getElementById("demo");
    if(copyinput.value == ''){
        alert("CAN NOT COPY!! INPUT IS EMPTY")
    }
    else{
    copyinput.select(); 
    document.execCommand("copy");
    alert(" Copied  "+copyinput.value);}
  
     
 if(copyinput.value !== ''){
 
   var list = document.createElement("LI")
  var listname =document.createTextNode(copyinput.value)
  list.appendChild(listname);
  list.className="listclass"
 
  const paste = document.getElementById("paste");
  paste.appendChild(list);
  
  var counts = document.getElementById("numbers")
 
  document.getElementById("numbers").innerHTML = add();
  


// Check browser support
    
   
 
localStorage.setItem("y",counts.innerHTML);
document.getElementById("local2").innerHTML ="Number of passwords generated :" + localStorage.getItem("y");



  localStorage.setItem(counts.innerHTML,copyinput.value);

  document.getElementById('local').innerHTML += "-" + localStorage.getItem(counts.innerHTML) + "<br>";

  
  


  
    
  copyinput.value="";
  copyinput.blur();
    
  
   
   
    
 }
  })


  const storagehistory = document.getElementById('storagehistory');
  const storage = document.querySelector('.storage');
  storagehistory.addEventListener('click',()=>{
  storage.style.transform="translateY(0)";
  burger.classList.toggle('toggle');
  var sidenav = document.querySelector('.sidenav');
  var main = document.getElementById("main");
  
  sidenav.classList.toggle('active-nav');
  main.classList.toggle('move-main');
  
   
    helpme = document.getElementById("helpme");
    helpme.classList.toggle('active-nav');
  })

  const close =document.getElementById('close') ;
  // const storage = document.querySelector('.storage');
  close.addEventListener('click',()=>{
  storage.style.transform="translateY(-100%)";
  
  })
  function clear() {
    localStorage.clear();
    location.reload();
  }