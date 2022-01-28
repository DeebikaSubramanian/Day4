const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    console.log("First item in the array is"+friends[0])
    lname=friends.length-1/2
    console.log("Middle Item in the array is:"+friends[lname])
    console.log("Last Item of the array is:"+friends[friends.length-1])

    friends.unshift("Karthish")
    friends.push("Deebika")
    console.log("After added the first and last item in the array")
    console.log(friends)