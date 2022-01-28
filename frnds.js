let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
for(i=0;i<friends.length;i++){
if(friends[i]=="Mari"){
    friends[i]=="Munnabai"
    console.log("Name changed from Maari to Munanbai")
}
   
}dataHandling(friends) 
function dataHandling(input){
    for (var i = 0; i < input.length; i++) 
    {
        console.log("Friends are:"+friends[i])
    }}

    function dataHandling1(input){
        for (var i = 0; i < input.length; i++) {
                console.log(input[i])
                if(input[i]=="CaptianAmerica")
                break;
        }
        }
        dataHandling1(friends);

        function dataHandling2(input,name){
            for (var i = 0; i < input.length; i++) {
            if(input[i]==name)
            return "Yes, Jeff is my friend"
            }
            }
            let found = dataHandling2(friends,"Jeff");
            console.log(found);
