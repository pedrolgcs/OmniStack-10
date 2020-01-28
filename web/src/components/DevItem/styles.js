import { lighten } from 'polished';
import styled from 'styled-components';

export const Item = styled.li`
  background: #fff;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 54px;
      height: 54;
      border-radius: 50%;
    }
  }
  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }

  a {
    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;

    :hover {
      color: ${lighten(0.1, '#8e4dff')};
    }
  }
`;

export const UserInfo = styled.div`
  margin-left: 10px;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }
`;
