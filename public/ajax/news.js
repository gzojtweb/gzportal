var newsContainer = document.querySelector('.news');
		var ajax = new XMLHttpRequest();
		ajax.open('GET','http://localhost:3000/api/news');
		ajax.onload = function(data) {
			var data = JSON.parse(data.target.response);

			data.forEach(function(d) {
				var li = document.createElement('li');
				li.innerText = d.title + '-' + d.content;

				newsContainer.appendChild(li);
			});
		};

		ajax.send();

		var form = document.querySelector('form');

		form.onsubmit = function (e) {
			e.preventDefault();

			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'http://localhost:3000/api/news');
			xhr.onload = function (e) {
				var data = JSON.parse(e.target.response);
				var li = document.createElement('li');
				li.innerText = data.title + '-' + data.content;

				newsContainer.appendChild(li);

				form.title.value = '';
				form.content.value='';

				form.title.focus();
			}
			xhr.setRequestHeader('content-type','application/json');

			xhr.send(JSON.stringify({
				title : form.title.value,
				content : form.content.value
			}));

		};