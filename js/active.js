$(document).ready(function($){
	$(".video-play-btn").modalVideo();
// Disable a tag  or use button tag
	$(".video-play-btn").on('click', function(){
		return false;
	});
});