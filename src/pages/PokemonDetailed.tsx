import BreedingTrainingAndHabitat from "../components/BreedingTrainingAndHabitat";
import Header from "../components/Header";
import HeroComponentDetailed from "../components/HeroComponentDetailed";
import StatsAbilitiesAndEvolution from "../components/StatsAbilitiesAndEvolution";

export default function PokemonDetailed() {
    return (
        <>
            <Header />
            <HeroComponentDetailed />
            <StatsAbilitiesAndEvolution />
            <BreedingTrainingAndHabitat />
        </>
    )
}