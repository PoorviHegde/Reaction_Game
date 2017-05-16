		var start = new Date().getTime(); 
		function getRandomColor() {
			var letters = "0123456789ABCDEF".split('');
			var color = '#';
			for (var i = 0; i < 6; i++ ) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}	

		function makeshapeappear()
		{
			if(Math.random()>0.8)
			{
				document.getElementById("red").style.borderRadius = "50%";
			}
			else
			{
				document.getElementById("red").style.borderRadius = "0%";
			}
			var borderRad = [100,50,75,25];
			var top = Math.random()*400;
			var left = Math.random()*400;
			var width = (Math.random()*300)+50;
			var shape = borderRad[Math.floor(Math.random()*4)];
			document.getElementById("red").style.top = top + "px";
			document.getElementById("red").style.left = left + "px";
			document.getElementById("red").style.width = width + "px";
			document.getElementById("red").style.height = width + "px";
			document.getElementById("red").style.backgroundColor = getRandomColor();
			document.getElementById("red").style.display = "block";
			start = new Date().getTime(); 
		}
			
		function appearafterdelay()
		{
			setTimeout(makeshapeappear,Math.random()*2000);
		}
			
		appearafterdelay();
			
		document.getElementById("red").onclick = function()
		{
			document.getElementById("red").style.display = "none";
			var end = new Date().getTime();
			var timeTaken = (end - start)/1000;
			document.getElementById("tt").innerHTML ="Time Taken: " + timeTaken + "secs";
			appearafterdelay();
		}