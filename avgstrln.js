const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
 var sum=0
    for(i=0;i<friends.length;i++)
    {
       var ln= friends[i].length
       sum=sum+ln
    }
    console.log("sum="+sum)
    avg=sum/friends.length
    console.log("avg="+avg)