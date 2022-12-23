import '../styles/card.css'

export const Headline = (props) => {
    const articles = props.news.articles;
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div><h6>HEADLINES</h6></div>
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src={articles[0].urlToImage} className="d-block w-80 carousel-image" alt='article background'/>
                    <a href={articles[0].url} target='_blank' rel="noreferrer">
                        <div className="carousel-caption d-md-block" >
                            <h5>{articles[0].title}</h5>
                            <p>{articles[0].description}</p>
                        </div>
                    </a>
                </div>

                {articles.slice(1).map((article, key) => {
                    return (
                        <div className="carousel-item" key={key}>
                            <img src={article.urlToImage} className="d-block w-80" alt='article background'/>
                            <a href={article.url} target='_blank' rel="noreferrer">
                                <div className="carousel-caption d-md-block">
                                    <h5>{article.title}</h5>
                                    <p>{article.description}</p>
                                </div>
                            </a>
                        </div>

                    )
                })}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}


export const AllNews = (props) => {
    const noOfNews = 5
    const articles = props.news.articles;
    return (
        <div className='news bg-white'>
            <p className='tag'>{props.topic}</p>
            {articles.slice(0, noOfNews).map((article, key) => {
                return (
                    <a href={article.url} target="_blank" key={key} rel="noreferrer">
                        <div className='article'>
                            <img src={article.urlToImage} className='article-img' alt='article cover icon'/>
                            <div className='info'>
                                <h6>{article.title}</h6>
                            </div>
                        </div>
                    </a>
                )

            })}
        </div>
    )
}