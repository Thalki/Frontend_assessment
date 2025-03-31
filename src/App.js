import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import PortfolioTable from "./components/PortfolioTable";
import UploadSection from "./components/UploadSection";
import "./styles.css";

function App() {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className={`app ${showUpload ? "overlay-active" : ""}`}>
      <Sidebar />
      <div className="main-content">
        <Topbar toggleUpload={() => setShowUpload(!showUpload)} />
        <div className="content-area">
          <PortfolioTable />
        </div>
      </div>
      <UploadSection show={showUpload} close={() => setShowUpload(false)} />
      {showUpload && <div className="overlay" onClick={() => setShowUpload(false)}></div>}
    </div>
  );
}

export default App;


