import { useState } from 'react';
import BaseUrl from './BaseUrl';

function LoginForm({ onSwitch, onForgot }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BaseUrl}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }), // Assuming "username" is email in your API
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful!');
        setError('');
        // Optionally, store token in local storage or context
        localStorage.setItem('token', data.token);
      } else {
        setError(data.error || 'Invalid login credentials');
        setMessage('');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-sky-600 mb-4">Login</h2>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
      >
        Log in
      </button>
      {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      <div className="flex items-center justify-between">
        <button type="button" onClick={onForgot} className="text-sm text-sky-600 hover:text-sky-500">
          Forgot password?
        </button>
        <button type="button" onClick={onSwitch} className="text-sm text-sky-600 hover:text-sky-500">
          Create an account
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
