/*
请用 javascript 实现一个函数 parseUrl(url)，将一段 url 字符串解析为 Object。 
例如：
parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title");
返回结果：
{
    protocol: "http",
    host: "www.xiyanghui.com",
    path: "/product/list",
    params: {
        id: "12345",
        sort: "discount"
    },
    hash: "title"
}
*/
function parseUrl(url) {   
     var a =  document.createElement('a');   
     a.href = url;   
     return {   
         source: url,   
         protocol: a.protocol.replace(':',''),   
         host: a.hostname,   
         port: a.port,   
         query: a.search,   
         params: (function(){   
             var ret = {},   
                 seg = a.search.replace(/^\?/,'').split('&'),   
                 len = seg.length, i = 0, s;   
             for (;i<len;i++) {   
                 if (!seg[i]) { continue; }   
                 s = seg[i].split('=');   
                 ret[s[0]] = s[1];   
             }   
             return ret;   
         })(),   
         file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],   
         hash: a.hash.replace('#',''),   
         path: a.pathname.replace(/^([^\/])/,'/$1'),   
         relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],   
         segments: a.pathname.replace(/^\//,'').split('/')   
    };   
} 
parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title");
