import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #8db7e0;
`;

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 40px 0px 15px 0px;
`;

export const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0;
  text-align: center;
  font-weight: normal;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 30px;
`;

export const InputStyled = styled.input`
  display: block;
  margin: 5px 0;
  border: 1px solid #195b6e;
  box-shadow: 10px 5px 5px #195b6e;
`;

export const Btn = styled.button`
  background-color: white;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #195b6e;
  box-shadow: 10px 5px 5px #195b6e;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    background-color: #7fb6c9;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 22px;
  transition: color 250ms;
  &:hover {
    color: #7fb6c9;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #195b6e;
  max-width: 350px;
  padding: 5px 15px;
  box-shadow: 10px 5px 5px #195b6e;
  margin: 5px 0;
  border-radius: 5px;
`;

export const Section = styled.div`
  width: 700px;
  margin: 80px auto;
  position: relative;
  text-transform: uppercase;
  font-size: 100px;
  font-weight: bold;
  line-height: 142px;
`;

export const First = styled.h1`
  color: #8db7e0;
  text-shadow: 1px 1px 2px #376ea4;
`;

export const Second = styled.h1`
  margin-left: 76px;
  color: #376ea4;
  text-shadow: 1px 1px 2px #8db7e0;
`;
export const NavLinkStyle = styled(NavLink)`
  display: flex;
  height: 100%;
  font-size: 24px;
  font-weight: 500;
  color: #376ea4;
  margin: 10px;

  &.active {
    color: #8db7e0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const OutBtn = styled.button`
  margin: 16px;
  font-size: 18px;
  font-weight: 400;
  color: #376ea4;
  margin: 10px;

  &:hover {
    color: #8db7e0;
  }
`;

export const Username = styled.p`
  margin-left: 5px;
  font-weight: 500;
`;
