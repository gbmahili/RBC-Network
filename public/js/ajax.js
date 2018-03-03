$(document).ready(function(event){


var dropdown = $("ul.select-dropdown");
// console.log(dropdown.childNodes);
$('ul.select-dropdown').click(function(){
	// alert('hello');
})

//============================================
//GET REQUEST For searched category data from profession table
//============================================
$('#searchIcon').click(function(event){
	event.preventDefault();
	//alert('hello');
	var searchIconValue = "Developer";
	var occupation = {
		occupationName : searchIconValue
	}	

	$.ajax({
		method: "POST",
		url: "/occupations",
		data: occupation,
		success : function(dbProfession){
			var users = (dbProfession[0].Users);
			console.log(users);

			$('#cd').text('');			
			$('#userprofile').hide();
			$("#Profilepage").click(function(){
				$('#userprofile').show();
				$('#cd').text("");
			});
			$('#header').text('Search Results');
			$("#Profilepage").text("Back to your profile")
			users.forEach(element =>{
				
				var membersBox = `
					
					<div class="col s3">
					<div class="card">
					<div class="card-image">
						<img id="image" src="/profileImages/${element.photo}">
					</div>
					<div class="card-content">
						<span class="card-title">
						<div id="firstName">${element.first_name}</div>
						<div id="lastName">${element.last_name}</div>		
						<div id="City">${element.city}</div>
						<div id="State">${element.state}</div>
					</div>
					<div class="card-action">
						<a href="mailto:${element.email}?Subject=Rutgers%20BootCamp%20Network%2018%20Connection%20Request" target="_top">Send Mail</a>
						<i class='material-icons  teal-text lighten-1 right'>email</i>
						</a>
					</div>
					</div>
				</div>
				`;
				//console.log(element);
				
				$('#cd').append(membersBox);
			})

			
		}
	});
})



//GET REQUEST For all the data from profession table
//============================================

//sending a get request
// via route /professions
// store the response in the data parameter
$.get('/professions', function(data){
//============================================
// console.log(data);
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

		// options (occupation);
		// membercardlooks(currentValue);

	});

	$(".occupations").click(function(){
		// console.log('working')
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

	// var option = 
	// `<option value="${pk}">${occupation}</option>` 
	
	// $('#options').append(option)

	
}

//IMAGE BOX THAT'S TO DISPLAY OF SEARCHED MEMBER
//======================================
function membercardlooks(element){
	// profession category might have to change
	var membersBox = `<div class="col s6 m4 l3">
	<div class="card">
	  <div class="card-image">
		<img id="image" src="img/profile-avatar.jpg">
	  </div>
	  <div class="card-content">
		<span class="card-title">
		  <div id="firstName">${element.first_name}</div>
		  <div id="lastName">${element.last_name}</div>
		
		  <div id="City">${element.city}</div>
		  <div id="State">${element.state}</div>
	  </div>
	  <div class="card-action">
		<a class="teal-text lighten-1" href="#">Email</a>
		<i class='material-icons  teal-text lighten-1 right'>email</i>
		</a>
	  </div>
	</div>
  </div>`

  $('#members').append(membersBox);
}

function options (occupation){
	
	var option = `<li 
					class = "occupation" 
					id="${occupation}">
					<span width: 492.75px;position: absolute;top: 0px;left: 0px;display: none;opacity: 1">
					${occupation}
					</span>
					
					</li>`
	// console.log (option);

	$('ul.select-dropdown').append(option)		
}
	
//============================================
});// document on ready function closing tag 