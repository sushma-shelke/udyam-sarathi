/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Date Picker
6. Init Select
7. Init Milestones


******************************/

$(document).ready(function()
{
	"use strict";
	initHomeSlider();
	
	/* 

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				autoplay:true,
				loop:true,
				nav:false,
				dots:false,
				smartSpeed:1200,
				mouseDrag:false,
				dotsContainer:'home_slider_custom_dots'
			});

			/* Custom dots events */
			// if($('.home_slider_custom_dot').length)
			// {
			// 	$('.home_slider_custom_dot').on('click', function()
			// 	{
			// 		$('.home_slider_custom_dot').removeClass('active');
			// 		$(this).addClass('active');
			// 		homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
			// 	});
			// }

			/* Change active class for dots when slide changes by nav or touch */
			// homeSlider.on('changed.owl.carousel', function(event)
			// {
			// 	$('.home_slider_custom_dot').removeClass('active');
			// 	$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			// });
		}
	}

	/* 

	5. Init Date Picker

	*/

	function initDatePicker()
	{
		var dp = $('#datepicker');
		dp.datepicker();
	}

	/* 

	6. Init Select

	*/

	function initSelect()
	{
		if($('.intro_select').length)
		{
			var select = $('.intro_select');
			select.each(function()
			{
				var selected = $(this);
				selected.change(function()
				{
					selected.addClass('selected');
				});
			});
		}
	}

	/* 

	7. Init Milestones

	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}

});