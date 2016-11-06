var firstArray = new Array (16);
firstArray[0] = "./firstarray/one.jpeg";
firstArray[1] = "./firstarray/two.jpeg";
firstArray[2] = "./firstarray/three.jpeg";
firstArray[3] = "./firstarray/four.jpeg";
firstArray[4] = "./firstarray/five.jpeg";
firstArray[5] = "./firstarray/six.jpeg";
firstArray[6] = "./firstarray/seven.jpeg";
firstArray[7] = "./firstarray/eight.jpeg";
firstArray[8] = "./firstarray/nine.jpeg";
firstArray[9] = "./firstarray/ten.jpeg";
firstArray[10] = "./firstarray/eleven.jpeg";
firstArray[11] = "./firstarray/twelve.jpeg";
firstArray[12] = "./firstarray/thirteen.jpeg";
firstArray[13] = "./firstarray/fourteen.jpeg";
firstArray[14] = "./firstarray/fifteen.jpeg";
firstArray[15]="";

var whichImage=0;



var secondArray = new Array (9);
secondArray[0] = "./secondarray/one.jpeg";
secondArray[1] = "./secondarray/two.jpeg";
secondArray[2] = "./secondarray/three.jpeg";
secondArray[3] = "./secondarray/four.jpeg";
secondArray[4] = "./secondarray/five.jpeg";
secondArray[5] = "./secondarray/six.jpeg";
secondArray[6] = "./secondarray/seven.jpeg";
secondArray[7] = "./secondarray/eight.jpeg";
secondArray[8] = "";

var thirdArray = new Array (36);
thirdArray[0] = "./thirdarray/one.jpeg";
thirdArray[1] = "./thirdarray/two.jpeg";
thirdArray[2] = "./thirdarray/three.jpeg";
thirdArray[3] = "./thirdarray/four.jpeg";
thirdArray[4] = "./thirdarray/five.jpeg";
thirdArray[5] = "./thirdarray/six.jpeg";
thirdArray[6] = "./thirdarray/seven.jpeg";
thirdArray[7] = "./thirdarray/eight.jpeg";
thirdArray[8] = "./thirdarray/nine.jpeg";
thirdArray[9] = "./thirdarray/ten.jpeg";
thirdArray[10] = "./thirdarray/eleven.jpeg";
thirdArray[11] = "./thirdarray/twelve.jpeg";
thirdArray[12] = "./thirdarray/thirteen.jpeg";
thirdArray[13] = "./thirdarray/fourteen.jpeg";
thirdArray[14] = "./thirdarray/fifteen.jpeg";
thirdArray[15]= "./thirdarray/sixteen.jpeg";
thirdArray[16]= "./thirdarray/seventeen.jpeg";
thirdArray[17]= "./thirdarray/eighteen.jpeg";
thirdArray[18]= "./thirdarray/nineteen.jpeg";
thirdArray[19]= "./thirdarray/twenty.jpeg";
thirdArray[20]= "./thirdarray/twentyone.jpeg";
thirdArray[21]= "./thirdarray/twentytwo.jpeg";
thirdArray[22]= "./thirdarray/twentythree.jpeg";
thirdArray[23]= "./thirdarray/twentyfour.jpeg";
thirdArray[24]= "./thirdarray/twentyfive.jpeg";
thirdArray[25]= "./thirdarray/twentysix.jpeg";
thirdArray[26]= "./thirdarray/twentyseven.jpeg";
thirdArray[27]= "./thirdarray/twentyeight.jpeg";
thirdArray[28]= "./thirdarray/twentynine.jpeg";
thirdArray[29]= "./thirdarray/thirty.jpeg";
thirdArray[30]= "./thirdarray/thirtyone.jpeg";
thirdArray[31]= "./thirdarray/thirtytwo.jpeg";
thirdArray[32]= "./thirdarray/thirtythree.jpeg";
thirdArray[33]= "./thirdarray/thirtyfour.jpeg";
thirdArray[34]= "./thirdarray/thirtyfive.jpeg";
thirdArray[35]= "";

var i=0;
var elm = document.getElementById("animated");
        var stopped;
        var requestId = 0;
        var starttime;
var tbl = document.getElementsByTagName('table');

function chooseImage(array)
{
	var output = '';
	whichImage = Math.floor(Math.random()*array.length);
	output = array[whichImage];
	array.splice(whichImage,1);
	return output;
}

function init(array, columns, number)
{
	 var table = document.createElement('table'), i, 
        tbody = table.appendChild(document.createElement('tbody')),
       tr, tot;
        for (i=0, tot=array.length-1; i<=tot; i++) 
		{
            if( i % columns === 0) tr = tbody.appendChild(document.createElement('tr'));
            tr.appendChild(document.createElement('td'))
              .appendChild(document.createElement('img'))
              .src = array[i];			  
        }	
        document.body.appendChild(table);
		table.border = 2;
}

function assignCellValues(array, columns, number, moves)
{
	 var table = document.createElement('table'), i, 
        tbody = table.appendChild(document.createElement('tbody')),
       tr, tot;
        for (i=0, tot=array.length-1; i<=tot; i++) 
		{
            if( i % columns === 0) tr = tbody.appendChild(document.createElement('tr'));
            tr.appendChild(document.createElement('td'))
              .appendChild(document.createElement('img'))
              .src = chooseImage(array);
			  
        }	
        document.body.appendChild(table);
		table.border = 2;
		table.bgColor = "black";
		tableClick(table, moves);
			
}
function tableClick(table, time)
{
	 document.getElementById("moves").innerHTML = time;
	 if (table !== null) 
		 {
				//var limit = 0;
				if(time>0)
				{
				for (i = 0; i < table.rows.length; i++) 
				{
					for (var j = 0; j < table.rows[i].cells.length; j++)
						table.rows[i].cells[j].onclick = function () 
					{				
					//alert(limit);
					tableClick(table, --time);
					document.getElementById("moves").innerHTML = time;
					flipPic(this.getElementsByTagName("img")[0]); 
					//time--
					return;
					};
				}
		//		limit++;
				}				
        }
}
 
function puzzleSelect()
{
	//init(firstArray, 4, 16);
	var selection = document.getElementById("puzzleselect");
	var selValue = selection.options[selection.selectedIndex].value;	
	
	if (selValue == "4x4")
	{
		assignCellValues(firstArray,4,16,16);
		countdown(2);
		IsInOrder(tbl, firstArray);
		return false;
	}
	else if (selValue == "3x3")
	{
		assignCellValues(secondArray,3,9,18);
		countdown(3);
		return false;
	}
	else if (selValue == "6x6")
	{
		assignCellValues(thirdArray,6,36,72);
		countdown(4);
		return false;
	}
	return true;
}

/*function setTableTimer(secs)
{
	var x = document.getElementsByTagName('img'), i=0;
	setInterval(function(){
		x[i].style.visibility="hidden";
		i++;
	}, secs);
}

function setTableTimer2(secs)
{
	var x = document.getElementsByTagName('table'), i=0;
	setInterval(function(){
		x[i].style.visibility="hidden";
		i++;
	}, secs);
} */

function ChangeParent(sourceElement, targetElement) 
		{
            //var sourceElementParent = sourceElement.parentNode;
            //sourceElementParent.removeChild(sourceElement);
			
            //targetElement.appendChild(sourceElement);
			targetElement.setAttribute('src',sourceElement.getAttribute('src'));
			sourceElement.setAttribute('src','');
        }

function flipPic(d)
{
            var cell = d.parentNode;
            var row = cell.parentNode;
            var ri = row.rowIndex;
            var ci = cell.cellIndex;
            var emptycell = null;
			var tbl = row.parentNode;
			//alert(tbl.rows[ri].cells[ci].childNodes[0].getAttribute('src'));
			//alert(tbl.rows[ri].cells[ci].childNodes[0]);

            if (ri> 0) 
			{
                if (tbl.rows[ri - 1].cells[ci].childNodes[0].getAttribute('src') === "") 
				{ 
					//alert(tbl.rows[ri].cells[ci-1].innerHTML);
					cell.bgColor = "red";
					emptycell = tbl.rows[ri - 1].cells[ci].childNodes[0]; 
					ChangeParent(d, emptycell);
				//	IsInOrder(d);
				}
            }
            if (ri < tbl.rows.length - 1) 
			{
                if (tbl.rows[ri + 1].cells[ci].childNodes[0].getAttribute('src') === "") 
				{ 
					//alert(tbl.rows[ri].cells[ci+1].innerHTML);
					cell.bgColor = "red";
					emptycell = tbl.rows[ri + 1].cells[ci].childNodes[0];
					ChangeParent(d, emptycell);
				//	IsInOrder(d);
				}
            }
            if (ci > 0) 
			{
                if (tbl.rows[ri].cells[ci - 1].childNodes[0].getAttribute('src') === "") 
				{ 
					//alert(tbl.rows[ri - 1].cells[ci].innerHTML);
					cell.bgColor = "red";
					emptycell = tbl.rows[ri].cells[ci - 1].childNodes[0]; 
					ChangeParent(d, emptycell);
				//	IsInOrder(d);
				}
            }
            if (ci < row.cells.length - 1) 
			{
                if (tbl.rows[ri].cells[ci + 1].childNodes[0].getAttribute('src') === "") 
				{ 
					//alert(tbl.rows[ri + 1].cells[ci].innerHTML);
					cell.bgColor = "red";
					emptycell = tbl.rows[ri].cells[ci + 1].childNodes[0]; 
					ChangeParent(d, emptycell);
				//	IsInOrder(d);
				}
            }
			//alert(emptycell);
            //ChangeParent(d, emptycell);
              //  document.getElementById("moves").innerHTML = moves; 
			 // IsInOrder(tbl, firstArray);
}

function IsInOrder(table, array) 
{
		 for (var k = 0; k < array.length; k++)
		 {
		 for (i = 0; i < table.rows.length; i++) 
			{
					for (var j = 0; j < table.rows[i].cells.length; j++)
					{
						if (array[k] == table.rows[i].cells[j].childNodes[0].getAttribute('src'))
						{
							alert("You won!");
						}
						else 
						{
							alert("You lost!");
						}
					}					
            }
        }
}


function render(time) 
{
          if (!stopped) 
		  {
            elm.style.left = ((Date.now() - starttime) / 4 % 600) + "px";
            requestId = window.requestAnimationFrame(render);
            }
}

        function start() 
		{
            starttime = Date.now();
            requestId = window.requestAnimationFrame(render);
            stopped = false;
        }
        function stop() 
		{
            if (requestId) 
			{
                window.cancelAnimationFrame(requestId);
            }
            stopped = true;
        }
		
		function reFresh() 
		{
		location.reload(true);
		}
		
		
function countdown(minutes) 
{
    var seconds = 60;
    var mins = minutes;
    function tick() 
	{
        var counter = document.getElementById("timer");
        var current_minutes = mins-1;
        seconds--;
        counter.innerHTML =
		current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) 
		{
            setTimeout(tick, 1000);
        } else 
		{
 
            if(mins > 1)
			{setTimeout(function () 
			{ countdown(mins - 1); 
			}, 1000);
 
            }
        }
    }
    tick();
}










