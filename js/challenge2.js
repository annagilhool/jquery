$("#useBilling").click(function(){
	if (this.checked){
		console.log('billing checked');
		$("#home").val($("#billing").val());
		$("#home").prop("disabled", true);
	}
	else {
		console.log('not same as billing');
		$("#home").val("");
		$("#home").prop("disabled", false);
	}
});
