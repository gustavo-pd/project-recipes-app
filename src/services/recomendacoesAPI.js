async function recomendacoesAPI(url, type) {
  const responseAPI = await fetch(url);
  const results = await responseAPI.json();
  return results[type];
}

export default recomendacoesAPI;
