function calcNewDate()
{
const date1 = new Date(document.getElementById("d1").value);
const date2 = new Date(document.getElementById("d2").value)
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("diffdate").value=diffDays;
return false;
}
