/**
 * Created by Hernan Y.Ke on 2015/12/11.
 */
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);

var real = {
    name:'',
    sayings:[]
}

rl.question("NAME?",function(ans){
    real.name=ans;
    fs.writeFileSync("./lib/"+real.name+".txt",`${real.name}`)
    rl.setPrompt(`What sould ${real.name} say`);
    rl.prompt();
    rl.on('line',function(say){
        real.sayings.push(say.trim());
        fs.appendFile("./lib/"+real.name+".txt",`${say.trim()}`);
        if(say.toLowerCase().trim()==='exit'){
            rl.close();
        }else{
            rl.setPrompt(`What else?( 'exit' to exit)`);
            rl.prompt();
        }
    })
})



var fd =`
Sample
======
* 1
* 2
* 3
`;

fs.writeFile("./lib/new.txt",fd.trim(),function(err){
    console.log("created");
})