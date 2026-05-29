# D.K. Singh Web Hub & Operations Assistant

A premium, interactive personal hub and operations assistant dashboard custom-built for **Mr. D.K. Singh**, a seasoned Mining and Coal Operations Leader with over 35 years of experience in the Indian coal mining sector at **Coal India Limited (CIL)** and its subsidiaries, **Central Coalfields Limited (CCL)** and **SECL**.

This hub serves as a comprehensive professional profile, a daily operations utility, and an educational Excel assistance tool designed specifically to support mining logistics, coal dispatch coordination, pension tracking, and document drafting.

---

## 🚀 Key Modules & Features

### 1. Professional Profile & Career Milestones
- **Interactive Bio Card:** Showcases Mr. Singh's accomplishments, expertise in mine operations, dispatch logistics, railway rake management, and safety regulations.
- **Career Progression Tracker:** Visually logs his career journey in Coal India:
  $$\text{Mining Sardar} \rightarrow \text{Senior Mining Sardar} \rightarrow \text{Overman} \rightarrow \text{Senior Overman} \rightarrow \text{Manager} \rightarrow \text{Dispatch Officer}$$
- **Direct Correspondence Action:** Integrated WhatsApp and Email shortcuts to initiate immediate messaging and professional coordination.

### 2. Correspondence & Dispatch Drafter
- **AI-Powered Translation & Formatting:** Solves the challenge of drafting formal operational letters. Translates loose, informal "Hinglish" commands into highly polished, formal English business letters.
- ** CCL-Tailored Quick Drafts:** Features ready-to-use template macros specifically designed for dispatch officers (e.g., railway rake delays, quality reconciliation, safety reports, and demurrage issues).

### 3. CIL Stock Ticker & Custom Watchlist
- **Ticking Stock Dashboard:** A live market tracker simulating real-time price updates for CIL and subsidiary stocks.
- **Customizable Watchlist Grid:** Enables users to search for any stock symbol (e.g., `TATASTEEL`, `NTPC`, `INFY`), validate details via a search confirmation dialog, and append them as modular cards (tiles) showing real-time price fluctuations and trend indicators (▲/▼).
- **Google Finance Drilldown:** Displays detailed market analytics upon clicking a symbol, linking directly to official financial pages.
- **Watchlist Persistence:** Saves watchlists automatically in browser `localStorage`.

### 4. EPFO & CMPF Pension Sync
- **Simulated Secured Gateway:** Integrates an animated progress stepper simulating secure connection protocols, token validation, SSL tunneling, and balance downloads using UAN credentials and CAPTCHAs.
- **PF Passbook Ledger:** Post-synchronization, displays a detailed ledger breaking down contributions:
  - Employee Share
  - Employer Share
  - Pension Fund Share
- **Contribution History:** Renders a 6-month contribution table showing deposits made by Central Coalfields Limited (CCL).
- **Session Control:** Supports logging out and clearing session data with secure persistent states across page reloads.

### 5. Interactive Excel Cheatsheet & Simulator
- **24 Formula Cards:** Comprehensive guides grouped into dynamic categories: *Formula Reference*, *Text Operations*, *Text Case Operations*, *Data Operations*, and *Data Security*.
- **Filter Navigation Bar:** Interactive glassmorphic pill buttons and clickable card badges allow users to filter formulas instantly.
- **Interactive Grid Simulators:** Every formula card contains an embedded interactive visual spreadsheet grid simulator showing input values, syntax bars, and animated output calculations in real-time when the **Run Simulation** button is clicked.
- **GenAI Solver Panel:** An integrated fuzzy search engine that matches typos (e.g., searching "loko" finds `VLOOKUP`) and generates step-by-step application instructions, input-output outcome tables, and triggers the live spreadsheet simulator directly from search results.

---

## 🛠️ Technology Stack

- **Frontend Core:** Pure HTML5 (Semantic Structure)
- **Styling & Theme:** Vanilla CSS3 featuring a custom Glassmorphic Dark & Navy theme, custom CSS variables, and fluid transitions.
- **Logic & Animation:** Vanilla ES6 Javascript (No heavy framework dependencies, ensuring lightweight load times).
- **Persistence:** LocalStorage API for Stock watchlists and PF Sync states.

---

## 🏃 Running the Project Locally

To run the application locally, you can use any static file server. For example:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adks001/Dksingh_websupport.git
   cd Dksingh_websupport
   ```

2. **Start a local HTTP server:**
   - Using Python 3:
     ```bash
     python3 -m http.server 8090
     ```
   - Using Node.js (via `http-server`):
     ```bash
     npx http-server -p 8090
     ```

3. **Open in browser:**
   Navigate to [http://localhost:8090](http://localhost:8090) in your web browser.
