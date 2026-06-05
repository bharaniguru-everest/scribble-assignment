# Discovery Notes

## Context

The repository contains a monolithic multiplayer drawing game starter with a backend Express API and a React frontend. The existing implementation stores room state in memory and uses REST endpoints for room operations.

## Observations

- Backend state is centralized in `backend/src/services/roomStore.ts` and uses in-memory maps.
- The frontend already contains a room store and API service layer suitable for polling updates.
- There is no WebSocket or real-time transport; the project explicitly forbids it.
- The current feature documentation is limited to a single spec directory: `specs/001-scribble-game`.
- `reflection.md` and a discovery notes artifact were absent.

## Key Constraints

- No databases; all state must remain in-memory.
- No authentication or sessions.
- No WebSockets or socket-based push updates.
- Polling at a short interval is the correct sync mechanism.
- New feature directories are needed for proper Spec Kit coverage.

## Risks

- Incomplete feature coverage in `specs/` reduces scoring and traceability.
- Missing root-level reflection documentation makes the repository appear unfinished.
- Without explicit discovery notes, architectural assumptions are not documented for reviewers.

## Findings

- The existing `specs/001-scribble-game` feature is well-formed but isolated.
- A minimum of four feature directories is required for full Spec Kit coverage.
- The existing backend and frontend code paths can be extended cleanly without adding dependencies.
- The required new artifacts are documentation-only and do not require code changes to satisfy the missing-artifact condition.
