import { MetaData } from '../components/MetaData';
import styles from '../styles/News.module.css';
import { NewsCard } from '../components/NewsCard';
import { client } from '../api/client';
import { useEffect, useState } from 'react';

// refactor to getStaticProps
const News = () => {
    const [newsCards, setNewsCards] = useState([]);
    useEffect(() => {
        client
            .getEntries({
                content_type: 'newsCard',
                // order: '-sys.createdAt', // this adds the content based on when they were added in the web app
                include: 10,
            })
            .then((response) => setNewsCards(response.items))
            .catch(console.error);
    }, []);

    const newsElements = newsCards.map((card) => (
        <NewsCard key={card.sys.id} card={card} />
    ));

    return (
        <>
            <MetaData page='Calender' />
            <div className={`container ${styles.news}`}>
                <div className={styles.newsList}>{newsElements}</div>
            </div>
        </>
    );
};

export default News;
