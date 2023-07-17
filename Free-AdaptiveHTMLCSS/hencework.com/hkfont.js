/*

 MyFonts Webfont Build ID 3744327, 2019-04-07T07:24:44-0400

 The fonts listed in this notice are subject to the End User License
 Agreement(s) entered into by the website owner. All other parties are 
 explicitly restricted from using the Licensed Webfonts(s).

 You may obtain a valid license at the URLs below.

 Webfont: CoreSansC-55Medium by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/medium/

 Webfont: CoreSansC-75ExtraBold by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/extra-bold/

 Webfont: CoreSansC-65Bold by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/bold/

 Webfont: CoreSansC-55MediumIt by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/medium-italic/

 Webfont: CoreSansC-75ExtraBoldIt by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/extra-bold-italic/

 Webfont: CoreSansC-15Thin by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/thin/

 Webfont: CoreSansC-95BlackIt by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/black-italic/

 Webfont: CoreSansC-85HeavyIt by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/heavy-italic/

 Webfont: CoreSansC-95Black by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/black/

 Webfont: CoreSansC-15ThinIt by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/thin-italic/

 Webfont: CoreSansC-85Heavy by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/heavy/

 Webfont: CoreSansC-25ExtraLight by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/extra-light/

 Webfont: CoreSansC-25ExtraLightIt by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/extra-light-italic/

 Webfont: CoreSansC-35Light by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/light/

 Webfont: CoreSansC-35LightIt by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/light-italic/

 Webfont: CoreSansC-45RegularIt by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/regular-italic/

 Webfont: CoreSansC-45Regular by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/regular/

 Webfont: CoreSansC-65BoldIt by S-Core
 URL: https://www.myfonts.com/fonts/s-core/core-sans-c/bold-italic/


 License: https://www.myfonts.com/viewlicense?type=web&buildid=3744327
 Licensed pageviews: 10,000
 Webfonts copyright: Copyright (c) 2016 by S-Core Co., Ltd.. All rights reserved.

 ? 2019 MyFonts Inc
*/
var protocol=document.location.protocol;"https:"!=protocol&&(protocol="http:");var count=document.createElement("script");count.type="text/javascript";count.async=!0;count.src=protocol+"//hello.myfonts.net/count/392247";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(count,s);var browserName,browserVersion,webfontType;if("undefined"==typeof woffEnabled)var woffEnabled=!0;var svgEnabled=0,woff2Enabled=0;
if("undefined"!=typeof customPath)var path ;else{var scripts=document.getElementsByTagName("SCRIPT"),script=scripts[scripts.length-1].src;script.match("://")||"/"==script.charAt(0)||(script="./"+script);path=script.replace(/\\/g,"/").replace(/\/[^\/]*\/?$/,"")}
var wfpath=path+"/webfonts/",browsers=[{regex:"MSIE (\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:9,type:"woff"},{version:5,type:"eot"}]},{regex:"Trident/(\\d+\\.\\d+); (.+)?rv:(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$3)",type:[{version:11,type:"woff"}]},{regex:"Firefox[/s](\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:3.6,type:"woff"},{version:3.5,type:"ttf"}]},{regex:"Edge/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:12,type:"woff"}]},
{regex:"Chrome/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:36,type:"woff2"},{version:6,type:"woff"},{version:4,type:"ttf"}]},{regex:"Mozilla.*Android (\\d+\\.\\d+).*AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$1)",type:[{version:4.1,type:"woff"},{version:3.1,type:"svg#wf"},{version:2.2,type:"ttf"}]},{regex:"Mozilla.*(iPhone|iPad).* OS (\\d+)_(\\d+).* AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)",unhinted:!0,type:[{version:5,
type:"woff"},{version:4.2,type:"ttf"},{version:1,type:"svg#wf"}]},{regex:"Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari",versionRegex:"1.0",type:[{version:1,type:"svg#wf"}]},{regex:"Version/(\\d+\\.\\d+)(\\.\\d+)? Safari/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:5.1,type:"woff"},{version:3.1,type:"ttf"}]},{regex:"Opera/(\\d+\\.\\d+)(.+)Version/(\\d+\\.\\d+)(\\.\\d+)?",versionRegex:"new Number(RegExp.$3)",type:[{version:24,type:"woff2"},{version:11.1,type:"woff"},
{version:10.1,type:"ttf"}]}],browLen=browsers.length,suffix="",i=0;
a:for(;i<browLen;i++){var regex=new RegExp(browsers[i].regex);if(regex.test(navigator.userAgent)){browserVersion=eval(browsers[i].versionRegex);var typeLen=browsers[i].type.length;for(i=0;i<typeLen;i++)if(browserVersion>=browsers[i].type[i].version&&(1==browsers[i].unhinted&&(suffix="_unhinted"),webfontType=browsers[i].type[i].type,"woff"!=webfontType||woffEnabled)&&("woff2"!=webfontType||woff2Enabled)&&("svg#wf"!=webfontType||svgEnabled))break a}else webfontType="woff"}
/(Macintosh|Android)/.test(navigator.userAgent)&&"svg#wf"!=webfontType&&(suffix="_unhinted");var head=document.getElementsByTagName("head")[0],stylesheet=document.createElement("style");stylesheet.setAttribute("type","text/css");head.appendChild(stylesheet);
var fonts=[{fontFamily:"CoreSansC-55Medium",url:wfpath+"392247_0"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-75ExtraBold",url:wfpath+"392247_1"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-65Bold",url:wfpath+"392247_2"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-55MediumIt",url:wfpath+"392247_3"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-75ExtraBoldIt",url:wfpath+"392247_4"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-15Thin",url:wfpath+"392247_5"+suffix+"_0."+webfontType},
{fontFamily:"CoreSansC-95BlackIt",url:wfpath+"392247_6"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-85HeavyIt",url:wfpath+"392247_7"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-95Black",url:wfpath+"392247_8"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-15ThinIt",url:wfpath+"392247_9"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-85Heavy",url:wfpath+"392247_A"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-25ExtraLight",url:wfpath+"392247_B"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-25ExtraLightIt",
url:wfpath+"392247_C"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-35Light",url:wfpath+"392247_D"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-35LightIt",url:wfpath+"392247_E"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-45RegularIt",url:wfpath+"392247_F"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-45Regular",url:wfpath+"392247_10"+suffix+"_0."+webfontType},{fontFamily:"CoreSansC-65BoldIt",url:wfpath+"392247_11"+suffix+"_0."+webfontType}],len=fonts.length,data_fn;
"ttf"==webfontType?data_fn="_unhinted"==suffix?"392247_data_unhintedttf.css":"392247_datattf.css":"woff"==webfontType&&(data_fn="_unhinted"==suffix?"392247_data_unhintedwoff.css":"392247_datawoff.css");var link=document.createElement("link");link.setAttribute("rel","stylesheet");link.setAttribute("type","text/css");link.setAttribute("href",wfpath+data_fn);head.appendChild(link);
for(var css="",i=0;i<len;i++){var format="svg#wf"==webfontType?'format("svg")':"ttf"==webfontType?'format("truetype")':"eot"==webfontType?"":'format("'+webfontType+'")',css=css+("@font-face{font-family: "+fonts[i].fontFamily+";src:url("+fonts[i].url+")"+format+";");fonts[i].fontWeight&&(css+="font-weight: "+fonts[i].fontWeight+";");fonts[i].fontStyle&&(css+="font-style: "+fonts[i].fontStyle+";");css+="}"}stylesheet.styleSheet?stylesheet.styleSheet.cssText=css:stylesheet.innerHTML=css;
