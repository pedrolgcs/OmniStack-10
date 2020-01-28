import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  main {
    margin-left: 20px;
  }
`;

/* --------------- Form --------------- */
export const Aside = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px 20px;

  span {
    display: block;
    text-align: center;
  }
`;

export const Error = styled.p`
  font-size: 13px;
  text-align: center;
  display: block;
  margin-top: 20px;
  padding: 10px 0px;
  color: #fff;
  border-radius: 5px;
  background: ${lighten(0.3, '#7d3017')};
`;

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

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

/* --------------- Dev List --------------- */
export const Main = styled.main`
  flex: 1;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
