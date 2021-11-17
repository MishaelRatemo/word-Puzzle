var data = document.getElementById('target').innerHTML;

 console.log(data)
 // regular expression 
 var pattern = new RegExp('[aeiou]','gi');
    console.log(data.match(pattern))

 const newdata= data.replace(pattern,'-');
 // print the  results
 document.getElementById('results').innerHTML= newdata;
 console.log(newdata);
  