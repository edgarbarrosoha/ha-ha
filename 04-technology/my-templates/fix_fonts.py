#!/usr/bin/env python3
"""Post-process docx to inject font declarations into fontTable.xml.
docx-js generates an empty fontTable — this script injects HA font declarations.
Usage: python3 fix_fonts.py path/to/file.docx
"""
import zipfile
import sys
import shutil

FONT_TABLE = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:fonts xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
         xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:font w:name="Plus Jakarta Sans">
    <w:panose1 w:val="020B0604020202020204"/>
    <w:charset w:val="00"/>
    <w:family w:val="swiss"/>
    <w:pitch w:val="variable"/>
  </w:font>
  <w:font w:name="Plus Jakarta Sans SemiBold">
    <w:panose1 w:val="020B0604020202020204"/>
    <w:charset w:val="00"/>
    <w:family w:val="swiss"/>
    <w:pitch w:val="variable"/>
  </w:font>
  <w:font w:name="Plus Jakarta Sans Medium">
    <w:panose1 w:val="020B0604020202020204"/>
    <w:charset w:val="00"/>
    <w:family w:val="swiss"/>
    <w:pitch w:val="variable"/>
  </w:font>
  <w:font w:name="Roboto Mono Medium">
    <w:panose1 w:val="020B0604020202020204"/>
    <w:charset w:val="00"/>
    <w:family w:val="modern"/>
    <w:pitch w:val="fixed"/>
  </w:font>
</w:fonts>'''

def fix(docx_path):
    tmp = docx_path + '.tmp'
    with zipfile.ZipFile(docx_path, 'r') as zin:
        with zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                data = zin.read(item.filename)
                if item.filename == 'word/fontTable.xml':
                    data = FONT_TABLE.encode('utf-8')
                zout.writestr(item, data)
    shutil.move(tmp, docx_path)
    print(f'Fixed fonts in {docx_path}')

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: fix_fonts.py <path-to-docx>')
        sys.exit(1)
    fix(sys.argv[1])
