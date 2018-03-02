$(document).ready(function(event){
	
//============================================
$.get('/professions/:category', function(data){
	professionTableIteration(JSON.stringify(data));
})


	//GET REQUEST For all the data from profession table
	//============================================

	//sending a get request
	// via route /professions
	// store the response in the data parameter
	$.get('/professions', function(data){
	//============================================
	// with all the information we get back 
	// we are calling the function that handles how it's displayed
	professionTableIteration(data);
	//============================================		
	})// get request closing tag

	
	//============================================

function professionTableIteration(data){

	//once the get request gets the response 
	//lets log the data into terminal for tests	
	
	
	data.forEach(function (currentValue, index, array){
		// console.log(currentValue.occupation);
		// console.log(currentValue.id);

		var occupation= currentValue.category;
		var professionid = currentValue.id;
			
		htmlHandler(professionid, occupation);

	});

	$(".occupations").click(function(){
		console.log('working')
			// class will be shown
	var idSelected = $(this).prop('value');
		if ($(this).prop('checked')){
			// $(`input[type='file'][name='${occupationSelected}']`).removeClass('hidden');
			$(`.${idSelected}`).removeClass('hidden');
			// $(".Developer").removeClass("hidden");
			// console.log(test);
		} else{
			$(`.${idSelected}`).addClass('hidden');
		}

		})

}

function htmlHandler(pk, occupation){
// PANEL THAT HOLDS ALL THE CHECKBOXES WITH PROFESSION LIST
//======================================

	var professionList = `
	<div class="col m4 s12">
	
	<input type="checkbox" 
	class="filled-in occupations" 
	value="${pk}"
	id="${occupation}"/>

	<label for="${occupation}">
		<span style= "color:#F4FCFB;">
		${occupation}
		</span>
	</label>
	<div class="file-field input-field hidden ${pk}">
		<div class="btn">
		  <span>File</span>
		  <input type="file" 
		  name= "${occupation}">
		</div>
		<div class="file-path-wrapper">
		  <input class="file-path validate" 
		  type="text">
		</div>
	  </div>
	</div>`;

	$('#professionRow').append(professionList);

	var option = 
	`<option value="${pk}">${occupation}</option>` 
	
	$('#options').append(option)

	
}
				
//============================================
});// document on ready function closing tag 