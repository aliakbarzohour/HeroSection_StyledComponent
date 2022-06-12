import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
// You can also use <link> for styles
// ..
AOS.init();
// -------------------------------------------
// Styled Component Styling . . .
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  padding: 40px;
  width: 570px;
`;
const RightSection = styled.div`
  width: max-content;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  letter-spacing: 2px;
  margin: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 0 20px 20px 10px;
  color: whitesmoke;
`;

const Btn = styled.button`
  padding: 15px 30px;
  margin: 20px;
background-color: rgb(72 149 250);
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  transition: 0.6s;
  :hover {
    background-color: #224dc2;
    transition: 0.6s;
  }
`;
const Img = styled.img`
  width: 500px;
  margin: 20px;
`;

// -------------------------------------------
function App() {
  return (
    // My App
    <div className="App">
      {/* Hero Section Container */}
      <Container>
        {/* Left Section ( Text ) */}
        <LeftSection data-aos="fade-left" data-aos-duration="1000">
          <Title>Hello Im Aliakbar Zohour</Title>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            inventore similique sit aliquid odio hic perferendis incidunt
            ducimus necessitatibus neque ullam cum, laudantium odit, vel rem
            impedit veniam doloremque? Alias.
          </Description>
          <Btn>About me</Btn>
        </LeftSection>
        {/* Right Section ( Banner ) */}
        <RightSection data-aos="fade-right" data-aos-duration="1000">
          <Img
            src="https://www.htmlden.com/wp-content/themes/ks/img/web-developer-master-tn.svg"
            alt="Banner"
          />
        </RightSection>
      </Container>
    </div>
  );
}

export default App;
