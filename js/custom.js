$(document).ready(function(){
	$( "#faq-accordion-main" ).accordion();
	$( ".faq-accordion" ).accordion({
		collapsible:true,
		active:false,
		heightStyle:"content",
		icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
	});

	$(".accordion").accordion({
		collapsible:true,
		active:false,
		heightStyle:"content"
	});

	$(".publications-info").hide();
	$("#publications").show();
	$(".accordion-info").hide();
	$(".courses").hide();	

	// FUNCTION TO 'REFRESH' PAGE WHENEVER A LOCATION HASH ON THAT PAGE IS TRIGGERED, SINCE PAGE DOESN'T REFRESH ON CLICK
	var hashRefresh = function() {
		$(".publications-info").hide();
		$(".accordion-info").hide();
		$(".courses").hide();
		setTimeout(function(){
			$(location.hash).show();
			console.log(location.hash);
		},200); //allow location hash to load in url by delaying 200ms before loading content
	}
	$('.hashrefresh').click(hashRefresh);

	// LOAD APPROPRIATE SECTION BY PARSING URL HASH FOR 'COURSES' SECTION
	if (location.hash == '#languagemodules') {
		$(".courses").hide();
		$("#language-modules").fadeIn(200);
	};
	if (location.hash == '#eligibility') {
		$(".courses").hide();
		$("#eligibility").fadeIn(200);
	};
	if (location.hash == '#entry') {
		$(".courses").hide();
		$("#entry-requirements").fadeIn(200);
	};
	if (location.hash == '#registration') {
		$(".courses").hide();
		$("#registration").fadeIn(200);
	};
	if (location.hash == '#mapping') {
		$(".courses").hide();
		$("#mapping").fadeIn(200);
	};
	if (location.hash == '#faqs') {
		$(".courses").hide();
		$("#faqs").fadeIn(200);
	};
	if (location.hash == '#studentevents') {
		$(".courses").hide();
		$("#studentevents").fadeIn(200);
	};
	if (location.hash == '#studentcomments') {
		$(".courses").hide();
		$("#studentcomments").fadeIn(200);
	};
	if (location.hash == '#langawards') {
		$(".courses").hide();
		$("#lang-awards").fadeIn(200);
	};
	if (location.hash == '#immersion') {
		$(".courses").hide();
		$("#immersion").fadeIn(200);
	};
	if (location.hash == '#lpp') {
		$(".courses").hide();
		$("#lpp").fadeIn(200);
	};
	// LOAD APPROPRIATE SECTION ON BUTTON CLICK FOR 'COURSES' SECTION
	$(".btn-language-modules").click(function(){
		$(".courses").hide();
		$("#language-modules").fadeIn(200);
	});
	$(".btn-eligibility").click(function(){
		$(".courses").hide();
		$("#eligibility").fadeIn(200);
	});
	$(".btn-entry").click(function(){
		$(".courses").hide();
		$("#entry-requirements").fadeIn(200);
	});
	$(".btn-registration").click(function(){
		$(".courses").hide();
		$("#registration").fadeIn(200);
	});
	$(".btn-mapping").click(function(){
		$(".courses").hide();
		$("#mapping").fadeIn(200);
	});
	$(".btn-faqs").click(function(){
		$(".courses").hide();
		$("#faqs").fadeIn(200);
	});
	$(".btn-studentevents").click(function(){
		$(".courses").hide();
		$("#studentevents").fadeIn(200);
	});
	$(".btn-studentcomments").click(function(){
		$(".courses").hide();
		$("#studentcomments").fadeIn(200);
	});
	$(".btn-lang-awards").click(function(){
		$(".courses").hide();
		$("#lang-awards").fadeIn(200);
	});
	$(".btn-immersion").click(function(){
		$(".courses").hide();
		$("#immersion").fadeIn(200);
	});
	$(".btn-lpp").click(function(){
		$(".courses").hide();
		$("#lpp").fadeIn(200);
	});
	$(".btn-lia").click(function(){
		$(".courses").hide();
		$("#lia").fadeIn(200);
	});
	// OPEN/CLOSE ACCORDION ON CLICK FOR 'COURSES/ENTRY REQUIREMENTS' SECTION
	$("#accordion-malay").click(function(){
		$("#info-malay").slideToggle(500);
	});
	$("#accordion-chinese").click(function(){
		$("#info-chinese").slideToggle(500);
	});
	$("#accordion-french").click(function(){
		$("#info-french").slideToggle(500);
	});
	$("#accordion-japanese").click(function(){
		$("#info-japanese").slideToggle(500);
	});
	$("#accordion-korean").click(function(){
		$("#info-korean").slideToggle(500);
	});
	$("#accordion-hindi").click(function(){
		$("#info-hindi").slideToggle(500);
	});
	$("#accordion-arabic").click(function(){
		$("#info-arabic").slideToggle(500);
	});

	// LOAD APPROPRIATE SECTION BY PARSING URL HASH FOR 'TEACHING AND RESEARCH' SECTION
	if (location.hash == '#publications') {
		$(".courses").hide();
		$(location.hash).show();
	};
	if (location.hash == '#lia') {
		$(".courses").hide();
		$("#lia").show();
	};
	if (location.hash == '#clspapers') {
		$(".publications-info").hide();
		$("#clspapers").show();
	};
	if (location.hash == '#eflt') {
		$(".publications-info").hide();
		$("#eflt").show();
	};
	if (location.hash == '#staffbooks') {
		$(".publications-info").hide();
		$("#staffbooks").show();
	};
	if (location.hash == '#clsbooks') {
		$(".publications-info").hide();
		$("#clsbooks").show();
	};
	if (location.hash == '#brochures') {
		$(".publications-info").hide();
		$("#brochures").show();
	};
	// LOAD APPROPRIATE SECTION ON BUTTON CLICK FOR 'TEACHING AND RESEARCH' SECTION
	$(".publications-nav").click(function(){
		$(".publications-info").hide();
		$("#publications").fadeIn(200);
	});
	$(".clspapers-nav").click(function(){
		$(".publications-info").hide();
		$("#clspapers").fadeIn(200);
	});
	$(".intro-nav").click(function(){
		$(".publications-info").hide();
		$("#intro").fadeIn(200);
	});
	$(".eflt-nav").click(function(){
		$(".publications-info").hide();
		$("#eflt").fadeIn(200);
	});
	$(".staffbooks-nav").click(function(){
		$(".publications-info").hide();
		$("#staffbooks").fadeIn(200);
	});
	$(".clsbooks-nav").click(function(){
		$(".publications-info").hide();
		$("#clsbooks").fadeIn(200);
	});
	$(".brochures-nav").click(function(){
		$(".publications-info").hide();
		$("#brochures").fadeIn(200);
	});

	// LOAD APPROPRIATE SECTION BY PARSING URL HASH FOR 'ELEARNING' SECTION
	if (location.hash == '#elearning') {
		$("#overview").removeClass('active');
		$("#links").addClass('active');
		$("#overview-tab").removeClass('active');
		$("#elearning-tab").addClass('active');
	};

	$('#tabtest a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
}); 
