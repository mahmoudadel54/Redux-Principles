import React from "react";
import UserListContainer from "../components/users/userListContainer";
import UsersList from "../components/users/usersList";

function UsersListPage() {
  return (
    <div>
      <UsersList />
      <UserListContainer />
    </div>
  );
}

export default UsersListPage;
