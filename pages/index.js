import { MetaData } from '../components/MetaData';
import styles from '../styles/Projects.module.css';
import ProjectsCard from '../components/ProjectsCard.js';
import { fetchEntries } from '../api/fetchEntries.js';

export async function getStaticProps() {
    const res = await fetchEntries('projectCard');
    const projects = res.map((project) => {
        return project.fields;
    });
    return {
        props: {
            projects,
        },
    };
}

export default function Home({ projects }) {
    // const projectElements = projects.map((project) => (
    //     <ProjectsCard key={project.thumbnail.sys.id} project={project} />
    // ));
    return (
        <>
            <MetaData page='Projects' />
            <div className={`container ${styles.projects}`}>
                <h2 className='page-title'>Projects</h2>
                <div className={styles.projectsList}>
                    <ProjectsCard />
                </div>
            </div>
        </>
    );
}
