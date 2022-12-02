import Image from 'next/image';
import { MetaData } from '../components/MetaData';
import styles from '../styles/Home.module.css';
import HomePageImg from '../public/img/axel-compressed/4(kopia).jpeg';

export default function Home() {
    return (
        <>
            <MetaData page='Home' />
            <div className='container'>
                <Image
                    src={HomePageImg}
                    alt='axel #4'
                    className={styles.homePageImg}
                    priority
                />
            </div>
        </>
    );
}
