    // --adding element in array--

// let number=["apple", "grapes", "orange"]

//push-end
// number.push("painaple", "starwberries")

//unshift-start

// number.unshift("lemon", "gouva")

//splice-middle

// number.splice(2, 0, "watermelons", "banana")
// console.log(number);

//---finding element--

// let number=["apple", "grapes", "orange","apple"]

// console.log(number.indexOf("grapess"));

// let number=["apple", "grapes", "orange","apple"]

// console.log(number.indexOf("apple"));
// console.log(number.lastIndexOf("apple"));

// console.log(number.indexOf("apples")!==-1);

// console.log(number.includes("red"));

// let orders=[
//     {id:1, item:"pen", quqntity:1},
//     {id:2, item:"note", quqntity:3},
// ]
// console.log(orders.includes({id:1, item:"pen", quqntity:1}));
// let result= orders.find(function(order){
//     return order.item==="pen"
// }
// )

// let result= orders.findIndex(function(orders){
//     return orders.item==="note"
// }
// )
// console.log(result);

//--arrow function--

// let result= orders.findIndex((order)=>{
//         return order.item==="note"
//     }
//     )
//     console.log(result);
// --(or)--

    // let result= orders.find((order)=> order.item==="note")
    // console.log(result);


    // --removing array--
//pop,shift
// let number=[1,2,3,4];

// number.pop()
// number.shift()
// number.splice(2,0)
// console.log(number);


//--empty array--

// let number=[1,2,3,4];
// number=[];
// number.length=0;
// console.log(number);


// var emp=["Sonoo","Vimal","Ratan"];  
// for (i=0;i<emp.length;i++){  
// document.write(emp[i] + "<br/>");  
// }  


// var i;  
// var emp = new Array();  
// emp[0] = "Arun";  
// emp[1] = "Varun";  
// emp[2] = "John";  
  
// for (i=0;i<emp.length;i++){  
// document.write(emp[i] + "<br>");  
// }  


// var arr1=["C","C++","Python"];  
// var arr2=["Java","JavaScript","Android"];  
// var result=arr1.concat(arr2);  
// document.writeln(result);  



// var arr=["AngularJs","Node.js","JQuery"]  
// var result=arr.join()  
// document.write(result);  


// var arr=["AngularJs","Node.js","JQuery"]  
// var result=arr.join('-')  
// document.write(result); 

// console.log(result);



// var arr=['John','Michael','Embrose','Herry','Lewis'];  
//     var itr=arr.entries();  
//     document.write("After applying the entries method:"+"<br>");  
//     for(var e of itr) //for loop using var.  
//     {  
//         document.write(e+"</br>");  
//     }  
    // var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
    // place at 0th position, the element between 1st and 2nd position.  
    // var result=arr.copyWithin(0,1,4);  
    // document.writeln(result);  

    var marks=[50,40,45,37,20];  
  
function check(value)  
{  
  return value>30;  //return false, as marks[4]=20  
}  
  
// document.writeln(marks.every(check));  
console.log(marks.some(check));