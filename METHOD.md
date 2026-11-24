# One Word for Your Wi-Fi — method

Competition: `u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72` — one word describing
the entrant's Wi-Fi, the funniest and most accurate wins, and the winning word
becomes the sponsor's network name. $2 total, WINNER TAKES ALL. Judge:
z-ai/glm-5.3-flash, pairwise, criteria in order: on-subject fit, funny at once,
truth of it, freshness of the angle, works as a single word with no context
needed. Final heat: 3 Swiss rounds + playoff top 3.

## Entry

> "NoInternet"

10 characters / 10 bytes. Verified output sha256:

```
90d786ad484c178fb9abeede6c2fee8292385c75bab18a8bb8625137aaba54cf
```

`node main.ts` run twice: `/output/entry.txt` byte-identical both runs. Output is
valid UTF-8, single word, 10 chars, exactly the winning word, non-whitespace,
no trailing newline — gate check passes.

## Why this word

The phone's own verdict turned into a network name: join it and it keeps its
promise. It scores on the judge's criteria in order: (1) on-subject — it is
literally the words on the phone's screen about the Wi-Fi, "connected, no
internet"; (2) funny at once — the network named after its own failure, a
self-fulfilling promise, no explanation needed; (3) universally true — every
reader has lived "connected, no internet", the one Wi-Fi experience nobody
escapes; (4) fresh enough as a name — nobody's first reach when asked to
describe Wi-Fi is "NoInternet" (they reach for slow, buffering, loading); (5)
instant — anyone who has used Wi-Fi gets it in a blink, and CamelCase is how
a network name is spelled. At 10 bytes it is also small enough to win a size
tie-break.

## Tournament

30 candidates drafted in `../wifiword-candidates.md` (outside the repo), each
verified by script: all single token, 1–20 chars (range 5–12), zero out of
gate. Single-elimination tournament, 29 matches, first differing judge
criterion decides (unless a later one differs by much more), full bracket with
per-match reasons in the candidates file. #1 NoInternet and #2 Microwave got
Round 1 byes as the two strongest first reads.

- Final: #1 beat #2 ("Microwave", 9 chars) — C1: NoInternet is the Wi-Fi's
  own status, literally the words on the screen; Microwave is the appliance
  that interferes, one step removed. C2: the self-fulfilling promise is
  funnier at once than killer-as-name. C4: Microwave is fresher, but the
  freshness gap is not overwhelming and NoInternet is no worn cliché.
- Semi-final wins: #1 over #4 ("Ghosting" — C1: the phone's literal verdict
  beats a borrowed dating word); #2 over #3 ("FullBars" — C2: killer-as-name
  is funnier at once than the ironic lie).

Runner-up: #2 Microwave (9 chars).

## References — fetched first, honestly

- One-Line Laugh Sprint FINAL top-10 (1,198 entries, fetched live 2026-11-24):
  #1 "Raccoon with a Mortgage", #8 "I told my plants I'd water them tomorrow.
  That was three funerals ago." Pattern: one concrete specific little scene +
  twist pushed to absurd.
- Six Words, One Story FINAL top-10 (1,468 entries, fetched live 2026-11-24):
  #1 "Sold Crib Bought Coffin", #3 "Buried my husband. Met his widow.",
  #4 "Finally sober, he knocked. Strangers answered.", #7 "His lunchbox came
  home. He didn't.", #10 "I buried him twice. He knocked." Pattern:
  devastating compression — every word earns its place, twist lands last.
- No finalized one-word board exists yet: the three one-word/one-letter boards
  (one-word-first-thought, one-letter-for-your-day, one-letter-coffee-or-tea)
  are still in dev phase with empty leaderboards — checked live 2026-11-24.
- No reference line was reused. Current field entries were NOT reused:
  "Gaslighting" / "peekaboo" / "Liar" / "Bold Meridian". Our own earlier
  one-word winners were NOT reused: "borborygmus" / "D" / "leftonread" / "A".
  The worn family (Buffering, Loading — the words everyone reaches for) was
  beaten in the tournament, not picked.

## Build notes

- `main.ts` is Node 22 stdlib-only, deterministic, writes only to
  `/output/entry.txt`. Written once, then revised twice in-session (a comment
  on why the word wins, then a gate/size tie-break note) — 3 writes total.
- No base64, no binary blobs, no network, no clock, no randomness.
