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
FILES = {}

# ============================ SCIENCE ============================
science = [
 ("Atom2", '<circle cx="12" cy="12" r="1.5" /><ellipse cx="12" cy="12" rx="9" ry="3.5" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />'),
 ("Molecule", '<circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="8" r="2.5" /><circle cx="9" cy="18" r="2.5" /><circle cx="17" cy="17" r="2" /><path d="M8 7.5 16 7.5M7.5 8l1 7.5M11 17.5l4.5-.5M16 9l1 6" />'),
 ("Dna2", '<path d="M7 3c0 5 10 7 10 12M17 3c0 5-10 7-10 12M7 18c0 1 0 2 0 3M17 18c0 1 0 2 0 3" /><path d="M8.5 6h7M9.5 9h5M9.5 12h5M8.5 15h7" />'),
 ("Telescope2", '<path d="m3 16 6-2 9-9 2 2-7 8-2 6-2-1-1-2-2-1Z" /><path d="m9 14 1 2M11 21l1-3" />'),
 ("Magnet2", '<path d="M6 3v8a6 6 0 0 0 12 0V3M6 3h4v8a2 2 0 0 0 4 0V3h4" /><path d="M6 6h4M14 6h4" />'),
 ("Flask2", '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M7.5 15h9" />'),
 ("TestTube2", '<path d="M15 3 6 12a3 3 0 0 0 4.5 4L19.5 7M14 4l4 4M9 12h5" />'),
 ("Beaker2", '<path d="M8 3v5l-3 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-3-9V3M7 3h10M6.5 15h11" />'),
 ("Radiation", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2" /><path d="M12 10V4a8 8 0 0 0-4 7l5.5.5M12 12l4.5 6.5A8 8 0 0 0 20 11l-5.5.5M12 12l-4.5 6.5A8 8 0 0 1 4 11" />'),
 ("Biohazard", '<circle cx="12" cy="12" r="2.5" /><path d="M12 9.5C12 6 9 4 9 4a6 6 0 0 0 1.5 7M14 13.5c3 1.5 6 0 6 0a6 6 0 0 0-6-3.5M10 13.5c-3 1.5-6 0-6 0a6 6 0 0 1 6-3.5M12 14.5V21" />'),
 ("Recycle2", '<path d="M7 9 4 14l2 4h4M17 9l3 5-2 4h-4M12 3 9 8h6l-3-5Z" /><path d="m4 14 2-1M20 14l-2-1M10 22l1-2M14 22l-1-2" />'),
 ("EcoLeaf", '<path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14Z" /><path d="M5 19c4-6 8-9 12-10" />'),
 ("WaterDrop2", '<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" /><path d="M9 14a3 3 0 0 0 3 3" />'),
 ("FlameAlt", '<path d="M12 3c1 3 4 4 4 8a4 4 0 0 1-8 0c0-1 .3-1.8 1-2.5C9.5 10 12 7 12 3Z" /><path d="M11 17a2 2 0 0 0 3-1.7" />'),
 ("Snowflake2", '<path d="M12 2v20M4 7l16 10M20 7 4 17M12 5l-2.5-2M12 5l2.5-2M12 19l-2.5 2M12 19l2.5 2M5 9 3 8.5M5 9l-.5-2.2M19 15l2 .5M19 15l.5 2.2" />'),
 ("Thermometer3", '<path d="M12 14V4a2 2 0 0 0-4 0v10a4 4 0 1 0 4 0Z" /><path d="M10 14V8" /><circle cx="10" cy="17.5" r="1.3" />'),
 ("TreeAlt", '<path d="M12 3 7 10h3l-4 6h12l-4-6h3l-5-7Z" /><path d="M12 16v5M9 21h6" />'),
 ("Cactus2", '<path d="M10 21v-4M10 17V6a2 2 0 0 1 4 0v11M10 11H8a2 2 0 0 1-2-2V8M14 13h2a2 2 0 0 0 2-2v-1" /><path d="M8 21h8" />'),
 ("Mushroom2", '<path d="M4 11a8 8 0 0 1 16 0H4Z" /><path d="M10 11v6a2 2 0 0 0 4 0v-6" /><path d="M9 8h.01M13 9h.01M15 7h.01" />'),
 ("Feather2", '<path d="M20 4a7 7 0 0 0-10 0L4 10v4l-2 6 6-2h4l6-6a7 7 0 0 0 2-8Z" /><path d="M16 8 8 16M14 8h-3M16 11v-3" />'),
]
FILES["science"] = ("Nature / Science", science)

# ============================ TRANSPORT ============================
CARBODY = '<path d="M5 11l1.5-4a2 2 0 0 1 1.9-1.3h7.2A2 2 0 0 1 17.5 7L19 11" /><path d="M3 11h18v5h-2M5 16H3v-5M7 16h10" /><circle cx="7" cy="17" r="1.8" /><circle cx="17" cy="17" r="1.8" />'
transport = [
 ("CarAlt", CARBODY),
 ("CarSide", '<path d="M3 13l2-5a2 2 0 0 1 1.8-1.2h6l4 3.2 4 1a1 1 0 0 1 1 1V16h-2M3 16v-3h18M5 16h12" /><circle cx="7" cy="17" r="1.8" /><circle cx="16" cy="17" r="1.8" />'),
 ("Taxi2", CARBODY + '<path d="M9 5V3h6v2" />'),
 ("Bus2", '<rect x="4" y="4" width="16" height="13" rx="2" /><path d="M4 11h16M8 17v2M16 17v2M4 8h16" /><circle cx="8" cy="14" r="0.5" /><circle cx="16" cy="14" r="0.5" />'),
 ("TruckAlt", '<path d="M2 6h11v11H2zM13 9h4l4 4v4h-8" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" />'),
 ("Van2", '<path d="M2 7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v9H2V7Z" /><path d="M15 9h3l3 3.5V16h-6V9Z" /><circle cx="6" cy="17" r="1.8" /><circle cx="17" cy="17" r="1.8" />'),
 ("Motorcycle2", '<circle cx="5" cy="16" r="3" /><circle cx="19" cy="16" r="3" /><path d="M8 16h6l-3-5h4l2 2h2M11 11 9 8H6M14 11l3-3" />'),
 ("Scooter2", '<circle cx="6" cy="17" r="2.5" /><circle cx="18" cy="17" r="2.5" /><path d="M8.5 17h7M15.5 17 12 7h-2M10 7h2M16 7l2 8" />'),
 ("BicycleAlt", '<circle cx="6" cy="16" r="3.5" /><circle cx="18" cy="16" r="3.5" /><path d="M6 16 10 7h2M9 9h6l3 7M12 16l3-7M14 7h3" />'),
 ("Train2", '<rect x="6" y="3" width="12" height="14" rx="2" /><path d="M6 11h12M9 3v8M15 3v8M8 21l2-4M16 21l-2-4M9 14h.01M15 14h.01" />'),
 ("Tram2", '<rect x="5" y="4" width="14" height="13" rx="2" /><path d="M5 10h14M12 4V2M8 4 6 2M16 4l2-2M8 17l-2 4M16 17l2 4M9 13h.01M15 13h.01" />'),
 ("Airplane2", '<path d="M12 3c1 0 1.5 1 1.5 3v4l7 4v2l-7-2v4l2 1.5v1.5L12 24l-3-1.5V21l2-1.5v-4l-7 2v-2l7-4V6c0-2 .5-3 1-3Z" />'),
 ("Helicopter2", '<path d="M3 5h18M12 5v3M6 11h8a4 4 0 0 1 4 4v2H6a3 3 0 0 1-3-3v-3Z" /><path d="M18 14h3M12 17v3M9 20h6M14 11l4-3" />'),
 ("Rocket3", '<path d="M12 3c3 2 5 5 5 9l-2.5 2.5h-5L7 12c0-4 2-7 5-9Z" /><circle cx="12" cy="9" r="1.6" /><path d="M9.5 16.5 7 19m7.5-2.5L17 19" />'),
 ("Ship2", '<path d="M3 15h18l-2 5a2 2 0 0 1-2 1H7a2 2 0 0 1-2-1l-2-5Z" /><path d="M5 15V9h14v6M12 4v5M8 9V6h8v3" />'),
 ("Sailboat2", '<path d="M3 18h18l-2 3H5l-2-3Z" /><path d="M12 3v12M12 3 4 15h8M14 6l5 9h-5" />'),
 ("Anchor2", '<circle cx="12" cy="5" r="2" /><path d="M12 7v13M8 11H5a7 7 0 0 0 14 0h-3M8 10h8" />'),
 ("Fuel2", '<rect x="4" y="3" width="10" height="18" rx="2" /><path d="M4 9h10M14 7l3 3v6a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-6l-3-3M7 6h4" />'),
 ("ChargingStation", '<path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h13" /><path d="M7 9l-1.5 2.5h3L7 14M14 8l3 3v5a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-5l-3-3" />'),
 ("TrafficLight2", '<rect x="7" y="2" width="10" height="18" rx="3" /><circle cx="12" cy="7" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="12" cy="17" r="1.8" /><path d="M12 20v2" />'),
 ("RoadIcon", '<path d="M7 3 4 21M17 3l3 18M12 4v2M12 10v3M12 17v3" />'),
 ("Bridge2", '<path d="M3 8h18M5 8v12M19 8v12M3 14h18M9 14v6M15 14v6" /><path d="M5 8a14 14 0 0 1 14 0" />'),
 ("ParkingMeter", '<path d="M9 21h6M11 21v-4" /><rect x="7" y="3" width="10" height="9" rx="3" /><path d="M10 8h4M12 12v3" /><path d="M12 6.5h.01" />'),
]
FILES["transport_dev"] = ("Transportation", transport)

# ============================ FOOD ============================
CUP = '<path d="M5 8h12v4a6 6 0 0 1-12 0V8Z" /><path d="M17 9h2a2 2 0 0 1 0 4h-2M5 21h12" />'
food = [
 ("CoffeeAlt", CUP + '<path d="M8 3c0 1 1 1.5 1 2.5M12 3c0 1 1 1.5 1 2.5" />'),
 ("TeaCup", '<path d="M4 9h12v3a6 6 0 0 1-12 0V9Z" /><path d="M16 10h3a2 2 0 0 1 0 4h-3M10 3v3" /><path d="M3 21h14" />'),
 ("Beer2", '<path d="M6 8h9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" /><path d="M15 10h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3" /><path d="M6 8a3 3 0 0 1 .5-5 3 3 0 0 1 5 0 3 3 0 0 1 3.5 5" />'),
 ("Wine2", '<path d="M7 3h10l-1 6a4 4 0 0 1-8 0L7 3Z" /><path d="M12 13v6M9 21h6M7.5 6h9" />'),
 ("Cocktail2", '<path d="M3 4h18l-9 9-9-9Z" /><path d="M12 13v6M8 21h8M14 8l5-5" /><circle cx="19" cy="3" r="1" />'),
 ("Soda", '<path d="M7 3h10l-1 17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2L7 3Z" /><path d="M7 8h10M11 3v3" /><path d="M14 4l2-2" />'),
 ("Pizza2", '<path d="M12 3 3 19a1 1 0 0 0 1 1.4L20 14 12 3Z" /><path d="M12 3a14 14 0 0 1 8 11" /><path d="M10 10h.01M13 13h.01M8 15h.01" />'),
 ("Burger2", '<path d="M4 8a8 8 0 0 1 16 0H4Z" /><path d="M3 12h18M4 12a3 3 0 0 0 16 0" /><path d="M5 16h14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" /><path d="M8 6h.01M12 5h.01M16 6h.01" />'),
 ("Sandwich2", '<path d="M3 8 12 4l9 4-9 4-9-4Z" /><path d="M3 8v3l9 4 9-4V8M5 14l7 3 7-3" /><path d="M6 9.5l2 1M14 11l2-1" />'),
 ("Taco2", '<path d="M3 16a9 9 0 0 1 18 0H3Z" /><path d="M3 16a3 3 0 0 0 18 0" /><path d="M8 13l1-2M12 12v-2M16 13l-1-2" />'),
 ("Sushi2", '<rect x="3" y="9" width="18" height="6" rx="3" /><path d="M8 9v6M16 9v6" /><circle cx="12" cy="12" r="1.5" />'),
 ("Noodles", '<path d="M4 8h16l-1 3a8 8 0 0 1-14 0L4 8Z" /><path d="M7 8c0-3 1-5 2-5M11 8c0-3 1-5 2-5M15 8c0-3 1-5 2-5" /><path d="M3 19h18" />'),
 ("Salad2", '<path d="M4 11h16a8 8 0 0 1-16 0Z" /><path d="M12 11c-2-3-1-6 0-7 1 1 2 4 0 7ZM9 11c-2-1-3-3-3-4 1 0 4 1 4 4M15 11c2-1 3-3 3-4-1 0-4 1-4 4" />'),
 ("IceCream3", '<path d="M8 9a4 4 0 0 1 8 0" /><path d="M8 9h8l-4 12-4-12Z" /><path d="M9 13h6M10 17h4" />'),
 ("Cake2", '<path d="M4 21V11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" /><path d="M4 15c1.5 0 1.5 1.5 3 1.5s1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5M12 9V6M12 4v.01M3 21h18" />'),
 ("Donut2", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M7 7l1 1M16 6l-1 1M18 11l-1 .5M9 17l.5 1" />'),
 ("Cookie3", '<circle cx="12" cy="12" r="9" /><path d="M9 9h.01M15 8h.01M16 13h.01M9 15h.01M12 12h.01" />'),
 ("Bread2", '<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10Z" /><path d="M8 9v9M11 9v9" />'),
 ("Egg2", '<path d="M12 3c3.5 0 6 5 6 9a6 6 0 0 1-12 0c0-4 2.5-9 6-9Z" />'),
 ("Cheese2", '<path d="M3 18 12 8h9v10H3Z" /><path d="M3 18a3 3 0 0 0 18 0" /><circle cx="9" cy="14" r="1" /><circle cx="15" cy="13" r="1" />'),
 ("Apple2", '<path d="M12 7c-2-2-6-1.5-6 3.5 0 4 2.5 8 4 8s1.5-1 2-1 .5 1 2 1 4-4 4-8c0-5-4-5.5-6-3.5Z" /><path d="M12 7c0-2 1-3.5 3-3.5M12 7V5" />'),
 ("Banana2", '<path d="M4 7c0 8 6 12 14 12 0-1-1-2-3-2-6 0-9-4-9-10 0-1-2-1-2 0Z" /><path d="M15 19c2 0 3-1 3-2" />'),
 ("Carrot2", '<path d="M5 19 14 10a4 4 0 0 0-4-4L3 17l2 2Z" /><path d="M14 10c1-1 2-1 3 0M14 7c0-2 1-3 3-3M11 6c0-2 1-3 3-3M8 10l3 3" />'),
 ("ChiliPepper", '<path d="M6 18c8 0 12-5 12-11 0-1 1-1 1 0 0 8-5 14-13 14a1 1 0 0 1 0-3Z" /><path d="M18 7c0-2 1-3 3-3" />'),
 ("Utensils2", '<path d="M5 3v7a2 2 0 0 0 4 0V3M7 10v11M16 3c-1.5 0-2.5 2-2.5 4.5S15 12 16 12v9" />'),
 ("ChefHat2", '<path d="M6 13a4 4 0 0 1-1-7.8A4 4 0 0 1 12 4a4 4 0 0 1 7 1.2A4 4 0 0 1 18 13H6Z" /><path d="M6 13v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5" />'),
 ("Restaurant2", '<path d="M5 3v7a2 2 0 0 0 4 0V3M7 10v11M16 3c-1.5 0-2.5 2-2.5 4.5S15 12 16 12v9" />'),
 ("Menu3", '<rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /><circle cx="12" cy="3" r="0" />'),
]
FILES["food_dev"] = ("Food / Drink", food)

# ============================ WEATHER ============================
SUN = '<circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4" />'
CLOUDW = '<path d="M7 17a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 10 3.5 3.5 0 0 1 17 17H7Z" />'
weather = [
 ("SunDim", '<circle cx="12" cy="12" r="4" /><path d="M12 3v1M12 20v1M3 12h1M20 12h1M5.6 5.6l.7.7M17.7 17.7l.7.7M18.4 5.6l-.7.7M6.3 17.7l-.7.7" />'),
 ("SunMedium", SUN),
 ("Moon2", '<path d="M20 13A8 8 0 1 1 11 4a6 6 0 0 0 9 9Z" />'),
 ("MoonStars", '<path d="M19 13A7 7 0 1 1 11 5a5.5 5.5 0 0 0 8 8Z" /><path d="M18 4l.5 1.5L20 6l-1.5.5L18 8l-.5-1.5L16 6l1.5-.5L18 4Z" />'),
 ("CloudSun2", '<circle cx="8" cy="7" r="3" /><path d="M8 1v1M2 7h1M3.5 2.5l.7.7M12 3l.7-.7M3.5 11.5l.7-.7" /><path d="M9 19a3.5 3.5 0 0 1-.4-6.96A4.5 4.5 0 0 1 17 14a3 3 0 0 1 0 5H9Z" />'),
 ("CloudMoon2", '<path d="M15 7a4 4 0 1 1-4-4 3 3 0 0 0 4 4Z" /><path d="M8 20a3.5 3.5 0 0 1-.4-6.96A4.5 4.5 0 0 1 16 15a3 3 0 0 1 0 5H8Z" />'),
 ("CloudRain2", CLOUDW + '<path d="M8 19v2M12 19v3M16 19v2" />'),
 ("CloudSnow2", CLOUDW + '<path d="M8 20h.01M12 20h.01M16 20h.01M10 22h.01M14 22h.01" />'),
 ("CloudLightning2", CLOUDW + '<path d="M12 17 9 22h4l-2 3" />'),
 ("CloudFog2", CLOUDW + '<path d="M5 20h14M7 23h10" />'),
 ("CloudDrizzle2", CLOUDW + '<path d="M9 19v1M13 19v1M9 22v1M13 22v1M17 19v1" />'),
 ("Tornado2", '<path d="M4 5h16M6 9h12M9 13h7M11 17h4M13 21l-1-4" />'),
 ("Hurricane2", '<circle cx="12" cy="12" r="2" /><path d="M12 10c4-3 8-2 8-2-1 3-4 4-6 4M12 14c-4 3-8 2-8 2 1-3 4-4 6-4" />'),
 ("Rainbow2", '<path d="M3 18a9 9 0 0 1 18 0M6 18a6 6 0 0 1 12 0M9 18a3 3 0 0 1 6 0" />'),
 ("Umbrella2", '<path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z" /><path d="M12 12v7a2 2 0 0 0 4 0" />'),
 ("Windsock", '<path d="M5 4v16M5 5h14l-3 4 3 4H5" /><path d="M9 5v8M13 5v8" />'),
 ("Thermometer4", '<path d="M12 14V5a2 2 0 0 0-4 0v9a4 4 0 1 0 4 0Z" /><path d="M16 6h4M16 10h3M16 14h4" />'),
 ("Humidity", '<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" /><path d="M9 12h.01M15 12h.01M9 16l6-4" />'),
 ("Pressure", '<circle cx="12" cy="12" r="9" /><path d="M12 12 8 8M12 7v.01M17 12h.01M7 12h.01" />'),
 ("Uv", SUN.replace('r="4"','r="3"') + '<path d="M9 21v-2M9 19h2M14 19v2M14 19c1 0 1.5.5 1.5 1" />'),
]
FILES["weather_dev"] = ("Weather", weather)

# ============================ MEDICAL ============================
medical = [
 ("Heartbeat2", '<path d="M3 12h4l2-4 3 8 2-6 2 2h5" /><path d="M20 8.5a3 3 0 0 0-5-2.2A3 3 0 0 0 10 8.5" />'),
 ("Pulse2", '<path d="M2 12h5l2-7 4 14 2-7h7" />'),
 ("Stethoscope2", '<path d="M5 3v5a4 4 0 0 0 8 0V3M5 3H3M5 3h2M11 3h2M9 16a5 5 0 0 0 10 0v-2" /><circle cx="19" cy="11" r="2.5" /><circle cx="9" cy="14" r="1" />'),
 ("Syringe2", '<path d="m18 3 3 3M16 5l3 3M7 14l3 3M14 7 7 14l-4 1-1 4 4-1 1-4 7-7-4-4Z" /><path d="m11 8 5 5" />'),
 ("Pill2", '<rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" /><path d="m9 9 6 6" />'),
 ("Capsule2", '<rect x="4" y="9" width="16" height="6" rx="3" /><path d="M12 9v6" /><path d="M7 11h.01M9 13h.01" />'),
 ("Bandage2", '<rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" /><rect x="8" y="8" width="8" height="8" rx="2" transform="rotate(-45 12 12)" /><path d="M11 11h.01M13 13h.01M13 11h.01M11 13h.01" />'),
 ("FirstAid2", '<rect x="3" y="6" width="18" height="13" rx="2" /><path d="M9 6V4h6v2" /><path d="M12 10v5M9.5 12.5h5" />'),
 ("Ambulance2", '<path d="M2 7h11v9H2zM13 10h4l4 4v2h-8" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /><path d="M6 11v-2M5 10h2M8 4l1-2h3l1 2" />'),
 ("HospitalAlt", '<path d="M4 21V8l8-5 8 5v13" /><path d="M9 21v-5h6v5M12 7v4M10 9h4" />'),
 ("Wheelchair2", '<circle cx="12" cy="17" r="5" /><path d="M12 3a1.5 1.5 0 1 1 0 .01M12 5v6h5l2 4M9 11h3" /><path d="m17 19 2 3" />'),
 ("Tooth2", '<path d="M12 3c2 0 3 1.5 5 1.5S20 4 20 7c0 4-2 7-2.5 11-.2 1.5-2.3 1.5-2.5 0L14 14c-.2-1-1.8-1-2 0l-1 4c-.2 1.5-2.3 1.5-2.5 0C8 14 6 11 6 7c0-3 1-2.5 2.5-2.5S10 3 12 3Z" />'),
 ("Brain2", '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 1 5 3 3 0 0 0 3 3 2.5 2.5 0 0 0 2.5-2.5V5.5A1.5 1.5 0 0 0 9 4Z" /><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-1 5 3 3 0 0 1-3 3 2.5 2.5 0 0 1-2.5-2.5V5.5A1.5 1.5 0 0 1 15 4Z" />'),
 ("Lungs2", '<path d="M12 4v8M9 9c0-1 0-2-1.5-2M15 9c0-1 0-2 1.5-2" /><path d="M9 9c-2 1-4 3-4 7 0 3 1 4 2.5 4S10 19 10 17v-6a2 2 0 0 0-1-2ZM15 9c2 1 4 3 4 7 0 3-1 4-2.5 4S14 19 14 17v-6a2 2 0 0 1 1-2Z" />'),
 ("Bone2", '<path d="M7 17a2.5 2.5 0 1 1-1.8-4.2L13 5a2.5 2.5 0 1 1 4 .8 2.5 2.5 0 1 1-.8 4L8 18a2.5 2.5 0 1 1-1-1Z" />'),
 ("Virus2", '<circle cx="12" cy="12" r="5" /><path d="M12 7V3M12 21v-4M7 12H3M21 12h-4M8.5 8.5 6 6M18 18l-2.5-2.5M15.5 8.5 18 6M6 18l2.5-2.5" /><path d="M12 3v.01M12 21v-.01M3 12h.01M21 12h-.01" />'),
 ("Bacteria2", '<path d="M5 19c2-2 2-4 1-5M19 5c-2 2-2 4-1 5" /><ellipse cx="12" cy="12" rx="5" ry="3" transform="rotate(-45 12 12)" /><path d="M9 9h.01M12 12h.01M15 15h.01M10 13h.01M14 11h.01" />'),
 ("Vaccine2", '<path d="m17 3 4 4M15 5l4 4M9 11l4 4M12 8 5 15v3l-2 2M5 15l-2 3 3-2M8 12l5 5" />'),
 ("Dna3", '<path d="M8 3c0 6 8 6 8 12M16 3c0 6-8 6-8 12M8 18v3M16 18v3" /><path d="M9 6h6M9.5 9h5M9.5 12h5M9 15h6" />'),
 ("Mask2", '<path d="M4 8c2-1 5-1 8-1s6 0 8 1c0 6-3 10-8 10S4 14 4 8Z" /><path d="M4 10c-1.5 0-2-1-2-2M20 10c1.5 0 2-1 2-2M9 12a4 4 0 0 0 6 0" />'),
 ("Crutch", '<path d="M9 3h6M12 3v6M12 9 8 19M12 9l4 10M9 13h6M7 21l1.5-2M17 21l-1.5-2" />'),
]
FILES["medical_dev"] = ("Health / Medical", medical)

# ============================ EDUCATION ============================
education = [
 ("GraduationCap2", '<path d="M2 8 12 4l10 4-10 4L2 8Z" /><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M21 8.5V14" />'),
 ("Certificate3", '<rect x="3" y="4" width="18" height="13" rx="2" /><path d="M7 8h10M7 11h6" /><circle cx="16" cy="16" r="3" /><path d="m14.5 18.5-.5 3 2-1 2 1-.5-3" />'),
 ("Backpack2", '<path d="M6 8a6 6 0 0 1 12 0v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" /><path d="M9 8a3 3 0 0 1 6 0M9 13h6v4H9zM10 8V5a2 2 0 0 1 4 0v3" />'),
 ("Notebook3", '<rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v18M5 8h4M5 12h4M5 16h4M12 8h4M12 12h3" />'),
 ("Notepad2", '<rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4M12 3v4M16 3v4M8 12h8M8 16h5" />'),
 ("Ruler2", '<rect x="3" y="8" width="18" height="8" rx="1" transform="rotate(-45 12 12)" /><path d="M8 8v2M11 11v2M14 14v2M11 5v2M14 8v2M17 11v2" />'),
 ("Triangle3", '<path d="M4 19h16L4 5v14Z" /><path d="M4 13a6 6 0 0 0 6 6" />'),
 ("Compass3", '<circle cx="12" cy="12" r="9" /><path d="m16 8-2 6-6 2 2-6 6-2Z" />'),
 ("Calculator3", '<rect x="4" y="3" width="16" height="18" rx="2" /><path d="M7 7h10v3H7z" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01M16 17h.01" />'),
 ("Abacus", '<rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18" /><circle cx="7" cy="6" r="1" /><circle cx="11" cy="6" r="1" /><circle cx="9" cy="12" r="1" /><circle cx="14" cy="12" r="1" /><circle cx="8" cy="18" r="1" /><circle cx="16" cy="18" r="1" />'),
 ("Globe3", '<circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />'),
 ("Atlas2", '<path d="M5 4a2 2 0 0 1 2-2h12v18H7a2 2 0 0 0-2 2V4Z" /><circle cx="12" cy="9" r="3.5" /><path d="M8.5 9h7M12 5.5a8 8 0 0 1 0 7" />'),
 ("Dictionary", '<path d="M5 4a2 2 0 0 1 2-2h12v18H7a2 2 0 0 0-2 2V4Z" /><path d="M9 7l2 6 2-6M10 11h2M15 7v6M15 7c1.5 0 1.5 3 0 3" />'),
 ("Encyclopedia", '<rect x="3" y="3" width="5" height="18" rx="1" /><rect x="8.5" y="3" width="5" height="18" rx="1" /><path d="M19 5l3 .5-2 15.5-3-.5L19 5Z" /><path d="M5 7h.01M11 7h.01" />'),
 ("Bookmark3", '<path d="M6 3h12v18l-6-4-6 4V3Z" />'),
 ("BookOpen3", '<path d="M12 5C10 3.5 7 3.5 4 4v14c3-.5 6-.5 8 1 2-1.5 5-1.5 8-1V4c-3-.5-6-.5-8 1Z" /><path d="M12 5v15" />'),
 ("Library2", '<path d="M4 4h3v16H4zM9 4h3v16H9z" /><path d="M15 4.5 18 4l3 15.5-3 .5L15 4.5Z" />'),
 ("Lecture", '<rect x="3" y="4" width="18" height="11" rx="1.5" /><path d="M3 15h18M8 15l-1 5M16 15l1 5M11 9l3 1.5L11 12V9Z" />'),
 ("Whiteboard2", '<rect x="3" y="4" width="18" height="12" rx="2" /><path d="M12 16v4M8 20h8M7 8l2 4 2-6 2 4" />'),
 ("Presentation2", '<rect x="3" y="3" width="18" height="12" rx="1.5" /><path d="M12 15v4M8 20l4-3 4 3M7 11l2-2 2 1 3-4" />'),
 ("Easel", '<path d="M4 4h16v9H4z" /><path d="M12 13v4M7 21l5-4 5 4M9 8l2 2 4-4" />'),
 ("Microscope3", '<path d="M6 21h12M8 21l-1-4h6l-1 4" /><path d="M11 16V6a2 2 0 0 1 4 0M13 4l3 3-3 3M9 12a6 6 0 0 0 8 4" />'),
 ("Flashcard", '<rect x="4" y="6" width="16" height="12" rx="2" transform="rotate(-6 12 12)" /><path d="M9 11h6M9 14h4" />'),
]
FILES["education_dev"] = ("Education / Office", education)

# ============================ SPORTS ============================
sports = [
 ("Trophy2", '<path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" /><path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3M10 13v3M14 13v3M8 20h8M9 16h6v4H9z" />'),
 ("Medal2", '<circle cx="12" cy="15" r="6" /><path d="M9 3 7 9M15 3l2 6M12 3v4" /><path d="M12 12.5 13 14.5 15 14.5 13.5 16 14 18 12 17 10 18 10.5 16 9 14.5 11 14.5Z" />'),
 ("Award2", '<circle cx="12" cy="9" r="6" /><path d="m9 14-1 7 4-2 4 2-1-7" /><path d="M12 6v3l2 1" />'),
 ("Ribbon2", '<circle cx="12" cy="8" r="5" /><path d="m8 12-2 9 6-3 6 3-2-9" /><path d="M10 8h4" />'),
 ("Dumbbell2", '<path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />'),
 ("Barbell", '<path d="M2 10v4M4 8v8M20 8v8M22 10v4M4 12h16" /><circle cx="12" cy="12" r="0" />'),
 ("Treadmill", '<path d="M4 17a3 3 0 0 0 6 0h8M4 17h14" /><path d="M19 6v11M19 6l-3 1M11 13l1-4 4 1M9 7h.01" /><circle cx="9" cy="6" r="1.5" />'),
 ("Running2", '<circle cx="15" cy="5" r="2" /><path d="m13 8-4 3 2 3-1 5M11 11l5 1 2 3M9 11l-3 1M5 19l3-3" />'),
 ("Cycling2", '<circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><circle cx="13" cy="5" r="1.8" /><path d="m6 17 4-6 3 3 3-3M10 11l-2-3h4M13 8h3" />'),
 ("Swimming2", '<circle cx="8" cy="7" r="2" /><path d="m4 14 4-3 4 2 3-3M2 18c2 0 2-1.5 4-1.5S10 18 12 18s2-1.5 4-1.5 2 1.5 4 1.5" />'),
 ("Basketball2", '<circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3v18M5.5 5.5C8 8 8 16 5.5 18.5M18.5 5.5C16 8 16 16 18.5 18.5" />'),
 ("Football3", '<ellipse cx="12" cy="12" rx="9" ry="6" /><path d="M7 12h10M9 10v4M12 9.5v5M15 10v4" />'),
 ("Soccer2", '<circle cx="12" cy="12" r="9" /><path d="m12 8 3 2-1 3.5h-4L9 10l3-2Z" /><path d="m12 3 .5 5M3.5 9 9 10M5 18l4-2M19 18l-4-2M20.5 9 15 10" />'),
 ("Tennis2", '<circle cx="12" cy="12" r="9" /><path d="M5 5a12 12 0 0 1 0 14M19 5a12 12 0 0 0 0 14" />'),
 ("Baseball2", '<circle cx="12" cy="12" r="9" /><path d="M6 5a12 12 0 0 0 0 14M18 5a12 12 0 0 1 0 14" /><path d="M7 8l1 .5M7 16l1-.5M17 8l-1 .5M17 16l-1-.5" />'),
 ("Golf2", '<path d="M11 3v13M11 3l6 3-6 3" /><path d="M7 20a4 2 0 0 0 8 0" /><circle cx="11" cy="18" r="1" />'),
 ("Bowling2", '<circle cx="12" cy="12" r="9" /><circle cx="10" cy="8" r="1" /><circle cx="14" cy="8" r="1" /><circle cx="12" cy="11" r="1" />'),
 ("Boxing2", '<path d="M7 5h7a4 4 0 0 1 4 4v3a3 3 0 0 1-3 3h-2v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5Z" /><path d="M7 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2" />'),
 ("Skateboard2", '<ellipse cx="12" cy="9" rx="9" ry="3" /><circle cx="7" cy="15" r="2" /><circle cx="17" cy="15" r="2" /><path d="M7 12v1M17 12v1" />'),
 ("Surfboard", '<path d="M4 20C4 9 9 4 20 4 20 15 15 20 4 20Z" /><path d="M7 17c4-1 9-6 10-10" />'),
 ("Dartboard", '<circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="2" /><path d="M12 1v3M12 20v3M1 12h3M20 12h3" />'),
 ("Whistle2", '<path d="M16 9a5 5 0 1 1-5 5h-2l-6-2 6-2h7M16 9V6h3" /><circle cx="16" cy="14" r="1" />'),
 ("Stopwatch3", '<circle cx="12" cy="14" r="7" /><path d="M12 14v-3M9 3h6M12 3v4M19 9l1.5-1.5" />'),
]
FILES["sports_dev"] = ("Sports / Activity", sports)

# ============================ HOME ============================
home = [
 ("HouseAlt", '<path d="M3 11 12 3l9 8" /><path d="M5 9.5V20h14V9.5M9 20v-6h6v6" />'),
 ("Building3", '<rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />'),
 ("Apartment2", '<rect x="3" y="8" width="8" height="13" rx="1" /><rect x="11" y="3" width="10" height="18" rx="1" /><path d="M6 12h2M14 7h2M18 7h2M14 11h2M18 11h2M14 15h2M18 15h2" />'),
 ("Office2", '<rect x="3" y="3" width="18" height="18" rx="1" /><path d="M7 7h3M14 7h3M7 11h3M14 11h3M7 15h3M14 15h3M10 21v-3h4v3" />'),
 ("Factory3", '<path d="M3 21V11l5 3V11l5 3V8l3 2V5h2v16H3Z" /><path d="M7 17h2M13 17h2M18 17h.01" />'),
 ("Warehouse2", '<path d="M3 21V9l9-5 9 5v12" /><path d="M6 21v-8h12v8M6 14h12M9 21v-4M15 21v-4" />'),
 ("Hotel2", '<rect x="3" y="3" width="18" height="18" rx="1" /><path d="M7 7h2M11 7h2M15 7h2M7 11h2M11 11h2M15 11h2M9 21v-4h6v4" /><path d="M12 3v.01" />'),
 ("Cabin", '<path d="M3 21 12 5l9 16H3Z" /><path d="M7 21v-6h10M5 17h14M9 21v-4h6v4" />'),
 ("Castle2", '<path d="M4 21V8h2V5h2v3h2V5h4v3h2V5h2v3h2v13H4Z" /><path d="M10 21v-4h4v4M8 12h8" />'),
 ("Lighthouse", '<path d="M9 8h6l1 13H8L9 8Z" /><path d="M9 12h6M8 21h8M9 8 8 5h8l-1 3M12 5V2M5 6l-2-1M19 6l2-1" />'),
 ("Door2", '<rect x="5" y="3" width="14" height="18" rx="1" /><path d="M15 12h.01M5 21h14" />'),
 ("DoorOpen2", '<path d="M13 4 6 6v15M6 21h12M13 4h5v17M13 21V4" /><path d="M11 12h.01" />'),
 ("Window2", '<rect x="4" y="4" width="16" height="16" rx="1" /><path d="M12 4v16M4 12h16" />'),
 ("Stairs2", '<path d="M3 20h4v-4h4v-4h4V8h4V4" /><path d="M3 20v-4h4v-4h4v-4h4V4" />'),
 ("Elevator2", '<rect x="4" y="3" width="16" height="18" rx="1" /><path d="M12 3v18M8 9l-1.5 2h3zM16 9l1.5 2h-3z" />'),
 ("Furniture", '<path d="M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2M5 16v3M19 16v3" />'),
 ("Sofa2", '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" /><path d="M2 12a2 2 0 0 1 2 2v3h16v-3a2 2 0 0 1 2-2 2 2 0 0 0-2 2H4a2 2 0 0 0-2-2ZM5 17v2M19 17v2M8 11h8" />'),
 ("Bed3", '<path d="M3 8v12M3 12h18a0 0 0 0 1 0 0v8M3 16h18" /><path d="M6 12v-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" />'),
 ("Bathtub2", '<path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" /><path d="M5 12V6a2 2 0 0 1 4 0M6 19l-1 2M18 19l1 2M9 6h.01" />'),
 ("Shower2", '<path d="M4 12V7a3 3 0 0 1 6 0M4 12h16" /><path d="M9 12V5a2 2 0 0 1 4 0v1" /><path d="M8 16v1M12 16v2M16 16v1M10 19v1M14 19v1" />'),
 ("Toilet2", '<path d="M6 4h2v5M6 4a2 2 0 0 0-2 2v3a4 4 0 0 0 4 4h4l-1 4h-4M5 21h6l1-4" /><path d="M8 9h6V5a1 1 0 0 0-1-1h-1" />'),
 ("Kitchen", '<rect x="4" y="3" width="16" height="18" rx="1" /><path d="M4 9h16M8 5v2M11 5v2M7 13v4" /><circle cx="15" cy="15" r="2" />'),
 ("Fireplace", '<rect x="3" y="3" width="18" height="18" rx="1" /><path d="M6 3v3h12V3M6 21v-7h12v7" /><path d="M12 17c1.5-1 2-2 1-3.5C12.5 15 11 14 12 11c-2 1.5-3 3-2 5 0 .5.5 1 1 1Z" />'),
 ("Garden", '<path d="M12 13c-3 0-5-2-5-5 3 0 5 2 5 5ZM12 13c3 0 5-2 5-5-3 0-5 2-5 5Z" /><path d="M12 9v12M5 21h14M8 17c-1.5 0-2-1-2-2 1.5 0 2 1 2 2ZM16 17c1.5 0 2-1 2-2-1.5 0-2 1-2 2Z" />'),
]
FILES["home_dev"] = ("Home / Real estate", home)

# ============================ SYMBOLS ============================
symbols = [
 ("Accessibility2", '<circle cx="12" cy="4.5" r="1.8" /><path d="M12 7v6M7 9l5 1 5-1M9 21l3-8 3 8" />'),
 ("SignLanguage", '<path d="M7 11V5a1.5 1.5 0 0 1 3 0v5M10 9V4a1.5 1.5 0 0 1 3 0v6M13 9.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6 5 5 0 0 1-4-2l-3-4a1.5 1.5 0 0 1 2.2-2L7 13" />'),
 ("BrailleIcon", dot(8,6)+dot(8,12)+dot(8,18)+dot(14,6)+dot(14,12)+'<path d="M16 5h.01"/>'),
 ("HearingAid", '<path d="M8 4a6 6 0 0 1 8 5c0 3-2 4-2 6a3 3 0 0 1-5 2" /><path d="M6 9a4 4 0 0 1 6-3.5M14 16c2 0 3-1 3-3" /><circle cx="8" cy="18" r="2" />'),
 ("EyeglassesAlt", '<circle cx="6" cy="15" r="3" /><circle cx="18" cy="15" r="3" /><path d="M9 14c1-1 5-1 6 0M3 14l3-7h2M21 14l-3-7h-2" />'),
 ("WalkingCane", '<circle cx="13" cy="4.5" r="1.8" /><path d="M13 7v4l3 3M13 11l-3 4-2 6M16 14c2 0 2 4 0 6" />'),
 ("ServiceDog", '<path d="M4 8 6 5l2 2h3l2 2v6H6a2 2 0 0 1-2-2V8Z" /><path d="M15 9h3l2 3v3h-2M6 15v4M11 15v4M18 15v4" /><path d="M4 8 3 6" />'),
 ("AudioDescription", '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="M6 15 8 9l2 6M6.7 13h2.6M13 15V9h2a3 3 0 0 1 0 6h-2Z" />'),
 ("Infinity2", '<path d="M7 9a3 3 0 1 0 0 6c2 0 3-1.5 5-3s3-3 5-3a3 3 0 1 1 0 6c-2 0-3-1.5-5-3s-3-3-5-3Z" />'),
 ("Percentage2", '<circle cx="7" cy="7" r="2.5" /><circle cx="17" cy="17" r="2.5" /><path d="m6 18 12-12" />'),
 ("Hashtag2", '<path d="M9 4 7 20M17 4l-2 16M4 9h16M3 15h16" />'),
 ("Asterisk2", '<path d="M12 4v16M5 8l14 8M19 8 5 16" />'),
 ("AmpersandIcon", '<path d="M19 20 7 8a3 3 0 0 1 4-4.5c1.5 1 1.5 3-1 5l-3 2.5a4 4 0 0 0 6 6c2-1.5 3-4 3-7" />'),
 ("CopyrightAlt", '<circle cx="12" cy="12" r="9" /><path d="M15 9.5a4 4 0 1 0 0 5" />'),
 ("Trademark2", '<path d="M3 7h6M6 7v8M12 15V7l3 5 3-5v8" />'),
 ("RegisteredMark", '<circle cx="12" cy="12" r="9" /><path d="M9 16V8h3a2.5 2.5 0 0 1 0 5H9M12 13l3 3" />'),
 ("SectionSign", '<path d="M14 7a3 3 0 0 0-5-1c-1.5 1.5 0 3 2 4s3.5 2.5 2 4a3 3 0 0 1-5-1" />'),
 ("ParagraphMark", '<path d="M13 4v16M17 4v16M13 4h-3a4 4 0 0 0 0 8h3" />'),
 ("DegreeSign", '<circle cx="9" cy="7" r="3" /><path d="M14 17a4 4 0 0 0 6 0M14 17a4 4 0 0 1 6 0" />'),
 ("PlusMinus", '<path d="M12 4v8M8 8h8M8 18h8" />'),
 ("NotEqual", '<path d="M6 9h12M6 15h12M16 5 8 19" />'),
 ("ApproxEqual", '<path d="M5 8c2-2 4-2 7 0s5 2 7 0M5 15c2-2 4-2 7 0s5 2 7 0" />'),
 ("LessThanEqual", '<path d="m17 5-11 6 11 6M6 20h11" />'),
 ("GreaterThanEqual", '<path d="m7 5 11 6-11 6M7 20h11" />'),
 ("SquareRoot", '<path d="M3 13l3 7 4-16h10" />'),
 ("Pi2", '<path d="M4 7h16M8 7v11M16 7v9a2 2 0 0 0 3 1" />'),
 ("Sigma2", '<path d="M17 4H6l6 8-6 8h11" />'),
 ("Integral", '<path d="M9 20c0 1.5-3 2-3-1V8c0-3 3-3 3-5M15 4c0-1.5 3-2 3 1v12c0 3-3 3-3 5" />'),
]
FILES["symbols"] = ("Accessibility / Symbols", symbols)

# ============================ AI ============================
SPARK = '<path d="M12 3c.5 3.5 1.5 4.5 5 5-3.5.5-4.5 1.5-5 5-.5-3.5-1.5-4.5-5-5 3.5-.5 4.5-1.5 5-5Z" />'
ai = [
 ("AiSparkles", SPARK + '<path d="M18 15c.3 1.5.5 1.7 2 2-1.5.3-1.7.5-2 2-.3-1.5-.5-1.7-2-2 1.5-.3 1.7-.5 2-2Z" />'),
 ("SparklesAlt", '<path d="M9 3c.4 3 1 3.6 4 4-3 .4-3.6 1-4 4-.4-3-1-3.6-4-4 3-.4 3.6-1 4-4Z" /><path d="M17 12c.3 2 .6 2.3 2.5 2.6-1.9.3-2.2.6-2.5 2.5-.3-1.9-.6-2.2-2.5-2.5 1.9-.3 2.2-.6 2.5-2.6Z" />'),
 ("RobotFace", '<rect x="4" y="7" width="16" height="12" rx="3" /><path d="M12 4v3M9 12h.01M15 12h.01M9 16h6M2 11v3M22 11v3" /><circle cx="12" cy="4" r="1.2" />'),
 ("ChatbotIcon", '<rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16h5" /><circle cx="12" cy="4" r="1.5" /><path d="M2 12v3M22 12v3" />'),
 ("PromptIcon", '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m7 9 2.5 3L7 15M12 15h5" />'),
 ("TokenCount", '<circle cx="8" cy="8" r="4" /><circle cx="16" cy="8" r="4" /><circle cx="12" cy="16" r="4" /><path d="M8 8h.01M16 8h.01M12 16h.01" />'),
 ("ContextWindow", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 8h18" /><path d="M6 12h8M6 15h6M17 11v6" stroke-dasharray="2 2" />'),
 ("EmbeddingIcon", '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />' + dot(12,12)+dot(8,9)+dot(16,9)+dot(8,15)+dot(16,15) + '<path d="M12 12 8 9M12 12l4-3M12 12-4 3M12 12l4 3" />'),
 ("VectorDb", '<ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v12c0 1.4 3 2.5 7 2.5s7-1.1 7-2.5V6" /><path d="m9 13 1.5 1.5L9 16M13 16h2" />'),
 ("NeuralNet", '<circle cx="5" cy="6" r="1.8" /><circle cx="5" cy="18" r="1.8" /><circle cx="12" cy="8" r="1.8" /><circle cx="12" cy="16" r="1.8" /><circle cx="19" cy="12" r="1.8" /><path d="M6.5 7 10.5 8M6.5 17l4-1M6.5 7l4 8M6.5 17 10.5 8M13.5 9l4 2M13.5 15l4-2" />'),
 ("ModelIcon", '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /><circle cx="12" cy="7.5" r="1.5" />'),
 ("FineTune", '<path d="M4 7h6M14 7h6M4 17h10M18 17h2" /><circle cx="12" cy="7" r="2" /><circle cx="16" cy="17" r="2" />'),
 ("InferenceIcon", '<rect x="3" y="6" width="6" height="12" rx="1.5" /><path d="M9 12h6M12 9l3 3-3 3" /><path d="M17 8a4 4 0 0 1 0 8" />'),
 ("GpuCluster", '<rect x="3" y="4" width="8" height="6" rx="1" /><rect x="13" y="4" width="8" height="6" rx="1" /><rect x="8" y="14" width="8" height="6" rx="1" /><circle cx="5.5" cy="7" r="0.5" /><circle cx="15.5" cy="7" r="0.5" /><path d="M7 10v2h5M17 10v2h-5" />'),
 ("LlmChip", '<rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />' + SPARK.replace('12','12').replace('3c','11c').replace('5Z','3Z')[:0] + '<path d="M12 10c.3 1.5.6 1.8 2 2-1.4.2-1.7.5-2 2-.3-1.5-.6-1.8-2-2 1.4-.2 1.7-.5 2-2Z" />'),
 ("AgentIcon", '<circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /><circle cx="12" cy="8" r="1.5" /><path d="M12 4V8" />'),
 ("WorkflowIcon", '<rect x="3" y="4" width="6" height="5" rx="1" /><rect x="15" y="4" width="6" height="5" rx="1" /><rect x="9" y="15" width="6" height="5" rx="1" /><path d="M6 9v2h12V9M12 11v4" />'),
 ("StateMachine", '<circle cx="6" cy="7" r="3" /><circle cx="18" cy="7" r="3" /><circle cx="12" cy="18" r="3" /><path d="M9 7h6M8 9.5l3 6M16 9.5l-3 6" />'),
 ("DecisionTree", '<rect x="9" y="3" width="6" height="4" rx="1" /><rect x="3" y="16" width="6" height="4" rx="1" /><rect x="15" y="16" width="6" height="4" rx="1" /><path d="M12 7v3M12 10H6v6M12 10h6v6" />'),
 ("FlowChart", '<rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 14 12 11l3 3-3 3-3-3Z" /><rect x="9" y="19" width="6" height="0.01" /><path d="M12 7v4M12 17v2M15 14h4v5" /><rect x="16" y="17" width="6" height="4" rx="1" />'),
 ("Sitemap2", '<rect x="9" y="3" width="6" height="4" rx="1" /><rect x="3" y="16" width="5" height="4" rx="1" /><rect x="9.5" y="16" width="5" height="4" rx="1" /><rect x="16" y="16" width="5" height="4" rx="1" /><path d="M12 7v3M5.5 16v-2h13v2M12 14v2" />'),
 ("MindMap", '<circle cx="12" cy="12" r="3" /><circle cx="4" cy="5" r="2" /><circle cx="20" cy="5" r="2" /><circle cx="4" cy="19" r="2" /><circle cx="20" cy="19" r="2" /><path d="m6 6 4 4M18 6l-4 4M6 18l4-4M18 18l-4-4" />'),
 ("OrgChart", '<rect x="9" y="3" width="6" height="4" rx="1" /><rect x="2" y="16" width="6" height="4" rx="1" /><rect x="16" y="16" width="6" height="4" rx="1" /><path d="M12 7v4M5 16v-2h14v2" />'),
 ("NodeGraph", '<circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="8" r="2.5" /><circle cx="8" cy="18" r="2.5" /><circle cx="17" cy="17" r="2" /><path d="m8 7.5 8 1M7.5 8l1 7.5M10 17.5l5-.5M15 9l1 6" />'),
 ("DiagramIcon", '<rect x="3" y="4" width="7" height="5" rx="1" /><rect x="14" y="4" width="7" height="5" rx="1" /><rect x="8.5" y="15" width="7" height="5" rx="1" /><path d="M6.5 9v3h11V9M12 12v3" />'),
 ("BlueprintIcon", '<rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 9h6v11M9 9V4M15 4v7h6M15 11v9" stroke-dasharray="2 2" />'),
 ("WireframeIcon", '<rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 8h18M8 8v12M3 14h5M14 11h7M14 16h7" />'),
 ("MockupIcon", '<rect x="6" y="2" width="12" height="20" rx="2" /><path d="M6 6h12M6 18h12M10 4h4" /><rect x="9" y="9" width="6" height="5" rx="1" />'),
 ("PrototypeIcon", '<rect x="3" y="5" width="7" height="6" rx="1" /><rect x="14" y="13" width="7" height="6" rx="1" /><path d="M10 8h2a2 2 0 0 1 2 2v3M13 12l1 1 1-1" />'),
 ("ComponentTree", '<path d="M12 3 9 6l3 3 3-3-3-3Z" /><path d="M5 14l-2 3 2 3 2-3-2-3ZM19 14l-2 3 2 3 2-3-2-3Z" /><path d="M12 9v3M12 12H5v2M12 12h7v2" />'),
]
FILES["ai"] = ("AI / Agent / Diagrams", ai)

# ============================ UI_CONTROLS ============================
MAG = '<circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" />'
FUNNEL = '<path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" />'
ui_controls = [
 ("SearchPlus", MAG + plus(10.5,10.5,2.2)),
 ("SearchMinus", MAG + '<path d="M8 10.5h5" />'),
 ("SearchCheck", MAG + check(10.5,10.5,2.2)),
 ("SearchX", MAG + xmark(10.5,10.5,2)),
 ("SearchCode", MAG + '<path d="m9 9-1.5 1.5L9 12M12 9l1.5 1.5L12 12" />'),
 ("FilterPlus", FUNNEL + plus(18,17,2)),
 ("FilterX", FUNNEL + xmark(18,17,1.8)),
 ("FilterCheck", FUNNEL + check(18,17,2)),
 ("SortAlpha", '<path d="M6 4v14M6 18l-2.5-2.5M6 18l2.5-2.5" /><path d="M12 6h4l-4 4h4M12 14h4l-4 4h4" />'),
 ("SortNumeric", '<path d="M6 4v14M6 18l-2.5-2.5M6 18l2.5-2.5" /><path d="M13 6l1.5-1V10M13 14h2v4h-2zM13 14v0a2 2 0 0 1 2 0" />'),
 ("SortClock", '<path d="M6 4v14M6 18l-2.5-2.5M6 18l2.5-2.5" /><circle cx="15" cy="11" r="5" /><path d="M15 8.5V11l1.7 1" />'),
 ("ZoomIn2", MAG + plus(10.5,10.5,2.4)),
 ("ZoomOut2", MAG + '<path d="M7.5 10.5h6" />'),
 ("ZoomReset", MAG + '<path d="M8 9.5a3 3 0 0 1 5-1M8 9v1.5h1.5M13 12v-1.5h-1.5" />'),
 ("ScanLine", '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M5 12h14" />'),
 ("ScrollUp", '<rect x="6" y="3" width="12" height="18" rx="6" /><path d="M9 9l3-3 3 3M12 6v6" />'),
 ("ScrollDown", '<rect x="6" y="3" width="12" height="18" rx="6" /><path d="M9 9l3 3 3-3M12 6v6" />'),
 ("ResizeHandle", '<path d="M20 8 8 20M20 14l-6 6M20 20h.01" />'),
 ("GripVertical", dot(9,6)+dot(15,6)+dot(9,12)+dot(15,12)+dot(9,18)+dot(15,18)),
 ("GripHorizontal", dot(6,9)+dot(12,9)+dot(18,9)+dot(6,15)+dot(12,15)+dot(18,15)),
 ("DotsGrid", dot(6,6)+dot(12,6)+dot(18,6)+dot(6,12)+dot(12,12)+dot(18,12)+dot(6,18)+dot(12,18)+dot(18,18)),
 ("MoreHorizontal2", dot(6,12)+dot(12,12)+dot(18,12)),
 ("MoreVertical2", dot(12,6)+dot(12,12)+dot(12,18)),
 ("ExpandIcon", '<path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3" /><path d="m9 9 6 6M15 9l-6 6" />'),
 ("CollapseIcon", '<path d="M3 8h3a2 2 0 0 0 2-2V3M16 3v3a2 2 0 0 0 2 2h3M21 16h-3a2 2 0 0 0-2 2v3M8 21v-3a2 2 0 0 0-2-2H3" />'),
 ("PinTab", '<rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M12 13v3M10.5 13h3l-.5 1.5h-2L10.5 13Z" />'),
 ("UnpinTab", '<rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18M10 13h4M11 13v3M13 13v3" /><path d="m5 8 14 10" />'),
 ("NewTab", '<rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18" />' + plus(12,15,2.2)),
 ("CloseTab", '<rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18" />' + xmark(12,15,2)),
 ("DuplicateTab", '<rect x="8" y="8" width="13" height="12" rx="2" /><path d="M8 12h13" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />'),
 ("SplitScreen", '<rect x="3" y="4" width="18" height="16" rx="2" /><path d="M12 4v16" /><path d="M6 9h3M6 12h3M15 9h3M15 12h3" />'),
]
FILES["ui_controls"] = ("UI Controls", ui_controls)

for fn,(hc,items) in FILES.items():
    p,c = emit(fn, hc, items)
    print(f"  wrote {p}: {c} icons")
