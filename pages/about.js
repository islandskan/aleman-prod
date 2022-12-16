import { MetaData } from '../components/MetaData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../styles/About.module.css';
import { fetchEntries } from '../api/fetchEntries';
import { Button } from '../components/Button';

export async function getStaticProps() {
    const res = await fetchEntries('aboutPage');
    const items = res.map((item) => {
        return item.fields;
    });
    return {
        props: {
            items,
        },
    };
}

const About = ({ items }) => {
    console.log(items[0]);
    const {
        artistStatementHeadline,
        cvHeadline,
        publicationsHeadline,
        artistStatementBody,
        cvBody,
        publicationsBody,
    } = items[0];

    console.log(artistStatementBody);

    return (
        <>
            <MetaData page='About' />
            <div className={`container ${styles.aboutContainer}`}>
                <div className={styles.artistContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}>
                        {artistStatementHeadline}
                    </h3>
                    <div className={styles.bodyContainer}>
                        {documentToReactComponents(artistStatementBody)}
                    </div>
                    {/* <div className={styles.bodyContainer}>Video interviews</div> */}
                </div>
                <div className={styles.cvContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}>
                        {cvHeadline}
                    </h3>
                    <Button
                        type='button'
                        classname={styles.cvBtn}
                        text='Save as PDF'
                    />
                    <div className={styles.bodyContainer}>
                        {documentToReactComponents(cvBody)}
                    </div>
                </div>
                <div className={styles.publishedContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}>
                        {publicationsHeadline}
                    </h3>
                    <div className={styles.bodyContainer}>
                        {documentToReactComponents(publicationsBody)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
