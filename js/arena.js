export default class Arena{
    constructor(name){
        // an Arena has a name + name should be capitalized
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        //are can have gladiator "Colosseum"
        this.gladiators = [];
    }

    //gladiators can be added to the arena + arena should never have more than 2 gladiator at a time
    addGladiator(name) {

            if (this.gladiators.length < 2){
                this.gladiators.push(name);
            } else {
            return console.log("can't have that many gladiators in one arena")
        }
    
        }
        //if there are 2 gladiators in arena, they fight 
        fight() {
            //winning condition
            //1st Spear wins
            if ((this.addGladiator[0].weapon== "Spear") && (this.addGladiator[1].weapon== "Tirdent")){

                this.gladiators.pop();
                return this.gladiators[0].name;
            }
            else if ((this.addGladiator[0].weapon== "Tirdent") && (this.addGladiator[1].weapon== "Spear")){
                this.gladiators.shift();
                return this.gladiators[0].name;

            }//2nd Spear wins
            else if((this.addGladiator[0].weapon== "Spear") && (this.addGladiator[1].weapon== "Club")){
                this.gladiators.pop();
                return this.gladiators[0].name;
            }
            else if((this.addGladiator[0].weapon== "Club") && (this.addGladiator[1].weapon== "Spear")){
                this.gladiators.shift();
                return this.gladiators[0].name;
            }
            //3rd Club wins
            else if((this.addGladiator[0].weapon== "Club") && (this.addGladiator[1].weapon== "Trident")){
                this.gladiators.pop();
                return this.gladiators[0].name;
            }
            else if((this.addGladiator[0].weapon== "Trident") && (this.addGladiator[1].weapon== "Club")){
                this.gladiators.shift();
                return this.gladiators[0].name;
            }
            else{
                this.gladiators.shift();
                this.gladiators.shift();
                console.log("Both gladiators lose");
            }



        }  
    }


