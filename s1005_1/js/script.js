//.stop()는 이전 동작을 멍추고 다음 액션-.animate() .slideDown() .slideUp() .show() .hide()등-을 실행하라는 의미로 생략가능 
$(".menu > ul > li").hover(  
	function() {
		$(this).children("ul").stop().slideDown("slow");
	},
	function() {
		$(this).children("ul").stop().slideUp("fast");
	}
);