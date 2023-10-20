export class Hello {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`こんにちは, ${this.name}さん!`);
    }
  }

  export function HelloFunction() {
    console.log('関数のサンプルです。');
  }