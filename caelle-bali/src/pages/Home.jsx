import Banner from "../components/Banner_home";
import Featured from "../components/Featured_home";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <Banner />
      <Featured />
    </main>
  );
}
