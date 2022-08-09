import Head from "next/head";
import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";

const Post = () => {
  return (
    <div>
      <Head>
        <title>POST Medium</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="flex">
        <ReadersNav />
        <ArticleMain />
        <Recommendations />
      </div>
    </div>
  );
};

export default Post;
