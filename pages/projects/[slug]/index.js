import { MetaData } from '../../../components/MetaData';
import { fetchEntries } from '../../../api/fetchEntries';
import { client } from '../../../api/client';

// export async function getStaticPaths() {
//     const res = await fetch('project');

//     // const paths = res.items.map((item) => {
//     //     return {
//     //         params: {
//     //             slug: item.fields.slug,
//     //         },
//     //     };
//     // });

//     // return {
//     //     props: {
//     //         paths: [...],
//     //         fallback: false,
//     //     },
//     // };
// }

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
