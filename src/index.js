import { Hello, HelloFunction } from "./hello";

new Hello("テスト　タロ").greet("元気ですか？");
HelloFunction("挨拶が大事です。");

window.jskit_global_function = (param) => {
    console.log("グローバル関数です。" + param);
}
