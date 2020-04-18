$(document).ready(function () {
	$(".next1").click(function () {
		//Steps
		$(".step1").css("display", "none");
		$(".step2").css("display", "block");
		$(".step3").css("display", "none");
		//Progress Bar
		$("#plans").addClass("active");
		// $(".step1").removeClass("active");
		// $(".step1").removeClass("active");
	});
	$(".next2").click(function () {
		$(".step1").css("display", "none");
		$(".step3").css("display", "block");
		$(".step2").css("display", "none");
		$("#checkout").addClass("active");
	});
	$(".next3").click(function () {
		alert("Thanks");
	});
	$(".previous2").click(function () {
		//Steps
		$(".step2").css("display", "none");
		$(".step1").css("display", "block");
		$(".step3").css("display", "none");
		//Progress Bar
		$("#plans").removeClass("active");
		// $(".step1").removeClass("active");
		// $(".step1").removeClass("active");
	});
	$(".previous3").click(function () {
		$(".step1").css("display", "none");
		$(".step2").css("display", "block");
		$(".step3").css("display", "none");
		$("#checkout").removeClass("active");
	});
	$(".next3").click(function () {
		alert("Thanks");
	});
});
