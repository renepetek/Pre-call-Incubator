from bs4 import BeautifulSoup
from pathlib import Path
import re

html_path = Path('/home/ubuntu/browser_html/go_clientascension_ai_precall-info_1777487389572.html')
out_path = Path('/home/ubuntu/precall-landing-replica/reference_extracted.md')
html = html_path.read_text(errors='ignore')
soup = BeautifulSoup(html, 'html.parser')

for tag in soup(['script', 'style', 'noscript']):
    tag.decompose()

lines = []
lines.append('# Extracted Reference Page Details\n')
lines.append('## Text Blocks\n')
seen = set()
for el in soup.find_all(['h1','h2','h3','h4','p','a','button','span','div']):
    text = ' '.join(el.get_text(' ', strip=True).split())
    if not text or len(text) < 3:
        continue
    if len(text) > 240:
        continue
    if text in seen:
        continue
    seen.add(text)
    lines.append(f'- {text}')

lines.append('\n## Iframes and Media\n')
for el in soup.find_all(['iframe','video','source','img']):
    attrs = {k: v for k, v in el.attrs.items() if k in ['src','data-src','poster','alt','title','style','class']}
    if attrs:
        lines.append(f'- `{el.name}` {attrs}')

lines.append('\n## Possible Background URLs\n')
for match in re.findall(r'https?://[^\\\'\") ]+', html):
    if any(part in match.lower() for part in ['image','img','thumbnail','wistia','vimeo','youtube','bunny','cloudfront','fast.wistia','embed']):
        lines.append(f'- {match[:300]}')

out_path.write_text('\n'.join(lines) + '\n')
print(out_path)
