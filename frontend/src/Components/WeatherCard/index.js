import { Container, Info, Field, Icon, Image } from "./StyledComponents";

const WeatherCard = ({ horizontal }) => {
  return (
    <Container horizontal={horizontal}>
      <Info>
        <Field>Current main.temp (main.feels_like)</Field>
        <Field>Condition weather0.description</Field>
        <Field>Min main.temp_min</Field>
        <Field>Max main.temp_max</Field>
      </Info>

      <Icon>
        <Image src="http://openweathermap.org/img/wn/01n@2x.png" />
      </Icon>
    </Container>
  );
};

export default WeatherCard;
