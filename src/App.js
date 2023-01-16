import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            CallClinicalServices()
          }
        </p>
      </header>
    </div>
  );
}

function CallClinicalServices() {
  var response = fetch("https://clinical.development.carecloud.com/v1/clinical/1331/alertsbypatient/32512159?authentication=AQIC5wM2LY4Sfcwl3cW3dlGs79XwoG0AEM5rowD_P_gxJYg.*AAJTSQACMDE.*", {
    method: 'GET'
  });
  return response.body;
}

export default App;
