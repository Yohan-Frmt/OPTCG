const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

export function encode(buffer: ArrayBuffer): string {
  const length = buffer.byteLength;
  const binaryData = new Uint8Array(buffer);
  let numBitsProcessed = 0;
  let encodedString = "";
  let value = 0;
  for (let idx = 0; idx < length; idx++) {
    value = (value << 8) | binaryData[idx];
    numBitsProcessed += 8;
    while (numBitsProcessed >= 5) {
      encodedString += alphabet[(value >>> (numBitsProcessed - 5)) & 31];
      numBitsProcessed -= 5;
    }
  }
  if (numBitsProcessed > 0)
    encodedString += alphabet[(value << (5 - numBitsProcessed)) & 31];
  while (encodedString.length % 8 !== 0) encodedString += "=";
  return encodedString;
}

export function decode(input: string): ArrayBuffer {
  function readCharOrThrowError(char: string): number {
    const idx = alphabet.indexOf(char);
    if (idx === -1) throw new Error("Invalid character found: " + char);
    return idx;
  }

  const cleanedInput = input.toUpperCase().replace(/=+$/, "");
  let numBitsProcessed = 0;
  let outputIdx = 0;
  let value = 0;
  const output = new Uint8Array(((cleanedInput.length * 5) / 8) | 0);
  for (
    let currCharOfInput = 0;
    currCharOfInput < cleanedInput.length;
    currCharOfInput++
  ) {
    value = (value << 5) | readCharOrThrowError(cleanedInput[currCharOfInput]);
    numBitsProcessed += 5;
    if (numBitsProcessed >= 8) {
      output[outputIdx++] = (value >>> (numBitsProcessed - 8)) & 255;
      numBitsProcessed -= 8;
    }
  }
  return output.buffer;
}
