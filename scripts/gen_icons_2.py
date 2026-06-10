#!/usr/bin/env python3
import os
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
def minus(cx, cy, s=2.4):  return f'<path d="M{cx-s} {cy}h{2*s}" />'
def xmark(cx, cy, s=2.2):  return f'<path d="M{cx-s} {cy-s} {cx+s} {cy+s}M{cx+s} {cy-s} {cx-s} {cy+s}" />'
def check(cx, cy, s=2.4):  return f'<path d="m{cx-s} {cy} {round(cx-s*0.2,1)} {round(cy+s,1)} {cx+s} {round(cy-s,1)}" />'
def dot(cx, cy):           return f'<path d="M{cx} {cy}h.01" />'

PERSON  = '<circle cx="12" cy="8" r="3.5" /><path d="M5.5 20a6.5 6.5 0 0 1 13 0" />'
HEAD_SH = '<circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" />'
star = lambda cx,cy,r=2.4: f'<path d="m{cx} {round(cy-r,1)} {round(cx+r*0.4,1)} {round(cy-r*0.2,1)} {round(cx+r,1)} {round(cy-r*0.1,1)} {round(cx+r*0.5,1)} {round(cy+r*0.4,1)} {round(cx+r*0.6,1)} {round(cy+r,1)} {cx} {round(cy+r*0.6,1)} {round(cx-r*0.6,1)} {round(cy+r,1)} {round(cx-r*0.5,1)} {round(cy+r*0.4,1)} {round(cx-r,1)} {round(cy-r*0.1,1)} {round(cx-r*0.4,1)} {round(cy-r*0.2,1)}Z" />'
heart = lambda cx,cy,s=2.2: f'<path d="M{cx} {round(cy+s,1)}s{-s*1.6} {-s*0.9} {-s*1.6} {-s*2.1}a{s*0.8} {s*0.8} 0 0 1 {s*1.6} {-s*0.5} {s*0.8} {s*0.8} 0 0 1 {s*1.6} {s*0.5}c0 {s*1.2} {-s*1.6} {s*2.1} {-s*1.6} {s*2.1}Z" />'

FILES = {}

# ============================ USERS ============================
users = [
 ("UserCheck", HEAD_SH + check(18,17,2)),
 ("UserX2", HEAD_SH + xmark(18,17,1.8)),
 ("UserPlus2", HEAD_SH + plus(18,17,2)),
 ("UserMinus2", HEAD_SH + minus(18,17,2)),
 ("UserCog", HEAD_SH + '<circle cx="18" cy="17" r="1.6" /><path d="M18 14.8v-.6M18 19.2v.6M20 17h.6M15.4 17H16" />'),
 ("UserLock", HEAD_SH + '<rect x="15" y="16" width="6" height="4.5" rx="0.5" /><path d="M16.2 16v-1a1.8 1.8 0 0 1 3.6 0v1" />'),
 ("UserSearch", HEAD_SH + '<circle cx="17.5" cy="16.5" r="2.5" /><path d="m19.5 18.5 1.5 1.5" />'),
 ("UserStar", HEAD_SH + star(18,17,2.2)),
 ("UserHeart", HEAD_SH + heart(18,16.5,1.6)),
 ("UserCircle2", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6.5 18.5a6 6 0 0 1 11 0" />'),
 ("UserSquare", '<rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="12" cy="10" r="3" /><path d="M6.5 18.5a6 6 0 0 1 11 0" />'),
 ("UserGroup2", '<circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><circle cx="17" cy="9" r="2.3" /><path d="M16 13.5a5 5 0 0 1 4.5 5" />'),
 ("TeamIcon", '<circle cx="6" cy="9" r="2.3" /><circle cx="18" cy="9" r="2.3" /><circle cx="12" cy="7" r="2.6" /><path d="M2.5 19a4 4 0 0 1 7-2M14.5 17a4 4 0 0 1 7 2M8 18a5 5 0 0 1 8 0" />'),
 ("ProfileCard", '<rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8" cy="11" r="2.2" /><path d="M5 16a3 3 0 0 1 6 0M14 10h4M14 13h3" />'),
 ("Avatar2", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6.5 18.5a6 6 0 0 1 11 0" />'),
 ("Contact2", '<rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="10" r="2.6" /><path d="M8 17a4 4 0 0 1 8 0M2 8h2M2 12h2M2 16h2" />'),
 ("ContactBook", '<rect x="5" y="3" width="15" height="18" rx="2" /><path d="M5 8H3M5 12H3M5 16H3" /><circle cx="12" cy="10" r="2.3" /><path d="M9 16a3 3 0 0 1 6 0" />'),
 ("Identity", '<rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8" cy="11" r="2.2" /><path d="M5 16a3 3 0 0 1 6 0M14 9h4M14 12h4M14 15h2" />'),
 ("Persona", '<circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0M9 7a3 3 0 0 0 6 0" />'),
 ("Account2", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6.5 18.5a6 6 0 0 1 11 0" />'),
 ("Organization", '<rect x="9" y="13" width="6" height="8" rx="1" /><rect x="4" y="3" width="16" height="10" rx="1.5" /><path d="M8 7h2M14 7h2M8 10h2M14 10h2" />'),
 ("Department", '<rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="8.5" y="14" width="7" height="7" rx="1" /><path d="M6.5 10v2h11v-2M12 12v2" />'),
 ("Role", PERSON + '<path d="M18 6l1.2 2.4 2.6.3-1.9 1.8.5 2.6L18 14l-2.9 1.6.5-2.6-1.9-1.8 2.6-.3L18 6Z" />'),
 ("Permission2", HEAD_SH + check(18,16,2.2)),
 ("UserBlock", HEAD_SH + '<circle cx="18" cy="17" r="3" /><path d="m16 15 4 4" />'),
 ("UserShield", HEAD_SH + '<path d="M18 13.5 15 15v2c0 1.4 1.3 2.5 3 3 1.7-.5 3-1.6 3-3v-2l-3-1.5Z" />'),
 ("UserVoice", PERSON + '<path d="M19 9a3 3 0 0 1 0 6M21.5 7a6 6 0 0 1 0 10" />'),
 ("UserClock", HEAD_SH + '<circle cx="18" cy="17" r="3" /><path d="M18 15.5V17l1 .8" />'),
 ("UserEdit", HEAD_SH + '<path d="M15 20h1.5l4-4-1.5-1.5-4 4V20Z" />'),
 ("Followers", '<circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 9l2 2 4-4" />'),
 ("Following", '<circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 11h6M19 8l3 3-3 3" />'),
]
FILES["users"] = ("Users / People / Account", users)

# ============================ MEDIA ============================
CIRC = '<circle cx="12" cy="12" r="9" />'
media = [
 ("PlayCircle2", CIRC + '<path d="M10 8.5 16 12l-6 3.5v-7Z" />'),
 ("PauseCircle2", CIRC + '<path d="M10 9v6M14 9v6" />'),
 ("StopCircle2", CIRC + '<rect x="9" y="9" width="6" height="6" rx="1" />'),
 ("SkipForward2", '<path d="M5 6l9 6-9 6V6Z" /><path d="M19 5v14" />'),
 ("SkipBackward", '<path d="M19 6l-9 6 9 6V6Z" /><path d="M5 5v14" />'),
 ("FastForward2", '<path d="M3 6l8 6-8 6V6Z" /><path d="M13 6l8 6-8 6V6Z" />'),
 ("Rewind2", '<path d="M21 6l-8 6 8 6V6Z" /><path d="M11 6l-8 6 8 6V6Z" />'),
 ("Repeat2", '<path d="M3 11V9a3 3 0 0 1 3-3h12l-3-3M21 13v2a3 3 0 0 1-3 3H6l3 3" />'),
 ("RepeatOne", '<path d="M3 11V9a3 3 0 0 1 3-3h12l-3-3M21 13v2a3 3 0 0 1-3 3H6l3 3" /><path d="M11.5 11.5 12 11v3" />'),
 ("ShuffleAlt", '<path d="M3 7h3l4 5M3 17h3l11-13h4M21 4l-4 0M21 4v4M14 12l3 4h4M21 20l-4 0M21 20v-4" />'),
 ("VolumeHigh2", '<path d="M4 9v6h3l5 4V5L7 9H4Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8 8 0 0 1 0 12" />'),
 ("VolumeLow2", '<path d="M4 9v6h3l5 4V5L7 9H4Z" /><path d="M15.5 9.5a4 4 0 0 1 0 5" />'),
 ("VolumeMute2", '<path d="M4 9v6h3l5 4V5L7 9H4Z" />'),
 ("VolumeX2", '<path d="M4 9v6h3l5 4V5L7 9H4Z" /><path d="m16 9 5 6M21 9l-5 6" />'),
 ("Playlist2", '<path d="M3 6h12M3 12h12M3 18h7" /><path d="M16 18V9l5-2v9" /><circle cx="14" cy="18" r="2" /><circle cx="19" cy="16" r="2" />'),
 ("Album2", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2" />'),
 ("Track", '<path d="M9 18V5l11-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" />'),
 ("Headphones2", '<path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="7" rx="1.5" /><rect x="17" y="13" width="4" height="7" rx="1.5" />'),
 ("MicrophoneOff", '<path d="M9 9V6a3 3 0 0 1 5-2.2M15 9v0M5 11a7 7 0 0 0 10.5 6M12 18v3M8 21h8" /><path d="m4 4 16 16" />'),
 ("Podcast2", '<circle cx="12" cy="9" r="3" /><path d="M7 9a5 5 0 0 1 10 0M5 9a7 7 0 0 1 14 0" /><path d="M10.5 14h3l-.5 7h-2l-.5-7Z" />'),
 ("Radio2", '<rect x="3" y="8" width="18" height="12" rx="2" /><path d="M7 4 17 8" /><circle cx="8" cy="14" r="3" /><path d="M15 12h3M15 16h3" />'),
 ("Cassette", '<rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="12" r="2" /><circle cx="15.5" cy="12" r="2" /><path d="M7 19l1.5-3h7L17 19" />'),
 ("Soundwave", '<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" />'),
 ("WaveformIcon", '<path d="M3 12h2l2-5 3 12 3-16 3 14 2-5h3" />'),
 ("ClosedCaption", '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="M10 10.5a2.5 2.5 0 1 0 0 3M17 10.5a2.5 2.5 0 1 0 0 3" />'),
 ("Fullscreen", '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />'),
 ("ExitFullscreen", '<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />'),
 ("Live", '<circle cx="12" cy="12" r="2.5" /><path d="M8 8a5.5 5.5 0 0 0 0 8M16 8a5.5 5.5 0 0 1 0 8M5 5a9.5 9.5 0 0 0 0 14M19 5a9.5 9.5 0 0 1 0 14" />'),
 ("RecordIcon", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />'),
]
FILES["media"] = ("Media / Player", media)

# ============================ LAYOUT ============================
layout = [
 ("LayoutGrid", '<rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />'),
 ("LayoutList", '<rect x="3" y="4" width="18" height="4" rx="1" /><rect x="3" y="10" width="18" height="4" rx="1" /><rect x="3" y="16" width="18" height="4" rx="1" />'),
 ("LayoutColumns", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M15 4v16" />'),
 ("LayoutRows", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9.5h18M3 15h18" />'),
 ("LayoutSidebar", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16" />'),
 ("LayoutSidebarRight", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M15 4v16" />'),
 ("LayoutHeader", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" />'),
 ("LayoutFooter", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 15h18" />'),
 ("LayoutDashboard2", '<rect x="3" y="3" width="8" height="9" rx="1" /><rect x="13" y="3" width="8" height="5" rx="1" /><rect x="13" y="10" width="8" height="11" rx="1" /><rect x="3" y="14" width="8" height="7" rx="1" />'),
 ("LayoutKanban", '<rect x="3" y="4" width="5" height="16" rx="1" /><rect x="9.5" y="4" width="5" height="11" rx="1" /><rect x="16" y="4" width="5" height="14" rx="1" />'),
 ("LayoutMasonry", '<rect x="3" y="3" width="8" height="7" rx="1" /><rect x="3" y="12" width="8" height="9" rx="1" /><rect x="13" y="3" width="8" height="10" rx="1" /><rect x="13" y="15" width="8" height="6" rx="1" />'),
 ("Sidebar2", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M5 8h2M5 11h2" />'),
 ("PanelLeft", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16" />'),
 ("PanelRight", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M15 4v16" />'),
 ("PanelTop", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" />'),
 ("PanelBottom", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 15h18" />'),
 ("SplitHorizontal", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 12h18M12 9v6" />'),
 ("SplitVertical", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M12 4v16M9 12h6" />'),
 ("Columns2", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M12 4v16" />'),
 ("Rows2", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 12h18" />'),
 ("GridDots", dot(6,6)+dot(12,6)+dot(18,6)+dot(6,12)+dot(12,12)+dot(18,12)+dot(6,18)+dot(12,18)+dot(18,18)),
 ("GridPlus", '<rect x="3" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />' + plus(17.5,6.5,2.5)),
 ("Table2", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9.5h18M3 15h18M9 9.5V20M15 9.5V20" />'),
 ("TableColumns", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M15 4v16" />'),
 ("TableRows", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9.5h18M3 15h18" />'),
 ("TableCells", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9.5h18M3 15h18M9 4v16M15 4v16" />'),
 ("Card2", '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M6 13h6" />'),
 ("Cards", '<rect x="6" y="3" width="14" height="18" rx="2" /><path d="M3 6v13a2 2 0 0 0 2 2h11" />'),
 ("Carousel", '<rect x="7" y="6" width="10" height="12" rx="2" /><path d="M4 8v8M20 8v8" />'),
 ("Tabs2", '<path d="M3 8h6V4h6v4h6" /><rect x="3" y="8" width="18" height="12" rx="1.5" />'),
 ("Popover", '<rect x="4" y="4" width="16" height="11" rx="2" /><path d="M9 15l3 4 3-4" />'),
 ("Tooltip2", '<rect x="3" y="5" width="18" height="9" rx="2" /><path d="M9 14l3 4 3-4" />'),
 ("Slider2", '<path d="M3 12h18" /><circle cx="9" cy="12" r="3" />'),
 ("ToggleOn", '<rect x="2" y="7" width="20" height="10" rx="5" /><circle cx="16" cy="12" r="3" />'),
 ("ToggleOff", '<rect x="2" y="7" width="20" height="10" rx="5" /><circle cx="8" cy="12" r="3" />'),
 ("Checkbox2", '<rect x="4" y="4" width="16" height="16" rx="3" />' + check(12,12,3)),
 ("RadioButton", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" />'),
 ("Dropdown2", '<rect x="3" y="6" width="18" height="6" rx="1.5" /><path d="m8 9 2 2 2-2" /><path d="M5 15h14M5 18h10" />'),
 ("ColorPicker2", '<path d="m13 4 7 7-9 9H4v-7l9-9Z" /><path d="m11 6 7 7" /><circle cx="6.5" cy="17.5" r="0.6" />'),
 ("GradientIcon", '<rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 12l16-8M4 18l16-8M4 20l14-7" />'),
 ("OpacityIcon", '<path d="M12 3 6 9a8.5 8.5 0 1 0 12 0l-6-6Z" /><path d="M12 9v9a4.5 4.5 0 0 0 4.2-3" />'),
 ("ContrastIcon", '<circle cx="12" cy="12" r="9" /><path d="M12 3v18a9 9 0 0 0 0-18Z" />'),
 ("SaturationIcon", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4" />'),
 ("HueIcon", '<circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18M12 7a5 5 0 0 0 0 10" />'),
 ("EyedropperAlt", '<path d="m16 3 5 5-2 2-1-1-7 7-3 1-1 3-2-2 3-1 1-3 7-7-1-1 2-2Z" />'),
 ("PaintBucket2", '<path d="m5 11 7-7 7 7-7 7a2 2 0 0 1-3 0l-4-4a2 2 0 0 1 0-3Z" /><path d="M9 5 7 3M19 16s2 2 2 3.3A2 2 0 0 1 19 21a2 2 0 0 1-2-1.7c0-1.3 2-3.3 2-3.3Z" />'),
]
FILES["layout"] = ("Layout / UI", layout)

# ============================ TEXT ============================
text = [
 ("Heading1", '<path d="M4 5v14M12 5v14M4 12h8" /><path d="M16 9l2.5-1.5V19M16 19h5" />'),
 ("Heading2", '<path d="M4 5v14M12 5v14M4 12h8" /><path d="M16 9a2 2 0 1 1 4 0c0 1.5-4 3.5-4 6h4" />'),
 ("Heading3", '<path d="M4 5v14M12 5v14M4 12h8" /><path d="M16 8.5a2 2 0 1 1 3.5 1.5A2 2 0 1 1 16 17" />'),
 ("ParagraphIcon", '<path d="M13 4v16M17 4v16M13 4h-3a4 4 0 0 0 0 8h3" />'),
 ("TextSize", '<path d="M4 7V5h12v2M10 5v14M7 19h6" /><path d="M16 11v-1.5h6V11M19 9.5V19M17 19h4" />'),
 ("TextBold", '<path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z" />'),
 ("TextItalic", '<path d="M11 5h7M6 19h7M14 5l-4 14" />'),
 ("Highlighter2", '<path d="m9 14 7-7 4 4-7 7H9v-4Z" /><path d="M9 18H5l2-3M16 7l1-3" />'),
 ("ListOrdered", '<path d="M9 6h12M9 12h12M9 18h12" /><path d="M4 5l1.5-.5V9M3.5 9h2M3.5 15.5a1 1 0 1 1 1.8.6L3.5 18h2.2" />'),
 ("ListUnordered", '<path d="M9 6h12M9 12h12M9 18h12" /><circle cx="4.5" cy="6" r="0.8" /><circle cx="4.5" cy="12" r="0.8" /><circle cx="4.5" cy="18" r="0.8" />'),
 ("ListCheck", '<path d="M10 6h11M10 12h11M10 18h11" /><path d="m3 6 1.2 1.2L7 4.5M3 12l1.2 1.2L7 10.5M3 18l1.2 1.2L7 16.5" />'),
 ("ListTodo", '<rect x="3" y="4" width="5" height="5" rx="1" /><rect x="3" y="15" width="5" height="5" rx="1" /><path d="M11 6.5h10M11 17.5h10" /><path d="m4 6 1 1 1.5-1.7" />'),
 ("Quote2", '<path d="M7 7H4v5a4 4 0 0 0 3 3.8M17 7h-3v5a4 4 0 0 0 3 3.8" />'),
 ("Blockquote", '<path d="M4 5v14" /><path d="M9 8h11M9 12h11M9 16h7" />'),
 ("LineSpacing", '<path d="M3 6l3-3 3 3M3 18l3 3 3-3M6 3v18" /><path d="M13 6h8M13 12h8M13 18h8" />'),
 ("LetterSpacing", '<path d="M3 4v16M21 4v16" /><path d="M7 16 10 7l3 9M8 13.5h4" />'),
 ("Code2", '<path d="m8 6-5 6 5 6M16 6l5 6-5 6" />'),
 ("InlineCode", '<rect x="3" y="6" width="18" height="12" rx="2" /><path d="m9 10-2 2 2 2M15 10l2 2-2 2" />'),
 ("TextWrap", '<path d="M3 6h18M3 12h13a3 3 0 0 1 0 6h-3M3 18h4" /><path d="m9 15-3 3 3 3" />'),
 ("TextAlignJustify", '<path d="M4 6h16M4 10h16M4 14h16M4 18h16" />'),
 ("TextNoWrap", '<path d="M3 6h18M3 12h18M3 18h18" /><path d="m17 9 3 3-3 3" />'),
 ("SpellCheck", '<path d="M5 16 8 7l3 9M6 13h4" /><path d="M13 16h3.5a2 2 0 0 0 0-4H13v8M16.5 21l2 2 4-4" />'),
 ("WordCount", '<path d="M4 7h16M4 12h16M4 17h10" /><circle cx="18" cy="18" r="3" /><path d="m20 20 1.5 1.5" />'),
 ("TextCursor2", '<path d="M9 4a3 3 0 0 0-3 3M9 20a3 3 0 0 1-3-3M15 4a3 3 0 0 1 3 3M15 20a3 3 0 0 0 3-3M6 12h12M12 4v16" />'),
 ("TypeIcon", '<path d="M4 7V5h16v2M12 5v14M9 19h6" />'),
 ("FontSize", '<path d="M3 7V5h10v2M8 5v14M5 19h6" /><path d="M14 13v-1.5h7V13M17.5 11.5V19M15 19h5" />'),
 ("FontFamily", '<path d="M5 18 9 6l4 12M6.5 14h5" /><path d="M16 9c2 0 3 1 3 3v6M19 12c-3 0-4 1-4 2.5S16 17 17.5 17 19 16 19 14.5" />'),
]
FILES["text"] = ("Text / Editor formatting", text)

# ============================ DATA ============================
AX = '<path d="M4 4v16h16" />'
data = [
 ("ChartBar2", AX + '<path d="M8 18v-5M12 18V9M16 18v-7" />'),
 ("ChartLine2", AX + '<path d="m6 15 4-4 3 2 5-6" />'),
 ("ChartPie2", '<path d="M12 3a9 9 0 1 0 9 9h-9V3Z" /><path d="M14 3.5A8 8 0 0 1 20.5 10H14V3.5Z" />'),
 ("ChartArea2", AX + '<path d="M6 16 9 12l3 2 5-6v8H6v-2Z" />'),
 ("ChartScatter", AX + dot(8,14)+dot(11,9)+dot(14,15)+dot(16,8)+dot(10,16)+dot(17,12)),
 ("ChartBubble", AX + '<circle cx="9" cy="13" r="2" /><circle cx="15" cy="9" r="2.6" /><circle cx="16" cy="16" r="1.4" />'),
 ("ChartCandlestick", AX + '<path d="M8 7v3M8 16v3M16 6v2M16 15v3" /><rect x="6.5" y="10" width="3" height="6" rx="0.5" /><rect x="14.5" y="8" width="3" height="7" rx="0.5" />'),
 ("ChartRadar", '<path d="M12 3 21 10l-3.5 10h-11L3 10 12 3Z" /><path d="m12 8 4 3-1.5 4.5h-5L8 11l4-3Z" />'),
 ("ChartDonut", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3a9 9 0 0 1 7 14.5" />'),
 ("ChartGantt", '<path d="M4 4v16h16" /><path d="M7 7h6M9 11h7M7 15h5" />'),
 ("Histogram", AX + '<path d="M7 18v-3M10 18v-7M13 18V8M16 18v-5M19 18v-9" />'),
 ("Analytics", AX + '<path d="m6 16 3-4 3 2 5-7" /><circle cx="9" cy="12" r="1" /><circle cx="17" cy="7" r="1" />'),
 ("Dashboard3", '<circle cx="12" cy="13" r="8" /><path d="M12 13l4-3M4 13h2M18 13h2M12 5v2" />'),
 ("Kpi", '<circle cx="12" cy="12" r="9" /><path d="M8 14l2.5-3 2 1.5L16 9" /><path d="M16 9v2.5M16 9h-2.5" />'),
 ("Funnel2", '<path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" />'),
 ("DataTable", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11M15 9v11M3 14.5h18" />'),
 ("PivotTable", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 4v16" /><path d="m13 13 2 2 2-2M15 12v4" />'),
 ("Spreadsheet2", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M3 14.5h18M8 4v16M13.5 4v16" />'),
 ("Report2", '<path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M14 3v4h4" /><path d="M9 17v-3M12 17v-5M15 17v-2" />'),
 ("Insight", '<path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 1 4 10.5c-.6.5-1 1.3-1 2.5H9c0-1.2-.4-2-1-2.5A6 6 0 0 1 12 3Z" />'),
 ("Trend2", AX + '<path d="m6 16 4-4 3 2 5-6M14 8h4v4" />'),
 ("Forecast", AX + '<path d="m6 15 3-3 3 2" /><path d="M15 11l5-4" stroke-dasharray="2 2" /><path d="M12 14h.01M15 12h.01M18 10h.01" />'),
 ("Segment", '<circle cx="12" cy="12" r="9" /><path d="M12 12 12 3M12 12l7.8 4.5M12 12 4.2 16.5" />'),
 ("Dimension", '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" /><path d="m3 7.5 9 4.5 9-4.5M12 12v9" />'),
 ("Measure", '<path d="M3 8h18v8H3z" /><path d="M7 8v3M11 8v4M15 8v3M19 8v4" />'),
 ("Aggregate", '<path d="M5 5h12l-5 7 5 7H5l5-7-5-7Z" />'),
 ("Filter3", '<path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" />'),
 ("SortAsc", '<path d="M7 4v16M7 4 4 7M7 4l3 3" /><path d="M12 6h9M12 11h6M12 16h3" />'),
 ("SortDesc", '<path d="M7 4v16M7 20l-3-3M7 20l3-3" /><path d="M12 6h3M12 11h6M12 16h9" />'),
 ("GroupBy", '<path d="M4 5h16M4 9h16" /><rect x="6" y="13" width="12" height="7" rx="1.5" /><path d="M9 13v7M15 13v7" />'),
 ("RealtimeData", '<path d="M3 12h3l2-5 3 10 2-6 2 2h6" /><circle cx="20" cy="6" r="1.5" />'),
 ("BatchJob", '<rect x="3" y="4" width="7" height="7" rx="1" /><rect x="14" y="4" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />'),
 ("StreamData", '<path d="M3 8c3 0 3 2 6 2s3-2 6-2 3 2 6 2M3 14c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />'),
 ("DataPipeline", '<circle cx="5" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><rect x="14" y="9" width="7" height="6" rx="1.5" /><path d="M7 6h4a3 3 0 0 1 3 3M7 18h4a3 3 0 0 0 3-3" />'),
 ("DataLake", '<path d="M4 14c2-2 3 0 5 0s3-2 5 0 3 0 5-1" /><path d="M4 18c2-2 3 0 5 0s3-2 5 0 3 0 5-1" /><ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v4M19 6v4" />'),
 ("DataWarehouse", '<path d="M3 9 12 4l9 5v11H3V9Z" /><path d="M3 9h18M8 20v-6h8v6" />'),
 ("EtlIcon", '<rect x="3" y="9" width="5" height="6" rx="1" /><rect x="16" y="9" width="5" height="6" rx="1" /><path d="M8 12h8M13 9l3 3-3 3" />'),
 ("SchemaIcon", '<rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v4M12 12H6v4M12 12h6v4" />'),
 ("PrimaryKey", '<circle cx="8" cy="8" r="3.5" /><path d="m10.5 10.5 8 8M16 16l2-2M18.5 13.5 21 16" /><path d="M8 5.5v.01" />'),
 ("ForeignKey", '<circle cx="8" cy="16" r="3" /><path d="m10 14 9-9M17 5h2v2" />'),
 ("IndexIcon", '<rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h5M4 7h.01M4 11h.01M4 15h.01" />'),
 ("QueryIcon", '<ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v8c0 1.4 3 2.5 7 2.5M5 10c0 1.4 3 2.5 7 2.5" /><circle cx="17" cy="17" r="3" /><path d="m19 19 2 2" />'),
 ("JoinTables", '<circle cx="9" cy="12" r="6" /><circle cx="15" cy="12" r="6" />'),
 ("NormalizeData", '<path d="M4 18h16M4 18 4 6M8 18v-4M12 18V8M16 18v-7M20 18V5" /><path d="M4 11h16" stroke-dasharray="2 2" />'),
 ("DenormalizeData", '<rect x="3" y="4" width="8" height="16" rx="1.5" /><path d="M13 8h8M13 12h8M13 16h8" />'),
 ("DataMigration", '<rect x="3" y="6" width="6" height="12" rx="1.5" /><rect x="15" y="6" width="6" height="12" rx="1.5" /><path d="M9 12h6M12 9l3 3-3 3" />'),
 ("DataExport2", '<ellipse cx="9" cy="6" rx="6" ry="2.3" /><path d="M3 6v8c0 1.3 2.7 2.3 6 2.3M3 10c0 1.3 2.7 2.3 6 2.3" /><path d="M13 14h8M18 11l3 3-3 3" />'),
 ("DataImport2", '<ellipse cx="15" cy="6" rx="6" ry="2.3" /><path d="M9 6v8c0 1.3 2.7 2.3 6 2.3M9 10c0 1.3 2.7 2.3 6 2.3" /><path d="M3 14h8M6 11l-3 3 3 3" />'),
 ("DataSync2", '<ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v6M19 6v6" /><path d="M7 16a3 3 0 0 1 5-1.2M17 18a3 3 0 0 1-5 1.2M11.5 13.5 12 14.8l1.3-.4M12.5 20l-.5-1.3-1.3.4" />'),
 ("DataClean", '<ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v8c0 1.3 2.5 2.3 6 2.5" /><path d="m16 14 5 5M21 14l-5 5" />'),
 ("Anonymize", '<circle cx="12" cy="9" r="4" /><path d="M5 20a7 7 0 0 1 14 0" /><path d="M9 9h6" stroke-dasharray="1.5 1.5" />'),
 ("DataMask", '<path d="M3 9c2-1 5-1 5 1.5S6 13 4 12M21 9c-2-1-5-1-5 1.5s2 2.5 4 1.5" /><path d="M8 11h8M3 9v3a8 8 0 0 0 18 0V9" />'),
 ("RowIcon", '<rect x="3" y="9" width="18" height="6" rx="1.5" />'),
 ("ColumnIcon", '<rect x="9" y="3" width="6" height="18" rx="1.5" />'),
 ("CellIcon", '<rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 9h18M3 15h18M9 4v16M15 4v16" /><rect x="9" y="9" width="6" height="6" />'),
 ("DataPoint", '<circle cx="12" cy="12" r="3" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4" />'),
 ("Outlier", dot(7,16)+dot(10,13)+dot(12,15)+dot(9,17)+ '<circle cx="17" cy="7" r="2" />'),
 ("Correlation", AX + '<path d="m5 17 13-9" stroke-dasharray="2 2" />' + dot(7,15)+dot(10,12)+dot(13,11)+dot(16,8)),
 ("Regression", AX + dot(6,16)+dot(9,15)+dot(11,12)+dot(14,11)+dot(17,8)+'<path d="M5 17 19 7" />'),
 ("Classification", '<circle cx="8" cy="9" r="2" /><circle cx="8" cy="15" r="2" /><circle cx="16" cy="9" r="2" /><path d="M12 6v12" stroke-dasharray="2 2" /><path d="m14 14 2 2 3-4" />'),
]
FILES["data"] = ("Data / Analytics / Charts", data)

for fn,(hc,items) in FILES.items():
    p,c = emit(fn, hc, items)
    print(f"  wrote {p}: {c} icons")
