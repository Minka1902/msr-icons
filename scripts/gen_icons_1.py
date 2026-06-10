#!/usr/bin/env python3
# Generates the remaining dev_*.jsx icon files for msr-icons.
# Each icon is a stroke-style 24x24 glyph following the BaseIcon pattern.
import os

HEADER = "import { BaseIcon } from './BaseIcon';\n\n"

def emit(filename, header_comment, items):
    """items: list of (Name, children_jsx_string)"""
    out = [HEADER, f"// {header_comment}\n"]
    for name, kids in items:
        out.append(
            f"export function {name}({{ fillColor = '#000', isColored = true, ...rest }}) {{\n"
            f"    return (\n"
            f"        <BaseIcon fillColor={{fillColor}} isColored={{isColored}} {{...rest}}>\n"
            f"            {kids}\n"
            f"        </BaseIcon>\n"
            f"    );\n"
            f"}}\n\n"
        )
    path = f"src/icons/dev_{filename}.jsx"
    open(path, "w").write("".join(out))
    return path, len(items)

# ---- reusable marks (centered) ----
def plus(cx, cy, s=2.4):   return f'<path d="M{cx} {cy-s}v{2*s}M{cx-s} {cy}h{2*s}" />'
def minus(cx, cy, s=2.4):  return f'<path d="M{cx-s} {cy}h{2*s}" />'
def xmark(cx, cy, s=2.2):  return f'<path d="M{cx-s} {cy-s} {cx+s} {cy+s}M{cx+s} {cy-s} {cx-s} {cy+s}" />'
def check(cx, cy, s=2.4):  return f'<path d="m{cx-s} {cy} {round(cx-s*0.2,1)} {round(cy+s,1)} {cx+s} {round(cy-s,1)}" />'
def dot(cx, cy):           return f'<path d="M{cx} {cy}h.01" />'

# ---- bases ----
PAGE    = '<path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M14 3v4h4" />'
FOLDER  = '<path d="M3 7a1 1 0 0 1 1-1h5l2 2h8a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Z" />'
CLIP    = '<rect x="6" y="4" width="12" height="17" rx="2" /><rect x="9" y="2.5" width="6" height="3.5" rx="1" />'
PERSON  = '<circle cx="12" cy="8" r="3.5" /><path d="M5.5 20a6.5 6.5 0 0 1 13 0" />'
PERSON_SM = '<circle cx="11" cy="8" r="3" /><path d="M5 19a6 6 0 0 1 12 0" />'
TWOPPL  = '<circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 5.6a3 3 0 0 1 0 5.6" /><path d="M16.5 14a5.5 5.5 0 0 1 4 5" />'
BUBBLE  = '<path d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />'
ENVELOPE= '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 7 8.5-7" />'
BELL    = '<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path d="M10 19a2 2 0 0 0 4 0" />'
PHONE   = '<path d="M6 3.5 9 4l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5.5 3a2 2 0 0 1-2 2C10 19 5 14 4 6a2 2 0 0 1 2-2.5Z" />'
SHIELD  = '<path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />'
CALENDAR= '<rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M8 3v4M16 3v4" />'
CLOUD   = '<path d="M7 18a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 11 3.5 3.5 0 0 1 17 18H7Z" />'
DB      = '<ellipse cx="12" cy="5.5" rx="7" ry="2.8" /><path d="M5 5.5v13c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8v-13" /><path d="M5 12c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8" />'
SERVER  = '<rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" />' + dot(7,7.5) + dot(7,16.5)
GEAR    = '<circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3" />'
CLOCK   = '<circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" />'
MAGNIFY = '<circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" />'
KEY     = '<circle cx="8" cy="8" r="3.5" /><path d="m10.5 10.5 8 8M16 16l2-2M19 13l-2 2" />'
LOCK    = '<rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />'
ROCKET  = '<path d="M12 3c3 2 5 5 5 9l-2.5 2.5h-5L7 12c0-4 2-7 5-9Z" /><circle cx="12" cy="9" r="1.6" /><path d="M9.5 16.5 7 19m7.5-2.5L17 19M9.5 14 6 15l1.5 3.5" />'
FLAG    = '<path d="M6 21V4M6 4h11l-2 3.5 2 3.5H6" />'
BATTERY = '<rect x="3" y="8" width="16" height="9" rx="2" /><path d="M21 11v3" />'

def page_mark(m):   return PAGE + m
def folder_mark(m): return FOLDER + m
def chart_axes():   return '<path d="M4 4v16h16" />'

FILES = {}

# ============================ DEVOPS ============================
up_arrow = '<path d="M12 8v8M9 11l3-3 3 3" />'
down_arrow = '<path d="M12 8v8M9 13l3 3 3-3" />'
devops = [
 ("Server2", SERVER),
 ("ServerStack", '<rect x="4" y="3" width="16" height="5.5" rx="1.5" /><rect x="4" y="9.5" width="16" height="5.5" rx="1.5" /><rect x="4" y="16" width="16" height="5.5" rx="1.5" />' + dot(8,5.7)+dot(8,12.2)+dot(8,18.7)),
 ("ServerRack", '<rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M5 8h14M5 13h14M5 18h14" />' + dot(8,5.5)+dot(8,10.5)+dot(8,15.5)),
 ("Database2", DB),
 ("DatabaseBackup", DB + '<path d="M12 14.5a3 3 0 1 0 3-3M15 11.5v2.2h-2.2" />'),
 ("DatabaseSync", DB + '<path d="M9 15a3 3 0 0 1 5-1.5M15 17a3 3 0 0 1-5 1.5M14 12v1.5h-1.5M10 19v-1.5h1.5" />'),
 ("DatabaseLock", DB + '<rect x="13" y="15" width="7" height="5" rx="1" /><path d="M14.5 15v-1.5a2 2 0 0 1 4 0V15" />'),
 ("DatabaseX", DB + xmark(13,15,2)),
 ("CloudUpload2", CLOUD + '<path d="M12 16v-4M10 13.5l2-2 2 2" />'),
 ("CloudDownload2", CLOUD + '<path d="M12 11v4M10 13l2 2 2-2" />'),
 ("CloudSync", CLOUD + '<path d="M9.5 13.5a2.5 2.5 0 0 1 4-1M14.5 15a2.5 2.5 0 0 1-4 1" />'),
 ("CloudCheck", CLOUD + check(12,13,2.2)),
 ("CloudX", CLOUD + xmark(12,13,2)),
 ("CloudCog", CLOUD + '<circle cx="12" cy="13.5" r="1.6" /><path d="M12 11v1M12 15v1M14 13.5h-1M11 13.5h-1" />'),
 ("Container2", '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" /><path d="m3 7.5 9 4.5 9-4.5M12 12v9" />'),
 ("Docker2", '<rect x="4" y="11" width="3" height="3" /><rect x="8" y="11" width="3" height="3" /><rect x="12" y="11" width="3" height="3" /><rect x="8" y="7" width="3" height="3" /><path d="M3 14h14a4 4 0 0 0 3.5-2.5C19 11 18 12 17 11c0-2-2-3-2-3" />'),
 ("Pipeline", '<rect x="3" y="6" width="5" height="5" rx="1" /><rect x="16" y="13" width="5" height="5" rx="1" /><path d="M8 8.5h4a3 3 0 0 1 3 3v2" />'),
 ("Deploy", ROCKET),
 ("Rocket2", ROCKET),
 ("LoadBalancer", '<circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" /><path d="M12 7.5v3M12 10.5 6 16.5M12 10.5 18 16.5" />'),
 ("Cdn", '<circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" />'),
 ("Cache", '<path d="M4 6c0-1.5 3.5-2.5 8-2.5s8 1 8 2.5-3.5 2.5-8 2.5S4 7.5 4 6Z" /><path d="M4 6v12c0 1.5 3.5 2.5 8 2.5s8-1 8-2.5V6M4 12c0 1.5 3.5 2.5 8 2.5s8-1 8-2.5" />'),
 ("Queue", '<rect x="3" y="9" width="4" height="6" rx="1" /><rect x="10" y="9" width="4" height="6" rx="1" /><rect x="17" y="9" width="4" height="6" rx="1" />'),
 ("Cluster", '<circle cx="12" cy="6" r="2.5" /><circle cx="6" cy="17" r="2.5" /><circle cx="18" cy="17" r="2.5" /><path d="M11 8 7 15M13 8l4 7M8 17h8" />'),
 ("Node2", '<circle cx="12" cy="12" r="3" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="m6.5 6.5 3 3M17.5 6.5l-3 3M6.5 17.5l3-3M17.5 17.5l-3-3" />'),
 ("Microservice", '<rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="8.5" y="14" width="7" height="7" rx="1.5" />'),
 ("Serverless", '<path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />'),
 ("VirtualMachine", '<rect x="3" y="4" width="18" height="13" rx="2" /><rect x="7" y="7" width="10" height="7" rx="1" /><path d="M8 21h8M12 17v4" />'),
 ("Vpn", SHIELD + '<path d="M9 11.5 11 14l4-4.5" />'),
 ("Proxy", '<circle cx="5" cy="12" r="2.5" /><rect x="10" y="8" width="9" height="8" rx="1.5" /><path d="M7.5 12H10" />'),
 ("Gateway", '<path d="M4 21V8l8-4 8 4v13" /><path d="M9 21v-7h6v7M4 13h16" />'),
 ("Dns", '<circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />'),
 ("Ssl", LOCK + check(12,15.5,1.8)),
 ("Uptime", '<path d="M3 16l4-5 3 3 5-7 6 8" /><circle cx="6" cy="6" r="1.5" />'),
 ("Monitoring", '<rect x="3" y="4" width="18" height="13" rx="2" /><path d="M6 12l3-3 2 2 3-4 4 5M8 21h8M12 17v4" />'),
 ("Logs2", '<rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" />'),
 ("Metrics", '<path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6M20 16v-8" />'),
 ("Observability", MAGNIFY + '<path d="M7 10.5h2l1.5 3 2-5 1.5 2h1" />'),
 ("PipelineRun", '<circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4V8Z" />'),
 ("PipelineFail", '<circle cx="12" cy="12" r="9" />' + xmark(12,12,3)),
 ("PipelinePass", '<circle cx="12" cy="12" r="9" />' + check(12,12,3)),
 ("BuildSuccess", '<rect x="4" y="4" width="16" height="16" rx="2" />' + check(12,12,3)),
 ("BuildFail", '<rect x="4" y="4" width="16" height="16" rx="2" />' + xmark(12,12,3)),
 ("BuildPending", '<rect x="4" y="4" width="16" height="16" rx="2" /><path d="M12 8v4l2.5 1.5" />'),
 ("TestPass", '<path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />' + check(12,16,2.2)),
 ("TestFail", '<path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />' + xmark(12,16,2)),
 ("TestSkip", '<path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M10 16l3 0M14 16h.5" />'),
 ("CoverageIcon", '<circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 6.4 15.4L12 12V3Z" />'),
 ("ReleaseIcon", '<path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z" /><path d="m3 7.5 9 4.5 9-4.5M3 7.5v9L12 21l9-4.5v-9" /><circle cx="12" cy="9" r="1" />'),
 ("RollbackIcon", '<path d="M4 9a8 8 0 1 1-1.5 5" /><path d="M4 4v5h5" />'),
 ("HotfixIcon", '<path d="m12 2 2 4h-4l2-4Z" /><circle cx="12" cy="13" r="6" /><path d="M12 7v-1M6 13H4M20 13h-2M12 10v3l2 2" />'),
 ("FeatureFlag", FLAG + dot(11,7.5)),
 ("CanaryDeploy", '<circle cx="9" cy="11" r="4" /><path d="M13 11h6M19 11l-2-2M19 11l-2 2M7 11h.01" />'),
 ("BlueGreen", '<circle cx="9" cy="12" r="5" /><circle cx="15" cy="12" r="5" />'),
 ("ScaleUp", '<rect x="9" y="9" width="6" height="6" rx="1" /><path d="M5 5h4M5 5v4M19 19h-4M19 19v-4M5 5l4 4M19 19l-4-4" />'),
 ("ScaleDown", '<rect x="5" y="5" width="14" height="14" rx="1.5" /><path d="M9 15v-4h4M9 11l5 5" />'),
 ("AutoScale", '<rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h4a2 2 0 0 1 2 2v7M13 13l2 2 2-2" />'),
 ("HealthCheck", '<path d="M3 12h4l2-5 3 10 2-5h7" />'),
 ("Heartbeat3", '<path d="M3 12h3l2-4 3 8 2-6 2 2h6" /><path d="M20 7.5a2.5 2.5 0 0 0-4-2 2.5 2.5 0 0 0-4 2" />'),
 ("Latency", CLOCK + '<path d="M3 19h6" />'),
 ("Throughput", '<path d="M3 8h14M14 5l3 3-3 3M21 16H7M10 13l-3 3 3 3" />'),
 ("Bandwidth", '<path d="M4 18h16M6 18V9M10 18V5M14 18v-7M18 18V7" />'),
 ("Traffic2", '<rect x="8" y="2" width="8" height="20" rx="3" /><circle cx="12" cy="7" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="17" r="1.6" />'),
 ("RateLimit", '<circle cx="12" cy="12" r="9" /><path d="M12 12 16 8M8 12h.01M12 8v.01" /><path d="M12 3v2M21 12h-2" />'),
 ("Throttle", '<circle cx="12" cy="13" r="7" /><path d="M12 13 9 10M12 6V4M5 13H3M21 13h-2" />'),
 ("CircuitBreaker", '<path d="M3 12h6l2-3M13 9l2 3h6" /><circle cx="12" cy="9" r="1" /><path d="M11 12h2" />'),
 ("Retry2", '<path d="M4 12a8 8 0 1 1 2.3 5.6" /><path d="M3 20v-4h4" />'),
 ("Fallback", '<path d="M20 12a8 8 0 1 0-2.3 5.6" /><path d="M21 20v-4h-4M8 9l-3 3 3 3M5 12h7" />'),
]
FILES["devops"] = ("DevOps / Cloud / Infrastructure", devops)

# ============================ FILES_DEV ============================
def filetxt(lines):
    return PAGE + lines
files_dev = [
 ("FileCode", page_mark('<path d="M10.5 12 9 14l1.5 2M13.5 12 15 14l-1.5 2" />')),
 ("FileJson", page_mark('<path d="M10 11.5c-1 0-1 1.5-1 2.5s0 2.5-1 2.5M14 11.5c1 0 1 1.5 1 2.5s0 2.5 1 2.5" />')),
 ("FileText2", page_mark('<path d="M8.5 12h7M8.5 15h7M8.5 18h4" />')),
 ("FilePdf", page_mark('<path d="M8 17v-4h1.5a1 1 0 0 1 0 2.5H8M13 17v-4h2M13 15h1.5" />')),
 ("FileImage2", page_mark('<circle cx="10" cy="13" r="1.3" /><path d="M8 18l3-3 2 2 2-2.5 2 3.5" />')),
 ("FileVideo2", page_mark('<path d="m10 12 4 2.5-4 2.5v-5Z" />')),
 ("FileAudio2", page_mark('<path d="M9 13v3M11 11.5v6M13 13v3M15 14.5v1" />')),
 ("FileZip2", page_mark('<path d="M12 8v1M12 10v1M12 12v1M11 14h2v3h-2z" />')),
 ("FileCsv", page_mark('<path d="M8.5 13h2M8.5 16h2M12 13h2M12 16h2M16 13h.5M16 16h.5" />')),
 ("FileExcel", page_mark('<path d="m9 12 6 6M15 12l-6 6" />')),
 ("FileWord", page_mark('<path d="m8 12 1.5 6 2-4 2 4 1.5-6" />')),
 ("FilePowerpoint", page_mark('<path d="M9 17v-5h2.5a1.5 1.5 0 0 1 0 3H9" />')),
 ("FileMarkdown", page_mark('<path d="M8 17v-5l2 2.5 2-2.5v5M15 12v4M13.5 14.5 15 16l1.5-1.5" />')),
 ("FileLock2", page_mark('<rect x="9.5" y="14" width="5" height="4" rx="0.5" /><path d="M10.5 14v-1a1.5 1.5 0 0 1 3 0v1" />')),
 ("FileKey", page_mark('<circle cx="10" cy="14" r="1.8" /><path d="m11.3 15.3 3 3M14 17l1-1" />')),
 ("FilePlus2", page_mark(plus(12,15,2.5))),
 ("FileMinus2", page_mark(minus(12,15,2.5))),
 ("FileCheck2", page_mark(check(12,15,2.5))),
 ("FileX2", page_mark(xmark(12,15,2.3))),
 ("FileEdit2", page_mark('<path d="M9 18h1l5-5-1-1-5 5v1Z" />')),
 ("FileSymlink", page_mark('<path d="M9 18l3-3M12 15h-3M12 15v3" />')),
 ("FolderCode", folder_mark('<path d="M10 11.5 8.5 13l1.5 1.5M14 11.5 15.5 13 14 14.5" />')),
 ("FolderGit", folder_mark('<circle cx="9" cy="13" r="1.3" /><circle cx="15" cy="13" r="1.3" /><path d="M10.3 13h3.4" />')),
 ("FolderPlus2", folder_mark(plus(12,13,2.3))),
 ("FolderMinus2", folder_mark(minus(12,13,2.3))),
 ("FolderLock2", folder_mark('<rect x="9.5" y="12" width="5" height="3.5" rx="0.5" /><path d="M10.5 12v-1a1.5 1.5 0 0 1 3 0v1" />')),
 ("FolderSync", folder_mark('<path d="M9.5 13a2.5 2.5 0 0 1 4-1M14.5 14a2.5 2.5 0 0 1-4 1" />')),
 ("FolderArchive", folder_mark('<rect x="9.5" y="11.5" width="5" height="4" rx="0.5" /><path d="M12 13v1.5" />')),
 ("FolderHeart", folder_mark('<path d="M12 15s-2-1.3-2-2.6a1.1 1.1 0 0 1 2-.6 1.1 1.1 0 0 1 2 .6c0 1.3-2 2.6-2 2.6Z" />')),
 ("Documents", '<path d="M8 4h7l3 3v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" /><path d="M5 7v13a1 1 0 0 0 1 1h9" /><path d="M15 4v3h3" />'),
 ("Clipboard2", CLIP),
 ("ClipboardCheck", CLIP + check(12,13,2.2)),
 ("ClipboardCopy", CLIP + '<path d="M9 12h4M9 15h6M9 18h3" />'),
 ("ClipboardList", CLIP + '<path d="M9 11h6M9 14h6M9 17h4" />'),
 ("ClipboardX", CLIP + xmark(12,13,2)),
 ("Paperclip2", '<path d="M19 11 11 19a4 4 0 0 1-6-6l8-8a2.5 2.5 0 0 1 3.5 3.5l-7.5 7.5a1 1 0 0 1-1.5-1.5l7-7" />'),
 ("Attachment2", '<path d="M16 7 8.5 14.5a2.5 2.5 0 0 0 3.5 3.5L20 10a4.5 4.5 0 0 0-6.5-6.5L5 12" />'),
 ("FileGit", page_mark('<circle cx="10" cy="13" r="1.2" /><circle cx="14" cy="16" r="1.2" /><path d="M10 14.2v.8a1 1 0 0 0 1 1h2" />')),
 ("FileTerminal", page_mark('<path d="m8.5 12 2 2-2 2M13 16h2.5" />')),
 ("FileBinary", page_mark('<path d="M8 12h1.5v5M14.5 12h1v5M8 17h3M13.5 17h3M8.5 12.5v0" /><rect x="13" y="11.5" width="0.01" height="0.01" />')),
 ("FileDiff", page_mark(plus(11,12.5,1.6) + minus(11,17,1.6) + '<path d="M9.5 15h3" />')),
 ("FileSpreadsheet", page_mark('<path d="M8.5 12v6M11.5 12v6M8.5 14.5h6M8.5 17h6M14.5 12v6" />')),
 ("FileDatabase", page_mark('<ellipse cx="12" cy="12.5" rx="3" ry="1.2" /><path d="M9 12.5v4c0 .7 1.3 1.2 3 1.2s3-.5 3-1.2v-4" />')),
 ("FileCertificate", page_mark('<circle cx="12" cy="13" r="2.2" /><path d="M10.5 14.8 10 18l2-1 2 1-.5-3.2" />')),
 ("FileSignature", page_mark('<path d="M8 17c1-1 2-3 1-3.5-1 0-1 2 0 2.5s2-1 3-2M15 17h1" />')),
 ("FileVersion", page_mark('<path d="M9 12v3M9 12h2M9 13.5h2M13 12h2v5h-2z" />')),
 ("FileHistory", page_mark('<circle cx="12" cy="14" r="2.8" /><path d="M12 12.5v1.5l1 .7" />')),
 ("FileTree", '<path d="M7 4h7l4 4v12H7z" /><path d="M14 4v4h4" /><path d="M10 12h3M10 12v4h3M10 16h0M13 12h.01M13 16h.01" />'),
 ("FileSymbol", page_mark('<path d="M10 16c-1 0-1-4 0-4M14 12c1 0 1 4 0 4M12 11v6" />')),
 ("FolderTree", '<rect x="3" y="3" width="7" height="5" rx="1" /><rect x="14" y="9" width="7" height="5" rx="1" /><rect x="14" y="16" width="7" height="5" rx="1" /><path d="M6.5 8v6.5a4 4 0 0 0 4 4h3.5M6.5 11.5h7.5" />'),
 ("FolderCloud", folder_mark('<path d="M10 15a1.5 1.5 0 0 1 0-3 2 2 0 0 1 3.8.5A1.3 1.3 0 0 1 14 15h-4Z" />')),
 ("FolderDownload", folder_mark('<path d="M12 11.5v3.5M10.5 13.5l1.5 1.5 1.5-1.5" />')),
 ("FolderUpload", folder_mark('<path d="M12 15.5V12M10.5 13.5 12 12l1.5 1.5" />')),
 ("FolderConfig", folder_mark('<circle cx="12" cy="13.5" r="1.4" /><path d="M12 11.5v.8M12 14.7v.8M14 13.5h-.8M10.8 13.5H10" />')),
 ("FolderSecure", folder_mark('<path d="M12 11 9 12v2c0 1.5 1.3 2.5 3 3 1.7-.5 3-1.5 3-3v-2l-3-1Z" />')),
 ("Backup2", DB + '<path d="M12 15.5a2.5 2.5 0 1 0 2.5-2.5M14.5 11v2h-2" />'),
 ("Restore2", '<path d="M4 9a8 8 0 1 1-1.5 5" /><path d="M4 4v5h5M12 8v4l3 2" />'),
 ("ArchiveBox", '<path d="M3 7h18v3H3z" /><path d="M5 10v10h14V10M9 14h6" />'),
 ("UnarchiveIcon", '<path d="M3 7h18v3H3z" /><path d="M5 10v10h14V10M12 18v-5M9.5 15.5 12 13l2.5 2.5" />'),
 ("TrashRestore", '<path d="M4 7h16M6 7l1 13h10l1-13M9 7V4h6v3" /><path d="M12 17v-5M9.5 14.5 12 12l2.5 2.5" />'),
 ("ExportData", '<rect x="3" y="4" width="13" height="16" rx="2" /><path d="M12 12h9M18 9l3 3-3 3" />'),
 ("ImportData", '<rect x="8" y="4" width="13" height="16" rx="2" /><path d="M3 12h9M6 9l-3 3 3 3" />'),
 ("SyncFiles", PAGE + '<path d="M8.5 14a3.5 3.5 0 0 1 6-2M15.5 16a3.5 3.5 0 0 1-6 2" />'),
 ("MergeFiles", '<path d="M7 3h5l3 3v4M7 3v18h10v-4" /><path d="M3 14h10M10 11l3 3-3 3" />'),
 ("CompareFiles", '<rect x="3" y="4" width="7" height="16" rx="1.5" /><rect x="14" y="4" width="7" height="16" rx="1.5" /><path d="M12 6v12" />'),
 ("SplitFile", PAGE + '<path d="M12 11v6M9.5 13.5 12 11l2.5 2.5M9.5 14.5 12 17l2.5-2.5" />'),
]
FILES["files_dev"] = ("Files / Documents", files_dev)

# ============================ COMMS ============================
comms = [
 ("MessageCircle2", '<path d="M21 11.5a8.5 8 0 0 1-12 7L4 20l1.5-4.5A8 8 0 0 1 12 3.5c5 0 9 3.6 9 8Z" />'),
 ("MessageSquare2", '<path d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />'),
 ("MessageText", BUBBLE + '<path d="M7 8h10M7 11h7" />'),
 ("MessageDots", BUBBLE + dot(8.5,10)+dot(12,10)+dot(15.5,10)),
 ("MessagePlus", BUBBLE + plus(12,10,2.2)),
 ("Chat2", '<path d="M3 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8l-3 3v-3a2 2 0 0 1-2-2V6Z" /><path d="M16 9h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2v3l-3-3h-3a2 2 0 0 1-1.7-1" />'),
 ("ChatBubble", BUBBLE),
 ("Inbox2", '<path d="M3 13l3-8h12l3 8v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5Z" /><path d="M3 13h5l1.5 2.5h5L16 13h5" />'),
 ("Outbox", '<path d="M3 13l3-8h12l3 8v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5Z" /><path d="M3 13h5l1.5 2.5h5L16 13h5M12 11V4M9.5 6.5 12 4l2.5 2.5" />'),
 ("SendMessage", '<path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" /><path d="m10 13.5 4-4" />'),
 ("Reply2", '<path d="M9 8 4 13l5 5M4 13h9a6 6 0 0 1 6 6" />'),
 ("Forward2", '<path d="m15 8 5 5-5 5M20 13h-9a6 6 0 0 0-6 6" />'),
 ("MailOpen2", '<path d="M3 9.5 12 4l9 5.5V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" /><path d="m3 9.5 9 6 9-6" />'),
 ("MailCheck", ENVELOPE + check(18,17,2)),
 ("MailX", ENVELOPE + xmark(18,17,1.8)),
 ("MailPlus", ENVELOPE + plus(18,17,2)),
 ("MailSearch", ENVELOPE + '<circle cx="17" cy="17" r="2.5" /><path d="m19 19 1.5 1.5" />'),
 ("AtSign2", '<circle cx="12" cy="12" r="4" /><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1" />'),
 ("Megaphone2", '<path d="M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1Z" /><path d="M6 14v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2M18 9a3 3 0 0 1 0 6" />'),
 ("Announcement", '<path d="M3 10v4a1 1 0 0 0 1 1h2l10 5V4L6 9H4a1 1 0 0 0-1 1Z" /><path d="M19 8v8" />'),
 ("Notification2", BELL),
 ("NotificationOff", BELL + '<path d="m4 4 16 16" />'),
 ("BellRing2", BELL + '<path d="M3.5 6a4 4 0 0 1 1.5-3M20.5 6a4 4 0 0 0-1.5-3" />'),
 ("BellPlus", '<path d="M8 9a5 5 0 0 1 9-3M18 9c0 5 2 6 2 6H4s2-1 2-6a6 6 0 0 1 .3-2" /><path d="M10 19a2 2 0 0 0 4 0" />' + plus(18,5,2)),
 ("Comment2", BUBBLE),
 ("CommentDots", BUBBLE + dot(8.5,10)+dot(12,10)+dot(15.5,10)),
 ("ThreadIcon", '<circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5v7M8.5 6h7a3 3 0 0 1 0 6h-7" />'),
 ("Reaction", '<circle cx="12" cy="12" r="9" /><path d="M9 10h.01M15 10h.01M8.5 14a4 4 0 0 0 7 0" />'),
 ("ThumbsUpAlt", '<path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3Z" /><path d="M7 11l4-7a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2.3l-1 6A2 2 0 0 1 18 20H7" />'),
 ("ThumbsDownAlt", '<path d="M7 13V4H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3Z" /><path d="M7 13l4 7a2 2 0 0 0 2-2v-3h5a2 2 0 0 0 2-2.3l-1-6A2 2 0 0 0 18 4H7" />'),
 ("PhoneCall2", PHONE + '<path d="M14 4a4 4 0 0 1 3 3M14 8a1.5 1.5 0 0 1 1.2 1.2" />'),
 ("SlackHash", '<path d="M9 3v12a3 3 0 0 1-6 0 3 3 0 0 1 3-3h12a3 3 0 0 1 0 6 3 3 0 0 1-3-3V3a3 3 0 0 0-6 0Z" />'),
 ("DiscordHash", '<path d="M5 6h14M5 12h14M10 4 8 16M16 4l-2 12" />'),
 ("ThreadReply", '<path d="M8 5 3 10l5 5M3 10h10a6 6 0 0 1 6 6v3" />'),
 ("PinMessage", BUBBLE + '<path d="M12 7v3M10.5 10h3l-.5 1.5h-2L10.5 10Z" />'),
 ("UnpinMessage", BUBBLE + '<path d="M10 8h4M11 8v2M13 8v2M10.5 10h3" /><path d="m6 6 12 12" />'),
 ("MuteConversation", BUBBLE + '<path d="m8 8 8 5M8 13l8-5" />'),
 ("ArchiveChat", '<path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3H4V7Z" /><path d="M5 10v6a2 2 0 0 0 2 2h5l4 3v-3h0a2 2 0 0 0 2-2v-6M10 13h4" />'),
 ("MarkRead", BUBBLE + check(12,10,3)),
 ("MarkUnread", BUBBLE + dot(12,10) + '<circle cx="18" cy="6" r="2.5" />'),
 ("StarMessage", BUBBLE + '<path d="m12 7 1.2 2.4 2.6.3-1.9 1.8.5 2.6L12 13.6 9.6 15l.5-2.6-1.9-1.8 2.6-.3L12 7Z" />'),
 ("FlagMessage", BUBBLE + '<path d="M10 7v6M10 7h4l-1 1.5 1 1.5h-4" />'),
 ("TranslateMessage", BUBBLE + '<path d="M7 8h5M9.5 8c0 2-1 4-2.5 4M8 9.5c.5 1.5 2 2.5 3.5 2.5M13 13l2-4 2 4M13.5 12h3" />'),
 ("ScheduleSend", '<path d="m21 3-9 9M21 3 14 20l-2-8-8-2 17-7Z" /><circle cx="6" cy="18" r="3" /><path d="M6 16.5v1.5l1 .7" />'),
 ("DraftMessage", BUBBLE + '<path d="M9 11h6M9 8h3M14 8l2-2 1.5 1.5L15.5 9.5Z" />'),
 ("TypingIndicator", BUBBLE + dot(8.5,10)+dot(12,10)+dot(15.5,10)),
 ("ReadReceipt", '<path d="m3 12 4 4 7-9M11 16l2 2 8-10" />'),
 ("DeliveredCheck", '<path d="m4 12 5 5L20 6" />'),
 ("EmojiPicker", '<circle cx="12" cy="12" r="9" /><path d="M8.5 10h.01M15.5 10h.01M8.5 14a4 4 0 0 0 7 0" />'),
 ("GifIcon", '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="M9 10.5H7.5a1.5 1.5 0 0 0 0 4H9v-1.5M12 9.5v5M15 9.5v5M15 9.5h2.5M15 12h2" />'),
 ("StickerIcon", '<path d="M5 4h10l5 5v9a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" /><path d="M14 19v-3a2 2 0 0 1 2-2h4" />'),
 ("VoiceMessage", '<rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />'),
 ("ScreenShare2", '<rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4M12 12V7M9.5 9.5 12 7l2.5 2.5" />'),
 ("RaiseHand", '<path d="M8 11V6a1.5 1.5 0 0 1 3 0v4M11 9V5a1.5 1.5 0 0 1 3 0v5M14 8.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6 5 5 0 0 1-4-2l-3-4a1.5 1.5 0 0 1 2.2-2L8 14" />'),
 ("LeaveCall", PHONE + '<path d="m2 4 18 16" />'),
 ("JoinCall", PHONE + plus(18,6,2)),
]
FILES["comms"] = ("Communication / Social", comms)

print("Part 1 (devops, files_dev, comms) ready in memory.")
# write part 1 now; remaining parts appended in next script
for fn,(hc,items) in FILES.items():
    p,c = emit(fn, hc, items)
    print(f"  wrote {p}: {c} icons")
PY = None
