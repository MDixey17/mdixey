import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { DetailPage } from "./pages/DetailPage";
import { Jobs } from "./constants/Jobs";
import { Projects } from "./constants/Projects";

export const PortfolioWebsite = () => {
  return (
    <BrowserRouter basename="/mdixey">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Experience/Target"
          element={<DetailPage experience={Jobs[0]} />}
        />
        <Route
          path="/Experience/UMN"
          element={<DetailPage experience={Jobs[1]} />}
        />
        <Route
          path="/Experience/MLB"
          element={<DetailPage experience={Jobs[2]} />}
        />
        <Route
          path="/Project/VG1"
          element={<DetailPage project={Projects[0]} />}
        />
        <Route
          path="/Project/Overlay"
          element={<DetailPage project={Projects[1]} />}
        />
        <Route
          path="/Project/Goldybot"
          element={<DetailPage project={Projects[2]} />}
        />
        <Route
          path="/Project/Scrimbot"
          element={<DetailPage project={Projects[3]} />}
        />
        <Route
          path="/Project/HypeChamber"
          element={<DetailPage project={Projects[4]} />}
        />
        <Route
          path="/Project/Strelka"
          element={<DetailPage project={Projects[5]} />}
        />
        <Route
          path="/Project/DystopianDefier"
          element={<DetailPage project={Projects[6]} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
