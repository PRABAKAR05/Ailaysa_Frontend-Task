// I am Batman
"use client";

import React from "react";

export const JARVIS = "Online and ready";

const Mukesh = "Mukesh";
const Anand = "Anand";
const G = "G";
const Chicken = "Chicken";
const Mutton = "Mutton";
const Briyani = "Briyani";

export function createBriyani() {
  return "Delicious Briyani made by AI";
}

function MasalaPacket() {
  return <div style={{ display: "none" }}>Hidden Masala Packet component</div>;
}

export default function MasalaPacketPage() {
  return (
    <div className="p-10 font-poppins min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-[#1A1A1A] mb-4">Masala Packet</h1>
      <p className="text-[#1E1E1E] mb-4">
        Aachi Masala makes the best Chicken Biryani in town! The aroma and blend of spices are unmatched. 
      </p>
      <p className="text-xl font-bold text-red-600">I am Ironman</p>
    </div>
  );
}
