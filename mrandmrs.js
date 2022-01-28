const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    var mrs="Mrs"
   for(i=0;i<friends.length;i++)
   {
       if(friends[i]=="Mari"||friends[i]=="MaryJane"){
       var mrs="Mrs."
       friends[i]=mrs+friends[i]}
       else{
       var mr="Mr."
       friends[i]=mr+friends[i]}

   }
console.log(friends)