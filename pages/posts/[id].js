import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'


// function for creating posts from fetched paths, paths must be a list of objects
// in production in runs at build time
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

// function for fetching data to pass it as a prop to the component
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        }
    }
}

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
  
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>

      </Layout>
    );
}

