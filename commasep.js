const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    var str=""
    for(i=0;i<friends.length;i++)
    {
        str+=friends[i]+" "
    }
    console.log(str)
    console.log(str.split(" ").join(","))
    
    