//define functions here

$(document).ready(function(){

// call functions here
function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load',function(){
    $(this).addClass('tasty');
  });
}

function pressIt(){
  $('input:first-of-type').on('keydown',function(){
    
    
  })
  
  
}
});
