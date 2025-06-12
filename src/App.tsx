// App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Posts from "./pages/posts/Posts";
import Schedule from "./pages/schedule/Schedule";
import Analytics from "./pages/analytics/Analytics";
import Audience from "./pages/audience/Audience";
import Settings from "./pages/settings/Settings";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/audience" element={<Audience />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
