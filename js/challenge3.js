$("#ch3form").submit(function(event){
	console.log('in function');
	var fruit = $('input[name="fruit"]');
	var standing = $('input[name="standing"]');
	var fruit_checked = false;
	var standing_checked = false;

	fruit.each(function(){
		console.log('in loop');
		if (this.checked){
			console.log('checked');
			fruit_checked = true;
		}
	})

	standing.each(function(){
		if (this.checked){
			console.log('checked');
			standing_checked = true;
		}
	})

	if(fruit_checked == true && standing_checked == true){
		event.submit();
	}

	if(fruit_checked == false && standing_checked == false){
		console.log('no selections')
		alert("Nothing is selected!")
		event.preventDefault();

	}

	else{
		alert("You must pick a fruit and class standing!");
		event.preventDefault();
	}




});
