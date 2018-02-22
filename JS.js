const toppings = ['pepperoni', 'mushrooms', 'mozzarella', 'ham', 'sausage', 'mozzarella', 'bacon', 'black olives', 'chicken', 'green peppers', 'red pepper', 'hotdog', 'bacon', 'spinach', 'garlic', 'ham', 'pineapple', 'feta', 'tomatoes', 'red onion'];

function remove(toppings)
{
  var toppings1, topping_len;
  toppings1 = toppings;
  var text, i;
  topping_len = toppings.length;

  var toppings2=[];
  for ( var j = 0; j <toppings.length; j++)
   {  
     if (toppings1[j]!= 'pineapple')
      { //if(toppings2.indexOf(toppings[j]) != -1)
       if( toppings2.indexOf(toppings[j]) == -1)
           toppings2.push(toppings[j]);
      }
   }
  for (var c=0; c < toppings2.length; c++)
   text += "<li>" + toppings2[c];
    document.getElementById("top").innerHTML = text;
  return toppings1;
  
}

console.log(remove(toppings));

