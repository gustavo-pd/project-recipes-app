export default async function randomItemFetch(URL_SEARCH) {
  const randomItem = await fetch(`https://www.${URL_SEARCH}.com/api/json/v1/1/random.php`);
  return randomItem.json();
}
