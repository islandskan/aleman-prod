import { MetaData } from '../components/MetaData';
import styles from '../styles/Calender.module.css';
import { CalenderCard } from '../components/CalenderCard';
import { client } from '../api/client';
import { useEffect, useState } from 'react';

// refactor to getStaticProps
const Calender = () => {
    const [calenderCards, setCalenderCards] = useState([]);
    useEffect(() => {
        client
            .getEntries({
                content_type: 'newsCard',
                // order: '-sys.createdAt', // this adds the content based on when they were added in the web app
                include: 10,
            })
            .then((response) => setCalenderCards(response.items))
            .catch(console.error);
    }, []);

    const calenderElements = calenderCards.map((card) => (
        <CalenderCard key={card.sys.id} card={card} />
    ));

    return (
        <>
            <MetaData page='Calender' />
            <div className={`container ${styles.news}`}>
                <h3 className='page-title'>Current & Upcoming</h3>
                <div className={styles.newsList}>{calenderElements}</div>
            </div>
        </>
    );
};

export default Calender;
