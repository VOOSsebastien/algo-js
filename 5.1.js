const readlineSync = require("readline-sync");


//////////////////////////////////////
///////////Exercise 5.1//////////////
////////////////////////////////////

/**
 * [askTvSerie description]
 * @return {[objet]}[objet serie compose du nom ,annee ,castMembers]
 */
////////////////////////////////////

let castMembers=[];

function askTvSerie() {
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
  let i = arr.length;
  while (i>0) {
    let randIndex=Math.floor(Math.random()*(i+1));
    [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    i--;
  }
}
let newSerie = askTvSerie();
randomizeCast(castMembers);
console.log(`Randomized cast : ${castMembers}`)
console.log("objet serie une fois modifie");
console.log(JSON.stringify(newSerie));

//////////////////////////////////////
///////////Exercise 5.3//////////////
////////////////////////////////////
/*
  function nestedArrayAndObject(){
      const info =['Once Upon a Time','Emma Swan','Regina Mills','Cora Mills','Queen of Hearts','Peter Pan',`The boy who wouldn't grow up`,'Zelena', 'The Wicked Witch'];
      //const[title,info.protagonist.name , info.protagonist.enemies[3] ,enemy.title ,enemy.name]=info;
    const title = info.title
    const protagonistName = info.protagonist.name
    const enemy = info.protagonist.enemies[3]
    const enemyTitle = enemy.title
    const enemyName = enemy.name
    
    return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
  }

  nestedArrayAndObject();
*/
let test = function nestedArrayAndObject() {

  const info = {
      title: 'Once Upon a Time', 
      protagonist: {
          name: 'Emma Swan', 
          enemies: [
              {name: 'Regina Mills', title: 'Evil Queen'},
              {name: 'Cora Mills', title: 'Queen of Hearts'},
              {name: 'Zelena', title: 'The Wicked Witch'},
              {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
          ],
      }
  }
  let {title: serie , protagonist: {name: Hero, enemies: [{name: Enemies, title: title}]} } = info
      return `${Enemies} (${title}) is an enemy to ${Hero} in "${serie}`
  }
  
  console.log(test());
