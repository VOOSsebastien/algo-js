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
    let castMembers=[];
    let name= readlineSync.question('name of TV Show : ');
    let productionYear= readlineSync.question('production year of TV Show : ');
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

function randomizeCast(serie){
    console.log(serie);
    /*
        let i = castMembers.length,  randomIndex;
        while (i != 0) {
          randomIndex = Math.floor(Math.random() * i);
          i--;
          [castMembers[i], castMembers[i]] = [
            castMembers[i], castMembers[i]];
        }
        console.log(castMembers);
        */
}
askTvSerie();
randomizeCast();


//////////////////////////////////////
///////////Exercise 5.3//////////////
////////////////////////////////////

