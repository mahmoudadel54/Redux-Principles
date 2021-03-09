import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/users/actions/UsersActions";

function UserListContainer(props) {
  const { users, loading, error } = props;
  useEffect(() => {
    props.fetchUsersData();
  }, []);
  return (
    <div className="container text-center mt-5">
      {loading ? (
        <p>Loading</p>
      ) : !error ? (
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
              {users.map((user, index) => (
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

//mapStateToProps
const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersData: () => dispatch(fetchUsers),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
