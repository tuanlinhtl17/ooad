(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(n,c,t){n.exports=t(45)},35:function(n,c,t){},36:function(n,c,t){},45:function(n,c,t){"use strict";t.r(c);var h=t(0),i=t.n(h),a=t(25),g=t.n(a),r=(t(35),t(36),t(8)),o=t(9),e=t(47),s=t(48),u=t(50),m=t(12),p=t(13),l=t(17),v=t(14),d=t(16),k=t(46),b=t(49),y=["A","B","C","D","E"],C=function(n){function c(n){var t;return Object(m.a)(this,c),(t=Object(l.a)(this,Object(v.a)(c).call(this,n))).state={is_correct:!1,selected:[]},t}return Object(d.a)(c,n),Object(p.a)(c,[{key:"displayCorrects",value:function(n,c){if(c){var t=n.map(function(n){return y[n]}).join(" ");return i.a.createElement("p",null,"Correct answers: ",i.a.createElement("strong",null,t))}}},{key:"render",value:function(){var n=this.props,c=n.question,t=n.index,h=n.checked;return i.a.createElement("div",{className:"question",key:t},i.a.createElement("p",{className:"content"},i.a.createElement("strong",null,t+1,". ",c.cont)),i.a.createElement(b.a,null,c.answers.map(function(n,c){return i.a.createElement("div",{key:c},i.a.createElement("input",{type:"checkbox",value:c}),i.a.createElement("label",null,i.a.createElement("strong",null,y[c],".")," ",n))})),this.displayCorrects(c.corrects,h),i.a.createElement("br",null))}}]),c}(h.Component),w=function(n){function c(n){var t;return Object(m.a)(this,c),(t=Object(l.a)(this,Object(v.a)(c).call(this,n))).checkAnswer=function(){t.setState({checked:!0})},t.state={checked:!1},t}return Object(d.a)(c,n),Object(p.a)(c,[{key:"render",value:function(){var n=this,c=this.props.questions;return i.a.createElement("div",{className:"questions"},c.map(function(c,t){return i.a.createElement(C,{key:t,question:c,index:t,checked:n.state.checked})}),i.a.createElement(k.a,{variant:"primary",onClick:this.checkAnswer},"Check"),i.a.createElement("hr",null))}}]),c}(h.Component),q=[{cont:"Ph\xe1t bi\u1ec3u n\xe0o sau \u0111\xe2y l\xe0 ch\xednh x\xe1c?",answers:["UML l\xe0 quy tr\xecnh ph\xe1t tri\u1ec3n c\xe1c h\u1ec7 th\u1ed1ng ph\u1ea7n m\u1ec1m","UML l\xe0 ng\xf4n ng\u1eef ph\u1ee5 thu\u1ed9c v\xe0o quy tr\xecnh ph\xe1t tri\u1ec3n v\xe0 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 bi\u1ec3u di\u1ec5n tr\u1ef1c quan c\xe1c ch\u1ebf t\xe1c ph\u1ea7n m\u1ec1m","UML l\xe0 ng\xf4n ng\u1eef m\xf4 h\xecnh h\xf3a cho c\xe1c b\u1ea3n thi\u1ebft k\u1ebf ph\u1ea7n m\u1ec1m","UML l\xe0 ng\xf4n ng\u1eef l\u1eadp tr\xecnh tr\u1ef1c quan"],corrects:[2]},{cont:"\u0110\xe2u l\xe0 3 \u0111i\u1ec3m kh\xe1c bi\u1ec7t gi\u1eefa l\u1edbp c\u1ea5u tr\xfac v\xe0 l\u1edbp truy\u1ec1n th\u1ed1ng (Ch\u1ecdn 3)",answers:["N\xf3 \u0111\u1ecbnh ngh\u0129a r\xf5 r\xe0ng m\u1ed9t l\u1edbp bi\xean th\xf4ng qua m\u1ed9t v\u1ecf bao \u0111\xf3ng (encapsulation shell)","N\xf3 \u0111\u01b0a ra c\xe1c public interfaces cho l\u1edbp th\xf4ng qua c\xe1c c\u1ed5ng","N\xf3 cho th\u1ea5y vai tr\xf2 c\u1ee7a l\u1edbp","N\xf3 \u0111\u1ecbnh ngh\u0129a c\xe1c message gi\u1eefa ch\xednh n\xf3 v\xe0 c\xe1c l\u1edbp kh\xe1c"],corrects:[0,1,2]},{cont:"\u0110\xe2u l\xe0 \u0111\u1eb7c \u0111i\u1ec3m c\u1ee7a l\u1edbp c\u1ea5u tr\xfac ?",answers:["Ph\u1ea3i c\xf3 m\u1ed9t giao di\u1ec7n cho m\u1ed7i vai tr\xf2","Ch\u1ec9 c\xf3 th\u1ec3 \u0111\xf3ng m\u1ed9t vai tr\xf2, b\u1ea5t k\u1ec3 c\xf3 bao nhi\xeau \u0111\u1ed1i t\u01b0\u1ee3ng giao d\u1ecbch v\u1edbi n\xf3","C\xf3 th\u1ec3 \u0111\xf3ng nhi\u1ec1u vai tr\xf2 kh\xe1c nhau d\u1ef1a tr\xean c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng t\u01b0\u01a1ng t\xe1c v\u1edbi n\xf3","B\u1ecb gi\u1edbi h\u1ea1n \u1edf m\u1ed9t vai tr\xf2, nh\u01b0ng c\xf3 th\u1ec3 c\xf3 nhi\u1ec1u giao di\u1ec7n"],corrects:[2]},{cont:"Ph\xe1t bi\u1ec3u n\xe0o l\xe0 \u0111\xfang v\u1ec1 m\u1ed9t qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n l\u1eb7p",answers:["Test v\xe0 t\xedch h\u1ee3p trong m\u1ed7i l\u1ea7n l\u1eb7p","M\u1ed7i l\u1ea7n l\u1eb7p l\u1ea1i t\u1eadp trung v\xe0o m\u1ed9t ph\u1ea7n c\u1ee7a hi\u1ec7n th\u1ef1c h\xf3a use-case \u0111\u01b0\u1ee3c l\u1ef1a ch\u1ecdn","N\xf3 khuy\u1ebfn kh\xedch ph\u1ea3n h\u1ed3i ng\u01b0\u1eddi d\xf9ng trong c\xe1c l\u1ea7n l\u1eb7p sau","N\xf3 d\u1ef1a tr\xean ch\u1ee9c n\u0103ng ph\xe2n h\u1ee7y c\u1ee7a m\u1ed9t h\u1ec7 th\u1ed1ng"],corrects:[0]},{cont:"Hai c\xe2u n\xe0o \u0111\xfang v\u1ec1 giao di\u1ec7n?",answers:["Giao di\u1ec7n n\xean c\xf3 m\u1ee5c \u0111\xedch r\xf5 r\xe0ng","M\u1ed9t giao di\u1ec7n duy nh\u1ea5t n\xean bao g\u1ed3m c\xe0ng nhi\u1ec1u ph\u01b0\u01a1ng th\u1ee9c c\xf3 th\u1ec3, n\u1ebfu kh\xf4ng ph\u1ea3i t\u1ea5t c\u1ea3 c\xe1c ph\u01b0\u01a1ng th\u1ee9c, c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c chia s\u1ebb","M\u1ed9t giao di\u1ec7n n\xean \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 h\u1ea1n ch\u1ebf ph\u01b0\u01a1ng th\u1ee9c n\xe0o \u0111\u01b0\u1ee3c ti\u1ebfp x\xfac v\u1edbi m\xe1y kh\xe1ch","C\xe1c l\u1edbp c\xf3 th\u1ec3 c\xf3 nhi\u1ec1u giao di\u1ec7n t\xf9y thu\u1ed9c v\xe0o m\u1ee5c \u0111\xedch c\u1ee7a t\u1eebng giao di\u1ec7n m\xe0 n\xf3 th\u1ef1c hi\u1ec7n"],corrects:[0,3]},{cont:"Tr\u1ecdng t\xe2m c\u1ee7a ph\xe2n t\xedch l\xe0 g\xec?",answers:["Chuy\u1ec3n c\xe1c y\xeau c\u1ea7u ch\u1ee9c n\u0103ng th\xe0nh code","Chuy\u1ec3n c\xe1c y\xeau c\u1ea7u th\xe0nh m\u1ed9t thi\u1ebft k\u1ebf h\u1ec7 th\u1ed1ng","Chuy\u1ec3n c\xe1c kh\xe1i ni\u1ec7m trong th\u1ebf gi\u1edbi th\u1ef1c sang c\xe1c solution-oriented objects","Chuy\u1ec3n c\xe1c y\xeau c\u1ea7u ch\u1ee9c n\u0103ng th\xe0nh c\xe1c kh\xe1i ni\u1ec7m ph\u1ea7n m\u1ec1m"],corrects:[3]},{cont:"T\u1ea1i sao \u0111\xf3ng g\xf3i l\u1ea1i quan tr\u1ecdng? (Ch\u1ecdn hai)",answers:["N\xf3 m\xf4 t\u1ea3 m\u1ed1i quan h\u1ec7 gi\u1eefa hai l\u1edbp con","N\xf3 \u0111\u1eb7t c\xe1c ho\u1ea1t \u0111\u1ed9ng v\xe0 thu\u1ed9c t\xednh trong c\xf9ng m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng","N\xf3 cho ph\xe9p c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng kh\xe1c thay \u0111\u1ed5i c\xe1c private operations v\xe0 attributes c\u1ee7a m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng","N\xf3 ng\u0103n c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng kh\xe1c thay \u0111\u1ed5i tr\u1ef1c ti\u1ebfp c\xe1c thu\u1ed9c t\xednh c\u1ee7a m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng"],corrects:[1,3]},{cont:"C\xe1c l\u1edbp ph\xe2n t\xedch l\xe0 g\xec?",answers:["C\xe1c d\u1ef1 \u0111o\xe1n ban \u0111\u1ea7u v\u1ec1 c\u1ea5u tr\xfac c\u1ee7a h\u1ec7 th\u1ed1ng, ch\xfang th\u01b0\u1eddng thay \u0111\u1ed5i theo th\u1eddi gian v\xe0 hi\u1ebfm khi t\u1ed3n t\u1ea1i nguy\xean v\u1eb9n cho \u0111\u1ebfn khi \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t","C\xe1c l\u1edbp kh\xf4ng ho\xe0n thi\u1ec7n m\xe0 l\u1eadp tr\xecnh vi\xean c\u1ea7n x\xe1c l\u1eadp t\xean c\u1ee7a c\xe1c thao t\xe1c v\xe0 ki\u1ec3u c\u1ee7a c\xe1c thu\u1ed9c t\xednh tr\u01b0\u1edbc khi ch\xfang c\xf3 th\u1ec3 c\xe0i \u0111\u1eb7t \u0111\u01b0\u1ee3c","C\xe1c l\u1edbp b\xean trong m\u1ed9t h\u1ec7 th\u1ed1ng \u0111\u1ed1i t\u01b0\u1ee3ng nghi\u1ec7p v\u1ee5 (Business object) ho\u1eb7c m\xf4 h\xecnh mi\u1ec1n (Domain Model) s\u1eed d\u1ee5ng UML","M\u1ed9t nguy\xean m\u1eabu (prototype) c\u1ee7a giao di\u1ec7n ng\u01b0\u1eddi d\xf9ng c\u1ee7a m\u1ed9t h\u1ec7 th\u1ed1ng, \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n trong Pha ph\xe2n t\xedch, cho ph\xe9p ng\u01b0\u1eddi d\xf9ng x\xe1c \u0111\u1ecbnh giao di\u1ec7n v\xe0 t\u01b0\u01a1ng t\xe1c v\u1edbi h\u1ec7 th\u1ed1ng"],corrects:[0]},{cont:"M\u1ed9t ki\u1ebfn tr\xfac s\u01b0 c\xf3 tr\xe1ch nhi\u1ec7m t\u1ea1o ra m\u1ed9t m\xf4 h\xecnh ph\xe2n t\xedch cho m\u1ed9t h\u1ec7 th\u1ed1ng. \u0110\u1ec3 t\u1ea1o ra m\xf4 h\xecnh n\xe0y c\u1ea7n t\u1eadp trung v\xe0o ph\u1ea7n n\xe0o?",answers:["Ph\u1ea7n c\u1ee9ng n\u01a1i m\xe0 h\u1ec7 th\u1ed1ng \u0111\u01b0\u1ee3c tri\u1ec3n khai","H\xe0nh vi c\u1ee7a c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng bao g\u1ed3m h\u1ec7 th\u1ed1ng","S\u1ef1 ph\xe1t tri\u1ec3n c\u1ee7a h\u1ec7 th\u1ed1ng ph\xe2n t\xedch v\xe0o h\u1ec7 th\u1ed1ng thi\u1ebft k\u1ebf","Y\xeau c\u1ea7u v\u1ec1 hi\u1ec7u n\u0103ng c\u1ee7a h\u1ec7 th\u1ed1ng"],corrects:[1]},{cont:"M\u1ed9t required interface l\xe0m g\xec?",answers:["Tr\u01b0ng b\xe0y d\u1ecbch v\u1ee5 cho ng\u01b0\u1eddi y\xeau c\u1ea7u \u1ea9n danh","S\u1eed d\u1ee5ng c\xe1c d\u1ecbch v\u1ee5 m\xe0 tr\xecnh ph\xe2n lo\u1ea1i y\xeau c\u1ea7u \u0111\u1ec3 y\xeau c\u1ea7u t\u1eeb c\xe1c nh\xe0 cung c\u1ea5p \u1ea9n danh","Tuy\xean b\u1ed1 c\xe1c d\u1ecbch v\u1ee5 m\xe0 tr\xecnh ph\xe2n lo\u1ea1i cung c\u1ea5p \u0111\u1ec3 cung c\u1ea5p cho ng\u01b0\u1eddi y\xeau c\u1ea7u \u1ea9n danh","Tr\u01b0ng b\xe0y ra c\xe1c ph\u01b0\u01a1ng th\u1ee9c m\xe0 ng\u01b0\u1eddi y\xeau c\u1ea7u ph\u1ea3i s\u1eed d\u1ee5ng"],corrects:[1]},{cont:"Trong s\u01a1 \u0111\u1ed3 tr\xecnh t\u1ef1, m\u1ed7i t\u01b0\u01a1ng t\xe1c tr\xean s\u01a1 \u0111\u1ed3 \xe1nh x\u1ea1 t\u1edbi",answers:["m\u1ed9t \u0111i\u1ec3m l\u1ef1a ch\u1ecdn tr\xean s\u01a1 \u0111\u1ed3 tr\u1ea1ng th\xe1i","qu\xe1 tr\xecnh chuy\u1ec3n \u0111\u1ed5i tr\xean s\u01a1 \u0111\u1ed3 tr\u1ea1ng th\xe1i","m\u1ed9t tr\u1ea1ng th\xe1i tr\xean s\u01a1 \u0111\u1ed3","tr\u1ea1ng th\xe1i ban \u0111\u1ea7u"],corrects:[1]},{cont:"Hai c\xe2u h\u1ecfi n\xe0o c\u1ea7n ph\u1ea3i tr\u1ea3 l\u1eddi khi mu\u1ed1n s\u1eed d\u1ee5ng m\u1ed1i quan h\u1ec7 nhi\u1ec1u-nhi\u1ec1u (Ch\u1ecdn hai)?",answers:["\u0110\xf3 l\xe0 m\u1ed1i quan h\u1ec7 r\xe0ng bu\u1ed9c hay t\xf9y ch\u1ecdn?","C\xf3 bao nhi\xeau li\xean k\u1ebft m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a m\u1ed9t lo\u1ea1i duy tr\xec v\u1edbi c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a lo\u1ea1i kh\xe1c?","M\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a m\u1ed9t lo\u1ea1i nh\u1ea5t \u0111\u1ecbnh \u0111\u01b0\u1ee3c ph\xe9p t\u01b0\u01a1ng t\xe1c v\u1edbi c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a lo\u1ea1i kh\xe1c?","M\u1ed1i quan h\u1ec7 gi\u1eefa c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng l\xe0 v\u0129nh vi\u1ec5n hay t\u1ea1m th\u1eddi?"],corrects:[0,1]},{cont:"Hai c\xe2n nh\u1eafc quan tr\u1ecdng khi v\u1ebd s\u01a1 \u0111\u1ed3 tr\u1ea1ng th\xe1i l\xe0 g\xec?",answers:["B\u1ea5t c\u1ee9 khi n\xe0o m\u1ed9t tin nh\u1eafn \u0111\u01b0\u1ee3c nh\u1eadn; c\xf3 th\u1ec3 c\xf3 m\u1ed9t s\u1ef1 thay \u0111\u1ed5i c\u1ee7a tr\u1ea1ng th\xe1i","B\u1ea5t c\u1ee9 khi n\xe0o m\u1ed9t tin nh\u1eafn \u0111\u01b0\u1ee3c nh\u1eadn; ph\u1ea3i c\xf3 m\u1ed9t s\u1ef1 thay \u0111\u1ed5i c\u1ee7a tr\u1ea1ng th\xe1i","B\u1ea5t c\u1ee9 khi n\xe0o c\xf3 s\u1ef1 thay \u0111\u1ed5i tr\u1ea1ng th\xe1i, s\u1ebd c\xf3 m\u1ed9t transition","Thay \u0111\u1ed5i tr\u1ea1ng th\xe1i c\xf3 th\u1ec3 kh\xf4ng thay \u0111\u1ed5i transition"],corrects:[0,2]},{cont:"Ph\xe1t bi\u1ec3u n\xe0o l\xe0 \u0111\xfang v\u1ec1 ph\u1ee5 thu\u1ed9c v\xf2ng tr\xf2n?",answers:["N\xf3 kh\xf4ng quan tr\u1ecdng","N\xf3 b\u1ecb c\u1ea5m","N\xf3 ph\u1ea3i \u0111\u01b0\u1ee3c tr\xe1nh","Khi c\xf3 nhi\u1ec1u h\u01a1n hai g\xf3i (package), ch\xfang kh\xf4ng li\xean quan"],corrects:[2]},{cont:"M\u1ee5c \u0111\xedch c\u1ee7a ph\xe2n t\xedch ki\u1ebfn \u200b\u200btr\xfac l\xe0 g\xec ?",answers:["\u0111\u1ec3 chi ti\u1ebft thi\u1ebft k\u1ebf c\u1ee7a h\u1ec7 th\u1ed1ng","\u0111\u1ec3 xem x\xe9t ki\u1ebfn \u200b\u200btr\xfac c\u1ee7a h\u1ec7 th\u1ed1ng","\u0111\u1ec3 x\xe1c \u0111\u1ecbnh ki\u1ebfn \u200b\u200btr\xfac \u1ee9ng c\u1eed vi\xean cho h\u1ec7 th\u1ed1ng","\u0111\u1ec3 x\xe1c \u0111\u1ecbnh c\xe1c t\u1ea7ng (layers) c\u1ee7a ki\u1ebfn \u200b\u200btr\xfac"],corrects:[2]},{cont:"Ph\xe1t bi\u1ec3u n\xe0o l\xe0 \u0111\xfang v\u1ec1 thu\u1ed9c t\xednh?",answers:["Ch\xfang kh\xf4ng th\u1ec3 thay \u0111\u1ed5i m\u1ed9t khi \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o","Ch\xfang thay \u0111\u1ed5i gi\xe1 tr\u1ecb t\u1eeb \u0111\u1ed1i t\u01b0\u1ee3ng sang \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a c\xf9ng m\u1ed9t l\u1edbp","Ch\xfang ch\u1ec9 c\xf3 th\u1ec3 l\xe0 gi\xe1 tr\u1ecb nguy\xean th\u1ee7y","Ch\xfang \u0111\u01b0\u1ee3c y\xeau c\u1ea7u cho m\u1ecdi l\u1edbp"],corrects:[1]},{cont:"Ph\xe2n t\xedch thi\u1ebft k\u1ebf h\u01b0\u1edbng \u0111\u1ebfn ba m\u1ee5c \u0111\xedch n\xe0o? (Ch\u1ecdn ba)",answers:["Cung c\u1ea5p m\u1ed9t khung c\u1ea3nh t\u1ed5 ch\u1ee9c cho h\u1ec7 th\u1ed1ng","Chuy\u1ec3n c\xe1c y\xeau c\u1ea7u sang b\u1ea3n thi\u1ebft k\u1ebf h\u1ec7 th\u1ed1ng","Ti\u1ebfn h\xf3a v\xe0 h\xecnh th\xe0nh c\u1ea5u tr\xfac v\u1eefng ch\u1eafc cho h\u1ec7 th\u1ed1ng","X\xe1c \u0111\u1ecbnh ph\u1ea1m vi c\u1ee7a h\u1ec7 th\u1ed1ng v\xe0 m\xf4 t\u1ea3 nh\u1eefng g\xec h\u1ec7 th\u1ed1ng ph\u1ea3i l\xe0m","Th\xedch \u1ee9ng b\u1ea3n thi\u1ebft k\u1ebf v\u1edbi m\xf4i tr\u01b0\u1eddng c\xe0i \u0111\u1eb7t"],corrects:[1,3,4]},{cont:"C\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng \u0111a h\xecnh _____",answers:["ph\u1ea3i c\xf3 c\xf9ng thu\u1ed9c t\xednh","chia s\u1ebb t\u1ea5t c\u1ea3 c\xe1c operation gi\u1ed1ng nhau v\xe0 c\xe1c operation th\u1ef1c hi\u1ec7n nh\u01b0 nhau","ch\u1ec9 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c implement th\xf4ng qua c\xe1c giao di\u1ec7n","c\xf3 th\u1ec3 c\xf3 c\xf9ng t\xean operation nh\u01b0ng c\xe1c operation th\u1ef1c hi\u1ec7n kh\xe1c nhau"],corrects:[3]},{cont:"Trong kh\xe2u Ph\xe2n t\xedch ki\u1ebfn tr\xfac, ki\u1ebfn tr\xfac s\u01b0 ph\u1ea7n m\u1ec1m ph\u1ea3i d\u1ef1a v\xe0o \u0111\xe2u \u0111\u1ec3 gi\u1ea3m \u0111\u1ed9 ph\u1ee9c t\u1ea1p c\u1ee7a h\u1ec7 th\u1ed1ng v\xe0 t\u0103ng t\xednh nh\u1ea5t qu\xe1n?",answers:["C\xe1c quy t\u1eafc vi\u1ebft m\xe3","C\xe1c hi\u1ec7n th\u1ef1c h\xf3a ca s\u1eed d\u1ee5ng","C\xe1c c\u01a1 ch\u1ebf ph\xe2n t\xedch","C\xe1c c\u01a1 ch\u1ebf thi\u1ebft k\u1ebf"],corrects:[2]},{cont:"Hai \u0111\u1eb7c \u0111i\u1ec3m n\xe0o m\xe0 t\u1ea5t c\u1ea3 c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng c\xf3? (Ch\u1ecdn hai)",answers:["Nguy\xean th\u1ee7y","Tr\u1ea1ng th\xe1i v\xe0 h\xe0nh vi","Giao di\u1ec7n (interface)","M\u1ed9t \u0111\u1ecbnh danh ri\xeang"],corrects:[1,3]}],E=[{cont:"C\xe1c l\u1edbp ph\xe2n t\xedch ph\xe1t tri\u1ec3n th\xe0nh ____ (Ch\u1ecdn hai)",answers:["C\xe1c l\u1edbp thi\u1ebft k\u1ebf","C\xe1c h\u1ec7 th\u1ed1ng con","C\xe1c hi\u1ec7n th\u1ef1c h\xf3a ca s\u1eed d\u1ee5ng","C\xe1c g\xf3i thi\u1ebft k\u1ebf (design packages)","Ki\u1ebfn tr\xfac"],corrects:[0,1]},{cont:"Chuy\u1ec7n g\xec x\u1ea3y ra khi m\u1ed9t l\u1edbp cha thay \u0111\u1ed5i?",answers:["T\u1ea5t c\u1ea3 c\xe1c class con thay \u0111\u1ed5i","C\xe1c operations c\u1ee7a c\xe1c class con thay \u0111\u1ed5i","C\xe1c ph\u01b0\u01a1ng th\u1ee9c \u0111\u01b0\u1ee3c th\xeam trong class con m\xe0 kh\xf4ng c\xf3 trong class cha ph\u1ea3i thay \u0111\u1ed5i","Ch\u1ec9 c\xf3 c\xe1c ph\u01b0\u01a1ng th\u1ee9c \u0111\u01b0\u1ee3c k\u1ebf th\u1eeba t\u1eeb class cha thay \u0111\u1ed5i"],corrects:[0]},{cont:"Ph\xe1t bi\u1ec3u n\xe0o l\xe0 \u0111\xfang v\u1edbi hi\u1ec7n th\u1ef1c h\xf3a ca s\u1eed d\u1ee5ng?",answers:["Li\u1ec7t k\xea c\xe1c b\u01b0\u1edbc kh\xe1c nhau m\xe0 1 ca s\u1eed d\u1ee5ng th\u1ef1c hi\u1ec7n","N\xf3 \u0111\u01b0\u1ee3c t\u1ea1o ra b\u1edfi ng\u01b0\u1eddi ph\xe2n t\xedch h\u1ec7 th\u1ed1ng","N\xf3 l\xe0 m\u1ed9t ph\u1ea7n trong \u0110\u1eb7c t\u1ea3 y\xeau c\u1ea7u ph\u1ea7n m\u1ec1m","Th\u1ea9m \u0111\u1ecbnh s\u1ef1 t\u01b0\u01a1ng \u1ee9ng t\u1eeb ph\xe2n t\xedch v\xe0 thi\u1ebft k\u1ebf v\u1edbi \u0111\u1eb7c t\u1ea3 y\xeau c\u1ea7u"],corrects:[3]},{cont:"Tr\u1ea1ng th\xe1i n\xe0o KH\xd4NG ch\u1ee9a tr\u1ea1ng th\xe1i kh\xe1c?",answers:["Top State","Composite State","Simple State","Bottom State"],corrects:[2]},{cont:"Ph\xe1t bi\u1ec3u n\xe0o l\xe0 \u0111\xfang v\u1ec1 vi\u1ec7c nh\xf3m c\xe1c th\xe0nh ph\u1ea7n v\xe0o m\u1ed9t g\xf3i?",answers:["C\xe1c th\xe0nh ph\u1ea7n trong c\xf9ng m\u1ed9t g\xf3i n\xean chia s\u1ebb logic, gi\u1ea3i ph\xe1p chung","C\xe1c g\xf3i n\xean ch\u1ee9a m\u1ed9t s\u1ed1 l\u01b0\u1ee3ng nh\u1ecf c\xe1c th\xe0nh ph\u1ea7n \u0111\u1ec3 tr\xe1nh nh\u1ea7m l\u1eabn","C\xe1c g\xf3i ch\u1ec9 n\xean \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng cho c\xe1c d\u1ef1 \xe1n l\u1edbn \u0111\xf2i h\u1ecfi m\u1ed9t s\u1ed1 l\u01b0\u1ee3ng l\u1edbn c\xe1c th\xe0nh ph\u1ea7n","C\xe1c g\xf3i kh\xf4ng n\xean ch\u1ee9a c\xe1c g\xf3i kh\xe1c"],corrects:[0]},{cont:"C\xf3 ba ph\xe2n nh\xf3m c\u01a1 ch\u1ebf ki\u1ebfn tr\xfac bao g\u1ed3m: (Ch\u1ecdn ba)",answers:["C\xe1c c\u01a1 ch\u1ebf ph\xe2n t\xedch","C\xe1c c\u01a1 ch\u1ebf y\xeau c\u1ea7u","C\xe1c c\u01a1 ch\u1ebf c\xe0i \u0111\u1eb7t","C\xe1c c\u01a1 ch\u1ebf thi\u1ebft k\u1ebf"],corrects:[0,2,3]},{cont:"Trong bi\u1ec3u \u0111\u1ed3 tu\u1ea7n t\u1ef1, nh\u1eefng g\xec c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c x\xe1c \u0111\u1ecbnh b\u1edfi c\xe1c t\u01b0\u01a1ng t\xe1c gi\u1eefa c\xe1c th\xe0nh ph\u1ea7n ?",answers:["Ch\u1ec9 c\xf3 c\xe1c d\u1ecbch v\u1ee5 \u0111\u01b0\u1ee3c cung c\u1ea5p b\u1edfi m\u1ed9t giao di\u1ec7n","Ch\u1ec9 c\xf3 c\xe1c d\u1ecbch v\u1ee5 \u0111\u01b0\u1ee3c y\xeau c\u1ea7u b\u1edfi m\u1ed9t giao di\u1ec7n","C\xe1c d\u1ecbch v\u1ee5 \u0111\u01b0\u1ee3c cung c\u1ea5p v\xe0 y\xeau c\u1ea7u b\u1edfi m\u1ed9t giao di\u1ec7n","T\xean c\u1ee7a giao di\u1ec7n"],corrects:[2]},{cont:"Khung nh\xecn n\xe0o t\u1eadp trung v\xe0o hi\u1ec7n th\u1ef1c h\xf3a v\u1eadt l\xfd c\u1ee7a h\u1ec7 th\u1ed1ng ?",answers:["Khung logic","Khung c\xe0i \u0111\u1eb7t","Khung ti\u1ebfn tr\xecnh","Khung ca s\u1eed d\u1ee5ng"],corrects:[1]},{cont:"Ph\xe1t bi\u1ec3u n\xe0o l\xe0 \u0111\xfang v\u1ec1 m\u1ed9t active object?",answers:["N\xf3 l\xe0 m\u1ed9t object \u0111\u1ed9c l\u1eadp c\xf3 th\u1ec3 giao ti\u1ebfp v\u1edbi c\xe1c active object kh\xe1c m\u1ed9t c\xe1ch kh\xf4ng \u0111\u1ed3ng b\u1ed9","N\xf3 kh\xf4ng ch\u1ee9a tr\u1ea1ng th\xe1i","N\xf3 ph\u1ee5 thu\u1ed9c v\xe0o vi\u1ec7c th\u1ef1c hi\u1ec7n to\xe0n b\u1ed9 h\u1ec7 th\u1ed1ng","N\xf3 kh\xf4ng c\xf3 c\u1ea5u tr\xfac \u0111\u1ec3 cho ph\xe9p l\u1edbp \u0111\u01b0\u1ee3c thao t\xe1c d\u1ec5 d\xe0ng"],corrects:[0]},{cont:"Trong kh\xe2u Ph\xe2n t\xedch ca s\u1eed d\u1ee5ng, h\xe0nh vi n\xe0o \u0111\u01b0\u1ee3c ph\xe2n b\u1ed1 cho c\xe1c l\u1edbp \u0111i\u1ec1u khi\u1ec3n?",answers:["H\xe0nh vi \u0111\u1eb7c th\xf9 c\u1ee7a ca s\u1eed d\u1ee5ng ho\u1eb7c m\u1ed9t ph\u1ea7n c\u1ee7a lu\u1ed3ng s\u1ef1 ki\u1ec7n quan tr\u1ecdng","H\xe0nh vi li\xean quan \u0111\u1ebfn d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c bao g\xf3i trong c\xe1c tr\u1eebu t\u01b0\u1ee3ng","H\xe0nh vi li\xean quan \u0111\u1ebfn giao ti\u1ebfp v\u1edbi t\xe1c nh\xe2n","H\xe0nh vi \u0111\u1eb7c th\xf9 v\u1ec1 quy t\u1eafc nghi\u1ec7p v\u1ee5 ho\u1eb7c lu\u1ed3ng nghi\u1ec7p v\u1ee5"],corrects:[0]},{cont:"Ba ngu\u1ed3n \u0111\u1ec3 x\xe1c \u0111\u1ecbnh Tr\u1eebu t\u01b0\u1ee3ng ch\xednh l\xe0 g\xec? (Ch\u1ecdn ba)",answers:["Ki\u1ebfn th\u1ee9c nghi\u1ec7p v\u1ee5","Y\xeau c\u1ea7u","L\u1edbp thi\u1ebft k\u1ebf","B\u1ea3ng thu\u1eadt ng\u1eef"],corrects:[0,1,3]},{cont:"\u0110\xe2u l\xe0 m\u1ed9t t\xean c\u1ee7a object trong UML?",answers:["Matt:Employee",":Employee","Matt::Employee","::employee"],corrects:[0]},{cont:"Trong Ph\xe2n t\xedch ca s\u1eed d\u1ee5ng, m\u1ed9t thu\u1ed9c t\xednh n\xean \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng thay v\xec m\u1ed9t l\u1edbp khi th\xf4ng tin ___",answers:["\u0111\u01b0\u1ee3c truy c\u1eadp b\u1edfi c\xe1c operations m\xe0 ch\u1ec9 get, set, ho\u1eb7c chuy\u1ec3n \u0111\u1ed5i \u0111\u01a1n gi\u1ea3n","c\xf3 li\xean quan \u0111\u1ebfn c\xe1c th\u1ef1c th\u1ec3 trong m\xf4 h\xecnh doanh nghi\u1ec7p ho\u1eb7c nghi\u1ec7p v\u1ee5","c\u1ea7n \u0111\u01b0\u1ee3c \u1ea9n kh\u1ecfi c\xe1c ph\u1ea7n kh\xe1c c\u1ee7a M\xf4 h\xecnh ph\xe2n t\xedch v\xe0 kh\xf4ng \u0111\u01b0\u1ee3c chia s\u1ebb","\u0111\u01b0\u1ee3c nh\u1eafc \u0111\u1ebfn v\xe0 s\u1eed d\u1ee5ng nhi\u1ec1u l\u1ea7n trong su\u1ed1t qu\xe1 tr\xecnh th\u1ef1c hi\u1ec7n ca s\u1eed d\u1ee5ng"],corrects:[0]},{cont:"Khung nh\xecn 4+1 n\xe0o d\u01b0\u1edbi \u0111\xe2y t\u1eadp trung v\xe0o kh\xe2u M\xf4 t\u1ea3 Ph\xe2n t\xe1n?",answers:["Khung Logic","Khung Tri\u1ec3n khai","Khung ca s\u1eed d\u1ee5ng","Khung c\xe0i \u0111\u1eb7t"],corrects:[1]},{cont:"Ch\u1ee9c n\u0103ng c\u1ee7a m\xf4 h\xecnh h\xf3a tr\u1ef1c quan l\xe0 g\xec? (Ch\u1ecdn hai)",answers:["t\u1ea1o ra m\u1ed9t m\xf4 h\xecnh \u0111\u01a1n bi\u1ec3u di\u1ec5n m\u1ecdi kh\xeda c\u1ea1nh c\u1ee7a h\u1ec7 th\u1ed1ng","n\xe2ng cao s\u1ef1 giao ti\u1ebfp v\xe0 kh\u1ea3 n\u0103ng hi\u1ec3u \u0111\u01b0\u1ee3c h\u1ec7 th\u1ed1ng trong c\xe1c th\xe0nh vi\xean trong \u0111\u1ed9i d\u1ef1 \xe1n ph\u1ea7n m\u1ec1m","l\xe0m t\xe0i li\u1ec7u v\u1ec1 nh\u1eefng quy\u1ebft \u0111\u1ecbnh thi\u1ebft k\u1ebf quan tr\u1ecdng trong khi vi\u1ebft ch\u01b0\u01a1ng tr\xecnh","l\xe0m t\xe0i li\u1ec7u v\u1ec1 h\xe0nh vi v\xe0 c\u1ea5u tr\xfac c\u1ee7a h\u1ec7 th\u1ed1ng tr\u01b0\u1edbc khi vi\u1ebft m\xe3 cho ch\u01b0\u01a1ng tr\xecnh"],corrects:[1,3]},{cont:"Trong ph\xe2n t\xedch ca s\u1eed d\u1ee5ng, t\u1ea1i sao n\xean s\u1eed d\u1ee5ng c\xe1c c\u01a1 ch\u1ebf Ph\xe2n t\xedch?",answers:["\u0110\u1ec3 gi\u1ea3m \u0111\u1ed9 ph\u1ee9c t\u1ea1p v\xe0 t\u0103ng t\xednh nh\u1ea5t qu\xe1n b\u1eb1ng c\xe1ch cung c\u1ea5p k\xfd hi\u1ec7u cho nh\u1eefng h\xe0nh vi ph\u1ee9c t\u1ea1p","\u0110\u1ec3 \u0111\u01a1n gi\u1ea3n h\xf3a nhi\u1ec7m v\u1ee5 t\u1ea1o ra c\xe1c use-case, cung c\u1ea5p k\xfd hi\u1ec7u vi\u1ebft t\u1eaft cho c\xe1c nhi\u1ec7m v\u1ee5 l\u1eb7p \u0111i l\u1eb7p l\u1ea1i","\u0110\u1ec3 thu th\u1eadp c\xe1c nhi\u1ec7m v\u1ee5 chung v\xe0o m\u1ed9t n\u01a1i, d\u1ec5 d\xe0ng cho nh\xe0 ph\xe1t tri\u1ec3n th\u01b0c hi\u1ec7n","\u0110\u1ec3 ch\u1ee9ng minh r\u1eb1ng c\xe1c nh\xe0 thi\u1ebft k\u1ebf \u0111\xe3 th\u1ef1c hi\u1ec7n ch\xednh x\xe1c nh\u01b0 thi\u1ebft k\u1ebf c\u1ee7a c\xe1c ki\u1ebfn tr\xfac s\u01b0"],corrects:[0]},{cont:"Ph\xe1t bi\u1ec3u n\xe0o l\xe0 ch\xednh x\xe1c v\u1ec1 c\xe1c pattern?",answers:["Pattern ch\u1ec9 xu\u1ea5t hi\u1ec7n \u1edf trong m\u1ee9c Thi\u1ebft k\u1ebf","Pattern cung c\u1ea5p m\u1ed9t gi\u1ea3i ph\xe1p chung cho nh\u1eefng v\u1ea5n \u0111\u1ec1 chung","Pattern ch\u1ec9 xu\u1ea5t hi\u1ec7n \u1edf trong m\u1ee9c Ki\u1ebfn tr\xfac","Pattern ch\u1ec9 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong Giai \u0111o\u1ea1n x\xe2y d\u1ef1ng (Elaboration Phase)"],corrects:[1]},{cont:"Trong kh\xe2u Ph\xe2n t\xedch ca s\u1eed d\u1ee5ng, t\u1ea1i sao th\u01b0\u1eddng ph\u1ea3i b\u1ed5 sung c\xe1c m\xf4 t\u1ea3 ca s\u1eed d\u1ee5ng?",answers:["M\xf4 t\u1ea3 ca s\u1eed d\u1ee5ng kh\xf4ng ph\u1ea3i lu\xf4n ch\u1ee9a \u0111\u1ee7 th\xf4ng tin \u0111\u1ec3 x\xe1c \u0111\u1ecbnh l\u1edbp v\xe0 \u0111\u1ed1i t\u01b0\u1ee3ng ph\xe2n t\xedch","Lu\u1ed3ng s\u1ef1 ki\u1ec7n ca s\u1eed d\u1ee5ng th\u01b0\u1eddng qu\xe1 ph\u1ee9c t\u1ea1p \u0111\u1ec3 th\u1ef1c hi\u1ec7n \u0111\u01b0\u1ee3c","Ng\u01b0\u1eddi thi\u1ebft k\u1ebf c\u1ea7n bi\u1ebft lu\u1ed3ng ca s\u1eed d\u1ee5ng n\xe0o \u0111ang \u0111\u01b0\u1ee3c ph\xe2n t\xedch cho l\u1ea7n l\u1eb7p hi\u1ec7n th\u1eddi","Ki\u1ebfn tr\xfac s\u01b0 c\u1ea7n ph\u1ea3i \u0111i\u1ec1u ch\u1ec9nh c\xe1c l\u1ed7i tr\u01b0\u1edbc khi chuy\u1ec3n b\u1ea3n \u0111\u1eb7c t\u1ea3 ca s\u1eed d\u1ee5ng cho b\xean thi\u1ebft k\u1ebf"],corrects:[0]},{cont:"Trong ph\xe2n t\xedch ca s\u1eed d\u1ee5ng, m\u1ee5c \u0111\xedch c\u1ee7a b\u01b0\u1edbc h\u1ee3p nh\u1ea5t (unify) c\xe1c l\u1edbp ph\xe2n t\xedch l\xe0 g\xec?",answers:["\u0111\u1ec3 ch\u1eafc ch\u1eafn r\u1eb1ng m\u1ed7i l\u1edbp ph\xe2n t\xedch l\xe0 \u0111\u1ea1i di\u1ec7n cho m\u1ed9t kh\xe1i ni\u1ec7m r\u1ea1ch r\xf2i v\xe0 kh\xf4ng b\u1ecb tr\xf9ng kh\u1edbp tr\xe1ch nhi\u1ec7m","\u0111\u1ec3 t\u1eadp h\u1ee3p c\xe1c l\u1edbp ph\xe2n t\xedch t\u1eeb hi\u1ec7 th\u1ef1c h\xf3a ca s\u1eed d\u1ee5ng v\xe0 \u0111\u01b0a ch\xfang v\xe0o m\xf4 h\xecnh thi\u1ebft k\u1ebf","\u0111\u1ec3 \u0111\u1ea3m b\u1ea3o tr\xe1ch nhi\u1ec7m c\u1ee7a c\xe1c m\u1ed7i l\xe0 th\u1ed1ng nh\u1ea5t v\xe0 nh\u1eefng l\u1edbp \u0111\xf3 c\xf3 m\u1ee5c \u0111\xedch r\xf5 r\xe0ng","\u0111\u1ec3 t\u1ea1o h\u1ecd c\xe1c l\u1edbp kh\u1edfi t\u1ea1o ban \u0111\u1ea7u b\u1eb1ng vi\u1ec7c \xe1p d\u1ee5ng th\u1eeba k\u1ebf \u0111\u1ec3 nh\xf3m c\xe1c l\u1edbp li\xean quan theo nh\u1eefng c\u1ea5u tr\xfac c\xe2y"],corrects:[0]},{cont:"Ti\u1ebfn tr\xecnh n\xe0o sau \u0111\xe2y l\xe0 ph\xf9 h\u1ee3p nh\u1ea5t cho UML? (Ch\u1ecdn ba)",answers:["use-case driven","waterfall development-based","interative and incremental","architecture-centric","requirements-centric"],corrects:[0,2,3]}],T=[{cont:"Trong m\u1ed9t s\u01a1 \u0111\u1ed3 tr\u1ea1ng th\xe1i, m\u1ed9t tr\u1ea1ng th\xe1i c\xf3 hai chuy\u1ec3n ti\u1ebfp. M\u1ed9t trong nh\u1eefng chuy\u1ec3n \u0111\u1ed5i l\xe0 m\u1ed9t chuy\u1ec3n ti\u1ebfp n\u1ed9i b\u1ed9 v\xe0 m\u1ed9t trong nh\u1eefng chuy\u1ec3n ti\u1ebfp l\xe0 m\u1ed9t chuy\u1ec3n ti\u1ebfp b\xean ngo\xe0i. Nh\u1eefng tr\u1ea1ng th\xe1i n\xe0o c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n m\u1ed9t h\xe0nh \u0111\u1ed9ng tho\xe1t?",answers:["Ch\u1ec9 tr\u1ea1ng th\xe1i chuy\u1ec3n ti\u1ebfp n\u1ed9i b\u1ed9","Ch\u1ecb tr\u1ea1ng th\xe1i chuy\u1ec3n ti\u1ebfp b\xean ngo\xe0i","C\u1ea3 2 \u0111\u1ec1u kh\xf4ng ph\u1ea3i","C\u1ea3 2 \u0111\u1ec1u \u0111\xfang"],corrects:[1]},{cont:"C\xe1c l\u1edbp ki\u1ebfn \u200b\u200btr\xfac th\u01b0\u1eddng \u0111\u01b0\u1ee3c m\xf4 h\xecnh h\xf3a trong UML b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng m\u1ed9t ___",answers:["package stereotyped <<Layer>>","subsystem stereotyped <<Layer>>","composite class stereotyped <<Layer>>","class diagram entitled Layer"],corrects:[0]},{cont:"Hai c\xe2u n\xe0o l\xe0 \u0111\xfang v\u1ec1 use-case driven processes? (Ch\u1ecdn hai)",answers:["C\xe1c ca s\u1eed d\u1ee5ng ng\u1eafn g\u1ecdn, \u0111\u01a1n gi\u1ea3n v\xe0 c\xf3 th\u1ec3 hi\u1ec3u \u0111\u01b0\u1ee3c b\u1edfi c\xe1c b\xean li\xean quan","Ca s\u1eed d\u1ee5ng gi\xfap \u0111\u1ed3ng b\u1ed9 h\xf3a n\u1ed9i dung c\u1ee7a c\xe1c m\xf4 h\xecnh kh\xe1c nhau","Ca s\u1eed d\u1ee5ng l\xe0 m\u1ed9t danh s\xe1ch \u0111\u1ea7y \u0111\u1ee7 c\xe1c y\xeau c\u1ea7u ch\u1ee9c n\u0103ng","C\xe1c ca s\u1eed d\u1ee5ng x\xe1c \u0111\u1ecbnh c\xe1ch th\u1ee9c th\u1ef1c hi\u1ec7n h\xe0nh vi h\u1ec7 th\u1ed1ng"],corrects:[0,1]},{cont:"C\u01a1 ch\u1ebf chung n\xe0o c\u1ee7a UML cho ph\xe9p nh\xf3m c\xe1c th\xe0nh ph\u1ea7n v\xe0o trong c\xf9ng m\u1ed9t nh\xf3m?",answers:["m\u1ed9t bi\u1ec3u \u0111\u1ed3 l\u1edbp (class diagram)","m\u1ed9t bi\u1ec3u \u0111\u1ed3 ho\u1ea1t \u0111\u1ed9ng (activity diagram)","m\u1ed9t g\xf3i (package)","m\u1ed9t bi\u1ec3u \u0111\u1ed3 ph\u1ee9c h\u1ee3p (composite diagram)"],corrects:[2]},{cont:"Trong ph\xe2n t\xedch ca s\u1eed d\u1ee5ng, c\u1ea7n bao nhi\xeau bi\u1ec3u \u0111\u1ed3 t\u01b0\u01a1ng t\xe1c (tu\u1ea7n t\u1ef1 ho\u1eb7c giao ti\u1ebfp) cho m\u1ed7i ca s\u1eed d\u1ee5ng?",answers:["\u0110\u1ee7 cho m\u1ed7i bi\u1ec3u \u0111\u1ed3 \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o r\u1eb1ng t\u1ea5t c\u1ea3 c\xe1c tr\xe1ch nhi\u1ec7m c\u1ee7a c\xe1c l\u1edbp tham gia \u0111\u1ec1u \u0111\u01b0\u1ee3c nh\u1eadn bi\u1ebft v\xe0 \u0111a ph\u1ea7n c\xe1c lu\u1ed3ng s\u1ef1 ki\u1ec7n \u0111\xe3 \u0111\u01b0\u1ee3c m\xf4 t\u1ea3","m\u1ed9t bi\u1ec3u \u0111\u1ed3 cho lu\u1ed3ng s\u1ef1 ki\u1ec7n ch\xednh v\xe0 m\u1ed9t bi\u1ec3u \u0111\u1ed3 cho lu\u1ed3ng s\u1ef1 ki\u1ec7n chuy\u1ec3n \u0111\u1ed5i trong ca s\u1eed d\u1ee5ng","m\u1ed9t bi\u1ec3u \u0111\u1ed3 tu\u1ea7n t\u1ef1 v\xe0 giao ti\u1ebfp cho lu\u1ed3ng s\u1ef1 ki\u1ec7n ch\xednh, m\u1ed7i lo\u1ea1i m\u1ed9t bi\u1ec3u \u0111\u1ed3 cho lu\u1ed3ng s\u1ef1 ki\u1ec7n chuy\u1ec3n \u0111\u1ed5i","m\u1ed7i lo\u1ea1i m\u1ed9t bi\u1ec3u \u0111\u1ed3 cho t\u1eebng ca s\u1eed d\u1ee5ng"],corrects:[0]},{cont:"Trong ph\xe2n t\xedch ca s\u1eed d\u1ee5ng, c\xe1c l\u1edbp bi\xean c\xf3 nh\u1eefng ch\u1ee9c n\u0103ng g\xec?",answers:["Ng\u0103n c\xe1ch gi\u1eefa c\xe1c t\u01b0\u01a1ng t\xe1c t\u1eeb ngo\xe0i v\u1edbi c\xe1c c\u01a1 ch\u1ebf b\xean trong v\xe0 ng\u01b0\u1ee3c l\u1ea1i","\u0110\u1ea1i di\u1ec7n cho c\xe1c m\xe0n h\xecnh trong giao di\u1ec7n ng\u01b0\u1eddi d\xf9ng","\u0110\u1ecbnh ngh\u0129a c\xe1c giao di\u1ec7n d\u1ecbch v\u1ee5 m\xe0 t\u1ea7ng Bussiness cung c\u1ea5p","\u0110\u1ecbnh ngh\u0129a c\xe1c \u0111i\u1ec3m truy nh\u1eadp t\u1edbi m\xf4 h\xecnh d\u1eef li\u1ec7u \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a h\u1ec7 th\u1ed1ng"],corrects:[0]},{cont:"\u0110\xe2u l\xe0 ba m\u1ee5c \u0111\xedch c\u1ee7a thi\u1ebft k\u1ebf ca s\u1eed d\u1ee5ng? (Ch\u1ecdn ba)",answers:["\u0111\u1ec3 l\xe0m m\u1ecbn c\xe1c hi\u1ec7n th\u1ef1c h\xf3a ca s\u1eed d\u1ee5ng v\u1ec1 m\u1eb7t t\u01b0\u01a1ng t\xe1c","\u0111\u1ec3 \u0111\u1ea3m b\u1ea3o t\xednh \u0111\u1ea7y \u0111\u1ee7 c\u1ee7a c\xe1c l\u1edbp tham gia (View of Participating Classes) cho m\u1ed7i hi\u1ec7n th\u1ef1c h\xf3a ca s\u1eed d\u1ee5ng","\u0111\u1ec3 l\xe0m m\u1ecbn c\xe1c y\xeau c\u1ea7u v\u1ec1 c\xe1c thao t\xe1c c\u1ee7a l\u1edbp thi\u1ebft k\u1ebf","\u0111\u1ec3 l\xe0m m\u1ecbn c\xe1c y\xeau c\u1ea7u v\u1ec1 c\xe1c thao t\xe1c (operations) c\u1ee7a c\xe1c h\u1ec7 th\u1ed1ng con thi\u1ebft k\u1ebf v\xe0 c\xe1c giao di\u1ec7n (interfaces)"],corrects:[0,2,3]},{cont:"M\u1ee5c \u0111\xedch c\u1ee7a thi\u1ebft k\u1ebf h\u1ec7 th\u1ed1ng con l\xe0 g\xec?",answers:["ho\xe0n thi\u1ec7n chi ti\u1ebft c\u1ee7a t\u1eebng interface m\xe0 h\u1ec7 th\u1ed1ng con c\xe0i \u0111\u1eb7t","ph\xe2n chia h\u1ec7 th\u1ed1ng th\xe0nh c\xe1c h\u1ec7 th\u1ed1ng con nh\u1eb1m ph\xe2n c\xe1c h\u1ec7 th\u1ed1ng con \u0111\xf3 cho c\xe1c \u0111\u1ed9i ph\xe1t tri\u1ec3n kh\xe1c nhau","\u0111\u1ecbnh ngh\u0129a c\xe1c h\xe0nh vi \u0111\u01b0\u1ee3c \u0111\u1eb7c t\u1ea3 trong c\xe1c interfaces c\u1ee7a h\u1ec7 th\u1ed1ng con theo s\u1ef1 c\u1ed9ng t\xe1c gi\u1eefa c\xe1c ph\u1ea7n t\u1eed thi\u1ebft k\u1ebf b\xean trong h\u1ec7 th\u1ed1ng con \u0111\xf3","x\xe1c \u0111\u1ecbnh xem m\u1ed7i h\u1ec7 th\u1ed1ng con s\u1ebd \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t t\u1ea1i t\u1ea7ng n\xe0o v\xe0 c\u01a1 ch\u1ebf giao ti\u1ebfp n\xe0o s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng gi\u1eefa ch\xfang"],corrects:[2]},{cont:"Th\xe0nh ph\u1ea7n n\xe0o \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 m\xf4 t\u1ea3 hi\u1ec7n th\u1ef1c h\xf3a ca s\u1eed d\u1ee5ng?",answers:["c\xe1c \u0111\u1eb7c t\u1ea3 ca s\u1eed d\u1ee5ng","c\xe1c bi\u1ec3u \u0111\u1ed3 giao ti\u1ebfp","c\xe1c bi\u1ec3u \u0111\u1ed3 tr\u1ea1ng th\xe1i","c\xe1c bi\u1ec3u \u0111\u1ed3 ho\u1ea1t \u0111\u1ed9ng"],corrects:[1]},{cont:"Ph\xe1t bi\u1ec3u n\xe0o \u0111\xfang v\u1ec1 c\xe1c h\u1ec7 th\u1ed1ng con trong thi\u1ebft k\u1ebf?",answers:["Ch\xfang \u0111\xf3ng g\xf3i (encapsulate) m\u1ed9t ph\u1ea7n h\xe0nh vi","Ch\xfang \u0111\u1ea1i di\u1ec7n m\u1ed9t ch\u1ee9c n\u0103ng \u0111\u1ed9c l\u1eadp v\u1edbi c\xe1c giao di\u1ec7n (interface) \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a r\xf5 r\xe0ng","Ch\xfang m\xf4 h\xecnh h\xf3a m\u1ed9t c\xe1ch c\xe0i \u0111\u1eb7t","Ch\xfang ch\u1ec9 c\xf3 th\u1ec3 ch\u1ee9a c\xe1c l\u1edbp thi\u1ebft k\u1ebf"],corrects:[1]},{cont:"M\u1ed9t h\u1ec7 th\u1ed1ng con n\xean ___",answers:["ph\u1ee5 thu\u1ed9c v\xe0o c\xe1c giao di\u1ec7n c\u1ee7a h\u1ec7 th\u1ed1ng kh\xe1c","ch\u1ec9 ph\u1ee5 thu\u1ed9c v\xe0o ch\xednh n\xf3","l\xe0 m\u1ed9t t\u1eadp nh\u1ecf c\xe1c l\u1edbp \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a r\xf5 r\xe0ng v\xe0 cung c\u1ea5p nh\u1eefng APIs cho b\xean ngo\xe0i","ch\u1ea1y cho c\xe1c d\u1ecbch v\u1ee5 c\u1ee7a ri\xeang n\xf3"],corrects:[0]},{cont:"C\xe2u n\xe0o l\xe0 \u0111\xfang v\u1ec1 g\xf3i v\xe0 h\u1ec7 th\u1ed1ng con?",answers:["M\u1ed9t g\xf3i kh\xf4ng th\u1ec3 ch\u1ee9a m\u1ed9t h\u1ec7 th\u1ed1ng con","M\u1ed9t g\xf3i cung c\u1ea5p h\xe0nh vi","M\u1ed9t h\u1ec7 th\u1ed1ng con cung c\u1ea5p h\xe0nh vi","S\u1eed d\u1ee5ng g\xf3i khi c\u1ea7n \u0111\xf3ng g\xf3i h\xe0nh vi"],corrects:[2]},{cont:"Trong thi\u1ebft k\u1ebf h\u1ec7 th\u1ed1ng con c\xf3 bao nhi\xeau bi\u1ec3u \u0111\u1ed3 t\u01b0\u01a1ng t\xe1c (tu\u1ea7n t\u1ef1 ho\u1eb7c giao ti\u1ebfp) \u0111\u01b0\u1ee3c t\u1ea1o ra?",answers:["\xedt nh\u1ea5t m\u1ed9t bi\u1ec3u \u0111\u1ed3 t\u01b0\u01a1ng t\xe1c cho m\u1ed7i giao di\u1ec7n","m\u1ed9t bi\u1ec3u \u0111\u1ed3 t\u01b0\u01a1ng t\xe1c cho m\u1ed7i hi\u1ec7n th\u1ef1c h\xf3a giao di\u1ec7n","\xedt nh\u1ea5t m\u1ed9t bi\u1ec3u \u0111\u1ed3 t\u01b0\u01a1ng t\xe1c cho m\u1ed7i s\u1eed d\u1ee5ng c\u1ee7a giao di\u1ec7n ngo\xe0i","m\u1ed7i bi\u1ec3u \u0111\u1ed3 t\u01b0\u01a1ng t\xe1c cho t\u1eebng l\u1edbp"],corrects:[0]},{cont:"Hai ph\xe1t bi\u1ec3u n\xe0o sau \u0111\xe2y l\xe0 ch\xednh x\xe1c v\u1ec1 hi\u1ec7n th\u1ef1c h\xf3a ca s\u1eed d\u1ee5ng? (Ch\u1ecdn hai)",answers:["li\u1ec7t k\xea c\xe1c b\u01b0\u1edbc kh\xe1c nhau \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n b\u1edfi ca s\u1eed d\u1ee5ng","cung c\u1ea5p s\u1ef1 l\u1ea7n v\u1ebft t\u1eeb ph\xe2n t\xedch v\xe0 thi\u1ebft k\u1ebf ng\u01b0\u1ee3c tr\u1edf l\u1ea1i \u0111\u1eb7c t\u1ea3 y\xeau c\u1ea7u","\u0111\u01b0\u1ee3c t\u1ea1o b\u1edfi c\xe1c nh\xe0 ph\xe2n t\xedch h\u1ec7 th\u1ed1ng","m\xf4 t\u1ea3 ca s\u1eed d\u1ee5ng th\xf4ng qua s\u1ef1 c\u1ed9ng t\xe1c gi\u1eefa c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng"],corrects:[1,3]},{cont:"Tr\xe1ch nhi\u1ec7m c\u1ee7a c\xe1c h\u1ec7 th\u1ed1ng con \u0111\u01b0\u1ee3c x\xe1c \u0111\u1ecbnh d\u1ef1a v\xe0o \u0111\xe2u?",answers:["h\xe0nh vi c\u1ee7a c\xe1c l\u1edbp trong h\u1ec7 th\u1ed1ng con","c\xe1c thao t\xe1c c\u1ee7a giao di\u1ec7n h\u1ec7 th\u1ed1ng con","c\xe1c hi\u1ec7n th\u1ef1c h\xf3a ca s\u1eed d\u1ee5ng trong \u0111\xf3 c\xf3 c\xe1c h\u1ec7 th\u1ed1ng con","c\xe1c thao t\xe1c c\u1ee7a l\u1edbp \u0111\u01b0\u1ee3c ch\u1ee9a trong h\u1ec7 th\u1ed1ng con"],corrects:[1]},{cont:"Th\xe0nh ph\u1ea7n n\xe0o c\u1ee7a UML \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 m\xf4 t\u1ea3 ki\u1ebfn tr\xfac v\u1eadt l\xfd c\u1ee7a m\u1ed9t h\u1ec7 th\u1ed1ng?",answers:["c\xe1c l\u1edbp v\xe0 m\u1ed1i quan h\u1ec7","c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng v\xe0 th\xf4ng \u0111i\u1ec7p trao \u0111\u1ed5i","c\xe1c h\u1ec7 th\u1ed1ng con v\xe0 s\u1ef1 ph\u1ee5 thu\u1ed9c","c\xe1c n\xfat v\xe0 k\u1ebft n\u1ed1i gi\u1eefa ch\xfang"],corrects:[3]},{cont:"Trong bi\u1ec3u \u0111\u1ed3 tu\u1ea7n t\u1ef1, th\xe0nh ph\u1ea7n n\xe0o \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 \u0111\u1ea1i di\u1ec7n cho m\u1ed9t h\u1ec7 th\u1ed1ng con c\u1ee5 th\u1ec3?",answers:["m\u1ed9t giao di\u1ec7n m\xe0 h\u1ec7 th\u1ed1ng con th\u1ef1c hi\u1ec7n","m\u1ed9t s\u1ef1 \u1ee7y quy\u1ec1n c\u1ee7a h\u1ec7 th\u1ed1ng con","m\u1ed9t th\xe0nh ph\u1ea7n c\u1ee7a h\u1ec7 th\u1ed1ng con","m\u1ed9t l\u1edbp c\u1ee7a h\u1ec7 th\u1ed1ng con"],corrects:[2]},{cont:"M\u1ee5c \u0111\xedch ch\xednh c\u1ee7a bi\u1ec3u \u0111\u1ed3 ca s\u1eed d\u1ee5ng l\xe0?",answers:["t\u1ea1o b\u1ea3ng t\u1eeb v\u1ef1ng th\u1ed1ng nh\u1ea5t gi\u1eefa ng\u01b0\u1eddi d\xf9ng v\xe0 ng\u01b0\u1eddi ph\xe2n t\xedch","bi\u1ec3u di\u1ec5n t\u01b0\u01a1ng t\xe1c ng\u01b0\u1eddi d\xf9ng trong h\u1ec7 th\u1ed1ng","b\u1ed5 sung th\xf4ng tin chi ti\u1ebft nh\u01b0 c\xe1c thu\u1ed9c t\xednh hay c\xe1c ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a l\u1edbp","m\xf4 h\xecnh h\xf3a c\xe1c t\u01b0\u01a1ng t\xe1c gi\u1eefa h\u1ec7 th\u1ed1ng v\xe0 m\xf4i tr\u01b0\u1eddng"],corrects:[3]},{cont:"Ch\u1ebf t\xe1c n\xe0o l\xe0 \u0111\u1ea7u v\xe0o cho kh\xe2u x\xe1c \u0111\u1ecbnh ph\xe2n t\u1eed thi\u1ebft k\u1ebf?",answers:["M\xf4 h\xecnh tri\u1ec3n khai","M\xf4 h\xecnh c\xe0i \u0111\u1eb7t","Ki\u1ebfn tr\xfac tham chi\u1ebfu","T\xe0i li\u1ec7u ki\u1ebfn tr\xfac ph\u1ea7n m\u1ec1m"],corrects:[3]}];var M=function(){return i.a.createElement(r.a,null,i.a.createElement(e.a,null,i.a.createElement(s.a,null,i.a.createElement(u.a,null,i.a.createElement(u.a.Item,null,i.a.createElement(r.b,{to:"/"},"1")),i.a.createElement(u.a.Item,null,i.a.createElement(r.b,{to:"/2"},"2")),i.a.createElement(u.a.Item,null,i.a.createElement(r.b,{to:"/3"},"3"))),i.a.createElement(o.a,{path:"/",exact:!0,component:function(){return i.a.createElement(w,{questions:q})}}),i.a.createElement(o.a,{path:"/2",component:function(){return i.a.createElement(w,{questions:E})}}),i.a.createElement(o.a,{path:"/3",component:function(){return i.a.createElement(w,{questions:T})}}),i.a.createElement(u.a,null,i.a.createElement(u.a.Item,null,i.a.createElement(r.b,{to:"/"},"1")),i.a.createElement(u.a.Item,null,i.a.createElement(r.b,{to:"/2"},"2")),i.a.createElement(u.a.Item,null,i.a.createElement(r.b,{to:"/3"},"3"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.a4823326.chunk.js.map