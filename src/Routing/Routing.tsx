import { Router, Route, LocationProvider } from 'preact-iso'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Items from '../pages/Items'
import Abilities from '../pages/Abilities'
import Regions from '../pages/Regions'
import RegionDetail from '../pages/RegionDetail'
import PokemonDetailed from '../pages/PokemonDetailed'
import Catalog from '../pages/Catalog'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'
import ResetPassword from '../pages/ResetPassword'

export default function Routing() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/items" component={Items} />
        <Route path="/abilities" component={Abilities} />
        <Route path="/regions" component={Regions} />
        <Route path="/regions/:slug" component={RegionDetail} />
        <Route path="/pokemon_detail/:id" component={PokemonDetailed} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  )
}
