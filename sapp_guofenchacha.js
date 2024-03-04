/*******************************
[rewrite_local]
^http[s]?:\/\/uu.tuanyougou.com\/\/video\/registryUser.+$ url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/Ceshi.js
[mitm] 
hostname = *.tuanyougou.*
*******************************/

console.log($response.body);
var obj = JSON.parse($response.body);
obj.data.showAd = "0";
$done({body: JSON.stringify(obj)});
