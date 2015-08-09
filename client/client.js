/**
 * Templates
 */
Template.messages.helpers({
	messages: function() {
		return Messages.find({}, {sort: {time: -1}});
	}
});

Template.input.events = {
	'keydown input#message': function(event) {
		if (event.which == 13) {
			var name = 'Anonymous';
			var message = document.getElementById('message');

			if (message.value != '') {
				Messages.insert({
					name: name,
					message: message.value,
					time: Date.now(),
				});

				document.getElementById('message').value = '';
				message.value = '';
			}
		}
	}
}
