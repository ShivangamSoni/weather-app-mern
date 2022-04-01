// Styled Components
import { SectionTitle } from "../../Components/StyledComponents/Common";

// Components
import WeatherCard from "../../Components/WeatherCard";
import Carousel from "react-elastic-carousel";

// Hooks
import { useSelector } from "react-redux";

const WeeklyForecast = () => {
  const {
    current,
    weekly: { daily },
  } = useSelector((state) => state.weather);

  return (
    <div>
      <SectionTitle>
        Weekly Forecast for {current.name}, {current.sys.country}
      </SectionTitle>

      <Carousel itemsToShow={1}>
        {daily.slice(1).map((item) => (
          <WeatherCard key={item._id} data={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default WeeklyForecast;
