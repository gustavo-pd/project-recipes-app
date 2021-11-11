import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import recomendacoesAPI from '../services/recomendacoesAPI';

function useFetchRecomendacoes(url, type) {
  const { setRecomendacoes } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const result = await recomendacoesAPI(url, type);
      setRecomendacoes(result);
    })();
  }, []);
}

export default useFetchRecomendacoes;
