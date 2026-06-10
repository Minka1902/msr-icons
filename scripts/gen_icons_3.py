#!/usr/bin/env python3
HEADER = "import { BaseIcon } from './BaseIcon';\n\n"
def emit(filename, header_comment, items):
    out = [HEADER, f"// {header_comment}\n"]
    for name, kids in items:
        out.append(
            f"export function {name}({{ fillColor = '#000', isColored = true, ...rest }}) {{\n"
            f"    return (\n"
            f"        <BaseIcon fillColor={{fillColor}} isColored={{isColored}} {{...rest}}>\n"
            f"            {kids}\n"
            f"        </BaseIcon>\n    );\n}}\n\n")
    path = f"src/icons/dev_{filename}.jsx"
    open(path, "w").write("".join(out))
    return path, len(items)

def plus(cx, cy, s=2.4):   return f'<path d="M{cx} {cy-s}v{2*s}M{cx-s} {cy}h{2*s}" />'
def xmark(cx, cy, s=2.2):  return f'<path d="M{cx-s} {cy-s} {cx+s} {cy+s}M{cx+s} {cy-s} {cx-s} {cy+s}" />'
def check(cx, cy, s=2.4):  return f'<path d="m{cx-s} {cy} {round(cx-s*0.2,1)} {round(cy+s,1)} {cx+s} {round(cy-s,1)}" />'
def dot(cx, cy):           return f'<path d="M{cx} {cy}h.01" />'

SHIELD  = '<path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />'
LOCKBODY= '<rect x="5" y="11" width="14" height="9" rx="2" />'
CAL     = '<rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M8 3v4M16 3v4" />'
CLOCK   = '<circle cx="12" cy="13" r="8" /><path d="M12 9v4l3 2M12 5V3M9 3h6" />'
FILES = {}

# ============================ SECURITY ============================
security = [
 ("LockOpen2", LOCKBODY + '<path d="M8 11V8a4 4 0 0 1 7.5-2" /><path d="M12 15v2" />'),
 ("LockClosed", LOCKBODY + '<path d="M8 11V8a4 4 0 0 1 8 0v3" /><path d="M12 15v2" />'),
 ("Unlock2", LOCKBODY + '<path d="M8 11V8a4 4 0 0 1 7.5-2" />'),
 ("KeyRound2", '<circle cx="8" cy="8" r="4" /><path d="m11 11 8 8-2 2-2-2 1-1-2-2 1-1" />'),
 ("KeyholeIcon", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="2" /><path d="m11 11.5-1 4h4l-1-4" />'),
 ("ShieldLock", SHIELD + '<rect x="9.5" y="11.5" width="5" height="4" rx="0.5" /><path d="M10.5 11.5v-1a1.5 1.5 0 0 1 3 0v1" />'),
 ("ShieldKey", SHIELD + '<circle cx="11" cy="11" r="1.5" /><path d="m12 12 2.5 2.5M14 14l1-1" />'),
 ("ShieldUser", SHIELD + '<circle cx="12" cy="10" r="1.8" /><path d="M9.5 15a2.5 2.5 0 0 1 5 0" />'),
 ("Fingerprint2", '<path d="M12 4a8 8 0 0 1 8 8M4 13a8 8 0 0 1 8-8 6 6 0 0 1 6 6v2M8 12a4 4 0 0 1 8 0v3a3 3 0 0 1-1 2M12 12v4M7 17v-4M16 17a8 8 0 0 1-1 3" />'),
 ("FaceId", '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" /><path d="M9 10v1M15 10v1M12 10v3h-1M10 15a3 3 0 0 0 4 0" />'),
 ("Scan2", '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M3 12h18" />'),
 ("ScanFace", '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" /><path d="M9 10v1M15 10v1M10 15a3 3 0 0 0 4 0" />'),
 ("Encryption", LOCKBODY + '<path d="M8 11V8a4 4 0 0 1 8 0v3" /><path d="M10 15.5h.01M12 15.5h.01M14 15.5h.01" />'),
 ("Decryption", LOCKBODY + '<path d="M8 11V8a4 4 0 0 1 7.5-2" /><path d="M9.5 15.5h5" />'),
 ("Password2", '<rect x="3" y="8" width="18" height="9" rx="2" /><path d="M8 12.5v1M8 12.5l-1 .6M8 12.5l1 .6M12 12.5v1M12 12.5l-1 .6M12 12.5l1 .6M16 12.5v1M16 12.5l-1 .6M16 12.5l1 .6" />'),
 ("Otp", '<rect x="3" y="6" width="3.5" height="5" rx="0.7" /><rect x="7.5" y="6" width="3.5" height="5" rx="0.7" /><rect x="12" y="6" width="3.5" height="5" rx="0.7" /><rect x="16.5" y="6" width="3.5" height="5" rx="0.7" /><path d="M5 16h14" />'),
 ("SecurityCamera", '<path d="M3 7 18 4l1 4-15 3-1-4Z" /><path d="M5 11v3a2 2 0 0 0 2 2h4M11 16v4M8 20h6M18.5 8l3-1" />'),
 ("Incognito", '<path d="M4 11h16M7 11l1.5-4h7L17 11" /><circle cx="7.5" cy="15" r="3" /><circle cx="16.5" cy="15" r="3" /><path d="M10.5 15a1.5 1.5 0 0 1 3 0" />'),
 ("PrivacyMask", '<path d="M3 9c2-1.5 6-1.5 6 1.5 0 2-2 3-4 2.5M21 9c-2-1.5-6-1.5-6 1.5 0 2 2 3 4 2.5" /><path d="M9 11h6M3 9c0 5 3 8 9 8s9-3 9-8" />'),
 ("Token2", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" />'),
 ("Certificate2", '<rect x="3" y="4" width="18" height="13" rx="2" /><path d="M7 8h10M7 12h5" /><circle cx="16" cy="16" r="3" /><path d="m14.5 18.5-.5 3 2-1 2 1-.5-3" />'),
 ("Signature2", '<path d="M3 17c2-1 3-4 2-5s-2 2-1 4 3-1 4-4 1 3 3 3 2-3 3-3" /><path d="M3 21h18" />'),
 ("Authentication", '<circle cx="9" cy="9" r="4" /><path d="m12 12 8 8M17 17l2-2M19.5 14.5 21 16" />' + check(9,9,1.8)),
 ("Authorization", SHIELD + check(12,11,2.6)),
 ("Captcha", '<rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 14 9 9l2 5M7.7 12.5h2.6M14 9v5M14 9c1.5 0 1.5 2.5 0 2.5M17 9v5" stroke-dasharray="1 1" />'),
 ("Honeypot", '<path d="M5 8h14l-1 4H6L5 8Z" /><path d="M6 12h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6Z" /><path d="M8 8V6a4 4 0 0 1 8 0v2M9 15h6" />'),
 ("ZeroTrust", SHIELD + xmark(12,11,2.4)),
 ("ThreatIcon", '<path d="M12 3 2 20h20L12 3Z" /><path d="M12 9v5M12 17h.01" />'),
 ("VulnerabilityIcon", SHIELD + '<path d="M12 8v4M12 15h.01" />'),
 ("PatchIcon", SHIELD + plus(12,11,2.4)),
 ("AuditLog", '<rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h5" /><circle cx="15" cy="15" r="3" /><path d="m17 17 1.5 1.5" />'),
 ("ComplianceIcon", '<path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M14 3v4h4" />' + check(12,13,2.6)),
 ("GdprIcon", SHIELD + '<path d="M12 8.5a3 3 0 1 0 3 3h-3v-3Z" />'),
 ("ConsentIcon", '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m7 12 2 2 4-4" /><path d="M16 11h2M16 14h2" />'),
 ("DataBreach", '<path d="M4 6c0-1.4 3.6-2.5 8-2.5s8 1.1 8 2.5-3.6 2.5-8 2.5-8-1.1-8-2.5Z" /><path d="M4 6v12c0 1.4 3.6 2.5 8 2.5M20 6v5" /><path d="m16 14 5 5M21 14l-5 5" />'),
 ("MalwareIcon", '<circle cx="12" cy="12" r="5" /><path d="M12 7V4M9 8 7 6M15 8l2-2M7 12H3M21 12h-4M9 16l-2 2M15 16l2 2M12 17v3" />' + xmark(12,12,1.6)),
 ("PhishingIcon", '<path d="M4 4v6a8 8 0 0 0 8 8c3 0 4 1.5 4 3" /><path d="M14 13a3 3 0 1 0 3-3M17 9v1.5h-1.5" /><path d="M2 4h4" />'),
 ("RansomwareIcon", LOCKBODY + '<path d="M8 11V8a4 4 0 0 1 8 0v3" /><path d="M10.5 14.5 12 16l1.5-1.5M12 16v-2.5" /><path d="M21 4 18 7" />'),
 ("DdosIcon", '<circle cx="12" cy="12" r="2.5" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M18.4 5.6l-2 2M7.6 16.4l-2 2" />'),
 ("PenTest", '<path d="m14 3 7 7-3 1-3-3 1-3-2-2Z" /><path d="m12 6-9 9 1 4 4-1 9-9" /><path d="M11 9 7 13" />'),
 ("SecurityScan", SHIELD + '<path d="M8 12h8" /><path d="M8 9.5h8" stroke-dasharray="1.5 1.5" />'),
 ("KeyRotation", '<circle cx="12" cy="12" r="3" /><path d="m14 12 5 0M17 12l-2-2M17 12l-2 2" /><path d="M12 4a8 8 0 0 1 7 4M12 20a8 8 0 0 1-7-4M12 4l-2.5 1M12 4l-1 2.5" />'),
 ("SecretVault", '<rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="12" cy="12" r="4" /><path d="M12 12v-2M12 12l1.7 1M16 5v3M16 16v3" />'),
 ("ApiKey", '<circle cx="7" cy="12" r="3.5" /><path d="M10.5 12H21M18 12v3M21 12v3M14 12v2" />'),
 ("AccessToken", '<rect x="3" y="7" width="18" height="10" rx="2" /><circle cx="8" cy="12" r="2" /><path d="M12 12h7M16 12v2" />'),
 ("RefreshToken", '<rect x="3" y="7" width="18" height="10" rx="2" /><path d="M8 10a3 3 0 0 0-1 4M11 14a3 3 0 0 0 1-4M7 9v2h2M12 15v-2h-2" />'),
 ("SessionIcon", '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18" /><path d="M7 14a3 3 0 0 1 5 0M9.5 12.5h.01" />'),
 ("CookieIcon", '<path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-4-4 1 1 0 0 0-1-1Z" /><path d="M9 11h.01M13 14h.01M16 11h.01M8 15h.01" />'),
 ("SameSite", '<rect x="3" y="6" width="8" height="8" rx="1.5" /><rect x="13" y="10" width="8" height="8" rx="1.5" /><path d="M11 10h2" />'),
 ("CorsIcon", '<circle cx="7" cy="12" r="4" /><circle cx="17" cy="12" r="4" /><path d="M11 12h2" /><path d="m13 10 2 2-2 2" />'),
 ("RateGuard", SHIELD + '<path d="M12 8v4l2.5 1.5" />'),
 ("WafIcon", SHIELD + '<path d="M9 9h6M9 12h6M9 15h6" />'),
 ("SandboxIcon", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 8h18" stroke-dasharray="2 2" /><rect x="8" y="11" width="8" height="6" rx="1" />'),
 ("QuarantineIcon", '<circle cx="12" cy="12" r="9" /><path d="M12 5 7 18M12 5l5 13M7.5 14h9" />'),
]
FILES["security"] = ("Security / Privacy", security)

# ============================ TOOLS ============================
GEAR = '<circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3" />'
WRENCH = '<path d="M15 7a4 4 0 0 0-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5l-2.5 2.5-2-2L15 7Z" />'
RESTART = '<path d="M4 12a8 8 0 1 1 2.3 5.6" /><path d="M3 20v-4h4" />'
tools = [
 ("Settings2", GEAR),
 ("Settings3", '<path d="m9 3 1 2.5 2.7-.7.9 2.6 2.7.5-.5 2.7 2 1.9-1.5 2.3 1.5 2.3-2 1.9.5 2.7-2.7.5-.9 2.6L10 21l-1-2.5" /><circle cx="11" cy="12" r="3" />'),
 ("Sliders2", '<path d="M4 7h8M16 7h4M4 17h4M12 17h8" /><circle cx="14" cy="7" r="2" /><circle cx="8" cy="17" r="2" />'),
 ("Wrench2", WRENCH),
 ("Hammer2", '<path d="M14 4 9 9l2 2 5-5-2-2Z" /><path d="m11 11-7 7 2 2 7-7M15 5l4 4" />'),
 ("Screwdriver2", '<path d="m14 3 4 4-3 3-1-1-7 7v3h3l7-7-1-1 3-3-4-4Z" />'),
 ("Toolbox", '<rect x="3" y="8" width="18" height="11" rx="2" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18M9 13v2M15 13v2" />'),
 ("Gear2", GEAR),
 ("GearPair", '<circle cx="9" cy="9" r="2.2" /><path d="M9 5v1.5M9 11.5V13M5 9h1.5M11.5 9H13M6.4 6.4l1 1M11.6 11.6l-1-1M11.6 6.4l-1 1M6.4 11.6l1-1" /><circle cx="16" cy="16" r="1.8" /><path d="M16 13v1M16 18v1M13 16h1M18 16h1" />'),
 ("Cog2", GEAR),
 ("Tune", '<path d="M4 7h10M18 7h2M4 12h2M10 12h10M4 17h7M15 17h5" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="12" r="2" /><circle cx="13" cy="17" r="2" />'),
 ("Adjust", '<circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18Z" />'),
 ("Calibrate", '<path d="M3 16a9 9 0 0 1 18 0" /><path d="M12 16 16 9" /><circle cx="12" cy="16" r="1" /><path d="M6 16h.01M12 8v.01M18 16h.01" />'),
 ("Maintenance", WRENCH + '<path d="M19 19l2 2" />'),
 ("Build2", '<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />'),
 ("Construct", '<path d="M2 20h20M5 20V9l4-2M5 9l4 4M14 20v-8l5-3v11" /><path d="M9 7v13" />'),
 ("Power2", '<path d="M12 3v9" /><path d="M7 6a8 8 0 1 0 10 0" />'),
 ("PowerOff", '<path d="M12 3v6" /><path d="M8 7a7 7 0 1 0 8 0" /><path d="m4 4 16 16" />'),
 ("Restart2", RESTART),
 ("Reboot", '<path d="M12 3v5M12 3 9 6M12 3l3 3" /><path d="M6 8a8 8 0 1 0 12 0" />'),
 ("Reset2", '<path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 4v4h4" />'),
 ("Sync2", '<path d="M4 11a8 8 0 0 1 14-5l2 2M20 13a8 8 0 0 1-14 5l-2-2" /><path d="M20 4v4h-4M4 20v-4h4" />'),
 ("Refresh3", '<path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" />'),
 ("Update2", '<path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /><path d="M12 8v4l3 2" />'),
 ("Upgrade", '<path d="M12 21V8M8 12l4-4 4 4" /><path d="M6 4h12" />'),
 ("Install2", '<path d="M12 3v11M8 10l4 4 4-4" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />'),
 ("Uninstall", '<path d="M12 14V3M8 7l4-4 4 4" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />'),
 ("Plugin2", '<path d="M9 3v4M15 3v4M7 7h10v4a5 5 0 0 1-10 0V7Z" /><path d="M12 16v5" />'),
 ("Extension2", '<path d="M8 4a2 2 0 0 1 4 0h4v4a2 2 0 0 1 0 4v4h-4a2 2 0 0 1-4 0H4v-4a2 2 0 0 0 0-4V4h4Z" />'),
 ("Addon", '<rect x="4" y="4" width="16" height="16" rx="2" />' + plus(12,12,3)),
 ("Integration", '<circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="M9 6h4a4 4 0 0 1 4 4v5M8 9v4a4 4 0 0 0 4 4h3" />'),
 ("Automation", GEAR.replace('r="3.2"','r="3"') + '<path d="M12 12 21 3" />'),
]
FILES["tools"] = ("Tools / Settings / Misc", tools)

# ============================ TIME ============================
time = [
 ("CalendarDays", CAL + '<path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" />'),
 ("CalendarCheck2", CAL + check(12,15,2.4)),
 ("CalendarX2", CAL + xmark(12,15,2.2)),
 ("CalendarPlus2", CAL + plus(12,15,2.4)),
 ("CalendarMinus2", CAL + '<path d="M9 15h6" />'),
 ("CalendarClock", '<rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M8 3v4M16 3v4" /><circle cx="16" cy="16" r="4" /><path d="M16 14.5V16l1 .8" />'),
 ("CalendarHeart", CAL + '<path d="M12 18s-2.5-1.5-2.5-3.2a1.3 1.3 0 0 1 2.5-.6 1.3 1.3 0 0 1 2.5.6c0 1.7-2.5 3.2-2.5 3.2Z" />'),
 ("CalendarRange", CAL + '<path d="M7 13h4M13 17h4" />'),
 ("CalendarEvent", CAL + '<rect x="8" y="13" width="8" height="5" rx="1" />'),
 ("Clock2", '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />'),
 ("ClockAlert", '<circle cx="11" cy="12" r="8" /><path d="M11 8v4l3 1.5" /><path d="M19 8v4M19 16h.01" />'),
 ("Stopwatch2", '<circle cx="12" cy="14" r="7" /><path d="M12 14v-3M9 3h6M12 3v4M18 9l1.5-1.5M5 9 3.5 7.5" />'),
 ("Timer2", '<circle cx="12" cy="14" r="7" /><path d="M12 14V9M9 2h6M19 9l-1.5 1.5" />'),
 ("Hourglass2", '<path d="M6 3h12M6 21h12M7 3c0 5 4 6 5 9 1-3 5-4 5-9M7 21c0-5 4-6 5-9 1 3 5 4 5 9" />'),
 ("Alarm2", '<circle cx="12" cy="13" r="7" /><path d="M12 13V9M5 3 2.5 5.5M19 3l2.5 2.5M5 19l-2 2M19 19l2 2" />'),
 ("AlarmPlus", '<circle cx="12" cy="13" r="7" /><path d="M5 3 2.5 5.5M19 3l2.5 2.5" />' + plus(12,13,2.4)),
 ("Schedule", '<rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4M7 13h4M7 17h7" />'),
 ("Deadline", '<circle cx="12" cy="13" r="7" /><path d="M12 13V9M12 4V2M9 4h6M18 19l2 2" /><path d="m16 11 2-2" />'),
 ("Reminder", '<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path d="M10 19a2 2 0 0 0 4 0" /><circle cx="18" cy="5" r="2.5" />'),
 ("Duration", '<circle cx="6" cy="12" r="3" /><circle cx="18" cy="12" r="3" /><path d="M9 12h6" stroke-dasharray="2 2" /><path d="M6 12V9M18 12V9" />'),
 ("Countdown", '<circle cx="12" cy="12" r="9" /><path d="M12 12V7" /><path d="M12 3a9 9 0 0 1 6.4 15.4" stroke-dasharray="3 3" />'),
 ("History2", '<path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 4v4h4M12 8v4l3 2" />'),
 ("TimeMachine", '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" /><path d="M12 3a9 9 0 0 1 0 18" stroke-dasharray="3 3" /><path d="m7 5-1 3 3 1" />'),
 ("Snooze", '<circle cx="12" cy="14" r="7" /><path d="M9 3h6M12 14v-3" /><path d="M10 11h3l-3 4h3" />'),
]
FILES["time"] = ("Time / Calendar / Scheduling", time)

# ============================ MAPS ============================
PIN = '<path d="M12 21c4-5 7-8 7-11a7 7 0 0 0-14 0c0 3 3 6 7 11Z" />'
maps = [
 ("MapPin", PIN + '<circle cx="12" cy="10" r="2.5" />'),
 ("MapPin2", PIN + dot(12,10)),
 ("MapPinned", PIN + '<circle cx="12" cy="10" r="2.5" /><path d="M5 17c-1.5.7-2.5 1.7-2.5 2.8C2.5 21 6.8 22 12 22s9.5-1 9.5-2.2c0-1.1-1-2.1-2.5-2.8" />'),
 ("MapTrifold", '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" /><path d="M9 4v14M15 6v14" />'),
 ("Navigation3", '<path d="M3 11 21 4l-7 18-2.5-7.5L3 11Z" />'),
 ("NavigationOff", '<path d="M9 5 21 4l-7 18-2.5-7.5" /><path d="m3 3 18 18" />'),
 ("Route2", '<circle cx="6" cy="19" r="2.5" /><circle cx="18" cy="5" r="2.5" /><path d="M8.5 19H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h5.5" />'),
 ("Pin2", '<path d="M12 17v5M9 3h6l-1 4 2.5 2.5a1 1 0 0 1-.7 1.7H7.2a1 1 0 0 1-.7-1.7L9 7l1-4Z" />'),
 ("Flag2", '<path d="M6 21V4M6 4h11l-2 3.5 2 3.5H6" />'),
 ("FlagCheckered", '<path d="M6 21V4M6 4h13v8H6" /><path d="M6 4h3.25v2H12.5v2H9.25v2H6M12.5 4h3.25v2H19v2h-3.25v2H12.5" />'),
 ("Milestone", '<path d="M12 3v3M12 18v3M5 6h12l3 3-3 3H5V6Z" />'),
 ("Crosshair2", '<circle cx="12" cy="12" r="8" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /><circle cx="12" cy="12" r="2" />'),
 ("Target2", '<circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" />'),
 ("GeoFence", '<path d="M5 8a2 2 0 1 0 0-.01M19 8a2 2 0 1 0 0-.01M5 18a2 2 0 1 0 0-.01M19 18a2 2 0 1 0 0-.01" /><path d="M7 7h10M7 18h10M5 9.5v6.5M19 9.5V16" stroke-dasharray="2 2" />'),
 ("Coordinates", '<circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3v18" /><circle cx="12" cy="12" r="2" />'),
 ("Altitude", '<path d="M3 20h18M5 20l5-9 3 4 2-3 4 8" /><path d="M9 7h2v2M9 7l3 3" />'),
 ("Distance2", '<path d="M4 7v10M20 7v10M4 12h16" /><path d="m7 9-3 3 3 3M17 9l3 3-3 3" />'),
 ("Layers2", '<path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5M3 16l9 5 9-5" />'),
 ("Satellite2", '<path d="m6 6 3-3 3 3-3 3-3-3Z" /><path d="m9 9 3 3M12 12l3-3 3 3-3 3-3-3Z" /><path d="M11 14a4 4 0 0 1-4 4M14 11a7 7 0 0 1-7 7" />'),
 ("StreetView", '<circle cx="12" cy="6" r="2.5" /><path d="M9 13a3 3 0 0 1 6 0v3h-2v5h-2v-5H9v-3Z" /><path d="M4 18a9 9 0 0 0 16 0" stroke-dasharray="2 2" />'),
 ("Airport", '<path d="M12 3c1 0 1.5 1 1.5 3v4l7 4v2l-7-2v4l2 1.5v1.5L12 24l-3-1.5V21l2-1.5v-4l-7 2v-2l7-4V6c0-2 .5-3 1-3Z" />'),
 ("TrainStation", '<rect x="6" y="4" width="12" height="12" rx="2" /><path d="M6 11h12M9 16l-2 4M15 16l2 4M9.5 8h.01M14.5 8h.01" />'),
 ("BusStop", '<rect x="6" y="5" width="11" height="11" rx="2" /><path d="M6 11h11M8 16v2M15 16v2M19 4v16" /><circle cx="8.5" cy="8" r="0.5" />'),
 ("Harbor", '<circle cx="12" cy="5" r="2" /><path d="M12 7v13M8 10h8M6 14a6 6 0 0 0 12 0M6 14H4M18 14h2" />'),
]
FILES["maps"] = ("Maps / Location / Travel", maps)

# ============================ DEVICES ============================
CHIP = '<rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />'
devices = [
 ("Cpu2", CHIP + '<rect x="10" y="10" width="4" height="4" rx="0.5" />'),
 ("Gpu", '<rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="8" cy="12" r="2.5" /><circle cx="15" cy="12" r="2.5" /><path d="M5 17v3M19 17v3" />'),
 ("Memory2", '<rect x="2" y="8" width="20" height="8" rx="1" /><path d="M6 8V6M10 8V6M14 8V6M18 8V6M5 16v2M9 16v2M15 16v2M19 16v2" />'),
 ("Motherboard", '<rect x="3" y="3" width="18" height="18" rx="2" /><rect x="6" y="6" width="6" height="6" rx="0.5" /><path d="M15 7h3M15 10h3M7 15h10M9 15v3M13 15v3" />'),
 ("Chip2", CHIP),
 ("Microchip", '<rect x="6" y="6" width="12" height="12" rx="1.5" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /><path d="M9 9h6v6H9z" />'),
 ("CircuitBoard", '<rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h4v4M11 11h6M14 7v4M7 14v3M7 17h7v-3" /><circle cx="7" cy="7" r="1" /><circle cx="17" cy="11" r="1" /><circle cx="14" cy="14" r="1" />'),
 ("HardDrive2", '<rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 14h18" /><circle cx="17" cy="16" r="0.5" /><path d="M6 16h6" />'),
 ("SsdDrive", '<rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 10h8M8 13h5" /><circle cx="16" cy="16" r="2" />'),
 ("UsbDrive", '<rect x="7" y="9" width="10" height="12" rx="1.5" /><path d="M9 9V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5M10 13h4M10 16h4" />'),
 ("SdCard", '<path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M9 3v3M11.5 3v3M14 3v3" />'),
 ("Router2", '<rect x="3" y="13" width="18" height="6" rx="2" /><path d="M7 16h.01M11 16h6M9 13l3-4M15 13l-1.5-2" /><path d="M16 7a4 4 0 0 0-8 0" stroke-dasharray="1.5 1.5" />'),
 ("Modem", '<rect x="3" y="11" width="18" height="8" rx="2" /><path d="M7 15h.01M11 15h.01M15 15h2M8 11V8M16 11V8M6 5h12" />'),
 ("NetworkSwitch", '<rect x="2" y="8" width="20" height="8" rx="1.5" /><path d="M6 16v2M6 8V6M10 16v2M10 8V6M14 16v2M14 8V6M18 16v2M18 8V6" /><circle cx="6" cy="12" r="0.5" /><circle cx="18" cy="12" r="0.5" />'),
 ("Antenna2", '<path d="M12 8v13M8 21h8" /><path d="M8 8a4 4 0 0 1 8 0M5.5 8a6.5 6.5 0 0 1 13 0" /><circle cx="12" cy="8" r="1.5" />'),
 ("SatelliteDish2", '<path d="M5 19a11 11 0 0 1 11-11" /><path d="M4 14a7 7 0 0 1 4-1.5M19 5a3 3 0 0 0-4 0l5 5a3 3 0 0 0 0-4l-1-1Z" /><circle cx="5" cy="19" r="2" />'),
 ("Webcam2", '<circle cx="12" cy="10" r="6" /><circle cx="12" cy="10" r="2" /><path d="M7 20h10M9 16l-1 4M15 16l1 4" />'),
 ("Scanner2", '<rect x="3" y="9" width="18" height="6" rx="1.5" /><path d="M3 12h18M6 6h12M7 18h10" />'),
 ("Printer3", '<rect x="6" y="3" width="12" height="6" rx="1" /><path d="M6 18H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1" /><rect x="7" y="15" width="10" height="6" rx="1" /><path d="M17 13h.01" />'),
 ("Projector2", '<rect x="2" y="8" width="20" height="9" rx="2" /><circle cx="9" cy="12.5" r="3" /><path d="M16 11h2M6 17v2M18 17v2" />'),
 ("Monitor3", '<rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" />'),
 ("DualMonitor", '<rect x="2" y="5" width="9" height="7" rx="1" /><rect x="13" y="5" width="9" height="7" rx="1" /><path d="M6 12v2M17 12v2M4 16h6M14 16h6" />'),
 ("LaptopCode", '<path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9H4V6Z" /><path d="M2 18h20M9 9 7.5 11 9 13M15 9l1.5 2L15 13" />'),
 ("Keyboard3", '<rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M18 12h.01M8 15h8" />'),
 ("Mouse3", '<rect x="7" y="3" width="10" height="18" rx="5" /><path d="M12 7v3" />'),
 ("Trackpad", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M12 14v2M3 14h18" />'),
 ("Gamepad3", '<rect x="2" y="8" width="20" height="9" rx="4.5" /><path d="M7 11v3M5.5 12.5h3M15 12h.01M18 13h.01M16 15h.01" />'),
 ("Joystick2", '<circle cx="12" cy="6" r="2.5" /><path d="M12 8.5v6" /><path d="M6 21a6 6 0 0 1 12 0H6Z" /><rect x="9" y="14" width="6" height="3" rx="1" />'),
 ("VrHeadset", '<rect x="2" y="8" width="20" height="9" rx="3" /><path d="M8 17a3 3 0 0 1 4-3 3 3 0 0 1 4 3M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />'),
 ("Smartwatch2", '<rect x="7" y="7" width="10" height="10" rx="3" /><path d="M9 7 9.5 3h5L15 7M9 17l.5 4h5l.5-4" /><path d="M12 10v2l1.5 1" />'),
 ("Earbuds", '<path d="M8 4a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V9M16 4a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V9" /><path d="M8 16v4M16 16v4" />'),
 ("Speaker3", '<rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="14" r="4" /><circle cx="12" cy="7" r="1.5" />'),
 ("Battery2", '<rect x="2" y="8" width="17" height="8" rx="2" /><path d="M21 11v2" />'),
 ("BatteryCharging2", '<rect x="2" y="8" width="17" height="8" rx="2" /><path d="M21 11v2" /><path d="M11 9.5 8.5 12.5h3L9 15.5" />'),
 ("BatteryLow2", '<rect x="2" y="8" width="17" height="8" rx="2" /><path d="M21 11v2M5 11v2" />'),
 ("BatteryFull2", '<rect x="2" y="8" width="17" height="8" rx="2" /><path d="M21 11v2M5 11v2M9 11v2M13 11v2" />'),
 ("PlugIcon", '<path d="M9 2v6M15 2v6M7 8h10v2a5 5 0 0 1-10 0V8Z" /><path d="M12 15v7" />'),
 ("SocketIcon", '<circle cx="12" cy="12" r="9" /><path d="M9 10v2M15 10v2M11 16h2" />'),
 ("PowerCable", '<path d="M5 3v5h4V3" /><path d="M7 8v3a3 3 0 0 0 3 3h2a3 3 0 0 1 3 3v3" /><circle cx="17" cy="20" r="2" />'),
]
FILES["devices"] = ("Devices / Hardware", devices)

for fn,(hc,items) in FILES.items():
    p,c = emit(fn, hc, items)
    print(f"  wrote {p}: {c} icons")
