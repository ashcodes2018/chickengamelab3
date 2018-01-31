var userObject={

  userName:undefined,
  userHealth:40,
  userHealsRemaining:2,
  userWins:0,
  heal:function()
  {
    var rand= Math.floor((Math.random()*10)+1);
    this.userHealth+=rand;
    this.userHealsRemaining--;
  }
};
function getName()
{
  var characterName=prompt("Enter you character name");
  return characterName;
}

function generateAttackDamageForGrant()
{
  return Math.floor((Math.random()*3)+1);
}


function generateAttackDamageForUser()
{
  return Math.floor((Math.random()*5)+1);
}

var grantObject= {
      grantName:"Grant the Mighty Chicken",
      grantHealth:10
    };

function startGame()
{
  var play=prompt("Do you want to play the game?");
  if (play ==="yes")
  {
    userObject.userName=getName();
    startCombat();
  }
}

startGame();

function startCombat()
{
  while(userObject.userHealth >= 0 && grantObject.grantHealth > 0)
  {
    var userChoice=prompt("Make a choice: Attack, Heal or Quit");
    if (userChoice==="heal")
    {
      userObject.heal();
      console.log("You have been healed!!! " + userObject.userName + " now has "+ userObject.userHealth + " healths.");
      console.log("Your heals remaining is "+ userObject.userHealsRemaining);
      if(userChoice==="heal" && userObject.userHealsRemaining===0 )
      {
        console.log("Sorry you are beyond help!");
      }
    }
    else if(userChoice==="attack")
    {
      grantObject.grantHealth-=generateAttackDamageForGrant();
      userObject.userHealth-=generateAttackDamageForUser();
      console.log("Grant has " +grantObject.grantHealth+ " healths remaining");
      console.log(userObject.userName+" has "+ userObject.userHealth+ " remaining");
      if(grantObject.grantHealth===0)
      {
        grantObject.grantHealth+=10;
        userObject.userWins++;
      }
      if(userObject.userWins>=5)
      {
        console.log("Grant is defeated !! Game Over");
      }
      else if(userObject.userHealth===0)
      {
        console.log(userObject.userName + "has been defeated by Grant!! Game Over");
      }
    }
    else if(userChoice==="quit")
    {
        console.log("Goodbye you chose to exit the game!");
        break;
    }
  }
}
