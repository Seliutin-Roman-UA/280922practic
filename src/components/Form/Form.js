import React, { Component } from 'react';

const initialValues = {
  name: '',
  pasword: '',
  email: '',
  isAdult: false,
};

export class Form extends Component {
  state = { ...initialValues };

  onSubmit = e => {
    e.preventDefault();
      this.props.foo(this.state);
    console.log('state >>>>', this.state);
  };
  onChangeText = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onChangeChBox = e => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  };

  render() {
    const { onSubmit, onChangeText, onChangeChBox, state } = this;
      const { isAdult } = state;
    return (
      <form onSubmit={onSubmit}>
        {Object.entries(state).map(([key, value]) => {
          if (typeof value === 'boolean') {
            return (
              <label key={key}>
                Вам есть 18 лет
                <input
                  type="checkbox"
                  checked={value}
                  onChange={onChangeChBox}
                  name={key}
                />
              </label>
            );
          } else {
            return (
              <label key={key}>
                {key}
                <input
                  type="text"
                  value={value}
                  onChange={onChangeText}
                  name={key}
                />
              </label>
            );
          }
        })}
        <button type="submit" disabled={!isAdult}>
          Submit
        </button>
      </form>
    );
  }
}
