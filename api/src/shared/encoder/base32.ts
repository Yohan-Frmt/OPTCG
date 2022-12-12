const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

export const encode = (buffer: ArrayBuffer): string => {
  const length = buffer.byteLength;
  const data = new Uint8Array(buffer);
  let num = 0;
  let code = "";
  let value = 0;
  for (let index = 0; index < length; index++) {
    value = (value << 8) | data[index];
    num += 8;
    while (num >= 5) {
      code += alphabet[(value >>> (num - 5)) & 31];
      num -= 5;
    }
  }
  if (num > 0) code += alphabet[(value << (5 - num)) & 31];
  while (code.length % 8 !== 0) code += "=";
  return code;
};

export const decode = (code: string): ArrayBuffer => {
  const readChar = (char: string): number => {
    const index = alphabet.indexOf(char);
    if (index === -1) throw new Error("Invalid character found: " + char);
    return index;
  };
  const input = code.toUpperCase().replace(/=+$/, "");
  let num = 0;
  let index = 0;
  let value = 0;
  const output = new Uint8Array(((input.length * 5) / 8) | 0);
  for (let i = 0; i < input.length; i++) {
    value = (value << 5) | readChar(input[i]);
    num += 5;
    if (num < 8) continue;
    output[index++] = (value >>> (num - 8)) & 255;
    num -= 8;
  }
  return output.buffer;
};
