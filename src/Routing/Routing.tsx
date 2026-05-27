import { Router, Route, LocationProvider } from "preact-iso"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Items from "../pages/Items"
import Abilities from "../pages/Abilities"
import Regions from "../pages/Regions"
import PokemonDetailed from "../pages/PokemonDetailed"
import Catalog from "../pages/Catalog"
export default function Routing() {
    return (
        <LocationProvider>
            <Router>
                <Route path="/" component={Home} />
                <Route path="/items" component={Items} />
                <Route path='/abilities' component={Abilities} />
                <Route path="/regions" component={Regions} />
                <Route path="/pokemon_detail/:id" component={PokemonDetailed} />
                <Route path="/catalog" component={Catalog} />
                <Route default component={NotFound} />
            </Router>
        </LocationProvider>
    )
}
