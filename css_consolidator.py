import os
import re
import difflib

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# 1. Read base CSS from index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
    match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
    if match:
        base_css = match.group(1)
    else:
        base_css = ""

base_lines = base_css.split('\n')
final_lines = list(base_lines)

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
    page_lines = page_css.split('\n')
    
    # Use SequenceMatcher to find lines that are in page_css but NOT in base_css
    s = difflib.SequenceMatcher(None, base_lines, page_lines)
    
    unique_chunks = []
    for tag, i1, i2, j1, j2 in s.get_opcodes():
        if tag in ('replace', 'insert'):
            # These lines are new/different in the current file
            chunk = page_lines[j1:j2]
            # only add if there's actual content
            if any(line.strip() for line in chunk):
                unique_chunks.extend(chunk)
                
    if unique_chunks:
        final_lines.append(f"\n/* ═══════════════════════════════════════")
        final_lines.append(f"   UNIQUE STYLES FOR: {file}")
        final_lines.append(f"   ═══════════════════════════════════════ */")
        final_lines.extend(unique_chunks)

# 3. Write to main.css
os.makedirs('assets/css', exist_ok=True)
main_css_path = os.path.join('assets', 'css', 'main.css')
with open(main_css_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(final_lines))

print(f"Consolidated CSS written to {main_css_path}")

# 4. Remove inline styles and link main.css in all HTML files
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if '<style>' in content:
        # replace the <style>...</style> block with the <link> tag
        new_content = re.sub(
            r'<style>.*?</style>', 
            '<link rel="stylesheet" href="assets/css/main.css">', 
            content, 
            flags=re.DOTALL
        )
        
        # also check if the link already exists just in case
        if new_content != content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Refactored {file}")
