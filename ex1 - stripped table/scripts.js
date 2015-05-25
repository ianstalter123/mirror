$(function() {
    console.log( "ready!" );

	$('button').click(function(e){
		e.preventDefault();
	
	var coloreven = $('#even').val();

    $("tr:nth-child(even)").css("background-color",coloreven);

    var oddProp = $('#oddp').val();
    var oddValue = $('#oddv').val();


    $("tr:nth-child(odd)").css(oddProp,oddValue);
	})
});