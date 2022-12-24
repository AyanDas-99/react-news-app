import { Headline, AllNews } from "../Components/Card";
import { useGetNews } from "../Custom-hooks/useGetNews";
import { Weather } from "../Components/Weather";

export const Feed = () => {

    const [Politics, politicsLoaded] = useGetNews("politics", true);
    const [sportsNews, sportsLoaded] = useGetNews("sports", true);
    const [headline, headlineLoaded] = useGetNews("", false);




    return (
        <div className="Container">
            <div className="a">
                {headlineLoaded ? (
                    <Headline news={headline} />
                ) : (
                    <div className="news loading"></div>
                )}
            </div>
            <div className="b">
                {sportsLoaded ? (
                    <AllNews news={sportsNews} topic="Sports" />
                ) : (
                    <div className="news loading" />
                )}
            </div>
            <div className="c">
                <Weather city="Port Blair" />
            </div>
            <div className="d">
                {politicsLoaded ? (
                    <AllNews news={Politics} topic="Politics" />
                ) : (
                    <div className="news loading" />
                )}
            </div>
        </div>
    )
}