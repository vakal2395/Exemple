


function changeMenu(classN, Property){
		var liList = document.querySelectorAll('.'+ classN+' li');
		for (var i = 1; i < liList.length; i++) {
			var previous = liList[i].previousSibling;
			while(previous.nodeType!= 8){
				previous = previous.previousSibling;
			}
			liList[i].style[Property] = previous.data;
					}
	}
	changeMenu('foreground', 'color');


	function changeMenu2(classN, Property){
		var liList = document.querySelectorAll('.'+ classN+' li');
		for (var i = 0; i < liList.length; i++) {
			var previous = liList[i].previousSibling;
			while(previous.nodeType!= 8){
				previous = previous.previousSibling;
			}
			liList[i].style[Property] = previous.data;
					}
	}
	changeMenu2('background', 'background');

