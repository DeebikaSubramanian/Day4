const friendsInfo = [6, 12, 'Mari', 1, true, 
'Munnabai', '200', 'CaptianAmerica', 8, 10];
var sum=0
for(i=0;i<friendsInfo.length;i++)
{
    var x=typeof friendsInfo[i]
    if(x=="number")
  sum=sum+friendsInfo[i]
}
console.log("sum="+sum)
avg=sum/5
console.log("Avg="+avg)