// var exports = module.exports = {};
var usefunction = require('./bash.js')
var fs = require('fs');
var request =require('request')
exports.pwd = function(stdin,file){
	 var out = process.env.PWD
     usefunction.done(out);
	 return
}

exports.date = function(file){
	var out = Date();
	usefunction.done(out);
	 return
}

exports.ls = function(file){
	fs.readdir('.', function(err, files) {
    if (err) throw err;
    var output = ''
    files.forEach(function(file) {
        output += file.toString() + "\n";
    })
    usefunction.done(output);

    });
	return
}

exports.echo = function(file){
	var out = file;
	 usefunction.done(out);
	 return
}

exports.cat = function(file){
	fs.readFile(file,function(err,data){
		if (err) throw err;
		var out = data
        usefunction.done(out);
	})
	 return
}

exports.head = function(file){
	fs.readFile(file,function(err,data){
		if (err) throw err;
		var out = data.toString();
		out = out.split('\n');
		var output='';
		for(var i = 0 ; i<5 ;i++){
			output += out[i] + '\n';
		}
        usefunction.done(output);
	})
	 return
}

exports.tail = function(file){
	fs.readFile(file,function(err,data){
		if (err) throw err;
		var out = data.toString();
		out = out.split('\n');
		var output='';
		for(var i = out.length-5 ; i < out.length;i++){
			output += out[i] + '\n';
		}
        usefunction.done(output);
	})
	 return
}

exports.curl = function(path){
    request(path, function(error,response,body){
    	if (!error && response.statusCode == 200) {
        usefunction.done(body);
  }

    })
	 return
}