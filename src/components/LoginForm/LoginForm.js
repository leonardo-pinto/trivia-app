import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/loginActions';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      enablePlayButton: false,
      email: '',
      username: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.inputValidation = this.inputValidation.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.inputValidation());
  }

  inputValidation() {
    const { username, email } = this.state;
    if (username.length !== 0 && email.includes('@') && email.includes('.com')) {
      return this.setState({ enablePlayButton: true });
    }
    return this.setState({ enablePlayButton: false });
  }

  render() {
    const { enablePlayButton, email, username } = this.state;
    const { userLogin } = this.props;

    return (
      <form>
        <h2>User login</h2>
        <label htmlFor="username">
          <input
            name="username"
            type="text"
            id="username"
            data-testid="username-input"
            placeholder="Insert your username"
            onChange={(e) => this.handleInput(e)}
          />
        </label>
        <label htmlFor="email">
          <input
            name="email"
            type="text"
            id="email"
            data-testid="email-input"
            placeholder="Insert your email"
            onChange={(e) => this.handleInput(e)}
          />
        </label>
        <span>
          <button
            type="button"
            data-testid="btn-play"
            disabled={!enablePlayButton}
            onClick={() => userLogin({ username, email })}
          >
            Start game
          </button>
          <button
            type="button"
            data-testid="btn-settings"
          >
            Settings
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(login(payload)),
});

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  userLogin: PropTypes.func.isRequired,
};
