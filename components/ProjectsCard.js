import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

const ProjectsCard = ({ project }) => {
    // how to make responsive size??
    // function that checks the width of the screen and then assigns the value
    const WIDTH = '600';
    const HEIGHT = '380';
    const { slug, projectTitle, thumbnail } = project;

    // check if project card is the first element.
    // If it is, add attribute "priority"
    // if card contains "Hilma", add to first place

    return (
        <div className={styles.projectCard}>
            <Link href={`/projects/${slug}`}>
                <a>
                    <div className={styles.projectsCard__thumbnail}>
                        <Image
                            src={`https:${thumbnail.fields.file.url}`}
                            alt={projectTitle}
                            width={WIDTH}
                            height={HEIGHT}
                            role='img'
                        />
                        <div className={styles.projectsCard__background}>
                            <h4 className={styles.projectCard__title}>
                                {projectTitle}
                            </h4>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default ProjectsCard;
