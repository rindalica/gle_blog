### var

-변수 재선언 가능.  
-변수 재할당 가능.

```jsx
var a = 1;
var a = 2;
```

### let

-변수 재선언 불가능.  
-변수 재할당 가능.

```jsx
let a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared.
```

```jsx
let a = 1;
a = 2;
```

### const

-변수 재선언 불가능.  
-변수 재할당 가능.

```jsx
const a = 1;
const a = 2; // SyntaxError: Identifier 'a' has already been declared.
```

```jsx
const a = 1;
a = 2; // TypeError: Assignment to constant variable.
```

> var의 유연한 변수 선언이 코드가 길어졌을 때 오류를 발생시킬 수 있어 ES6에 let과 const가 추가됨.

⇒ 참고 자료
https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90
