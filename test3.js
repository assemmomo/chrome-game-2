var hero= document.getElementById("hero");
var ghost= document.getElementById("ghost");
var main=document.getElementById("main");
var okk=document.getElementById("ok");
var nameqs=document.getElementById("nameqs");
var gameover=document.getElementById("gameover");
var settingsimg=document.getElementById("settingsimg")
var settingspage=document.getElementById("settingspage")
var closee=document.getElementById("x");
var herocolor=document.getElementById("herocolor");
var speeed=document.getElementById("speed")
var point1=document.getElementById("point1");
var point2=document.getElementById("point2");
var pointcounter=document.getElementById("pointcounter");
var pointnumber=document.getElementById("pointnumber");
var input=document.getElementById("input");
var noname=document.getElementById("noname");
var showinfoimg=document.getElementById("showinfoimg");
var showinfo=document.getElementById("showinfo");
var name1=document.getElementById("name1");
var range=document.getElementById("range");
var falsename=document.getElementById("falsename");
var gamelogo1=document.getElementById("gamelogo1");
var thecounter=document.getElementById("thecounter")
var x = 0;
var a=1



window.onload=function(){
      input.focus();
      gamelogo1.style.width="240px";
      gamelogo1.style.height="200px";
      gamelogo1.style.opacity="1";
}

input.onblur=function(){
      if (input.value==0) {
            falsename.style.display="block";
            okk.style.display="none";
      }else{
            okk.style.display="block";
            falsename.style.display="none";
      }
}

document.addEventListener('contextmenu', function(e){
      'use strict';
      e.preventDefault();
})

function jump(){
      //let audio = new Audio("mario.mp3").play();//
      document.getElementById("hero").classList.add('jump');
      setTimeout(function(){ document.getElementById("hero").classList.remove('jump');
}
,600) 
}

function jumpsound() {
      if(x=1){
            let audio = new Audio("mario.mp3").play();
            audio.volume=1;
      }
      else{
            audio.volume=0;
      }
}

function down(){
      document.getElementById("hero").classList.add('down');
      setTimeout(function(){ document.getElementById("hero").classList.remove('down');
}
,650)
}

function jumpup(){
      document.getElementById("hero").classList.add('jumpup');
      setTimeout(function(){ document.getElementById("hero").classList.remove('jumpup');
}
,700)
}

var check=setInterval(function(){
      
      var herotop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
      var herowidth = parseInt(window.getComputedStyle(hero).getPropertyValue("width"));
      var ghostleft = parseInt(window.getComputedStyle(ghost).getPropertyValue("left"));
      var ghost2left = parseInt(window.getComputedStyle(ghost2).getPropertyValue("left"));
      var pointleft = parseInt(window.getComputedStyle(point1).getPropertyValue("left"));
      var point2left = parseInt(window.getComputedStyle(point2).getPropertyValue("left"));
      
      if(herotop>465 && herowidth>=30 && herowidth <90 && ghostleft<=90 && ghostleft>0){
            ghost.style.animation="none";
            ghost2.style.animation="none";
            gameover.style.top="250px";
            main.style.opacity="0.2"
            hero.style.opacity="0.2"
            hero.style.display="none"
            hero.style.top="100px"
            ghost.style.opacity="0.2"
            settingsimg.style.opacity="1";
            document.getElementById("score").style.opacity="0";
            document.getElementById("scorelose").innerHTML=document.getElementById("scorecount").innerHTML;
            document.getElementById("pointlose").innerHTML=document.getElementById("pointnumber").innerHTML;
            point1.style.display="none";
            point2.style.display="none";
            point2.style.opacity="0";
            pointcounter.style.opacity="0";
            hero.style.display="none";    
            let lose = new Audio("lose.wav").play();
      }

      if(herotop>435 && herotop<505 && ghost2left<=90 && ghost2left>0){
            ghost.style.animation="none";
            ghost2.style.animation="none";
            document.getElementById("score").style.opacity="0";
            gameover.style.top="250px";
            settingsimg.style.opacity="1";
            main.style.opacity="0.2"
            hero.style.opacity="0.2"
            hero.style.display="none"
            hero.style.top="100px"
            ghost.style.opacity="0.2"
            document.getElementById("scorelose").innerHTML=document.getElementById("scorecount").innerHTML;
            point1.style.display="none";
            point2.style.display="none";
            point2.style.opacity="0";
            pointcounter.style.opacity="0";     
            hero.style.display="none";
            let lose2 = new Audio("lose.wav").play();
      }
      if(herotop>468 && pointleft<=90 && pointleft>80){
            pointnumber.innerHTML++;
            pointnumber.style.animation="pointnumber 0.5s linear";
            point1.style.display="none";
            let coin = new Audio("coin.wav").play(); 

            thecounter.innerHTML++

            setTimeout(function (){
                  point1.style.display="block";
                  pointnumber.style.animation="none";
                  
            },2900)

      }
      if(herotop<400 && herotop>379 && point2left<=90 && point2left>79){
            pointnumber.innerHTML++;
            pointnumber.style.animation="pointnumber 0.5s linear";
            point2.style.display="none";
            let coin2 = new Audio("coin.wav").play();

            thecounter.innerHTML++

            setTimeout(function (){
                  point2.style.display="block";
                  pointnumber.style.animation="none"; 
                  
            },3600)
      }
},10)
function okkk(){
      if(input.innerText=="0"){
            noname.style.opacity="1";
      } 
      else{
            function ok(){
                  nameqs.style.left="-900px"
                  okk.style.left="-900px"
                  nameqs.style.animation="none"
                  settingspage.style.top="300px"
                  closee.style.top="310px";
                  let music1 = new Audio("music1.mp3");
                  setInterval(function(){music1.volume = range.value;},100)
                  music1.loop = 20;
                  music1.play();
                  function savee(){
                        music1.volume = range.value;
                  }
                  function showname(){
                        var usernamee= document.getElementById("input").value;
                        document.getElementById("name1").innerText+=" " + "   " + " " + " " +" " +usernamee;
                  }
                  showname();}
                  ok();
      }

}

function agine(){
      gameover.style.top="-700px";
      document.getElementById("scorecount").innerHTML=0;
      pointnumber.innerHTML=0; 
      main.style.opacity="0.2"
      hero.style.opacity="0.2"
      ghost.style.opacity="0.2"
      settingspage.style.top="300px"
      closee.style.top="310px";
      document.getElementById("score").style.opacity="1";
      point2.style.opacity="1";
      point2.style.display="block";
}
document.getElementById("scorelose").innerHTML=document.getElementById("scorecount").innerHTML;

function settings(){
      settingspage.style.top="300px"
      closee.style.top="310px";
}
function closesettings(){
      settingspage.style.top="-700px"
      closee.style.top="-700px";
}
function style1(){
      hero.style.background="linear-gradient(rgb(8, 107, 8),rgb(0, 139, 69))"
}
function style2(){
      hero.style.background="linear-gradient(rgb(94, 1, 94),rgb(136, 11, 136))"
}
function style3(){
      hero.style.background="linear-gradient(blue,darkblue)"
}
function speed(){
      herocolor.style.backgroundColor="transparent"
      herocolor.style.color="white"
      document.getElementById("volumerange").style.color="white"
      document.getElementById("showcontrols").style.color="white"
      document.getElementById("showcontrols").style.backgroundColor="transparent"
      speeed.style.backgroundColor="rgba(5, 55, 63, 0.815)"
      speeed.style.color="rgb(172, 36, 88)"
      document.getElementById("style1").style.display="none"
      document.getElementById("style2").style.display="none"
      document.getElementById("style3").style.display="none"
      document.getElementById("speed1").style.display="block"
      document.getElementById("speed2").style.display="block"
      document.getElementById("speed3").style.display="block"
      document.getElementById("runs").style.display="none"
      document.getElementById("volumerange").style.display.backgroundColor="transparent"
      document.getElementById("music").style.display="none"
      range.style.opacity="0";
}
function herocolor1(){
      herocolor.style.backgroundColor="rgba(5, 55, 63, 0.815)"
      herocolor.style.color="rgb(172, 36, 88)"
      speeed.style.color="white"
      document.getElementById("showcontrols").style.color="white"
      document.getElementById("volumerange").style.color="white"
      speeed.style.backgroundColor="transparent"
      document.getElementById("showcontrols").style.backgroundColor="transparent"
      document.getElementById("style1").style.display="block"
      document.getElementById("style2").style.display="block"
      document.getElementById("style3").style.display="block"
      document.getElementById("speed1").style.display="none"
      document.getElementById("speed2").style.display="none"
      document.getElementById("speed3").style.display="none"
      document.getElementById("runs").style.display="none"
      document.getElementById("volumerange").style.display.backgroundColor="transparent"
      document.getElementById("music").style.display="none"
      range.style.opacity="0";
}
function showcontrols(){
      document.getElementById("showcontrols").style.backgroundColor="rgba(5, 55, 63, 0.815)"
      speeed.style.backgroundColor="transparent"
      speeed.style.color="white"
      herocolor.style.color="white"
      document.getElementById("volumerange").style.color="white"
      document.getElementById("showcontrols").style.color="rgb(172, 36, 88)"
      herocolor.style.backgroundColor="transparent"
      document.getElementById("style1").style.display="none"
      document.getElementById("style2").style.display="none"
      document.getElementById("style3").style.display="none"
      document.getElementById("speed1").style.display="none"
      document.getElementById("speed2").style.display="none"
      document.getElementById("speed3").style.display="none"
      document.getElementById("runs").style.display="flex"
      document.getElementById("volumerange").style.display.backgroundColor="transparent"
      document.getElementById("music").style.display="none"
      range.style.opacity="0";
}
function normal(){
      main.style.opacity="1"
      hero.style.opacity="1"
      ghost.style.opacity="1"
      point1.style.opacity="1"
      point1.style.display="block"
      pointcounter.style.opacity="1"
      hero.style.display="block"
      hero.style.top="500px"
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 1.5s infinite linear"
      ghost2.style.animation="ghost 2.2s infinite linear"
      point1.style.animation="point1 2s infinite linear"
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-700px"
      closee.style.top="-700px";
      hero.style.display="block";
      setTimeout(function(){
            point2.style.animation="point1 1.8s infinite linear"
            point2.style.opacity="1";
      },2500)
      setInterval(function(){
            document.getElementById("scorecount").innerHTML++;
      },1000)
}
function fast(){
      main.style.opacity="1"
      hero.style.opacity="1"
      ghost.style.opacity="1"
      point1.style.opacity="1"
      point1.style.display="block"
      pointcounter.style.opacity="1"
      hero.style.display="block"
      hero.style.top="500px"
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 1.2s infinite linear"
      ghost2.style.animation="ghost 1.9s infinite linear"
      point1.style.animation="point1 2s infinite linear"
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-700px"
      closee.style.top="-700px";
      hero.style.display="block";
      setTimeout(function(){
            point2.style.animation="point1 1.8s infinite linear"
            point2.style.opacity="1";
      },2500)
      setInterval(function(){
            document.getElementById("scorecount").innerHTML++;
      },1000)
}
function veryfast(){
      main.style.opacity="1"
      hero.style.opacity="1"
      ghost.style.opacity="1"
      point1.style.opacity="1"
      point1.style.display="block"
      pointcounter.style.opacity="1"
      hero.style.display="block"
      hero.style.top="500px"
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 0.9s infinite linear"
      ghost2.style.animation="ghost 1.5s infinite linear"
      point1.style.animation="point1 2s infinite linear"
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-700px"
      closee.style.top="-700px";
      hero.style.display="block";
      setTimeout(function(){
            point2.style.animation="point1 1.8s infinite linear"
            point2.style.opacity="1";
      },1500)
      setInterval(function(){
            document.getElementById("scorecount").innerHTML++;
      },1000)
}

function done(){
      herocolor.style.backgroundColor="transparent"
      document.getElementById("showcontrols").style.backgroundColor="transparent"
      speeed.style.backgroundColor="rgba(5, 55, 63, 0.815)"
      document.getElementById("style1").style.display="none"
      document.getElementById("style2").style.display="none"
      document.getElementById("style3").style.display="none"
      document.getElementById("speed1").style.display="block"
      document.getElementById("speed2").style.display="block"
      document.getElementById("speed3").style.display="block"
      document.getElementById("runs").style.display="none"
      document.getElementById("volumerange").style.display.backgroundColor="transparent"
      document.getElementById("music").style.display="none"
      range.style.opacity="0";
}

function showinfoimgg(){
      showinfoimg.style.animation="showinfoimg2 0.9s linear"
      nameqs.style.opacity="0.4";
      setTimeout(
      function(){
            showinfoimg.style.left="1740px"
            showinfoimg.style.bottom="120px"
            showinfoimg.style.transform="rotate(-90deg)"
            document.getElementById("showinfoimg2").style.display="block";
      }
      ,900)
      setTimeout(function(){
            showinfo.style.animation="showinfo 0.5s linear"
            showinfo.style.left="0";
      },500)
}
function closeinfo(){
      showinfo.style.left="-1750px"
      document.getElementById("showinfoimg2").style.display="none";
      document.getElementById("showinfoimg2").style.opacity="0";
      nameqs.style.opacity="1";
      setTimeout(function(){
            showinfoimg.style.animation="closeinfo 0.9s linear"
            showinfoimg.style.left="20px"
            showinfoimg.style.bottom="20px"
            showinfoimg.style.transform="rotate(0deg)"
      },200)
}

function volumerange(){
      //document.getElementById("volumerange").style.backgroundColor="rgba(5, 55, 63, 0.815)"
      document.getElementById("showcontrols").style.backgroundColor="transparent"
      document.getElementById("volumerange").style.color="rgb(172, 36, 88)"
      speeed.style.backgroundColor="transparent"
      herocolor.style.backgroundColor="transparent"
      document.getElementById("showcontrols").style.color="white"
      speeed.style.color="white"
      herocolor.style.color="white"
      document.getElementById("style1").style.display="none"
      document.getElementById("style2").style.display="none"
      document.getElementById("style3").style.display="none"
      document.getElementById("speed1").style.display="none"
      document.getElementById("speed2").style.display="none"
      document.getElementById("speed3").style.display="none"
      document.getElementById("runs").style.display="none"
      range.style.opacity="1";
      document.getElementById("music").style.display="block"
}
document.body.addEventListener('keydown' , e =>{
      if(e.code==="KeyA"){
      jump();
      }
      if(e.code==="KeyS"){
      down();
      }
      if(e.code==="KeyD"){
      jumpup();
      }
      // if(e.code==="Enter"){
      //       okkk();
      //       }
})