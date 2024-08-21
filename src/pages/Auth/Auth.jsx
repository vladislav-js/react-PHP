import React, { useState } from 'react';
import './Auth.css'; // Подключите ваш CSS-файл

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false); // Состояние для переключения между входом и регистрацией
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    username: '', // Для входа
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      let response;
      if (isLogin) {
        // Вход
        response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Login failed');
        console.log('Login successful', data);
        // Перенаправление или другие действия после успешного входа
      } else {
        // Регистрация
        response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Registration failed');
        console.log('Registration successful', data);
        // Перенаправление или другие действия после успешной регистрации
      }
    } catch (error) {
      console.error('Error', error.message);
      setError('Ошибка при обработке запроса. Попробуйте еще раз.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </>
          ) : (
            <>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  maxLength="50"
                  required
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  maxLength="50"
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p className="auth-switch">
          {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
        {error && <p className="auth-error">{error}</p>}
      </div>
    </div>
  );
};

export default Auth;
