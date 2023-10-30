import { useDeferredValue, useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

export default function useQueryParams() {
  const navigate = useNavigate();

  const [querySearch, setQuerySearch] = useState('');
  const defferedQuerySearch = useDeferredValue(querySearch, { timeoutMs: 200 });

  const [queryParams] = useSearchParams();

  const handleQuerySearch = (e) => {
    const params = {
      keyword: e.target.value,
    };

    navigate({
      search: `?${createSearchParams(params)}`,
    });

    setQuerySearch(e.target.value);
  };

  useEffect(() => {
    setQuerySearch(queryParams.get('keyword') || '');
  }, []);

  return {
    defferedQuerySearch,
    handleQuerySearch,
    querySearch,
  };
}
