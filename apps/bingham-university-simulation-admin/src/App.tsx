import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DampingList } from "./damping/DampingList";
import { DampingCreate } from "./damping/DampingCreate";
import { DampingEdit } from "./damping/DampingEdit";
import { DampingShow } from "./damping/DampingShow";
import { LengthList } from "./length/LengthList";
import { LengthCreate } from "./length/LengthCreate";
import { LengthEdit } from "./length/LengthEdit";
import { LengthShow } from "./length/LengthShow";
import { TimeList } from "./time/TimeList";
import { TimeCreate } from "./time/TimeCreate";
import { TimeEdit } from "./time/TimeEdit";
import { TimeShow } from "./time/TimeShow";
import { MassList } from "./mass/MassList";
import { MassCreate } from "./mass/MassCreate";
import { MassEdit } from "./mass/MassEdit";
import { MassShow } from "./mass/MassShow";
import { DriveAmplitudeList } from "./driveAmplitude/DriveAmplitudeList";
import { DriveAmplitudeCreate } from "./driveAmplitude/DriveAmplitudeCreate";
import { DriveAmplitudeEdit } from "./driveAmplitude/DriveAmplitudeEdit";
import { DriveAmplitudeShow } from "./driveAmplitude/DriveAmplitudeShow";
import { GravityList } from "./gravity/GravityList";
import { GravityCreate } from "./gravity/GravityCreate";
import { GravityEdit } from "./gravity/GravityEdit";
import { GravityShow } from "./gravity/GravityShow";
import { DriveFrequencyList } from "./driveFrequency/DriveFrequencyList";
import { DriveFrequencyCreate } from "./driveFrequency/DriveFrequencyCreate";
import { DriveFrequencyEdit } from "./driveFrequency/DriveFrequencyEdit";
import { DriveFrequencyShow } from "./driveFrequency/DriveFrequencyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BinghamUniversitySimulation"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Damping"
          list={DampingList}
          edit={DampingEdit}
          create={DampingCreate}
          show={DampingShow}
        />
        <Resource
          name="Length"
          list={LengthList}
          edit={LengthEdit}
          create={LengthCreate}
          show={LengthShow}
        />
        <Resource
          name="Time"
          list={TimeList}
          edit={TimeEdit}
          create={TimeCreate}
          show={TimeShow}
        />
        <Resource
          name="Mass"
          list={MassList}
          edit={MassEdit}
          create={MassCreate}
          show={MassShow}
        />
        <Resource
          name="DriveAmplitude"
          list={DriveAmplitudeList}
          edit={DriveAmplitudeEdit}
          create={DriveAmplitudeCreate}
          show={DriveAmplitudeShow}
        />
        <Resource
          name="Gravity"
          list={GravityList}
          edit={GravityEdit}
          create={GravityCreate}
          show={GravityShow}
        />
        <Resource
          name="DriveFrequency"
          list={DriveFrequencyList}
          edit={DriveFrequencyEdit}
          create={DriveFrequencyCreate}
          show={DriveFrequencyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
