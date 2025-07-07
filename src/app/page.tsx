"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Navbar onToggleSidebar={() => setCollapsed(!collapsed)} />
      <div className="flex flex-1">
        <Sidebar collapsed={collapsed} />
        <main className="flex-1 overflow-y-auto p-4">
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}
