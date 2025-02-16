import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Holdings from "./pages/Holdings";
import History from "./pages/History";
import Messages from "./pages/Messages";
import Withdrawal from "./pages/Withdrawal";
import Assets from "./pages/Assets";
import PortfolioMargin from "./pages/PortfolioMargin";
import Orders from "./pages/Orders";
import Rewards from "./pages/Rewards";
import TradingBots from "./pages/TradingBots";
import SystemStatus from "./pages/SystemStatus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/history" element={<History />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/portfolio-margin" element={<PortfolioMargin />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/trading-bots" element={<TradingBots />} />
          <Route path="/system-status" element={<SystemStatus />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;