
const dotenv = require('dotenv')
dotenv.load({path: '../config.env'})

const bh = require('../lib/bosonhelper')
let ner = bh.extractKeywords(['DNF 是由韩国游戏公司 Neople 开发的免费角色扮演 2D 网游，游戏于 2005 年在韩国正式发布。2008 年 6 月 19 日，由腾讯游戏代理的国服正式公测，当天就创造了19 万人同时在线的纪录，在当年这是一个非常不错的数字。而今年也成为了 DNF 在全球运营的第十年。'], 5)
ner.then(result => {
  console.log('result: ', result)
}).catch(err => {
	console.log('err:', err)
})
