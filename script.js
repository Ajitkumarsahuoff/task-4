var a = new XMLHttpRequest();
a.open('GET','https://restcountries.eu/rest/v2/all',true);
a.send();
a.onload=function(){
    var data=JSON.parse(this.response);
var casia=data.filter((x)=>x.region==='Asia');
console.log(casia);

    
}