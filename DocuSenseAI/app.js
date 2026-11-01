const STORAGE_KEY = "docusense-prototype-v1";
const CATEGORIES = [
  "Annual Budget Plan (ABP)",
  "Annual Barangay Youth Investment Program (ABYIP)",
  "Comprehensive Barangay Youth Development Plan (CBYDP)",
  "Constitution and By-laws",
  "List of Members",
  "List of Officers",
  "Other",
];
const URGENCY = ["High", "Medium", "Low"];
const CLASSIFICATIONS = [
  "In-School Youth",
  "Out-of-School Youth",
  "Youth with Disability",
  "Indigenous Peoples Youth",
  "Working Youth",
  "Unemployed Youth",
];
const BARANGAYS = ["Poblacion", "Barangay 2", "Barangay 3", "Barangay 4", "Barangay 5"];
const DEFAULT_OFFICES = ["LYDO", "LGU Planning Office", "Municipal Budget Office", "Sangguniang Bayan"];
const DEFAULT_USERS = [
  { id: "USR-001", name: "Maria Santos", email: "maria.santos@example.invalid", role: "LYDO Officer", status: "Active" },
  { id: "USR-002", name: "Demo SK Chairperson", email: "sk-chair@example.invalid", role: "SK Chairperson", status: "Active" },
  { id: "USR-003", name: "Demo Planning Officer", email: "planner@example.invalid", role: "LGU Planning Office", status: "Active" },
];
const ROLES = [
  { value: "lydo", label: "LYDO Officer", display: "LYDO Officer · Admin" },
  { value: "sk", label: "SK Chairperson", display: "SK Chairperson" },
  { value: "planning", label: "LGU Planning", display: "LGU Planning Office" },
];
const SEED_DOCUMENTS = [
  {
    id: "DOC-2026-0148", name: "CBYDP_Poblacion_2026.pdf", type: "PDF", size: "2.4 MB",
    category: CATEGORIES[2], categoryConfidence: 0.96, urgency: "High", urgencyConfidence: 0.89,
    status: "Needs review", sender: "SK Chairperson · Poblacion", submitted: "Today, 9:42 AM",
    receivedAt: "2026-11-01T09:42:00.000+08:00", offices: [], verifiedBy: "", summary: "Comprehensive Barangay Youth Development Plan with proposed program timeline and immediate funding review.",
  },
  {
    id: "DOC-2026-0147", name: "ABYIP_2026_Brgy-3.xlsx", type: "XLSX", size: "860 KB",
    category: CATEGORIES[1], categoryConfidence: 0.91, urgency: "Medium", urgencyConfidence: 0.82,
    status: "Needs review", sender: "SK Chairperson · Barangay 3", submitted: "Today, 8:16 AM",
    receivedAt: "2026-11-01T08:16:00.000+08:00", offices: [], verifiedBy: "", summary: "Annual investment program and proposed youth activities for the coming year.",
  },
  {
    id: "DOC-2026-0146", name: "Youth_Org_Constitution.docx", type: "DOCX", size: "412 KB",
    category: CATEGORIES[3], categoryConfidence: 0.88, urgency: "Low", urgencyConfidence: 0.77,
    status: "Needs review", sender: "SK Chairperson · Barangay 2", submitted: "Yesterday, 3:28 PM",
    receivedAt: "2026-10-31T15:28:00.000+08:00", offices: [], verifiedBy: "", summary: "Constitution and by-laws submitted for youth organization registration.",
  },
  {
    id: "DOC-2026-0145", name: "Annual_Budget_Plan_2026.pdf", type: "PDF", size: "1.1 MB",
    category: CATEGORIES[0], categoryConfidence: 0.94, urgency: "Medium", urgencyConfidence: 0.86,
    status: "Routed", sender: "SK Chairperson · Barangay 4", submitted: "Yesterday, 11:03 AM",
    receivedAt: "2026-10-31T11:03:00.000+08:00", offices: ["LYDO", "Municipal Budget Office"], verifiedBy: "Maria Santos", summary: "Annual budget plan submitted for LYDO and municipal budget review.",
  },
  {
    id: "DOC-2026-0144", name: "List_of_Officers.pdf", type: "PDF", size: "630 KB",
    category: CATEGORIES[5], categoryConfidence: 0.90, urgency: "Low", urgencyConfidence: 0.78,
    status: "In progress", sender: "SK Chairperson · Barangay 5", submitted: "Oct 30, 2:14 PM",
    receivedAt: "2026-10-30T14:14:00.000+08:00", offices: ["LYDO"], verifiedBy: "Maria Santos", summary: "Updated list of youth organization officers for records.",
  },
  {
    id: "DOC-2026-0143", name: "ABYIP_2026_Mandahican.pdf", type: "PDF", size: "1.8 MB",
    category: CATEGORIES[1], categoryConfidence: 0.95, urgency: "High", urgencyConfidence: 0.91,
    status: "Completed", sender: "SK Chairperson · Barangay 3", submitted: "Oct 29, 10:02 AM",
    receivedAt: "2026-10-29T10:02:00.000+08:00", offices: ["LYDO", "LGU Planning Office"], verifiedBy: "Maria Santos", summary: "Annual youth investment program; time-sensitive budget review requested.",
  },
];
const SEED_YOUTH = [
  { id: "Y-001", name: "Demo Resident 01", birthdate: "2003-04-12", sex: "Female", civilStatus: "Single", barangay: "Poblacion", contact: "Demo only", email: "resident01@example.invalid", education: "College", employment: "Student", skills: "Community organizing", classification: "In-School Youth" },
  { id: "Y-002", name: "Demo Resident 02", birthdate: "2000-09-26", sex: "Male", civilStatus: "Single", barangay: "Barangay 2", contact: "Demo only", email: "resident02@example.invalid", education: "Senior high school", employment: "Unemployed", skills: "Sports", classification: "Unemployed Youth" },
  { id: "Y-003", name: "Demo Resident 03", birthdate: "2005-01-08", sex: "Female", civilStatus: "Single", barangay: "Barangay 3", contact: "Demo only", email: "resident03@example.invalid", education: "High school", employment: "Student", skills: "Arts and crafts", classification: "In-School Youth" },
  { id: "Y-004", name: "Demo Resident 04", birthdate: "1998-06-17", sex: "Male", civilStatus: "Single", barangay: "Poblacion", contact: "Demo only", email: "resident04@example.invalid", education: "College", employment: "Employed", skills: "Agriculture", classification: "Working Youth" },
  { id: "Y-005", name: "Demo Resident 05", birthdate: "2002-11-03", sex: "Female", civilStatus: "Single", barangay: "Barangay 4", contact: "Demo only", email: "resident05@example.invalid", education: "College", employment: "Student", skills: "Volunteering", classification: "Indigenous Peoples Youth" },
  { id: "Y-006", name: "Demo Resident 06", birthdate: "2004-02-20", sex: "Male", civilStatus: "Single", barangay: "Barangay 5", contact: "Demo only", email: "resident06@example.invalid", education: "Senior high school", employment: "Student", skills: "Music", classification: "In-School Youth" },
  { id: "Y-007", name: "Demo Resident 07", birthdate: "1999-12-14", sex: "Female", civilStatus: "Single", barangay: "Barangay 2", contact: "Demo only", email: "resident07@example.invalid", education: "College", employment: "Employed", skills: "Entrepreneurship", classification: "Working Youth" },
  { id: "Y-008", name: "Demo Resident 08", birthdate: "2001-07-05", sex: "Male", civilStatus: "Single", barangay: "Barangay 3", contact: "Demo only", email: "resident08@example.invalid", education: "High school", employment: "Unemployed", skills: "Sports", classification: "Out-of-School Youth" },
  { id: "Y-009", name: "Demo Resident 09", birthdate: "2006-03-29", sex: "Female", civilStatus: "Single", barangay: "Poblacion", contact: "Demo only", email: "resident09@example.invalid", education: "High school", employment: "Student", skills: "Public speaking", classification: "In-School Youth" },
];

const app = document.querySelector("#app");
const toastRegion = document.querySelector("#toast-region");
const state = {
  view: "overview",
  modal: "",
  selectedDocument: "",
  role: "lydo",
  documentFilter: "All",
  documentSearch: "",
  youthSearch: "",
  youthBarangay: "All barangays",
  auditCheck: null,
  data: loadData(),
};

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      if (Array.isArray(data.documents) && Array.isArray(data.youth) && Array.isArray(data.audit) && Array.isArray(data.offices)) {
        data.users ||= structuredClone(DEFAULT_USERS);
        data.nextUser ||= 4;
        return data;
      }
    }
  } catch (error) {
    console.error("Could not read the saved DocuSense prototype data.", error);
    window.setTimeout(() => notify("Saved demo data could not be loaded. Refresh to try again.", "error"), 0);
  }
  return { documents: structuredClone(SEED_DOCUMENTS), youth: structuredClone(SEED_YOUTH), audit: [], offices: [...DEFAULT_OFFICES], users: structuredClone(DEFAULT_USERS), nextDocument: 149, nextYouth: 10, nextUser: 4 };
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
    return true;
  } catch (error) {
    console.error("Could not save DocuSense prototype data.", error);
    throw new Error("Could not save changes in this browser. Check available storage.", { cause: error });
  }
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function percent(value) { return `${Math.round((Number(value) || 0) * 100)}%`; }
function roleInfo() { return ROLES.find((role) => role.value === state.role) || ROLES[0]; }
function canVerify() { return state.role === "lydo"; }
function canEditRecords() { return state.role !== "planning"; }
function isLowConfidence(doc) { return doc.categoryConfidence < 0.7 || doc.urgencyConfidence < 0.7; }
function notify(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast${type === "error" ? " error" : ""}`;
  toast.textContent = message;
  toastRegion.append(toast);
  window.setTimeout(() => toast.remove(), 3400);
}
function urgencyPill(urgency) {
  const kind = urgency.toLowerCase();
  return `<span class="pill pill-${kind}">${escapeHTML(urgency)} priority</span>`;
}
function statusPill(status) {
  const className = status === "Needs review" ? "pill-amber" : status === "Routed" ? "pill-blue" : status === "In progress" ? "pill-medium" : "pill-green";
  return `<span class="pill ${className === "pill-amber" ? "pill-medium" : className}">${escapeHTML(status)}</span>`;
}
function categoryShort(category) {
  const found = category.match(/\(([^)]+)\)/);
  return found ? found[1] : category;
}
function titleCaseDate() {
  return new Intl.DateTimeFormat("en-PH", { weekday: "short", month: "short", day: "numeric", year: "numeric" }).format(new Date());
}
function filteredDocuments() {
  const query = state.documentSearch.toLowerCase().trim();
  return state.data.documents.filter((doc) => {
    const matchesFilter = state.documentFilter === "All"
      || (state.documentFilter === "Needs review" && doc.status === "Needs review")
      || (state.documentFilter === "Routed" && doc.status !== "Needs review");
    const matchesQuery = !query || `${doc.name} ${doc.category} ${doc.sender} ${doc.id}`.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });
}
function activeViewInfo() {
  return {
    overview: ["Overview", "Your document workflow and YDIS activity at a glance."],
    documents: ["Documents", "Review incoming submissions, verify predictions, and route to the right offices."],
    youth: ["Youth registry", "Maintain a privacy-conscious profile of the municipality’s youth population."],
    reports: ["Reports & statistics", "Explore aggregate youth counts by barangay and NYC classification."],
    audit: ["Audit ledger", "Follow every key workflow action through a verifiable, hash-chained record."],
    settings: ["Administration", "Manage demo offices and see which roles can access each workflow."],
  }[state.view];
}

function render() {
  const [viewTitle] = activeViewInfo();
  const needsReview = state.data.documents.filter((doc) => doc.status === "Needs review").length;
  const roleOptions = ROLES.map((role) => `<option value="${role.value}"${state.role === role.value ? " selected" : ""}>${escapeHTML(role.display)}</option>`).join("");
  app.innerHTML = `
    <aside class="sidebar">
      <div class="brand"><div class="brand-mark">D</div><div><div class="brand-name">DocuSense AI</div><div class="brand-sub">LYDO CABANGLASAN</div></div></div>
      <div class="workspace-label">Workspace</div>
      <nav class="nav-list" aria-label="Main navigation">
        ${navItem("overview", "◫", "Overview")}
        ${navItem("documents", "▤", "Documents", needsReview)}
        ${navItem("youth", "♧", "Youth registry")}
        ${navItem("reports", "▥", "Reports")}
        ${navItem("audit", "◷", "Audit ledger")}
        ${navItem("settings", "⚙", "Administration")}
      </nav>
      <div class="sidebar-bottom">
        <div class="pilot-card"><div class="pilot-kicker">Pilot workspace</div><div class="pilot-title">Youth Digital Information System</div><p class="pilot-copy">A local prototype for the LYDO of Cabanglasan, Bukidnon.</p></div>
        <div class="profile-mini"><div class="avatar">MS</div><div><div class="profile-name">Maria Santos</div><div class="profile-role">${escapeHTML(roleInfo().label)}</div></div></div>
      </div>
    </aside>
    <div class="main-area">
      <header class="topbar"><div class="crumb">LYDO workspace <span aria-hidden="true">/</span> <strong>${escapeHTML(viewTitle)}</strong></div>
        <div class="top-actions"><label class="sr-only" for="role-select">Preview role</label><select class="role-select" id="role-select" aria-label="Preview role">${roleOptions}</select><div class="top-date">${escapeHTML(titleCaseDate())}</div></div>
      </header>
      <main class="content">${renderView()}</main>
    </div>
    ${renderModal()}
    ${renderDrawer()}
  `;
}

function navItem(view, icon, label, count = 0) {
  return `<button type="button" class="nav-item${state.view === view ? " active" : ""}" data-view="${view}"><span class="nav-icon" aria-hidden="true">${icon}</span><span>${label}</span>${count > 0 ? `<span class="nav-count">${count}</span>` : ""}</button>`;
}

function renderView() {
  switch (state.view) {
    case "documents": return renderDocuments();
    case "youth": return renderYouth();
    case "reports": return renderReports();
    case "audit": return renderAudit();
    case "settings": return renderSettings();
    default: return renderOverview();
  }
}

function pageHeading(title, description, button = "") {
  return `<div class="page-heading"><div><div class="eyebrow">DocuSense AI · Cabanglasan, Bukidnon</div><h1>${title}</h1><p class="page-description">${description}</p></div>${button}</div>`;
}
function overviewStats() {
  const review = state.data.documents.filter((doc) => doc.status === "Needs review").length;
  const urgent = state.data.documents.filter((doc) => doc.urgency === "High" && doc.status !== "Completed").length;
  const routed = state.data.documents.filter((doc) => doc.status !== "Needs review").length;
  return `<div class="stats-grid">
    ${statCard("Total submissions", state.data.documents.length, "▤", "Across all document categories")}
    ${statCard("Awaiting review", review, "◷", `${urgent} marked high priority`, urgent ? "Needs attention" : "")}
    ${statCard("Routed to offices", routed, "↗", "Human-verified submissions")}
    ${statCard("Youth profiles", state.data.youth.length, "♧", "Dummy records for this demo")}
  </div>`;
}
function statCard(label, value, icon, foot, strong = "") {
  return `<section class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon">${icon}</span></div><div class="stat-value">${value}</div><div class="stat-foot">${strong ? `<strong>${strong}</strong> · ` : ""}${foot}</div></section>`;
}
function renderOverview() {
  const docs = [...state.data.documents]
    .filter((doc) => doc.status === "Needs review")
    .sort((a, b) => URGENCY.indexOf(a.urgency) - URGENCY.indexOf(b.urgency))
    .slice(0, 4);
  const classCounts = countBy(state.data.youth, "classification");
  const total = state.data.youth.length;
  const labels = Object.entries(classCounts).sort((a, b) => b[1] - a[1]).slice(0, 4);
  const workflow = [
    ["01", "Submitted", state.data.documents.length],
    ["02", "AI triage", state.data.documents.length],
    ["03", "Human review", state.data.documents.filter((doc) => doc.status === "Needs review").length],
    ["04", "Routed", state.data.documents.filter((doc) => doc.status !== "Needs review").length],
  ];
  return `${pageHeading("Good day, Maria <span aria-hidden=\"true\">☀</span>", "Here’s what’s happening across your document workflows today.", `<button class="button button-primary" data-action="open-upload">＋ Upload document</button>`)}
    ${overviewStats()}
    <div class="grid-two">
      <section class="panel"><div class="panel-head"><div><h2 class="panel-title">Priority review queue</h2><p class="panel-subtitle">AI suggestions are never routed without your review.</p></div><button class="link-button" data-view="documents">View inbox →</button></div>
        <div class="priority-list">${docs.length ? docs.map((doc) => priorityRow(doc)).join("") : `<div class="empty-state">Your review queue is clear.</div>`}</div>
        <div class="panel-footer"><span>Confidence under 70% is flagged for closer review.</span><span>${docs.length} awaiting</span></div>
      </section>
      <section class="panel"><div class="panel-head"><div><h2 class="panel-title">YDIS youth snapshot</h2><p class="panel-subtitle">Municipal registry · demo records</p></div><button class="link-button" data-view="reports">View reports →</button></div>
        ${renderDonutSnapshot(classCounts, total)}
      </section>
    </div>
    <section class="panel"><div class="panel-head"><div><h2 class="panel-title">Document workflow</h2><p class="panel-subtitle">Every submission moves through authorized human verification.</p></div><span class="pill pill-green">Human-in-the-loop</span></div>
      <div class="workflow-strip">${workflow.map(([number, label, count]) => `<div class="workflow-step"><div class="workflow-number">${number}</div><div class="workflow-name">${label}</div><div class="workflow-count">${count} documents</div></div>`).join("")}</div>
      <div class="panel-footer"><span>Latest activity · ${escapeHTML(state.data.audit.at(-1)?.event || "Demo workspace ready")}</span><button class="link-button" data-view="audit">Open audit ledger →</button></div>
    </section>
    <div class="privacy-note">Privacy notice: all youth profiles shown here are fictional demo records. Do not enter real personal or sensitive information into this browser-only prototype.</div>`;
}
function priorityRow(doc) {
  return `<div class="priority-row" role="button" tabindex="0" data-open-document="${escapeHTML(doc.id)}"><div><div class="doc-title">${escapeHTML(doc.name)}</div><div class="doc-meta">${escapeHTML(doc.sender)} · ${escapeHTML(doc.submitted)}</div></div><div class="doc-category">${escapeHTML(categoryShort(doc.category))}</div>${urgencyPill(doc.urgency)}<span class="chevron">›</span></div>`;
}
function renderDonutSnapshot(counts, total) {
  const palette = ["#2c7355", "#82b896", "#d2e6d8", "#f0c98e", "#8ba6c2", "#d4dde2"];
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 4);
  const segments = entries.map(([, count], index) => {
    const before = entries.slice(0, index).reduce((sum, item) => sum + item[1], 0);
    return `${palette[index]} ${total ? (before / total) * 100 : 0}% ${total ? ((before + count) / total) * 100 : 0}%`;
  });
  return `<div class="youth-snapshot"><div class="donut-wrap"><div class="donut" style="background:conic-gradient(${segments.join(",") || "#e8ece8 0 100%"})"></div><div class="donut-center"><strong>${total}</strong><span>youth</span></div></div>
    <div class="legend">${entries.map(([label, count], index) => `<div class="legend-row"><span class="legend-label"><span class="legend-dot" style="background:${palette[index]}"></span>${escapeHTML(label)}</span><span class="legend-count">${count}</span></div>`).join("") || `<div class="empty-state">No profiles yet</div>`}</div></div>`;
}

function renderDocuments() {
  const docs = filteredDocuments();
  const filters = ["All", "Needs review", "Routed"];
  return `${pageHeading("Document inbox", "Review, verify, and route incoming LGU and SK submissions.", `<button class="button button-primary" data-action="open-upload">＋ Upload document</button>`)}
    <div class="toolbar"><div class="toolbar-left"><div class="filter-tabs">${filters.map((filter) => `<button class="filter-tab${state.documentFilter === filter ? " active" : ""}" data-doc-filter="${escapeHTML(filter)}">${filter}</button>`).join("")}</div></div>
      <div class="toolbar-right"><input class="search-input" type="search" id="document-search" placeholder="Search documents…" value="${escapeHTML(state.documentSearch)}" aria-label="Search documents"><button class="button button-secondary" data-action="open-upload">＋ Add submission</button></div></div>
    <section class="table-panel"><div class="table-wrap"><table><thead><tr><th>Document</th><th>AI category</th><th>Priority</th><th>Confidence</th><th>Submitted by</th><th>Status</th><th></th></tr></thead><tbody>
      ${docs.length ? docs.map((doc) => documentTableRow(doc)).join("") : `<tr><td colspan="7"><div class="empty-state">No matching documents. Try another filter or upload a submission.</div></td></tr>`}
    </tbody></table></div><div class="table-bottom"><span>Showing ${docs.length} of ${state.data.documents.length} submissions</span><span>PDF · DOCX · XLS · XLSX</span></div></section>
    <div class="privacy-note">Demo classifier: predictions use document filename and optional notes only. Real text extraction, OCR, and trained logistic regression require the project backend. Every upload still requires LYDO verification before routing.</div>`;
}
function documentTableRow(doc) {
  const confidence = Math.min(doc.categoryConfidence, doc.urgencyConfidence);
  return `<tr data-open-document="${escapeHTML(doc.id)}"><td><div class="table-primary">${escapeHTML(doc.name)}</div><div class="table-secondary">${escapeHTML(doc.id)} · ${escapeHTML(doc.submitted)}</div></td>
    <td>${escapeHTML(categoryShort(doc.category))}${isLowConfidence(doc) ? ` <span class="pill pill-medium">Review</span>` : ""}</td><td>${urgencyPill(doc.urgency)}</td>
    <td><span class="confidence${confidence < 0.7 ? " low" : ""}"><span class="confidence-dot"></span>${percent(confidence)}</span></td>
    <td>${escapeHTML(doc.sender)}</td><td>${statusPill(doc.status)}</td><td class="chevron">›</td></tr>`;
}

function renderModal() {
  if (!state.modal) return "";
  if (state.modal === "upload") return uploadModal();
  if (state.modal === "youth") return youthModal();
  if (state.modal === "office") return officeModal();
  if (state.modal === "user") return userModal();
  return "";
}
function uploadModal() {
  return `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-stop-close>
    <div class="modal-head"><div><h2 class="modal-title" id="modal-title">Upload a submission</h2><p class="modal-copy">Supported files: PDF, DOCX, XLS, and XLSX. The LYDO officer verifies all AI suggestions before routing.</p></div><button class="icon-button" data-action="close-modal" aria-label="Close">×</button></div>
    <form id="upload-form"><div class="form-grid">
      <div class="field field-full"><label for="document-file">Choose document</label><div class="upload-drop"><input id="document-file" type="file" accept=".pdf,.docx,.xls,.xlsx" required><div class="field-hint">Maximum demo size: 15 MB. Files stay in this browser and are not sent to a server.</div></div></div>
      <div class="field field-full"><label for="document-sender">Submitted by</label><input id="document-sender" value="${state.role === "sk" ? "SK Chairperson · Poblacion" : "SK Chairperson · Poblacion"}" required></div>
      <div class="field field-full"><label for="document-notes">Document context <span class="field-hint">(optional)</span></label><textarea id="document-notes" placeholder="Paste a short, non-sensitive summary to improve the demo suggestion."></textarea></div>
    </div><div class="upload-note">Demo limitation: this prototype does not extract text from PDF/DOCX/Excel or run the study’s trained model. Predictions are heuristic suggestions from the filename and notes. Do not upload documents containing real personal data.</div>
      <div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancel</button><button type="submit" class="button button-primary">Upload & classify</button></div></form>
  </section></div>`;
}
function youthModal() {
  return `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-stop-close>
    <div class="modal-head"><div><h2 class="modal-title" id="modal-title">Register youth profile</h2><p class="modal-copy">Capture the YDIS fields described in the study. Age is calculated from date of birth; the pilot is for ages 15–30.</p></div><button class="icon-button" data-action="close-modal" aria-label="Close">×</button></div>
    <form id="youth-form"><div class="form-grid">
      <div class="field field-full"><label for="youth-name">Full name</label><input id="youth-name" required placeholder="Demo Resident"></div>
      <div class="field"><label for="youth-birthdate">Birthdate</label><input id="youth-birthdate" type="date" required max="${new Date().toISOString().slice(0, 10)}"><span id="age-hint" class="field-hint">Age will appear after selecting a birthdate.</span></div>
      <div class="field"><label for="youth-sex">Sex</label><select id="youth-sex" required><option value="">Select</option><option>Female</option><option>Male</option><option>Prefer not to say</option></select></div>
      <div class="field"><label for="youth-civil">Civil status</label><select id="youth-civil" required><option value="">Select</option><option>Single</option><option>Married</option><option>Widowed</option><option>Separated</option></select></div>
      <div class="field"><label for="youth-profile-barangay">Barangay</label><select id="youth-profile-barangay" required>${BARANGAYS.map((value) => `<option>${escapeHTML(value)}</option>`).join("")}</select></div>
      <div class="field"><label for="youth-contact">Contact number</label><input id="youth-contact" placeholder="Optional in demo"></div>
      <div class="field"><label for="youth-email">Email address</label><input id="youth-email" type="email" placeholder="Optional in demo"></div>
      <div class="field"><label for="youth-education">Educational attainment</label><select id="youth-education" required><option value="">Select</option><option>Elementary</option><option>Junior high school</option><option>Senior high school</option><option>College</option><option>Technical-vocational</option><option>Other</option></select></div>
      <div class="field"><label for="youth-employment">Employment status</label><select id="youth-employment" required><option value="">Select</option><option>Student</option><option>Employed</option><option>Self-employed</option><option>Unemployed</option></select></div>
      <div class="field"><label for="youth-classification">NYC youth classification</label><select id="youth-classification" required>${CLASSIFICATIONS.map((value) => `<option>${escapeHTML(value)}</option>`).join("")}</select></div>
      <div class="field field-full"><label for="youth-skills">Skills and interests</label><textarea id="youth-skills" placeholder="Optional"></textarea></div>
    </div><div class="privacy-note">Use fictional data only in this demo. Disability and Indigenous Peoples information are sensitive personal information; real records require LYDO authorization, appropriate consent, and privacy safeguards.</div>
    <div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancel</button><button type="submit" class="button button-primary">Save profile</button></div></form>
  </section></div>`;
}
function officeModal() {
  return `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-stop-close>
    <div class="modal-head"><div><h2 class="modal-title" id="modal-title">Add receiving office</h2><p class="modal-copy">Add an office to the prototype routing list.</p></div><button class="icon-button" data-action="close-modal" aria-label="Close">×</button></div>
    <form id="office-form"><div class="field"><label for="office-name">Office name</label><input id="office-name" required maxlength="70" placeholder="e.g. Municipal Agriculture Office"></div><div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancel</button><button type="submit" class="button button-primary">Add office</button></div></form>
  </section></div>`;
}
function userModal() {
  return `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-stop-close>
    <div class="modal-head"><div><h2 class="modal-title" id="modal-title">Add workspace user</h2><p class="modal-copy">Create a local demo account record. Authentication and invitations are not connected in this prototype.</p></div><button class="icon-button" data-action="close-modal" aria-label="Close">×</button></div>
    <form id="user-form"><div class="form-grid">
      <div class="field field-full"><label for="user-name">Full name</label><input id="user-name" required maxlength="80" placeholder="Workspace user"></div>
      <div class="field field-full"><label for="user-email">Email address</label><input id="user-email" required type="email" placeholder="user@example.invalid"></div>
      <div class="field field-full"><label for="user-role">Workspace role</label><select id="user-role" required>${ROLES.map((role) => `<option>${escapeHTML(role.label)}</option>`).join("")}</select></div>
    </div><div class="privacy-note">Do not use real credentials here. This only records the demo user’s name, email, role, and active status in local browser storage.</div>
    <div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancel</button><button type="submit" class="button button-primary">Add user</button></div></form>
  </section></div>`;
}

function renderDrawer() {
  const doc = state.data.documents.find((item) => item.id === state.selectedDocument);
  if (!doc) return "";
  const routed = doc.status !== "Needs review";
  const reviewControls = canVerify() && !routed
    ? `<div class="drawer-section"><h3 class="drawer-section-title">Verify AI suggestion</h3>
        <div class="field" style="margin-bottom:10px"><label for="review-category">Document category</label><select id="review-category">${CATEGORIES.map((category) => `<option${doc.category === category ? " selected" : ""}>${escapeHTML(category)}</option>`).join("")}</select></div>
        <div class="field"><label for="review-urgency">Urgency</label><select id="review-urgency">${URGENCY.map((urgency) => `<option${doc.urgency === urgency ? " selected" : ""}>${urgency}</option>`).join("")}</select></div>
      </div><div class="drawer-section"><h3 class="drawer-section-title">Route to office${state.data.offices.length > 1 ? "s" : ""}</h3>
        <div class="office-checks">${state.data.offices.map((office, index) => `<label class="check-option"><input type="checkbox" name="route-office" value="${escapeHTML(office)}"${(doc.offices.length ? doc.offices.includes(office) : index === 0) ? " checked" : ""}>${escapeHTML(office)}</label>`).join("")}</div>
        <div class="field-hint" style="margin-top:8px">Select one office for standard routing, or several for parallel review.</div>
      </div><button class="button button-primary" style="width:100%" data-action="verify-route" data-doc-id="${escapeHTML(doc.id)}">✓ Verify & route</button>`
    : `<div class="drawer-section"><h3 class="drawer-section-title">Routing details</h3><div class="field" style="margin-bottom:11px"><label>Assigned office${doc.offices.length > 1 ? "s" : ""}</label><div class="field-hint">${escapeHTML(doc.offices.join(" · ") || "Not assigned")}</div></div>
        <div class="field"><label for="document-status">Workflow status</label><select id="document-status" data-status-for="${escapeHTML(doc.id)}">${["Routed", "In progress", "Completed"].map((status) => `<option${doc.status === status ? " selected" : ""}>${status}</option>`).join("")}</select></div>
        <div class="field-hint" style="margin-top:7px">Verified by ${escapeHTML(doc.verifiedBy || "LYDO Officer")} · ${escapeHTML(doc.verifiedAt ? new Date(doc.verifiedAt).toLocaleString() : "previously routed")}</div></div>`
  const steps = ["Submitted", "AI triage", "Human review", "Routed"];
  const currentStep = routed ? 4 : 2;
  return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" data-stop-close>
    <div class="drawer-close"><div><div class="eyebrow">Submission detail</div><div class="field-hint">${escapeHTML(doc.id)}</div></div><button class="icon-button" data-action="close-drawer" aria-label="Close">×</button></div>
    <div class="drawer-file"><div class="file-icon">${escapeHTML(doc.type)}</div><div><h2 id="drawer-title">${escapeHTML(doc.name)}</h2><p>${escapeHTML(doc.size)} · ${escapeHTML(doc.sender)} · ${escapeHTML(doc.submitted)}</p></div></div>
    <div>${statusPill(doc.status)} &nbsp; ${urgencyPill(doc.urgency)}</div>
    <div class="status-timeline">${steps.map((step, index) => `<div class="timeline-step${index < currentStep ? " done" : ""}">${step}</div>`).join("")}</div>
    <div class="drawer-section"><h3 class="drawer-section-title">AI-assisted triage · human confirmation required</h3>
      <div class="review-summary"><div><span>AI-suggested category</span><strong>${escapeHTML(doc.suggestedCategory || doc.category)}</strong></div><div><span>AI-suggested urgency</span><strong>${escapeHTML(doc.suggestedUrgency || doc.urgency)}</strong></div></div>
      ${routed && ((doc.suggestedCategory && doc.suggestedCategory !== doc.category) || (doc.suggestedUrgency && doc.suggestedUrgency !== doc.urgency)) ? `<div class="upload-note">Human-verified result: ${escapeHTML(doc.category)} · ${escapeHTML(doc.urgency)} priority.</div>` : ""}
      <div class="confidence-card"><div><span>Category confidence</span><strong>${isLowConfidence(doc) ? "Flagged for review" : "Suggestion available"}</strong></div><b style="color:${doc.categoryConfidence < .7 ? "#c7584d" : "#39805c"}">${percent(doc.categoryConfidence)}</b></div>
      <div class="confidence-card"><div><span>Urgency confidence</span><strong>${doc.urgencyConfidence < .7 ? "Flagged for review" : "Suggestion available"}</strong></div><b style="color:${doc.urgencyConfidence < .7 ? "#c7584d" : "#39805c"}">${percent(doc.urgencyConfidence)}</b></div>
      ${isLowConfidence(doc) ? `<div class="upload-note">Low confidence prediction. Please check the source carefully and correct the suggestion before routing.</div>` : ""}
    </div>
    <div class="drawer-section"><h3 class="drawer-section-title">Submission context</h3><div class="field-hint">${escapeHTML(doc.summary || "No additional context was provided.")}</div></div>
    ${reviewControls}
    ${!canVerify() && !routed ? `<div class="upload-note">Only the LYDO Officer can verify AI predictions and route this document. Current preview role: ${escapeHTML(roleInfo().label)}.</div>` : ""}
  </aside></div>`;
}

function renderYouth() {
  const query = state.youthSearch.toLowerCase().trim();
  const filtered = state.data.youth.filter((person) => {
    const matchSearch = !query || `${person.name} ${person.barangay} ${person.classification} ${person.id}`.toLowerCase().includes(query);
    return matchSearch && (state.youthBarangay === "All barangays" || person.barangay === state.youthBarangay);
  });
  const addButton = canEditRecords() ? `<button class="button button-primary" data-action="open-youth">＋ Register youth</button>` : "";
  return `${pageHeading("Youth registry", "Youth profiles and municipal records · ages 15–30.", addButton)}
    <div class="stats-grid">${statCard("Registered youth", state.data.youth.length, "♧", "Across demo barangays")}${statCard("Barangays represented", new Set(state.data.youth.map((youth) => youth.barangay)).size, "⌂", "With at least one profile")}${statCard("Most common group", mostCommon(state.data.youth, "classification"), "◌", "NYC classification")}${statCard("Records in view", filtered.length, "▤", "Matches current filters")}</div>
    <div class="toolbar"><div><div class="panel-title">Registered profiles</div><p class="panel-subtitle">Aggregate planning data; no self-registration or automatic member-list import.</p></div><div class="toolbar-right"><input class="search-input" type="search" id="youth-search" value="${escapeHTML(state.youthSearch)}" placeholder="Search profiles…" aria-label="Search youth profiles"><select class="filter-select" id="youth-barangay"><option>All barangays</option>${BARANGAYS.map((barangay) => `<option${state.youthBarangay === barangay ? " selected" : ""}>${escapeHTML(barangay)}</option>`).join("")}</select></div></div>
    <section class="table-panel"><div class="table-wrap"><table><thead><tr><th>Profile</th><th>Age</th><th>Sex</th><th>Barangay</th><th>Education</th><th>Employment</th><th>Classification</th></tr></thead><tbody>
      ${filtered.length ? filtered.map((youth) => `<tr><td><div class="table-primary">${escapeHTML(youth.name)}</div><div class="table-secondary">${escapeHTML(youth.id)}</div></td><td>${ageFromBirthdate(youth.birthdate)}</td><td>${escapeHTML(youth.sex)}</td><td>${escapeHTML(youth.barangay)}</td><td>${escapeHTML(youth.education)}</td><td>${escapeHTML(youth.employment)}</td><td><span class="pill pill-green">${escapeHTML(youth.classification)}</span></td></tr>`).join("") : `<tr><td colspan="7"><div class="empty-state">No profiles match these filters.</div></td></tr>`}
    </tbody></table></div><div class="table-bottom"><span>${filtered.length} of ${state.data.youth.length} demo profiles</span><span>Fictional placeholder data</span></div></section>
    <div class="privacy-note">Sensitive profile attributes require explicit authorization and privacy safeguards. All records preloaded in this prototype are fictional; avoid entering real youth data.</div>`;
}

function renderReports() {
  const barangayCounts = countBy(state.data.youth, "barangay");
  const classCounts = countBy(state.data.youth, "classification");
  return `${pageHeading("Reports & statistics", "Municipal-level planning snapshots generated from recorded youth profiles.", `<button class="button button-secondary" data-action="export-report">↓ Export summary</button>`)}
    <div class="stats-grid">${statCard("Youth population", state.data.youth.length, "♧", "Registered demo profiles")}${statCard("Barangays represented", Object.keys(barangayCounts).length, "⌂", "With encoded profiles")}${statCard("Classifications", Object.keys(classCounts).length, "◌", "NYC youth categories")}${statCard("Age range", state.data.youth.length ? `${Math.min(...state.data.youth.map((y) => ageFromBirthdate(y.birthdate)))}–${Math.max(...state.data.youth.map((y) => ageFromBirthdate(y.birthdate)))}` : "—", "↕", "Years · calculated from DOB")}</div>
    <div class="report-grid">
      <section class="panel"><div class="panel-head"><div><h2 class="panel-title">Youth by barangay</h2><p class="panel-subtitle">Number of registered profiles in each barangay</p></div><span class="pill pill-gray">Municipal</span></div>${barChart(barangayCounts)}</section>
      <section class="panel"><div class="panel-head"><div><h2 class="panel-title">Youth by classification</h2><p class="panel-subtitle">National Youth Commission categories</p></div><span class="pill pill-gray">Municipal</span></div>${barChart(classCounts)}</section>
    </div>
    <section class="panel"><div class="panel-head"><div><h2 class="panel-title">Data notes</h2><p class="panel-subtitle">How to interpret this prototype report</p></div></div>
      <div class="workflow-strip"><div class="workflow-step"><div class="workflow-number">01</div><div class="workflow-name">Source</div><div class="workflow-count">Manually encoded YDIS demo profiles</div></div><div class="workflow-step"><div class="workflow-number">02</div><div class="workflow-name">Grouping</div><div class="workflow-count">Counts by barangay and NYC category</div></div><div class="workflow-step"><div class="workflow-number">03</div><div class="workflow-name">Privacy</div><div class="workflow-count">Fictional data only in this prototype</div></div><div class="workflow-step"><div class="workflow-number">04</div><div class="workflow-name">Updates</div><div class="workflow-count">Charts refresh when records change</div></div></div>
      <div class="report-callout">These numbers represent seeded fictional profiles, not population estimates. The study describes aggregate statistics; this demo intentionally excludes person-level verification and automatic youth imports.</div>
    </section>`;
}
function barChart(counts) {
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...entries.map((item) => item[1]));
  return `<div class="bar-chart">${entries.length ? entries.map(([label, value]) => `<div class="bar-row"><span>${escapeHTML(label)}</span><div class="bar-track"><div class="bar-fill" style="width:${(value / max) * 100}%"></div></div><span class="bar-value">${value}</span></div>`).join("") : `<div class="empty-state">Register profiles to see statistics.</div>`}</div>`;
}

function renderAudit() {
  const entries = [...state.data.audit].reverse();
  const check = state.auditCheck;
  return `${pageHeading("Audit ledger", "A local, tamper-evident chain of document submissions, corrections, routing, and registry updates.", `<button class="button button-secondary" data-action="verify-ledger">⟳ Verify ledger</button>`)}
    <div class="audit-banner${check && !check.valid ? " invalid" : ""}"><div class="audit-status"><div class="audit-check">${check ? (check.valid ? "✓" : "!") : "◷"}</div><div><strong>${check ? (check.valid ? "Ledger integrity verified" : "Integrity check failed") : "Hash-chained record enabled"}</strong><span>${check ? `${check.checked} entries checked · ${check.valid ? "No altered or missing links detected." : `First mismatch at entry ${check.index + 1}.`}` : `${state.data.audit.length} records · each hash links to the previous entry`}</span></div></div>
      <span class="pill ${check ? (check.valid ? "pill-green" : "pill-high") : "pill-gray"}">${check ? (check.valid ? "Verified" : "Failed") : "SHA-256 chain"}</span></div>
    <section class="table-panel"><div class="table-wrap"><table><thead><tr><th>Activity</th><th>Entity</th><th>Actor</th><th>Timestamp</th><th>Previous hash</th><th>Entry hash</th></tr></thead><tbody>
      ${entries.length ? entries.map((entry) => `<tr><td><div class="table-primary">${escapeHTML(entry.event)}</div><div class="table-secondary">${escapeHTML(entry.detail)}</div></td><td>${escapeHTML(entry.entity)}</td><td>${escapeHTML(entry.actor)}</td><td>${escapeHTML(new Date(entry.timestamp).toLocaleString())}</td><td class="hash-cell" title="${escapeHTML(entry.previousHash)}">${escapeHTML(entry.previousHash.slice(0, 20))}…</td><td class="hash-cell" title="${escapeHTML(entry.hash)}">${escapeHTML(entry.hash.slice(0, 20))}…</td></tr>`).join("") : `<tr><td colspan="6"><div class="empty-state">Ledger events appear here as you use the prototype.</div></td></tr>`}
    </tbody></table></div><div class="table-bottom"><span>${state.data.audit.length} ledger entries</span><span>Browser-local demo · not a distributed blockchain</span></div></section>
    <div class="privacy-note">This prototype hashes ledger entries with SHA-256 and stores the chain in this browser’s local storage. It demonstrates tamper detection only; it is not a public blockchain or a secure production audit service.</div>`;
}

function renderSettings() {
  return `${pageHeading("Administration", "Preview the intended role boundaries and configure receiving offices for this demo.", "")}
    <div class="settings-grid">
      <section class="panel"><div class="panel-head"><div><h2 class="panel-title">Role preview</h2><p class="panel-subtitle">Switch roles from the top bar to preview permissions.</p></div><span class="pill pill-gray">Prototype</span></div>
        <div class="office-list">${ROLES.map((role) => `<div class="office-item"><span><strong>${escapeHTML(role.label)}</strong><span class="field-hint" style="display:block;margin-top:3px">${role.value === "lydo" ? "Verify predictions, route documents, manage users and offices." : role.value === "sk" ? "Upload SK plans, register youth, and track own submissions." : "View routed plans and aggregate youth statistics."}</span></span><span class="pill ${state.role === role.value ? "pill-green" : "pill-gray"}">${state.role === role.value ? "Previewing" : "Role"}</span></div>`).join("")}</div>
        <div class="privacy-note">Authentication and account provisioning are not implemented in this browser-only prototype. Role switching is for interface preview, not access control.</div>
      </section>
      <section class="panel"><div class="panel-head"><div><h2 class="panel-title">Receiving offices</h2><p class="panel-subtitle">Available destinations when an LYDO Officer routes a verified document.</p></div></div>
        <div class="office-list">${state.data.offices.map((office) => `<div class="office-item"><span>${escapeHTML(office)}</span>${state.data.offices.length > 1 && canVerify() ? `<button type="button" data-action="remove-office" data-office="${escapeHTML(office)}" aria-label="Remove ${escapeHTML(office)}">×</button>` : ""}</div>`).join("")}
        ${canVerify() ? `<button class="button button-secondary" style="margin-top:10px" data-action="open-office">＋ Add receiving office</button>` : `<div class="field-hint" style="margin-top:11px">Only the LYDO Officer can change the office list.</div>`}</div>
      </section>
    </div>
    <section class="panel" style="margin-top:16px"><div class="panel-head"><div><h2 class="panel-title">Workspace users</h2><p class="panel-subtitle">Demo account records and role assignment · authentication is not connected.</p></div>${canVerify() ? `<button class="button button-secondary" data-action="open-user">＋ Add user</button>` : ""}</div>
      <div class="table-wrap"><table><thead><tr><th>User</th><th>Assigned role</th><th>Status</th><th>Access</th></tr></thead><tbody>${state.data.users.map((user) => `<tr><td><div class="table-primary">${escapeHTML(user.name)}</div><div class="table-secondary">${escapeHTML(user.email)}</div></td><td>${escapeHTML(user.role)}</td><td><span class="pill ${user.status === "Active" ? "pill-green" : "pill-gray"}">${escapeHTML(user.status)}</span></td><td>${canVerify() && user.id !== "USR-001" ? `<button class="button button-secondary" data-action="toggle-user" data-user-id="${escapeHTML(user.id)}">${user.status === "Active" ? "Deactivate" : "Reactivate"}</button>` : `<span class="field-hint">${user.id === "USR-001" ? "Admin account" : "Read only"}</span>`}</td></tr>`).join("")}</tbody></table></div>
      <div class="privacy-note">Role preview controls interface visibility only. A production deployment must enforce authentication and authorization on the server.</div>
    </section>
    <section class="panel" style="margin-top:16px"><div class="panel-head"><div><h2 class="panel-title">Prototype data</h2><p class="panel-subtitle">Stored locally in this browser; no backend or external service is connected.</p></div><button class="button button-danger" data-action="reset-demo">Reset demo data</button></div>
      <div class="panel-footer"><span>${state.data.documents.length} documents · ${state.data.youth.length} fictional youth profiles · ${state.data.audit.length} audit entries</span><span>Storage key: ${STORAGE_KEY}</span></div>
      <div class="privacy-note">Reset clears saved prototype activity and restores the original fictional sample records. It does not delete files from your device.</div>
    </section>`;
}

function countBy(rows, key) {
  return rows.reduce((counts, row) => {
    const value = row[key] || "Unspecified";
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}
function mostCommon(rows, key) {
  const entries = Object.entries(countBy(rows, key)).sort((a, b) => b[1] - a[1]);
  return entries[0]?.[0] || "—";
}
function ageFromBirthdate(value) {
  if (!value) return 0;
  const today = new Date();
  const dob = new Date(`${value}T00:00:00`);
  let age = today.getFullYear() - dob.getFullYear();
  if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) age -= 1;
  return age;
}
function classifyDocument(fileName, notes) {
  const source = `${fileName} ${notes}`.toLowerCase();
  const patterns = [
    [/\b(cbydp|comprehensive.{0,20}youth.{0,20}development)\b/i, CATEGORIES[2]],
    [/\b(abyip|annual.{0,20}barangay.{0,20}youth.{0,20}investment)\b/i, CATEGORIES[1]],
    [/\b(abp|annual.{0,20}budget.{0,20}plan|budget.{0,20}plan)\b/i, CATEGORIES[0]],
    [/\b(constitution|by[\s-]?laws?)\b/i, CATEGORIES[3]],
    [/\b(list.{0,15}members|members.{0,15}list)\b/i, CATEGORIES[4]],
    [/\b(list.{0,15}officers|officers.{0,15}list)\b/i, CATEGORIES[5]],
  ];
  const matched = patterns.find(([pattern]) => pattern.test(source));
  const category = matched?.[1] || CATEGORIES[6];
  const urgent = /\b(urgent|immediate|asap|overdue|emergency|deadline today)\b/i.test(source);
  const medium = /\b(review|deadline|due|request|program|submission)\b/i.test(source);
  return {
    category,
    categoryConfidence: matched ? (notes.trim() ? 0.89 : 0.83) : 0.55,
    urgency: urgent ? "High" : medium ? "Medium" : "Low",
    urgencyConfidence: urgent ? 0.84 : medium ? 0.75 : 0.63,
  };
}

function hashString(value) {
  return crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)).then((buffer) =>
    [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join(""));
}
function auditPayload(entry) {
  return [entry.timestamp, entry.actor, entry.event, entry.entity, entry.detail, entry.previousHash].join("|");
}
async function appendAudit(event, entity, detail) {
  const previousHash = state.data.audit.at(-1)?.hash || "GENESIS";
  const entry = {
    id: `AUD-${Date.now()}-${state.data.audit.length}`,
    timestamp: new Date().toISOString(),
    actor: `${roleInfo().label} · Maria Santos`,
    event,
    entity,
    detail,
    previousHash,
  };
  entry.hash = await hashString(auditPayload(entry));
  state.data.audit.push(entry);
  return persist();
}
async function verifyLedger() {
  const entries = state.data.audit;
  let previousHash = "GENESIS";
  for (let index = 0; index < entries.length; index += 1) {
    const entry = entries[index];
    if (entry.previousHash !== previousHash || await hashString(auditPayload(entry)) !== entry.hash) {
      state.auditCheck = { valid: false, checked: index + 1, index };
      render();
      return;
    }
    previousHash = entry.hash;
  }
  state.auditCheck = { valid: true, checked: entries.length };
  render();
  notify(`Integrity verified across ${entries.length} ledger entries.`);
}

async function handleSubmit(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  event.preventDefault();
  try {
    if (form.id === "upload-form") await submitDocument(form);
    else if (form.id === "youth-form") await submitYouth(form);
    else if (form.id === "office-form") await submitOffice(form);
    else if (form.id === "user-form") await submitUser(form);
  } catch (error) {
    console.error("Could not complete the requested prototype action.", error);
    notify(error instanceof Error ? error.message : "The action could not be completed.", "error");
  }
}

async function submitDocument(form) {
  const fileInput = form.querySelector("#document-file");
  const file = fileInput.files?.[0];
  if (!file) throw new Error("Choose a supported file before uploading.");
  if (file.size > 15 * 1024 * 1024) throw new Error("Files must be 15 MB or smaller in this prototype.");
  const extension = file.name.split(".").pop().toLowerCase();
  if (!["pdf", "docx", "xls", "xlsx"].includes(extension)) throw new Error("Use a PDF, DOCX, XLS, or XLSX file.");
  const notes = form.querySelector("#document-notes").value.trim();
  const prediction = classifyDocument(file.name, notes);
  const now = new Date();
  const doc = {
    id: `DOC-2026-${String(state.data.nextDocument++).padStart(4, "0")}`,
    name: file.name,
    type: extension.toUpperCase(),
    size: formatBytes(file.size),
    ...prediction,
    status: "Needs review",
    sender: form.querySelector("#document-sender").value.trim(),
    submitted: `Today, ${new Intl.DateTimeFormat("en-PH", { hour: "numeric", minute: "2-digit" }).format(now)}`,
    receivedAt: now.toISOString(),
    offices: [],
    verifiedBy: "",
    summary: notes || "Uploaded file; no document text was extracted in this browser prototype.",
  };
  state.data.documents.unshift(doc);
  state.view = "documents";
  state.modal = "";
  state.selectedDocument = "";
  await appendAudit("Document submitted", doc.id, `${doc.name} · AI suggestion: ${categoryShort(doc.category)} / ${doc.urgency}`);
  persist();
  render();
  notify("Submission added to the review queue.");
}
function formatBytes(bytes) {
  return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function formValue(form, selector) { return form.querySelector(selector).value.trim(); }
async function submitYouth(form) {
  if (!canEditRecords()) throw new Error("The planning role has read-only access to the youth registry.");
  const birthdate = formValue(form, "#youth-birthdate");
  const age = ageFromBirthdate(birthdate);
  if (age < 15 || age > 30) throw new Error("The YDIS pilot registration age is 15–30 years.");
  const profile = {
    id: `Y-${String(state.data.nextYouth++).padStart(3, "0")}`,
    name: formValue(form, "#youth-name"),
    birthdate,
    sex: formValue(form, "#youth-sex"),
    civilStatus: formValue(form, "#youth-civil"),
    barangay: formValue(form, "#youth-profile-barangay"),
    contact: formValue(form, "#youth-contact") || "Not provided",
    email: formValue(form, "#youth-email") || "Not provided",
    education: formValue(form, "#youth-education"),
    employment: formValue(form, "#youth-employment"),
    skills: formValue(form, "#youth-skills") || "Not provided",
    classification: formValue(form, "#youth-classification"),
  };
  state.data.youth.unshift(profile);
  state.modal = "";
  await appendAudit("Youth profile registered", profile.id, `${profile.barangay} · ${profile.classification}`);
  persist();
  render();
  notify("Youth profile saved to this browser.");
}
async function submitOffice(form) {
  if (!canVerify()) throw new Error("Only the LYDO Officer can manage receiving offices.");
  const office = formValue(form, "#office-name");
  if (state.data.offices.some((item) => item.toLowerCase() === office.toLowerCase())) throw new Error("That office is already in the routing list.");
  state.data.offices.push(office);
  state.modal = "";
  await appendAudit("Receiving office added", office, "Office added to prototype routing destinations.");
  persist();
  render();
  notify(`${office} added to routing destinations.`);
}
async function submitUser(form) {
  if (!canVerify()) throw new Error("Only the LYDO Officer can manage workspace users.");
  const email = formValue(form, "#user-email").toLowerCase();
  if (state.data.users.some((user) => user.email.toLowerCase() === email)) throw new Error("A workspace user with that email already exists.");
  const user = {
    id: `USR-${String(state.data.nextUser++).padStart(3, "0")}`,
    name: formValue(form, "#user-name"),
    email,
    role: formValue(form, "#user-role"),
    status: "Active",
  };
  state.data.users.push(user);
  state.modal = "";
  await appendAudit("Workspace user added", user.id, `${user.name} · ${user.role}`);
  persist();
  render();
  notify(`${user.name} added to workspace users.`);
}

async function verifyAndRoute(id) {
  if (!canVerify()) throw new Error("Only the LYDO Officer can verify and route documents.");
  const doc = state.data.documents.find((item) => item.id === id);
  if (!doc || doc.status !== "Needs review") throw new Error("This submission is no longer waiting for review.");
  const category = document.querySelector("#review-category")?.value;
  const urgency = document.querySelector("#review-urgency")?.value;
  const offices = [...document.querySelectorAll('input[name="route-office"]:checked')].map((input) => input.value);
  if (!category || !urgency) throw new Error("Choose a verified category and urgency.");
  if (!offices.length) throw new Error("Select at least one receiving office.");
  const corrected = category !== doc.category || urgency !== doc.urgency;
  doc.suggestedCategory ||= doc.category;
  doc.suggestedUrgency ||= doc.urgency;
  doc.category = category;
  doc.urgency = urgency;
  doc.offices = offices;
  doc.status = "Routed";
  doc.verifiedBy = "Maria Santos";
  doc.verifiedAt = new Date().toISOString();
  state.selectedDocument = "";
  await appendAudit(corrected ? "Prediction corrected, verified & routed" : "Document verified & routed", doc.id, `${categoryShort(category)} · ${urgency} priority · ${offices.join(", ")}`);
  persist();
  render();
  notify(`Verified and routed to ${offices.join(", ")}.`);
}
async function updateDocumentStatus(id, status) {
  const doc = state.data.documents.find((item) => item.id === id);
  if (!doc || !["Routed", "In progress", "Completed"].includes(status)) throw new Error("Choose a valid routed-document status.");
  if (doc.status === status) return;
  const previous = doc.status;
  doc.status = status;
  await appendAudit("Document status updated", doc.id, `${previous} → ${status}`);
  persist();
  render();
  notify(`Status updated to ${status}.`);
}

async function handleClick(event) {
  const target = event.target.closest("[data-view], [data-action], [data-doc-filter], [data-open-document]");
  if (!target) return;
  if (target.dataset.view) {
    state.view = target.dataset.view;
    state.selectedDocument = "";
    state.modal = "";
    render();
    return;
  }
  if (target.dataset.docFilter) {
    state.documentFilter = target.dataset.docFilter;
    render();
    return;
  }
  if (target.dataset.openDocument) {
    state.selectedDocument = target.dataset.openDocument;
    render();
    return;
  }
  switch (target.dataset.action) {
    case "open-upload": state.modal = "upload"; render(); break;
    case "open-youth": if (canEditRecords()) { state.modal = "youth"; render(); } else notify("The planning role has read-only access to youth records.", "error"); break;
    case "open-office": if (canVerify()) { state.modal = "office"; render(); } break;
    case "open-user": if (canVerify()) { state.modal = "user"; render(); } break;
    case "close-modal": if (target === event.target || target.matches("button")) { state.modal = ""; render(); } break;
    case "close-drawer": if (target === event.target || target.matches("button")) { state.selectedDocument = ""; render(); } break;
    case "verify-route":
      try { await verifyAndRoute(target.dataset.docId); } catch (error) { notify(error.message, "error"); }
      break;
    case "verify-ledger":
      try { await verifyLedger(); } catch (error) { console.error("Ledger verification failed.", error); notify("Could not verify the audit ledger in this browser.", "error"); }
      break;
    case "remove-office": await removeOffice(target.dataset.office); break;
    case "toggle-user": await toggleUser(target.dataset.userId); break;
    case "reset-demo": await resetDemo(); break;
    case "export-report": exportReport(); break;
  }
}

async function removeOffice(office) {
  if (!canVerify()) return notify("Only the LYDO Officer can manage receiving offices.", "error");
  if (state.data.offices.length <= 1) return notify("At least one receiving office is required.", "error");
  const assigned = state.data.documents.some((doc) => doc.offices.includes(office));
  if (assigned) return notify("This office is assigned to routed documents and cannot be removed.", "error");
  state.data.offices = state.data.offices.filter((item) => item !== office);
  await appendAudit("Receiving office removed", office, "Office removed from prototype routing destinations.");
  persist();
  render();
  notify(`${office} removed.`);
}
async function toggleUser(id) {
  if (!canVerify()) return notify("Only the LYDO Officer can manage workspace users.", "error");
  const user = state.data.users.find((item) => item.id === id);
  if (!user || user.id === "USR-001") throw new Error("This workspace account cannot be changed.");
  user.status = user.status === "Active" ? "Inactive" : "Active";
  await appendAudit("Workspace user status updated", user.id, `${user.name} · ${user.status}`);
  persist();
  render();
  notify(`${user.name} is now ${user.status.toLowerCase()}.`);
}
async function resetDemo() {
  if (!window.confirm("Reset all prototype activity and restore the fictional demo records?")) return;
  state.data = { documents: structuredClone(SEED_DOCUMENTS), youth: structuredClone(SEED_YOUTH), audit: [], offices: [...DEFAULT_OFFICES], users: structuredClone(DEFAULT_USERS), nextDocument: 149, nextYouth: 10, nextUser: 4 };
  state.selectedDocument = "";
  state.auditCheck = null;
  await initializeLedger();
  persist();
  render();
  notify("Demo data restored.");
}
function exportReport() {
  const rows = [["Barangay", "Registered youth"], ...BARANGAYS.map((barangay) => [barangay, state.data.youth.filter((youth) => youth.barangay === barangay).length])];
  rows.push([], ["NYC classification", "Registered youth"], ...CLASSIFICATIONS.map((classification) => [classification, state.data.youth.filter((youth) => youth.classification === classification).length]));
  const csv = rows.map((row) => row.map((field) => `"${String(field ?? "").replaceAll('"', '""')}"`).join(",")).join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  link.download = "docusense-youth-statistics-demo.csv";
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  notify("Aggregate summary exported as CSV.");
}
async function initializeLedger() {
  if (state.data.audit.length) return;
  const seedEvents = [
    ["Document submitted", "DOC-2026-0143", "ABYIP_2026_Mandahican.pdf · AI suggestion generated"],
    ["Document verified & routed", "DOC-2026-0143", "ABYIP · High priority · LYDO, LGU Planning Office"],
    ["Document submitted", "DOC-2026-0145", "Annual_Budget_Plan_2026.pdf · AI suggestion generated"],
    ["Document verified & routed", "DOC-2026-0145", "ABP · Medium priority · LYDO, Municipal Budget Office"],
    ["Document submitted", "DOC-2026-0148", "CBYDP_Poblacion_2026.pdf · Awaiting LYDO verification"],
  ];
  for (const [event, entity, detail] of seedEvents) await appendAudit(event, entity, detail);
}

app.addEventListener("click", (event) => {
  handleClick(event).catch((error) => {
    console.error("Prototype action failed.", error);
    notify("The requested action could not be completed.", "error");
  });
});
app.addEventListener("submit", (event) => { handleSubmit(event); });
app.addEventListener("change", (event) => {
  const target = event.target;
  if (target.id === "role-select") {
    state.role = target.value;
    state.selectedDocument = "";
    render();
  } else if (target.id === "youth-barangay") {
    state.youthBarangay = target.value;
    render();
  } else if (target.id === "document-status") {
    updateDocumentStatus(target.dataset.statusFor, target.value).catch((error) => {
      console.error("Document status update failed.", error);
      notify("Could not update the document status.", "error");
    });
  } else if (target.id === "youth-birthdate") {
    const age = ageFromBirthdate(target.value);
    const hint = app.querySelector("#age-hint");
    if (hint) hint.textContent = target.value ? `Calculated age: ${age}${age < 15 || age > 30 ? " · outside the 15–30 pilot range" : " · within the pilot range"}` : "Age will appear after selecting a birthdate.";
  }
});
app.addEventListener("input", (event) => {
  if (event.target.id === "document-search") {
    const position = event.target.selectionStart;
    state.documentSearch = event.target.value;
    render();
    const next = app.querySelector("#document-search");
    next.focus();
    next.setSelectionRange(position, position);
  } else if (event.target.id === "youth-search") {
    const position = event.target.selectionStart;
    state.youthSearch = event.target.value;
    render();
    const next = app.querySelector("#youth-search");
    next.focus();
    next.setSelectionRange(position, position);
  }
});
app.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-document]")) {
    event.preventDefault();
    state.selectedDocument = event.target.dataset.openDocument;
    render();
  }
  if (event.key === "Escape") {
    state.modal = "";
    state.selectedDocument = "";
    render();
  }
});

initializeLedger().then(() => {
  persist();
  render();
}).catch((error) => {
  console.error("Could not initialize the audit ledger.", error);
  notify("The audit ledger could not be initialized. Check browser support for SHA-256.", "error");
  render();
});
