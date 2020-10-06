import React from 'react';
import logo from '../../assets/img/my_unsplash_logo.svg';
import { openAddModalAction } from '../../redux/actions/modal.action';
import { useDispatch } from 'react-redux';
import { Button } from '../../components';

import './Header.scss';
interface Props {

}

const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();
  return (
    <div className="Header">
      <div className="Header__rightHandSide">
        <img src={logo} alt="logo" />
        <div className="SearchBar">
          <i className="material-icons">search</i>
          <input type="text" className="SearchBar__searchInput" placeholder="Search by name" />
        </div>
      </div>
      <Button type="submit" text="Add a photo" onClick={() => dispatch(openAddModalAction())} />
    </div>
  )
}

export default Header;