
jQuery(document).ready(function ($) {
	var client_id = '6b40748fefa1657ca3aef10eb5bc4c94';
	$.ajax({
		url		: "https://api.soundcloud.com/users/techweeklypodcastuk/tracks?client_id="+client_id,
		dataType: "JSON"
	})
	.done(function(episodes) {
		$(episodes).each(function(i) {
			console.log(this);
			var episode = $('#episode_template').clone().attr('id', 'episode_'+i).insertBefore('#episode_template');
			episode.find(".episode_title").text(this.title);
			episode.find(".episode_artwork").attr('src', this.artwork_url);
			// reformat the soundcloud created_at time (yyyy/mm/dd hh:mm:ss +zzzz) to a more standard format (yyyy-mm-ddThh:mm:ss+zzzz), which the Jquery date formatter  can then deal with
			episode.find(".episode_date").text($.format.date(this.created_at.replace(/\//g,'-').replace(/ /,'T').replace(/ /,''), "d MMMM yyyy"));
			episode.find(".episode_description").text(this.description);
		});

	});

});
