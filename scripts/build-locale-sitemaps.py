#!/usr/bin/env python3
"""Write locales/<code>/sitemap.xml for every locale: the locale landing page, each section page and each
content page, as published at https://architecture-decision-record.github.io/<code>/... (URLs end in "/").
Generated: never hand-edit. Run after any locales/ change; `--check` exits 1 if a file is missing or stale.
audit-locales.py ignores sitemap.xml when comparing a locale with its copy."""
import os,sys,unicodedata
from urllib.parse import quote
from xml.sax.saxutils import escape
LOC=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','locales')
SITE='https://architecture-decision-record.github.io'
def url(*segs):
    return escape(SITE+'/'+''.join(quote(unicodedata.normalize('NFC',s),safe='')+'/' for s in segs))
def render(code):
    d=os.path.join(LOC,code); out=[url(code)]
    for s in sorted(x for x in os.listdir(d) if os.path.isdir(os.path.join(d,x))):
        sp=os.path.join(d,s)
        if os.path.isfile(os.path.join(sp,'index.md')): out.append(url(code,s))
        for p in sorted(x for x in os.listdir(sp) if os.path.isdir(os.path.join(sp,x))):
            out.append(url(code,s,p))
    body='\n'.join(f'  <url><loc>{u}</loc></url>' for u in out)
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{body}\n</urlset>\n'
bad=0
for code in sorted(os.listdir(LOC)):
    if not os.path.isdir(os.path.join(LOC,code)): continue
    t=render(code); f=os.path.join(LOC,code,'sitemap.xml')
    if '--check' in sys.argv:
        if not os.path.exists(f) or open(f,encoding='utf-8').read()!=t: print('stale or missing:',f); bad+=1
    else: open(f,'w',encoding='utf-8').write(t)
sys.exit(1 if bad else 0)
