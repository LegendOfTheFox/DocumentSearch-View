/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[1],{384:function(Da,xa,z){(function(na){function ia(){try{var oa=new Uint8Array(1);oa.__proto__={__proto__:Uint8Array.prototype,Yfa:function(){return 42}};return"function"===typeof oa.subarray&&0===oa.subarray(1,1).byteLength}catch(sa){return!1}}function ka(oa,sa){if((ea.Ce?2147483647:1073741823)<sa)throw new RangeError("Invalid typed array length");ea.Ce?(oa=new Uint8Array(sa),oa.__proto__=ea.prototype):(null===oa&&(oa=new ea(sa)),
oa.length=sa);return oa}function ea(oa,sa,ta){if(!(ea.Ce||this instanceof ea))return new ea(oa,sa,ta);if("number"===typeof oa){if("string"===typeof sa)throw Error("If encoding is specified then the first argument must be a string");return r(this,oa)}return ca(this,oa,sa,ta)}function ca(oa,sa,ta,qa){if("number"===typeof sa)throw new TypeError('"value" argument must not be a number');if("undefined"!==typeof ArrayBuffer&&sa instanceof ArrayBuffer){sa.byteLength;if(0>ta||sa.byteLength<ta)throw new RangeError("'offset' is out of bounds");
if(sa.byteLength<ta+(qa||0))throw new RangeError("'length' is out of bounds");sa=void 0===ta&&void 0===qa?new Uint8Array(sa):void 0===qa?new Uint8Array(sa,ta):new Uint8Array(sa,ta,qa);ea.Ce?(oa=sa,oa.__proto__=ea.prototype):oa=n(oa,sa);sa=oa}else if("string"===typeof sa){qa=oa;oa=ta;if("string"!==typeof oa||""===oa)oa="utf8";if(!ea.hQ(oa))throw new TypeError('"encoding" must be a valid string encoding');ta=f(sa,oa)|0;qa=ka(qa,ta);sa=qa.write(sa,oa);sa!==ta&&(qa=qa.slice(0,sa));sa=qa}else sa=a(oa,
sa);return sa}function x(oa){if("number"!==typeof oa)throw new TypeError('"size" argument must be a number');if(0>oa)throw new RangeError('"size" argument must not be negative');}function r(oa,sa){x(sa);oa=ka(oa,0>sa?0:e(sa)|0);if(!ea.Ce)for(var ta=0;ta<sa;++ta)oa[ta]=0;return oa}function n(oa,sa){var ta=0>sa.length?0:e(sa.length)|0;oa=ka(oa,ta);for(var qa=0;qa<ta;qa+=1)oa[qa]=sa[qa]&255;return oa}function a(oa,sa){if(ea.isBuffer(sa)){var ta=e(sa.length)|0;oa=ka(oa,ta);if(0===oa.length)return oa;
sa.copy(oa,0,0,ta);return oa}if(sa){if("undefined"!==typeof ArrayBuffer&&sa.buffer instanceof ArrayBuffer||"length"in sa)return(ta="number"!==typeof sa.length)||(ta=sa.length,ta=ta!==ta),ta?ka(oa,0):n(oa,sa);if("Buffer"===sa.type&&ua(sa.data))return n(oa,sa.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");}function e(oa){if(oa>=(ea.Ce?2147483647:1073741823))throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
(ea.Ce?2147483647:1073741823).toString(16)+" bytes");return oa|0}function f(oa,sa){if(ea.isBuffer(oa))return oa.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(oa)||oa instanceof ArrayBuffer))return oa.byteLength;"string"!==typeof oa&&(oa=""+oa);var ta=oa.length;if(0===ta)return 0;for(var qa=!1;;)switch(sa){case "ascii":case "latin1":case "binary":return ta;case "utf8":case "utf-8":case void 0:return ja(oa).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return 2*
ta;case "hex":return ta>>>1;case "base64":return ha(oa).length;default:if(qa)return ja(oa).length;sa=(""+sa).toLowerCase();qa=!0}}function h(oa,sa,ta){var qa=!1;if(void 0===sa||0>sa)sa=0;if(sa>this.length)return"";if(void 0===ta||ta>this.length)ta=this.length;if(0>=ta)return"";ta>>>=0;sa>>>=0;if(ta<=sa)return"";for(oa||(oa="utf8");;)switch(oa){case "hex":oa=sa;sa=ta;ta=this.length;if(!oa||0>oa)oa=0;if(!sa||0>sa||sa>ta)sa=ta;qa="";for(ta=oa;ta<sa;++ta)oa=qa,qa=this[ta],qa=16>qa?"0"+qa.toString(16):
qa.toString(16),qa=oa+qa;return qa;case "utf8":case "utf-8":return w(this,sa,ta);case "ascii":oa="";for(ta=Math.min(this.length,ta);sa<ta;++sa)oa+=String.fromCharCode(this[sa]&127);return oa;case "latin1":case "binary":oa="";for(ta=Math.min(this.length,ta);sa<ta;++sa)oa+=String.fromCharCode(this[sa]);return oa;case "base64":return 0===sa&&ta===this.length?la.wO(this):la.wO(this.slice(sa,ta));case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":sa=this.slice(sa,ta);ta="";for(oa=0;oa<sa.length;oa+=
2)ta+=String.fromCharCode(sa[oa]+256*sa[oa+1]);return ta;default:if(qa)throw new TypeError("Unknown encoding: "+oa);oa=(oa+"").toLowerCase();qa=!0}}function y(oa,sa,ta,qa,wa){if(0===oa.length)return-1;"string"===typeof ta?(qa=ta,ta=0):2147483647<ta?ta=2147483647:-2147483648>ta&&(ta=-2147483648);ta=+ta;isNaN(ta)&&(ta=wa?0:oa.length-1);0>ta&&(ta=oa.length+ta);if(ta>=oa.length){if(wa)return-1;ta=oa.length-1}else if(0>ta)if(wa)ta=0;else return-1;"string"===typeof sa&&(sa=ea.from(sa,qa));if(ea.isBuffer(sa))return 0===
sa.length?-1:b(oa,sa,ta,qa,wa);if("number"===typeof sa)return sa&=255,ea.Ce&&"function"===typeof Uint8Array.prototype.indexOf?wa?Uint8Array.prototype.indexOf.call(oa,sa,ta):Uint8Array.prototype.lastIndexOf.call(oa,sa,ta):b(oa,[sa],ta,qa,wa);throw new TypeError("val must be string, number or Buffer");}function b(oa,sa,ta,qa,wa){function Aa(Qa,Ra){return 1===Ga?Qa[Ra]:Qa.Fv(Ra*Ga)}var Ga=1,Na=oa.length,Ha=sa.length;if(void 0!==qa&&(qa=String(qa).toLowerCase(),"ucs2"===qa||"ucs-2"===qa||"utf16le"===
qa||"utf-16le"===qa)){if(2>oa.length||2>sa.length)return-1;Ga=2;Na/=2;Ha/=2;ta/=2}if(wa)for(qa=-1;ta<Na;ta++)if(Aa(oa,ta)===Aa(sa,-1===qa?0:ta-qa)){if(-1===qa&&(qa=ta),ta-qa+1===Ha)return qa*Ga}else-1!==qa&&(ta-=ta-qa),qa=-1;else for(ta+Ha>Na&&(ta=Na-Ha);0<=ta;ta--){Na=!0;for(qa=0;qa<Ha;qa++)if(Aa(oa,ta+qa)!==Aa(sa,qa)){Na=!1;break}if(Na)return ta}return-1}function w(oa,sa,ta){ta=Math.min(oa.length,ta);for(var qa=[];sa<ta;){var wa=oa[sa],Aa=null,Ga=239<wa?4:223<wa?3:191<wa?2:1;if(sa+Ga<=ta)switch(Ga){case 1:128>
wa&&(Aa=wa);break;case 2:var Na=oa[sa+1];128===(Na&192)&&(wa=(wa&31)<<6|Na&63,127<wa&&(Aa=wa));break;case 3:Na=oa[sa+1];var Ha=oa[sa+2];128===(Na&192)&&128===(Ha&192)&&(wa=(wa&15)<<12|(Na&63)<<6|Ha&63,2047<wa&&(55296>wa||57343<wa)&&(Aa=wa));break;case 4:Na=oa[sa+1];Ha=oa[sa+2];var Qa=oa[sa+3];128===(Na&192)&&128===(Ha&192)&&128===(Qa&192)&&(wa=(wa&15)<<18|(Na&63)<<12|(Ha&63)<<6|Qa&63,65535<wa&&1114112>wa&&(Aa=wa))}null===Aa?(Aa=65533,Ga=1):65535<Aa&&(Aa-=65536,qa.push(Aa>>>10&1023|55296),Aa=56320|
Aa&1023);qa.push(Aa);sa+=Ga}oa=qa.length;if(oa<=ma)qa=String.fromCharCode.apply(String,qa);else{ta="";for(sa=0;sa<oa;)ta+=String.fromCharCode.apply(String,qa.slice(sa,sa+=ma));qa=ta}return qa}function aa(oa,sa,ta){if(0!==oa%1||0>oa)throw new RangeError("offset is not uint");if(oa+sa>ta)throw new RangeError("Trying to access beyond buffer length");}function fa(oa,sa,ta,qa,wa,Aa){if(!ea.isBuffer(oa))throw new TypeError('"buffer" argument must be a Buffer instance');if(sa>wa||sa<Aa)throw new RangeError('"value" argument is out of bounds');
if(ta+qa>oa.length)throw new RangeError("Index out of range");}function ja(oa,sa){sa=sa||Infinity;for(var ta,qa=oa.length,wa=null,Aa=[],Ga=0;Ga<qa;++Ga){ta=oa.charCodeAt(Ga);if(55295<ta&&57344>ta){if(!wa){if(56319<ta){-1<(sa-=3)&&Aa.push(239,191,189);continue}else if(Ga+1===qa){-1<(sa-=3)&&Aa.push(239,191,189);continue}wa=ta;continue}if(56320>ta){-1<(sa-=3)&&Aa.push(239,191,189);wa=ta;continue}ta=(wa-55296<<10|ta-56320)+65536}else wa&&-1<(sa-=3)&&Aa.push(239,191,189);wa=null;if(128>ta){if(0>--sa)break;
Aa.push(ta)}else if(2048>ta){if(0>(sa-=2))break;Aa.push(ta>>6|192,ta&63|128)}else if(65536>ta){if(0>(sa-=3))break;Aa.push(ta>>12|224,ta>>6&63|128,ta&63|128)}else if(1114112>ta){if(0>(sa-=4))break;Aa.push(ta>>18|240,ta>>12&63|128,ta>>6&63|128,ta&63|128)}else throw Error("Invalid code point");}return Aa}function ba(oa){for(var sa=[],ta=0;ta<oa.length;++ta)sa.push(oa.charCodeAt(ta)&255);return sa}function ha(oa){var sa=la,ta=sa.gda;oa=(oa.trim?oa.trim():oa.replace(/^\s+|\s+$/g,"")).replace(ra,"");if(2>
oa.length)oa="";else for(;0!==oa.length%4;)oa+="=";return ta.call(sa,oa)}function da(oa,sa,ta,qa){for(var wa=0;wa<qa&&!(wa+ta>=sa.length||wa>=oa.length);++wa)sa[wa+ta]=oa[wa];return wa}var la=z(393);z(394);var ua=z(395);xa.Buffer=ea;xa.sea=function(oa){+oa!=oa&&(oa=0);return ea.wM(+oa)};xa.cW=50;ea.Ce=void 0!==na.Ce?na.Ce:ia();xa.Gga=ea.Ce?2147483647:1073741823;ea.from=function(oa,sa,ta){return ca(null,oa,sa,ta)};ea.Ce&&(ea.prototype.__proto__=Uint8Array.prototype,ea.__proto__=Uint8Array,"undefined"!==
typeof Symbol&&Symbol.species&&ea[Symbol.species]===ea&&Object.defineProperty(ea,Symbol.species,{value:null,configurable:!0}));ea.wM=function(oa){x(oa);return ka(null,oa)};ea.allocUnsafe=function(oa){return r(null,oa)};ea.isBuffer=function(oa){return!(null==oa||!oa.rY)};ea.compare=function(oa,sa){if(!ea.isBuffer(oa)||!ea.isBuffer(sa))throw new TypeError("Arguments must be Buffers");if(oa===sa)return 0;for(var ta=oa.length,qa=sa.length,wa=0,Aa=Math.min(ta,qa);wa<Aa;++wa)if(oa[wa]!==sa[wa]){ta=oa[wa];
qa=sa[wa];break}return ta<qa?-1:qa<ta?1:0};ea.hQ=function(oa){switch(String(oa).toLowerCase()){case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return!0;default:return!1}};ea.concat=function(oa,sa){if(!ua(oa))throw new TypeError('"list" argument must be an Array of Buffers');if(0===oa.length)return ea.wM(0);var ta;if(void 0===sa)for(ta=sa=0;ta<oa.length;++ta)sa+=oa[ta].length;sa=ea.allocUnsafe(sa);var qa=
0;for(ta=0;ta<oa.length;++ta){var wa=oa[ta];if(!ea.isBuffer(wa))throw new TypeError('"list" argument must be an Array of Buffers');wa.copy(sa,qa);qa+=wa.length}return sa};ea.byteLength=f;ea.prototype.rY=!0;ea.prototype.toString=function(){var oa=this.length|0;return 0===oa?"":0===arguments.length?w(this,0,oa):h.apply(this,arguments)};ea.prototype.Fq=function(oa){if(!ea.isBuffer(oa))throw new TypeError("Argument must be a Buffer");return this===oa?!0:0===ea.compare(this,oa)};ea.prototype.inspect=function(){var oa=
"",sa=xa.cW;0<this.length&&(oa=this.toString("hex",0,sa).match(/.{2}/g).join(" "),this.length>sa&&(oa+=" ... "));return"<Buffer "+oa+">"};ea.prototype.compare=function(oa,sa,ta,qa,wa){if(!ea.isBuffer(oa))throw new TypeError("Argument must be a Buffer");void 0===sa&&(sa=0);void 0===ta&&(ta=oa?oa.length:0);void 0===qa&&(qa=0);void 0===wa&&(wa=this.length);if(0>sa||ta>oa.length||0>qa||wa>this.length)throw new RangeError("out of range index");if(qa>=wa&&sa>=ta)return 0;if(qa>=wa)return-1;if(sa>=ta)return 1;
sa>>>=0;ta>>>=0;qa>>>=0;wa>>>=0;if(this===oa)return 0;var Aa=wa-qa,Ga=ta-sa,Na=Math.min(Aa,Ga);qa=this.slice(qa,wa);oa=oa.slice(sa,ta);for(sa=0;sa<Na;++sa)if(qa[sa]!==oa[sa]){Aa=qa[sa];Ga=oa[sa];break}return Aa<Ga?-1:Ga<Aa?1:0};ea.prototype.includes=function(oa,sa,ta){return-1!==this.indexOf(oa,sa,ta)};ea.prototype.indexOf=function(oa,sa,ta){return y(this,oa,sa,ta,!0)};ea.prototype.lastIndexOf=function(oa,sa,ta){return y(this,oa,sa,ta,!1)};ea.prototype.write=function(oa,sa,ta,qa){if(void 0===sa)qa=
"utf8",ta=this.length,sa=0;else if(void 0===ta&&"string"===typeof sa)qa=sa,ta=this.length,sa=0;else if(isFinite(sa))sa|=0,isFinite(ta)?(ta|=0,void 0===qa&&(qa="utf8")):(qa=ta,ta=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var wa=this.length-sa;if(void 0===ta||ta>wa)ta=wa;if(0<oa.length&&(0>ta||0>sa)||sa>this.length)throw new RangeError("Attempt to write outside buffer bounds");qa||(qa="utf8");for(wa=!1;;)switch(qa){case "hex":sa=Number(sa)||
0;qa=this.length-sa;ta?(ta=Number(ta),ta>qa&&(ta=qa)):ta=qa;qa=oa.length;if(0!==qa%2)throw new TypeError("Invalid hex string");ta>qa/2&&(ta=qa/2);for(qa=0;qa<ta;++qa){wa=parseInt(oa.substr(2*qa,2),16);if(isNaN(wa))break;this[sa+qa]=wa}return qa;case "utf8":case "utf-8":return da(ja(oa,this.length-sa),this,sa,ta);case "ascii":return da(ba(oa),this,sa,ta);case "latin1":case "binary":return da(ba(oa),this,sa,ta);case "base64":return da(ha(oa),this,sa,ta);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":qa=
oa;wa=this.length-sa;for(var Aa=[],Ga=0;Ga<qa.length&&!(0>(wa-=2));++Ga){var Na=qa.charCodeAt(Ga);oa=Na>>8;Na%=256;Aa.push(Na);Aa.push(oa)}return da(Aa,this,sa,ta);default:if(wa)throw new TypeError("Unknown encoding: "+qa);qa=(""+qa).toLowerCase();wa=!0}};ea.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this.Sea||this,0)}};var ma=4096;ea.prototype.slice=function(oa,sa){var ta=this.length;oa=~~oa;sa=void 0===sa?ta:~~sa;0>oa?(oa+=ta,0>oa&&(oa=0)):oa>ta&&(oa=ta);0>
sa?(sa+=ta,0>sa&&(sa=0)):sa>ta&&(sa=ta);sa<oa&&(sa=oa);if(ea.Ce)sa=this.subarray(oa,sa),sa.__proto__=ea.prototype;else{ta=sa-oa;sa=new ea(ta,void 0);for(var qa=0;qa<ta;++qa)sa[qa]=this[qa+oa]}return sa};ea.prototype.SH=function(oa){aa(oa,1,this.length);return this[oa]};ea.prototype.Fv=function(oa){aa(oa,2,this.length);return this[oa]<<8|this[oa+1]};ea.prototype.aea=function(oa,sa){oa=+oa;sa|=0;fa(this,oa,sa,1,255,0);ea.Ce||(oa=Math.floor(oa));this[sa]=oa&255;return sa+1};ea.prototype.$da=function(oa,
sa){oa=+oa;sa|=0;fa(this,oa,sa,4,4294967295,0);if(ea.Ce)this[sa]=oa>>>24,this[sa+1]=oa>>>16,this[sa+2]=oa>>>8,this[sa+3]=oa&255;else{var ta=sa;0>oa&&(oa=4294967295+oa+1);for(var qa=0,wa=Math.min(this.length-ta,4);qa<wa;++qa)this[ta+qa]=oa>>>8*(3-qa)&255}return sa+4};ea.prototype.copy=function(oa,sa,ta,qa){ta||(ta=0);qa||0===qa||(qa=this.length);sa>=oa.length&&(sa=oa.length);sa||(sa=0);0<qa&&qa<ta&&(qa=ta);if(qa===ta||0===oa.length||0===this.length)return 0;if(0>sa)throw new RangeError("targetStart out of bounds");
if(0>ta||ta>=this.length)throw new RangeError("sourceStart out of bounds");if(0>qa)throw new RangeError("sourceEnd out of bounds");qa>this.length&&(qa=this.length);oa.length-sa<qa-ta&&(qa=oa.length-sa+ta);var wa=qa-ta;if(this===oa&&ta<sa&&sa<qa)for(qa=wa-1;0<=qa;--qa)oa[qa+sa]=this[qa+ta];else if(1E3>wa||!ea.Ce)for(qa=0;qa<wa;++qa)oa[qa+sa]=this[qa+ta];else Uint8Array.prototype.set.call(oa,this.subarray(ta,ta+wa),sa);return wa};ea.prototype.fill=function(oa,sa,ta,qa){if("string"===typeof oa){"string"===
typeof sa?(qa=sa,sa=0,ta=this.length):"string"===typeof ta&&(qa=ta,ta=this.length);if(1===oa.length){var wa=oa.charCodeAt(0);256>wa&&(oa=wa)}if(void 0!==qa&&"string"!==typeof qa)throw new TypeError("encoding must be a string");if("string"===typeof qa&&!ea.hQ(qa))throw new TypeError("Unknown encoding: "+qa);}else"number"===typeof oa&&(oa&=255);if(0>sa||this.length<sa||this.length<ta)throw new RangeError("Out of range index");if(ta<=sa)return this;sa>>>=0;ta=void 0===ta?this.length:ta>>>0;oa||(oa=0);
if("number"===typeof oa)for(qa=sa;qa<ta;++qa)this[qa]=oa;else for(oa=ea.isBuffer(oa)?oa:ja((new ea(oa,qa)).toString()),wa=oa.length,qa=0;qa<ta-sa;++qa)this[qa+sa]=oa[qa%wa];return this};var ra=/[^+\/0-9A-Za-z-_]/g}).call(this,z(152))},393:function(Da,xa){function z(ea){var ca=ea.length;if(0<ca%4)throw Error("Invalid string. Length must be a multiple of 4");ea=ea.indexOf("=");-1===ea&&(ea=ca);return[ea,ea===ca?0:4-ea%4]}xa.byteLength=function(ea){ea=z(ea);var ca=ea[1];return 3*(ea[0]+ca)/4-ca};xa.gda=
function(ea){var ca=z(ea);var x=ca[0];ca=ca[1];var r=new ka(3*(x+ca)/4-ca),n=0,a=0<ca?x-4:x,e;for(e=0;e<a;e+=4)x=ia[ea.charCodeAt(e)]<<18|ia[ea.charCodeAt(e+1)]<<12|ia[ea.charCodeAt(e+2)]<<6|ia[ea.charCodeAt(e+3)],r[n++]=x>>16&255,r[n++]=x>>8&255,r[n++]=x&255;2===ca&&(x=ia[ea.charCodeAt(e)]<<2|ia[ea.charCodeAt(e+1)]>>4,r[n++]=x&255);1===ca&&(x=ia[ea.charCodeAt(e)]<<10|ia[ea.charCodeAt(e+1)]<<4|ia[ea.charCodeAt(e+2)]>>2,r[n++]=x>>8&255,r[n++]=x&255);return r};xa.wO=function(ea){for(var ca=ea.length,
x=ca%3,r=[],n=0,a=ca-x;n<a;n+=16383){for(var e=r,f=e.push,h,y=ea,b=n+16383>a?a:n+16383,w=[],aa=n;aa<b;aa+=3)h=(y[aa]<<16&16711680)+(y[aa+1]<<8&65280)+(y[aa+2]&255),w.push(na[h>>18&63]+na[h>>12&63]+na[h>>6&63]+na[h&63]);h=w.join("");f.call(e,h)}1===x?(ea=ea[ca-1],r.push(na[ea>>2]+na[ea<<4&63]+"==")):2===x&&(ea=(ea[ca-2]<<8)+ea[ca-1],r.push(na[ea>>10]+na[ea>>4&63]+na[ea<<2&63]+"="));return r.join("")};var na=[],ia=[],ka="undefined"!==typeof Uint8Array?Uint8Array:Array;for(Da=0;64>Da;++Da)na[Da]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[Da],
ia["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(Da)]=Da;ia[45]=62;ia[95]=63},394:function(Da,xa){xa.read=function(z,na,ia,ka,ea){var ca=8*ea-ka-1;var x=(1<<ca)-1,r=x>>1,n=-7;ea=ia?ea-1:0;var a=ia?-1:1,e=z[na+ea];ea+=a;ia=e&(1<<-n)-1;e>>=-n;for(n+=ca;0<n;ia=256*ia+z[na+ea],ea+=a,n-=8);ca=ia&(1<<-n)-1;ia>>=-n;for(n+=ka;0<n;ca=256*ca+z[na+ea],ea+=a,n-=8);if(0===ia)ia=1-r;else{if(ia===x)return ca?NaN:Infinity*(e?-1:1);ca+=Math.pow(2,ka);ia-=r}return(e?-1:1)*ca*Math.pow(2,
ia-ka)};xa.write=function(z,na,ia,ka,ea,ca){var x,r=8*ca-ea-1,n=(1<<r)-1,a=n>>1,e=23===ea?Math.pow(2,-24)-Math.pow(2,-77):0;ca=ka?0:ca-1;var f=ka?1:-1,h=0>na||0===na&&0>1/na?1:0;na=Math.abs(na);isNaN(na)||Infinity===na?(na=isNaN(na)?1:0,ka=n):(ka=Math.floor(Math.log(na)/Math.LN2),1>na*(x=Math.pow(2,-ka))&&(ka--,x*=2),na=1<=ka+a?na+e/x:na+e*Math.pow(2,1-a),2<=na*x&&(ka++,x/=2),ka+a>=n?(na=0,ka=n):1<=ka+a?(na=(na*x-1)*Math.pow(2,ea),ka+=a):(na=na*Math.pow(2,a-1)*Math.pow(2,ea),ka=0));for(;8<=ea;z[ia+
ca]=na&255,ca+=f,na/=256,ea-=8);ka=ka<<ea|na;for(r+=ea;0<r;z[ia+ca]=ka&255,ca+=f,ka/=256,r-=8);z[ia+ca-f]|=128*h}},395:function(Da){var xa={}.toString;Da.exports=Array.isArray||function(z){return"[object Array]"==xa.call(z)}}}]);}).call(this || window)