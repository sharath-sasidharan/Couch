// form validation starts here
var nameField = document.querySelector("#name");
var emailField = document.querySelector("#email");
var phoneNumberField = document.querySelector("#phone");
var messageField = document.querySelector("#message");
var inputFields = document.querySelectorAll("input");
var submitButton = document.querySelector(".submit");
var emptyFieldMessage = document.querySelectorAll(".empty-error");

// regex patterns
var patterns = {
	name : /^[a-zA-Z]{1,50}$/,
	email : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	phone : /(^\d{3}[\-]?)+(\d{3}[\-]?)+\d{4}$/,
	message : /^[\w]{10,50}$/
}


inputFields.forEach(function(inputField){
	inputField.addEventListener("keyup",function(e) {
		validate(e.target,patterns[e.target.attributes.name.value])
	}); 
})

// emptyFieldMessage errors
function activeError(n){
	for(var i=0; i<emptyFieldMessage.length; i++) {
		emptyFieldMessage[i].classList.remove("visible");
	}
	n.nextElementSibling.classList.add("visible");
}

// check if fields are empty or not
submitButton.addEventListener("click",checkEmptyFields);
function checkEmptyFields(e) {
	if(nameField.value === ""){
		activeError(nameField);
		e.preventDefault();
		return false;
	}
	if(emailField.value === ""){
		activeError(emailField);
		e.preventDefault();
		return false;
	}
	if(phoneNumberField.value === ""){
		activeError(phoneNumberField);
		e.preventDefault();
		return false;
	}
	if(messageField.value === ""){
		activeError(messageField);
		e.preventDefault();
		return false;
	}
	return true;
}


// to valiate regex according to patterns
// field parameter is for getting e.target value
// regex regex parameter is to valiate according to provided patterns

function validate(field,regex) {
	if(regex.test(field.value)) {
		field.parentElement.classList.add("valid");
		field.parentElement.classList.remove("invalid");
	}
	else if(field.value.length === 0) {
		field.parentElement.classList.remove("invalid");
		field.parentElement.classList.remove("valid");
	}
	else {
		field.parentElement.classList.remove("valid");
		field.parentElement.classList.add("invalid");
	}
}
