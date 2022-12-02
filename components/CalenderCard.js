import styles from '../styles/Calender.module.css';
import Link from 'next/link';
import { formatDate } from '../utils/formatDate.js';

export const CalenderCard = ({ card }) => {
    const { calenderUrl, calenderUrlName, endDate, location, startDate } =
        card.fields;

    return (
        <div className={styles.newsCard}>
            <h4 className={styles.newsCard__title}>{calenderUrlName}</h4>
            <p className={styles.newsCard__location}>{location}</p>
            <div className={styles.newsCard__dates}>
                <p>{formatDate(startDate)}</p>
                <p>{formatDate(endDate)}</p>
            </div>
            <Link href={calenderUrl}>
                <a target='_blank' rel='noreferrer'>
                    Read more
                </a>
            </Link>
        </div>
    );
};
