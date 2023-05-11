/*
Syntax:

break labelname;

continue labelname;
*/


let groups=[
    ["selva","karthi","sathish"],
    ["bass","sankar","seeni"],
    ["aravind","seenu","ravi"]
]

for (let group of groups) {
    inner:
    for(let member of group){
       if(member.startsWith("R")){
        console.log(member);
        break inner;
       }
    }
    
}