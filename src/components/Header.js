import React from 'react';

const Header = (props) => (
  <div className="jumbotron">
      <h1 className="display-2">{props.title}</h1>
      {props.subtitle && <h2 className="lead">{props.subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: 'Todo App'
};

export default Header;
