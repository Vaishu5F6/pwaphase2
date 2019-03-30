function submitData() {
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var phoneno=document.querySelector("#phoneno").value;
  var email=document.querySelector("#email").value;
  var designation=document.querySelector("#designation").value;

var ginstitute=document.querySelector("#ginstitute").value;
var gbranch=document.querySelector("#gbranch").value;
var gyop=document.querySelector("#gyop").value;
var gpercentage=document.querySelector("#gpercentage").value;

var Iinstitute=document.querySelector("#Iinstitute").value;
var Ibranch=document.querySelector("#Ibranch").value;
var Iyop =document.querySelector("#Iyop").value;
var Ipercentage=document.querySelector("#Ipercentage").value;

var Sschool=document.querySelector("#Sschool").value;
var Sbranch=document.querySelector("#Sbranch").value;
var Syop =document.querySelector("#Syop").value;
var Spercentage=document.querySelector("#Spercentage").value;

var skills=document.querySelector("#skills").value;

// IndexedDB Implementation
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;

if(!idb in window)
{
  console.log("indexedDB is not supported");
}
// IndexedDb creation
var request;
var store;
var open=idb.open("storeData",1);

console.log("IndexedDb is created");

open.onupgradeneeded=function(e){
 request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(e){
  console.log("error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  store.put({
    career:career,
    name:name,
    phoneno:phoneno,
    email:email,
    designation:designation,
    education:[
      {
        institute:ginstitute,
        branch:gbranch,
        year:gyop,
        percentage:gpercentage
      },
      {
        institute:Iinstitute,
      branch:Ibranch,
      year:Iyop,
      percentage:Ipercentage
    },
    {
      institute:Sschool,
      branch:Sbranch,
      year:Syop,
      percentage:Spercentage
    }
  ]
  });
}
window.open("index.html");
}
