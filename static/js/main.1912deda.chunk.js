(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,n,t){},82:function(e,n,t){var o={".":29,"./":29,"./GraphQLLanguageService":59,"./GraphQLLanguageService.js":59,"./GraphQLLanguageService.js.flow":173,"./autocompleteUtils":39,"./autocompleteUtils.js":39,"./autocompleteUtils.js.flow":174,"./getAutocompleteSuggestions":32,"./getAutocompleteSuggestions.js":32,"./getAutocompleteSuggestions.js.flow":175,"./getDefinition":40,"./getDefinition.js":40,"./getDefinition.js.flow":176,"./getDiagnostics":42,"./getDiagnostics.js":42,"./getDiagnostics.js.flow":177,"./getHoverInformation":43,"./getHoverInformation.js":43,"./getHoverInformation.js.flow":178,"./getOutline":58,"./getOutline.js":58,"./getOutline.js.flow":179,"./index":29,"./index.js":29,"./index.js.flow":180};function i(e){var n=r(e);return t(n)}function r(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=82},91:function(e,n,t){e.exports=t(92)},92:function(e,n,t){"use strict";t.r(n);var o=t(12),i=t.n(o),r=t(44),s=t.n(r),a=t(89),u=t.n(a),c=t(90),g=t.n(c),l=(t(213),t(214),new URL(window.location.href)),f=l.searchParams.get("neo4jDesktopApiUrl"),p=l.searchParams.get("neo4jDesktopGraphAppClientId");function j(e){return g()(f,{method:"post",headers:{"Content-Type":"application/json",ClientId:p},body:JSON.stringify(e)}).then(function(e){return e.json()})}s.a.render(i.a.createElement(function(e){return i.a.createElement(u.a,{fetcher:j,defaultQuery:"\nquery {\n    workspace {\n      me {\n          name\n      }\n    }\n  }\n"})},null),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.1912deda.chunk.js.map