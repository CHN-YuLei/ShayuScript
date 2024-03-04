/*******************************
[rewrite_local]
^http[s]?:\/\/uu.tuanyougou.com\/\/video\/registryUser.+$ url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/Ceshi.js
[mitm] 
hostname = *.tuanyougou.*
*******************************/

var obj = JSON.parse($response.body);
if(obj.code == 1)
{
  obj.data.showAd = "0";
}
$done({body: JSON.stringify(obj)});
