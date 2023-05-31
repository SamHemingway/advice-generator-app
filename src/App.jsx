import GlobalStyle from "./globalStyles";
import AdviceCard from "./components/AdviceCard";
import styled from "styled-components/macro";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AdviceCard />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  padding-inline: 16px;
`;
