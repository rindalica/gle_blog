『긴 글의 첫 문장을 들여쓰고 싶을 때,  
CSS 속성 중 들여쓰기가 있는지 검색해보았다.』

● text-indent : 첫 문장 들여쓰기  
-기본값은 0  
-양수값은 들여쓰기  
-음수값은 내어쓰기  
-px, pt, cm, em 등 : 고정된 값  
-% : 상위 요소 너비의 %

『글의 일부에 밑줄을 그어주고 싶을 때,  
글이 담겨있는 태그의 border-bottom 속성을 작성했었는데,  
CSS 속성 중에 밑줄 속성이 있었다.』

● text-decoration : 선으로 text를 꾸미는 속성  
none : 선 없음  
line-through : 글자 중간에 선  
overline : 글자 위에 선  
underline : 글자 아래에 선  
※ 속성값을 여러개 사용하면 여러 선 구현 가능  
ex. text-decoration: overline underline; (위 아래에 선)

밑줄의 두께나 색깔 등, 완벽하게 커스터마이징 하기가 어려울 때는  
border-bottom으로 내가 원하는 스타일로 밑줄을 칠 수 있다.  
css 문법으로 볼 때는 밑줄이 아니라 아래쪽 테두리이지만  
내가 원하는대로 디자인할 수 있어 많은 개발자들이 선호한다.

참고) www.w3schools.com
