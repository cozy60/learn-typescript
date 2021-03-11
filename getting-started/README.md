## npm i typescript -g
typescript 설치하기

## tsc 파일명.ts 
typescript 컴파일하기

## tsconfig.json을 이용해 컴파일 옵션 설정하기

```
{
    "compilerOptions": {
        "allowJs": "true", // 자바스크립트 설정 허용
        "checkJs": true, // @ts-check와 같은 역할을 한다.
        "noImplicitAny": true // 기본적인 타입 any라도 넣어야 한다.
    }
}
```

이외 옵션들은 https://www.typescriptlang.org/tsconfig 에서 확인할 수 있다.