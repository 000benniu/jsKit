export class Hello {
    constructor(name) {
      this.name = name;
    }
  
    greet(param) {
      console.log(`こんにちは, ${this.name}さん!${param}`);
    }
  }

  export function HelloFunction(param) {
    console.log('関数のサンプルです。' + param);
  }