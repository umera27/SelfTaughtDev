const button=document.getElementById('button');
const show=document.getElementById('showlist');
const deletelist=document.getElementById('delete');

button.addEventListener('click', function() {
 const userValue =document.getElementById('user_input').value;
    if (userValue) {
   let storedData=JSON.parse(localStorage.getItem('data')) || [];
   storedData.push(userValue);
 localStorage.setItem('data',JSON.stringify(storedData) ) ; 
   
        alert('List SuccessFull Added');
                              document.getElementById('user_input'). value= '';

    }   
    else 
    {
        alert('write something');
    }
})

show.addEventListener('click', function() {
    const outputdiv = document.getElementById('container');
    const storedData = JSON.parse(localStorage.getItem('data')) || [];
    outputdiv.innerHTML = '';

    if (storedData.length > 0) {
        storedData.forEach(item =>
             {
const element=document.createElement('input');

     element.type='checkbox';
     element.id='mycheckbox';
     if(!element.checked){
        element.onclick=function () {
        check();
         } 
     }
     
  
    
                             
const label=document.createElement('label');  

     label.htmlfor='mycheckbox';
     label.textContent = item;
    function check() { 
       label.style.textDecoration="line-through";
    } 
     if(element.checked) {
          element.onclick=function () {
         rm();
         }  
     }
       function rm() {
        label.style.textDecoration="none";
    }
   
    
     outputdiv.appendChild(element);
     outputdiv.appendChild(label);
 let paragraph=document.createElement('p');
     paragraph.textContent='';     
     outputdiv.appendChild(paragraph);   
        })
    }
    else{
        alert('There is no list to display...');
    }
    
})

deletelist.addEventListener('click', function() {
const storedData=JSON.parse(localStorage.getItem('data')) || [];
    if (storedData.length>0) {
        localStorage.clear();
    } 
    else 
    {
        alert('There is nothing to delete');
    }

})
