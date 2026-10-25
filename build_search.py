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
SKIP_SECTIONS = {"quiz", "flashcards"}
SKIP_TAGS = [".topic-check", ".note-num", ".toc-tools", ".day-num", "script", "style"]


def clean(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def body_text(el, heading_selector="h2") -> str:
    clone = BeautifulSoup(str(el), "html.parser").find()
    for sel in SKIP_TAGS:
        for node in clone.select(sel):
            node.decompose()
    for node in clone.select(heading_selector):
        node.decompose()
    return clean(clone.get_text(" ", strip=True))


def main():
    entries = []
    for page, subject in PAGES.items():
        path = ROOT / page
        if not path.exists():
            continue
        soup = BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")

        # Main note sections
        for sec in soup.select("section.note[id]"):
            if sec.get("id") in SKIP_SECTIONS:
                continue
            h2 = sec.find("h2")
            if not h2:
                continue
            entries.append({
                "page": page,
                "url": f"{page}#{sec.get('id')}",
                "subject": subject,
                "title": clean(h2.get_text()),
                "text": body_text(sec)[:900],
            })

        # Last-minute cards
        for card in soup.select(".lm-card"):
            h3 = card.find("h3")
            if not h3:
                continue
            entries.append({
                "page": page,
                "url": page,
                "subject": subject,
                "title": clean(h3.get_text()),
                "text": body_text(card, "h3")[:900],
            })

        # Plan day cards
        for card in soup.select(".day-card"):
            h3 = card.find("h3")
            if not h3:
                continue
            entries.append({
                "page": page,
                "url": page,
                "subject": subject,
                "title": clean(h3.get_text()),
                "text": body_text(card, "h3")[:700],
            })

        # Home / generic sections with an id and a heading (skip notes, already handled)
        for sec in soup.select("section[id]"):
            classes = sec.get("class") or []
            if "note" in classes:
                continue
            heading = sec.find(["h1", "h2"])
            if not heading:
                continue
            entries.append({
                "page": page,
                "url": f"{page}#{sec.get('id')}" if sec.get("id") else page,
                "subject": subject,
                "title": clean(heading.get_text()),
                "text": body_text(sec, "h1, h2")[:700],
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
