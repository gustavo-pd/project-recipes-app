import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import recomendacoesAPI from '../services/recomendacoesAPI';

function useFetchRecomendacoes(url, type) {
  const { setRecomendacoes } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const resultAPI = await recomendacoesAPI(url, type);
      const randomResults = resultAPI
        .setRecomendacoes(randomResults);
    })();
  }, []);
}

export default useFetchRecomendacoes;
