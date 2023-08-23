import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello. I'm creating this website, because I wanted to learn Next.js framework.
          Up to now I've been really enjoying learning the fundamentals.
          </p>
        <p>
          (This website was made with Next.js)
        </p>
      </section>
    </Layout>
  );
}
