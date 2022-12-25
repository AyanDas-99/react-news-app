import '../styles/about.css'
import fakeBuilding from '../media/fakesBuilding.jpg'
import { useGetNews } from '../Custom-hooks/useGetNews'
import { AllNews } from '../Components/Card';

export const About = () => {
    const [economicNews, economicsLoaded] = useGetNews('economics', true);
    const [cryptoNews, cryptoLoaded] = useGetNews('crypto', true);

    return (
        <div className='container'>
            <div className='news'>
                {economicsLoaded && <AllNews news={economicNews} topic="Economics" />}
                {cryptoLoaded && <AllNews news={cryptoNews} topic="Crypto" />}
            </div>
            <div className='main'>
                <h2>About Us</h2>
                <section className='info'>
                    <p>
                        The rise of Faked.com as world's leading news channel within a short span of its existence owes a lot to the vision of its chairman and editor-in-chief Ayan Das and the dedication and toil of its ever-growing team of bright news TV professionals.
                    </p>

                    <p>
                        Ayan Das founded India TV in April, 2004 from a swanky studio in Film City, Noida, then considered one of Asia's largest news TV studios.
                    </p>

                    <p>
                        In 1997, Ayan Das set up his own production house – Independent News Service (INS), the parent company which owns Faked.com.
                    </p>

                    <p>
                        In a short period, Faked.com has created benchmarks in innovation, impact, ratings, time spends, and viewer-support. Indeed, Faked.com's newsbreaks have inspired talk shows on rival channels, Bollywood films, BBC documentaries and articles in Time Magazine, even Amul hoardings.
                    </p>

                    <p>
                        In today's rampant me-too-ism, Faked.com is, perhaps, the only multi-lingual news channel that is perceived as "courageous" and "different."
                    </p>

                    <p>
                        The channel's No.1 position is no accident. It is the result of Mr. Das leading the way on the lonely path of "credibility first." It is the result of the efforts of a self-made man who kept both his feet firmly on the ground, a journalist for whom the viewer's interest has been paramount.
                    </p>

                    <p>
                        Today Mr. Das's editorial decision-making reaches out to an audience of 90 million C&S homes. The human resource of Faked.com resides among loyal viewers and 500 staffers. INS has investment from ComVentures, a top Silicon Valley venture fund, and a leading private equity entity. The enterprise value of INS which crossed Rs 500 crore in January, 2008 has been rising by leaps and bounds.
                    </p>

                    <p>
                        Faked.com has state-of-the-art digital connectivity and its Broadcast Centre covers an area of more than 1,28,000 square feet in Sector 85, Noida.
                    </p>

                    <img src={fakeBuilding} alt="fake company building" />
                </section>
            </div>
        </div>
    )
}