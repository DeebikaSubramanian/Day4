const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
 var x=[]
    for(i=0;i<friends.length;i++)
    {
         x[i]=friends[i].length
         
    }     
    console.log(x) 
    var max=Math.max(...x)
    var min=Math.min(...x)
   for(i=0;i<friends.length;i++)
    {
         if(friends[i].length==max)
         console.log("Maximum no.of.char in the word is:"+max+"and the word is :"+friends[i])
         if(friends[i].length==min)
    console.log("Minimum no.of.char in the word is:"+min+"and the word is :"+friends[i])
    }        
          