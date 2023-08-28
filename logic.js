
var theme =0;
    
function changeTheme()   { 

      if (theme === 0)  {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        
        tags = document.getElementsByTagName('*');
        document.getElementById("DCGLogo").src = "DCGLogoGrey.png";

        for (i=0; i < tags.length; ++i)  {                            // brackets ensure maths calculation not string concatenation
      	  tags[i].style.color = "white";
        } // end for 
      }// end if 0
      
      if (theme === 1) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        
        tags = document.getElementsByTagName('*');
        document.getElementById("DCGLogo").src = "DCGLogBetterTransp.png";

        for (i=0; i < tags.length; ++i) {                            // brackets ensure maths calculation not string concatenation
      	  tags[i].style.color = "black";  
        } // end for 
        
      	document.getElementById("puzzleButton").style.color = "white";
      	document.getElementById("Home2").style.color = "green";
      }// end if 1
      
      if (theme >= 2) {
        body.style.backgroundColor = '#BCED91';
        body.style.color = 'black';
        
        tags = document.getElementsByTagName('*');
        document.getElementById("DCGLogo").src = "DCGLogBetterTransp.png";
    
        for (i=0; i < tags.length; ++i) {                            // brackets ensure maths calculation not string concatenation
         	tags[i].style.color = "black";
        } // end for 
        
     	  document.getElementById("puzzleButton").style.color = "white";
      	document.getElementById("myNav").style.color = "yellow";
      } // end if 2
      
      if (theme === 3){
        body.style.backgroundColor = '#00ddff';
        body.style.color = 'black';
        
        tags = document.getElementsByTagName('*');
        document.getElementById("DCGLogo").src = "DCGLogBetterTransp.png";
      
        for (i=0; i < tags.length; ++i){                            // brackets ensure maths calculation not string concatenation
          	tags[i].style.color = "black";
        } // end for 
        
        document.getElementById("puzzleButton").style.color = "white";
    	  document.getElementById("myNav").style.color = "yellow";
      }// end if 3
    
    
      theme ++;
      if (theme >= 4)  // prevents errors of going over 4 styles and loops back to the first
      {
        document.getElementById("puzzleButton").style.color = "white";
    	  document.getElementById("myNav").style.color = "yellow";
        theme = 0;
      }// end if >= 4
      
}// end changeTheme


  var fontSize = 20; // This will run when the page loads as it is outside the function
  
  function incFontSize()
  {
    // Ensure it does not keep growing, but wraps around back to 16 - therefore don't need another button/tag to make it maller again, therefore less mees on screen
    fontSize = fontSize + 4;
    if (fontSize > 40)
    {
      fontSize = 20;
    }// end if
  
       // boost the list boxes
       var tags = document.getElementsByTagName('select');  // all paragraph tags
    
   for (var i=0; i < tags.length; ++i)  // tags.length = the number of ('p') tags
    {
      	tags[i].style.fontSize = fontSize + "px";
    } // end for  list boxes
    
       // boost the buttons
   tags = document.getElementsByTagName('button');  // all paragraph tags
    
   for (i=0; i < tags.length; ++i)  // tags.length = the number of ('p') tags
    {
      	tags[i].style.fontSize = fontSize + "px";
    } // end for buttons
    
    
   // boost the p tags
   tags = document.getElementsByTagName('p');  // all paragraph tags
    
   for (i=0; i < tags.length; ++i)  // tags.length = the number of ('p') tags
    {
      	tags[i].style.fontSize = fontSize + "px";
    } // end for p tags
    
   // boost the li tags
   tags = document.getElementsByTagName('li'); //tags was crates in var tags, above, therefore only tags is required here
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = fontSize + "px";
    }// end for li tags
    
    
   // boost the h2 tags
   tags = document.getElementsByTagName('h2');
    
   for (i=0; i < tags.length; ++i)
    {                            // brackets ensure maths calculation not string concatenation
      	tags[i].style.fontSize = (fontSize + 4) + "px"; //Esnure h2 headings are always 4px larger than paragraphs
    } // end for h2 tgs
    
       // boost the h1 tags
   tags = document.getElementsByTagName('h1');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize + 10) + "px"; // Ensure hi headings are always 10px larger than paragraphs
    } // end for h1 tags
    
         // boost the h3 tags
   tags = document.getElementsByTagName('h3');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize + 2) + "px"; // Ensure hi headings are always 10px larger than paragraphs
    } // end for h3 tags
    
           // boost the h3 tags
   tags = document.getElementsByTagName('blockquote');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize + 2) + "px"; // Ensure hi headings are always 10px larger than paragraphs
    } // end for h3 tags
    
             // boost the h4 tags
   tags = document.getElementsByTagName('h4');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize + 1) + "px"; // Ensure hi headings are always 10px larger than paragraphs
    } // end for h4 tags
    
    
    
       // boost the <a> tags
   tags = document.getElementsByTagName('a');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize) + "px";
    } // end for <a> tags
    
        
       // boost the <input> tags
   tags = document.getElementsByTagName('input');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize) + "px";
    } // end for <input> tags
    
          
       // boost the <textarea> tags
   tags = document.getElementsByTagName('textarea');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize) + "px";
    } // end for <input> tags
    
    
         // boost the <labels> tags
   tags = document.getElementsByTagName('label');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize) + "px";
    } // end for <input> tags
    
    
          // boost the <div> tags
   tags = document.getElementsByTagName('div');
    
   for (i=0; i < tags.length; ++i)
    {
      	tags[i].style.fontSize = (fontSize) + "px";
    } // end for <div> tags
    
    
} // end function







function showFeedback(){
  document.forms.Puzzle.style.display = "none";  
  firstName = 'You';

  body.innerHTML += '<h1>' + firstName + ' have been awarded a - GOLD rosette.</h1>';
  body.innerHTML += '<div><center><img alt="That is correct - well done" src="GoldRosettePlus.png"></center></div> <br>';
}






function checkAnswers(){
  correct = true;
  var total = 0;

    // get all the elements from the quiz form, store them as quiz 
  puzzle = document.forms.Puzzle.elements;

  names =   ['CHRIS', 'SAM',    'SANTOSH', 'ASHLEY'];
  colours = ['ORANGE', 'YELLOW',   'GREEN', 'BLUE'];
  food =    ['PIZZA', 'CAKE',   'CRISPS', 'CHIPS'];
  rides =   ['GIGANTIUM', 'WHIRLWIND',   'LIGHTNING', 'FURY'];
  heights = ['182', '179',   '187', '170'];


  name1 = puzzle.Name1.value.toUpperCase();
  colour1 = puzzle.Colour1.value.toUpperCase();
  food1 = puzzle.Food1.value.toUpperCase();
  ride1 = puzzle.Ride1.value.toUpperCase();
  height1 = puzzle.Height1.value.toUpperCase();

  name2 = puzzle.Name2.value.toUpperCase();
  colour2 = puzzle.Colour2.value.toUpperCase();
  food2 = puzzle.Food2.value.toUpperCase();
  ride2 = puzzle.Ride2.value.toUpperCase();
  height2 = puzzle.Height2.value.toUpperCase();
  
  name3 = puzzle.Name3.value.toUpperCase();
  colour3 = puzzle.Colour3.value.toUpperCase();
  food3 = puzzle.Food3.value.toUpperCase();
  ride3 = puzzle.Ride3.value.toUpperCase();
  height3 = puzzle.Height3.value.toUpperCase();

  name4 = puzzle.Name4.value.toUpperCase();
  colour4 = puzzle.Colour4.value.toUpperCase();
  food4 = puzzle.Food4.value.toUpperCase();
  ride4 = puzzle.Ride4.value.toUpperCase();
  height4 = puzzle.Height4.value.toUpperCase();

  showFeedback();

 
//     if ((name1 == names[0])  && (colour1 == colours[0]) && (food1 == food[0])  && (ride1 == rides[0])  && (height1 == heights[0])
//        && (name2 == names[1]) && (colour2 == colours[1]) && (food2 == food[1])  && (ride2 == rides[1]) && (height2 == heights[1])
//        && (name3 == names[2]) && (colour3 == colours[2]) && (food3 == food[2])  && (ride3 == rides[2]) && (height3 == heights[2])
//        && (name4 == names[3]) && (colour4 == colours[3]) && (food4 == food[3])  && (ride4 == rides[3]) && (height4 == heights[3])){
//           showFeedback();
            
//       } else {
//          alert("Sorry, that's not correct.  Please try again.");
//    } // end else    

     
}

function openNav() {
  document.getElementById("myNav").style.width = "15%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function isChecked(chkBoxIn){
  var toCheck = ' ';
  
  if (chkBoxIn == '1') {
     toCheck = 'clue1';
  } else if (chkBoxIn == '2') {
    toCheck = 'clue2';
  } else if (chkBoxIn == '3') {
    toCheck = 'clue3';
  } else if (chkBoxIn == '4') {
    toCheck = 'clue4';
  } else if (chkBoxIn == '5') {
    toCheck = 'clue5'; 
  } else if (chkBoxIn == '6') {
    toCheck = 'clue6';
  } else if (chkBoxIn == '7') {
    toCheck = 'clue7';
  } else if (chkBoxIn == '8') {
    toCheck = 'clue8';
  } else if (chkBoxIn == '9') {
    toCheck = 'clue9';  
  } else if (chkBoxIn == '10') {
    toCheck = 'clue10';
  } else if (chkBoxIn == '11') {
    toCheck = 'clue11';
  } else if (chkBoxIn == '12') {
    toCheck = 'clue12';
  } else {
   toCheck = 'clue13';
  }
  var chk = document.getElementById(toCheck);
  if(chk.checked){
     chk.parentElement.style.color  = "gray";
  }
  else{
     chk.parentElement.style.color  = "black";
  }
}














