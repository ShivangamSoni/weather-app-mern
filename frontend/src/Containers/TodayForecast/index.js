// Styled Components
import { SectionTitle } from "../../Components/StyledComponents/Common";

// Components
import WeatherCard from "../../Components/WeatherCard";

// Hooks
import { useSelector } from "react-redux";

const TodayForecast = () => {
  const current = useSelector((state) => state.weather.current);

  return (
    <div>
      <SectionTitle>
        Today's Forecast for {current.name}, {current.sys.country}
      </SectionTitle>

      <WeatherCard horizontal={true} data={current} />
    </div>
  );
};

export default TodayForecast;
