export default class VarInt {
  private static readonly AllButMSB = 0x7f;
  private static readonly JustMSB = 0x80;

  constructor(_b: ArrayBuffer | Uint8Array) {
    this._bytes = new Uint8Array(_b);
  }

  private _bytes: Uint8Array;

  get bytes(): Uint8Array {
    return this._bytes;
  }

  set bytes(value: Uint8Array) {
    this._bytes = value;
  }

  public get length(): number {
    return this.bytes.length;
  }

  public static Get = (value: number): Uint8Array => {
    const buffer = new Uint8Array(10);
    let idx = 0;
    if (value == 0) return new Uint8Array([0]);
    while (value !== 0) {
      let byte = value & this.AllButMSB;
      value >>= 7;
      if (value != 0) byte |= this.JustMSB;
      buffer[idx++] = byte;
    }
    return buffer.slice(0, idx);
  };

  public Pop = (): number => {
    let result = 0;
    let nbShift = 0;
    let nbPopped = 0;

    for (let i = 0; i < this.bytes.length; i++) {
      nbPopped++;
      const current = this.bytes[i] & VarInt.AllButMSB;
      result |= current << nbShift;
      if ((this.bytes[i] & VarInt.JustMSB) != VarInt.JustMSB) {
        this.bytes = this.bytes.slice(nbPopped);
        return result;
      }
      nbShift += 7;
    }
    throw "Byte array did not contain valid varints.";
  };
}
