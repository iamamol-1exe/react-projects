const WelcomeMessage = ({onGetPostClick}) => {
  return (
    <center>
      <h1 className="Welcome-message">There is no Post </h1>
      <button className="btn btn-primary button-wel" onClick={onGetPostClick}>Get Post From Server</button>
    </center>
  );
};
export default WelcomeMessage;
