import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [selectedCampaignCode, setSelectedCampaignCode] = useState(0);
  const [status, setStatus] = useState(0);

  const campaignsURL =
    "https://apigw.mweb.co.za/prod/baas/proxy/marketing/campaigns/fibre?channels=120&visibility=public";

  const fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response.results));
  };

  useEffect(() => {
    fetchData(campaignsURL);
  }, []);

  const campaigns = fetch(campaignsURL)
    .then((response) => response.json())
    .then((data) => data.campaigns);

  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <div className="App">
      <h1>Explore mweb fibre options</h1>
      <form>
        <h4>Select Fibre Campaign</h4>
        <div className="fibreCampaign">
          <input
            label="FREE setup and FREE router"
            value="FTTH-FREESETUP-FREEROUTER"
            name="FTTH-FREESETUP-FREEROUTER"
            type="radio"
            checked={status === 0}
            onClick={(e) => radioHandler(0)}
          />
          FREE setup and FREE router
          <input
            label="FREE setup and FREE router"
            value="FTTH-FREESETUP-FREEROUTER-SWITCH-REGRADE-LINE"
            name="FTTH-FREESETUP-FREEROUTER-SWITCH-REGRADE-LINE"
            type="radio"
            checked={status === 1}
            onClick={() => radioHandler(1)}
          />
          FREE setup and FREE router
          <input
            label="Prepaid Fibre "
            value="FTTH-PREPAID"
            name="FTTH-PREPAID"
            type="radio"
            checked={status === 2}
            onClick={() => radioHandler(2)}
          />
          Prepaid Fibre
          <p>Select the fibre campaign for which products should be loaded</p>
        </div>
        <div className="fibre-providers">
          <h4>Fibre Providers</h4>
          {status === 0 && (
            <div>
              <input
                label="Evotel"
                value="Evotel"
                name="Evotel"
                type="checkbox"
              />
              Evotel
              <input
                label="OpenServe"
                value="OpenServe"
                name="OpenServe"
                type="checkbox"
              />
              OpenServe
              <input
                label="Web Connect"
                value="Web Connect"
                name="Web Connect"
                type="checkbox"
              />
              Web Connect
              <input
                label="Link Africa"
                value="Link Africa"
                name="Link Africa"
                type="checkbox"
              />
              Link Africa
              <input
                label="Century City Connect"
                value="Century City Connect"
                name="Century City Connect"
                type="checkbox"
              />
              Century City Connect
              <input label="MFN" value="MFN" name="MFN" type="checkbox" />
              MFN
              <input
                label="Frogfoot"
                value="Frogfoot"
                name="Frogfoot"
                type="checkbox"
              />
              Frogfoot
              <input
                label="ClearAccess"
                value="ClearAccess"
                name="ClearAccess"
                type="checkbox"
              />
              ClearAccess
              <input
                label="Lightstruck"
                value="Lightstruck"
                name="Lightstruck"
                type="checkbox"
              />
              Lightstruck
              <input
                label="Vumatel"
                value="Vumatel"
                name="Vumatel"
                type="checkbox"
              />
              Vumatel
              <input
                label="Octotel"
                value="Octotel"
                name="Octotel"
                type="checkbox"
              />
              Octotel
              <input
                label="TT Connect"
                value="TT Connect"
                name="TT Connect"
                type="checkbox"
              />
              TT Connect
              <input
                label="Link Layer"
                value="Link Layer"
                name="Link Layer"
                type="checkbox"
              />
              Link Layer
              <input
                label="ZoomFibre"
                value="ZoomFibre"
                name="ZoomFibre"
                type="checkbox"
              />
              ZoomFibre
              <input
                label="Vodacom"
                value="Vodacom"
                name="Vodacom"
                type="checkbox"
              />
              Vodacom
            </div>
          )}

          {status === 1 && (
            <div>
              <input
                label="Century City Connect"
                value="Century City Connect"
                name="Century City Connect"
                type="checkbox"
              />
              Century City Connect
            </div>
          )}

          {status === 2 && (
            <div>
              <input
                label="Mitchells Fibre"
                value="Mitchells Fibre"
                name="Mitchells Fibre"
                type="checkbox"
              />
              Mitchells Fibre
              <input
                label="Vuma Reach"
                value="Vuma Reach"
                name="Vuma Reach"
                type="checkbox"
              />
              Vuma Reach
            </div>
          )}
          <p>
            Select the fibre providers for which products should be displayed
          </p>
        </div>
        <div>
          <h4>Price Ranges</h4>
          <input
            label="R0-R699"
            value="R0-R699"
            name="R0-R699"
            type="checkbox"
          />
          R0 - R699
          <input
            label="R700-R999"
            value="R700-R999"
            name="R700-R999"
            type="checkbox"
          />
          R700 - R999
          <input label="R1000+" value="R1000+" name="R1000+" type="checkbox" />
          R1000+
          <p>
            Select the price ranges to filter the products by. No selection
            includes all products
          </p>
        </div>
      </form>
    </div>
  );
}
