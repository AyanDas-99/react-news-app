import '../styles/card.css'

export const Headline = (props) => {
    const articles = props.news.articles;
    console.log(articles)
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src={articles[0].urlToImage} class="d-block w-80" />
                    <div class="carousel-caption d-md-block">
                        <h5>{articles[0].title}</h5>
                        <p>{articles[0].description}</p>
                    </div>
                </div>

                {articles.slice(1).map(article => {
                    return (
                        <div class="carousel-item">
                            <img src={article.urlToImage} class="d-block w-80" />
                            <div class="carousel-caption d-md-block">
                                <h5>{article.title}</h5>
                                <p>{article.description}</p>
                            </div>
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
