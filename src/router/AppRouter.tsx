import { Route, Routes, Navigate } from "react-router-dom";
import { HomeScreen, PokemonScreen } from "../screens";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomeScreen />} />
        <Route path="/:name" element={<PokemonScreen />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
