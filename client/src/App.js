import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./Components/Messenger";

function App() {
  const ClientId = "165610862462-lrtmjddldaris3v3on7j4u3hispgmijj.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={ClientId}>
        <Messenger />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
