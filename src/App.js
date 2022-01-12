import tw, { styled } from "twin.macro";

export const Container = styled.div`
  ${tw`
        mx-10 my-10 min-h-screen  grid gap-10 sm:grid-cols-1 md:grid-cols-2 bg-white
        relative md:fixed  inset-0 mb-10 p-32
    `}
`;

function App() {
  return (
    <Container>
      <h1>Hello World Starward fun</h1>
    </Container>
  );
}

export default App;
