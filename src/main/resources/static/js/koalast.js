/*
Highlight:QQ.com Koala JS框架
@版本:1.5
@作者:boqiu#tencent.com
@地址:https://github.com/tedQB/Koala1.5
@Made wheels also want to create a level
*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(15(){17 e=1T.K;1a.2k=1T;1a.1x=1h;1a.24=1V.1i.24;1a.86=1h.29("87")[0];17 g=1a.K=1a.52=1a.1v=15(l){14(g.C.2s(l)){12 l}14(g.C.3o(l)){g.66(l);12}17 m=g.C.1c(1n.1d>0?l:2k);14(m){17 k=1C f(m);k.1N=15(){12"85"};12 k}12 1C h(l)};(15(k){17 m=1a.4C=15(){17 n=l(1n).2Y(", ");12 g.4i.2f(n,1h)};17 l=1a.4t=15(p){14(!p){12[]}14("4b"1G 2P(p)){12 p.4b()}17 o=p.1d||0,n=1C 1V(o);1r(o--){n[o]=p[o]}12 n};m.4h=15(p,q,o){14(1n.1d>1){a=1n}1b{14(g.C.2l(p)){12 p}1b{14(g.C.5Y(p)||g.C.62(p)){a=p}1b{14(g.C.4q(p)){a=/^n:(\\w+)$/.1q(p)?1x.49(2a.$1):1x.29(p)}}}}14(p&&p.1d>0){17 n=1C b(a,q);14(n.3m==1){12 g(n.2H(0))}1b{12 n}}12 1C h(o)};g.1y=15(n){12 1h.2E(n)};g.5N=15(){14(g.1y){1T.K=e}12 52};(15(){17 x=/((?:\\((?:\\([^()]+\\)|[^()]+)+\\)|\\[(?:\\[[^\\[\\]]*\\]|[\'"][^\'"]*[\'"]|[^\\[\\]\'"]+)+\\]|\\\\.|[^ >+~,(\\[\\\\]+)+|[>+~])(\\s*,\\s*)?((?:.|\\r|\\n)*)/g,y=0,B=2P.1i.1N,s=1m,r=1f,z=/\\\\/g,G=/\\W/;[0,0].6S(15(){r=1m;12 0});17 p=15(M,H,P,Q){P=P||[];H=H||1h;17 S=H;14(H.1j!==1&&H.1j!==9){12[]}14(!M||1s M!=="2o"){12 P}17 J,U,X,I,T,W,V,O,L=1f,K=p.3E(H),N=[],R=M;84{x.2m("");J=x.2m(R);14(J){R=J[3];N.1o(J[1]);14(J[2]){I=J[3];1z}}}1r(J);14(N.1d>1&&t.2m(M)){14(N.1d===2&&u.2R[N[0]]){U=C(N[0]+N[1],H)}1b{U=u.2R[N[0]]?[H]:p(N.2d(),H);1r(N.1d){M=N.2d();14(u.2R[M]){M+=N.2d()}U=C(M,U)}}}1b{14(!Q&&N.1d>1&&H.1j===9&&!K&&u.1t.2p.1q(N[0])&&!u.1t.2p.1q(N[N.1d-1])){T=p.1X(N.2d(),H,K);H=T.3f?p.1O(T.3f,T.33)[0]:T.33[0]}14(H){T=Q?{3f:N.4s(),33:v(Q)}:p.1X(N.4s(),N.1d===1&&(N[0]==="~"||N[0]==="+")&&H.1p?H.1p:H,K);U=T.3f?p.1O(T.3f,T.33):T.33;14(N.1d>0){X=v(U)}1b{L=1m}1r(N.1d){W=N.4s();V=W;14(!u.2R[W]){W=""}1b{V=N.4s()}14(V==1g){V=H}u.2R[W](X,V,K)}}1b{X=N=[]}}14(!X){X=U}14(!X){p.2w(W||M)}14(B.1l(X)==="[1Y 1V]"){14(!L){P.1o.1Z(P,X)}1b{14(H&&H.1j===1){1e(O=0;X[O]!=1g;O++){14(X[O]&&(X[O]===1f||X[O].1j===1&&p.2u(H,X[O]))){P.1o(U[O])}}}1b{1e(O=0;X[O]!=1g;O++){14(X[O]&&X[O].1j===1){P.1o(U[O])}}}}}1b{v(X,P)}14(I){p(I,S,P,Q);p.6B(P)}12 P};p.6B=15(I){14(A){s=r;I.6S(A);14(s){1e(17 H=1;H<I.1d;H++){14(I[H]===I[H-1]){I.3t(H--,1)}}}}12 I};p.70=15(H,I){12 p(H,1g,1g,I)};p.4I=15(H,I){12 p(I,1g,1g,[H]).1d>0};p.1X=15(O,H,P){17 N;14(!O){12[]}1e(17 K=0,J=u.3Q.1d;K<J;K++){17 L,M=u.3Q[K];14((L=u.3Z[M].2m(O))){17 I=L[1];L.3t(1,1);14(I.3Y(I.1d-1)!=="\\\\"){L[1]=(L[1]||"").1A(z,"");N=u.1X[M](L,H,P);14(N!=1g){O=O.1A(u.1t[M],"");1z}}}}14(!N){N=1s H.29!=="1B"?H.29("*"):[]}12{33:N,3f:O}};p.1O=15(S,R,V,L){17 N,H,J=S,X=[],P=R,O=R&&R[0]&&p.3E(R[0]);1r(S&&R.1d){1e(17 Q 1G u.1O){14((N=u.3Z[Q].2m(S))!=1g&&N[2]){17 W,U,I=u.1O[Q],K=N[1];H=1m;N.3t(1,1);14(K.3Y(K.1d-1)==="\\\\"){4B}14(P===X){X=[]}14(u.4G[Q]){N=u.4G[Q](N,P,V,X,L,O);14(!N){H=W=1f}1b{14(N===1f){4B}}}14(N){1e(17 M=0;(U=P[M])!=1g;M++){14(U){W=I(U,N,M,P);17 T=L^!!W;14(V&&W!=1g){14(T){H=1f}1b{P[M]=1m}}1b{14(T){X.1o(U);H=1f}}}}}14(W!==1B){14(!V){P=X}S=S.1A(u.1t[Q],"");14(!H){12[]}1z}}}14(S===J){14(H==1g){p.2w(S)}1b{1z}}J=S}12 P};p.2w=15(H){3A"82 2w, 83 88: "+H};17 u=p.89={3Q:["2p","4E","3d"],1t:{2p:/#((?:[\\w\\2J-\\2I\\-]|\\\\.)+)/,3h:/\\.((?:[\\w\\2J-\\2I\\-]|\\\\.)+)/,4E:/\\[1W=[\'"]*((?:[\\w\\2J-\\2I\\-]|\\\\.)+)[\'"]*\\]/,5h:/\\[\\s*((?:[\\w\\2J-\\2I\\-]|\\\\.)+)\\s*(?:(\\S?=)\\s*(?:([\'"])(.*?)\\3|(#?(?:[\\w\\2J-\\2I\\-]|\\\\.)*)|)|)\\s*\\]/,3d:/^((?:[\\w\\2J-\\2I\\*\\-]|\\\\.)+)/,3U:/:(6V|3u|3x|3k)-3n(?:\\(\\s*(3X|3W|(?:[+\\-]?\\d+|(?:[+\\-]?\\d*)?n\\s*(?:[+\\-]\\s*\\d+)?))\\s*\\))?/,3G:/:(3u|6M|6F|6E|3k|3x|3X|3W)(?:\\((\\d*)\\))?(?=[^\\-]|$)/,3b:/:((?:[\\w\\2J-\\2I\\-]|\\\\.)+)(?:\\(([\'"]?)((?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\2\\))?/},3Z:{},50:{"3H":"1D","1e":"8e"},3N:{2z:15(H){12 H.1K("2z")},1E:15(H){12 H.1K("1E")}},2R:{"+":15(N,I){17 K=1s I==="2o",M=K&&!G.1q(I),O=K&&!M;14(M){I=I.1u()}1e(17 J=0,H=N.1d,L;J<H;J++){14((L=N[J])){1r((L=L.3z)&&L.1j!==1){}N[J]=O||L&&L.1H.1u()===I?L||1m:L===I}}14(O){p.1O(I,N,1f)}},">":15(N,I){17 M,L=1s I==="2o",J=0,H=N.1d;14(L&&!G.1q(I)){I=I.1u();1e(;J<H;J++){M=N[J];14(M){17 K=M.1p;N[J]=K.1H.1u()===I?K:1m}}}1b{1e(;J<H;J++){M=N[J];14(M){N[J]=L?M.1p:M.1p===I}}14(L){p.1O(I,N,1f)}}},"":15(K,I,M){17 L,J=y++,H=D;14(1s I==="2o"&&!G.1q(I)){I=I.1u();L=I;H=n}H("1p",I,J,K,L,M)},"~":15(K,I,M){17 L,J=y++,H=D;14(1s I==="2o"&&!G.1q(I)){I=I.1u();L=I;H=n}H("3z",I,J,K,L,M)}},1X:{2p:15(I,J,K){14(1s J.2E!=="1B"&&!K){17 H=J.2E(I[1]);12 H&&H.1p?[H]:[]}},4E:15(J,M){14(1s M.49!=="1B"){17 I=[],L=M.49(J[1]);1e(17 K=0,H=L.1d;K<H;K++){14(L[K].1K("1W")===J[1]){I.1o(L[K])}}12 I.1d===0?1g:I}},3d:15(H,I){14(1s I.29!=="1B"){12 I.29(H[1])}}},4G:{3h:15(K,I,J,H,N,O){K=" "+K[1].1A(z,"")+" ";14(O){12 K}1e(17 L=0,M;(M=I[L])!=1g;L++){14(M){14(N^(M.1D&&(" "+M.1D+" ").1A(/[\\t\\n\\r]/g," ").1U(K)>=0)){14(!J){H.1o(M)}}1b{14(J){I[L]=1m}}}}12 1m},2p:15(H){12 H[1].1A(z,"")},3d:15(I,H){12 I[1].1A(z,"").1u()},3U:15(H){14(H[1]==="3u"){14(!H[2]){p.2w(H[0])}H[2]=H[2].1A(/^\\+|\\s*/g,"");17 I=/(-?)(\\d*)(?:n([+\\-]?\\d*))?/.2m(H[2]==="3X"&&"2n"||H[2]==="3W"&&"2n+1"||!/\\D/.1q(H[2])&&"8f+"+H[2]||H[2]);H[2]=(I[1]+(I[2]||1))-0;H[3]=I[3]-0}1b{14(H[2]){p.2w(H[0])}}H[0]=y++;12 H},5h:15(L,I,J,H,M,N){17 K=L[1]=L[1].1A(z,"");14(!N&&u.50[K]){L[1]=u.50[K]}L[4]=(L[4]||L[5]||"").1A(z,"");14(L[2]==="~="){L[4]=" "+L[4]+" "}12 L},3b:15(L,I,J,H,M){14(L[1]==="5l"){14((x.2m(L[3])||"").1d>1||/^\\w/.1q(L[3])){L[3]=p(L[3],1g,1g,I)}1b{17 K=p.1O(L[3],I,J,1f^M);14(!J){H.1o.1Z(H,K)}12 1m}}1b{14(u.1t.3G.1q(L[0])||u.1t.3U.1q(L[0])){12 1f}}12 L},3G:15(H){H.4g(1f);12 H}},6N:{8d:15(H){12 H.4S===1m&&H.1E!=="4m"},4S:15(H){12 H.4S===1f},7m:15(H){12 H.7m===1f},6k:15(H){14(H.1p){H.1p.8c}12 H.6k===1f},4p:15(H){12 !!H.1F},3q:15(H){12 !H.1F},8a:15(J,I,H){12 !!p(H[3],J).1d},8b:15(H){12(/h\\d/i).1q(H.1H)},3J:15(J){17 H=J.1K("1E"),I=J.1E;12 J.1H.1u()==="21"&&"3J"===I&&(H===I||H===1g)},6Q:15(H){12 H.1H.1u()==="21"&&"6Q"===H.1E},6R:15(H){12 H.1H.1u()==="21"&&"6R"===H.1E},6U:15(H){12 H.1H.1u()==="21"&&"6U"===H.1E},5Z:15(H){12 H.1H.1u()==="21"&&"5Z"===H.1E},77:15(I){17 H=I.1H.1u();12(H==="21"||H==="2N")&&"77"===I.1E},7v:15(H){12 H.1H.1u()==="21"&&"7v"===H.1E},7f:15(I){17 H=I.1H.1u();12(H==="21"||H==="2N")&&"7f"===I.1E},2N:15(I){17 H=I.1H.1u();12 H==="21"&&"2N"===I.1E||H==="2N"},21:15(H){12(/21|2f|81|2N/i).1q(H.1H)},80:15(H){12 H===H.75.7Q}},6O:{3k:15(I,H){12 H===0},3x:15(J,I,H,K){12 I===K.1d-1},3X:15(I,H){12 H%2===0},3W:15(I,H){12 H%2===1},6E:15(J,I,H){12 I<H[3]-0},6F:15(J,I,H){12 I>H[3]-0},3u:15(J,I,H){12 H[3]-0===I},6M:15(J,I,H){12 H[3]-0===I}},1O:{3b:15(J,O,N,P){17 H=O[1],I=u.6N[H];14(I){12 I(J,N,O,P)}1b{14(H==="2u"){12(J.7R||J.7P||p.58([J])||"").1U(O[3])>=0}1b{14(H==="5l"){17 K=O[3];1e(17 M=0,L=K.1d;M<L;M++){14(K[M]===J){12 1m}}12 1f}1b{p.2w(H)}}}},3U:15(H,K){17 N=K[1],I=H;2W(N){1w"6V":1w"3k":1r((I=I.3z)){14(I.1j===1){12 1m}}14(N==="3k"){12 1f}I=H;1w"3x":1r((I=I.2v)){14(I.1j===1){12 1m}}12 1f;1w"3u":17 J=K[2],Q=K[3];14(J===1&&Q===0){12 1f}17 M=K[0],P=H.1p;14(P&&(P.3c!==M||!H.5a)){17 L=0;1e(I=P.1F;I;I=I.2v){14(I.1j===1){I.5a=++L}}P.3c=M}17 O=H.5a-Q;14(J===0){12 O===0}1b{12(O%J===0&&O/J>=0)}}},2p:15(I,H){12 I.1j===1&&I.1K("1y")===H},3d:15(I,H){12(H==="*"&&I.1j===1)||I.1H.1u()===H},3h:15(I,H){12(" "+(I.1D||I.1K("3H"))+" ").1U(H)>-1},5h:15(M,K){17 J=K[1],H=u.3N[J]?u.3N[J](M):M[J]!=1g?M[J]:M.1K(J),N=H+"",L=K[2],I=K[4];12 H==1g?L==="!=":L==="="?N===I:L==="*="?N.1U(I)>=0:L==="~="?(" "+N+" ").1U(I)>=0:!I?N&&H!==1m:L==="!="?N!==I:L==="^="?N.1U(I)===0:L==="$="?N.3Y(N.1d-I.1d)===I:L==="|="?N===I||N.3Y(0,I.1d+1)===I+"-":1m},3G:15(L,I,J,M){17 H=I[2],K=u.6O[H];14(K){12 K(L,J,I,M)}}}};17 t=u.1t.3G,o=15(I,H){12"\\\\"+(H-0+1)};1e(17 q 1G u.1t){u.1t[q]=1C 2a(u.1t[q].43+(/(?![^\\[]*\\])(?![^\\(]*\\))/.43));u.3Z[q]=1C 2a(/(^(?:.|\\r|\\n)*?)/.43+u.1t[q].43.1A(/\\\\(\\d+)/g,o))}17 v=15(I,H){I=1V.1i.24.1l(I,0);14(H){H.1o.1Z(H,I);12 H}12 I};2i{1V.1i.24.1l(1h.1S.2y,0)[0].1j}2j(E){v=15(L,K){17 J=0,I=K||[];14(B.1l(L)==="[1Y 1V]"){1V.1i.1o.1Z(I,L)}1b{14(1s L.1d==="47"){1e(17 H=L.1d;J<H;J++){I.1o(L[J])}}1b{1e(;L[J];J++){I.1o(L[J])}}}12 I}}17 A,w;14(1h.1S.30){A=15(I,H){14(I===H){s=1f;12 0}14(!I.30||!H.30){12 I.30?-1:1}12 I.30(H)&4?-1:1}}1b{A=15(P,O){14(P===O){s=1f;12 0}1b{14(P.41&&O.41){12 P.41-O.41}}17 M,I,J=[],H=[],L=P.1p,N=O.1p,Q=L;14(L===N){12 w(P,O)}1b{14(!L){12 -1}1b{14(!N){12 1}}}1r(Q){J.4g(Q);Q=Q.1p}Q=N;1r(Q){H.4g(Q);Q=Q.1p}M=J.1d;I=H.1d;1e(17 K=0;K<M&&K<I;K++){14(J[K]!==H[K]){12 w(J[K],H[K])}}12 K===M?w(P,H[K],-1):w(J[K],O,1)};w=15(I,H,J){14(I===H){12 J}17 K=I.2v;1r(K){14(K===H){12 -1}K=K.2v}12 1}}p.58=15(H){17 I="",K;1e(17 J=0;H[J];J++){K=H[J];14(K.1j===3||K.1j===4){I+=K.3F}1b{14(K.1j!==8){I+=p.58(K.2y)}}}12 I};(15(){17 I=1h.22("1L"),J="4M"+(1C 59()).7O(),H=1h.1S;I.1Q="<a 1W=\'"+J+"\'/>";H.2T(I,H.1F);14(1h.2E(J)){u.1X.2p=15(L,M,N){14(1s M.2E!=="1B"&&!N){17 K=M.2E(L[1]);12 K?K.1y===L[1]||1s K.3L!=="1B"&&K.3L("1y").3F===L[1]?[K]:1B:[]}};u.1O.2p=15(M,K){17 L=1s M.3L!=="1B"&&M.3L("1y");12 M.1j===1&&L&&L.3F===K}}H.2L(I);H=I=1g})();(15(){17 H=1h.22("1L");H.26(1h.7M(""));14(H.29("*").1d>0){u.1X.3d=15(I,M){17 L=M.29(I[1]);14(I[1]==="*"){17 K=[];1e(17 J=0;L[J];J++){14(L[J].1j===1){K.1o(L[J])}}L=K}12 L}}H.1Q="<a 2z=\'#\'></a>";14(H.1F&&1s H.1F.1K!=="1B"&&H.1F.1K("2z")!=="#"){u.3N.2z=15(I){12 I.1K("2z",2)}}H=1g})();14(1h.3w){(15(){17 H=p,K=1h.22("1L"),J="7N";K.1Q="<p 3H=\'6A\'></p>";14(K.3w&&K.3w(".6A").1d===0){12}p=15(V,M,Q,U){M=M||1h;14(!U&&!p.3E(M)){17 T=/^(\\w+$)|^\\.([\\w\\-]+$)|^#([\\w\\-]+$)/.2m(V);14(T&&(M.1j===1||M.1j===9)){14(T[1]){12 v(M.29(V),Q)}1b{14(T[2]&&u.1X.3h&&M.2X){12 v(M.2X(T[2]),Q)}}}14(M.1j===9){14(V==="1R"&&M.1R){12 v([M.1R],Q)}1b{14(T&&T[3]){17 P=M.2E(T[3]);14(P&&P.1p){14(P.1y===T[3]){12 v([P],Q)}}1b{12 v([],Q)}}}2i{12 v(M.3w(V),Q)}2j(R){}}1b{14(M.1j===1&&M.1H.1u()!=="1Y"){17 N=M,O=M.1K("1y"),L=O||J,X=M.1p,W=/^\\s*[+~]/.1q(V);14(!O){M.2A("1y",L)}1b{L=L.1A(/\'/g,"\\\\$&")}14(W&&X){M=M.1p}2i{14(!W||X){12 v(M.3w("[1y=\'"+L+"\'] "+V),Q)}}2j(S){}7S{14(!O){N.7T("1y")}}}}}12 H(V,M,Q,U)};1e(17 I 1G H){p[I]=H[I]}K=1g})()}(15(){17 H=1h.1S,J=H.4I||H.7Y||H.7Z||H.7X;14(J){17 L=!J.1l(1h.22("1L"),"1L"),I=1m;2i{J.1l(1h.1S,"[1q!=\'\']:7W")}2j(K){I=1f}p.4I=15(N,P){P=P.1A(/\\=\\s*([^\'"\\]]*)\\s*\\]/g,"=\'$1\']");14(!p.3E(N)){2i{14(I||!u.1t.3b.1q(P)&&!/!=/.1q(P)){17 M=J.1l(N,P);14(M||!L||N.1h&&N.1h.1j!==11){12 M}}}2j(O){}}12 p(P,1g,1g,[N]).1d>0}}})();(15(){17 H=1h.22("1L");H.1Q="<1L 3H=\'1q e\'></1L><1L 3H=\'1q\'></1L>";14(!H.2X||H.2X("e").1d===0){12}H.7U.1D="e";14(H.2X("e").1d===1){12}u.3Q.3t(1,0,"3h");u.1X.3h=15(I,J,K){14(1s J.2X!=="1B"&&!K){12 J.2X(I[1])}};H=1g})();15 n(I,N,M,Q,O,P){1e(17 K=0,J=Q.1d;K<J;K++){17 H=Q[K];14(H){17 L=1m;H=H[I];1r(H){14(H.3c===M){L=Q[H.3P];1z}14(H.1j===1&&!P){H.3c=M;H.3P=K}14(H.1H.1u()===N){L=H;1z}H=H[I]}Q[K]=L}}}15 D(I,N,M,Q,O,P){1e(17 K=0,J=Q.1d;K<J;K++){17 H=Q[K];14(H){17 L=1m;H=H[I];1r(H){14(H.3c===M){L=Q[H.3P];1z}14(H.1j===1){14(!P){H.3c=M;H.3P=K}14(1s N!=="2o"){14(H===N){L=1f;1z}}1b{14(p.1O(N,[H]).1d>0){L=H;1z}}}H=H[I]}Q[K]=L}}}14(1h.1S.2u){p.2u=15(I,H){12 I!==H&&(I.2u?I.2u(H):1f)}}1b{14(1h.1S.30){p.2u=15(I,H){12!!(I.30(H)&16)}}1b{p.2u=15(){12 1m}}}p.3E=15(H){17 I=(H?H.75||H:0).1S;12 I?I.1H!=="7V":1m};17 C=15(H,O){17 M,K=[],L="",J=O.1j?[O]:O;1r((M=u.1t.3b.2m(H))){L+=M[0];H=H.1A(u.1t.3b,"")}H=u.2R[H]?H+"*":H;1e(17 N=0,I=J.1d;N<I;N++){p(H,J[N],K)}12 p.1O(L,K)};1T.45=p;12})();g.4W=1a.45;g.4i=(15(p){15 q(w,x,t){t=t||0;17 s=g.4i.1t,v=w.1d,r=0,u;1e(u=0;u<v;u++){14(s(w[u],x)&&t==r++){12 g(w[u])}}}15 n(r,s,t){12 m.4h(p(r,s||1h),t,r)}15 o(s,r){12 p.70(r,[s]).1d==1}12{2f:n,1t:o,1X:q}})(45);1a.45=g.4W;63 g.4W})();(15(){17 s=g.7K=15(w){14(w==1g){12"1g"}14(1s w){14(w.34){12 w.34()}}14(w.1H){14(w.1j==1){12"3e"}14(w.1j==3){12(/\\S/).1q(w.3F)?"8g":"8h"}}1b{14(1s w.1d=="47"){14(w.8C){12"1n"}14("2H"1G w){12"8D"}}}12 1s w};17 m=g.8B=15(y,w){14(y==1g){12 1m}17 x=y.$2Z||y.2Z;1r(x){14(x===w){12 1f}x=x.4p}12 y 4a w};17 l=1a.2D;17 t=1f;1e(17 n 1G{1N:1}){t=1g}14(t){t=["48","35","8A","8y","8z","1N","2Z"]}l.1i.2V=15(x){17 w=1a;12 15(z,y){14(z==1g){12 1a}14(x||1s z!="2o"){1e(17 A 1G z){w.1l(1a,A,z[A])}14(t){1e(17 B=t.1d;B--;){A=t[B];14(z.48(A)){w.1l(1a,A,z[A])}}}}1b{w.1l(1a,z,y)}12 1a}};l.1i.20=15(w,x){1a[w]=x}.2V();l.1i.3g=15(w,x){1a.1i[w]=x}.2V();l.5s=15(w){12(s(w)=="15")?w:15(){12 w}};17 q=1V.1i.24;l.3g({5O:15(){1a.$4m=1f;12 1a},8E:15(){1a.$51=1f;12 1a}});17 o=g.7g=15(z,y){14(z){17 x=z.1u();17 w=15(A){12(s(A)==x)};o["8F"+z]=w;14(y!=1g){y.1i.34=(15(){12 x}).5O();y.1E=w}}14(y==1g){12 1g}y.20(1a);y.$2Z=o;y.1i.$2Z=y;12 y};17 k=2P.1i.1N;o.8K=15(w){12(w!=1g&&1s w.1d=="47"&&k.1l(w)!="[1Y 2D]")};17 u={};17 v=15(w){17 x=s(w.1i);12 u[x]||(u[x]=[])};17 r=15(x,B){14(B&&B.$4m){12}17 w=v(1a);1e(17 y=0;y<w.1d;y++){17 A=w[y];14(s(A)=="1E"){r.1l(A,x,B)}1b{A.1l(1a,x,B)}}17 z=1a.1i[x];14(z==1g||!z.$51){1a.1i[x]=B}14(1a[x]==1g&&s(B)=="15"){p.1l(1a,x,15(C){12 B.1Z(C,q.1l(1n,1))})}};17 p=15(w,y){14(y&&y.$4m){12}17 x=1a[w];14(x==1g||!x.$51){1a[w]=y}};o.3g({3g:r.2V(),3s:p.2V(),8L:15(w,x){r.1l(1a,w,1a.1i[x])}.2V(),8J:15(w){v(1a).1o(w);12 1a}});1C o("8I",o);2a.1i.34=15(){12"8G"};59.1i.34=15(){12"8H"}})();17 d=1a.6a=g.2e=(15(){17 n=(15(){1e(17 o 1G{1N:1}){14(o==="1N"){12 1m}}12 1f})();15 k(){}15 l(){17 r=1g,q=4t(1n);14(g.C.5o(q[0])){r=q.2d()}15 o(){1a.2r.1Z(1a,1n)}o.1i.34=15(){12"6a"};g.C.20(o,d.6d);o.4D=r;o.6f=[];14(r){k.1i=r.1i;o.1i=1C k;r.6f.1o(o)}1e(17 p=0,s=q.1d;p<s;p++){o.5j(q[p])}14(!o.1i.2r){o.1i.2r=15(){}}o.1i.2Z=o;12 o}15 m(u){17 q=1a.4D&&1a.4D.1i,p=g.C.5v(u);14(n){14(u.1N!=2P.1i.1N){p.1o("1N")}14(u.35!=2P.1i.35){p.1o("35")}}1e(17 o=0,r=p.1d;o<r;o++){17 t=p[o],s=u[t];14(q&&g.C.5o(s)&&s.5K()[0]=="8x"){17 v=s;s=(15(w){12 15(){12 q[w].1Z(1a,1n)}})(t).5G(v);s.35=v.35.4d(v);s.1N=v.1N.4d(v)}1a.1i[t]=s}12 1a}12{2b:l,6d:{5j:m}}})();(15(){g.C=g.O={};17 J=2P.1i.1N,L="8w",N="8m",Y="5V",G="5U",E="2K",X="2P",q="[1Y 2D]",l="[1Y 5V]",r="[1Y 5U]",m="[1Y 2K]",k="[1Y 1V]",U="[1Y 59]";15 o(aa,Z){17 ac=1s(aa)=="1Y"&&aa!=1g;14(ac&&V(Z)){1e(17 ab 1G 8n){12!!Z}}12 ac}15 V(Z){12 Z!==1B}15 M(Z){12 Z===1B}15 u(Z){12 o(Z)&&Z.1j===1&&!!Z.1H}15 n(Z){12 u(Z)||Z==2k||Z==1x}15 I(Z){12 o(Z)&&Z.2s===1f}15 D(Z){12 o(Z)&&Z.2l===1f}15 P(Z){12 o(Z)&&V(Z.1d)}15 W(Z){12 o(Z)&&V(Z.1d)&&Z.1d>0&&u(Z[0])}15 K(Z){12 n(Z)?Z:p(Z)?(1x.2E(Z)||1x.49(Z)[0]):1g}15 z(Z){12 A({},Z)}15 R(Z){12!!(Z&&Z.1j==1)}15 C(Z){12 J.1l(Z)===k}15 v(Z){12 J.1l(Z)===q}15 p(Z){12 J.1l(Z)===m}15 w(Z){12 Z&&Z.3C?Z.3C():g.S.57(Z)}15 T(Z){12 J.1l(Z)===r}15 B(Z){12 J.1l(Z)===U}15 x(Z){12 1s Z==="1B"}15 y(Z){12 Z 4a i}15 H(Z){14(Q(Z)!==X){3A 1C 8l()}17 aa=[];1e(17 ab 1G Z){14(Z.48(ab)){aa.1o(ab)}}12 aa}15 t(Z,ab){1e(17 aa 1G Z){14(48.1l(Z,aa)&&Z[aa]===ab){12 aa}}12 1g}15 Q(aa){2W(aa){1w 1g:12 L;1w(8k 0):12 N}17 Z=1s aa;2W(Z){1w"8i":12 Y;1w"47":12 G;1w"2o":12 E}12 X}15 s(Z){2i{14(x(Z)){12"1B"}14(Z===1g){12"1g"}12 Z.4L?Z.4L():2K(Z)}2j(aa){14(aa 4a 8j){12"2w"}3A aa}}15 A(Z,ab){1e(17 aa 1G ab){Z[aa]=ab[aa]}12 Z}15 S(Z){12 p(Z)?1C 2D("a","b","c","12 "+Z):Z}15 O(Z){12(1C g.H(Z)).4Y()}A(g.C,{8o:Q,76:o,4R:V,3O:M,8p:u,8u:n,2s:I,2l:D,8v:P,62:W,1c:K,20:A,3p:z,3C:w,4L:s,3B:R,4r:C,5Y:C,5H:y,5o:v,3o:v,55:p,4q:p,4n:T,8t:T,8s:B,5v:H,69:t,54:x,78:S,4Y:O})})();g.C.20(2D.1i,(15(){17 p=1V.1i.24;15 o(x,w){17 u=p.1l(1n,2);17 v=w;17 t=x;14(g.C.3o(w)){v=x;t=w}1b{14(g.C.4q(w)){v=x;t=v[w]}}12 15(){12 t.1Z(v,u.44([].24.1l(1n)))}}15 s(){17 t=1a.1N().1t(/^[\\s\\(]*15[^(]*\\(([^)]*)\\)/)[1].1A(/\\/\\/.*?[\\r\\n]|\\/\\*(?:.|[\\r\\n])*?\\*\\//g,"").1A(/\\s+/g,"").2U(",");12 t.1d==1&&!t[0]?[]:t}15 l(v){14(1n.1d<2&&g.C.54(1n[0])){12 1a}17 t=1a,u=p.1l(1n,1);12 15(){17 w=r(u,1n);12 t.1Z(v,w)}}15 n(u){17 t=1a;12 15(){17 v=k([t.4d(1a)],1n);12 u.1Z(1a,v)}}15 q(){14(!1n.1d){12 1a}17 t=1a,u=p.1l(1n,0);12 15(){17 v=r(u,1n);12 t.1Z(1a,v)}}15 k(w,t){17 v=w.1d,u=t.1d;1r(u--){w[v+u]=t[u]}12 w}15 r(u,t){u=p.1l(u,0);12 k(u,t)}15 m(v){17 t=1a,u=p.1l(1n,1);v=v*8q;12 1T.6G(15(){12 t.1Z(t,u)},v)}12{4x:o,5K:s,79:s,4d:l,5G:n,5A:q,8r:m}})());(15(){g.S=g.2K=g.2e.2b();g.S.20({57:15(l){12 l==1g?"":2K(l)},2S:15(l){12 2K(l).1A(/^\\s+|\\s+$/g,"")},8M:15(l,m){12 l.1U(m)>-1}});15 k(m,n){17 l=g.S.2S(m).1t(/([^?#]*)(#.*)?$/);14(!l){12{}}12 g.A.1k(l[1].2U(n||"&"),15(r,s,o){14((r=r.2U("="))[0]){17 p=7p(r.2d()),q=r.1d>1?r.2Y("="):r[0];14(q!=1B){q=7p(q)}14(p 1G r){14(!g.C.4r(r[p])){r[p]=[r[p]]}o[p].1o(q)}1b{o[p]=q}}},{})}g.O.20(g.S,{7z:k})})();17 c=(15(){15 s(x,w){17 v=0;2i{1a.4v(15(z){x.1l(w,z,v++)})}2j(y){14(y!={}){3A y}}12 1a}15 p(y,x,w){17 v=-y,z=[],A=1a.4b();14(y<1){12 A}1r((v+=y)<A.1d){z.1o(A.24(v,v+y))}12 z.5W(x,w)}15 q(x,w){x=x||7C.K;17 v=[];1a.1k(15(z,y){v.1o(x.1l(w,z,y))});12 v}15 k(x,w){17 v;1a.1k(15(z,y){14(x.1l(w,z,y)){v=z;3A $1z}});12 v}15 r(x,w){17 v=[];1a.1k(15(z,y){14(x.1l(w,z,y)){v.1o(z)}});12 v}15 o(v,x,w){1a.1k(15(z,y){v=x.1l(w,v,z,y)});12 v}15 m(w){17 v=$A(1n).24(1);12 1a.3y(15(x){12 x[w].1Z(x,v)})}15 n(w){17 v=[];1a.1k(15(x){v.1o(x[w])});12 v}15 u(x,w){17 v=[];1a.1k(15(z,y){14(!x.1l(w,z,y)){v.1o(z)}});12 v}15 l(){12 1a.3y()}15 t(){12 1a.4b().1d}12{1k:s,7F:p,5W:q,3y:q,7E:k,7D:r,2f:r,1O:r,5M:o,7H:m,7I:n,7J:u,7G:t,1X:k}})();17 i=g.H=d.2b(c,(15(){15 p(q){1a.4o=o(q)?q.5C():g.O.3p(q)}15 k(r){1e(17 q 1G 1a.4o){17 s=1a.4o[q],t=[q,s];t.2C=q;t.3S=s;r(t)}}15 o(q){12 q 4a i}15 m(){12 g.O.3p(1a.4o)}15 l(q,r){14(g.O.54(r)){12 q}12 q+"="+5I(g.S.57(r))}15 n(){12 1a.5M([],15(u,x){17 t=5I(x.2C),r=x.3S;14(r&&1s r=="1Y"){14(g.O.4r(r)){17 w=[];1e(17 s=0,q=r.1d,v;s<q;s++){v=r[s];w.1o(l(t,v))}12 u.44(w)}}1b{u.1o(l(t,r))}12 u}).2Y("&")}12{2r:p,4v:k,5H:o,5C:m,4Y:n}})());(15(){17 l=6i.7A.1u(),k=6i.7y.1u(),m=l.1t(/(3V|3D|6t|4j|1P)[\\s\\/:]([\\w\\d\\.]+)?.*?(4k|1P[\\s\\/:]([\\w\\d\\.]+)|$)/)||[1g,"6X",0],p=m[1]=="3D"&&1h.7B;17 o=g.2e.2b({1W:(m[1]=="1P")?m[3]:m[1],1P:p||6W((m[1]=="3V"&&m[4])?m[4]:m[2]),3j:{1W:l.1t(/6y(?:ad|6l|6j)/)?"56":(l.1t(/(?:6T|6L)/)||k.1t(/6K|2B|6J/)||["6D"])[0]},6q:{7a:!!(1h.5X),71:!!(1T.6g),67:!!(1h.5t),7t:!!(1T.5T)},6z:{}});g.B=g.4u=1C o();g.B=g.4u={1W:(m[1]=="1P")?m[3]:m[1],1P:p||6W((m[1]=="3V"&&m[4])?m[4]:m[2]),3j:{1W:l.1t(/6y(?:ad|6l|6j)/)?"56":(l.1t(/(?:6T|6L)/)||k.1t(/6K|2B|6J/)||["6D"])[0]},6q:{7a:!!(1h.5X),71:!!(1T.6g),67:!!(1h.5t),7t:!!(1T.5T)},6z:{}};g.B[g.B.1W]=1f;14(g.B.1P==5){g.B.1P=8}g.B[g.B.1W+6C(g.B.1P,10)]=1f;g.B.3j[g.B.3j.1W]=1f;14(g.B.3j.56){g.B.3j.9m=1f}g.B.2c={};17 n=15(r,q){g.B.2c.1W=r;g.B.2c[r+q]=1f;g.B.2c.1P=q};14(g.B.3D){g.B.2c.3v=1f;2W(g.B.1P){1w 6:n("3v",4);1z;1w 7:n("3v",5);1z;1w 8:n("3v",6);1z;1w 9:n("3v",7)}}14(g.B.6t){g.B.2c.3i=1f;14(g.B.1P>=3){n("3i",19)}1b{n("3i",18)}}14(g.B.4k||g.B.4j){g.B.2c.2M=1f;2W(g.B.1P){1w 2:n("2M",aQ);1z;1w 3:n("2M",aR);1z;1w 4:n("2M",aT)}}14(g.B.3V){g.B.2c.3K=1f;14(g.B.1P>=9.6){n("3K",b1)}1b{14(g.B.1P>=9.5){n("3K",b0)}1b{n("3K",aU)}}}14(g.B.1W=="6X"){2W((l.1t(/(?:2M|6w|3i)/)||[])[0]){1w"2M":1w"6w":g.B.2c.2M=1f;1z;1w"3i":g.B.2c.3i=1f}}})();(15(){g.A=g.1V=g.2e.2b();g.A.20({1k:15(o,q,p){14(g.C.4r(o)){17 p=p||[];1e(17 k=0,m=o.1d;k<m;k++){q(o[k],k,p)}}1b{14(g.C.4n(o)){17 p=p||[];1e(17 k=0,m=o;k<m;k++){q(k,p)}}1b{17 p=p||{};1e(17 n 1G o){q(o[n],n,p)}}}14(p){12 p}},3y:15(n,o){17 l=[],k=n.1d;14(o){o=g.C.78(o);1e(17 m=0;m<k;m++){l[m]=o(n[m],m)}}1b{1e(17 m=0;m<k;m++){l[m]=n[m]}}12 l}})})();(15(){17 l={};17 k=g.7h=g.E=1C g.7g("7h",15(m,q){14(!q){q=1T}m=m||q.2x;14(m.$7i){12 m}1a.2x=m;1a.$7i=1f;1a.2d=m.aY;1a.aV=m.aN;1a.at=m.as;1a.au=m.aO;17 s=1a.1E=m.1E;17 r=m.5w||m.ax;1r(r&&r.1j==3){r=r.1p}1a.5w=g(r).1c;14(s.1U("2C")==0){17 n=1a.4Z=(m.5J||m.aw);1a.2C=l[n]||g.O.69(m.ar,n);14(s=="aq"){14(n>64&&n<al){1a.2C="f"+(n-64)}1b{14(n>95&&n<ak){1a.2C=n-96}}}14(1a.2C==1g){1a.2C=2K.an(n).1u()}}1b{14(s=="5k"||s=="ap"||s=="ao"||s.1U("az")==0){17 t=q.1h;t=(!t.6h||t.6h=="8N")?t.3r:t.1R;1a.4f={x:m.5p,y:m.5c};1a.4e={x:(m.2Q!=1g)?m.2Q-q.aJ:m.5p,y:(m.2O!=1g)?m.2O-q.aI:m.5c};14(s=="aH"||s=="aG"){1a.aB=(m.5F)?m.5F/aA:-(m.aF||0)/3}1a.av=(m.5J==3||m.2N==2);14(s=="42"||s=="6p"){17 u=m.5x||m[(s=="42"?"5s":"aE")+"aD"];1r(u&&u.1j==3){u=u.1p}1a.5x=g(u).1c}}1b{14(s.1U("aC")==0||s.1U("aM")==0){1a.68=m.68;1a.65=m.65;1a.5Q=m.5Q;1a.6e=m.6e;17 p=1a.6c=m.6c;14(p&&p[0]){17 o=p[0];1a.4f={x:o.2Q,y:o.2O};1a.4e={x:o.5p,y:o.5c}}}}}14(!1a.4e){1a.4e={}}14(!1a.4f){1a.4f={}}});k.3g({5r:15(){14(1a.2x.5r){1a.2x.5r()}1b{1a.2x.aL=1f}12 1a},5n:15(){14(1a.2x.5n){1a.2x.5n()}1b{1a.2x.aK=1m}12 1a}});k.60=15(n,m){l[n]=m;12 1a};k.61=k.60.2V(1f);k.61({"38":"ay","40":"am","37":"4w","39":"b2","27":"aW","32":"aP","8":"aX","9":"ai","46":"63","13":"9i"})})();1a.9j=g.E;(15(){g.R=g.9k=g.2e.2b();g.R.20({7r:/^\\-?\\d+(?:\\.\\d+)?$/})})();(15(){17 k=1a.25=g.2e.2b({4p:15(l){12 1v.1k(15(o,n,p){14(!p){p=n}p=p||1;o=o.1c;1e(17 m=0;m<p;m++){o=o.1p}12 g(o)},1a,l)},4J:15(l){12 1v.1k(15(q,m){17 p=2D.1i.4x;14(g.C.4n(m)){17 o=m>0?"2v":"3z";m=9h.9g(m);17 q=q.1c;1r(q=q[o]){14(q.1j==1&&(--m==0)){12 g(q)}}12 1m}17 n=[];(g.C.3O(m)?"<>":m).1A(/./g,p(q,15(s){s=s==">"?"2v":"3z";17 r=1a.1c;1r(r=r[s]){r.1j==1&&n.4g(r)}}));14(!n[0][0]){n=[n]}12 4C.4h(n)},1a,l)},9c:15(){12 1a.4J(-1)},4H:15(){12 1a.4J(1)},3n:15(l){12 1v.1k(15(s,q,m){14(!m){m=q}14(m.1d==0){17 p=[];1e(17 o=s.1c.2y,n=o.1d,q=0;q<n;q++){o[q].1j==1&&p.1o(o[q])}12 4C.4h(p)}17 r=15(y,v){17 w=y.2y;17 u=w.1d;17 t=+v.2d();17 x;14(t<0){1e(x=u-1;x>=0;x--){14(w[x].1j==1&&++t==0){1z}}}1b{1e(x=0;x<u;x++){14(w[x].1j==1&&--t<0){1z}}}14(x<0||x>=u){12 1m}12 v.1d>0?r(w[x],v):g(w[x])};12 g(r(s.1c,g.A.3y(m)))},1a,1n)},3k:15(){12 1a.3n(0)},3x:15(){12 1a.3n(-1)},9d:15(l){14(1a.2s){14(g.C.55(l)){1a.1c.26(g.4T(l))}1b{14(g.C.3B(l.1c)){1a.1c.26(l.1c)}1b{1a.1c.26(l)}}}1b{14(1a.2l){1a.1k(15(o,m,n){14(g.C.55(n)){o.1c.26(g.4T(n))}1b{14(g.C.3B(n)){9e=n.4P(1f);o.1c.26(n)}}},l)}}12 1a},9f:15(){12 1v.1k(15(m,l){m.4p().1c.2L(m.1c)},1a)},3q:15(l){12 1v.1k(15(o){14(g.C.3O(l)){1r(o.1c.1F){o.1c.2L(o.1c.1F)}}1b{1e(17 m=o.1c.2y,n=m.1d-1;n>=0;n--){m[n].1j!=l&&o.1c.2L(m[n])}}12 o},1a)},9l:15(l){17 q=1a.1c.29(l);2i{12[].24.1l(q)}2j(p){17 n,o=0,m=[];1r(n=q[o]){m[o++]=n}12 m}},5y:15(o){3e=1a.1c;14(g.C.4q(o)||g.C.4n(o)||g.C.3B(o)||(o&&(o.4V||o.3C))){o={6H:o}}17 n,p,m,q;1e(17 l 1G o){n=o[l];14(g.C.3o(n)){4B}l=l.1u();p=g.4F[l];14(n&&n.4V){n=n.4V()}14(g.C.3B(n)){1a.5y(3e,n)}n=g.C.3C(n);m=((l=="6I"||l=="5f")?3e.1p:3e).6P.74();q=g.6x(m,n);14(l=="36"||l=="5f"){q.aj()}g.A.1k(q,p.5A(3e))}12 g(1a)},9t:15(){12 1v.1k(15(o){17 n=o.1c;17 m=o.1c.1F;1r(m){17 l=m.2v;14(m.1j==3&&!/\\S/.1q(m.3F)){n.2L(m)}m=l}12 g(o)},1a)}});k.3g({9u:15(){12 1v.1k(15(l){12 l.1c.1D},1a)},4X:15(l){12 1v.1k(15(n){17 m=n.1c.1D;12(m.1d>0&&(m==l||1C 2a("(^|\\\\s)"+l+"(\\\\s|$)").1q(m)))},1a)},5D:15(l){12 1v.1k(15(n,m){14(!n.4X(l)){n.1c.1D+=(n.1c.1D?" ":"")+l}12 g(n)},1a)},5B:15(l){12 1v.1k(15(n){17 m=g.S.2S;n.1c.1D=m(n.1c.1D.1A(1C 2a("(^|\\\\s+)"+l+"(\\\\s+|$)")," "));12 n},1a)},9v:15(l){12 1a[1a.4X(l)?"5B":"5D"](l)},1X:15(l){12 1v.1k(15(o,n,m){14(!m){m=n}17 p=4t([m]).2Y(", ");12 g.4i.2f(p,o.1c)},1a,l)},2q:15(l){12 1v.1k(15(o){14(g.C.4R(l)){14(o.1M=="2B"||o.1M=="1R"){17 n=g().2g("6u",15(){1h.1S.2q=l;1h.1R.2q=l});17 m=g().2g("7d",15(p){14(p.4Z==7c&&g.B.4j||g.B.4k||g.B.7e){1h.1S.2q=l;1h.1R.2q=l}})}1b{o.1c.2q=l}12 o}1b{14(o.1M=="2B"||o.1M=="1R"){12 1h.1S.2q||1h.1R.2q}1b{12 o.1c.2q}}},1a)},2t:15(l){12 1v.1k(15(o){14(g.C.4R(l)){14(o.1M=="2B"||o.1M=="1R"){17 n=g().2g("6u",15(){1h.1S.2t=l;1h.1R.2t=l});17 m=g().2g("7d",15(p){14(p.4Z==7c&&g.B.4j||g.B.4k||g.B.7e){1h.1S.2t=l;1h.1R.2t=l}})}1b{o.1c.2t=l}12 o}1b{14(o.1M=="2B"||o.1M=="1R"){12 1h.1S.2t||1h.1R.2t}1b{12 o.1c.2t}}},1a)},72:15(){12 1a.1J("4U",/^(9s|9r|a|21|b|u|i|9n|9o|9p)$/.1q(1a.1M)===1m?"9q":"9b")},73:15(){12 1a.1J("4U","6Y")},9a:15(){1a.1J("4U")=="6Y"?1a.72():1a.73()},1J:15(m,l){12 1v.1k(15(r,o){17 n=g.S.2S;14(g.C.76(m)){1e(17 p 1G m){r.1J(p,m[p])}12 g(r.1c)}14(m.1U(":")>-1){g.A.1k(m.1A(/;$/,"").2U(";"),2D.1i.4x(15(u){17 t=u.2U(":");r.1J(n(t.2d()),n(t.2Y(":")))},r));12 g(r.1c)}14(/\\-\\w/.1q(m)){m=m.1A(/\\-(\\w)/,15(u,t){12 t.74()})}14(o.1d==1){14(r.1c==1h||r.1c==1T){r.1c=1h.1R}12 r.1c.23[m]||(1x.7j?1x.7j.8U(r.1c,1g)[m]:r.1c.7s?r.1c.7s[m]:"")}2i{14(l=="8V(53,53,53)"){l="8W";r.1c.23[m]=l}r.1c.23[m]=l}2j(q){}12 r},1a,1n)},8T:15(l){12 1a.1J(l)},8S:15(m,l){12 1a.1J(m,l)},31:15(l){12 1v.1k(15(o,m,p){14(!p){p=m}14(p){14(o.1c.23.31!=1B){12 o.1J("31",p)}12 o.1J("1O","7q(31="+p*7w+")")}14(o.1c.23.31!=1B){12 g.R.7r.1q(o.1J("31"))?+2a.6n:1}12/7q\\(31=(\\d+)\\)/.1q(o.1J("1O"))?2a.$1/7w:1},1a,l)},3r:15(l){14(g.C.3O(l)){14(1a.2s){12 1a.1c.1Q}1b{14(1a.2l){12 g.A.1k(1a.2G[0],15(o,n,m){m[n]=o.1Q})}}}12 1v.1k(15(o){2W(o.1M){1w"2f":14(4u.3D){o.3q();17 o=1x.22("1L");o.1Q="<2f>"+l+"</2f>";17 m=o.1F.2y;1r(m.1d>0){o.1c.26(m[0])}}1b{o.1c.1Q=l}14(1n.1d==2){o.1c.3S=1n[1]}1z;1w"28":o.1X("2h").2H(0).3r(l);1z;1w"8O":1w"8P":1w"2h":o.3q();17 p=1x.22("1L");p.1Q="<28><2h>"+l+"</2h></28>";17 n=p.1F.8R[0].8X;1r(n.1d>0){o.1c.26(n[0])}1z;8Y:o.1c.1Q=l;1z}12 o},1a)},4Q:15(m,l){12 1v.1k(15(t,s,p){14(!p){p=s}17 v=p.1d;14(v==2){14(m=="23"){t.1c.23.6s=l}1b{14(t.1c[m]!=1B){t.1c[m]=l}1b{t.1c.2A(m,l)}}12 t}14(v==1){14(1s m=="1Y"){1e(17 s 1G m){t.4Q(s,m[s])}12 t}14(m.1U("=")>-1){F.1k(F.2S(m).2U(/\\s+/),F.99(15(o){17 n=o.2U("=");t.4Q(F.2S(n[0]),/["\'](.+?)["\']/.1q(n[1])?2a.$1:F.2S(n[1]))},t));12 t}14(m=="23"){12 t.1c.23.6s}1b{14(m=="2z"&&t.1M=="a"){12 t.1c.1K(m,2)}1b{14(m=="3R"){12 t.1c.1K(m,2)}1b{14(t.1c[m]!=1B){12 t.1c[m]}}}}12 t.1c.1K(m)}14(v==0){17 u={};1e(17 r=t.1c.93,q=r.1d,s=0;s<q;s++){u[r[s].1W]=r[s].3S}12 u}},1a,1n)},2g:15(n,l,m){12 1v.1k(15(r){n=n.1A(/^6o/,"");17 p=r;17 q=q||r;17 o=15(s){14(!s){s=1T.e}l.1l(q,1C g.E(s),p)};14(r.1c.4y){r.1c.4y(n,o,1m)}1b{14(r.1c.2F){14(r.1M=="2B"){r.1c.2F("5b"+n,o)}1b{r.1c.2F("5b"+n,o)}}}12 2a.6n=="6o"?o:r},1a)},91:15(m,l){12 1v.1k(15(n){14(2k.4z){n.1c.4z(m,l,1m)}1b{14(2k.2F){n.1c.5R("5b"+m,l)}}12 n},1a)},5k:15(l,m){12 1a.2g("5k",l,m)},92:15(l,m){14(1n.1d==1){1a.2g("42",l)}1b{1a.2g("42",l);1a.2g("6p",m)}12 1a}})})();(15(){g.P=25.1i;g.P.2e=15(){};g.P.2e.20({3s:15(k){25.5j(k)}})})();g.P.2e.3s({1I:15(k,l){14(1n.1d==2){1a.1c.23[k]=l+"1I";12 1a}12 6C(1a.1J(k),10)||0},5d:15(k){14(1n.1d==1){12 1a.1I("5d",k)}12 1a.1I("5d")||1a.1c.9w-1a.1I("9x")-1a.1I("a0")-1a.1I("a1")-1a.1I("a2")},5g:15(k){14(1n.1d==1){12 1a.1I("5g",k)}12 1a.1I("5g")||1a.1c.9Z-1a.1I("9Y")-1a.1I("9U")-1a.1I("9V")-1a.1I("9W")},2Q:15(l){17 k;l?k=l:k=1a.1c;12 k.3a?k.5m+25.1i.2Q(k.3a):k.5m},2O:15(l){17 k;l?k=l:k=1a.1c;12 k.3a?k.5q+25.1i.2O(k.3a):k.5q},9X:15(l){17 k;l?k=l:k=1a.1c;12 k.1p==k.3a?k.5m:25.1i.2Q(k)-25.1i.2Q(k.1p)},a4:15(l){17 k;l?k=l:k=1a.1c;12 k.1p==k.3a?k.5q:25.1i.2O(k)-25.1i.2O(k.1p)},af:15(k){14(1n.1d==1){1a.1c.23.4w=k+"1I"}12 1a.1I("4w")},ag:15(k){14(1n.1d==1){1a.1c.23.36=k+"1I"}12 1a.1I("36")}});g.P.3p=15(k){15 m(n,p){1e(17 o 1G p){n[o]=p[o]}12 n}14(!!k){17 l=m({},1a);12 g(l.1c.4P(1f))}1b{12 1a}};g.P.2e.3s({a5:15(k){12 1v.1k(15(n){17 o=n.3p(1f);17 m=1h.22("1L");m.1Q=k;17 l=m.4P(1f);1r(l.1F&&l.1F.1j==1){l=l.1F}l.26(o.1c);n.1c.1p.2T(l);n.1c.1p.2L(n.1c)},1a)},a7:15(l,k){12 1v.1k(15(o){14(k){o=o.3n(k)}17 n=o.3r();o.3q();o.3r(l);17 m=o.1c;1r(m.1F){m=m.1F}m.1Q=n},1a)}});1v.1k=15(n,m,k){17 l=n.79();14(m.2s){14(l[l.1d-1]=="r"){n(m,k);12 g(m.1c)}1b{12 n(m,k)}}1b{14(m.2l){14(l[l.1d-1]=="r"){m.1k(n,k);12 4C(m.5E)}1b{12 m.4v(n,k)}}}};g.4F={6I:15(k,l){k.1p.2T(l,k)},36:15(k,l){k.2T(l,k.1F)},6H:15(k,l){k.26(l)},5f:15(k,l){k.1p.2T(l,k.2v)},7l:{9S:["<28>","</28>",1],9E:["<28><2h>","</2h></28>",2],9F:["<28><2h><4A>","</4A></2h></28>",3],9G:["<28><2h><4A><6r>","</6r></4A></2h></28>",4],9C:["<2f>","</2f>",1]}};g.6x=15(o,n,p){17 q=1h.22("1L");17 m=g.4F.7l[o];17 k=1m;14(m){k=1f}1b{14(p){k=1f;m=["","",0]}}14(k){q.1Q="&9y;"+m[0]+n+m[1];q.2L(q.1F);1e(17 l=m[2];l--;){q=q.1F}}1b{q.1Q=n}12 4t(q.2y)};g.4T=15(o){17 l=[],m=1x.22("1L"),s=1x.9z();m.1Q=o;17 n=m.2y;1e(17 q=0,t=n.1d;q<t;q++){l[l.1d]=n[q]}1e(17 p=0,u=l.1d;p<u;p++){s.26(l[p])}12 s};g.3s=15(k,l){14(!l){g.O.20(g,k)}1b{12 g.O.20(k,l)}};g.66=15(k){14(g.C.3o(k)){12 j(k)}k.2r&&j(2D.1i.4x(k,k.2r));12 k};17 j=15(){17 n=1m,o=[],p,k=15(q){14(n){q()}1b{o.1o(q)}},l=15(){1e(17 r=0,q=o.1d;r<q;r++){o[r]()}o=1g},m=15(q){14(n){12}n=1f;l();14(1x.4z){1x.4z("5S",m,1m)}1b{14(1x.2F){1x.5R("4l",m);14(2k==2k.36){9H(p);p=1g}}}};14(1x.4y){1x.4y("5S",m,1m)}1b{14(1x.2F){1x.2F("4l",15(){14((/7o|7n/).1q(1x.3M)){m()}});14(2k==2k.36){p=9I(15(){2i{n||1x.9P.9Q("4w")}2j(q){12}m()},5)}}}12 k}();17 f=1a.9R=d.2b(25,{2r:15(k){1a.2s=1f;1a.1c=k;1a.5L=1f;1a.1M=1a.1c==2k?"2B":1a.1c==1x?"9N":1a.1c.6P.1u()},5P:"1.4.1",9J:"9K",2H:15(k){12 1a},7b:15(k){12 1a.1c},5N:15(){14(1a.5P){1T.K=e}12 52},1k:15(k){k(1a,0);12 1a}});17 h=d.2b(f,{2r:15(k){14(h.5z){12 1m}14(h.4K){1a.5u=k;5i.5e(\'9L: 9M "\'+1a.5u+\'" 5l 2g\')}}});g.9O=15(k){h.5z=k};g.4K=15(k){h.4K=k;14(g.4u.3D){1T.5i=15(){};5i.5e=5e=15(l){9B(l)}}};17 b=1a.9A=d.2b(25,{2r:15(k,l){1a.2G=k;1a.3m=k[0].1d;1a.1d=k[0].1d;1a.2l=1f;1a.5L=1f;1a.5E=l||"1g";k[1]=k[1]||"1g";12 1a},2H:15(k){14(k<0){k+=1a.3m}12 g(1a.2G[0][k])},7b:15(k){14(k<0){k+=1a.3m}12 1a.2G[0][k]},1k:15(p,m){17 n=1a,l=1a.3m;1e(17 k=0;k<l;k++){14(1a.2G[0][k]==1B){4B}1b{p(g(n.2H(k)),k,m)}}12 1a},4N:15(k){1e(17 m=0;m<k.1d;m++){1e(17 l=m+1;l<k.1d;l++){14(k[l]===k[m]){k.3t(l,1);l--}}}12 k},4v:15(t,u){17 k=1a,p=1a.3m,r=[],n=[],l=[],v=[];1e(17 s=0;s<p;s++){r[s]=t(g(k.2H(s)),s,u);14(r[s].2s){l[s]=r[s].1c}1b{14(r[s].2l){l[s]=r[s].2G[0]}}}14(r[0].2s){1e(17 m=0,p=r.1d;m<p;m++){17 q=r[m].1c;14(!q.1y&&!q.1D){v[m]=r[m].1M}1b{14(q.1y&&!q.1D){v[m]="#"+q.1y}1b{14(q.1D&&!q.1y){v[m]="."+q.1D}1b{14(q.1y&&q.1D){v[m]="."+q.1y}}}}}v=k.4N(v).2Y(", ")}1b{14(r[0].2l){1e(17 m=0,p=r.1d;m<p;m++){17 q=r[m].2G[0];14(!q.1y&&!q.1D){v[m]=r[m].1M}1b{14(q.1y&&!q.1D){v[m]="#"+q.1y}1b{14(q.1D&&!q.1y){v[m]="."+q.1D}1b{14(q.1y&&q.1D){v[m]="."+q.1y}}}}}v=k.4N(v).2Y(", ")}}n.1o(l);12 1C b(n,v)},1N:15(){12"9D"}})})();(15(){17 b=1h,i={},e={},h=15(k){12 k.2Z===1V},g={7u:["9T://a8.a6.a9/ae/1v/1v.ah.1.3.3.4O"],3I:{}},j=b.29("4M")[0],d=15(l,p,r,k,o){14(!l){12}14(i[l]){e[l]=1m;14(k){k(l,o)}12}14(e[l]){6G(15(){d(l,p,r,k,o)},1);12}e[l]=1f;17 q,m=p||l.1u().a3(l.90(".")+1);14(m==="4O"){q=b.22("4M");q.2A("1E","3J/8Z");q.2A("3R",l);q.2A("94",1f)}1b{14(m==="1J"){q=b.22("98");q.2A("1E","3J/1J");q.2A("97","8Q");q.2A("2z",l);i[l]=1f}}14(r){q.6b=r}14(m==="1J"){j.1p.2T(q,j);14(k){k(l,o)}12}q.7k=q.4l=15(){14(!1a.3M||1a.3M==="7o"||1a.3M==="7n"){i[1a.1K("3R")]=1f;14(k){k(1a.1K("3R"),o)}q.7k=q.4l=1g}};j.1p.2T(q,j)},c=15(r){14(!r||!h(r)){12}17 n=0,q,l=[],p=g.3I,k=[],m={},o=15(v){17 u=0,s,t;14(m[v]){12 k}m[v]=1f;14(p[v].4c){t=p[v].4c;1e(;s=t[u++];){14(p[s]){o(s);k.1o(s)}1b{k.1o(s)}}12 k}12 k};1e(;q=r[n++];){14(p[q]&&p[q].4c&&p[q].4c[0]){k=[];m={};l=l.44(o(q))}l.1o(q)}12 l},f=15(k){14(!k||!h(k)){12}1a.6Z=k;1a.3T=1g};f.1i={aZ:10,3l:15(){17 k=1a;1a.3T=1a.4H();14(!1a.3T){1a.aS=1f;12}1a.6v()},6v:15(){17 m=1a,k,l=1a.3T;14(1s l==="15"){l();1a.3l();12}1b{14(1s l==="2o"){14(g.3I[l]){k=g.3I[l];d(k.7x,k.1E,k.6b,15(n){m.3l()},m)}1b{14(/\\.4O|\\.1J/i.1q(l)){d(l,"","",15(n,p){p.3l()},m)}1b{1a.3l()}}}}},4H:15(){12 1a.6Z.2d()}};1a.6m=15(){17 l=1V.1i.24.1l(1n,1),k;14(1n[0]){k=1C f(c(g.7u.44(l)))}1b{k=1C f(c(l))}k.3l()};1a.6m.7L=15(l,k){14(!l||!k||!k.7x){12}g.3I[l]=k}})();',62,685,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||return||if|function||var|||this|else|node|length|for|true|null|document|prototype|nodeType|each|call|false|arguments|push|parentNode|test|while|typeof|match|toLowerCase|Koala|case|_doc|id|break|replace|undefined|new|className|type|firstChild|in|nodeName|px|css|getAttribute|div|tag|toString|filter|version|innerHTML|body|documentElement|window|indexOf|Array|name|find|object|apply|Kextend|input|createElement|style|slice|Kwdom|appendChild||table|getElementsByTagName|RegExp|create|Engine|shift|fn|select|bind|tbody|try|catch|_win|isKdoms|exec||string|ID|scrollLeft|init|isKdom|scrollTop|contains|nextSibling|error|event|childNodes|href|setAttribute|win|key|Function|getElementById|attachEvent|data|item|uFFFF|u00c0|String|removeChild|webkit|button|pageY|Object|pageX|relative|trim|insertBefore|split|KoverloadSetter|switch|getElementsByClassName|join|constructor|compareDocumentPosition|opacity||set|Kfamily|valueOf|top||||offsetParent|PSEUDO|sizcache|TAG|element|expr|Kimplement|CLASS|gecko|Platform|first|start|len|child|isfun|clone|empty|html|extend|splice|nth|trident|querySelectorAll|last|map|previousSibling|throw|isElement|toHTML|ie|isXML|nodeValue|POS|class|mods|text|presto|getAttributeNode|readyState|attrHandle|unset|sizset|order|src|value|current|CHILD|opera|odd|even|substr|leftMatch||sourceIndex|mouseover|source|concat|Sizzle||number|hasOwnProperty|getElementsByName|instanceof|toArray|requires|Kbind|client|page|unshift|doms|Selector|chrome|safari|onreadystatechange|hidden|isNumber|_object|parent|isstr|isArray|pop|KA|Browser|_each|left|Kproxy|addEventListener|removeEventListener|tr|continue|KK|superclass|NAME|_insertionTranslations|preFilter|next|matchesSelector|sibling|debug|inspect|script|_check|js|cloneNode|attr|isset|disabled|fragment|display|toElement|_original_property|hasClass|toQueryString|code|attrMap|protected|_K|NaN|isUndefined|isString|ios|interpret|getText|Date|nodeIndex|on|clientY|width|log|after|height|ATTR|console|addMethods|click|not|offsetLeft|preventDefault|isFunction|clientX|offsetTop|stopPropagation|from|querySelector|errorEle|keys|target|relatedTarget|insert|comp|Kcurry|removeClass|toObject|addClass|exp|wheelDelta|Kwrap|isHash|encodeURIComponent|which|KargumentNames|exist|inject|noConflict|Khide|Version|targetTouches|detachEvent|DOMContentLoaded|JSON|Number|Boolean|collect|evaluate|isarr|password|defineKey|defineKeys|isDoms|delete|111|scale|ready|query|rotation|keyOf|KClass|charset|touches|Methods|changedTouches|subclasses|runtime|compatMode|navigator|hone|selected|od|Qfast|lastMatch|_|mouseout|Features|td|cssText|firefox|_load|run|khtml|_getContentFromAnonymousElement|ip|Plugins|TEST|uniqueSort|parseInt|other|lt|gt|setTimeout|bottom|before|linux|mac|android|eq|filters|setFilters|tagName|radio|checkbox|sort|webos|file|only|parseFloat|unknown|none|queue|matches|air|show|hide|toUpperCase|ownerDocument|isObj|submit|lambda|KargNames|xpath|nitem|116|_keydown|Opera|reset|Type|DOMEvent|extended|defaultView|onload|tags|checked|complete|loaded|decodeURIComponent|alpha|num|currentStyle|json|core_lib|image|100|path|platform|toQueryParams|userAgent|documentMode|Prototype|findAll|detect|eachSlice|size|invoke|pluck|reject|typeOf|add|createComment|__sizzle__|getTime|innerText|activeElement|textContent|finally|removeAttribute|lastChild|HTML|sizzle|msMatchesSelector|mozMatchesSelector|webkitMatchesSelector|focus|textarea|Syntax|unrecognized|do|Kdom|_head|head|expression|selectors|has|header|selectedIndex|enabled|htmlFor|0n|textnode|whitespace|boolean|RangeError|void|TypeError|Undefined|obj|_Type|isnode|1000|Kdelay|isDate|isnum|isDom|iscollect|Null|Ksuper|propertyIsEnumerable|toLocaleString|isPrototypeOf|instanceOf|callee|collection|Kprotect|is|regexp|date|KType|mirror|isEnumerable|alias|include|CSS1Compat|thead|tfoot|stylesheet|tBodies|setStyle|getStyle|getComputedStyle|rgb|transparent|rows|default|javascript|lastIndexOf|unbind|hover|attributes|async|||rel|link|proxy|toggle|inline|prev|append|el|remove|abs|Math|enter|KEvent|Regexp|getByTagName|ipod|label|strong|em|block|img|span|cleanWhitespace|classNames|toggleClass|offsetWidth|paddingLeft|nbsp|createDocumentFragment|Knative|alert|SELECT|Kdoms|TBODY|TR|TD|clearInterval|setInterval|author|boqiu|Error|the|doc|compatible|docElement|doScroll|ClassK|TABLE|http|paddingBottom|borderTopWidth|borderBottomWidth|parentX|paddingTop|offsetHeight|paddingRight|borderLeftWidth|borderRightWidth|substring|parentY|parentWrap|gtimg|childWrap|mat1|com|||||joke|Left|Top|min|tab|reverse|106|124|down|fromCharCode|contextmenu|dblclick|keydown|Keys|altKey|alt|meta|rightClick|keyCode|srcElement|up|mouse|120|wheel|touch|Element|to|detail|mousewheel|DOMMouseScroll|pageYOffset|pageXOffset|returnValue|cancelBubble|gesture|ctrlKey|metaKey|space|419|420|end|525|925|control|esc|backspace|shiftKey|_interval|950|960|right'.split('|'),0,{}))/*  |xGv00|b731eb99b3f4d74b49f8e07e57cf4b71 */

//////////////////////////////////////////////////////////////////////////////**快捷通道**/
$(function (){
	$("#fixd").attr("style","left:"+($(".sjw-header ").offset().left-75)+"px");
	window.onresize=function (){
 		$("#fixd").attr("style","left:"+($(".sjw-header ").offset().left-75)+"px");
	}

	 $(window).scroll(function (){
  		if($(document).scrollTop()>=533){
   		$("#fixd").attr("class","fixd2");
  	}else{
  		 $("#fixd").attr("class","fixd1");
 	 }
 });

	$("#fixd a").each(function (num,items){
		 if(document.title.indexOf($(items).html())>=0){
 		 $(items).attr("class","hover");
	 }         
});
});

//////////////////////////////////////////////////////////////////////////////**导航**/
$(function(){
	$("#zn_menu").on('mouseenter','dd',function(){
		var navId=$(this).attr('role');
		if(navId){
			$(navId).show();
			$("#zn_bg").show();
			$("#zn_bg3").show();
		}
	}).on('mouseleave','dd',function(){
		var navId=$(this).attr('role');
		if(navId){
			$(navId).hide();
			$("#zn_bg").hide();
			$("#zn_bg3").hide();
		}
	})
});

////////////////////////////////////////////////////////////////////////////////**tab键**/
function showCnt(l,n){
			getObject("d"+l).style.display=""
			getObject("a"+l).onmouseout=function (){getObject("d"+l).style.display="none"}

}
function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
  if (i == Num)
  {
	
      thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}
////////////////////////////////////////////////////////////////////////////////**信息公开 鼠标经过事件**/
$(function(){
    $("div.add").hide(); // 默认隐藏所有内层元素
    $(".xxbg").hover(function() {  // 鼠标经过事件
        $(this).find(".add").toggle();  // 切换显示和隐藏
    }, function() {
        $(this).find(".add").toggle();  // 切换显示和隐藏
    });
});
////////////////////////////////////////////////////////////////////////////////**友情链接**/
$(document).ready(function(){
  $("#selectdd .zse_p").click(function(){
      $("#selectdd .zse_ul").slideDown("slow");
  });
  $("#selectdd, #selectdd .zse_ul").mouseleave(function(){
     $("#selectdd .zse_ul").hide();
  });
  
    $("#selectdd1 .zse_p").click(function(){
      $("#selectdd1 .zse_ul").slideDown("slow");
  });
  $("#selectdd1, #selectdd1 .zse_ul").mouseleave(function(){
     $("#selectdd1 .zse_ul").hide();
  })

  $("#selectdd2 .zse_p").click(function(){
      $("#selectdd2 .zse_ul").slideDown("slow");
  });
  $("#selectdd2, #selectdd2 .zse_ul").mouseleave(function(){
     $("#selectdd2 .zse_ul").hide();
  });


  $("#selectdd3 .zse_p").click(function(){
      $("#selectdd3 .zse_ul").slideDown("slow");
  });
  $("#selectdd3, #selectdd3 .zse_ul").mouseleave(function(){
     $("#selectdd3 .zse_ul").hide();
  });

  $("#selectdd4 .zse_p").click(function(){
      $("#selectdd4 .zse_ul").slideDown("slow");
  });
  $("#selectdd4, #selectdd4 .zse_ul").mouseleave(function(){
     $("#selectdd4 .zse_ul").hide();
  });
});


////////////////////////////////////////////////////////////////////////////////**图片放大**/
$(function(){
    $(".wh01").hover(function() {  
        $(this).children("a").children().animate({
			height:'+=20px',
			width:'+=30px',
		},"slow");
    }, function() {
        $(this).children("a").children().animate({
			height:'-=20px',
			width:'-=30px'
		},"slow");
    });
	 $(".wh03").hover(function() {  
        $(this).children("a").children().animate({
			height:'+=20px',
			width:'+=30px',
		},"slow");
    }, function() {
        $(this).children("a").children().animate({
			height:'-=20px',
			width:'-=30px'
		},"slow");
    });
});
