import React from "react";
import { useEffect } from "react";

import { fetchUsers } from "../../redux/users/actions/UsersActions";

import { useSelector, useDispatch } from "react-redux";

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="container text-center mt-5">
      {users.loading ? (
        <p>Loading</p>
      ) : !users.error ? (
        <div
          style={{ display: "flex", margin: "auto", justifyContent: "center" }}
        >
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.users.map((user, index) => (
                <tr key={index}>
                  <td> {user.name} </td>
                  <td> {user.email} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <h1>Something error</h1>
        </>
      )}
    </div>
  );
}

export default UsersList;
