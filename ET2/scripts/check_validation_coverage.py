#!/usr/bin/env python3
"""
Simple audit: parse ET2_infotest.js for entity/field pairs and scan app/*.js
for functions named personalize_<field>_<ACTION> or ADD_<field>_validation or EDIT_<field>_validation.
Print totals and missing pairs.
"""
import re
from pathlib import Path

base = Path('/home/eva/IU_2025-2026/ET2/app')
file_tests = base / 'ET2_infotest.js'

s = file_tests.read_text(encoding='utf-8')
# find unique entity-field pairs in tests
pairs = re.findall(r"Array\('\w+','(\w+)'[\s\S]*?,\d+,.*?,'(ADD|EDIT|SEARCH)'", s)
# pairs is list of tuples (field, action)
unique = []
for f,a in pairs:
    if (f,a) not in unique:
        unique.append((f,a))

# scan app files for function names
files = list(base.glob('*.js'))
content = '\n'.join([p.read_text(encoding='utf-8') for p in files])

found = set()
for f,a in unique:
    # look for personalize_field_ACTION
    pa = f"personalize_{f}_{a}"
    add = f"ADD_{f}_validation"
    edit = f"EDIT_{f}_validation"
    if re.search(rf"\b{pa}\b", content):
        found.add((f,a))
        continue
    if a=='ADD' and re.search(rf"\b{add}\b", content):
        found.add((f,a))
        continue
    if a=='EDIT' and re.search(rf"\b{edit}\b", content):
        found.add((f,a))
        continue
    # SEARCH maps to personalize_<field>_SEARCH or ADD/EDIT presence
    if a=='SEARCH' and (re.search(rf"\bpersonalize_{f}_SEARCH\b", content) or re.search(rf"\bADD_{f}_validation\b", content) or re.search(rf"\bEDIT_{f}_validation\b", content)):
        found.add((f,a))

missing = [p for p in unique if p not in found]
print('TOTAL_PAIRS:', len(unique))
print('FOUND:', len(found))
print('MISSING:', len(missing))
for m in missing:
    print(m[0]+','+m[1])
