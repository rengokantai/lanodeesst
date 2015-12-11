/**
 * Created by Hernan Y.Ke on 2015/12/11.
 */
var fs =require("fs");
var path = require("path");


fs.readFile("./lib/text.txt","UTF-8", function (err,content) {
    if(err){
        console.log(err);
    }
    console.log(content);
});

fs.readdir("./lib",function(err,files){
    files.forEach(function(fileName){
        var file = path.join(__dirname, "lib",fileName);
        var stats = fs.statSync(file);
        if(stats.isFile()&&fileName!=="xx"){
            fs.readFile(file,"UTF-8",function(err,contents){
                console.log(contents);
            })

        }
    })

})