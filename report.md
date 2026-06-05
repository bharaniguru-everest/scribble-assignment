# Scribble Guessing Game — Working Feature Report

> **Living document.** Update this after each scenario is implemented and validated. Tick the
> checklist, flip the status, and fill the "Implemented" / "Validated" / "Notes" columns.
> Spec: [specs/001-scribble-game/spec.md](specs/001-scribble-game/spec.md) ·
> Tasks: [specs/001-scribble-game/tasks.md](specs/001-scribble-game/tasks.md)

**Last updated**: 2026-06-05
**Branch**: `001-scribble-game`
**Status legend**: ⬜ Not started · 🟡 In progress · ✅ Done

## Summary

| # | Scenario (User Story) | Priority | Status | Validated (two tabs) |
|---|-----------------------|----------|--------|----------------------|
| 1 | Room Setup & Lobby | P1 | ⬜ Not started | — |
| 2 | Game Start & Drawer Flow | P2 | ⬜ Not started | — |
| 3 | Gameplay Interaction | P3 | ⬜ Not started | — |
| 4 | Result, Restart & Final Validation | P4 | ⬜ Not started | — |

**Build gate**: backend `npm run build` ⬜ · frontend `npm run build` ⬜

---

## Currently Working (baseline — starter scaffold)

These shipped in the starter before any scenario work:

- App shell, routing, and branded pages (Start, Create Room, Join Room, Lobby, Game)
- Create room flow (`POST /rooms`) and join-by-code flow (`POST /rooms/:code/join`)
- Fetch room snapshot (`GET /rooms/:code`) with **manual** lobby refresh
- In-memory room storage (`backend/src/services/roomStore.ts`)
- Game screen placeholders (canvas, guess input, scoreboard, result)

Not yet working: host permissions, auto polling, start game, drawer assignment, word visibility,
drawing, clear canvas, guess submission/scoring, synced history, result state, restart.

---

## Scenario 1 — Room Setup & Lobby (P1)

**Status**: ⬜ Not started · **Tasks**: T006–T012

**Acceptance** (tick when validated):

- [ ] Room creator becomes host; unique code issued
- [ ] Join by valid code; invalid/empty code rejected with clear feedback
- [ ] Rooms fully isolated from one another
- [ ] Lobby roster refreshes automatically within ~2s (no manual refresh)
- [ ] Host-only Start, enabled only when ≥2 players present

**Implemented**: _(list files/commits when done)_
**Validated**: _(date + how, e.g. two-tab quickstart steps)_
**Notes / deviations**: _(none yet)_

---

## Scenario 2 — Game Start & Drawer Flow (P2)

**Status**: ⬜ Not started · **Tasks**: T013–T018

**Acceptance**:

- [ ] Player names trimmed; empty/whitespace rejected
- [ ] Host starts round; exactly one drawer identified
- [ ] Secret word selected deterministically from the starter list
- [ ] Word visible only to the drawer (hidden from guessers)

**Implemented**: _(pending)_
**Validated**: _(pending)_
**Notes / deviations**: _(none yet)_

---

## Scenario 3 — Gameplay Interaction (P3)

**Status**: ⬜ Not started · **Tasks**: T019–T025

**Acceptance**:

- [ ] Drawer can draw on the canvas and clear it
- [ ] Guesses trimmed; empty/whitespace rejected
- [ ] Guess comparison is case-insensitive and whitespace-insensitive
- [ ] Guess history synced to all players within ~2s
- [ ] Scores start at 0; correct = 100, incorrect = 0

**Implemented**: _(pending)_
**Validated**: _(pending)_
**Notes / deviations**: _(none yet)_

---

## Scenario 4 — Result, Restart & Final Validation (P4)

**Status**: ⬜ Not started · **Tasks**: T026–T031

**Acceptance**:

- [ ] All players see correct word, final scores, and full guess history
- [ ] Host can restart from the result state
- [ ] Restart returns everyone to the lobby with roster preserved
- [ ] All round state (drawer, word, drawing, guesses, scores) cleared on restart

**Implemented**: _(pending)_
**Validated**: _(pending)_
**Notes / deviations**: _(none yet)_

---

## How to update this report

After completing a scenario:

1. Flip its **Status** (⬜ → 🟡 → ✅) and the row in the Summary table.
2. Tick the acceptance checkboxes you validated with two browser tabs.
3. Fill **Implemented** (files/commits), **Validated** (date + method), and any **deviations**.
4. Bump **Last updated** and, when both builds pass, tick the **Build gate**.
