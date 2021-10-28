export async function getTileData() {
  const response = await fetch("http://localhost:5000/");
  const responseObject = await response.json();
  console.log(responseObject);
  return responseObject.message;
}
