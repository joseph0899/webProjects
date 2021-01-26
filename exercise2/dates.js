/*
<script type="text/javascript">

    var date1=new Date("06/30/2020");
    var date2=new Date("07/30/2020");
    var Difference_In_Time=date2.getTime()-date1.getTime();
    var Difference_In_Days=Difference_In_Time/(1000*3600*24);
    document.write("Total number of days between the given date <br>"+date1+"<br> and <br>"+date2+"is :<br>"+Difference_In_Days);

</script>
*/

function calcNewDate()
{
let date1= new Date(document.getElementById("d1").value)
let date2= new Date(document.getElementById("d2").value)

var getDiffinTime = date2.getTime()-date1.getTime();
var getDays = getDiffinTime/(1000*3600*24);

console.log(getDiff);
console.log("It's working")
//Outputs => 10 months 13 days

console.log(getDays + 'days');
}
