import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# Elements to remove for header:
# skip-link, ticker, mob-overlay, mob-menu, topbar, nav-wrap, nav-search-bar
header_ids = ['ticker', 'mob-overlay', 'mob-menu', 'topbar', 'nav-wrap', 'nav-search-bar']

# Elements to remove for footer:
# footer, chatbot-container, floating-message, section-nav, scroll-btn
footer_ids = ['footer', 'chatbot-container', 'floating-message', 'section-nav', 'scroll-btn']

def remove_element_by_id(html, id_name):
    # This is a basic regex to remove a tag and its contents by id.
    # It assumes the div/nav/footer is properly closed and doesn't have deeply nested same-tags that break simple regex,
    # but regex for HTML is tricky.
    # Better to use string searching.
    start_idx = html.find(f'id="{id_name}"')
    if start_idx == -1:
        start_idx = html.find(f"id='{id_name}'")
    if start_idx == -1:
        return html
    
    # find the opening tag's start '<'
    tag_start = html.rfind('<', 0, start_idx)
    # find the tag name
    tag_name_match = re.match(r'<([a-zA-Z0-9]+)', html[tag_start:])
    if not tag_name_match:
        return html
    tag_name = tag_name_match.group(1)
    
    # find the corresponding closing tag
    open_count = 0
    i = tag_start
    while i < len(html):
        if html.startswith(f'</{tag_name}>', i):
            open_count -= 1
            if open_count == 0:
                end_idx = i + len(f'</{tag_name}>')
                return html[:tag_start] + html[end_idx:]
        elif re.match(f'<{tag_name}[\\s>]', html[i:]):
            open_count += 1
        i += 1
    return html

def remove_skip_link(html):
    # remove <a href="#main-content" class="skip-link">...</a>
    return re.sub(r'<a[^>]*class="skip-link"[^>]*>.*?</a>', '', html, flags=re.DOTALL)

def update_asset_paths(html):
    # Images
    html = re.sub(r'src="([^"]+\.(?:png|jpg|jpeg|webp|avif|svg))"', 
                  lambda m: f'src="{m.group(1)}"' if m.group(1).startswith('http') or m.group(1).startswith('assets/') else f'src="assets/images/{m.group(1)}"', 
                  html)
    # CSS
    html = re.sub(r'href="([^"]+\.css)"', 
                  lambda m: f'href="{m.group(1)}"' if m.group(1).startswith('http') or m.group(1).startswith('assets/') else f'href="assets/css/{m.group(1)}"', 
                  html)
    # JS
    html = re.sub(r'src="([^"]+\.js)"', 
                  lambda m: f'src="{m.group(1)}"' if m.group(1).startswith('http') or m.group(1).startswith('assets/') else f'src="assets/js/{m.group(1)}"', 
                  html)
    return html

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    content = remove_skip_link(content)
    for hid in header_ids:
        content = remove_element_by_id(content, hid)
        
    for fid in footer_ids:
        content = remove_element_by_id(content, fid)
        
    # Insert <cusb-header> right after <body>
    if '<cusb-header>' not in content:
        content = re.sub(r'(<body[^>]*>)', r'\1\n  <cusb-header></cusb-header>', content)
        
    # Insert <cusb-footer> and script right before </body>
    if '<cusb-footer>' not in content:
        content = re.sub(r'(</body>)', r'  <cusb-footer></cusb-footer>\n  <script src="assets/js/components.js"></script>\n\1', content)

    # Remove script tags that were specifically for the header/footer (like the inline ones at the end of index.html)
    # Actually, replacing all inline script at the end is dangerous if they have page-specific logic.
    # We will leave inline scripts, our component.js handles events independently by querying within its own DOM or specific IDs.
    
    content = update_asset_paths(content)
    
    if content != original_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Refactored {file}")
