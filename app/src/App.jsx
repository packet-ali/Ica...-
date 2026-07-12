import { Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import OpeningGift from "./pages/OpeningGift";
import Birthday from "./pages/Birthday";
import Letter from "./pages/Letter";
import Timeline from "./pages/Timeline";
import Music from "./pages/Music";
import Gifts from "./pages/Gifts";
import FinalGift from "./pages/FinalGift";
import MovieInvite from "./pages/MovieInvite";
import Ending from "./pages/Ending";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/opening" element={<OpeningGift />} />
      <Route path="/birthday" element={<Birthday />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/music" element={<Music />} />
      <Route path="/gifts" element={<Gifts />} />
      <Route path="/final-gift" element={<FinalGift />} />
      <Route path="/movie" element={<MovieInvite />} />
      <Route path="/ending" element={<Ending />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}