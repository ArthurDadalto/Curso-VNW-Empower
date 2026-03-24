import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import S from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={S.boxLogo}>
        <img src={Logo} alt="Logo do Site, coração verde" />
        <Link to="/">Médicos & Dentistas</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/voluntario">Seja Voluntário</Link>
      </nav>
    </header>
  );
}
