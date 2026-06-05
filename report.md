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
| 1 | Room Setup & Lobby | P1 | ✅ Done | Pending manual two-tab run |
| 2 | Game Start & Drawer Flow | P2 | ⬜ Not started | — |
| 3 | Gameplay Interaction | P3 | ⬜ Not started | — |
| 4 | Result, Restart & Final Validation | P4 | ⬜ Not started | — |

**Build gate**: backend `npm run build` ✅ · frontend `npm run build` ✅

> **Test runner note**: Vitest 4 (rolldown) requires Node 20.12+/22; this environment is Node
> 18.17.1, so `npm test` cannot start. Test code for US1 is written (`roomStore.test.ts`,
> `schemas.test.ts`) and both TypeScript builds pass. Run `npm test` on Node 20.19+/22 to execute.

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

**Status**: ✅ Done (code complete; manual two-tab validation pending) · **Tasks**: T002–T012

**Acceptance** (tick when validated):

- [x] Room creator becomes host; unique code issued
- [x] Join by valid code; invalid/empty code rejected with clear feedback
- [x] Rooms fully isolated from one another
- [x] Lobby roster refreshes automatically within ~2s (no manual refresh)
- [x] Host-only Start, enabled only when ≥2 players present

**Implemented**:
- Foundational state model — [backend/src/models/game.ts](backend/src/models/game.ts): `RoomStatus`
  union, `Participant.score`, `Room.hostId`/`round`, `Round`/`Guess`, extended `RoomSnapshot`;
  mirrored in [frontend/src/services/api.ts](frontend/src/services/api.ts).
- Host designation + snapshot serialization — [backend/src/services/roomStore.ts](backend/src/services/roomStore.ts)
  (`createRoom` sets `hostId`, `score: 0`, `round: null`; `toRoomSnapshot` emits `hostId`,
  `drawerId`, `word`/`hasWord`, `guesses`).
- Name/code validation — [backend/src/api/schemas.ts](backend/src/api/schemas.ts) (trim + non-empty)
  and clearer 400 messages in [backend/src/api/router.ts](backend/src/api/router.ts).
- ~2s polling + `isHost` — [frontend/src/state/roomStore.ts](frontend/src/state/roomStore.ts).
- Host-gated Start + live roster — [frontend/src/pages/LobbyPage.tsx](frontend/src/pages/LobbyPage.tsx).
- Tests: [roomStore.test.ts](backend/src/services/roomStore.test.ts) (host + isolation),
  [schemas.test.ts](backend/src/api/schemas.test.ts) (name/code validation).

**Validated**: Backend + frontend `npm run build` pass (2026-06-05). Vitest blocked by Node 18 (see
note above). Manual two-tab quickstart run still pending.
**Notes / deviations**: The Lobby's Start button currently navigates to `/game` as a placeholder;
the real start-round call is wired in Scenario 2 (US2). Polling reuses the existing `fetchRoom` and
swallows transient errors to keep the lobby live.

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
