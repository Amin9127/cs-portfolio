# 📂 Portfolio Projects Catalog & Case Studies Hub

> **Owner**: Amin Ali  
> **Degree**: MSci Computer Science (Integrated Master's), City St George's, University of London (Averaging First-Class Honours, 72.5%)  
> **Current Experience**: Technical QA Evaluator & AI Code Reviewer @ Outlier AI  
> **GitHub**: [github.com/Amin9127](https://github.com/Amin9127) | **Contact**: aminali656565@gmail.com

---

## 🌟 Flagship Production & Engineering Projects

### 1. Photography Portfolio & Optical Telemetry Archive (`photography_portfolio`)
- **Category**: Full-Stack Web, Optics & Computer Vision
- **Status**: Live Production Platform
- **Primary Tech**: Next.js 16.4 (App Router), React 19.3, Tailwind CSS v4, TypeScript 5, ExifReader, Jose, Python batch scripts
- **Repository / Path**: `C:\Users\amina\Desktop\AI projects\photography_portfolio`
- **Problem**: Traditional photography showcases present flattened, static images that strip away the technical craftsmanship, optical telemetry, and intentional color science behind each shot.
- **Architecture & Highlights**:
  - **Dynamic Optical EXIF Overlay**: Ingests raw camera telemetry both client-side and server-side, surfacing precise sensor settings: focal length, f-stop, shutter duration, ISO speed, and camera lens profile.
  - **Interactive Before/After Slider**: High-performance, GPU-accelerated touch/drag comparison slider (`BeforeAfterSlider.tsx`) that demonstrates uncompressed RAW sensor captures alongside finalized color grades.
  - **AI Vision Tagging & Categorization**: Automated pipeline (`aiVision.ts`) utilizing multimodal computer vision to classify scene lighting, composition styles, and color palettes.
  - **Batch Ingestion Verification Pipeline**: Python automation scripts (`process_photos.py`, `verify_raw_pairs.py`) ensuring RAW-pair integrity, metadata normalization, and asset optimization.
- **Key Metrics**:
  - 98+ Lighthouse performance score via Next.js Server Components.
  - Sub-second image telemetry rendering with smooth touch-first interaction.

---

### 2. Nette's Game: 3D First-Person Saloon Experience (`nette`)
- **Category**: 3D Spatial Systems, Game Dev & Interactive Experiences
- **Status**: Active Unreal Engine 5.7 Project
- **Primary Tech**: Unreal Engine 5.7, Blueprints, Gameplay State Trees, UMG UI Widgets, Lumen & Nanite, Cinematics
- **Repository / Path**: `C:\Users\amina\Documents\Unreal Projects\nette`
- **Problem**: Building an atmospheric, interactive 3D narrative and gamified experience in Unreal Engine requires coordinating stateful gameplay logic, physical interactions, dynamic UI widgets, and optimized cinematic sequences.
- **Architecture & Highlights**:
  - **Next-Gen Unreal Engine 5.7 Architecture**: Utilizes bleeding-edge UE 5.7 features including Gameplay State Trees (`GameplayStateTree`) for robust AI and actor state transitions.
  - **Detailed 3D Historic Saloon Environment**: High-fidelity environment (`Historic_Saloon.umap`) with realistic PBR materials, custom water puddle shaders (`JVAD3D_SimpleWaterPuddles`), and sequence animations (`His_Sal_Seq_01`).
  - **Interactive Gameplay & HUD System**:
    - Custom first-person crosshair interaction (`WBP_Crosshair`).
    - Dynamic in-world gamified spelling and trivia challenges (`WBP_SpellingChallenge`).
    - Animated reward feedback modals (`WBP_Reward`).
    - Stateful interactable world actors (`BP_Beer`, `BP_Violation`, `BP_GameMode`, `BP_Game_state`).
- **Key Metrics**:
  - Full first-person 3D gameplay loop with real-time interaction detection.
  - Fully integrated UMG interface with dynamic state machine rewards.

---

### 3. Galactic Crafters: Procedural Space Mining & Crafting (Cross-Engine)
- **Category**: Game Architecture, Procedural Systems & Cross-Engine Development
- **Status**: Completed Coursework & UE Expansion
- **Primary Tech**: Python 3.12, Pygame, PyInstaller, Unreal Engine 5.4 (`Galactic_Crafters.uproject`)
- **GitHub**: [github.com/Amin9127/Galactic-crafters](https://github.com/Amin9127/Galactic-crafters)
- **Local Paths**: `A:\epic games\ue projects\Galactic_Crafters` & `C:\Users\amina\Desktop\coding stuff\Galactic-crafters`
- **Problem**: Creating an engaging space exploration sandbox requires balancing procedural asteroid distribution, resource harvesting loops, inventory crafting trees, and performant collision physics.
- **Architecture & Highlights**:
  - **Dual-Engine Evolution**: Originally architected as a complete 2D procedural game in Python/Pygame, then expanded into Unreal Engine 5.4 with 3D modeling tools.
  - **Core Systems**:
    - Procedural asteroid field generation with varied resource drop probabilities.
    - Modular inventory and crafting tree with component state persistence.
    - Player ship physics (thrust, inertia, rotational drag).
    - Standalone desktop compilation and distribution via PyInstaller.
- **Key Metrics**:
  - Deterministic game loop with clean spatial entity updates.
  - Multi-tier crafting tree with full save-state serialization.

---

### 4. StarterFactory & TCP Networked System (`StarterFactory_Build`)
- **Category**: Distributed Systems, Inter-Process Communication & 3D Simulation
- **Status**: Production Utility & Simulation
- **Primary Tech**: Unreal Engine, Java (JDK), TCP/IP Sockets, Win64 Native Executable
- **Repository / Path**: `A:\epic games\ue projects\StarterFactory_Build`
- **Problem**: Connecting 3D game engines with external enterprise or network controllers requires lightweight, reliable socket communication that bridges native game binaries with managed backend runtimes.
- **Architecture & Highlights**:
  - **Custom Java TCP Socket Client (`TCPClient.java`)**: Manages high-throughput, asynchronous client-server socket communication with packet framing and heartbeat verification.
  - **Unreal Engine Factory Simulation (`StarterFactory.exe`)**: Receives real-time telemetry and command payloads over TCP to control factory machinery and simulation states.
  - Demonstrates cross-platform systems programming between Java networking and native C++/Unreal binaries.

---

### 5. AI Code Review & Reasoning Evaluation Pipeline (`Outlier AI / Project Aether`)
- **Category**: AI Engineering & LLM Benchmarking
- **Status**: Active Industry Role
- **Primary Tech**: Python, Java, Prompt Engineering, RLHF Evaluation, Multimodal / TTS Benchmarking
- **Description**: High-trust technical evaluator auditing LLM-generated code and multi-turn reasoning chains. Specializes in detecting silent runtime exceptions, memory leaks, algorithmic edge-case failures, and alignment drift in frontier models.
- **Key Highlights**:
  - Audited thousands of multi-turn code generation prompts across Python and Java.
  - Evaluated frontier multimodal and TTS voice models with comprehensive qualitative scoring.
  - Deep first-hand intuition for where prompt chains break and how production LLM applications fail.

---

### 6. Hack-A-Health Hackathon Platform (`Hack-A-Health-hackathon`)
- **Category**: Collaborative Engineering & Rapid Prototyping
- **Status**: Completed Hackathon Project
- **Primary Tech**: JavaScript, Full-Stack Web, Health Data APIs
- **GitHub**: [github.com/Amin9127/Hack-A-Health-hackathon](https://github.com/Amin9127/Hack-A-Health-hackathon)
- **Description**: Rapidly prototyped healthcare software solution designed and built during a time-constrained competitive hackathon to streamline patient metrics and health management.
