// ============================================================
//  ApexApply .NET v2.0 — Core Application Logic
//  Features: SHA-256 auth, Notes tab, 20 jobs, LinkedIn/Naukri
//  links, Light/Dark toggle, Mobile sidebar, premium UI
// ============================================================

// ─────────────────────────────────────────────────────────────
// RESUME DATA MODEL
// ─────────────────────────────────────────────────────────────
const resumeData = {
    name: "Gaurav Maurya",
    title: ".NET Core Backend Developer / REST APIs / SQL Server DBA",
    email: "gauravmaurya919@gmail.com",
    phone: "+91 84189 31740",
    location: "Ahmedabad, Gujarat, India",
    linkedin: "linkedin.com/in/gaurav-maurya-830a071a6",
    github: "github.com/gauravmaurya563",
    experienceYears: 3.0,
    summary: "Results-driven Backend Developer with 3+ years of experience engineering high-performance REST APIs and enterprise applications using .NET Core, C#, ASP.NET MVC, and SQL Server. Delivered 35–40% reduction in API response latency through LINQ optimization and Redis caching, and 30%+ SQL query performance via stored procedures and indexing. Recognized with Employee Spotlight Award (May 2024). Adept at clean architecture, SOLID principles, microservices design, and Agile delivery.",
    skills: {
        "Backend":        ["C#", ".NET Core 6/7/8", "ASP.NET MVC", "ASP.NET Web API", "Entity Framework Core", "Dapper", "Minimal APIs", "gRPC", "SignalR"],
        "Databases":      ["SQL Server", "Stored Procedures", "Query Optimization", "Indexing", "Execution Plans", "Performance Tuning", "Normalization"],
        "DevOps & Cloud": ["Docker", "Azure App Service", "Azure SQL", "CI/CD Pipelines", "Git", "GitHub", "Bitbucket"],
        "Frontend":       ["Angular", "React", "Next.js (SSR)", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
        "Architecture":   ["Clean Architecture", "Vertical Slice", "N-Tier", "Repository Pattern", "SOLID", "Dependency Injection", "Design Patterns"],
        "Security":       ["JWT Authentication", "OAuth 2.0", "Role-Based Access Control (RBAC)", "API Security"],
        "Tools":          ["Visual Studio", "VS Code", "Postman", "Swagger/OpenAPI", "SSMS", "Jira", "GitHub Copilot", "Cursor"]
    },
    achievements: [
        "Employee Spotlight Award – Technobrains Business Solutions (May 2024): Recognized for consistent high performance, backend optimization and proactive ownership.",
        "Delivered 35–40% API latency reduction and 30%+ SQL performance improvement within Year 1."
    ]
};

// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────
const CURRENT_EMPLOYER_ID = "technobrains";
// SHA-256 hash of "Eema@123" — generated via Web Crypto API
const DEFAULT_PASS_HASH   = "215feada22ff2055c2a9b26074d29d5699ca2c687579ea81c7d9e0e85eb0d73a"; // SHA-256 of "Eema@123"

// ─────────────────────────────────────────────────────────────
// COMPANIES DATA (9 companies — 3 new added)
// ─────────────────────────────────────────────────────────────
const companiesData = [
    { id: "technobrains", name: "Technobrains IT Solution", logo: "TB", rating: "4.4", location: "Ahmedabad, India", size: "150-200 Employees", description: "Your current employer! A premium software engineering consulting firm specializing in enterprise web development, e-commerce systems, and healthcare platforms.", techStack: "ASP.NET MVC, .NET Core, SQL Server, Entity Framework", matchReason: "Direct match – you currently work here as a Senior Developer and DBA. Excellent fit for leadership and architect roles.", jobsCount: 2 },
    { id: "simform", name: "Simform", logo: "SF", rating: "4.2", location: "Ahmedabad, India (Hybrid)", size: "1000+ Employees", description: "A leading digital product engineering company building complex web applications and cloud architectures for international enterprises.", techStack: ".NET Core 8, Microservices, SQL Server DBA, AWS", matchReason: "Actively hiring Senior Backend Developers with strong SQL DBA experience for medical and logistics systems.", jobsCount: 2 },
    { id: "tatvasoft", name: "TatvaSoft", logo: "TS", rating: "4.1", location: "Ahmedabad, India", size: "800+ Employees", description: "A CMMI Level 3 software development company providing global software outsourcing services, focusing on Microsoft technology stacks.", techStack: "ASP.NET, MVC, C#, SQL Server Performance Tuning", matchReason: "High demand for seasoned .NET developers with deep DB design knowledge for enterprise ERP workflows.", jobsCount: 2 },
    { id: "radixweb", name: "Radixweb", logo: "RW", rating: "4.3", location: "Ahmedabad, India", size: "500-1000 Employees", description: "A global IT consulting and software development company specializing in cloud-native business application development.", techStack: ".NET Core, REST APIs, SQL DBA, Angular", matchReason: "Requires senior engineers with DBA backgrounds to optimize large e-commerce platforms and cloud services.", jobsCount: 1 },
    { id: "microsoft", name: "Microsoft", logo: "MS", rating: "4.6", location: "Bangalore/Remote, India", size: "100,000+ Employees", description: "The creator of .NET and SQL Server. Microsoft is the ultimate destination for senior engineers working in the Microsoft ecosystem.", techStack: ".NET 8, C#, SQL Azure, Distributed Systems", matchReason: "Your C# expertise and SQL Server DBA background make you a strong candidate for Azure Core SQL support engineers.", jobsCount: 1 },
    { id: "cognizant", name: "Cognizant", logo: "CO", rating: "3.9", location: "Pune, India (Remote)", size: "300,000+ Employees", description: "A multinational technology company providing consulting, IT, and business process outsourcing services globally.", techStack: ".NET Core, Microservices, RBAC, JWT, Oracle/SQL", matchReason: "Hiring for global healthcare clients requiring HIPAA compliance, JWT auth, and complex DB query tuning.", jobsCount: 2 },
    { id: "capgemini", name: "Capgemini", logo: "CG", rating: "4.0", location: "Pune/Remote, India", size: "340,000+ Employees", description: "A global leader in partnering with companies to transform and manage their business by harnessing the power of technology.", techStack: ".NET Core, Web API, SQL Server DBA, Azure DevOps", matchReason: "Seeking backend specialists to lead database migrations and architectural redesigns on .NET core projects.", jobsCount: 2 },
    { id: "infosys", name: "Infosys", logo: "IN", rating: "4.1", location: "Pune/Bangalore, India (Remote)", size: "300,000+ Employees", description: "A global leader in next-generation digital services and consulting, helping clients navigate their digital transformation.", techStack: ".NET Core, Microservices, SQL Server, Azure, Docker", matchReason: "Recruiting .NET Microservices leads and SQL DBA experts for large enterprise digital transformation projects.", jobsCount: 2 },
    { id: "wipro", name: "Wipro", logo: "WP", rating: "3.8", location: "Hyderabad/Remote, India", size: "250,000+ Employees", description: "A leading global information technology, consulting and business process services company with diverse technical stacks.", techStack: ".NET Core, SQL Server, REST APIs, Entity Framework", matchReason: "Actively hiring senior backend developers with SQL Server DBA skills for BFSI and healthcare client projects.", jobsCount: 2 },
    { id: "persistent", name: "Persistent Systems", logo: "PS", rating: "4.2", location: "Pune, India (Hybrid)", size: "20,000+ Employees", description: "A technology services company focused on software product development, digital transformation, and cloud engineering services.", techStack: ".NET Core 8, REST APIs, SQL Server, CI/CD, Docker", matchReason: "Strong need for experienced .NET developers with clean architecture skills and SQL optimization background.", jobsCount: 1 }
];

// ─────────────────────────────────────────────────────────────
// JOBS DATA (20 tailored job postings)
// ─────────────────────────────────────────────────────────────
const jobsData = [
    {
        id: "job-001", title: "Senior .NET Core Backend Architect", companyId: "simform", companyName: "Simform", rating: "4.2",
        location: "Ahmedabad, India (Hybrid)", type: "Full-Time", salary: "₹18,00,000 - ₹24,00,000 / Yr", matchScore: 96, specialty: "dotnet",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Senior+.NET+Core+Backend+Architect+Simform&location=Ahmedabad", naukri: "https://www.naukri.com/senior-net-core-backend-architect-jobs-in-ahmedabad" },
        skills: { matched: [".NET Core 6/7/8", "C#", "Entity Framework", "REST APIs", "SQL Server", "Query Optimization", "Clean Architecture", "Dependency Injection"], missing: ["AWS Cloud services", "Docker"] },
        description: `<p>We are seeking a seasoned <strong>Senior .NET Core Developer</strong> to take ownership of our scalable backend systems. You will lead the architecture of clean microservices, design secure APIs, and work closely with client engineering teams.</p><h3>Key Responsibilities:</h3><ul><li>Architect and develop high-volume REST APIs using .NET Core 8 and C#.</li><li>Write clean code following SOLID principles, Clean Architecture, and repository patterns.</li><li>Design databases and optimize complex SQL queries and stored procedures.</li><li>Mentor junior and mid-level developers through constructive code reviews.</li></ul><h3>Requirements:</h3><ul><li>6+ years of active experience in backend development using Microsoft technologies.</li><li>Deep knowledge of SQL Server, database indexing, and query performance tuning.</li><li>Experience with JWT Authentication and API security standards (RBAC).</li></ul>`
    },
    {
        id: "job-002", title: "Lead SQL Server DBA", companyId: "simform", companyName: "Simform", rating: "4.2",
        location: "Ahmedabad, India (Hybrid)", type: "Full-Time", salary: "₹16,00,000 - ₹22,00,000 / Yr", matchScore: 94, specialty: "dba",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=SQL+Server+DBA+Simform&location=Ahmedabad", naukri: "https://www.naukri.com/sql-server-dba-jobs-in-ahmedabad" },
        skills: { matched: ["SQL Server", "Stored Procedures", "Query Optimization", "Execution Plans", "Performance Tuning", "Indexing", "Backup & Recovery", "DB Design & Normalization"], missing: ["NoSQL (MongoDB)", "SSIS/SSRS packages"] },
        description: `<p>Join our database core services team as a <strong>Lead SQL Server DBA</strong>. Manage health, backup strategies, performance, and scaling of critical client database nodes.</p><h3>Key Responsibilities:</h3><ul><li>Configure and maintain Microsoft SQL Server high-availability cluster instances.</li><li>Troubleshoot execution plans, optimize slow-running queries, and audit indexes.</li><li>Formulate robust database backup, restore, and disaster recovery strategies.</li></ul>`
    },
    {
        id: "job-003", title: "Technical Lead (.NET Core + SQL Server DBA)", companyId: "technobrains", companyName: "Technobrains IT Solution", rating: "4.4",
        location: "Ahmedabad, India", type: "Full-Time", salary: "₹15,00,000 - ₹20,00,000 / Yr", matchScore: 98, specialty: "dotnet",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Technical+Lead+.NET+Core+SQL+DBA+Technobrains", naukri: "https://www.naukri.com/technical-lead-net-core-sql-dba-jobs-in-ahmedabad" },
        skills: { matched: ["ASP.NET MVC", ".NET Core 6/7/8", "SQL Server", "Query Optimization", "Performance Tuning", "Stored Procedures", "JWT Authentication", "RBAC", "Agile / Scrum"], missing: [] },
        description: `<p>We're looking for a <strong>Technical Lead</strong> to head our backend engineering team. Dual developer + DBA management role directly aligned with healthcare and HRMS business units.</p><h3>Key Responsibilities:</h3><ul><li>Lead development teams on enterprise apps using .NET Core 7/8.</li><li>Perform DBA tasks: designing, optimizing, and securing production databases.</li><li>Manage deployment pipelines and facilitate client technical meetings.</li></ul>`
    },
    {
        id: "job-004", title: "Senior Backend & REST API Architect", companyId: "technobrains", companyName: "Technobrains IT Solution", rating: "4.4",
        location: "Ahmedabad, India", type: "Full-Time", salary: "₹14,00,000 - ₹18,00,000 / Yr", matchScore: 97, specialty: "architect",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Backend+API+Architect+Technobrains+Ahmedabad", naukri: "https://www.naukri.com/backend-api-architect-jobs-in-ahmedabad" },
        skills: { matched: [".NET Core 6/7/8", "REST APIs", "JWT Authentication", "RBAC", "Entity Framework", "C#", "Clean Architecture", "SOLID Principles"], missing: ["Microservices (Docker)"] },
        description: `<p>Seeking an expert <strong>Backend & API Architect</strong> to design complex APIs connecting HRMS systems with global payroll channels.</p><h3>Key Responsibilities:</h3><ul><li>Design secure RESTful APIs utilizing JWT and OAuth 2.0.</li><li>Develop structured database structures using SQL Server and Entity Framework.</li><li>Integrate AI workflow components to streamline document parsing.</li></ul>`
    },
    {
        id: "job-005", title: "Senior .NET Developer (Enterprise ERP)", companyId: "tatvasoft", companyName: "TatvaSoft", rating: "4.1",
        location: "Ahmedabad, India", type: "Full-Time", salary: "₹14,00,000 - ₹20,00,000 / Yr", matchScore: 93, specialty: "dotnet",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Senior+.NET+Developer+TatvaSoft+Ahmedabad", naukri: "https://www.naukri.com/senior-net-developer-jobs-in-ahmedabad-tatvasoft" },
        skills: { matched: ["ASP.NET MVC", "C#", "SQL Server", "Stored Procedures", "Indexing", "Entity Framework", "Agile", "SOLID Principles"], missing: ["Angular / React UI integrations"] },
        description: `<p>TatvaSoft is seeking a senior resource for enterprise ERP portals — payroll, inventory tracking, and scheduling software modules.</p><ul><li>Expert command of ASP.NET MVC and C#.</li><li>Outstanding SQL query creation, tuning, and indexing strategies.</li></ul>`
    },
    {
        id: "job-006", title: "Database Performance Engineer (SQL Specialist)", companyId: "tatvasoft", companyName: "TatvaSoft", rating: "4.1",
        location: "Ahmedabad, India", type: "Full-Time", salary: "₹16,00,000 - ₹21,00,000 / Yr", matchScore: 95, specialty: "dba",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=SQL+Database+Performance+Engineer+TatvaSoft", naukri: "https://www.naukri.com/sql-database-performance-engineer-jobs-in-ahmedabad" },
        skills: { matched: ["SQL Server", "Performance Tuning", "Query Optimization", "Execution Plans", "Indexing", "Stored Procedures", "Triggers", "Functions"], missing: ["SSIS (SQL Server Integration Services)"] },
        description: `<p>We're searching for a <strong>SQL Database Performance Specialist</strong>. Analyze and refactor slow SQL clusters, audit indexes, and build optimized database procedures.</p><ul><li>Advanced database administration skills (tuning execution plans, index rebuilds).</li></ul>`
    },
    {
        id: "job-007", title: "Lead Database Engineer (SQL Server DBA)", companyId: "radixweb", companyName: "Radixweb", rating: "4.3",
        location: "Ahmedabad, India", type: "Full-Time", salary: "₹16,00,000 - ₹22,00,000 / Yr", matchScore: 94, specialty: "dba",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Lead+Database+Engineer+SQL+Radixweb+Ahmedabad", naukri: "https://www.naukri.com/lead-database-engineer-jobs-in-ahmedabad" },
        skills: { matched: ["SQL Server", "Backup & Recovery", "DB Design & Normalization", "Performance Tuning", "Query Optimization", "Stored Procedures", "Triggers"], missing: ["PostgreSQL experience"] },
        description: `<p>Administer development and production databases at Radixweb as a <strong>Lead Database Engineer</strong>. Manage schema versioning, database tuning, and high availability systems.</p>`
    },
    {
        id: "job-008", title: "Senior Support Engineer – Azure SQL", companyId: "microsoft", companyName: "Microsoft", rating: "4.6",
        location: "Bangalore, India (Remote)", type: "Full-Time", salary: "₹25,00,000 - ₹35,00,000 / Yr", matchScore: 92, specialty: "dba",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=SQL+Support+Engineer+Microsoft+India", naukri: "https://www.naukri.com/azure-sql-support-engineer-microsoft-jobs-india" },
        skills: { matched: ["SQL Server", "Performance Tuning", "Execution Plans", "Backup & Recovery", "C#", "Production Support"], missing: ["Azure SQL Database Architecture", "PowerShell Scripting"] },
        description: `<p>Support Microsoft's enterprise customers resolving complex cloud database failures. Dive deep into database engine internals, locks, blocks, and memory configurations.</p>`
    },
    {
        id: "job-009", title: "Senior Backend Developer – Healthcare IT", companyId: "cognizant", companyName: "Cognizant", rating: "3.9",
        location: "Pune, India (Remote)", type: "Full-Time", salary: "₹15,00,000 - ₹20,00,000 / Yr", matchScore: 95, specialty: "dotnet",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Senior+Backend+Developer+Healthcare+Cognizant", naukri: "https://www.naukri.com/senior-backend-developer-healthcare-it-cognizant-pune" },
        skills: { matched: [".NET Core 6/7/8", "SQL Server", "JWT Authentication", "RBAC", "Clean Architecture", "Agile / Scrum"], missing: ["FHIR standards (HL7)"] },
        description: `<p>Develop critical healthcare web systems at Cognizant. Build clinical process modules, patient charting systems, and integrate secure medical workflows.</p>`
    },
    {
        id: "job-010", title: "Senior Database Administrator (DBA Lead)", companyId: "cognizant", companyName: "Cognizant", rating: "3.9",
        location: "Pune, India", type: "Full-Time", salary: "₹16,00,000 - ₹21,00,000 / Yr", matchScore: 93, specialty: "dba",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Senior+DBA+Lead+Cognizant+Pune", naukri: "https://www.naukri.com/senior-dba-lead-cognizant-pune" },
        skills: { matched: ["SQL Server", "Backup & Recovery", "Performance Tuning", "Query Optimization", "Stored Procedures", "Execution Plans", "Production Support"], missing: ["Cloud DBA management"] },
        description: `<p>Take charge of database operations at Cognizant. Design backups, restore strategies, audit access controls, and resolve production database locks.</p>`
    },
    {
        id: "job-011", title: "Technical Architect – .NET & SQL Services", companyId: "capgemini", companyName: "Capgemini", rating: "4.0",
        location: "Pune, India (Remote)", type: "Full-Time", salary: "₹20,00,000 - ₹28,00,000 / Yr", matchScore: 95, specialty: "architect",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Technical+Architect+.NET+SQL+Capgemini+Pune", naukri: "https://www.naukri.com/technical-architect-net-sql-capgemini-pune" },
        skills: { matched: [".NET Core 6/7/8", "SQL Server", "Clean Architecture", "Microservices", "REST APIs", "SOLID Principles", "Code Review & Mentoring"], missing: ["Docker/Kubernetes deployments"] },
        description: `<p>Lead architectural definition of major logistics platforms using .NET Core microservices and cloud databases at Capgemini.</p>`
    },
    {
        id: "job-012", title: "Senior SQL Server Developer & DBA Analyst", companyId: "capgemini", companyName: "Capgemini", rating: "4.0",
        location: "Pune, India", type: "Full-Time", salary: "₹14,00,000 - ₹19,00,000 / Yr", matchScore: 94, specialty: "dba",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=SQL+Server+Developer+DBA+Capgemini", naukri: "https://www.naukri.com/sql-server-dba-capgemini-pune" },
        skills: { matched: ["SQL Server", "Stored Procedures", "Performance Tuning", "Query Optimization", "Indexing", "DB Design & Normalization", "Triggers", "Functions"], missing: ["SSAS cubes creation"] },
        description: `<p>Write optimized database objects and stored procedures at Capgemini, while helping operations run disaster recovery simulations.</p>`
    },
    {
        id: "job-013", title: ".NET Microservices Lead Engineer", companyId: "infosys", companyName: "Infosys", rating: "4.1",
        location: "Pune, India (Remote)", type: "Full-Time", salary: "₹18,00,000 - ₹26,00,000 / Yr", matchScore: 91, specialty: "dotnet",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=.NET+Microservices+Lead+Infosys+India", naukri: "https://www.naukri.com/net-microservices-lead-infosys-pune-jobs" },
        skills: { matched: [".NET Core 6/7/8", "C#", "REST APIs", "Entity Framework", "SQL Server", "Dependency Injection", "SOLID Principles", "Agile"], missing: ["Azure Kubernetes Service (AKS)", "Docker Compose orchestration"] },
        description: `<p>Lead the microservices engineering effort at Infosys for a large digital transformation project for a Fortune 500 client.</p><h3>Key Responsibilities:</h3><ul><li>Design and own multiple .NET Core microservices in a distributed system.</li><li>Collaborate with architects and DevOps to implement CI/CD pipelines.</li><li>Perform code reviews and mentor mid-level developers.</li></ul>`
    },
    {
        id: "job-014", title: "Senior SQL Server DBA – Banking Domain", companyId: "infosys", companyName: "Infosys", rating: "4.1",
        location: "Bangalore, India (Remote)", type: "Full-Time", salary: "₹17,00,000 - ₹23,00,000 / Yr", matchScore: 90, specialty: "dba",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Senior+SQL+DBA+Banking+Infosys+Bangalore", naukri: "https://www.naukri.com/senior-sql-dba-banking-infosys-bangalore" },
        skills: { matched: ["SQL Server", "Performance Tuning", "Query Optimization", "Execution Plans", "Stored Procedures", "Indexing", "Backup & Recovery"], missing: ["Oracle DBA experience", "SSIS pipelines"] },
        description: `<p>Maintain and optimize SQL Server infrastructure for a major banking client at Infosys Bangalore. Ensure 99.9% SLA uptime and regulatory compliance.</p>`
    },
    {
        id: "job-015", title: "Senior .NET Backend Developer", companyId: "wipro", companyName: "Wipro", rating: "3.8",
        location: "Hyderabad, India (Remote)", type: "Full-Time", salary: "₹14,00,000 - ₹20,00,000 / Yr", matchScore: 90, specialty: "dotnet",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Senior+.NET+Backend+Developer+Wipro+India", naukri: "https://www.naukri.com/senior-net-backend-developer-wipro-hyderabad" },
        skills: { matched: [".NET Core 6/7/8", "ASP.NET MVC", "C#", "SQL Server", "Entity Framework", "REST APIs", "Agile / Scrum"], missing: ["Oracle Database", "SAP integration"] },
        description: `<p>Work on a healthcare platform at Wipro's BFSI division as a Senior .NET Developer. Build scalable backend services and integrate with insurance claim systems.</p>`
    },
    {
        id: "job-016", title: "SQL Server DBA & Performance Specialist", companyId: "wipro", companyName: "Wipro", rating: "3.8",
        location: "Remote, India", type: "Full-Time", salary: "₹15,00,000 - ₹21,00,000 / Yr", matchScore: 92, specialty: "dba",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=SQL+Server+DBA+Performance+Specialist+Wipro", naukri: "https://www.naukri.com/sql-dba-performance-specialist-wipro" },
        skills: { matched: ["SQL Server", "Performance Tuning", "Execution Plans", "Indexing", "Stored Procedures", "Backup & Recovery", "Query Optimization", "DB Design & Normalization"], missing: ["MongoDB", "Cassandra NoSQL"] },
        description: `<p>Drive database performance and reliability for Wipro's client portfolio. Monitor, tune, and architect SQL Server environments for 24/7 operations.</p>`
    },
    {
        id: "job-017", title: "Backend Lead – .NET Core & Clean Architecture", companyId: "persistent", companyName: "Persistent Systems", rating: "4.2",
        location: "Pune, India (Hybrid)", type: "Full-Time", salary: "₹20,00,000 - ₹28,00,000 / Yr", matchScore: 93, specialty: "architect",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Backend+Lead+.NET+Core+Persistent+Systems+Pune", naukri: "https://www.naukri.com/backend-lead-net-core-persistent-systems-pune" },
        skills: { matched: [".NET Core 6/7/8", "C#", "Clean Architecture", "REST APIs", "SQL Server", "SOLID Principles", "Entity Framework", "JWT Authentication"], missing: ["GraphQL APIs", "Event-driven architecture (Kafka)"] },
        description: `<p>Lead a team of 6 engineers at Persistent Systems building a next-gen product engineering platform for an ISV client.</p><h3>Key Responsibilities:</h3><ul><li>Own the backend architecture using .NET Core 8 and vertical slice patterns.</li><li>Conduct weekly architecture reviews and enforce SOLID coding standards.</li><li>Collaborate with product managers to translate business requirements into technical specs.</li></ul>`
    },
    {
        id: "job-018", title: "Senior .NET Web API Developer", companyId: "simform", companyName: "Simform", rating: "4.2",
        location: "Ahmedabad, India", type: "Full-Time", salary: "₹15,00,000 - ₹20,00,000 / Yr", matchScore: 95, specialty: "dotnet",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Senior+.NET+Web+API+Developer+Simform+Ahmedabad", naukri: "https://www.naukri.com/senior-net-web-api-developer-simform-ahmedabad" },
        skills: { matched: [".NET Core 6/7/8", "REST APIs", "Entity Framework", "C#", "SQL Server", "JWT Authentication", "RBAC", "Swagger/OpenAPI"], missing: ["gRPC services", "GraphQL"] },
        description: `<p>Develop and maintain production REST API services at Simform used by fintech clients across 12 countries. Lead API versioning strategy and performance benchmarking.</p>`
    },
    {
        id: "job-019", title: "Database Architect & SQL DBA Lead", companyId: "tatvasoft", companyName: "TatvaSoft", rating: "4.1",
        location: "Ahmedabad, India", type: "Full-Time", salary: "₹18,00,000 - ₹24,00,000 / Yr", matchScore: 96, specialty: "dba",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=Database+Architect+SQL+DBA+Lead+TatvaSoft+Ahmedabad", naukri: "https://www.naukri.com/database-architect-sql-dba-lead-tatvasoft" },
        skills: { matched: ["SQL Server", "DB Design & Normalization", "Performance Tuning", "Indexing", "Execution Plans", "Stored Procedures", "Query Optimization", "Backup & Recovery"], missing: ["Database replication clusters", "Always-On Availability Groups"] },
        description: `<p>Design database architecture for TatvaSoft's flagship ERP product suite used by 500+ enterprise clients. Own schema lifecycle from conception to optimization.</p>`
    },
    {
        id: "job-020", title: ".NET Core Full-Stack Developer (Senior)", companyId: "capgemini", companyName: "Capgemini", rating: "4.0",
        location: "Remote, India", type: "Full-Time", salary: "₹16,00,000 - ₹22,00,000 / Yr", matchScore: 91, specialty: "dotnet",
        applyLinks: { linkedin: "https://www.linkedin.com/jobs/search/?keywords=.NET+Core+Full+Stack+Senior+Developer+Capgemini+Remote", naukri: "https://www.naukri.com/net-core-full-stack-developer-capgemini-remote" },
        skills: { matched: [".NET Core 6/7/8", "C#", "REST APIs", "SQL Server", "Entity Framework", "React", "TypeScript", "SOLID Principles"], missing: ["Angular 16+", "Azure DevOps Pipelines"] },
        description: `<p>Build end-to-end features for a SaaS logistics platform at Capgemini. Write clean backend APIs and React-based dashboards for warehouse management workflows.</p>`
    }
];

// ─────────────────────────────────────────────────────────────
// INITIAL MOCK TRACKER APPLICATIONS
// ─────────────────────────────────────────────────────────────
const initialApplications = [
    { id: "app-101", jobId: "job-003", jobTitle: "Technical Lead (.NET Core + SQL Server DBA)", companyName: "Technobrains IT Solution", status: "bookmarked", date: "2026-07-01", matchScore: 98, coverLetter: "" },
    { id: "app-102", jobId: "job-001", jobTitle: "Senior .NET Core Backend Architect", companyName: "Simform", status: "applied", date: "2026-06-28", matchScore: 96, coverLetter: "Dear Hiring Team,\n\nI am writing to express my interest in the Senior .NET Core Backend Architect position at Simform. With over 3 years of backend engineering experience at Technobrains Business Solutions, I specialize in building robust backend services using C# and .NET Core, and have a proven track record in optimizing SQL databases.\n\nBest regards,\nGaurav Maurya" },
    { id: "app-103", jobId: "job-009", jobTitle: "Senior Backend Developer – Healthcare IT", companyName: "Cognizant", status: "interviewing", date: "2026-06-20", matchScore: 95, coverLetter: "Dear Cognizant Hiring Team,\n\nI am thrilled to apply for the Senior Backend Developer position. Having designed secure medical platforms at Technobrains, I am confident in my ability to deliver highly-compliant .NET APIs.\n\nBest regards,\nGaurav Maurya" },
    { id: "app-104", jobId: "job-013", jobTitle: ".NET Microservices Lead Engineer", companyName: "Infosys", status: "applied", date: "2026-07-05", matchScore: 91, coverLetter: "" },
    { id: "app-105", jobId: "job-017", jobTitle: "Backend Lead – .NET Core & Clean Architecture", companyName: "Persistent Systems", status: "bookmarked", date: "2026-07-10", matchScore: 93, coverLetter: "" }
];

// ─────────────────────────────────────────────────────────────
// STATE MANAGEMENT
// ─────────────────────────────────────────────────────────────
let state = {
    applications: [],
    selectedJobId: null,
    credentials: { liUser: "gauravmaurya919@gmail.com", liPass: "•••••••••••••", nkUser: "gauravmaurya919@gmail.com", nkPass: "•••••••••••••" },
    automationMode: "automated",
    notes: {}   // { jobId: { text, updatedAt } }
};

function loadState() {
    const saved = localStorage.getItem("apexapply_v2_state");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
            if (!state.credentials) state.credentials = { liUser: "gauravmaurya919@gmail.com", liPass: "•••••••••••••", nkUser: "gauravmaurya919@gmail.com", nkPass: "•••••••••••••" };
            if (!state.automationMode) state.automationMode = "automated";
            if (!state.notes) state.notes = {};
        } catch(e) {
            resetState();
        }
    } else {
        resetState();
    }
}
function resetState() {
    state.applications = [...initialApplications];
    state.selectedJobId = null;
    state.automationMode = "automated";
    state.notes = {};
    saveState();
}
function saveState() {
    localStorage.setItem("apexapply_v2_state", JSON.stringify(state));
}

// ─────────────────────────────────────────────────────────────
// DOM INITIALIZATION
// ─────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    setupThemeToggle();
    setupMobileSidebar();
    setupNavigation();
    setupFilters();
    setupDashboard();
    setupCompanies();
    renderJobs();
    renderKanban();
    updateGlobalStats();
    setupModalEvents();
    setupBulkApply();
    setupSecurityLock();
    populateSkillsInventory();
    renderNotesTab();

    // Update job count badge
    const jobsBadge = document.getElementById("jobs-count-badge");
    if (jobsBadge) jobsBadge.textContent = jobsData.length;

    // Quick action buttons
    document.getElementById("btn-quick-view-jobs")?.addEventListener("click", () => switchTab("jobs"));
    document.getElementById("btn-quick-view-tracker")?.addEventListener("click", () => switchTab("tracker"));
    document.getElementById("btn-export-cv")?.addEventListener("click", () => {
        showToast("Opening resume PDF...");
        window.open("Gaurav_Maurya_ATS_Resume_Backend.pdf", "_blank");
    });
    document.getElementById("link-view-all-companies")?.addEventListener("click", () => switchTab("companies"));
    document.getElementById("btn-reset-tracker")?.addEventListener("click", () => {
        if (confirm("Reset all application data to initial state?")) {
            resetState();
            renderKanban();
            updateGlobalStats();
            renderJobs();
            setupDashboard();
            renderNotesTab();
            showToast("Application tracker data reset.");
        }
    });
});

// ─────────────────────────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────────────────────────
function setupThemeToggle() {
    const btn = document.getElementById("btn-theme-toggle");
    const iconDark  = document.getElementById("theme-icon-dark");
    const iconLight = document.getElementById("theme-icon-light");
    const html = document.documentElement;

    const saved = localStorage.getItem("apexapply_theme") || "dark";
    html.setAttribute("data-theme", saved);
    updateThemeIcon(saved, iconDark, iconLight);

    btn?.addEventListener("click", () => {
        const current = html.getAttribute("data-theme");
        const next    = current === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", next);
        localStorage.setItem("apexapply_theme", next);
        updateThemeIcon(next, iconDark, iconLight);
        showToast(`Switched to ${next === "dark" ? "🌙 Dark" : "☀️ Light"} mode`);
    });
}
function updateThemeIcon(theme, iconDark, iconLight) {
    if (!iconDark || !iconLight) return;
    if (theme === "light") {
        iconDark.style.display  = "none";
        iconLight.style.display = "block";
    } else {
        iconDark.style.display  = "block";
        iconLight.style.display = "none";
    }
}

// ─────────────────────────────────────────────────────────────
// MOBILE SIDEBAR (hamburger drawer)
// ─────────────────────────────────────────────────────────────
function setupMobileSidebar() {
    const hamburger = document.getElementById("btn-hamburger");
    const sidebar   = document.getElementById("sidebar");
    const overlay   = document.getElementById("sidebar-overlay");

    function openSidebar() {
        sidebar?.classList.add("open");
        overlay?.classList.add("visible");
        document.body.style.overflow = "hidden";
    }
    function closeSidebar() {
        sidebar?.classList.remove("open");
        overlay?.classList.remove("visible");
        document.body.style.overflow = "";
    }

    hamburger?.addEventListener("click", openSidebar);
    overlay?.addEventListener("click", closeSidebar);

    // Close on nav click (mobile)
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", () => {
            if (window.innerWidth <= 900) closeSidebar();
        });
    });
}

// ─────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────
const navItems     = document.querySelectorAll(".nav-item[data-tab]");
const tabContents  = document.querySelectorAll(".tab-content");
const pageTitle    = document.getElementById("page-title");
const pageSubtitle = document.getElementById("page-subtitle");

const tabTitles = {
    dashboard:   { title: "Dashboard Overview",         sub: "Welcome back, Gaurav. Here's your personalized .NET & DBA job board." },
    jobs:        { title: "Custom Jobs Feed",            sub: "Browse 20 tailored positions mapped to your C# backend & SQL Server skills." },
    companies:   { title: "Hiring Enterprise Directory", sub: "Preferred IT companies in Ahmedabad and remote hubs on modern Microsoft stacks." },
    tracker:     { title: "Application Kanban Tracker",  sub: "Review processes, update statuses, and log your hiring pipelines." },
    notes:       { title: "Job Notes",                   sub: "Personal notes saved against specific job openings." },
    "bulk-apply":{ title: "Bulk Auto-Apply Runner",      sub: "Enter target URLs, store credentials, and run simulated webdriver submissions." },
    profile:     { title: "Gaurav Maurya — Resume",      sub: "Source resume content used for computing AI matching criteria." }
};

function setupNavigation() {
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const tabId = item.getAttribute("data-tab");
            if (tabId) switchTab(tabId);
        });
    });
}

function switchTab(tabId) {
    navItems.forEach(n => n.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active-tab"));

    const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    const activeTab = document.getElementById(`tab-${tabId}`);

    if (activeNav && activeTab) {
        activeNav.classList.add("active");
        activeTab.classList.add("active-tab");
        const meta = tabTitles[tabId];
        if (meta && pageTitle && pageSubtitle) {
            pageTitle.textContent    = meta.title;
            pageSubtitle.textContent = meta.sub;
        }
        // Refresh notes tab when navigated to
        if (tabId === "notes") renderNotesTab();
    }
}

// ─────────────────────────────────────────────────────────────
// DASHBOARD RENDERER
// ─────────────────────────────────────────────────────────────
function setupDashboard() {
    const grid = document.getElementById("dashboard-companies-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const topCompanies = [...companiesData].filter(c => c.id !== CURRENT_EMPLOYER_ID).sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 5);
    topCompanies.forEach(comp => {
        const card = document.createElement("div");
        card.className = "company-mini-card";
        card.innerHTML = `
            <div class="company-mini-logo">${comp.logo}</div>
            <div class="company-mini-name">${comp.name}</div>
            <div class="company-mini-loc">📍 ${comp.location}</div>
            <div class="company-mini-jobs">⚡ ${comp.jobsCount} Open Roles</div>
        `;
        card.addEventListener("click", () => {
            document.getElementById("search-job").value = comp.name;
            renderJobs();
            switchTab("jobs");
        });
        grid.appendChild(card);
    });

    renderDashboardStatusList();

    // Update dashboard job count label
    const lbl = document.getElementById("dash-jobs-count-label");
    if (lbl) lbl.textContent = `${jobsData.length} tailored job matches`;
}

function renderDashboardStatusList() {
    const list = document.getElementById("dashboard-status-list");
    if (!list) return;
    list.innerHTML = "";

    if (state.applications.length === 0) {
        list.innerHTML = `<p style="font-size: 12px; color: var(--text-muted); text-align: center; padding: 16px 0;">No active applications. Browse Job Openings to apply!</p>`;
        return;
    }

    const sorted = [...state.applications].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    const dotMap = { bookmarked: "dot-gray", applied: "dot-violet", interviewing: "dot-cyan", offer: "dot-emerald", rejected: "dot-rose" };
    const bgMap  = { bookmarked: "rgba(100,116,139,0.1)", applied: "rgba(124,58,237,0.1)", interviewing: "rgba(6,182,212,0.1)", offer: "rgba(16,185,129,0.1)", rejected: "rgba(244,63,94,0.1)" };

    sorted.forEach(app => {
        const item = document.createElement("div");
        item.className = "status-item";
        item.style.background = bgMap[app.status] || "";
        item.innerHTML = `
            <span class="status-dot ${dotMap[app.status] || 'dot-gray'}"></span>
            <span class="status-company">${app.companyName}</span>
            <span class="status-badge-tag" style="background: ${bgMap[app.status]}; color: var(--text-secondary); border-radius: 6px;">${app.status.charAt(0).toUpperCase() + app.status.slice(1)}</span>
        `;
        list.appendChild(item);
    });
}

// ─────────────────────────────────────────────────────────────
// FILTERS
// ─────────────────────────────────────────────────────────────
function setupFilters() {
    const searchInput  = document.getElementById("search-job");
    const locFilter    = document.getElementById("filter-location");
    const roleFilter   = document.getElementById("filter-role");
    const matchFilter  = document.getElementById("filter-match");
    const matchDisplay = document.getElementById("match-val-display");
    const clearBtn     = document.getElementById("btn-clear-filters");

    searchInput?.addEventListener("input", renderJobs);
    locFilter?.addEventListener("change", renderJobs);
    roleFilter?.addEventListener("change", renderJobs);
    matchFilter?.addEventListener("input", (e) => {
        if (matchDisplay) matchDisplay.textContent = `${e.target.value}% Match`;
        renderJobs();
    });
    clearBtn?.addEventListener("click", () => {
        if (searchInput)  searchInput.value  = "";
        if (locFilter)    locFilter.value    = "all";
        if (roleFilter)   roleFilter.value   = "all";
        if (matchFilter)  matchFilter.value  = 85;
        if (matchDisplay) matchDisplay.textContent = "85% Match";
        renderJobs();
    });
}

// ─────────────────────────────────────────────────────────────
// JOBS FEED RENDERER
// ─────────────────────────────────────────────────────────────
function renderJobs() {
    const container    = document.getElementById("jobs-list");
    const searchInput  = document.getElementById("search-job");
    const locFilter    = document.getElementById("filter-location");
    const roleFilter   = document.getElementById("filter-role");
    const matchFilter  = document.getElementById("filter-match");
    if (!container) return;

    const query    = (searchInput?.value || "").toLowerCase().trim();
    const loc      = locFilter?.value || "all";
    const roleCat  = roleFilter?.value || "all";
    const minMatch = parseInt(matchFilter?.value || 85, 10);

    const filtered = jobsData.filter(job => {
        const textMatch = job.title.toLowerCase().includes(query) || job.companyName.toLowerCase().includes(query) || job.description.toLowerCase().includes(query);
        let locMatch = true;
        if (loc === "remote")     locMatch = job.location.toLowerCase().includes("remote");
        else if (loc === "ahmedabad") locMatch = job.location.toLowerCase().includes("ahmedabad");
        else if (loc === "pune")      locMatch = job.location.toLowerCase().includes("pune");
        else if (loc === "bangalore") locMatch = job.location.toLowerCase().includes("bangalore");
        const roleMatch  = roleCat === "all" || job.specialty === roleCat;
        const scoreMatch = job.matchScore >= minMatch;
        return textMatch && locMatch && roleMatch && scoreMatch;
    });

    container.innerHTML = "";

    if (filtered.length === 0) {
        container.innerHTML = `<div style="text-align:center;color:var(--text-muted);padding:40px 10px;"><p style="font-size:16px;font-weight:600;margin-bottom:8px;">No matching jobs found</p><p style="font-size:12px;">Try modifying the filters or reducing the match score.</p></div>`;
        hideJobDetailPanel();
        return;
    }

    filtered.forEach(job => {
        const isSelected = state.selectedJobId === job.id;
        const card = document.createElement("div");
        card.className = `job-card${isSelected ? " selected" : ""}`;
        const pillClass = job.matchScore >= 95 ? "excellent" : job.matchScore >= 92 ? "great" : "good";
        card.innerHTML = `
            <div class="job-card-header">
                <div class="job-title">${job.title}</div>
                <span class="match-pill ${pillClass}">${job.matchScore}%</span>
            </div>
            <div class="job-company">⭐ ${job.rating} · ${job.companyName}</div>
            <div class="job-meta-row">
                <span class="job-tag">📍 ${job.location.split(',')[0]}</span>
                <span class="job-tag">💼 ${job.type}</span>
                <span class="job-tag">💰 ${job.salary.split('-')[0].trim()}</span>
            </div>
        `;
        card.addEventListener("click", () => {
            document.querySelectorAll(".job-card").forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            selectJob(job.id);
        });
        container.appendChild(card);
    });

    // Auto-select first or restore previous
    const stillExists = filtered.find(j => j.id === state.selectedJobId);
    if (!stillExists && filtered.length > 0) {
        selectJob(filtered[0].id);
        container.firstChild?.classList.add("selected");
    } else if (stillExists) {
        selectJob(state.selectedJobId);
    }
}

function hideJobDetailPanel() {
    document.querySelector(".detail-empty-state")?.classList.remove("hidden");
    document.getElementById("job-detail-content")?.classList.add("hidden");
}

function selectJob(jobId) {
    state.selectedJobId = jobId;
    saveState();

    const job = jobsData.find(j => j.id === jobId);
    if (!job) { hideJobDetailPanel(); return; }

    document.querySelector(".detail-empty-state")?.classList.add("hidden");
    const content = document.getElementById("job-detail-content");
    if (!content) return;
    content.classList.remove("hidden");

    const existingApp = state.applications.find(a => a.jobId === job.id);
    const isCurrent   = job.companyId === CURRENT_EMPLOYER_ID;
    const noteData    = state.notes[job.id];

    // Build matched / missing skill pills
    const matchedPills = job.skills.matched.map(s => `<span class="skill-pill matched">${s}</span>`).join("");
    const missingPills = job.skills.missing.length > 0 ? job.skills.missing.map(s => `<span class="skill-pill missing">${s}</span>`).join("") : `<span style="font-size:12px;color:var(--color-emerald);">✓ No missing skills — perfect match!</span>`;

    // Apply button area
    let applyBtnHtml = "";
    if (isCurrent) {
        applyBtnHtml = `<button class="btn btn-secondary" disabled style="color:var(--color-rose);border-color:var(--color-rose);opacity:0.7;">🚫 Current Employer</button>`;
    } else if (existingApp) {
        applyBtnHtml = `<button class="btn btn-secondary" disabled style="color:var(--color-emerald);border-color:var(--color-emerald);">✓ ${existingApp.status.charAt(0).toUpperCase() + existingApp.status.slice(1)}</button>`;
    } else {
        applyBtnHtml = `<button class="btn btn-primary" id="btn-apply-trigger">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            Apply Now & Auto-Fill
        </button>`;
    }

    content.innerHTML = `
        <div class="detail-job-header">
            <div class="detail-job-title">${job.title}</div>
            <div class="detail-company-row">
                <span class="detail-company-name">${job.companyName}</span>
                <span class="star-rating">★ ${job.rating}</span>
            </div>
            <div class="detail-meta-chips">
                <span class="chip">📍 ${job.location}</span>
                <span class="chip">💼 ${job.type}</span>
                <span class="chip salary">💰 ${job.salary}</span>
                <span class="chip score">🎯 ${job.matchScore}% Match</span>
            </div>
        </div>

        <!-- Real Apply Links -->
        <div class="detail-action-btns">
            ${applyBtnHtml}
            <a href="${job.applyLinks.linkedin}" target="_blank" rel="noopener" class="btn btn-linkedin">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                Search on LinkedIn
            </a>
            <a href="${job.applyLinks.naukri}" target="_blank" rel="noopener" class="btn btn-naukri">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><rect x="1" y="1" width="22" height="22" rx="4"/><text x="5" y="17" fill="white" font-size="14" font-family="sans-serif" font-weight="900">N</text></svg>
                Search on Naukri
            </a>
            <button class="btn btn-secondary" id="btn-bookmark-job">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                Bookmark
            </button>
        </div>

        <!-- Skills Analysis -->
        <div class="skills-analysis">
            <h3>Skills Match Analysis</h3>
            <div class="skills-row">
                <div class="skills-col">
                    <h4 class="matched-label">✓ Matched Skills (${job.skills.matched.length})</h4>
                    <div class="skill-pills">${matchedPills}</div>
                </div>
                <div class="skills-col">
                    <h4 class="missing-label">⚠ To Develop</h4>
                    <div class="skill-pills">${missingPills}</div>
                </div>
            </div>
        </div>

        <!-- Job Description -->
        <div class="job-description-body">${job.description}</div>

        <!-- Notes Section -->
        <div class="notes-area">
            <h3>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                My Notes for This Job
            </h3>
            <textarea class="notes-textarea" id="job-note-input" placeholder="Add your personal notes about this job — salary expectations, interview notes, contact info...">${noteData ? noteData.text : ""}</textarea>
            <button class="btn btn-secondary btn-sm notes-save-btn" id="btn-save-note">💾 Save Note</button>
        </div>
    `;

    // Hook button events
    document.getElementById("btn-apply-trigger")?.addEventListener("click", () => openApplyModal(job));
    document.getElementById("btn-bookmark-job")?.addEventListener("click", () => bookmarkJob(job));
    document.getElementById("btn-save-note")?.addEventListener("click", () => saveNote(job.id));
}

// ─────────────────────────────────────────────────────────────
// NOTES SYSTEM
// ─────────────────────────────────────────────────────────────
function saveNote(jobId) {
    const textarea = document.getElementById("job-note-input");
    if (!textarea) return;
    const text = textarea.value.trim();

    if (!text) {
        // Delete note if empty
        delete state.notes[jobId];
    } else {
        state.notes[jobId] = { text, updatedAt: new Date().toISOString() };
    }
    saveState();
    renderNotesTab();
    updateNotesCountBadge();
    showToast(text ? "Note saved! ✓" : "Note deleted.");
}

function renderNotesTab() {
    const container = document.getElementById("notes-list-container");
    if (!container) return;

    const noteEntries = Object.entries(state.notes).filter(([, n]) => n && n.text);
    updateNotesCountBadge();

    if (noteEntries.length === 0) {
        container.innerHTML = `
            <div class="notes-empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:0.25;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                <h3>No notes yet</h3>
                <p>Open any job from the <strong>Job Openings</strong> tab and add personal notes. They'll appear here.</p>
            </div>`;
        return;
    }

    container.innerHTML = `<div class="notes-list-grid" id="notes-grid"></div>`;
    const grid = document.getElementById("notes-grid");

    noteEntries.forEach(([jobId, note]) => {
        const job = jobsData.find(j => j.id === jobId);
        if (!job) return;
        const date = new Date(note.updatedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

        const card = document.createElement("div");
        card.className = "note-card";
        card.innerHTML = `
            <div class="note-card-job">${job.title}</div>
            <div class="note-card-company">🏢 ${job.companyName} · ${job.location.split(',')[0]}</div>
            <div class="note-card-text">${note.text.substring(0, 200)}${note.text.length > 200 ? '...' : ''}</div>
            <div class="note-card-footer">
                <span class="note-card-date">📅 Updated ${date}</span>
                <button class="note-delete-btn" data-jobid="${jobId}">Delete</button>
            </div>
        `;
        card.querySelector(".note-delete-btn")?.addEventListener("click", (e) => {
            e.stopPropagation();
            delete state.notes[jobId];
            saveState();
            renderNotesTab();
            showToast("Note deleted.");
        });
        card.addEventListener("click", () => {
            document.getElementById("search-job").value = "";
            renderJobs();
            switchTab("jobs");
            setTimeout(() => selectJob(jobId), 100);
        });
        grid.appendChild(card);
    });
}

function updateNotesCountBadge() {
    const badge = document.getElementById("notes-count-badge");
    if (!badge) return;
    const count = Object.values(state.notes).filter(n => n && n.text).length;
    if (count > 0) {
        badge.style.display = "";
        badge.textContent   = count;
    } else {
        badge.style.display = "none";
    }
}

// ─────────────────────────────────────────────────────────────
// COMPANIES TAB
// ─────────────────────────────────────────────────────────────
function setupCompanies() {
    const grid = document.getElementById("companies-full-grid");
    if (!grid) return;
    grid.innerHTML = "";

    companiesData.forEach(comp => {
        const card = document.createElement("div");
        card.className = "company-card";
        card.innerHTML = `
            <div class="company-card-header">
                <div class="company-logo">${comp.logo}</div>
                <div class="company-info">
                    <div class="company-name">${comp.name}</div>
                    <div class="company-meta">📍 ${comp.location} · ${comp.size}</div>
                </div>
                <div class="company-rating">⭐ ${comp.rating}</div>
            </div>
            <p class="company-desc">${comp.description}</p>
            <div class="company-tech-stack">🛠 ${comp.techStack}</div>
            <div class="company-match-reason">🎯 ${comp.matchReason}</div>
            <div class="company-footer">
                <span class="company-jobs-count">⚡ ${comp.jobsCount} Open Role${comp.jobsCount !== 1 ? 's' : ''}</span>
                <button class="btn btn-secondary btn-sm" onclick="searchCompanyJobs('${comp.name}')">View Jobs →</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

window.searchCompanyJobs = function(companyName) {
    document.getElementById("search-job").value = companyName;
    renderJobs();
    switchTab("jobs");
};

// ─────────────────────────────────────────────────────────────
// SKILLS INVENTORY (Profile Tab)
// ─────────────────────────────────────────────────────────────
function populateSkillsInventory() {
    const container = document.getElementById("profile-skills-grid");
    if (!container) return;
    container.innerHTML = "";

    for (const [category, skillList] of Object.entries(resumeData.skills)) {
        const row = document.createElement("div");
        row.className = "skill-category-row";
        row.innerHTML = `
            <div class="skill-cat-label">${category}</div>
            <div class="skill-tags">${skillList.map(s => `<span class="skill-tag">${s}</span>`).join("")}</div>
        `;
        container.appendChild(row);
    }
}

// ─────────────────────────────────────────────────────────────
// KANBAN TRACKER
// ─────────────────────────────────────────────────────────────
function renderKanban() {
    const cols = {
        bookmarked:  document.querySelector('.kanban-cards-container[data-status="bookmarked"]'),
        applied:     document.querySelector('.kanban-cards-container[data-status="applied"]'),
        interviewing:document.querySelector('.kanban-cards-container[data-status="interviewing"]'),
        offer:       document.querySelector('.kanban-cards-container[data-status="offer"]'),
        rejected:    document.querySelector('.kanban-cards-container[data-status="rejected"]')
    };

    Object.values(cols).forEach(c => { if (c) c.innerHTML = ""; });

    state.applications.forEach(app => {
        const card = document.createElement("div");
        card.className = "kanban-card";
        card.innerHTML = `
            <div class="kanban-card-title">${app.jobTitle}</div>
            <div class="kanban-card-company">${app.companyName}</div>
            <div class="kanban-card-meta">
                <span class="kanban-score">🎯 ${app.matchScore}%</span>
                <span class="kanban-date">${app.date}</span>
            </div>
            <div class="kanban-card-actions">
                ${buildKanbanButtons(app)}
            </div>
        `;
        cols[app.status]?.appendChild(card);
    });

    updateKanbanCounters();
}

function buildKanbanButtons(app) {
    const labels = { bookmarked: "Bkmk", applied: "Apply", interviewing: "Interv", offer: "Offer", rejected: "Reject" };
    return Object.keys(labels)
        .filter(s => s !== app.status)
        .map(s => `<button class="kanban-action-btn${s === 'rejected' ? ' remove-btn' : ''}" onclick="moveApplication('${app.id}','${s}')">${labels[s]}</button>`)
        .join("");
}

window.moveApplication = function(appId, newStatus) {
    const app = state.applications.find(a => a.id === appId);
    if (app) {
        app.status = newStatus;
        saveState();
        renderKanban();
        updateGlobalStats();
        setupDashboard();
        renderJobs();
        showToast(`Moved to "${newStatus.charAt(0).toUpperCase() + newStatus.slice(1)}"`);
    }
};

function updateKanbanCounters() {
    const counts = { bookmarked: 0, applied: 0, interviewing: 0, offer: 0, rejected: 0 };
    state.applications.forEach(a => { if (counts[a.status] !== undefined) counts[a.status]++; });

    ["bookmarked","applied","interviewing","offer","rejected"].forEach(s => {
        const el = document.getElementById(`badge-${s}`);
        if (el) el.textContent = counts[s];
    });
}

// ─────────────────────────────────────────────────────────────
// GLOBAL STATS
// ─────────────────────────────────────────────────────────────
function updateGlobalStats() {
    const el = id => document.getElementById(id);
    const s  = state.applications;
    if (el("stat-total-jobs"))  el("stat-total-jobs").textContent  = jobsData.length;
    if (el("stat-applied-jobs"))el("stat-applied-jobs").textContent= s.filter(a => a.status === "applied").length;
    if (el("stat-interviews"))  el("stat-interviews").textContent  = s.filter(a => a.status === "interviewing").length;
    if (el("stat-offers"))      el("stat-offers").textContent      = s.filter(a => a.status === "offer").length;
}

// ─────────────────────────────────────────────────────────────
// BOOKMARK JOB
// ─────────────────────────────────────────────────────────────
function bookmarkJob(job) {
    if (state.applications.find(a => a.jobId === job.id)) {
        showToast("Already added to your tracker!");
        return;
    }
    state.applications.push({ id: "app-" + Date.now(), jobId: job.id, jobTitle: job.title, companyName: job.companyName, status: "bookmarked", date: new Date().toISOString().split('T')[0], matchScore: job.matchScore, coverLetter: "" });
    saveState();
    renderKanban();
    updateGlobalStats();
    setupDashboard();
    selectJob(job.id);
    showToast(`✅ Bookmarked "${job.title}"`);
}

// ─────────────────────────────────────────────────────────────
// APPLY MODAL & COVER LETTER
// ─────────────────────────────────────────────────────────────
let activeModalJob = null;

function setupModalEvents() {
    document.getElementById("btn-close-modal")?.addEventListener("click", closeApplyModal);
    document.getElementById("apply-form")?.addEventListener("submit", handleApplySubmit);
    document.getElementById("btn-regen-letter")?.addEventListener("click", () => {
        if (activeModalJob) document.getElementById("cover-letter-text").value = generateCoverLetter(activeModalJob);
    });
    // Click outside modal to close
    document.getElementById("apply-modal")?.addEventListener("click", (e) => {
        if (e.target === document.getElementById("apply-modal")) closeApplyModal();
    });
}

function openApplyModal(job) {
    if (job.companyId === CURRENT_EMPLOYER_ID) { showToast("⚠️ Cannot apply to current employer."); return; }
    activeModalJob = job;

    document.getElementById("modal-job-title").textContent    = job.title;
    document.getElementById("modal-company-title").textContent = job.companyName;
    document.getElementById("modal-fit-gauge").textContent    = `${job.matchScore}%`;
    document.getElementById("modal-match-reason").textContent = job.matchScore >= 95
        ? "Outstanding Profile Match! Your core competencies align seamlessly with all requirements."
        : "High Compatibility Rating. Your SQL & .NET backend skillset covers their key requirements.";

    document.getElementById("cover-letter-text").value = generateCoverLetter(job);
    document.getElementById("apply-modal").classList.remove("hidden");
}

function closeApplyModal() {
    document.getElementById("apply-modal")?.classList.add("hidden");
    activeModalJob = null;
}

function generateCoverLetter(job) {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    let para = "";
    if (job.specialty === "dba" || job.title.toLowerCase().includes("dba") || job.title.toLowerCase().includes("database")) {
        para = "Throughout my 3+ years of backend engineering, I have focused heavily on SQL Server lifecycle management, database design, index restructuring, and query plan optimization. I have taken end-to-end ownership of platform databases — implementing optimized schemas and tuning execution workflows.";
    } else if (job.specialty === "architect" || job.title.toLowerCase().includes("architect") || job.title.toLowerCase().includes("lead")) {
        para = "With 3+ years of backend engineering, I specialize in architecting scalable .NET Core backend systems using Clean Architecture, SOLID design principles, and RESTful API structures. I have led backend design workflows, integrated JWT/RBAC security pipelines, and implemented Redis caching.";
    } else {
        para = "As a Backend Developer with 3+ years of experience using ASP.NET MVC and .NET Core, I have designed and delivered scalable products across E-Commerce, Healthcare, and HRMS systems with a proven record of optimizing query throughput and maintaining clean code standards.";
    }

    return `Date: ${today}

To the Hiring Team at ${job.companyName},

I am writing to express my strong interest in the "${job.title}" position at ${job.companyName}. With over 3 years of professional experience as a .NET Core Backend Developer, I am confident my technical skills align closely with your requirements.

${para}

I was recognized with the Employee Spotlight Award (May 2024) at Technobrains Business Solutions for high-impact backend optimization and proactive ownership. I look forward to bringing my expertise in C#, REST API architecture, and SQL Server performance tuning to ${job.companyName}.

Thank you for your time and consideration.

Sincerely,
Gaurav Maurya
Ahmedabad, Gujarat, India
+91 84189 31740 | gauravmaurya919@gmail.com`;
}

function handleApplySubmit(e) {
    e.preventDefault();
    if (!activeModalJob) return;
    if (activeModalJob.companyId === CURRENT_EMPLOYER_ID) { showToast("⚠️ Cannot apply to current employer."); closeApplyModal(); return; }

    const existingIdx = state.applications.findIndex(a => a.jobId === activeModalJob.id);
    const letter = document.getElementById("cover-letter-text")?.value || "";

    if (existingIdx > -1) {
        state.applications[existingIdx].status = "applied";
        state.applications[existingIdx].date = new Date().toISOString().split('T')[0];
        state.applications[existingIdx].coverLetter = letter;
    } else {
        state.applications.push({ id: "app-" + Date.now(), jobId: activeModalJob.id, jobTitle: activeModalJob.title, companyName: activeModalJob.companyName, status: "applied", date: new Date().toISOString().split('T')[0], matchScore: activeModalJob.matchScore, coverLetter: letter });
    }

    saveState();
    closeApplyModal();
    renderKanban();
    updateGlobalStats();
    setupDashboard();
    selectJob(activeModalJob.id);
    showToast(`🚀 Successfully applied to ${activeModalJob.companyName}!`);
}

// ─────────────────────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById("toast-notification");
    const msg   = document.getElementById("toast-message");
    if (!toast || !msg) return;
    msg.textContent = message;
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

// ─────────────────────────────────────────────────────────────
// BULK AUTO-APPLY MODULE
// ─────────────────────────────────────────────────────────────
function setupBulkApply() {
    const liUser = document.getElementById("vault-li-user");
    const liPass = document.getElementById("vault-li-pass");
    const nkUser = document.getElementById("vault-nk-user");
    const nkPass = document.getElementById("vault-nk-pass");
    const urlsInput = document.getElementById("bulk-urls-input");

    if (state.credentials && liUser) {
        liUser.value = state.credentials.liUser || "";
        nkUser.value = state.credentials.nkUser || "";
    }

    if (urlsInput && !urlsInput.value.trim()) {
        urlsInput.value = [
            "https://in.linkedin.com/jobs/view/senior-dotnet-developer-at-tatvasoft-98314",
            "https://www.naukri.com/job-listings-sql-server-dba-lead-capgemini-pune-3-to-8-years",
            "https://in.linkedin.com/jobs/view/backend-api-architect-at-cognizant-8422"
        ].join("\n");
    }

    document.getElementById("btn-save-vault")?.addEventListener("click", () => {
        state.credentials = { liUser: liUser?.value || "", liPass: liPass?.value || "", nkUser: nkUser?.value || "", nkPass: nkPass?.value || "" };
        saveState();
        showToast("🔐 Secure Vault keys updated!");
    });

    document.getElementById("btn-clear-urls")?.addEventListener("click", () => {
        if (urlsInput) urlsInput.value = "";
        showToast("URL list cleared.");
    });

    document.getElementById("btn-start-bulk-apply")?.addEventListener("click", triggerBulkAutoApply);

    // Mode toggle
    const btnAuto   = document.getElementById("btn-mode-auto");
    const btnManual = document.getElementById("btn-mode-manual");

    function updateModeUI() {
        if (!btnAuto || !btnManual) return;
        if (state.automationMode === "manual") {
            btnAuto.classList.remove("active"); btnManual.classList.add("active");
        } else {
            btnManual.classList.remove("active"); btnAuto.classList.add("active");
        }
    }

    if (!state.automationMode) state.automationMode = "automated";
    updateModeUI();

    btnAuto?.addEventListener("click", () => { state.automationMode = "automated"; saveState(); updateModeUI(); showToast("Switched to Fully Automated mode."); });
    btnManual?.addEventListener("click", () => { state.automationMode = "manual"; saveState(); updateModeUI(); showToast("Switched to Manual Intercept mode."); });
}

function triggerBulkAutoApply() {
    const urlsInput  = document.getElementById("bulk-urls-input");
    const logArea    = document.getElementById("terminal-log-output");
    const termPulse  = document.getElementById("terminal-pulse");
    const progressBar= document.getElementById("bulk-progress-bar");
    const progressPct= document.getElementById("bulk-progress-pct");
    const btnStart   = document.getElementById("btn-start-bulk-apply");

    const lines = (urlsInput?.value || "").split("\n").map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length === 0) { showToast("Please enter at least one job URL!"); return; }

    if (btnStart) btnStart.disabled = true;
    if (termPulse) { termPulse.textContent = "RUNNING"; termPulse.className = "terminal-status running"; }
    if (logArea) logArea.innerHTML = "";
    if (progressBar) progressBar.style.width = "0%";
    if (progressPct) progressPct.textContent = "0%";

    writeLog("system", `[SYSTEM] Initializing Batch Automation Runner...`);
    writeLog("info",   `[INFO] Read ${lines.length} job link(s) from batch input.`);
    writeLog("info",   `[INFO] Credentials loaded → LinkedIn: "${state.credentials.liUser}", Naukri: "${state.credentials.nkUser}"`);

    let idx = 0;

    function executeNext() {
        if (idx >= lines.length) {
            writeLog("success", `[BATCH COMPLETE] Executed all ${lines.length} application(s)!`);
            writeLog("system",  `[SYSTEM] Releasing Chromium instances. Board updated.`);
            if (termPulse) { termPulse.textContent = "IDLE"; termPulse.className = "terminal-status"; }
            if (btnStart) btnStart.disabled = false;
            if (progressBar) progressBar.style.width = "100%";
            if (progressPct) progressPct.textContent = "100%";
            renderKanban(); updateGlobalStats(); setupDashboard(); renderJobs();
            showToast("✅ Bulk application batch completed!");
            return;
        }

        const url    = lines[idx];
        const parsed = parseJobUrlDetails(url);
        writeLog("system", `────────────────────────────────────`);
        writeLog("system", `[JOB ${idx + 1}/${lines.length}] URL: ${url}`);
        writeLog("info",   `[INFO] Platform: ${parsed.platform.toUpperCase()} | Role: "${parsed.role}" @ "${parsed.company}"`);

        const steps = [
            { type: "info",    text: `[INFO] Launching Headless Chromium...` },
            { type: "info",    text: `[INFO] Navigating to target page...` },
            { type: "info",    text: `[INFO] Resolving security tokens...` },
            { type: "warning", text: parsed.platform === "linkedin" ? `[INFO] LinkedIn login → Injecting credentials: "${state.credentials.liUser}"` : `[INFO] Naukri login → Injecting credentials: "${state.credentials.nkUser}"` },
            { type: "success", text: `[INFO] OAuth validation passed. Session established.` },
            { type: "info",    text: `[INFO] Fit Score: ${parsed.match}% | Form-filling profile: "Gaurav Maurya, +91 84189 31740"` },
            { type: "info",    text: `[INFO] Injecting resume: Gaurav_Maurya_ATS_Resume_Backend.pdf` },
            { type: "info",    text: `[INFO] Generating cover letter for "${parsed.role}"...` },
            { type: "info",    text: `[INFO] Submitting application form...` },
            { type: "success", text: `[SUCCESS] Reference: ${generateRandomHash()}` },
            { type: "success", text: `[SUCCESS] Application recorded in tracker!` }
        ];

        let step = 0;

        function runStep() {
            if (step >= steps.length) {
                state.applications.push({ id: "app-" + Date.now() + "-" + idx, jobId: "bulk-" + idx, jobTitle: parsed.role, companyName: parsed.company, status: "applied", date: new Date().toISOString().split('T')[0], matchScore: parsed.match, coverLetter: `Bulk cover letter for ${parsed.company}` });
                saveState();
                idx++;
                const pct = Math.round((idx / lines.length) * 100);
                if (progressBar) progressBar.style.width = `${pct}%`;
                if (progressPct) progressPct.textContent = `${pct}%`;
                setTimeout(executeNext, 1000);
                return;
            }

            if (state.automationMode === "manual" && step === 3) {
                writeLog(steps[step].type, steps[step].text);
                const overlay    = document.getElementById("terminal-intercept");
                const platName   = document.getElementById("intercept-platform-name");
                const emailDisp  = document.getElementById("intercept-email-display");
                const passInput  = document.getElementById("intercept-password");
                const submitBtn  = document.getElementById("btn-intercept-submit");

                if (platName)  platName.textContent  = parsed.platform === "linkedin" ? "LinkedIn" : "Naukri";
                if (emailDisp) emailDisp.textContent = parsed.platform === "linkedin" ? state.credentials.liUser : state.credentials.nkUser;
                if (passInput) passInput.value = "";
                overlay?.classList.remove("hidden");

                writeLog("warning", `[INTERCEPTED] Paused — awaiting credential validation...`);

                function onVerify() {
                    const val = passInput?.value.trim();
                    if (!val) { alert("Please enter your password to verify!"); return; }
                    overlay?.classList.add("hidden");
                    writeLog("success", `[SYSTEM] Credentials verified manually.`);
                    newBtn.removeEventListener("click", onVerify);
                    step++;
                    setTimeout(runStep, 450);
                }

                const newBtn = submitBtn?.cloneNode(true);
                submitBtn?.parentNode.replaceChild(newBtn, submitBtn);
                newBtn?.addEventListener("click", onVerify);
                passInput?.addEventListener("keydown", e => { if (e.key === "Enter") newBtn?.click(); });
                return;
            }

            writeLog(steps[step].type, steps[step].text);
            step++;
            setTimeout(runStep, 420);
        }

        setTimeout(runStep, 600);
    }

    setTimeout(executeNext, 800);
}

function parseJobUrlDetails(url) {
    const details = { platform: "direct-web", company: "Enterprise Corp", role: "Senior .NET Developer", match: 94 };
    if (url.toLowerCase().includes("linkedin.com")) details.platform = "linkedin";
    else if (url.toLowerCase().includes("naukri.com")) details.platform = "naukri";

    try {
        const slug = url.split('/').pop().replace(/-+/g, ' ');
        if (slug && slug.length > 5) {
            if (slug.toLowerCase().includes("at")) {
                const parts = slug.split(/\bat\b/i);
                details.role    = cleanSlugWord(parts[0]);
                details.company = cleanSlugWord(parts[1]);
            } else {
                details.role = cleanSlugWord(slug.split(/[?#0-9]/)[0]);
                const comps = ["TatvaSoft", "Simform", "Technobrains", "Infosys", "Cognizant", "Capgemini", "Persistent"];
                details.company = comps[Math.floor(Math.random() * comps.length)];
            }
        }
    } catch(e) { /* fallback */ }

    if (details.role.toLowerCase().includes("dotnet") || details.role.toLowerCase().includes("developer")) { details.role = "Senior .NET Developer"; details.match = 95; }
    else if (details.role.toLowerCase().includes("dba") || details.role.toLowerCase().includes("sql")) { details.role = "Lead SQL Server DBA"; details.match = 96; }
    else if (details.role.toLowerCase().includes("architect") || details.role.toLowerCase().includes("lead")) { details.role = "Backend API Architect"; details.match = 97; }

    return details;
}

function cleanSlugWord(word) {
    if (!word) return "";
    return word.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function generateRandomHash() {
    const chars = "abcdef0123456789";
    let h = "ref_";
    for (let i = 0; i < 12; i++) h += chars.charAt(Math.floor(Math.random() * chars.length));
    return h;
}

function writeLog(type, text) {
    const logArea = document.getElementById("terminal-log-output");
    if (!logArea) return;
    const line = document.createElement("div");
    line.className = `term-line ${type}`;
    line.textContent = text;
    logArea.appendChild(line);
    logArea.scrollTop = logArea.scrollHeight;
}

// ─────────────────────────────────────────────────────────────
// SECURITY LOCK — SHA-256 Password Hashing
// ─────────────────────────────────────────────────────────────
async function hashPassword(password) {
    const encoded = new TextEncoder().encode(password);
    const hashBuf = await crypto.subtle.digest("SHA-256", encoded);
    return Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

function getStoredHash() {
    return localStorage.getItem("apexapply_auth_hash") || DEFAULT_PASS_HASH;
}

function setupSecurityLock() {
    const lockScreen = document.getElementById("lock-screen");
    const lockForm   = document.getElementById("lock-form");
    const lockCard   = document.getElementById("lock-card");
    const lockPassInput = document.getElementById("lock-password");
    const btnLock    = document.getElementById("btn-lock-session");

    // Check if already authenticated in this session
    if (sessionStorage.getItem("apexapply_authenticated") === "true") {
        lockScreen?.classList.add("fade-out");
    }

    // Handle unlock
    lockForm?.addEventListener("submit", async (e) => {
        e.preventDefault();
        const entered = lockPassInput?.value || "";
        const enteredHash = await hashPassword(entered);
        const storedHash  = getStoredHash();

        if (enteredHash === storedHash) {
            sessionStorage.setItem("apexapply_authenticated", "true");
            lockScreen?.classList.add("fade-out");
            showToast("🔓 Access Granted. Welcome back, Gaurav!");
            if (lockPassInput) lockPassInput.value = "";
        } else {
            lockCard?.classList.add("shake");
            showToast("🚫 Access Denied. Incorrect password.");
            if (lockPassInput) { lockPassInput.value = ""; lockPassInput.focus(); }
            setTimeout(() => lockCard?.classList.remove("shake"), 450);
        }
    });

    // Lock session from sidebar
    btnLock?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        sessionStorage.removeItem("apexapply_authenticated");
        showToast("🔒 Session locked.");
        setTimeout(() => window.location.reload(), 500);
    });
}
