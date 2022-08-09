import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Medium App NextJS</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="mx-auto">
        <Header />
        <Banner />
        <div className="flex justify-center">
          <div className="max-w-7xl flex-1">
            <div className="flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
