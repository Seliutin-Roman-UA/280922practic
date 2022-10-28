import { Component } from "react";
import { Form } from "./Form/Form";
import { UserCard } from "./UserCard/UserCard";

export class App extends Component {
  state = { user: null };

  submit = user => {
    this.setState({ user });
  };
  clearUser = () => this.setState({ user: null });

  render() {
    const {
      state: { user },
      submit,
      clearUser,
    } = this;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <UserCard user={user} clearUser={clearUser} /> <Form foo={submit} /> */}
        {user ? (
          <UserCard user={user} clearUser={clearUser} />
        ) : (
          <Form foo={submit} />
        )}
      </div>
    );
  }
}