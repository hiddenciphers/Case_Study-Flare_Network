!function(){var E,t,e=631,n={STORE_OR_ACCESS_INFORMATION_ON_A_DEVICE:1,SELECT_BASIC_ADS:2,CREATE_PERSONALIZED_ADS_PROFILE:3,SELECT_PERSONALIZED_ADS:4,CREATE_PERSONALIZED_CONTENT_PROFILE:5,SELECT_PERSONALIZED_CONTENT:6,MEASURE_AD_PERFORMANCE:7,MEASURE_CONTENT_PERFORMANCE:8,APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS:9,DEVELOP_AND_IMPROVE_PRODUCTS:10},_="none",a="none",c="none",r=document.querySelectorAll("script"),A=!1,o="https://t.svtrd.com/collect/bb847023-1aa2-44e9-bebe-5fb14cca99c4/f9315f7a-06fd-46bd-a70d-0f01cf8e4c3b?ct=engagement&name=displayAdView";for(var R in r)if(r.hasOwnProperty(R)&&-1!=r[R].src.indexOf("a.svtrd.com/media/s"))for(var i=r[R].src.split("?")[1].split("&"),O=0;O<i.length;O++)"implicit=true"==i[O]&&(A=!0),o+="&cup="+i[O].replace("=",":");function S(E,t,e){o+="&cup=iab:"+E+"&cup=r42Consent:"+t+"&cup=consentString:"+e;var n=document.createElement("iframe");n.src=encodeURI(o),n.name="r42dc",n.style.display="none",n.style.width="1px",n.style.height="1px",document.body.append(n)}function s(E){return null!=E?(c="true",function(E){var t=!1;try{t=!0===E.vendor.consents[e]}catch(E){}return _=t,t}(E)&&function(E){var t=!1;try{var e=E.purpose.consents;t=!!(e[n.STORE_OR_ACCESS_INFORMATION_ON_A_DEVICE]&&e[n.SELECT_BASIC_ADS]&&e[n.CREATE_PERSONALIZED_ADS_PROFILE]&&e[n.SELECT_PERSONALIZED_ADS]&&e[n.CREATE_PERSONALIZED_CONTENT_PROFILE]&&e[n.SELECT_PERSONALIZED_CONTENT]&&e[n.MEASURE_AD_PERFORMANCE]&&e[n.MEASURE_CONTENT_PERFORMANCE]&&e[n.APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS]&&e[n.DEVELOP_AND_IMPROVE_PRODUCTS]),a=JSON.stringify(e)}catch(E){}return t}(E)):(c="false",!!A||!!A&&void 0)}E=function(){for(var E=window,t=null;E;){try{if(E.frames.__tcfapiLocator){t=E;break}}catch(E){}if(E===window.top)break;E=E.parent}return t}(),t={},window.__tcfapi=function(e,n,r,o){if(E){var R=Math.random()+"",i={__tcfapiCall:{command:e,parameter:o,version:n,callId:R}};t[R]=r,E.postMessage(i,"*")}else A&&S(c,_,a),r({msg:"CMP not found"},!1)},window.addEventListener("message",function(E){let e={};try{e="string"==typeof E.data?JSON.parse(E.data):E.data}catch(E){}var n=e.__tcfapiReturn;n&&"function"==typeof t[n.callId]&&(t[n.callId](n.returnValue,n.success),t[n.callId]=null)},!1),__tcfapi("getTCData",2,function(E,t){t&&s(E)&&S(c,_,a)},[e])}();