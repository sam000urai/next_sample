import Layout from '@/components/Layout';
import { siteConfig } from '../../site.config';

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-12">
        <h1 className="text-5xl mb-8">{siteConfig.title}</h1>
        <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
          <h1>test</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
