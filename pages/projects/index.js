import { MetaData } from '../../components/MetaData';
import styles from '../../styles/Projects.module.css';
import ProjectsCard from '../../components/ProjectsCard.js';
import { fetchEntries } from '../../api/fetchEntries';

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

const Projects = ({ projects }) => {
    const projectElements = projects.map((project) => (
        <ProjectsCard key={project.thumbnail.sys.id} project={project} />
    ));

    return (
        <>
            <MetaData page='Projects' />
            <div className='container'>
                <h2 className='page-title'>Projects</h2>
                <div className={styles.projectsList}>{projectElements}</div>
            </div>
        </>
    );
};

export default Projects;
