import os
import re

def deduplicate_css(css_text):
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
        
    # Also add whatever is left (could be comments or whitespace)
    if current_block.strip():
        blocks.append(current_block.strip())
        
    seen_normalized = set()
    unique_blocks = []
    
    for block in blocks:
        if not block: continue
        
        # skip standalone comments that are not part of a block 
        # (wait, we want to keep some comments if they are unique, but they might clutter)
        # Actually, let's just normalize and deduplicate everything that is a block.
        
        norm = re.sub(r'\s+', ' ', block)
        
        if norm not in seen_normalized:
            seen_normalized.add(norm)
            unique_blocks.append(block)
            
    return "\n\n".join(unique_blocks)

if __name__ == "__main__":
    main_css_path = os.path.join('assets', 'css', 'main.css')
    
    with open(main_css_path, 'r', encoding='utf-8') as f:
        css = f.read()
        
    deduped_css = deduplicate_css(css)
    
    with open(main_css_path, 'w', encoding='utf-8') as f:
        f.write(deduped_css)
        
    print(f"Deduplicated CSS. New length: {len(deduped_css)} chars.")
