import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { avarage, name, attendance = '0%' } }) => (
  <li>
    <div>{avarage}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    avarage: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
