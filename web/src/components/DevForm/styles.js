import { darken } from 'polished';
import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;

  label {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }

  button {
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: #7d40e7;
    border-radius: 5px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;

    :hover {
      background: ${darken(0.1, '#7d40e7')};
      transition: background 1s;
    }
  }
`;

export const InputBlock = styled.div`
  :first-child {
    margin-top: 0px;
  }
  margin-top: 20px;
`;

export const InputGroup = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;
