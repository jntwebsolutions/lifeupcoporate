
import { ImPageBreak } from "react-icons/im";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import 'jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Routes_App from "./Routes_App/Routes_App.js";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Email from "./Email.js";
import PrivacyPolicy from "./Comp/PrivacyPolicy/PrivacyPolicy.js";
function App() {
  return (
    <>

      <div className="front-page">
        {/* <PrivacyPolicy/> */}
        <Routes_App />
        {/* <Email /> */}
      </div>
    </>
  );
}

export default App;






































