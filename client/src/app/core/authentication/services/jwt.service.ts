import { Injectable } from '@angular/core';
import { CredentialsService } from './credentials.service';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(private readonly _credentials: CredentialsService) {}

  public isTokenExpired = (
    token: string | undefined = this._credentials.getAccessToken(),
    offset?: number,
  ): boolean => {
    if (!token || token === '') return true;
    const date = this.getTokenExp(token);
    offset ||= 0;
    if (!date) return false;
    return !(date.valueOf() > new Date().valueOf() + offset * 1000);
  };

  public getTokenExp = (
    token: string | undefined = this._credentials.getAccessToken(),
  ): Date | null => {
    const decoded = this.decode(token);
    if (!decoded || !decoded.hasOwnProperty('exp')) return null;
    const date = new Date();
    date.setUTCSeconds(decoded.exp);
    return date;
  };

  public decode<T = any>(
    token: string | undefined = this._credentials.getAccessToken(),
  ): T | null {
    if (!token || token === '') return null;
    const parts = token.split('.');
    if (parts.length !== 3) throw new Error('Token is not a JWT.');
    const decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) throw new Error("Can't decode token.");
    return JSON.parse(decoded);
  }

  public urlBase64Decode(str: string): string {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: {
        break;
      }
      case 2: {
        output += '==';
        break;
      }
      case 3: {
        output += '=';
        break;
      }
      default: {
        throw new Error('Illegal base64url string!');
      }
    }
    return decodeURIComponent(
      this._atob(output).replace(/(.)/g, (m, p) => {
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) code = '0' + code;
        return '%' + code;
      }),
    );
  }

  private _atob = (input: string): string => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    const str = String(input).replace(/=+$/, '');
    let output = '';
    if (str.length % 4 === 1)
      throw new Error('The string to be decoded is not correctly encoded.');
    for (
      let bc = 0, bs: any, buffer: any, i = 0;
      (buffer = str.charAt(i++));
      ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      buffer = chars.indexOf(buffer);
    }
    return output;
  };
}
