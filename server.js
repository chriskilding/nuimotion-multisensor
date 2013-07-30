var http = require('http')
  , fs = require('fs')
  , sse = require('sse-stream')('/sse')
  
  
var serv = http.createServer(function(req, resp) {
  resp.setHeader('content-type', 'text/html')
  resp.end('<html><body><script type="text/javascript">('+js+')()</script></body></html>')
});

sse.on('connection', function(client) {
  fs.createReadStream('/tmp/pcl-streamer-pipe')
    .pipe(client, {end: false});
});

sse.install(serv);




// client-side code:
function js() {
  var es = new EventSource('/sse')
    , pre = document.createElement('pre')
    , closed = false

  document.body.appendChild(pre)

  es.onmessage = function(ev) {
    if(closed) return

    pre.appendChild(document.createTextNode(ev.data))

    window.scrollTo(0, pre.clientHeight)
  }

  es.addEventListener('end', function() {
    es.close()
    closed = true
  }, true)

  es.onerror = function(e) {
    closed = true
  }
}