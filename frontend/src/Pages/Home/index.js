import { Container, Left, Right } from "./StyledComponents";

import TodayForecast from "../../Containers/TodayForecast";
import WeeklyForecast from "../../Containers/WeeklyForecast";
import WeatherMap from "../../Containers/WeatherMap";
import TempConvertor from "../../Components/TempConvertor";

const Home = () => {
  return (
    <Container>
      <Left>
        <TodayForecast />
        <WeeklyForecast />
      </Left>

      <Right>
        <WeatherMap />
        <TempConvertor />
      </Right>
    </Container>
  );
};

export default Home;
