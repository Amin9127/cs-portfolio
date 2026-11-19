"use client";

import { useState, useRef, useCallback } from "react";
import { Sliders, Camera, Box, RotateCcw, Eye } from "lucide-react";

export function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState<"slider" | "fov" | "spatial">("slider");

  // Tab 1: Image Slider State
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleSliderMove(e.clientX);
    }
  };

  // Tab 2: Optical FoV State
  const [focalLength, setFocalLength] = useState(35); // in mm
  const [aperture, setAperture] = useState(2.8); // f-stop

  // Full-frame sensor diagonal is sqrt(36^2 + 24^2) ≈ 43.27mm
  const sensorDiagonal = 43.27;
  const fovDegrees = (2 * Math.atan(sensorDiagonal / (2 * focalLength)) * (180 / Math.PI)).toFixed(1);
  const circleOfConfusion = 0.03; // 0.03mm for 35mm full frame
  const hyperfocalMeters = (
    (Math.pow(focalLength, 2) / (aperture * circleOfConfusion) + focalLength) /
    1000
  ).toFixed(2);

  const getLensCategory = (fl: number) => {
    if (fl < 24) return "Ultra-Wide Angle";
    if (fl < 35) return "Wide Angle";
    if (fl <= 50) return "Standard / Natural Human Perspective";
    if (fl <= 105) return "Short Telephoto / Portrait";
    return "Super Telephoto";
  };

  // Tab 3: 3D Spatial Vector State (Unreal Engine coordinate math)
  const [yaw, setYaw] = useState(45); // degrees
  const [pitch, setPitch] = useState(25); // degrees
  const [roll, setRoll] = useState(0); // degrees

  const yawRad = (yaw * Math.PI) / 180;
  const pitchRad = (pitch * Math.PI) / 180;

  // Unreal Engine Forward Vector: [cos(pitch)*cos(yaw), cos(pitch)*sin(yaw), sin(pitch)]
  const forwardX = (Math.cos(pitchRad) * Math.cos(yawRad)).toFixed(3);
  const forwardY = (Math.cos(pitchRad) * Math.sin(yawRad)).toFixed(3);
  const forwardZ = Math.sin(pitchRad).toFixed(3);

  return (
    <section id="playground" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Engineering Laboratory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Live Systems Playground
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-base">
              Test real client-side algorithms and telemetry calculations right in your browser, from optical camera physics to 3D spatial vector geometry.
            </p>
          </div>

          {/* Playground Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveTab("slider")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === "slider"
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>RAW vs Color Grade</span>
            </button>

            <button
              onClick={() => setActiveTab("fov")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === "fov"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Optical FoV Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab("spatial")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === "spatial"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Spatial Vectors</span>
            </button>
          </div>
        </div>

        {/* Tab 1: RAW vs Color Grade Comparison Slider */}
        {activeTab === "slider" && (
          <div className="glow-card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                  Photography Portfolio Feature Showcase
                </span>
                <h3 className="text-xl font-bold text-white">
                  Interactive Optical Telemetry &amp; Before/After Comparison
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Drag the slider handle to inspect the difference between uncompressed sensor captures and finished grading.
                </p>
              </div>

              {/* Optical Telemetry HUD */}
              <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
                <span className="px-2.5 py-1 rounded bg-black/50 border border-white/10">35mm</span>
                <span className="px-2.5 py-1 rounded bg-black/50 border border-white/10">f/2.8</span>
                <span className="px-2.5 py-1 rounded bg-black/50 border border-white/10">1/250s</span>
                <span className="px-2.5 py-1 rounded bg-black/50 border border-white/10 text-amber-400">ISO 400</span>
              </div>
            </div>

            {/* Drag Container */}
            <div
              ref={sliderContainerRef}
              className="mt-6 relative h-72 sm:h-96 rounded-xl overflow-hidden cursor-ew-resize select-none border border-white/10 bg-slate-950"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* After: Color Graded View (Underneath) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/40 via-indigo-950/70 to-blue-900/50 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-medium">
                    AFTER: Finished Color Grade (Rich Contrast &amp; Highlight Roll-off)
                  </span>
                </div>
                <div className="text-slate-300 text-xs font-mono bg-black/60 p-3 rounded-lg border border-white/10 max-w-sm">
                  <div>Color Profile: Film Emulation Rec.709</div>
                  <div>Shadow Recovery: +18 &bull; Highlight Roll-off: -24</div>
                  <div>AI Vision Class: Golden Hour Architecture</div>
                </div>
              </div>

              {/* Before: Raw Sensor Capture (Clipped by slider position) */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-700/80 flex flex-col justify-between p-6 border-r border-white/30"
                style={{ width: `${sliderPosition}%`, overflow: "hidden" }}
              >
                <div className="w-full flex justify-start">
                  <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 text-slate-300 text-xs font-mono whitespace-nowrap">
                    BEFORE: Flat Sensor RAW (.CR3 / .NEF)
                  </span>
                </div>
                <div className="text-slate-300 text-xs font-mono bg-black/70 p-3 rounded-lg border border-white/10 max-w-sm whitespace-nowrap">
                  <div>Dynamic Range: 14.2 EV Uncompressed</div>
                  <div>Linear Gamma 1.0 &bull; Neutral Matrix</div>
                  <div>Native Sensor ISO: 400</div>
                </div>
              </div>

              {/* Slider Divider Line & Thumb */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg text-xs font-bold font-mono">
                  &harr;
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Touch or drag across the frame to compare</span>
              <span>Split Position: {sliderPosition.toFixed(0)}%</span>
            </div>
          </div>
        )}

        {/* Tab 2: Optical FoV & Hyperfocal Distance Calculator */}
        {activeTab === "fov" && (
          <div className="glow-card rounded-2xl p-6 md:p-8">
            <div className="pb-6 border-b border-white/10">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                Optical Trigonometry Engine
              </span>
              <h3 className="text-xl font-bold text-white">
                Focal Length &amp; Field of View (FoV) Simulator
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Computes diagonal field-of-view angles and hyperfocal sharpness zones on a standard 35mm full-frame sensor.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
              {/* Controls Column (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">Focal Length:</span>
                    <span className="text-blue-400 font-bold">{focalLength} mm</span>
                  </div>
                  <input
                    type="range"
                    min="14"
                    max="200"
                    step="1"
                    value={focalLength}
                    onChange={(e) => setFocalLength(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>14mm (Ultra-Wide)</span>
                    <span>50mm (Standard)</span>
                    <span>200mm (Telephoto)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">Aperture:</span>
                    <span className="text-amber-400 font-bold">f / {aperture}</span>
                  </div>
                  <input
                    type="range"
                    min="1.4"
                    max="16"
                    step="0.2"
                    value={aperture}
                    onChange={(e) => setAperture(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>f/1.4 (Shallow DoF)</span>
                    <span>f/5.6 (Sharp)</span>
                    <span>f/16 (Deep DoF)</span>
                  </div>
                </div>

                {/* Mathematical Formula Preview */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs space-y-1.5 text-slate-300">
                  <div className="text-slate-400 text-[10px] uppercase">Optical Formula:</div>
                  <div className="text-blue-300">
                    FoV = 2 * arctan(43.27 / (2 * {focalLength})) = {fovDegrees}&deg;
                  </div>
                  <div className="text-amber-300">
                    Hyperfocal = ({focalLength}&sup2; / ({aperture} * 0.03)) + {focalLength} mm = {hyperfocalMeters} m
                  </div>
                </div>
              </div>

              {/* Visual Cone Diagram Column (6 cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between p-6 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-slate-400">Category:</span>
                  <span className="text-white font-semibold">{getLensCategory(focalLength)}</span>
                </div>

                {/* Visual Angle Cone Representation */}
                <div className="py-8 flex items-center justify-center">
                  <svg className="w-64 h-48 overflow-visible" viewBox="-100 -80 200 160">
                    {/* Camera Body Icon */}
                    <rect x="-18" y="-14" width="36" height="28" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                    <circle cx="0" cy="0" r="8" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.5" />

                    {/* Dynamic Vision Cone */}
                    {(() => {
                      const halfAngleRad = ((Number(fovDegrees) / 2) * Math.PI) / 180;
                      const distance = 90;
                      const ySpan = distance * Math.tan(halfAngleRad);
                      return (
                        <>
                          <path
                            d={`M 18 0 L ${18 + distance} ${-ySpan} L ${18 + distance} ${ySpan} Z`}
                            fill="rgba(59, 130, 246, 0.12)"
                            stroke="rgba(59, 130, 246, 0.6)"
                            strokeWidth="1.5"
                            strokeDasharray="4 2"
                          />
                          <text
                            x={18 + distance + 10}
                            y="4"
                            fill="#60a5fa"
                            fontSize="11"
                            fontFamily="monospace"
                          >
                            {fovDegrees}&deg;
                          </text>
                        </>
                      );
                    })()}
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center font-mono pt-3 border-t border-white/10">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Diagonal FoV</div>
                    <div className="text-lg font-bold text-blue-400">{fovDegrees}&deg;</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Hyperfocal Distance</div>
                    <div className="text-lg font-bold text-amber-400">{hyperfocalMeters} m</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: 3D Spatial Vector & Transform Inspector */}
        {activeTab === "spatial" && (
          <div className="glow-card rounded-2xl p-6 md:p-8">
            <div className="pb-6 border-b border-white/10">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-1">
                Unreal Engine 5.7 Vector Geometry
              </span>
              <h3 className="text-xl font-bold text-white">
                3D Spatial Orientation &amp; Forward Vector Inspector
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Calculates real-time 3D directional vectors from Euler pitch, yaw, and roll rotations as used in camera traces and pawn state machines.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
              {/* Sliders Column */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">Yaw (Horizontal Turn):</span>
                    <span className="text-purple-400 font-bold">{yaw}&deg;</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={yaw}
                    onChange={(e) => setYaw(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">Pitch (Vertical Angle):</span>
                    <span className="text-blue-400 font-bold">{pitch}&deg;</span>
                  </div>
                  <input
                    type="range"
                    min="-89"
                    max="89"
                    value={pitch}
                    onChange={(e) => setPitch(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">Roll (Banking Tilt):</span>
                    <span className="text-emerald-400 font-bold">{roll}&deg;</span>
                  </div>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    value={roll}
                    onChange={(e) => setRoll(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                {/* Reset button */}
                <button
                  onClick={() => {
                    setYaw(45);
                    setPitch(25);
                    setRoll(0);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default Orientation</span>
                </button>
              </div>

              {/* Vector Output Display */}
              <div className="lg:col-span-6 p-6 rounded-xl bg-black/40 border border-white/5 font-mono text-xs space-y-4">
                <div className="text-slate-400 uppercase text-[10px] tracking-wider pb-2 border-b border-white/10">
                  Unreal Engine Normalized Forward Vector (X, Y, Z)
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="text-slate-500 text-[10px]">X (Forward)</div>
                    <div className="text-base font-bold text-blue-400 mt-1">{forwardX}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="text-slate-500 text-[10px]">Y (Right)</div>
                    <div className="text-base font-bold text-purple-400 mt-1">{forwardY}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="text-slate-500 text-[10px]">Z (Up)</div>
                    <div className="text-base font-bold text-emerald-400 mt-1">{forwardZ}</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5 text-[11px] text-slate-400 space-y-1">
                  <div>{`// Rotator: FRotator(Pitch=${pitch}.0, Yaw=${yaw}.0, Roll=${roll}.0)`}</div>
                  <div>{`// FVector Forward = GetActorForwardVector();`}</div>
                  <div className="text-emerald-400">{`// Unit Length: 1.000 (Normalized Directional Vector)`}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
