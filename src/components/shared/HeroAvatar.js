import styled from 'styled-components';

export const HeroAvatar = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 0px 3px transparent, 0px 0px 0px 5px black;
  height: 205px;
  min-width: 205px;
  transition: box-shadow .2s linear;
  width: 205px;

  &:hover {
    box-shadow: ${props => (props.disableHover ? '' : '0px 0px 0px 3px #F41A12, 0px 0px 0px 5px black')};
  }

  @media(min-width: 1330px) {
    height: 305px;
    width: 305px;
    min-width: 305px;
  }
`;
