import { styled } from 'styled-components';

const StyleContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;
const Container = (props) => {
  return <StyleContainer>{props.children}</StyleContainer>;
};

export default Container;
