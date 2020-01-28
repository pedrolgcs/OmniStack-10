import React, { useState, useEffect } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

import DevForm from '../../components/DevForm';
import DevItem from '../../components/DevItem';
import api from '../../services/api';
import { Container, Aside, Error, Main, List, Loading } from './styles';

export default function Home() {
  const [devs, setDevs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDevs() {
      try {
        const response = await api.get('/devs');
        setDevs(response.data);
      } catch (err) {
        console.tron.log(err);
      }
    }
    loadDevs();
  }, [error]);

  async function handleSubmit(data) {
    setLoading(true);
    setError('');
    try {
      const response = await api.post('/devs', data);
      if (
        !devs.find(dev => dev.github_username === response.data.github_username)
      ) {
        setDevs([...devs, response.data]);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <Container>
      {/* Form */}
      <Aside>
        <span>
          <Link to="/">
            <FaGithubAlt size="3em" color="#E4C1F9" />
          </Link>
        </span>
        {/* error message */}
        {error && <Error>{error}</Error>}
        <DevForm onSubmit={handleSubmit} />
        {/* loading effect */}
        {loading && (
          <Loading>
            <ReactLoading type="bubbles" color="#7d40e7" />
          </Loading>
        )}
      </Aside>
      <Main>
        <List>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </List>
      </Main>
    </Container>
  );
}
