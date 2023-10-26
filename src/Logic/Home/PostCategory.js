export default async function PostCategory(categoryName) {

  var dataRequest = JSON.stringify({name : categoryName});

  const response = fetch('/api/Category', {
    method: 'POST', 
    mode: 'cors', 
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: dataRequest
  });
  return(response.data);
}
