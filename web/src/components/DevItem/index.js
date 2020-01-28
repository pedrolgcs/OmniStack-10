import PropTypes from 'prop-types';
import React from 'react';

import { Item, UserInfo } from './styles';

export default function DevItem({ dev }) {
  return (
    <Item key={dev._id}>
      <header>
        <img src={dev.avatar_url} alt="Pedro Henrique" />
        <UserInfo>
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </UserInfo>
      </header>
      <p>{dev.bio || '...'}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perfil</a>
    </Item>
  );
}

DevItem.propTypes = {
  dev: PropTypes.shape({
    _id: PropTypes.string,
    github_username: PropTypes.string,
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    techs: PropTypes.array,
    bio: PropTypes.string,
  }).isRequired,
};
