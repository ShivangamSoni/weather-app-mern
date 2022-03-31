import { Container, Message, Close } from "./StyledComponents";

import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../../Redux/Site/ActionCreator";

const Notification = () => {
  const { message, show } = useSelector((state) => state.site.notification);
  const dispatch = useDispatch();

  const closeNotification = () => {
    dispatch(hideNotification());
  };

  return (
    <Container className={show && "show"}>
      <Message>{message}</Message>
      <Close onClick={closeNotification}>&times;</Close>
    </Container>
  );
};

export default Notification;
