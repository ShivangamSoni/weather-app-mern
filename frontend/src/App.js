// Components
import Notification from "./Components/Notification";
import Header from "./Containers/Header";
import Home from "./Pages/Home";

// Hooks
import { useSelector } from "react-redux";

const App = () => {
  const { current, weekly } = useSelector((state) => state.weather);
  return (
    <>
      <Notification />
      <Header />

      {current && weekly && <Home />}
    </>
  );
};

export default App;
