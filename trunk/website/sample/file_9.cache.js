(function(){var $gwt_version = "1.5.3";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.google.code.p.gwtcsample.GWTCSample',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var zd='',se=' ',Ac=' must be non-negative: ',kf='&nbsp;',Cc=', Column size: ',Ec=', Row size: ',tc=', Size: ',F='-',hg='...',tf='0px',Fe='100%',xd='1px',ee='998',yd=':',jb='<-A\xF1o',ce='Animation;',db='Ante.',lb='Ayuda',zg='A\xF1o anterior',xg='A\xF1o pr\xF3ximo',hb='A\xF1o->',ub='BODY',fg='Cambiar',Fc='Cannot create a column with a negative index: ',ad='Cannot create a row with a negative index: ',ze='Center',ob='Cerrar',Dg='Cerrar di\xE1logo',zc='Column ',Bc='Column index: ',lc='DOMMouseScroll',Bg='Di\xE1logo de ayuda',fe='DockPanel$TmpRow;',pb='Espere por favor ...',Cf='Fecha de entrada',Ef='Fecha de salida',pe='GWTCAlert',cc='GWTCBox',xb='GWTCBox-blue',mb='GWTCBox-grey',hf='GWTCBtn',mf='GWTCBtn-c',nf='GWTCBtn-focus',gf='GWTCBtn-img',lf='GWTCBtn-l',ef='GWTCBtn-ml',of='GWTCBtn-r',ff='GWTCBtn-text',sf='GWTCGlassPanel',yc='GWTCPopupBox',wf='GWTCWait',fb='Hoy',sc='Index: ',Ee='Inner',dg='Intervalo',ye='Left',ug='Mes actual',sg='Mes anterior',qg='Mes pr\xF3ximo',bg='Noches',ie='OK',ae='Object;',Ae='Right',Dc='Row index: ',lg='Seleccione la fecha de entrada',ng='Seleccione la fecha de salida',Fg='Sigu.',Fd='String;',ge='Widget;',be='[Lcom.google.gwt.animation.client.',de='[Lcom.google.gwt.user.client.ui.',Ed='[Ljava.lang.',gd='__widgetID',vb='absolute',uc='align',nc='auto',yb='blur',tb='border-left-width',wb='border-top-width',re='bottom',dd='box',me='btnCell',cf='button',we='cellPadding',ve='cellSpacing',hd='center',zb='change',ab='className',Ab='click',nd='clip',fd='col',wc='colSpan',ed='colgroup',Dd='com.google.code.p.gwtcsample.client.GWTCSample',mc='contextmenu',Bb='dblclick',jf='div',rf='down',jc='error',Cb='focus',df='gwt-Button',Be='gwt-DecoratorPanel',cd='gwt-HTML',jd='gwt-Image',bd='gwt-Label',uf='gwt-PopupPanel',oe='gwtc-alert-rndbutton',he='height',Af='hidden',oc='html',yf='image',je='images/button/dialog-ok.gif',vf='images/gwtc-wait-loading.gif',kd='img',xf='imgCell',vd='input',jg='key.calendar.checkin.title',mg='key.calendar.checkout.title',og='key.calendar.help',eg='key.change',Bf='key.checkin',gg='key.checkin.button',Df='key.checkout',ig='key.checkout.button',nb='key.close',Cg='key.close.title',kb='key.help',Ag='key.help.title',cg='key.interval',Eg='key.next.month',pg='key.next.month.title',gb='key.next.year',wg='key.next.year.title',ag='key.nights',cb='key.prev.month',rg='key.prev.month.title',ib='key.prev.year',yg='key.prev.year.title',eb='key.today',tg='key.today.title',Db='keydown',Eb='keypress',Fb='keyup',kg='left',ac='load',bc='losecapture',pc='margin-left',qc='margin-top',qe='middle',Bd='moduleStartup',dc='mousedown',ec='mousemove',fc='mouseout',gc='mouseover',hc='mouseup',kc='mousewheel',le='msgCell',pf='none',qb='offsetHeight',rb='offsetWidth',ne='okButton',Cd='onModuleLoadStart',qf='over',sb='overflow',ke='panel',Ff='popupContent',rc='position',vg='px',td='px)',sd='px, ',rd='rect(',ud='rect(0px, 0px, 0px, 0px)',pd='rect(auto, auto, auto, auto)',id='right',xc='rowSpan',ic='scroll',ld='scrollLeft',md='scrollTop',Ad='startup',af='submit',te='table',ue='tbody',Ce='td',wd='text',bb='top',xe='tr',bf='type',vc='verticalAlign',zf='visibility',qd='visible',De='width',od='zIndex';var _;function oD(a){return (this==null?null:this)===(a==null?null:a)}
function pD(){return this.$H||(this.$H=++uk)}
function mD(){}
_=mD.prototype={};_.eQ=oD;_.hC=pD;_.tM=iJ;_.tI=1;function bA(b,a){ji(b,mA(ni(b))+F+a)}
function cA(b,a){oA(b.D(),a,true)}
function eA(b,a){oi(b,mA(ni(b))+F+a)}
function gA(b,a){if(b.t){hA(b.t,a)}b.t=a}
function hA(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function lA(){return this.t}
function mA(a){var b,c;b=a[ab]==null?null:String(a[ab]);c=b.indexOf(iE(32));if(c>=0){return b.substr(0,c-0)}return b}
function nA(a){this.D().style[he]=a}
function oA(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new qD()}j=eE(j);if(j.length==0){throw new CC()}i=c[ab]==null?null:String(c[ab]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=se}c[ab]=i+j}}else{if(e!=-1){b=eE(i.substr(0,e-0));d=eE(cE(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+se+d}c[ab]=h}}}
function pA(a){this.D()[ab]=a}
function rA(a){this.D().style[De]=a}
function aA(){}
_=aA.prototype=new mD();_.D=lA;_.qb=nA;_.rb=pA;_.vb=rA;_.tI=3;_.t=null;function eB(a){if(a.q){throw new FC()}a.q=true;a.D().__listener=a;a.y();a.ib()}
function fB(a){if(!a.q){throw new FC()}try{a.jb()}finally{a.z();a.D().__listener=null;a.q=false}}
function gB(a){if(a.s){a.s.ob(a)}else if(a.s){throw new FC()}}
function hB(b,a){if(b.q){b.t.__listener=null}gA(b,a);if(b.q){b.t.__listener=b}}
function iB(c,b){var a;a=c.s;if(!b){if(!!a&&a.q){c.hb()}c.s=null}else{if(a){throw new FC()}c.s=b;if(b.q){eB(c)}}}
function jB(){}
function kB(){}
function lB(a){}
function mB(){fB(this)}
function nB(){}
function oB(){}
function sA(){}
_=sA.prototype=new aA();_.y=jB;_.z=kB;_.fb=lB;_.hb=mB;_.ib=nB;_.jb=oB;_.tI=4;_.q=false;_.r=null;_.s=null;function vx(b){var a;a=b.db();while(a.bb()){a.eb();a.mb()}}
function xx(){var a,b;for(b=this.db();b.bb();){a=nm(b.eb(),10);eB(a)}}
function yx(){var a,b;for(b=this.db();b.bb();){a=nm(b.eb(),10);a.hb()}}
function zx(){}
function Ax(){}
function ux(){}
_=ux.prototype=new sA();_.y=xx;_.z=yx;_.ib=zx;_.jb=Ax;_.tI=5;function rz(a,b){if(a.p){throw new FC()}a.ub(b)}
function tz(a,b){if(b==a.p){return}if(b){gB(b)}if(a.p){a.ob(a.p)}a.p=b;if(b){a.C().appendChild(a.p.D());iB(b,a)}}
function uz(){return this.t}
function vz(){return mz(new kz(),this)}
function wz(a){if(this.p!=a){return false}iB(a,null);this.C().removeChild(a.D());this.p=null;return true}
function xz(a){tz(this,a)}
function jz(){}
_=jz.prototype=new ux();_.C=uz;_.db=vz;_.ob=wz;_.ub=xz;_.tI=6;_.p=null;function oy(a){a.t=$doc.createElement(jf);a.h=(Ex(),Fx);a.m=gy(new by(),a);a.t.appendChild($doc.createElement(jf));sy(a,0,0);a.t[ab]=uf;bl(a.t)[ab]=Ff;return a}
function qy(a){if(!a.n){return}a.n=false;my(a.m,false)}
function ry(a){var b;b=a.p;if(b){if(a.i!=null){b.qb(a.i)}if(a.j!=null){b.vb(a.j)}}}
function sy(c,b,d){var a;if(b<0){b=0}if(d<0){d=0}c.l=b;c.o=d;b-=0;d-=0;a=c.t;a.style[kg]=b+vg;a.style[bb]=d+vg}
function ty(a,b){tz(a,b);ry(a)}
function uy(a,b){a.j=b;ry(a);if(b.length==0){a.j=null}}
function vy(){return bl(this.t)}
function wy(){fB(this)}
function xy(a){this.i=a;ry(this);if(a.length==0){this.i=null}}
function yy(a){tz(this,a);ry(this)}
function zy(a){uy(this,a)}
function Bx(){}
_=Bx.prototype=new jz();_.C=vy;_.hb=wy;_.qb=xy;_.ub=yy;_.vb=zy;_.tI=7;_.i=null;_.j=null;_.k=false;_.l=-1;_.n=false;_.o=-1;function dj(c,b,a){var d;d=wh(b);if(c.g)sh(c.g,d,a);else qs(c.f,d,a)}
function fj(a){qy(a);if(a.e)Di(a.e)}
function gj(b,a){vx(b);if((a&4)==4){b.g=rh(new lh(),mb)}else if((a&8)==8){b.g=rh(new lh(),xb);rz(b,b.g)}else if((a&2)==2){b.g=rh(new lh(),cc);rz(b,b.g)}else{b.f=ps(new fs());rz(b,b.f)}b.k=(a&32)==32;if((a&16)!=16){b.e=Bi(new Ai());if((a&64)!=64){st(b.e,aj(new Fi(),b))}}hj(b,999);uy(b,nc);b.t[ab]=yc;if(b.g)cA(b,mA(b.t)+F+dd)}
function hj(a,b){a.t.style[od]=zd+b;if(a.e){a.e.t.style[od]=ee}}
function ij(){fj(this)}
function Ei(){}
_=Ei.prototype=new Bx();_.cb=ij;_.tI=8;_.e=null;_.f=null;_.g=null;function gh(b,a){oy(b);jh(b,64);jh(b,a);return b}
function jh(b,a){gj(b,a);b.a=et(new at());b.d=Cv(new Et());b.b=gi(new zh(),ie);ri(b.b,zw(new tw(),je));if((a&1)==1)b.c=true;b.a.D()[ab]=ke;bu(b.a.b,0,0,le);yv(b.a,0,0,b.d);bu(b.a.b,1,0,me);yv(b.a,1,0,b.b);ji(b.b,ne);ji(b.b,oe);yH(b.b.a,ch(new bh(),b));wi(b.b,!b.c);b.t[ab]=pe;if((a&4)==4||(a&8)==8||(a&2)==2){cA(b,mA(b.t)+F+dd)}dj(b,b.a,(rs(),Cs))}
function kh(){fj(this)}
function ah(){}
_=ah.prototype=new Ei();_.cb=kh;_.tI=9;_.a=null;_.b=null;_.c=false;_.d=null;function ch(b,a){b.a=a;return b}
function eh(a){fj(this.a)}
function bh(){}
_=bh.prototype=new mD();_.gb=eh;_.tI=10;_.a=null;function as(){as=iJ;bs=em(cn,0,1,[bb,qe,re])}
function Fr(E,C,z){var A,B,D,y;as();E.t=$doc.createElement(te);D=E.t;E.e=$doc.createElement(ue);D.appendChild(E.e);D[ve]=0;D[we]=0;for(A=0;A<C.length;++A){B=(y=$doc.createElement(xe),(y[ab]=C[A],undefined),y.appendChild(cs(C[A]+ye)),y.appendChild(cs(C[A]+ze)),y.appendChild(cs(C[A]+Ae)),y);E.e.appendChild(B);if(A==z){E.d=bl(hq(B,1))}}E.t[ab]=Be;return E}
function cs(b){var a,c;c=$doc.createElement(Ce);a=$doc.createElement(jf);c.appendChild(a);c[ab]=b;a[ab]=b+Ee;return c}
function es(){return this.d}
function Er(){}
_=Er.prototype=new jz();_.C=es;_.tI=11;_.d=null;_.e=null;var bs;function uh(){uh=iJ;as()}
function rh(b,a){uh();Fr(b,bs,1);b.c=Cv(new Et());b.b=Cv(new Et());b.a=ps(new fs());rz(b,b.a);b.a.D()[ab]=ke;b.t[ab]=cc;qs(b.a,b.c,(rs(),Cs));qs(b.a,b.b,Cs);if(a!=null&&a.length>0&&a!=cc)oA(b.t,a,true);return b}
function sh(c,b,a){qs(c.a,wh(b),a)}
function th(a,c){var b;b=hq(hq(hq(a.t,0),0),1);if(ED(c,nc)){b.style[De]=nc}else{b.style[De]=Fe}}
function vh(){return wA(new uA(),this.a.f)}
function wh(d){var a;uh();var b,c;if(!d){c=null}else if(d){c=d}else{b=Am(d);if(null.yb().yb()||null.yb().yb()){c=(a=Dv(new Et(),b),eB(a),dz(),qI(iz,a),a)}else{c=nh(new mh(),b)}}return c}
function xh(a){return ts(this.a,a)}
function yh(a){this.t.style[De]=a;th(this,a)}
function lh(){}
_=lh.prototype=new Er();_.db=vh;_.ob=xh;_.vb=yh;_.tI=12;function nh(b,a){b.t=a;return b}
function mh(){}
_=mh.prototype=new jz();_.tI=13;function Bt(){Bt=iJ;Ct=(aC(),cC)}
function Dt(a){wq(a)==1}
function At(){}
_=At.prototype=new sA();_.fb=Dt;_.tI=14;var Ct;function lr(){lr=iJ;Bt()}
function kr(b,a){lr();b.t=a;ti(b,0);return b}
function jr(){}
_=jr.prototype=new At();_.tI=15;function nr(){nr=iJ;lr()}
function or(b){if(b.type==af){try{b.setAttribute(bf,cf)}catch(a){}}}
function ir(){}
_=ir.prototype=new jr();_.tI=16;function mi(){mi=iJ;nr()}
function gi(b,a){mi();kr(b,$doc.createElement(cf));or(ni(b));si(b,df);b.f=lx(new kx());b.a=tr(new sr());b.g=Bh(new Ah(),b);b.d=Eh(new Dh(),b);b.e=bi(new ai(),b);ui(b,1);qi(b,a);return b}
function ji(b,a){oA(ni(b),a,true);if(b.b)cA(b.b,a)}
function ki(a){if(a.i==1){pv(a.b,0,a.i);eu(a.b.b,0,1).className=ef;a.i=2}}
function li(a){vr(a.a,a)}
function ni(a){if(!a.c)a.c=a.t;return a.c}
function oi(b,a){oA(ni(b),a,false);if(b.b){oA(b.b.t,a,false)}}
function pi(c,a){var b;if(c.c){b=dl(c.c);if(b){b.removeChild(c.c);b.appendChild(a)}}c.c=a}
function qi(b,a){if(!b.b){ni(b).innerHTML=a||zd}else{vx(b.h);tz(b.h,Ev(new Et(),a));b.h.p.rb(ff)}}
function ri(b,a){a.t[ab]=gf;ki(b);yv(b.b,0,1,a)}
function si(b,a){ni(b)[ab]=a;if(b.b)cA(b.b,a)}
function ti(b,a){if(!b.b)Ct.sb(ni(b),a);else{b.h.t.firstChild.tabIndex=a}}
function ui(b,c){var a;a=!b.b?ni(b).innerHTML:eu(b.b.b,0,b.i).innerHTML;b.c=null;if(b.b){a=null;jv(b.b)}b.b=null;if(c==0){si(b,hf);ji(b,df)}else{b.b=et(new at());b.b.D()[ab]=hf;b.b.d[ve]=0;b.b.d[we]=0;xv(b.b,0,0,kf);gu(b.b.b,0,0,lf);gu(b.b.b,0,1,mf);b.h=rt(new qt());tt(b.h,b.d);ut(b.h,b.e);b.h.D()[ab]=nf;yv(b.b,0,1,b.h);xv(b.b,0,2,kf);gu(b.b.b,0,2,of);pi(b,b.b.t);lq(b.h.t,7164)}yH(b.f,b.g);qi(b,a);lq(ni(b),1021|(ni(b).__eventBits||0))}
function wi(a,b){ni(a).style.display=b?zd:pf;if(a.b){a.b.t.style.display=b?zd:pf}}
function xi(){return ni(this)}
function yi(a){var b;b=wq(a);px(this.f,this,a);if(b==1){oi(this,mA(ni(this))+F+qf);vr(this.a,this);oi(this,mA(ni(this))+F+rf)}else if(this.b){wt(this.h,a)}else{wq(a)==1}}
function zi(a){si(this,a)}
function zh(){}
_=zh.prototype=new ir();_.D=xi;_.fb=yi;_.rb=zi;_.tI=17;_.b=null;_.c=null;_.h=null;_.i=1;function Bh(b,a){b.a=a;return b}
function Ah(){}
_=Ah.prototype=new mD();_.tI=18;_.a=null;function Eh(b,a){b.a=a;return b}
function Dh(){}
_=Dh.prototype=new mD();_.tI=19;_.a=null;function bi(b,a){b.a=a;return b}
function di(b,a){if(a==13)li(b.a)}
function ai(){}
_=ai.prototype=new mD();_.tI=20;_.a=null;function vt(){vt=iJ;yt=(aC(),bC)}
function rt(a){vt();a.t=wB(yt);Bo(a.t,138237|(a.t.__eventBits||0));return a}
function st(b,a){if(!b.a){b.a=tr(new sr())}yH(b.a,a)}
function tt(b,a){if(!b.b){b.b=kt(new jt())}yH(b.b,a)}
function ut(b,a){if(!b.c){b.c=Ew(new Dw())}yH(b.c,a)}
function wt(b,a){switch(wq(a)){case 1:if(b.a){vr(b.a,b)}break;case 4096:case 2048:if(b.b){mt(b.b,a)}break;case 128:case 512:case 256:if(b.c){dx(b.c,a)}}}
function zt(a){wt(this,a)}
function qt(){}
_=qt.prototype=new jz();_.fb=zt;_.tI=21;_.a=null;_.b=null;_.c=null;var yt;function Ci(){Ci=iJ;vt()}
function Bi(a){Ci();rt(a);oA(a.t,sf,true);a.t.style[od]=ee;return a}
function Di(a){a.D().style[De]=tf;a.D().style[he]=tf;a.t.style.display=pf}
function Ai(){}
_=Ai.prototype=new qt();_.tI=22;function aj(b,a){b.a=a;return b}
function cj(a){this.a.cb()}
function Fi(){}
_=Fi.prototype=new mD();_.gb=cj;_.tI=23;_.a=null;function lj(a){oy(a);gj(a,64);a.c=gx(new fx(),zd);a.a=zw(new tw(),vf);a.b=et(new at());if(gz(wf)){gz(wf).t.style.display=pf}a.t[ab]=wf;a.b.D()[ab]=ke;bu(a.b.b,0,0,le);yv(a.b,0,0,a.c);bu(a.b.b,1,0,xf);yv(a.b,1,0,a.a);oA(a.a.D(),yf,true);ty(a,a.b);return a}
function oj(){fj(this);this.t.style[zf]=Af}
function jj(){}
_=jj.prototype=new Ei();_.cb=oj;_.tI=24;function rj(a){a.a=lI(new kI());a.b=lI(new kI());a.c=lI(new kI());gh(new ah(),64);gh(new ah(),8);a.d=lj(new jj());FF(a.a,Bf,Cf);FF(a.a,Df,Ef);FF(a.a,ag,bg);FF(a.a,cg,dg);FF(a.a,eg,fg);FF(a.a,gg,hg);FF(a.a,ig,hg);FF(a.a,jg,lg);FF(a.a,mg,ng);FF(a.a,og,zd);FF(a.c,pg,qg);FF(a.c,rg,sg);FF(a.c,tg,ug);FF(a.c,wg,xg);FF(a.c,yg,zg);FF(a.c,Ag,Bg);FF(a.c,Cg,Dg);FF(a.b,Eg,Fg);FF(a.b,cb,db);FF(a.b,eb,fb);FF(a.b,gb,hb);FF(a.b,ib,jb);FF(a.b,kb,lb);FF(a.b,nb,ob);oH(a.b,a.c);fl(a.d.c.t,pb);return a}
function tj(){return}
function pj(){}
_=pj.prototype=new mD();_.tI=0;function Aj(a){if(!a.f){return}DH(ak,a);Cj(a);a.h=false;a.f=false}
function Cj(a){if(a.h){iy(a)}}
function Dj(c,a,b){Aj(c);c.f=true;c.e=a;c.g=b;if(Ej(c,(new Date()).getTime())){return}if(!ak){ak=wH(new vH());Fj=(xj(),ip(),new vj())}yH(ak,c);if(ak.b==1){kp(Fj,25)}}
function Ej(d,a){var b,c;b=a>=d.g+d.e;if(d.h&&!b){c=(a-d.g)/d.e;ly(d,(1+Math.cos(3.141592653589793+c*3.141592653589793))/2);return false}if(!d.h&&a>=d.g){d.h=true;d.b=parseInt(d.a.t[qb])||0;d.c=parseInt(d.a.t[rb])||0;d.a.t.style[sb]=Af;ly(d,(1+Math.cos(3.141592653589793))/2)}if(b){iy(d);d.h=false;d.f=false;return true}return false}
function bk(){var a,b,c,d,e,f;e=dm(Em,81,20,ak.b,0);e=nm(FH(ak,e),2);f=(new Date()).getTime();for(b=e,c=0,d=b.length;c<d;++c){a=b[c];if(a.f&&Ej(a,f)){DH(ak,a)}}if(ak.b>0){kp(Fj,25)}}
function uj(){}
_=uj.prototype=new mD();_.tI=25;_.e=-1;_.f=false;_.g=-1;_.h=false;var Fj=null,ak=null;function ip(){ip=iJ;pp=wH(new vH());tp(new dp())}
function hp(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}DH(pp,a)}
function jp(a){if(!a.b){DH(pp,a)}a.pb()}
function kp(b,a){if(a<=0){throw new CC()}hp(b);b.b=false;b.c=np(b,a);yH(pp,b)}
function np(b,a){return $wnd.setTimeout(function(){b.B()},a)}
function op(){jp(this)}
function cp(){}
_=cp.prototype=new mD();_.B=op;_.tI=26;_.b=false;_.c=0;var pp;function xj(){xj=iJ;ip()}
function yj(){bk()}
function vj(){}
_=vj.prototype=new cp();_.pb=yj;_.tI=27;function mk(b,a){return b.tM==iJ||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function ok(a){return a.tM==iJ||a.tI==2?a.hC():a.$H||(a.$H=++uk)}
var uk=0;function bl(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function dl(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function fl(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function yk(b){if(b.offsetLeft==null){return 0}var c=0;var a=b.parentNode;if(a){while(a.offsetParent){c-=a.scrollLeft;a=a.parentNode}}while(b){c+=b.offsetLeft;var d=b.offsetParent;if(d&&$wnd.devicePixelRatio){c+=parseInt($doc.defaultView.getComputedStyle(d,zd).getPropertyValue(tb))}if(d&&(d.tagName==ub&&b.style.position==vb)){break}b=d}return c}
function zk(b){if(b.offsetTop==null){return 0}var e=0;var a=b.parentNode;if(a){while(a.offsetParent){e-=a.scrollTop;a=a.parentNode}}while(b){e+=b.offsetTop;var c=b.offsetParent;if(c&&$wnd.devicePixelRatio){e+=parseInt($doc.defaultView.getComputedStyle(c,zd).getPropertyValue(wb))}if(c&&(c.tagName==ub&&b.style.position==vb)){break}b=c}return e}
function Ak(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function bm(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function dm(a,f,c,b,e){var d;d=bm(e,b);em(a,f,c,d);return d}
function em(b,d,c,a){if(!fm){fm=new Bl()}im(a,fm);a.aC=b;a.tI=d;a.qI=c;return a}
function gm(a,b,c){if(c!=null){if(a.qI>0&&!lm(c.tI,a.qI)){throw new jC()}if(a.qI<0&&(c.tM==iJ||c.tI==2)){throw new jC()}}return a[b]=c}
function im(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function Bl(){}
_=Bl.prototype=new mD();_.tI=0;_.aC=null;_.length=0;_.qI=0;var fm=null;function mm(b,a){return b&&!!Bm[b][a]}
function lm(b,a){return b&&Bm[b][a]}
function nm(b,a){if(b!=null&&!lm(b.tI,a)){throw new nC()}return b}
function Am(a){if(a!=null){throw new nC()}return a}
var Bm=[{},{},{1:1,22:1,23:1,24:1},{14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{8:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{12:1},{9:1},{11:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{8:1},{7:1,10:1,14:1},{20:1},{5:1},{5:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{5:1},{5:1},{6:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1},{17:1,22:1},{17:1,22:1},{7:1,10:1,14:1},{21:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1,22:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1,22:1},{17:1,22:1},{22:1,24:1},{22:1,24:1},{20:1},{4:1},{7:1,10:1,13:1,14:1},{6:1},{7:1,10:1,13:1,14:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{23:1},{23:1},{3:1,22:1},{19:1},{19:1},{16:1},{16:1},{16:1},{19:1},{18:1,22:1},{19:1,22:1},{16:1},{3:1,22:1},{2:1},{15:1}];function kE(){}
_=kE.prototype=new mD();_.tI=28;function AC(){}
_=AC.prototype=new kE();_.tI=29;function qD(){}
_=qD.prototype=new AC();_.tI=30;function sn(a){return a}
function rn(){}
_=rn.prototype=new qD();_.tI=32;function lo(a){a.a=wn(new vn(),a);a.b=wH(new vH());a.d=An(new zn(),a);a.f=Fn(new Dn(),a);return a}
function no(b){var a;a=bo(b.f);fo(b.f);if(a!=null&&mm(a.tI,4)){sn(new rn(),nm(a,4))}else{}b.c=false;po(b)}
function oo(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;kp(d.a,10000);while(co(d.f)){b=eo(d.f);try{if(b==null){return}if(b!=null&&mm(b.tI,4)){a=nm(b,4);Dj(a.a,200,(new Date()).getTime())}else{}}finally{e=d.f.b==-1;if(e){return}fo(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){hp(d.a);d.c=false;po(d)}}}
function po(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;kp(a.d,1)}}
function ro(b,a){yH(b.b,a);po(b)}
function un(){}
_=un.prototype=new mD();_.tI=0;_.c=false;_.e=false;function xn(){xn=iJ;ip()}
function wn(b,a){xn();b.a=a;return b}
function yn(){if(!this.a.c){return}no(this.a)}
function vn(){}
_=vn.prototype=new cp();_.pb=yn;_.tI=33;_.a=null;function Bn(){Bn=iJ;ip()}
function An(b,a){Bn();b.a=a;return b}
function Cn(){this.a.e=false;oo(this.a,(new Date()).getTime())}
function zn(){}
_=zn.prototype=new cp();_.pb=Cn;_.tI=34;_.a=null;function Fn(b,a){b.d=a;return b}
function bo(a){return AH(a.d.b,a.b)}
function co(a){return a.c<a.a}
function eo(b){var a;b.b=b.c;a=AH(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function fo(a){CH(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function ho(){return this.c<this.a}
function io(){return eo(this)}
function jo(){fo(this)}
function Dn(){}
_=Dn.prototype=new mD();_.bb=ho;_.eb=io;_.mb=jo;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function wo(b,a,c){var d;if(a==zo){if(wq(b)==8192){zo=null}}d=vo;vo=b;try{c.fb(b)}finally{vo=d}}
function Bo(a,b){yq();kq(a,b)}
var vo=null,zo=null;function Do(){Do=iJ;Fo=lo(new un())}
function Eo(a){Do();if(!a){throw new jD()}ro(Fo,a)}
var Fo;function fp(){while((ip(),pp).b>0){hp(nm(AH(pp,0),5))}}
function gp(){return null}
function dp(){}
_=dp.prototype=new mD();_.kb=fp;_.lb=gp;_.tI=35;function tp(a){zp();if(!up){up=wH(new vH())}yH(up,a)}
function vp(){var a,b;if(up){for(b=iG(new gG(),up);b.a<b.c.wb();){a=nm(lG(b),6);a.kb()}}}
function wp(){var a,b,c,d;d=null;if(up){for(b=iG(new gG(),up);b.a<b.c.wb();){a=nm(lG(b),6);c=a.lb();d=c}}return d}
function yp(){__gwt_initHandlers(function(){},function(){return wp()},function(){vp()})}
function zp(){if(!xp){yp();xp=true}}
var up=null,xp=false;function wq(a){switch(a.type){case yb:return 4096;case zb:return 1024;case Ab:return 1;case Bb:return 2;case Cb:return 2048;case Db:return 128;case Eb:return 256;case Fb:return 512;case ac:return 32768;case bc:return 8192;case dc:return 4;case ec:return 64;case fc:return 32;case gc:return 16;case hc:return 8;case ic:return 16384;case jc:return 65536;case kc:return 131072;case lc:return 131072;case mc:return 262144;}}
function yq(){if(!Aq){iq();Aq=true}}
function Bq(a){return a!=null&&mm(a.tI,7)&&!(a!=null&&(a.tM!=iJ&&a.tI!=2))}
var Aq=false;function eq(a){if(a.type==gc)return a.relatedTarget;if(a.type==fc)return a.target;return null}
function fq(a){if(a.type==gc)return a.target;if(a.type==fc)return a.relatedTarget;return null}
function hq(c,d){var b=0,a=c.firstChild;while(a){var e=a.nextSibling;if(a.nodeType==1){if(d==b)return a;++b}a=e}return null}
function gq(c){var b=0,a=c.firstChild;while(a){if(a.nodeType==1)++b;a=a.nextSibling}return b}
function iq(){oq=function(b){if(nq(b)){var a=mq;if(a&&a.__listener){if(Bq(a.__listener)){wo(b,a,a.__listener);b.stopPropagation()}}}};nq=function(a){return true};pq=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(Bq(c)){wo(b,a,c)}}};$wnd.addEventListener(Ab,oq,true);$wnd.addEventListener(Bb,oq,true);$wnd.addEventListener(dc,oq,true);$wnd.addEventListener(hc,oq,true);$wnd.addEventListener(ec,oq,true);$wnd.addEventListener(gc,oq,true);$wnd.addEventListener(fc,oq,true);$wnd.addEventListener(kc,oq,true);$wnd.addEventListener(Db,nq,true);$wnd.addEventListener(Fb,nq,true);$wnd.addEventListener(Eb,nq,true)}
function jq(e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break}++c}b=b.nextSibling}e.insertBefore(g,a)}
function lq(b,a){yq();kq(b,a)}
function kq(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?pq:null;if(b&2)c.ondblclick=a&2?pq:null;if(b&4)c.onmousedown=a&4?pq:null;if(b&8)c.onmouseup=a&8?pq:null;if(b&16)c.onmouseover=a&16?pq:null;if(b&32)c.onmouseout=a&32?pq:null;if(b&64)c.onmousemove=a&64?pq:null;if(b&128)c.onkeydown=a&128?pq:null;if(b&256)c.onkeypress=a&256?pq:null;if(b&512)c.onkeyup=a&512?pq:null;if(b&1024)c.onchange=a&1024?pq:null;if(b&2048)c.onfocus=a&2048?pq:null;if(b&4096)c.onblur=a&4096?pq:null;if(b&8192)c.onlosecapture=a&8192?pq:null;if(b&16384)c.onscroll=a&16384?pq:null;if(b&32768)c.onload=a&32768?pq:null;if(b&65536)c.onerror=a&65536?pq:null;if(b&131072)c.onmousewheel=a&131072?pq:null;if(b&262144)c.oncontextmenu=a&262144?pq:null}
var mq=null,nq=null,oq=null,pq=null;function aq(a){if($wnd.devicePixelRatio){return a.clientX||0}else{var b=document.defaultView.getComputedStyle($doc.getElementsByTagName(oc)[0],zd);return a.pageX-$doc.body.scrollLeft-parseInt(b.getPropertyValue(pc))-parseInt(b.getPropertyValue(tb))||0}}
function bq(a){if($wnd.devicePixelRatio){return a.clientY||0}else{var b=document.defaultView.getComputedStyle($doc.getElementsByTagName(oc)[0],zd);return a.pageY-$doc.body.scrollTop-parseInt(b.getPropertyValue(qc))-parseInt(b.getPropertyValue(wb))||0}}
function zr(c,a,b){gB(a);DA(c.f,a);b.appendChild(a.t);iB(a,c)}
function Br(b,c){var a;if(c.s!=b){return false}iB(c,null);a=c.D();dl(a).removeChild(a);cB(b.f,c);return true}
function Cr(){return wA(new uA(),this.f)}
function Dr(a){return Br(this,a)}
function xr(){}
_=xr.prototype=new ux();_.db=Cr;_.ob=Dr;_.tI=36;function dr(a,b){zr(a,b,a.t)}
function fr(b,c){var a;a=Br(b,c);if(a){gr(c.D())}return a}
function gr(a){a.style[kg]=zd;a.style[bb]=zd;a.style[rc]=zd}
function hr(a){return fr(this,a)}
function cr(){}
_=cr.prototype=new xr();_.ob=hr;_.tI=37;function pr(){}
_=pr.prototype=new xr();_.tI=38;_.d=null;_.e=null;function qE(a,b){var c;while(a.bb()){c=a.eb();if(b==null?c==null:mk(b,c)){return a}}return null}
function sE(a){throw new mE()}
function tE(b){var a;a=qE(this.db(),b);return !!a}
function pE(){}
_=pE.prototype=new mD();_.v=sE;_.w=tE;_.tI=0;function sG(a){this.u(this.wb(),a);return true}
function rG(b,a){throw new mE()}
function tG(a,b){if(a<0||a>=b){wG(a,b)}}
function uG(e){var a,b,c,d,f;if((e==null?null:e)===(this==null?null:this)){return true}if(!(e!=null&&mm(e.tI,17))){return false}f=nm(e,17);if(this.wb()!=f.wb()){return false}c=iG(new gG(),this);d=f.db();while(c.a<c.c.wb()){a=lG(c);b=lG(d);if(!(a==null?b==null:mk(a,b))){return false}}return true}
function vG(){var a,b,c;b=1;a=iG(new gG(),this);while(a.a<a.c.wb()){c=lG(a);b=31*b+(c==null?0:ok(c));b=~~b}return b}
function wG(a,b){throw dD(new cD(),sc+a+tc+b)}
function xG(){return iG(new gG(),this)}
function yG(a){throw new mE()}
function fG(){}
_=fG.prototype=new pE();_.v=sG;_.u=rG;_.eQ=uG;_.hC=vG;_.db=xG;_.nb=yG;_.tI=39;function wH(a){a.a=dm(bn,0,0,0,0);a.b=0;return a}
function yH(b,a){gm(b.a,b.b++,a);return true}
function xH(c,a,b){if(a<0||a>c.b){wG(a,c.b)}c.a.splice(a,0,b);++c.b}
function AH(b,a){tG(a,b.b);return b.a[a]}
function BH(c,b,a){for(;a<c.b;++a){if(hJ(b,c.a[a])){return a}}return -1}
function CH(c,a){var b;b=(tG(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function DH(f,e){var a;a=BH(f,e,0);if(a==-1){return false}CH(f,a);return true}
function EH(d,a,b){var c;c=(tG(a,d.b),d.a[a]);gm(d.a,a,b);return c}
function FH(e,d){var c,a,b;if(d.length<e.b){d=(a=d,b=bm(0,e.b),em(a.aC,a.tI,a.qI,b),b)}for(c=0;c<e.b;++c){gm(d,c,e.a[c])}if(d.length>e.b){gm(d,e.b,null)}return d}
function bI(a){return gm(this.a,this.b++,a),true}
function aI(a,b){xH(this,a,b)}
function cI(a){return BH(this,a,0)!=-1}
function dI(a){return tG(a,this.b),this.a[a]}
function eI(a){return CH(this,a)}
function fI(){return this.b}
function vH(){}
_=vH.prototype=new fG();_.v=bI;_.u=aI;_.w=cI;_.ab=dI;_.nb=eI;_.wb=fI;_.tI=40;_.a=null;_.b=0;function tr(a){a.a=dm(bn,0,0,0,0);a.b=0;return a}
function vr(d,c){var a,b;for(b=iG(new gG(),d);b.a<b.c.wb();){a=nm(lG(b),8);a.gb(c)}}
function sr(){}
_=sr.prototype=new vH();_.tI=41;function rs(){rs=iJ;ys=new gs();Bs=new gs();As=new gs();zs=new gs();Cs=new gs();Ds=new gs();Es=new gs()}
function ps(a){rs();a.f=CA(new tA(),a);a.e=$doc.createElement(te);a.d=$doc.createElement(ue);a.e.appendChild(a.d);a.t=a.e;a.b=(iw(),jw);a.c=(pw(),qw);a.e[ve]=0;a.e[we]=0;return a}
function qs(c,d,a){var b;if(a==ys){if(d==c.a){return}else if(c.a){throw new CC()}}gB(d);DA(c.f,d);if(a==ys){c.a=d}b=ks(new is(),a);d.r=b;us(d,c.b);vs(d,c.c);ss(c);iB(d,c)}
function ss(q){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;a=q.d;while(gq(a)>0){a.removeChild(hq(a,0))}m=1;d=1;for(g=wA(new uA(),q.f);g.a<g.b.c-1;){c=yA(g);e=c.r.a;if(e==Cs||e==Ds){++m}else if(e==zs||e==Es||e==Bs||e==As){++d}}n=dm(Fm,0,21,m,0);for(f=0;f<m;++f){n[f]=new ms();n[f].b=$doc.createElement(xe);a.appendChild(n[f].b)}i=0;j=d-1;k=0;o=m-1;b=null;for(g=wA(new uA(),q.f);g.a<g.b.c-1;){c=yA(g);h=c.r;p=$doc.createElement(Ce);h.c=p;h.c[uc]=h.b;h.c.style[vc]=h.d;h.c[De]=zd;h.c[he]=zd;if(h.a==Cs){jq(n[k].b,p,n[k].a);p.appendChild(c.D());p[wc]=j-i+1;++k}else if(h.a==Ds){jq(n[o].b,p,n[o].a);p.appendChild(c.D());p[wc]=j-i+1;--o}else if(h.a==ys){b=p}else if(ws(h.a)){l=n[k];jq(l.b,p,l.a++);p.appendChild(c.D());p[xc]=o-k+1;++i}else if(xs(h.a)){l=n[k];jq(l.b,p,l.a);p.appendChild(c.D());p[xc]=o-k+1;--j}}if(q.a){l=n[k];jq(l.b,b,l.a);b.appendChild(q.a.D())}}
function ts(b,c){var a;a=Br(b,c);if(a){if(c==b.a){b.a=null}ss(b)}return a}
function us(c,a){var b;b=c.r;b.b=a.a;if(b.c){b.c[uc]=a.a}}
function vs(c,a){var b;b=c.r;b.d=a.a;if(b.c){b.c.style[vc]=a.a}}
function ws(a){if(a==Bs){return true}return a==Es}
function xs(a){if(a==As){return true}return a==zs}
function Fs(a){return ts(this,a)}
function fs(){}
_=fs.prototype=new pr();_.ob=Fs;_.tI=42;_.a=null;var ys,zs,As,Bs,Cs,Ds,Es;function gs(){}
_=gs.prototype=new mD();_.tI=0;function ks(b,a){b.b=(iw(),jw).a;b.d=(pw(),qw).a;b.a=a;return b}
function is(){}
_=is.prototype=new mD();_.tI=0;_.a=null;_.c=null;function ms(){}
_=ms.prototype=new mD();_.tI=43;_.a=0;_.b=null;function gv(d,c,b){var a;hv(d,c);if(b<0){throw dD(new cD(),zc+b+Ac+b)}a=(hv(d,c),d.a.rows[c].cells.length);if(a<=b){throw dD(new cD(),Bc+b+Cc+(hv(d,c),d.a.rows[c].cells.length))}}
function hv(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw dD(new cD(),Dc+a+Ec+b)}}
function jv(d){var a,b,c;for(c=0;c<d.a.rows.length;++c){for(b=0;b<(hv(d,c),d.a.rows[c].cells.length);++b){a=ov(d,c,b);if(a){sv(d,a)}}}}
function ov(e,d,b){var a,c;c=e.b.a.a.rows[d].cells[b];a=bl(c);if(!a){return null}else{return Du(e.e,a)}}
function pv(d,b,a){var c,e;e=d.a.rows[b];c=$doc.createElement(Ce);jq(e,c,a)}
function qv(b,a){var c;if(a!=b.a.rows.length){hv(b,a)}c=$doc.createElement(xe);jq(b.a,c,a);return a}
function rv(d,c,a){var b,e;b=bl(c);e=null;if(b){e=Du(d.e,b)}if(e){sv(d,e);return true}else{if(a){c.innerHTML=zd}return false}}
function sv(b,c){var a;if(c.s!=b){return false}iB(c,null);a=c.D();dl(a).removeChild(a);av(b.e,a);return true}
function wv(b,a){b.c=a;ku(b.c)}
function xv(f,d,a,c){var e,b;gt(f,d,a);e=(b=f.b.a.a.rows[d].cells[a],rv(f,b,c==null),b);if(c!=null){e.innerHTML=c||zd}}
function yv(e,c,a,f){var d,b;gt(e,c,a);if(f){gB(f);d=(b=e.b.a.a.rows[c].cells[a],rv(e,b,true),b);Eu(e.e,f);d.appendChild(f.D());iB(f,e)}}
function zv(){return ru(new pu(),this.e)}
function Av(a){wq(a)}
function Bv(a){return sv(this,a)}
function Ft(){}
_=Ft.prototype=new ux();_.db=zv;_.fb=Av;_.ob=Bv;_.tI=44;_.a=null;_.b=null;_.c=null;_.d=null;function et(a){a.e=Bu(new ou());a.d=$doc.createElement(te);a.a=$doc.createElement(ue);a.d.appendChild(a.a);a.t=a.d;a.b=ct(new bt(),a);wv(a,iu(new hu(),a));return a}
function gt(e,d,b){var a,c;ht(e,d);if(b<0){throw dD(new cD(),Fc+b)}a=(hv(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){it(e.a,d,c)}}
function ht(d,b){var a,c;if(b<0){throw dD(new cD(),ad+b)}c=d.a.rows.length;for(a=c;a<=b;++a){qv(d,a)}}
function it(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(Ce);e.appendChild(a)}}
function at(){}
_=at.prototype=new Ft();_.tI=45;function bu(e,b,a,c){var d;gt(e.a,b,a);d=e.a.a.rows[b].cells[a];oA(d,c,true)}
function eu(c,b,a){gv(c.a,b,a);return c.a.a.rows[b].cells[a]}
function gu(d,b,a,c){gt(d.a,b,a);d.a.a.rows[b].cells[a][ab]=c}
function au(){}
_=au.prototype=new mD();_.tI=0;_.a=null;function ct(b,a){b.a=a;return b}
function bt(){}
_=bt.prototype=new au();_.tI=0;function kt(a){a.a=dm(bn,0,0,0,0);a.b=0;return a}
function nt(c){var a,b;for(b=iG(new gG(),c);b.a<b.c.wb();){a=nm(lG(b),9);bA(a.a,Cb)}}
function mt(b,a){switch(wq(a)){case 2048:nt(b);break;case 4096:ot(b);}}
function ot(c){var a,b;for(b=iG(new gG(),c);b.a<b.c.wb();){a=nm(lG(b),9);eA(a.a,Cb)}}
function jt(){}
_=jt.prototype=new vH();_.tI=46;function gx(b,a){b.t=$doc.createElement(jf);b.t[ab]=bd;fl(b.t,a);return b}
function jx(a){wq(a)}
function fx(){}
_=fx.prototype=new sA();_.fb=jx;_.tI=47;function Cv(a){a.t=$doc.createElement(jf);a.t[ab]=cd;return a}
function Ev(b,a){Cv(b);b.t.innerHTML=a||zd;return b}
function Dv(b,a){b.t=a;return b}
function Et(){}
_=Et.prototype=new fx();_.tI=48;function iu(b,a){b.b=a;return b}
function ku(a){if(!a.a){a.a=$doc.createElement(ed);jq(a.b.d,a.a,0);a.a.appendChild($doc.createElement(fd))}}
function hu(){}
_=hu.prototype=new mD();_.tI=0;_.a=null;_.b=null;function Bu(a){a.b=wH(new vH());return a}
function Du(d,b){var c,a;c=(a=b[gd],a==null?-1:a);if(c<0){return null}return nm(AH(d.b,c),10)}
function Eu(b,c){var a;if(!b.a){a=b.b.b;yH(b.b,c)}else{a=b.a.a;EH(b.b,a,c);b.a=b.a.b}c.D()[gd]=a}
function av(d,b){var c,a;c=(a=b[gd],a==null?-1:a);b[gd]=null;EH(d.b,c,null);d.a=yu(new xu(),c,d.a)}
function ou(){}
_=ou.prototype=new mD();_.tI=0;_.a=null;function ru(b,a){b.c=a;tu(b);return b}
function tu(a){while(++a.b<a.c.b.b){if(AH(a.c.b,a.b)!=null){return}}}
function uu(){return this.b<this.c.b.b}
function vu(){var a;if(this.b>=this.c.b.b){throw new bJ()}a=nm(AH(this.c.b,this.b),10);this.a=this.b;tu(this);return a}
function wu(){var a;if(this.a<0){throw new FC()}a=nm(AH(this.c.b,this.a),10);gB(a);this.a=-1}
function pu(){}
_=pu.prototype=new mD();_.bb=uu;_.eb=vu;_.mb=wu;_.tI=0;_.a=-1;_.b=-1;_.c=null;function yu(c,a,b){c.a=a;c.b=b;return c}
function xu(){}
_=xu.prototype=new mD();_.tI=0;_.a=0;_.b=null;function iw(){iw=iJ;gw(new fw(),hd);kw=gw(new fw(),kg);gw(new fw(),id);jw=kw}
var jw,kw;function gw(b,a){b.a=a;return b}
function fw(){}
_=fw.prototype=new mD();_.tI=0;_.a=null;function pw(){pw=iJ;nw(new mw(),re);nw(new mw(),qe);qw=nw(new mw(),bb)}
var qw;function nw(a,b){a.a=b;return a}
function mw(){}
_=mw.prototype=new mD();_.tI=0;_.a=null;function Aw(){Aw=iJ;uF(new kI())}
function zw(a,b){Aw();xw(new ww(),a,b);a.t[ab]=jd;return a}
function Bw(a){wq(a)}
function tw(){}
_=tw.prototype=new sA();_.fb=Bw;_.tI=49;function uw(){}
_=uw.prototype=new mD();_.tI=0;function xw(b,a,c){hB(a,$doc.createElement(kd));Bo(a.t,229501|(a.t.__eventBits||0));a.t.src=c;return b}
function ww(){}
_=ww.prototype=new uw();_.tI=0;function Ew(a){a.a=dm(bn,0,0,0,0);a.b=0;return a}
function ax(b){var a;for(a=iG(new gG(),b);a.a<a.c.wb();){nm(lG(a),11)}}
function bx(d,a){var b,c;for(c=iG(new gG(),d);c.a<c.c.wb();){b=nm(lG(c),11);di(b,a)}}
function cx(b){var a;for(a=iG(new gG(),b);a.a<a.c.wb();){nm(lG(a),11)}}
function dx(b,a){(a.shiftKey?1:0)|(a.metaKey?8:0)|(a.ctrlKey?2:0)|(a.altKey?4:0);switch(wq(a)){case 128:ax(b,(a.which||(a.keyCode||0))&65535);break;case 512:cx(b,(a.which||(a.keyCode||0))&65535);break;case 256:bx(b,(a.which||(a.keyCode||0))&65535);}}
function Dw(){}
_=Dw.prototype=new vH();_.tI=50;function lx(a){a.a=dm(bn,0,0,0,0);a.b=0;return a}
function nx(c){var a,b;for(b=iG(new gG(),c);b.a<b.c.wb();){a=nm(lG(b),12);bA(a.a,rf)}}
function ox(c){var a,b;for(b=iG(new gG(),c);b.a<b.c.wb();){a=nm(lG(b),12);bA(a.a,qf)}}
function px(e,c,a){var b,d,f;d=ni(c);aq(a)-yk(d)+(parseInt(d[ld])||0)+$doc.body.scrollLeft;bq(a)-zk(d)+(parseInt(d[md])||0)+$doc.body.scrollTop;switch(wq(a)){case 4:nx(e);break;case 8:sx(e);break;case 64:rx(e);break;case 16:b=eq(a);if(!b||!Ak(d,b)){ox(e)}break;case 32:f=fq(a);if(!f||!Ak(d,f)){qx(e)}}}
function qx(c){var a,b;for(b=iG(new gG(),c);b.a<b.c.wb();){a=nm(lG(b),12);eA(a.a,rf);eA(a.a,qf)}}
function rx(b){var a;for(a=iG(new gG(),b);a.a<a.c.wb();){nm(lG(a),12)}}
function sx(c){var a,b;for(b=iG(new gG(),c);b.a<b.c.wb();){a=nm(lG(b),12);eA(a.a,rf)}}
function kx(){}
_=kx.prototype=new vH();_.tI=51;function yC(a){return (this==null?null:this)===(a==null?null:a)}
function zC(){return this.$H||(this.$H=++uk)}
function wC(){}
_=wC.prototype=new mD();_.eQ=yC;_.hC=zC;_.tI=52;function Ex(){Ex=iJ;Fx=(Ex(),new Cx());ay=new Cx()}
function Cx(){}
_=Cx.prototype=new wC();_.tI=53;var Fx,ay;function gy(b,a){b.a=a;return b}
function iy(a){if(!a.d){fr((dz(),gz(null)),a.a)}a.a.t.style[nd]=pd;a.a.t.style[sb]=qd}
function jy(a){if(a.d){a.a.t.style[rc]=vb;if(a.a.o!=-1){sy(a.a,a.a.l,a.a.o)}dr((dz(),gz(null)),a.a)}else{fr((dz(),gz(null)),a.a)}a.a.t.style[sb]=qd}
function ly(f,d){var a,b,c,e,g,h;if(!f.d){d=1-d}g=0;c=0;e=0;a=0;b=~~Math.max(Math.min(d*f.b,2147483647),-2147483648);h=~~Math.max(Math.min(d*f.c,2147483647),-2147483648);if(f.a.h==(Ex(),Fx)){g=f.b-b>>1;c=f.c-h>>1}else f.a.h==ay;e=c+h;a=g+b;f.a.t.style[nd]=rd+g+sd+e+sd+a+sd+c+td}
function my(c,b){var a;Aj(c);a=c.a.k;if(c.a.h==(Ex(),ay)&&!b){a=false}c.d=b;if(a){if(b){c.a.t.style[rc]=vb;if(c.a.o!=-1){sy(c.a,c.a.l,c.a.o)}c.a.t.style[nd]=ud;dr((dz(),gz(null)),c.a)}Eo(dy(new cy(),c))}else{jy(c)}}
function by(){}
_=by.prototype=new uj();_.tI=54;_.a=null;_.b=0;_.c=-1;_.d=false;function dy(b,a){b.a=a;return b}
function cy(){}
_=cy.prototype=new mD();_.tI=55;_.a=null;function dz(){dz=iJ;hz=lI(new kI());iz=pI(new oI())}
function cz(b,a){dz();b.f=CA(new tA(),b);b.t=a;eB(b);return b}
function ez(){var b,a;dz();var c,d;for(d=(b=yE(new wE(),nH(iz.a).b.a),CG(new BG(),b));kG(d.a.a);){c=nm((a=AE(d.a),a.E()),10);if(c.q){c.hb()}}}
function gz(b){dz();var a,c;c=nm(zF(hz,b),13);if(c){return c}a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(hz.d==0){tp(new By())}if(!a){c=az(new Fy())}else{c=cz(new Ay(),a)}FF(hz,b,c);qI(iz,c);return c}
function Ay(){}
_=Ay.prototype=new cr();_.tI=56;var hz,iz;function Dy(){ez()}
function Ey(){return null}
function By(){}
_=By.prototype=new mD();_.kb=Dy;_.lb=Ey;_.tI=57;function bz(){bz=iJ;dz()}
function az(a){bz();cz(a,$doc.body);return a}
function Fy(){}
_=Fy.prototype=new Ay();_.tI=58;function mz(b,a){b.c=a;b.a=!!b.c.p;return b}
function oz(){return this.a}
function pz(){if(!this.a||!this.c.p){throw new bJ()}this.a=false;return this.b=this.c.p}
function qz(){if(this.b){this.c.ob(this.b)}}
function kz(){}
_=kz.prototype=new mD();_.bb=oz;_.eb=pz;_.mb=qz;_.tI=0;_.b=null;_.c=null;function CA(b,a){b.b=a;b.a=dm(an,0,10,4,0);return b}
function DA(a,b){aB(a,b,a.c)}
function FA(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]==c){return a}}return -1}
function aB(d,e,a){var b,c;if(a<0||a>d.c){throw new cD()}if(d.c==d.a.length){c=dm(an,0,10,d.a.length*2,0);for(b=0;b<d.a.length;++b){gm(c,b,d.a[b])}d.a=c}++d.c;for(b=d.c-1;b>a;--b){gm(d.a,b,d.a[b-1])}gm(d.a,a,e)}
function bB(c,b){var a;if(b<0||b>=c.c){throw new cD()}--c.c;for(a=b;a<c.c;++a){gm(c.a,a,c.a[a+1])}gm(c.a,c.c,null)}
function cB(b,c){var a;a=FA(b,c);if(a==-1){throw new bJ()}bB(b,a)}
function tA(){}
_=tA.prototype=new mD();_.tI=0;_.a=null;_.b=null;_.c=0;function wA(b,a){b.b=a;return b}
function yA(a){if(a.a>=a.b.c){throw new bJ()}return a.b.a[++a.a]}
function zA(){return this.a<this.b.c-1}
function AA(){return yA(this)}
function BA(){if(this.a<0||this.a>=this.b.c){throw new FC()}this.b.b.ob(this.b.a[this.a--])}
function uA(){}
_=uA.prototype=new mD();_.bb=zA;_.eb=AA;_.mb=BA;_.tI=0;_.a=-1;_.b=null;function aC(){aC=iJ;bC=BB(new AB());cC=bC?(aC(),new pB()):bC}
function dC(a,b){a.tabIndex=b}
function pB(){}
_=pB.prototype=new mD();_.sb=dC;_.tI=0;var bC,cC;function tB(){tB=iJ;aC()}
function uB(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function vB(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function wB(c){var a=$doc.createElement(jf);var b=c.x();b.addEventListener(yb,c.a,false);b.addEventListener(Cb,c.b,false);a.addEventListener(dc,c.c,false);a.appendChild(b);return a}
function yB(){var a=$doc.createElement(vd);a.type=wd;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=vb;return a}
function zB(a,b){a.firstChild.tabIndex=b}
function qB(){}
_=qB.prototype=new pB();_.x=yB;_.sb=zB;_.tI=0;function CB(){CB=iJ;tB()}
function BB(a){CB();a.a=uB();a.b=vB();a.c=DB();return a}
function DB(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function EB(){var a=$doc.createElement(vd);a.type=wd;a.style.opacity=0;a.style.zIndex=-1;a.style.height=xd;a.style.width=xd;a.style.overflow=Af;a.style.position=vb;return a}
function AB(){}
_=AB.prototype=new qB();_.x=EB;_.tI=0;function jC(){}
_=jC.prototype=new qD();_.tI=60;function qC(c,a){var b;b=new mC();return b}
function mC(){}
_=mC.prototype=new mD();_.tI=0;function nC(){}
_=nC.prototype=new qD();_.tI=63;function CC(){}
_=CC.prototype=new qD();_.tI=64;function FC(){}
_=FC.prototype=new qD();_.tI=65;function dD(b,a){return b}
function cD(){}
_=cD.prototype=new qD();_.tI=66;function jD(){}
_=jD.prototype=new qD();_.tI=67;function ED(b,a){if(!(a!=null&&mm(a.tI,1))){return false}return String(b)==a}
function cE(b,a){return b.substr(a,b.length-a)}
function eE(c){if(c.length==0||c[0]>se&&c[c.length-1]>se){return c}var a=c.replace(/^(\s*)/,zd);var b=a.replace(/\s*$/,zd);return b}
function gE(a){return ED(this,a)}
function iE(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function jE(){return AD(this)}
_=String.prototype;_.eQ=gE;_.hC=jE;_.tI=2;function vD(){vD=iJ;wD={};zD={}}
function xD(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function AD(c){vD();var a=yd+c;var b=zD[a];if(b!=null){return b}b=wD[a];if(b==null){b=xD(c)}BD();return zD[a]=b}
function BD(){if(yD==256){wD=zD;zD={};yD=0}++yD}
var wD,yD=0,zD;function mE(){}
_=mE.prototype=new qD();_.tI=70;function nH(b){var a;a=FE(new vE(),b);return cH(new AG(),b,a)}
function oH(d,c){var a,b;for(b=yE(new wE(),FE(new vE(),c).a);kG(b.a);){a=b.b=nm(lG(b.a),16);FF(d,a.E(),a.F())}}
function pH(c){var a,b,d,e,f;if((c==null?null:c)===(this==null?null:this)){return true}if(!(c!=null&&mm(c.tI,18))){return false}e=nm(c,18);if(nm(this,18).d!=e.d){return false}for(b=yE(new wE(),FE(new vE(),e).a);kG(b.a);){a=b.b=nm(lG(b.a),16);d=a.E();f=a.F();if(!(d==null?nm(this,18).c:d!=null&&mm(d.tI,1)?BF(nm(this,18),nm(d,1)):AF(nm(this,18),d,~~ok(d)))){return false}if(!hJ(f,d==null?nm(this,18).b:d!=null&&mm(d.tI,1)?nm(this,18).e[yd+nm(d,1)]:xF(nm(this,18),d,~~ok(d)))){return false}}return true}
function qH(){var a,b,c;c=0;for(b=yE(new wE(),FE(new vE(),nm(this,18)).a);kG(b.a);){a=b.b=nm(lG(b.a),16);c+=a.hC();c=~~c}return c}
function zG(){}
_=zG.prototype=new mD();_.eQ=pH;_.hC=qH;_.tI=0;function sF(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.v(a[f])}}}}
function tF(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=qF(e,c.substring(1));a.v(b)}}}
function uF(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function wF(b,a){return a==null?b.c:a!=null&&mm(a.tI,1)?BF(b,nm(a,1)):AF(b,a,~~ok(a))}
function zF(b,a){return a==null?b.b:a!=null&&mm(a.tI,1)?b.e[yd+nm(a,1)]:xF(b,a,~~ok(a))}
function xF(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.E();if(h.A(g,d)){return c.F()}}}return null}
function AF(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.E();if(h.A(g,d)){return true}}}return false}
function BF(b,a){return yd+a in b.e}
function FF(b,a,c){return a==null?DF(b,c):a!=null&&mm(a.tI,1)?EF(b,nm(a,1),c):CF(b,a,c,~~ok(a))}
function CF(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.E();if(i.A(g,d)){var h=c.F();c.tb(j);return h}}}else{a=i.a[e]=[]}var c=AI(new zI(),g,j);a.push(c);++i.d;return null}
function DF(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function EF(d,a,e){var b,c=d.e;a=yd+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function dG(b,a){return a==null?bG(b):a!=null&&mm(a.tI,1)?cG(b,nm(a,1)):aG(b,a,~~ok(a))}
function aG(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.E();if(h.A(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.F()}}}return null}
function bG(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function cG(d,a){var b,c=d.e;a=yd+a;if(a in c){b=c[a];--d.d;delete c[a]}return b}
function eG(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&mk(a,b)}
function uE(){}
_=uE.prototype=new zG();_.A=eG;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function tH(b){var a,c,d;if((b==null?null:b)===(this==null?null:this)){return true}if(!(b!=null&&mm(b.tI,19))){return false}c=nm(b,19);if(c.wb()!=this.wb()){return false}for(a=c.db();a.bb();){d=a.eb();if(!this.w(d)){return false}}return true}
function uH(){var a,b,c;a=0;for(b=this.db();b.bb();){c=b.eb();if(c!=null){a+=ok(c);a=~~a}}return a}
function rH(){}
_=rH.prototype=new pE();_.eQ=tH;_.hC=uH;_.tI=71;function FE(b,a){b.a=a;return b}
function bF(d,c){var a,b,e;if(c!=null&&mm(c.tI,16)){a=nm(c,16);b=a.E();if(wF(d.a,b)){e=zF(d.a,b);return nI(a.F(),e)}}return false}
function cF(a){return bF(this,a)}
function dF(){return yE(new wE(),this.a)}
function eF(){return this.a.d}
function vE(){}
_=vE.prototype=new rH();_.w=cF;_.db=dF;_.wb=eF;_.tI=72;_.a=null;function yE(c,b){var a;c.c=b;a=wH(new vH());if(c.c.c){yH(a,gF(new fF(),c.c))}tF(c.c,a);sF(c.c,a);c.a=iG(new gG(),a);return c}
function AE(a){return a.b=nm(lG(a.a),16)}
function BE(a){if(!a.b){throw new FC()}else{mG(a.a);dG(a.c,a.b.E());a.b=null}}
function CE(){return kG(this.a)}
function DE(){return this.b=nm(lG(this.a),16)}
function EE(){BE(this)}
function wE(){}
_=wE.prototype=new mD();_.bb=CE;_.eb=DE;_.mb=EE;_.tI=0;_.a=null;_.b=null;_.c=null;function kH(b){var a;if(b!=null&&mm(b.tI,16)){a=nm(b,16);if(hJ(this.E(),a.E())&&hJ(this.F(),a.F())){return true}}return false}
function lH(){var a,b;a=0;b=0;if(this.E()!=null){a=ok(this.E())}if(this.F()!=null){b=ok(this.F())}return a^b}
function iH(){}
_=iH.prototype=new mD();_.eQ=kH;_.hC=lH;_.tI=73;function gF(b,a){b.a=a;return b}
function iF(){return null}
function jF(){return this.a.b}
function kF(a){return DF(this.a,a)}
function fF(){}
_=fF.prototype=new iH();_.E=iF;_.F=jF;_.tb=kF;_.tI=74;_.a=null;function mF(c,a,b){c.b=b;c.a=a;return c}
function oF(){return this.a}
function pF(){return this.b.e[yd+this.a]}
function qF(b,a){return mF(new lF(),a,b)}
function rF(a){return EF(this.b,this.a,a)}
function lF(){}
_=lF.prototype=new iH();_.E=oF;_.F=pF;_.tb=rF;_.tI=75;_.a=null;_.b=null;function iG(b,a){b.c=a;return b}
function kG(a){return a.a<a.c.wb()}
function lG(a){if(a.a>=a.c.wb()){throw new bJ()}return a.c.ab(a.b=a.a++)}
function mG(a){if(a.b<0){throw new FC()}a.c.nb(a.b);a.a=a.b;a.b=-1}
function nG(){return this.a<this.c.wb()}
function oG(){return lG(this)}
function pG(){mG(this)}
function gG(){}
_=gG.prototype=new mD();_.bb=nG;_.eb=oG;_.mb=pG;_.tI=0;_.a=0;_.b=-1;_.c=null;function cH(b,a,c){b.a=a;b.b=c;return b}
function fH(a){return wF(this.a,a)}
function gH(){var a;return a=yE(new wE(),this.b.a),CG(new BG(),a)}
function hH(){return this.b.a.d}
function AG(){}
_=AG.prototype=new rH();_.w=fH;_.db=gH;_.wb=hH;_.tI=76;_.a=null;_.b=null;function CG(a,b){a.a=b;return a}
function FG(){return kG(this.a.a)}
function aH(){var a;return a=AE(this.a),a.E()}
function bH(){BE(this.a)}
function BG(){}
_=BG.prototype=new mD();_.bb=FG;_.eb=aH;_.mb=bH;_.tI=0;_.a=null;function lI(a){uF(a);return a}
function nI(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&mk(a,b)}
function kI(){}
_=kI.prototype=new uE();_.tI=77;function pI(a){a.a=lI(new kI());return a}
function qI(c,a){var b;b=FF(c.a,a,c);return b==null}
function sI(b){var a;return a=FF(this.a,b,this),a==null}
function tI(a){return wF(this.a,a)}
function uI(){var a;return a=yE(new wE(),nH(this.a).b.a),CG(new BG(),a)}
function vI(){return this.a.d}
function oI(){}
_=oI.prototype=new rH();_.v=sI;_.w=tI;_.db=uI;_.wb=vI;_.tI=78;_.a=null;function AI(b,a,c){b.a=a;b.b=c;return b}
function CI(){return this.a}
function DI(){return this.b}
function FI(b){var a;a=this.b;this.b=b;return a}
function zI(){}
_=zI.prototype=new iH();_.E=CI;_.F=DI;_.tb=FI;_.tI=79;_.a=null;_.b=null;function bJ(){}
_=bJ.prototype=new qD();_.tI=80;function hJ(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&mk(a,b)}
function hC(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Ad,evtGroup:Bd,millis:(new Date()).getTime(),type:Cd,className:Dd});tj(rj(new pj()))}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{hC()}catch(a){b(d)}else{hC()}}
function iJ(){}
var cn=qC(Ed,Fd),bn=qC(Ed,ae),Em=qC(be,ce),Fm=qC(de,fe),an=qC(de,ge);$stats && $stats({moduleName:'com.google.code.p.gwtcsample.GWTCSample',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_google_code_p_gwtcsample_GWTCSample) {  var __gwt_initHandlers = com_google_code_p_gwtcsample_GWTCSample.__gwt_initHandlers;  com_google_code_p_gwtcsample_GWTCSample.onScriptLoad(gwtOnLoad);}})();