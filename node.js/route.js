//untuk memanggil si html
var fs = require('fs');
var url = require('url');


function renderFile(fileName, res){
  //hardcode
  //res.end('Selamat datang di node js');

  //jika memanggil html
  res.writeHead(200,{'Content-Type': 'text/html'});

  fs.readFile(fileName, null, function(error, data){
    if(error){
      res.writeHead(404);
      res.write('file tidak tersedia');
    }else {
      res.write(data);
    }
    res.end();
  });
}
 module.exports ={
   handleRequest : function(req, res) {
       res.writeHead(200,{'Content-Type': 'text/html'});
       var path = url.parse(req.url).pathname;

       switch (path) {
         case '/':
            renderFile('./kucing.html', res);
           break;

           case '/telo':
              renderFile('./pohong.html', res);
             break;
         default:
       }
   }
 };
