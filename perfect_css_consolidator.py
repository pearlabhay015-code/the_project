import os
import re

def get_blocks(css_text):
    blocks = []
    current_block = ""
    brace_level = 0
    in_comment = False
    
    i = 0
    while i < len(css_text):
        if not in_comment and css_text.startswith('/*', i):
            in_comment = True
            current_block += '/*'
            i += 2
            continue
        if in_comment and css_text.startswith('*/', i):
            in_comment = False
            current_block += '*/'
            i += 2
            continue
            
        char = css_text[i]
        if in_comment:
            current_block += char
            i += 1
            continue
            
        current_block += char
        
        if char == '{':
            brace_level += 1
        elif char == '}':
            brace_level -= 1
            if brace_level == 0:
                blocks.append(current_block.strip())
                current_block = ""
        i += 1
        
    if current_block.strip():
        blocks.append(current_block.strip())
    return blocks

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# 1. Read base CSS from index.html
base_css = ""
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
    match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
    if match:
        base_css = match.group(1)

base_blocks = get_blocks(base_css)
seen_normalized = set()
for b in base_blocks:
    if not b: continue
    norm = re.sub(r'\s+', ' ', b)
    seen_normalized.add(norm)

final_css_blocks = list(base_blocks)

# 2. Extract unique CSS from other files
for file in html_files:
    if file == 'index.html':
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
    if not match:
        continue
        
    page_css = match.group(1)
    page_blocks = get_blocks(page_css)
    
    unique_chunks = []
    for block in page_blocks:
        if not block: continue
        norm = re.sub(r'\s+', ' ', block)
        if norm not in seen_normalized:
            seen_normalized.add(norm)
            unique_chunks.append(block)
                
    if unique_chunks:
        final_css_blocks.append(f"\n/* ═══════════════════════════════════════")
        final_css_blocks.append(f"   UNIQUE STYLES FOR: {file}")
        final_css_blocks.append(f"   ═══════════════════════════════════════ */")
        final_css_blocks.extend(unique_chunks)

# 3. Write to main.css
os.makedirs('assets/css', exist_ok=True)
main_css_path = os.path.join('assets', 'css', 'main.css')
with open(main_css_path, 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(final_css_blocks))

print(f"Consolidated CSS written to {main_css_path}")

# 4. Remove inline styles and link main.css in all HTML files
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if '<style>' in content:
        new_content = re.sub(
            r'<style>.*?</style>', 
            '<link rel="stylesheet" href="assets/css/main.css">', 
            content, 
            flags=re.DOTALL
        )
        
        if new_content != content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Refactored styles in {file}")
