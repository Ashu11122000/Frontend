import { useState } from 'react';
import Input from './Input.jsx';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className="max-w-xl mx-auto mt-12 bg-zinc-900 p-8 rounded-xl shadow-2xl md:mx-4 md:p-6">
      <h2 className="text-white text-center text-3xl font-semibold mb-6">
        Login
      </h2>

      <div className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={enteredEmail}
          invalid={emailNotValid}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={enteredPassword}
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </div>

      <div className="flex justify-end gap-4 mt-6 max-sm:flex-col">
        <button
          type="button"
          className="bg-transparent border-none text-white text-sm cursor-pointer transition-colors duration-300 hover:text-purple-300 active:scale-95"
        >
          Create a new account
        </button>

        <button
          onClick={handleLogin}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-700 hover:-translate-y-1 active:translate-y-0"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}