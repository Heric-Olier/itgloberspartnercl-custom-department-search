import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql';
import DepartmentGroup from './DepartmentGroup';
import { SearchBar } from 'vtex.store-components';

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE);
  const [slug, setSlug] = useState('');
  console.log("Mi slug es", slug);
  return (
    loading ? <div>Loading...</div> :
      <div className='flex flex-row justify-between items-center'>
        <DepartmentGroup
          departments={data?.categories[0]?.children}
          handleSetSlug={setSlug}
        />
        <div className='pr5'>
          <SearchBar
            customSearcPageUrl={slug}
            placeholder="Busqueda por departamento"
            displayMode="search-and-clear-buttons"
          />
        </div>
      </div>
  )
};

export default DepartmentSearch;
