import sys

def fix_file(filepath, import_target, import_replacement):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace(import_target, import_replacement)
    
    if 'return (\n    <div' in content:
        content = content.replace('return (\n    <div', 'return (\n    <PageTransition>\n      <div')
    elif 'return (\n    <MotionWrapper>' in content:
        content = content.replace('return (\n    <MotionWrapper>', 'return (\n    <PageTransition>')
    elif 'return (\n    <div>' in content:
        content = content.replace('return (\n    <div>', 'return (\n    <PageTransition>')
        
    content = content.replace('      </div>\n    </div>\n  );\n}', '      </div>\n    </div>\n    </PageTransition>\n  );\n}')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_file('src/app/author/[id]/AuthorClient.tsx', 'import { newArrivals } from "@/lib/browse-data";', 'import { newArrivals } from "@/lib/browse-data";\nimport { PageTransition } from "@/components/ui/PageTransition";')
fix_file('src/app/book/[id]/BookDetailClient.tsx', 'import { SidebarNav } from "@/components/browse/BrowseComponents";', 'import { SidebarNav } from "@/components/browse/BrowseComponents";\nimport { PageTransition } from "@/components/ui/PageTransition";')
fix_file('src/app/browse/page.tsx', '} from "@/components/browse/BrowseComponents";', '} from "@/components/browse/BrowseComponents";\nimport { PageTransition } from "@/components/ui/PageTransition";')
