import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductScreen from './components/../screens/ProductScreen/ProductScreen.js';
import RegisterScreen from './screens/Admin/RegisterScreen/RegisterScreen.js';
import LoginScreen from './screens/Admin/LoginScreen/LoginScreen.js';
import AdminScreen from './screens/Admin/AdminScreen/AdminScreen.js';
import CreateCampaignScreen from './screens/Admin/CreateCampaignScreen/CreateCampaignScreen.js';
import ClicksScreen from './screens/Admin/ClicksScreen/ClicksScreen.js';
import AdminLeads from './screens/Admin/Leads/Leads.js';
import SmsScreen from './screens/Admin/SmsScreen/SmsScreen.js';

import HomeScreen from './screens/HomeScreen/HomeScreen.js';
import TourPackages from './screens/TourPackages/TourPackages.js'
import Footer from './components/Footer/Footer.js';
import Terms from './screens/Terms/Terms.js';
import Contact from './screens/Contact/Contact.js';
import Privacy from './screens/Privacy/Privacy.js'
import NotFound from './components/NotFound/NotFound.js';
import ClientMenu from './components/ClientMenu/ClientMenu.js'
import AboutUs from './screens/AboutUs/AboutUs.js'
import PostScreen from './screens/PostScreen/PostScreen.js'
import Travel from './components/TravelZA/Trip.js'
import TravelZaTwo from './components/TravelZATwo/Trip.js'
import TravelAe from './components/TravelAe/Trip.js'
import Quizzes from './screens/QuizzesScreen/QuizzesScreen.js'
import QuizPost from './screens/QuizzesScreen/QuizScreen/QuizPost/QuizPost.js'
import TravelRassie from './components/TravelZARassie/Trip.js'
import TravelZaLatest from './components/TravelZALatest/Trip.js'
import TravelZALatestTwo from './components/TravelZALatestTwo/Trip.js'
import TravelZALatestThree from './components/TravelZALatestThree/Trip.js'
import TravelThailand from './components/OfferInto/Th/Trip.js'
import TravelMalaysia from './components/OfferInto/MyAirAisa/Trip.js'
import RassieLp from './components/OfferInto/Za/Rassie/index.js';
// import IndiaTravel from './components/OfferInto/InAmitabh/Trip.js'
import IndiaTravelSachin from './components/OfferInto/InSachin/Trip.js'
// import IndiaTravelSachinTw from './components/OfferInto/InSachinTW/Trip.js'
import AUShaneTravel  from './components/OfferInto/AUShane/Trip.js'
// import IndiaTravelSachinShort from './components/OfferInto/InSachinShort/Aisa/index.js'
import CLTravel from './components/CLTravelKid/Trip.js'
import IrishProperty from './components/OfferInto/IEMichael/Trip.js'
//import CLlp from './components/CLTravelKid/index.js'
// import { hotjar } from 'react-hotjar'

function App() {
  
 
  return (
    <div>

      <Router>
        {
          window.location.pathname.includes('/admin') ||
            window.location.pathname.includes('/login') ||
            window.location.pathname.includes('/blog') ||
            window.location.pathname.includes('/visit') ||
            window.location.pathname.includes('/boks') ||
            window.location.pathname.includes('/itineray') ||
            window.location.pathname.includes('/tour') ||
            window.location.pathname.includes('/th') ||
            window.location.pathname.includes('au') ||
            window.location.pathname.includes('uae') ||
            window.location.pathname.includes('my') ||
            window.location.pathname.includes('vn') ||
            window.location.pathname.includes('ch') ||
            window.location.pathname.includes('nl') ||
            window.location.pathname.includes('cz') ||
            window.location.pathname.includes('cl') ||
            window.location.pathname.includes('india') ||
            window.location.pathname.includes('buy') ||
            window.location.pathname.includes('/lp') ? '' : <ClientMenu />

        }

        {/* {
      hotjar.initialize('2151131', '6')
    } */}

        <Switch>
          
          <Route path="/" exact component={HomeScreen} />
          <Route path="/post/:postId" exact component={PostScreen} />

          {/* <Route path="/visit/rassie" exact component={RassieLp} />
          <Route path="/ireland/dublin/itineray/vist/:postId" exact component={IrishProperty} />
          <Route path="/buy/ireland/property" exact component={IrishProperty} />
          {/* <Route path="/prep"exact component={TravelRassie}/> */}
          {/* 
     cape town urls
     */}
          {/* <Route path="/cl/:postId" exact component={CLTravel} />
          <Route path="/cl/visit/:postId" exact component={CLTravel} />
          <Route path="/chile/itineray/visit/:postId" exact component={CLTravel} />
          <Route path="/itineray/chilean/:postId" exact component={CLTravel} />
          <Route path="/santiago/chile/:postId" exact component={CLTravel} />
          <Route path="/guide/tour/chile/:postId" exact component={CLTravel} />
          <Route path="/guide/visit/chile/:postId" exact component={CLTravel} />
          <Route path="/guide/itineray/chile/:postId" exact component={CLTravel} />
          <Route path="/guide/itineray/chile/santiago/:postId" exact component={CLTravel} /> */}

          <Route path="/guide/itineray/chile/kid/:postId" exact component={CLTravel} />
          <Route path="/guide/itineray/chile/:postId" exact component={CLTravel} /> */}
          {/* <Route path="/visit/india/:postId" exact component={IndiaTravel} />
          <Route path="/tour/india/:postId" exact component={IndiaTravel} /> */}
{/* 
          <Route path="/india/sachin/:postId" exact component={IndiaTravelSachin} />
          <Route path="/india/sachin/mumbai/:postId" exact component={IndiaTravelSachin} />
          <Route path="/tour/india/sachin/:postId" exact component={IndiaTravelSachin} /> */}
       



          {/* <Route path="/visit/australia/:postId" exact component={AUShaneTravel}/>
          <Route path="/tour/australia/:postId" exact component={AUShaneTravel}/> */}


          {/* <Route path="/india/short" exact component={IndiaTravelSachinShort} /> */}

          {/* <Route path="/cl/:postId" exact component={CLTravel} /> */}


          <Route path="/durban/tour/southafrica/fun/:postId" exact component={TravelZALatestThree} />

          {/* <Route path="/capetown/tour/southafrica/fun/durban/2022/:postId" exact component={TravelZALatestTwo} />
          <Route path="/capetown/tour/southafrica/fun/durban/:postId" exact component={TravelZALatestTwo} />
          <Route path="/capetown/blog/:postId" exact component={TravelZALatestTwo} />
          <Route path="/capetown/southafrica/visit/:postId" exact component={TravelZALatestTwo} />
          <Route path="/capetown/itineray/tour/:postId" exact component={TravelZALatestTwo} />

          <Route path="/capetown/itineray/:postId" exact component={TravelZALatestTwo} />
          <Route path="/capetown/itineray/vacation/:postId" exact component={TravelZALatestTwo} />
          <Route path="/capetown/itineray/holiday/:postId" exact component={TravelZALatestTwo} />
          <Route path="/capetown/itineray/vist/:postId" exact component={TravelZALatestTwo} /> */}
          {/* 
     cape town urls
     */}

          {/* {
        Rassie urls
     } */}

          <Route path="/capetown/boks/tour/:postId" exact component={TravelRassie} />
          {/* {
        Rassie urls
     } */}

          <Route path="/joburg/tour/:postId" exact component={TravelZALatestTwo} />
          {/* <Route path="/tour/capetown/:postId" exact component={TravelZALatestTwo} />
          <Route path="/tour/southafrica/:postId" exact component={TravelZALatestTwo} />
          <Route path="/tour/durban/:postId" exact component={TravelZALatestTwo} /> */}


{/* 
          <Route path="/visit/malaysia/:postId" exact component={TravelMalaysia} />
          <Route path="/visit/malaysicancity/:postId" exact component={TravelMalaysia} />

          <Route path="/visit/th/:postId" exact component={TravelThailand} />
          <Route path="/visit/thailand/:postId" exact component={TravelThailand} />
          <Route path="/visit/bangkok/:postId" exact component={TravelThailand} />

          <Route path="/blog/travel-africa/:postId" exact component={Travel} />
          <Route path="/blog/travelinafrica/:postId" exact component={Travel} />
          <Route path="/blog/travel/:postId" exact component={Travel} />

          <Route path="/visit/africanow/:postId" exact component={TravelZaLatest} />
          <Route path="/visit/africa/:postId" exact component={TravelZaLatest} />
          <Route path="/visit/krugerpark/:postId" exact component={TravelZaLatest} />

          <Route path="/africanow/visit/:postId" exact component={TravelZaLatest} />
          <Route path="/africa/visit/:postId" exact component={TravelZaLatest} />
          <Route path="/krugerpark/visit/:postId" exact component={TravelZaLatest} /> */}



          <Route path="/blog/travel-inafrica/v2/:postId" exact component={TravelRassie} />
          <Route path="/blog/travelinafrica/v2/:postId" exact component={TravelRassie} />
          <Route path="/blog/travel/v2/:postId" exact component={TravelRassie} />

          <Route path="/visit/capetown/:postId" exact component={TravelRassie} />
          <Route path="/visit/durban/:postId" exact component={TravelRassie} />
          <Route path="/visit/joburg/:postId" exact component={TravelRassie} />
          <Route path="/visit/southafrica/:postId" exact component={TravelRassie} />

          <Route path="/southafrica/blog/travel/:postId" exact component={TravelZaTwo} />

          <Route path="/blog/travel/dubai/:postId" exact component={TravelAe} />
          <Route path="/blog/travelindubai/:postId" exact component={TravelAe} />

          <Route path="/travel-africa" exact component={HomeScreen} />
          <Route path="/africa" exact component={HomeScreen} />
          <Route path="/travel-europe" exact component={HomeScreen} />
          <Route path="/travel-packages" exact component={TourPackages} />

          <Route path='/quizzes' exact component={Quizzes} />
          <Route path='/quiz/:id' exact component={QuizPost} />

          <Route path="/terms-and-conditions" exact component={Terms} />
          <Route path="/privacy-policy" exact component={Privacy} />
          <Route path="/contact-us" exact component={Contact} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/camp" exact component={ProductScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/admin" exact component={AdminScreen} />
          <Route path="/admin/campaigns/create/" exact component={CreateCampaignScreen} />
          <Route path="/admin/campaign/:campaignId/clicks/" exact component={ClicksScreen} />
          <Route path="/admin/sms" exact component={SmsScreen} />
          <Route path="/admin/leads" exact component={AdminLeads} />

          <Route path="" component={NotFound} />



        </Switch>

        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
