
//creating an array of an object holding our picture name and sources

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
{ name:"Tataouine",
 image: "./img/Tataouine.jpg"
},
{ name:"Tozeur" ,
 image: "./img/Tozeur.jpg"
},
{ name:"Kairouan" ,
 image: "./img/Kairouan.jpg"
},
{ name:"ElJem" ,
 image: "./img/ElJem.jpg"
},
{ name:"Gammarth" ,
 image: "./img/Gammarth.jpg"
},
{ name:"ElKef" ,
 image: "./img/ElKef.jpg"
},
{ name:"Bizerte" ,
 image: "./img/Bizerte.jpg"
}];


$( "select" ).change(function(){
  for(var i=0;i<tunisiaCard.length;i++){
    if (event.target.value === tunisiaCard[i].name){
     $("img").attr("src",tunisiaCard[i].image)
    }
  }
})

// creating an array of an object holding our questions and answers 

const questions = [
  {
    question: "When did Tunisia become a republic?",
    optionA: "1 January 1948",
    optionB: "3 May 1952",
    optionC: "25 July 1957",
    optionD: "18 December 1965",
    correctOption: "25 July 1957"
  },
  {
    question: "Which sea is to the north of Tunisia?",
    optionA: "Black",
    optionB: "Red",
    optionC: "Mediterranean",
    optionD: "Adriatic",
    correctOption: "Mediterranean"
  },
  {
    question: "Which country is to the west of Tunisia?",
    optionA: "Tanzania",
    optionB: "Sudan",
    optionC: "Algeria",
    optionD: "Egypt",
    correctOption: "Algeria"
  },
  {
    question: "Which is the capital of Tunisia?",
    optionA: "Nabul",
    optionB: "Sfax",
    optionC: "Tunis",
    optionD: "Qibili",
    correctOption:"Tunis"
  },
  {
    question: "Which is the currency of Tunisia?",
    optionA: "Yen",
    optionB: "Euro",
    optionC: "Dollar",
    optionD: "Dinar",
    correctOption: "Dinar"
  },
  {
    question: "When did Tunisia become a French protectorate?",
    optionA: "1681",
    optionB: "1781",
    optionC: "1881",
    optionD: "1981",
    correctOption: "1881"
  },
  {
    question: "Which is the official language of Tunisia",
    optionA: "Turkish",
    optionB: " Arabic",
    optionC: " English",
    optionD: "French",
    correctOption: "Arabic"
  },
  {
    question: "Which city in Tunisia was razed by the Romans in 146 BC?",
    optionA: "Alexandria",
    optionB: " Carthage",
    optionC: "Damascus",
    optionD: "Tripolis",
    correctOption: "Carthage"
  },
  {
    question: "When did the Arabs conquer Tunisia?",
    optionA: "325",
    optionB: "500",
    optionC: "112",
    optionD: "647",
    correctOption: "112"
  },
  {
    question: "Who was Tunisia’s first president?",
    optionA: " Habib Bourguiba",
    optionB: "Mohammed Ghannouchi",
    optionC: " Salah Ben Youssef",
    optionD: "Ahmed Nejib Chebbi",
    correctOption: "Habib Bourguiba"
  }
]


var count =0;
$( "#quiz-btn" ).click(function(){
  if(count<questions.length){
  $( "#quiz-start-screen" ).html(`<p>${questions[count].question}</p><br>
    <button id ='a1'>${questions[count].optionA}</button><br>
    <button id ='a2' >${questions[count].optionB}</button><br>
    <button id ='a3'>${questions[count].optionC}</button><br>
    <button id ='a4'>${questions[count].optionD}</button><br>` )
  count++;
    }
      else { 
    $( "#quiz-start-screen" ).append(`<p> quiz fnished </p>`)
  }
});
    $("#myBtn").click( function () {
        var str = $("#myInput").val();
        if (str == 3) {
    alert('Good Job');
    $( "#quiz-btn" ).click();
   }
   else
   {alert ('play again!')}})




    //version1
