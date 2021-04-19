import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Title } from './UsersList.styles';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
