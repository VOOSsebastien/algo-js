const readlineSync = require("readline-sync");


//////////////////////////////////////
///////////Exercise 5.1//////////////
////////////////////////////////////

/**
 * [askTvSerie description]
 * @return {[objet]}[objet serie compose du nom ,annee ,castMembers]
 */
////////////////////////////////////

function askTvSerie() {
    var castMembers=[];
    var name= readlineSync.question('name of TV Show : ');
    var productionYear= readlineSync.question('production year of TV Show : ');
    let i=0;
    while(i!="stop"){
         i= readlineSync.question('cast members of TV Show !TAPEZ stop POUR SORTIR!');
         if(i!="stop"){
        castMembers.push(i);
        console.log(castMembers);
         }
    }
    var serie = {name, productionYear, castMembers}
    console.log("CECI EST NOTRE OBJET 'SERIE' ");
    console.log(serie);
    console.log("CECI EST NOTRE OBJET 'SERIE' MAIS EN VERSION JSON");
    console.log(JSON.stringify(serie));
    return serie;
  }
askTvSerie();

//////////////////////////////////////
///////////Exercise 5.2//////////////
////////////////////////////////////

function randomizeCast(arr){
        let i = arr.length,  
        randomIndex=i;
        while ((i-1) != 0) {
          randomIndex = Math.floor(Math.random() * i);
          i--;
          [arr[i], arr[i]] = [
            arr[i], arr[i]];
            console.log(arr);
        }
        console.log(arr);
        
}
tvSerie = [3,5,2,5,59,9,9,5];
randomizeCast(tvSerie);
/*
for (i = 0; i < serie.castMembers.length; i++) {
    numbersCopy[i] = castMembers[i];
  }
numbersCopy.push(4);
console.log(castMembers, 
    numbersCopy);
/*
let tvSerie=[];
askTvSerie();
tvSerie = serie.castMembers.filter(() => true);
console.log(tvSerie);
/*
COPIER castMembers dans autre array puis travaille avec ce new array
randomizeCast();
*/

//////////////////////////////////////
///////////Exercise 5.3//////////////
////////////////////////////////////

  function nestedArrayAndObject(){
      const info =['Once Upon a Time','Emma Swan','Regina Mills','Cora Mills','Queen of Hearts','Peter Pan',`The boy who wouldn't grow up`,'Zelena', 'The Wicked Witch'];
      const[title,info.protagonist.name , info.protagonist.enemies[3] ,enemy.title ,enemy.name]=info;
      /*
      const title = info.title
    const protagonistName = info.protagonist.name
    const enemy = info.protagonist.enemies[3]
    const enemyTitle = enemy.title
    const enemyName = enemy.name
    */
    return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
  }
  nestedArrayAndObject();

