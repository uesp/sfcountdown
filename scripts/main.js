
	// Current estimated release date
g_sfbCountdownReleaseDate = new Date("2023-06-30T12:00:00");


function sfbUpdatePortraitSizes()
{
	var width = $("#sfbMainRoot").width();
	var height = $("#sfbMainRoot").height();
	
	var portrait1 = $("#sfbCharacterPortrait");
	var leftPanel1 = $("#sfbCountdownRoot");
	var width1 = width - leftPanel1.width();
	
	var totalWidth1 = portrait1.width() + leftPanel1.width();
	
	if (width < 600)
	{
		var newHeight = (width - 200) / (700 - 200) * 100;
		if (newHeight < 40) newHeight = 40;
		if (newHeight > 50) newHeight = 50;
		
		//$("#sfbCharacterPortrait1").css("height", "" + newHeight + "%");
		
		$("#sfbCharacterPortrait").hide();
		$("#sfbCharacterPortrait1").show();
	}
	else if (width < 1100)
	{
		var newHeight = (width - 500) / (1150 - 500) * 100;
		if (newHeight < 25) newHeight = 25;
		if (newHeight > 100) newHeight = 100;
		
		//portrait1.css("height", "" + newHeight + "%");
		
		$("#sfbCharacterPortrait").show();
		$("#sfbCharacterPortrait1").hide();
		$("#sfbCharacterPortrait").attr("src", "images/body1.png");
	}
	else 
	{
		$("#sfbCharacterPortrait").attr("src", "images/character1.png");
		
		$("#sfbCharacterPortrait").show();
		$("#sfbCharacterPortrait1").hide();
		
		//portrait1.css("height", "100%");
	}
}

function sfbOnWindowResize(e)
{
	sfbUpdatePortraitSizes();
}


function sfbSetRandomEmployeeId()
{
	var div = $("#sfbEmployeeNumber");
	
	var prefix = Math.floor(10000000 + Math.random() * 90000000).toString()
	var suffix = Math.random().toString(36).substring(2,6).toUpperCase();
	var employeeId = prefix + "-" + suffix;
	
	div.text(employeeId);
	
	return employeeId;
}


function sfbUpdateCountdown()
{
	var element = $("#sfbCountdownValue");
	var today = new Date();
	var diffTime = Math.floor((g_sfbCountdownReleaseDate - today)/1000);
	
	if (diffTime <= 0)
	{
		element.text("Is Now Released!")
		return;
	}
	
	var text = "";
	var days = Math.floor(diffTime / (3600*24));
	var hours = Math.floor(diffTime % (3600*24) / 3600);
	var minutes = Math.floor(diffTime % 3600 / 60);
	var seconds = Math.floor(diffTime % 60);
	
	if (days > 0)
	{
		text += "" + days + " day";
		if (days > 1) text += "s";
	}
	
	if (hours > 0)
	{
		text += " " + hours + " hour";
		if (hours > 1) text += "s";
	}
	
	if (minutes > 0)
	{
		text += " " + minutes + " minute";
		if (minutes > 1) text += "s";
	}
	
	if (seconds > 0)
	{
		text += " " + seconds + " sec";
		if (seconds > 1) text += "s";
	}
	
	element.text(text);
}


function sfbOnDocumentReady()
{
	$( window ).resize(sfbOnWindowResize);
	
	setInterval(sfbUpdateCountdown, 1000);
	
	sfbSetRandomEmployeeId();
	sfbUpdatePortraitSizes();
	sfbUpdateCountdown();
}


$(function() {
	sfbOnDocumentReady();
});

