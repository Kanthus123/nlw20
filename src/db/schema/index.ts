// Barrel file -> arquivo que re-exporta todos os arquivos dentro dele

import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

export const schema = {
    rooms,
    questions
}