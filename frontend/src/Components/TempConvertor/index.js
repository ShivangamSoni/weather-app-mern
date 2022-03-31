import { Container, Button } from "./StyledComponents";

import { SectionTitle } from "../StyledComponents/Common";

const TempConvertor = () => {
  return (
    <div>
      <SectionTitle>Select Temperature Unit</SectionTitle>
      <Container>
        <Button type="button">Celsius</Button>
        <Button type="button">Fahrenheit</Button>
      </Container>
    </div>
  );
};

export default TempConvertor;
