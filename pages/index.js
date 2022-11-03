import Styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "./components/header";
import Content from "./components/content";
import useSWR from "swr";

export default function Home() {
  let title = "ともすた";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/message", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Content>
      <style jsx>
        {`
          h1 {
            color: #f00;
          }
        `}
      </style>
      <Header title={"ヘッダー"}></Header>
      <p>{data.message}</p>
      <h1 className={Styles.mytitle}>ともすた</h1>
      <p>学ぶ。をちゃんと</p>
      <div>
        <Link href="/about">
          <button>About</button>
        </Link>
      </div>
    </Content>
  );
}
