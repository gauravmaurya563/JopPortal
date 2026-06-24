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
                                leading=12, textColor=GRAY, alignment=TA_CENTER, spaceAfter=5),
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
        *[("BACKGROUND", (0, i), (-1, i), STRIP)
          for i in range(0, len(rows), 2)],
    ]))
    return tbl

# ── Build Story ────────────────────────────────────────────────────────────────
story = []

# ── HEADER ─────────────────────────────────────────────────────────────────────
story.append(Paragraph("AMEE BRAHMBHATT", S["name"]))
story.append(Paragraph(
    "Senior .NET Developer  |  SQL Server DBA  |  Backend &amp; API Architecture",
    S["title"]))
story.append(Paragraph(
    "Ahmedabad, Gujarat, India  &middot;  Brahmbhattami7@gmail.com  "
    "&middot;  +91 81418 02828  &middot;  linkedin.com/in/brahmbhatt-ami-42615618b",
    S["contact"]))
story += hr(NAVY, 1.2, 0, 5)


# ── SUMMARY ────────────────────────────────────────────────────────────────────
summary_p = Paragraph(
    "Results-driven <b>Senior .NET Developer</b> and <b>SQL Server Database Administrator</b> "
    "with <b>7+ years</b> of experience designing and optimizing enterprise-level backend systems "
    "using Microsoft .NET technologies. Deep expertise in <b>ASP.NET MVC, .NET Core (.NET 6/7/8), "
    "RESTful API development</b>, and SQL Server administration including backup, recovery, "
    "performance tuning, and indexing. Proven track record delivering scalable HRMS, E-Commerce, "
    "and Healthcare solutions. Experienced in DBA leadership, mentoring junior developers, "
    "AI workflow integration, and Agile delivery.",
    S["body"])
story.append(KeepTogether(section("Professional Summary") + [summary_p]))

# ── CORE COMPETENCIES ──────────────────────────────────────────────────────────
competencies = (
    "REST API Development &middot; SQL Server DBA &middot; Database Performance Tuning &middot; "
    "Stored Procedures &amp; Indexing &middot; .NET Core / ASP.NET MVC &middot; Entity Framework &middot; "
    "Clean Architecture &middot; SOLID Principles &middot; RBAC &middot; "
    "Healthcare IT &middot; AI Workflow Integration &middot; Backup &amp; Recovery &middot; "
    "Agile / Scrum &middot; Code Review &amp; Mentoring &middot; Production Support"
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
    ("Backend",        "ASP.NET MVC, ASP.NET Web API, .NET Framework, .NET Core (.NET 6/7/8), Entity Framework, LINQ, REST APIs, Dapper"),
    ("Languages",      "C#, SQL, TypeScript"),
    ("Database & DBA", "SQL Server, Stored Procedures, Functions, Triggers, Query Optimization, Execution Plans, Performance Tuning, Indexing, Backup & Recovery, DB Design & Normalization"),
    ("Architecture",   "Clean Architecture, N-Tier, Repository Pattern, Dependency Injection, SOLID, Design Patterns, Microservices"),
    ("Security",       "JWT Authentication, OAuth 2.0, Role-Based Access Control (RBAC), API Security, Data Encryption"),
    ("Tools",          "Visual Studio, SSMS, Postman, Swagger / OpenAPI, Git, GitHub, Jira"),
    ("Methodologies",  "Agile, Scrum, SDLC, Code Review, Unit Testing, Requirement Analysis, Production Deployments"),
    ("AI Tools",       "GitHub Copilot, Cursor AI, ChatGPT, Claude AI, AI Workflow Integration"),
]
story.append(KeepTogether(section("Technical Skills") + [skills_grid(skills)]))

# ── WORK EXPERIENCE ────────────────────────────────────────────────────────────
job_hdr = job_row("Senior Software Developer / Database Administrator",
                  "Technobrains IT Solution", "Jun 2018 – Present")
b1 = [
    "Led end-to-end backend development of enterprise applications using ASP.NET MVC, "
    ".NET Core (.NET 6/7/8), and SQL Server across HRMS, E-Commerce, and Healthcare domains.",
    "Served as <b>Lead DBA</b> — managing full SQL Server lifecycle: database design, "
    "backup strategies, disaster recovery, security hardening, and ongoing performance tuning.",
    "Designed and implemented scalable <b>RESTful APIs</b> enabling seamless enterprise "
    "integrations and third-party service connectivity.",
    "Optimized complex SQL queries, stored procedures, and execution plans — achieving "
    "measurable gains in query throughput and system responsiveness.",
    "Implemented <b>RBAC</b> and <b>JWT-based authentication</b> across enterprise applications "
    "to ensure secure, structured data access.",
    "Integrated AI-powered tools and intelligent workflow automation into healthcare applications, "
    "streamlining clinical processes and reducing manual intervention.",
    "Mentored junior developers through code reviews and pair programming — improving team "
    "code quality and delivery consistency.",
    "Managed production deployments, monitoring, and incident resolution to maintain high "
    "availability across mission-critical systems.",
]
b1_bullets = [bullet(b) for b in b1]
# Keep section header + job title + first 2 bullets together
story.append(KeepTogether(section("Work Experience") + [job_hdr] + b1_bullets[:2]))
for b in b1_bullets[2:]:
    story.append(b)

# ── KEY PROJECTS ───────────────────────────────────────────────────────────────
proj_blocks = [
    ("TCW – Human Resource Management System (HRMS)",
     "ASP.NET MVC · SQL Server · Entity Framework",
     [
         "Developed enterprise-grade HRMS backend supporting recruitment workflows, "
         "attendance tracking, payroll processing, and leave management for large organizations.",
         "Architected MVC modules with clean separation of concerns; designed and optimized "
         "stored procedures, indexes, and SQL queries for high-volume employee datasets.",
         "Implemented RBAC, automated workflow validation, and approval chains ensuring "
         "data integrity and department-level security compliance.",
     ]),
    ("GINA – E-Commerce Platform",
     ".NET Core · SQL Server · REST APIs",
     [
         "Built scalable backend modules for product catalog, inventory, and order processing "
         "using .NET Core with clean architecture and dependency injection.",
         "Designed RESTful APIs for payment gateway and logistics integrations; optimized "
         "SQL Server indexing and execution plans for high-traffic performance.",
     ]),
    ("Healthcare Management Platform",
     ".NET Core · SQL Server · AI Tools",
     [
         "Building enterprise healthcare backend responsible for full DBA lifecycle — schema "
         "design, query optimization, backup strategies, and production administration.",
         "Designed secure REST APIs (JWT + RBAC) for patient records, appointments, and "
         "clinical reporting; integrated AI automation to reduce manual data entry.",
         "Managing production deployments and incident resolution for a mission-critical "
         "healthcare system with high-availability requirements.",
     ]),
]

for i, (title, tech, bullets) in enumerate(proj_blocks):
    hdr = proj_row(title, tech)
    blts = [bullet(b) for b in bullets]
    if i == 0:
        # Keep section header + first project title + first project bullet together
        story.append(KeepTogether(section("Key Projects") + [hdr, blts[0]]))
        story.append(KeepTogether(blts[1:]))
    else:
        # Keep each project block together
        story.append(KeepTogether([hdr] + blts))
    story.append(Spacer(1, 4))

# ── EDUCATION ──────────────────────────────────────────────────────────────────
edu_p = Paragraph(
    "<b>Master of Science (M.Sc.) — Information Technology</b>"
    "&nbsp; | &nbsp;Jun 2016 – May 2018",
    S["body"])
story.append(KeepTogether(section("Education") + [edu_p]))

# ── ACHIEVEMENTS ───────────────────────────────────────────────────────────────
achievements = [
    "<b>Best Performer Award – Q4 2023 (Technobrains IT Solution):</b> Recognized for "
    "consistently delivering high-quality solutions, leading performance optimization initiatives, "
    "and measurable contributions across multiple enterprise domains.",
    "Led healthcare platform DBA operations end-to-end — single-handedly managing database "
    "design, optimization, and production administration for a mission-critical system.",
    "Mentored multiple junior developers, raising team-wide code quality standards and "
    "accelerating onboarding timelines.",
]
ach_paragraphs = [Paragraph(a, S["body"]) for a in achievements]
story.append(KeepTogether(section("Achievements & Recognition") + [ach_paragraphs[0]]))
for ap in ach_paragraphs[1:]:
    story.append(ap)

# ── Output ─────────────────────────────────────────────────────────────────────
output = r"F:\Resume2026\Amee_Brahmbhatt_ATS_Resume_Backend.pdf"
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
