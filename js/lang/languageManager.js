$(document).ready(function(){
	// Default Version
	setVersionOnWebsite(spanishVersion);
	
	// Change to English Version Trigger
	$("#changeIntoEnglish").click(function(){
		setVersionOnWebsite(englishVersion);
	});
	
	// Change to Spanish Version Trigger
	$("#changeIntoSpanish").click(function(){
		setVersionOnWebsite(spanishVersion);
	});
});

function setVersionOnWebsite(version){
	setNavbarTitles(version.navbar);
	setAboutText(version.about);
}

function setNavbarTitles(titles){
	if(titles!=null){
		$.each(titles,function(key,val){
			$("#navbar-item"+key).text(val);
		});
	}else{
		console.log("Navbar titles were not passed as a parameter. Will not be inserted.");
	}
}

function setAboutText(txt){
	if(txt!=null){
		$("#aboutText").text(txt);
	}else{
		console.log("About text was not passed as a parameter. Will not be inserted.");
	}
}