
/*
Instructions for posting new events
add object to array showEvents
template object
All properties should have relevant string value||false
set false if you do not need any property
  {
    title:false,
    imageUrl:false,
    description:Mandatory!!,
    postedBy:'please do provide your name and roll number',
    link:false,
    buttonText: provide button text only if link is available,
    subText:Coming Soon or something link that ||false,
    active:make sure only one element in array is true for active
  }
*/ 

var showEvents=[
  {
    title:false,
    imageUrl:false,
    description:'All Students of B-TECH(IT) are hereby informed that the I.T. Department is conducting an<span id="blue_text">#InternalHackathon</span>for shortlisting and selection of college teams as per requirements to participate in<span id="blue_text">#SmartIndiaHackathon2020</span>.It will be a 6 hour long Hackathon and Themes will be provided a day before this Hackathon Event.',
    postedBy:'vikas',
    link:'#',
    buttonText:'Click to Join Us',
    subText:false,
    active:false
  },
  {
    title:false,
    imageUrl:false,
    description:'All Students of B-TECH are hereby informed that the Vikas Kumar is conducting a handson session on the topics Git, Github, Open-Source and Open-Source oppertunities. Here you can also have the YouTube link on the Session https://youtu.be/LidH-VCDFAQ For more information check https://vikaskumar.co/',
    postedBy:'vikas',
    link:'https://youtu.be/LidH-VCDFAQ',
    buttonText:'YouTube',
    subText:false,
    active:false
  },
  {
    title:false,
    imageUrl:'https://www.docker.com/sites/default/files/Whale%20Logo332_5.png',
    description:'Hello Members, Join us for the next Docker, Inc Delhi event! at TBA - Delhi/NCR Delhi, 110000 on Sat 01 Feb 2020. Under this upcoming Meetup, we will be covering Docker, Kubernetes, Security & their usage. Meetup Sponsors:- #Devengers in association with Microsoft.',
    postedBy:'vikas',
    link:'https://events.docker.com/events/details/docker-delhi-presents-docker-meetup-21/',
    buttonText:'RSVP NOW',
    subText:false,
    active:false
  },
  {
    title:false,
    imageUrl:false,
    description:'All Students of B-TECH are hereby informed that the Sahastra Kishore and Anuj Singh are conducting a handson session on the Alexa Skill development. For more information check the link:',
    postedBy:'sahastra',
    link:'http://bit.ly/gecblog3',
    buttonText:'info',
    subText:'Coming Soon',
    active:false
  },
  {
    title:false,
    imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png',
    description:'CBPGEC and BITS, Pilani are hosting Mini-Apogee Tech fest on 12 March 2020(tentative date). With events like: Hackathons, Coding Competition, Training sessions and much more! come join us to win exciting prizes ',
    postedBy:'Gagan Sharma 01320703118',
    link:'https://bits-apogee.org/',
    buttonText:'more about Apogee',
    subText:'for more info contact Gagan Sharma, second year IT',
    active:true,
  }
]

var GagsCoursel=document.getElementById("gagsCaro")
var GagsCourselControls=document.getElementById("GagsCaroControls")
var htmlForGagsCour=""
htmlForGagsControls=""
for(i in showEvents){
  htmlForGagsCour+='<div class="carousel-item'
  if(showEvents[i].active){
    htmlForGagsCour+=' active'
  }
  htmlForGagsCour+='"><div class="carousel-wrapper"><h1 id="orange_text" style="font-family: &#39;Be Vietnam&#39;, sans-serif;">"</h1>'
  if(showEvents[i].title){
    htmlForGagsCour+='<h2>'+showEvents[i].title+'</h2>'
  }
  if(showEvents[i].imageUrl){
    htmlForGagsCour+='<img src="'+showEvents[i].imageUrl+'" height="40px">'
  }
  if(showEvents[i].description){
    htmlForGagsCour+='<h4 class="description">'+showEvents[i].description+'</h4>'
  }
  htmlForGagsCour+='<h1 id="orange_text" style="font-family: &#39;Be Vietnam&#39;, sans-serif;">"</h1><p>'
  if(showEvents[i].subText){
   htmlForGagsCour+= '<h5 class="description"><b>'+showEvents[i].subText+'</b></h5>'}
  if(showEvents[i].link){
    htmlForGagsCour+='<a target="blank" href="'+showEvents[i].link+'"><button class="btn btn-primary" id="buttons"><b>'+showEvents[i].buttonText+'</b></button></a>'
  }
  htmlForGagsCour+='</p><br/><br/></div></div>'
  htmlForGagsControls+='<li data-target="#carouselExampleIndicators" data-slide-to="'+i+'" '
  if(showEvents[i].active){
    htmlForGagsControls+='class="active"'
  }
 htmlForGagsControls+= '"></li>'
}
GagsCourselControls.innerHTML=htmlForGagsControls
GagsCoursel.innerHTML=htmlForGagsCour;


$("#gaganHide").css("opacity","0");
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 0.7*screen.availHeight || document.documentElement.scrollTop > 0.7*screen.availHeight) {
    $("#gaganHide").css("opacity","1");
  } else {
    $("#gaganHide").css("opacity","0");
}
}