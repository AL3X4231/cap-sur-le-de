#!/usr/bin/env python3
"""Generate assets/search-index.js from the static HTML pages."""
import json
import re
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).parent
PAGES = {
    "eh.html": "Ethical Hacking",
    "reseau.html": "Sécurité Réseaux",
    "os.html": "Sécurité des OS",
    "si.html": "Sécurité des SI",
    "vs.html": "Virtualisation & Stockage",
    "last-minute.html": "Dernière minute",
    "plan.html": "Plan de révision",
    "index.html": "Accueil",
}

def clean(text: str) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    return text

def main():
    entries = []
    for page, subject in PAGES.items():
        path = ROOT / page
        if not path.exists():
            continue
        soup = BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")
        page_title = clean(soup.title.get_text()) if soup.title else page

        # Main note sections
        for sec in soup.select("section.note[id]"):
            h2 = sec.find("h2")
            if not h2:
                continue
            title = clean(h2.get_text())
            body = clean(sec.get_text(" ", strip=True))
            # remove the title repetition at the start
            if body.startswith(title):
                body = body[len(title):].strip()
            entries.append({
                "page": page,
                "url": f"{page}#{sec.get('id')}",
                "subject": subject,
                "title": title,
                "text": body[:900],
            })

        # Last-minute cards
        for card in soup.select(".lm-card"):
            h3 = card.find("h3")
            if not h3:
                continue
            title = clean(h3.get_text())
            body = clean(card.get_text(" ", strip=True))
            if body.startswith(title):
                body = body[len(title):].strip()
            entries.append({
                "page": page,
                "url": f"{page}",
                "subject": subject,
                "title": title,
                "text": body[:900],
            })

        # Plan day cards
        for card in soup.select(".day-card"):
            h3 = card.find("h3")
            if not h3:
                continue
            title = clean(h3.get_text())
            body = clean(card.get_text(" ", strip=True))
            if body.startswith(title):
                body = body[len(title):].strip()
            entries.append({
                "page": page,
                "url": f"{page}",
                "subject": subject,
                "title": title,
                "text": body[:700],
            })

        # Home / generic sections with an id and a heading
        for sec in soup.select("section[id]"):
            if sec.select_one("section.note[id]") is sec:
                continue
            heading = sec.find(["h1", "h2"])
            if not heading:
                continue
            sid = sec.get("id")
            title = clean(heading.get_text())
            body = clean(sec.get_text(" ", strip=True))
            if body.startswith(title):
                body = body[len(title):].strip()
            entries.append({
                "page": page,
                "url": f"{page}#{sid}" if sid else page,
                "subject": subject,
                "title": title,
                "text": body[:700],
            })

    # Deduplicate by url + title
    seen = set()
    unique = []
    for e in entries:
        key = (e["url"], e["title"])
        if key in seen:
            continue
        seen.add(key)
        unique.append(e)

    out = ROOT / "assets" / "search-index.js"
    out.write_text(
        "window.SEARCH_INDEX = " + json.dumps(unique, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(unique)} entries to {out}")

if __name__ == "__main__":
    main()
