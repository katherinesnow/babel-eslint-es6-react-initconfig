
/*采用 babel-core api 进行 ES6代码转化成ES5并输出ES5代码*/
var babel = require('babel-core');

var es6Code = 'let x = n => n + 1';
babel.transform(es6Code,{
	presets:['es2015']
})
.code;


Array.from({length:100}).map(function(item,index){return index});


/*Babel默认值转换新的JS语法，而不转换新的API
 * 比如 Iterator,Generator,Set,Maps,Proxy,Reflect,Symbol,Promise等全局对象，以及一些定义在全局对象上的方法
 （比如Object.assign）都不会转码
 举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill
 */

/*
babel-plugin-transform-runtime在babelrc中已经配置了插件plugins:["transform-runtime"],会自动执行
所以在package.json中的 babel-plugin-transform-runtime CLI 命令行处理 注释去掉

*/
/*
 * Eslint 用于静态检查代码的语法和风格
 */