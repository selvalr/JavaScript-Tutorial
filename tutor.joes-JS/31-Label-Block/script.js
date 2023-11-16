let groups = [
    ["Ram", "Sam", "Ravi"],
    ["Kumar", "Tiya", "Sundar"],
    ["Rajesh", "Sara", "Rahul"],
  ];
  
  for(let group of groups)
  {
    inner:
    for(let member of group)
    {
      if(member.startsWith('R')){
        console.log("found one starting with R:", member);
        break inner;
      }
    }
  }