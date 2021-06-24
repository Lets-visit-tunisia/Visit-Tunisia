var tunisiaCard = [
{ name:"Djerba" ,
 image: "./img/Djerba.jpg"
},
{ name:"Sousse" ,
 image: "./img/Sousse.jpg"
},
{ name:"Hammamet" ,
 image: "./img/Hammamet.jpg"
},
{ name:"Mahdia" ,
 image: "./img/Mahdia.jpg"
},
{ name:"Tataouine" ,
 image: "./img/Tataouine.jpg"
},
{ name:"Tozeur" ,
 image: "./img/Tozeur.jpg"
},
{ name:"ElJem" ,
 image: "./img/ElJem.jpg"
},
{ name:"ElJem" ,
 image: "./img/ElJem.jpg"
},
{
    
}

];


//
 
$( "select" ).change(function(){
    for(var i=0;i<tunisiaCard.length;i++){
        if(event.target.value === tunisiaCard[i].name){
         $("img").attr("src",tunisiaCard[i].image)
        }
    }
  });
