from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable,
    Table, TableStyle, KeepTogether
)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY

# ── Colors ─────────────────────────────────────────────────────────────────────
NAVY  = colors.HexColor("#1A3A5C")
BLUE  = colors.HexColor("#1F60AB")
DARK  = colors.HexColor("#1A1A1A")
GRAY  = colors.HexColor("#555555")
LGRAY = colors.HexColor("#888888")
STRIP = colors.HexColor("#EEF4FB")

# ── Styles ─────────────────────────────────────────────────────────────────────
def make_styles():
    base = dict(fontName="Helvetica", fontSize=9.5, leading=13, textColor=DARK)
    return dict(
        name=ParagraphStyle("Name", fontName="Helvetica-Bold", fontSize=20,
                             leading=24, textColor=NAVY, alignment=TA_CENTER, spaceAfter=2),
        title=ParagraphStyle("Title", fontName="Helvetica", fontSize=10,
                              leading=13, textColor=BLUE, alignment=TA_CENTER, spaceAfter=3),
        contact=ParagraphStyle("Contact", fontName="Helvetica", fontSize=8.5,
                                padding=0, leading=12, textColor=GRAY, alignment=TA_CENTER, spaceAfter=5),
        section=ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=10,
                                leading=14, textColor=BLUE, alignment=TA_LEFT,
                                spaceBefore=7, spaceAfter=3, keepWithNext=1),
        body=ParagraphStyle("Body", **base, alignment=TA_JUSTIFY, spaceBefore=2, spaceAfter=2),
        bullet=ParagraphStyle("Bullet", **base, alignment=TA_JUSTIFY,
                               leftIndent=14, firstLineIndent=-10,
                               spaceBefore=1.5, spaceAfter=1.5, bulletIndent=2),
        skill_cat=ParagraphStyle("SkillCat", fontName="Helvetica-Bold", fontSize=8.5,
                                  leading=12, textColor=NAVY, spaceBefore=0, spaceAfter=0),
        skill_val=ParagraphStyle("SkillVal", fontName="Helvetica", fontSize=8.5,
                                  leading=12, textColor=DARK, spaceBefore=0, spaceAfter=0),
        comp=ParagraphStyle("Comp", fontName="Helvetica", fontSize=9, leading=13,
                             textColor=BLUE, alignment=TA_CENTER, spaceBefore=4, spaceAfter=4),
        right=ParagraphStyle("R", fontName="Helvetica", fontSize=8.5, leading=12,
                              textColor=LGRAY, alignment=TA_LEFT),
    )

S = make_styles()

def hr(color=BLUE, thickness=0.8, spB=2, spA=3):
    return [Spacer(1, spB), HRFlowable(width="100%", thickness=thickness,
                                        color=color, spaceAfter=spA)]

def section(title):
    return [Paragraph(title.upper(), S["section"])] + hr(BLUE, 0.6, 0, 4)

def bullet(text):
    return Paragraph(f"\u2022\u2002{text}", S["bullet"])

def job_row(title, company, date, location="Ahmedabad, India"):
    g = GRAY.hexval()[2:]
    lg = LGRAY.hexval()[2:]
    left  = f"<font size='9.5'><b>{title}</b></font>  <font color='#{g}' size='8.5'>&mdash; {company}</font>"
    right = f"<font color='#{lg}' size='8.5'><i>{date} | {location}</i></font>"
    tbl = Table([[Paragraph(left, S["body"]), Paragraph(right, S["right"])]],
                colWidths=["68%", "32%"])
    tbl.setStyle(TableStyle([
        ("VALIGN",        (0, 0), (-1, -1), "BOTTOM"),
        ("RIGHTPADDING",  (1, 0), (1,  0),  0),
        ("LEFTPADDING",   (0, 0), (0,  0),  0),
        ("TOPPADDING",    (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    return tbl

def proj_row(title, tech):
    g = GRAY.hexval()[2:]
    return Paragraph(
        f"<b>{title}</b>  <font color='#{g}' size='8.5'><i>| {tech}</i></font>",
        S["body"])

def skills_grid(skills):
    """Render skills as a compact 2-column label:value grid table."""
    rows = []
    for cat, val in skills:
        rows.append([
            Paragraph(cat, S["skill_cat"]),
            Paragraph(val, S["skill_val"]),
        ])
    tbl = Table(rows, colWidths=["23%", "77%"])
    tbl.setStyle(TableStyle([
        ("VALIGN",        (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING",   (0, 0), (-1, -1), 4),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 4),
        ("TOPPADDING",    (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        # Alternate row shading for readability
        *[(("BACKGROUND", (0, i), (-1, i), STRIP))
          for i in range(0, len(rows), 2)],
    ]))
    return tbl

# ── Build Story ────────────────────────────────────────────────────────────────
story = []

# ── HEADER ─────────────────────────────────────────────────────────────────────
story.append(Paragraph("GAURAV MAURYA", S["name"]))
story.append(Paragraph(
    ".NET Core Backend Developer  |  REST APIs  |  SQL Server  |  Microservices",
    S["title"]))
story.append(Paragraph(
    "Ahmedabad, Gujarat  &middot;  gauravmaurya919@gmail.com  "
    "&middot;  +91 84189 31740  &middot;  linkedin.com/in/gaurav-maurya-830a071a6",
    S["contact"]))
story += hr(NAVY, 1.2, 0, 5)

# ── SUMMARY ────────────────────────────────────────────────────────────────────
summary_p = Paragraph(
    "Results-driven <b>Backend Developer</b> with <b>3+ years</b> of experience engineering high-performance "
    "REST APIs and enterprise applications using <b>.NET Core, C#, ASP.NET MVC, and SQL Server</b>. "
    "Delivered a 35–40% reduction in API response latency through LINQ optimization and Redis distributed "
    "caching, and a 30%+ boost in SQL query performance via stored procedures and indexing strategies. "
    "Architected server-side pagination supporting 10,000+ concurrent records with zero degradation. "
    "Recognized with the Employee Spotlight Award (May 2024) for high-impact backend optimization. "
    "Adept at clean architecture, SOLID principles, microservices design, and Agile delivery — seeking a "
    "high-growth backend or full-stack .NET role (on-site or remote).",
    S["body"])
story.append(KeepTogether(section("Professional Summary") + [summary_p]))

# ── CORE COMPETENCIES ──────────────────────────────────────────────────────────
competencies = (
    "NET Core / C# &middot; REST API Design &middot; SQL Server &middot; Redis Caching &middot; "
    "Microservices &middot; Clean Architecture &middot; Entity Framework Core &middot; LINQ Optimization &middot; "
    "Docker &middot; JWT / OAuth 2.0 &middot; Angular / React &middot; Agile / Scrum"
)
comp_tbl = Table([[Paragraph(competencies, S["comp"])]], colWidths=["100%"])
comp_tbl.setStyle(TableStyle([
    ("BACKGROUND",    (0, 0), (-1, -1), STRIP),
    ("TOPPADDING",    (0, 0), (-1, -1), 5),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ("LEFTPADDING",   (0, 0), (-1, -1), 8),
    ("RIGHTPADDING",  (0, 0), (-1, -1), 8),
]))
story.append(KeepTogether(section("Core Competencies") + [comp_tbl]))

# ── TECHNICAL SKILLS (compact 2-col grid) ──────────────────────────────────────
skills = [
    ("Core Backend",   "C#, .NET Core, ASP.NET MVC, ASP.NET Web API, Entity Framework Core, Dapper, Minimal APIs, gRPC, SignalR"),
    ("Databases",      "SQL Server, Stored Procedures, Indexing, Query Optimization, Performance Tuning, Database Normalization"),
    ("DevOps & Cloud", "Docker, Azure App Service, Azure SQL, CI/CD Pipelines, Git, GitHub, Bitbucket"),
    ("Frontend",       "Angular, React, Next.js (SSR), HTML5, CSS3, Bootstrap, TypeScript, JavaScript"),
    ("Architecture",   "Clean Architecture, Vertical Slice Architecture, N-Tier, Repository Pattern, SOLID, DI, Design Patterns"),
    ("Security",       "JWT Authentication, OAuth 2.0, Role-Based Access Control (RBAC), API Security"),
    ("Tools",          "Visual Studio, VS Code, Postman, Swagger/OpenAPI, SSMS, Jira, GitHub Copilot, Cursor"),
]
story.append(KeepTogether(section("Technical Skills") + [skills_grid(skills)]))

# ── WORK EXPERIENCE ────────────────────────────────────────────────────────────
job_hdr = job_row("Backend Developer",
                  "Technobrains Business Solutions", "May 2023 – Present")
b1 = [
    "Engineered 15+ scalable REST APIs using .NET Core and C# for high-traffic production systems handling 10,000+ concurrent records — maintaining sub-200ms average response times across all critical endpoints.",
    "Spearheaded LINQ query optimization and restructured data access layers, eliminating redundant DB calls and achieving a 35–40% reduction in API response latency across 8 performance-critical endpoints.",
    "Architected optimized SQL stored procedures, functions, and indexing strategies in SQL Server, accelerating query execution by 30%+ and cutting report-generation time from ~12s to under 4s.",
    "Implemented Redis distributed caching for high-frequency read operations, reducing database round-trips by ~60% and improving API throughput under peak load.",
    "Designed server-side pagination and dynamic multi-filter APIs for datasets of 10,000+ records, enabling smooth UX with no front-end performance degradation.",
    "Refactored a legacy monolithic codebase into clean architecture layers (Repository Pattern, DI, SOLID), improving testability and modularity — reducing onboarding time for new engineers by ~50%.",
    "Resolved 20+ critical performance bottlenecks through profiling and query execution plan analysis, directly improving system reliability and end-user satisfaction.",
    "Collaborated in Agile/Scrum sprints across planning, code review, and production deployments — consistently delivering features on schedule with zero post-deploy regressions.",
]
b1_bullets = [bullet(b) for b in b1]

# Keep section header + job title + first 2 bullets together
story.append(KeepTogether(section("Work Experience") + [job_hdr] + b1_bullets[:2]))
for b in b1_bullets[2:]:
    story.append(b)

job_hdr2 = job_row("Software Development Intern",
                   "Zobi Web Solutions", "Nov 2022 – Apr 2023")
b2 = [
    "Contributed to backend and frontend feature development using ASP.NET MVC and React, delivering enhancements across 4+ product modules within a fast-paced startup environment.",
    "Built and tested REST API endpoints, resolved 30+ bugs, and improved UI components — gaining hands-on experience in Git branching, code review, and Agile delivery workflows."
]
b2_bullets = [bullet(b) for b in b2]
story.append(KeepTogether([job_hdr2] + b2_bullets))

# ── KEY PROJECTS ───────────────────────────────────────────────────────────────
proj_blocks = [
    ("Hotel Booking Platform",
     "ASP.NET Core · Next.js · SQL Server · Redis",
     [
         "Architected REST APIs for real-time hotel search, availability management, and booking workflows — supporting 5,000+ simultaneous search queries with average response times under 300ms.",
         "Built a Next.js frontend with SSR and dynamic routing, cutting initial page load by 40% and improving SEO discoverability for 200+ hotel listings.",
         "Implemented multi-filter search (location, price, availability) backed by optimized SQL queries and Redis caching, reducing search latency by 50% vs. the initial implementation."
     ]),
    ("Human Resource Management System (HRMS)",
     "ASP.NET MVC · React · SQL Server",
     [
         "Engineered backend modules for attendance, payroll, leave management, and task assignment — processing data for 500+ employees with RBAC enforced at every layer.",
         "Optimized SQL stored procedures and indexes for large employee datasets, reducing average report query time by 65% (from 8s to under 3s).",
         "Implemented automated validation and business logic workflows, eliminating manual data-entry errors and ensuring 100% data integrity across all HR processes."
     ]),
    ("E-Commerce Platform",
     ".NET Core · Angular · SQL Server",
     [
         "Built backend services for order management, product catalog, inventory, and payment processing using clean architecture — handling 1,00,0 daily transactions.",
         "Integrated a third-party payment gateway with idempotency checks, retry logic, and error recovery, achieving 99.9% transaction success rate in production.",
         "Developed Angular frontend for product browsing, cart, and multi-step checkout with real-time order tracking via event-driven API workflows."
     ]),
    ("Umbraco CMS Websites",
     "Umbraco v7/v13 · .NET Core · C#",
     [
         "Developed and maintained CMS-driven websites for 5+ clients using Umbraco v7 and v13, enabling non-technical teams to manage dynamic content independently.",
         "Integrated third-party APIs and applied caching strategies, improving content delivery speed by 35% and eliminating repeated DB fetches for static content."
     ])
]

for i, (title, tech, bullets) in enumerate(proj_blocks):
    hdr = proj_row(title, tech)
    blts = [bullet(b) for b in bullets]
    if i == 0:
        story.append(KeepTogether(section("Key Projects") + [hdr, blts[0]]))
        story.append(KeepTogether(blts[1:]))
    else:
        story.append(KeepTogether([hdr] + blts))
    story.append(Spacer(1, 4))

# ── EDUCATION ──────────────────────────────────────────────────────────────────
edu_p = Paragraph(
    "<b>B.Tech in Computer Science & Engineering</b> — Rungta College of Engineering and Technology, Bhilai"
    "&nbsp; | &nbsp;GPA: 8.1 / 10 &nbsp; | &nbsp;2018 – 2022",
    S["body"])
story.append(KeepTogether(section("Education") + [edu_p]))

# ── ACHIEVEMENTS ───────────────────────────────────────────────────────────────
achievements = [
    "<b>Employee Spotlight Award – Technobrains Business Solutions (May 2024):</b> Recognized for consistent high performance, measurable backend optimization contributions, and proactive ownership of performance-critical API and database improvements.",
    "Delivered 35–40% API latency reduction and 30%+ SQL performance improvement within Year 1, directly contributing to better end-user experience and system reliability."
]
ach_paragraphs = [Paragraph(a, S["body"]) for a in achievements]
story.append(KeepTogether(section("Achievements & Recognition") + [ach_paragraphs[0]]))
for ap in ach_paragraphs[1:]:
    story.append(ap)

# ── Output ─────────────────────────────────────────────────────────────────────
output = r"F:\Resume2026\Gaurav_Maurya_ATS_Resume_Backend.pdf"
doc = SimpleDocTemplate(
    output,
    pagesize=letter,
    leftMargin=0.65 * inch,
    rightMargin=0.65 * inch,
    topMargin=0.55 * inch,
    bottomMargin=0.55 * inch,
)
doc.build(story)
print("Saved:", output)
