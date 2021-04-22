import React from "react";
import { Popup, Circle } from "react-leaflet";
import numeral from "numeral";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    // rgb:"rgb(204,16,52)",
    // half_op:"rgba(204,16,52,0.5)",
    multiplier: 400,
  },
  recovered: {
    hex: "#7dd71d",
    // rgb:"rgb(125,215,29)",
    // half_op:"rgba(125,215,29,0.5)",
    multiplier: 600,
  },
  deaths: {
    hex: "#fb4443",
    // rgb:"rgb(251,68,67)",
    // half_op:"rgba(251,68,67,0.5)",
    multiplier: 1000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "No Cases";

export const showDataOnMap = (data, casesType) =>
  data.map((country) => (
    <Circle
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
