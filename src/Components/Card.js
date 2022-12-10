import '../styles/card.css'

export const Headline = (props) => {
    const articles = props.news.articles;
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div><h6>HEADLINES</h6></div>
            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src={articles[0].urlToImage} class="d-block w-80 carousel-image" />
                    <a href={articles[0].url} target='_blank'>
                        <div class="carousel-caption d-md-block" >
                            <h5>{articles[0].title}</h5>
                            <p>{articles[0].description}</p>
                        </div>
                    </a>
                </div>

                {articles.slice(1).map((article, key) => {
                    return (
                        <div class="carousel-item" key={key}>
                            <img src={article.urlToImage} class="d-block w-80" />
                            <a href={article.url} target='_blank'>
                                <div class="carousel-caption d-md-block">
                                    <h5>{article.title}</h5>
                                    <p>{article.description}</p>
                                </div>
                            </a>
                        </div>

                    )
                })}

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}


export const AllNews = (props) => {
    const articles = props.news.articles;
    console.log(articles)
    return (
        <div className='news'>
            <p className='tag'>{props.topic}</p>
            {articles.slice(0, 10).map((article, key) => {
                return (
                    <a href={article.url} target="_blank">
                        <div className='article'>
                            <img src={article.urlToImage} className='article-img' />
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