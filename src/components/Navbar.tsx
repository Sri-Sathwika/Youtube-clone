"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Mic, Search, Menu, Bell, Upload, Radio } from "lucide-react";

export default function Navbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] sticky top-0 z-50 text-white">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar}>
          <Menu className="w-6 h-6 cursor-pointer" />
        </button>
        <Image
          src="/logo.png"
          alt="YouTube"
          width={100}
          height={40}
          className="h-10 w-auto"
          priority
        />
      </div>

      {/* Center: Search + Mic */}
      <div className="flex items-center gap-3 w-1/2 max-w-xl">
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#121212] text-sm text-white placeholder-gray-400 px-4 py-2 border border-gray-600 rounded-l-full outline-none"
          />
          <button className="px-4 py-2 bg-[#222] border border-l-0 border-gray-600 rounded-r-full">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
        <button className="bg-[#222] p-2 rounded-full hover:bg-[#333]">
          <Mic className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Right: Create, Notifications, Avatar */}
      <div className="relative flex items-center gap-4" ref={dropdownRef}>
        <button
          className="flex items-center gap-1 px-4 py-1 bg-[#222] rounded-full text-sm hover:bg-[#333] hover:cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="text-lg">+</span> Create
        </button>

        {showDropdown && (
          <div className="absolute right-16 top-10 w-48 bg-[#222] shadow-lg rounded-lg p-2 z-50 text-white">
            <div className="flex items-center gap-2 px-3 py-2 hover:bg-[#333] cursor-pointer rounded-md">
              <Upload className="w-4 h-4" />
              <span>Upload video</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 hover:bg-[#333] cursor-pointer rounded-md">
              <Radio className="w-4 h-4" />
              <span>Go live</span>
            </div>
          </div>
        )}

        <Bell className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
        <Image
          src="https://api.dicebear.com/8.x/initials/svg?seed=S"
          alt="user"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
          unoptimized
        />
      </div>
    </nav>
  );
}
