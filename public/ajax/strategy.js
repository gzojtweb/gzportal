var stratContainer = document.querySelector('.strategy');
var ajax = new XMLHttpRequest();
ajax.open('GET','http://localhost:3000/api/strategy');
ajax.onload = function(data) {
    var data = JSON.parse(data.target.response);

    data.forEach(function(d) {

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        td1.innerText = d.title;
        tr.appendChild(td1);

        td2.innerText = d.content;
        tr.appendChild(td2);

        td3.innerHTML = "<a href=\"#\">Edit</a>";
        tr.appendChild(td3);

        td4.innerHTML = "<a href=\"#\">Delete</a>";
        tr.appendChild(td4);        

        stratContainer.appendChild(tr);

        /*var li = document.createElement('li');
        li.innerText = d.title + ' - ' + d.content;

        stratContainer.appendChild(li);*/
    });
};

ajax.send();

var form = document.querySelector('form');

form.onsubmit = function (e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/strategy');
    xhr.onload = function (e) {
        var data = JSON.parse(e.target.response);
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        td1.innerText = data.title;
        tr.appendChild(td1);

        td2.innerText = data.content;
        tr.appendChild(td2);

        td3.innerHTML = "<a href=\"#\">Edit</a>";
        tr.appendChild(td3);

        td4.innerHTML = "<a href=\"#\">Delete</a>";
        tr.appendChild(td4);        

        stratContainer.appendChild(tr);

        //var li = document.createElement('li');
        //li.innerText = data.title + ' - ' + data.content;

        //stratContainer.appendChild(li);

        form.title.value = '';
        form.content.value = '';

        form.title.focus();
    }
    xhr.setRequestHeader('content-type','application/json');

    xhr.send(JSON.stringify({
        title : form.title.value,
        content : form.content.value
    }));
};