      var dice_1=Math.round((Math.random()*5)+1);

      var dice_2=Math.round((Math.random()*5)+1);


      var dice_1_image="images/dice"+dice_1+".png";

      var dice_2_image="images/dice"+dice_2+".png";


      document.querySelectorAll("img")[0].setAttribute("src",dice_1_image);
  
      document.querySelectorAll("img")[1].setAttribute("src",dice_2_image);

  
      if(dice_1>dice_2)
      {
        document.querySelector("h1").innerHTML="<b>⛳️ player 1 won</b>";
      }
      else if(dice_2>dice_1)
      {
        document.querySelector("h1").innerHTML="<b>⛳️ player 2 won</b>";
      }
      else
      {
        document.querySelector("h1").innerHTML="<b>⛳️ IT IS A DRAW </b>";
      }