

process.stdout.write('prompt>')
var done = function(output) {
     process.stdout.write(output);
	 process.stdout.write('\nprompt > ');
}

var check = function(command){
   var cmdString = command.toString().trim();
   var cmdList = cmdString.split(/\s*\|\s*/g)
   return cmdList
   //[ 'cat bash.js', 'head' ]
}

process.stdin.on('data', function(data){
	var cmd = check(data)

		for(var i in cmd){
			cmd[i]
		}
	if(cmd === 'pwd'){
		require("./commands.js").pwd()

	}
	else if(cmd === 'date'){
        require("./commands.js").date()
	}
	else if(cmd === 'ls'){
		require("./commands.js").ls()
	}
	else if(cmd.slice(0,4) === 'echo'){
	  var arg = cmd.slice(5)
      require("./commands.js").echo(arg)
	}
	else if(cmd.slice(0,3) === 'cat'){
		var arg = cmd.slice(4)
        require("./commands.js").cat(arg)
	}
	else if(cmd.slice(0,4) === 'head'){
		var arg = cmd.slice(5)
        require("./commands.js").head(arg)
	}
	else if(cmd.slice(0,4) === 'tail'){
		var arg = cmd.slice(5)
        require("./commands.js").tail(arg)
	}

	else if(cmd.slice(0,4) === 'curl'){
		var arg = cmd.slice(5)
        require("./commands.js").curl(arg)
	}
})

module.exports.done = done