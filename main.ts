// One Word for Your Wi-Fi — u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
// One word describing the entrant's Wi-Fi: the funniest and most accurate.
// Winner of a 30-candidate single-elimination tournament (see METHOD.md).
// The word is the phone's own verdict turned into a network name: join it
// and it keeps its promise. "Connected, no internet" is the one Wi-Fi
// experience every reader has lived — the joke needs no explanation, and
// the name is the failure, stated flatly. It beat "Microwave" in the final:
// the microwave is the Wi-Fi's murderer, one step removed, while this is
// the Wi-Fi's own status, literally the words on the screen.
// Writes the word to /output/entry.txt, exactly, no trailing newline.
// Gate: 1-20 chars, UTF-8, single word, non-whitespace. This word is
// 10 chars / 10 bytes — comfortably inside the gate and small enough to
// win a size tie-break (exact ties go to the smaller text). No trailing
// newline: the file holds exactly the word, byte for byte. CamelCase is
// how a network name is spelled, and it reads instantly as one word.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "NoInternet";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(WORD);
