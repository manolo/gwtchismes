(function(){var $gwt_version = "1.5.3";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.google.code.p.gwtcsample.GWTCSample',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var zd='',ne=' ',wc=' must be non-negative: ',ef='&nbsp;',zc=', Column size: ',Bc=', Row size: ',qc=', Size: ',F='-',dg='...',qf='0px',Ae='100%',be='998',td=':',kb='<-A\xF1o',Dd='Animation;',eb='Ante.',nb='Ayuda',vg='A\xF1o anterior',tg='A\xF1o pr\xF3ximo',ib='A\xF1o->',mc='CSS1Compat',bg='Cambiar',Cc='Cannot create a column with a negative index: ',Dc='Cannot create a row with a negative index: ',ue='Center',pb='Cerrar',zg='Cerrar di\xE1logo',vc='Column ',xc='Column index: ',nf='DIV',kc='DOMMouseScroll',xg='Di\xE1logo de ayuda',Fd='DockPanel$TmpRow;',qb='Espere por favor ...',yf='Fecha de entrada',Bf='Fecha de salida',ke='GWTCAlert',cc='GWTCBox',xb='GWTCBox-blue',mb='GWTCBox-grey',cf='GWTCBtn',gf='GWTCBtn-c',hf='GWTCBtn-focus',bf='GWTCBtn-img',ff='GWTCBtn-l',Fe='GWTCBtn-ml',jf='GWTCBtn-r',af='GWTCBtn-text',of='GWTCGlassPanel',yc='GWTCPopupBox',sf='GWTCWait',gb='Hoy',pc='Index: ',ze='Inner',Ff='Intervalo',te='Left',rg='Mes actual',og='Mes anterior',mg='Mes pr\xF3ximo',Df='Noches',de='OK',Bd='Object;',ve='Right',Ac='Row index: ',hg='Seleccione la fecha de entrada',jg='Seleccione la fecha de salida',cb='Sigu.',Ad='String;',vb='TBODY',ub='TR',ae='Widget;',Cd='[Lcom.google.gwt.animation.client.',Ed='[Lcom.google.gwt.user.client.ui.',yd='[Ljava.lang.',cd='__widgetID',nd='absolute',rc='align',nc='auto',wb='blur',me='bottom',dd='box',he='btnCell',De='button',re='cellPadding',qe='cellSpacing',ed='center',yb='change',ab='className',zb='click',kd='clip',bd='col',tc='colSpan',ad='colgroup',xd='com.google.code.p.gwtcsample.client.GWTCSample',lc='contextmenu',Ab='dblclick',df='div',mf='down',ic='error',Bb='focus',Ee='gwt-Button',we='gwt-DecoratorPanel',Fc='gwt-HTML',gd='gwt-Image',Ec='gwt-Label',pf='gwt-PopupPanel',je='gwtc-alert-rndbutton',ce='height',wf='hidden',uf='image',ee='images/button/dialog-ok.gif',rf='images/gwtc-wait-loading.gif',hd='img',tf='imgCell',gg='key.calendar.checkin.title',ig='key.calendar.checkout.title',kg='key.calendar.help',ag='key.change',xf='key.checkin',cg='key.checkin.button',zf='key.checkout',eg='key.checkout.button',ob='key.close',yg='key.close.title',lb='key.help',wg='key.help.title',Ef='key.interval',Ag='key.next.month',lg='key.next.month.title',hb='key.next.year',sg='key.next.year.title',Cf='key.nights',db='key.prev.month',ng='key.prev.month.title',jb='key.prev.year',ug='key.prev.year.title',fb='key.today',pg='key.today.title',Cb='keydown',Db='keypress',Eb='keyup',fg='left',Fb='load',ac='losecapture',le='middle',vd='moduleStartup',bc='mousedown',dc='mousemove',ec='mouseout',fc='mouseover',gc='mouseup',jc='mousewheel',ge='msgCell',kf='none',rb='offsetHeight',sb='offsetWidth',ie='okButton',wd='onModuleLoadStart',lf='over',tb='overflow',fe='panel',Af='popupContent',oc='position',qg='px',rd='px)',qd='px, ',pd='rect(',sd='rect(0px, 0px, 0px, 0px)',ld='rect(auto, auto, auto, auto)',fd='right',uc='rowSpan',hc='scroll',id='scrollLeft',jd='scrollTop',ud='startup',Be='submit',oe='table',pe='tbody',xe='td',bb='top',se='tr',Ce='type',sc='verticalAlign',vf='visibility',md='visible',ye='width',od='zIndex';var _;function zC(a){return (this==null?null:this)===(a==null?null:a)}
function AC(){return this.$H||(this.$H=++pk)}
function xC(){}
_=xC.prototype={};_.eQ=zC;_.hC=AC;_.tM=tI;_.tI=1;function Dz(b,a){ei(b,iA(ii(b))+F+a)}
function Ez(b,a){kA(b.C(),a,true)}
function aA(b,a){ji(b,iA(ii(b))+F+a)}
function cA(b,a){if(b.t){dA(b.t,a)}b.t=a}
function dA(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function hA(){return this.t}
function iA(a){var b,c;b=a[ab]==null?null:String(a[ab]);c=b.indexOf(tD(32));if(c>=0){return b.substr(0,c-0)}return b}
function jA(a){this.C().style[ce]=a}
function kA(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new BC()}j=pD(j);if(j.length==0){throw new hC()}i=c[ab]==null?null:String(c[ab]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=ne}c[ab]=i+j}}else{if(e!=-1){b=pD(i.substr(0,e-0));d=pD(nD(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+ne+d}c[ab]=h}}}
function lA(a){this.C()[ab]=a}
function nA(a){this.C().style[ye]=a}
function Cz(){}
_=Cz.prototype=new xC();_.C=hA;_.pb=jA;_.qb=lA;_.tb=nA;_.tI=3;_.t=null;function aB(a){if(a.q){throw new kC()}a.q=true;a.C().__listener=a;a.x();a.hb()}
function bB(a){if(!a.q){throw new kC()}try{a.ib()}finally{a.y();a.C().__listener=null;a.q=false}}
function cB(a){if(a.s){a.s.nb(a)}else if(a.s){throw new kC()}}
function dB(b,a){if(b.q){b.t.__listener=null}cA(b,a);if(b.q){b.t.__listener=b}}
function eB(c,b){var a;a=c.s;if(!b){if(!!a&&a.q){c.gb()}c.s=null}else{if(a){throw new kC()}c.s=b;if(b.q){aB(c)}}}
function fB(){}
function gB(){}
function hB(a){}
function iB(){bB(this)}
function jB(){}
function kB(){}
function oA(){}
_=oA.prototype=new Cz();_.x=fB;_.y=gB;_.eb=hB;_.gb=iB;_.hb=jB;_.ib=kB;_.tI=4;_.q=false;_.r=null;_.s=null;function rx(b){var a;a=b.cb();while(a.ab()){a.db();a.lb()}}
function tx(){var a,b;for(b=this.cb();b.ab();){a=im(b.db(),10);aB(a)}}
function ux(){var a,b;for(b=this.cb();b.ab();){a=im(b.db(),10);a.gb()}}
function vx(){}
function wx(){}
function qx(){}
_=qx.prototype=new oA();_.x=tx;_.y=ux;_.hb=vx;_.ib=wx;_.tI=5;function nz(a,b){if(a.p){throw new kC()}a.sb(b)}
function pz(a,b){if(b==a.p){return}if(b){cB(b)}if(a.p){a.nb(a.p)}a.p=b;if(b){a.B().appendChild(a.p.C());eB(b,a)}}
function qz(){return this.t}
function rz(){return iz(new gz(),this)}
function sz(a){if(this.p!=a){return false}eB(a,null);this.B().removeChild(a.C());this.p=null;return true}
function tz(a){pz(this,a)}
function fz(){}
_=fz.prototype=new qx();_.B=qz;_.cb=rz;_.nb=sz;_.sb=tz;_.tI=6;_.p=null;function ky(a){a.t=$doc.createElement(df);a.h=(Ax(),Bx);a.m=cy(new Dx(),a);a.t.appendChild($doc.createElement(df));oy(a,0,0);a.t[ab]=pf;Ck(a.t)[ab]=Af;return a}
function my(a){if(!a.n){return}a.n=false;iy(a.m,false)}
function ny(a){var b;b=a.p;if(b){if(a.i!=null){b.pb(a.i)}if(a.j!=null){b.tb(a.j)}}}
function oy(c,b,d){var a;if(b<0){b=0}if(d<0){d=0}c.l=b;c.o=d;b-=0;d-=0;a=c.t;a.style[fg]=b+qg;a.style[bb]=d+qg}
function py(a,b){pz(a,b);ny(a)}
function qy(a,b){a.j=b;ny(a);if(b.length==0){a.j=null}}
function ry(){return Ck(this.t)}
function sy(){bB(this)}
function ty(a){this.i=a;ny(this);if(a.length==0){this.i=null}}
function uy(a){pz(this,a);ny(this)}
function vy(a){qy(this,a)}
function xx(){}
_=xx.prototype=new fz();_.B=ry;_.gb=sy;_.pb=ty;_.sb=uy;_.tb=vy;_.tI=7;_.i=null;_.j=null;_.k=false;_.l=-1;_.n=false;_.o=-1;function Ei(c,b,a){var d;d=rh(b);if(c.g)nh(c.g,d,a);else os(c.f,d,a)}
function aj(a){my(a);if(a.e)yi(a.e)}
function bj(b,a){rx(b);if((a&4)==4){b.g=mh(new gh(),mb)}else if((a&8)==8){b.g=mh(new gh(),xb);nz(b,b.g)}else if((a&2)==2){b.g=mh(new gh(),cc);nz(b,b.g)}else{b.f=ns(new ds());nz(b,b.f)}b.k=(a&32)==32;if((a&16)!=16){b.e=wi(new vi());if((a&64)!=64){qt(b.e,Bi(new Ai(),b))}}cj(b,999);qy(b,nc);b.t[ab]=yc;if(b.g)Ez(b,iA(b.t)+F+dd)}
function cj(a,b){a.t.style[od]=zd+b;if(a.e){a.e.t.style[od]=be}}
function dj(){aj(this)}
function zi(){}
_=zi.prototype=new xx();_.bb=dj;_.tI=8;_.e=null;_.f=null;_.g=null;function bh(b,a){ky(b);eh(b,64);eh(b,a);return b}
function eh(b,a){bj(b,a);b.a=ct(new Es());b.d=yv(new At());b.b=bi(new uh(),de);mi(b.b,vw(new pw(),ee));if((a&1)==1)b.c=true;b.a.C()[ab]=fe;Dt(b.a.b,0,0,ge);uv(b.a,0,0,b.d);Dt(b.a.b,1,0,he);uv(b.a,1,0,b.b);ei(b.b,ie);ei(b.b,je);dH(b.b.a,Dg(new Cg(),b));ri(b.b,!b.c);b.t[ab]=ke;if((a&4)==4||(a&8)==8||(a&2)==2){Ez(b,iA(b.t)+F+dd)}Ei(b,b.a,(ps(),As))}
function fh(){aj(this)}
function Bg(){}
_=Bg.prototype=new zi();_.bb=fh;_.tI=9;_.a=null;_.b=null;_.c=false;_.d=null;function Dg(b,a){b.a=a;return b}
function Fg(a){aj(this.a)}
function Cg(){}
_=Cg.prototype=new xC();_.fb=Fg;_.tI=10;_.a=null;function Er(){Er=tI;Fr=Fl(Dm,0,1,[bb,le,me])}
function Dr(E,C,z){var A,B,D,y;Er();E.t=$doc.createElement(oe);D=E.t;E.e=$doc.createElement(pe);D.appendChild(E.e);D[qe]=0;D[re]=0;for(A=0;A<C.length;++A){B=(y=$doc.createElement(se),(y[ab]=C[A],undefined),y.appendChild(as(C[A]+te)),y.appendChild(as(C[A]+ue)),y.appendChild(as(C[A]+ve)),y);E.e.appendChild(B);if(A==z){E.d=Ck(bq(B,1))}}E.t[ab]=we;return E}
function as(b){var a,c;c=$doc.createElement(xe);a=$doc.createElement(df);c.appendChild(a);c[ab]=b;a[ab]=b+ze;return c}
function cs(){return this.d}
function Cr(){}
_=Cr.prototype=new fz();_.B=cs;_.tI=11;_.d=null;_.e=null;var Fr;function ph(){ph=tI;Er()}
function mh(b,a){ph();Dr(b,Fr,1);b.c=yv(new At());b.b=yv(new At());b.a=ns(new ds());nz(b,b.a);b.a.C()[ab]=fe;b.t[ab]=cc;os(b.a,b.c,(ps(),As));os(b.a,b.b,As);if(a!=null&&a.length>0&&a!=cc)kA(b.t,a,true);return b}
function nh(c,b,a){os(c.a,rh(b),a)}
function oh(a,c){var b;b=bq(bq(bq(a.t,0),0),1);if(jD(c,nc)){b.style[ye]=nc}else{b.style[ye]=Ae}}
function qh(){return sA(new qA(),this.a.f)}
function rh(d){var a;ph();var b,c;if(!d){c=null}else if(d){c=d}else{b=vm(d);if(null.wb().wb()||null.wb().wb()){c=(a=zv(new At(),b),aB(a),Fy(),BH(ez,a),a)}else{c=ih(new hh(),b)}}return c}
function sh(a){return rs(this.a,a)}
function th(a){this.t.style[ye]=a;oh(this,a)}
function gh(){}
_=gh.prototype=new Cr();_.cb=qh;_.nb=sh;_.tb=th;_.tI=12;function ih(b,a){b.t=a;return b}
function hh(){}
_=hh.prototype=new fz();_.tI=13;function zt(a){rq(a)==1}
function xt(){}
_=xt.prototype=new oA();_.eb=zt;_.tI=14;function ir(b,a){b.t=a;oi(b,0);return b}
function hr(){}
_=hr.prototype=new xt();_.tI=15;function mr(b){if(b.type==Be){try{b.setAttribute(Ce,De)}catch(a){}}}
function gr(){}
_=gr.prototype=new hr();_.tI=16;function bi(b,a){ir(b,$doc.createElement(De));mr(ii(b));ni(b,Ee);b.f=hx(new gx());b.a=rr(new qr());b.g=wh(new vh(),b);b.d=zh(new yh(),b);b.e=Ch(new Bh(),b);pi(b,1);li(b,a);return b}
function ei(b,a){kA(ii(b),a,true);if(b.b)Ez(b.b,a)}
function fi(a){if(a.i==1){lv(a.b,0,a.i);au(a.b.b,0,1).className=Fe;a.i=2}}
function gi(a){tr(a.a,a)}
function ii(a){if(!a.c)a.c=a.t;return a.c}
function ji(b,a){kA(ii(b),a,false);if(b.b){kA(b.b.t,a,false)}}
function ki(c,a){var b;if(c.c){b=Ek(c.c);if(b){b.removeChild(c.c);b.appendChild(a)}}c.c=a}
function li(b,a){if(!b.b){ii(b).innerHTML=a||zd}else{rx(b.h);pz(b.h,Av(new At(),a));b.h.p.qb(af)}}
function mi(b,a){a.t[ab]=bf;fi(b);uv(b.b,0,1,a)}
function ni(b,a){ii(b)[ab]=a;if(b.b)Ez(b.b,a)}
function oi(b,a){if(!b.b){ii(b).tabIndex=a}else{b.h.t.tabIndex=a}}
function pi(b,c){var a;a=!b.b?ii(b).innerHTML:au(b.b.b,0,b.i).innerHTML;b.c=null;if(b.b){a=null;fv(b.b)}b.b=null;if(c==0){ni(b,cf);ei(b,Ee)}else{b.b=ct(new Es());b.b.C()[ab]=cf;b.b.d[qe]=0;b.b.d[re]=0;tv(b.b,0,0,ef);cu(b.b.b,0,0,ff);cu(b.b.b,0,1,gf);b.h=pt(new ot());rt(b.h,b.d);st(b.h,b.e);b.h.C()[ab]=hf;uv(b.b,0,1,b.h);tv(b.b,0,2,ef);cu(b.b.b,0,2,jf);ki(b,b.b.t);eq(b.h.t,7164)}dH(b.f,b.g);li(b,a);eq(ii(b),1021|(ii(b).__eventBits||0))}
function ri(a,b){ii(a).style.display=b?zd:kf;if(a.b){a.b.t.style.display=b?zd:kf}}
function si(){return ii(this)}
function ti(a){var b;b=rq(a);lx(this.f,this,a);if(b==1){ji(this,iA(ii(this))+F+lf);tr(this.a,this);ji(this,iA(ii(this))+F+mf)}else if(this.b){ut(this.h,a)}else{rq(a)==1}}
function ui(a){ni(this,a)}
function uh(){}
_=uh.prototype=new gr();_.C=si;_.eb=ti;_.qb=ui;_.tI=17;_.b=null;_.c=null;_.h=null;_.i=1;function wh(b,a){b.a=a;return b}
function vh(){}
_=vh.prototype=new xC();_.tI=18;_.a=null;function zh(b,a){b.a=a;return b}
function yh(){}
_=yh.prototype=new xC();_.tI=19;_.a=null;function Ch(b,a){b.a=a;return b}
function Eh(b,a){if(a==13)gi(b.a)}
function Bh(){}
_=Bh.prototype=new xC();_.tI=20;_.a=null;function pt(b){var a;b.t=(a=$doc.createElement(nf),a.tabIndex=0,a);wo(b.t,138237|(b.t.__eventBits||0));return b}
function qt(b,a){if(!b.a){b.a=rr(new qr())}dH(b.a,a)}
function rt(b,a){if(!b.b){b.b=it(new ht())}dH(b.b,a)}
function st(b,a){if(!b.c){b.c=Aw(new zw())}dH(b.c,a)}
function ut(b,a){switch(rq(a)){case 1:if(b.a){tr(b.a,b)}break;case 4096:case 2048:if(b.b){kt(b.b,a)}break;case 128:case 512:case 256:if(b.c){Fw(b.c,a)}}}
function wt(a){ut(this,a)}
function ot(){}
_=ot.prototype=new fz();_.eb=wt;_.tI=21;_.a=null;_.b=null;_.c=null;function wi(d){pt(d);kA(d.t,of,true);d.t.style[od]=be;return d}
function yi(a){a.C().style[ye]=qf;a.C().style[ce]=qf;a.t.style.display=kf}
function vi(){}
_=vi.prototype=new ot();_.tI=22;function Bi(b,a){b.a=a;return b}
function Di(a){this.a.bb()}
function Ai(){}
_=Ai.prototype=new xC();_.fb=Di;_.tI=23;_.a=null;function gj(a){ky(a);bj(a,64);a.c=cx(new bx(),zd);a.a=vw(new pw(),rf);a.b=ct(new Es());if(cz(sf)){cz(sf).t.style.display=kf}a.t[ab]=sf;a.b.C()[ab]=fe;Dt(a.b.b,0,0,ge);uv(a.b,0,0,a.c);Dt(a.b.b,1,0,tf);uv(a.b,1,0,a.a);kA(a.a.C(),uf,true);py(a,a.b);return a}
function jj(){aj(this);this.t.style[vf]=wf}
function ej(){}
_=ej.prototype=new zi();_.bb=jj;_.tI=24;function mj(a){a.a=wH(new vH());a.b=wH(new vH());a.c=wH(new vH());bh(new Bg(),64);bh(new Bg(),8);a.d=gj(new ej());kF(a.a,xf,yf);kF(a.a,zf,Bf);kF(a.a,Cf,Df);kF(a.a,Ef,Ff);kF(a.a,ag,bg);kF(a.a,cg,dg);kF(a.a,eg,dg);kF(a.a,gg,hg);kF(a.a,ig,jg);kF(a.a,kg,zd);kF(a.c,lg,mg);kF(a.c,ng,og);kF(a.c,pg,rg);kF(a.c,sg,tg);kF(a.c,ug,vg);kF(a.c,wg,xg);kF(a.c,yg,zg);kF(a.b,Ag,cb);kF(a.b,db,eb);kF(a.b,fb,gb);kF(a.b,hb,ib);kF(a.b,jb,kb);kF(a.b,lb,nb);kF(a.b,ob,pb);zG(a.b,a.c);al(a.d.c.t,qb);return a}
function oj(){return}
function kj(){}
_=kj.prototype=new xC();_.tI=0;function vj(a){if(!a.f){return}iH(Bj,a);xj(a);a.h=false;a.f=false}
function xj(a){if(a.h){ey(a)}}
function yj(c,a,b){vj(c);c.f=true;c.e=a;c.g=b;if(zj(c,(new Date()).getTime())){return}if(!Bj){Bj=bH(new aH());Aj=(sj(),dp(),new qj())}dH(Bj,c);if(Bj.b==1){fp(Aj,25)}}
function zj(d,a){var b,c;b=a>=d.g+d.e;if(d.h&&!b){c=(a-d.g)/d.e;hy(d,(1+Math.cos(3.141592653589793+c*3.141592653589793))/2);return false}if(!d.h&&a>=d.g){d.h=true;d.b=parseInt(d.a.t[rb])||0;d.c=parseInt(d.a.t[sb])||0;d.a.t.style[tb]=wf;hy(d,(1+Math.cos(3.141592653589793))/2)}if(b){ey(d);d.h=false;d.f=false;return true}return false}
function Cj(){var a,b,c,d,e,f;e=El(zm,81,20,Bj.b,0);e=im(kH(Bj,e),2);f=(new Date()).getTime();for(b=e,c=0,d=b.length;c<d;++c){a=b[c];if(a.f&&zj(a,f)){iH(Bj,a)}}if(Bj.b>0){fp(Aj,25)}}
function pj(){}
_=pj.prototype=new xC();_.tI=25;_.e=-1;_.f=false;_.g=-1;_.h=false;var Aj=null,Bj=null;function dp(){dp=tI;kp=bH(new aH());op(new Eo())}
function cp(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}iH(kp,a)}
function ep(a){if(!a.b){iH(kp,a)}a.ob()}
function fp(b,a){if(a<=0){throw new hC()}cp(b);b.b=false;b.c=ip(b,a);dH(kp,b)}
function ip(b,a){return $wnd.setTimeout(function(){b.A()},a)}
function jp(){ep(this)}
function Do(){}
_=Do.prototype=new xC();_.A=jp;_.tI=26;_.b=false;_.c=0;var kp;function sj(){sj=tI;dp()}
function tj(){Cj()}
function qj(){}
_=qj.prototype=new Do();_.ob=tj;_.tI=27;function hk(b,a){return b.tM==tI||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function jk(a){return a.tM==tI||a.tI==2?a.hC():a.$H||(a.$H=++pk)}
var pk=0;function Ck(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function Ek(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function al(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function tk(b){var c=0;var a=b.parentNode;while(a&&a.offsetParent){if(a.tagName!=ub&&a.tagName!=vb){c-=a.scrollLeft}a=a.parentNode}while(b){c+=b.offsetLeft;b=b.offsetParent}return c}
function uk(b){var d=0;var a=b.parentNode;while(a&&a.offsetParent){if(a.tagName!=ub&&a.tagName!=vb){d-=a.scrollTop}a=a.parentNode}while(b){d+=b.offsetTop;b=b.offsetParent}return d}
function Cl(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function El(a,f,c,b,e){var d;d=Cl(e,b);Fl(a,f,c,d);return d}
function Fl(b,d,c,a){if(!am){am=new wl()}dm(a,am);a.aC=b;a.tI=d;a.qI=c;return a}
function bm(a,b,c){if(c!=null){if(a.qI>0&&!gm(c.tI,a.qI)){throw new uB()}if(a.qI<0&&(c.tM==tI||c.tI==2)){throw new uB()}}return a[b]=c}
function dm(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function wl(){}
_=wl.prototype=new xC();_.tI=0;_.aC=null;_.length=0;_.qI=0;var am=null;function hm(b,a){return b&&!!wm[b][a]}
function gm(b,a){return b&&wm[b][a]}
function im(b,a){if(b!=null&&!gm(b.tI,a)){throw new yB()}return b}
function vm(a){if(a!=null){throw new yB()}return a}
var wm=[{},{},{1:1,22:1,23:1,24:1},{14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{8:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{12:1},{9:1},{11:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{8:1},{7:1,10:1,14:1},{20:1},{5:1},{5:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{5:1},{5:1},{6:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1},{17:1,22:1},{17:1,22:1},{7:1,10:1,14:1},{21:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1,22:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1,22:1},{17:1,22:1},{22:1,24:1},{22:1,24:1},{20:1},{4:1},{7:1,10:1,13:1,14:1},{6:1},{7:1,10:1,13:1,14:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{23:1},{23:1},{3:1,22:1},{19:1},{19:1},{16:1},{16:1},{16:1},{19:1},{18:1,22:1},{19:1,22:1},{16:1},{3:1,22:1},{2:1},{15:1}];function vD(){}
_=vD.prototype=new xC();_.tI=28;function fC(){}
_=fC.prototype=new vD();_.tI=29;function BC(){}
_=BC.prototype=new fC();_.tI=30;function nn(a){return a}
function mn(){}
_=mn.prototype=new BC();_.tI=32;function go(a){a.a=rn(new qn(),a);a.b=bH(new aH());a.d=vn(new un(),a);a.f=An(new yn(),a);return a}
function io(b){var a;a=Cn(b.f);Fn(b.f);if(a!=null&&hm(a.tI,4)){nn(new mn(),im(a,4))}else{}b.c=false;ko(b)}
function jo(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;fp(d.a,10000);while(Dn(d.f)){b=En(d.f);try{if(b==null){return}if(b!=null&&hm(b.tI,4)){a=im(b,4);yj(a.a,200,(new Date()).getTime())}else{}}finally{e=d.f.b==-1;if(e){return}Fn(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){cp(d.a);d.c=false;ko(d)}}}
function ko(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;fp(a.d,1)}}
function mo(b,a){dH(b.b,a);ko(b)}
function pn(){}
_=pn.prototype=new xC();_.tI=0;_.c=false;_.e=false;function sn(){sn=tI;dp()}
function rn(b,a){sn();b.a=a;return b}
function tn(){if(!this.a.c){return}io(this.a)}
function qn(){}
_=qn.prototype=new Do();_.ob=tn;_.tI=33;_.a=null;function wn(){wn=tI;dp()}
function vn(b,a){wn();b.a=a;return b}
function xn(){this.a.e=false;jo(this.a,(new Date()).getTime())}
function un(){}
_=un.prototype=new Do();_.ob=xn;_.tI=34;_.a=null;function An(b,a){b.d=a;return b}
function Cn(a){return fH(a.d.b,a.b)}
function Dn(a){return a.c<a.a}
function En(b){var a;b.b=b.c;a=fH(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function Fn(a){hH(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function bo(){return this.c<this.a}
function co(){return En(this)}
function eo(){Fn(this)}
function yn(){}
_=yn.prototype=new xC();_.ab=bo;_.db=co;_.lb=eo;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function ro(b,a,c){var d;if(a==uo){if(rq(b)==8192){uo=null}}d=qo;qo=b;try{c.eb(b)}finally{qo=d}}
function wo(a,b){tq();Bp(a,b)}
var qo=null,uo=null;function yo(){yo=tI;Ao=go(new pn())}
function zo(a){yo();if(!a){throw new uC()}mo(Ao,a)}
var Ao;function ap(){while((dp(),kp).b>0){cp(im(fH(kp,0),5))}}
function bp(){return null}
function Eo(){}
_=Eo.prototype=new xC();_.jb=ap;_.kb=bp;_.tI=35;function op(a){up();if(!pp){pp=bH(new aH())}dH(pp,a)}
function qp(){var a,b;if(pp){for(b=tF(new rF(),pp);b.a<b.c.ub();){a=im(wF(b),6);a.jb()}}}
function rp(){var a,b,c,d;d=null;if(pp){for(b=tF(new rF(),pp);b.a<b.c.ub();){a=im(wF(b),6);c=a.kb();d=c}}return d}
function tp(){__gwt_initHandlers(function(){},function(){return rp()},function(){qp()})}
function up(){if(!sp){tp();sp=true}}
var pp=null,sp=false;function rq(a){switch(a.type){case wb:return 4096;case yb:return 1024;case zb:return 1;case Ab:return 2;case Bb:return 2048;case Cb:return 128;case Db:return 256;case Eb:return 512;case Fb:return 32768;case ac:return 8192;case bc:return 4;case dc:return 64;case ec:return 32;case fc:return 16;case gc:return 8;case hc:return 16384;case ic:return 65536;case jc:return 131072;case kc:return 131072;case lc:return 262144;}}
function tq(){if(!vq){cq();vq=true}}
function wq(a){return a!=null&&hm(a.tI,7)&&!(a!=null&&(a.tM!=tI&&a.tI!=2))}
var vq=false;function Ep(a){if(a.type==fc)return a.relatedTarget;if(a.type==ec)return a.target;return null}
function Fp(a){if(a.type==fc)return a.target;if(a.type==ec)return a.relatedTarget;return null}
function bq(c,d){var b=0,a=c.firstChild;while(a){var e=a.nextSibling;if(a.nodeType==1){if(d==b)return a;++b}a=e}return null}
function aq(c){var b=0,a=c.firstChild;while(a){if(a.nodeType==1)++b;a=a.nextSibling}return b}
function cq(){hq=function(b){if(gq(b)){var a=fq;if(a&&a.__listener){if(wq(a.__listener)){ro(b,a,a.__listener);b.stopPropagation()}}}};gq=function(a){return true};iq=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(wq(c)){ro(b,a,c)}}};$wnd.addEventListener(zb,hq,true);$wnd.addEventListener(Ab,hq,true);$wnd.addEventListener(bc,hq,true);$wnd.addEventListener(gc,hq,true);$wnd.addEventListener(dc,hq,true);$wnd.addEventListener(fc,hq,true);$wnd.addEventListener(ec,hq,true);$wnd.addEventListener(jc,hq,true);$wnd.addEventListener(Cb,gq,true);$wnd.addEventListener(Eb,gq,true);$wnd.addEventListener(Db,gq,true)}
function dq(e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break}++c}b=b.nextSibling}e.insertBefore(g,a)}
function eq(b,a){tq();Bp(b,a)}
var fq=null,gq=null,hq=null,iq=null;function Bp(b,a){b.__eventBits=a;b.onclick=a&1?iq:null;b.ondblclick=a&2?iq:null;b.onmousedown=a&4?iq:null;b.onmouseup=a&8?iq:null;b.onmouseover=a&16?iq:null;b.onmouseout=a&32?iq:null;b.onmousemove=a&64?iq:null;b.onkeydown=a&128?iq:null;b.onkeypress=a&256?iq:null;b.onkeyup=a&512?iq:null;b.onchange=a&1024?iq:null;b.onfocus=a&2048?iq:null;b.onblur=a&4096?iq:null;b.onlosecapture=a&8192?iq:null;b.onscroll=a&16384?iq:null;b.onload=a&32768?iq:null;b.onerror=a&65536?iq:null;b.onmousewheel=a&131072?iq:null;b.oncontextmenu=a&262144?iq:null}
function zq(){zq=tI;Bq=Aq((zq(),new xq()))}
function Aq(){return $doc.compatMode==mc?$doc.documentElement:$doc.body}
function xq(){}
_=xq.prototype=new xC();_.tI=0;var Bq;function xr(c,a,b){cB(a);zA(c.f,a);b.appendChild(a.t);eB(a,c)}
function zr(b,c){var a;if(c.s!=b){return false}eB(c,null);a=c.C();Ek(a).removeChild(a);EA(b.f,c);return true}
function Ar(){return sA(new qA(),this.f)}
function Br(a){return zr(this,a)}
function vr(){}
_=vr.prototype=new qx();_.cb=Ar;_.nb=Br;_.tI=36;function br(a,b){xr(a,b,a.t)}
function dr(b,c){var a;a=zr(b,c);if(a){er(c.C())}return a}
function er(a){a.style[fg]=zd;a.style[bb]=zd;a.style[oc]=zd}
function fr(a){return dr(this,a)}
function ar(){}
_=ar.prototype=new vr();_.nb=fr;_.tI=37;function nr(){}
_=nr.prototype=new vr();_.tI=38;_.d=null;_.e=null;function BD(a,b){var c;while(a.ab()){c=a.db();if(b==null?c==null:hk(b,c)){return a}}return null}
function DD(a){throw new xD()}
function ED(b){var a;a=BD(this.cb(),b);return !!a}
function AD(){}
_=AD.prototype=new xC();_.v=DD;_.w=ED;_.tI=0;function DF(a){this.u(this.ub(),a);return true}
function CF(b,a){throw new xD()}
function EF(a,b){if(a<0||a>=b){bG(a,b)}}
function FF(e){var a,b,c,d,f;if((e==null?null:e)===(this==null?null:this)){return true}if(!(e!=null&&hm(e.tI,17))){return false}f=im(e,17);if(this.ub()!=f.ub()){return false}c=tF(new rF(),this);d=f.cb();while(c.a<c.c.ub()){a=wF(c);b=wF(d);if(!(a==null?b==null:hk(a,b))){return false}}return true}
function aG(){var a,b,c;b=1;a=tF(new rF(),this);while(a.a<a.c.ub()){c=wF(a);b=31*b+(c==null?0:jk(c));b=~~b}return b}
function bG(a,b){throw oC(new nC(),pc+a+qc+b)}
function cG(){return tF(new rF(),this)}
function dG(a){throw new xD()}
function qF(){}
_=qF.prototype=new AD();_.v=DF;_.u=CF;_.eQ=FF;_.hC=aG;_.cb=cG;_.mb=dG;_.tI=39;function bH(a){a.a=El(Cm,0,0,0,0);a.b=0;return a}
function dH(b,a){bm(b.a,b.b++,a);return true}
function cH(c,a,b){if(a<0||a>c.b){bG(a,c.b)}c.a.splice(a,0,b);++c.b}
function fH(b,a){EF(a,b.b);return b.a[a]}
function gH(c,b,a){for(;a<c.b;++a){if(sI(b,c.a[a])){return a}}return -1}
function hH(c,a){var b;b=(EF(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function iH(f,e){var a;a=gH(f,e,0);if(a==-1){return false}hH(f,a);return true}
function jH(d,a,b){var c;c=(EF(a,d.b),d.a[a]);bm(d.a,a,b);return c}
function kH(e,d){var c,a,b;if(d.length<e.b){d=(a=d,b=Cl(0,e.b),Fl(a.aC,a.tI,a.qI,b),b)}for(c=0;c<e.b;++c){bm(d,c,e.a[c])}if(d.length>e.b){bm(d,e.b,null)}return d}
function mH(a){return bm(this.a,this.b++,a),true}
function lH(a,b){cH(this,a,b)}
function nH(a){return gH(this,a,0)!=-1}
function oH(a){return EF(a,this.b),this.a[a]}
function pH(a){return hH(this,a)}
function qH(){return this.b}
function aH(){}
_=aH.prototype=new qF();_.v=mH;_.u=lH;_.w=nH;_.F=oH;_.mb=pH;_.ub=qH;_.tI=40;_.a=null;_.b=0;function rr(a){a.a=El(Cm,0,0,0,0);a.b=0;return a}
function tr(d,c){var a,b;for(b=tF(new rF(),d);b.a<b.c.ub();){a=im(wF(b),8);a.fb(c)}}
function qr(){}
_=qr.prototype=new aH();_.tI=41;function ps(){ps=tI;ws=new es();zs=new es();ys=new es();xs=new es();As=new es();Bs=new es();Cs=new es()}
function ns(a){ps();a.f=yA(new pA(),a);a.e=$doc.createElement(oe);a.d=$doc.createElement(pe);a.e.appendChild(a.d);a.t=a.e;a.b=(ew(),fw);a.c=(lw(),mw);a.e[qe]=0;a.e[re]=0;return a}
function os(c,d,a){var b;if(a==ws){if(d==c.a){return}else if(c.a){throw new hC()}}cB(d);zA(c.f,d);if(a==ws){c.a=d}b=is(new gs(),a);d.r=b;ss(d,c.b);ts(d,c.c);qs(c);eB(d,c)}
function qs(q){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;a=q.d;while(aq(a)>0){a.removeChild(bq(a,0))}m=1;d=1;for(g=sA(new qA(),q.f);g.a<g.b.c-1;){c=uA(g);e=c.r.a;if(e==As||e==Bs){++m}else if(e==xs||e==Cs||e==zs||e==ys){++d}}n=El(Am,0,21,m,0);for(f=0;f<m;++f){n[f]=new ks();n[f].b=$doc.createElement(se);a.appendChild(n[f].b)}i=0;j=d-1;k=0;o=m-1;b=null;for(g=sA(new qA(),q.f);g.a<g.b.c-1;){c=uA(g);h=c.r;p=$doc.createElement(xe);h.c=p;h.c[rc]=h.b;h.c.style[sc]=h.d;h.c[ye]=zd;h.c[ce]=zd;if(h.a==As){dq(n[k].b,p,n[k].a);p.appendChild(c.C());p[tc]=j-i+1;++k}else if(h.a==Bs){dq(n[o].b,p,n[o].a);p.appendChild(c.C());p[tc]=j-i+1;--o}else if(h.a==ws){b=p}else if(us(h.a)){l=n[k];dq(l.b,p,l.a++);p.appendChild(c.C());p[uc]=o-k+1;++i}else if(vs(h.a)){l=n[k];dq(l.b,p,l.a);p.appendChild(c.C());p[uc]=o-k+1;--j}}if(q.a){l=n[k];dq(l.b,b,l.a);b.appendChild(q.a.C())}}
function rs(b,c){var a;a=zr(b,c);if(a){if(c==b.a){b.a=null}qs(b)}return a}
function ss(c,a){var b;b=c.r;b.b=a.a;if(b.c){b.c[rc]=a.a}}
function ts(c,a){var b;b=c.r;b.d=a.a;if(b.c){b.c.style[sc]=a.a}}
function us(a){if(a==zs){return true}return a==Cs}
function vs(a){if(a==ys){return true}return a==xs}
function Ds(a){return rs(this,a)}
function ds(){}
_=ds.prototype=new nr();_.nb=Ds;_.tI=42;_.a=null;var ws,xs,ys,zs,As,Bs,Cs;function es(){}
_=es.prototype=new xC();_.tI=0;function is(b,a){b.b=(ew(),fw).a;b.d=(lw(),mw).a;b.a=a;return b}
function gs(){}
_=gs.prototype=new xC();_.tI=0;_.a=null;_.c=null;function ks(){}
_=ks.prototype=new xC();_.tI=43;_.a=0;_.b=null;function cv(d,c,b){var a;dv(d,c);if(b<0){throw oC(new nC(),vc+b+wc+b)}a=(dv(d,c),d.a.rows[c].cells.length);if(a<=b){throw oC(new nC(),xc+b+zc+(dv(d,c),d.a.rows[c].cells.length))}}
function dv(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw oC(new nC(),Ac+a+Bc+b)}}
function fv(d){var a,b,c;for(c=0;c<d.a.rows.length;++c){for(b=0;b<(dv(d,c),d.a.rows[c].cells.length);++b){a=kv(d,c,b);if(a){ov(d,a)}}}}
function kv(e,d,b){var a,c;c=e.b.a.a.rows[d].cells[b];a=Ck(c);if(!a){return null}else{return zu(e.e,a)}}
function lv(d,b,a){var c,e;e=d.a.rows[b];c=$doc.createElement(xe);dq(e,c,a)}
function mv(b,a){var c;if(a!=b.a.rows.length){dv(b,a)}c=$doc.createElement(se);dq(b.a,c,a);return a}
function nv(d,c,a){var b,e;b=Ck(c);e=null;if(b){e=zu(d.e,b)}if(e){ov(d,e);return true}else{if(a){c.innerHTML=zd}return false}}
function ov(b,c){var a;if(c.s!=b){return false}eB(c,null);a=c.C();Ek(a).removeChild(a);Cu(b.e,a);return true}
function sv(b,a){b.c=a;gu(b.c)}
function tv(f,d,a,c){var e,b;et(f,d,a);e=(b=f.b.a.a.rows[d].cells[a],nv(f,b,c==null),b);if(c!=null){e.innerHTML=c||zd}}
function uv(e,c,a,f){var d,b;et(e,c,a);if(f){cB(f);d=(b=e.b.a.a.rows[c].cells[a],nv(e,b,true),b);Au(e.e,f);d.appendChild(f.C());eB(f,e)}}
function vv(){return nu(new lu(),this.e)}
function wv(a){rq(a)}
function xv(a){return ov(this,a)}
function Bt(){}
_=Bt.prototype=new qx();_.cb=vv;_.eb=wv;_.nb=xv;_.tI=44;_.a=null;_.b=null;_.c=null;_.d=null;function ct(a){a.e=xu(new ku());a.d=$doc.createElement(oe);a.a=$doc.createElement(pe);a.d.appendChild(a.a);a.t=a.d;a.b=at(new Fs(),a);sv(a,eu(new du(),a));return a}
function et(e,d,b){var a,c;ft(e,d);if(b<0){throw oC(new nC(),Cc+b)}a=(dv(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){gt(e.a,d,c)}}
function ft(d,b){var a,c;if(b<0){throw oC(new nC(),Dc+b)}c=d.a.rows.length;for(a=c;a<=b;++a){mv(d,a)}}
function gt(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(xe);e.appendChild(a)}}
function Es(){}
_=Es.prototype=new Bt();_.tI=45;function Dt(e,b,a,c){var d;et(e.a,b,a);d=e.a.a.rows[b].cells[a];kA(d,c,true)}
function au(c,b,a){cv(c.a,b,a);return c.a.a.rows[b].cells[a]}
function cu(d,b,a,c){et(d.a,b,a);d.a.a.rows[b].cells[a][ab]=c}
function Ct(){}
_=Ct.prototype=new xC();_.tI=0;_.a=null;function at(b,a){b.a=a;return b}
function Fs(){}
_=Fs.prototype=new Ct();_.tI=0;function it(a){a.a=El(Cm,0,0,0,0);a.b=0;return a}
function lt(c){var a,b;for(b=tF(new rF(),c);b.a<b.c.ub();){a=im(wF(b),9);Dz(a.a,Bb)}}
function kt(b,a){switch(rq(a)){case 2048:lt(b);break;case 4096:mt(b);}}
function mt(c){var a,b;for(b=tF(new rF(),c);b.a<b.c.ub();){a=im(wF(b),9);aA(a.a,Bb)}}
function ht(){}
_=ht.prototype=new aH();_.tI=46;function cx(b,a){b.t=$doc.createElement(df);b.t[ab]=Ec;al(b.t,a);return b}
function fx(a){rq(a)}
function bx(){}
_=bx.prototype=new oA();_.eb=fx;_.tI=47;function yv(a){a.t=$doc.createElement(df);a.t[ab]=Fc;return a}
function Av(b,a){yv(b);b.t.innerHTML=a||zd;return b}
function zv(b,a){b.t=a;return b}
function At(){}
_=At.prototype=new bx();_.tI=48;function eu(b,a){b.b=a;return b}
function gu(a){if(!a.a){a.a=$doc.createElement(ad);dq(a.b.d,a.a,0);a.a.appendChild($doc.createElement(bd))}}
function du(){}
_=du.prototype=new xC();_.tI=0;_.a=null;_.b=null;function xu(a){a.b=bH(new aH());return a}
function zu(d,b){var c,a;c=(a=b[cd],a==null?-1:a);if(c<0){return null}return im(fH(d.b,c),10)}
function Au(b,c){var a;if(!b.a){a=b.b.b;dH(b.b,c)}else{a=b.a.a;jH(b.b,a,c);b.a=b.a.b}c.C()[cd]=a}
function Cu(d,b){var c,a;c=(a=b[cd],a==null?-1:a);b[cd]=null;jH(d.b,c,null);d.a=uu(new tu(),c,d.a)}
function ku(){}
_=ku.prototype=new xC();_.tI=0;_.a=null;function nu(b,a){b.c=a;pu(b);return b}
function pu(a){while(++a.b<a.c.b.b){if(fH(a.c.b,a.b)!=null){return}}}
function qu(){return this.b<this.c.b.b}
function ru(){var a;if(this.b>=this.c.b.b){throw new mI()}a=im(fH(this.c.b,this.b),10);this.a=this.b;pu(this);return a}
function su(){var a;if(this.a<0){throw new kC()}a=im(fH(this.c.b,this.a),10);cB(a);this.a=-1}
function lu(){}
_=lu.prototype=new xC();_.ab=qu;_.db=ru;_.lb=su;_.tI=0;_.a=-1;_.b=-1;_.c=null;function uu(c,a,b){c.a=a;c.b=b;return c}
function tu(){}
_=tu.prototype=new xC();_.tI=0;_.a=0;_.b=null;function ew(){ew=tI;cw(new bw(),ed);gw=cw(new bw(),fg);cw(new bw(),fd);fw=gw}
var fw,gw;function cw(b,a){b.a=a;return b}
function bw(){}
_=bw.prototype=new xC();_.tI=0;_.a=null;function lw(){lw=tI;jw(new iw(),me);jw(new iw(),le);mw=jw(new iw(),bb)}
var mw;function jw(a,b){a.a=b;return a}
function iw(){}
_=iw.prototype=new xC();_.tI=0;_.a=null;function ww(){ww=tI;FE(new vH())}
function vw(a,b){ww();tw(new sw(),a,b);a.t[ab]=gd;return a}
function xw(a){rq(a)}
function pw(){}
_=pw.prototype=new oA();_.eb=xw;_.tI=49;function qw(){}
_=qw.prototype=new xC();_.tI=0;function tw(b,a,c){dB(a,$doc.createElement(hd));wo(a.t,229501|(a.t.__eventBits||0));a.t.src=c;return b}
function sw(){}
_=sw.prototype=new qw();_.tI=0;function Aw(a){a.a=El(Cm,0,0,0,0);a.b=0;return a}
function Cw(b){var a;for(a=tF(new rF(),b);a.a<a.c.ub();){im(wF(a),11)}}
function Dw(d,a){var b,c;for(c=tF(new rF(),d);c.a<c.c.ub();){b=im(wF(c),11);Eh(b,a)}}
function Ew(b){var a;for(a=tF(new rF(),b);a.a<a.c.ub();){im(wF(a),11)}}
function Fw(b,a){(a.shiftKey?1:0)|(a.metaKey?8:0)|(a.ctrlKey?2:0)|(a.altKey?4:0);switch(rq(a)){case 128:Cw(b,(a.which||(a.keyCode||0))&65535);break;case 512:Ew(b,(a.which||(a.keyCode||0))&65535);break;case 256:Dw(b,(a.which||(a.keyCode||0))&65535);}}
function zw(){}
_=zw.prototype=new aH();_.tI=50;function hx(a){a.a=El(Cm,0,0,0,0);a.b=0;return a}
function jx(c){var a,b;for(b=tF(new rF(),c);b.a<b.c.ub();){a=im(wF(b),12);Dz(a.a,mf)}}
function kx(c){var a,b;for(b=tF(new rF(),c);b.a<b.c.ub();){a=im(wF(b),12);Dz(a.a,lf)}}
function lx(e,c,a){var b,d,f;d=ii(c);(a.clientX||0)-tk(d)+(parseInt(d[id])||0)+(zq(),Bq).scrollLeft;(a.clientY||0)-uk(d)+(parseInt(d[jd])||0)+Bq.scrollTop;switch(rq(a)){case 4:jx(e);break;case 8:ox(e);break;case 64:nx(e);break;case 16:b=Ep(a);if(!b||!d.contains(b)){kx(e)}break;case 32:f=Fp(a);if(!f||!d.contains(f)){mx(e)}}}
function mx(c){var a,b;for(b=tF(new rF(),c);b.a<b.c.ub();){a=im(wF(b),12);aA(a.a,mf);aA(a.a,lf)}}
function nx(b){var a;for(a=tF(new rF(),b);a.a<a.c.ub();){im(wF(a),12)}}
function ox(c){var a,b;for(b=tF(new rF(),c);b.a<b.c.ub();){a=im(wF(b),12);aA(a.a,mf)}}
function gx(){}
_=gx.prototype=new aH();_.tI=51;function dC(a){return (this==null?null:this)===(a==null?null:a)}
function eC(){return this.$H||(this.$H=++pk)}
function bC(){}
_=bC.prototype=new xC();_.eQ=dC;_.hC=eC;_.tI=52;function Ax(){Ax=tI;Bx=(Ax(),new yx());Cx=new yx()}
function yx(){}
_=yx.prototype=new bC();_.tI=53;var Bx,Cx;function cy(b,a){b.a=a;return b}
function ey(a){if(!a.d){dr((Fy(),cz(null)),a.a)}a.a.t.style[kd]=ld;a.a.t.style[tb]=md}
function fy(a){if(a.d){a.a.t.style[oc]=nd;if(a.a.o!=-1){oy(a.a,a.a.l,a.a.o)}br((Fy(),cz(null)),a.a)}else{dr((Fy(),cz(null)),a.a)}a.a.t.style[tb]=md}
function hy(f,d){var a,b,c,e,g,h;if(!f.d){d=1-d}g=0;c=0;e=0;a=0;b=~~Math.max(Math.min(d*f.b,2147483647),-2147483648);h=~~Math.max(Math.min(d*f.c,2147483647),-2147483648);if(f.a.h==(Ax(),Bx)){g=f.b-b>>1;c=f.c-h>>1}else f.a.h==Cx;e=c+h;a=g+b;f.a.t.style[kd]=pd+g+qd+e+qd+a+qd+c+rd}
function iy(c,b){var a;vj(c);a=c.a.k;if(c.a.h==(Ax(),Cx)&&!b){a=false}c.d=b;if(a){if(b){c.a.t.style[oc]=nd;if(c.a.o!=-1){oy(c.a,c.a.l,c.a.o)}c.a.t.style[kd]=sd;br((Fy(),cz(null)),c.a)}zo(Fx(new Ex(),c))}else{fy(c)}}
function Dx(){}
_=Dx.prototype=new pj();_.tI=54;_.a=null;_.b=0;_.c=-1;_.d=false;function Fx(b,a){b.a=a;return b}
function Ex(){}
_=Ex.prototype=new xC();_.tI=55;_.a=null;function Fy(){Fy=tI;dz=wH(new vH());ez=AH(new zH())}
function Ey(b,a){Fy();b.f=yA(new pA(),b);b.t=a;aB(b);return b}
function az(){var b,a;Fy();var c,d;for(d=(b=dE(new bE(),yG(ez.a).b.a),hG(new gG(),b));vF(d.a.a);){c=im((a=fE(d.a),a.D()),10);if(c.q){c.gb()}}}
function cz(b){Fy();var a,c;c=im(eF(dz,b),13);if(c){return c}a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(dz.d==0){op(new xy())}if(!a){c=Cy(new By())}else{c=Ey(new wy(),a)}kF(dz,b,c);BH(ez,c);return c}
function wy(){}
_=wy.prototype=new ar();_.tI=56;var dz,ez;function zy(){az()}
function Ay(){return null}
function xy(){}
_=xy.prototype=new xC();_.jb=zy;_.kb=Ay;_.tI=57;function Dy(){Dy=tI;Fy()}
function Cy(a){Dy();Ey(a,$doc.body);return a}
function By(){}
_=By.prototype=new wy();_.tI=58;function iz(b,a){b.c=a;b.a=!!b.c.p;return b}
function kz(){return this.a}
function lz(){if(!this.a||!this.c.p){throw new mI()}this.a=false;return this.b=this.c.p}
function mz(){if(this.b){this.c.nb(this.b)}}
function gz(){}
_=gz.prototype=new xC();_.ab=kz;_.db=lz;_.lb=mz;_.tI=0;_.b=null;_.c=null;function yA(b,a){b.b=a;b.a=El(Bm,0,10,4,0);return b}
function zA(a,b){CA(a,b,a.c)}
function BA(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]==c){return a}}return -1}
function CA(d,e,a){var b,c;if(a<0||a>d.c){throw new nC()}if(d.c==d.a.length){c=El(Bm,0,10,d.a.length*2,0);for(b=0;b<d.a.length;++b){bm(c,b,d.a[b])}d.a=c}++d.c;for(b=d.c-1;b>a;--b){bm(d.a,b,d.a[b-1])}bm(d.a,a,e)}
function DA(c,b){var a;if(b<0||b>=c.c){throw new nC()}--c.c;for(a=b;a<c.c;++a){bm(c.a,a,c.a[a+1])}bm(c.a,c.c,null)}
function EA(b,c){var a;a=BA(b,c);if(a==-1){throw new mI()}DA(b,a)}
function pA(){}
_=pA.prototype=new xC();_.tI=0;_.a=null;_.b=null;_.c=0;function sA(b,a){b.b=a;return b}
function uA(a){if(a.a>=a.b.c){throw new mI()}return a.b.a[++a.a]}
function vA(){return this.a<this.b.c-1}
function wA(){return uA(this)}
function xA(){if(this.a<0||this.a>=this.b.c){throw new kC()}this.b.b.nb(this.b.a[this.a--])}
function qA(){}
_=qA.prototype=new xC();_.ab=vA;_.db=wA;_.lb=xA;_.tI=0;_.a=-1;_.b=null;function uB(){}
_=uB.prototype=new BC();_.tI=60;function BB(c,a){var b;b=new xB();return b}
function xB(){}
_=xB.prototype=new xC();_.tI=0;function yB(){}
_=yB.prototype=new BC();_.tI=63;function hC(){}
_=hC.prototype=new BC();_.tI=64;function kC(){}
_=kC.prototype=new BC();_.tI=65;function oC(b,a){return b}
function nC(){}
_=nC.prototype=new BC();_.tI=66;function uC(){}
_=uC.prototype=new BC();_.tI=67;function jD(b,a){if(!(a!=null&&hm(a.tI,1))){return false}return String(b)==a}
function nD(b,a){return b.substr(a,b.length-a)}
function pD(c){if(c.length==0||c[0]>ne&&c[c.length-1]>ne){return c}var a=c.replace(/^(\s*)/,zd);var b=a.replace(/\s*$/,zd);return b}
function rD(a){return jD(this,a)}
function tD(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function uD(){return fD(this)}
_=String.prototype;_.eQ=rD;_.hC=uD;_.tI=2;function aD(){aD=tI;bD={};eD={}}
function cD(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function fD(c){aD();var a=td+c;var b=eD[a];if(b!=null){return b}b=bD[a];if(b==null){b=cD(c)}gD();return eD[a]=b}
function gD(){if(dD==256){bD=eD;eD={};dD=0}++dD}
var bD,dD=0,eD;function xD(){}
_=xD.prototype=new BC();_.tI=70;function yG(b){var a;a=kE(new aE(),b);return nG(new fG(),b,a)}
function zG(d,c){var a,b;for(b=dE(new bE(),kE(new aE(),c).a);vF(b.a);){a=b.b=im(wF(b.a),16);kF(d,a.D(),a.E())}}
function AG(c){var a,b,d,e,f;if((c==null?null:c)===(this==null?null:this)){return true}if(!(c!=null&&hm(c.tI,18))){return false}e=im(c,18);if(im(this,18).d!=e.d){return false}for(b=dE(new bE(),kE(new aE(),e).a);vF(b.a);){a=b.b=im(wF(b.a),16);d=a.D();f=a.E();if(!(d==null?im(this,18).c:d!=null&&hm(d.tI,1)?gF(im(this,18),im(d,1)):fF(im(this,18),d,~~jk(d)))){return false}if(!sI(f,d==null?im(this,18).b:d!=null&&hm(d.tI,1)?im(this,18).e[td+im(d,1)]:cF(im(this,18),d,~~jk(d)))){return false}}return true}
function BG(){var a,b,c;c=0;for(b=dE(new bE(),kE(new aE(),im(this,18)).a);vF(b.a);){a=b.b=im(wF(b.a),16);c+=a.hC();c=~~c}return c}
function eG(){}
_=eG.prototype=new xC();_.eQ=AG;_.hC=BG;_.tI=0;function DE(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.v(a[f])}}}}
function EE(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=BE(e,c.substring(1));a.v(b)}}}
function FE(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function bF(b,a){return a==null?b.c:a!=null&&hm(a.tI,1)?gF(b,im(a,1)):fF(b,a,~~jk(a))}
function eF(b,a){return a==null?b.b:a!=null&&hm(a.tI,1)?b.e[td+im(a,1)]:cF(b,a,~~jk(a))}
function cF(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.D();if(h.z(g,d)){return c.E()}}}return null}
function fF(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.D();if(h.z(g,d)){return true}}}return false}
function gF(b,a){return td+a in b.e}
function kF(b,a,c){return a==null?iF(b,c):a!=null&&hm(a.tI,1)?jF(b,im(a,1),c):hF(b,a,c,~~jk(a))}
function hF(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.D();if(i.z(g,d)){var h=c.E();c.rb(j);return h}}}else{a=i.a[e]=[]}var c=fI(new eI(),g,j);a.push(c);++i.d;return null}
function iF(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function jF(d,a,e){var b,c=d.e;a=td+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function oF(b,a){return a==null?mF(b):a!=null&&hm(a.tI,1)?nF(b,im(a,1)):lF(b,a,~~jk(a))}
function lF(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.D();if(h.z(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.E()}}}return null}
function mF(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function nF(d,a){var b,c=d.e;a=td+a;if(a in c){b=c[a];--d.d;delete c[a]}return b}
function pF(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hk(a,b)}
function FD(){}
_=FD.prototype=new eG();_.z=pF;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function EG(b){var a,c,d;if((b==null?null:b)===(this==null?null:this)){return true}if(!(b!=null&&hm(b.tI,19))){return false}c=im(b,19);if(c.ub()!=this.ub()){return false}for(a=c.cb();a.ab();){d=a.db();if(!this.w(d)){return false}}return true}
function FG(){var a,b,c;a=0;for(b=this.cb();b.ab();){c=b.db();if(c!=null){a+=jk(c);a=~~a}}return a}
function CG(){}
_=CG.prototype=new AD();_.eQ=EG;_.hC=FG;_.tI=71;function kE(b,a){b.a=a;return b}
function mE(d,c){var a,b,e;if(c!=null&&hm(c.tI,16)){a=im(c,16);b=a.D();if(bF(d.a,b)){e=eF(d.a,b);return yH(a.E(),e)}}return false}
function nE(a){return mE(this,a)}
function oE(){return dE(new bE(),this.a)}
function pE(){return this.a.d}
function aE(){}
_=aE.prototype=new CG();_.w=nE;_.cb=oE;_.ub=pE;_.tI=72;_.a=null;function dE(c,b){var a;c.c=b;a=bH(new aH());if(c.c.c){dH(a,rE(new qE(),c.c))}EE(c.c,a);DE(c.c,a);c.a=tF(new rF(),a);return c}
function fE(a){return a.b=im(wF(a.a),16)}
function gE(a){if(!a.b){throw new kC()}else{xF(a.a);oF(a.c,a.b.D());a.b=null}}
function hE(){return vF(this.a)}
function iE(){return this.b=im(wF(this.a),16)}
function jE(){gE(this)}
function bE(){}
_=bE.prototype=new xC();_.ab=hE;_.db=iE;_.lb=jE;_.tI=0;_.a=null;_.b=null;_.c=null;function vG(b){var a;if(b!=null&&hm(b.tI,16)){a=im(b,16);if(sI(this.D(),a.D())&&sI(this.E(),a.E())){return true}}return false}
function wG(){var a,b;a=0;b=0;if(this.D()!=null){a=jk(this.D())}if(this.E()!=null){b=jk(this.E())}return a^b}
function tG(){}
_=tG.prototype=new xC();_.eQ=vG;_.hC=wG;_.tI=73;function rE(b,a){b.a=a;return b}
function tE(){return null}
function uE(){return this.a.b}
function vE(a){return iF(this.a,a)}
function qE(){}
_=qE.prototype=new tG();_.D=tE;_.E=uE;_.rb=vE;_.tI=74;_.a=null;function xE(c,a,b){c.b=b;c.a=a;return c}
function zE(){return this.a}
function AE(){return this.b.e[td+this.a]}
function BE(b,a){return xE(new wE(),a,b)}
function CE(a){return jF(this.b,this.a,a)}
function wE(){}
_=wE.prototype=new tG();_.D=zE;_.E=AE;_.rb=CE;_.tI=75;_.a=null;_.b=null;function tF(b,a){b.c=a;return b}
function vF(a){return a.a<a.c.ub()}
function wF(a){if(a.a>=a.c.ub()){throw new mI()}return a.c.F(a.b=a.a++)}
function xF(a){if(a.b<0){throw new kC()}a.c.mb(a.b);a.a=a.b;a.b=-1}
function yF(){return this.a<this.c.ub()}
function zF(){return wF(this)}
function AF(){xF(this)}
function rF(){}
_=rF.prototype=new xC();_.ab=yF;_.db=zF;_.lb=AF;_.tI=0;_.a=0;_.b=-1;_.c=null;function nG(b,a,c){b.a=a;b.b=c;return b}
function qG(a){return bF(this.a,a)}
function rG(){var a;return a=dE(new bE(),this.b.a),hG(new gG(),a)}
function sG(){return this.b.a.d}
function fG(){}
_=fG.prototype=new CG();_.w=qG;_.cb=rG;_.ub=sG;_.tI=76;_.a=null;_.b=null;function hG(a,b){a.a=b;return a}
function kG(){return vF(this.a.a)}
function lG(){var a;return a=fE(this.a),a.D()}
function mG(){gE(this.a)}
function gG(){}
_=gG.prototype=new xC();_.ab=kG;_.db=lG;_.lb=mG;_.tI=0;_.a=null;function wH(a){FE(a);return a}
function yH(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hk(a,b)}
function vH(){}
_=vH.prototype=new FD();_.tI=77;function AH(a){a.a=wH(new vH());return a}
function BH(c,a){var b;b=kF(c.a,a,c);return b==null}
function DH(b){var a;return a=kF(this.a,b,this),a==null}
function EH(a){return bF(this.a,a)}
function FH(){var a;return a=dE(new bE(),yG(this.a).b.a),hG(new gG(),a)}
function aI(){return this.a.d}
function zH(){}
_=zH.prototype=new CG();_.v=DH;_.w=EH;_.cb=FH;_.ub=aI;_.tI=78;_.a=null;function fI(b,a,c){b.a=a;b.b=c;return b}
function hI(){return this.a}
function iI(){return this.b}
function kI(b){var a;a=this.b;this.b=b;return a}
function eI(){}
_=eI.prototype=new tG();_.D=hI;_.E=iI;_.rb=kI;_.tI=79;_.a=null;_.b=null;function mI(){}
_=mI.prototype=new BC();_.tI=80;function sI(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hk(a,b)}
function sB(){!!$stats&&$stats({moduleName:$moduleName,subSystem:ud,evtGroup:vd,millis:(new Date()).getTime(),type:wd,className:xd});oj(mj(new kj()))}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{sB()}catch(a){b(d)}else{sB()}}
function tI(){}
var Dm=BB(yd,Ad),Cm=BB(yd,Bd),zm=BB(Cd,Dd),Am=BB(Ed,Fd),Bm=BB(Ed,ae);$stats && $stats({moduleName:'com.google.code.p.gwtcsample.GWTCSample',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_google_code_p_gwtcsample_GWTCSample) {  var __gwt_initHandlers = com_google_code_p_gwtcsample_GWTCSample.__gwt_initHandlers;  com_google_code_p_gwtcsample_GWTCSample.onScriptLoad(gwtOnLoad);}})();