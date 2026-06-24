// ApexApply .NET - Core Application Logic

// --- Resume Data Model ---
const resumeData = {
    name: "Amee Brahmbhatt",
    title: "Senior .NET Developer / SQL Server DBA",
    email: "Brahmbhattami7@gmail.com",
    phone: "+91 81418 02828",
    location: "Ahmedabad, Gujarat, India",
    linkedin: "linkedin.com/in/brahmbhatt-ami-42615618b",
    experienceYears: 7.2,
    summary: "Senior .NET Developer and SQL Server Database Administrator with 7+ years of experience designing and optimizing enterprise backend systems. Deep expertise in ASP.NET MVC, .NET Core (6/7/8), RESTful API development, and SQL Server database management (tuning, backups, indexing, stored procedures).",
    skills: {
        "Backend": ["ASP.NET MVC", "ASP.NET Web API", ".NET Framework", ".NET Core (.NET 6/7/8)", "Entity Framework", "LINQ", "REST APIs", "Dapper"],
        "Languages": ["C#", "SQL", "TypeScript"],
        "Database & DBA": ["SQL Server", "Stored Procedures", "Functions", "Triggers", "Query Optimization", "Execution Plans", "Performance Tuning", "Indexing", "Backup & Recovery", "DB Design & Normalization"],
        "Architecture": ["Clean Architecture", "N-Tier", "Repository Pattern", "Dependency Injection", "SOLID", "Design Patterns", "Microservices"],
        "Security": ["JWT Authentication", "OAuth 2.0", "Role-Based Access Control (RBAC)", "API Security", "Data Encryption"],
        "Tools": ["Visual Studio", "SSMS", "Postman", "Swagger / OpenAPI", "Git", "GitHub", "Jira"],
        "Methodologies": ["Agile", "Scrum", "SDLC", "Code Review", "Unit Testing", "Requirement Analysis", "Production Deployments"],
        "AI Tools": ["GitHub Copilot", "Cursor AI", "ChatGPT", "Claude AI", "AI Workflow Integration"]
    },
    achievements: [
        "Best Performer Award - Q4 2023 at Technobrains IT Solution.",
        "Managed database design, query optimization, and backup strategies as Lead DBA for a mission-critical Healthcare platform.",
        "Mentored and guided multiple junior backend developers, elevating the standard of clean architecture."
    ]
};

// --- Target Companies Directory ---
const companiesData = [
    {
        id: "technobrains",
        name: "Technobrains IT Solution",
        logo: "TB",
        rating: "4.4",
        location: "Ahmedabad, India",
        size: "150-200 Employees",
        description: "Your current employer! A premium software engineering consulting firm specializing in enterprise web development, e-commerce systems, and healthcare platforms.",
        techStack: "ASP.NET MVC, .NET Core, SQL Server, Entity Framework",
        matchReason: "Direct match since you currently work here as a Senior Developer and DBA. Excellent fit for leadership and architect roles.",
        jobsCount: 2
    },
    {
        id: "simform",
        name: "Simform",
        logo: "SF",
        rating: "4.2",
        location: "Ahmedabad, India (Hybrid)",
        size: "1000+ Employees",
        description: "Simform is a leading digital product engineering company. They build complex web applications and cloud architectures for international enterprises.",
        techStack: ".NET Core 8, Microservices, SQL Server DBA, AWS",
        matchReason: "Actively hiring Senior Backend Developers with strong SQL DBA experience to design medical and logistics systems.",
        jobsCount: 2
    },
    {
        id: "tatvasoft",
        name: "TatvaSoft",
        logo: "TS",
        rating: "4.1",
        location: "Ahmedabad, India",
        size: "800+ Employees",
        description: "A CMMI Level 3 software development company providing software outsourcing services globally, focusing highly on Microsoft technology stacks.",
        techStack: "ASP.NET, MVC, C#, SQL Server Performance Tuning",
        matchReason: "High demand for seasoned .NET developers with deep DB design knowledge for enterprise ERP workflows.",
        jobsCount: 2
    },
    {
        id: "radixweb",
        name: "Radixweb",
        logo: "RW",
        rating: "4.3",
        location: "Ahmedabad, India",
        size: "500-1000 Employees",
        description: "A global IT consulting and software development company specializing in cloud-native business application development.",
        techStack: ".NET Core, REST APIs, SQL DBA, Angular",
        matchReason: "Requires senior engineers with DBA backgrounds to optimize large e-commerce platforms and cloud services.",
        jobsCount: 1
    },
    {
        id: "microsoft",
        name: "Microsoft",
        logo: "MS",
        rating: "4.6",
        location: "Bangalore/Remote, India",
        size: "100,000+ Employees",
        description: "The creator of .NET and SQL Server. Microsoft is the ultimate destination for senior engineers working in the Microsoft ecosystem.",
        techStack: ".NET 8, C#, SQL Azure, Distributed Systems",
        matchReason: "Your 7+ years of expert C# and SQL Server database lifecycle administration makes you a strong candidate for Azure Core SQL support engineers.",
        jobsCount: 1
    },
    {
        id: "cognizant",
        name: "Cognizant",
        logo: "CO",
        rating: "3.9",
        location: "Pune, India (Remote)",
        size: "300,000+ Employees",
        description: "A multinational technology company providing consulting, information technology, and business process outsourcing services.",
        techStack: ".NET Core, Microservices, RBAC, JWT, Oracle/SQL",
        matchReason: "Hiring for global healthcare clients requiring HIPAA compliance, JWT auth, and complex DB query tuning.",
        jobsCount: 2
    },
    {
        id: "capgemini",
        name: "Capgemini",
        logo: "CG",
        rating: "4.0",
        location: "Pune/Remote, India",
        size: "340,000+ Employees",
        description: "A global leader in partnering with companies to transform and manage their business by harnessing the power of technology.",
        techStack: ".NET Core, Web API, SQL Server DBA, Azure DevOps",
        matchReason: "Seeking backend specialists to lead database migrations and architectural redesigns on .NET core projects.",
        jobsCount: 2
    }
];

// --- Tailored Job Feed Postings ---
const jobsData = [
    {
        id: "job-001",
        title: "Senior .NET Core Backend Architect",
        companyId: "simform",
        companyName: "Simform",
        rating: "4.2",
        location: "Ahmedabad, India (Hybrid)",
        type: "Full-Time",
        salary: "₹18,00,000 - ₹24,00,000 / Yr",
        matchScore: 96,
        specialty: "dotnet",
        skills: {
            matched: [".NET Core (.NET 6/7/8)", "C#", "Entity Framework", "REST APIs", "SQL Server", "Query Optimization", "Clean Architecture", "Dependency Injection"],
            missing: ["AWS Cloud services", "Docker"]
        },
        description: `
            <p>We are seeking a seasoned <strong>Senior .NET Core Developer</strong> to take ownership of our scalable backend systems. You will lead the architecture of clean microservices, design secure APIs, and work closely with client engineering teams.</p>
            <h3>Key Responsibilities:</h3>
            <ul>
                <li>Architect and develop high-volume REST APIs using .NET Core 8 and C#.</li>
                <li>Write clean code following SOLID principles, Clean Architecture, and repository patterns.</li>
                <li>Design databases and optimize complex SQL queries and stored procedures.</li>
                <li>Mentor junior and mid-level developers through constructive code reviews.</li>
            </ul>
            <h3>Requirements:</h3>
            <ul>
                <li>6+ years of active experience in backend development using Microsoft technologies.</li>
                <li>Deep knowledge of SQL Server, database indexing, and query performance tuning.</li>
                <li>Experience with JWT Authentication and API security standards (RBAC).</li>
            </ul>
        `
    },
    {
        id: "job-002",
        title: "Database Administrator & Lead SQL DBA",
        companyId: "simform",
        companyName: "Simform",
        rating: "4.2",
        location: "Ahmedabad, India (Hybrid)",
        type: "Full-Time",
        salary: "₹16,00,000 - ₹22,00,000 / Yr",
        matchScore: 94,
        specialty: "dba",
        skills: {
            matched: ["SQL Server", "Stored Procedures", "Query Optimization", "Execution Plans", "Performance Tuning", "Indexing", "Backup & Recovery", "DB Design & Normalization", "Triggers", "Functions"],
            missing: ["NoSQL Databases (MongoDB)", "SSIS/SSRS packages"]
        },
        description: `
            <p>Join our database core services team as a <strong>Lead SQL Server DBA</strong>. In this role, you will manage the health, backup strategies, performance, and scaling of critical client database nodes.</p>
            <h3>Key Responsibilities:</h3>
            <ul>
                <li>Configure, manage and maintain Microsoft SQL Server high-availability cluster instances.</li>
                <li>Troubleshoot execution plans, optimize slow-running queries, and audit indexes.</li>
                <li>Formulate robust database backup, restore, and disaster recovery strategies.</li>
                <li>Establish secure database schemas and normalizations.</li>
            </ul>
            <h3>Requirements:</h3>
            <ul>
                <li>Proven record as a SQL Server DBA managing production environments.</li>
                <li>Deep competence with SSMS diagnostic tools, profiling, and query plan analyzer.</li>
            </ul>
        `
    },
    {
        id: "job-003",
        title: "Technical Lead (.NET Core + SQL Server DBA)",
        companyId: "technobrains",
        companyName: "Technobrains IT Solution",
        rating: "4.4",
        location: "Ahmedabad, India",
        type: "Full-Time",
        salary: "₹15,00,000 - ₹20,00,000 / Yr",
        matchScore: 98,
        specialty: "dotnet",
        skills: {
            matched: ["ASP.NET MVC", ".NET Core (.NET 6/7/8)", "SQL Server", "Query Optimization", "Performance Tuning", "Stored Procedures", "JWT Authentication", "RBAC", "Agile / Scrum", "Code Review & Mentoring"],
            missing: []
        },
        description: `
            <p>We are looking for a <strong>Technical Lead</strong> to head our backend engineering team. This is a dual developer and DBA management position directly aligning with our healthcare and HRMS business units.</p>
            <h3>Key Responsibilities:</h3>
            <ul>
                <li>Lead development teams on enterprise applications using .NET Core 7/8.</li>
                <li>Perform DBA tasks: database designing, optimization, and security audits.</li>
                <li>Manage production deployment processes and continuous integration.</li>
                <li>Facilitate client meetings to translate business requirements into technical specs.</li>
            </ul>
            <h3>Requirements:</h3>
            <ul>
                <li>7+ years of experience in .NET backend systems and SQL databases.</li>
                <li>Strong DBA and performance engineering insights.</li>
            </ul>
        `
    },
    {
        id: "job-004",
        title: "Senior Backend & REST API Architect",
        companyId: "technobrains",
        companyName: "Technobrains IT Solution",
        rating: "4.4",
        location: "Ahmedabad, India",
        type: "Full-Time",
        salary: "₹14,00,000 - ₹18,00,000 / Yr",
        matchScore: 97,
        specialty: "architect",
        skills: {
            matched: [".NET Core (.NET 6/7/8)", "REST APIs", "JWT Authentication", "RBAC", "Entity Framework", "C#", "Clean Architecture", "SOLID Principles", "AI Workflow Integration"],
            missing: ["Microservices (Docker)"]
        },
        description: `
            <p>Seeking an expert <strong>Backend & API Architect</strong> to design complex APIs connecting our HRMS systems with global payroll channels.</p>
            <h3>Key Responsibilities:</h3>
            <ul>
                <li>Design secure RESTful APIs utilizing JWT and OAuth 2.0.</li>
                <li>Develop structured database structures using SQL Server and Entity Framework.</li>
                <li>Integrate AI workflow components (ChatGPT API) to streamline document parsings.</li>
            </ul>
            <h3>Requirements:</h3>
            <ul>
                <li>Strong API design principles and architectural patterns knowledge.</li>
                <li>Proven record of integrating external payment and authentication APIs.</li>
            </ul>
        `
    },
    {
        id: "job-005",
        title: "Senior .NET Developer (Enterprise ERP)",
        companyId: "tatvasoft",
        companyName: "TatvaSoft",
        rating: "4.1",
        location: "Ahmedabad, India",
        type: "Full-Time",
        salary: "₹14,00,000 - ₹20,00,000 / Yr",
        matchScore: 93,
        specialty: "dotnet",
        skills: {
            matched: ["ASP.NET MVC", "C#", "SQL Server", "Stored Procedures", "Indexing", "Entity Framework", "Agile", "SOLID Principles"],
            missing: ["Angular / React UI integrations"]
        },
        description: `
            <p>TatvaSoft is seeking a senior resource to work on enterprise ERP portals. You will build core payroll, inventory tracking, and scheduling software modules.</p>
            <h3>Requirements:</h3>
            <ul>
                <li>Expert command of ASP.NET MVC and C#.</li>
                <li>Outstanding SQL query creation, tuning, and indexing strategies.</li>
            </ul>
        `
    },
    {
        id: "job-006",
        title: "Database Performance Engineer (SQL Specialist)",
        companyId: "tatvasoft",
        companyName: "TatvaSoft",
        rating: "4.1",
        location: "Ahmedabad, India",
        type: "Full-Time",
        salary: "₹16,00,000 - ₹21,00,000 / Yr",
        matchScore: 95,
        specialty: "dba",
        skills: {
            matched: ["SQL Server", "Performance Tuning", "Query Optimization", "Execution Plans", "Indexing", "Stored Procedures", "Triggers", "Functions"],
            missing: ["SQL Server Integration Services (SSIS)"]
        },
        description: `
            <p>We are searching for a <strong>SQL Database Performance Specialist</strong>. You will analyze and refactor slow SQL clusters, audit indexes, and build optimized database procedures.</p>
            <h3>Requirements:</h3>
            <ul>
                <li>Advanced level database administration skills (tuning execution plans, index rebuilds).</li>
            </ul>
        `
    },
    {
        id: "job-007",
        title: "Lead Database Engineer (SQL Server DBA)",
        companyId: "radixweb",
        companyName: "Radixweb",
        rating: "4.3",
        location: "Ahmedabad, India",
        type: "Full-Time",
        salary: "₹16,00,000 - ₹22,00,000 / Yr",
        matchScore: 94,
        specialty: "dba",
        skills: {
            matched: ["SQL Server", "Backup & Recovery", "DB Design & Normalization", "Performance Tuning", "Query Optimization", "Stored Procedures", "Triggers"],
            missing: ["PostgreSQL experience"]
        },
        description: `
            <p>Seeking a <strong>Lead Database Engineer</strong> to administer development and production databases. You will manage schema versioning, database tuning, and high availability systems.</p>
        `
    },
    {
        id: "job-008",
        title: "Senior Support Escalation Engineer - Azure SQL",
        companyId: "microsoft",
        companyName: "Microsoft",
        rating: "4.6",
        location: "Bangalore, India (Remote)",
        type: "Full-Time",
        salary: "₹25,00,000 - ₹35,00,000 / Yr",
        matchScore: 92,
        specialty: "dba",
        skills: {
            matched: ["SQL Server", "Performance Tuning", "Execution Plans", "Backup & Recovery", "C#", "Production Support"],
            missing: ["Azure SQL Database Architecture", "PowerShell Scripting"]
        },
        description: `
            <p>Support Microsoft's enterprise customers resolving complex cloud database failures. Dive deep into database engine internals, locks, blocks, and memory configurations.</p>
        `
    },
    {
        id: "job-009",
        title: "Senior Backend Developer - Healthcare IT",
        companyId: "cognizant",
        companyName: "Cognizant",
        rating: "3.9",
        location: "Pune, India (Remote)",
        type: "Full-Time",
        salary: "₹15,00,000 - ₹20,00,000 / Yr",
        matchScore: 95,
        specialty: "dotnet",
        skills: {
            matched: [".NET Core (.NET 6/7/8)", "SQL Server", "JWT Authentication", "RBAC", "Clean Architecture", "Healthcare IT", "Agile / Scrum", "AI Workflow Integration"],
            missing: ["FHIR standards (HL7)"]
        },
        description: `
            <p>Develop critical healthcare web systems. Build clinical processes, patient charting modules, and integrate secure medical workflows.</p>
        `
    },
    {
        id: "job-010",
        title: "Senior Database Administrator (DBA Lead)",
        companyId: "cognizant",
        companyName: "Cognizant",
        rating: "3.9",
        location: "Pune, India",
        type: "Full-Time",
        salary: "₹16,00,000 - ₹21,00,000 / Yr",
        matchScore: 93,
        specialty: "dba",
        skills: {
            matched: ["SQL Server", "Backup & Recovery", "Performance Tuning", "Query Optimization", "Stored Procedures", "Triggers", "Execution Plans", "Production Support"],
            missing: ["Cloud DBA management"]
        },
        description: `
            <p>Take charge of database operations. Responsible for designing backups, restoring tests, auditing access controls, and resolving database locks in production.</p>
        `
    },
    {
        id: "job-011",
        title: "Technical Architect - .NET & SQL Services",
        companyId: "capgemini",
        companyName: "Capgemini",
        rating: "4.0",
        location: "Pune, India (Remote)",
        type: "Full-Time",
        salary: "₹20,00,000 - ₹28,00,000 / Yr",
        matchScore: 95,
        specialty: "architect",
        skills: {
            matched: [".NET Core (.NET 6/7/8)", "SQL Server", "Clean Architecture", "Microservices", "REST APIs", "SOLID Principles", "Code Review & Mentoring"],
            missing: ["Docker/Kubernetes deployments"]
        },
        description: `
            <p>Lead the architectural definition of major logistics platforms using .NET Core microservices and cloud databases.</p>
        `
    },
    {
        id: "job-012",
        title: "Senior SQL Server Developer & DBA Analyst",
        companyId: "capgemini",
        companyName: "Capgemini",
        rating: "4.0",
        location: "Pune, India",
        type: "Full-Time",
        salary: "₹14,00,000 - ₹19,00,000 / Yr",
        matchScore: 94,
        specialty: "dba",
        skills: {
            matched: ["SQL Server", "Stored Procedures", "Performance Tuning", "Query Optimization", "Indexing", "DB Design & Normalization", "Triggers", "Functions"],
            missing: ["SSAS cubes creation"]
        },
        description: `
            <p>Write optimized database objects and stored procedures, while helping operations run disaster recovery simulations.</p>
        `
    }
];

// --- Initial Mock Tracker Applications (Pre-loaded for visual flair) ---
const initialApplications = [
    {
        id: "app-101",
        jobId: "job-003",
        jobTitle: "Technical Lead (.NET Core + SQL Server DBA)",
        companyName: "Technobrains IT Solution",
        status: "bookmarked",
        date: "2026-06-23",
        matchScore: 98,
        coverLetter: ""
    },
    {
        id: "app-102",
        jobId: "job-001",
        jobTitle: "Senior .NET Core Backend Architect",
        companyName: "Simform",
        status: "applied",
        date: "2026-06-20",
        matchScore: 96,
        coverLetter: "Dear Hiring Team,\n\nI am writing to express my interest in the Senior .NET Core Backend Architect position at Simform. With over 7 years of backend engineering experience, including my current work at Technobrains IT Solution, I specialize in building robust backend services using C# and .NET Core. I have a proven track record in optimizing SQL servers, designing REST APIs, and implementing Clean Architecture.\n\nThank you for considering my application.\n\nBest regards,\nAmee Brahmbhatt"
    },
    {
        id: "app-103",
        jobId: "job-009",
        jobTitle: "Senior Backend Developer - Healthcare IT",
        companyName: "Cognizant",
        status: "interviewing",
        date: "2026-06-18",
        matchScore: 95,
        coverLetter: "Dear Cognizant Hiring Team,\n\nI am thrilled to apply for the Senior Backend Developer position. Having designed secure medical platforms with AI workflow systems at Technobrains, I am confident in my ability to deliver highly-compliant, top-performing Web APIs. My DBA expertise ensures database setups are optimized and secured.\n\nBest regards,\nAmee Brahmbhatt"
    }
];

// --- State Management ---
let state = {
    applications: [],
    selectedJobId: null,
    credentials: {
        liUser: "Brahmbhattami7@gmail.com",
        liPass: "•••••••••••••",
        nkUser: "Brahmbhattami7@gmail.com",
        nkPass: "•••••••••••••"
    }
};

// --- Helper functions to load/save state ---
function loadState() {
    const saved = localStorage.getItem("apexapply_state_2026");
    if (saved) {
        state = JSON.parse(saved);
        if (!state.credentials) {
            state.credentials = {
                liUser: "Brahmbhattami7@gmail.com",
                liPass: "•••••••••••••",
                nkUser: "Brahmbhattami7@gmail.com",
                nkPass: "•••••••••••••"
            };
        }
        if (!state.automationMode) {
            state.automationMode = "automated";
        }
    } else {
        state.applications = [...initialApplications];
        state.selectedJobId = null;
        state.credentials = {
            liUser: "Brahmbhattami7@gmail.com",
            liPass: "•••••••••••••",
            nkUser: "Brahmbhattami7@gmail.com",
            nkPass: "•••••••••••••"
        };
        state.automationMode = "automated";
        saveState();
    }
}

function saveState() {
    localStorage.setItem("apexapply_state_2026", JSON.stringify(state));
}

// --- DOM References ---
const navItems = document.querySelectorAll(".nav-item");
const tabContents = document.querySelectorAll(".tab-content");
const pageTitle = document.getElementById("page-title");
const pageSubtitle = document.getElementById("page-subtitle");

// Statistics counters
const statTotalJobs = document.getElementById("stat-total-jobs");
const statAppliedJobs = document.getElementById("stat-applied-jobs");
const statInterviews = document.getElementById("stat-interviews");
const statOffers = document.getElementById("stat-offers");

// Dashboard Elements
const dashboardCompaniesGrid = document.getElementById("dashboard-companies-grid");
const dashboardStatusList = document.getElementById("dashboard-status-list");

// Jobs Tab Elements
const jobsListContainer = document.getElementById("jobs-list");
const jobDetailCard = document.getElementById("job-detail-card");
const jobDetailContent = document.getElementById("job-detail-content");
const jobsCountBadge = document.getElementById("jobs-count-badge");

// Filters Elements
const searchJobInput = document.getElementById("search-job");
const filterLocationSelect = document.getElementById("filter-location");
const filterRoleSelect = document.getElementById("filter-role");
const filterMatchInput = document.getElementById("filter-match");
const matchValDisplay = document.getElementById("match-val-display");
const btnClearFilters = document.getElementById("btn-clear-filters");

// Companies Elements
const companiesFullGrid = document.getElementById("companies-full-grid");

// Kanban Badges
const badgeBookmarked = document.getElementById("badge-bookmarked");
const badgeApplied = document.getElementById("badge-applied");
const badgeInterviewing = document.getElementById("badge-interviewing");
const badgeOffer = document.getElementById("badge-offer");
const badgeRejected = document.getElementById("badge-rejected");

// Modal Elements
const applyModal = document.getElementById("apply-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const modalJobTitle = document.getElementById("modal-job-title");
const modalCompanyTitle = document.getElementById("modal-company-title");
const modalFitGauge = document.getElementById("modal-fit-gauge");
const modalMatchReason = document.getElementById("modal-match-reason");
const coverLetterTextarea = document.getElementById("cover-letter-text");
const btnRegenLetter = document.getElementById("btn-regen-letter");
const applyForm = document.getElementById("apply-form");

// Toast Elements
const toastNotification = document.getElementById("toast-notification");
const toastMessage = document.getElementById("toast-message");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    setupNavigation();
    setupFilters();
    setupDashboard();
    setupCompanies();
    renderJobs();
    renderKanban();
    updateGlobalStats();
    setupModalEvents();
    setupBulkApply();

    // Set jobs count badge
    jobsCountBadge.textContent = jobsData.length;

    // Quick Dashboard Action listeners
    document.getElementById("btn-quick-view-jobs").addEventListener("click", () => {
        switchTab("jobs");
    });
    document.getElementById("btn-quick-view-tracker").addEventListener("click", () => {
        switchTab("tracker");
    });
    document.getElementById("btn-export-cv").addEventListener("click", () => {
        showToast("Simulating Resume PDF Download...");
        window.open("file:///f:/Resume2026/Amee_Brahmbhatt_ATS_Resume_Backend.pdf", "_blank");
    });
    document.getElementById("link-view-all-companies").addEventListener("click", () => {
        switchTab("companies");
    });
    document.getElementById("btn-reset-tracker").addEventListener("click", () => {
        if(confirm("Are you sure you want to reset all applications to initial data?")) {
            localStorage.removeItem("apexapply_state_2026");
            loadState();
            renderKanban();
            updateGlobalStats();
            renderJobs();
            setupDashboard();
            showToast("Application tracker data reset successfully.");
        }
    });

    // Populate skills inventory inside Resume Profile tab
    populateSkillsInventory();
});

// --- Tab Navigation Logic ---
function setupNavigation() {
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const tabId = item.getAttribute("data-tab");
            switchTab(tabId);
        });
    });
}

function switchTab(tabId) {
    navItems.forEach(nav => nav.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active-tab"));

    const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    const activeContent = document.getElementById(`tab-${tabId}`);
    
    if (activeNav && activeContent) {
        activeNav.classList.add("active");
        activeContent.classList.add("active-tab");

        // Customize main header text depending on tab
        if (tabId === "dashboard") {
            pageTitle.textContent = "Dashboard Overview";
            pageSubtitle.textContent = "Welcome back, Amee. Here's your personalized .NET & DBA job recommendation board.";
        } else if (tabId === "jobs") {
            pageTitle.textContent = "Custom Jobs Feed";
            pageSubtitle.textContent = "Browse top positions mapped directly to your database performance and C# backend skills.";
        } else if (tabId === "companies") {
            pageTitle.textContent = "Hiring Enterprise Directory";
            pageSubtitle.textContent = "Explore preferred IT companies in Ahmedabad and remote hubs operating on modern Microsoft architectures.";
        } else if (tabId === "tracker") {
            pageTitle.textContent = "Application Kanban Tracker";
            pageSubtitle.textContent = "Review processes, update statuses, and log your hiring pipelines.";
        } else if (tabId === "bulk-apply") {
            pageTitle.textContent = "Bulk Auto-Apply Runner";
            pageSubtitle.textContent = "Enter target job URLs, store authentication credentials, and run simulated webdriver submissions.";
        } else if (tabId === "profile") {
            pageTitle.textContent = "Amee Brahmbhatt's ATS Resume";
            pageSubtitle.textContent = "Source resume content utilized for computing AI matching criteria.";
        }
    }
}

// --- Dashboard Renderer ---
function setupDashboard() {
    // 1. Featured Companies Grid
    dashboardCompaniesGrid.innerHTML = "";
    // Show top 4 rated companies on dashboard
    const topCompanies = [...companiesData].sort((a,b) => b.rating - a.rating).slice(0, 4);
    
    topCompanies.forEach(comp => {
        const card = document.createElement("div");
        card.className = "company-card";
        card.innerHTML = `
            <div class="comp-hdr">
                <div class="comp-logo">${comp.logo}</div>
                <div class="comp-rating">
                    <svg width="12" height="12" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>${comp.rating}</span>
                </div>
            </div>
            <h3 class="comp-name">${comp.name}</h3>
            <p class="comp-loc">${comp.location}</p>
            <div class="comp-footer">
                <span class="comp-jobs-count">${comp.jobsCount} Open Roles</span>
                <span class="comp-match-dot">98% Match</span>
            </div>
        `;
        card.addEventListener("click", () => {
            // Filter jobs feed by this company and switch tab
            searchJobInput.value = comp.name;
            renderJobs();
            switchTab("jobs");
        });
        dashboardCompaniesGrid.appendChild(card);
    });

    // 2. Status Snapshots
    renderDashboardStatusList();
}

function renderDashboardStatusList() {
    dashboardStatusList.innerHTML = "";
    if (state.applications.length === 0) {
        dashboardStatusList.innerHTML = `<p style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 20px 0;">No active applications tracked. Go to "Job Openings" to apply!</p>`;
        return;
    }

    // Sort applications by date desc
    const sortedApps = [...state.applications].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
    
    sortedApps.forEach(app => {
        const row = document.createElement("div");
        row.className = `status-row ${app.status}`;
        row.innerHTML = `
            <div>
                <span class="status-item-comp">${app.companyName}</span>
                <span class="status-item-role">${app.jobTitle}</span>
            </div>
            <span class="status-badge-lbl ${app.status}">${app.status.replace('-', ' ')}</span>
        `;
        dashboardStatusList.appendChild(row);
    });
}

// --- Filter Event Handlers ---
function setupFilters() {
    searchJobInput.addEventListener("input", renderJobs);
    filterLocationSelect.addEventListener("change", renderJobs);
    filterRoleSelect.addEventListener("change", renderJobs);
    filterMatchInput.addEventListener("input", (e) => {
        matchValDisplay.textContent = `${e.target.value}% Match`;
        renderJobs();
    });

    btnClearFilters.addEventListener("click", () => {
        searchJobInput.value = "";
        filterLocationSelect.value = "all";
        filterRoleSelect.value = "all";
        filterMatchInput.value = 85;
        matchValDisplay.textContent = "85% Match";
        renderJobs();
    });
}

// --- Jobs Feed Renderer ---
function renderJobs() {
    jobsListContainer.innerHTML = "";

    const query = searchJobInput.value.toLowerCase().trim();
    const loc = filterLocationSelect.value;
    const roleCat = filterRoleSelect.value;
    const minMatch = parseInt(filterMatchInput.value, 10);

    const filteredJobs = jobsData.filter(job => {
        // Keyword Search
        const textMatch = job.title.toLowerCase().includes(query) || 
                          job.companyName.toLowerCase().includes(query) ||
                          job.description.toLowerCase().includes(query);
        
        // Location Match
        let locMatch = true;
        if (loc === "remote") {
            locMatch = job.location.toLowerCase().includes("remote");
        } else if (loc === "ahmedabad") {
            locMatch = job.location.toLowerCase().includes("ahmedabad");
        } else if (loc === "pune") {
            locMatch = job.location.toLowerCase().includes("pune");
        } else if (loc === "bangalore") {
            locMatch = job.location.toLowerCase().includes("bangalore");
        }

        // Role Category Specialty Match
        const roleMatch = roleCat === "all" || job.specialty === roleCat;

        // Match Score Filter
        const scoreMatch = job.matchScore >= minMatch;

        return textMatch && locMatch && roleMatch && scoreMatch;
    });

    if (filteredJobs.length === 0) {
        jobsListContainer.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding: 40px 10px;">
                <p style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">No matching jobs found</p>
                <p style="font-size: 13px;">Try modifying search terms, reducing the match rating, or clearing filters.</p>
            </div>
        `;
        hideJobDetailPanel();
        return;
    }

    filteredJobs.forEach(job => {
        const card = document.createElement("div");
        card.className = "job-card";
        if (state.selectedJobId === job.id) {
            card.classList.add("active-card");
        }

        card.innerHTML = `
            <div class="job-fit-pill">${job.matchScore}% Match</div>
            <h3 class="card-job-title">${job.title}</h3>
            <p class="card-job-comp">${job.companyName} &bull; ${job.location}</p>
            <div class="card-tags">
                <span class="card-tag">${job.type}</span>
                <span class="card-tag">${job.salary.split(' ')[0]}</span>
            </div>
        `;

        card.addEventListener("click", () => {
            // Remove active style from others
            document.querySelectorAll(".job-card").forEach(c => c.classList.remove("active-card"));
            card.classList.add("active-card");
            selectJob(job.id);
        });

        jobsListContainer.appendChild(card);
    });

    // Auto-select first job if nothing is selected or if selected is not in filtered list
    if (filteredJobs.length > 0) {
        const stillExists = filteredJobs.find(j => j.id === state.selectedJobId);
        if (!stillExists) {
            selectJob(filteredJobs[0].id);
            // Re-render to highlight first
            const firstCard = jobsListContainer.firstChild;
            if(firstCard && firstCard.classList) firstCard.classList.add("active-card");
        } else {
            selectJob(state.selectedJobId);
        }
    }
}

function hideJobDetailPanel() {
    document.getElementById("job-detail-card").querySelector(".detail-empty-state").classList.remove("hidden");
    jobDetailContent.classList.add("hidden");
}

function selectJob(jobId) {
    state.selectedJobId = jobId;
    saveState();

    const job = jobsData.find(j => j.id === jobId);
    if (!job) {
        hideJobDetailPanel();
        return;
    }

    // Toggle states
    document.getElementById("job-detail-card").querySelector(".detail-empty-state").classList.add("hidden");
    jobDetailContent.classList.remove("hidden");

    // Populate job detail data
    jobDetailContent.innerHTML = `
        <div class="detail-header">
            <div class="detail-title-block">
                <h2>${job.title}</h2>
                <div class="detail-company-line">${job.companyName} &bull; ${job.location}</div>
            </div>
            <div class="match-radial-container">
                <div class="radial-percentage">${job.matchScore}%</div>
                <div class="radial-lbl">Match<br>Score</div>
            </div>
        </div>

        <div class="job-meta-grid">
            <div class="meta-item">
                <div class="meta-lbl">Salary Compensation</div>
                <div class="meta-val">${job.salary}</div>
            </div>
            <div class="meta-item">
                <div class="meta-lbl">Job Structure</div>
                <div class="meta-val">${job.type}</div>
            </div>
        </div>

        <div class="detail-section-title">Resume Compatibility Evaluation</div>
        <div style="font-size: 13.5px; margin-bottom: 12px;">
            <strong>Skills Matched:</strong>
        </div>
        <ul class="detail-skills-list">
            ${job.skills.matched.map(s => `<li class="matched-skill">&check; ${s}</li>`).join('')}
        </ul>

        ${job.skills.missing.length > 0 ? `
            <div style="font-size: 13.5px; margin-bottom: 12px;">
                <strong>Suggested Core Enhancements:</strong>
            </div>
            <ul class="detail-skills-list">
                ${job.skills.missing.map(s => `<li class="missing-skill">&#9888; ${s}</li>`).join('')}
            </ul>
        ` : ''}

        <div class="detail-section-title">Full Job Description</div>
        <div class="job-desc-text">
            ${job.description}
        </div>

        <div class="action-row-footer">
            ${renderApplicationButton(job)}
            <button class="btn btn-secondary" id="btn-bookmark-job">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                Bookmark
            </button>
        </div>
    `;

    // Hook events inside the generated template
    const applyBtn = document.getElementById("btn-apply-trigger");
    if(applyBtn) {
        applyBtn.addEventListener("click", () => {
            openApplyModal(job);
        });
    }

    const bookmarkBtn = document.getElementById("btn-bookmark-job");
    bookmarkBtn.addEventListener("click", () => {
        bookmarkJob(job);
    });
}

function renderApplicationButton(job) {
    const existing = state.applications.find(a => a.jobId === job.id);
    if (existing) {
        return `
            <button class="btn btn-secondary" style="border-color: var(--color-emerald); color: var(--color-emerald);" disabled>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Already Applied (${existing.status.replace('-', ' ')})
            </button>
        `;
    }
    return `
        <button class="btn btn-primary" id="btn-apply-trigger">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            Apply Now &amp; Auto-Fill
        </button>
    `;
}

// --- Companies Directory Tab ---
function setupCompanies() {
    companiesFullGrid.innerHTML = "";
    companiesData.forEach(comp => {
        const card = document.createElement("div");
        card.className = "company-extended-card";
        card.innerHTML = `
            <div class="extended-comp-header">
                <div class="comp-logo">${comp.logo}</div>
                <div class="comp-rating">
                    <svg width="14" height="14" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>${comp.rating} Rating</span>
                </div>
            </div>
            <div class="extended-comp-info">
                <h3>${comp.name}</h3>
                <p style="font-size: 11.5px; color: var(--color-accent); font-weight: 600; margin-bottom: 8px;">${comp.location}</p>
            </div>
            <p class="extended-comp-desc">${comp.description}</p>
            <div class="extended-comp-details">
                <div class="details-row-comp">
                    <span class="details-lbl">Company Size:</span>
                    <span class="details-val">${comp.size}</span>
                </div>
                <div class="details-row-comp">
                    <span class="details-lbl">Tech Profile Match:</span>
                    <span class="details-val" style="color: var(--color-emerald); font-weight: 600;">Highly Matched</span>
                </div>
                <div class="details-row-comp">
                    <span class="details-lbl">Stack Highlights:</span>
                    <span class="details-val" style="font-size:11px; max-width:60%; text-align:right;">${comp.techStack}</span>
                </div>
            </div>
            <button class="btn btn-secondary btn-sm" style="margin-top: 16px;" onclick="searchCompanyJobs('${comp.name}')">
                Search Openings (${comp.jobsCount})
            </button>
        `;
        companiesFullGrid.appendChild(card);
    });
}

// Global scope window helper to search company jobs
window.searchCompanyJobs = function(companyName) {
    searchJobInput.value = companyName;
    renderJobs();
    switchTab("jobs");
};

// --- Profile Skills Tab Helper ---
function populateSkillsInventory() {
    const container = document.getElementById("profile-skills-grid");
    container.innerHTML = "";
    
    for (const [category, skillList] of Object.entries(resumeData.skills)) {
        const row = document.createElement("div");
        row.className = "skill-category-row";
        row.innerHTML = `
            <div class="skill-cat-title">${category}</div>
            <div class="skill-cat-vals">${skillList.join(", ")}</div>
        `;
        container.appendChild(row);
    }
}

// --- Application Board (Kanban) Renderer ---
function renderKanban() {
    // Clear containers
    const containers = {
        bookmarked: document.querySelector('.kanban-cards-container[data-status="bookmarked"]'),
        applied: document.querySelector('.kanban-cards-container[data-status="applied"]'),
        interviewing: document.querySelector('.kanban-cards-container[data-status="interviewing"]'),
        offer: document.querySelector('.kanban-cards-container[data-status="offer"]'),
        rejected: document.querySelector('.kanban-cards-container[data-status="rejected"]')
    };

    Object.values(containers).forEach(c => c.innerHTML = "");

    // Populate Cards
    state.applications.forEach(app => {
        const card = document.createElement("div");
        card.className = "kanban-card";
        
        card.innerHTML = `
            <div class="kanban-card-comp">${app.companyName}</div>
            <div class="kanban-card-role">${app.jobTitle}</div>
            <div class="kanban-card-meta">
                <span class="kanban-card-date">${app.date}</span>
                <span class="kanban-card-fit">${app.matchScore}% Match</span>
            </div>
            <div class="kanban-card-actions">
                ${renderKanbanActionButtons(app)}
            </div>
        `;
        
        const container = containers[app.status];
        if(container) {
            container.appendChild(card);
        }
    });

    // Update column counters
    updateColumnCounters();
}

function renderKanbanActionButtons(app) {
    const statuses = [
        { id: "bookmarked", label: "Bkmark" },
        { id: "applied", label: "Apply" },
        { id: "interviewing", label: "Interv" },
        { id: "offer", label: "Offer" },
        { id: "rejected", label: "Reject" }
    ];

    return statuses
        .filter(s => s.id !== app.status)
        .map(s => `<button class="kanban-move-btn" onclick="moveApplication('${app.id}', '${s.id}')">${s.label}</button>`)
        .join('');
}

// Global scope window helper to transition application statuses
window.moveApplication = function(appId, newStatus) {
    const app = state.applications.find(a => a.id === appId);
    if (app) {
        app.status = newStatus;
        saveState();
        renderKanban();
        updateGlobalStats();
        setupDashboard();
        renderJobs(); // Redraw jobs in case apply button needs updating
        showToast(`Moved application to ${newStatus.replace('-', ' ')}`);
    }
};

function updateColumnCounters() {
    const counts = {
        bookmarked: 0,
        applied: 0,
        interviewing: 0,
        offer: 0,
        rejected: 0
    };

    state.applications.forEach(a => {
        if(counts[a.status] !== undefined) {
            counts[a.status]++;
        }
    });

    badgeBookmarked.textContent = counts.bookmarked;
    badgeApplied.textContent = counts.applied;
    badgeInterviewing.textContent = counts.interviewing;
    badgeOffer.textContent = counts.offer;
    badgeRejected.textContent = counts.rejected;
}

// --- Global Counter Statistics Updater ---
function updateGlobalStats() {
    // Total jobs in data directory
    statTotalJobs.textContent = jobsData.length;

    // Count applied, interviewing, and offers
    let applied = 0;
    let interviewing = 0;
    let offers = 0;

    state.applications.forEach(app => {
        if (app.status === "applied") applied++;
        else if (app.status === "interviewing") interviewing++;
        else if (app.status === "offer") offers++;
    });

    statAppliedJobs.textContent = applied;
    statInterviews.textContent = interviewing;
    statOffers.textContent = offers;
}

// --- Bookmark Action ---
function bookmarkJob(job) {
    const existing = state.applications.find(a => a.jobId === job.id);
    if (existing) {
        showToast(`This job is already added under "${existing.status}"`);
        return;
    }

    const newApp = {
        id: "app-" + Date.now(),
        jobId: job.id,
        jobTitle: job.title,
        companyName: job.companyName,
        status: "bookmarked",
        date: new Date().toISOString().split('T')[0],
        matchScore: job.matchScore,
        coverLetter: ""
    };

    state.applications.push(newApp);
    saveState();
    renderKanban();
    updateGlobalStats();
    setupDashboard();
    selectJob(job.id); // Redraw buttons
    showToast(`Bookmarked "${job.title}" successfully!`);
}

// --- Apply Form Overlay Modal & Cover Letter Generators ---
let activeModalJob = null;

function setupModalEvents() {
    btnCloseModal.addEventListener("click", closeApplyModal);
    applyForm.addEventListener("submit", handleApplySubmit);
    btnRegenLetter.addEventListener("click", () => {
        if (activeModalJob) {
            const letter = generateCoverLetter(activeModalJob);
            coverLetterTextarea.value = letter;
        }
    });
}

function openApplyModal(job) {
    activeModalJob = job;
    modalJobTitle.textContent = job.title;
    modalCompanyTitle.textContent = job.companyName;
    modalFitGauge.textContent = `${job.matchScore}%`;
    modalFitGauge.style.background = `conic-gradient(var(--color-accent) ${job.matchScore * 3.6}deg, var(--border-color) 0deg)`;

    // Calculate dynamic matching description
    if (job.matchScore >= 95) {
        modalMatchReason.textContent = "Outstanding Profile Match! Your core competencies and DBA background align seamlessly with all their critical demands.";
    } else {
        modalMatchReason.textContent = "High Compatibility Rating. Your database optimizations and .NET backend skillset cover their key requirements.";
    }

    // Set generated cover letter
    const letter = generateCoverLetter(job);
    coverLetterTextarea.value = letter;

    applyModal.classList.remove("hidden");
}

function closeApplyModal() {
    applyModal.classList.add("hidden");
    activeModalJob = null;
}

function generateCoverLetter(job) {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    // Pick specific achievements or details to customize letter
    let specificParagraph = "";
    if (job.specialty === "dba" || job.title.toLowerCase().includes("dba") || job.title.toLowerCase().includes("database")) {
        specificParagraph = "Throughout my 7+ years of database engineering, I have focused heavily on SQL Server lifecycle management, database design schemas, index restructuring, and query plan optimizations. In my recent role at Technobrains, I took end-to-end DBA ownership of healthcare platform databases, implementing disaster recovery setups and tuning execution workflows to increase operational responsiveness.";
    } else if (job.specialty === "architect" || job.title.toLowerCase().includes("architect") || job.title.toLowerCase().includes("lead")) {
        specificParagraph = "With more than 7 years of backend engineering experience, I specialize in architecting scalable .NET Core backend systems utilizing Clean Architecture, SOLID design principles, and RESTful API structures. My background includes leading design workflows, integrating JWT/RBAC security pipelines, and implementing AI automations to optimize business workflows.";
    } else {
        specificParagraph = "As a Senior Developer with 7+ years of backend development experience using ASP.NET MVC and .NET Core (6/7/8), I have designed and delivered scalable products across E-Commerce, Healthcare, and HRMS systems. I have a proven record of optimizing query throughput and leading code reviews to ensure clean repository patterns.";
    }

    return `Date: ${today}

To the Hiring Team at ${job.companyName},

I am writing to express my strong interest in the ${job.title} position currently open at ${job.companyName}. With over 7 years of professional experience as a Senior .NET Developer and Database Administrator, I am confident that my technical skills match your requirements.

${specificParagraph}

I was recognized as the "Best Performer – Q4 2023" during my tenure at Technobrains IT Solution, reflecting my commitment to delivery excellence and quality backend engineering. I look forward to bringing my expertise in C#, REST API architecture, and database tuning to ${job.companyName}.

Thank you for your time and consideration. I welcome the opportunity to discuss my qualifications further.

Sincerely,
Amee Brahmbhatt
Ahmedabad, Gujarat, India`;
}

function handleApplySubmit(e) {
    e.preventDefault();
    if (!activeModalJob) return;

    // Check if they already have a bookmark, update its status
    const existingIndex = state.applications.findIndex(a => a.jobId === activeModalJob.id);
    
    if (existingIndex > -1) {
        state.applications[existingIndex].status = "applied";
        state.applications[existingIndex].date = new Date().toISOString().split('T')[0];
        state.applications[existingIndex].coverLetter = coverLetterTextarea.value;
    } else {
        const newApp = {
            id: "app-" + Date.now(),
            jobId: activeModalJob.id,
            jobTitle: activeModalJob.title,
            companyName: activeModalJob.companyName,
            status: "applied",
            date: new Date().toISOString().split('T')[0],
            matchScore: activeModalJob.matchScore,
            coverLetter: coverLetterTextarea.value
        };
        state.applications.push(newApp);
    }

    saveState();
    closeApplyModal();
    renderKanban();
    updateGlobalStats();
    setupDashboard();
    selectJob(activeModalJob.id); // Redraw detail panel button
    showToast(`Successfully applied to ${activeModalJob.companyName}!`);
}

// --- Toast Popup Handler ---
let toastTimer = null;
function showToast(message) {
    toastMessage.textContent = message;
    toastNotification.classList.remove("hidden");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toastNotification.classList.add("hidden");
    }, 4000);
}

// --- Bulk Auto-Apply Module ---
function setupBulkApply() {
    // Populate form with vault details
    const liUser = document.getElementById("vault-li-user");
    const liPass = document.getElementById("vault-li-pass");
    const nkUser = document.getElementById("vault-nk-user");
    const nkPass = document.getElementById("vault-nk-pass");
    const bulkUrlsInput = document.getElementById("bulk-urls-input");

    if (state.credentials) {
        liUser.value = state.credentials.liUser || "";
        liPass.value = state.credentials.liPass || "";
        nkUser.value = state.credentials.nkUser || "";
        nkPass.value = state.credentials.nkPass || "";
    }

    // Prepopulate default URLs
    bulkUrlsInput.value = [
        "https://in.linkedin.com/jobs/view/senior-dotnet-developer-at-tatvasoft-98314",
        "https://www.naukri.com/job-listings-sql-server-dba-lead-capgemini-pune-3-to-8-years",
        "https://in.linkedin.com/jobs/view/backend-api-architect-at-cognizant-8422"
    ].join("\n");

    // Event listeners
    document.getElementById("btn-save-vault").addEventListener("click", () => {
        state.credentials = {
            liUser: liUser.value,
            liPass: liPass.value,
            nkUser: nkUser.value,
            nkPass: nkPass.value
        };
        saveState();
        showToast("Secure Crypt-Vault keys updated successfully!");
    });

    document.getElementById("btn-clear-urls").addEventListener("click", () => {
        bulkUrlsInput.value = "";
        showToast("URL list cleared.");
    });

    document.getElementById("btn-start-bulk-apply").addEventListener("click", () => {
        triggerBulkAutoApply();
    });

    // Toggle Button Events for Automation Mode
    const btnAuto = document.getElementById("btn-mode-auto");
    const btnManual = document.getElementById("btn-mode-manual");

    function updateModeUI() {
        if (state.automationMode === "manual") {
            btnAuto.classList.remove("active");
            btnAuto.style.background = "transparent";
            btnAuto.style.color = "var(--text-secondary)";
            
            btnManual.classList.add("active");
            btnManual.style.background = "var(--color-primary)";
            btnManual.style.color = "white";
        } else {
            btnManual.classList.remove("active");
            btnManual.style.background = "transparent";
            btnManual.style.color = "var(--text-secondary)";
            
            btnAuto.classList.add("active");
            btnAuto.style.background = "var(--color-primary)";
            btnAuto.style.color = "white";
        }
    }

    if (!state.automationMode) {
        state.automationMode = "automated";
    }
    updateModeUI();

    btnAuto.addEventListener("click", () => {
        state.automationMode = "automated";
        saveState();
        updateModeUI();
        showToast("Switched to Fully Automated mode.");
    });

    btnManual.addEventListener("click", () => {
        state.automationMode = "manual";
        saveState();
        updateModeUI();
        showToast("Switched to Manual Credentials Verification mode.");
    });
}

function triggerBulkAutoApply() {
    const urlsInput = document.getElementById("bulk-urls-input");
    const logArea = document.getElementById("terminal-log-output");
    const termPulse = document.getElementById("terminal-pulse");
    const progressBar = document.getElementById("bulk-progress-bar");
    const progressPct = document.getElementById("bulk-progress-pct");
    const btnStart = document.getElementById("btn-start-bulk-apply");

    const lines = urlsInput.value.split("\n").map(l => l.trim()).filter(l => l.length > 0);

    if (lines.length === 0) {
        showToast("Please enter at least one job URL list link!");
        return;
    }

    // Disable start button during execution
    btnStart.disabled = true;
    termPulse.textContent = "RUNNING";
    termPulse.className = "terminal-status running";
    
    // Clear terminal log screen
    logArea.innerHTML = "";
    writeLog("system", `[SYSTEM] Initializing Batch Automation Runner...`);
    writeLog("info", `[INFO] Read ${lines.length} job links from batch file.`);
    writeLog("info", `[INFO] Loaded secure local credentials mapping:`);
    writeLog("info", `  -> LinkedIn: "${state.credentials.liUser}"`);
    writeLog("info", `  -> Naukri: "${state.credentials.nkUser}"`);
    
    let currentIdx = 0;
    progressBar.style.width = "0%";
    progressPct.textContent = "0%";

    function executeNext() {
        if (currentIdx >= lines.length) {
            // Completed batch
            writeLog("success", `[BATCH SUCCESS] Executed all ${lines.length} applications in batch!`);
            writeLog("system", `[SYSTEM] Releasing Chromium instances. Automation board updated.`);
            termPulse.textContent = "IDLE";
            termPulse.className = "terminal-status";
            btnStart.disabled = false;
            progressBar.style.width = "100%";
            progressPct.textContent = "100%";
            
            // Re-draw stats and kanban
            renderKanban();
            updateGlobalStats();
            setupDashboard();
            renderJobs();
            
            showToast("Bulk application batch completed successfully!");
            return;
        }

        const url = lines[currentIdx];
        writeLog("system", `--------------------------------------------------------`);
        writeLog("system", `[JOB ${currentIdx + 1}/${lines.length}] Processing URL: ${url}`);
        
        // Parse URL details
        const parsed = parseJobUrlDetails(url);
        writeLog("info", `[INFO] Classified Platform: ${parsed.platform.toUpperCase()}`);
        writeLog("info", `[INFO] Identified Target: "${parsed.role}" at "${parsed.company}"`);

        // Queue simulated step logs
        let step = 0;
        const steps = [
            { text: `[INFO] Launching Headless Chromium Browser Instance...`, type: "info" },
            { text: `[INFO] Navigating to page "${url}"...`, type: "info" },
            { text: `[INFO] Page loaded. Resolving security tokens...`, type: "info" },
            { text: parsed.platform === "linkedin" 
                ? `[INFO] LinkedIn login required. Injecting credentials for user: "${state.credentials.liUser}"...`
                : `[INFO] Naukri.com login required. Injecting credentials for user: "${state.credentials.nkUser}"...`, type: "warning" },
            { text: `[INFO] OAuth validation checks passed. Session established successfully.`, type: "success" },
            { text: `[INFO] Parsing job parameters. Calculating compatibility: Fit Score = ${parsed.match}%`, type: "info" },
            { text: `[INFO] Form-filling resume profile: Name="Amee Brahmbhatt", Phone="+91 81418 02828", Experience="7.2 Yrs"`, type: "info" },
            { text: `[INFO] Injecting source: "F:\\Resume2026\\Amee_Brahmbhatt_ATS_Resume_Backend.pdf" (Size: 7.2 KB)`, type: "info" },
            { text: `[INFO] Auto-generating custom cover letter matching: "${parsed.role}"...`, type: "info" },
            { text: `[INFO] Clicking easy apply form submit elements...`, type: "info" },
            { text: `[SUCCESS] Reference submission logged: "${generateRandomHash()}"`, type: "success" },
            { text: `[SUCCESS] Application recorded! Status saved in local database repository.`, type: "success" }
        ];

        function runStep() {
            if (step >= steps.length) {
                // Add to application registry
                const newApp = {
                    id: "app-" + Date.now() + "-" + currentIdx,
                    jobId: "bulk-job-" + currentIdx + "-" + Date.now(),
                    jobTitle: parsed.role,
                    companyName: parsed.company,
                    status: "applied",
                    date: new Date().toISOString().split('T')[0],
                    matchScore: parsed.match,
                    coverLetter: `Simulated Bulk Apply Cover Letter.\nCompany: ${parsed.company}\nJob: ${parsed.role}`
                };
                state.applications.push(newApp);
                saveState();

                // Increment progress
                currentIdx++;
                const pct = Math.round((currentIdx / lines.length) * 100);
                progressBar.style.width = `${pct}%`;
                progressPct.textContent = `${pct}%`;

                // Run next job
                setTimeout(executeNext, 1200);
                return;
            }

            // Check if manual intercept mode is enabled and we are at the login step
            if (state.automationMode === "manual" && step === 3) {
                // Log the credentials warning step first
                writeLog(steps[step].type, steps[step].text);
                
                // Show manual intercept panel
                const interceptPanel = document.getElementById("terminal-intercept");
                const platformName = document.getElementById("intercept-platform-name");
                const emailDisplay = document.getElementById("intercept-email-display");
                const passInput = document.getElementById("intercept-password");
                const submitBtn = document.getElementById("btn-intercept-submit");

                platformName.textContent = parsed.platform === "linkedin" ? "LinkedIn" : "Naukri";
                emailDisplay.textContent = parsed.platform === "linkedin" ? state.credentials.liUser : state.credentials.nkUser;
                passInput.value = "";
                
                interceptPanel.classList.remove("hidden");
                writeLog("warning", `[INTERCEPTED] Simulation paused. Awaiting credential validation...`);

                // Temporary inline submit handler
                function onVerifySubmit() {
                    const passVal = passInput.value.trim();
                    if (!passVal) {
                        alert("Please confirm your password to proceed!");
                        return;
                    }
                    
                    interceptPanel.classList.add("hidden");
                    writeLog("success", `[SYSTEM] Manual credential keys verified successfully.`);
                    
                    // Unbind listener so it doesn't double-fire next time
                    newSubmitBtn.removeEventListener("click", onVerifySubmit);
                    
                    // Move to next step and resume
                    step++;
                    setTimeout(runStep, 450);
                }

                // Make sure to unbind any older listener first to be safe
                const newSubmitBtn = submitBtn.cloneNode(true);
                submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
                newSubmitBtn.addEventListener("click", onVerifySubmit);
                
                // Support pressing Enter key
                passInput.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        newSubmitBtn.click();
                    }
                });

                return; // PAUSE THE RUNNER
            }

            writeLog(steps[step].type, steps[step].text);
            step++;
            setTimeout(runStep, 450); // delay between steps
        }

        setTimeout(runStep, 800);
    }

    // Start execution
    setTimeout(executeNext, 1000);
}

function parseJobUrlDetails(url) {
    const details = {
        platform: "direct-web",
        company: "Enterprise Corp",
        role: "Senior .NET Developer",
        match: 94
    };

    // Determine platform
    if (url.toLowerCase().includes("linkedin.com")) {
        details.platform = "linkedin";
    } else if (url.toLowerCase().includes("naukri.com")) {
        details.platform = "naukri";
    }

    // Parse role/company from URL slug
    try {
        const slug = url.split('/').pop().replace(/-+/g, ' ');
        if (slug && slug.length > 5) {
            // Try to extract roles/companies
            if (slug.toLowerCase().includes("at")) {
                const parts = slug.split(/\bat\b/i);
                details.role = cleanSlugWord(parts[0]);
                details.company = cleanSlugWord(parts[1]);
            } else if (slug.toLowerCase().includes("jobs")) {
                details.role = "Senior .NET Developer";
                details.company = "Top IT Hiring Firm";
            } else {
                details.role = cleanSlugWord(slug.split(/[?#0-9]/)[0]);
                // Randomly assign a company
                const mockComps = ["TatvaSoft", "Simform", "Technobrains", "Accenture", "Cognizant", "Capgemini"];
                details.company = mockComps[Math.floor(Math.random() * mockComps.length)];
            }
        }
    } catch(e) {
        // Fallbacks
    }

    // Normalize roles to look clean
    if (details.role.toLowerCase().includes("dotnet") || details.role.toLowerCase().includes("developer")) {
        details.role = "Senior .NET Developer";
        details.match = 95;
    } else if (details.role.toLowerCase().includes("dba") || details.role.toLowerCase().includes("sql") || details.role.toLowerCase().includes("database")) {
        details.role = "Lead SQL Server DBA";
        details.match = 96;
    } else if (details.role.toLowerCase().includes("architect") || details.role.toLowerCase().includes("lead")) {
        details.role = "Backend API Architect";
        details.match = 97;
    }

    return details;
}

function cleanSlugWord(word) {
    if (!word) return "";
    word = word.trim();
    // Capitalize first letters
    return word.split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}

function generateRandomHash() {
    const chars = "abcdef0123456789";
    let hash = "ref_";
    for(let i=0; i<12; i++) {
        hash += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return hash;
}

function writeLog(type, text) {
    const logArea = document.getElementById("terminal-log-output");
    if (!logArea) return;

    const line = document.createElement("div");
    line.className = `term-line ${type}`;
    line.textContent = text;
    logArea.appendChild(line);

    // Auto-scroll terminal
    logArea.scrollTop = logArea.scrollHeight;
}

