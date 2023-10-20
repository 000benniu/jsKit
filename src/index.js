import { Hello, HelloFunction } from "./hello";

new Hello("テスト　タロ").greet();
HelloFunction();

window.jskit_global_function = () => {
    console.log('グローバル関数です。');
}
