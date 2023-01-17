export default class VarInt {
  private static readonly AllButMSB = 0x7f;
  private static readonly JustMSB = 0x80;

  private bytes: Uint8Array;

  constructor(_bytes: ArrayBuffer | Uint8Array) {
    this.bytes = new Uint8Array(_bytes);
  }

  public get length(): number {
    return this.bytes.length;
  }

  public static Get = (value: number): Uint8Array => {
    const buff = new Uint8Array(10);
    let currentIndex = 0;
    if (value == 0) return new Uint8Array([0]);
    while (value !== 0) {
      let byteVal = value & this.AllButMSB;
      value >>= 7;
      if (value != 0) byteVal |= this.JustMSB;
      buff[currentIndex++] = byteVal;
    }
    return buff.slice(0, currentIndex);
  };

  public get = (index: number): number => this.bytes[index];

  public Pop = (): number => {
    let result = 0;
    let currentShift = 0;
    let popped = 0;
    for (let i = 0; i < this.bytes.length; i++) {
      popped++;
      const current = this.bytes[i] & VarInt.AllButMSB;
      result |= current << currentShift;
      if ((this.bytes[i] & VarInt.JustMSB) != VarInt.JustMSB) {
        this.bytes = this.bytes.slice(popped);
        return result;
      }
      currentShift += 7;
    }
    throw "Byte array did not contain valid varints.";
  };
}
