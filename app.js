(()=>{var Cu=1,Ld=2,En=3,Yn=0,Tt=1,sc=2;var sn=2;var di=100;var Qo=204,el=205;var Lu=0,Pd=1,Id=2,jn=0,Nd=1,Ud=2,Dd=3,ac=4,Od=5,zd=6;var Pu=300,sr=301,ar=302,tl=303,nl=304,Wa=306,or=1e3,wn=1001,il=1002,Lt=1003,$c=1004;var fo=1005;var nn=1006,Fd=1007;var ha=1008;var fi=1009;var oc=1012,Iu=1013,Vn=1014,Wn=1015,Kr=1016,Nu=1017,Uu=1018,gi=1020;var hn=1023;var vi=1026,lr=1027;var Du=1029;var Ou=1031,zu=1033,go=33776,vo=33777,_o=33778,yo=33779,Jc=35840,Zc=35841,Kc=35842,Qc=35843,Fu=36196,eh=37492,th=37496,nh=37808,ih=37809,rh=37810,sh=37811,ah=37812,oh=37813,lh=37814,ch=37815,hh=37816,uh=37817,dh=37818,ph=37819,mh=37820,fh=37821,xo=36492,gh=36494,vh=36495;var _h=36284,yh=36285,xh=36286;var ua=2300,da=2301,Mo=2302,Mh=2400,Sh=2401,bh=2402;var Bu=3e3,_i=3001;var un="",it="srgb",Cn="srgb-linear",lc="display-p3",Xa="display-p3-linear",pa="linear",Ye="srgb",ma="rec709",fa="p3";var Oi=7680;var rl=35044,Hu=35048;var Eh="300 es",sl=1035,cr=2e3,ga=2001,$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ca=Math.PI/180,al=180/Math.PI;function Rn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(bt[255&r]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[255&e]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[63&t|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[255&n]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function Bd(r,e){return(r%e+e)%e}function So(r,e,t){return(1-t)*r+t*e}function Th(r){return(r&r-1)==0&&r!==0}function ol(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function An(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var se=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],v=i[0],f=i[3],y=i[6],g=i[1],_=i[4],M=i[7],R=i[2],b=i[5],w=i[8];return s[0]=a*v+o*g+l*R,s[3]=a*f+o*_+l*b,s[6]=a*y+o*M+l*w,s[1]=c*v+h*g+u*R,s[4]=c*f+h*_+u*b,s[7]=c*y+h*M+u*w,s[2]=d*v+p*g+m*R,s[5]=d*f+p*_+m*b,s[8]=d*y+p*M+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bo.makeScale(e,t)),this}rotate(e){return this.premultiply(bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bo=new Le;function ku(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hd(){let r=Qr("canvas");return r.style.display="block",r}var wh={};function qr(r){r in wh||(wh[r]=!0,console.warn(r))}var Ah=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rh=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[Cn]:{transfer:pa,primaries:ma,toReference:r=>r,fromReference:r=>r},[it]:{transfer:Ye,primaries:ma,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Xa]:{transfer:pa,primaries:fa,toReference:r=>r.applyMatrix3(Rh),fromReference:r=>r.applyMatrix3(Ah)},[lc]:{transfer:Ye,primaries:fa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Rh),fromReference:r=>r.applyMatrix3(Ah).convertLinearToSRGB()}},kd=new Set([Cn,Xa]),Xe={enabled:!0,_workingColorSpace:Cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!kd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=Rs[e].toReference;return(0,Rs[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Rs[r].primaries},getTransfer:function(r){return r===un?pa:Rs[r].transfer}};function ir(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Eo(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var zi,va=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=Qr("canvas")),zi.width=e.width,zi.height=e.height;let n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*ir(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*ir(t[n]/255)):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gd=0,_a=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(To(i[a].image)):s.push(To(i[a]))}else s=To(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function To(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?va.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vd=0,Bt=class r extends $n{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Rn(),this.name="",this.source=new _a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===_i?it:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?_i:Bu}set encoding(e){qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_i?it:un}};Bt.DEFAULT_IMAGE=null,Bt.DEFAULT_MAPPING=Pu,Bt.DEFAULT_ANISOTROPY=1;var at=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],v=l[2],f=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+f)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,M=(p+1)/2,R=(y+1)/2,b=(h+d)/4,w=(u+v)/4,I=(m+f)/4;return _>M&&_>R?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=b/n,s=w/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=I/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=w/s,i=I/s),this.set(n,i,s,t),this}let g=Math.sqrt((f-m)*(f-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(f-m)/g,this.y=(u-v)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ll=class extends $n{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===_i?it:un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new _a(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends ll{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ya=class extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cl=class extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==m){let f=1-o,y=l*d+c*p+h*m+u*v,g=y>=0?1:-1,_=1-y*y;if(_>Number.EPSILON){let R=Math.sqrt(_),b=Math.atan2(R,y*g);f=Math.sin(f*b)/R,o=Math.sin(o*b)/R}let M=o*g;if(l=l*f+d*M,c=c*f+p*M,h=h*f+m*M,u=u*f+v*M,f===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wo=new S,Ch=new Nt,dn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Ls.subVectors(this.max,Br),Fi.subVectors(e.a,Br),Bi.subVectors(e.b,Br),Hi.subVectors(e.c,Br),Fn.subVectors(Bi,Fi),Bn.subVectors(Hi,Bi),oi.subVectors(Fi,Hi);let t=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-oi.z,oi.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,oi.z,0,-oi.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-oi.y,oi.x,0];return!!Ao(t,Fi,Bi,Hi,Ls)&&(t=[1,0,0,0,1,0,0,0,1],!!Ao(t,Fi,Bi,Hi,Ls)&&(Ps.crossVectors(Fn,Bn),t=[Ps.x,Ps.y,Ps.z],Ao(t,Fi,Bi,Hi,Ls)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Qt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yn=[new S,new S,new S,new S,new S,new S,new S,new S],Qt=new S,Cs=new dn,Fi=new S,Bi=new S,Hi=new S,Fn=new S,Bn=new S,oi=new S,Br=new S,Ls=new S,Ps=new S,li=new S;function Ao(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){li.fromArray(r,s);let o=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),h=n.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wd=new dn,Hr=new S,Ro=new S,pn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);let t=Hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Ro)),this.expandByPoint(Hr.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new S,Co=new S,Is=new S,Hn=new S,Lo=new S,Ns=new S,Po=new S,yi=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Co.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Co);let s=.5*e.distanceTo(t),a=-this.direction.dot(Is),o=Hn.dot(this.direction),l=-Hn.dot(Is),c=Hn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Co).addScaledVector(Is,d),p}intersectSphere(e,t){xn.subVectors(e.center,this.origin);let n=xn.dot(this.direction),i=xn.dot(xn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,i,s){Lo.subVectors(t,e),Ns.subVectors(n,e),Po.crossVectors(Lo,Ns);let a,o=this.direction.dot(Po);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Hn.subVectors(this.origin,e);let l=a*this.direction.dot(Ns.crossVectors(Hn,Ns));if(l<0)return null;let c=a*this.direction.dot(Lo.cross(Hn));if(c<0||l+c>o)return null;let h=-a*Hn.dot(Po);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,m,v,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,m,v,f)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,m,v,f){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=p,y[7]=m,y[11]=v,y[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xd,e,jd)}lookAt(e,t,n){let i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),kn.crossVectors(n,zt),kn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),kn.crossVectors(n,zt)),kn.normalize(),Us.crossVectors(zt,kn),i[0]=kn.x,i[4]=Us.x,i[8]=zt.x,i[1]=kn.y,i[5]=Us.y,i[9]=zt.y,i[2]=kn.z,i[6]=Us.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],v=n[6],f=n[10],y=n[14],g=n[3],_=n[7],M=n[11],R=n[15],b=i[0],w=i[4],I=i[8],P=i[12],D=i[1],j=i[5],C=i[9],G=i[13],V=i[2],ae=i[6],pe=i[10],te=i[14],q=i[3],ee=i[7],F=i[11],J=i[15];return s[0]=a*b+o*D+l*V+c*q,s[4]=a*w+o*j+l*ae+c*ee,s[8]=a*I+o*C+l*pe+c*F,s[12]=a*P+o*G+l*te+c*J,s[1]=h*b+u*D+d*V+p*q,s[5]=h*w+u*j+d*ae+p*ee,s[9]=h*I+u*C+d*pe+p*F,s[13]=h*P+u*G+d*te+p*J,s[2]=m*b+v*D+f*V+y*q,s[6]=m*w+v*j+f*ae+y*ee,s[10]=m*I+v*C+f*pe+y*F,s[14]=m*P+v*G+f*te+y*J,s[3]=g*b+_*D+M*V+R*q,s[7]=g*w+_*j+M*ae+R*ee,s[11]=g*I+_*C+M*pe+R*F,s[15]=g*P+_*G+M*te+R*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],v=e[13],f=e[14],y=e[15],g=u*f*c-v*d*c+v*l*p-o*f*p-u*l*y+o*d*y,_=m*d*c-h*f*c-m*l*p+a*f*p+h*l*y-a*d*y,M=h*v*c-m*u*c+m*o*p-a*v*p-h*o*y+a*u*y,R=m*u*l-h*v*l-m*o*d+a*v*d+h*o*f-a*u*f,b=t*g+n*_+i*M+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=g*w,e[1]=(v*d*s-u*f*s-v*i*p+n*f*p+u*i*y-n*d*y)*w,e[2]=(o*f*s-v*l*s+v*i*c-n*f*c-o*i*y+n*l*y)*w,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*w,e[4]=_*w,e[5]=(h*f*s-m*d*s+m*i*p-t*f*p-h*i*y+t*d*y)*w,e[6]=(m*l*s-a*f*s-m*i*c+t*f*c+a*i*y-t*l*y)*w,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*w,e[8]=M*w,e[9]=(m*u*s-h*v*s-m*n*p+t*v*p+h*n*y-t*u*y)*w,e[10]=(a*v*s-m*o*s+m*n*c-t*v*c-a*n*y+t*o*y)*w,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*w,e[12]=R*w,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*f+t*u*f)*w,e[14]=(m*o*i-a*v*i-m*n*l+t*v*l+a*n*f-t*o*f)*w,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,v=a*h,f=a*u,y=o*u,g=l*c,_=l*h,M=l*u,R=n.x,b=n.y,w=n.z;return i[0]=(1-(v+y))*R,i[1]=(p+M)*R,i[2]=(m-_)*R,i[3]=0,i[4]=(p-M)*b,i[5]=(1-(d+y))*b,i[6]=(f+g)*b,i[7]=0,i[8]=(m+_)*w,i[9]=(f-g)*w,i[10]=(1-(d+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=ki.set(i[0],i[1],i[2]).length(),a=ki.set(i[4],i[5],i[6]).length(),o=ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);let l=1/s,c=1/a,h=1/o;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=c,en.elements[5]*=c,en.elements[6]*=c,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,m;if(o===cr)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==ga)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,m,v;if(o===cr)m=(a+s)*u,v=-2*u;else{if(o!==ga)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ki=new S,en=new Ae,Xd=new S(0,0,0),jd=new S(1,1,1),kn=new S,Us=new S,zt=new S,Lh=new Ae,Ph=new Nt,hr=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hr.DEFAULT_ORDER="XYZ";var es=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},qd=0,Ih=new S,Gi=new Nt,Mn=new Ae,Ds=new S,kr=new S,Yd=new S,$d=new Nt,Nh=new S(1,0,0),Uh=new S(0,1,0),Dh=new S(0,0,1),Jd={type:"added"},Zd={type:"removed"},xt=class r extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new S,t=new hr,n=new Nt,i=new S(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Le}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ds.copy(e):Ds.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(kr,Ds,this.up):Mn.lookAt(Ds,kr,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,$d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};xt.DEFAULT_UP=new S(0,1,0),xt.DEFAULT_MATRIX_AUTO_UPDATE=!0,xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new S,Sn=new S,Io=new S,bn=new S,Vi=new S,Wi=new S,Oh=new S,No=new S,Uo=new S,Do=new S,Os=!1,Xn=class r{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){tn.subVectors(i,t),Sn.subVectors(n,t),Io.subVectors(e,t);let a=tn.dot(tn),o=tn.dot(Sn),l=tn.dot(Io),c=Sn.dot(Sn),h=Sn.dot(Io),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn)!==null&&bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,i,s,a,o,l){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),Sn.subVectors(e,t),tn.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),.5*tn.cross(Sn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Vi.subVectors(i,n),Wi.subVectors(s,n),No.subVectors(e,n);let l=Vi.dot(No),c=Wi.dot(No);if(l<=0&&c<=0)return t.copy(n);Uo.subVectors(e,i);let h=Vi.dot(Uo),u=Wi.dot(Uo);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Vi,a);Do.subVectors(e,s);let p=Vi.dot(Do),m=Wi.dot(Do);if(m>=0&&p<=m)return t.copy(s);let v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Wi,o);let f=h*m-p*u;if(f<=0&&u-h>=0&&p-m>=0)return Oh.subVectors(s,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(Oh,o);let y=1/(f+v+d);return a=v*y,o=d*y,t.copy(n).addScaledVector(Vi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Oo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Bd(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Oo(a,s,e+1/3),this.g=Oo(a,s,e),this.b=Oo(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=it){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){let n=Gu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return Xe.fromWorkingColorSpace(Et.copy(this),e),65536*Math.round(mt(255*Et.r,0,255))+256*Math.round(mt(255*Et.g,0,255))+Math.round(mt(255*Et.b,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Et.copy(this),t);let n=Et.r,i=Et.g,s=Et.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=it){Xe.fromWorkingColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,i=Et.b;return e!==it?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(zs);let n=So(Gn.h,zs.h,t),i=So(Gn.s,zs.s,t),s=So(Gn.l,zs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new ye;ye.NAMES=Gu;var Kd=0,mn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=1,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=el,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xi=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qf=Qd();function Qd(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var st=new S,Fs=new se,et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rl&&(e.usage=this.usage),e}};var xa=class extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ma=class extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Me=class extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}};var ep=0,jt=new Ae,zo=new xt,Xi=new S,Ft=new dn,Gr=new dn,pt=new S,Ge=class r extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ku(e)?Ma:xa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Me(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new S,1/0);if(e){let n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Ft.min,Gr.min),Ft.expandByPoint(pt),pt.addVectors(Ft.max,Gr.max),Ft.expandByPoint(pt)):(Ft.expandByPoint(Gr.min),Ft.expandByPoint(Gr.max))}Ft.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(e,c),pt.add(Xi)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new et(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let D=0;D<o;D++)c[D]=new S,h[D]=new S;let u=new S,d=new S,p=new S,m=new se,v=new se,f=new se,y=new S,g=new S;function _(D,j,C){u.fromArray(i,3*D),d.fromArray(i,3*j),p.fromArray(i,3*C),m.fromArray(a,2*D),v.fromArray(a,2*j),f.fromArray(a,2*C),d.sub(u),p.sub(u),v.sub(m),f.sub(m);let G=1/(v.x*f.y-f.x*v.y);isFinite(G)&&(y.copy(d).multiplyScalar(f.y).addScaledVector(p,-v.y).multiplyScalar(G),g.copy(p).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(G),c[D].add(y),c[j].add(y),c[C].add(y),h[D].add(g),h[j].add(g),h[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,j=M.length;D<j;++D){let C=M[D],G=C.start;for(let V=G,ae=G+C.count;V<ae;V+=3)_(n[V+0],n[V+1],n[V+2])}let R=new S,b=new S,w=new S,I=new S;function P(D){w.fromArray(s,3*D),I.copy(w);let j=c[D];R.copy(j),R.sub(w.multiplyScalar(w.dot(j))).normalize(),b.crossVectors(I,j);let C=b.dot(h[D])<0?-1:1;l[4*D]=R.x,l[4*D+1]=R.y,l[4*D+2]=R.z,l[4*D+3]=C}for(let D=0,j=M.length;D<j;++D){let C=M[D],G=C.start;for(let V=G,ae=G+C.count;V<ae;V+=3)P(n[V+0]),P(n[V+1]),P(n[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new et(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new S,s=new S,a=new S,o=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let v=0,f=l.length;v<f;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let y=0;y<h;y++)d[m++]=c[p++]}return new et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zh=new Ae,ci=new yi,Bs=new pn,Fh=new S,ji=new S,qi=new S,Yi=new S,Fo=new S,Hs=new S,ks=new se,Gs=new se,Vs=new se,Bh=new S,Hh=new S,kh=new S,Ws=new S,Xs=new S,qe=class extends xt{constructor(e=new Ge,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Fo.fromBufferAttribute(u,e),a?Hs.addScaledVector(Fo,h):Hs.addScaledVector(Fo.sub(t),h))}t.add(Hs)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),ci.copy(e.ray).recast(e.near),Bs.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Bs,Fh)===null||ci.origin.distanceToSquared(Fh)>(e.far-e.near)**2))return;zh.copy(s).invert(),ci.copy(e.ray).applyMatrix4(zh),n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,ci)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let f=d[m],y=a[f.materialIndex];for(let g=Math.max(f.start,p.start),_=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));g<_;g+=3)i=js(this,y,e,n,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);m<v;m+=3)i=js(this,a,e,n,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let f=d[m],y=a[f.materialIndex];for(let g=Math.max(f.start,p.start),_=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));g<_;g+=3)i=js(this,y,e,n,c,h,u,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);m<v;m+=3)i=js(this,a,e,n,c,h,u,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}};function js(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ji),r.getVertexPosition(l,qi),r.getVertexPosition(c,Yi);let h=(function(u,d,p,m,v,f,y,g){let _;if(_=d.side===Tt?m.intersectTriangle(y,f,v,!0,g):m.intersectTriangle(v,f,y,d.side===Yn,g),_===null)return null;Xs.copy(g),Xs.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(Xs);return M<p.near||M>p.far?null:{distance:M,point:Xs.clone(),object:u}})(r,e,t,n,ji,qi,Yi,Ws);if(h){i&&(ks.fromBufferAttribute(i,o),Gs.fromBufferAttribute(i,l),Vs.fromBufferAttribute(i,c),h.uv=Xn.getInterpolation(Ws,ji,qi,Yi,ks,Gs,Vs,new se)),s&&(ks.fromBufferAttribute(s,o),Gs.fromBufferAttribute(s,l),Vs.fromBufferAttribute(s,c),h.uv1=Xn.getInterpolation(Ws,ji,qi,Yi,ks,Gs,Vs,new se),h.uv2=h.uv1),a&&(Bh.fromBufferAttribute(a,o),Hh.fromBufferAttribute(a,l),kh.fromBufferAttribute(a,c),h.normal=Xn.getInterpolation(Ws,ji,qi,Yi,Bh,Hh,kh,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new S,materialIndex:0};Xn.getNormal(ji,qi,Yi,u.normal),h.face=u}return h}var Pn=class r extends Ge{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(v,f,y,g,_,M,R,b,w,I,P){let D=M/w,j=R/I,C=M/2,G=R/2,V=b/2,ae=w+1,pe=I+1,te=0,q=0,ee=new S;for(let F=0;F<pe;F++){let J=F*j-G;for(let ce=0;ce<ae;ce++){let T=ce*D-C;ee[v]=T*g,ee[f]=J*_,ee[y]=V,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[f]=0,ee[y]=b>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(ce/w),u.push(1-F/I),te+=1}}for(let F=0;F<I;F++)for(let J=0;J<w;J++){let ce=d+J+ae*F,T=d+J+ae*(F+1),E=d+(J+1)+ae*(F+1),O=d+(J+1)+ae*F;l.push(ce,T,O),l.push(T,E,O),q+=6}o.addGroup(p,q,P),p+=q,d+=te}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ur(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ct(r){let e={};for(let t=0;t<r.length;t++){let n=ur(r[t]);for(let i in n)e[i]=n[i]}return e}function Vu(r){return r.getRenderTarget()===null?r.outputColorSpace:Xe.workingColorSpace}var tp={clone:ur,merge:Ct},gt=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ts=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=cr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pt=class extends ts{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*al*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ca*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*al*Math.atan(Math.tan(.5*ca*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ca*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$i=-90,hl=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pt($i,1,e,t);i.layers=this.layers,this.add(i);let s=new Pt($i,1,e,t);s.layers=this.layers,this.add(s);let a=new Pt($i,1,e,t);a.layers=this.layers,this.add(a);let o=new Pt($i,1,e,t);o.layers=this.layers,this.add(o);let l=new Pt($i,1,e,t);l.layers=this.layers,this.add(l);let c=new Pt($i,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===cr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==ga)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Sa=class extends Bt{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:sr,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ul=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_i?it:un),this.texture=new Sa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Pn(5,5,5),s=new gt({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:0});s.uniforms.tEquirect.value=t;let a=new qe(i,s),o=t.minFilter;return t.minFilter===ha&&(t.minFilter=nn),new hl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Bo=new S,np=new S,ip=new Le,Tn=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Bo.subVectors(n,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ip.getNormalMatrix(e),i=this.coplanarPoint(Bo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hi=new pn,qs=new S,dr=class{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],m=i[9],v=i[10],f=i[11],y=i[12],g=i[13],_=i[14],M=i[15];if(n[0].setComponents(l-s,d-c,f-p,M-y).normalize(),n[1].setComponents(l+s,d+c,f+p,M+y).normalize(),n[2].setComponents(l+a,d+h,f+m,M+g).normalize(),n[3].setComponents(l-a,d-h,f-m,M-g).normalize(),n[4].setComponents(l-o,d-u,f-v,M-_).normalize(),t===cr)n[5].setComponents(l+o,d+u,f+v,M+_).normalize();else{if(t!==ga)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(qs.x=i.normal.x>0?e.max.x:e.min.x,qs.y=i.normal.y>0?e.max.y:e.min.y,qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rp(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,(function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer(),p;if(r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=r.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}})(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&d.length===0&&r.bufferSubData(c,0,h),d.length!==0){for(let p=0,m=d.length;p<m;p++){let v=d[p];t?r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count):r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h.subarray(v.start,v.start+v.count))}l.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var pr=class r extends Ge{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],v=[],f=[];for(let y=0;y<h;y++){let g=y*d-a;for(let _=0;_<c;_++){let M=_*u-s;m.push(M,-g,0),v.push(0,0,1),f.push(_/o),f.push(1-y/l)}}for(let y=0;y<l;y++)for(let g=0;g<o;g++){let _=g+c*y,M=g+c*(y+1),R=g+1+c*(y+1),b=g+1+c*y;p.push(_,M,b),p.push(M,R,b)}this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Te={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},oe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},cn={basic:{uniforms:Ct([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Ct([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Ct([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Ct([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Ct([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Ct([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Ct([oe.points,oe.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Ct([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Ct([oe.common,oe.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Ct([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Ct([oe.sprite,oe.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Ct([oe.common,oe.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Ct([oe.lights,oe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};cn.physical={uniforms:Ct([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};var Ys={r:0,b:0,g:0};function sp(r,e,t,n,i,s,a){let o=new ye(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function m(v,f){v.getRGB(Ys,Vu(r)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(v,f=1){o.set(v),h=f,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,m(o,h)},render:function(v,f){let y=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?m(o,h):g&&g.isColor&&(m(g,1),y=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Wa)?(c===void 0&&(c=new qe(new Pn(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:ur(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(g.colorSpace)!==Ye,u===g&&d===g.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new qe(new pr(2,2),new gt({name:"BackgroundMaterial",uniforms:ur(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(g.colorSpace)!==Ye,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}}}function ap(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function u(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function d(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R){let b=[],w=[],I=[];for(let P=0;P<i;P++)b[P]=0,w[P]=0,I[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:w,attributeDivisors:I,object:R,attributes:{},index:null}}function m(){let R=c.newAttributes;for(let b=0,w=R.length;b<w;b++)R[b]=0}function v(R){f(R,0)}function f(R,b){let w=c.newAttributes,I=c.enabledAttributes,P=c.attributeDivisors;w[R]=1,I[R]===0&&(r.enableVertexAttribArray(R),I[R]=1),P[R]!==b&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,b),P[R]=b)}function y(){let R=c.newAttributes,b=c.enabledAttributes;for(let w=0,I=b.length;w<I;w++)b[w]!==R[w]&&(r.disableVertexAttribArray(w),b[w]=0)}function g(R,b,w,I,P,D,j){j===!0?r.vertexAttribIPointer(R,b,w,P,D):r.vertexAttribPointer(R,b,w,I,P,D)}function _(){M(),h=!0,c!==l&&(c=l,u(c.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(R,b,w,I,P){let D=!1;if(a){let j=(function(C,G,V){let ae=V.wireframe===!0,pe=o[C.id];pe===void 0&&(pe={},o[C.id]=pe);let te=pe[G.id];te===void 0&&(te={},pe[G.id]=te);let q=te[ae];return q===void 0&&(q=p(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),te[ae]=q),q})(I,w,b);c!==j&&(c=j,u(c.object)),D=(function(C,G,V,ae){let pe=c.attributes,te=G.attributes,q=0,ee=V.getAttributes();for(let F in ee)if(ee[F].location>=0){let J=pe[F],ce=te[F];if(ce===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;q++}return c.attributesNum!==q||c.index!==ae})(R,I,w,P),D&&(function(C,G,V,ae){let pe={},te=G.attributes,q=0,ee=V.getAttributes();for(let F in ee)if(ee[F].location>=0){let J=te[F];J===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(J=C.instanceColor));let ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),pe[F]=ce,q++}c.attributes=pe,c.attributesNum=q,c.index=ae})(R,I,w,P)}else{let j=b.wireframe===!0;c.geometry===I.id&&c.program===w.id&&c.wireframe===j||(c.geometry=I.id,c.program=w.id,c.wireframe=j,D=!0)}P!==null&&t.update(P,r.ELEMENT_ARRAY_BUFFER),(D||h)&&(h=!1,(function(j,C,G,V){if(n.isWebGL2===!1&&(j.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let ae=V.attributes,pe=G.getAttributes(),te=C.defaultAttributeValues;for(let q in pe){let ee=pe[q];if(ee.location>=0){let F=ae[q];if(F===void 0&&(q==="instanceMatrix"&&j.instanceMatrix&&(F=j.instanceMatrix),q==="instanceColor"&&j.instanceColor&&(F=j.instanceColor)),F!==void 0){let J=F.normalized,ce=F.itemSize,T=t.get(F);if(T===void 0)continue;let E=T.buffer,O=T.type,Y=T.bytesPerElement,L=n.isWebGL2===!0&&(O===r.INT||O===r.UNSIGNED_INT||F.gpuType===Iu);if(F.isInterleavedBufferAttribute){let X=F.data,N=X.stride,U=F.offset;if(X.isInstancedInterleavedBuffer){for(let z=0;z<ee.locationSize;z++)f(ee.location+z,X.meshPerAttribute);j.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let z=0;z<ee.locationSize;z++)v(ee.location+z);r.bindBuffer(r.ARRAY_BUFFER,E);for(let z=0;z<ee.locationSize;z++)g(ee.location+z,ce/ee.locationSize,O,J,N*Y,(U+ce/ee.locationSize*z)*Y,L)}else{if(F.isInstancedBufferAttribute){for(let X=0;X<ee.locationSize;X++)f(ee.location+X,F.meshPerAttribute);j.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let X=0;X<ee.locationSize;X++)v(ee.location+X);r.bindBuffer(r.ARRAY_BUFFER,E);for(let X=0;X<ee.locationSize;X++)g(ee.location+X,ce/ee.locationSize,O,J,ce*Y,ce/ee.locationSize*X*Y,L)}}else if(te!==void 0){let J=te[q];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(ee.location,J);break;case 3:r.vertexAttrib3fv(ee.location,J);break;case 4:r.vertexAttrib4fv(ee.location,J);break;default:r.vertexAttrib1fv(ee.location,J)}}}}y()})(R,b,w,I),P!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))},reset:_,resetDefaultState:M,dispose:function(){_();for(let R in o){let b=o[R];for(let w in b){let I=b[w];for(let P in I)d(I[P].object),delete I[P];delete b[w]}delete o[R]}},releaseStatesOfGeometry:function(R){if(o[R.id]===void 0)return;let b=o[R.id];for(let w in b){let I=b[w];for(let P in I)d(I[P].object),delete I[P];delete b[w]}delete o[R.id]},releaseStatesOfProgram:function(R){for(let b in o){let w=o[b];if(w[R.id]===void 0)continue;let I=w[R.id];for(let P in I)d(I[P].object),delete I[P];delete w[R.id]}},initAttributes:m,enableAttribute:v,disableUnusedAttributes:y}}function op(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function lp(r,e,t){let n;function i(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,_=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:g&&_,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function cp(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Tn,o=new Le,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,v=null;if(m!==0){if(v=l.value,p!==!0||v===null){let f=d+4*m,y=u.matrixWorldInverse;o.getNormalMatrix(y),(v===null||v.length<f)&&(v=new Float32Array(f));for(let g=0,_=d;g!==m;++g,_+=4)a.copy(h[g]).applyMatrix4(y,o),a.normal.toArray(v,_),v[_+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,v=h.clipShadows,f=r.get(h);if(!i||p===null||p.length===0||s&&!v)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let y=s?0:n,g=4*y,_=f.clippingState||null;l.value=_,_=c(p,u,g,d);for(let M=0;M!==g;++M)_[M]=t[M];f.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}}}function hp(r){let e=new WeakMap;function t(i,s){return s===tl?i.mapping=sr:s===nl&&(i.mapping=ar),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===tl||s===nl){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new ul(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var ba=class extends ts{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gh=[.125,.215,.35,.446,.526,.582],Vr=20,Ho=new ba,Vh=new ye,ko=null,Go=0,Vo=0,ui=(1+Math.sqrt(5))/2,Ji=1/ui,Wh=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,ui,Ji),new S(0,ui,-Ji),new S(Ji,0,ui),new S(-Ji,0,ui),new S(ui,Ji,0),new S(-ui,Ji,0)],Ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ko=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Go,Vo),e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Kr,format:hn,colorSpace:Cn,depthBuffer:!1},i=Xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Gh.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let m=1/p;d>a-4?m=Gh[d-a+4-1]:d===0&&(m=0),c.push(m);let v=1/(p-2),f=-v,y=1+v,g=[f,f,y,f,y,y,f,f,y,y,f,y],_=6,M=6,R=3,b=2,w=1,I=new Float32Array(R*M*_),P=new Float32Array(b*M*_),D=new Float32Array(w*M*_);for(let C=0;C<_;C++){let G=C%3*2/3-1,V=C>2?0:-1,ae=[G,V,0,G+2/3,V,0,G+2/3,V+1,0,G,V,0,G+2/3,V+1,0,G,V+1,0];I.set(ae,R*M*C),P.set(g,b*M*C);let pe=[C,C,C,C,C,C];D.set(pe,w*M*C)}let j=new Ge;j.setAttribute("position",new et(I,R)),j.setAttribute("uv",new et(P,b)),j.setAttribute("faceIndex",new et(D,w)),o.push(j),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Vr),h=new S(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,n,i){let s=new Pt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Vh),l.toneMapping=jn,l.autoClear=!1;let u=new xi({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),d=new qe(new Pn,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(Vh),p=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):f===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let y=this._cubeSize;$s(i,f*y,v>2?y:0,y,y),l.setRenderTarget(i),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===sr||e.mapping===ar;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;$s(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Ho)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Wh[(i-1)%Wh.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new qe(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,v=isFinite(s)?1+Math.floor(3*m):Vr;v>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let f=[],y=0;for(let M=0;M<Vr;++M){let R=M/m,b=Math.exp(-R*R/2);f.push(b),M===0?y+=b:M<v&&(y+=2*b)}for(let M=0;M<f.length;M++)f[M]=f[M]/y;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let _=this._sizeLods[i];$s(t,3*_*(i>g-4?i-g+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,Ho)}};function Xh(r,e,t){let n=new Ln(r,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function jh(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qh(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function up(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===tl||s===nl,o=s===sr||s===ar;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let l=e.get(i);return t===null&&(t=new Ea(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),e.set(i,l),l.texture}if(e.has(i))return e.get(i).texture;{let l=i.image;if(a&&l&&l.height>0||o&&l&&(function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u})(l)){t===null&&(t=new Ea(r));let c=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,c),i.addEventListener("dispose",n),c.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function dp(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pp(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let f=0,y=v.length;f<y;f+=3){let g=v[f+0],_=v[f+1],M=v[f+2];c.push(g,_,_,M,M,g)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let f=0,y=v.length/3-1;f<y;f+=3){let g=f+0,_=f+1,M=f+2;c.push(g,_,_,M,M,g)}}}let p=new(ku(c)?Ma:xa)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function mp(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(i)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,s,1)}}}function fp(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function gp(r,e){return r[0]-e[0]}function vp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function _p(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new at,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0,m=s.get(c);if(m===void 0||m.count!==p){let G=function(){j.dispose(),s.delete(c),c.removeEventListener("dispose",G)};m!==void 0&&m.texture.dispose();let y=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],b=c.morphAttributes.color||[],w=0;y===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let I=c.attributes.position.count*w,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let D=new Float32Array(I*P*4*p),j=new ya(D,I,P,p);j.type=Wn,j.needsUpdate=!0;let C=4*w;for(let V=0;V<p;V++){let ae=M[V],pe=R[V],te=b[V],q=I*P*4*V;for(let ee=0;ee<ae.count;ee++){let F=ee*C;y===!0&&(a.fromBufferAttribute(ae,ee),D[q+F+0]=a.x,D[q+F+1]=a.y,D[q+F+2]=a.z,D[q+F+3]=0),g===!0&&(a.fromBufferAttribute(pe,ee),D[q+F+4]=a.x,D[q+F+5]=a.y,D[q+F+6]=a.z,D[q+F+7]=0),_===!0&&(a.fromBufferAttribute(te,ee),D[q+F+8]=a.x,D[q+F+9]=a.y,D[q+F+10]=a.z,D[q+F+11]=te.itemSize===4?a.w:1)}}m={count:p,texture:j,size:new se(I,P)},s.set(c,m),c.addEventListener("dispose",G)}let v=0;for(let y=0;y<u.length;y++)v+=u[y];let f=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{let d=u===void 0?0:u.length,p=n[c.id];if(p===void 0||p.length!==d){p=[];for(let g=0;g<d;g++)p[g]=[g,0];n[c.id]=p}for(let g=0;g<d;g++){let _=p[g];_[0]=g,_[1]=u[g]}p.sort(vp);for(let g=0;g<8;g++)g<d&&p[g][1]?(o[g][0]=p[g][0],o[g][1]=p[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(gp);let m=c.morphAttributes.position,v=c.morphAttributes.normal,f=0;for(let g=0;g<8;g++){let _=o[g],M=_[0],R=_[1];M!==Number.MAX_SAFE_INTEGER&&R?(m&&c.getAttribute("morphTarget"+g)!==m[M]&&c.setAttribute("morphTarget"+g,m[M]),v&&c.getAttribute("morphNormal"+g)!==v[M]&&c.setAttribute("morphNormal"+g,v[M]),i[g]=R,f+=R):(m&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),v&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),i[g]=0)}let y=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function yp(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var Ta=class extends Bt{constructor(e,t,n,i,s,a,o,l,c,h){if((h=h!==void 0?h:vi)!==vi&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=Vn),n===void 0&&h===lr&&(n=gi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xu=new Bt,ju=new Ta(1,1);ju.compareFunction=515;var qu=new ya,Yu=new cl,$u=new Sa,Yh=[],$h=[],Jh=new Float32Array(16),Zh=new Float32Array(9),Kh=new Float32Array(4);function _r(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Yh[i];if(s===void 0&&(s=new Float32Array(i),Yh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ja(r,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function xp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Mp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function Sp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function bp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function Ep(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Kh.set(n),r.uniformMatrix2fv(this.addr,!1,Kh),ht(t,n)}}function Tp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Zh.set(n),r.uniformMatrix3fv(this.addr,!1,Zh),ht(t,n)}}function wp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Jh.set(n),r.uniformMatrix4fv(this.addr,!1,Jh),ht(t,n)}}function Ap(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Rp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function Cp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function Lp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function Pp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ip(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function Np(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function Up(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function Dp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?ju:Xu;t.setTexture2D(e||s,i)}function Op(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yu,i)}function zp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$u,i)}function Fp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qu,i)}function Bp(r,e){r.uniform1fv(this.addr,e)}function Hp(r,e){let t=_r(e,this.size,2);r.uniform2fv(this.addr,t)}function kp(r,e){let t=_r(e,this.size,3);r.uniform3fv(this.addr,t)}function Gp(r,e){let t=_r(e,this.size,4);r.uniform4fv(this.addr,t)}function Vp(r,e){let t=_r(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Wp(r,e){let t=_r(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Xp(r,e){let t=_r(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function jp(r,e){r.uniform1iv(this.addr,e)}function qp(r,e){r.uniform2iv(this.addr,e)}function Yp(r,e){r.uniform3iv(this.addr,e)}function $p(r,e){r.uniform4iv(this.addr,e)}function Jp(r,e){r.uniform1uiv(this.addr,e)}function Zp(r,e){r.uniform2uiv(this.addr,e)}function Kp(r,e){r.uniform3uiv(this.addr,e)}function Qp(r,e){r.uniform4uiv(this.addr,e)}function em(r,e,t){let n=this.cache,i=e.length,s=ja(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Xu,s[a])}function tm(r,e,t){let n=this.cache,i=e.length,s=ja(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yu,s[a])}function nm(r,e,t){let n=this.cache,i=e.length,s=ja(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||$u,s[a])}function im(r,e,t){let n=this.cache,i=e.length,s=ja(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qu,s[a])}var dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return xp;case 35664:return Mp;case 35665:return Sp;case 35666:return bp;case 35674:return Ep;case 35675:return Tp;case 35676:return wp;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Lp;case 5125:return Pp;case 36294:return Ip;case 36295:return Np;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Fp}})(t.type)}},pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return Bp;case 35664:return Hp;case 35665:return kp;case 35666:return Gp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return jp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return $p;case 5125:return Jp;case 36294:return Zp;case 36295:return Kp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}})(t.type)}},ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Wo=/(\w+)(\])?(\[|\.)?/g;function Qh(r,e){r.seq.push(e),r.map[e.id]=e}function rm(r,e,t){let n=r.name,i=n.length;for(Wo.lastIndex=0;;){let s=Wo.exec(n),a=Wo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Qh(t,c===void 0?new dl(o,r,e):new pl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new ml(o),Qh(t,h)),t=h}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);rm(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function eu(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var sm=37297,am=0;function tu(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function om(r,e){let t=(function(n){let i=Xe.getPrimaries(Xe.workingColorSpace),s=Xe.getPrimaries(n),a;switch(i===s?a="":i===fa&&s===ma?a="LinearDisplayP3ToLinearSRGB":i===ma&&s===fa&&(a="LinearSRGBToLinearDisplayP3"),n){case Cn:case Xa:return[a,"LinearTransferOETF"];case it:case lc:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function lm(r,e){let t;switch(e){case Nd:t="Linear";break;case Ud:t="Reinhard";break;case Dd:t="OptimizedCineon";break;case ac:t="ACESFilmic";break;case zd:t="AgX";break;case Od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zi(r){return r!==""}function nu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(r){return r.replace(cm,um)}var hm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function um(r,e){let t=Te[e];if(t===void 0){let n=hm.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return fl(t)}var dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(r){return r.replace(dm,pm)}function pm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function su(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mm(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(C){let G="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===Cu?G="SHADOWMAP_TYPE_PCF":C.shadowMapType===Ld?G="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===En&&(G="SHADOWMAP_TYPE_VSM"),G})(t),c=(function(C){let G="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case sr:case ar:G="ENVMAP_TYPE_CUBE";break;case Wa:G="ENVMAP_TYPE_CUBE_UV"}return G})(t),h=(function(C){let G="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===ar&&(G="ENVMAP_MODE_REFRACTION"),G})(t),u=(function(C){let G="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case Lu:G="ENVMAP_BLENDING_MULTIPLY";break;case Pd:G="ENVMAP_BLENDING_MIX";break;case Id:G="ENVMAP_BLENDING_ADD"}return G})(t),d=(function(C){let G=C.envMapCubeUVHeight;if(G===null)return null;let V=Math.log2(G)-2,ae=1/G;return{texelWidth:1/(3*Math.max(Math.pow(2,V),112)),texelHeight:ae,maxMip:V}})(t),p=t.isWebGL2?"":(function(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)})(t),m=(function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zi).join(`
`)})(t),v=(function(C){let G=[];for(let V in C){let ae=C[V];ae!==!1&&G.push("#define "+V+" "+ae)}return G.join(`
`)})(s),f=i.createProgram(),y,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zi).join(`
`),y.length>0&&(y+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zi).join(`
`),g.length>0&&(g+=`
`)):(y=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),g=[p,su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Te.tonemapping_pars_fragment:"",t.toneMapping!==jn?lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=fl(a),a=nu(a,t),a=iu(a,t),o=fl(o),o=nu(o,t),o=iu(o,t),a=ru(a),o=ru(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=_+y+a,R=_+g+o,b=eu(i,i.VERTEX_SHADER,M),w=eu(i,i.FRAGMENT_SHADER,R);function I(C){if(r.debug.checkShaderErrors){let G=i.getProgramInfoLog(f).trim(),V=i.getShaderInfoLog(b).trim(),ae=i.getShaderInfoLog(w).trim(),pe=!0,te=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,b,w);else{let q=tu(i,b,"vertex"),ee=tu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+q+`
`+ee)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):V!==""&&ae!==""||(te=!1);te&&(C.diagnostics={runnable:pe,programLog:G,vertexShader:{log:V,prefix:y},fragmentShader:{log:ae,prefix:g}})}i.deleteShader(b),i.deleteShader(w),P=new rr(i,f),D=(function(G,V){let ae={},pe=G.getProgramParameter(V,G.ACTIVE_ATTRIBUTES);for(let te=0;te<pe;te++){let q=G.getActiveAttrib(V,te),ee=q.name,F=1;q.type===G.FLOAT_MAT2&&(F=2),q.type===G.FLOAT_MAT3&&(F=3),q.type===G.FLOAT_MAT4&&(F=4),ae[ee]={type:q.type,location:G.getAttribLocation(V,ee),locationSize:F}}return ae})(i,f)}let P,D;i.attachShader(f,b),i.attachShader(f,w),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),this.getUniforms=function(){return P===void 0&&I(this),P},this.getAttributes=function(){return D===void 0&&I(this),D};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=i.getProgramParameter(f,sm)),j},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=am++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=w,this}var fm=0,gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vl(e),t.set(e,n)),n}},vl=class{constructor(e){this.id=fm++,this.code=e,this.usedTimes=0}};function gm(r,e,t,n,i,s,a){let o=new es,l=new gl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,y,g,_,M){let R=_.fog,b=M.geometry,w=f.isMeshStandardMaterial?_.environment:null,I=(f.isMeshStandardMaterial?t:e).get(f.envMap||w),P=I&&I.mapping===Wa?I.image.height:null,D=m[f.type];f.precision!==null&&(p=i.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let j=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,C=j!==void 0?j.length:0,G,V,ae,pe,te=0;if(b.morphAttributes.position!==void 0&&(te=1),b.morphAttributes.normal!==void 0&&(te=2),b.morphAttributes.color!==void 0&&(te=3),D){let Mt=cn[D];G=Mt.vertexShader,V=Mt.fragmentShader}else G=f.vertexShader,V=f.fragmentShader,l.update(f),ae=l.getVertexShaderID(f),pe=l.getFragmentShaderID(f);let q=r.getRenderTarget(),ee=M.isInstancedMesh===!0,F=M.isBatchedMesh===!0,J=!!f.map,ce=!!f.matcap,T=!!I,E=!!f.aoMap,O=!!f.lightMap,Y=!!f.bumpMap,L=!!f.normalMap,X=!!f.displacementMap,N=!!f.emissiveMap,U=!!f.metalnessMap,z=!!f.roughnessMap,Q=f.anisotropy>0,Z=f.clearcoat>0,x=f.iridescence>0,ne=f.sheen>0,B=f.transmission>0,H=Q&&!!f.anisotropyMap,ie=Z&&!!f.clearcoatMap,he=Z&&!!f.clearcoatNormalMap,de=Z&&!!f.clearcoatRoughnessMap,me=x&&!!f.iridescenceMap,Se=x&&!!f.iridescenceThicknessMap,fe=ne&&!!f.sheenColorMap,ge=ne&&!!f.sheenRoughnessMap,we=!!f.specularMap,dt=!!f.specularColorMap,ve=!!f.specularIntensityMap,He=B&&!!f.transmissionMap,Ne=B&&!!f.thicknessMap,Ss=!!f.gradientMap,Ui=!!f.alphaMap,bs=f.alphaTest>0,Vt=!!f.alphaHash,Ot=!!f.extensions,Di=!!b.attributes.uv1,W=!!b.attributes.uv2,Es=!!b.attributes.uv3,Or=jn;return f.toneMapped&&(q!==null&&q.isXRRenderTarget!==!0||(Or=r.toneMapping)),{isWebGL2:h,shaderID:D,shaderType:f.type,shaderName:f.name,vertexShader:G,fragmentShader:V,defines:f.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:F,instancing:ee,instancingColor:ee&&M.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:q===null?r.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Cn,map:J,matcap:ce,envMap:T,envMapMode:T&&I.mapping,envMapCubeUVHeight:P,aoMap:E,lightMap:O,bumpMap:Y,normalMap:L,displacementMap:d&&X,emissiveMap:N,normalMapObjectSpace:L&&f.normalMapType===1,normalMapTangentSpace:L&&f.normalMapType===0,metalnessMap:U,roughnessMap:z,anisotropy:Q,anisotropyMap:H,clearcoat:Z,clearcoatMap:ie,clearcoatNormalMap:he,clearcoatRoughnessMap:de,iridescence:x,iridescenceMap:me,iridescenceThicknessMap:Se,sheen:ne,sheenColorMap:fe,sheenRoughnessMap:ge,specularMap:we,specularColorMap:dt,specularIntensityMap:ve,transmission:B,transmissionMap:He,thicknessMap:Ne,gradientMap:Ss,opaque:f.transparent===!1&&f.blending===1,alphaMap:Ui,alphaTest:bs,alphaHash:Vt,combine:f.combine,mapUv:J&&v(f.map.channel),aoMapUv:E&&v(f.aoMap.channel),lightMapUv:O&&v(f.lightMap.channel),bumpMapUv:Y&&v(f.bumpMap.channel),normalMapUv:L&&v(f.normalMap.channel),displacementMapUv:X&&v(f.displacementMap.channel),emissiveMapUv:N&&v(f.emissiveMap.channel),metalnessMapUv:U&&v(f.metalnessMap.channel),roughnessMapUv:z&&v(f.roughnessMap.channel),anisotropyMapUv:H&&v(f.anisotropyMap.channel),clearcoatMapUv:ie&&v(f.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&v(f.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(f.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&v(f.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(f.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(f.sheenRoughnessMap.channel),specularMapUv:we&&v(f.specularMap.channel),specularColorMapUv:dt&&v(f.specularColorMap.channel),specularIntensityMapUv:ve&&v(f.specularIntensityMap.channel),transmissionMapUv:He&&v(f.transmissionMap.channel),thicknessMapUv:Ne&&v(f.thicknessMap.channel),alphaMapUv:Ui&&v(f.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(L||Q),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:Di,vertexUv2s:W,vertexUv3s:Es,pointsUvs:M.isPoints===!0&&!!b.attributes.uv&&(J||Ui),fog:!!R,useFog:f.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:M.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:Or,useLegacyLights:r._useLegacyLights,decodeVideoTexture:J&&f.map.isVideoTexture===!0&&Xe.getTransfer(f.map.colorSpace)===Ye,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===Tt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Ot&&f.extensions.derivatives===!0,extensionFragDepth:Ot&&f.extensions.fragDepth===!0,extensionDrawBuffers:Ot&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ot&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ot&&f.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let y=[];if(f.shaderID?y.push(f.shaderID):(y.push(f.customVertexShaderID),y.push(f.customFragmentShaderID)),f.defines!==void 0)for(let g in f.defines)y.push(g),y.push(f.defines[g]);return f.isRawShaderMaterial===!1&&((function(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)})(y,f),(function(g,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),g.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),g.push(o.mask)})(y,f),y.push(r.outputColorSpace)),y.push(f.customProgramCacheKey),y.join()},getUniforms:function(f){let y=m[f.type],g;if(y){let _=cn[y];g=tp.clone(_.uniforms)}else g=f.uniforms;return g},acquireProgram:function(f,y){let g;for(let _=0,M=c.length;_<M;_++){let R=c[_];if(R.cacheKey===y){g=R,++g.usedTimes;break}}return g===void 0&&(g=new mm(r,y,f,s),c.push(g)),g},releaseProgram:function(f){if(--f.usedTimes==0){let y=c.indexOf(f);c[y]=c[c.length-1],c.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:c,dispose:function(){l.dispose()}}}function vm(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function _m(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function au(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ou(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||_m),n.length>1&&n.sort(o||au),i.length>1&&i.sort(o||au)}}}function ym(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new ou,r.set(e,[i])):t>=n.length?(i=new ou,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function xm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new ye};break;case"SpotLight":t={position:new S,direction:new S,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new S,halfWidth:new S,halfHeight:new S}}return r[e.id]=t,t}}}var Mm=0;function Sm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bm(r,e){let t=new xm,n=(function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new S);let s=new S,a=new Ae,o=new Ae;return{setup:function(l,c){let h=0,u=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let p=0,m=0,v=0,f=0,y=0,g=0,_=0,M=0,R=0,b=0,w=0;l.sort(Sm);let I=c===!0?Math.PI:1;for(let D=0,j=l.length;D<j;D++){let C=l[D],G=C.color,V=C.intensity,ae=C.distance,pe=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=G.r*V*I,u+=G.g*V*I,d+=G.b*V*I;else if(C.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(C.sh.coefficients[te],V);w++}else if(C.isDirectionalLight){let te=t.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity*I),C.castShadow){let q=C.shadow,ee=n.get(C);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=pe,i.directionalShadowMatrix[p]=C.shadow.matrix,g++}i.directional[p]=te,p++}else if(C.isSpotLight){let te=t.get(C);te.position.setFromMatrixPosition(C.matrixWorld),te.color.copy(G).multiplyScalar(V*I),te.distance=ae,te.coneCos=Math.cos(C.angle),te.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),te.decay=C.decay,i.spot[v]=te;let q=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,q.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[v]=q.matrix,C.castShadow){let ee=n.get(C);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=pe,M++}v++}else if(C.isRectAreaLight){let te=t.get(C);te.color.copy(G).multiplyScalar(V),te.halfWidth.set(.5*C.width,0,0),te.halfHeight.set(0,.5*C.height,0),i.rectArea[f]=te,f++}else if(C.isPointLight){let te=t.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity*I),te.distance=C.distance,te.decay=C.decay,C.castShadow){let q=C.shadow,ee=n.get(C);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,ee.shadowCameraNear=q.camera.near,ee.shadowCameraFar=q.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=pe,i.pointShadowMatrix[m]=C.shadow.matrix,_++}i.point[m]=te,m++}else if(C.isHemisphereLight){let te=t.get(C);te.skyColor.copy(C.color).multiplyScalar(V*I),te.groundColor.copy(C.groundColor).multiplyScalar(V*I),i.hemi[y]=te,y++}}f>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;P.directionalLength===p&&P.pointLength===m&&P.spotLength===v&&P.rectAreaLength===f&&P.hemiLength===y&&P.numDirectionalShadows===g&&P.numPointShadows===_&&P.numSpotShadows===M&&P.numSpotMaps===R&&P.numLightProbes===w||(i.directional.length=p,i.spot.length=v,i.rectArea.length=f,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,P.directionalLength=p,P.pointLength=m,P.spotLength=v,P.rectAreaLength=f,P.hemiLength=y,P.numDirectionalShadows=g,P.numPointShadows=_,P.numSpotShadows=M,P.numSpotMaps=R,P.numLightProbes=w,i.version=Mm++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,m=0,v=c.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){let g=l[f];if(g.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(v),h++}else if(g.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(v),d++}else if(g.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),o.identity(),a.copy(g.matrixWorld),a.premultiply(v),o.extractRotation(a),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let _=i.point[u];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),u++}else if(g.isHemisphereLight){let _=i.hemi[m];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(v),m++}}},state:i}}function lu(r,e){let t=new bm(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function Em(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new lu(r,e),t.set(n,[a])):i>=s.length?(a=new lu(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var _l=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yl=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tm(r,e,t){let n=new dr,i=new se,s=new se,a=new at,o=new _l({depthPacking:3201}),l=new yl,c={},h=t.maxTextureSize,u={[Yn]:Tt,[Tt]:Yn,2:2},d=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ge;m.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new qe(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let y=this.type;function g(b,w){let I=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ln(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,I,d,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,I,p,v,null)}function _(b,w,I,P){let D=null,j=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(j!==void 0)D=j;else if(D=I.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let C=D.uuid,G=w.uuid,V=c[C];V===void 0&&(V={},c[C]=V);let ae=V[G];ae===void 0&&(ae=D.clone(),V[G]=ae,w.addEventListener("dispose",R)),D=ae}return D.visible=w.visible,D.wireframe=w.wireframe,D.side=P===En?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:u[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,I.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(r.properties.get(D).light=I),D}function M(b,w,I,P,D){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===En)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let C=e.update(b),G=b.material;if(Array.isArray(G)){let V=C.groups;for(let ae=0,pe=V.length;ae<pe;ae++){let te=V[ae],q=G[te.materialIndex];if(q&&q.visible){let ee=_(b,q,P,D);b.onBeforeShadow(r,b,w,I,C,ee,te),r.renderBufferDirect(I,null,C,ee,b,te),b.onAfterShadow(r,b,w,I,C,ee,te)}}}else if(G.visible){let V=_(b,G,P,D);b.onBeforeShadow(r,b,w,I,C,V,null),r.renderBufferDirect(I,null,C,V,b,null),b.onAfterShadow(r,b,w,I,C,V,null)}}let j=b.children;for(let C=0,G=j.length;C<G;C++)M(j[C],w,I,P,D)}function R(b){b.target.removeEventListener("dispose",R);for(let w in c){let I=c[w],P=b.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}this.render=function(b,w,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;let P=r.getRenderTarget(),D=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),C=r.state;C.setBlending(0),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let G=y!==En&&this.type===En,V=y===En&&this.type!==En;for(let ae=0,pe=b.length;ae<pe;ae++){let te=b[ae],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let ee=q.getFrameExtents();if(i.multiply(ee),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ee.x),i.x=s.x*ee.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ee.y),i.y=s.y*ee.y,q.mapSize.y=s.y)),q.map===null||G===!0||V===!0){let J=this.type!==En?{minFilter:Lt,magFilter:Lt}:{};q.map!==null&&q.map.dispose(),q.map=new Ln(i.x,i.y,J),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();let F=q.getViewportCount();for(let J=0;J<F;J++){let ce=q.getViewport(J);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),C.viewport(a),q.updateMatrices(te,J),n=q.getFrustum(),M(w,I,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===En&&g(q,I),q.needsUpdate=!1}y=this.type,f.needsUpdate=!1,r.setRenderTarget(P,D,j)}}function wm(r,e,t){let n=t.isWebGL2,i=new function(){let x=!1,ne=new at,B=null,H=new at(0,0,0,0);return{setMask:function(ie){B===ie||x||(r.colorMask(ie,ie,ie,ie),B=ie)},setLocked:function(ie){x=ie},setClear:function(ie,he,de,me,Se){Se===!0&&(ie*=me,he*=me,de*=me),ne.set(ie,he,de,me),H.equals(ne)===!1&&(r.clearColor(ie,he,de,me),H.copy(ne))},reset:function(){x=!1,B=null,H.set(-1,0,0,0)}}},s=new function(){let x=!1,ne=null,B=null,H=null;return{setTest:function(ie){ie?Y(r.DEPTH_TEST):L(r.DEPTH_TEST)},setMask:function(ie){ne===ie||x||(r.depthMask(ie),ne=ie)},setFunc:function(ie){if(B!==ie){switch(ie){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}B=ie}},setLocked:function(ie){x=ie},setClear:function(ie){H!==ie&&(r.clearDepth(ie),H=ie)},reset:function(){x=!1,ne=null,B=null,H=null}}},a=new function(){let x=!1,ne=null,B=null,H=null,ie=null,he=null,de=null,me=null,Se=null;return{setTest:function(fe){x||(fe?Y(r.STENCIL_TEST):L(r.STENCIL_TEST))},setMask:function(fe){ne===fe||x||(r.stencilMask(fe),ne=fe)},setFunc:function(fe,ge,we){B===fe&&H===ge&&ie===we||(r.stencilFunc(fe,ge,we),B=fe,H=ge,ie=we)},setOp:function(fe,ge,we){he===fe&&de===ge&&me===we||(r.stencilOp(fe,ge,we),he=fe,de=ge,me=we)},setLocked:function(fe){x=fe},setClear:function(fe){Se!==fe&&(r.clearStencil(fe),Se=fe)},reset:function(){x=!1,ne=null,B=null,H=null,ie=null,he=null,de=null,me=null,Se=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,m=!1,v=null,f=null,y=null,g=null,_=null,M=null,R=null,b=new ye(0,0,0),w=0,I=!1,P=null,D=null,j=null,C=null,G=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ae=!1,pe=0,te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(te)[1]),ae=pe>=1):te.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ae=pe>=2);let q=null,ee={},F=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),ce=new at().fromArray(F),T=new at().fromArray(J);function E(x,ne,B,H){let ie=new Uint8Array(4),he=r.createTexture();r.bindTexture(x,he),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<B;de++)!n||x!==r.TEXTURE_3D&&x!==r.TEXTURE_2D_ARRAY?r.texImage2D(ne+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage3D(ne,0,r.RGBA,1,1,H,0,r.RGBA,r.UNSIGNED_BYTE,ie);return he}let O={};function Y(x){c[x]!==!0&&(r.enable(x),c[x]=!0)}function L(x){c[x]!==!1&&(r.disable(x),c[x]=!1)}O[r.TEXTURE_2D]=E(r.TEXTURE_2D,r.TEXTURE_2D,1),O[r.TEXTURE_CUBE_MAP]=E(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(O[r.TEXTURE_2D_ARRAY]=E(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),O[r.TEXTURE_3D]=E(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Y(r.DEPTH_TEST),s.setFunc(3),z(!1),Q(1),Y(r.CULL_FACE),U(0);let X={[di]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)X[103]=r.MIN,X[104]=r.MAX;else{let x=e.get("EXT_blend_minmax");x!==null&&(X[103]=x.MIN_EXT,X[104]=x.MAX_EXT)}let N={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[Qo]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[el]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function U(x,ne,B,H,ie,he,de,me,Se,fe){if(x!==0){if(m===!1&&(Y(r.BLEND),m=!0),x===5)ie=ie||ne,he=he||B,de=de||H,ne===f&&ie===_||(r.blendEquationSeparate(X[ne],X[ie]),f=ne,_=ie),B===y&&H===g&&he===M&&de===R||(r.blendFuncSeparate(N[B],N[H],N[he],N[de]),y=B,g=H,M=he,R=de),me.equals(b)!==!1&&Se===w||(r.blendColor(me.r,me.g,me.b,Se),b.copy(me),w=Se),v=x,I=!1;else if(x!==v||fe!==I){if(f===di&&_===di||(r.blendEquation(r.FUNC_ADD),f=di,_=di),fe)switch(x){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}else switch(x){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}y=null,g=null,M=null,R=null,b.set(0,0,0),w=0,v=x,I=fe}}else m===!0&&(L(r.BLEND),m=!1)}function z(x){P!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),P=x)}function Q(x){x!==0?(Y(r.CULL_FACE),x!==D&&(x===1?r.cullFace(r.BACK):x===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):L(r.CULL_FACE),D=x}function Z(x,ne,B){x?(Y(r.POLYGON_OFFSET_FILL),C===ne&&G===B||(r.polygonOffset(ne,B),C=ne,G=B)):L(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:Y,disable:L,bindFramebuffer:function(x,ne){return h[x]!==ne&&(r.bindFramebuffer(x,ne),h[x]=ne,n&&(x===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ne),x===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ne)),!0)},drawBuffers:function(x,ne){let B=d,H=!1;if(x)if(B=u.get(ne),B===void 0&&(B=[],u.set(ne,B)),x.isWebGLMultipleRenderTargets){let ie=x.texture;if(B.length!==ie.length||B[0]!==r.COLOR_ATTACHMENT0){for(let he=0,de=ie.length;he<de;he++)B[he]=r.COLOR_ATTACHMENT0+he;B.length=ie.length,H=!0}}else B[0]!==r.COLOR_ATTACHMENT0&&(B[0]=r.COLOR_ATTACHMENT0,H=!0);else B[0]!==r.BACK&&(B[0]=r.BACK,H=!0);H&&(t.isWebGL2?r.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))},useProgram:function(x){return p!==x&&(r.useProgram(x),p=x,!0)},setBlending:U,setMaterial:function(x,ne){x.side===2?L(r.CULL_FACE):Y(r.CULL_FACE);let B=x.side===Tt;ne&&(B=!B),z(B),x.blending===1&&x.transparent===!1?U(0):U(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),i.setMask(x.colorWrite);let H=x.stencilWrite;a.setTest(H),H&&(a.setMask(x.stencilWriteMask),a.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),a.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),Z(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?Y(r.SAMPLE_ALPHA_TO_COVERAGE):L(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:z,setCullFace:Q,setLineWidth:function(x){x!==j&&(ae&&r.lineWidth(x),j=x)},setPolygonOffset:Z,setScissorTest:function(x){x?Y(r.SCISSOR_TEST):L(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+V-1),q!==x&&(r.activeTexture(x),q=x)},bindTexture:function(x,ne,B){B===void 0&&(B=q===null?r.TEXTURE0+V-1:q);let H=ee[B];H===void 0&&(H={type:void 0,texture:void 0},ee[B]=H),H.type===x&&H.texture===ne||(q!==B&&(r.activeTexture(B),q=B),r.bindTexture(x,ne||O[x]),H.type=x,H.texture=ne)},unbindTexture:function(){let x=ee[q];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},updateUBOMapping:function(x,ne){let B=l.get(ne);B===void 0&&(B=new WeakMap,l.set(ne,B));let H=B.get(x);H===void 0&&(H=r.getUniformBlockIndex(ne,x.name),B.set(x,H))},uniformBlockBinding:function(x,ne){let B=l.get(ne).get(x);o.get(ne)!==B&&(r.uniformBlockBinding(ne,B,x.__bindingPointIndex),o.set(ne,B))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},scissor:function(x){ce.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),ce.copy(x))},viewport:function(x){T.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),T.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},q=null,ee={},h={},u=new WeakMap,d=[],p=null,m=!1,v=null,f=null,y=null,g=null,_=null,M=null,R=null,b=new ye(0,0,0),w=0,I=!1,P=null,D=null,j=null,C=null,G=null,ce.set(0,0,r.canvas.width,r.canvas.height),T.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function Am(r,e,t,n,i,s,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function m(T,E){return p?new OffscreenCanvas(T,E):Qr("canvas")}function v(T,E,O,Y){let L=1;if((T.width>Y||T.height>Y)&&(L=Y/Math.max(T.width,T.height)),L<1||E===!0){if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){let X=E?ol:Math.floor,N=X(L*T.width),U=X(L*T.height);u===void 0&&(u=m(N,U));let z=O?m(N,U):u;return z.width=N,z.height=U,z.getContext("2d").drawImage(T,0,0,N,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+N+"x"+U+")."),z}return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T}return T}function f(T){return Th(T.width)&&Th(T.height)}function y(T,E){return T.generateMipmaps&&E&&T.minFilter!==Lt&&T.minFilter!==nn}function g(T){r.generateMipmap(T)}function _(T,E,O,Y,L=!1){if(o===!1)return E;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=E;if(E===r.RED&&(O===r.FLOAT&&(X=r.R32F),O===r.HALF_FLOAT&&(X=r.R16F),O===r.UNSIGNED_BYTE&&(X=r.R8)),E===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(X=r.R8UI),O===r.UNSIGNED_SHORT&&(X=r.R16UI),O===r.UNSIGNED_INT&&(X=r.R32UI),O===r.BYTE&&(X=r.R8I),O===r.SHORT&&(X=r.R16I),O===r.INT&&(X=r.R32I)),E===r.RG&&(O===r.FLOAT&&(X=r.RG32F),O===r.HALF_FLOAT&&(X=r.RG16F),O===r.UNSIGNED_BYTE&&(X=r.RG8)),E===r.RGBA){let N=L?pa:Xe.getTransfer(Y);O===r.FLOAT&&(X=r.RGBA32F),O===r.HALF_FLOAT&&(X=r.RGBA16F),O===r.UNSIGNED_BYTE&&(X=N===Ye?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return X!==r.R16F&&X!==r.R32F&&X!==r.RG16F&&X!==r.RG32F&&X!==r.RGBA16F&&X!==r.RGBA32F||e.get("EXT_color_buffer_float"),X}function M(T,E,O){return y(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==Lt&&T.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function R(T){return T===Lt||T===$c||T===fo?r.NEAREST:r.LINEAR}function b(T){let E=T.target;E.removeEventListener("dispose",b),(function(O){let Y=n.get(O);if(Y.__webglInit===void 0)return;let L=O.source,X=d.get(L);if(X){let N=X[Y.__cacheKey];N.usedTimes--,N.usedTimes===0&&I(O),Object.keys(X).length===0&&d.delete(L)}n.remove(O)})(E),E.isVideoTexture&&h.delete(E)}function w(T){let E=T.target;E.removeEventListener("dispose",w),(function(O){let Y=O.texture,L=n.get(O),X=n.get(Y);if(X.__webglTexture!==void 0&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(L.__webglFramebuffer[N]))for(let U=0;U<L.__webglFramebuffer[N].length;U++)r.deleteFramebuffer(L.__webglFramebuffer[N][U]);else r.deleteFramebuffer(L.__webglFramebuffer[N]);L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer[N])}else{if(Array.isArray(L.__webglFramebuffer))for(let N=0;N<L.__webglFramebuffer.length;N++)r.deleteFramebuffer(L.__webglFramebuffer[N]);else r.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&r.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let N=0;N<L.__webglColorRenderbuffer.length;N++)L.__webglColorRenderbuffer[N]&&r.deleteRenderbuffer(L.__webglColorRenderbuffer[N]);L.__webglDepthRenderbuffer&&r.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let N=0,U=Y.length;N<U;N++){let z=n.get(Y[N]);z.__webglTexture&&(r.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(Y[N])}n.remove(Y),n.remove(O)})(E)}function I(T){let E=n.get(T);r.deleteTexture(E.__webglTexture);let O=T.source;delete d.get(O)[E.__cacheKey],a.memory.textures--}let P=0;function D(T,E){let O=n.get(T);if(T.isVideoTexture&&(function(Y){let L=a.render.frame;h.get(Y)!==L&&(h.set(Y,L),Y.update())})(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(Y.complete!==!1)return void pe(O,T,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+E)}let j={[or]:r.REPEAT,[wn]:r.CLAMP_TO_EDGE,[il]:r.MIRRORED_REPEAT},C={[Lt]:r.NEAREST,[$c]:r.NEAREST_MIPMAP_NEAREST,[fo]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[Fd]:r.LINEAR_MIPMAP_NEAREST,[ha]:r.LINEAR_MIPMAP_LINEAR},G={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function V(T,E,O){if(O?(r.texParameteri(T,r.TEXTURE_WRAP_S,j[E.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,j[E.wrapT]),T!==r.TEXTURE_3D&&T!==r.TEXTURE_2D_ARRAY||r.texParameteri(T,r.TEXTURE_WRAP_R,j[E.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,C[E.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,C[E.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),T!==r.TEXTURE_3D&&T!==r.TEXTURE_2D_ARRAY||r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),E.wrapS===wn&&E.wrapT===wn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,R(E.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,R(E.minFilter)),E.minFilter!==Lt&&E.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,G[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Y=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Lt||E.minFilter!==fo&&E.minFilter!==ha||E.type===Wn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Kr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(T,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ae(T,E){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",b));let Y=E.source,L=d.get(Y);L===void 0&&(L={},d.set(Y,L));let X=(function(N){let U=[];return U.push(N.wrapS),U.push(N.wrapT),U.push(N.wrapR||0),U.push(N.magFilter),U.push(N.minFilter),U.push(N.anisotropy),U.push(N.internalFormat),U.push(N.format),U.push(N.type),U.push(N.generateMipmaps),U.push(N.premultiplyAlpha),U.push(N.flipY),U.push(N.unpackAlignment),U.push(N.colorSpace),U.join()})(E);if(X!==T.__cacheKey){L[X]===void 0&&(L[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),L[X].usedTimes++;let N=L[T.__cacheKey];N!==void 0&&(L[T.__cacheKey].usedTimes--,N.usedTimes===0&&I(E)),T.__cacheKey=X,T.__webglTexture=L[X].texture}return O}function pe(T,E,O){let Y=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=r.TEXTURE_3D);let L=ae(T,E),X=E.source;t.bindTexture(Y,T.__webglTexture,r.TEXTURE0+O);let N=n.get(X);if(X.version!==N.__version||L===!0){t.activeTexture(r.TEXTURE0+O);let U=Xe.getPrimaries(Xe.workingColorSpace),z=E.colorSpace===un?null:Xe.getPrimaries(E.colorSpace),Q=E.colorSpace===un||U===z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let Z=(function(ge){return!o&&(ge.wrapS!==wn||ge.wrapT!==wn||ge.minFilter!==Lt&&ge.minFilter!==nn)})(E)&&f(E.image)===!1,x=v(E.image,Z,!1,i.maxTextureSize);x=ce(E,x);let ne=f(x)||o,B=s.convert(E.format,E.colorSpace),H,ie=s.convert(E.type),he=_(E.internalFormat,B,ie,E.colorSpace,E.isVideoTexture);V(Y,E,ne);let de=E.mipmaps,me=o&&E.isVideoTexture!==!0&&he!==Fu,Se=N.__version===void 0||L===!0,fe=M(E,x,ne);if(E.isDepthTexture)he=r.DEPTH_COMPONENT,o?he=E.type===Wn?r.DEPTH_COMPONENT32F:E.type===Vn?r.DEPTH_COMPONENT24:E.type===gi?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:E.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===vi&&he===r.DEPTH_COMPONENT&&E.type!==oc&&E.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Vn,ie=s.convert(E.type)),E.format===lr&&he===r.DEPTH_COMPONENT&&(he=r.DEPTH_STENCIL,E.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=gi,ie=s.convert(E.type))),Se&&(me?t.texStorage2D(r.TEXTURE_2D,1,he,x.width,x.height):t.texImage2D(r.TEXTURE_2D,0,he,x.width,x.height,0,B,ie,null));else if(E.isDataTexture)if(de.length>0&&ne){me&&Se&&t.texStorage2D(r.TEXTURE_2D,fe,he,de[0].width,de[0].height);for(let ge=0,we=de.length;ge<we;ge++)H=de[ge],me?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,H.width,H.height,B,ie,H.data):t.texImage2D(r.TEXTURE_2D,ge,he,H.width,H.height,0,B,ie,H.data);E.generateMipmaps=!1}else me?(Se&&t.texStorage2D(r.TEXTURE_2D,fe,he,x.width,x.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,B,ie,x.data)):t.texImage2D(r.TEXTURE_2D,0,he,x.width,x.height,0,B,ie,x.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){me&&Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,he,de[0].width,de[0].height,x.depth);for(let ge=0,we=de.length;ge<we;ge++)H=de[ge],E.format!==hn?B!==null?me?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,H.width,H.height,x.depth,B,H.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,he,H.width,H.height,x.depth,0,H.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,H.width,H.height,x.depth,B,ie,H.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ge,he,H.width,H.height,x.depth,0,B,ie,H.data)}else{me&&Se&&t.texStorage2D(r.TEXTURE_2D,fe,he,de[0].width,de[0].height);for(let ge=0,we=de.length;ge<we;ge++)H=de[ge],E.format!==hn?B!==null?me?t.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,H.width,H.height,B,H.data):t.compressedTexImage2D(r.TEXTURE_2D,ge,he,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,H.width,H.height,B,ie,H.data):t.texImage2D(r.TEXTURE_2D,ge,he,H.width,H.height,0,B,ie,H.data)}else if(E.isDataArrayTexture)me?(Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,he,x.width,x.height,x.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,x.width,x.height,x.depth,B,ie,x.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,he,x.width,x.height,x.depth,0,B,ie,x.data);else if(E.isData3DTexture)me?(Se&&t.texStorage3D(r.TEXTURE_3D,fe,he,x.width,x.height,x.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,x.width,x.height,x.depth,B,ie,x.data)):t.texImage3D(r.TEXTURE_3D,0,he,x.width,x.height,x.depth,0,B,ie,x.data);else if(E.isFramebufferTexture){if(Se)if(me)t.texStorage2D(r.TEXTURE_2D,fe,he,x.width,x.height);else{let ge=x.width,we=x.height;for(let dt=0;dt<fe;dt++)t.texImage2D(r.TEXTURE_2D,dt,he,ge,we,0,B,ie,null),ge>>=1,we>>=1}}else if(de.length>0&&ne){me&&Se&&t.texStorage2D(r.TEXTURE_2D,fe,he,de[0].width,de[0].height);for(let ge=0,we=de.length;ge<we;ge++)H=de[ge],me?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,B,ie,H):t.texImage2D(r.TEXTURE_2D,ge,he,B,ie,H);E.generateMipmaps=!1}else me?(Se&&t.texStorage2D(r.TEXTURE_2D,fe,he,x.width,x.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,B,ie,x)):t.texImage2D(r.TEXTURE_2D,0,he,B,ie,x);y(E,ne)&&g(Y),N.__version=X.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function te(T,E,O,Y,L,X){let N=s.convert(O.format,O.colorSpace),U=s.convert(O.type),z=_(O.internalFormat,N,U,O.colorSpace);if(!n.get(E).__hasExternalTextures){let Q=Math.max(1,E.width>>X),Z=Math.max(1,E.height>>X);L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?t.texImage3D(L,X,z,Q,Z,E.depth,0,N,U,null):t.texImage2D(L,X,z,Q,Z,0,N,U,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),J(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,L,n.get(O).__webglTexture,0,F(E)):(L===r.TEXTURE_2D||L>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,L,n.get(O).__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function q(T,E,O){if(r.bindRenderbuffer(r.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let Y=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||J(E)){let L=E.depthTexture;L&&L.isDepthTexture&&(L.type===Wn?Y=r.DEPTH_COMPONENT32F:L.type===Vn&&(Y=r.DEPTH_COMPONENT24));let X=F(E);J(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X,Y,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,X,Y,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,Y,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){let Y=F(E);O&&J(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,r.DEPTH24_STENCIL8,E.width,E.height):J(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Y,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{let Y=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let L=0;L<Y.length;L++){let X=Y[L],N=s.convert(X.format,X.colorSpace),U=s.convert(X.type),z=_(X.internalFormat,N,U,X.colorSpace),Q=F(E);O&&J(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,z,E.width,E.height):J(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,z,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(T){let E=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(Y,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,Y),!L.depthTexture||!L.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(L.depthTexture).__webglTexture&&L.depthTexture.image.width===L.width&&L.depthTexture.image.height===L.height||(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),D(L.depthTexture,0);let X=n.get(L.depthTexture).__webglTexture,N=F(L);if(L.depthTexture.format===vi)J(L)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0);else{if(L.depthTexture.format!==lr)throw new Error("Unknown depthTexture format");J(L)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0)}})(E.__webglFramebuffer,T)}else if(O){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]=r.createRenderbuffer(),q(E.__webglDepthbuffer[Y],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),q(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function F(T){return Math.min(i.maxSamples,T.samples)}function J(T){let E=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(T,E){let O=T.colorSpace,Y=T.format,L=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===sl||O!==Cn&&O!==un&&(Xe.getTransfer(O)===Ye?o===!1?e.has("EXT_sRGB")===!0&&Y===hn?(T.format=sl,T.minFilter=nn,T.generateMipmaps=!1):E=va.sRGBToLinear(E):Y===hn&&L===fi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}this.allocateTextureUnit=function(){let T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T},this.resetTextureUnits=function(){P=0},this.setTexture2D=D,this.setTexture2DArray=function(T,E){let O=n.get(T);T.version>0&&O.__version!==T.version?pe(O,T,E):t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+E)},this.setTexture3D=function(T,E){let O=n.get(T);T.version>0&&O.__version!==T.version?pe(O,T,E):t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+E)},this.setTextureCube=function(T,E){let O=n.get(T);T.version>0&&O.__version!==T.version?(function(Y,L,X){if(L.image.length!==6)return;let N=ae(Y,L),U=L.source;t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+X);let z=n.get(U);if(U.version!==z.__version||N===!0){t.activeTexture(r.TEXTURE0+X);let Q=Xe.getPrimaries(Xe.workingColorSpace),Z=L.colorSpace===un?null:Xe.getPrimaries(L.colorSpace),x=L.colorSpace===un||Q===Z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,x);let ne=L.isCompressedTexture||L.image[0].isCompressedTexture,B=L.image[0]&&L.image[0].isDataTexture,H=[];for(let ve=0;ve<6;ve++)H[ve]=ne||B?B?L.image[ve].image:L.image[ve]:v(L.image[ve],!1,!0,i.maxCubemapSize),H[ve]=ce(L,H[ve]);let ie=H[0],he=f(ie)||o,de=s.convert(L.format,L.colorSpace),me=s.convert(L.type),Se=_(L.internalFormat,de,me,L.colorSpace),fe=o&&L.isVideoTexture!==!0,ge=z.__version===void 0||N===!0,we,dt=M(L,ie,he);if(V(r.TEXTURE_CUBE_MAP,L,he),ne){fe&&ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Se,ie.width,ie.height);for(let ve=0;ve<6;ve++){we=H[ve].mipmaps;for(let He=0;He<we.length;He++){let Ne=we[He];L.format!==hn?de!==null?fe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,Ne.width,Ne.height,de,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,Se,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,Ne.width,Ne.height,de,me,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,Se,Ne.width,Ne.height,0,de,me,Ne.data)}}}else{we=L.mipmaps,fe&&ge&&(we.length>0&&dt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Se,H[0].width,H[0].height));for(let ve=0;ve<6;ve++)if(B){fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,H[ve].width,H[ve].height,de,me,H[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,H[ve].width,H[ve].height,0,de,me,H[ve].data);for(let He=0;He<we.length;He++){let Ne=we[He].image[ve].image;fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Ne.width,Ne.height,de,me,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,Se,Ne.width,Ne.height,0,de,me,Ne.data)}}else{fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,de,me,H[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,de,me,H[ve]);for(let He=0;He<we.length;He++){let Ne=we[He];fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,de,me,Ne.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,Se,de,me,Ne.image[ve])}}}y(L,he)&&g(r.TEXTURE_CUBE_MAP),z.__version=U.version,L.onUpdate&&L.onUpdate(L)}Y.__version=L.version})(O,T,E):t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+E)},this.rebindTextures=function(T,E,O){let Y=n.get(T);E!==void 0&&te(Y.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&ee(T)},this.setupRenderTarget=function(T){let E=T.texture,O=n.get(T),Y=n.get(E);T.addEventListener("dispose",w),T.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=E.version,a.memory.textures++);let L=T.isWebGLCubeRenderTarget===!0,X=T.isWebGLMultipleRenderTargets===!0,N=f(T)||o;if(L){O.__webglFramebuffer=[];for(let U=0;U<6;U++)if(o&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[U]=[];for(let z=0;z<E.mipmaps.length;z++)O.__webglFramebuffer[U][z]=r.createFramebuffer()}else O.__webglFramebuffer[U]=r.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let U=0;U<E.mipmaps.length;U++)O.__webglFramebuffer[U]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(X)if(i.drawBuffers){let U=T.texture;for(let z=0,Q=U.length;z<Q;z++){let Z=n.get(U[z]);Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&J(T)===!1){let U=X?E:[E];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let z=0;z<U.length;z++){let Q=U[z];O.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[z]);let Z=s.convert(Q.format,Q.colorSpace),x=s.convert(Q.type),ne=_(Q.internalFormat,Z,x,Q.colorSpace,T.isXRRenderTarget===!0),B=F(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,B,ne,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,O.__webglColorRenderbuffer[z])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),q(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(L){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),V(r.TEXTURE_CUBE_MAP,E,N);for(let U=0;U<6;U++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let z=0;z<E.mipmaps.length;z++)te(O.__webglFramebuffer[U][z],T,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+U,z);else te(O.__webglFramebuffer[U],T,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);y(E,N)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){let U=T.texture;for(let z=0,Q=U.length;z<Q;z++){let Z=U[z],x=n.get(Z);t.bindTexture(r.TEXTURE_2D,x.__webglTexture),V(r.TEXTURE_2D,Z,N),te(O.__webglFramebuffer,T,Z,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,0),y(Z,N)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let U=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?U=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,Y.__webglTexture),V(U,E,N),o&&E.mipmaps&&E.mipmaps.length>0)for(let z=0;z<E.mipmaps.length;z++)te(O.__webglFramebuffer[z],T,E,r.COLOR_ATTACHMENT0,U,z);else te(O.__webglFramebuffer,T,E,r.COLOR_ATTACHMENT0,U,0);y(E,N)&&g(U),t.unbindTexture()}T.depthBuffer&&ee(T)},this.updateRenderTargetMipmap=function(T){let E=f(T)||o,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Y=0,L=O.length;Y<L;Y++){let X=O[Y];if(y(X,E)){let N=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,U=n.get(X).__webglTexture;t.bindTexture(N,U),g(N),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(o&&T.samples>0&&J(T)===!1){let E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,Y=T.height,L=r.COLOR_BUFFER_BIT,X=[],N=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,U=n.get(T),z=T.isWebGLMultipleRenderTargets===!0;if(z)for(let Q=0;Q<E.length;Q++)t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let Q=0;Q<E.length;Q++){X.push(r.COLOR_ATTACHMENT0+Q),T.depthBuffer&&X.push(N);let Z=U.__ignoreDepthValues!==void 0&&U.__ignoreDepthValues;if(Z===!1&&(T.depthBuffer&&(L|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(L|=r.STENCIL_BUFFER_BIT)),z&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,U.__webglColorRenderbuffer[Q]),Z===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[N]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[N])),z){let x=n.get(E[Q]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,x,0)}r.blitFramebuffer(0,0,O,Y,0,0,O,Y,L,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),z)for(let Q=0;Q<E.length;Q++){t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,U.__webglColorRenderbuffer[Q]);let Z=n.get(E[Q]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.TEXTURE_2D,Z,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=te,this.useMultisampledRTT=J}function Rm(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=Xe.getTransfer(s);if(i===fi)return r.UNSIGNED_BYTE;if(i===Nu)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Uu)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===oc)return r.UNSIGNED_SHORT;if(i===Iu)return r.INT;if(i===Vn)return r.UNSIGNED_INT;if(i===Wn)return r.FLOAT;if(i===Kr)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===hn)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===vi)return r.DEPTH_COMPONENT;if(i===lr)return r.DEPTH_STENCIL;if(i===sl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===Du)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===Ou)return r.RG_INTEGER;if(i===zu)return r.RGBA_INTEGER;if(i===go||i===vo||i===_o||i===yo)if(o===Ye){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===go)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===go)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===Jc||i===Zc||i===Kc||i===Qc){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===Jc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===Fu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===eh||i===th){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===eh)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===th)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh||i===ch||i===hh||i===uh||i===dh||i===ph||i===mh||i===fh){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===nh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ch)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ph)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===xo||i===gh||i===vh){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===xo)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===_h||i===yh||i===xh){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===xo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===_h)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===gi?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var xl=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ft=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cm={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),y=this._getHandJoint(c,v);f!==null&&(y.matrix.fromArray(f.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=f.radius),y.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ml=class extends $n{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,v=t.getContextAttributes(),f=null,y=null,g=[],_=[],M=new se,R=null,b=new Pt;b.layers.enable(1),b.viewport=new at;let w=new Pt;w.layers.enable(2),w.viewport=new at;let I=[b,w],P=new xl;P.layers.enable(1),P.layers.enable(2);let D=null,j=null;function C(F){let J=_.indexOf(F.inputSource);if(J===-1)return;let ce=g[J];ce!==void 0&&(ce.update(F.inputSource,F.frame,c||a),ce.dispatchEvent({type:F.type,data:F.inputSource}))}function G(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",V);for(let F=0;F<g.length;F++){let J=_[F];J!==null&&(_[F]=null,g[F].disconnect(J))}D=null,j=null,e.setRenderTarget(f),p=null,d=null,u=null,i=null,y=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function V(F){for(let J=0;J<F.removed.length;J++){let ce=F.removed[J],T=_.indexOf(ce);T>=0&&(_[T]=null,g[T].disconnect(ce))}for(let J=0;J<F.added.length;J++){let ce=F.added[J],T=_.indexOf(ce);if(T===-1){for(let O=0;O<g.length;O++){if(O>=_.length){_.push(ce),T=O;break}if(_[O]===null){_[O]=ce,T=O;break}}if(T===-1)break}let E=g[T];E&&E.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let J=g[F];return J===void 0&&(J=new Yr,g[F]=J),J.getTargetRaySpace()},this.getControllerGrip=function(F){let J=g[F];return J===void 0&&(J=new Yr,g[F]=J),J.getGripSpace()},this.getHand=function(F){let J=g[F];return J===void 0&&(J=new Yr,g[F]=J),J.getHandSpace()},this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",G),i.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:i.renderState.layers!==void 0||v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ln(p.framebufferWidth,p.framebufferHeight,{format:hn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,ce=null,T=null;v.depth&&(T=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=v.stencil?lr:vi,ce=v.stencil?gi:Vn);let E={colorFormat:t.RGBA8,depthFormat:T,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(E),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ln(d.textureWidth,d.textureHeight,{format:hn,type:fi,depthTexture:new Ta(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let ae=new S,pe=new S;function te(F,J){J===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(J.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;P.near=w.near=b.near=F.near,P.far=w.far=b.far=F.far,D===P.near&&j===P.far||(i.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,j=P.far);let J=F.parent,ce=P.cameras;te(P,J);for(let T=0;T<ce.length;T++)te(ce[T],J);ce.length===2?(function(T,E,O){ae.setFromMatrixPosition(E.matrixWorld),pe.setFromMatrixPosition(O.matrixWorld);let Y=ae.distanceTo(pe),L=E.projectionMatrix.elements,X=O.projectionMatrix.elements,N=L[14]/(L[10]-1),U=L[14]/(L[10]+1),z=(L[9]+1)/L[5],Q=(L[9]-1)/L[5],Z=(L[8]-1)/L[0],x=(X[8]+1)/X[0],ne=N*Z,B=N*x,H=Y/(-Z+x),ie=H*-Z;E.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ie),T.translateZ(H),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();let he=N+H,de=U+H,me=ne-ie,Se=B+(Y-ie),fe=z*U/de*he,ge=Q*U/de*he;T.projectionMatrix.makePerspective(me,Se,fe,ge,he,de),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()})(P,b,w):P.projectionMatrix.copy(b.projectionMatrix),(function(T,E,O){O===null?T.matrix.copy(E.matrixWorld):(T.matrix.copy(O.matrixWorld),T.matrix.invert(),T.matrix.multiply(E.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(E.projectionMatrix),T.projectionMatrixInverse.copy(E.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*al*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)})(F,P,J)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let q=null,ee=new Wu;ee.setAnimationLoop((function(F,J){if(h=J.getViewerPose(c||a),m=J,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let T=!1;ce.length!==P.cameras.length&&(P.cameras.length=0,T=!0);for(let E=0;E<ce.length;E++){let O=ce[E],Y=null;if(p!==null)Y=p.getViewport(O);else{let X=u.getViewSubImage(d,O);Y=X.viewport,E===0&&(e.setRenderTargetTextures(y,X.colorTexture,d.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(y))}let L=I[E];L===void 0&&(L=new Pt,L.layers.enable(E),L.viewport=new at,I[E]=L),L.matrix.fromArray(O.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(O.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Y.x,Y.y,Y.width,Y.height),E===0&&(P.matrix.copy(L.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),T===!0&&P.cameras.push(L)}}for(let ce=0;ce<g.length;ce++){let T=_[ce],E=g[ce];T!==null&&E!==void 0&&E.update(T,J,c||a)}q&&q(F,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null})),this.setAnimationLoop=function(F){q=F},this.dispose=function(){}}};function Lm(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Tt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Tt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Vu(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Pm(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,p,m){let v=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let y=m[f];if(typeof v=="number"||typeof v=="boolean"){if(y!==v)return m[f]=v,!0}else if(y.equals(v)===!1)return y.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(f){let y=f.uniforms,g=0,_=16;for(let R=0,b=y.length;R<b;R++){let w=Array.isArray(y[R])?y[R]:[y[R]];for(let I=0,P=w.length;I<P;I++){let D=w[I],j=Array.isArray(D.value)?D.value:[D.value];for(let C=0,G=j.length;C<G;C++){let V=c(j[C]),ae=g%_;ae!==0&&_-ae<V.boundary&&(g+=_-ae),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=V.storage}}}let M=g%_;M>0&&(g+=_-M),f.__size=g,f.__cache={}})(u),p=(function(f){let y=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=y;let g=r.createBuffer(),_=f.__size,M=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,_,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,g),g})(u),i[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let v=e.render.frame;s[u.id]!==v&&((function(f){let y=i[f.id],g=f.uniforms,_=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,R=g.length;M<R;M++){let b=Array.isArray(g[M])?g[M]:[g[M]];for(let w=0,I=b.length;w<I;w++){let P=b[w];if(l(P,M,w,_)===!0){let D=P.__offset,j=Array.isArray(P.value)?P.value:[P.value],C=0;for(let G=0;G<j.length;G++){let V=j[G],ae=c(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,D+C,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,C),C+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var ns=class{constructor(e={}){let{canvas:t=Hd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),m=new Int32Array(4),v=null,f=null,y=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=it,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;let _=this,M=!1,R=0,b=0,w=null,I=-1,P=null,D=new at,j=new at,C=null,G=new ye(0),V=0,ae=t.width,pe=t.height,te=1,q=null,ee=null,F=new at(0,0,ae,pe),J=new at(0,0,ae,pe),ce=!1,T=new dr,E=!1,O=!1,Y=null,L=new Ae,X=new se,N=new S,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return w===null?te:1}let Q,Z,x,ne,B,H,ie,he,de,me,Se,fe,ge,we,dt,ve,He,Ne,Ss,Ui,bs,Vt,Ot,Di,W=n;function Es(A,k){for(let $=0;$<A.length;$++){let re=A[$],K=t.getContext(re,k);if(K!==null)return K}return null}try{let A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Nc,!1),t.addEventListener("webglcontextrestored",Uc,!1),t.addEventListener("webglcontextcreationerror",Dc,!1),W===null){let k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),W=Es(k,A),W===null)throw Es(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}function Or(){Q=new dp(W),Z=new lp(W,Q,e),Q.init(Z),Vt=new Rm(W,Q,Z),x=new wm(W,Q,Z),ne=new fp(W),B=new vm,H=new Am(W,Q,x,B,Z,Vt,ne),ie=new hp(_),he=new up(_),de=new rp(W,Z),Ot=new ap(W,Q,de,Z),me=new pp(W,de,ne,Ot),Se=new yp(W,me,de,ne),Ss=new _p(W,Z,H),ve=new cp(B),fe=new gm(_,ie,he,Q,Z,Ot,ve),ge=new Lm(_,B),we=new ym,dt=new Em(Q,Z),Ne=new sp(_,ie,he,x,Se,d,l),He=new Tm(_,Se,Z),Di=new Pm(W,ne,Z,x),Ui=new op(W,Q,ne,Z),bs=new mp(W,Q,ne,Z),ne.programs=fe.programs,_.capabilities=Z,_.extensions=Q,_.properties=B,_.renderLists=we,_.shadowMap=He,_.state=x,_.info=ne}Or();let Mt=new Ml(_,W);function Nc(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Uc(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=ne.autoReset,k=He.enabled,$=He.autoUpdate,re=He.needsUpdate,K=He.type;Or(),ne.autoReset=A,He.enabled=k,He.autoUpdate=$,He.needsUpdate=re,He.type=K}function Dc(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oc(A){let k=A.target;k.removeEventListener("dispose",Oc),(function($){(function(re){let K=B.get(re).programs;K!==void 0&&(K.forEach((function(ue){fe.releaseProgram(ue)})),re.isShaderMaterial&&fe.releaseShaderCache(re))})($),B.remove($)})(k)}function zc(A,k,$){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=Tt,A.needsUpdate=!0,ws(A,k,$),A.side=Yn,A.needsUpdate=!0,ws(A,k,$),A.side=2):ws(A,k,$)}this.xr=Mt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let A=Q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(ae,pe,!1))},this.getSize=function(A){return A.set(ae,pe)},this.setSize=function(A,k,$=!0){Mt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ae=A,pe=k,t.width=Math.floor(A*te),t.height=Math.floor(k*te),$===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k))},this.getDrawingBufferSize=function(A){return A.set(ae*te,pe*te).floor()},this.setDrawingBufferSize=function(A,k,$){ae=A,pe=k,te=$,t.width=Math.floor(A*$),t.height=Math.floor(k*$),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,k,$,re){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,k,$,re),x.viewport(D.copy(F).multiplyScalar(te).floor())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,k,$,re){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,k,$,re),x.scissor(j.copy(J).multiplyScalar(te).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){x.setScissorTest(ce=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(A=!0,k=!0,$=!0){let re=0;if(A){let K=!1;if(w!==null){let ue=w.texture.format;K=ue===zu||ue===Ou||ue===Du}if(K){let ue=w.texture.type,_e=ue===fi||ue===Vn||ue===oc||ue===gi||ue===Nu||ue===Uu,xe=Ne.getClearColor(),Ce=Ne.getClearAlpha(),Pe=xe.r,Ue=xe.g,ze=xe.b;_e?(p[0]=Pe,p[1]=Ue,p[2]=ze,p[3]=Ce,W.clearBufferuiv(W.COLOR,0,p)):(m[0]=Pe,m[1]=Ue,m[2]=ze,m[3]=Ce,W.clearBufferiv(W.COLOR,0,m))}else re|=W.COLOR_BUFFER_BIT}k&&(re|=W.DEPTH_BUFFER_BIT),$&&(re|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Nc,!1),t.removeEventListener("webglcontextrestored",Uc,!1),t.removeEventListener("webglcontextcreationerror",Dc,!1),we.dispose(),dt.dispose(),B.dispose(),ie.dispose(),he.dispose(),Se.dispose(),Ot.dispose(),Di.dispose(),fe.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Fc),Mt.removeEventListener("sessionend",Bc),Y&&(Y.dispose(),Y=null),ii.stop()},this.renderBufferDirect=function(A,k,$,re,K,ue){k===null&&(k=U);let _e=K.isMesh&&K.matrixWorld.determinant()<0,xe=(function(lt,Wt,It,Fe,ke){Wt.isScene!==!0&&(Wt=U),H.resetTextureUnits();let zr=Wt.fog,ho=Fe.isMeshStandardMaterial?Wt.environment:null,Md=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Cn,As=(Fe.isMeshStandardMaterial?he:ie).get(Fe.envMap||ho),Sd=Fe.vertexColors===!0&&!!It.attributes.color&&It.attributes.color.itemSize===4,bd=!!It.attributes.tangent&&(!!Fe.normalMap||Fe.anisotropy>0),Ed=!!It.morphAttributes.position,Td=!!It.morphAttributes.normal,wd=!!It.morphAttributes.color,Xc=jn;Fe.toneMapped&&(w!==null&&w.isXRRenderTarget!==!0||(Xc=_.toneMapping));let jc=It.morphAttributes.position||It.morphAttributes.normal||It.morphAttributes.color,Ad=jc!==void 0?jc.length:0,Ve=B.get(Fe),Rd=f.state.lights;if(E===!0&&(O===!0||lt!==P)){let Xt=lt===P&&Fe.id===I;ve.setState(Fe,lt,Xt)}let Zt=!1;Fe.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==Rd.state.version||Ve.outputColorSpace!==Md||ke.isBatchedMesh&&Ve.batching===!1?Zt=!0:ke.isBatchedMesh||Ve.batching!==!0?ke.isInstancedMesh&&Ve.instancing===!1?Zt=!0:ke.isInstancedMesh||Ve.instancing!==!0?ke.isSkinnedMesh&&Ve.skinning===!1?Zt=!0:ke.isSkinnedMesh||Ve.skinning!==!0?ke.isInstancedMesh&&Ve.instancingColor===!0&&ke.instanceColor===null||ke.isInstancedMesh&&Ve.instancingColor===!1&&ke.instanceColor!==null||Ve.envMap!==As||Fe.fog===!0&&Ve.fog!==zr?Zt=!0:Ve.numClippingPlanes===void 0||Ve.numClippingPlanes===ve.numPlanes&&Ve.numIntersection===ve.numIntersection?(Ve.vertexAlphas!==Sd||Ve.vertexTangents!==bd||Ve.morphTargets!==Ed||Ve.morphNormals!==Td||Ve.morphColors!==wd||Ve.toneMapping!==Xc||Z.isWebGL2===!0&&Ve.morphTargetsCount!==Ad)&&(Zt=!0):Zt=!0:Zt=!0:Zt=!0:Zt=!0:(Zt=!0,Ve.__version=Fe.version);let si=Ve.currentProgram;Zt===!0&&(si=ws(Fe,Wt,ke));let qc=!1,Fr=!1,uo=!1,St=si.getUniforms(),ai=Ve.uniforms;if(x.useProgram(si.program)&&(qc=!0,Fr=!0,uo=!0),Fe.id!==I&&(I=Fe.id,Fr=!0),qc||P!==lt){St.setValue(W,"projectionMatrix",lt.projectionMatrix),St.setValue(W,"viewMatrix",lt.matrixWorldInverse);let Xt=St.map.cameraPosition;Xt!==void 0&&Xt.setValue(W,N.setFromMatrixPosition(lt.matrixWorld)),Z.logarithmicDepthBuffer&&St.setValue(W,"logDepthBufFC",2/(Math.log(lt.far+1)/Math.LN2)),(Fe.isMeshPhongMaterial||Fe.isMeshToonMaterial||Fe.isMeshLambertMaterial||Fe.isMeshBasicMaterial||Fe.isMeshStandardMaterial||Fe.isShaderMaterial)&&St.setValue(W,"isOrthographic",lt.isOrthographicCamera===!0),P!==lt&&(P=lt,Fr=!0,uo=!0)}if(ke.isSkinnedMesh){St.setOptional(W,ke,"bindMatrix"),St.setOptional(W,ke,"bindMatrixInverse");let Xt=ke.skeleton;Xt&&(Z.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),St.setValue(W,"boneTexture",Xt.boneTexture,H)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ke.isBatchedMesh&&(St.setOptional(W,ke,"batchingTexture"),St.setValue(W,"batchingTexture",ke._matricesTexture,H));let po=It.morphAttributes;(po.position!==void 0||po.normal!==void 0||po.color!==void 0&&Z.isWebGL2===!0)&&Ss.update(ke,It,si),(Fr||Ve.receiveShadow!==ke.receiveShadow)&&(Ve.receiveShadow=ke.receiveShadow,St.setValue(W,"receiveShadow",ke.receiveShadow)),Fe.isMeshGouraudMaterial&&Fe.envMap!==null&&(ai.envMap.value=As,ai.flipEnvMap.value=As.isCubeTexture&&As.isRenderTargetTexture===!1?-1:1),Fr&&(St.setValue(W,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&(Kt=uo,(ln=ai).ambientLightColor.needsUpdate=Kt,ln.lightProbe.needsUpdate=Kt,ln.directionalLights.needsUpdate=Kt,ln.directionalLightShadows.needsUpdate=Kt,ln.pointLights.needsUpdate=Kt,ln.pointLightShadows.needsUpdate=Kt,ln.spotLights.needsUpdate=Kt,ln.spotLightShadows.needsUpdate=Kt,ln.rectAreaLights.needsUpdate=Kt,ln.hemisphereLights.needsUpdate=Kt),zr&&Fe.fog===!0&&ge.refreshFogUniforms(ai,zr),ge.refreshMaterialUniforms(ai,Fe,te,pe,Y),rr.upload(W,Vc(Ve),ai,H));var ln,Kt;if(Fe.isShaderMaterial&&Fe.uniformsNeedUpdate===!0&&(rr.upload(W,Vc(Ve),ai,H),Fe.uniformsNeedUpdate=!1),Fe.isSpriteMaterial&&St.setValue(W,"center",ke.center),St.setValue(W,"modelViewMatrix",ke.modelViewMatrix),St.setValue(W,"normalMatrix",ke.normalMatrix),St.setValue(W,"modelMatrix",ke.matrixWorld),Fe.isShaderMaterial||Fe.isRawShaderMaterial){let Xt=Fe.uniformsGroups;for(let mo=0,Cd=Xt.length;mo<Cd;mo++)if(Z.isWebGL2){let Yc=Xt[mo];Di.update(Yc,si),Di.bind(Yc,si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return si})(A,k,$,re,K);x.setMaterial(re,_e);let Ce=$.index,Pe=1;if(re.wireframe===!0){if(Ce=me.getWireframeAttribute($),Ce===void 0)return;Pe=2}let Ue=$.drawRange,ze=$.attributes.position,Ze=Ue.start*Pe,Jt=(Ue.start+Ue.count)*Pe;ue!==null&&(Ze=Math.max(Ze,ue.start*Pe),Jt=Math.min(Jt,(ue.start+ue.count)*Pe)),Ce!==null?(Ze=Math.max(Ze,0),Jt=Math.min(Jt,Ce.count)):ze!=null&&(Ze=Math.max(Ze,0),Jt=Math.min(Jt,ze.count));let _n=Jt-Ze;if(_n<0||_n===1/0)return;let ri;Ot.setup(K,re,xe,$,Ce);let Ke=Ui;if(Ce!==null&&(ri=de.get(Ce),Ke=bs,Ke.setIndex(ri)),K.isMesh)re.wireframe===!0?(x.setLineWidth(re.wireframeLinewidth*z()),Ke.setMode(W.LINES)):Ke.setMode(W.TRIANGLES);else if(K.isLine){let lt=re.linewidth;lt===void 0&&(lt=1),x.setLineWidth(lt*z()),K.isLineSegments?Ke.setMode(W.LINES):K.isLineLoop?Ke.setMode(W.LINE_LOOP):Ke.setMode(W.LINE_STRIP)}else K.isPoints?Ke.setMode(W.POINTS):K.isSprite&&Ke.setMode(W.TRIANGLES);if(K.isBatchedMesh)Ke.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Ke.renderInstances(Ze,_n,K.count);else if($.isInstancedBufferGeometry){let lt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Wt=Math.min($.instanceCount,lt);Ke.renderInstances(Ze,_n,Wt)}else Ke.render(Ze,_n)},this.compile=function(A,k,$=null){$===null&&($=A),f=dt.get($),f.init(),g.push(f),$.traverseVisible((function(K){K.isLight&&K.layers.test(k.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))})),A!==$&&A.traverseVisible((function(K){K.isLight&&K.layers.test(k.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))})),f.setupLights(_._useLegacyLights);let re=new Set;return A.traverse((function(K){let ue=K.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){let xe=ue[_e];zc(xe,$,K),re.add(xe)}else zc(ue,$,K),re.add(ue)})),g.pop(),f=null,re},this.compileAsync=function(A,k,$=null){let re=this.compile(A,k,$);return new Promise((K=>{function ue(){re.forEach((function(_e){B.get(_e).currentProgram.isReady()&&re.delete(_e)})),re.size!==0?setTimeout(ue,10):K(A)}Q.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)}))};let co=null;function Fc(){ii.stop()}function Bc(){ii.start()}let ii=new Wu;function Hc(A,k,$,re){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||T.intersectsSprite(A)){re&&N.setFromMatrixPosition(A.matrixWorld).applyMatrix4(L);let ue=Se.update(A),_e=A.material;_e.visible&&v.push(A,ue,_e,$,N.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||T.intersectsObject(A))){let ue=Se.update(A),_e=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),N.copy(A.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),N.copy(ue.boundingSphere.center)),N.applyMatrix4(A.matrixWorld).applyMatrix4(L)),Array.isArray(_e)){let xe=ue.groups;for(let Ce=0,Pe=xe.length;Ce<Pe;Ce++){let Ue=xe[Ce],ze=_e[Ue.materialIndex];ze&&ze.visible&&v.push(A,ue,ze,$,N.z,Ue)}}else _e.visible&&v.push(A,ue,_e,$,N.z,null)}}let K=A.children;for(let ue=0,_e=K.length;ue<_e;ue++)Hc(K[ue],k,$,re)}function kc(A,k,$,re){let K=A.opaque,ue=A.transmissive,_e=A.transparent;f.setupLightsView($),E===!0&&ve.setGlobalState(_.clippingPlanes,$),ue.length>0&&(function(xe,Ce,Pe,Ue){if((Pe.isScene===!0?Pe.overrideMaterial:null)!==null)return;let Ze=Z.isWebGL2;Y===null&&(Y=new Ln(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Kr:fi,minFilter:ha,samples:Ze?4:0})),_.getDrawingBufferSize(X),Ze?Y.setSize(X.x,X.y):Y.setSize(ol(X.x),ol(X.y));let Jt=_.getRenderTarget();_.setRenderTarget(Y),_.getClearColor(G),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear();let _n=_.toneMapping;_.toneMapping=jn,Ts(xe,Pe,Ue),H.updateMultisampleRenderTarget(Y),H.updateRenderTargetMipmap(Y);let ri=!1;for(let Ke=0,lt=Ce.length;Ke<lt;Ke++){let Wt=Ce[Ke],It=Wt.object,Fe=Wt.geometry,ke=Wt.material,zr=Wt.group;if(ke.side===2&&It.layers.test(Ue.layers)){let ho=ke.side;ke.side=Tt,ke.needsUpdate=!0,Gc(It,Pe,Ue,Fe,ke,zr),ke.side=ho,ke.needsUpdate=!0,ri=!0}}ri===!0&&(H.updateMultisampleRenderTarget(Y),H.updateRenderTargetMipmap(Y)),_.setRenderTarget(Jt),_.setClearColor(G,V),_.toneMapping=_n})(K,ue,k,$),re&&x.viewport(D.copy(re)),K.length>0&&Ts(K,k,$),ue.length>0&&Ts(ue,k,$),_e.length>0&&Ts(_e,k,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ts(A,k,$){let re=k.isScene===!0?k.overrideMaterial:null;for(let K=0,ue=A.length;K<ue;K++){let _e=A[K],xe=_e.object,Ce=_e.geometry,Pe=re===null?_e.material:re,Ue=_e.group;xe.layers.test($.layers)&&Gc(xe,k,$,Ce,Pe,Ue)}}function Gc(A,k,$,re,K,ue){A.onBeforeRender(_,k,$,re,K,ue),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(_,k,$,re,A,ue),K.transparent===!0&&K.side===2&&K.forceSinglePass===!1?(K.side=Tt,K.needsUpdate=!0,_.renderBufferDirect($,k,re,K,A,ue),K.side=Yn,K.needsUpdate=!0,_.renderBufferDirect($,k,re,K,A,ue),K.side=2):_.renderBufferDirect($,k,re,K,A,ue),A.onAfterRender(_,k,$,re,K,ue)}function ws(A,k,$){k.isScene!==!0&&(k=U);let re=B.get(A),K=f.state.lights,ue=f.state.shadowsArray,_e=K.state.version,xe=fe.getParameters(A,K.state,ue,k,$),Ce=fe.getProgramCacheKey(xe),Pe=re.programs;re.environment=A.isMeshStandardMaterial?k.environment:null,re.fog=k.fog,re.envMap=(A.isMeshStandardMaterial?he:ie).get(A.envMap||re.environment),Pe===void 0&&(A.addEventListener("dispose",Oc),Pe=new Map,re.programs=Pe);let Ue=Pe.get(Ce);if(Ue!==void 0){if(re.currentProgram===Ue&&re.lightsStateVersion===_e)return Wc(A,xe),Ue}else xe.uniforms=fe.getUniforms(A),A.onBuild($,xe,_),A.onBeforeCompile(xe,_),Ue=fe.acquireProgram(xe,Ce),Pe.set(Ce,Ue),re.uniforms=xe.uniforms;let ze=re.uniforms;return(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(ze.clippingPlanes=ve.uniform),Wc(A,xe),re.needsLights=(function(Ze){return Ze.isMeshLambertMaterial||Ze.isMeshToonMaterial||Ze.isMeshPhongMaterial||Ze.isMeshStandardMaterial||Ze.isShadowMaterial||Ze.isShaderMaterial&&Ze.lights===!0})(A),re.lightsStateVersion=_e,re.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMap.value=K.state.directionalShadowMap,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotShadowMap.value=K.state.spotShadowMap,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMap.value=K.state.pointShadowMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix),re.currentProgram=Ue,re.uniformsList=null,Ue}function Vc(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=rr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Wc(A,k){let $=B.get(A);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}ii.setAnimationLoop((function(A){co&&co(A)})),typeof self!="undefined"&&ii.setContext(self),this.setAnimationLoop=function(A){co=A,Mt.setAnimationLoop(A),A===null?ii.stop():ii.start()},Mt.addEventListener("sessionstart",Fc),Mt.addEventListener("sessionend",Bc),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(k),k=Mt.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,k,w),f=dt.get(A,g.length),f.init(),g.push(f),L.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),T.setFromProjectionMatrix(L),O=this.localClippingEnabled,E=ve.init(this.clippingPlanes,O),v=we.get(A,y.length),v.init(),y.push(v),Hc(A,k,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(q,ee),this.info.render.frame++,E===!0&&ve.beginShadows();let $=f.state.shadowsArray;if(He.render($,A,k),E===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ne.render(v,A),f.setupLights(_._useLegacyLights),k.isArrayCamera){let re=k.cameras;for(let K=0,ue=re.length;K<ue;K++){let _e=re[K];kc(v,A,_e,_e.viewport)}}else kc(v,A,k);w!==null&&(H.updateMultisampleRenderTarget(w),H.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(_,A,k),Ot.resetDefaultState(),I=-1,P=null,g.pop(),f=g.length>0?g[g.length-1]:null,y.pop(),v=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,k,$){B.get(A.texture).__webglTexture=k,B.get(A.depthTexture).__webglTexture=$;let re=B.get(A);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=$===void 0,re.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){let $=B.get(A);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,$=0){w=A,R=k,b=$;let re=!0,K=null,ue=!1,_e=!1;if(A){let xe=B.get(A);xe.__useDefaultFramebuffer!==void 0?(x.bindFramebuffer(W.FRAMEBUFFER,null),re=!1):xe.__webglFramebuffer===void 0?H.setupRenderTarget(A):xe.__hasExternalTextures&&H.rebindTextures(A,B.get(A.texture).__webglTexture,B.get(A.depthTexture).__webglTexture);let Ce=A.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(_e=!0);let Pe=B.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=Array.isArray(Pe[k])?Pe[k][$]:Pe[k],ue=!0):K=Z.isWebGL2&&A.samples>0&&H.useMultisampledRTT(A)===!1?B.get(A).__webglMultisampledFramebuffer:Array.isArray(Pe)?Pe[$]:Pe,D.copy(A.viewport),j.copy(A.scissor),C=A.scissorTest}else D.copy(F).multiplyScalar(te).floor(),j.copy(J).multiplyScalar(te).floor(),C=ce;if(x.bindFramebuffer(W.FRAMEBUFFER,K)&&Z.drawBuffers&&re&&x.drawBuffers(A,K),x.viewport(D),x.scissor(j),x.setScissorTest(C),ue){let xe=B.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,xe.__webglTexture,$)}else if(_e){let xe=B.get(A.texture),Ce=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,xe.__webglTexture,$||0,Ce)}I=-1},this.readRenderTargetPixels=function(A,k,$,re,K,ue,_e){if(!A||!A.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=B.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){x.bindFramebuffer(W.FRAMEBUFFER,xe);try{let Ce=A.texture,Pe=Ce.format,Ue=Ce.type;if(Pe!==hn&&Vt.convert(Pe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let ze=Ue===Kr&&(Q.has("EXT_color_buffer_half_float")||Z.isWebGL2&&Q.has("EXT_color_buffer_float"));if(!(Ue===fi||Vt.convert(Ue)===W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)||Ue===Wn&&(Z.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float"))||ze))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");k>=0&&k<=A.width-re&&$>=0&&$<=A.height-K&&W.readPixels(k,$,re,K,Vt.convert(Pe),Vt.convert(Ue),ue)}finally{let Ce=w!==null?B.get(w).__webglFramebuffer:null;x.bindFramebuffer(W.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,k,$=0){let re=Math.pow(2,-$),K=Math.floor(k.image.width*re),ue=Math.floor(k.image.height*re);H.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,$,0,0,A.x,A.y,K,ue),x.unbindTexture()},this.copyTextureToTexture=function(A,k,$,re=0){let K=k.image.width,ue=k.image.height,_e=Vt.convert($.format),xe=Vt.convert($.type);H.setTexture2D($,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,re,A.x,A.y,K,ue,_e,xe,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,re,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,_e,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,re,A.x,A.y,_e,xe,k.image),re===0&&$.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),x.unbindTexture()},this.copyTextureToTexture3D=function(A,k,$,re,K=0){if(_.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ue=A.max.x-A.min.x+1,_e=A.max.y-A.min.y+1,xe=A.max.z-A.min.z+1,Ce=Vt.convert(re.format),Pe=Vt.convert(re.type),Ue;if(re.isData3DTexture)H.setTexture3D(re,0),Ue=W.TEXTURE_3D;else{if(!re.isDataArrayTexture&&!re.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");H.setTexture2DArray(re,0),Ue=W.TEXTURE_2D_ARRAY}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,re.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,re.unpackAlignment);let ze=W.getParameter(W.UNPACK_ROW_LENGTH),Ze=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Jt=W.getParameter(W.UNPACK_SKIP_PIXELS),_n=W.getParameter(W.UNPACK_SKIP_ROWS),ri=W.getParameter(W.UNPACK_SKIP_IMAGES),Ke=$.isCompressedTexture?$.mipmaps[K]:$.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Ke.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ke.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,A.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,A.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?W.texSubImage3D(Ue,K,k.x,k.y,k.z,ue,_e,xe,Ce,Pe,Ke.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ue,K,k.x,k.y,k.z,ue,_e,xe,Ce,Ke.data)):W.texSubImage3D(Ue,K,k.x,k.y,k.z,ue,_e,xe,Ce,Pe,Ke),W.pixelStorei(W.UNPACK_ROW_LENGTH,ze),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ze),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Jt),W.pixelStorei(W.UNPACK_SKIP_ROWS,_n),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ri),K===0&&re.generateMipmaps&&W.generateMipmap(Ue),x.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?H.setTextureCube(A,0):A.isData3DTexture?H.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?H.setTexture2DArray(A,0):H.setTexture2D(A,0),x.unbindTexture()},this.resetState=function(){R=0,b=0,w=null,x.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===lc?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Xa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?_i:Bu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_i?it:Cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Sl=class extends ns{};Sl.prototype.isWebGL1Renderer=!0;var wa=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},bl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rt=new S,Aa=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fn=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ki,Wr=new S,Qi=new S,er=new S,tr=new se,Xr=new se,Ju=new Ae,Js=new S,jr=new S,Zs=new S,cu=new se,Xo=new se,hu=new se,In=class extends xt{constructor(e=new fn){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new Ge;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bl(t,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new Aa(n,3,0,!1)),Ki.setAttribute("uv",new Aa(n,2,3,!1))}this.geometry=Ki,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),Ju.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-er.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Ks(Js.set(-.5,-.5,0),er,a,Qi,i,s),Ks(jr.set(.5,-.5,0),er,a,Qi,i,s),Ks(Zs.set(.5,.5,0),er,a,Qi,i,s),cu.set(0,0),Xo.set(1,0),hu.set(1,1);let o=e.ray.intersectTriangle(Js,jr,Zs,!1,Wr);if(o===null&&(Ks(jr.set(-.5,.5,0),er,a,Qi,i,s),Xo.set(0,1),o=e.ray.intersectTriangle(Js,Zs,jr,!1,Wr),o===null))return;let l=e.ray.origin.distanceTo(Wr);l<e.near||l>e.far||t.push({distance:l,point:Wr.clone(),uv:Xn.getInterpolation(Wr,Js,jr,Zs,cu,Xo,hu,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ks(r,e,t,n,i,s){tr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Xr.x=s*tr.x-i*tr.y,Xr.y=i*tr.x+s*tr.y):Xr.copy(tr),r.copy(e),r.x+=Xr.x,r.y+=Xr.y,r.applyMatrix4(Ju)}var Yf=new S,$f=new S;var Jf=new S,Zf=new at,Kf=new at,Qf=new S,eg=new Ae,tg=new S,ng=new pn,ig=new Ae,rg=new yi;var sg=new Ae,ag=new Ae;var og=new Ae,lg=new Ae;var cg=new dn,hg=new Ae,ug=new qe,dg=new pn;var El=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var pg=new Ae,mg=new Ae,fg=new Ae,gg=new Ae,vg=new dr,_g=new dn,yg=new pn,xg=new S,Mg=new El,Sg=new qe;var Nn=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uu=new S,du=new S,pu=new Ae,jo=new yi,Qs=new pn,Un=class extends xt{constructor(e=new Ge,t=new Nn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)uu.fromBufferAttribute(t,i-1),du.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=uu.distanceTo(du);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(i),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;pu.copy(i).invert(),jo.copy(e.ray).applyMatrix4(pu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new S,h=new S,u=new S,d=new S,p=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null)for(let f=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count)-1;f<y;f+=p){let g=m.getX(f),_=m.getX(f+1);if(c.fromBufferAttribute(v,g),h.fromBufferAttribute(v,_),jo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}else for(let f=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count)-1;f<y;f+=p){if(c.fromBufferAttribute(v,f),h.fromBufferAttribute(v,f+1),jo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(d);g<e.near||g>e.far||t.push({distance:g,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}},mu=new S,fu=new S,Ra=class extends Un{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)mu.fromBufferAttribute(t,i),fu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mu.distanceTo(fu);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var is=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gu=new Ae,Tl=new yi,ea=new pn,ta=new S,mr=class extends xt{constructor(e=new Ge,t=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=s,e.ray.intersectsSphere(ea)===!1)return;gu.copy(i).invert(),Tl.copy(e.ray).applyMatrix4(gu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);ta.fromBufferAttribute(h,p),vu(ta,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)ta.fromBufferAttribute(h,u),vu(ta,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function vu(r,e,t,n,i,s,a){let o=Tl.distanceSqToPoint(r);if(o<t){let l=new S;Tl.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var fr=class extends Bt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new se:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,i=[],s=[],a=[],o=new S,l=new Ae;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new S)}s[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(mt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(mt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},rs=class extends qt{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new se,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wl=class extends rs{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var na=new S,qo=new hc,Yo=new hc,$o=new hc,Al=class extends qt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(na.subVectors(i[0],i[1]).add(i[0]),o=na);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(na.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=na),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),m<1e-4&&(m=v),f<1e-4&&(f=v),qo.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,v,f),Yo.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,v,f),$o.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,v,f)}else this.curveType==="catmullrom"&&(qo.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Yo.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),$o.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(qo.calc(h),Yo.calc(h),$o.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _u(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function $r(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function Jr(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var Ca=class extends qt{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Jr(e,i.x,s.x,a.x,o.x),Jr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rl=class extends qt{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Jr(e,i.x,s.x,a.x,o.x),Jr(e,i.y,s.y,a.y,o.y),Jr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},La=class extends qt{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends qt{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends qt{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set($r(e,i.x,s.x,a.x),$r(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends qt{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set($r(e,i.x,s.x,a.x),$r(e,i.y,s.y,a.y),$r(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(_u(o,l.x,c.x,h.x,u.x),_u(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new se().fromArray(i))}return this}},Ua=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:Al,CubicBezierCurve:Ca,CubicBezierCurve3:Rl,EllipseCurve:rs,LineCurve:La,LineCurve3:Cl,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:Ia,SplineCurve:Na}),Ll=class extends qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ua[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ua[i.type]().fromJSON(i))}return this}},ss=class extends Ll{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new La(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Pa(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Ca(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Na(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new rs(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Da=class r extends Ge{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=mt(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new S,d=new se,p=new S,m=new S,v=new S,f=0,y=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:f=e[g+1].x-e[g].x,y=e[g+1].y-e[g].y,p.x=1*y,p.y=-f,p.z=0*y,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:f=e[g+1].x-e[g].x,y=e[g+1].y-e[g].y,p.x=1*y,p.y=-f,p.z=0*y,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(m)}for(let g=0;g<=t;g++){let _=n+g*h*i,M=Math.sin(_),R=Math.cos(_);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*M,u.y=e[b].y,u.z=e[b].x*R,a.push(u.x,u.y,u.z),d.x=g/t,d.y=b/(e.length-1),o.push(d.x,d.y);let w=l[3*b+0]*M,I=l[3*b+1],P=l[3*b+0]*R;c.push(w,I,P)}}for(let g=0;g<t;g++)for(let _=0;_<e.length-1;_++){let M=_+g*e.length,R=M,b=M+e.length,w=M+e.length+1,I=M+1;s.push(R,b,I),s.push(w,I,b)}this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(o,2)),this.setAttribute("normal",new Me(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Pl=class r extends Da{constructor(e=1,t=1,n=4,i=8){let s=new ss;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Il=class r extends Ge{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new S,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Oa=class r extends Ge{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,v=[],f=n/2,y=0;function g(_){let M=m,R=new se,b=new S,w=0,I=_===!0?e:t,P=_===!0?1:-1;for(let j=1;j<=i;j++)u.push(0,f*P,0),d.push(0,P,0),p.push(.5,.5),m++;let D=m;for(let j=0;j<=i;j++){let C=j/i*l+o,G=Math.cos(C),V=Math.sin(C);b.x=I*V,b.y=f*P,b.z=I*G,u.push(b.x,b.y,b.z),d.push(0,P,0),R.x=.5*G+.5,R.y=.5*V*P+.5,p.push(R.x,R.y),m++}for(let j=0;j<i;j++){let C=M+j,G=D+j;_===!0?h.push(G,G+1,C):h.push(G+1,G,C),w+=3}c.addGroup(y,w,_===!0?1:2),y+=w}(function(){let _=new S,M=new S,R=0,b=(t-e)/n;for(let w=0;w<=s;w++){let I=[],P=w/s,D=P*(t-e)+e;for(let j=0;j<=i;j++){let C=j/i,G=C*l+o,V=Math.sin(G),ae=Math.cos(G);M.x=D*V,M.y=-P*n+f,M.z=D*ae,u.push(M.x,M.y,M.z),_.set(V,b,ae).normalize(),d.push(_.x,_.y,_.z),p.push(C,1-P),I.push(m++)}v.push(I)}for(let w=0;w<i;w++)for(let I=0;I<s;I++){let P=v[I][w],D=v[I+1][w],j=v[I+1][w+1],C=v[I][w+1];h.push(P,D,C),h.push(D,j,C),R+=6}c.addGroup(y,R,0),y+=R})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nl=class r extends Oa{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mi=class r extends Ge{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,m,v){let f=v+1,y=[];for(let g=0;g<=f;g++){y[g]=[];let _=d.clone().lerp(m,g/f),M=p.clone().lerp(m,g/f),R=f-g;for(let b=0;b<=R;b++)y[g][b]=b===0&&g===f?_:_.clone().lerp(M,b/R)}for(let g=0;g<f;g++)for(let _=0;_<2*(f-g)-1;_++){let M=Math.floor(_/2);_%2==0?(l(y[g][M+1]),l(y[g+1][M]),l(y[g][M])):(l(y[g][M+1]),l(y[g+1][M+1]),l(y[g+1][M]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(d,p,m,v){v<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new S,m=new S,v=new S;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],m),c(t[f+2],v),o(p,m,v,d)})(i),(function(d){let p=new S;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(d),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z})(n),(function(){let d=new S;for(let m=0;m<s.length;m+=3){d.x=s[m+0],d.y=s[m+1],d.z=s[m+2];let v=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-f)}var p;(function(){let m=new S,v=new S,f=new S,y=new S,g=new se,_=new se,M=new se;for(let R=0,b=0;R<s.length;R+=9,b+=6){m.set(s[R+0],s[R+1],s[R+2]),v.set(s[R+3],s[R+4],s[R+5]),f.set(s[R+6],s[R+7],s[R+8]),g.set(a[b+0],a[b+1]),_.set(a[b+2],a[b+3]),M.set(a[b+4],a[b+5]),y.copy(m).add(v).add(f).divideScalar(3);let w=u(y);h(g,b+0,m,w),h(_,b+2,v,w),h(M,b+4,f,w)}})(),(function(){for(let m=0;m<a.length;m+=6){let v=a[m+0],f=a[m+2],y=a[m+4],g=Math.max(v,f,y),_=Math.min(v,f,y);g>.9&&_<.1&&(v<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),y<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(s.slice(),3)),this.setAttribute("uv",new Me(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Ul=class r extends Mi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ia=new S,ra=new S,Jo=new S,sa=new Xn,Dl=class extends Ge{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(ca*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:v,b:f,c:y}=sa;if(v.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),sa.getNormal(Jo),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let _=(g+1)%3,M=u[g],R=u[_],b=sa[h[g]],w=sa[h[_]],I=`${M}_${R}`,P=`${R}_${M}`;P in d&&d[P]?(Jo.dot(d[P].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(w.x,w.y,w.z)),d[P]=null):I in d||(d[I]={index0:c[g],index1:c[_],normal:Jo.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:f}=d[m];ia.fromBufferAttribute(o,v),ra.fromBufferAttribute(o,f),p.push(ia.x,ia.y,ia.z),p.push(ra.x,ra.y,ra.z)}this.setAttribute("position",new Me(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},za=class extends ss{constructor(e){super(e),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ss().fromJSON(i))}return this}},Im=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=yu(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(m,v,f,y){let g=[],_,M,R,b,w;for(_=0,M=v.length;_<M;_++)R=v[_]*y,b=_<M-1?v[_+1]*y:m.length,w=yu(m,R,b,y,!1),w===w.next&&(w.steiner=!0),g.push(Hm(w));for(g.sort(zm),_=0;_<g.length;_++)f=Fm(g[_],f);return f})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)u=r[m],d=r[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return as(s,a,t,o,l,p,0),a};function yu(r,e,t,n,i){let s,a;if(i===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=xu(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=xu(s,r[s],r[s+1],a);return a&&qa(a,a.next)&&(ls(a),a=a.next),a}function Si(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!qa(n,n.next)&&Qe(n.prev,n,n.next)!==0)n=n.next;else{if(ls(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function as(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let m=h;do m.z===0&&(m.z=Ol(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(v){let f,y,g,_,M,R,b,w,I=1;do{for(y=v,v=null,M=null,R=0;y;){for(R++,g=y,b=0,f=0;f<I&&(b++,g=g.nextZ,g);f++);for(w=I;b>0||w>0&&g;)b!==0&&(w===0||!g||y.z<=g.z)?(_=y,y=y.nextZ,b--):(_=g,g=g.nextZ,w--),M?M.nextZ=_:v=_,_.prevZ=M,M=_;y=g}M.nextZ=null,I*=2}while(R>1)})(m)})(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Um(r,n,i,s):Nm(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ls(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?as(r=Dm(Si(r),e,t),e,t,n,i,s,2):a===2&&Om(r,e,t,n,i,s):as(Si(r),e,t,n,i,s,1);break}}function Nm(r){let e=r.prev,t=r,n=r.next;if(Qe(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&nr(i,o,s,l,a,c,m.x,m.y)&&Qe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Um(r,e,t,n){let i=r.prev,s=r,a=r.next;if(Qe(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,y=Ol(p,m,e,t,n),g=Ol(v,f,e,t,n),_=r.prevZ,M=r.nextZ;for(;_&&_.z>=y&&M&&M.z<=g;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=f&&_!==i&&_!==a&&nr(o,h,l,u,c,d,_.x,_.y)&&Qe(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=v&&M.y>=m&&M.y<=f&&M!==i&&M!==a&&nr(o,h,l,u,c,d,M.x,M.y)&&Qe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=y;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=f&&_!==i&&_!==a&&nr(o,h,l,u,c,d,_.x,_.y)&&Qe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=g;){if(M.x>=p&&M.x<=v&&M.y>=m&&M.y<=f&&M!==i&&M!==a&&nr(o,h,l,u,c,d,M.x,M.y)&&Qe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Dm(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!qa(i,s)&&Zu(i,n,n.next,s)&&os(i,s)&&os(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ls(n),ls(n.next),n=r=s),n=n.next}while(n!==r);return Si(n)}function Om(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&km(a,o)){let l=Ku(a,o);return a=Si(a,a.next),l=Si(l,l.next),as(a,e,t,n,i,s,0),void as(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function zm(r,e){return r.x-e.x}function Fm(r,e){let t=(function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,m,v=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&nr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),os(o,i)&&(m<v||m===v&&(o.x>a.x||o.x===a.x&&Bm(a,o)))&&(a=o,v=m)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=Ku(t,r);return Si(n,n.next),Si(t,t.next)}function Bm(r,e){return Qe(r.prev,r,e.prev)<0&&Qe(e.next,r,r.next)<0}function Ol(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Hm(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function nr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function km(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Zu(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(os(r,e)&&os(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(Qe(r.prev,r,e.prev)||Qe(r,e.prev,e))||qa(r,e)&&Qe(r.prev,r,r.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function qa(r,e){return r.x===e.x&&r.y===e.y}function Zu(r,e,t,n){let i=oa(Qe(r,e,t)),s=oa(Qe(r,e,n)),a=oa(Qe(t,n,r)),o=oa(Qe(t,n,e));return i!==s&&a!==o||!(i!==0||!aa(r,t,e))||!(s!==0||!aa(r,n,e))||!(a!==0||!aa(t,r,n))||!(o!==0||!aa(t,e,n))}function aa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function oa(r){return r>0?1:r<0?-1:0}function os(r,e){return Qe(r.prev,r,r.next)<0?Qe(r,e,r.next)>=0&&Qe(r,r.prev,e)>=0:Qe(r,e,r.prev)<0||Qe(r,r.next,e)<0}function Ku(r,e){let t=new zl(r.i,r.x,r.y),n=new zl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function xu(r,e,t,n){let i=new zl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ls(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var qn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Mu(e),Su(n,e);let a=e.length;t.forEach(Mu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Su(n,t[l]);let o=Im(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Mu(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Su(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Fl=class r extends Ge{constructor(e=new za([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Gm,_,M,R,b,w,I=!1;y&&(_=y.getSpacedPoints(h),I=!0,d=!1,M=y.computeFrenetFrames(h,!1),R=new S,b=new S,w=new S),d||(f=0,p=0,m=0,v=0);let P=o.extractPoints(c),D=P.shape,j=P.holes;if(!qn.isClockWise(D)){D=D.reverse();for(let N=0,U=j.length;N<U;N++){let z=j[N];qn.isClockWise(z)&&(j[N]=z.reverse())}}let C=qn.triangulateShape(D,j),G=D;for(let N=0,U=j.length;N<U;N++){let z=j[N];D=D.concat(z)}function V(N,U,z){return U||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(U,z)}let ae=D.length,pe=C.length;function te(N,U,z){let Q,Z,x,ne=N.x-U.x,B=N.y-U.y,H=z.x-N.x,ie=z.y-N.y,he=ne*ne+B*B,de=ne*ie-B*H;if(Math.abs(de)>Number.EPSILON){let me=Math.sqrt(he),Se=Math.sqrt(H*H+ie*ie),fe=U.x-B/me,ge=U.y+ne/me,we=((z.x-ie/Se-fe)*ie-(z.y+H/Se-ge)*H)/(ne*ie-B*H);Q=fe+ne*we-N.x,Z=ge+B*we-N.y;let dt=Q*Q+Z*Z;if(dt<=2)return new se(Q,Z);x=Math.sqrt(dt/2)}else{let me=!1;ne>Number.EPSILON?H>Number.EPSILON&&(me=!0):ne<-Number.EPSILON?H<-Number.EPSILON&&(me=!0):Math.sign(B)===Math.sign(ie)&&(me=!0),me?(Q=-B,Z=ne,x=Math.sqrt(he)):(Q=ne,Z=B,x=Math.sqrt(he/2))}return new se(Q/x,Z/x)}let q=[];for(let N=0,U=G.length,z=U-1,Q=N+1;N<U;N++,z++,Q++)z===U&&(z=0),Q===U&&(Q=0),q[N]=te(G[N],G[z],G[Q]);let ee=[],F,J=q.concat();for(let N=0,U=j.length;N<U;N++){let z=j[N];F=[];for(let Q=0,Z=z.length,x=Z-1,ne=Q+1;Q<Z;Q++,x++,ne++)x===Z&&(x=0),ne===Z&&(ne=0),F[Q]=te(z[Q],z[x],z[ne]);ee.push(F),J=J.concat(F)}for(let N=0;N<f;N++){let U=N/f,z=p*Math.cos(U*Math.PI/2),Q=m*Math.sin(U*Math.PI/2)+v;for(let Z=0,x=G.length;Z<x;Z++){let ne=V(G[Z],q[Z],Q);E(ne.x,ne.y,-z)}for(let Z=0,x=j.length;Z<x;Z++){let ne=j[Z];F=ee[Z];for(let B=0,H=ne.length;B<H;B++){let ie=V(ne[B],F[B],Q);E(ie.x,ie.y,-z)}}}let ce=m+v;for(let N=0;N<ae;N++){let U=d?V(D[N],J[N],ce):D[N];I?(b.copy(M.normals[0]).multiplyScalar(U.x),R.copy(M.binormals[0]).multiplyScalar(U.y),w.copy(_[0]).add(b).add(R),E(w.x,w.y,w.z)):E(U.x,U.y,0)}for(let N=1;N<=h;N++)for(let U=0;U<ae;U++){let z=d?V(D[U],J[U],ce):D[U];I?(b.copy(M.normals[N]).multiplyScalar(z.x),R.copy(M.binormals[N]).multiplyScalar(z.y),w.copy(_[N]).add(b).add(R),E(w.x,w.y,w.z)):E(z.x,z.y,u/h*N)}for(let N=f-1;N>=0;N--){let U=N/f,z=p*Math.cos(U*Math.PI/2),Q=m*Math.sin(U*Math.PI/2)+v;for(let Z=0,x=G.length;Z<x;Z++){let ne=V(G[Z],q[Z],Q);E(ne.x,ne.y,u+z)}for(let Z=0,x=j.length;Z<x;Z++){let ne=j[Z];F=ee[Z];for(let B=0,H=ne.length;B<H;B++){let ie=V(ne[B],F[B],Q);I?E(ie.x,ie.y+_[h-1].y,_[h-1].x+z):E(ie.x,ie.y,u+z)}}}function T(N,U){let z=N.length;for(;--z>=0;){let Q=z,Z=z-1;Z<0&&(Z=N.length-1);for(let x=0,ne=h+2*f;x<ne;x++){let B=ae*x,H=ae*(x+1);Y(U+Q+B,U+Z+B,U+Z+H,U+Q+H)}}}function E(N,U,z){l.push(N),l.push(U),l.push(z)}function O(N,U,z){L(N),L(U),L(z);let Q=i.length/3,Z=g.generateTopUV(n,i,Q-3,Q-2,Q-1);X(Z[0]),X(Z[1]),X(Z[2])}function Y(N,U,z,Q){L(N),L(U),L(Q),L(U),L(z),L(Q);let Z=i.length/3,x=g.generateSideWallUV(n,i,Z-6,Z-3,Z-2,Z-1);X(x[0]),X(x[1]),X(x[3]),X(x[1]),X(x[2]),X(x[3])}function L(N){i.push(l[3*N+0]),i.push(l[3*N+1]),i.push(l[3*N+2])}function X(N){s.push(N.x),s.push(N.y)}(function(){let N=i.length/3;if(d){let U=0,z=ae*U;for(let Q=0;Q<pe;Q++){let Z=C[Q];O(Z[2]+z,Z[1]+z,Z[0]+z)}U=h+2*f,z=ae*U;for(let Q=0;Q<pe;Q++){let Z=C[Q];O(Z[0]+z,Z[1]+z,Z[2]+z)}}else{for(let U=0;U<pe;U++){let z=C[U];O(z[2],z[1],z[0])}for(let U=0;U<pe;U++){let z=C[U];O(z[0]+ae*h,z[1]+ae*h,z[2]+ae*h)}}n.addGroup(N,i.length/3-N,0)})(),(function(){let N=i.length/3,U=0;T(G,U),U+=G.length;for(let z=0,Q=j.length;z<Q;z++){let Z=j[z];T(Z,U),U+=Z.length}n.addGroup(N,i.length/3-N,1)})()}this.setAttribute("position",new Me(i,3)),this.setAttribute("uv",new Me(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ua[i.type]().fromJSON(i)),new r(n,e.options)}},Gm={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new se(s,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],m=e[3*i+2],v=e[3*s],f=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(d,1-m),new se(v,1-y)]:[new se(o,1-l),new se(h,1-u),new se(p,1-m),new se(f,1-y)]}},Bl=class r extends Mi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Hl=class r extends Mi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},gr=class r extends Ge{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new S,m=new se;for(let v=0;v<=i;v++){for(let f=0;f<=n;f++){let y=s+f/n*a;p.x=u*Math.cos(y),p.y=u*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){let f=v*(n+1);for(let y=0;y<n;y++){let g=y+f,_=g,M=g+n+1,R=g+n+2,b=g+1;o.push(_,M,b),o.push(M,R,b)}}this.setIndex(o),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},kl=class r extends Ge{constructor(e=new za([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;qn.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,y=m.length;f<y;f++){let g=m[f];qn.isClockWise(g)===!0&&(m[f]=g.reverse())}let v=qn.triangulateShape(p,m);for(let f=0,y=m.length;f<y;f++){let g=m[f];p=p.concat(g)}for(let f=0,y=p.length;f<y;f++){let g=p[f];i.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let f=0,y=v.length;f<y;f++){let g=v[f],_=g[0]+u,M=g[1]+u,R=g[2]+u;n.push(_,M,R),l+=3}}this.setIndex(n),this.setAttribute("position",new Me(i,3)),this.setAttribute("normal",new Me(s,3)),this.setAttribute("uv",new Me(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Ht=class r extends Ge{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new S,d=new S,p=[],m=[],v=[],f=[];for(let y=0;y<=n;y++){let g=[],_=y/n,M=0;y===0&&a===0?M=.5/t:y===n&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){let b=R/t;u.x=-e*Math.cos(i+b*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+b*s)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(b+M,1-_),g.push(c++)}h.push(g)}for(let y=0;y<n;y++)for(let g=0;g<t;g++){let _=h[y][g+1],M=h[y][g],R=h[y+1][g],b=h[y+1][g+1];(y!==0||a>0)&&p.push(_,M,b),(y!==n-1||l<Math.PI)&&p.push(M,R,b)}this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Gl=class r extends Mi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Vl=class r extends Ge{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new S,u=new S,d=new S;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let v=m/i*s,f=p/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(v),u.y=(e+t*Math.cos(f))*Math.sin(v),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let v=(i+1)*p+m-1,f=(i+1)*(p-1)+m-1,y=(i+1)*(p-1)+m,g=(i+1)*p+m;a.push(v,f,g),a.push(f,y,g)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Wl=class r extends Ge{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new S,d=new S,p=new S,m=new S,v=new S,f=new S,y=new S;for(let _=0;_<=n;++_){let M=_/n*s*Math.PI*2;g(M,s,a,e,p),g(M+.01,s,a,e,m),f.subVectors(m,p),y.addVectors(m,p),v.crossVectors(f,y),y.crossVectors(v,f),v.normalize(),y.normalize();for(let R=0;R<=i;++R){let b=R/i*Math.PI*2,w=-t*Math.cos(b),I=t*Math.sin(b);u.x=p.x+(w*y.x+I*v.x),u.y=p.y+(w*y.y+I*v.y),u.z=p.z+(w*y.z+I*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(R/i)}}for(let _=1;_<=n;_++)for(let M=1;M<=i;M++){let R=(i+1)*(_-1)+(M-1),b=(i+1)*_+(M-1),w=(i+1)*_+M,I=(i+1)*(_-1)+M;o.push(R,b,I),o.push(b,w,I)}function g(_,M,R,b,w){let I=Math.cos(_),P=Math.sin(_),D=R/M*_,j=Math.cos(D);w.x=b*(2+j)*.5*I,w.y=b*(2+j)*P*.5,w.z=b*Math.sin(D)*.5}this.setIndex(o),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Xl=class r extends Ge{constructor(e=new Ia(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,l=new S,c=new se,h=new S,u=[],d=[],p=[],m=[];function v(f){h=e.getPointAt(f/t,h);let y=a.normals[f],g=a.binormals[f];for(let _=0;_<=i;_++){let M=_/i*Math.PI*2,R=Math.sin(M),b=-Math.cos(M);l.x=b*y.x+R*g.x,l.y=b*y.y+R*g.y,l.z=b*y.z+R*g.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)v(f);v(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let y=0;y<=i;y++)c.x=f/t,c.y=y/i,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let y=1;y<=i;y++){let g=(i+1)*(f-1)+(y-1),_=(i+1)*f+(y-1),M=(i+1)*f+y,R=(i+1)*(f-1)+y;m.push(g,_,R),m.push(_,M,R)}})()})(),this.setIndex(m),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ua[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},jl=class extends Ge{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new S,s=new S;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let v=0;v<3;v++){let f=o.getX(p+v),y=o.getX(p+(v+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,y),bu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),bu(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Me(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function bu(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var bg=Object.freeze({__proto__:null,BoxGeometry:Pn,CapsuleGeometry:Pl,CircleGeometry:Il,ConeGeometry:Nl,CylinderGeometry:Oa,DodecahedronGeometry:Ul,EdgesGeometry:Dl,ExtrudeGeometry:Fl,IcosahedronGeometry:Bl,LatheGeometry:Da,OctahedronGeometry:Hl,PlaneGeometry:pr,PolyhedronGeometry:Mi,RingGeometry:gr,ShapeGeometry:kl,SphereGeometry:Ht,TetrahedronGeometry:Gl,TorusGeometry:Vl,TorusKnotGeometry:Wl,TubeGeometry:Xl,WireframeGeometry:jl});var Dn=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function la(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Vm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var vr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ql=class extends vr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sh:s=e,o=2*t-n;break;case bh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:a=e,l=2*n-t;break;case bh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),v=m*m,f=v*m,y=-d*f+2*d*v-d*m,g=(1+d)*f+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-p)*f+(1.5+p)*v+.5*m,M=p*f-p*v;for(let R=0;R!==o;++R)s[R]=y*a[h+R]+g*a[c+R]+_*a[l+R]+M*a[u+R];return s}},Yl=class extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},$l=class extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},rn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ql(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ua:t=this.InterpolantFactoryMethodDiscrete;break;case da:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Vm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};rn.prototype.TimeBufferType=Float32Array,rn.prototype.ValueBufferType=Float32Array,rn.prototype.DefaultInterpolation=da;var pi=class extends rn{};pi.prototype.ValueTypeName="bool",pi.prototype.ValueBufferType=Array,pi.prototype.DefaultInterpolation=ua,pi.prototype.InterpolantFactoryMethodLinear=void 0,pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends rn{};Jl.prototype.ValueTypeName="color";var Zl=class extends rn{};Zl.prototype.ValueTypeName="number";var Kl=class extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Nt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Zr=class extends rn{InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}};Zr.prototype.ValueTypeName="quaternion",Zr.prototype.DefaultInterpolation=da,Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends rn{};mi.prototype.ValueTypeName="string",mi.prototype.ValueBufferType=Array,mi.prototype.DefaultInterpolation=ua,mi.prototype.InterpolantFactoryMethodLinear=void 0,mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends rn{};Ql.prototype.ValueTypeName="vector";var Eu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ec=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Wm=new ec,cs=class{constructor(e){this.manager=e!==void 0?e:Wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};cs.DEFAULT_MATERIAL_NAME="__DEFAULT";var tc=class extends cs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Eu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=Qr("img");function l(){h(),Eu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Fa=class extends cs{constructor(e){super(e)}load(e,t,n,i){let s=new Bt,a=new tc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},Ba=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Zo=new Ae,Tu=new S,wu=new S,nc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wu),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Eg=new Ae,Tg=new S,wg=new S;var ic=class extends nc{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new ic}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ha=class extends Ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ag=new Ae,Rg=new Ae,Cg=new Ae;var ka=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Au();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Au(){return(typeof performance=="undefined"?Date:performance).now()}var Lg=new S,Pg=new Nt,Ig=new S,Ng=new S;var Ug=new S,Dg=new Nt,Og=new S,zg=new S;var uc="\\[\\]\\.:\\/",Xm=new RegExp("["+uc+"]","g"),Ko="[^"+uc+"]",jm="[^"+uc.replace("\\.","")+"]",qm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ko)+/(WCOD+)?/.source.replace("WCOD",jm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko)+"$"),Ym=["material","materials","bones","map"],$e=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xm,"")}static parseTrackName(e){let t=qm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Ym.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=class{constructor(r,e,t){let n=t||$e.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray],$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fg=new Float32Array(1);var Ga=class{constructor(e,t,n=0,i=1/0){this.ray=new yi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return rc(e,this,n,t),n.sort(Ru),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)rc(e[i],this,n,t);return n.sort(Ru),n}};function Ru(r,e){return r.distance-e.distance}function rc(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)rc(i[s],e,t,!0)}}var Va=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Bg=new se;var Hg=new S,kg=new S;var Gg=new S;var Vg=new S,Wg=new Ae,Xg=new Ae;var jg=new S,qg=new ye,Yg=new ye;var $g=new S,Jg=new S,Zg=new S;var Kg=new S,Qg=new ts;var e0=new dn;var t0=new S;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");window.__stage="app";var Jm=r=>{let e=document.getElementById("loader");e&&(e.innerHTML=`<span style="max-width:300px;text-align:center;line-height:2;letter-spacing:.1em">${r}</span>`)};{let r=document.createElement("canvas");if(!(r.getContext("webgl2")||r.getContext("webgl")))throw Jm("\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 3D\uFF08WebGL\uFF09\uFF0C\u8BF7\u7528 Chrome / Safari \u6253\u5F00<br>WebGL is not available in this browser"),new Error("webgl")}var gc=class{constructor(e,t){Object.assign(this,{cam:e,el:t,target:new S,bodyR:1,minDistance:1.35,maxDistance:22,autoRotate:!0,autoRotateSpeed:.35,dT:0,dP:0,vT:0,vP:0,zoom:1,ptr:new Map,drag:!1,ls:[],pd:0,moved:0}),t.addEventListener("pointerdown",i=>{try{t.setPointerCapture(i.pointerId)}catch(s){}this.ptr.set(i.pointerId,{x:i.clientX,y:i.clientY}),this.moved=0,this.ptr.size===2&&(this.pd=this.dist())}),t.addEventListener("pointermove",i=>{let s=this.ptr.get(i.pointerId);if(!s)return;let a=i.clientX-s.x,o=i.clientY-s.y;if(s.x=i.clientX,s.y=i.clientY,this.ptr.size===1){if(this.moved+=Math.abs(a)+Math.abs(o),this.moved>4){this.drag||(this.drag=!0,this.emit());let l=Math.PI/t.clientHeight*1.1*Math.min(1,(this.cam.position.distanceTo(this.target)/this.bodyR-.9)/2.5+.25);this.dT-=a*l,this.dP-=o*l}}else if(this.ptr.size===2){let l=this.dist();this.pd&&(this.zoom*=this.pd/l,this.emit()),this.pd=l}});let n=i=>{this.ptr.delete(i.pointerId),this.ptr.size<2&&(this.pd=0),this.ptr.size||(this.drag=!1)};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("wheel",i=>{i.preventDefault(),this.zoom*=Math.exp(i.deltaY*.0012),this.emit()},{passive:!1})}dist(){let e=[...this.ptr.values()];return Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)||1}addEventListener(e,t){this.ls.push(t)}emit(){this.ls.forEach(e=>e())}zoomBy(e){this.zoom*=e,this.emit()}update(e){let t=new Va().setFromVector3(this.cam.position.clone().sub(this.target));this.drag?(t.theta+=this.dT,t.phi+=this.dP,this.vT=this.dT,this.vP=this.dP,this.dT=this.dP=0):(t.theta+=this.vT,t.phi+=this.vP,this.vT*=.9,this.vP*=.9,this.dT=this.dP=0),this.autoRotate&&(t.theta+=this.autoRotateSpeed*Math.PI*2/60*e),t.phi=Math.max(.06,Math.min(Math.PI-.06,t.phi));let n=Math.pow(this.zoom,.18);t.radius=Math.max(this.minDistance,Math.min(this.maxDistance,t.radius*n)),this.zoom/=n,Math.abs(this.zoom-1)<.001&&(this.zoom=1),this.cam.position.copy(this.target).add(new S().setFromSpherical(t)),this.cam.lookAt(this.target)}},Je="zh";try{Je=localStorage.getItem("luna-lang")||"zh"}catch(r){}var Sc={zh:{title:"\u6708\u7403\u56FE\u8C31",by:"\u521B\u5EFA\u4EBA\uFF1AYuan Jiahao",fails:"\u5931\u8D25\u4EFB\u52A1",sats:"\u7ED5\u6708\u536B\u661F",grid:"\u7ECF\u7EAC\u7F51",tabs:["\u6708\u7403","\u767B\u6708","\u536B\u661F"],holo:"\u6708\u9762\u5750\u6807 \xB7 SELENOGRAPHIC",dist:"\u89C2\u6D4B\u8DDD\u79BB",hint:"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u51FB\u6708\u7403\u6216\u5149\u67F1\u67E5\u770B\u4FE1\u606F",hintE:"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u51FB\u5730\u7403\u6216\u536B\u661F\u67E5\u770B\u4FE1\u606F",hintS:"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u51FB\u592A\u9633\u8868\u9762\u4F1A\u55B7\u51FA\u706B\u7130",tl:["\u6B21\u6210\u529F\u7740\u9646","\u4EBA\u767B\u6708","\u56FD\u8F6F\u7740\u9646","\u9897\u5728\u8F68\u536B\u661F"],back:"\u2190 \u8FD4\u56DE\u5217\u8868",milestone:"\u91CC\u7A0B\u7891",type:{crew:"\u8F7D\u4EBA\u767B\u6708",soft:"\u65E0\u4EBA\u8F6F\u7740\u9646",impact:"\u649E\u51FB",fail:"\u7740\u9646\u5931\u8D25"},file:"\u4EFB\u52A1\u6863\u6848 \xB7 MISSION FILE",date:"\u7740\u9646\u65E5\u671F",site:"\u7740\u9646\u5730\u70B9",coord:"\u5750\u6807",crew:"\u767B\u6708\u5B87\u822A\u5458",rov:"\u6708\u7403\u8F66",smp:"\u5E26\u56DE\u6837\u672C",ago:"\u8DDD\u4ECA",yrs:r=>`${r} \u5E74`,flyby:"\u8F7D\u4EBA\u7ED5\u6708\u98DE\u884C",planned:"\u8BA1\u5212\u4E2D",when:"\u65F6\u95F4",cty:"\u56FD\u5BB6",active:"\u5728\u8F68\u8FD0\u884C",orbit:"\u8F68\u9053\u53C2\u6570 \xB7 ORBIT",launch:"\u53D1\u5C04",arr:"\u8FDB\u5165\u6708\u7403\u8F68\u9053",orb:"\u8F68\u9053",per:"\u5468\u671F",inorbit:"\u5728\u8F68\u65F6\u95F4",inorbitV:r=>`\u7EA6 ${r} \u5E74`,orbNote:"\u6CE8\uFF1A\u753B\u9762\u4E2D\u7684\u8F68\u9053\u5927\u5C0F\u7ECF\u8FC7\u538B\u7F29\uFF0C\u4EC5\u793A\u610F\u5F62\u72B6\u4E0E\u65B9\u5411\u3002",crewTag:"\u8F7D\u4EBA",failTag:"\u5931\u8D25",none:"\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u7684\u4EFB\u52A1\u3002",satIntro:"\u76EE\u524D\u4ECD\u5728\u6708\u7403\u9644\u8FD1\u5DE5\u4F5C\u7684\u4EBA\u9020\u536B\u661F\uFF1A",first:(r,e)=>`\u9996\u6B21 ${r} \xB7 \u5171 ${e} \u6B21`,crewRow:["\u8F7D\u4EBA\u767B\u6708","\u4EC5\u7F8E\u56FD\uFF0C6 \u6B21 / 12 \u4EBA\uFF081969\u20131972\uFF09"],moonName:"\u6708\u7403",moonSub:"THE MOON \xB7 \u5730\u7403\u552F\u4E00\u7684\u5929\u7136\u536B\u661F",a11T:"\u4EBA\u7C7B\u7B2C\u4E00\u6B21\u767B\u6708 \xB7 1969.7.20",eaT:"\u84DD\u8272\u5F39\u73E0 \xB7 1972.12.7",eaC:"\u963F\u6CE2\u7F57 17 \u53F7\u5B87\u822A\u5458\u5728\u98DE\u5F80\u6708\u7403\u7684\u9014\u4E2D\u62CD\u4E0B\u4E86\u5B8C\u6574\u7684\u5730\u7403\uFF0C\u8FD9\u662F\u4EBA\u7C7B\u5386\u53F2\u4E0A\u6D41\u4F20\u6700\u5E7F\u7684\u7167\u7247\u4E4B\u4E00\u3002\u7167\u7247\u91CC\u80FD\u770B\u5230\u975E\u6D32\u3001\u963F\u62C9\u4F2F\u534A\u5C9B\u548C\u5357\u6781\u6D32\u3002",eaS:"\u7167\u7247\uFF1ANASA / \u963F\u6CE2\u7F57 17 \u53F7\uFF08AS17-148-22727\uFF0C\u516C\u6709\u9886\u57DF\uFF09",suT:"\u592A\u7A7A\u4E2D\u62CD\u6444\u7684\u592A\u9633",suC:"NASA \u592A\u9633\u52A8\u529B\u5B66\u5929\u6587\u53F0\uFF08SDO\uFF09\u5728\u6781\u7D2B\u5916\u6CE2\u6BB5\u62CD\u4E0B\u7684\u592A\u9633\u5168\u8C8C\uFF08\u4F2A\u5F69\u8272\uFF09\u3002\u8FB9\u7F18\u7684\u4EAE\u5F27\u662F\u65E5\u73E5\uFF0C\u8868\u9762\u7684\u4EAE\u6591\u662F\u6D3B\u52A8\u533A\u3002",suS:"\u7167\u7247\uFF1ANASA / SDO\uFF08\u516C\u6709\u9886\u57DF\uFF09",noImg:"\u56FE\u7247\u6682\u65F6\u65E0\u6CD5\u52A0\u8F7D",mapHint:"\u{1F446} \u70B9\u51FB\u5730\u56FE\u4E0A\u7684\u661F\u7403\u5373\u53EF\u524D\u5F80",mapBig:"\u592A\u9633\u7CFB\u5730\u56FE \xB7 \u70B9\u51FB\u661F\u7403\u524D\u5F80",mapClose:"\u5173\u95ED",a11C:"\u963F\u6CE2\u7F57 11 \u53F7\u767B\u6708\uFF1A\u963F\u59C6\u65AF\u7279\u6717\u548C\u5965\u5C14\u5FB7\u6797\u5728\u9759\u6D77\u7740\u9646\uFF0C\u5728\u6708\u9762\u505C\u7559\u7EA6 2.5 \u5C0F\u65F6\u3002\u8FD9\u662F\u5965\u5C14\u5FB7\u6797\u5728\u6708\u58E4\u4E0A\u8E29\u4E0B\u7684\u811A\u5370\u2014\u2014\u6708\u7403\u4E0A\u6CA1\u6709\u98CE\uFF0C\u5B83\u81F3\u4ECA\u53EF\u80FD\u8FD8\u5728\u90A3\u91CC\u3002",a11S:"\u7167\u7247\uFF1ANASA / \u963F\u6CE2\u7F57 11 \u53F7\uFF08AS11-40-5878\uFF0C\u516C\u6709\u9886\u57DF\uFF09",moonP:"\u6708\u7403\u5927\u7EA6\u5728 45 \u4EBF\u5E74\u524D\u5F62\u6210\uFF0C\u4E3B\u6D41\u89C2\u70B9\u8BA4\u4E3A\u5B83\u6765\u81EA\u4E00\u9897\u706B\u661F\u5927\u5C0F\u7684\u5929\u4F53\u4E0E\u65E9\u671F\u5730\u7403\u7684\u5DE8\u5927\u649E\u51FB\u3002\u5B83\u88AB\u5730\u7403\u6F6E\u6C50\u9501\u5B9A\uFF0C\u6C38\u8FDC\u4EE5\u540C\u4E00\u9762\u671D\u5411\u6211\u4EEC\uFF1B\u8868\u9762\u6697\u8272\u7684\u201C\u6708\u6D77\u201D\u662F\u53E4\u8001\u7684\u7384\u6B66\u5CA9\u7194\u5CA9\u5E73\u539F\u3002",phys:"\u7269\u7406\u53C2\u6570 \xB7 PHYSICAL",physRows:[["\u5E74\u9F84","\u7EA6 45 \u4EBF\u5E74"],["\u534A\u5F84","1,737.4 km"],["\u8D28\u91CF","7.342 \xD7 10\xB2\xB2 kg"],["\u8868\u9762\u91CD\u529B","1.62 m/s\xB2\uFF08\u5730\u7403\u7684 1/6\uFF09"],["\u4E0E\u5730\u7403\u5E73\u5747\u8DDD\u79BB","384,400 km"],["\u516C\u8F6C\u5468\u671F","27.32 \u5929"],["\u6708\u76F8\u5468\u671F","29.53 \u5929"],["\u8868\u9762\u6E29\u5EA6","\u2212173 ~ 127 \xB0C"],["\u8FDC\u79BB\u5730\u7403\u901F\u5EA6","\u7EA6 3.8 cm / \u5E74"]],landed:"\u767B\u9646\u8FC7\u6708\u7403\u7684\u56FD\u5BB6 \xB7 LANDED",latest:"2026 \u52A8\u6001 \xB7 LATEST",latestP:"4 \u6708\u963F\u8033\u5FD2\u5F25\u65AF2\u53F7\u5B8C\u6210\u8F7D\u4EBA\u7ED5\u6708\u98DE\u884C\uFF1B\u5AE6\u5A25\u4E03\u53F7\u63A8\u8FDF\u5230 2027 \u5E74\u53D1\u5C04\uFF1B\u84DD\u8272\u8D77\u6E90 MK1 \u4E0E IM-3 \u4E5F\u5DF2\u63A8\u8FDF\u81F3 2027 \u5E74\u3002",data:"\u6570\u636E\u6574\u7406\u81EA NASA\u3001CNSA\u3001ISRO\u3001JAXA \u7B49\u516C\u5F00\u8D44\u6599\uFF0C\u7740\u9646\u5750\u6807\u4E3A\u8FD1\u4F3C\u503C\u3002\u6708\u9762\u8D34\u56FE\uFF1ANASA SVS CGI Moon Kit / LRO LROC\uFF08NASA/GSFC/\u4E9A\u5229\u6851\u90A3\u5DDE\u7ACB\u5927\u5B66\uFF09\u3002",loading:"\u6B63\u5728\u52A0\u8F7D\u6708\u7403 \xB7 LOADING"},en:{title:"Lunar Atlas",by:"Created by Yuan Jiahao",fails:"Failed",sats:"Orbiters",grid:"Grid",tabs:["Moon","Landings","Orbiters"],holo:"SELENOGRAPHIC COORDINATES",dist:"RANGE",hint:"Drag to rotate \xB7 scroll to zoom \xB7 click the Moon or a beacon",hintE:"Drag to rotate \xB7 scroll to zoom \xB7 click Earth or a satellite",hintS:"Drag to rotate \xB7 scroll to zoom \xB7 click the Sun to trigger an eruption",tl:["successful landings","moonwalkers","nations landed","active orbiters"],back:"\u2190 Back",milestone:"Milestone",type:{crew:"Crewed landing",soft:"Robotic soft landing",impact:"Impact",fail:"Failed landing"},file:"MISSION FILE",date:"Landing date",site:"Site",coord:"Coordinates",crew:"Moonwalkers",rov:"Rover",smp:"Samples returned",ago:"Years ago",yrs:r=>`${r} yrs`,flyby:"Crewed flyby",planned:"Planned",when:"Date",cty:"Country",active:"Active",orbit:"ORBIT",launch:"Launch",arr:"Lunar orbit insertion",orb:"Orbit",per:"Period",inorbit:"Time in orbit",inorbitV:r=>`~${r} yrs`,orbNote:"Note: orbit sizes on screen are compressed to show shape and orientation only.",crewTag:"Crewed",failTag:"Failed",none:"No missions match the filters.",satIntro:"Spacecraft still operating around the Moon:",first:(r,e)=>`First ${r} \xB7 ${e} total`,crewRow:["Crewed landings","USA only, 6 missions / 12 people (1969\u201372)"],moonName:"The Moon",moonSub:"LUNA \xB7 EARTH'S ONLY NATURAL SATELLITE",a11T:"First humans on the Moon \xB7 20 July 1969",eaT:"The Blue Marble \xB7 7 Dec 1972",eaC:"Taken by the Apollo 17 crew on their way to the Moon, this full view of Earth is one of the most widely shared photographs in history. Africa, Arabia and Antarctica are visible.",eaS:"Photo: NASA / Apollo 17 (AS17-148-22727, public domain)",suT:"The Sun from space",suC:"A full view of the Sun in extreme ultraviolet (false colour) from NASA's Solar Dynamics Observatory. Bright arcs on the limb are prominences; bright patches are active regions.",suS:"Photo: NASA / SDO (public domain)",noImg:"Image unavailable right now",mapHint:"\u{1F446} Tap a planet on the map to travel",mapBig:"Solar system map \xB7 tap a planet to travel",mapClose:"Close",a11C:"Apollo 11: Armstrong and Aldrin landed in the Sea of Tranquility and spent about 2.5 hours on the surface. This is Aldrin's bootprint in the lunar soil \u2014 with no wind on the Moon, it may still be there today.",a11S:"Photo: NASA / Apollo 11 (AS11-40-5878, public domain)",moonP:'The Moon formed about 4.5 billion years ago, most likely from a giant impact between the early Earth and a Mars-sized body. It is tidally locked, always showing us the same face; the dark "maria" are ancient basaltic lava plains.',phys:"PHYSICAL",physRows:[["Age","~4.5 billion yrs"],["Radius","1,737.4 km"],["Mass","7.342 \xD7 10\xB2\xB2 kg"],["Surface gravity","1.62 m/s\xB2 (1/6 of Earth)"],["Mean distance","384,400 km"],["Orbital period","27.32 days"],["Lunar phase cycle","29.53 days"],["Surface temperature","\u2212173 to 127 \xB0C"],["Receding from Earth","~3.8 cm / yr"]],landed:"NATIONS THAT LANDED",latest:"2026 \xB7 LATEST",latestP:"Artemis II flew a crew around the Moon in April. Chang'e 7 slipped to 2027, as did Blue Origin's MK1 and Intuitive Machines' IM-3.",data:"Compiled from public NASA, CNSA, ISRO and JAXA sources. Landing coordinates are approximate. Moon imagery: NASA's Scientific Visualization Studio CGI Moon Kit, LRO LROC data (NASA/GSFC/Arizona State University).",loading:"LOADING THE MOON"}},Dt=()=>Sc[Je];Object.assign(Sc.zh,{tabsS:["\u592A\u9633","\u7ED3\u6784","\u5927\u5C0F\u5BF9\u6BD4"],holoS:"\u65E5\u9762\u5750\u6807 \xB7 HELIOGRAPHIC",cmpToggle:"\u5927\u5C0F\u5BF9\u6BD4",sunName:"\u592A\u9633",sunSub:"THE SUN \xB7 \u592A\u9633\u7CFB\u7684\u4E2D\u5FC3\u6052\u661F",sunP:"\u592A\u9633\u662F\u4E00\u9897\u7EA6 46 \u4EBF\u5C81\u7684\u9EC4\u77EE\u661F\uFF0C\u5360\u6574\u4E2A\u592A\u9633\u7CFB\u8D28\u91CF\u7684 99.86%\u3002\u5B83\u7684\u6838\u5FC3\u6BCF\u79D2\u628A\u7EA6 6 \u4EBF\u5428\u6C22\u805A\u53D8\u6210\u6C26\uFF0C\u91CA\u653E\u51FA\u7684\u5149\u548C\u70ED\u5927\u7EA6 8 \u5206 20 \u79D2\u540E\u5230\u8FBE\u5730\u7403\u3002\u8868\u9762\u7FFB\u6EDA\u7684\u201C\u7C73\u7C92\u201D\u662F\u4E0A\u5347\u7684\u70ED\u7B49\u79BB\u5B50\u4F53\uFF0C\u8FB9\u7F18\u55B7\u51FA\u7684\u706B\u7130\u72B6\u7ED3\u6784\u662F\u65E5\u73E5\u548C\u9488\u72B6\u7269\u3002",sPhys:[["\u5E74\u9F84","\u7EA6 46 \u4EBF\u5E74"],["\u534A\u5F84","696,340 km\uFF08\u5730\u7403\u7684 109 \u500D\uFF09"],["\u8D28\u91CF","1.989 \xD7 10\xB3\u2070 kg\uFF08\u5730\u7403\u7684 33.3 \u4E07\u500D\uFF09"],["\u8868\u9762\u6E29\u5EA6","\u7EA6 5,500 \xB0C"],["\u6838\u5FC3\u6E29\u5EA6","\u7EA6 1,500 \u4E07 \xB0C"],["\u4E0E\u5730\u7403\u5E73\u5747\u8DDD\u79BB","\u7EA6 1.496 \u4EBF km"],["\u9633\u5149\u5230\u8FBE\u5730\u7403","\u7EA6 8 \u5206 20 \u79D2"],["\u81EA\u8F6C\u5468\u671F","\u8D64\u9053\u7EA6 25 \u5929\uFF0C\u4E24\u6781\u7EA6 35 \u5929"],["\u4E3B\u8981\u6210\u5206","\u6C22\u7EA6 73%\uFF0C\u6C26\u7EA6 25%"]],sNowT:"\u5F53\u524D\u6D3B\u52A8 \xB7 ACTIVITY",sNow:"\u592A\u9633\u6D3B\u52A8\u5927\u7EA6 11 \u5E74\u4E3A\u4E00\u4E2A\u5468\u671F\u30022024 \u5E74 10 \u6708\uFF0CNASA \u548C NOAA \u5BA3\u5E03\u592A\u9633\u8FDB\u5165\u7B2C 25 \u6D3B\u52A8\u5468\u7684\u6781\u5927\u671F\uFF0C\u9ED1\u5B50\u3001\u8000\u6591\u548C\u65E5\u5195\u7269\u8D28\u629B\u5C04\u90FD\u66F4\u9891\u7E41\uFF0C\u5730\u7403\u4E0A\u4E5F\u66F4\u5BB9\u6613\u770B\u5230\u6781\u5149\u3002",sNote:"\u8868\u9762\u7EB9\u7406\u3001\u706B\u7130\u548C\u65E5\u73E5\u7531\u7A0B\u5E8F\u5B9E\u65F6\u751F\u6210\uFF0C\u4F9D\u636E\u771F\u5B9E\u89C2\u6D4B\u5F62\u6001\u7ED8\u5236\uFF1B\u592A\u9633\u4E0E\u5730\u7403\u7684\u5927\u5C0F\u6309\u771F\u5B9E\u6BD4\u4F8B\uFF0C\u8DDD\u79BB\u505A\u4E86\u538B\u7F29\u3002",layIntro:"\u592A\u9633\u7531\u5185\u5230\u5916\u5206\u4E3A\u51E0\u5C42\uFF1A",tempT:"\u6E29\u5EA6",layers:[["\u6838\u5FC3 \xB7 CORE","\u7EA6 1,500 \u4E07 \xB0C","\u6838\u805A\u53D8\u53D1\u751F\u7684\u5730\u65B9\uFF0C\u6C22\u5728\u8FD9\u91CC\u805A\u53D8\u6210\u6C26\uFF0C\u4EA7\u751F\u592A\u9633\u5168\u90E8\u7684\u80FD\u91CF\u3002"],["\u8F90\u5C04\u533A \xB7 RADIATIVE ZONE","\u7EA6 700 \u4E07 \u2192 200 \u4E07 \xB0C","\u80FD\u91CF\u4EE5\u5149\u5B50\u7684\u5F62\u5F0F\u5411\u5916\u4F20\u9012\uFF0C\u4E00\u4E2A\u5149\u5B50\u8981\u82B1\u51E0\u4E07\u5E74\u751A\u81F3\u66F4\u4E45\u624D\u80FD\u7A7F\u8FC7\u8FD9\u4E00\u5C42\u3002"],["\u5BF9\u6D41\u533A \xB7 CONVECTIVE ZONE","\u7EA6 200 \u4E07 \u2192 5,700 \xB0C","\u70ED\u7B49\u79BB\u5B50\u4F53\u50CF\u6CB8\u817E\u7684\u6C34\u4E00\u6837\u7FFB\u6EDA\u4E0A\u5347\uFF0C\u628A\u80FD\u91CF\u5E26\u5230\u8868\u9762\uFF0C\u5F62\u6210\u6211\u4EEC\u770B\u5230\u7684\u7C73\u7C92\u7EC4\u7EC7\u3002"],["\u5149\u7403\u5C42 \xB7 PHOTOSPHERE","\u7EA6 5,500 \xB0C","\u6211\u4EEC\u770B\u5230\u7684\u201C\u8868\u9762\u201D\uFF0C\u592A\u9633\u9ED1\u5B50\u5C31\u51FA\u73B0\u5728\u8FD9\u91CC\u3002"],["\u8272\u7403\u5C42 \xB7 CHROMOSPHERE","\u7EA6 6,000 \u2192 2 \u4E07 \xB0C","\u65E5\u5168\u98DF\u65F6\u80FD\u770B\u5230\u7684\u4E00\u5708\u7EA2\u8272\u8FB9\u7F18\uFF0C\u65E5\u73E5\u548C\u9488\u72B6\u7269\u4ECE\u8FD9\u91CC\u55B7\u51FA\u3002"],["\u65E5\u5195 \xB7 CORONA","100 \u4E07 \xB0C \u4EE5\u4E0A","\u592A\u9633\u6700\u5916\u5C42\u7684\u5927\u6C14\uFF0C\u6E29\u5EA6\u53CD\u800C\u6BD4\u8868\u9762\u9AD8\u5F97\u591A\uFF0C\u81F3\u4ECA\u4ECD\u662F\u79D1\u5B66\u7814\u7A76\u7684\u70ED\u70B9\u3002"]],cmpIntro:"\u592A\u9633\u5230\u5E95\u6709\u591A\u5927\uFF1F\u53F3\u4E0A\u89D2\u300C\u5927\u5C0F\u5BF9\u6BD4\u300D\u6253\u5F00\u540E\uFF0C\u592A\u9633\u65C1\u8FB9\u4F1A\u51FA\u73B0\u540C\u6BD4\u4F8B\u7684\u6728\u661F\u3001\u5730\u7403\u548C\u6708\u7403\uFF1A",cmpT:"\u5BF9\u6BD4 \xB7 SCALE",cmpRows:[["\u76F4\u5F84","\u7EA6 109 \u4E2A\u5730\u7403 \xB7 \u7EA6 10 \u4E2A\u6728\u661F"],["\u4F53\u79EF","\u7EA6 130 \u4E07\u4E2A\u5730\u7403"],["\u8D28\u91CF","\u7EA6 33.3 \u4E07\u4E2A\u5730\u7403"],["\u5360\u592A\u9633\u7CFB\u8D28\u91CF","\u7EA6 99.86%"]],cmpHint:"\u5730\u7403\u5728\u592A\u9633\u65C1\u8FB9\u53EA\u662F\u4E00\u4E2A\u5C0F\u70B9\u2014\u2014\u5982\u679C\u592A\u9633\u662F\u4E00\u4E2A\u7BEE\u7403\uFF0C\u5730\u7403\u53EA\u6709\u4E00\u9897\u829D\u9EBB\u90A3\u4E48\u5927\u3002",cmpJ:"\u6728\u661F JUPITER",cmpE:"\u5730\u7403 EARTH",cmpM:"\u6708\u7403 MOON",sfxT:"\u97F3\u6548",goT:"\u70B9\u51FB\u524D\u5F80",loading:"\u6B63\u5728\u8FDB\u5165\u592A\u9633\u7CFB \xB7 LOADING",here:"\u5F53\u524D",open:"\u5DF2\u5F00\u653E",closed:"\u672A\u5F00\u653E",closedT:"\u672A\u5F00\u653E\uFF0C\u656C\u8BF7\u671F\u5F85",loadingE:"\u52A0\u8F7D\u4E2D\u2026",pickedT:"\u4F60\u70B9\u4E2D\u7684\u8FD9\u9897\u536B\u661F \xB7 PICKED",title:"\u592A\u9633\u7CFB\u7A7A\u95F4\u56FE",sub:"SOLAR SYSTEM ATLAS \xB7 \u6708\u7403 \xB7 \u5730\u7403",bMoon:"\u{1F319} \u6708\u7403",bEarth:"\u{1F30D} \u5730\u7403",bEarthL:"\u{1F30D} \u5730\u7403\u52A0\u8F7D\u4E2D\u2026",tabsE:["\u5730\u7403","\u661F\u5EA7","\u91CD\u70B9\u536B\u661F"],holoE:"\u5730\u7406\u5750\u6807 \xB7 GEOGRAPHIC",timeT:"\u65F6\u95F4\u500D\u901F",labelsT:"\u6807\u7B7E",cloudsT:"\u4E91\u5C42",earthName:"\u5730\u7403",earthSub:"EARTH \xB7 \u592A\u9633\u7CFB\u7B2C\u4E09\u9897\u884C\u661F",earthP:"\u5730\u7403\u7EA6\u5728 45.4 \u4EBF\u5E74\u524D\u5F62\u6210\uFF0C\u662F\u76EE\u524D\u5DF2\u77E5\u552F\u4E00\u5B58\u5728\u751F\u547D\u7684\u661F\u7403\u3002\u8868\u9762\u7EA6 71% \u88AB\u6D77\u6D0B\u8986\u76D6\uFF0C\u5927\u6C14\u5C42\u548C\u78C1\u573A\u4FDD\u62A4\u7740\u5730\u8868\u514D\u53D7\u592A\u9633\u98CE\u548C\u5B87\u5B99\u5C04\u7EBF\u7684\u4F24\u5BB3\u3002",ePhys:[["\u5E74\u9F84","\u7EA6 45.4 \u4EBF\u5E74"],["\u534A\u5F84","6,371 km"],["\u8D28\u91CF","5.972 \xD7 10\xB2\u2074 kg"],["\u8868\u9762\u91CD\u529B","9.81 m/s\xB2"],["\u81EA\u8F6C\u5468\u671F","23 \u65F6 56 \u5206"],["\u516C\u8F6C\u5468\u671F","365.25 \u5929"],["\u4E0E\u592A\u9633\u5E73\u5747\u8DDD\u79BB","\u7EA6 1.496 \u4EBF km"],["\u81EA\u8F6C\u8F74\u503E\u89D2","23.44\xB0"],["\u6D77\u6D0B\u8986\u76D6","\u7EA6 71%"]],satStat:"\u5728\u8F68\u536B\u661F \xB7 SATELLITES",satRows:[["\u5728\u8F68\u536B\u661F","\u7EA6 20,290 \u9897"],["\u6B63\u5728\u5DE5\u4F5C","\u7EA6 16,800 \u9897"],["\u5176\u4E2D\u661F\u94FE","10,838 \u9897\uFF08\u7EA6\u4E09\u5206\u4E4B\u4E8C\uFF09"],["\u4F4E\u5730\u7403\u8F68\u9053","\u7EA6 17,781 \u9897\uFF08< 2,000 km\uFF09"]],simNote:"\u536B\u661F\u6570\u91CF\u4E3A\u771F\u5B9E\u7EDF\u8BA1\uFF1B\u8F68\u9053\u9AD8\u5EA6\u3001\u503E\u89D2\u4E3A\u516C\u5F00\u53C2\u6570\uFF0C\u536B\u661F\u5728\u8F68\u9053\u4E0A\u7684\u5177\u4F53\u4F4D\u7F6E\u4E3A\u6A21\u62DF\uFF0C\u5E76\u975E\u5B9E\u65F6\u4F4D\u7F6E\u3002\u65F6\u95F4\u9ED8\u8BA4\u52A0\u901F 60 \u500D\u3002",eData:"\u536B\u661F\u7EDF\u8BA1\uFF1AKeepTrack \u536B\u661F\u76EE\u5F55\uFF082026 \u5E74 10 \u6708\uFF09\u3002\u5730\u7403\u8D34\u56FE\uFF1ASolar System Scope\uFF08CC BY 4.0\uFF09\u3002",conIntro:"\u70B9\u51FB\u67E5\u770B\u5404\u661F\u5EA7\uFF0C\u753B\u9762\u4E2D\u6BCF\u4E2A\u5149\u70B9\u4EE3\u8868\u4E00\u9897\u536B\u661F\uFF1A",nsIntro:"\u4E00\u4E9B\u6709\u4EE3\u8868\u6027\u7684\u536B\u661F\u548C\u7A7A\u95F4\u7AD9\uFF1A",conFile:"\u661F\u5EA7\u6863\u6848 \xB7 CONSTELLATION",opT:"\u8FD0\u8425\u65B9",cntT:"\u536B\u661F\u6570\u91CF",altT:"\u8F68\u9053\u9AD8\u5EA6",incT:"\u8F68\u9053\u503E\u89D2",lonT:"\u5B9A\u70B9\u7ECF\u5EA6",shown:"\u753B\u9762\u4E2D\u663E\u793A",show:"\u663E\u793A\u8FD9\u4E2A\u661F\u5EA7",hide:"\u9690\u85CF\u8FD9\u4E2A\u661F\u5EA7",geoPer:"\u7EA6 23 \u65F6 56 \u5206\uFF08\u4E0E\u5730\u7403\u540C\u6B65\uFF09"});Object.assign(Sc.en,{tabsS:["Sun","Layers","Scale"],holoS:"HELIOGRAPHIC COORDINATES",cmpToggle:"Size compare",sunName:"The Sun",sunSub:"THE STAR AT THE CENTRE OF THE SOLAR SYSTEM",sunP:"The Sun is a yellow dwarf about 4.6 billion years old, holding 99.86% of the Solar System's mass. Its core fuses roughly 600 million tonnes of hydrogen into helium every second, and that light reaches Earth about 8 minutes 20 seconds later. The churning granules are rising hot plasma; the flame-like features at the edge are prominences and spicules.",sPhys:[["Age","~4.6 billion yrs"],["Radius","696,340 km (109 \xD7 Earth)"],["Mass","1.989 \xD7 10\xB3\u2070 kg (333,000 \xD7 Earth)"],["Surface temperature","~5,500 \xB0C"],["Core temperature","~15 million \xB0C"],["Mean distance from Earth","~149.6 million km"],["Sunlight to Earth","~8 min 20 s"],["Rotation","~25 days at equator, ~35 at poles"],["Composition","~73% hydrogen, ~25% helium"]],sNowT:"ACTIVITY",sNow:"Solar activity follows a roughly 11-year cycle. In October 2024, NASA and NOAA announced the Sun had reached the solar maximum period of Solar Cycle 25, bringing more sunspots, flares, coronal mass ejections and auroras.",sNote:"Surface texture, flames and prominences are generated live, modelled on real observations; the Sun and Earth are to true scale, distances are compressed.",layIntro:"From the inside out, the Sun has several layers:",tempT:"Temperature",layers:[["CORE","~15 million \xB0C","Where fusion turns hydrogen into helium, producing all of the Sun's energy."],["RADIATIVE ZONE","~7 \u2192 2 million \xB0C","Energy travels outward as photons; one can take tens of thousands of years or more to cross it."],["CONVECTIVE ZONE","~2 million \u2192 5,700 \xB0C","Hot plasma boils upward like water, carrying energy to the surface and forming granules."],["PHOTOSPHERE","~5,500 \xB0C","The visible \u201Csurface\u201D, where sunspots appear."],["CHROMOSPHERE","~6,000 \u2192 20,000 \xB0C","The red rim seen during total eclipses; prominences and spicules rise from here."],["CORONA","Over 1 million \xB0C","The outer atmosphere \u2014 far hotter than the surface, still an open research question."]],cmpIntro:"How big is the Sun? Turn on \u201CSize compare\u201D (top right) to see Jupiter, Earth and the Moon beside it, to scale:",cmpT:"SCALE",cmpRows:[["Diameter","~109 Earths \xB7 ~10 Jupiters"],["Volume","~1.3 million Earths"],["Mass","~333,000 Earths"],["Share of Solar System mass","~99.86%"]],cmpHint:"Beside the Sun, Earth is just a dot \u2014 if the Sun were a basketball, Earth would be about the size of a sesame seed.",cmpJ:"JUPITER",cmpE:"EARTH",cmpM:"MOON",sfxT:"Sound",goT:"Tap to fly there",loading:"ENTERING THE SOLAR SYSTEM",here:"Viewing",open:"Open",closed:"Not open yet",closedT:"Not open yet \u2014 coming soon",loadingE:"Loading\u2026",pickedT:"THE SATELLITE YOU PICKED",title:"Solar System Atlas",sub:"SOLAR SYSTEM ATLAS \xB7 MOON \xB7 EARTH",bMoon:"\u{1F319} Moon",bEarth:"\u{1F30D} Earth",bEarthL:"\u{1F30D} Loading Earth\u2026",tabsE:["Earth","Constellations","Notable"],holoE:"GEOGRAPHIC COORDINATES",timeT:"Time speed",labelsT:"Labels",cloudsT:"Clouds",earthName:"Earth",earthSub:"THE THIRD PLANET FROM THE SUN",earthP:"Earth formed about 4.54 billion years ago and is the only world known to host life. Oceans cover about 71% of its surface, while its atmosphere and magnetic field shield it from the solar wind and cosmic rays.",ePhys:[["Age","~4.54 billion yrs"],["Radius","6,371 km"],["Mass","5.972 \xD7 10\xB2\u2074 kg"],["Surface gravity","9.81 m/s\xB2"],["Rotation","23 h 56 min"],["Orbital period","365.25 days"],["Mean distance to Sun","~149.6 million km"],["Axial tilt","23.44\xB0"],["Ocean cover","~71%"]],satStat:"SATELLITES IN ORBIT",satRows:[["In orbit","~20,290"],["Working","~16,800"],["Of which Starlink","10,838 (~two-thirds)"],["Low Earth orbit","~17,781 (< 2,000 km)"]],simNote:"Satellite counts are real; altitudes and inclinations use published parameters, but positions along each orbit are simulated, not live. Time runs 60\xD7 faster by default.",eData:"Satellite counts: KeepTrack catalog (Oct 2026). Earth textures: Solar System Scope (CC BY 4.0).",conIntro:"Tap a constellation \u2014 every dot on screen is one satellite:",nsIntro:"A few representative satellites and stations:",conFile:"CONSTELLATION",opT:"Operator",cntT:"Satellites",altT:"Altitude",incT:"Inclination",lonT:"Longitude",shown:"Dots shown",show:"Show constellation",hide:"Hide constellation",geoPer:"23 h 56 min (geosynchronous)"});var tt={USSR:{zh:"\u82CF\u8054 / \u4FC4\u7F57\u65AF",en:"USSR / Russia",c:"#e5604a"},USA:{zh:"\u7F8E\u56FD",en:"USA",c:"#5aa2ff"},CHN:{zh:"\u4E2D\u56FD",en:"China",c:"#f4bf4f"},IND:{zh:"\u5370\u5EA6",en:"India",c:"#45d4a4"},JPN:{zh:"\u65E5\u672C",en:"Japan",c:"#f27fb0"},ISR:{zh:"\u4EE5\u8272\u5217",en:"Israel",c:"#b8c2d4"},KOR:{zh:"\u97E9\u56FD",en:"South Korea",c:"#a98bff"},GBR:{zh:"\u82F1\u56FD",en:"UK",c:"#7fd1ff"},EU:{zh:"\u6B27\u6D32",en:"Europe",c:"#9fb4ff"},INT:{zh:"\u56FD\u9645",en:"International",c:"#e8e2d6"}},ot=r=>tt[r][Je],on=[["luna2","\u6708\u74032\u53F7","Luna 2","USSR","1959-09-14",29.1,0,"impact",["\u96E8\u6D77\u4E1C\u7F18","\u4EBA\u7C7B\u7B2C\u4E00\u4E2A\u62B5\u8FBE\u6708\u7403\u8868\u9762\u7684\u4EBA\u9020\u7269\u4F53\uFF08\u786C\u7740\u9646\u649E\u51FB\uFF09\u3002"],["East of Mare Imbrium","First human-made object to reach the lunar surface (hard impact)."]],["luna9","\u6708\u74039\u53F7","Luna 9","USSR","1966-02-03",7.08,-64.37,"soft",["\u98CE\u66B4\u6D0B","\u4EBA\u7C7B\u9996\u6B21\u5728\u6708\u7403\u5B9E\u73B0\u8F6F\u7740\u9646\uFF0C\u5E76\u4F20\u56DE\u7B2C\u4E00\u5F20\u6708\u9762\u7167\u7247\u3002"],["Oceanus Procellarum","First soft landing on the Moon and first photos from its surface."],{f:1}],["surv1","\u52D8\u6D4B\u80051\u53F7","Surveyor 1","USA","1966-06-02",-2.47,-43.34,"soft",["\u98CE\u66B4\u6D0B","\u7F8E\u56FD\u9996\u6B21\u6708\u7403\u8F6F\u7740\u9646\uFF0C\u4F20\u56DE\u4E00\u4E07\u591A\u5F20\u6708\u9762\u7167\u7247\u3002"],["Oceanus Procellarum","First US soft landing; returned over 10,000 images."]],["a11","\u963F\u6CE2\u7F5711\u53F7","Apollo 11","USA","1969-07-20",.674,23.473,"crew",["\u9759\u6D77","\u4EBA\u7C7B\u9996\u6B21\u767B\u6708\u3002\u5B87\u822A\u5458\u5728\u6708\u9762\u505C\u7559\u7EA6 21.5 \u5C0F\u65F6\uFF0C\u8231\u5916\u6D3B\u52A8\u7EA6 2.5 \u5C0F\u65F6\u3002"],["Mare Tranquillitatis","First crewed landing. About 21.5 hours on the surface and ~2.5 hours of moonwalking."],{f:1,crew:["\u963F\u59C6\u65AF\u7279\u6717\u3001\u5965\u5C14\u5FB7\u6797\uFF08\u67EF\u6797\u65AF\u7559\u5B88\u8F68\u9053\uFF09","Armstrong, Aldrin (Collins in orbit)"],smp:"21.5 kg"}],["a12","\u963F\u6CE2\u7F5712\u53F7","Apollo 12","USA","1969-11-19",-3.012,-23.422,"crew",["\u98CE\u66B4\u6D0B","\u7CBE\u786E\u964D\u843D\u5728\u52D8\u6D4B\u80053\u53F7\u65C1\u8FB9\uFF0C\u5E76\u628A\u5B83\u7684\u90E8\u4EF6\u5E26\u56DE\u5730\u7403\u7814\u7A76\u3002"],["Oceanus Procellarum","Pinpoint landing beside Surveyor 3; parts of it were brought back to Earth."],{crew:["\u5EB7\u62C9\u5FB7\u3001\u6BD4\u6069","Conrad, Bean"],smp:"34.3 kg"}],["luna16","\u6708\u740316\u53F7","Luna 16","USSR","1970-09-20",-.68,56.3,"soft",["\u4E30\u5BCC\u6D77","\u9996\u4E2A\u65E0\u4EBA\u6708\u7403\u91C7\u6837\u8FD4\u56DE\u4EFB\u52A1\u3002"],["Mare Fecunditatis","First robotic sample return."],{smp:"101 g"}],["luna17","\u6708\u740317\u53F7","Luna 17","USSR","1970-11-17",38.24,-35,"soft",["\u96E8\u6D77","\u91CA\u653E\u201C\u6708\u7403\u8F661\u53F7\u201D\uFF0C\u9996\u8F86\u5728\u5730\u5916\u5929\u4F53\u4E0A\u884C\u9A76\u7684\u9065\u63A7\u5DE1\u89C6\u5668\uFF0C\u884C\u9A76\u7EA6 10.5 km\u3002"],["Mare Imbrium","Deployed Lunokhod 1, the first remote-controlled rover on another world (~10.5 km driven)."],{f:1,rov:["\u6708\u7403\u8F661\u53F7","Lunokhod 1"]}],["a14","\u963F\u6CE2\u7F5714\u53F7","Apollo 14","USA","1971-02-05",-3.645,-17.471,"crew",["\u5F17\u62C9\xB7\u6BDB\u7F57\u9AD8\u5730","\u8C22\u6CFC\u5FB7\u5728\u6708\u9762\u6253\u4E86\u4E24\u6746\u9AD8\u5C14\u592B\u7403\u3002"],["Fra Mauro highlands","Shepard hit two golf balls on the Moon."],{crew:["\u8C22\u6CFC\u5FB7\u3001\u7C73\u5207\u5C14","Shepard, Mitchell"],smp:"42.8 kg"}],["a15","\u963F\u6CE2\u7F5715\u53F7","Apollo 15","USA","1971-07-30",26.132,3.634,"crew",["\u54C8\u5FB7\u5229-\u4E9A\u5E73\u5B81","\u7B2C\u4E00\u6B21\u5728\u6708\u9762\u9A7E\u9A76\u6708\u7403\u8F66\uFF08LRV\uFF09\u3002"],["Hadley\u2013Apennine","First drive of the Lunar Roving Vehicle."],{crew:["\u65AF\u79D1\u7279\u3001\u6B27\u6587","Scott, Irwin"],smp:"77 kg",rov:["LRV \u6708\u7403\u8F66","LRV"]}],["luna20","\u6708\u740320\u53F7","Luna 20","USSR","1972-02-21",3.79,56.62,"soft",["\u4E30\u5BCC\u6D77\u5317\u90E8\u9AD8\u5730","\u65E0\u4EBA\u91C7\u6837\u8FD4\u56DE\u4EFB\u52A1\u3002"],["Highlands north of Mare Fecunditatis","Robotic sample return."],{smp:"55 g"}],["a16","\u963F\u6CE2\u7F5716\u53F7","Apollo 16","USA","1972-04-21",-8.973,15.5,"crew",["\u7B1B\u5361\u5C14\u9AD8\u5730","\u9996\u6B21\u5728\u6708\u7403\u9AD8\u5730\u7740\u9646\u8003\u5BDF\u3002"],["Descartes Highlands","First landing in the lunar highlands."],{crew:["\u6768\u3001\u675C\u514B","Young, Duke"],smp:"95.7 kg",rov:["LRV \u6708\u7403\u8F66","LRV"]}],["a17","\u963F\u6CE2\u7F5717\u53F7","Apollo 17","USA","1972-12-11",20.191,30.772,"crew",["\u91D1\u725B-\u5229\u7279\u7F57\u8C37","\u8FC4\u4ECA\u6700\u540E\u4E00\u6B21\u8F7D\u4EBA\u767B\u6708\uFF1B\u65BD\u5BC6\u7279\u662F\u552F\u4E00\u767B\u4E0A\u6708\u7403\u7684\u5730\u8D28\u5B66\u5BB6\u3002"],["Taurus\u2013Littrow valley","Last crewed landing to date; Schmitt is the only geologist to walk on the Moon."],{f:1,crew:["\u585E\u5C14\u5357\u3001\u65BD\u5BC6\u7279","Cernan, Schmitt"],smp:"110.5 kg",rov:["LRV \u6708\u7403\u8F66","LRV"]}],["luna21","\u6708\u740321\u53F7","Luna 21","USSR","1973-01-15",25.85,30.45,"soft",["\u52D2\u83AB\u5C3C\u8036\u649E\u51FB\u5751","\u201C\u6708\u7403\u8F662\u53F7\u201D\u884C\u9A76\u7EA6 39 km\uFF0C\u4FDD\u6301\u5730\u5916\u884C\u9A76\u7EAA\u5F55\u957F\u8FBE 40 \u5E74\u3002"],["Le Monnier crater","Lunokhod 2 drove ~39 km, an off-world driving record for 40 years."],{rov:["\u6708\u7403\u8F662\u53F7","Lunokhod 2"]}],["luna24","\u6708\u740324\u53F7","Luna 24","USSR","1976-08-18",12.71,62.21,"soft",["\u5371\u6D77","\u82CF\u8054\u6700\u540E\u4E00\u6B21\u6708\u7403\u4EFB\u52A1\u3002\u6B64\u540E 37 \u5E74\u518D\u65E0\u822A\u5929\u5668\u5728\u6708\u9762\u8F6F\u7740\u9646\u3002"],["Mare Crisium","Last Soviet lunar mission; no soft landing followed for 37 years."],{smp:"170 g"}],["ce3","\u5AE6\u5A25\u4E09\u53F7","Chang'e 3","CHN","2013-12-14",44.12,-19.51,"soft",["\u96E8\u6D77","\u4E2D\u56FD\u9996\u6B21\u6708\u7403\u8F6F\u7740\u9646\uFF0C\u4E5F\u662F 1976 \u5E74\u4EE5\u6765\u4EBA\u7C7B\u9996\u6B21\u6708\u9762\u8F6F\u7740\u9646\u3002"],["Mare Imbrium","China's first soft landing and the first on the Moon since 1976."],{rov:["\u7389\u5154\u53F7","Yutu"]}],["ce4","\u5AE6\u5A25\u56DB\u53F7","Chang'e 4","CHN","2019-01-03",-45.44,177.6,"soft",["\u51AF\xB7\u5361\u95E8\u649E\u51FB\u5751\uFF08\u6708\u7403\u80CC\u9762\uFF09","\u4EBA\u7C7B\u9996\u6B21\u5728\u6708\u7403\u80CC\u9762\u8F6F\u7740\u9646\uFF0C\u901A\u8FC7\u201C\u9E4A\u6865\u201D\u4E2D\u7EE7\u661F\u4E0E\u5730\u7403\u901A\u4FE1\u3002"],["Von K\xE1rm\xE1n crater (far side)","First soft landing on the far side, talking to Earth via the Queqiao relay."],{f:1,rov:["\u7389\u5154\u4E8C\u53F7","Yutu-2"]}],["ce5","\u5AE6\u5A25\u4E94\u53F7","Chang'e 5","CHN","2020-12-01",43.06,-51.92,"soft",["\u98CE\u66B4\u6D0B \u5415\u59C6\u514B\u5C71\u9644\u8FD1","44 \u5E74\u6765\u9996\u6B21\u6708\u7403\u91C7\u6837\u8FD4\u56DE\u3002"],["Near Mons R\xFCmker, Oceanus Procellarum","First lunar sample return in 44 years."],{f:1,smp:"1,731 g"}],["cy3","\u6708\u82393\u53F7","Chandrayaan-3","IND","2023-08-23",-69.37,32.32,"soft",["\u6708\u7403\u5357\u6781\u9644\u8FD1","\u5370\u5EA6\u9996\u6B21\u6708\u7403\u8F6F\u7740\u9646\uFF0C\u662F\u5F53\u65F6\u79BB\u6708\u7403\u5357\u6781\u6700\u8FD1\u7684\u7740\u9646\u3002"],["Near the south pole","India's first soft landing, the closest to the south pole at the time."],{f:1,rov:["\u666E\u62C9\u683C\u626C\u53F7","Pragyan"]}],["slim","SLIM","SLIM","JPN","2024-01-20",-13.32,25.25,"soft",["SHIOLI \u649E\u51FB\u5751\u9644\u8FD1","\u65E5\u672C\u9996\u6B21\u6708\u7403\u8F6F\u7740\u9646\uFF0C\u7740\u9646\u8BEF\u5DEE\u7EA6 100 m \u4EE5\u5185\uFF0C\u4F46\u6700\u7EC8\u4EE5\u5012\u7ACB\u59FF\u6001\u7740\u9646\u3002"],["Near SHIOLI crater","Japan's first soft landing, within ~100 m of target, though it came to rest upside down."],{f:1}],["im1","\u5965\u5FB7\u4FEE\u65AF\u53F7","IM-1 Odysseus","USA","2024-02-22",-80.13,1.44,"soft",["\u5357\u6781 \u9A6C\u62C9\u73C0\u7279 A \u9644\u8FD1","\u9996\u6B21\u7531\u5546\u4E1A\u516C\u53F8\u5B8C\u6210\u7684\u6708\u7403\u8F6F\u7740\u9646\uFF08Intuitive Machines\uFF09\uFF0C\u7740\u9646\u540E\u4FA7\u5012\u3002"],["Near Malapert A, south pole","First commercial soft landing (Intuitive Machines); tipped over after touchdown."]],["ce6","\u5AE6\u5A25\u516D\u53F7","Chang'e 6","CHN","2024-06-02",-41.64,-153.99,"soft",["\u963F\u6CE2\u7F57\u76C6\u5730\uFF08\u6708\u7403\u80CC\u9762\uFF09","\u4EBA\u7C7B\u9996\u6B21\u4ECE\u6708\u7403\u80CC\u9762\u91C7\u6837\u8FD4\u56DE\u3002"],["Apollo basin (far side)","First sample return from the lunar far side."],{f:1,smp:"1,935.3 g"}],["bg1","\u84DD\u8272\u5E7D\u70751\u53F7","Blue Ghost M1","USA","2025-03-02",18.56,61.81,"soft",["\u5371\u6D77","\u8424\u706B\u866B\u822A\u5929\uFF08Firefly\uFF09\u7684\u5546\u4E1A\u7740\u9646\u5668\uFF0C\u9996\u4E2A\u59FF\u6001\u5B8C\u597D\u3001\u5B8C\u6574\u8FD0\u884C\u7684\u5546\u4E1A\u6708\u7403\u7740\u9646\uFF0C\u5DE5\u4F5C\u7EA6 14 \u5929\u3002"],["Mare Crisium","Firefly's lander: first fully successful upright commercial landing, operating ~14 days."],{f:1}],["im2","\u96C5\u5178\u5A1C\u53F7","IM-2 Athena","USA","2025-03-06",-84.79,29.19,"soft",["\u5357\u6781 \u7A46\u987F\u5C71\u9644\u8FD1","\u843D\u5728\u649E\u51FB\u5751\u5185\u5E76\u4FA7\u7FFB\uFF0C\u4EFB\u52A1\u63D0\u524D\u7ED3\u675F\u3002"],["Near Mons Mouton, south pole","Landed on its side in a crater; mission ended early."]],["beresheet","\u521B\u4E16\u7EAA\u53F7","Beresheet","ISR","2019-04-11",32.6,19.3,"fail",["\u6F84\u6D77","\u9996\u4E2A\u79C1\u4EBA\u8D44\u52A9\u7684\u6708\u7403\u7740\u9646\u5C1D\u8BD5\uFF0C\u4E0B\u964D\u65F6\u4E3B\u53D1\u52A8\u673A\u6545\u969C\u5760\u6BC1\u3002"],["Mare Serenitatis","First privately funded landing attempt; main engine failure caused a crash."]],["vikram","\u7EF4\u514B\u62C9\u59C6\u53F7","Chandrayaan-2 Vikram","IND","2019-09-06",-70.88,22.78,"fail",["\u6708\u7403\u5357\u6781\u9644\u8FD1","\u7740\u9646\u5668\u5728\u6700\u540E\u4E0B\u964D\u9636\u6BB5\u5931\u8054\u5760\u6BC1\uFF1B\u5176\u8F68\u9053\u5668\u81F3\u4ECA\u4ECD\u5728\u5DE5\u4F5C\u3002"],["Near the south pole","Lost contact in final descent and crashed; its orbiter still works today."]],["hakuto1","\u767D\u5154-R M1","HAKUTO-R M1","JPN","2023-04-26",47.5,44.4,"fail",["\u963F\u7279\u62C9\u65AF\u649E\u51FB\u5751","\u65E5\u672C ispace \u516C\u53F8\uFF0C\u9AD8\u5EA6\u8BA1\u8BEF\u5224\u5BFC\u81F4\u71C3\u6599\u8017\u5C3D\u5760\u6BC1\u3002"],["Atlas crater","ispace (Japan): altitude misjudgment led to fuel exhaustion and a crash."]],["luna25","\u6708\u740325\u53F7","Luna 25","USSR","2023-08-19",-57.86,61.36,"fail",["\u5357\u6781\u5730\u533A","\u4FC4\u7F57\u65AF 47 \u5E74\u6765\u9996\u4E2A\u6708\u7403\u4EFB\u52A1\uFF0C\u53D8\u8F68\u53D1\u52A8\u673A\u5F02\u5E38\u5BFC\u81F4\u5760\u6BC1\u3002"],["South polar region","Russia's first lunar mission in 47 years; an engine anomaly caused a crash."]],["hakuto2","\u575A\u97E7\u53F7","HAKUTO-R M2","JPN","2025-06-06",60.5,-4.6,"fail",["\u51B7\u6D77","ispace \u7B2C\u4E8C\u6B21\u5C1D\u8BD5\uFF0C\u6FC0\u5149\u6D4B\u8DDD\u5F02\u5E38\u518D\u6B21\u5760\u6BC1\u3002"],["Mare Frigoris","ispace's second attempt; a laser rangefinder issue led to another crash."]]].map(r=>({id:r[0],zh:r[1],en:r[2],cty:r[3],date:r[4],year:+r[4].slice(0,4),lat:r[5],lon:r[6],type:r[7],tx:{zh:r[8],en:r[9]},...r[10]||{}})),ut=r=>Je==="zh"?r.zh:r.en,Zm=[{id:"art2",zh:"\u963F\u8033\u5FD2\u5F25\u65AF2\u53F7",en:"Artemis II",cty:"USA",date:{zh:"2026.04.06",en:"2026.04.06"},year:2026.27,type:"flyby",note:{zh:"\u8F7D\u4EBA\u7ED5\u6708\u98DE\u884C\uFF08\u6000\u65AF\u66FC\u3001\u683C\u6D1B\u5F17\u3001\u79D1\u8D6B\u3001\u6C49\u68EE\uFF09\uFF0C\u6700\u8FDC\u5230\u8FBE\u8DDD\u5730\u7403 406,771 km\uFF0C\u5237\u65B0\u4EBA\u7C7B\u6700\u8FDC\u98DE\u884C\u7EAA\u5F55\u3002\u672A\u7740\u9646\u3002",en:"Crewed lunar flyby (Wiseman, Glover, Koch, Hansen), reaching 406,771 km from Earth \u2014 a new human distance record. No landing."}},{id:"ce7",zh:"\u5AE6\u5A25\u4E03\u53F7",en:"Chang'e 7",cty:"CHN",date:{zh:"2027\uFF08\u8BA1\u5212\uFF09",en:"2027 (planned)"},year:2027.3,type:"future",note:{zh:"\u76EE\u6807\u6708\u7403\u5357\u6781\u6C99\u514B\u5C14\u987F\u649E\u51FB\u5751\u8FB9\u7F18\uFF0C\u641C\u5BFB\u6C34\u51B0\u3002\u539F\u8BA1\u5212 2026 \u5E74 8 \u6708\u53D1\u5C04\uFF0C\u5DF2\u63A8\u8FDF\u81F3 2027 \u5E74\u3002",en:"Targets the rim of Shackleton crater near the south pole to hunt for water ice. Planned for Aug 2026, now delayed to 2027."}},{id:"art3",zh:"\u963F\u8033\u5FD2\u5F25\u65AF3\u53F7",en:"Artemis III",cty:"USA",date:{zh:"2027\uFF08\u8BA1\u5212\uFF09",en:"2027 (planned)"},year:2027.6,type:"future",note:{zh:"NASA \u76EE\u6807 2027 \u5E74\u53D1\u5C04\uFF0C2028 \u5E74\u8D77\u5F00\u5C55\u8F7D\u4EBA\u767B\u6708\u3002",en:"NASA targets a 2027 launch, with crewed surface missions from 2028."}}],zn=[{id:"lro",zh:"\u6708\u7403\u52D8\u6D4B\u8F68\u9053\u5668",en:"LRO",cty:"USA",launch:"2009-06-18",arr:"2009-06-23",tx:{zh:["\u4F4E\u6708\u7403\u6781\u8F68\uFF0C\u7EA6 30 \xD7 180 km","\u7EA6 2 \u5C0F\u65F6","\u7ED8\u5236\u4E86\u8FC4\u4ECA\u6700\u7CBE\u7EC6\u7684\u6708\u7403\u5730\u56FE\uFF0C\u62CD\u5230\u4E86\u963F\u6CE2\u7F57\u7740\u9646\u70B9\u7559\u4E0B\u7684\u8BBE\u5907\u548C\u8F66\u8F99\u3002"],en:["Low polar orbit, ~30 \xD7 180 km","~2 h","Made the most detailed Moon maps to date and imaged hardware and tracks at the Apollo sites."]},a:1.3,e:.06,inc:89,raan:15,sp:1},{id:"cy2",zh:"\u6708\u82392\u53F7\u8F68\u9053\u5668",en:"Chandrayaan-2 Orbiter",cty:"IND",launch:"2019-07-22",arr:"2019-08-20",tx:{zh:["\u7EA6 100 km \u5706\u5F62\u6781\u8F68","\u7EA6 2 \u5C0F\u65F6","\u643A\u5E26\u9AD8\u5206\u8FA8\u7387\u76F8\u673A\u548C\u96F7\u8FBE\uFF0C\u641C\u5BFB\u4E24\u6781\u6C34\u51B0\u3002"],en:["~100 km circular polar orbit","~2 h","Carries a high-resolution camera and radar to search for polar water ice."]},a:1.2,e:0,inc:90,raan:75,sp:1.15},{id:"kplo",zh:"\u8D4F\u6708\u53F7",en:"Danuri (KPLO)",cty:"KOR",launch:"2022-08-04",arr:"2022-12-27",tx:{zh:["\u7EA6 100 km \u5706\u5F62\u6781\u8F68","\u7EA6 2 \u5C0F\u65F6","\u97E9\u56FD\u9996\u4E2A\u6708\u7403\u63A2\u6D4B\u5668\uFF0C\u642D\u8F7D NASA \u7684 ShadowCam\uFF0C\u62CD\u6444\u6C38\u4E45\u9634\u5F71\u5751\u5185\u90E8\u3002"],en:["~100 km circular polar orbit","~2 h","Korea's first lunar probe, carrying NASA's ShadowCam to image permanently shadowed craters."]},a:1.25,e:0,inc:90,raan:130,sp:1.08},{id:"qq2",zh:"\u9E4A\u6865\u4E8C\u53F7",en:"Queqiao-2",cty:"CHN",launch:"2024-03-20",arr:"2024-03-24",tx:{zh:["\u5927\u692D\u5706\u51BB\u7ED3\u8F68\u9053\uFF0C\u7EA6 200 \xD7 16,000 km","24 \u5C0F\u65F6","\u6708\u7403\u80CC\u9762\u4E2D\u7EE7\u536B\u661F\uFF0C\u652F\u6301\u5AE6\u5A25\u516D\u53F7\uFF0C\u5E76\u5C06\u670D\u52A1\u5AE6\u5A25\u4E03\u53F7\u3001\u516B\u53F7\u3002"],en:["Elliptical frozen orbit, ~200 \xD7 16,000 km","24 h","Far-side relay satellite; supported Chang'e 6 and will serve Chang'e 7 and 8."]},a:3,e:.58,inc:55,raan:200,sp:.32},{id:"cap",zh:"CAPSTONE",en:"CAPSTONE",cty:"USA",launch:"2022-06-28",arr:"2022-11-13",tx:{zh:["\u8FD1\u76F4\u7EBF\u6655\u8F68\u9053\uFF08NRHO\uFF09\uFF0C\u7EA6 1,600 \xD7 70,000 km","\u7EA6 6.5 \u5929","\u5FAE\u6CE2\u7089\u5927\u5C0F\u7684\u7ACB\u65B9\u661F\uFF0C\u9A8C\u8BC1\u672A\u6765\u201C\u95E8\u6237\u201D\u6708\u7403\u7A7A\u95F4\u7AD9\u5C06\u4F7F\u7528\u7684\u8F68\u9053\u3002"],en:["Near-rectilinear halo orbit, ~1,600 \xD7 70,000 km","~6.5 days","Microwave-oven-sized CubeSat testing the orbit planned for the Gateway station."]},a:4.2,e:.69,inc:88,raan:300,sp:.1},{id:"artP1",zh:"ARTEMIS P1",en:"ARTEMIS P1",cty:"USA",launch:"2007-02-17",arr:"2011-06-27",tx:{zh:["\u9AD8\u692D\u5706\u8F68\u9053\uFF0C\u8FDC\u6708\u70B9\u7EA6 1.9 \u4E07 km","\u7EA6 1 \u5929","\u539F\u4E3A\u7814\u7A76\u5730\u7403\u78C1\u5C42\u7684 THEMIS \u536B\u661F\uFF0C2011 \u5E74\u8F6C\u5165\u7ED5\u6708\u8F68\u9053\uFF0C\u7814\u7A76\u592A\u9633\u98CE\u4E0E\u6708\u7403\u7684\u76F8\u4E92\u4F5C\u7528\u3002"],en:["Highly elliptical, apolune ~19,000 km","~1 day","Originally a THEMIS magnetosphere probe; moved to lunar orbit in 2011 to study how the solar wind hits the Moon."]},a:3.5,e:.6,inc:20,raan:40,sp:.22},{id:"artP2",zh:"ARTEMIS P2",en:"ARTEMIS P2",cty:"USA",launch:"2007-02-17",arr:"2011-07-17",tx:{zh:["\u9AD8\u692D\u5706\u8F68\u9053\uFF0C\u8FDC\u6708\u70B9\u7EA6 1.9 \u4E07 km","\u7EA6 1 \u5929","\u4E0E P1 \u914D\u5BF9\uFF0C\u4E24\u70B9\u540C\u65F6\u6D4B\u91CF\u6708\u7403\u5468\u56F4\u7684\u7B49\u79BB\u5B50\u4F53\u73AF\u5883\u3002"],en:["Highly elliptical, apolune ~19,000 km","~1 day","Paired with P1 for simultaneous two-point plasma measurements around the Moon."]},a:3.6,e:.62,inc:160,raan:110,sp:.2}],nt=()=>innerWidth<=820||innerHeight<=520;var Ci=document.getElementById("c"),an=!1;try{an=sessionStorage.getItem("luna-lite")==="1"}catch(r){}Ci.addEventListener("webglcontextlost",r=>{r.preventDefault();try{sessionStorage.getItem("luna-lite")!=="1"&&(sessionStorage.setItem("luna-lite","1"),location.reload())}catch(e){}});var yt=new ns({canvas:Ci,antialias:!0,powerPreference:"high-performance"});yt.setPixelRatio(Math.min(devicePixelRatio,an?1.25:nt()?1.75:2));yt.outputColorSpace=it;yt.toneMapping=ac;yt.toneMappingExposure=1.25;window.__stage="webgl";var _t=new wa,Oe=new Pt(38,1,.02,1e5);Oe.position.set(0,3,16);var Ee=new gc(Oe,Ci);for(let[r,e,t]of[[3e3,45,.65],[400,120,.9]]){let n=new Float32Array(r*3),i=new Float32Array(r*3);for(let a=0;a<r;a++){let o=new S().randomDirection().multiplyScalar(3e4+Math.random()*2e4);n.set([o.x,o.y,o.z],a*3);let l=Math.random();i.set(l<.2?[.75,.82,1]:l<.4?[1,.86,.7]:[1,.97,.92],a*3)}let s=new Ge;s.setAttribute("position",new et(n,3)),s.setAttribute("color",new et(i,3)),_t.add(new mr(s,new is({size:e,vertexColors:!0,transparent:!0,opacity:t,depthWrite:!1})))}var Qu={moon:"moon_1k.jpg",h:"bump_1k.jpg"},vn=(r,e)=>new Promise(t=>{let n=new Fa().load(r,()=>t(n),void 0,()=>t(n));e&&(n.colorSpace=it),n.anisotropy=Math.min(nt()?4:16,yt.capabilities.getMaxAnisotropy())}),Mr=(r,e,t)=>{let n=(e+180)/360*Math.PI*2,i=(90-r)/180*Math.PI;return new S(-Math.cos(n)*Math.sin(i)*t,Math.cos(i)*t,Math.sin(n)*Math.sin(i)*t)},Km=(r,e,t)=>new gt({transparent:!0,depthWrite:!1,blending:sn,uniforms:{c:{value:new ye(r)}},vertexShader:"varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform vec3 c;varying vec3 n;varying vec3 v;void main(){float f=pow(1.-abs(dot(n,v)),${e.toFixed(1)});gl_FragColor=vec4(c*f*${t.toFixed(2)},f*${t.toFixed(2)});}`}),Er=new ft;Er.rotation.y=-Math.PI/2;_t.add(Er);var rt;var wt,Ti,ds,gs,Za=new hs(16773856,3.4);_t.add(Za);var Ka=new hs(7310536,.22);_t.add(Ka);_t.add(Za.target,Ka.target);_t.add(new Ha(8949920,.07));function bc(r){let e=document.createElement("canvas");return e.width=e.height=64,r(e.getContext("2d")),new fr(e)}var Ya=bc(r=>{let e=r.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"#fff"),e.addColorStop(.22,"#fff"),e.addColorStop(.4,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=e,r.fillRect(0,0,64,64)}),Qm=bc(r=>{r.strokeStyle="#fff",r.lineWidth=5,r.beginPath(),r.arc(32,32,22,0,7),r.stroke(),r.lineWidth=3,r.beginPath(),r.moveTo(20,20),r.lineTo(44,44),r.moveTo(44,20),r.lineTo(20,44),r.stroke()});async function ef(){window.__stage="moon-textures";let r=an?[128,64]:nt()?[192,96]:[512,256],[e,t]=await Promise.all([vn(Qu.moon,1),vn(Qu.h)]);rt=new qe(new Ht(1,r[0],r[1]),new Dn({map:e,bumpMap:t,bumpScale:1.8,roughness:.97,metalness:0})),Er.add(rt),_t.add(new qe(new Ht(1.02,96,64),Km(16773340,4,.18))),ds=new ft;let n=new Nn({color:15784373,transparent:!0,opacity:.09,depthWrite:!1});for(let m=-75;m<=75;m+=15){let v=[];for(let f=-180;f<=180;f+=3)v.push(Mr(m,f,1.012));ds.add(new Un(new Ge().setFromPoints(v),n))}for(let m=-180;m<180;m+=15){let v=[];for(let f=-90;f<=90;f+=3)v.push(Mr(f,m,1.012));ds.add(new Un(new Ge().setFromPoints(v),n))}Er.add(ds),gs=new ft;let i=(m,v,f=256)=>new Un(new Ge().setFromPoints(Array.from({length:f+1},(y,g)=>new S(Math.cos(g/f*Math.PI*2)*m,0,Math.sin(g/f*Math.PI*2)*m))),new Nn({color:15775082,transparent:!0,opacity:v,depthWrite:!1})),s=i(1.16,.28),a=[];for(let m=0;m<72;m++){let v=m/72*Math.PI*2,f=m%6?1.19:1.23;a.push(new S(Math.cos(v)*1.16,0,Math.sin(v)*1.16),new S(Math.cos(v)*f,0,Math.sin(v)*f))}let o=new Ra(new Ge().setFromPoints(a),new Nn({color:15775082,transparent:!0,opacity:.35,depthWrite:!1})),l=new ft;l.add(s,o),l.rotation.x=.12;let c=new ft;c.add(i(1.34,.12)),c.rotation.set(1.1,0,.5),gs.add(l,c),_t.add(gs);for(let m of on){let v=new ye(tt[m.cty].c),f=Mr(m.lat,m.lon,1),y=Mr(m.lat,m.lon,m.type==="crew"?1.075:1.055),g=new Ge().setFromPoints([f,y]);g.setAttribute("color",new et(new Float32Array([v.r,v.g,v.b,v.r*.2,v.g*.2,v.b*.2]),3));let _=new Un(g,new Nn({vertexColors:!0,transparent:!0,opacity:.95,blending:sn,depthWrite:!1})),M=new In(new fn({map:m.type==="fail"?Qm:Ya,color:v,transparent:!0,depthWrite:!1,blending:sn}));M.position.copy(y);let R=m.type==="crew"?.05:m.type==="fail"?.038:.04;M.scale.set(R,R,1),M.userData.base=R;let b=new qe(new gr(.006,.012,24),new xi({color:v,transparent:!0,opacity:.8,side:sc,depthWrite:!1}));b.position.copy(Mr(m.lat,m.lon,1.004)),b.lookAt(b.position.clone().multiplyScalar(2));let w=new ft;w.add(_,M,b),Er.add(w),m.grp=w,m.sprite=M;let I=document.createElement("div");I.className="lbl",document.body.appendChild(I),m.el=I}wt=new qe(new gr(.03,.036,48),new xi({color:16777215,transparent:!0,opacity:.9,side:sc,depthWrite:!1})),wt.visible=!1,Er.add(wt),Ti=new ft,_t.add(Ti);let h=new Pn(.022,.022,.03),u=new Pn(.075,.002,.024),d=new Dn({color:14263361,metalness:.8,roughness:.35,emissive:2759173}),p=new Dn({color:1915514,metalness:.6,roughness:.3,emissive:660528});for(let m of zn){let v=new Nt().setFromEuler(new hr(m.inc*Math.PI/180,m.raan*Math.PI/180,0,"YXZ"));m.q=v;let f=m.a*Math.sqrt(1-m.e*m.e),y=Array.from({length:257},(I,P)=>{let D=P/256*Math.PI*2;return new S(m.a*(Math.cos(D)-m.e),0,f*Math.sin(D)).applyQuaternion(v)});m.line=new Un(new Ge().setFromPoints(y),new Nn({color:tt[m.cty].c,transparent:!0,opacity:.34,depthWrite:!1})),Ti.add(m.line);let g=new ft,_=new qe(h,d),M=new qe(u,p);M.position.x=.05;let R=M.clone();R.position.x=-.05,g.add(_,M,R);let b=new ye(tt[m.cty].c).lerp(new ye(16777215),.35);m.sprite=new In(new fn({map:Ya,color:b,transparent:!0,depthWrite:!1,blending:sn})),m.sprite.scale.set(.15,.15,1),m.sprite.userData.base=.15,m.glow=new In(new fn({map:Ya,color:tt[m.cty].c,transparent:!0,opacity:.35,depthWrite:!1,blending:sn})),m.glow.scale.set(.42,.42,1),g.add(m.glow),g.add(m.sprite),m.sat=g,Ti.add(g),m.M0=Math.random()*Math.PI*2;let w=document.createElement("div");w.className="lbl",document.body.appendChild(w),m.el=w}}function tf(r,e){let t=r.sp*.8/Math.pow(r.a,1.5),n=r.M0+e*t,i=n;for(let a=0;a<6;a++)i=n+r.e*Math.sin(i);let s=r.a*Math.sqrt(1-r.e*r.e);return new S(r.a*(Math.cos(i)-r.e),0,s*Math.sin(i)).applyQuaternion(r.q)}var le={filter:new Set(Object.keys(tt)),fails:!0,sats:!0,grid:!0,cmp:!1,clouds:!0,labels:!0,sel:null,hover:null,tab:"moon"},Ie=r=>document.getElementById(r),Ec=r=>le.filter.has(r.cty)&&(le.fails||r.type!=="fail"),$a=r=>r.replace(/-/g,"."),Be=(r,e)=>`<div class="row"><span>${r}</span><span>${e}</span></div>`,ed=r=>Array.isArray(r)?r[Je==="zh"?0:1]:r;function Li(){let r=Dt();document.documentElement.lang=Je==="zh"?"zh-CN":"en",Ie("tTitle").textContent=r.title,Ie("tBy").textContent=r.by,Ie("tHolo").textContent=r.holo,Ie("tDist").textContent=r.dist,Ie("smHint")&&(Ie("smHint").textContent=r.mapHint),Ie("hint").textContent=Re==="sun"?r.hintS:Re==="earth"?r.hintE:r.hint,Ie("ldTxt")&&Ie("ldTxt")&&(Ie("ldTxt").textContent=r.loading),r.tl.forEach((n,i)=>Ie("tL"+(i+1)).textContent=n);let e=Re==="earth"?["earth","con","ns"]:Re==="sun"?["sun","layers","size"]:["moon","land","sat"],t=Re==="earth"?r.tabsE:Re==="sun"?r.tabsS:r.tabs;document.querySelectorAll("#tabs button[data-t]").forEach((n,i)=>{n.dataset.t=e[i],n.textContent=t[i]}),Ie("tSub").textContent=r.sub,Ie("tHolo").textContent=Re==="earth"?r.holoE:Re==="sun"?r.holoS:r.holo,document.title=r.title+" \xB7 SOLAR SYSTEM ATLAS";for(let n of ni)n.el&&(n.el.innerHTML=`${n.en.toUpperCase()}<small>${Je==="zh"?n.zh:ot(n.cty)}</small>`);for(let n of on)n.el&&(n.el.innerHTML=`${n.en.toUpperCase()}<small>${Je==="zh"?n.zh:ot(n.cty)} \xB7 ${n.year}</small>`);for(let n of zn)n.el&&(n.el.innerHTML=`${n.en}<small>${Je==="zh"?n.zh:ot(n.cty)}</small>`);wr(),oo(),ys()}function wr(){let r=Ie("filters"),e=Dt();r.innerHTML="";let t=document.createElement("button");t.className="chip lang",t.innerHTML=Je==="zh"?"<b>\u4E2D</b> / EN":"\u4E2D / <b>EN</b>",t.onclick=()=>{Je=Je==="zh"?"en":"zh";try{localStorage.setItem("luna-lang",Je)}catch(s){}Li()},r.appendChild(t);let n=document.createElement("button");if(n.className="chip"+(Ei?" on":""),n.textContent=(Ei?"\u{1F50A} ":"\u{1F507} ")+e.sfxT,n.onclick=()=>{Ei=!Ei;try{localStorage.setItem("luna-sfx",Ei?"1":"0")}catch(s){}wr(),Gt("surface")},r.appendChild(n),Re==="sun"){let s=document.createElement("button");s.className="chip"+(le.cmp?" on":""),s.textContent=e.cmpToggle,s.onclick=()=>{le.cmp=!le.cmp,wr()},r.appendChild(s);return}if(Re==="earth"){for(let a of[1,60,600]){let o=document.createElement("button");o.className="chip"+(vc===a?" on":""),o.textContent="\xD7"+a,o.title=e.timeT,o.onclick=()=>{vc=a,wr()},r.appendChild(o)}let s=(a,o)=>{let l=document.createElement("button");l.className="chip"+(le[o]?" on":""),l.textContent=a,l.onclick=()=>{le[o]=!le[o],Ja()},r.appendChild(l)};s(e.labelsT,"labels"),s(e.cloudsT,"clouds");return}for(let s of["USSR","USA","CHN","IND","JPN"]){let a=document.createElement("button");a.className="chip"+(le.filter.has(s)?" on":""),a.innerHTML=`<i style="background:${tt[s].c}"></i>${ot(s)}`,a.onclick=()=>{le.filter.has(s)?le.filter.delete(s):le.filter.add(s),Ja()},r.appendChild(a)}let i=(s,a)=>{let o=document.createElement("button");o.className="chip"+(le[a]?" on":""),o.textContent=s,o.onclick=()=>{le[a]=!le[a],Ja()},r.appendChild(o)};i(e.fails,"fails"),i(e.sats,"sats"),i(e.grid,"grid")}function Ja(){if(rt){for(let r of on)r.grp.visible=Ec(r);Ti.visible=le.sats,ds.visible=le.grid}Cr&&(Cr.visible=le.clouds),wr(),oo(),ys()}function ys(){var i,s,a,o;let r=Dt();if(document.querySelectorAll("#tabs button[data-t]").forEach(l=>l.classList.toggle("on",l.dataset.t===le.tab)),Re==="sun"){Df(Ie("pbody"),r);return}if(Re==="earth"){bf(Ie("pbody"),r,le.sel);return}let e=Ie("pbody"),t=le.sel,n=l=>Je==="zh"?l.en.toUpperCase():l.zh;if(t&&t.kind==="m"){let l=t.o,c=tt[l.cty],h=l.tx[Je];e.innerHTML=`<button class="back" data-back>${r.back}</button>
  <div class="h1">${ut(l)}</div><div class="sub">${n(l)} \xB7 ${ot(l.cty)}</div>
  <span class="tag" style="border-color:${c.c};color:${c.c}">${ot(l.cty)}</span><span class="tag">${r.type[l.type]}</span>${l.f?`<span class="tag">${r.milestone}</span>`:""}
  <div class="p">${h[1]}</div>
  <div class="card"><h4>${r.file}</h4>${Be(r.date,$a(l.date))}${Be(r.site,h[0])}${Be(r.coord,`${Math.abs(l.lat).toFixed(2)}\xB0${l.lat>=0?"N":"S"} ${Math.abs(l.lon).toFixed(2)}\xB0${l.lon>=0?"E":"W"}`)}
  ${l.crew?Be(r.crew,ed(l.crew)):""}${l.rov?Be(r.rov,ed(l.rov)):""}${l.smp?Be(r.smp,l.smp):""}${Be(r.ago,r.yrs(2026-l.year))}</div>`}else if(t&&t.kind==="e"){let l=t.o,c=tt[l.cty];e.innerHTML=`<button class="back" data-back>${r.back}</button><div class="h1">${ut(l)}</div><div class="sub">${n(l)} \xB7 ${ot(l.cty)}</div>
  <span class="tag" style="border-color:${c.c};color:${c.c}">${ot(l.cty)}</span><span class="tag">${l.type==="flyby"?r.flyby:r.planned}</span><div class="p">${l.note[Je]}</div><div class="card">${Be(r.when,l.date[Je])}${Be(r.cty,ot(l.cty))}</div>`}else if(t&&t.kind==="s"){let l=t.o,c=tt[l.cty],h=l.tx[Je];e.innerHTML=`<button class="back" data-back>${r.back}</button>
  <div class="h1">${ut(l)}</div><div class="sub">${n(l)} \xB7 ${ot(l.cty)}</div>
  <span class="tag" style="border-color:${c.c};color:${c.c}">${ot(l.cty)}</span><span class="tag">${r.active}</span>
  <div class="p">${h[2]}</div>
  <div class="card"><h4>${r.orbit}</h4>${Be(r.launch,$a(l.launch))}${Be(r.arr,$a(l.arr))}${Be(r.orb,h[0])}${Be(r.per,h[1])}${Be(r.inorbit,r.inorbitV(2026-+l.arr.slice(0,4)))}</div>
  <div class="p" style="font-size:11px;color:var(--dim)">${r.orbNote}</div>`}else if(le.tab==="moon"){let l={};for(let c of on)(c.type==="soft"||c.type==="crew")&&((s=l[i=c.cty])!=null?s:l[i]=[]).push(c);e.innerHTML=`<div class="h1">${r.moonName}</div><div class="sub">${r.moonSub}</div><div class="p">${r.moonP}</div>
  ${Cc("apollo11.jpg","https://science.nasa.gov/wp-content/uploads/2023/03/as11-40-5878-orig.jpg|https://commons.wikimedia.org/wiki/Special:FilePath/Apollo_11_bootprint.jpg?width=500",r.a11T,r.a11C,r.a11S)}
  <div class="card"><h4>${r.phys}</h4>${r.physRows.map(c=>Be(c[0],c[1])).join("")}</div>
  <div class="card"><h4>${r.landed}</h4>${Object.entries(l).map(([c,h])=>Be(`<i style="display:inline-block;width:7px;height:7px;border-radius:50%;background:${tt[c].c};margin-right:6px"></i>${ot(c)}`,r.first(h[0].year,h.length))).join("")}${Be(r.crewRow[0],r.crewRow[1])}</div>
  <div class="card"><h4>${r.latest}</h4><div style="font-size:11px;line-height:1.8;color:#d6cfc3">${r.latestP}</div></div>
  <div style="font-size:9px;color:var(--dim);line-height:1.7;letter-spacing:.05em">${r.data}</div>`}else if(le.tab==="land"){let l={};for(let c of on.filter(Ec))((o=l[a=c.cty])!=null?o:l[a]=[]).push(c);e.innerHTML=Object.entries(l).map(([c,h])=>`<div class="grp">${ot(c)} \xB7 ${h.length}</div>`+h.map(u=>`<button class="li" data-m="${u.id}"><i class="${u.type==="fail"?"x":""}" style="background:${tt[u.cty].c};border-color:${tt[u.cty].c}"></i>${ut(u)}<span style="color:var(--dim);font-size:9px">${u.type==="crew"?r.crewTag:u.type==="fail"?r.failTag:""}</span><span class="y">${u.year}</span></button>`).join("")).join("")||`<div class="p">${r.none}</div>`}else e.innerHTML=`<div class="p" style="margin-top:0">${r.satIntro}</div>`+zn.map(l=>`<button class="li" data-s="${l.id}"><i style="background:${tt[l.cty].c}"></i>${ut(l)}<span style="color:var(--dim);font-size:9px">${Je==="zh"?l.en:ot(l.cty)}</span><span class="y">${l.arr.slice(0,4)}</span></button>`).join("")}Ie("pbody").addEventListener("click",r=>{let e=r.target.closest("button");if(e){if(e.dataset.back!==void 0){gn(null);return}if(e.dataset.m&&gn({kind:"m",o:on.find(t=>t.id===e.dataset.m)}),e.dataset.s&&gn({kind:"s",o:zn.find(t=>t.id===e.dataset.s)}),e.dataset.c&&gn({kind:"c",o:Pi.find(t=>t.id===e.dataset.c)}),e.dataset.n&&gn({kind:"n",o:ni.find(t=>t.id===e.dataset.n)}),e.dataset.cv){let t=Pi.find(n=>n.id===e.dataset.cv);t.on=!t.on,ys()}}});Ie("fold").onclick=r=>{r.stopPropagation(),document.body.classList.toggle("fold"),Dr(),le.sel||Pr(Oe.position.clone().sub(Ee.target),Ni(),1.2)};document.querySelectorAll("#zoom button").forEach(r=>r.onclick=()=>{De=null,Ee.autoRotate=!1,r.dataset.z==="r"?(Pr(new S(.15,.18,1),Ni(),.8),Ee.autoRotate=!0):Ee.zoomBy(+r.dataset.z)});document.querySelectorAll("#tabs button[data-t]").forEach(r=>r.onclick=()=>{document.body.classList.contains("fold")&&(document.body.classList.remove("fold"),Dr()),le.tab=r.dataset.t,le.sel=null,wt&&(wt.visible=!1),Ee.autoRotate=!0,Pc(),oo(),ys()});var td=1958,nf=2028.5,dc=r=>(r-td)/(nf-td)*100;function oo(){let r=Ie("tlaxis");r.querySelectorAll(".d,.yr,.now").forEach(s=>s.remove());for(let s=1960;s<=2020;s+=10){let a=document.createElement("div");a.className="yr",a.style.left=dc(s)+"%",a.textContent=s,r.appendChild(a)}let e=document.createElement("div");e.className="now",e.style.left=dc(2026.83)+"%",r.appendChild(e);let t=[...on.filter(Ec).map(s=>({o:s,kind:"m",y:s.year+(+s.date.slice(5,7)-1)/12})),...Zm.filter(s=>le.filter.has(s.cty)).map(s=>({o:s,kind:"e",y:s.year}))].sort((s,a)=>s.y-a.y),n=-9,i=0;for(let s of t){let a=dc(s.y);i=a-n<1.1?(i+1)%3:0,n=a;let o=document.createElement("div"),l=s.o.type;o.className="d"+(l==="fail"?" x":l==="future"||l==="flyby"?" f":""),o.style.cssText=`left:${a}%;top:${20-i*7}px;background:${tt[s.o.cty].c};border-color:${tt[s.o.cty].c}`,le.sel&&le.sel.o===s.o&&o.classList.add("on");let c=s.kind==="e"?s.o.date[Je].slice(0,4):s.o.year;o.onmouseenter=h=>rf(h,`${ut(s.o)} \xB7 ${c}`),o.onmouseleave=sf,o.onclick=()=>gn({kind:s.kind,o:s.o}),r.appendChild(o)}Ie("nLand").textContent=on.filter(s=>s.type==="soft"||s.type==="crew").length,Ie("nSat").textContent=zn.length}var ps=Ie("tip");function rf(r,e){ps.textContent=e,ps.style.display="block",ps.style.left=r.clientX+12+"px",ps.style.top=r.clientY-28+"px"}function sf(){ps.style.display="none"}var Re="moon",$t=!1,Kn=0,vc=60,kt=6371/1737.4,xs=new S(-96,16,-98),Tc=1/1737.4,af=398600.4418,nd=2*Math.PI/86164.1,Ut=new ft;Ut.position.copy(xs);Ut.rotation.z=23.44*Math.PI/180;Ut.visible=!1;_t.add(Ut);var wc=new ft;Ut.add(wc);var Qa,Cr,Ai,Qn,of=bc(r=>{r.strokeStyle="#fff",r.lineWidth=4,r.beginPath(),r.arc(32,32,24,0,7),r.stroke(),r.lineWidth=2,r.beginPath(),r.moveTo(32,0),r.lineTo(32,10),r.moveTo(32,54),r.lineTo(32,64),r.moveTo(0,32),r.lineTo(10,32),r.moveTo(54,32),r.lineTo(64,32),r.stroke()}),Ar=new S(1,.3,.5).normalize(),Ac=r=>Math.sqrt(af/Math.pow(6371+r,3)),eo={uTime:{value:0},uPx:{value:1}},vs=Math.PI/180,Pi=[{id:"starlink",zh:"\u661F\u94FE",en:"Starlink",cty:"USA",op:"SpaceX",col:"#d6e6ff",size:.72,cnt:{zh:"10,838 \u9897\u5728\u5DE5\u4F5C\uFF08\u5728\u8F68 11,131\uFF09",en:"10,838 working (11,131 in orbit)"},alt:{zh:"\u7EA6 480\u2013570 km",en:"~480\u2013570 km"},inc:"43\xB0 \xB7 53\xB0 \xB7 70\xB0 \xB7 97.6\xB0",use:{zh:"\u536B\u661F\u4E92\u8054\u7F51",en:"Satellite internet"},note:{zh:"SpaceX \u8FD0\u8425\uFF0C\u76EE\u524D\u5168\u7403\u89C4\u6A21\u6700\u5927\u7684\u536B\u661F\u661F\u5EA7\u3002\u5DE5\u4F5C\u4E2D\u7684\u661F\u94FE\u536B\u661F\u7EA6\u5360\u5168\u7403\u6D3B\u8DC3\u536B\u661F\u7684\u4E09\u5206\u4E4B\u4E8C\u3002",en:"Operated by SpaceX \u2014 by far the largest constellation, about two-thirds of every working satellite."},shells:[[1584,550,53,72],[1584,540,53.2,72],[520,570,70,36],[348,560,97.6,6],[2400,530,43,48],[2600,559,53,56],[1802,485,43,40]]},{id:"kuiper",zh:"\u4E9A\u9A6C\u900A Leo\uFF08\u67EF\u4F0A\u4F2F\uFF09",en:"Amazon Leo (Kuiper)",cty:"USA",op:"Amazon",col:"#ffb35c",size:1.15,cnt:{zh:"390 \u9897\u5728\u5DE5\u4F5C\uFF08\u5728\u8F68 392\uFF09",en:"390 working (392 in orbit)"},alt:{zh:"590\u2013630 km",en:"590\u2013630 km"},inc:"51.9\xB0",use:{zh:"\u536B\u661F\u4E92\u8054\u7F51",en:"Satellite internet"},note:{zh:"\u4E9A\u9A6C\u900A\u7684\u536B\u661F\u4E92\u8054\u7F51\u661F\u5EA7\uFF0C\u539F\u540D\u201C\u67EF\u4F0A\u4F2F\u8BA1\u5212\u201D\uFF0C\u7B2C\u4E00\u4EE3\u8BA1\u5212 3,236 \u9897\u3002",en:"Amazon's broadband constellation, formerly Project Kuiper; 3,236 planned in Gen 1."},shells:[[390,630,51.9,34]]},{id:"oneweb",zh:"\u4E00\u7F51",en:"OneWeb",cty:"GBR",op:"Eutelsat OneWeb",col:"#7fd1ff",size:1.15,cnt:{zh:"\u7EA6 600+",en:"~600+"},alt:{zh:"\u7EA6 1,200 km",en:"~1,200 km"},inc:"87.9\xB0",use:{zh:"\u536B\u661F\u4E92\u8054\u7F51",en:"Satellite internet"},note:{zh:"\u6B27\u6D32 Eutelsat \u65D7\u4E0B\u7684\u6781\u8F68\u536B\u661F\u4E92\u8054\u7F51\u661F\u5EA7\uFF0C\u4E3B\u8981\u670D\u52A1\u4F01\u4E1A\u3001\u822A\u7A7A\u548C\u653F\u5E9C\u7528\u6237\u3002",en:"Eutelsat's polar broadband constellation, serving enterprise, aviation and government users."},shells:[[630,1200,87.9,18]]},{id:"qianfan",zh:"\u5343\u5E06\u661F\u5EA7",en:"Qianfan (Thousand Sails)",cty:"CHN",op:{zh:"\u4E0A\u6D77\u57A3\u4FE1",en:"Shanghai Spacesail"},col:"#ff8a5c",size:1.25,cnt:{zh:"233 \u9897\u5728\u5DE5\u4F5C\uFF08\u5728\u8F68 251\uFF09",en:"233 working (251 in orbit)"},alt:{zh:"\u7EA6 800\u20131,160 km",en:"~800\u20131,160 km"},inc:{zh:"\u7EA6 89\xB0\uFF08\u6781\u8F68\uFF09",en:"~89\xB0 (polar)"},use:{zh:"\u536B\u661F\u4E92\u8054\u7F51",en:"Satellite internet"},note:{zh:"\u4E2D\u56FD\u7684\u5546\u4E1A\u536B\u661F\u4E92\u8054\u7F51\u661F\u5EA7\uFF0C2024 \u5E74 8 \u6708\u5F00\u59CB\u90E8\u7F72\uFF0C\u8FDC\u671F\u8BA1\u5212\u7EA6 1.5 \u4E07\u9897\u3002",en:"China's commercial broadband constellation, deployed since Aug 2024, with ~15,000 planned long term."},shells:[[233,1100,89,13]]},{id:"guowang",zh:"\u56FD\u7F51\u661F\u5EA7",en:"Guowang (China SatNet)",cty:"CHN",op:{zh:"\u4E2D\u56FD\u536B\u661F\u7F51\u7EDC\u96C6\u56E2",en:"China SatNet"},col:"#f4bf4f",size:1.25,cnt:{zh:"\u5728\u8F68 222 \u9897",en:"222 in orbit"},alt:{zh:"\u7EA6 500\u20131,145 km",en:"~500\u20131,145 km"},inc:{zh:"\u591A\u79CD",en:"Various"},use:{zh:"\u536B\u661F\u4E92\u8054\u7F51",en:"Satellite internet"},note:{zh:"\u4E2D\u56FD\u56FD\u5BB6\u536B\u661F\u4E92\u8054\u7F51\u661F\u5EA7\uFF0C2024 \u5E74 12 \u6708\u5F00\u59CB\u90E8\u7F72\uFF0C\u8BA1\u5212\u7EA6 1.3 \u4E07\u9897\u3002",en:"China's state broadband constellation, deployed since Dec 2024, with ~13,000 planned."},shells:[[120,1145,86.5,12],[102,600,50,10]]},{id:"gps",zh:"GPS \u5168\u7403\u5B9A\u4F4D\u7CFB\u7EDF",en:"GPS",cty:"USA",op:{zh:"\u7F8E\u56FD\u592A\u7A7A\u519B",en:"US Space Force"},col:"#5aa2ff",size:2.4,cnt:{zh:"\u7EA6 31",en:"~31"},alt:"20,180 km",inc:"55\xB0",use:{zh:"\u5BFC\u822A\u5B9A\u4F4D",en:"Navigation"},note:{zh:"6 \u4E2A\u8F68\u9053\u9762\uFF0C\u6BCF\u9897\u536B\u661F\u7EA6 12 \u5C0F\u65F6\u7ED5\u5730\u7403\u4E00\u5708\uFF0C\u624B\u673A\u5B9A\u4F4D\u6700\u5E38\u7528\u7684\u7CFB\u7EDF\u4E4B\u4E00\u3002",en:"Six orbital planes; each satellite circles Earth about every 12 hours."},shells:[[31,20180,55,6]]},{id:"glonass",zh:"\u683C\u6D1B\u7EB3\u65AF",en:"GLONASS",cty:"USSR",op:"Roscosmos",col:"#e5604a",size:2.4,cnt:{zh:"\u7EA6 24",en:"~24"},alt:"19,130 km",inc:"64.8\xB0",use:{zh:"\u5BFC\u822A\u5B9A\u4F4D",en:"Navigation"},note:{zh:"\u4FC4\u7F57\u65AF\u7684\u5168\u7403\u5BFC\u822A\u7CFB\u7EDF\uFF0C3 \u4E2A\u8F68\u9053\u9762\uFF0C\u503E\u89D2\u8F83\u5927\uFF0C\u5BF9\u9AD8\u7EAC\u5EA6\u5730\u533A\u8986\u76D6\u66F4\u597D\u3002",en:"Russia's global navigation system; its steeper inclination serves high latitudes well."},shells:[[24,19130,64.8,3]]},{id:"galileo",zh:"\u4F3D\u5229\u7565",en:"Galileo",cty:"EU",op:"EUSPA / ESA",col:"#9fb4ff",size:2.4,cnt:{zh:"\u7EA6 28",en:"~28"},alt:"23,222 km",inc:"56\xB0",use:{zh:"\u5BFC\u822A\u5B9A\u4F4D",en:"Navigation"},note:{zh:"\u6B27\u6D32\u7684\u5168\u7403\u5BFC\u822A\u7CFB\u7EDF\uFF0C3 \u4E2A\u8F68\u9053\u9762\uFF0C\u6C11\u7528\u7CBE\u5EA6\u5F88\u9AD8\u3002",en:"Europe's global navigation system, in three orbital planes."},shells:[[28,23222,56,3]]},{id:"beidou",zh:"\u5317\u6597\u4E09\u53F7",en:"BeiDou-3",cty:"CHN",op:{zh:"\u4E2D\u56FD\u536B\u661F\u5BFC\u822A\u7CFB\u7EDF\u7BA1\u7406\u529E\u516C\u5BA4",en:"CSNO"},col:"#ffd36b",size:2.4,cnt:{zh:"\u6838\u5FC3 30 \u9897",en:"30 core satellites"},alt:{zh:"21,528 km + 35,786 km",en:"21,528 km + 35,786 km"},inc:"55\xB0 / 0\xB0",use:{zh:"\u5BFC\u822A\u5B9A\u4F4D\u3001\u77ED\u62A5\u6587",en:"Navigation, messaging"},note:{zh:"\u4E2D\u56FD\u7684\u5168\u7403\u5BFC\u822A\u7CFB\u7EDF\uFF0C\u7531\u4E2D\u5706\u8F68\u9053\u3001\u503E\u659C\u5730\u7403\u540C\u6B65\u8F68\u9053\u548C\u5730\u7403\u9759\u6B62\u8F68\u9053\u4E09\u79CD\u536B\u661F\u7EC4\u6210\uFF0C\u5728\u4E9A\u592A\u5730\u533A\u7CBE\u5EA6\u66F4\u9AD8\u3002",en:"China's global system mixing medium, inclined-geosynchronous and geostationary satellites."},shells:[[24,21528,55,3],[3,35786,55,3],[3,35786,0,3]]},{id:"geo",zh:"\u5730\u7403\u9759\u6B62\u8F68\u9053\u5E26",en:"Geostationary belt",cty:"INT",op:{zh:"\u5404\u56FD",en:"Many nations"},col:"#c9a7ff",size:1.8,cnt:{zh:"\u6570\u767E\u9897",en:"Hundreds"},alt:"35,786 km",inc:"\u2248 0\xB0",use:{zh:"\u901A\u4FE1\u3001\u6C14\u8C61\u3001\u5E7F\u64AD",en:"Communications, weather, TV"},note:{zh:"\u8FD9\u91CC\u7684\u536B\u661F\u7ED5\u5730\u7403\u4E00\u5708\u6B63\u597D\u4E00\u5929\uFF0C\u770B\u8D77\u6765\u4E00\u76F4\u505C\u5728\u8D64\u9053\u4E0A\u7A7A\u67D0\u4E00\u70B9\u3002\u901A\u4FE1\u3001\u7535\u89C6\u548C\u6C14\u8C61\u536B\u661F\u5927\u591A\u5728\u8FD9\u91CC\u3002",en:"Satellites here orbit once per day, so they hover over one spot on the equator."},shells:[[450,35786,.1,0,"rand",40,.4]]},{id:"other",zh:"\u5176\u4ED6\u5728\u8F68\u536B\u661F",en:"Other satellites",cty:"INT",op:{zh:"\u5404\u56FD\u653F\u5E9C\u3001\u79D1\u7814\u673A\u6784\u4E0E\u4F01\u4E1A",en:"Governments, agencies, companies"},col:"#9aa8b8",size:.85,cnt:{zh:"\u7EA6 3,900",en:"~3,900"},alt:{zh:"\u5404\u79CD",en:"Various"},inc:{zh:"\u5404\u79CD",en:"Various"},use:{zh:"\u5BF9\u5730\u89C2\u6D4B\u3001\u79D1\u5B66\u3001\u901A\u4FE1\u7B49",en:"Earth observation, science, comms"},note:{zh:"\u5404\u56FD\u7684\u5BF9\u5730\u89C2\u6D4B\u3001\u79D1\u5B66\u3001\u901A\u4FE1\u7B49\u536B\u661F\u3002\u8FD9\u91CC\u6309\u592A\u9633\u540C\u6B65\u3001\u503E\u659C\u3001\u6781\u5730\u548C\u4E2D\u9AD8\u8F68\u9053\u7B49\u7C7B\u578B\u8FD1\u4F3C\u5206\u5E03\u3002",en:"Earth-observation, science and comms satellites from many nations, laid out by orbit type."},shells:[[1960,600,97.8,0,"rand",300,1.5],[980,520,50,0,"rand",200,14],[590,850,88,0,"rand",300,4],[394,9e3,55,0,"rand",14e3,40]]}],ni=[{id:"iss",zh:"\u56FD\u9645\u7A7A\u95F4\u7AD9",en:"ISS",cty:"INT",alt:420,inc:51.64,raan:30,ph:0,launch:"1998-11-20",tx:{zh:"\u4EBA\u7C7B\u5728\u592A\u7A7A\u4E2D\u6700\u5927\u7684\u5EFA\u7B51\uFF0C\u7531\u7F8E\u56FD\u3001\u4FC4\u7F57\u65AF\u3001\u6B27\u6D32\u3001\u65E5\u672C\u548C\u52A0\u62FF\u5927\u5171\u540C\u8FD0\u8425\uFF0C\u81EA 2000 \u5E74\u8D77\u4E00\u76F4\u6709\u4EBA\u957F\u671F\u9A7B\u7559\u3002",en:"The largest structure humans have built in space, run by the US, Russia, Europe, Japan and Canada; continuously crewed since 2000."}},{id:"tiangong",zh:"\u5929\u5BAB\u7A7A\u95F4\u7AD9",en:"Tiangong",cty:"CHN",alt:390,inc:41.47,raan:140,ph:120,launch:"2021-04-29",tx:{zh:"\u4E2D\u56FD\u7A7A\u95F4\u7AD9\uFF0C\u7531\u5929\u548C\u6838\u5FC3\u8231\u3001\u95EE\u5929\u548C\u68A6\u5929\u5B9E\u9A8C\u8231\u7EC4\u6210\uFF0C\u822A\u5929\u5458\u8F6E\u6D41\u957F\u671F\u9A7B\u7559\u3002",en:"China's space station \u2014 the Tianhe core plus Wentian and Mengtian labs \u2014 with rotating long-duration crews."}},{id:"hubble",zh:"\u54C8\u52C3\u7A7A\u95F4\u671B\u8FDC\u955C",en:"Hubble",cty:"USA",alt:510,inc:28.47,raan:260,ph:40,launch:"1990-04-24",tx:{zh:"1990 \u5E74\u53D1\u5C04\u7684\u7A7A\u95F4\u671B\u8FDC\u955C\uFF0C\u62CD\u4E0B\u4E86\u65E0\u6570\u7ECF\u5178\u7684\u5B87\u5B99\u7167\u7247\uFF0C\u81F3\u4ECA\u4ECD\u5728\u5DE5\u4F5C\u3002",en:"Launched in 1990, it has taken countless iconic images of the universe and still works today."}},{id:"landsat9",zh:"\u9646\u5730\u536B\u661F 9 \u53F7",en:"Landsat 9",cty:"USA",alt:705,inc:98.2,raan:80,ph:200,launch:"2021-09-27",tx:{zh:"\u7F8E\u56FD\u9646\u5730\u536B\u661F\u7CFB\u5217\u7684\u6700\u65B0\u4E00\u9897\uFF0C\u5EF6\u7EED\u4E86\u4ECE 1972 \u5E74\u5F00\u59CB\u7684\u5730\u7403\u8868\u9762\u8FDE\u7EED\u89C2\u6D4B\u8BB0\u5F55\u3002",en:"Newest of the Landsat series, extending a record of Earth's surface that began in 1972."}},{id:"sentinel2",zh:"\u54E8\u5175 2 \u53F7",en:"Sentinel-2",cty:"EU",alt:786,inc:98.6,raan:200,ph:300,launch:"2015-06-23",tx:{zh:"\u6B27\u6D32\u201C\u54E5\u767D\u5C3C\u201D\u8BA1\u5212\u7684\u591A\u5149\u8C31\u6210\u50CF\u536B\u661F\uFF0C\u7528\u4E8E\u76D1\u6D4B\u690D\u88AB\u3001\u519C\u4F5C\u7269\u548C\u6D77\u5CB8\u53D8\u5316\u3002",en:"Copernicus multispectral imager used to monitor vegetation, crops and coastlines."}},{id:"fy3",zh:"\u98CE\u4E91\u4E09\u53F7",en:"Fengyun-3",cty:"CHN",alt:836,inc:98.75,raan:320,ph:80,launch:"2008-05-27",tx:{zh:"\u4E2D\u56FD\u7684\u6781\u8F68\u6C14\u8C61\u536B\u661F\u7CFB\u5217\uFF0C\u4E3A\u5929\u6C14\u9884\u62A5\u63D0\u4F9B\u5168\u7403\u5927\u6C14\u89C2\u6D4B\u6570\u636E\u3002",en:"China's polar-orbiting weather satellites, feeding global data into forecasts."}},{id:"cartosat3",zh:"\u5236\u56FE\u536B\u661F 3 \u53F7",en:"Cartosat-3",cty:"IND",alt:509,inc:97.5,raan:120,ph:160,launch:"2019-11-27",tx:{zh:"\u5370\u5EA6\u7684\u9AD8\u5206\u8FA8\u7387\u5BF9\u5730\u89C2\u6D4B\u536B\u661F\uFF0C\u5168\u8272\u5206\u8FA8\u7387\u7EA6 0.25 m\u3002",en:"India's high-resolution imaging satellite, with ~0.25 m panchromatic resolution."}},{id:"alos4",zh:"\u5927\u5730 4 \u53F7",en:"ALOS-4",cty:"JPN",alt:628,inc:97.9,raan:10,ph:260,launch:"2024-07-01",tx:{zh:"\u65E5\u672C\u7684\u96F7\u8FBE\u5BF9\u5730\u89C2\u6D4B\u536B\u661F\uFF0C\u53EF\u4EE5\u7A7F\u900F\u4E91\u5C42\u76D1\u6D4B\u5730\u58F3\u5F62\u53D8\u548C\u81EA\u7136\u707E\u5BB3\u3002",en:"Japan's radar satellite, seeing through clouds to track ground deformation and disasters."}},{id:"meteor",zh:"\u6D41\u661F-M 2-3",en:"Meteor-M No.2-3",cty:"USSR",alt:830,inc:98.7,raan:170,ph:20,launch:"2023-06-27",tx:{zh:"\u4FC4\u7F57\u65AF\u7684\u6781\u8F68\u6C14\u8C61\u536B\u661F\u3002",en:"A Russian polar-orbiting weather satellite."}},{id:"himawari9",zh:"\u5411\u65E5\u8475 9 \u53F7",en:"Himawari-9",cty:"JPN",alt:35786,lon:140.7,launch:"2016-11-02",tx:{zh:"\u65E5\u672C\u7684\u5730\u7403\u9759\u6B62\u6C14\u8C61\u536B\u661F\uFF0C\u5B9A\u70B9\u4E8E\u4E1C\u7ECF 140.7\xB0\uFF0C\u6BCF 10 \u5206\u949F\u62CD\u6444\u4E00\u6B21\u5B8C\u6574\u7684\u5730\u7403\u5706\u76D8\u3002",en:"Japan's geostationary weather satellite at 140.7\xB0E, imaging the full disk every 10 minutes."}},{id:"goes19",zh:"GOES-19",en:"GOES-19",cty:"USA",alt:35786,lon:-75.2,launch:"2024-06-25",tx:{zh:"\u7F8E\u56FD\u6700\u65B0\u7684\u5730\u7403\u9759\u6B62\u6C14\u8C61\u536B\u661F\uFF0C2025 \u5E74\u8D77\u62C5\u4EFB GOES-East\uFF0C\u5B9A\u70B9\u4E8E\u897F\u7ECF 75.2\xB0\u3002",en:"The newest US geostationary weather satellite, serving as GOES-East at 75.2\xB0W since 2025."}},{id:"mtg",zh:"MTG-I1\uFF08Meteosat-12\uFF09",en:"MTG-I1 (Meteosat-12)",cty:"EU",alt:35786,lon:0,launch:"2022-12-13",tx:{zh:"\u6B27\u6D32\u7B2C\u4E09\u4EE3\u6C14\u8C61\u536B\u661F\u7684\u9996\u9897\u6210\u50CF\u536B\u661F\uFF0C\u5B9A\u70B9\u4E8E\u7ECF\u5EA6 0\xB0 \u4E0A\u7A7A\u3002",en:"First imager of Europe's third-generation weather satellites, stationed over 0\xB0 longitude."}}];for(let r of ni)r.r=(6371+r.alt)*Tc,r.lon!==void 0?(r.inc=0,r.raan=0,r.ph0=Math.PI+(r.lon+180)/360*Math.PI*2):r.ph0=r.ph*vs,r.n=Ac(r.alt);function _c(r,e,t,n,i){let s=Math.cos(n)*r,a=-Math.sin(n)*r,o=-a*Math.sin(e),l=a*Math.cos(e),c=Math.cos(t),h=Math.sin(t);return i.set(s*c+l*h,o,-s*h+l*c)}var lf=`varying vec2 vUv;varying vec3 vN;varying vec3 vW;
void main(){vUv=uv;vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,cd="vec3 atmC(float sg){return mix(vec3(1.,.42,.18),vec3(.32,.62,1.),smoothstep(-.25,.75,sg));}",cf=`uniform sampler2D uBrc;uniform float uDisp;varying vec2 vUv;varying vec3 vN;varying vec3 vW;
void main(){vUv=uv;float hh=texture2D(uBrc,uv).r;vec3 p=position+normal*hh*uDisp;vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(p,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,hf=`varying vec2 vUv;varying vec3 vN;varying vec3 vW;varying vec3 vP;
void main(){vUv=uv;vP=normalize(position);vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,uf=`uniform sampler2D uDay,uNight,uBrc;uniform vec3 uSun,uAxis;uniform float uCloudOff,uBump;uniform vec2 uTexel;varying vec2 vUv;varying vec3 vN;varying vec3 vW;
${cd}
void main(){
 vec3 ng=normalize(vN);vec3 v=normalize(cameraPosition-vW);vec3 L=normalize(uSun);
 vec4 b=texture2D(uBrc,vUv);
 float hL=texture2D(uBrc,vUv-vec2(uTexel.x,0.)).r,hR=texture2D(uBrc,vUv+vec2(uTexel.x,0.)).r,hD=texture2D(uBrc,vUv-vec2(0.,uTexel.y)).r,hU=texture2D(uBrc,vUv+vec2(0.,uTexel.y)).r;
 vec3 ea=cross(uAxis,ng);float el=length(ea);ea=el>1e-4?ea/el:vec3(1.,0.,0.);vec3 no=cross(ng,ea);
 vec3 n=normalize(ng-(ea*(hR-hL)+no*(hU-hD))*uBump);
 float sg=dot(ng,L),sl=max(dot(n,L),0.);
 vec3 day=texture2D(uDay,vUv).rgb,night=texture2D(uNight,vUv).rgb;
 float cl=smoothstep(.2,1.,texture2D(uBrc,vUv-vec2(uCloudOff,0.)).b);
 float ocean=1.-b.g;vec3 h=normalize(L+v);float nh=max(dot(n,h),0.);
 float spec=(pow(nh,80.)*1.4+pow(nh,10.)*.06)*ocean;
 float dayS=smoothstep(-.22,.45,sg);
 vec3 dayCol=day*(.9+.25*b.r)*(sl*1.25+.012)*(1.-cl*.5)+vec3(1.,.93,.8)*spec*sl*(1.-cl);
 vec3 nightCol=night*vec3(1.,.8,.52)*2.4*(1.-cl*.85);
 vec3 col=mix(nightCol,dayCol,dayS);
 float fr=1.-abs(dot(ng,v));col=mix(col,atmC(sg),clamp(smoothstep(-.5,1.,sg)*pow(fr,2.2),0.,1.)*.9);
 gl_FragColor=vec4(col,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,df=`uniform sampler2D uBrc;uniform vec3 uSun;uniform float uCloudOff;varying vec2 vUv;varying vec3 vN;varying vec3 vW;varying vec3 vP;
float hs(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float ns(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(mix(mix(hs(i),hs(i+vec3(1,0,0)),f.x),mix(hs(i+vec3(0,1,0)),hs(i+vec3(1,1,0)),f.x),f.y),mix(mix(hs(i+vec3(0,0,1)),hs(i+vec3(1,0,1)),f.x),mix(hs(i+vec3(0,1,1)),hs(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fb(vec3 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*ns(p);p*=2.07;a*=.5;}return s;}
void main(){vec3 n=normalize(vN);vec3 L=normalize(uSun);vec3 v=normalize(cameraPosition-vW);
 float base=smoothstep(.14,1.,texture2D(uBrc,vUv).b);
 vec2 eu=vUv+vec2(uCloudOff,0.);float lon=fract(eu.x)*360.-180.,lat=abs(vUv.y*180.-90.);
 float pac=clamp(smoothstep(125.,160.,lon)+1.-smoothstep(-140.,-100.,lon),0.,1.);
 float sea=1.-texture2D(uBrc,eu).g;float band=1.-smoothstep(52.,72.,lat);
 float hf=1.-smoothstep(22.,55.,length(cameraPosition-vW));float f=fb(vP*4.2+3.1)*.72+(hf>0.?fb(vP*13.+7.7)*.38*hf:0.)+.19*(1.-hf);
 float extra=smoothstep(.5,.8,f)*(.3+.7*pac)*mix(.35,1.,sea)*band;
 float c=clamp(max(base,extra*.9)+base*extra*.25,0.,1.);float sg=dot(n,L);
 vec3 col=vec3(1.)*(max(sg,0.)*1.25+.035);col=mix(col*vec3(1.,.66,.45),col,smoothstep(0.,.28,sg));
 float fr=1.-abs(dot(n,v));float a=c*(.1+.9*smoothstep(-.18,.3,sg))*(1.-pow(fr,5.)*.55);
 gl_FragColor=vec4(col,a);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,pf=`uniform vec3 uSun;varying vec2 vUv;varying vec3 vN;varying vec3 vW;
${cd}
void main(){vec3 n=normalize(vN);vec3 v=normalize(cameraPosition-vW);vec3 L=normalize(uSun);
 float fr=1.-abs(dot(v,n));float sg=dot(n,L);
 float a=pow(clamp((1.-fr)/.28,0.,1.),3.)*smoothstep(-.5,1.,sg);
 gl_FragColor=vec4(atmC(sg)*1.5,a);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,mf=`attribute vec4 aOrb;attribute float aN;uniform float uTime,uPx,uSize,uHi;varying float vA;
void main(){float ang=aOrb.w+aN*uTime;vec3 p=vec3(cos(ang),0.,-sin(ang))*aOrb.x;float si=sin(aOrb.y),ci=cos(aOrb.y);p=vec3(p.x,-p.z*si,p.z*ci);
 float cr=cos(aOrb.z),sr=sin(aOrb.z);p=vec3(p.x*cr+p.z*sr,p.y,-p.x*sr+p.z*cr);
 vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
 float s=uSize*(1.+uHi*.5)*uPx*40./max(-mv.z,.1);gl_PointSize=clamp(s,1.3,18.);vA=clamp(s/2.2,.4,1.);}`,ff=`uniform vec3 uCol;uniform float uHi,uDim;varying float vA;
void main(){vec2 c=gl_PointCoord-.5;float d=length(c);if(d>.5)discard;float a=pow(smoothstep(.5,0.,d),1.5);
 gl_FragColor=vec4(uCol*(1.+uHi*.6),a*vA*.85*(1.-uDim*.85));
 #include <colorspace_fragment>
}`;function gf(r){let e=0;for(let h of r.shells)e+=h[0];let t=new Float32Array(e*4),n=new Float32Array(e),i=0,s=r.id.length*7919+13,a=()=>(s=s*16807%2147483647)/2147483647;for(let[h,u,d,p,m,v,f]of r.shells){let y=Math.ceil(h/Math.max(p,1));for(let g=0;g<h;g++){let _=u,M=d,R,b;if(m==="rand")_=u+(a()-.5)*v,M=d+(a()-.5)*f,R=a()*Math.PI*2,b=a()*Math.PI*2;else{let w=g%p,I=Math.floor(g/p);R=w/p*Math.PI*2,b=I/y*Math.PI*2+w*.61+(a()-.5)*.02}t[i*4]=(6371+_)*Tc,t[i*4+1]=M*vs,t[i*4+2]=R,t[i*4+3]=b,n[i]=Ac(_),i++}}let o=new Ge;o.setAttribute("position",new et(new Float32Array(e*3),3)),o.setAttribute("aOrb",new et(t,4)),o.setAttribute("aN",new et(n,1));let l=new gt({uniforms:{uTime:eo.uTime,uPx:eo.uPx,uSize:{value:r.size},uHi:{value:0},uDim:{value:0},uCol:{value:new ye(r.col)}},vertexShader:mf,fragmentShader:ff,transparent:!0,depthWrite:!1,blending:sn}),c=new mr(o,l);c.frustumCulled=!1,r.pts=c,r.mat=l,r.on=!0,r.total=e,r.orb=t,r.rate=n,Ut.add(c)}async function vf(){let[t,n,i]=await Promise.all([vn("earth_day_2k.jpg",1),vn("earth_night_2k.jpg",1),vn("earth_brc_2k.jpg")]);i.wrapS=or,i.needsUpdate=!0;let s=an?[128,64]:nt()?[256,128]:[512,256];Ai=new gt({uniforms:{uDay:{value:t},uNight:{value:n},uBrc:{value:i},uSun:{value:Ar},uCloudOff:{value:0},uBump:{value:5.5},uDisp:{value:kt*.0085},uAxis:{value:new S(0,1,0)},uTexel:{value:new se(1/2048,1/1024)}},vertexShader:cf,fragmentShader:uf}),Qa=new qe(new Ht(kt,s[0],s[1]),Ai),wc.add(Qa),Cr=new qe(new Ht(kt*1.012,Math.min(s[0],256),Math.min(s[1],128)),new gt({uniforms:{uBrc:{value:i},uSun:{value:Ar},uCloudOff:Ai.uniforms.uCloudOff},vertexShader:hf,fragmentShader:df,transparent:!0,depthWrite:!1})),Ut.add(Cr),Ut.add(new qe(new Ht(kt*1.045,96,64),new gt({uniforms:{uSun:{value:Ar}},vertexShader:lf,fragmentShader:pf,side:Tt,transparent:!0,depthWrite:!1})));for(let a of Pi)gf(a);for(let a of ni){a.sprite=new In(new fn({map:Ya,color:new ye(tt[a.cty].c).lerp(new ye(16777215),.3),transparent:!0,depthWrite:!1,blending:sn})),a.sprite.scale.set(.2,.2,1),a.sprite.userData.base=.2,Ut.add(a.sprite);let o=document.createElement("div");o.className="lbl",document.body.appendChild(o),a.el=o}Qn=new In(new fn({map:of,color:16777215,transparent:!0,depthWrite:!1,depthTest:!1})),Qn.visible=!1,Ut.add(Qn),Ut.visible=!0,[t,n,i].forEach(a=>{try{yt.initTexture(a)}catch(o){}});try{yt.compile(_t,Oe)}catch(a){}$t=!0,Li(),location.hash==="#earth"&&setTimeout(()=>Ms("earth"),300)}function _f(r){if(!$t)return;let e=nd*Kn;wc.rotation.y=e;let t=Kn*nd*.035;Cr.rotation.y=e+t,Ai.uniforms.uCloudOff.value=t/(Math.PI*2)%1,Ai.uniforms.uAxis.value.set(0,1,0).applyQuaternion(Ut.quaternion);let n=Re==="earth"||De&&De.arc;for(let i of Pi)i.pts.visible=n&&i.on;if(Qn){let i=le.sel;if(i&&i.kind==="c"&&i.idx!=null&&n){let s=i.o,a=i.idx,o=s.orb;_c(o[a*4],o[a*4+1],o[a*4+2],o[a*4+3]+s.rate[a]*Kn,Qn.position),Qn.visible=!0;let l=.34+Math.sin(performance.now()/180)*.05;Qn.scale.set(l,l,1)}else Qn.visible=!1}for(let i of ni){i.sprite.visible=n,_c(i.r,i.inc*vs,i.raan*vs,i.ph0+i.n*Kn,i.sprite.position);let s=le.sel&&le.sel.o===i||le.hover===i,a=i.sprite.userData.base*(s?1.8:1)*(1+Math.sin(Kn*.02+i.ph0)*.1);i.sprite.scale.set(a,a,1)}}async function yf(){let[r,e]=await Promise.all([vn("moon.jpg",1),vn("bump.jpg")]);[r,e].forEach(i=>{try{yt.initTexture(i)}catch(s){}});let t=rt.material.map,n=rt.material.bumpMap;if(rt.material.map=r,rt.material.bumpMap=e,rt.material.needsUpdate=!0,t.dispose(),n.dispose(),!an&&yt.capabilities.maxTextureSize>=4096&&(!nt()||(navigator.deviceMemory||4)>=6&&yt.capabilities.maxTextureSize>=8192)){let i=await vn("moon_4k.jpg",1);try{yt.initTexture(i)}catch(s){}rt.material.map=i,rt.material.needsUpdate=!0,r.dispose()}}async function xf(){if(nt()||an||yt.capabilities.maxTextureSize<4096||(navigator.deviceMemory||8)<8)return;let[r,e]=await Promise.all([vn("earth_day_4k.jpg",1),vn("earth_brc_4k.jpg")]);e.wrapS=or,e.needsUpdate=!0,[r,e].forEach(i=>{try{yt.initTexture(i)}catch(s){}});let t=Ai.uniforms,n=[t.uDay.value,t.uBrc.value];t.uDay.value=r,t.uBrc.value=e,t.uTexel.value.set(1/4096,1/2048),t.uBump.value=8,Cr.material.uniforms.uBrc.value=e,n.forEach(i=>i.dispose())}var bi=new S,id=new S;function Mf(r,e){Ut.updateMatrixWorld();let t=Ut.matrixWorld,n=(nt()?16:10)**2,i=null,s=n;for(let a of Pi){if(!a.on)continue;let o=a.orb,l=a.rate;for(let c=0;c<a.total;c++){if(_c(o[c*4],o[c*4+1],o[c*4+2],o[c*4+3]+l[c]*Kn,bi).applyMatrix4(t),id.copy(bi),bi.project(Oe),bi.z>1||bi.z<-1)continue;let h=(bi.x+1)/2*innerWidth,u=(1-bi.y)/2*innerHeight,d=(h-r)*(h-r)+(u-e)*(u-e);d<s&&!Rc(id)&&(s=d,i={kind:"c",o:a,idx:c})}}return i}function Rc(r){let e=Oe.position,t=r.clone().sub(e),n=t.length();t.divideScalar(n);let i=xs.clone().sub(e),s=i.dot(t);return s<0||s>n?!1:i.lengthSq()-s*s<kt*kt*.98}function Sf(r,e,t){let n=null,i=nt()?26:18;for(let s of ni){let a=ao(s.sprite);if(Rc(a.w))continue;let o=Math.hypot(a.x-r,a.y-e);o<i&&(i=o,n={kind:"n",o:s})}return!n&&t&&(n=Mf(r,e)),n}function hd(r,e){return $t?(Nr.set(r/innerWidth*2-1,-(e/innerHeight)*2+1),Ir.setFromCamera(Nr,Oe),Ir.intersectObject(Qa)[0]):null}var rd=r=>{let e=2*Math.PI/Ac(r)/60;return r>35e3?Dt().geoPer:e<180?`${Math.round(e)} min`:`${(e/60).toFixed(1)} h`};window.phErr=function(r){let e=(r.dataset.u||"").split("|").filter(Boolean),t=+(r.dataset.i||0);if(t<e.length)r.dataset.i=t+1,r.src=e[t];else{r.style.display="none";let n=r.parentNode.querySelector(".phx");n&&(n.style.display="block")}};function Cc(r,e,t,n,i){return`<div class="card ph"><h4>${t}</h4><img src="${r}" alt="" data-u="${e}" onerror="phErr(this)"><div class="phx">${Dt().noImg}</div><div class="phc">${n}</div><div class="phs">${i}</div></div>`}function Ms(r){if(r===Re)return;if(r==="earth"&&!$t||r==="sun"&&!ti){Gt("deny"),_s=`${ut(r==="earth"?wi[3]:wi[0])} \xB7 ${Dt().loadingE}`,so=performance.now()+1800;return}Gt("travel"),Re=r,document.body.dataset.view=r,Li(),le.sel=null,le.hover=null,wt&&(wt.visible=!1),le.tab=r,Ic=!1;let e={moon:[new S,1,1.35,22],earth:[xs.clone(),kt,kt*1.32,120],sun:[Yt.clone(),We,We*2.2,We*9]}[r],t=e[0],n=t.clone().sub(Ee.target),i=n.length();n.normalize();let a=new S().crossVectors(n,xc).normalize().multiplyScalar(.8).addScaledVector(xc,.35).addScaledVector(n,-.45).normalize();Ee.bodyR=e[1],Ee.minDistance=e[2],Ee.maxDistance=e[3],Ee.autoRotate=!0,Ee.vT=Ee.vP=0,Ee.zoom=1;let o=i>1e3;Pr(a,Ni(),o?1/5.2:1/3.4,t,o?Math.min(i*.12,2400):r==="earth"?16:10,.32),Pc(),Li()}function bf(r,e,t){let n=s=>Je==="zh"?s.en:s.zh,i=s=>s&&typeof s=="object"?s[Je]:s;if(t&&t.kind==="n"){let s=t.o,a=tt[s.cty];r.innerHTML=`<button class="back" data-back>${e.back}</button><div class="h1">${ut(s)}</div><div class="sub">${n(s)} \xB7 ${ot(s.cty)}</div>
  <span class="tag" style="border-color:${a.c};color:${a.c}">${ot(s.cty)}</span><span class="tag">${s.lon!==void 0?"GEO":s.alt<2e3?"LEO":"MEO"}</span>
  <div class="p">${s.tx[Je]}</div>
  <div class="card"><h4>${e.orbit}</h4>${Be(e.launch,$a(s.launch))}${Be(e.altT,s.alt.toLocaleString()+" km")}${s.lon!==void 0?Be(e.lonT,`${Math.abs(s.lon)}\xB0${s.lon>=0?"E":"W"}`):Be(e.incT,s.inc+"\xB0")}${Be(e.per,rd(s.alt))}</div>
  <div class="p" style="font-size:11px;color:var(--dim)">${e.simNote}</div>`}else if(t&&t.kind==="c"){let s=t.o,a=tt[s.cty];r.innerHTML=`<button class="back" data-back>${e.back}</button><div class="h1">${ut(s)}</div><div class="sub">${n(s)} \xB7 ${ot(s.cty)}</div>
  <span class="tag" style="border-color:${s.col};color:${s.col}">${ot(s.cty)}</span><span class="tag">${i(s.use)}</span>
  <div class="p">${s.note[Je]}</div>
  ${t.idx!=null?(()=>{let o=Math.round(s.orb[t.idx*4]/Tc-6371);return`<div class="card" style="border-color:rgba(240,181,106,.45)"><h4>${e.pickedT}</h4>${Be(e.altT,o.toLocaleString()+" km")}${Be(e.incT,(s.orb[t.idx*4+1]/vs).toFixed(1)+"\xB0")}${Be(e.per,rd(o))}</div>`})():""}
  <div class="card"><h4>${e.conFile}</h4>${Be(e.opT,i(s.op))}${Be(e.cntT,i(s.cnt))}${Be(e.altT,i(s.alt))}${Be(e.incT,i(s.inc))}${Be(e.shown,s.total.toLocaleString())}</div>
  <button class="chip on" data-cv="${s.id}" style="margin-bottom:12px">${s.on?e.hide:e.show}</button>
  <div class="p" style="font-size:11px;color:var(--dim)">${e.simNote}</div>`}else le.tab==="earth"?r.innerHTML=`<div class="h1">${e.earthName}</div><div class="sub">${e.earthSub}</div><div class="p">${e.earthP}</div>${Cc("earth_photo.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/500px-The_Earth_seen_from_Apollo_17.jpg|https://commons.wikimedia.org/wiki/Special:FilePath/The_Earth_seen_from_Apollo_17.jpg?width=500|https://eol.jsc.nasa.gov/DatabaseImages/ESC/large/AS17/AS17-148-22727.JPG",e.eaT,e.eaC,e.eaS)}
  <div class="card"><h4>${e.phys}</h4>${e.ePhys.map(s=>Be(s[0],s[1])).join("")}</div>
  <div class="card"><h4>${e.satStat}</h4>${e.satRows.map(s=>Be(s[0],s[1])).join("")}</div>
  <div style="font-size:9px;color:var(--dim);line-height:1.7;letter-spacing:.05em">${e.simNote}<br>${e.eData}</div>`:le.tab==="con"?r.innerHTML=`<div class="p" style="margin-top:0">${e.conIntro}</div>`+Pi.map(s=>`<button class="li" data-c="${s.id}" style="${s.on?"":"opacity:.45"}"><i style="background:${s.col}"></i>${ut(s)}<span style="color:var(--dim);font-size:9px">${ot(s.cty)}</span><span class="y">${s.total.toLocaleString()}</span></button>`).join(""):r.innerHTML=`<div class="p" style="margin-top:0">${e.nsIntro}</div>`+ni.map(s=>`<button class="li" data-n="${s.id}"><i style="background:${tt[s.cty].c}"></i>${ut(s)}<span style="color:var(--dim);font-size:9px">${ot(s.cty)}</span><span class="y">${s.lon!==void 0?"GEO":s.alt+" km"}</span></button>`).join("")}var We=696340/1737.4,Yt=new S(4140,630,3780),ti=!1,Rr,to,no,Sr,ms,Zn,Lr={uT:{value:0}},ud=`vec3 m289(vec3 x){return x-floor(x*(1./289.))*289.;}vec4 m289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 perm(vec4 x){return m289(((x*34.)+1.)*x);}vec4 tis(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
 vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
 i=m289(i);vec4 p=perm(perm(perm(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
 float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
 vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
 vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
 vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
 vec4 norm=tis(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
 vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
float fbm(vec3 p,int o){float s=0.,a=.5;for(int i=0;i<6;i++){if(i>=o)break;s+=a*snoise(p);p*=2.07;a*=.5;}return s;}`,Ef="varying vec3 vP;varying vec3 vN;varying vec3 vW;void main(){vP=normalize(position);vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",Tf=`uniform float uT,uQ;uniform int uOct;uniform vec3 uFP;uniform float uFT;varying vec3 vP;varying vec3 vN;varying vec3 vW;
${ud}
float lod(float f,float px){return 1.-smoothstep(.12,.45,f*px);}
float fibril(float s,float fw,float brk){float d=abs(fract(s)-.5)*2.;float ln=smoothstep(.45,.92,d);return ln*smoothstep(.5,.72,brk)*(1.-smoothstep(.35,.8,fw));}
vec3 ramp(float b){vec3 c=mix(vec3(.03,.002,0.),vec3(.2,.016,0.),smoothstep(.0,.32,b));c=mix(c,vec3(.72,.12,.003),smoothstep(.3,.62,b));
 c=mix(c,vec3(1.,.3,.012),smoothstep(.6,.86,b));c=mix(c,vec3(1.,.6,.09),smoothstep(.86,1.12,b));return mix(c,vec3(1.,.88,.45),smoothstep(1.12,1.5,b));}
void main(){vec3 n=normalize(vN);vec3 v=normalize(cameraPosition-vW);float mu=clamp(dot(n,v),0.,1.);vec3 p=vP;float t=uT;
 float px=length(fwidth(p));
 vec3 w=vec3(snoise(p*2.2+vec3(0.,t*.006,0.)),snoise(p*2.2+vec3(5.2,1.3,t*.005)),snoise(p*2.2+vec3(2.7,t*.006,8.1)));
 float act=smoothstep(.52,.8,fbm(p*2.1+vec3(1.7,4.2,t*.0008),3)*.5+.5);
 // \u78C1\u573A\u201C\u52BF\u201D\uFF1A\u7EA4\u7EF4\u6CBF\u7B49\u503C\u7EBF\u6392\u5217\uFF0C\u50CF H-alpha \u7167\u7247\u91CC\u7684\u7EC6\u4E1D
 float phi=fbm(p*3.+w*.3+vec3(0.,0.,t*.0004),3)+act*snoise(p*6.+w)*.25;
 float fp=fwidth(phi)+px*.4;float wob=snoise(p*38.+w*1.5)*.35;
 float b1=snoise(p*95.+w*2.+vec3(t*.004))*.5+.5;
 float f1=fibril(phi*28.+wob,fp*28.,b1);
 float f2=0.,f3=0.,g1=.5,g2=.5;
 float l2=lod(90.,px);if(l2>0.){float b2=snoise(p*280.-w*2.)*.5+.5;f2=fibril(phi*85.+wob*2.,fp*85.,b2)*l2;}
 float l3=lod(260.,px)*uQ;if(l3>0.){float b3=snoise(p*800.+w*3.)*.5+.5;f3=fibril(phi*260.+wob*4.+snoise(p*120.)*.6,fp*260.,b3)*l3;}
 float net=snoise(p*22.+w*.6+vec3(t*.01,0.,0.))*.5+.5;
 float l4=lod(70.,px);if(l4>0.)g1=mix(.5,snoise(p*70.+w)*.5+.5,l4);
 float l5=lod(420.,px)*uQ;if(l5>0.)g2=mix(.5,snoise(p*420.-vec3(t*.05))*.5+.5,l5);
 float sp=snoise(p*3.4+vec3(9.1,2.3,t*.0015))*.5+.5;float spotM=act*smoothstep(.64,.72,sp+(net-.5)*.12);float umb=act*smoothstep(.72,.78,sp);
 float darkR=act*smoothstep(.5,.78,snoise(p*8.+w*1.2)*.5+.5);
 float fl=1.-abs(snoise(p*2.4+w*.3+vec3(3.1,0.,t*.0006)));float strand=pow(fl,60.)*smoothstep(.66,.8,snoise(p*1.6+vec3(7.,2.,0.))*.5+.5);
 float b=.72-.14*f1-.24*f2-.22*f3+.16*(net-.5)+.1*(g1-.5)+.06*(g2-.5);
 b+=act*.1*smoothstep(.55,.8,net);b-=darkR*.3;b-=spotM*.42+umb*.3;b+=strand*.55;
 b+=pow(1.-mu,2.5)*.32-(1.-mu)*.04;
 if(uFT>0.){float ft=t-uFT;if(ft>0.)b+=exp(-(1.-dot(p,uFP))*900.)*exp(-ft*.9)*1.1+exp(-(1.-dot(p,uFP))*120.)*exp(-ft*.7)*.25;}
 vec3 c=ramp(b);
 c+=vec3(1.,.5,.05)*pow(1.-mu,6.)*.5;
 gl_FragColor=vec4(c,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,wf="varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",Af=`uniform float uT,uR;uniform vec3 uC,uRight,uUp;uniform int uOct;varying vec3 vW;
${ud}
void main(){vec3 d=normalize(vW-cameraPosition);vec3 oc=uC-cameraPosition;float tca=dot(oc,d);vec3 cp=cameraPosition+d*tca-uC;float dist=length(cp);
 float h=(dist-uR)/uR;float a=atan(dot(cp,uUp),dot(cp,uRight));vec2 ang=vec2(cos(a),sin(a));float t=uT;
 float inside=smoothstep(0.,-.03,h);float hh=max(h,0.);
 float wv=snoise(vec3(ang*3.,hh*3.-t*.03+1.))*.35;
 float sp=pow(max(0.,snoise(vec3(ang*95.,hh*70.-t*.55))*.5+.5),2.5);
 float chrom=exp(-hh*75.)*(.55+sp*1.1);
 float fl=fbm(vec3(ang*9.+wv*4.,hh*18.-t*.12),uOct)*.5+.5;fl=smoothstep(.42,.92,fl);
 float fl2=pow(1.-abs(snoise(vec3(ang*26.+wv*7.,hh*34.-t*.25+2.))),5.);
 float flame=(fl*1.+fl2*.6)*exp(-hh*22.);
 float big=smoothstep(.6,.84,snoise(vec3(ang*2.2,t*.003+7.))*.5+.5);
 float pr=pow(1.-abs(snoise(vec3(ang*5.+wv*6.,hh*6.5-t*.045+3.))),4.)+pow(1.-abs(snoise(vec3(ang*13.+wv*5.,hh*15.-t*.08+9.))),7.)*.6;
 float prom=pr*big*exp(-hh*13.)*smoothstep(0.,.02,hh)*(1.-smoothstep(.16,.32,hh))*1.5;
 float edge=1.-smoothstep(.6,1.2,hh);
 float corona=(exp(-hh*5.)*.2+exp(-hh*1.8)*.03)*(.82+.18*snoise(vec3(ang*6.,t*.01)))*edge;
 vec3 col=vec3(1.,.42,.03)*chrom*.9+vec3(1.,.2,.008)*(flame*1.6+prom*1.7)+vec3(.85,.12,.01)*corona;
 col*=1.-inside;
 gl_FragColor=vec4(col,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;function Rf(){let r=document.createElement("canvas");r.width=512,r.height=256;let e=r.getContext("2d"),t=["#efe3cc","#d9b48c","#f2e6d0","#b98a63","#e9d6b8","#c99a70","#f3e9d6","#a9785a","#e6cfae","#d4ad84","#efe3cc"];for(let i=0;i<256;i++){let s=i/256*(t.length-1),a=Math.floor(s);e.fillStyle=t[a],e.globalAlpha=1,e.fillRect(0,i,512,1)}e.globalAlpha=.25;for(let i=0;i<220;i++)e.fillStyle=Math.random()<.5?"#fff3e0":"#8a5a3c",e.fillRect(Math.random()*512,Math.random()*256,20+Math.random()*90,1+Math.random()*2);e.globalAlpha=1,e.fillStyle="#c4623e",e.beginPath(),e.ellipse(340,168,22,11,0,0,7),e.fill(),e.fillStyle="#e08a62",e.beginPath(),e.ellipse(340,168,14,6,0,0,7),e.fill();let n=new fr(r);return n.colorSpace=it,n}function Cf(){let r=nt(),e=r||an?3:5;to=new gt({toneMapped:!1,extensions:{derivatives:!0},uniforms:{uT:Lr.uT,uQ:{value:r||an?0:1},uOct:{value:e},uFP:{value:new S(0,1,0)},uFT:{value:-1}},vertexShader:Ef,fragmentShader:Tf}),Rr=new qe(new Ht(We,r?96:160,r?48:80),to),Rr.position.copy(Yt),_t.add(Rr),no=new gt({uniforms:{uT:Lr.uT,uR:{value:We},uC:{value:Yt},uRight:{value:new S(1,0,0)},uUp:{value:new S(0,1,0)},uOct:{value:r||an?3:4}},vertexShader:wf,fragmentShader:Af,toneMapped:!1,transparent:!0,depthWrite:!1,blending:sn}),Sr=new qe(new pr(We*5.2,We*5.2),no),Sr.position.copy(Yt),Sr.renderOrder=5,Sr.frustumCulled=!1,_t.add(Sr);let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),i=n.createRadialGradient(128,128,0,128,128,128);i.addColorStop(0,"rgba(255,170,60,.9)"),i.addColorStop(.12,"rgba(255,90,20,.5)"),i.addColorStop(.35,"rgba(200,30,0,.16)"),i.addColorStop(1,"rgba(120,10,0,0)"),n.fillStyle=i,n.fillRect(0,0,256,256),ms=new In(new fn({map:new fr(t),transparent:!0,depthWrite:!1,blending:sn,opacity:.3})),ms.scale.set(We*10,We*10,1),ms.position.copy(Yt),_t.add(ms),Zn=new ft,_t.add(Zn),Zn.visible=!1;let s=new qe(new Ht(69911/1737.4,48,32),new Dn({map:Rf(),roughness:.9,color:10130572})),a=new qe(new Ht(kt,32,24),new Dn({color:4032216,roughness:.7})),o=new qe(new Ht(1,24,16),new Dn({color:12433066,roughness:.9}));Zn.add(s,a,o),Zn.userData={jup:s,ear:a,mo:o};for(let l of["jup","ear","mo"]){let c=document.createElement("div");c.className="lbl cmp",document.body.appendChild(c),Zn.userData["el_"+l]=c}Nf();try{yt.compile(_t,Oe)}catch(l){}ti=!0,Li()}var yr=new S,xr=new S;function Lf(r){if(!ti)return;Lr.uT.value+=Math.min(r,.1),Uf(),yr.setFromMatrixColumn(Oe.matrixWorld,0).normalize(),xr.setFromMatrixColumn(Oe.matrixWorld,1).normalize(),Sr.quaternion.copy(Oe.quaternion),no.uniforms.uRight.value.copy(yr),no.uniforms.uUp.value.copy(xr),Rr.rotation.y+=r*.004;let e=Oe.position.distanceTo(Yt);ms.material.opacity=Math.min(.35,Math.max(.04,(e-We*3)/(We*20)));let t=innerWidth<innerHeight*.9,n=Zn.userData,i=Re==="sun"&&!De&&le.cmp&&e>We*3.2;if(Zn.visible=i,i){$t&&!n.ear.material.map&&(n.ear.material.map=Ai.uniforms.uDay.value,n.ear.material.color.set(11579568),n.ear.material.needsUpdate=!0),rt&&!n.mo.material.map&&(n.mo.material.map=rt.material.map,n.mo.material.color.set(11579568),n.mo.material.needsUpdate=!0);let a=69911/1737.4;if(t){let o=Yt.clone().addScaledVector(xr,-We*1.32).addScaledVector(yr,-We*.55);n.jup.position.copy(o),n.ear.position.copy(o).addScaledVector(yr,a+We*.5),n.mo.position.copy(n.ear.position).addScaledVector(yr,We*.5)}else{let o=Yt.clone().addScaledVector(yr,-We*1.42).addScaledVector(xr,-We*.05);n.jup.position.copy(o),n.ear.position.copy(o).addScaledVector(xr,-a-We*.1),n.mo.position.copy(n.ear.position).addScaledVector(xr,-We*.08)}n.jup.rotation.y+=r*.2,n.ear.rotation.y+=r*.3}let s=Dt();for(let[a,o,l]of[["jup",n.jup,s.cmpJ],["ear",n.ear,s.cmpE],["mo",n.mo,s.cmpM]]){let c=n["el_"+a];if(!i){c.style.display="none";continue}let h=o.position.clone().project(Oe);c.style.display="block";let u=(h.x+1)/2*innerWidth,d=(1-h.y)/2*innerHeight;t?(c.style.left=u+"px",c.style.top=(a==="mo"?d-22:d+(a==="jup"?22:10))+"px",c.style.transform="translate(-50%,0)",c.style.textAlign="center"):(c.style.left=u-(a==="jup"?24:8)+"px",c.style.top=d+"px",c.style.transform="translate(-100%,-50%)",c.style.textAlign="right"),c.textContent=l}}var Pf=`attribute vec3 aP0;attribute vec4 aV;attribute vec4 aD;uniform float uT,uPx,uR,uAsp;uniform vec3 uC;varying vec3 vCol;varying float vA;varying vec2 vDir;
void main(){float age=uT-aD.x;if(age<0.||age>aD.y){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;vA=0.;return;}
 float x=age/aD.y;vec3 nn=normalize(aP0);vec3 q=aP0+aV.xyz*age-nn*(.5*aV.w*age*age);
 float r=length(q);if(r<uR*1.002)q*=uR*1.002/r;
 vec4 mv=viewMatrix*vec4(uC+q,1.);gl_Position=projectionMatrix*mv;
 vec3 vel=aV.xyz-nn*aV.w*age;vec4 c2=projectionMatrix*viewMatrix*vec4(uC+q+vel*.02,1.);vec2 sd=(c2.xy/c2.w-gl_Position.xy/gl_Position.w)*vec2(uAsp,1.);vDir=length(sd)>1e-6?normalize(sd):vec2(0.,-1.);
 float hot=aD.w;vCol=mix(mix(vec3(1.,.5,.09),vec3(1.,.24,.015),smoothstep(0.,.35,x*(1.-hot*.5))),vec3(.85,.1,.0),smoothstep(.6,1.,x));
 vA=smoothstep(0.,.06,x)*(1.-hot*.45)*(1.-smoothstep(.8,1.,x))*(r<uR*1.004?.35:1.);
 gl_PointSize=clamp(aD.z*1.7*(1.-x*.12)*uPx/max(-mv.z,1.),0.,140.);}`,If=`varying vec3 vCol;varying float vA;varying vec2 vDir;void main(){vec2 pc=gl_PointCoord-.5;pc.y=-pc.y;float u=dot(pc,vDir),v=dot(pc,vec2(-vDir.y,vDir.x));
 float u0=.17,rh=.19,d;if(u>u0)d=length(vec2(u-u0,v))/rh;else{float k=clamp((u+.46)/(u0+.46),0.,1.);d=abs(v)/max(rh*pow(k,1.3),1e-3);if(k<=0.)d=9.;}
 float a=smoothstep(1.,.35,d)*(u>u0?1.:mix(.3,1.,clamp((u+.46)/(u0+.46),0.,1.)));if(a<=0.)discard;gl_FragColor=vec4(vCol*a*vA*.24,1.);
 #include <colorspace_fragment>
}`,Tr=null,On,io,pc=0,sd=4,fs=0;function Nf(){fs=nt()||an?2400:5200,On=new Ge,On.setAttribute("position",new et(new Float32Array(fs*3),3));for(let[e,t]of[["aP0",3],["aV",4],["aD",4]])On.setAttribute(e,new et(new Float32Array(fs*t),t).setUsage(Hu));let r=On.attributes.aD.array;for(let e=0;e<fs;e++)r[e*4]=-99;io=new gt({uniforms:{uT:Lr.uT,uPx:{value:600},uR:{value:We},uC:{value:Yt},uAsp:{value:1}},vertexShader:Pf,fragmentShader:If,transparent:!0,depthWrite:!1,blending:sn,toneMapped:!1}),Tr=new mr(On,io),Tr.frustumCulled=!1,Tr.renderOrder=6,_t.add(Tr)}function dd(r,e){if(!Tr)return;let t=r.clone().normalize(),n=Lr.uT.value,i=nt()||an,s=new S(0,1,0).cross(t);s.lengthSq()<1e-4&&s.set(1,0,0),s.normalize();let a=t.clone().cross(s),o=On.attributes.aP0.array,l=On.attributes.aV.array,c=On.attributes.aD.array,h=Math.random,u=(f,y,g,_,M,R,b)=>{let w=pc;pc=(pc+1)%fs,o.set([f.x,f.y,f.z],w*3),l.set([y.x,y.y,y.z,g],w*4),c.set([_,M,R,b],w*4)},d=t.clone().multiplyScalar(We*1.003),p=h()*6.283,m=Math.round((i?14:22)*(.5+e*.5)),v=i?9:13;for(let f=0;f<m;f++){let y=p+f/m*6.283+(h()-.5)*.5,g=s.clone().multiplyScalar(Math.cos(y)).addScaledVector(a,Math.sin(y)),_=We*(.08+h()*.2)*e,M=.42+h()*.13,R=2*_/M,b=R/M,w=We*(.06+h()*.22)*e/M,I=t.clone().multiplyScalar(R).addScaledVector(g,w),P=M*2,D=t.clone().addScaledVector(s,(h()-.5)*.07).addScaledVector(a,(h()-.5)*.07).normalize().multiplyScalar(We*1.003);for(let j=0;j<v;j++){let C=.11*(h()-.5),G=1+(h()-.5)*.16;u(D,I.clone().multiplyScalar((1-j*.012)*G).addScaledVector(s,C*R).addScaledVector(a,C*R),b*G,n+j*M*.42/v+h()*.01,P,We*(.05-j*.0018)*(.8+h()*.4),j<2?1:0)}}for(let f=0;f<(i?20:40)*e;f++){let y=t.clone().addScaledVector(s,(h()-.5)*2.4).addScaledVector(a,(h()-.5)*2.4).normalize(),g=We*(.06+h()*.16)*e,_=.5+h()*.35,M=y.dot(t);u(d,y.multiplyScalar(g),2*g*M/_,n+h()*.12,_,We*(.012+h()*.016),1)}for(let f=0;f<4;f++)u(d,new S,0,n+f*.04,.5+f*.15,We*(.05+f*.03)*e,0);for(let f of["aP0","aV","aD"])On.attributes[f].needsUpdate=!0;e>=.9&&(to.uniforms.uFP.value.copy(t),to.uniforms.uFT.value=n)}function Uf(){if(!Tr)return;io.uniforms.uAsp.value=innerWidth/innerHeight,io.uniforms.uPx.value=innerHeight/(2*Math.tan(Oe.fov*Math.PI/360))*yt.getPixelRatio();let r=Lr.uT.value;if(Re==="sun"&&!De&&!document.hidden&&r>sd){sd=r+3;let e=Oe.position.clone().sub(Yt).normalize(),t=new S(Math.random()-.5,Math.random()-.5,Math.random()-.5);t.addScaledVector(e,-t.dot(e)).normalize(),dd(t.addScaledVector(e,.12+Math.random()*.15),.55+Math.random()*.35)}}function pd(r,e){return ti?(Nr.set(r/innerWidth*2-1,-(e/innerHeight)*2+1),Ir.setFromCamera(Nr,Oe),Ir.intersectObject(Rr)[0]):null}function Df(r,e){le.tab==="sun"?r.innerHTML=`<div class="h1">${e.sunName}</div><div class="sub">${e.sunSub}</div><div class="p">${e.sunP}</div>${Cc("sun_photo.jpg","https://svs.gsfc.nasa.gov/vis/a010000/a010700/a010733/SDO_AIA_Red_Full_Disc_Still.jpg|https://commons.wikimedia.org/wiki/Special:FilePath/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg?width=500",e.suT,e.suC,e.suS)}
  <div class="card"><h4>${e.phys}</h4>${e.sPhys.map(t=>Be(t[0],t[1])).join("")}</div>
  <div class="card"><h4>${e.sNowT}</h4><div style="font-size:11px;line-height:1.8;color:#d6cfc3">${e.sNow}</div></div>
  <div style="font-size:9px;color:var(--dim);line-height:1.7;letter-spacing:.05em">${e.sNote}</div>`:le.tab==="layers"?r.innerHTML=`<div class="p" style="margin-top:0">${e.layIntro}</div>`+e.layers.map(t=>`<div class="card"><h4>${t[0]}</h4>${Be(e.tempT,t[1])}<div style="font-size:11px;line-height:1.75;color:#d6cfc3;margin-top:6px">${t[2]}</div></div>`).join(""):r.innerHTML=`<div class="p" style="margin-top:0">${e.cmpIntro}</div><div class="card"><h4>${e.cmpT}</h4>${e.cmpRows.map(t=>Be(t[0],t[1])).join("")}</div><div style="font-size:10px;color:var(--dim);line-height:1.7">${e.cmpHint}</div>`}var Ei=!0;try{Ei=localStorage.getItem("luna-sfx")!=="0"}catch(r){}var us=null;function md(){if(!us)try{us=new(window.AudioContext||window.webkitAudioContext)}catch(r){return null}return us.state==="suspended"&&us.resume().catch(()=>{}),us}function vt(r,e,t,n,i,s){let a=md();if(!a)return;let o=a.currentTime+(s||0),l=a.createOscillator(),c=a.createGain();l.type=n||"sine",l.frequency.setValueAtTime(r,o),l.frequency.exponentialRampToValueAtTime(e,o+t),c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(i,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c),c.connect(a.destination),l.start(o),l.stop(o+t+.03)}function Of(r,e,t,n){let i=md();if(!i)return;let s=Math.floor(i.sampleRate*r),a=i.createBuffer(1,s,i.sampleRate),o=a.getChannelData(0);for(let d=0;d<s;d++)o[d]=Math.random()*2-1;let l=i.createBufferSource();l.buffer=a;let c=i.createBiquadFilter();c.type="bandpass",c.Q.value=1.4;let h=i.currentTime;c.frequency.setValueAtTime(e,h),c.frequency.exponentialRampToValueAtTime(t,h+r*.55),c.frequency.exponentialRampToValueAtTime(e*.7,h+r);let u=i.createGain();u.gain.setValueAtTime(0,h),u.gain.linearRampToValueAtTime(n,h+r*.4),u.gain.exponentialRampToValueAtTime(1e-4,h+r),l.connect(c),c.connect(u),u.connect(i.destination),l.start(h),l.stop(h+r)}var zf={tick(){vt(2200,1600,.035,"square",.018)},surface(){vt(520,700,.09,"sine",.07),vt(700,940,.12,"sine",.045,.06)},land(){vt(523,784,.1,"triangle",.08),vt(784,1175,.16,"sine",.06,.08),vt(1568,1568,.09,"sine",.025,.2)},sat(){vt(1320,1980,.06,"triangle",.06),vt(1980,2640,.07,"sine",.045,.05),vt(2640,2640,.06,"sine",.025,.12)},con(){vt(880,1320,.08,"sine",.07),vt(1320,1760,.1,"sine",.05,.07),vt(1760,2200,.12,"sine",.03,.14)},travel(){Of(2.8,260,2600,.09),vt(98,196,2.6,"sine",.05)},arrive(){vt(392,392,.6,"sine",.045),vt(587,587,.7,"sine",.035,.12),vt(784,784,.8,"sine",.03,.24)},deny(){vt(330,230,.12,"square",.035),vt(280,190,.15,"square",.03,.15)}};function Gt(r){if(Ei)try{zf[r]()}catch(e){}}function ei(r,e,t,n){for(let i=0;i<2;i++){let s=document.createElement("div");s.className="ripple"+(n?" big":""),s.style.left=r+"px",s.style.top=e+"px",s.style.color=t||"#f0b56a",s.style.animationDelay=i*.12+"s",document.body.appendChild(s),setTimeout(()=>s.remove(),1400)}}document.addEventListener("click",r=>{let e=r.target.closest("button");e&&!e.closest("#pbody .li")&&Gt("tick")},!0);function Ff(r,e,t){let n=Oe.position,i=r.clone().sub(n),s=i.length();i.divideScalar(s);let a=e.clone().sub(n),o=a.dot(i);return o<0||o>s?!1:a.lengthSq()-o*o<t*t}var Bf=new S,ad=[["moon",Bf,1],["earth",xs,kt],["sun",Yt,We]];function fd(){if(De||!rt)return[];let r=[],e=ad.find(t=>t[0]===Re);for(let[t,n,i]of ad){if(t===Re||t==="earth"&&!$t||t==="sun"&&!ti)continue;let s=n.clone().project(Oe);if(s.z>1||s.z<-1)continue;let a=(s.x+1)/2*innerWidth,o=(1-s.y)/2*innerHeight,l=Oe.position.distanceTo(n),c=i/l/Math.tan(Oe.fov*Math.PI/360)*innerHeight/2;a<-40||o<-40||a>innerWidth+40||o>innerHeight+40||Ff(n,e[1],e[2]*.98)||r.push({v:t,x:a,y:o,r:c})}return r}function gd(r,e){let t=fd().sort((n,i)=>i.r-n.r);for(let n of t)if(Math.hypot(n.x-r,n.y-e)<Math.max(nt()?30:24,n.r+12))return n;return null}var ro={};function Hf(){let r=fd(),e=Dt(),t=[];for(let n of["sun","earth","moon"]){let i=ro[n];if(!i){i=ro[n]=document.createElement("div"),i.className="lbl far",document.body.appendChild(i);let l=n;i.addEventListener("pointerdown",c=>c.stopPropagation()),i.addEventListener("click",c=>{c.stopPropagation(),ei(c.clientX,c.clientY,l==="earth"?"#8fc8ff":l==="sun"?"#ffb347":"#f0d9b5",!0),Ms(l)})}let s=r.find(l=>l.v===n);if(!s){i.style.display="none";continue}i.innerHTML=`${n==="earth"?"\u{1F30D} "+e.earthName:n==="moon"?"\u{1F319} "+e.moonName:"\u2600\uFE0F "+e.sunName}<small>${e.goT}</small>`;let a=s.x+Math.max(s.r,4)+4,o=s.y;for(let l=0;l<4&&t.some(c=>Math.abs(c[0]-a)<90&&Math.abs(c[1]-o)<26);l++)o+=26;t.push([a,o]),i.style.display="block",i.style.left=a+"px",i.style.top=o+"px"}}var wi=[{id:"sun",zh:"\u592A\u9633",en:"Sun",open:!0,a:0,r:8,c:["#fff8d6","#ffc04d","#d06a00"],sp:0},{id:"mercury",zh:"\u6C34\u661F",en:"Mercury",a:20,r:2,c:["#d9d2c8","#9b8f80","#4d463e"],sp:1.6},{id:"venus",zh:"\u91D1\u661F",en:"Venus",a:30,r:3,c:["#fff1cf","#e0b46a","#7a5422"],sp:1.2},{id:"earth",zh:"\u5730\u7403",en:"Earth",a:42,r:3.4,c:["#cfe8ff","#3d86d8","#0b2d5c"],sp:1,open:!0},{id:"mars",zh:"\u706B\u661F",en:"Mars",a:54,r:2.6,c:["#ffc6a8","#d2643a","#5e2410"],sp:.8},{id:"jupiter",zh:"\u6728\u661F",en:"Jupiter",a:71,r:6.4,c:["#fff0dc","#d6a77a","#6b4a2c"],sp:.45},{id:"saturn",zh:"\u571F\u661F",en:"Saturn",a:88,r:5.4,c:["#fff6dc","#e2c58c","#7a6236"],sp:.34,ring:1},{id:"uranus",zh:"\u5929\u738B\u661F",en:"Uranus",a:102,r:4,c:["#e8ffff","#8fd6e0","#2f6f7a"],sp:.24},{id:"neptune",zh:"\u6D77\u738B\u661F",en:"Neptune",a:114,r:3.9,c:["#d8e6ff","#4f73e0","#16266a"],sp:.18}],Jn={id:"moon",zh:"\u6708\u7403",en:"Moon",r:1.6,c:["#ffffff","#bdb6aa","#55504a"],open:!0};wi.forEach((r,e)=>r.ang=e*2.1+.6);var At=Ie("sysmap"),be=At.getContext("2d"),Ri=null,_s=null,so=0,yc={},Ur=!1;function Lc(){let r=nt()?206:360,e=nt()?84:154;Ur&&(r=Math.min(innerWidth*(nt()?.99:.86),1e3),e=Math.min(r*.46,innerHeight*.7));let t=Math.min(devicePixelRatio,2);At.style.width=r+"px",At.style.height=e+"px",At.width=r*t,At.height=e*t,be.setTransform(t,0,0,t,0,0),At.dataset.w=r,At.dataset.h=e}Lc();addEventListener("resize",Lc);function kf(r,e,t,n,i,s,a,o){let l=be.createRadialGradient(r+a*t*.45,e+o*t*.45,t*.1,r,e,t);l.addColorStop(0,n[0]),l.addColorStop(.55,n[1]),l.addColorStop(1,n[2]),be.globalAlpha=s?.32:1,be.fillStyle=l,be.beginPath(),be.arc(r,e,t,0,7),be.fill(),s&&(be.globalAlpha=.55,be.fillStyle="#000",be.beginPath(),be.arc(r,e,t,0,7),be.fill()),be.globalAlpha=1}function Gf(r){let e=+At.dataset.w,t=+At.dataset.h,n=e/2,i=t/2+3,s=Math.min(e/254,t/104),a=.4;be.clearRect(0,0,e,t);for(let m of wi)m.ang+=r*m.sp*.12,m.a&&(be.strokeStyle=m.open?"rgba(240,181,106,.55)":"rgba(255,236,210,.13)",be.lineWidth=m.open?1:.7,be.beginPath(),be.ellipse(n,i,m.a*s,m.a*s*a,0,0,7),be.stroke());let o=wi.map(m=>({p:m,x:n+Math.cos(m.ang)*m.a*s,y:i+Math.sin(m.ang)*m.a*s*a,z:Math.sin(m.ang)})),l=o.find(m=>m.p.id==="earth");Jn.ang=(Jn.ang||0)+r*1.4;let c={p:Jn,x:l.x+Math.cos(Jn.ang)*7*s,y:l.y+Math.sin(Jn.ang)*7*s*.45,z:l.z+Math.sin(Jn.ang)*.01};o.push(c),o.sort((m,v)=>m.z-v.z);let h=be.createRadialGradient(n,i,0,n,i,26*s);h.addColorStop(0,"rgba(255,190,90,.55)"),h.addColorStop(1,"rgba(255,150,40,0)"),be.fillStyle=h,be.beginPath(),be.arc(n,i,26*s,0,7),be.fill();for(let m of o){let v=m.p,f=v.r*s*1.35*(1+m.z*.12),y=n-m.x,g=i-m.y,_=Math.hypot(y,g)||1,M=v.id==="sun"?-.3:y/_,R=v.id==="sun"?-.3:g/_,b=v.open||v.id==="sun",w=!b||v.id==="earth"&&!$t;if(v.ring&&(be.strokeStyle=w?"rgba(226,197,140,.18)":"rgba(226,197,140,.8)",be.lineWidth=1.2,be.beginPath(),be.ellipse(m.x,m.y,f*2,f*.6,-.25,0,7),be.stroke()),kf(m.x,m.y,f,v.c,!0,w&&v.id!=="sun",M,R),v.open){let I=Re===v.id,P=I?1+Math.sin(performance.now()/300)*.15:1;be.strokeStyle=I?"rgba(240,181,106,.95)":"rgba(240,181,106,.45)",be.lineWidth=I?1.3:.8,be.beginPath(),be.arc(m.x,m.y,(f+3.2)*P,0,7),be.stroke()}if(Ri===v&&(be.strokeStyle="#fff",be.lineWidth=1,be.beginPath(),be.arc(m.x,m.y,f+2,0,7),be.stroke()),yc[v.id]={x:m.x,y:m.y,r:f,p:v},Ur&&v!==Jn){let I=nt();be.font=(I?"600 10px":"600 12px")+" system-ui,sans-serif",be.textAlign="center",be.fillStyle=b?Re===v.id?"#f0b56a":"#f3e6d0":"rgba(243,230,208,.4)",be.fillText(ut(v)+(b||I?"":" \xB7 "+Dt().closed),m.x,m.y<i-2&&v.id!=="sun"?m.y-f-7:m.y+f+(I?12:16))}}let u=Ie("sysTip"),d=Dt(),p="";_s&&performance.now()<so?p=_s:Ri?p=Vf(Ri):p=`${d.here} \xB7 ${ut(Re==="earth"?wi[3]:Re==="sun"?wi[0]:Jn)}`,u.textContent!==p&&(u.textContent=p)}function Vf(r){let e=Dt();return r.id==="moon"?`${ut(r)} \xB7 ${e.open}`:r.id==="earth"?`${ut(r)} \xB7 ${$t?e.open:e.loadingE}`:r.id==="sun"?`${ut(r)} \xB7 ${ti?e.open:e.loadingE}`:`${ut(r)} \xB7 ${e.closed}`}function vd(r){let e=At.getBoundingClientRect(),t=r.clientX-e.left,n=r.clientY-e.top,i=null,s=1e9;for(let a in yc){let o=yc[a],l=Math.hypot(o.x-t,o.y-n)-o.r;l<(a==="moon"?5:7)&&l<s&&(s=l,i=o.p)}return i}At.addEventListener("pointermove",r=>{Ri=vd(r),At.style.cursor=Ri?"pointer":"default"});At.addEventListener("pointerleave",()=>{Ri=null});At.addEventListener("click",r=>{r.stopPropagation();let e=vd(r);if(!e)return;let t=Dt();if(e.open){if(Ur&&(e.id!=="earth"||$t)&&(e.id!=="sun"||ti)&&setTimeout(()=>lo(!1),150),e.id==="earth"&&!$t||e.id==="sun"&&!ti){Gt("deny"),_s=`${ut(e)} \xB7 ${t.loadingE}`,so=performance.now()+1800;return}e.id!==Re&&ei(r.clientX,r.clientY,"#f0b56a"),Ms(e.id)}else Gt("deny"),ei(r.clientX,r.clientY,"#e5604a"),_s=`${ut(e)} \xB7 ${t.closedT}`,so=performance.now()+2e3});var Ii=document.createElement("div");Ii.id="smOver";Ii.innerHTML='<div id="smOT"></div><div id="smSlot"></div><button id="smClose"></button>';document.body.appendChild(Ii);function lo(r){Ur=r;let e=Ie("smWrap");r?(Ie("smSlot").appendChild(At),Ii.classList.add("on"),Ie("smOT").textContent=Dt().mapBig,Ie("smClose").textContent="\u2715 "+Dt().mapClose):(e.insertBefore(At,e.firstChild),Ii.classList.remove("on")),Ri=null,Lc(),Gt&&Gt("surface")}Ie("smBigBtn").addEventListener("click",r=>{r.stopPropagation(),lo(!Ur)});Ii.addEventListener("click",r=>{(r.target===Ii||r.target.id==="smClose"||r.target.id==="smSlot")&&lo(!1)});addEventListener("keydown",r=>{r.key==="Escape"&&Ur&&lo(!1)});var De=null;function Pr(r,e,t=1.1,n=null,i=0,s=0){let a=Ee.target.clone(),o=Oe.position.clone().sub(a);De={tA:a,tB:n||a.clone(),a:o.clone().normalize(),b:r.clone().normalize(),d0:o.length(),d1:e,t:0,sp:t,arc:i,delay:s}}function gn(r){if(r&&Gt(r.kind==="m"||r.kind==="e"?"land":r.kind==="c"?r.idx!=null?"sat":"con":"sat"),r&&nt()&&document.body.classList.contains("fold")&&r.kind!=="m"&&(document.body.classList.remove("fold"),Dr()),le.sel=r,Ee.autoRotate=!r,r&&r.kind==="m"&&rt){le.tab="land";let e=r.o;wt.visible=!0,wt.position.copy(Mr(e.lat,e.lon,1.006)),wt.lookAt(wt.position.clone().multiplyScalar(2)),wt.material.color.set(tt[e.cty].c),Pr(e.sprite.getWorldPosition(new S),nt()?Ni()*.62:3.3)}else wt&&(wt.visible=!1);if(r&&r.kind==="s"&&(le.tab="sat",le.sats=!0,Ti&&(Ti.visible=!0)),r&&r.kind==="n"){le.tab="ns";let e=r.o.sprite.getWorldPosition(new S).sub(xs);Pr(e,Math.max(Ni()*.75,e.length()+kt*1.4))}r&&r.kind==="c"&&(le.tab="con"),Pc(),wr(),oo(),ys()}function Pc(){for(let r of zn)if(r.line){let e=le.sel&&le.sel.o===r;r.line.material.opacity=e?.95:le.sel&&le.sel.kind==="s"?.1:.34}for(let r of Pi)if(r.mat){let e=le.sel&&le.sel.kind==="c"&&le.sel.o===r;r.mat.uniforms.uHi.value=e?1:0,r.mat.uniforms.uDim.value=le.sel&&le.sel.kind==="c"&&!e?1:0}}var Ir=new Ga,Nr=new se,mc=new S;function ao(r){r.getWorldPosition(mc);let e=mc.clone(),t=mc.clone().project(Oe);return{x:(t.x+1)/2*innerWidth,y:(1-t.y)/2*innerHeight,w:e}}function _d(r){return r.clone().normalize().dot(Oe.position.clone().sub(r).normalize())>.02}function yd(r,e,t){if(!rt||Re==="sun")return null;if(Re==="earth")return $t?Sf(r,e,t):null;let n=null,i=nt()?26:16;for(let s of on){if(!s.grp.visible)continue;let a=ao(s.sprite);if(!_d(a.w))continue;let o=Math.hypot(a.x-r,a.y-e);o<i&&(i=o,n={kind:"m",o:s})}if(le.sats)for(let s of zn){let a=ao(s.sprite),o=Math.hypot(a.x-r,a.y-e);o<i&&(i=o,n={kind:"s",o:s})}return n}function xd(r,e){return rt?(Nr.set(r/innerWidth*2-1,-(e/innerHeight)*2+1),Ir.setFromCamera(Nr,Oe),Ir.intersectObject(rt)[0]):null}var br=null;Ci.addEventListener("pointerdown",r=>{br={x:r.clientX,y:r.clientY}});Ci.addEventListener("pointerup",r=>{if(!br||Math.hypot(r.clientX-br.x,r.clientY-br.y)>6){br=null;return}br=null;let e=r.clientX,t=r.clientY,n=yd(e,t,!0);if(n){let s=n.o;ei(e,t,n.kind==="c"?s.col:(tt[s.cty]||{}).c),gn(n);return}let i=gd(e,t);if(i){ei(i.x,i.y,i.v==="earth"?"#8fc8ff":i.v==="sun"?"#ffb347":"#f0d9b5",!0),Ms(i.v);return}if(Re==="sun"){let s=pd(e,t);s&&(ei(e,t,"#ffb347"),Gt("surface"),dd(s.point.clone().sub(Yt),1),le.tab="sun",gn(null))}else Re==="earth"?hd(e,t)&&(ei(e,t,"#8fc8ff"),Gt("surface"),le.tab="earth",gn(null)):xd(e,t)&&(ei(e,t,"#f0d9b5"),Gt("surface"),le.tab="moon",gn(null))});Ci.addEventListener("pointermove",r=>{if(!rt)return;let e=yd(r.clientX,r.clientY);le.hover=e?e.o:null;let t=e?null:gd(r.clientX,r.clientY);Ci.style.cursor=e||t?"pointer":"";for(let i in ro)ro[i].classList.toggle("hot",!!t&&t.v===i);let n=Re==="earth"?hd(r.clientX,r.clientY):Re==="sun"?pd(r.clientX,r.clientY):xd(r.clientX,r.clientY);if(n){let i=(Re==="earth"?Qa:Re==="sun"?Rr:rt).worldToLocal(n.point.clone()).normalize(),s=Math.asin(i.y)*180/Math.PI,a=Math.atan2(i.z,-i.x)/(Math.PI*2);a<0&&(a+=1);let o=a*360-180;Ie("hLat").textContent=`${Math.abs(s).toFixed(2)}\xB0${s>=0?"N":"S"}`,Ie("hLon").textContent=`${Math.abs(o).toFixed(2)}\xB0${o>=0?"E":"W"}`}else Ie("hLat").textContent="--",Ie("hLon").textContent="--";Ie("hSite").textContent=e?`\u25B8 ${e.o.en.toUpperCase()}`:""});var Ic=!1;Ee.addEventListener("start",()=>{Ic=!0,!(De&&De.arc)&&(De=null,Ee.autoRotate=!1)});function Dr(){let r=innerWidth,e=innerHeight;if(yt.setSize(r,e,!1),Oe.aspect=r/e,Oe.clearViewOffset(),Oe.updateProjectionMatrix(),rt&&!le.sel&&!Ic&&!De){let t=Oe.position.clone().sub(Ee.target).setLength(Ni());Oe.position.copy(Ee.target).add(t)}}nt()&&document.body.classList.add("fold");addEventListener("resize",Dr);window.visualViewport&&visualViewport.addEventListener("resize",Dr);Dr();function Wf(){let r=innerWidth,e=innerHeight,t=r/2,n=e/2,i=Math.min(t,n);for(let s of[".brand","#filters","#holo","#panel","#tl","#zoom","#hint"]){let a=document.querySelector(s);if(!a)continue;let o=a.getBoundingClientRect();if(o.width<2||o.height<2)continue;let l=Math.max(o.left-t,0,t-o.right),c=Math.max(o.top-n,0,n-o.bottom);i=Math.min(i,Math.hypot(l,c))}return Math.max(i*.93,Math.min(r,e)*.15)}function Ni(){let r=Re==="earth"?kt*1.22:Re==="sun"?We*1.3:1.14,e=Math.atan(Wf()/(innerHeight/2)*Math.tan(Oe.fov*Math.PI/360));return r/Math.sin(e)}var od=new ka,xc=new S(0,1,0),Xf=new Nt,ld=new Nt;function fc(r,e,t){if(!t){r.style.display="none";return}let n=ao(e);r.style.display="block",r.style.left=n.x+"px",r.style.top=n.y+"px"}var jf=0;function Mc(){if(document.hidden){requestAnimationFrame(Mc);return}let r=Math.min(od.getDelta(),.05),e=od.elapsedTime;if(Kn+=r*vc,eo.uTime.value=Kn,eo.uPx.value=yt.getPixelRatio(),De){De.arc&&(Ee.dT=Ee.dP=Ee.vT=Ee.vP=0,Ee.zoom=1),De.t=Math.min(1,De.t+r*De.sp);let t=De.t,n=l=>1-Math.pow(1-l,3),i=l=>l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2,s=De.delay?n(Math.min(1,t/De.delay)):n(t),a=De.delay?i(Math.max(0,(t-De.delay)/(1-De.delay))):n(t);Ee.target.lerpVectors(De.tA,De.tB,a),ld.setFromUnitVectors(De.a,De.b);let o=Xf.clone().slerp(ld,s);Oe.position.copy(Ee.target).add(De.a.clone().applyQuaternion(o).multiplyScalar(De.d0+(De.d1-De.d0)*a+De.arc*Math.sin(Math.PI*a))),Oe.lookAt(Ee.target),De.t>=1&&(De.arc&&(Gt("arrive"),Ee.target.copy(De.tB),Ee.dT=Ee.dP=Ee.vT=Ee.vP=0,Ee.zoom=1),De=null)}else Ee.update(r);if(Ar.copy(Oe.position).sub(Ee.target).normalize().applyAxisAngle(xc,1.05).add(new S(0,.42,0)).normalize(),Za.position.copy(Ee.target).addScaledVector(Ar,10),Za.target.position.copy(Ee.target),Ka.position.copy(Ee.target).addScaledVector(Ar,-10),Ka.target.position.copy(Ee.target),_f(r),Lf(r),Gf(r),Hf(),rt){gs.children[0].rotation.y+=r*.04,gs.children[1].rotation.y-=r*.025;for(let o of zn){o.sat.position.copy(tf(o,e)),o.sat.lookAt(0,0,0);let l=le.sel&&le.sel.o===o||le.hover===o,c=o.sprite.userData.base*(l?1.7:1)*(1+Math.sin(e*3+o.M0)*.12);o.sprite.scale.set(c,c,1),o.glow.material.opacity=(l?.6:.3)+Math.sin(e*3+o.M0)*.08,o.sat.scale.setScalar(l?1.6:1)}let t=1+Math.sin(e*4)*.25;for(let o of on){let l=le.sel&&le.sel.o===o||le.hover===o,c=o.sprite.userData.base*(l?1.7*t:1);o.sprite.scale.set(c,c,1)}let n=e*.8%1;wt.scale.setScalar(1+n*2),wt.material.opacity=.9*(1-n);let i=nt(),s=Oe.position.distanceTo(Ee.target)<5.5;if(!i)for(let o of on){let l=Re==="moon"&&o.grp.visible&&_d(o.sprite.getWorldPosition(new S)),c=le.sel&&le.sel.o===o||le.hover===o;fc(o.el,o.sprite,l&&!i&&(c||o.f&&s)),o.el.style.opacity=c?1:.6}if(!i)for(let o of zn){let l=le.sel&&le.sel.o===o||le.hover===o;fc(o.el,o.sprite,Re==="moon"&&le.sats&&!i&&l)}let a=[];if($t)for(let o of ni){let l=le.sel&&le.sel.o===o||le.hover===o,c=Re==="earth"&&!De&&(l||!i&&le.labels&&(o.id==="iss"||o.id==="tiangong"));if(c&&Rc(o.sprite.getWorldPosition(new S))&&(c=!1),fc(o.el,o.sprite,c),c){let h=parseFloat(o.el.style.left),u=parseFloat(o.el.style.top);for(let d=0;d<6&&a.some(p=>Math.abs(p[0]-h)<96&&Math.abs(p[1]-u)<22);d++)u+=22;o.el.style.top=u+"px",a.push([h,u])}o.el.style.opacity=l?1:.75}!nt()&&jf++%10===0&&(Ie("hDist").textContent=Math.round((Oe.position.distanceTo(Ee.target)-(Re==="earth"?kt:Re==="sun"?We:1))*1737.4).toLocaleString())}yt.render(_t,Oe),requestAnimationFrame(Mc)}Li();Mc();setTimeout(async()=>{await ef(),window.__stage="ready",setTimeout(()=>{try{sessionStorage.removeItem("luna-lite")}catch(e){}},3e4),Ja(),Li();let r=Ie("loader");r.style.opacity=0,setTimeout(()=>r.remove(),900),Pr(new S(.15,.18,1),Ni(),.45),setTimeout(()=>{try{Cf(),location.hash==="#sun"&&setTimeout(()=>Ms("sun"),300)}catch(e){console.warn("sun",e)}},60),setTimeout(()=>vf().then(yf).then(xf).catch(e=>console.warn("earth",e)),150)},30);})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
