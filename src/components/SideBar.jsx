import React from 'react'
import '../styles/SideBar.css';
import SidebarPrimary from './SidebarPrimary';
import SidebarLists from './SidebarLists';


const SideBar = () => {
  return (
    <section className='sidebar-container'>
      <SidebarPrimary />
      <SidebarLists />
    </section>
  );
};

export default SideBar;
