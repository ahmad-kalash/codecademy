// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(number, array) {
  return {
      specimenNum : number,
      dna: array,
      //.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
      mutate() {
        let dna = this.dna;
        let dnaBase = dna[Math.floor(Math.random() * dna.length)];
        let randDnaBase = returnRandBase();
        while (dnaBase === randDnaBase) {
          randDnaBase = returnRandBase();
        };
        this.dna[Math.floor(Math.random() *dna.length)] = randDnaBase;
        return this.dna;
      },
      //new method (does not return anything, but prints a message that states the percentage of DNA the two objects have in common )
      compareDNA(otherPAequor) {
        let commonBases = 0;
        for (let i=0; i< 15;i++){
          if (this.dna[i] === otherPAequor.dna[i]){
            commonBases++;}
          };
        let DnaInCommon = (commonBases/15) * 100;
        return DnaInCommon;
     
    },
    
    //willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
      //    willLikelySurvive() {
      //const cOrG = this.dna.filter(el => el === "C" || el === "G");
      //return cOrG.length / this.dna.length >= 0.6;},
      
      willLikelySurvive(){
        let noOfSurvivialBases = 0;
        for (let i=0; i< 15;i++){
          if (this.dna[i] === 'C' || this.dna[i]=== 'G'){
            noOfSurvivialBases++;}
          };
        let survivalPercentage = (noOfSurvivialBases/15) * 100;
        if (survivalPercentage > 60) {return true;}
        else {return false;}
      },
      
      //Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa.
      complementStrand(){
        let complementaryDnaStrand=[];
        let dna = this.dna;
        for (let i=0; i< 15;i++){
          switch (true)
            {
              case dna[i]==='A': complementaryDnaStrand.push('T');
              break;
              case dna[i]==='T': complementaryDnaStrand.push('A');
              break;
              case dna[i]==='C': complementaryDnaStrand.push('G');
              break;
              case dna[i]==='G': complementaryDnaStrand.push('C');
              break;
            };          
          };
        return complementaryDnaStrand;
      }
  };
}

//creating an instance of pAequor
let pAequor1 = pAequorFactory(1, mockUpStrand());
console.log ("pAequor1'DNA is: " + pAequor1.dna);

let pAequor2 = pAequorFactory(2, mockUpStrand());
console.log ("pAequor2'DNA is: " + pAequor2.dna);

//checking that its .dna changes after calling .mutate() on pAequor.
pAequor1.mutate();
console.log ("pAequor1'DNA after Mutate is: " + pAequor1.dna);

//testing compareDNA Method
console.log(`specimen #${pAequor1.specimenNum} and specimen #${pAequor2.specimenNum} have ${pAequor1.compareDNA(pAequor2).toFixed(2)}% DNA in common`);  


//test willLikelySurvive
console.log("pAequor1 will likely survive: " + pAequor1.willLikelySurvive());

//With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.

function makeEnvironment(){
let environment =[];
for (let specimenNum=0; specimenNum < 30; specimenNum++)
{
  let pAequor = pAequorFactory(specimenNum, mockUpStrand());
  while(pAequor.willLikelySurvive()=== false){
  pAequor = pAequorFactory(specimenNum, mockUpStrand());
  };
  environment.push(pAequor);
};
return environment;
};

//testing the makeEnvironment() function
console.log('the new natural environment hase been created contain 30 instances of pAequor, following is the first instance\'DNA: /'+ makeEnvironment()[0].dna);

//test complementStrand
console.log('the complementary DNA Strand for pAequor1 is: /' + pAequor1.complementStrand());

//Use the .compareDNA() to find the two most related instances of pAequor in an environment of 30 instances.

function getMostRelationTable (Lab) {
  //the following array will hold an object for each instance in the lab, the object properties will be the highist related instance'Num in the lab and the relation percentage  'relatedspecimenNum:' and 'relatedPercentage'
  const mostRelatedTable= [];

  //loop for each instance in the lab
  Lab.forEach (eachInstance => {
    
    //another loop for each instance will return an array of the relation percentage of each instanace with the other instances 
    const percentageCommonTab = Lab.map(instance => 
      {
        if (eachInstance.compareDNA(instance)===100) {return 0;} //not to compare with the same instance
       else {return eachInstance.compareDNA(instance);}
      });
    //console.log(percentageCommonTab);

    //Store the highist relation's perentage of that instance in a varriable called higerPercentage
    const higerPercentage = Math.max(...percentageCommonTab);
    
    // console.log('higer percentage is : /' + higerPercentage);

    //Now get the Index of the instance which has the highist relation's percentage
    let higherCommonIndex= percentageCommonTab.findIndex(word => word === higerPercentage);

    //console.log('higer percentage index is : /' + higherCommonIndex);

    //Store the highist relation percentage and specimenNum in an object and push it to the 'mostRelatedTable' array
    mostRelatedTable.push(
      {relatedspecimenNum: Lab[higherCommonIndex].specimenNum,  
        relatedPercentage:  higerPercentage});

  });
  
    return mostRelatedTable;
}


function mostRelated (relationTable){
  let mostRelated1;
  let mostRelated2;
  let relationPercentage = 10;
for (i=0 ; i < relationTable.length ; i++){
  if (relationTable[i].relatedPercentage > relationPercentage)
  {
    relationPercentage = relationTable[i].relatedPercentage
    mostRelated1 = ourLab[i].specimenNum;
    mostRelated2 = relationTable[i].relatedspecimenNum;
  }
}

console.log ('The Most related Organism in OurLab is: / Fist Organism\'s specimenNum:' + mostRelated1 + '/ Secound Organism\'s specimenNum:' + mostRelated2 + "/The Relation Percentage is: " + relationPercentage);
};

let ourLab = makeEnvironment();
let relationTable= getMostRelationTable(ourLab);
//console.log (relationTable);
mostRelated(relationTable);