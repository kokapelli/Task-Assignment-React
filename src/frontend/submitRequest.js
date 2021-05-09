
export function submitRequest(items) {

    return fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({items})
    })
      .then((response) => response.json())
      .then((messages) => console.log(messages));
   }