import { Link } from '@reach/router';

const ArticlesCards = ({ articles }) => {
  return (
    <main className='ArticlesPages'>
      {' '}
      {articles.map((articles) => {
        return (
          <section className='ArticlesCard' key={articles.article_id}>
            <h1 className='ArticlesTitle'>
              {articles.title}, written by {articles.author}
            </h1>
            <p className='ArticleStats'> Topic : {articles.topic}</p>

            <p className='ArticleStats'>Posted On: {articles.created_at}</p>
            <p className='ArticleStats'>
              {' '}
              Comments : {articles.comment_count} Votes: {articles.votes}
            </p>
            <Link
              to={`/articles/${articles.article_id}`}
              className='ReadArticleLink'
            >
              READ ARTICLE
            </Link>
          </section>
        );
      })}{' '}
    </main>
  );
};

export default ArticlesCards;
