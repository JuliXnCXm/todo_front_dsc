import React, { useEffect } from 'react'
import useTasks from '../hooks/useTasks'
import SpinnerLoader from './SpinnerLoader';

const SidebarLists = () => {

  const {getCategories, categories, isLoadingCategories} = useTasks()
  useEffect(() => {
      getCategories();
    }, []);

  return (
    <>
      {
        isLoadingCategories ?
        <SpinnerLoader />
        :
      <div className='categoriesList--container'>
        <span>Lists</span>
        <ul>
          {categories.map((category, idx) => {
            return (
              <li key={idx}>
                <span>{category}</span>
              </li>
            );
          })}
        </ul>
      </div>
      }
    </>
  );
}

export default SidebarLists
