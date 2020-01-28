import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { Form, InputBlock, InputGroup } from './styles';

export default function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputBlock>
        <label htmlFor="github_username">
          github username
          <input
            type="text"
            name="github_username"
            id="github_username"
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            required
          />
        </label>
      </InputBlock>
      <InputBlock>
        <label htmlFor="techs">
          techs
          <input
            type="text"
            name="techs"
            id="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required
          />
        </label>
      </InputBlock>
      <InputGroup>
        <label htmlFor="latitude">
          latitude
          <input
            type="number"
            name="latitude"
            id="latitude"
            onChange={e => setLatitude(e.target.value)}
            value={latitude}
          />
        </label>
        <label htmlFor="longitude">
          longitude
          <input
            type="number"
            name="longitude"
            id="longitude"
            onChange={e => setLongitude(e.target.value)}
            value={longitude}
          />
        </label>
      </InputGroup>
      <button type="submit">Salvar</button>
    </Form>
  );
}

DevForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
