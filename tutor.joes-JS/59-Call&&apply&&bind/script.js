//call

function total(eng,mat) {
    console.log(this.name+" got "+(eng+mat)+" Marks");
    }
    const user = { name: 'Ram' };
    total.call(user, 65,75); // Ram got 140 Marks



//Apply
function total(eng,mat) {
    console.log(this.name+" got "+(eng+mat)+" Marks");
    }
    
    const user1 = { name: 'Ram' };
    total.apply(user1, [65,75]); // Ram got 140 Marks

//Bind-->variable la store panni vachi use panna
function total(eng,mat) {
    console.log(this.name+" got "+(eng+mat)+" Marks");
    }
    
    const user2 = { name: 'Ram' };
    const fun=total.bind(user2, 65,75);
    fun();// Ram got 140 Marks