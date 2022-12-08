
function domainName(url) {
const pttrn = /^(https?:\/\/)?(www\.)?([^\/.]+)/gm
const urlInfo = pttrn.exec(url);
return urlInfo[3]
}


// console.log(domainName("http://google.com"))
// console.log(domainName("http://google.co.jp"));
// console.log(domainName("www.xakep.ru"));
// console.log(domainName("https://youtube.com"));