import { useState } from 'react';
import BaseUrl from './BaseUrl';

function ForgotPasswordForm({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BaseUrl}/api/forget-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setMessage(data.message);
        setError('');
      } else {
        setError(data.error || 'Failed to send reset link.');
        setMessage('');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-sky-600 mb-4">Forgot Password</h2>
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
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
      >
        Send Email
      </button>
      {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      <p className="text-center text-sm text-gray-600">
        Remember your password?{' '}
        <button type="button" onClick={onSwitch} className="text-sky-600 hover:text-sky-500">
          Log in
        </button>
      </p>
    </form>
  );
}

export default ForgotPasswordForm;
