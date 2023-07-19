import { Banner } from "../../Banner/Banner"
import { Novelty } from "../../Novelty/Novelty"
import { Wrapper } from "../../Wrapper/Wrapper"
import { Catalog } from "../Catalog/Catalog"

export const Home = function() {
    return (
        <Wrapper>
            <Banner />
            <Novelty />
            <Catalog />
        </Wrapper>
    )
}