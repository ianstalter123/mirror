$(function() {

	console.log( "ready!" );
    $('input').focus();

    if (localStorage['tasks']) {
    var tasks = JSON.parse(localStorage['tasks']);
	}else {
    var tasks = {id:'name'};
	}

	for(var i=0;i<tasks.length;i++) {
    appendTask(tasks[i].name,tasks[i].id);
	}




	$("body").on('dblclick','ul li', function() {    
    $(this).fadeOut("slow", function() {
    remove();
  	});
	});


   $('body').click(function(e) {
		
	e.preventDefault();
	genList(e);
	});



	function genList(e) {
	// console.log(e.target);
	if(e.target && e.target.id === 'add_todo' && $('input').val() !== "")
	{

		var id = new Date().getTime();
		console.log(e.target);
		var newTodo = $('input').val();


		tasks.push({id:id, name:newTodo});   
    	// save to local storage
    	localStorage["tasks"] = JSON.stringify(tasks);

		$('ul').hide().append("<li id =" + id + "><input id = 'check' type = 'checkbox'>" + newTodo + "<span id = 'del'>delete</span></li>").fadeIn();	
		$('input').val("");
		
	}
	else if (e.target && e.target.id === 'check')
	{
		console.log('checked')
		$(e.target).parent().addClass("checked");
		$(e.target).parent().css("text-decoration", "line-through");
		$(e.target).prop('checked', true);

	}
	else if (e.target && e.target.id === 'del')
	{
		console.log('clicked del');
		$(e.target).parent().fadeOut("slow", function() {
    	console.log($(e.target).parent().attr('id'));

    	var spliceMe = findIndex(tasks, 'id', $(e.target).parent().attr('id'))
    	console.log(spliceMe);
    	tasks.splice(spliceMe,1); 
    	localStorage["tasks"] = JSON.stringify(tasks);
    })

	}
   
  	};

 
function appendTask(val, id) {
   $('ul').append("<li id =" + id + "><input id = 'check' type = 'checkbox'>" + val + 
   	"<span id = 'del'>delete</span></li>");	
	}

function findIndex(tasks, id, value) { 
for (var i = 0; i < tasks.length; i++) {
 
if (tasks[i][id] == value) {
return i;
}
}
return null;
}
 	
	
})

	


