import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

import ServicesIndex from "@/pages/services/index";
import PressureWashing from "@/pages/services/pressure-washing";
import HouseWashing from "@/pages/services/house-washing";
import RoofCleaning from "@/pages/services/roof-cleaning";
import DrivewayConcreteCleaning from "@/pages/services/driveway-concrete-cleaning";
import CommercialPressureWashing from "@/pages/services/commercial-pressure-washing";
import WindowCleaning from "@/pages/services/window-cleaning";

import ServiceAreasIndex from "@/pages/service-areas/index";
import MidlothianTX from "@/pages/service-areas/midlothian-tx";
import WaxahachieTX from "@/pages/service-areas/waxahachie-tx";
import CedarHillTX from "@/pages/service-areas/cedar-hill-tx";
import MansfieldTX from "@/pages/service-areas/mansfield-tx";
import RedOakTX from "@/pages/service-areas/red-oak-tx";
import OvillaTX from "@/pages/service-areas/ovilla-tx";
import VenusTX from "@/pages/service-areas/venus-tx";
import ArlingtonTX from "@/pages/service-areas/arlington-tx";
import GrandPrairieTX from "@/pages/service-areas/grand-prairie-tx";
import IrvingTX from "@/pages/service-areas/irving-tx";
import DallasTX from "@/pages/service-areas/dallas-tx";
import FortWorthTX from "@/pages/service-areas/fort-worth-tx";
import BurlesonTX from "@/pages/service-areas/burleson-tx";
import DeSotoTX from "@/pages/service-areas/desoto-tx";
import EnnisTX from "@/pages/service-areas/ennis-tx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      
      <Route path="/services" component={ServicesIndex} />
      <Route path="/services/pressure-washing" component={PressureWashing} />
      <Route path="/services/house-washing" component={HouseWashing} />
      <Route path="/services/roof-cleaning" component={RoofCleaning} />
      <Route path="/services/driveway-concrete-cleaning" component={DrivewayConcreteCleaning} />
      <Route path="/services/commercial-pressure-washing" component={CommercialPressureWashing} />
      <Route path="/services/window-cleaning" component={WindowCleaning} />
      
      <Route path="/service-areas" component={ServiceAreasIndex} />
      <Route path="/service-areas/midlothian-tx" component={MidlothianTX} />
      <Route path="/service-areas/waxahachie-tx" component={WaxahachieTX} />
      <Route path="/service-areas/cedar-hill-tx" component={CedarHillTX} />
      <Route path="/service-areas/mansfield-tx" component={MansfieldTX} />
      <Route path="/service-areas/red-oak-tx" component={RedOakTX} />
      <Route path="/service-areas/ovilla-tx" component={OvillaTX} />
      <Route path="/service-areas/venus-tx" component={VenusTX} />
      <Route path="/service-areas/arlington-tx" component={ArlingtonTX} />
      <Route path="/service-areas/grand-prairie-tx" component={GrandPrairieTX} />
      <Route path="/service-areas/irving-tx" component={IrvingTX} />
      <Route path="/service-areas/dallas-tx" component={DallasTX} />
      <Route path="/service-areas/fort-worth-tx" component={FortWorthTX} />
      <Route path="/service-areas/burleson-tx" component={BurlesonTX} />
      <Route path="/service-areas/desoto-tx" component={DeSotoTX} />
      <Route path="/service-areas/ennis-tx" component={EnnisTX} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
