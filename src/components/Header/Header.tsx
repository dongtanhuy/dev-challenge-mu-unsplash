import React, { useState } from 'react';
import logo from '../../assets/img/my_unsplash_logo.svg';
import { openAddModalAction } from '../../redux/actions/modal.action';
import { setSearchTextAction } from '../../redux/actions/photo.action';
import { useDispatch } from 'react-redux';
import { Button } from '../../components';

import './Header.scss';
interface Props {

}

const Header: React.FC<Props> = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const onChangeSearchText = (e) => {
    const text = e.target.value.trim();
    setSearchText(text)
    dispatch(setSearchTextAction(text));
  }
  return (
    <div className="Header">
      <div className="Header__rightHandSide">
        <img src={logo} alt="logo" />
        <div className="SearchBar">
          <i className="material-icons">search</i>
          <input type="text" value={searchText} className="SearchBar__searchInput" onChange={onChangeSearchText} placeholder="Search by name" />
        </div>
      </div>
      <Button type="submit" text="Add a photo" onClick={() => dispatch(openAddModalAction())} />
    </div>
  )
}

export default Header;