import re
from pathlib import Path

base = Path('/home/eva/IU_2025-2026/ET2/app')
file_tests = base / 'ET2_infotest.new.js'
file_es = base / 'Textos_ES.js'
file_en = base / 'Textos_EN.js'

s = file_tests.read_text(encoding='utf-8')
# extract all single-quoted strings
strs = re.findall(r"'([^']*)'", s)
# filter unique
strs = list(dict.fromkeys(strs))

# classify
candidate_keys = []
literal_texts = []
for t in strs:
    if re.match(r'^[A-Za-z0-9_]+$', t):
        candidate_keys.append(t)
    elif t.startswith('msg_') or ('_KO' in t) or t.startswith('alumnograduacion') or t.startswith('FicheropdfA') or t.startswith('site_'):
        candidate_keys.append(t)
    else:
        literal_texts.append(t)

# load i18n keys
es = file_es.read_text(encoding='utf-8')
en = file_en.read_text(encoding='utf-8')
keys_es = set(re.findall(r"'([^']+)'\s*:\s*'", es))
keys_en = set(re.findall(r"'([^']+)'\s*:\s*'", en))

missing_es = [k for k in candidate_keys if k not in keys_es]
missing_en = [k for k in candidate_keys if k not in keys_en]

print('TOTAL_STRINGS_IN_TESTFILE:', len(strs))
print('CANDIDATE_KEYS_COUNT:', len(candidate_keys))
print('LITERAL_TEXTS_COUNT:', len(literal_texts))
print('\n-- Literal strings (likely need i18n keys):')
for t in literal_texts[:200]:
    print(repr(t))

print('\n-- Candidate keys used in tests (sample 200):')
for k in candidate_keys[:200]:
    print(k)

print('\n-- Missing in Textos_ES.js (%d):' % len(missing_es))
for k in missing_es[:500]:
    print(k)

print('\n-- Missing in Textos_EN.js (%d):' % len(missing_en))
for k in missing_en[:500]:
    print(k)

# exit code 0
