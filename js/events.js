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
  $('input:first-of-type').on('keydown',function(e){
    if(e.which===103){
      alert('you done pressed a g');
    }
    
  });
  
}

function submitIt(){
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.');
  })
}

});
