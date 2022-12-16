import { MetaData } from '../../../components/MetaData';
import { fetchEntries } from '../../../api/fetchEntries';
import { client } from '../../../api/client';

const SingleProject = ({ project }) => {
    console.log(project);
    return (
        <>
            <MetaData page='Single Project' />
            <div className='container'>
                <h2>Hallo</h2>
            </div>
        </>
    );
};

export default SingleProject;
