// Barrel file -> arquivo que re-exporta todos os arquivos dentro dele

import { audioChunks } from "./audio-chunks.ts";
import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

export const schema = {
    rooms,
    questions,
    audioChunks,
}