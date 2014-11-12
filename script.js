$(function() {
	$('header, main').fadeIn(2000)

	renderLatestMix()
	renderLatestTrack()
})

function renderLatestMix() {

	// http%3A%2F%2Fwww.mixcloud.com%2Fangya%2Fangya-mixes-014%2F

	var iframeUrl = 'http://www.mixcloud.com/widget/iframe/?feed=http%3A%2F%2Fwww.mixcloud.com{{angyaMix}}&amp;embed_uuid=6f201763-4e8b-4bc3-98c0-c98cc2beb463&amp;replace=0&amp;hide_cover=1&amp;stylecolor=ffffff&amp;embed_type=widget_standard&amp;hide_tracklist=1'

	$.getJSON('http://api.mixcloud.com/angya/cloudcasts/', function(res) {
		var latest = res.data[0].key
		$('iframe#mixcloud').attr('src', iframeUrl.replace('{{angyaMix}}', latest))
	})
}

var scID = '25db0d516ef45e96a0362592bf26b0e0'

function renderLatestTrack() {

	var iframeUrl = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{{angyaTrack}}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false'

	$.getJSON('http://api.soundcloud.com/users/angya/tracks.json?client_id='+scID, function(tracks) {
		var latest = tracks[0].id
		$('iframe#soundcloud').attr('src', iframeUrl.replace('{{angyaTrack}}', latest))
	})
}