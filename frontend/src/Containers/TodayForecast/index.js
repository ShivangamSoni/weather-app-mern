import WeatherCard from "../../Components/WeatherCard";

import { SectionTitle } from "../../Components/StyledComponents/Common";

const TodayForecast = () => {
  return (
    <div>
      <SectionTitle>Today's Forecast for Shimla</SectionTitle>

      <WeatherCard horizontal={true} />
    </div>
  );
};

export default TodayForecast;
