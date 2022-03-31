import { SectionTitle } from "../../Components/StyledComponents/Common";

import WeatherCard from "../../Components/WeatherCard";

import Carousel from "react-elastic-carousel";

let staticData = [1, 2, 3, 4, 5];

const WeeklyForecast = () => {
  return (
    <div>
      <SectionTitle>Weekly Forecast for Shimla</SectionTitle>

      <Carousel itemsToShow={1}>
        {staticData.map((item) => (
          <WeatherCard key={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default WeeklyForecast;
