const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
letterCarousel('.Website','.web');
letterCarousel('.Website','.web');

	
	function letterCarousel(parent_cls,child_cls) {
		var e = jQuery(parent_cls+' '+child_cls),
		t = jQuery(window).height();
		jQuery(window).on("scroll", function() {
			if (jQuery(parent_cls).length) {
				var t = jQuery(document).scrollTop() + jQuery(window).height(),
				n = jQuery(parent_cls).offset().top;
				
				if (n <= t) {
					var i = jQuery(document).scrollTop() - n + jQuery(window).height();
					var scroll = i - 150;
					var scroll_slow = scroll + ((scroll/70)/100);
					var img_scroll = scroll_slow * 30 /100;
					e.css({
						transform: "translateX(" + img_scroll + "px)"
					})
				}
			}
		});
	}