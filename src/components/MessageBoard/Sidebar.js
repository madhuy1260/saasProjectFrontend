import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="workspace">Acme Inc</div>
      <div className="nav-section">
        <div className="nav-item selected"># social-media</div>
        <div className="nav-item"># announcements</div>
        <div className="nav-item"># design-crit</div>
        <div className="nav-item"># media-and-pr</div>
        <div className="nav-item"># team-marketing</div>
      </div>
      <div className="dms">
        <div className="dm-header">Direct messages</div>
        <div className="dm-item">Lee Hao</div>
      </div>
    </div>
  );
}

export default Sidebar;