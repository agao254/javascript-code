//variable declaration

let player ={
    age: 99 , name: 'PATROBERT',
    IsActive:true,
//outfit object properties
    outfit:{

        colour:'red',
        size:'medium',
        cost:100,
        isNew:true
    }

};

console.log(player);//all these show the same result in the console
console.log(player.name);
console.log(player['name']);
//property modification
 player.IsActive = false;


 console.log(player);

 player.health =100;


 console.log(player);

//property deletion
 delete player.health;

 console.log(player);

 console.log(player.outfit.colour);//accessing properties of the pplayer in detail

 //property modification

 player.outfit.size ='size';

 console.log(player);

 //nested objects
 let anotherplayer =
 {

    name: 'okombo jnr',
    score: 100,

    IsActive: true,
    health:5.5,

    outfit: {

        colour:'pink',
        size :'large',
        isNew : 'false',
        cost :10


    }

    
 };
  //accessing properties

  console.log(anotherplayer.outfit);