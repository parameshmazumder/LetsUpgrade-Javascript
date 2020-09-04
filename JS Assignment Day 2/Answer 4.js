let array = ["ram", "sam", "jodu", "modu"];
let x = array.length;
for(i=0;i<x;i++)
{
   
   for(var j=0;j<(array[i].length);j++)
   {
      if(array[i][j]=='a')
	    {
	      console.log(array[i]);
		  break;
		} 
   }

}