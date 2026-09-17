"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=i(function(w,v){
var h=require('@stdlib/stats-strided-svariancech/dist').ndarray,p=require('@stdlib/math-base-special-sqrtf/dist');function x(e,r,a,s,y){return p(h(e,r,a,s,y))}v.exports=x
});var q=i(function(z,n){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=t();function l(e,r,a,s){return m(e,r,a,s,j(e,s))}n.exports=l
});var o=i(function(A,d){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),_=t();R(c,"ndarray",_);d.exports=c
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),u,f=O(E(__dirname,"./native.js"));b(f)?u=g:u=f;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
