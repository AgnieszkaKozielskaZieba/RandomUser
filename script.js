var button=document.querySelector("#btn");
console.log(button);

button.addEventListener("click", createData)

document.ready=createData();

function createData(){
	var url="https://randomuser.me/api/";

	fetch(url)
	.then(handleError)
	.then(parseJSON)
	.then(updateData)
	.catch(printError)
}
function handleError(result){
	if (!result.ok){
		throw Error("Something went wrong");
	}
	return result;
}
function parseJSON(result){
	return result.json();
}
function updateData(data){
	var myData=data.results[0];
	var fullname=myData.name.first+" "+myData.name.last;
	var login=myData.login.username;
	var email=myData.email;
	var city=myData.location.city;
	var photo=myData.picture.medium;

	document.querySelector("#fullname").innerText=fullname;
	document.querySelector("#username").innerText=login;
	document.querySelector("#email").innerText=email;
	document.querySelector("#city").innerText=city;
	document.querySelector("#avatar").src=photo;


}
function printError(error){
	console.log(error);
}