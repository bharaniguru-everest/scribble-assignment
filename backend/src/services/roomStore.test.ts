import { describe, expect, it } from "vitest";
import { createRoom, getRoom, joinRoom } from "./roomStore.js";

describe("roomStore", () => {
  it("createRoom returns a room with a 4-character uppercase code", () => {
    const result = createRoom("Alice");

    expect(result.room.code).toMatch(/^[A-Z0-9]{4}$/);
    expect(result.room.participants).toHaveLength(1);
    expect(result.room.participants[0].name).toBe("Alice");
    expect(result.participantId).toBeDefined();
  });

  it("joinRoom returns null for an unknown room code", () => {
    const result = joinRoom("ZZZZ", "Bob");

    expect(result).toBeNull();
  });

  it("createRoom designates the creator as host and starts the score at 0", () => {
    const result = createRoom("Alice");

    expect(result.room.hostId).toBe(result.participantId);
    expect(result.room.status).toBe("lobby");
    expect(result.room.round).toBeNull();
    expect(result.room.participants[0].score).toBe(0);
  });

  it("keeps rooms isolated — joining one room does not affect another", () => {
    const roomA = createRoom("Alice");
    const roomB = createRoom("Bob");

    joinRoom(roomA.room.code, "Carol");

    expect(getRoom(roomA.room.code)?.participants).toHaveLength(2);
    expect(getRoom(roomB.room.code)?.participants).toHaveLength(1);
  });
});
