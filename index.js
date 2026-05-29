// JAVASCRIPT STATE LOGIC FOR D.K. SINGH WEB HUB

// -------------------------------------------------------------
// 1. DATA DATABASE (Simulated responses for AI Writer)
// -------------------------------------------------------------
const DEFAULT_PHOTOS = [
    { url: "assets/images/office_desk.jpg", caption: "D.K. Singh ji at CCL office desk, Sirka Argada area" },
    { url: "assets/images/granddaughter_birthday.jpg", caption: "Celebrating birthday with granddaughter" },
    { url: "assets/images/family_1.jpg", caption: "Having peaceful family times at home with wife" },
    { url: "assets/images/family_2.jpg", caption: "Family weekend gathering colony residence" },
    { url: "assets/images/sofa_pose.jpg", caption: "Relaxing at home, planning macros sync systems" }
];

const MOCK_LETTERS = {
    el: {
        subject: "Application for Earned Leave (EL) - Dispatch Division",
        body: `<p>To,<br>
<strong>The Chief Manager</strong><br>
Coal India Limited /<br>
CCL Sirka Argada area</p>
<p><strong>Subject:</strong> Application for Earned Leave (EL) on Personal Grounds</p>
<p>Respected Sir,</p>
<p>I am writing to formally request Earned Leave (EL) for a period of <strong>[Days]</strong>, starting from <strong>[Start Date]</strong> to <strong>[End Date]</strong>, due to urgent personal and family commitments at home that require my presence.</p>
<p>Before proceeding, I will ensure that all daily coal dispatch log spreadsheets, macro-enabled registers, and weighbridge gate log books are compiled and synced online to prevent any operational disruption.</p>
<p>I request you to kindly approve and grant me leave for the specified dates.</p>
<p>Thanking you.</p>
<p>Yours faithfully,<br>
<strong>D.K. Singh</strong><br>
Dispatch Officer<br>
CCL Sirka Argada Area</p>`
    },
    cl: {
        subject: "Application for Casual Leave (CL) - Operations Dept",
        body: `<p>To,<br>
<strong>The Chief Manager</strong><br>
Coal India Limited /<br>
CCL Sirka Argada area</p>
<p><strong>Subject:</strong> Request for Casual Leave (CL)</p>
<p>Respected Sir,</p>
<p>I request you to kindly grant me Casual Leave (CL) for <strong>[Days]</strong> on <strong>[Dates]</strong> to attend to urgent personal affairs at home.</p>
<p>In my absence, Mr. <em>[Colleague Name]</em> will monitor the daily dispatch registries to maintain smooth dispatch flow at the loading gates.</p>
<p>Thanking you.</p>
<p>Yours faithfully,<br>
<strong>D.K. Singh</strong><br>
Dispatch Officer<br>
CCL Sirka Argada Area</p>`
    },
    sick: {
        subject: "Application for Medical Leave - Operations Dept",
        body: `<p>To,<br>
<strong>The Chief Manager</strong><br>
Coal India Limited /<br>
CCL Sirka Argada area</p>
<p><strong>Subject:</strong> Application for Sick Leave on Medical Grounds</p>
<p>Respected Sir,</p>
<p>I am writing to formally request medical sick leave for a period of <strong>[Days]</strong>, due to a medical condition. My attending physician has advised strict bed rest for recovery.</p>
<p>Authorized medical fitness logs and certificates are enclosed herewith. Reconciled digital dispatch registries will be monitored by my team members. Kindly grant me leave for the specified duration.</p>
<p>Thanking you.</p>
<p>Yours faithfully,<br>
<strong>D.K. Singh</strong><br>
Dispatch Officer<br>
CCL Sirka Argada Area</p>`
    },
    sla: {
        subject: "SLA Operational Guidelines for Coal Dispatch Logs",
        body: `<p>To,<br>
<strong>The Chief Manager</strong><br>
Coal India Limited /<br>
CCL Sirka Argada area</p>
<p><strong>Subject:</strong> Notification: SLA Guidelines implementation for Swift Dispatch Operations</p>
<p>Respected Sir,</p>
<p>I am submitting the draft Service Level Agreement (SLA) operational guidelines for gate entry validation and dispatch coal weights log reconciliation at the Sirka Argada Area loading terminals.</p>
<p>This SLA aims to minimize truck turnaround times, establish zero-error digital registries, and outline precise data sync frequencies between gate logs and Master Databases. Implementing these rules will enhance operational efficiency and transparency across shifts.</p>
<p>Kindly review the attached guidelines for approval and subsequent distribution.</p>
<p>Thanking you.</p>
<p>Yours faithfully,<br>
<strong>D.K. Singh</strong><br>
Dispatch Officer<br>
CCL Sirka Argada Area</p>`
    },
    mismatch: {
        subject: "Reconciliation Report: Gate Entry Weights Mismatch Logs",
        body: `<p>To,<br>
<strong>The Chief Manager</strong><br>
Coal India Limited /<br>
CCL Sirka Argada area</p>
<p><strong>Subject:</strong> Clarification Report: Weights Mismatch Detection in Weighbridge Log Sheets</p>
<p>Respected Sir,</p>
<p>I am submitting the data reconciliation report regarding gate entry logs and dispatch coal weight mismatch logs detected during shift audits.</p>
<p>Using advanced duplicate check lookup formulas, we identified a variance of <strong>[Variance Tons]</strong> in weighbridge weights. Discrepancies have been resolved by re-tallying the digital receipts. Steps have been put in place to mandate immediate entry audits at loading gates to avoid future lags.</p>
<p>The detailed reconciliation register sheet is attached for your review.</p>
<p>Thanking you.</p>
<p>Yours faithfully,<br>
<strong>D.K. Singh</strong><br>
Dispatch Officer<br>
CCL Sirka Argada Area</p>`
    }
};


// -------------------------------------------------------------
// 2. TAB CONTROLLER LOGIC
// -------------------------------------------------------------
function switchTab(tabId) {
    // Hide all panels
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(panel => panel.classList.remove('active'));
    
    // Deactivate all navigation items
    const navItems = document.querySelectorAll('.nav-item, .bottom-nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Show active panel
    const targetPanel = document.getElementById(`panel-${tabId}`);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
    
    // Activate sidebar buttons
    const sidebarBtn = document.getElementById(`tab-btn-${tabId}`);
    if (sidebarBtn) {
        sidebarBtn.classList.add('active');
    }
    
    // Activate mobile nav buttons
    const mobBtn = document.getElementById(`mob-btn-${tabId}`);
    if (mobBtn) {
        mobBtn.classList.add('active');
    }
    
    // Scroll content view to top on switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// -------------------------------------------------------------
// 3. THEME CONTROL SYSTEM
// -------------------------------------------------------------
function toggleTheme() {
    const htmlEl = document.documentElement;
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'corporate' : 'dark';
    
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    
    if (theme === 'dark') {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}

// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. INTERACTIVE PERSONAL PHOTO TIMELINE GALLERY
// -------------------------------------------------------------
function renderGallery() {
    const galleryContainer = document.getElementById('photo-gallery-container');
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = '';
    
    DEFAULT_PHOTOS.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'gallery-tile';
        
        card.innerHTML = `
            <div class="gallery-img-container">
                <img src="${photo.url}" alt="${photo.caption}" class="gallery-img">
            </div>
            <div class="gallery-caption">${photo.caption}</div>
        `;
        galleryContainer.appendChild(card);
    });
}

// -------------------------------------------------------------
// 6. GENAI ASSISTANT TYPING SIMULATION & WRITER
// -------------------------------------------------------------
function fillSuggestion(text) {
    const input = document.getElementById('input-query');
    input.value = text;
    input.focus();
}

function saveSearchHistory(query) {
    if (!query || query.trim() === '') return;
    
    let history = JSON.parse(localStorage.getItem('search_history')) || [];
    // Remove if already exists to put on top
    history = history.filter(item => item.toLowerCase() !== query.toLowerCase());
    // Insert at front
    history.unshift(query);
    // Limit to 5 items
    history = history.slice(0, 5);
    
    localStorage.setItem('search_history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('sidebar-history-list');
    const history = JSON.parse(localStorage.getItem('search_history')) || [];
    
    if (history.length === 0) {
        historyList.innerHTML = '<li class="history-placeholder">No recent queries</li>';
        return;
    }
    
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.className = 'history-item';
        li.innerText = item;
        li.title = item;
        li.onclick = () => {
            fillSuggestion(item);
            submitAIQuery();
        };
        historyList.appendChild(li);
    });
}

// Typewriter effect variables
let typeIntervals = [];

function clearTypingIntervals() {
    typeIntervals.forEach(interval => clearInterval(interval));
    typeIntervals = [];
}

function cleanHinglishString(str) {
    let cleaned = str.toLowerCase();
    
    // Hinglish suffixes, helper verbs, connectors
    const toRemove = [
        "k liye application", "ke liye application", "k liye letter", "ke liye letter",
        "k liye", "ke liye", "se related", "ke baare mein", "k bare me",
        "chahiye", "krna hai", "karna hai", "bhejna hai", "likhna hai", "likho",
        "appliaton", "apliation", "aplikation", "aplication", "formala", "formual", "formulae"
    ];
    
    toRemove.forEach(phrase => {
        cleaned = cleaned.replace(new RegExp(phrase, 'g'), '');
    });
    
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    
    if (cleaned === '') {
        return "General Operations";
    }
    
    // Common auto-corrections for English concepts
    cleaned = cleaned.replace(/\broad\b/g, 'Road');
    cleaned = cleaned.replace(/\bcontruction\b/g, 'Construction');
    cleaned = cleaned.replace(/\bconstruction\b/g, 'Construction');
    cleaned = cleaned.replace(/\bsadak\b/g, 'Road Repair');
    cleaned = cleaned.replace(/\bchutti\b/g, 'Leave');
    cleaned = cleaned.replace(/\bchuti\b/g, 'Leave');
    cleaned = cleaned.replace(/\bpani\b/g, 'Drinking Water');
    cleaned = cleaned.replace(/\bpanee\b/g, 'Drinking Water');
    
    return cleaned.split(' ').map(word => {
        if (word.length === 0) return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

function translateHinglishToFormalEnglish(query) {
    const lower = query.toLowerCase().trim();
    
    // Mapped Topics
    if (lower.includes('road') && (lower.includes('construction') || lower.includes('sadak') || lower.includes('repair') || lower.includes('gate'))) {
        return {
            subject: "Request for Urgent Road Construction and Loading Gate Repair",
            body: "I am writing to formally draw your attention to the critical state of the dispatch loading gate roads at the Sirka Argada Area.\n\nCurrently, the uneven and damaged road conditions are causing transit delays for coal trucks, which directly impacts our daily weighbridge operations and output scheduling.\n\nKindly approve the procurement and scheduling of urgent road reconstruction and leveling works at the main loading terminal to ensure smooth operations. Reconciled digital dispatch registries will be updated to log any temporary rerouting details."
        };
    }
    
    if (lower.includes('ac') || lower.includes('air condition') || lower.includes('cooler') || lower.includes('fan') || lower.includes('cabin')) {
        return {
            subject: "Urgent Maintenance Request for Air Conditioning (AC) Unit in Dispatch Cabin",
            body: "I am writing to request urgent repair or replacement of the malfunctioning Air Conditioning (AC) unit in the main dispatch control cabin at Sirka Argada Area.\n\nDue to high ambient temperatures and high dust levels at the dispatch terminals, a functioning cooling unit is essential to maintain acceptable working conditions and prevent thermal failure of our weighbridge computers and database servers.\n\nI request you to kindly direct the maintenance cell to address this issue at the earliest."
        };
    }
    
    if (lower.includes('water') || lower.includes('drinking') || lower.includes('pani') || lower.includes('panee') || lower.includes('pila')) {
        return {
            subject: "Provision of Clean Drinking Water Facility at Loading Gates",
            body: "I am writing to request the immediate provision of a clean drinking water facility and water dispenser at the Sirka Argada coal loading gates.\n\nWith high temperatures during shift operations, the dispatch clerks, weighbridge operators, and vehicle crew members face severe challenges due to the lack of access to clean drinking water near the loading lanes.\n\nEstablishing a drinking water station will greatly improve the work environment, productivity, and safety at the loading terminal. I look forward to your positive approval."
        };
    }
    
    if (lower.includes('computer') || lower.includes('pc') || lower.includes('system') || lower.includes('monitor') || lower.includes('mouse') || lower.includes('keyboard')) {
        return {
            subject: "Request for System Repair and Hardware Upgradation in Dispatch Office",
            body: "I am writing to formally request the repair and technical upgradation of the computer systems inside the dispatch audit room at Sirka Argada Area.\n\nThe current local terminal is experiencing frequent freezes and database connection lag, which delays our macro-enabled excel sync registries and SLA data processing during peak dispatch hours.\n\nKindly authorize the IT support cell to inspect, repair, or upgrade the system's RAM and peripheral devices at your earliest convenience."
        };
    }
    
    if (lower.includes('shoe') || lower.includes('safety') || lower.includes('boot') || lower.includes('helmet') || lower.includes('dress') || lower.includes('uniform')) {
        return {
            subject: "Requisition for Safety Protective Equipment (PPE) for Dispatch Staff",
            body: "I am writing to request the procurement and distribution of standard safety protective gear, specifically safety boots and high-visibility helmets, for the dispatch field officers at Sirka Argada Area.\n\nAs field operations require constant monitoring near moving loaders, trucks, and dust-prone weighbridge lanes, appropriate safety gear is critical to comply with mining safety regulations and protect our team members from occupational hazards.\n\nKindly review our requirement log and approve the release of safety equipment."
        };
    }
    
    if (lower.includes('earned leave') || lower.includes('el')) {
        return {
            subject: "Application for Earned Leave (EL) - Dispatch Division",
            body: "I am writing to formally request Earned Leave (EL) for a period of [Days], starting from [Start Date] to [End Date], due to urgent personal and family commitments at home that require my presence.\n\nBefore proceeding, I will ensure that all daily coal dispatch log spreadsheets, macro-enabled registers, and weighbridge gate log books are compiled and synced online to prevent any operational disruption.\n\nI request you to kindly approve and grant me leave for the specified dates."
        };
    }
    
    if (lower.includes('casual leave') || lower.includes('cl')) {
        return {
            subject: "Request for Casual Leave (CL) - Operations Dept",
            body: "I request you to kindly grant me Casual Leave (CL) for [Days] on [Dates] to attend to urgent personal affairs at home.\n\nIn my absence, Mr. [Colleague Name] will monitor the daily dispatch registries to maintain smooth dispatch flow at the loading gates."
        };
    }
    
    if (lower.includes('sick') || lower.includes('medical') || lower.includes('illness') || lower.includes('doctor') || lower.includes('bukhar') || lower.includes('bimari')) {
        return {
            subject: "Application for Medical Leave - Operations Dept",
            body: "I am writing to formally request medical sick leave for a period of [Days], due to a medical condition. My attending physician has advised strict bed rest for recovery.\n\nAuthorized medical fitness logs and certificates are enclosed herewith. Reconciled digital dispatch registries will be monitored by my team. Kindly grant me leave for the specified duration."
        };
    }
    
    if (lower.includes('sla') || lower.includes('service level') || lower.includes('agreement') || lower.includes('culture')) {
        return {
            subject: "SLA Operational Guidelines for Coal Dispatch Logs",
            body: "I am submitting the draft Service Level Agreement (SLA) operational guidelines for gate entry validation and dispatch coal weights log reconciliation at the Sirka Argada Area loading terminals.\n\nThis SLA aims to minimize truck turnaround times, establish zero-error digital registries, and outline precise data sync frequencies between gate logs and Master Databases. Implementing these rules will enhance operational efficiency and transparency across shifts."
        };
    }
    
    if (lower.includes('mismatch') || lower.includes('weight') || lower.includes('reconcile') || lower.includes('discrepancy')) {
        return {
            subject: "Reconciliation Report: Gate Entry Weights Mismatch Logs",
            body: "I am submitting the data reconciliation report regarding gate entry logs and dispatch coal weight mismatch logs detected during shift audits.\n\nUsing advanced duplicate check lookup formulas, we identified a variance of [Variance Tons] in weighbridge weights. Discrepancies have been resolved by re-tallying the digital receipts. Steps have been put in place to mandate immediate entry audits at loading gates to avoid future lags."
        };
    }
    
    if (lower.includes('rake') && (lower.includes('delay') || lower.includes('late') || lower.includes('railway') || lower.includes('warning'))) {
        return {
            subject: "Clarification Warning regarding Railway Rake Loading Delays - Sirka Argada Area",
            body: "I am writing to formally alert you regarding persistent delays in the placement and loading of railway rakes at our Sirka Argada siding terminal.\n\nOver the past week, rake allotments have experienced average placement delays of over 4 hours, causing coal transport bottlenecks and piling up dispatch yard inventory. This operational delay risks violating our supply agreement timelines with power sector plants.\n\nKindly raise this issue with the Senior Divisional Operations Manager (Sr. DOM) of the Railways to expedite rake movements and restore normal evacuation dispatch flow."
        };
    }
    
    if (lower.includes('calibration') || lower.includes('calibrat') || (lower.includes('weighbridge') && lower.includes('request'))) {
        return {
            subject: "Requisition for Annual Weighbridge Calibration and Accuracy Certification",
            body: "I am writing to request the scheduling of the annual inspection and calibration of the electronic weighbridges at the Sirka Argada coal loading terminal.\n\nTo ensure exact digital logging and prevent any variance or mismatch reports between gate load receipts and master database weight registers, standard calibration by certified inspectors is required. Correct weighbridge measurements are critical to preventing revenue leaks and audit discrepancies.\n\nKindly authorize the allocation of the calibration team and coordinate with the Weights & Measures Department."
        };
    }
    
    if (lower.includes('grade') || lower.includes('quality') || lower.includes('variation') || lower.includes('audit')) {
        return {
            subject: "Audit Report: Coal Quality Grade Variance in Dispatch Loads",
            body: "I am submitting the audit report concerning the coal quality grade variations detected in recent dispatch loads from the Sirka Argada loading terminal.\n\nComparative logs between pit-head quality certificates and dispatch point declarations indicate a variance in ash content and Gross Calorific Value (GCV). I have prepared a detailed spreadsheet tracking the grade analysis results to reconcile these variance records and preserve buyer grade commitments.\n\nKindly review the report and authorize a joint sampling audit at the loading point to rectify this discrepancy."
        };
    }
    
    if (lower.includes('demurrage') || lower.includes('waiver') || lower.includes('charge') || lower.includes('fine')) {
        return {
            subject: "Waiver Request for Railway Demurrage Charges - Sirka Argada Siding",
            body: "I am writing to submit a formal request for a waiver of railway demurrage charges totaling ₹[Amount] levied on the recent rakes loaded at the Sirka Argada siding.\n\nThe delay in loading was entirely due to unexpected breakdown of the heavy-duty coal loaders and power grid failure at the loading terminal, which was beyond our operational control. Real-time log entries and maintenance reports detailing the downtime logs are attached for verification.\n\nKindly forward this request with your recommendation to the Divisional Railway Manager (DRM) for a complete waiver of the charges."
        };
    }
    
    // Fallback rephaser
    const cleanedTopic = cleanHinglishString(query);
    return {
        subject: `Request regarding ${cleanedTopic}`,
        body: `I am writing to formally request your attention regarding ${cleanedTopic} to ensure smooth records and dispatch operations at the Sirka Argada dispatch terminals.\n\nKindly review the necessary approvals or records. I remain available for any operational clarifications or data sync updates required on this topic.`
    };
}

function submitAIQuery() {
    const input = document.getElementById('input-query');
    const query = input.value.trim();
    if (query === '') return;
    
    clearTypingIntervals();
    
    document.getElementById('assistant-welcome-view').classList.add('hidden');
    document.getElementById('assistant-results-panel').classList.add('hidden');
    document.getElementById('ai-loader').classList.remove('hidden');
    
    saveSearchHistory(query);
    
    setTimeout(() => {
        document.getElementById('ai-loader').classList.add('hidden');
        document.getElementById('assistant-results-panel').classList.remove('hidden');
        
        const parsed = translateHinglishToFormalEnglish(query);
        const letterBody = `<p>To,<br>
<strong>The Chief Manager</strong><br>
Coal India Limited /<br>
CCL Sirka Argada area</p>
<p><strong>Subject:</strong> ${parsed.subject}</p>
<p>Respected Sir,</p>
<p>${parsed.body.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>
<p>Thanking you.</p>
<p>Yours faithfully,<br>
<strong>D.K. Singh</strong><br>
Dispatch Officer<br>
CCL Sirka Argada Area</p>`;
        
        streamResponse('ai-writer-output', letterBody, 'ai-writer-output-raw');
    }, 1200);
}

// Stream writer HTML tags properly or code content
function streamResponse(targetId, htmlContent, rawTextareaId) {
    const targetElement = document.getElementById(targetId);
    const rawTextarea = document.getElementById(rawTextareaId);
    
    targetElement.innerHTML = '';
    targetElement.classList.add('typing-cursor');
    
    // Backup clean text for clipboard copy
    let plainText = htmlContent.replace(/<\/?[^>]+(>|$)/g, ""); // strip HTML tags
    rawTextarea.value = plainText;
    
    let currentIndex = 0;
    
    // HTML Content typing helper
    let tokens = tokenizeHTML(htmlContent);
    let tokenIndex = 0;
    
    const interval = setInterval(() => {
        if (tokenIndex < tokens.length) {
            const token = tokens[tokenIndex];
            if (token.isTag) {
                // Append HTML tag directly
                targetElement.innerHTML += token.text;
            } else {
                // Type text token character by character
                if (currentIndex < token.text.length) {
                    targetElement.innerHTML += token.text.charAt(currentIndex);
                    currentIndex++;
                    return; // stay on same token
                }
            }
            currentIndex = 0;
            tokenIndex++;
        } else {
            clearInterval(interval);
            targetElement.classList.remove('typing-cursor');
        }
    }, 12); // Rich text typing speed
    typeIntervals.push(interval);
}

// Tokenize HTML so tags don't break during typing animation
function tokenizeHTML(html) {
    const tokens = [];
    let i = 0;
    while (i < html.length) {
        if (html[i] === '<') {
            const endIdx = html.indexOf('>', i);
            if (endIdx !== -1) {
                tokens.push({ isTag: true, text: html.substring(i, endIdx + 1) });
                i = endIdx + 1;
                continue;
            }
        }
        // Text node
        const nextTagIdx = html.indexOf('<', i);
        const end = nextTagIdx === -1 ? html.length : nextTagIdx;
        tokens.push({ isTag: false, text: html.substring(i, end) });
        i = end;
    }
    return tokens;
}

// -------------------------------------------------------------
// 7. COPY TO CLIPBOARD UTILITY
// -------------------------------------------------------------
function copyToClipboard(rawTextareaId, buttonEl) {
    const rawTextarea = document.getElementById(rawTextareaId);
    if (!rawTextarea) return;
    
    const originalText = buttonEl.innerHTML;
    
    // Select and Copy using navigator.clipboard
    rawTextarea.select();
    navigator.clipboard.writeText(rawTextarea.value).then(() => {
        // Visual Feedback
        buttonEl.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" class="copy-svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span style="color:#22c55e">Copied!</span>
        `;
        buttonEl.style.borderColor = "#22c55e";
        
        setTimeout(() => {
            buttonEl.innerHTML = originalText;
            buttonEl.style.borderColor = "";
        }, 1500);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// -------------------------------------------------------------
// 8. CHEATSHEET FILTER SEARCH FUNCTION (Token-Based Synonyms matching)
// -------------------------------------------------------------
// -------------------------------------------------------------
// 8a. FORMULA DATABASE & FUZZY MATCH LOGIC
// -------------------------------------------------------------
const FORMULA_DATABASE = {
    xlookup: {
        name: "XLOOKUP",
        queryName: "lookup / vlookup / xlookup",
        desc: "XLOOKUP searches a range or an array for a match and returns the corresponding item from a second range or array. For Coal India operations, this is essential for matching vehicle IDs against master registers to verify tare weight or load capacities.",
        syntax: "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])",
        steps: [
            "Select the cell where you want the matched data to appear.",
            "Type `=XLOOKUP(`.",
            "Select the cell containing the Truck ID you want to look up (e.g. A3).",
            "Highlight the column in your master register where Truck IDs are stored (e.g. E2:E5).",
            "Highlight the column containing the weight values you want to fetch (e.g. F2:F5).",
            "Close the parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Truck ID)</th><th>B (Status)</th></tr>
            <tr><td class="cell-highlight-in">CIL-902</td><td>In Transit</td></tr>
        `,
        miniTableOutput: `
            <tr><th>E (Reg Truck)</th><th>F (Tare Weight)</th></tr>
            <tr><td>CIL-401</td><td>120 Tons</td></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-in">CIL-902</td><td class="cell-highlight-out">95 Tons</td></tr>
            <tr><td>CIL-305</td><td>110 Tons</td></tr>
        `,
        outcomeExplanation: "It searches for 'CIL-902' in Column E, finds the matching record, and fetches the value '95 Tons' from Column F, putting it in your active cell.",
        simFunction: "runXLookupSim",
        cardId: "card-xlookup"
    },
    vlookup: {
        name: "VLOOKUP",
        queryName: "vlookup / vertical lookup",
        desc: "VLOOKUP looks for a value in the leftmost column of a table, and then returns a value in the same row from a column you specify. Used heavily in older Coal India reporting layouts.",
        syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
        steps: [
            "Highlight the target cell.",
            "Type `=VLOOKUP(`.",
            "Click on the lookup value (e.g. A2 containing Truck ID).",
            "Select the lookup table range (e.g. E2:F10).",
            "Specify the column index number to retrieve (e.g. 2 for the 2nd column).",
            "Type `,FALSE` for an exact match, close parenthesis, and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Truck ID)</th><th>B (Status)</th></tr>
            <tr><td>CIL-401</td><td>In Transit</td></tr>
        `,
        miniTableOutput: `
            <tr><th>E (ID)</th><th>F (Tons)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td>CIL-401</td><td class="cell-highlight-out">120</td></tr>
        `,
        outcomeExplanation: "Searches column E for 'CIL-401', matching index 1, and retrieves 120 from Column F.",
        simFunction: "runVLookupSim",
        cardId: "card-vlookup"
    },
    indexmatch: {
        name: "INDEX & MATCH",
        queryName: "index match / left lookup / flexible lookup",
        desc: "Combining INDEX and MATCH allows you to lookup values in any column direction (left or right), overcoming VLOOKUP's column order limitation.",
        syntax: "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
        steps: [
            "Select the cell, type `=INDEX(`.",
            "Highlight the column containing the data you want to retrieve (e.g. D2:D10).",
            "Type `, MATCH(`.",
            "Select the lookup value cell (e.g. A2).",
            "Highlight the column range to search (e.g. E2:E10).",
            "Type `, 0)` to enforce exact matching, and close the index parenthesis."
        ],
        miniTableInput: `
            <tr><th>A (Search ID)</th></tr>
            <tr><td>CIL-902</td></tr>
        `,
        miniTableOutput: `
            <tr><th>D (Area Output)</th><th>E (ID)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">Dhanbad</td><td>CIL-902</td></tr>
        `,
        outcomeExplanation: "MATCH finds 'CIL-902' in column E row index, and INDEX retrieves the value 'Dhanbad' from column D at that same row index.",
        simFunction: "runIndexMatchSim",
        cardId: "card-indexmatch"
    },
    concat: {
        name: "CONCAT",
        queryName: "concat / concatenate",
        desc: "CONCAT combines text strings from multiple ranges or cells into a single cell. This is highly useful for creating unique keys by combining truck codes, serial numbers, and locations to index dispatch logs.",
        syntax: "=CONCAT(text1, text2, ...)",
        steps: [
            "Select the output cell where the combined text should go (e.g. D2).",
            "Type `=CONCAT(`.",
            "Click the first text cell (e.g. A2) containing the company code.",
            "Type `,\"- \",` to insert a separator dash.",
            "Click the second cell (e.g. B2) containing the truck number.",
            "Type `,\" (\", C2, \")\"` to append the area name in brackets.",
            "Press Enter to view the combined string."
        ],
        miniTableInput: `
            <tr><th>A (Code)</th><th>B (ID)</th><th>C (Area)</th></tr>
            <tr><td class="cell-highlight-in">CIL</td><td class="cell-highlight-in">902</td><td class="cell-highlight-in">Dhanbad</td></tr>
        `,
        miniTableOutput: `
            <tr><th>D (CONCAT Output Key)</th></tr>
            <tr><td class="cell-highlight-out">CIL-902 (Dhanbad)</td></tr>
        `,
        outcomeExplanation: "The formula consolidates 'CIL', '902', and 'Dhanbad' into a single unique identification key 'CIL-902 (Dhanbad)'.",
        simFunction: "runConcatSim",
        cardId: "card-concat"
    },
    textjoin: {
        name: "TEXTJOIN",
        queryName: "textjoin / join delimiter",
        desc: "TEXTJOIN merges strings from multiple cells, separating them with a delimiter you choose, and optionally ignoring blank cells.",
        syntax: "=TEXTJOIN(delimiter, ignore_empty, text1, text2, ...)",
        steps: [
            "Type `=TEXTJOIN(` in the target cell.",
            "Enter the separator code in quotes (e.g. `\", \"`).",
            "Type `, TRUE` to ignore any empty cells.",
            "Select the cells or ranges to merge (e.g. A2:C2).",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A</th><th>B</th><th>C</th></tr>
            <tr><td>CIL</td><td>(empty)</td><td>Argada</td></tr>
        `,
        miniTableOutput: `
            <tr><th>D (Output)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">CIL, Argada</td></tr>
        `,
        outcomeExplanation: "Merges 'CIL' and 'Argada' with a comma delimiter, skipping the empty cell B.",
        simFunction: "runTextjoinSim",
        cardId: "card-textjoin"
    },
    leftright: {
        name: "LEFT & RIGHT",
        queryName: "left right / substring / character extract",
        desc: "LEFT and RIGHT pull a specific number of characters from the start (left) or end (right) of a text string.",
        syntax: "=LEFT(text, num_chars) | =RIGHT(text, num_chars)",
        steps: [
            "Select the cell, type `=LEFT(`.",
            "Select the cell containing the raw code (e.g. A2).",
            "Type `, 3` to grab the first 3 characters, close parenthesis, and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Code)</th></tr>
            <tr><td>CIL-SRK-802</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (LEFT 3)</th><th>C (RIGHT 3)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">CIL</td><td class="cell-highlight-out">802</td></tr>
        `,
        outcomeExplanation: "LEFT extracts the first 3 characters 'CIL', and RIGHT extracts the last 3 characters '802'.",
        simFunction: "runLeftRightSim",
        cardId: "card-leftright"
    },
    upper: {
        name: "UPPER",
        queryName: "upper / lower / proper",
        desc: "UPPER converts all characters in a text string to uppercase letters. Lowercase and inconsistent text entries from manual loading logs are standardized instantly.",
        syntax: "=UPPER(text)",
        steps: [
            "Select the cell next to your raw text column.",
            "Type `=UPPER(`.",
            "Select the raw cell containing the lowercase text (e.g. A2).",
            "Close the parenthesis and press Enter."
        ],
        miniTableInput: `
            <tr><th>A (Raw Input Log)</th></tr>
            <tr><td class="cell-highlight-in">ccl dispatch</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (UPPER Output result)</th></tr>
            <tr><td class="cell-highlight-out">CCL DISPATCH</td></tr>
        `,
        outcomeExplanation: "UPPER converts 'ccl dispatch' to all-capital 'CCL DISPATCH', fixing formatting errors in official reports.",
        simFunction: "runCaseSim",
        cardId: "card-upper"
    },
    lower: {
        name: "LOWER",
        queryName: "lower / lowercase",
        desc: "LOWER converts all capitalized letters in a text string to lowercase.",
        syntax: "=LOWER(text)",
        steps: [
            "Type `=LOWER(` in a cell next to your text.",
            "Select the cell to convert (e.g. A2).",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Raw)</th></tr>
            <tr><td>CCL DISPATCH</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (LOWER)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">ccl dispatch</td></tr>
        `,
        outcomeExplanation: "Converts the capital letters in 'CCL DISPATCH' to lowercase 'ccl dispatch'.",
        simFunction: "runLowerSim",
        cardId: "card-lower"
    },
    proper: {
        name: "PROPER",
        queryName: "proper / titlecase / name format",
        desc: "PROPER capitalizes the first letter in each word of a text string and converts all other letters to lowercase.",
        syntax: "=PROPER(text)",
        steps: [
            "Type `=PROPER(`.",
            "Select the lowercase name cell (e.g. A2).",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Raw Name)</th></tr>
            <tr><td>dhananjay kumar singh</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (PROPER)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">Dhananjay Kumar Singh</td></tr>
        `,
        outcomeExplanation: "Capitalizes the first letter of each word to format names professionally.",
        simFunction: "runProperSim",
        cardId: "card-proper"
    },
    trim: {
        name: "TRIM",
        queryName: "trim / clean spaces",
        desc: "TRIM removes all spaces from text except for single spaces between words. This is vital when copy-pasted data contains hidden trailing or leading spaces that break lookups.",
        syntax: "=TRIM(text)",
        steps: [
            "Identify the cells containing extra space gaps (e.g. '   CIL-105  ').",
            "Select a target clean cell and enter `=TRIM(`.",
            "Click on the dirty text cell (e.g. A2).",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Raw Input dispatch)</th></tr>
            <tr><td class="cell-highlight-in">"&nbsp;&nbsp;&nbsp;CIL-105&nbsp;&nbsp;"</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (TRIM Output result)</th></tr>
            <tr><td class="cell-highlight-out">"CIL-105"</td></tr>
        `,
        outcomeExplanation: "All leading spaces and trailing spaces are removed, turning the string into clean searchable data: 'CIL-105'.",
        simFunction: "runTrimSim",
        cardId: "card-trim"
    },
    clean: {
        name: "CLEAN",
        queryName: "clean / web format clear / non-printable character removal",
        desc: "CLEAN removes all non-printable characters from text, which is vital when copy-pasting data from databases or web portals.",
        syntax: "=CLEAN(text)",
        steps: [
            "Type `=CLEAN(` in your destination cell.",
            "Click on the text cell containing hidden formatting codes.",
            "Close parenthesis and hit Enter to purge formatting metadata."
        ],
        miniTableInput: `
            <tr><th>A (Raw copy)</th></tr>
            <tr><td>CIL-401 [tab break]</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (CLEAN Output)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">CIL-401</td></tr>
        `,
        outcomeExplanation: "Removes tabs, linebreaks, and other hidden control codes from the text, returning a clean string.",
        simFunction: "runCleanSim",
        cardId: "card-clean"
    },
    substitute: {
        name: "SUBSTITUTE",
        queryName: "substitute / replace text / swap characters",
        desc: "SUBSTITUTE replaces occurrences of old text with new text within a text string.",
        syntax: "=SUBSTITUTE(text, old_text, new_text, [instance_num])",
        steps: [
            "Type `=SUBSTITUTE(`.",
            "Select the text cell (e.g. A2).",
            "Specify the old text in quotes (e.g. `\"/\"`).",
            "Specify the new replacement text in quotes (e.g. `\"-\"`).",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Raw)</th></tr>
            <tr><td>CIL/2026</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (SUBSTITUTE)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">CIL-2026</td></tr>
        `,
        outcomeExplanation: "Replaces the slash '/' characters with dashes '-', returning 'CIL-2026'.",
        simFunction: "runSubstituteSim",
        cardId: "card-substitute"
    },
    countif: {
        name: "COUNTIF",
        queryName: "countif / duplicate checking",
        desc: "COUNTIF counts the number of cells within a range that meet a single criterion. By checking if a value occurs more than once, it serves as a secure duplicate entry detector.",
        syntax: "=COUNTIF(range, criteria) > 1",
        steps: [
            "Select the column beside your entry log (e.g. B2).",
            "Type `=COUNTIF($A$2:$A$5, A2) > 1` (locking the range with $).",
            "Hit Enter. If the value occurs multiple times in Column A, it returns TRUE (indicating a duplicate).",
            "Drag the formula down to evaluate all rows."
        ],
        miniTableInput: `
            <tr><th>A (Log Code)</th></tr>
            <tr><td>CIL-401</td></tr>
            <tr style="background-color: var(--sheet-cell-alert);"><td class="cell-highlight-in">CIL-502</td></tr>
            <tr><td>CIL-305</td></tr>
            <tr style="background-color: var(--sheet-cell-alert);"><td class="cell-highlight-in">CIL-502</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (Is Duplicate?)</th></tr>
            <tr><td>FALSE</td></tr>
            <tr><td class="cell-highlight-out">TRUE</td></tr>
            <tr><td>FALSE</td></tr>
            <tr><td class="cell-highlight-out">TRUE</td></tr>
        `,
        outcomeExplanation: "It scans range A2:A5 for the code. Since 'CIL-502' appears twice, the count is 2 (which is > 1), returning TRUE.",
        simFunction: "runCountifSim",
        cardId: "card-countif"
    },
    iferror: {
        name: "IFERROR",
        queryName: "iferror / error handle / error bypass",
        desc: "IFERROR returns a value you specify if a formula evaluates to an error; otherwise, it returns the result of the formula.",
        syntax: "=IFERROR(value, value_if_error)",
        steps: [
            "Select your formula cell.",
            "Wrap it: `=IFERROR( [your_formula], \"Fallback Message\" )`.",
            "Press Enter. If your formula fails, it prints the fallback text instead of the standard Excel error code."
        ],
        miniTableInput: `
            <tr><th>A (Lookup ID)</th></tr>
            <tr><td>CIL-999 (Invalid)</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (XLOOKUP wrapped in IFERROR)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">Not Synced</td></tr>
        `,
        outcomeExplanation: "XLOOKUP fails to find CIL-999, which would throw #N/A. IFERROR intercepts this and returns 'Not Synced'.",
        simFunction: "runIferrorSim",
        cardId: "card-iferror"
    },
    andor: {
        name: "AND & OR",
        queryName: "and or / logical conditions / check values",
        desc: "AND checks if all conditions are TRUE. OR checks if at least one condition is TRUE. Essential for multi-level weight safety validation checks.",
        syntax: "=AND(logical1, logical2, ...) | =OR(logical1, logical2, ...)",
        steps: [
            "Type `=AND(` inside a logic check column.",
            "Specify first criteria (e.g. `A2>0`).",
            "Specify second criteria (e.g. `A2<=150`).",
            "Close parenthesis and hit Enter. Returns TRUE only if both criteria are satisfied."
        ],
        miniTableInput: `
            <tr><th>A (Weight)</th></tr>
            <tr><td>120</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (=AND(A2>0, A2<=150))</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">TRUE</td></tr>
        `,
        outcomeExplanation: "Since 120 is greater than 0 and less than or equal to 150, both conditions pass and it returns TRUE.",
        simFunction: "runAndOrSim",
        cardId: "card-andor"
    },
    filter: {
        name: "FILTER",
        queryName: "filter / dynamic array filter",
        desc: "FILTER is a dynamic array formula that retrieves matching records from a source database based on custom criteria.",
        syntax: "=FILTER(array, include, [if_empty])",
        steps: [
            "Select the first cell where output range should display.",
            "Type `=FILTER(`.",
            "Select the whole source database range (e.g., A2:C10).",
            "Type a comma, then specify the condition (e.g., B2:B10=\"Dhanbad\").",
            "Type a comma, then add fallback string (e.g., \"No Records\") in case no matches are found.",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Truck)</th><th>B (Area)</th></tr>
            <tr><td>CIL-401</td><td>Dhanbad</td></tr>
            <tr><td>CIL-305</td><td>Argada</td></tr>
        `,
        miniTableOutput: `
            <tr><th>D (Truck Output)</th><th>E (Area Output)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">CIL-401</td><td class="cell-highlight-out">Dhanbad</td></tr>
        `,
        outcomeExplanation: "Filters range A2:B3 to find only rows where Area is 'Dhanbad', outputting a dynamic array with matching cells.",
        simFunction: "runFilterSim",
        cardId: "card-filter"
    },
    hlookup: {
        name: "HLOOKUP",
        queryName: "hlookup / horizontal lookup",
        desc: "HLOOKUP looks for a value in the top row of a table or an array of values, and then returns a value in the same column from a row you specify.",
        syntax: "=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
        steps: [
            "Select your active cell.",
            "Type `=HLOOKUP(`.",
            "Select or type the header label you want to search for (e.g., \"Tare Weight\").",
            "Highlight the horizontal master table range.",
            "Type the row index number where values are located (e.g., 3).",
            "Type `,FALSE` for an exact match, close parenthesis, and hit Enter."
        ],
        miniTableInput: `
            <tr><th>Headers:</th><th>Truck ID</th><th>Tare Weight</th></tr>
            <tr><td>Row 2</td><td>CIL-401</td><td>120 Tons</td></tr>
            <tr><td>Row 3</td><td>CIL-305</td><td>110 Tons</td></tr>
        `,
        miniTableOutput: `
            <tr><th>Active cell result:</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">110 Tons</td></tr>
        `,
        outcomeExplanation: "Searches top row for 'Tare Weight' column, then retrieves value from row 3 under that column, which is '110 Tons'.",
        simFunction: "runHLookupSim",
        cardId: "card-hlookup"
    },
    mid: {
        name: "MID",
        queryName: "mid / middle extract / substring middle",
        desc: "MID returns a specific number of characters from a text string, starting at the position you specify, based on the number of characters you specify.",
        syntax: "=MID(text, start_num, num_chars)",
        steps: [
            "Select target cell.",
            "Type `=MID(`.",
            "Select cell containing raw string (e.g., A2).",
            "Specify the start position index (e.g., 5).",
            "Specify how many characters to extract (e.g., 3).",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Code)</th></tr>
            <tr><td>CIL-SRK-802</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (MID Output)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">SRK</td></tr>
        `,
        outcomeExplanation: "Extracts 3 characters starting from index position 5 of the string 'CIL-SRK-802', yielding 'SRK'.",
        simFunction: "runMidSim",
        cardId: "card-mid"
    },
    len: {
        name: "LEN",
        queryName: "len / text length / count characters",
        desc: "LEN returns the number of characters in a text string, including spaces, special characters, and numbers.",
        syntax: "=LEN(text)",
        steps: [
            "Select target cell.",
            "Type `=LEN(`.",
            "Select the text cell to measure (e.g., A2).",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Text)</th></tr>
            <tr><td>CIL-SRK</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (LEN Output)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">7</td></tr>
        `,
        outcomeExplanation: "Counts characters in 'CIL-SRK', including hyphen, returning a count of 7.",
        simFunction: "runLenSim",
        cardId: "card-len"
    },
    replace: {
        name: "REPLACE",
        queryName: "replace / swap position characters",
        desc: "REPLACE replaces part of a text string, based on the number of characters you specify, with a different text string.",
        syntax: "=REPLACE(old_text, start_num, num_chars, new_text)",
        steps: [
            "Select target cell.",
            "Type `=REPLACE(`.",
            "Click on the cell with original text (e.g., A2).",
            "Type start character position index (e.g., 5).",
            "Type number of characters to delete/swap (e.g., 4).",
            "Enter new replacement text in quotes (e.g., \"2026\").",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Code)</th></tr>
            <tr><td>CIL-2023</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (REPLACE Output)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">CIL-2026</td></tr>
        `,
        outcomeExplanation: "Replaces 4 characters starting from index 5 ('2023') with '2026', yielding 'CIL-2026'.",
        simFunction: "runReplaceSim",
        cardId: "card-replace"
    },
    text: {
        name: "TEXT",
        queryName: "text / format number / convert date text",
        desc: "TEXT converts a numeric value to text and lets you format the display of a number by using special format strings.",
        syntax: "=TEXT(value, format_text)",
        steps: [
            "Select target cell.",
            "Type `=TEXT(`.",
            "Click cell containing target number/date (e.g., A2).",
            "Specify formatting string in quotes (e.g., \"0000\").",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Value)</th></tr>
            <tr><td>45</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (TEXT Output)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">0045</td></tr>
        `,
        outcomeExplanation: "Converts number 45 into text formatted with padding zeros, returning '0045'.",
        simFunction: "runTextSim",
        cardId: "card-text"
    },
    value: {
        name: "VALUE",
        queryName: "value / text to number converter",
        desc: "VALUE converts a text string that represents a number into a standard numeric value.",
        syntax: "=VALUE(text)",
        steps: [
            "Select target cell.",
            "Type `=VALUE(`.",
            "Click on the text cell containing digit chars (e.g., A2).",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Text digits)</th></tr>
            <tr><td>"120"</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (VALUE Output)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">120</td></tr>
        `,
        outcomeExplanation: "Converts text string '120' into an active number 120 ready for mathematical equations.",
        simFunction: "runValueSim",
        cardId: "card-value"
    },
    if: {
        name: "IF",
        queryName: "if / check condition / switch check",
        desc: "IF performs a logical test and returns one value if the test evaluates to TRUE, and another value if it evaluates to FALSE.",
        syntax: "=IF(logical_test, value_if_true, value_if_false)",
        steps: [
            "Select target cell.",
            "Type `=IF(`.",
            "Specify your conditional test expression (e.g., A2>100).",
            "Type a comma, then specify outcome value if condition is met (e.g., \"Overload\").",
            "Type a comma, then specify outcome if condition is not met (e.g., \"Safe\").",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Weight)</th></tr>
            <tr><td>120</td></tr>
        `,
        miniTableOutput: `
            <tr><th>B (IF Result)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">Overload</td></tr>
        `,
        outcomeExplanation: "Since 120 is greater than 100, the condition is true and it outputs 'Overload'.",
        simFunction: "runIfSim",
        cardId: "card-if"
    },
    iserror: {
        name: "ISERROR",
        queryName: "iserror / error test / formula validity check",
        desc: "ISERROR tests if a calculation or cell reference yields an error (#VALUE!, #DIV/0!, #N/A, #REF!, etc.) and returns TRUE or FALSE.",
        syntax: "=ISERROR(value)",
        steps: [
            "Select target cell.",
            "Type `=ISERROR(`.",
            "Select the calculation or cell to test (e.g., A2/B2).",
            "Close parenthesis and hit Enter."
        ],
        miniTableInput: `
            <tr><th>A (Val)</th><th>B (Div)</th></tr>
            <tr><td>100</td><td>0</td></tr>
        `,
        miniTableOutput: `
            <tr><th>C (ISERROR result)</th></tr>
            <tr style="background-color: var(--sheet-cell-selected); font-weight: bold;"><td class="cell-highlight-out">TRUE</td></tr>
        `,
        outcomeExplanation: "Dividing 100 by 0 yields a division error #DIV/0!. ISERROR flags this and outputs TRUE.",
        simFunction: "runIsErrorSim",
        cardId: "card-iserror"
    }
};

function getLevenshteinDistance(a, b) {
    const tmp = [];
    let i, j;
    for (i = 0; i <= a.length; i++) {
        tmp[i] = [i];
    }
    for (j = 0; j <= b.length; j++) {
        tmp[0][j] = j;
    }
    for (i = 1; i <= a.length; i++) {
        for (j = 1; j <= b.length; j++) {
            tmp[i][j] = Math.min(
                tmp[i - 1][j] + 1,
                tmp[i][j - 1] + 1,
                tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
            );
        }
    }
    return tmp[a.length][b.length];
}

function findFormulaKey(query) {
    const clean = query.toLowerCase().trim();
    if (clean === "") return null;
    
    // Spelling typos map
    const TYPO_MAP = {
        "conact": "concat",
        "conct": "concat",
        "cancat": "concat",
        "conac": "concat",
        "cancet": "concat",
        "upr": "upper",
        "uper": "upper",
        "upeer": "upper",
        "lwr": "lower",
        "lowr": "lower",
        "trm": "trim",
        "tirm": "trim",
        "loko": "xlookup",
        "lokup": "xlookup",
        "vlook": "xlookup",
        "xlook": "xlookup",
        "lukup": "xlookup",
        "luco": "xlookup",
        "countf": "countif",
        "contif": "countif",
        "cuntif": "countif",
        "vlookup": "vlookup",
        "vlokup": "vlookup",
        "vlukup": "vlookup",
        "indx": "indexmatch",
        "index": "indexmatch",
        "match": "indexmatch",
        "textjoin": "textjoin",
        "txtjoin": "textjoin",
        "left": "leftright",
        "right": "leftright",
        "lower": "lower",
        "proper": "proper",
        "prpr": "proper",
        "clean": "clean",
        "clen": "clean",
        "substitute": "substitute",
        "substitut": "substitute",
        "iferror": "iferror",
        "iferr": "iferror",
        "and": "andor",
        "or": "andor",
        "filter": "filter",
        "hlookup": "hlookup",
        "hlokup": "hlookup",
        "mid": "mid",
        "len": "len",
        "length": "len",
        "replace": "replace",
        "text": "text",
        "value": "value",
        "if": "if",
        "iserror": "iserror",
        "iserr": "iserror"
    };
    
    if (TYPO_MAP[clean]) {
        return TYPO_MAP[clean];
    }
    
    const keys = Object.keys(FORMULA_DATABASE);
    for (let k of keys) {
        if (clean.includes(k) || k.includes(clean)) {
            return k;
        }
    }
    
    const tokens = clean.split(/\s+/);
    for (let token of tokens) {
        if (TYPO_MAP[token]) return TYPO_MAP[token];
        for (let k of keys) {
            if (token.includes(k) || k.includes(token)) {
                return k;
            }
        }
    }
    
    let bestKey = null;
    let minDistance = 3; // distance threshold
    for (let k of keys) {
        for (let token of tokens) {
            const dist = getLevenshteinDistance(token, k);
            if (dist < minDistance) {
                minDistance = dist;
                bestKey = k;
            }
        }
    }
    
    return bestKey;
}

function closeGenAISolver() {
    document.getElementById('genai-excel-solver-panel').classList.add('hidden');
    // Reveal all cards
    const cards = document.querySelectorAll('#cheatsheet-cards-container .cheat-card');
    cards.forEach(card => card.classList.remove('hidden'));
    // Clear search input
    document.getElementById('cheatsheet-search').value = "";
}

function triggerSimulatorFromAI(simFunctionName, cardId) {
    const cardEl = document.getElementById(cardId);
    if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        cardEl.style.outline = "3px solid #6366f1";
        cardEl.style.outlineOffset = "4px";
        setTimeout(() => {
            cardEl.style.outline = "";
        }, 2000);
    }
    
    if (simFunctionName && typeof window[simFunctionName] === 'function') {
        const btn = document.querySelector(`#${cardId} .btn-run-sim`);
        if (btn) {
            window[simFunctionName](btn);
        }
    }
}

function renderGenAISolverPanel(key, originalQuery) {
    const data = FORMULA_DATABASE[key];
    const body = document.getElementById('genai-excel-solver-body');
    const panel = document.getElementById('genai-excel-solver-panel');
    
    panel.classList.remove('hidden');
    
    let correctionHtml = "";
    if (originalQuery && originalQuery.toLowerCase().trim() !== data.name.toLowerCase()) {
        correctionHtml = `<span class="genai-query-correction">(Matched for search: "<strong>${originalQuery}</strong>")</span>`;
    }
    
    let stepsHtml = data.steps.map(step => `<li>${step}</li>`).join('');
    
    body.innerHTML = `
        <div class="genai-response-block">
            <div class="genai-matched-formula">
                <span class="genai-matched-title">${data.name} Formula</span>
                ${correctionHtml}
            </div>
            
            <p class="genai-explanation-text">
                <strong>AI Explanation:</strong> ${data.desc}
            </p>
            
            <div>
                <div class="genai-section-title">Formula Syntax</div>
                <div class="genai-code-block">${data.syntax}</div>
            </div>
            
            <div>
                <div class="genai-section-title">How to Apply (Step-by-Step)</div>
                <ol class="genai-steps-list">
                    ${stepsHtml}
                </ol>
            </div>
            
            <div class="genai-outcome-comparison">
                <div class="genai-section-title">Outcome Preview (Before vs After)</div>
                
                <div class="genai-outcome-tables">
                    <div class="genai-mini-table-wrap">
                        <div class="table-title">Raw Input Data (Before)</div>
                        <table class="genai-mini-table">
                            <tbody>
                                ${data.miniTableInput}
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="genai-mini-table-wrap">
                        <div class="table-title">Processed Outcome (After)</div>
                        <table class="genai-mini-table">
                            <tbody>
                                ${data.miniTableOutput}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <p class="small-subtext" style="font-size: 12px; color: var(--text-secondary); margin-top: 6px;">
                    <strong>Outcome:</strong> ${data.outcomeExplanation}
                </p>
            </div>
            
            <div class="genai-actions-row">
                <button class="btn-ai-simulate" onclick="triggerSimulatorFromAI('${data.simFunction}', '${data.cardId}')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <span>Run Live Simulator in Excel Grid</span>
                </button>
            </div>
        </div>
    `;
}

// -------------------------------------------------------------
// Excel Category Filtering
// -------------------------------------------------------------
function filterCategory(categoryName) {
    // 1. Update filter pill active classes using data-category
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
        const cat = pill.getAttribute('data-category');
        if (cat === categoryName) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });
    
    // 2. Hide GenAI solver panel
    const solverPanel = document.getElementById('genai-excel-solver-panel');
    if (solverPanel) solverPanel.classList.add('hidden');
    
    // 3. Clear search bar value
    const searchInput = document.getElementById('cheatsheet-search');
    if (searchInput) searchInput.value = "";
    
    // 4. Show/Hide cards
    const cards = document.querySelectorAll('#cheatsheet-cards-container .cheat-card');
    cards.forEach(card => {
        const badge = card.querySelector('.cheat-badge');
        if (categoryName === 'all') {
            card.classList.remove('hidden');
        } else if (badge && (badge.textContent || badge.innerText || "").trim().toLowerCase() === categoryName.toLowerCase()) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function searchCheatsheet() {
    // Reset category filter pills to 'all' using data-category
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
        const cat = pill.getAttribute('data-category');
        if (cat === 'all') {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    const searchInput = document.getElementById('cheatsheet-search');
    const filterText = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('#cheatsheet-cards-container .cheat-card');
    
    if (filterText === '') {
        // Reset all visible
        document.getElementById('genai-excel-solver-panel').classList.add('hidden');
        cards.forEach(card => card.classList.remove('hidden'));
        return;
    }
    
    // Check if we can fuzzy match a formula
    const matchedKey = findFormulaKey(filterText);
    
    if (matchedKey && FORMULA_DATABASE[matchedKey]) {
        renderGenAISolverPanel(matchedKey, searchInput.value.trim());
        
        // Hide all cards except the matched one
        const activeCardId = FORMULA_DATABASE[matchedKey].cardId;
        cards.forEach(card => {
            if (card.id === activeCardId) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    } else {
        // Hide solver panel
        document.getElementById('genai-excel-solver-panel').classList.add('hidden');
        
        // Tokenize search query (split by spaces) and filter cards
        const queryTokens = filterText.split(/\s+/);
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const tags = card.getAttribute('data-tags') || '';
            
            let isMatch = false;
            for (let token of queryTokens) {
                if (token && (text.includes(token) || tags.toLowerCase().includes(token))) {
                    isMatch = true;
                    break;
                }
            }
            
            if (isMatch) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
}

// -------------------------------------------------------------
// 9. INTERACTIVE EXCEL VISUAL SIMULATORS
// -------------------------------------------------------------

// simulator 1: XLOOKUP Match simulation
function runXLookupSim(btn) {
    btn.disabled = true;
    btn.innerText = "Matching...";
    
    const cellKey = document.querySelector('#xlook-table-a .cell-key');
    const cellMatchKey = document.querySelector('#xlook-table-b .cell-match-key');
    const cellMatchValue = document.querySelector('#xlook-table-b .cell-match-value');
    const cellOutput = document.getElementById('xlook-output-cell');
    
    // Reset colors
    cellKey.style.backgroundColor = "";
    cellMatchKey.style.backgroundColor = "";
    cellMatchValue.style.backgroundColor = "";
    cellOutput.classList.remove('cell-highlight-success');
    cellOutput.innerText = "...";
    
    // Step 1: Highlight lookup value cell CIL-902
    setTimeout(() => {
        cellKey.style.backgroundColor = "var(--primary-navy)";
        cellKey.style.color = "#ffffff";
        
        // Step 2: Highlight matching record row in master table
        setTimeout(() => {
            cellMatchKey.style.backgroundColor = "#3b82f6";
            cellMatchKey.style.color = "#ffffff";
            cellMatchValue.style.backgroundColor = "#fbbf24";
            cellMatchValue.style.color = "#000000";
            
            // Step 3: Populate weight value and highlight target cell with success green
            setTimeout(() => {
                cellOutput.innerText = "95";
                cellOutput.classList.add('cell-highlight-success');
                
                // Done restore
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = "Run Simulation";
                    
                    // Clear search highlight colors slowly
                    setTimeout(() => {
                        cellKey.style.backgroundColor = "";
                        cellKey.style.color = "";
                        cellMatchKey.style.backgroundColor = "";
                        cellMatchKey.style.color = "";
                        cellMatchValue.style.backgroundColor = "";
                        cellMatchValue.style.color = "";
                    }, 2000);
                }, 1000);
            }, 800);
        }, 800);
    }, 200);
}

// simulator 2: CONCAT Text Merger simulation
function runConcatSim(btn) {
    btn.disabled = true;
    btn.innerText = "Merging...";
    
    const valA = document.getElementById('concat-val-a');
    const valB = document.getElementById('concat-val-b');
    const valC = document.getElementById('concat-val-c');
    const cellOutput = document.getElementById('concat-output-cell');
    
    // Reset
    valA.classList.remove('cell-concat-active');
    valB.classList.remove('cell-concat-active');
    valC.classList.remove('cell-concat-active');
    cellOutput.classList.remove('cell-highlight-success');
    cellOutput.innerText = "...";
    
    // Step 1: Highlight inputs
    setTimeout(() => {
        valA.classList.add('cell-concat-active');
        valB.classList.add('cell-concat-active');
        valC.classList.add('cell-concat-active');
        
        // Step 2: Combine fields to target output
        setTimeout(() => {
            cellOutput.innerText = "CIL-902 (Dhanbad)";
            cellOutput.classList.add('cell-highlight-success');
            
            // Done restore
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Merge";
                
                // Remove highlight markers slowly
                setTimeout(() => {
                    valA.classList.remove('cell-concat-active');
                    valB.classList.remove('cell-concat-active');
                    valC.classList.remove('cell-concat-active');
                }, 2000);
            }, 1000);
        }, 1200);
    }, 200);
}

// simulator 3: Case Conversion UPPER/LOWER simulation
function runCaseSim(btn) {
    btn.disabled = true;
    btn.innerText = "Converting...";
    
    const inputCell = document.getElementById('case-input-cell');
    const outputCell = document.getElementById('case-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    inputCell.style.color = "";
    outputCell.classList.remove('cell-highlight-success');
    outputCell.innerText = "...";
    
    // Step 1: Highlight input cell containing lowercase "ccl dispatch"
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        // Step 2: Convert to UPPERCASE and write to output cell with success green
        setTimeout(() => {
            outputCell.innerText = "CCL DISPATCH";
            outputCell.classList.add('cell-highlight-success');
            
            // Done restore
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Case Change";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator 4: TRIM Space Trimming simulation
function runTrimSim(btn) {
    btn.disabled = true;
    btn.innerText = "Cleaning...";
    
    const dirtyCell = document.getElementById('trim-dirty-cell');
    const cleanOutput = document.getElementById('trim-output-cell');
    
    // Reset
    dirtyCell.style.backgroundColor = "";
    dirtyCell.style.color = "";
    dirtyCell.innerHTML = '"&nbsp;&nbsp;&nbsp;CIL-105&nbsp;&nbsp;"';
    cleanOutput.classList.remove('cell-highlight-success');
    cleanOutput.innerText = "...";
    
    // Step 1: Flash error space cell in red
    setTimeout(() => {
        dirtyCell.style.backgroundColor = "var(--sheet-cell-alert)";
        dirtyCell.style.color = "#ef4444";
        
        // Step 2: Remove spaces from input cell text visually
        setTimeout(() => {
            dirtyCell.innerHTML = '"CIL-105"';
            dirtyCell.style.backgroundColor = "#fed7aa";
            dirtyCell.style.color = "#ea580c";
            
            // Step 3: Write trimmed clean data to output column
            setTimeout(() => {
                cleanOutput.innerText = "CIL-105";
                cleanOutput.classList.add('cell-highlight-success');
                
                // Done restore
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = "Run Space Clear";
                    
                    setTimeout(() => {
                        dirtyCell.style.backgroundColor = "";
                        dirtyCell.style.color = "";
                    }, 2000);
                }, 1000);
            }, 800);
        }, 1000);
    }, 200);
}

// simulator 5: COUNTIF duplication highlight
function runCountifSim(btn) {
    btn.disabled = true;
    btn.innerText = "Checking...";
    
    const dupRows = document.querySelectorAll('#countif-sim-table tbody tr[data-duplicate="true"]');
    const cleanRows = document.querySelectorAll('#countif-sim-table tbody tr:not([data-duplicate="true"])');
    const outputCells = document.querySelectorAll('.cell-output-countif');
    
    // Reset
    document.querySelectorAll('#countif-sim-table tbody tr').forEach(row => {
        row.classList.remove('row-duplicate-active');
    });
    outputCells.forEach(cell => {
        cell.innerText = "...";
        cell.style.color = "";
        cell.style.fontWeight = "";
    });
    
    // Step 1: Check inputs and fill non-duplicates as FALSE
    setTimeout(() => {
        cleanRows.forEach(row => {
            const cell = row.querySelector('.cell-result');
            cell.innerText = "FALSE";
        });
        
        // Step 2: Flash duplicates CIL-502 rows in red
        setTimeout(() => {
            dupRows.forEach(row => {
                row.classList.add('row-duplicate-active');
            });
            
            // Step 3: Write TRUE results inside duplicate outputs
            setTimeout(() => {
                outputCells.forEach(cell => {
                    cell.innerText = "TRUE";
                    cell.style.color = "#dc2626";
                    cell.style.fontWeight = "700";
                });
                
                // Done restore
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = "Run Duplicate Check";
                }, 1000);
            }, 800);
        }, 800);
    }, 300);
}

// simulator: VLOOKUP Match simulation
function runVLookupSim(btn) {
    btn.disabled = true;
    btn.innerText = "Matching...";
    
    const cellKey = document.querySelector('#vlook-table-a .cell-key');
    const cellMatchKey = document.querySelector('#vlook-table-b .cell-match-key');
    const cellMatchValue = document.querySelector('#vlook-table-b .cell-match-value');
    const cellOutput = document.getElementById('vlook-output-cell');
    
    // Reset colors
    cellKey.style.backgroundColor = "";
    cellMatchKey.style.backgroundColor = "";
    cellMatchValue.style.backgroundColor = "";
    cellOutput.classList.remove('cell-highlight-success');
    cellOutput.innerText = "...";
    
    setTimeout(() => {
        cellKey.style.backgroundColor = "var(--primary-navy)";
        cellKey.style.color = "#ffffff";
        
        setTimeout(() => {
            cellMatchKey.style.backgroundColor = "#3b82f6";
            cellMatchKey.style.color = "#ffffff";
            cellMatchValue.style.backgroundColor = "#fbbf24";
            cellMatchValue.style.color = "#000000";
            
            setTimeout(() => {
                cellOutput.innerText = "95";
                cellOutput.classList.add('cell-highlight-success');
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = "Run Simulation";
                    
                    setTimeout(() => {
                        cellKey.style.backgroundColor = "";
                        cellKey.style.color = "";
                        cellMatchKey.style.backgroundColor = "";
                        cellMatchKey.style.color = "";
                        cellMatchValue.style.backgroundColor = "";
                        cellMatchValue.style.color = "";
                    }, 2000);
                }, 1000);
            }, 800);
        }, 800);
    }, 200);
}

// simulator: INDEX & MATCH simulation
function runIndexMatchSim(btn) {
    btn.disabled = true;
    btn.innerText = "Matching...";
    
    const cellKey = document.querySelector('#indexmatch-table-a .cell-key');
    const cellMatchKey = document.querySelector('#indexmatch-table-b .cell-match-key');
    const cellMatchValue = document.querySelector('#indexmatch-table-b .cell-match-value');
    const cellOutput = document.getElementById('indexmatch-output-cell');
    
    // Reset
    cellKey.style.backgroundColor = "";
    cellMatchKey.style.backgroundColor = "";
    cellMatchValue.style.backgroundColor = "";
    cellOutput.classList.remove('cell-highlight-success');
    cellOutput.innerText = "...";
    
    setTimeout(() => {
        cellKey.style.backgroundColor = "var(--primary-navy)";
        cellKey.style.color = "#ffffff";
        
        setTimeout(() => {
            cellMatchKey.style.backgroundColor = "#3b82f6";
            cellMatchKey.style.color = "#ffffff";
            
            setTimeout(() => {
                cellMatchValue.style.backgroundColor = "#fbbf24";
                cellMatchValue.style.color = "#000000";
                
                setTimeout(() => {
                    cellOutput.innerText = "Dhanbad";
                    cellOutput.classList.add('cell-highlight-success');
                    
                    setTimeout(() => {
                        btn.disabled = false;
                        btn.innerText = "Run Simulation";
                        
                        setTimeout(() => {
                            cellKey.style.backgroundColor = "";
                            cellKey.style.color = "";
                            cellMatchKey.style.backgroundColor = "";
                            cellMatchKey.style.color = "";
                            cellMatchValue.style.backgroundColor = "";
                            cellMatchValue.style.color = "";
                        }, 2000);
                    }, 1000);
                }, 800);
            }, 800);
        }, 800);
    }, 200);
}

// simulator: FILTER simulation
function runFilterSim(btn) {
    btn.disabled = true;
    btn.innerText = "Filtering...";
    
    const sourceRows = document.querySelectorAll('#filter-table-source tbody tr');
    const outRow1 = document.getElementById('filter-out-row-1');
    const outRow2 = document.getElementById('filter-out-row-2');
    
    // Reset
    sourceRows.forEach(row => row.style.backgroundColor = "");
    outRow1.querySelectorAll('td.cell-output').forEach(td => {
        td.innerText = "...";
        td.classList.remove('cell-highlight-success');
    });
    outRow2.querySelectorAll('td.cell-output').forEach(td => {
        td.innerText = "...";
        td.classList.remove('cell-highlight-success');
    });
    
    setTimeout(() => {
        // Highlight matching source row 1 (index 0) and row 3 (index 2)
        sourceRows[0].style.backgroundColor = "#fef3c7";
        sourceRows[2].style.backgroundColor = "#fef3c7";
        
        setTimeout(() => {
            // Write first matching row
            const tds1 = outRow1.querySelectorAll('td.cell-output');
            tds1[0].innerText = "CIL-902";
            tds1[1].innerText = "Dhanbad";
            tds1[2].innerText = "95";
            tds1.forEach(td => td.classList.add('cell-highlight-success'));
            
            setTimeout(() => {
                // Write second matching row
                const tds2 = outRow2.querySelectorAll('td.cell-output');
                tds2[0].innerText = "CIL-401";
                tds2[1].innerText = "Dhanbad";
                tds2[2].innerText = "120";
                tds2.forEach(td => td.classList.add('cell-highlight-success'));
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = "Run Simulation";
                    
                    setTimeout(() => {
                        sourceRows[0].style.backgroundColor = "";
                        sourceRows[2].style.backgroundColor = "";
                    }, 2000);
                }, 1000);
            }, 800);
        }, 800);
    }, 200);
}

// simulator: HLOOKUP simulation
function runHLookupSim(btn) {
    btn.disabled = true;
    btn.innerText = "Searching...";
    
    const header3 = document.getElementById('hlook-header-3');
    const targetCell = document.getElementById('hlook-target-cell');
    const output = document.getElementById('hlook-output');
    
    // Reset
    header3.style.backgroundColor = "";
    header3.style.color = "";
    targetCell.style.backgroundColor = "";
    targetCell.style.color = "";
    output.innerText = "...";
    output.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        header3.style.backgroundColor = "var(--primary-navy)";
        header3.style.color = "#ffffff";
        
        setTimeout(() => {
            targetCell.style.backgroundColor = "#fbbf24";
            targetCell.style.color = "#000000";
            
            setTimeout(() => {
                output.innerText = "110 Tons";
                output.classList.add('cell-highlight-success');
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = "Run Simulation";
                    
                    setTimeout(() => {
                        header3.style.backgroundColor = "";
                        header3.style.color = "";
                        targetCell.style.backgroundColor = "";
                        targetCell.style.color = "";
                    }, 2000);
                }, 1000);
            }, 800);
        }, 800);
    }, 200);
}

// simulator: TEXTJOIN simulation
function runTextjoinSim(btn) {
    btn.disabled = true;
    btn.innerText = "Joining...";
    
    const valA = document.getElementById('textjoin-val-a');
    const valC = document.getElementById('textjoin-val-c');
    const outputCell = document.getElementById('textjoin-output-cell');
    
    // Reset
    valA.classList.remove('cell-concat-active');
    valC.classList.remove('cell-concat-active');
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        valA.classList.add('cell-concat-active');
        valC.classList.add('cell-concat-active');
        
        setTimeout(() => {
            outputCell.innerText = "CIL, Argada";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    valA.classList.remove('cell-concat-active');
                    valC.classList.remove('cell-concat-active');
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: LEFT & RIGHT simulation
function runLeftRightSim(btn) {
    btn.disabled = true;
    btn.innerText = "Extracting...";
    
    const inputCell = document.getElementById('leftright-input-cell');
    const leftCell = document.getElementById('left-output-cell');
    const rightCell = document.getElementById('right-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    leftCell.innerText = "...";
    leftCell.classList.remove('cell-highlight-success');
    rightCell.innerText = "...";
    rightCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            leftCell.innerText = "CIL";
            leftCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                rightCell.innerText = "802";
                rightCell.classList.add('cell-highlight-success');
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = "Run Simulation";
                    
                    setTimeout(() => {
                        inputCell.style.backgroundColor = "";
                    }, 2000);
                }, 1000);
            }, 600);
        }, 800);
    }, 200);
}

// simulator: MID simulation
function runMidSim(btn) {
    btn.disabled = true;
    btn.innerText = "Extracting...";
    
    const inputCell = document.getElementById('mid-input-cell');
    const outputCell = document.getElementById('mid-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            outputCell.innerText = "SRK";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: LEN simulation
function runLenSim(btn) {
    btn.disabled = true;
    btn.innerText = "Counting...";
    
    const inputCell = document.getElementById('len-input-cell');
    const outputCell = document.getElementById('len-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            outputCell.innerText = "7";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: LOWER case conversion simulation
function runLowerSim(btn) {
    btn.disabled = true;
    btn.innerText = "Converting...";
    
    const inputCell = document.getElementById('lower-input-cell');
    const outputCell = document.getElementById('lower-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            outputCell.innerText = "ccl dispatch";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: PROPER name conversion simulation
function runProperSim(btn) {
    btn.disabled = true;
    btn.innerText = "Converting...";
    
    const inputCell = document.getElementById('proper-input-cell');
    const outputCell = document.getElementById('proper-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            outputCell.innerText = "Dhananjay Kumar Singh";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: REPLACE position simulation
function runReplaceSim(btn) {
    btn.disabled = true;
    btn.innerText = "Replacing...";
    
    const inputCell = document.getElementById('replace-input-cell');
    const outputCell = document.getElementById('replace-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            outputCell.innerText = "CIL-2026";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: CLEAN simulation
function runCleanSim(btn) {
    btn.disabled = true;
    btn.innerText = "Cleaning...";
    
    const inputCell = document.getElementById('clean-input-cell');
    const outputCell = document.getElementById('clean-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-alert)";
        
        setTimeout(() => {
            outputCell.innerText = "CIL-401";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: SUBSTITUTE simulation
function runSubstituteSim(btn) {
    btn.disabled = true;
    btn.innerText = "Substituting...";
    
    const inputCell = document.getElementById('substitute-input-cell');
    const outputCell = document.getElementById('substitute-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            outputCell.innerText = "CIL-2026";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: TEXT simulation
function runTextSim(btn) {
    btn.disabled = true;
    btn.innerText = "Formatting...";
    
    const inputCell = document.getElementById('text-input-cell');
    const outputCell = document.getElementById('text-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            outputCell.innerText = "0045";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: VALUE simulation
function runValueSim(btn) {
    btn.disabled = true;
    btn.innerText = "Converting...";
    
    const inputCell = document.getElementById('value-input-cell');
    const outputCell = document.getElementById('value-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            outputCell.innerText = "120";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: IFERROR simulation
function runIferrorSim(btn) {
    btn.disabled = true;
    btn.innerText = "Evaluating...";
    
    const inputCell = document.getElementById('iferror-input-cell');
    const outputCell = document.getElementById('iferror-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-alert)";
        
        setTimeout(() => {
            outputCell.innerText = "Not Synced";
            outputCell.classList.add('cell-highlight-success');
            
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = "Run Simulation";
                
                setTimeout(() => {
                    inputCell.style.backgroundColor = "";
                }, 2000);
            }, 1000);
        }, 1000);
    }, 200);
}

// simulator: AND & OR simulation
function runAndOrSim(btn) {
    btn.disabled = true;
    btn.innerText = "Checking...";
    
    const inputCell = document.getElementById('andor-input-cell');
    const checksCell = document.getElementById('andor-checks-cell');
    const outputCell = document.getElementById('andor-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    checksCell.innerText = "Evaluating...";
    checksCell.style.color = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            checksCell.innerText = "120>0 (TRUE) & 120<=150 (TRUE)";
            checksCell.style.color = "#16a34a";
            
            setTimeout(() => {
                outputCell.innerText = "TRUE";
                outputCell.classList.add('cell-highlight-success');
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = "Run Simulation";
                    
                    setTimeout(() => {
                        inputCell.style.backgroundColor = "";
                    }, 2000);
                }, 1000);
            }, 800);
        }, 800);
    }, 200);
}

// simulator: IF simulation
function runIfSim(btn) {
    btn.disabled = true;
    btn.innerText = "Checking...";
    
    const inputCell = document.getElementById('if-input-cell');
    const checkCell = document.getElementById('if-check-cell');
    const outputCell = document.getElementById('if-output-cell');
    
    // Reset
    inputCell.style.backgroundColor = "";
    checkCell.innerText = "Checking...";
    checkCell.style.color = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        inputCell.style.backgroundColor = "var(--sheet-cell-selected)";
        
        setTimeout(() => {
            checkCell.innerText = "120 > 100 is TRUE";
            checkCell.style.color = "#16a34a";
            
            setTimeout(() => {
                outputCell.innerText = "Overload";
                outputCell.classList.add('cell-highlight-success');
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = "Run Simulation";
                    
                    setTimeout(() => {
                        inputCell.style.backgroundColor = "";
                    }, 2000);
                }, 1000);
            }, 800);
        }, 800);
    }, 200);
}

// simulator: ISERROR simulation
function runIsErrorSim(btn) {
    btn.disabled = true;
    btn.innerText = "Checking...";
    
    const divCell = document.getElementById('iserror-input-divisor');
    const calcCell = document.getElementById('iserror-calc-cell');
    const outputCell = document.getElementById('iserror-output-cell');
    
    // Reset
    divCell.style.backgroundColor = "";
    calcCell.style.backgroundColor = "";
    outputCell.innerText = "...";
    outputCell.classList.remove('cell-highlight-success');
    
    setTimeout(() => {
        divCell.style.backgroundColor = "var(--sheet-cell-alert)";
        
        setTimeout(() => {
            calcCell.style.backgroundColor = "var(--sheet-cell-alert)";
            
            setTimeout(() => {
                outputCell.innerText = "TRUE";
                outputCell.classList.add('cell-highlight-success');
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = "Run Simulation";
                    
                    setTimeout(() => {
                        divCell.style.backgroundColor = "";
                        calcCell.style.backgroundColor = "";
                    }, 2000);
                }, 1000);
            }, 800);
        }, 800);
    }, 200);
}

// -------------------------------------------------------------
// 10. CIL / CCL PORTAL HUB LOGIC & SIMULATION
// -------------------------------------------------------------
// -------------------------------------------------------------
// 10. CIL / CCL PORTAL HUB LOGIC & SIMULATION
// -------------------------------------------------------------
// Directory of known Indian stocks for search verification
const STOCK_DIRECTORY = {
    "RELIANCE": { name: "Reliance Industries Ltd", sector: "Oil & Gas, Telecom", price: 2450.35 },
    "TATASTEEL": { name: "Tata Steel Limited", sector: "Metals & Mining", price: 174.50 },
    "INFY": { name: "Infosys Limited", sector: "IT Services", price: 1450.80 },
    "TCS": { name: "Tata Consultancy Services", sector: "IT Services", price: 3820.10 },
    "SBIN": { name: "State Bank of India", sector: "Banking - PSU", price: 830.45 },
    "SBI": { name: "State Bank of India", sector: "Banking - PSU", price: 830.45 },
    "ITC": { name: "ITC Limited", sector: "Consumer Goods", price: 435.20 },
    "LT": { name: "Larsen & Toubro Ltd", sector: "Construction & Eng", price: 3450.90 },
    "BHARTIARTL": { name: "Bharti Airtel Limited", sector: "Telecom", price: 1390.65 },
    "ICICIBANK": { name: "ICICI Bank Limited", sector: "Banking", price: 1120.15 },
    "HDFCBANK": { name: "HDFC Bank Limited", sector: "Banking", price: 1530.40 },
    "COALINDIA": { name: "Coal India Limited", sector: "Energy & Mining - PSU", price: 442.65 },
    "NTPC": { name: "NTPC Limited", sector: "Utilities - PSU", price: 362.40 },
    "ONGC": { name: "Oil and Natural Gas Corp", sector: "Oil & Gas - PSU", price: 280.15 }
};

// Load or initialize stock watchlist database
let WATCHLIST_DATABASE = JSON.parse(localStorage.getItem('watchlist_database'));
if (!WATCHLIST_DATABASE) {
    WATCHLIST_DATABASE = {
        COALINDIA: {
            symbol: "COALINDIA",
            name: "Coal India Limited",
            sector: "Energy & Mining - PSU",
            basePrice: 442.65,
            baseChange: 3.45,
            prevClose: 439.20,
            open: 440.00,
            dayRange: "₹439.50 - ₹445.80",
            range52w: "₹380.00 - ₹510.40",
            market: "NSE"
        },
        NTPC: {
            symbol: "NTPC",
            name: "NTPC Limited",
            sector: "Utilities - PSU",
            basePrice: 362.40,
            baseChange: -1.25,
            prevClose: 363.65,
            open: 363.00,
            dayRange: "₹360.20 - ₹365.40",
            range52w: "₹210.50 - ₹380.00",
            market: "NSE"
        },
        ONGC: {
            symbol: "ONGC",
            name: "Oil and Natural Gas Corp",
            sector: "Oil & Gas - PSU",
            basePrice: 280.15,
            baseChange: 4.80,
            prevClose: 275.35,
            open: 276.00,
            dayRange: "₹275.50 - ₹284.20",
            range52w: "₹155.00 - ₹295.00",
            market: "NSE"
        }
    };
    localStorage.setItem('watchlist_database', JSON.stringify(WATCHLIST_DATABASE));
}

let activeStockSymbol = "COALINDIA";
let activeSearchResult = null;
let epfoCaptchaText = "";

// -------------------------------------------------------------
// STOCK SEARCH & WATCHLIST RENDERING
// -------------------------------------------------------------
function renderWatchlist() {
    const container = document.getElementById('stock-watchlist-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.keys(WATCHLIST_DATABASE).forEach(sym => {
        const data = WATCHLIST_DATABASE[sym];
        const percent = ((data.baseChange / (data.basePrice - data.baseChange)) * 100).toFixed(2);
        
        const card = document.createElement('div');
        card.className = `watchlist-item ${sym === activeStockSymbol ? 'active' : ''}`;
        card.setAttribute('data-symbol', sym);
        card.onclick = () => selectStock(sym);
        
        // Add a delete option for custom-added stocks
        let deleteBtnHtml = "";
        if (sym !== 'COALINDIA') {
            deleteBtnHtml = `<button class="delete-stock-btn" onclick="event.stopPropagation(); deleteStock('${sym}')" title="Remove from watchlist">&times;</button>`;
        }
        
        card.innerHTML = `
            ${deleteBtnHtml}
            <span class="watchlist-sym">${sym}</span>
            <span class="watchlist-price">₹${data.basePrice.toFixed(2)}</span>
            <span class="watchlist-change ${data.baseChange >= 0 ? 'up' : 'down'}">
                ${data.baseChange >= 0 ? '▲' : '▼'} ${Math.abs(percent)}%
            </span>
        `;
        
        container.appendChild(card);
    });
}

function updateWatchlistTilesOnly() {
    const container = document.getElementById('stock-watchlist-container');
    if (!container) return;
    
    Object.keys(WATCHLIST_DATABASE).forEach(sym => {
        const data = WATCHLIST_DATABASE[sym];
        const card = container.querySelector(`.watchlist-item[data-symbol="${sym}"]`);
        if (card) {
            const percent = ((data.baseChange / (data.basePrice - data.baseChange)) * 100).toFixed(2);
            
            const priceEl = card.querySelector('.watchlist-price');
            const changeEl = card.querySelector('.watchlist-change');
            
            if (priceEl) priceEl.innerText = `₹${data.basePrice.toFixed(2)}`;
            if (changeEl) {
                changeEl.className = `watchlist-change ${data.baseChange >= 0 ? 'up' : 'down'}`;
                changeEl.innerHTML = `${data.baseChange >= 0 ? '▲' : '▼'} ${Math.abs(percent)}%`;
            }
        }
    });
}

function handleSearchStock() {
    const input = document.getElementById('add-stock-input');
    const symbol = input.value.toUpperCase().trim();
    if (symbol === '') return;
    
    const resultBox = document.getElementById('stock-search-result');
    if (!resultBox) return;
    
    // Check directory or generate mock data
    let stockData = STOCK_DIRECTORY[symbol];
    if (!stockData) {
        // Alphanumeric validation (2 to 10 chars)
        const isValidSymbol = /^[A-Z0-9]{2,10}$/.test(symbol);
        if (!isValidSymbol) {
            resultBox.classList.remove('hidden');
            resultBox.innerHTML = `
                <div style="color: #ef4444; font-size: 12.5px; font-weight: 600; text-align: center; padding: 4px 0;">
                    ❌ Invalid Stock Symbol! Use letters/numbers (e.g. RELIANCE, TATASTEEL).
                </div>
            `;
            return;
        }
        
        // Generate mock data dynamically for other symbols
        const mockPrice = Math.floor(Math.random() * 800) + 50;
        stockData = {
            name: `${symbol} Corporate Ltd`,
            sector: "Diversified Sector",
            price: mockPrice
        };
    }
    
    activeSearchResult = {
        symbol: symbol,
        name: stockData.name,
        sector: stockData.sector,
        price: stockData.price,
        change: (Math.random() * 10 - 5) // random change between -5 and +5
    };
    
    // Render confirmation search card
    resultBox.classList.remove('hidden');
    
    const isAlreadyInWatchlist = WATCHLIST_DATABASE[symbol] !== undefined;
    const addBtnDisabledAttr = isAlreadyInWatchlist ? 'disabled' : '';
    const addBtnText = isAlreadyInWatchlist ? 'Already in Watchlist' : 'Add to Watchlist';
    
    const percent = ((activeSearchResult.change / (activeSearchResult.price - activeSearchResult.change)) * 100).toFixed(2);
    
    resultBox.innerHTML = `
        <div class="result-meta">
            <div class="result-sym-name">
                <span class="result-sym">${activeSearchResult.symbol} (NSE)</span>
                <span class="result-name">${activeSearchResult.name}</span>
                <span style="font-size: 10px; color: var(--text-secondary);">Sector: ${activeSearchResult.sector}</span>
            </div>
            <div class="result-price-box">
                <span class="result-price">₹${activeSearchResult.price.toFixed(2)}</span>
                <span class="result-change ${activeSearchResult.change >= 0 ? 'price-up' : 'price-down'}">
                    ${activeSearchResult.change >= 0 ? '▲' : '▼'} ${activeSearchResult.change.toFixed(2)} (${percent}%)
                </span>
            </div>
        </div>
        <div class="result-actions">
            <button class="btn-add-confirm" onclick="confirmAddStock()" ${addBtnDisabledAttr}>${addBtnText}</button>
            <button class="btn-cancel-confirm" onclick="cancelSearchStock()">Cancel</button>
        </div>
    `;
}

function confirmAddStock() {
    if (!activeSearchResult) return;
    
    const sym = activeSearchResult.symbol;
    WATCHLIST_DATABASE[sym] = {
        symbol: sym,
        name: activeSearchResult.name,
        sector: activeSearchResult.sector,
        basePrice: activeSearchResult.price,
        baseChange: activeSearchResult.change,
        prevClose: activeSearchResult.price - activeSearchResult.change,
        open: activeSearchResult.price - (activeSearchResult.change / 2),
        dayRange: `₹${(activeSearchResult.price - 4).toFixed(2)} - ₹${(activeSearchResult.price + 4).toFixed(2)}`,
        range52w: `₹${(activeSearchResult.price * 0.75).toFixed(2)} - ₹${(activeSearchResult.price * 1.25).toFixed(2)}`,
        market: "NSE"
    };
    
    localStorage.setItem('watchlist_database', JSON.stringify(WATCHLIST_DATABASE));
    
    // Reset search
    cancelSearchStock();
    document.getElementById('add-stock-input').value = '';
    
    // Render and select
    renderWatchlist();
    selectStock(sym);
}

function cancelSearchStock() {
    activeSearchResult = null;
    const resultBox = document.getElementById('stock-search-result');
    if (resultBox) {
        resultBox.classList.add('hidden');
        resultBox.innerHTML = '';
    }
}

function deleteStock(symbol) {
    if (symbol === 'COALINDIA') return;
    
    delete WATCHLIST_DATABASE[symbol];
    localStorage.setItem('watchlist_database', JSON.stringify(WATCHLIST_DATABASE));
    
    // If the active stock was deleted, fallback to COALINDIA
    if (activeStockSymbol === symbol) {
        selectStock('COALINDIA');
    } else {
        renderWatchlist();
    }
}

function selectStock(symbol) {
    activeStockSymbol = symbol;
    const data = WATCHLIST_DATABASE[symbol];
    if (!data) return;
    
    // Update active highlight style in watchlist grid
    document.querySelectorAll('#stock-watchlist-container .watchlist-item').forEach(card => {
        const cardSym = card.getAttribute('data-symbol');
        if (cardSym === symbol) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    
    updateActiveStockDisplay();
}

function updateActiveStockDisplay() {
    const data = WATCHLIST_DATABASE[activeStockSymbol];
    if (!data) return;
    
    const priceEl = document.getElementById('cil-stock-price');
    const changeEl = document.getElementById('cil-stock-change');
    
    if (priceEl && changeEl) {
        priceEl.innerText = data.basePrice.toFixed(2);
        const percent = ((data.baseChange / (data.basePrice - data.baseChange)) * 100).toFixed(2);
        
        if (data.baseChange >= 0) {
            changeEl.className = "stock-change price-up";
            changeEl.innerText = `+${data.baseChange.toFixed(2)} (${percent}%) ▲`;
        } else {
            changeEl.className = "stock-change price-down";
            changeEl.innerText = `${data.baseChange.toFixed(2)} (${percent}%) ▼`;
        }
    }
    
    const symEl = document.querySelector('.stock-symbol');
    const secEl = document.querySelector('.stock-sector');
    if (symEl) symEl.innerText = `${data.symbol} (${data.market})`;
    if (secEl) secEl.innerText = data.sector;
    
    // Update stats grid values
    const statValues = document.querySelectorAll('.stock-stats-grid .val');
    if (statValues.length >= 4) {
        statValues[0].innerText = `₹${data.prevClose.toFixed(2)}`;
        statValues[1].innerText = `₹${data.open.toFixed(2)}`;
        statValues[2].innerText = data.dayRange;
        statValues[3].innerText = data.range52w;
    }
    
    // Update target money link
    const linkEl = document.getElementById('stock-ticker-link');
    if (linkEl) {
        linkEl.href = `https://www.google.com/finance/quote/${data.symbol}:${data.market}`;
    }
}

function switchHubTab(tabId) {
    // Hide all hub panels
    const panels = document.querySelectorAll('.ccl-hub-panel');
    panels.forEach(p => p.classList.add('hidden'));
    
    // Deactivate all tabs
    const tabs = document.querySelectorAll('.ccl-hub-tab');
    tabs.forEach(t => t.classList.remove('active'));
    
    // Show active panel
    document.getElementById(`hub-panel-${tabId}`).classList.remove('hidden');
    // Activate clicked tab
    document.getElementById(`hub-tab-${tabId}`).classList.add('active');
}

// Start Stock Price simulation ticker for all stocks
function startLiveStockSimulation() {
    const syncEl = document.getElementById('stock-last-sync');
    
    setInterval(() => {
        Object.keys(WATCHLIST_DATABASE).forEach(sym => {
            const data = WATCHLIST_DATABASE[sym];
            if (!data) return;
            
            // Random price fluctuation between -0.40 and +0.40
            const delta = (Math.random() * 0.8 - 0.4);
            data.basePrice = Math.max(5, data.basePrice + delta);
            data.baseChange += delta;
        });
        
        // Save live changes
        localStorage.setItem('watchlist_database', JSON.stringify(WATCHLIST_DATABASE));
        
        // Update values in UI
        updateWatchlistTilesOnly();
        updateActiveStockDisplay();
        
        if (syncEl) {
            const now = new Date();
            syncEl.innerText = now.toLocaleTimeString();
        }
    }, 3000);
}

// -------------------------------------------------------------
// EPFO & CMPF SECURE SYNC SIMULATION
// -------------------------------------------------------------
function regenerateEPFOCaptcha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let text = '';
    for (let i = 0; i < 5; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    epfoCaptchaText = text;
    
    const box = document.getElementById('epfo-captcha-display');
    if (box) box.innerText = text;
}

function openEPFOAuthModal() {
    const modal = document.getElementById('epfo-auth-modal');
    const formZone = document.getElementById('epfo-modal-form-zone');
    const progressZone = document.getElementById('epfo-modal-progress-zone');
    
    if (!modal) return;
    
    modal.classList.remove('hidden');
    formZone.classList.remove('hidden');
    progressZone.classList.add('hidden');
    
    // Reset inputs
    document.getElementById('epfo-modal-uan').value = '';
    document.getElementById('epfo-modal-pass').value = '';
    document.getElementById('epfo-modal-custom-bal').value = '';
    document.getElementById('epfo-modal-captcha-input').value = '';
    
    // Gen captcha
    regenerateEPFOCaptcha();
}

function closeEPFOAuthModal() {
    const modal = document.getElementById('epfo-auth-modal');
    if (modal) modal.classList.add('hidden');
}

function updateEPFOModalLabels() {
    const typeSelect = document.getElementById('epfo-modal-type');
    const uanLabel = document.getElementById('epfo-modal-uan-label');
    const uanInput = document.getElementById('epfo-modal-uan');
    
    if (typeSelect.value === 'CMPF') {
        uanLabel.innerText = "CMPF Subscriber ID / Member ID";
        uanInput.placeholder = "e.g. CIL/SRK/80245";
    } else {
        uanLabel.innerText = "UAN (Universal Account Number)";
        uanInput.placeholder = "e.g. 100987654321";
    }
}

function submitEPFOAuthSync() {
    const type = document.getElementById('epfo-modal-type').value;
    const uan = document.getElementById('epfo-modal-uan').value.trim();
    const pass = document.getElementById('epfo-modal-pass').value;
    const customBalRaw = document.getElementById('epfo-modal-custom-bal').value.trim();
    const captchaVal = document.getElementById('epfo-modal-captcha-input').value.toUpperCase().trim();
    
    if (uan === '' || pass === '') {
        alert("Please enter both UAN/Member ID and Password!");
        return;
    }
    
    if (captchaVal !== epfoCaptchaText) {
        alert("Captcha code incorrect! Please try again.");
        regenerateEPFOCaptcha();
        return;
    }
    
    // Parse custom balance or default
    let balanceVal = 4850620.00;
    if (customBalRaw !== '') {
        const parsed = parseFloat(customBalRaw.replace(/[^0-9.]/g, ''));
        if (!isNaN(parsed)) {
            balanceVal = parsed;
        }
    }
    
    // Trigger simulated authorization
    const formZone = document.getElementById('epfo-modal-form-zone');
    const progressZone = document.getElementById('epfo-modal-progress-zone');
    const progressText = document.getElementById('epfo-progress-text-label');
    
    formZone.classList.add('hidden');
    progressZone.classList.remove('hidden');
    
    const steps = [
        "Connecting to secure Government National PF Node...",
        "Validating digital authentication tokens...",
        "Establishing direct SSL tunnel with C-CARES audit servers...",
        "Downloading active provident fund balances & contribution logs...",
        "Sync complete!"
    ];
    
    let currentStep = 0;
    progressText.innerText = steps[0];
    
    const stepInterval = setInterval(() => {
        currentStep++;
        if (currentStep < steps.length) {
            progressText.innerText = steps[currentStep];
        } else {
            clearInterval(stepInterval);
            
            // Save state to localStorage
            const session = {
                authenticated: true,
                type: type,
                uan: uan,
                balance: balanceVal,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('pension_sync_session', JSON.stringify(session));
            
            // Close modal & render UI
            closeEPFOAuthModal();
            renderPensionDashboard(session);
        }
    }, 1000);
}

function renderPensionDashboard(session) {
    const controls = document.getElementById('pension-auth-controls');
    const container = document.getElementById('pension-results-container');
    const prompt = document.getElementById('pension-prompt-msg');
    
    if (!controls || !container || !prompt) return;
    
    controls.classList.add('hidden');
    prompt.classList.add('hidden');
    container.classList.remove('hidden');
    
    // Populate details
    document.getElementById('pension-sync-type').innerText = session.type === 'EPFO' ? "EPFO (Unified Portal)" : "CMPF (Coal Mines PF)";
    document.getElementById('pension-sync-uan').innerText = session.uan;
    
    // Set custom balance breakdowns (approx 50% employee, 25% employer, 25% pension share)
    const bal = session.balance;
    const empShare = bal * 0.5;
    const emprShare = bal * 0.25;
    const penShare = bal * 0.25;
    
    document.getElementById('pension-total-bal').innerText = `₹${bal.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('pension-emp-share').innerText = `₹${empShare.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('pension-empr-share').innerText = `₹${emprShare.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('pension-pen-share').innerText = `₹${penShare.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    
    // Render dynamic monthly transaction ledger
    renderPensionLedgerTable(bal);
}

function renderPensionLedgerTable(totalBalance) {
    const tbody = document.getElementById('pension-ledger-body');
    if (!tbody) return;
    
    // Simulated monthly contributions based on a normal manager salary (e.g. EPF: ~12% of basic)
    const epfRate = 18450;
    const epsRate = 9225;
    
    const months = [
        "April 2026", "March 2026", "February 2026",
        "January 2026", "December 2025", "November 2025"
    ];
    
    tbody.innerHTML = '';
    months.forEach(m => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = "1px solid var(--border-color)";
        tr.innerHTML = `
            <td style="padding: 8px 4px; font-weight: 500;">${m}</td>
            <td style="padding: 8px 4px; font-family: var(--font-mono); font-weight:600; color:var(--text-primary);">₹${epfRate.toLocaleString('en-IN')}.00</td>
            <td style="padding: 8px 4px; font-family: var(--font-mono); font-weight:600; color:var(--text-primary);">₹${epsRate.toLocaleString('en-IN')}.00</td>
            <td style="padding: 8px 4px;"><span style="color: #22c55e; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">● Synced</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function disconnectPensionSync() {
    localStorage.removeItem('pension_sync_session');
    
    const controls = document.getElementById('pension-auth-controls');
    const container = document.getElementById('pension-results-container');
    const prompt = document.getElementById('pension-prompt-msg');
    
    if (controls && container && prompt) {
        controls.classList.remove('hidden');
        prompt.classList.remove('hidden');
        container.classList.add('hidden');
    }
}

// -------------------------------------------------------------
// BOOTSTRAP / INITIALIZATION
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // 1. Restore Theme Preference
    const savedTheme = localStorage.getItem('theme') || 'corporate';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);
    
    // 2. Render Search History
    renderHistory();
    
    // 3. Render Personal Photos Gallery
    renderGallery();
    
    // 4. Render Stock Watchlist
    renderWatchlist();
    
    // 5. Select default active stock
    selectStock(activeStockSymbol);
    
    // 6. Start Stock Price simulation ticker
    startLiveStockSimulation();
    
    // 7. Check and Restore EPFO synced session
    const session = JSON.parse(localStorage.getItem('pension_sync_session'));
    if (session && session.authenticated) {
        renderPensionDashboard(session);
    }
});

