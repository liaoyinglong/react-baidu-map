(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[387],{638:function(a,e){!function(a){var e=/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,t=/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;a.languages.soy={comment:[/\/\*[\s\S]*?\*\//,{pattern:/(\s)\/\/.*/,lookbehind:!0,greedy:!0}],"command-arg":{pattern:/({+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,lookbehind:!0,alias:"string",inside:{punctuation:/\./}},parameter:{pattern:/({+\/?\s*@?param\??\s+)\.?[\w.]+/,lookbehind:!0,alias:"variable"},keyword:[{pattern:/({+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,lookbehind:!0},/\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/],delimiter:{pattern:/^{+\/?|\/?}+$/,alias:"punctuation"},property:/\w+(?==)/,variable:{pattern:/\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+]))*/,inside:{string:{pattern:e,greedy:!0},number:t,punctuation:/[\[\].?]/}},string:{pattern:e,greedy:!0},function:[/\w+(?=\()/,{pattern:/(\|[^\S\r\n]*)\w+/,lookbehind:!0}],boolean:/\b(?:true|false)\b/,number:t,operator:/\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,punctuation:/[{}()\[\]|.,:]/},a.hooks.add("before-tokenize",(function(e){var t=!1;a.languages["markup-templating"].buildPlaceholders(e,"soy",/{{.+?}}|{.+?}|\s\/\/.*|\/\*[\s\S]*?\*\//g,(function(a){return"{/literal}"===a&&(t=!1),!t&&("{literal}"===a&&(t=!0),!0)}))})),a.hooks.add("after-tokenize",(function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"soy")}))}(Prism)}}]);
//# sourceMappingURL=387.40437493.chunk.js.map