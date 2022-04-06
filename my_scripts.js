
$(document).ready(function(){
 let headclix = 0
 let eyeclix = 0
 let noseclix = 0
 let mouthclix = 0; 
 lightning_one(); 
 lightning_two(); 
 lightning_three(); 
 $("#head").click(function(){
     if (headclix < 9){$("#head").animate({left:"-=367px"}, 500);
         headclix+=1;}
     else {$("#head").animate({left:"0px"}, 500);
         headclix = 0;}    
 });
 $("#eyes").click(function(){
     if(eyeclix < 9){$("#eyes").animate({left:"-=367px"}, 500);
         eyeclix+=1;}
     else {$("#eyes").animate({left:"0px"}, 500);
         eyeclix = 0; } 
 }); 
 $("#nose").click(function(){
     if(noseclix < 9){$("#nose").animate({left:"-=367px"}, 500);
         noseclix+=1;}
     else{$("#nose").animate({left:"0px"}, 500); 
         noseclix = 0;}
 });//end click 
 $("#mouth").click(function(){
     if(mouthclix < 9){$("#mouth").animate({left:"-=367px"}, 500);
         mouthclix+=1;}
     else{$("#mouth").animate({left:"0px"}, 500);
         mouthclix=0; }
 });  
});





  

function lightning_one(){
    $("#lightning1").fadeIn("250").fadeOut("250"); 
    setTimeout("lightning_one()", 4000); 
};

function lightning_two(){
    $("#lightning2").fadeIn("250").fadeOut("250"); 
    setTimeout("lightning_two()", 4000); 
}; 

function lightning_three(){
    $("#lightening3").fadeIn("250").fadeOut("250");     
    setTimeout("lightning_three()", 4000); 
    playThunder(); 
};
    
function playThunder(){
    $("#thunder").get(0).playbackRate = 3; 
    $("#thunder").get(0).play(); 
    $("#thunder").get(0).muted = false; 
}; 


 

$(document).ready(function(){
 let headclix = 0
 let eyeclix = 0
 let noseclix = 0
 let mouthclix = 0;
    $("#head").click(function(){
        if (headclix < 9){
            headclix += 1; 
            }
            else{
                headclix = 0; 
            }    
  }); 
 $("#eyes").click(function(){
    if (eyeclix < 9){
        eyeclix += 1; 
    }
    else {
        eyeclix = 0; 
    }
  }); 
 $("#nose").click(function(){
    if (noseclix < 9){
        noseclix += 1; 
    }
    else { 
        noseclix = 0; 
    }
  }); 
 $("#mouth").click(function(){
    if (mouthclix < 9){ 
        mouthclix +=1; 
    }
    else{
        mouthclix = 0; 
    }
  });
});  
