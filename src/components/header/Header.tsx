import React from 'react';

import Tabs from './tabs/Tabs';

import './Header.scss';

interface HeaderProps {
  currentGameScore: number,
  tabsNames: Array<string>,
}

const Header: React.FC<HeaderProps> = ({ currentGameScore, tabsNames }) => (
  <header className="app-header">
    <h1 className="app-header__title">Songbird</h1>
    <p className="app-header__score">
      Ваш счет:
      {' '}
      {currentGameScore}
    </p>
    <Tabs tabsNames={tabsNames} />
  </header>
);

export default Header;
