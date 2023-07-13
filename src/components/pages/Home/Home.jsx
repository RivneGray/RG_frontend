import { Banner } from "../../Banner/Banner"
import { Novelty } from "../../Novelty/Novelty"
import { Wrapper } from "../../Wrapper/Wrapper"

export const Home = function() {
    return (
        <Wrapper>
            <Banner />
            <Novelty />
        </Wrapper>
    )
}