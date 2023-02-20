import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql';
import DepartmentGroup from './DepartmentGroup';
import { SearchBar } from 'vtex.store-components';

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE);
  const [slug, setSlug] = useState('');

  const validateSearch = (e: any) => {
    e.preventDefault();
    if (e.target.value === '') {
      setSlug('');
    }
  }

  return (
    loading ? <div>Loading...</div> :
      <div className='flex flex-column w-100'>
        <DepartmentGroup
          departments={data?.categories}
          handleSetSlug={setSlug}
        />

        <div>
          <SearchBar
            onSubmit={validateSearch}
            customSearchPageUrl={slug}
            placeholder="Busqueda por departamento"
            displayMode="search-and-clear-buttons"
          />
        </div>

      </div>
  )
};

export default DepartmentSearch;
