import React, { useState } from 'react';
import "../assets/style.css";
import ReCAPTCHA from 'react-google-recaptcha';
//6LcldJYqAAAAACGJU8BFNrp1fVEYT62JSuNXAm28

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [capVal,setCapval] = useState (null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation basique des identifiants
    if (email === 'user@example.com' && password === 'password123') {
      alert('Connexion réussie');
      setError('');
    } else {
      setError('Identifiants incorrects');
    }
  };

  return (
    <div>
      <h2>Se connecter</h2>
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
          />
        </div>
        <ReCAPTCHA sitekey='6LfQC58qAAAAABz02xMNVgluf47zbkINIe1UwAb7'
        onChange={(val)=>setCapval(val)}
        />

        <button disabled={!capVal} type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
