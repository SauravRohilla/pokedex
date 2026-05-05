import { useEffect } from "preact/hooks";
import Routing from "./Routing/Routing";
import { theme, pokemonOfTheDay } from "./utlities/helper";
export function App() {
  useEffect(() => {
    document.documentElement.className = theme.value;
  }, [theme.value]);
  useEffect(() => {
    pokemonOfTheDay()
  });
  return (
    <>
      <Routing />
    </>
  )
}
// mkdir -p src/app/{providers,router,store,layouts}
// mkdir -p src/pages/{home,login,settings}
// mkdir -p src/features/{auth/{api,components,hooks,store,types,utils},cart,profile}
// mkdir -p src/entities/{user,product,order}
// mkdir -p src/shared/{components,hooks,lib,api,types,constants,utils}
// mkdir -p src/assets
// mkdir -p src/styles
// mkdir -p tests