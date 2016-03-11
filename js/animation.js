var shadeHeight = [25, 10, 20, 35, 10];
var firstLegoLoad = true;

function clearLego() {
	var container = document.getElementsByClassName('lego-me')[0];
	if (container != undefined) {
		var legoShades = container.querySelectorAll('.lego-container')[0].querySelectorAll('div');
		for (var i = 0; i < legoShades.length; i++) {
			legoShades[i].style.height= 0+"px";
		}
	}
}
function loadLego() {
	var container = document.getElementsByClassName('lego-me')[0];
	if (container != undefined) {
		var i = 0;
		var legoShades = container.querySelectorAll('.lego-container')[0].querySelectorAll('div');
		var labels = container.querySelectorAll('.label-container')[0].querySelectorAll('div');
		if (firstLegoLoad) {
			firstLegoLoad = false;
		}
		else {
			clearLego();
		}
		myDelayedLoop(legoShades, i, legoShades.length);
	}
}
function myDelayedLoop(legoShades, i,len) {
	setTimeout(function() {
		var temp_shade = legoShades[i];
		var percentage = shadeHeight[i];
		var legoBoy = document.getElementById('legoboi');
		if (legoBoy != undefined) {

			temp_shade.style.height= 0+"px";
			showColor(temp_shade, (percentage/100)*legoBoy.height);
			i++;
			if (i < len) {
				myDelayedLoop(legoShades,  i, len);
			}
		}
	}, 450);
}

function showColor(temp_shade , tempHeight) {
	setTimeout(function() {
		temp_shade.style.visibility="visible";
		temp_shade.style.height = tempHeight + "px";
	}, 250);
}

function resizeDJController() {
	var djcontroller = document.getElementById('pioneer');
	if (djcontroller != undefined) {
		var width = djcontroller.getBoundingClientRect().width;
		var parentWidth = $("#pioneer").parent().parent().width();
		var dif = parentWidth - width;
		djcontroller.style.left = (dif/2) +'px';
	}
}

$(document).ready(function($) {
	resizeDJController();
	// Repaints the lego on width resize
	var windowWidth = $(window).width();
	$(window).on('resize', function(event){

		resizeDJController();
		if (Math.abs($(window).width() - windowWidth) >= 90 ) {
			windowWidth = $(window).width();
			loadLego();
		}

	});
});

// Loads animation when scrolled to right place
var triggered_times = 0;
var skill_triggered_times = 0;
var mywork_triggered_times = 0;
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

		// Lego
		if ($('#lego').length) {
			var scroll_lego_pos = $("#lego").position().top;
			if(y_scroll_pos+700 > scroll_lego_pos && triggered_times == 0) {
				triggered_times++;
				loadLego();
			}
		}

		// Work animation
		if ($('#myWork').length) {
			var scroll_work_pos = $("#myWork").position().top;
			if(y_scroll_pos+450 > scroll_work_pos && mywork_triggered_times == 0) {

				mywork_triggered_times++;
				var workList = document.getElementsByClassName('work-place');
				for (var i = 0; i< workList.length;i++) {
					var tempCircle = workList[i];
					tempCircle.style.animationDelay = '.' +  (i * 2) +"s";
					tempCircle.classList.add('slideInLeft');
				}
			}
		}

		// Skills
		if ($('#mySkillz').length) {
			var scroll_pos_mySkillz = $("#mySkillz").position().top;
			if(y_scroll_pos+450 > scroll_pos_mySkillz && skill_triggered_times == 0) {
				skill_triggered_times++;
				var circles = document.getElementsByClassName('skill-circle');
				for (var i = 0; i< circles.length;i++) {
					var tempCircle = circles[i];
					tempCircle.classList.add('rollIn');
					tempCircle.style.visibility = 'visible';
				}
			}
		}
});
