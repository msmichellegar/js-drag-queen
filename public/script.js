if (document.readyState !== 'loading') {
  ready();
} else {
  document.addEventListener('DOMContentLoaded', ready);
}

function ready () {
  const button = document.querySelector('button');

  button.addEventListener('click', function () {
    const nameElement = document.querySelector('#drag-name');
    nameElement.innerText = 'Thinking...';

    fetch('/generate', {
      method: 'GET'
    })
    .then(function (res) {
      res.text()
        .then(text => {
          renderName(text);
        });
    });
  });
}

function renderName (name) {
  const nameElement = document.querySelector('#drag-name');

  nameElement.innerText = name;
}
