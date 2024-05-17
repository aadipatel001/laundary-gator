const services = [
    {  
         Image:'img/laundry.png',
         name: "Dry Cleaning",
         price: 200
    },

    {  
        Image:'img/wash.png', 
        name: "Wash & Fold",
        price: 100
    },

    {   
        Image:' img/iron.png',
        name: "Ironing",
        price: 30
    },

    {
        Image:' img/spot.png',
        name: "Stain Removal",
        price: 500
    },

    {  
        Image:' img/leather.png',
        name: "Leather & Suede Cleaning",
        price: 999
    },

    {   
        Image:' img/wedding-dress.png ',
        name: "Wedding Dress Cleaning",
        price: 2800
    },
]
const servicelist=document.querySelector('#services');
function renderservices(){
    
    servicelist.innerHTML="";

services.forEach((element,index) => {
    servicelist.innerHTML+=`<div class="service-d">
                             <p><span style="width:70%;"><img src=${element.Image}><span class="service-name">${element.name}</span><span class="service-price">${element.price}$</span></span>
                            <button class="add-to-cart" id="${index}">Add-to-Cart</button> </div>`
    
});
}
renderservices()



let cartitem=[];
 let srno=1;
const book_now=document.querySelector('#book-now');
const sucessFail=document.querySelector('.sucess-fail ');
const fullname=document.querySelector('#input-name');
const email=document.querySelector('#input-mail');
const phone=document.querySelector('#input-phone');
const empty=document.querySelector('.emptycart');
const add_to_cart=document.querySelectorAll('.add-to-cart');
const bill_list=document.querySelector('#cart');


document.querySelector('#services').addEventListener('click',(e)=>{
 console.log(e);
 if(e.target.classList.contains('add-to-cart'))
    {
    if(e.target.innerText.toLowerCase().includes('add')){
    e.target.classList.toggle('remove')
    e.target.innerText="Remove";
     cartitem.push(services[Number(e.target.id)])
     
     
     
     addeditem()
     
     totalupdate()
      if(cartitem.length!=0){
        document.querySelector('.emptycart').classList.add('hide');
      }
           
     console.log('if');
    }
     
    
  
    

    else if(e.target.innerText.toLowerCase().includes('remove')){
        let newCart = [];
        
            for(let i = 0; i < cartitem.length; i++){
                if(cartitem[i] !== services[Number(e.target.id)]) newCart.push(cartitem[i])
            };
            cartitem = newCart
         e.target.classList.toggle('remove')
         e.target.innerText="Add-to-Cart";
         if(cartitem.length===0){
            document.querySelector('.bill').innerHTML=`0$`;
         }
         totalupdate()
        

         addeditem()
         
         console.log('else if');
    }

 
}})
function addeditem(){
    
    bill_list.innerHTML="";
    cartitem.forEach(obj=>(
      
      
      
      bill_list.innerHTML+=`<tr>
      <td>${srno}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${obj.name}</td>
      <td>${obj.price}$</td>
      </tr>`
      
       
       
     )
    )
     
}




function totalupdate(){
    let bill=0;
    cartitem.forEach(obj=>{
        bill+=obj.price
        document.querySelector('.bill').innerHTML=`${bill}$`;
    })
}



book_now.addEventListener('click',()=>{
    if(cartitem.length===0){
        sucessFail.innerHTML=`<h4 style="color:red;"> <span class="material-symbols-outlined">
        error
        </span>Add items first</h4>`;
        sucessFail.classList.toggle('hide')
        console.log("if");
        return;
    }
    else if(fullname.value ===""||phone.value===""||email.value===""){
        sucessFail.innerHTML=`<h4 style="color:red;"><span class="material-symbols-outlined">
        error
        </span>Enter details first</h4>`;
        sucessFail.classList.toggle('hide')
        console.Log("else if")
        return;
    }
    else{
        sucessFail.innerHTML=`<h4 style="color:green;"><span class="material-symbols-outlined">
        check_circle
        </span>Order Placed Successfully</h4>`;
       

        console.log('else');
         reset()      
  

    }
})

function reset(){
    cartitem=[];
    renderservices()
    fullname.value="";
    phone.value="";
    email.value="";
    addeditem()
    
    document.querySelector('.bill').innerText=0;
    document.querySelector('.emptycart').classList.remove('hide');
}
