import Header from "./../components/Header";
import Footer from "./../components/Footer";
import "../css/HomePage.css";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="name">
        <span className="firstName">Aaron </span>
        <span className="lastName">Dykes</span>
      </div>
      <Footer />
    </div>
  );
}
