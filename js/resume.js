var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;

if(!idb in window)
{
  console.log("indexedDB is not supported");
}

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
var info=store.get(paravalue);
info.onsuccess=function(data){
  console.log(data);
  personalinfo(data.target.result);
}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");

function personalinfo(pi) {
  var image=document.createElement("img");
  image.src="images/resumeicon.png";
  image.alt=pi.name;
  left.append(image);

var nn=document.createElement("h2");
nn.textContent=pi.name;
left.append(nn);

var pp =document.createElement("h2");
pp.textContent=pi.phoneno;
left.append(pp);

var ee=document.createElement("h2");
ee.textContent=pi.email;
left.append(ee);

var dd=document.createElement("h2");
dd.textContent=pi.designation;
left.append(dd);


  var h1=document.createElement("h1");
  h1.textContent="career objective";
right.append(h1);

var hr=document.createElement("hr");
right.append(hr);

var ii=document.createElement("h2");
ii.textContent=pi.career;
right.append(ii);

var h3=document.createElement("h3");
h3.textContent="Education_details";
right.append(h3);

var hr=document.createElement("hr");
 right.append(hr);

 var table=document.createElement("table");
 table.border="3";
 var tr1="<tr><th>qualification</th><th>institute</th><th>branch</th><th>percentage</th><th>year</th></tr>";
var tr2=" ";
for(var i in pi.education)
{
   tr2=tr2+"<tr><td">+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].year+"</td><td>"+pi.education[i].percentage+"</td></tr>"
 }
 table.innerHTML=tr1+tr2;
right.append(table);
}
