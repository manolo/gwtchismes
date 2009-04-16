(function(){var $gwt_version = "1.5.3";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.google.code.p.gwtcsample.GWTCSample',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var gf='',qe=' ',wc=' must be non-negative: ',hf='&nbsp;',zc=', Column size: ',Bc=', Row size: ',qc=', Size: ',F='-',gg='...',tf='0px',De='100%',ee='998',wd=':',sd='<div><\/div>',ug='Actual month',ae='Animation;',mc='CSS1Compat',Cc='Cannot create a column with a negative index: ',Dc='Cannot create a row with a negative index: ',xe='Center',eg='Change',Bf='Checkin',Ef='Checkout',pb='Close',Cg='Close dialog',vc='Column ',xc='Column index: ',qf='DIV',ic='DOMMouseScroll',ce='DockPanel$TmpRow;',ne='GWTCAlert',nc='GWTCBox',cc='GWTCBox-blue',xb='GWTCBox-grey',ff='GWTCBtn',kf='GWTCBtn-c',lf='GWTCBtn-focus',ef='GWTCBtn-img',jf='GWTCBtn-l',cf='GWTCBtn-ml',mf='GWTCBtn-r',df='GWTCBtn-text',rf='GWTCGlassPanel',dd='GWTCPopupBox',vf='GWTCWait',nb='Help',Ag='Help dialog',pc='Index: ',Ce='Inner',cg='Interval',we='Left',vd='Macintosh',lc='MouseEvents',cb='Next',pg='Next month',wg='Next year',ib='Next-Y',ag='Nights',ge='OK',Ed='Object;',qb='Please wait ...',eb='Prev',kb='Prev-Y',rg='Previous month',yg='Previous year',ye='Right',Ac='Row index: ',kg='Select your checkin date',mg='Select your checkout date',Dd='String;',gb='Today',de='Widget;',Fd='[Lcom.google.gwt.animation.client.',be='[Lcom.google.gwt.user.client.ui.',Cd='[Ljava.lang.',cd='__widgetID',md='absolute',rc='align',yc='auto',ub='blur',pe='bottom',od='box',ke='btnCell',af='button',ue='cellPadding',te='cellSpacing',ed='center',vb='change',ab='className',wb='click',td='clip',bd='col',tc='colSpan',ad='colgroup',Bd='com.google.code.p.gwtcsample.client.GWTCSample',jc='contextmenu',yb='dblclick',ud='display',tg='div',pf='down',gc='error',zb='focus',bf='gwt-Button',ze='gwt-DecoratorPanel',Fc='gwt-HTML',gd='gwt-Image',Ec='gwt-Label',bb='gwt-PopupPanel',me='gwtc-alert-rndbutton',fe='height',zf='hidden',kc='html',xf='image',he='images/button/dialog-ok.gif',uf='images/gwtc-wait-loading.gif',hd='img',wf='imgCell',jg='key.calendar.checkin.title',lg='key.calendar.checkout.title',ng='key.calendar.help',dg='key.change',Af='key.checkin',fg='key.checkin.button',Cf='key.checkout',hg='key.checkout.button',ob='key.close',Bg='key.close.title',lb='key.help',zg='key.help.title',bg='key.interval',Dg='key.next.month',og='key.next.month.title',hb='key.next.year',vg='key.next.year.title',Ff='key.nights',db='key.prev.month',qg='key.prev.month.title',jb='key.prev.year',xg='key.prev.year.title',fb='key.today',sg='key.today.title',Ab='keydown',Bb='keypress',Cb='keyup',sf='left',Db='load',Eb='losecapture',oe='middle',yd='moduleStartup',Fb='mousedown',ac='mousemove',bc='mouseout',dc='mouseover',ec='mouseup',hc='mousewheel',je='msgCell',nf='none',rb='offsetHeight',sb='offsetWidth',le='okButton',Ad='onModuleLoadStart',of='over',tb='overflow',ie='panel',mb='popupContent',oc='position',Df='px',qd='px)',pd='px, ',nd='rect(',rd='rect(0px, 0px, 0px, 0px)',kd='rect(auto, auto, auto, auto)',fd='right',uc='rowSpan',fc='scroll',id='scrollLeft',jd='scrollTop',xd='startup',Ee='submit',re='table',se='tbody',Ae='td',ig='top',ve='tr',Fe='type',sc='verticalAlign',yf='visibility',ld='visible',Be='width',zd='zIndex';var _;function nD(a){return (this==null?null:this)===(a==null?null:a)}
function oD(){return this.$H||(this.$H=++wk)}
function lD(){}
_=lD.prototype={};_.eQ=nD;_.hC=oD;_.tM=hJ;_.tI=1;function hA(b,a){ji(b,sA(ni(b))+F+a)}
function iA(b,a){uA(b.D(),a,true)}
function kA(b,a){oi(b,sA(ni(b))+F+a)}
function mA(b,a){if(b.t){nA(b.t,a)}b.t=a}
function nA(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function rA(){return this.t}
function sA(a){var b,c;b=a[ab]==null?null:String(a[ab]);c=b.indexOf(hE(32));if(c>=0){return b.substr(0,c-0)}return b}
function tA(a){this.D().style[fe]=a}
function uA(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new pD()}j=dE(j);if(j.length==0){throw new BC()}i=c[ab]==null?null:String(c[ab]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=qe}c[ab]=i+j}}else{if(e!=-1){b=dE(i.substr(0,e-0));d=dE(bE(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+qe+d}c[ab]=h}}}
function vA(a){this.D()[ab]=a}
function xA(a){this.D().style[Be]=a}
function gA(){}
_=gA.prototype=new lD();_.D=rA;_.rb=tA;_.sb=vA;_.vb=xA;_.tI=3;_.t=null;function kB(a){if(a.q){throw new EC()}a.q=true;a.D().__listener=a;a.x();a.jb()}
function lB(a){if(!a.q){throw new EC()}try{a.kb()}finally{a.y();a.D().__listener=null;a.q=false}}
function mB(a){if(a.s){a.s.pb(a)}else if(a.s){throw new EC()}}
function nB(b,a){if(b.q){b.t.__listener=null}mA(b,a);if(b.q){b.t.__listener=b}}
function oB(c,b){var a;a=c.s;if(!b){if(!!a&&a.q){c.ib()}c.s=null}else{if(a){throw new EC()}c.s=b;if(b.q){kB(c)}}}
function pB(){}
function qB(){}
function rB(a){}
function sB(){lB(this)}
function tB(){}
function uB(){}
function yA(){}
_=yA.prototype=new gA();_.x=pB;_.y=qB;_.gb=rB;_.ib=sB;_.jb=tB;_.kb=uB;_.tI=4;_.q=false;_.r=null;_.s=null;function Ax(b){var a;a=b.eb();while(a.bb()){a.fb();a.nb()}}
function Cx(){var a,b;for(b=this.eb();b.bb();){a=pm(b.fb(),10);kB(a)}}
function Dx(){var a,b;for(b=this.eb();b.bb();){a=pm(b.fb(),10);a.ib()}}
function Ex(){}
function Fx(){}
function zx(){}
_=zx.prototype=new yA();_.x=Cx;_.y=Dx;_.jb=Ex;_.kb=Fx;_.tI=5;function xz(a,b){if(a.p){throw new EC()}a.ub(b)}
function zz(a,b){if(b==a.p){return}if(b){mB(b)}if(a.p){a.pb(a.p)}a.p=b;if(b){a.C().appendChild(a.p.D());oB(b,a)}}
function Az(){return this.t}
function Bz(){return sz(new qz(),this)}
function Cz(a){if(this.p!=a){return false}oB(a,null);this.C().removeChild(a.D());this.p=null;return true}
function Dz(a){zz(this,a)}
function pz(){}
_=pz.prototype=new zx();_.C=Az;_.eb=Bz;_.pb=Cz;_.ub=Dz;_.tI=6;_.p=null;function vy(){vy=hJ;FB()}
function wy(a){if(!a.n){return}a.n=false;sy(a.m,false)}
function xy(a){var b;b=a.p;if(b){if(a.i!=null){b.rb(a.i)}if(a.j!=null){b.vb(a.j)}}}
function yy(e,d,f){var c,a,b;if(d<0){d=0}if(f<0){f=0}e.l=d;e.o=f;d-=(a=$wnd.getComputedStyle($doc.documentElement,gf),parseInt(a.marginLeft)+parseInt(a.borderLeftWidth));f-=(b=$wnd.getComputedStyle($doc.documentElement,gf),parseInt(b.marginTop)+parseInt(b.borderTopWidth));c=e.t;c.style[sf]=d+Df;c.style[ig]=f+Df}
function zy(a,b){zz(a,b);xy(a)}
function Ay(a,b){a.j=b;xy(a);if(b.length==0){a.j=null}}
function By(){return bC(dl(this.t))}
function Cy(){lB(this)}
function Dy(a){this.i=a;xy(this);if(a.length==0){this.i=null}}
function Ey(a){zz(this,a);xy(this)}
function Fy(a){Ay(this,a)}
function ay(){}
_=ay.prototype=new pz();_.C=By;_.ib=Cy;_.rb=Dy;_.ub=Ey;_.vb=Fy;_.tI=7;_.i=null;_.j=null;_.k=false;_.l=-1;_.n=false;_.o=-1;function fj(){fj=hJ;vy()}
function dj(b,a){fj();b.t=$doc.createElement(tg);b.h=(dy(),ey);b.m=my(new gy(),b);b.t.appendChild(aC());yy(b,0,0);b.t[ab]=bb;bC(dl(b.t))[ab]=mb;b.db(a);return b}
function ej(c,b,a){var d;d=wh(b);if(c.g)sh(c.g,d,a);else xs(c.f,d,a)}
function gj(a){wy(a);if(a.e)Di(a.e)}
function hj(b,a){Ax(b);if((a&4)==4){b.g=rh(new lh(),xb)}else if((a&8)==8){b.g=rh(new lh(),cc);xz(b,b.g)}else if((a&2)==2){b.g=rh(new lh(),nc);xz(b,b.g)}else{b.f=ws(new ms());xz(b,b.f)}b.k=(a&32)==32;if((a&16)!=16){b.e=Bi(new Ai());if((a&64)!=64){zt(b.e,aj(new Fi(),b))}}ij(b,999);Ay(b,yc);b.t[ab]=dd;if(b.g)iA(b,sA(b.t)+F+od)}
function ij(a,b){a.t.style[zd]=gf+b;if(a.e){a.e.t.style[zd]=ee}}
function jj(){gj(this)}
function kj(a){hj(this,a)}
function Ei(){}
_=Ei.prototype=new ay();_.cb=jj;_.db=kj;_.tI=8;_.e=null;_.f=null;_.g=null;function hh(){hh=hJ;fj()}
function eh(a){hh();dj(a,64);ih(a,64);return a}
function fh(b,a){hh();dj(b,64);ih(b,a);return b}
function ih(b,a){hj(b,a);b.a=lt(new ht());b.d=bw(new du());b.b=gi(new zh(),ge);ri(b.b,Ew(new yw(),he));if((a&1)==1)b.c=true;b.a.D()[ab]=ie;gu(b.a.b,0,0,je);Dv(b.a,0,0,b.d);gu(b.a.b,1,0,ke);Dv(b.a,1,0,b.b);ji(b.b,le);ji(b.b,me);xH(b.b.a,ah(new Fg(),b));wi(b.b,!b.c);b.t[ab]=ne;if((a&4)==4||(a&8)==8||(a&2)==2){iA(b,sA(b.t)+F+od)}ej(b,b.a,(ys(),dt))}
function jh(){gj(this)}
function kh(a){ih(this,a)}
function Eg(){}
_=Eg.prototype=new Ei();_.cb=jh;_.db=kh;_.tI=9;_.a=null;_.b=null;_.c=false;_.d=null;function ah(b,a){b.a=a;return b}
function ch(a){gj(this.a)}
function Fg(){}
_=Fg.prototype=new lD();_.hb=ch;_.tI=10;_.a=null;function hs(){hs=hJ;is=gm(en,0,1,[ig,oe,pe])}
function gs(E,C,z){var A,B,D,y;hs();E.t=$doc.createElement(re);D=E.t;E.e=$doc.createElement(se);D.appendChild(E.e);D[te]=0;D[ue]=0;for(A=0;A<C.length;++A){B=(y=$doc.createElement(ve),(y[ab]=C[A],undefined),y.appendChild(js(C[A]+we)),y.appendChild(js(C[A]+xe)),y.appendChild(js(C[A]+ye)),y);E.e.appendChild(B);if(A==z){E.d=dl(kq(B,1))}}E.t[ab]=ze;return E}
function js(b){var a,c;c=$doc.createElement(Ae);a=$doc.createElement(tg);c.appendChild(a);c[ab]=b;a[ab]=b+Ce;return c}
function ls(){return this.d}
function fs(){}
_=fs.prototype=new pz();_.C=ls;_.tI=11;_.d=null;_.e=null;var is;function uh(){uh=hJ;hs()}
function rh(b,a){uh();gs(b,is,1);b.c=bw(new du());b.b=bw(new du());b.a=ws(new ms());xz(b,b.a);b.a.D()[ab]=ie;b.t[ab]=nc;xs(b.a,b.c,(ys(),dt));xs(b.a,b.b,dt);if(a!=null&&a.length>0&&a!=nc)uA(b.t,a,true);return b}
function sh(c,b,a){xs(c.a,wh(b),a)}
function th(a,c){var b;b=kq(kq(kq(a.t,0),0),1);if(DD(c,yc)){b.style[Be]=yc}else{b.style[Be]=De}}
function vh(){return CA(new AA(),this.a.f)}
function wh(d){var a;uh();var b,c;if(!d){c=null}else if(d){c=d}else{b=Cm(d);if(null.yb().yb()||null.yb().yb()){c=(a=cw(new du(),b),kB(a),jz(),pI(oz,a),a)}else{c=nh(new mh(),b)}}return c}
function xh(a){return As(this.a,a)}
function yh(a){this.t.style[Be]=a;th(this,a)}
function lh(){}
_=lh.prototype=new fs();_.eb=vh;_.pb=xh;_.vb=yh;_.tI=12;function nh(b,a){b.t=a;return b}
function mh(){}
_=mh.prototype=new pz();_.tI=13;function cu(a){Aq(a)==1}
function au(){}
_=au.prototype=new yA();_.gb=cu;_.tI=14;function rr(b,a){b.t=a;ti(b,0);return b}
function qr(){}
_=qr.prototype=new au();_.tI=15;function vr(b){if(b.type==Ee){try{b.setAttribute(Fe,af)}catch(a){}}}
function pr(){}
_=pr.prototype=new qr();_.tI=16;function gi(b,a){rr(b,$doc.createElement(af));vr(ni(b));si(b,bf);b.f=qx(new px());b.a=Ar(new zr());b.g=Bh(new Ah(),b);b.d=Eh(new Dh(),b);b.e=bi(new ai(),b);ui(b,1);qi(b,a);return b}
function ji(b,a){uA(ni(b),a,true);if(b.b)iA(b.b,a)}
function ki(a){if(a.i==1){uv(a.b,0,a.i);ju(a.b.b,0,1).className=cf;a.i=2}}
function li(a){Cr(a.a,a)}
function ni(a){if(!a.c)a.c=a.t;return a.c}
function oi(b,a){uA(ni(b),a,false);if(b.b){uA(b.b.t,a,false)}}
function pi(c,a){var b;if(c.c){b=fl(c.c);if(b){b.removeChild(c.c);b.appendChild(a)}}c.c=a}
function qi(b,a){if(!b.b){ni(b).innerHTML=a||gf}else{Ax(b.h);zz(b.h,dw(new du(),a));b.h.p.sb(df)}}
function ri(b,a){a.t[ab]=ef;ki(b);Dv(b.b,0,1,a)}
function si(b,a){ni(b)[ab]=a;if(b.b)iA(b.b,a)}
function ti(b,a){if(!b.b){ni(b).tabIndex=a}else{b.h.t.tabIndex=a}}
function ui(b,c){var a;a=!b.b?ni(b).innerHTML:ju(b.b.b,0,b.i).innerHTML;b.c=null;if(b.b){a=null;ov(b.b)}b.b=null;if(c==0){si(b,ff);ji(b,bf)}else{b.b=lt(new ht());b.b.D()[ab]=ff;b.b.d[te]=0;b.b.d[ue]=0;Cv(b.b,0,0,hf);lu(b.b.b,0,0,jf);lu(b.b.b,0,1,kf);b.h=yt(new xt());At(b.h,b.d);Bt(b.h,b.e);b.h.D()[ab]=lf;Dv(b.b,0,1,b.h);Cv(b.b,0,2,hf);lu(b.b.b,0,2,mf);pi(b,b.b.t);eq(b.h.t,7164)}xH(b.f,b.g);qi(b,a);eq(ni(b),1021|(ni(b).__eventBits||0))}
function wi(a,b){ni(a).style.display=b?gf:nf;if(a.b){a.b.t.style.display=b?gf:nf}}
function xi(){return ni(this)}
function yi(a){var b;b=Aq(a);ux(this.f,this,a);if(b==1){oi(this,sA(ni(this))+F+of);Cr(this.a,this);oi(this,sA(ni(this))+F+pf)}else if(this.b){Dt(this.h,a)}else{Aq(a)==1}}
function zi(a){si(this,a)}
function zh(){}
_=zh.prototype=new pr();_.D=xi;_.gb=yi;_.sb=zi;_.tI=17;_.b=null;_.c=null;_.h=null;_.i=1;function Bh(b,a){b.a=a;return b}
function Ah(){}
_=Ah.prototype=new lD();_.tI=18;_.a=null;function Eh(b,a){b.a=a;return b}
function Dh(){}
_=Dh.prototype=new lD();_.tI=19;_.a=null;function bi(b,a){b.a=a;return b}
function di(b,a){if(a==13)li(b.a)}
function ai(){}
_=ai.prototype=new lD();_.tI=20;_.a=null;function yt(b){var a;b.t=(a=$doc.createElement(qf),a.tabIndex=0,a);Do(b.t,138237|(b.t.__eventBits||0));return b}
function zt(b,a){if(!b.a){b.a=Ar(new zr())}xH(b.a,a)}
function At(b,a){if(!b.b){b.b=rt(new qt())}xH(b.b,a)}
function Bt(b,a){if(!b.c){b.c=dx(new cx())}xH(b.c,a)}
function Dt(b,a){switch(Aq(a)){case 1:if(b.a){Cr(b.a,b)}break;case 4096:case 2048:if(b.b){tt(b.b,a)}break;case 128:case 512:case 256:if(b.c){ix(b.c,a)}}}
function Ft(a){Dt(this,a)}
function xt(){}
_=xt.prototype=new pz();_.gb=Ft;_.tI=21;_.a=null;_.b=null;_.c=null;function Bi(d){yt(d);uA(d.t,rf,true);d.t.style[zd]=ee;return d}
function Di(a){a.D().style[Be]=tf;a.D().style[fe]=tf;a.t.style.display=nf}
function Ai(){}
_=Ai.prototype=new xt();_.tI=22;function aj(b,a){b.a=a;return b}
function cj(a){this.a.cb()}
function Fi(){}
_=Fi.prototype=new lD();_.hb=cj;_.tI=23;_.a=null;function oj(){oj=hJ;fj()}
function nj(a){oj();dj(a,64);a.c=lx(new kx(),gf);a.a=Ew(new yw(),uf);a.b=lt(new ht());if(mz(vf)){mz(vf).t.style.display=nf}a.t[ab]=vf;a.b.D()[ab]=ie;gu(a.b.b,0,0,je);Dv(a.b,0,0,a.c);gu(a.b.b,1,0,wf);Dv(a.b,1,0,a.a);uA(a.a.D(),xf,true);zy(a,a.b);return a}
function qj(){gj(this);this.t.style[yf]=zf}
function lj(){}
_=lj.prototype=new Ei();_.cb=qj;_.tI=24;function tj(a){a.a=kI(new jI());a.b=kI(new jI());a.c=kI(new jI());eh(new Eg());fh(new Eg(),(fj(),8));a.d=nj(new lj());EF(a.a,Af,Bf);EF(a.a,Cf,Ef);EF(a.a,Ff,ag);EF(a.a,bg,cg);EF(a.a,dg,eg);EF(a.a,fg,gg);EF(a.a,hg,gg);EF(a.a,jg,kg);EF(a.a,lg,mg);EF(a.a,ng,gf);EF(a.c,og,pg);EF(a.c,qg,rg);EF(a.c,sg,ug);EF(a.c,vg,wg);EF(a.c,xg,yg);EF(a.c,zg,Ag);EF(a.c,Bg,Cg);EF(a.b,Dg,cb);EF(a.b,db,eb);EF(a.b,fb,gb);EF(a.b,hb,ib);EF(a.b,jb,kb);EF(a.b,lb,nb);EF(a.b,ob,pb);nH(a.b,a.c);hl(a.d.c.t,qb);return a}
function vj(){return}
function rj(){}
_=rj.prototype=new lD();_.tI=0;function Cj(a){if(!a.f){return}CH(ck,a);Ej(a);a.h=false;a.f=false}
function Ej(a){if(a.h){oy(a)}}
function Fj(c,a,b){Cj(c);c.f=true;c.e=a;c.g=b;if(ak(c,(new Date()).getTime())){return}if(!ck){ck=vH(new uH());bk=(zj(),kp(),new xj())}xH(ck,c);if(ck.b==1){mp(bk,25)}}
function ak(d,a){var b,c;b=a>=d.g+d.e;if(d.h&&!b){c=(a-d.g)/d.e;ry(d,(1+Math.cos(3.141592653589793+c*3.141592653589793))/2);return false}if(!d.h&&a>=d.g){d.h=true;d.b=parseInt(d.a.t[rb])||0;d.c=parseInt(d.a.t[sb])||0;d.a.t.style[tb]=zf;ry(d,(1+Math.cos(3.141592653589793))/2)}if(b){oy(d);d.h=false;d.f=false;return true}return false}
function dk(){var a,b,c,d,e,f;e=fm(an,82,20,ck.b,0);e=pm(EH(ck,e),2);f=(new Date()).getTime();for(b=e,c=0,d=b.length;c<d;++c){a=b[c];if(a.f&&ak(a,f)){CH(ck,a)}}if(ck.b>0){mp(bk,25)}}
function wj(){}
_=wj.prototype=new lD();_.tI=25;_.e=-1;_.f=false;_.g=-1;_.h=false;var bk=null,ck=null;function kp(){kp=hJ;rp=vH(new uH());vp(new fp())}
function jp(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}CH(rp,a)}
function lp(a){if(!a.b){CH(rp,a)}a.qb()}
function mp(b,a){if(a<=0){throw new BC()}jp(b);b.b=false;b.c=pp(b,a);xH(rp,b)}
function pp(b,a){return $wnd.setTimeout(function(){b.B()},a)}
function qp(){lp(this)}
function ep(){}
_=ep.prototype=new lD();_.B=qp;_.tI=26;_.b=false;_.c=0;var rp;function zj(){zj=hJ;kp()}
function Aj(){dk()}
function xj(){}
_=xj.prototype=new ep();_.qb=Aj;_.tI=27;function ok(b,a){return b.tM==hJ||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function qk(a){return a.tM==hJ||a.tI==2?a.hC():a.$H||(a.$H=++wk)}
var wk=0;function dl(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function fl(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function hl(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function Ak(a){if(Element.prototype.getBoundingClientRect){return a.getBoundingClientRect().left+(cr(),er).scrollLeft|0}else{return $doc.getBoxObjectFor(a).screenX-$doc.getBoxObjectFor($doc.documentElement).screenX}}
function Bk(a){if(Element.prototype.getBoundingClientRect){return a.getBoundingClientRect().top+(cr(),er).scrollTop|0}else{return $doc.getBoxObjectFor(a).screenY-$doc.getBoxObjectFor($doc.documentElement).screenY}}
function dm(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function fm(a,f,c,b,e){var d;d=dm(e,b);gm(a,f,c,d);return d}
function gm(b,d,c,a){if(!hm){hm=new Dl()}km(a,hm);a.aC=b;a.tI=d;a.qI=c;return a}
function im(a,b,c){if(c!=null){if(a.qI>0&&!nm(c.tI,a.qI)){throw new iC()}if(a.qI<0&&(c.tM==hJ||c.tI==2)){throw new iC()}}return a[b]=c}
function km(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function Dl(){}
_=Dl.prototype=new lD();_.tI=0;_.aC=null;_.length=0;_.qI=0;var hm=null;function om(b,a){return b&&!!Dm[b][a]}
function nm(b,a){return b&&Dm[b][a]}
function pm(b,a){if(b!=null&&!nm(b.tI,a)){throw new mC()}return b}
function Cm(a){if(a!=null){throw new mC()}return a}
var Dm=[{},{},{1:1,22:1,23:1,24:1},{14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{8:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{12:1},{9:1},{11:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{8:1},{7:1,10:1,14:1},{20:1},{5:1},{5:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{5:1},{5:1},{6:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1},{17:1,22:1},{17:1,22:1},{7:1,10:1,14:1},{21:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1,22:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1,22:1},{17:1,22:1},{22:1,24:1},{22:1,24:1},{20:1},{4:1},{7:1,10:1,13:1,14:1},{6:1},{7:1,10:1,13:1,14:1},{4:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{23:1},{23:1},{3:1,22:1},{19:1},{19:1},{16:1},{16:1},{16:1},{19:1},{18:1,22:1},{19:1,22:1},{16:1},{3:1,22:1},{2:1},{15:1}];function jE(){}
_=jE.prototype=new lD();_.tI=28;function zC(){}
_=zC.prototype=new jE();_.tI=29;function pD(){}
_=pD.prototype=new zC();_.tI=30;function un(a){return a}
function tn(){}
_=tn.prototype=new pD();_.tI=32;function no(a){a.a=yn(new xn(),a);a.b=vH(new uH());a.d=Cn(new Bn(),a);a.f=bo(new Fn(),a);return a}
function po(b){var a;a=eo(b.f);ho(b.f);if(a!=null&&om(a.tI,4)){un(new tn(),pm(a,4))}else{}b.c=false;ro(b)}
function qo(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;mp(d.a,10000);while(fo(d.f)){b=go(d.f);try{if(b==null){return}if(b!=null&&om(b.tI,4)){a=pm(b,4);a.A()}else{}}finally{e=d.f.b==-1;if(e){return}ho(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){jp(d.a);d.c=false;ro(d)}}}
function ro(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;mp(a.d,1)}}
function to(b,a){xH(b.b,a);ro(b)}
function wn(){}
_=wn.prototype=new lD();_.tI=0;_.c=false;_.e=false;function zn(){zn=hJ;kp()}
function yn(b,a){zn();b.a=a;return b}
function An(){if(!this.a.c){return}po(this.a)}
function xn(){}
_=xn.prototype=new ep();_.qb=An;_.tI=33;_.a=null;function Dn(){Dn=hJ;kp()}
function Cn(b,a){Dn();b.a=a;return b}
function En(){this.a.e=false;qo(this.a,(new Date()).getTime())}
function Bn(){}
_=Bn.prototype=new ep();_.qb=En;_.tI=34;_.a=null;function bo(b,a){b.d=a;return b}
function eo(a){return zH(a.d.b,a.b)}
function fo(a){return a.c<a.a}
function go(b){var a;b.b=b.c;a=zH(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function ho(a){BH(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function jo(){return this.c<this.a}
function ko(){return go(this)}
function lo(){ho(this)}
function Fn(){}
_=Fn.prototype=new lD();_.bb=jo;_.fb=ko;_.nb=lo;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function yo(b,a,c){var d;if(a==Bo){if(Aq(b)==8192){Bo=null}}d=xo;xo=b;try{c.gb(b)}finally{xo=d}}
function Do(a,b){Cq();nq(a,b);dq(a,b)}
var xo=null,Bo=null;function Fo(){Fo=hJ;bp=no(new wn())}
function ap(a){Fo();if(!a){throw new iD()}to(bp,a)}
var bp;function hp(){while((kp(),rp).b>0){jp(pm(zH(rp,0),5))}}
function ip(){return null}
function fp(){}
_=fp.prototype=new lD();_.lb=hp;_.mb=ip;_.tI=35;function vp(a){Bp();if(!wp){wp=vH(new uH())}xH(wp,a)}
function xp(){var a,b;if(wp){for(b=hG(new fG(),wp);b.a<b.c.wb();){a=pm(kG(b),6);a.lb()}}}
function yp(){var a,b,c,d;d=null;if(wp){for(b=hG(new fG(),wp);b.a<b.c.wb();){a=pm(kG(b),6);c=a.mb();d=c}}return d}
function Ap(){__gwt_initHandlers(function(){},function(){return yp()},function(){xp()})}
function Bp(){if(!zp){Ap();zp=true}}
var wp=null,zp=false;function Aq(a){switch(a.type){case ub:return 4096;case vb:return 1024;case wb:return 1;case yb:return 2;case zb:return 2048;case Ab:return 128;case Bb:return 256;case Cb:return 512;case Db:return 32768;case Eb:return 8192;case Fb:return 4;case ac:return 64;case bc:return 32;case dc:return 16;case ec:return 8;case fc:return 16384;case gc:return 65536;case hc:return 131072;case ic:return 131072;case jc:return 262144;}}
function Cq(){if(!Eq){lq();cq();Eq=true}}
function Fq(a){return a!=null&&om(a.tI,7)&&!(a!=null&&(a.tM!=hJ&&a.tI!=2))}
var Eq=false;function hq(a){if(a.type==dc)return a.relatedTarget;if(a.type==bc)return a.target;return null}
function iq(a){if(a.type==dc)return a.target;if(a.type==bc)return a.relatedTarget;return null}
function kq(c,d){var b=0,a=c.firstChild;while(a){var e=a.nextSibling;if(a.nodeType==1){if(d==b)return a;++b}a=e}return null}
function jq(c){var b=0,a=c.firstChild;while(a){if(a.nodeType==1)++b;a=a.nextSibling}return b}
function lq(){qq=function(b){if(pq(b)){var a=oq;if(a&&a.__listener){if(Fq(a.__listener)){yo(b,a,a.__listener);b.stopPropagation()}}}};pq=function(a){return true};rq=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(Fq(c)){yo(b,a,c)}}};$wnd.addEventListener(wb,qq,true);$wnd.addEventListener(yb,qq,true);$wnd.addEventListener(Fb,qq,true);$wnd.addEventListener(ec,qq,true);$wnd.addEventListener(ac,qq,true);$wnd.addEventListener(dc,qq,true);$wnd.addEventListener(bc,qq,true);$wnd.addEventListener(hc,qq,true);$wnd.addEventListener(Ab,pq,true);$wnd.addEventListener(Cb,pq,true);$wnd.addEventListener(Bb,pq,true)}
function mq(e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break}++c}b=b.nextSibling}e.insertBefore(g,a)}
function nq(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?rq:null;if(b&2)c.ondblclick=a&2?rq:null;if(b&4)c.onmousedown=a&4?rq:null;if(b&8)c.onmouseup=a&8?rq:null;if(b&16)c.onmouseover=a&16?rq:null;if(b&32)c.onmouseout=a&32?rq:null;if(b&64)c.onmousemove=a&64?rq:null;if(b&128)c.onkeydown=a&128?rq:null;if(b&256)c.onkeypress=a&256?rq:null;if(b&512)c.onkeyup=a&512?rq:null;if(b&1024)c.onchange=a&1024?rq:null;if(b&2048)c.onfocus=a&2048?rq:null;if(b&4096)c.onblur=a&4096?rq:null;if(b&8192)c.onlosecapture=a&8192?rq:null;if(b&16384)c.onscroll=a&16384?rq:null;if(b&32768)c.onload=a&32768?rq:null;if(b&65536)c.onerror=a&65536?rq:null;if(b&131072)c.onmousewheel=a&131072?rq:null;if(b&262144)c.oncontextmenu=a&262144?rq:null}
var oq=null,pq=null,qq=null,rq=null;function cq(){$wnd.addEventListener(bc,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(kc==b.target.tagName.toLowerCase()){var c=$doc.createEvent(lc);c.initMouseEvent(ec,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(ic,qq,true)}
function eq(b,a){Cq();nq(b,a);dq(b,a)}
function dq(b,a){if(a&131072){b.addEventListener(ic,rq,false)}}
function cr(){cr=hJ;er=dr((cr(),new ar()))}
function dr(){return $doc.compatMode==mc?$doc.documentElement:$doc.body}
function ar(){}
_=ar.prototype=new lD();_.tI=0;var er;function as(c,a,b){mB(a);dB(c.f,a);b.appendChild(a.t);oB(a,c)}
function cs(b,c){var a;if(c.s!=b){return false}oB(c,null);a=c.D();fl(a).removeChild(a);iB(b.f,c);return true}
function ds(){return CA(new AA(),this.f)}
function es(a){return cs(this,a)}
function Er(){}
_=Er.prototype=new zx();_.eb=ds;_.pb=es;_.tI=36;function kr(a,b){as(a,b,a.t)}
function mr(b,c){var a;a=cs(b,c);if(a){nr(c.D())}return a}
function nr(a){a.style[sf]=gf;a.style[ig]=gf;a.style[oc]=gf}
function or(a){return mr(this,a)}
function jr(){}
_=jr.prototype=new Er();_.pb=or;_.tI=37;function wr(){}
_=wr.prototype=new Er();_.tI=38;_.d=null;_.e=null;function pE(a,b){var c;while(a.bb()){c=a.fb();if(b==null?c==null:ok(b,c)){return a}}return null}
function rE(a){throw new lE()}
function sE(b){var a;a=pE(this.eb(),b);return !!a}
function oE(){}
_=oE.prototype=new lD();_.v=rE;_.w=sE;_.tI=0;function rG(a){this.u(this.wb(),a);return true}
function qG(b,a){throw new lE()}
function sG(a,b){if(a<0||a>=b){vG(a,b)}}
function tG(e){var a,b,c,d,f;if((e==null?null:e)===(this==null?null:this)){return true}if(!(e!=null&&om(e.tI,17))){return false}f=pm(e,17);if(this.wb()!=f.wb()){return false}c=hG(new fG(),this);d=f.eb();while(c.a<c.c.wb()){a=kG(c);b=kG(d);if(!(a==null?b==null:ok(a,b))){return false}}return true}
function uG(){var a,b,c;b=1;a=hG(new fG(),this);while(a.a<a.c.wb()){c=kG(a);b=31*b+(c==null?0:qk(c));b=~~b}return b}
function vG(a,b){throw cD(new bD(),pc+a+qc+b)}
function wG(){return hG(new fG(),this)}
function xG(a){throw new lE()}
function eG(){}
_=eG.prototype=new oE();_.v=rG;_.u=qG;_.eQ=tG;_.hC=uG;_.eb=wG;_.ob=xG;_.tI=39;function vH(a){a.a=fm(dn,0,0,0,0);a.b=0;return a}
function xH(b,a){im(b.a,b.b++,a);return true}
function wH(c,a,b){if(a<0||a>c.b){vG(a,c.b)}c.a.splice(a,0,b);++c.b}
function zH(b,a){sG(a,b.b);return b.a[a]}
function AH(c,b,a){for(;a<c.b;++a){if(gJ(b,c.a[a])){return a}}return -1}
function BH(c,a){var b;b=(sG(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function CH(f,e){var a;a=AH(f,e,0);if(a==-1){return false}BH(f,a);return true}
function DH(d,a,b){var c;c=(sG(a,d.b),d.a[a]);im(d.a,a,b);return c}
function EH(e,d){var c,a,b;if(d.length<e.b){d=(a=d,b=dm(0,e.b),gm(a.aC,a.tI,a.qI,b),b)}for(c=0;c<e.b;++c){im(d,c,e.a[c])}if(d.length>e.b){im(d,e.b,null)}return d}
function aI(a){return im(this.a,this.b++,a),true}
function FH(a,b){wH(this,a,b)}
function bI(a){return AH(this,a,0)!=-1}
function cI(a){return sG(a,this.b),this.a[a]}
function dI(a){return BH(this,a)}
function eI(){return this.b}
function uH(){}
_=uH.prototype=new eG();_.v=aI;_.u=FH;_.w=bI;_.ab=cI;_.ob=dI;_.wb=eI;_.tI=40;_.a=null;_.b=0;function Ar(a){a.a=fm(dn,0,0,0,0);a.b=0;return a}
function Cr(d,c){var a,b;for(b=hG(new fG(),d);b.a<b.c.wb();){a=pm(kG(b),8);a.hb(c)}}
function zr(){}
_=zr.prototype=new uH();_.tI=41;function ys(){ys=hJ;Fs=new ns();ct=new ns();bt=new ns();at=new ns();dt=new ns();et=new ns();ft=new ns()}
function ws(a){ys();a.f=cB(new zA(),a);a.e=$doc.createElement(re);a.d=$doc.createElement(se);a.e.appendChild(a.d);a.t=a.e;a.b=(nw(),ow);a.c=(uw(),vw);a.e[te]=0;a.e[ue]=0;return a}
function xs(c,d,a){var b;if(a==Fs){if(d==c.a){return}else if(c.a){throw new BC()}}mB(d);dB(c.f,d);if(a==Fs){c.a=d}b=rs(new ps(),a);d.r=b;Bs(d,c.b);Cs(d,c.c);zs(c);oB(d,c)}
function zs(q){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;a=q.d;while(jq(a)>0){a.removeChild(kq(a,0))}m=1;d=1;for(g=CA(new AA(),q.f);g.a<g.b.c-1;){c=EA(g);e=c.r.a;if(e==dt||e==et){++m}else if(e==at||e==ft||e==ct||e==bt){++d}}n=fm(bn,0,21,m,0);for(f=0;f<m;++f){n[f]=new ts();n[f].b=$doc.createElement(ve);a.appendChild(n[f].b)}i=0;j=d-1;k=0;o=m-1;b=null;for(g=CA(new AA(),q.f);g.a<g.b.c-1;){c=EA(g);h=c.r;p=$doc.createElement(Ae);h.c=p;h.c[rc]=h.b;h.c.style[sc]=h.d;h.c[Be]=gf;h.c[fe]=gf;if(h.a==dt){mq(n[k].b,p,n[k].a);p.appendChild(c.D());p[tc]=j-i+1;++k}else if(h.a==et){mq(n[o].b,p,n[o].a);p.appendChild(c.D());p[tc]=j-i+1;--o}else if(h.a==Fs){b=p}else if(Ds(h.a)){l=n[k];mq(l.b,p,l.a++);p.appendChild(c.D());p[uc]=o-k+1;++i}else if(Es(h.a)){l=n[k];mq(l.b,p,l.a);p.appendChild(c.D());p[uc]=o-k+1;--j}}if(q.a){l=n[k];mq(l.b,b,l.a);b.appendChild(q.a.D())}}
function As(b,c){var a;a=cs(b,c);if(a){if(c==b.a){b.a=null}zs(b)}return a}
function Bs(c,a){var b;b=c.r;b.b=a.a;if(b.c){b.c[rc]=a.a}}
function Cs(c,a){var b;b=c.r;b.d=a.a;if(b.c){b.c.style[sc]=a.a}}
function Ds(a){if(a==ct){return true}return a==ft}
function Es(a){if(a==bt){return true}return a==at}
function gt(a){return As(this,a)}
function ms(){}
_=ms.prototype=new wr();_.pb=gt;_.tI=42;_.a=null;var Fs,at,bt,ct,dt,et,ft;function ns(){}
_=ns.prototype=new lD();_.tI=0;function rs(b,a){b.b=(nw(),ow).a;b.d=(uw(),vw).a;b.a=a;return b}
function ps(){}
_=ps.prototype=new lD();_.tI=0;_.a=null;_.c=null;function ts(){}
_=ts.prototype=new lD();_.tI=43;_.a=0;_.b=null;function lv(d,c,b){var a;mv(d,c);if(b<0){throw cD(new bD(),vc+b+wc+b)}a=(mv(d,c),d.a.rows[c].cells.length);if(a<=b){throw cD(new bD(),xc+b+zc+(mv(d,c),d.a.rows[c].cells.length))}}
function mv(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw cD(new bD(),Ac+a+Bc+b)}}
function ov(d){var a,b,c;for(c=0;c<d.a.rows.length;++c){for(b=0;b<(mv(d,c),d.a.rows[c].cells.length);++b){a=tv(d,c,b);if(a){xv(d,a)}}}}
function tv(e,d,b){var a,c;c=e.b.a.a.rows[d].cells[b];a=dl(c);if(!a){return null}else{return cv(e.e,a)}}
function uv(d,b,a){var c,e;e=d.a.rows[b];c=$doc.createElement(Ae);mq(e,c,a)}
function vv(b,a){var c;if(a!=b.a.rows.length){mv(b,a)}c=$doc.createElement(ve);mq(b.a,c,a);return a}
function wv(d,c,a){var b,e;b=dl(c);e=null;if(b){e=cv(d.e,b)}if(e){xv(d,e);return true}else{if(a){c.innerHTML=gf}return false}}
function xv(b,c){var a;if(c.s!=b){return false}oB(c,null);a=c.D();fl(a).removeChild(a);fv(b.e,a);return true}
function Bv(b,a){b.c=a;pu(b.c)}
function Cv(f,d,a,c){var e,b;nt(f,d,a);e=(b=f.b.a.a.rows[d].cells[a],wv(f,b,c==null),b);if(c!=null){e.innerHTML=c||gf}}
function Dv(e,c,a,f){var d,b;nt(e,c,a);if(f){mB(f);d=(b=e.b.a.a.rows[c].cells[a],wv(e,b,true),b);dv(e.e,f);d.appendChild(f.D());oB(f,e)}}
function Ev(){return wu(new uu(),this.e)}
function Fv(a){Aq(a)}
function aw(a){return xv(this,a)}
function eu(){}
_=eu.prototype=new zx();_.eb=Ev;_.gb=Fv;_.pb=aw;_.tI=44;_.a=null;_.b=null;_.c=null;_.d=null;function lt(a){a.e=av(new tu());a.d=$doc.createElement(re);a.a=$doc.createElement(se);a.d.appendChild(a.a);a.t=a.d;a.b=jt(new it(),a);Bv(a,nu(new mu(),a));return a}
function nt(e,d,b){var a,c;ot(e,d);if(b<0){throw cD(new bD(),Cc+b)}a=(mv(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){pt(e.a,d,c)}}
function ot(d,b){var a,c;if(b<0){throw cD(new bD(),Dc+b)}c=d.a.rows.length;for(a=c;a<=b;++a){vv(d,a)}}
function pt(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(Ae);e.appendChild(a)}}
function ht(){}
_=ht.prototype=new eu();_.tI=45;function gu(e,b,a,c){var d;nt(e.a,b,a);d=e.a.a.rows[b].cells[a];uA(d,c,true)}
function ju(c,b,a){lv(c.a,b,a);return c.a.a.rows[b].cells[a]}
function lu(d,b,a,c){nt(d.a,b,a);d.a.a.rows[b].cells[a][ab]=c}
function fu(){}
_=fu.prototype=new lD();_.tI=0;_.a=null;function jt(b,a){b.a=a;return b}
function it(){}
_=it.prototype=new fu();_.tI=0;function rt(a){a.a=fm(dn,0,0,0,0);a.b=0;return a}
function ut(c){var a,b;for(b=hG(new fG(),c);b.a<b.c.wb();){a=pm(kG(b),9);hA(a.a,zb)}}
function tt(b,a){switch(Aq(a)){case 2048:ut(b);break;case 4096:vt(b);}}
function vt(c){var a,b;for(b=hG(new fG(),c);b.a<b.c.wb();){a=pm(kG(b),9);kA(a.a,zb)}}
function qt(){}
_=qt.prototype=new uH();_.tI=46;function lx(b,a){b.t=$doc.createElement(tg);b.t[ab]=Ec;hl(b.t,a);return b}
function ox(a){Aq(a)}
function kx(){}
_=kx.prototype=new yA();_.gb=ox;_.tI=47;function bw(a){a.t=$doc.createElement(tg);a.t[ab]=Fc;return a}
function dw(b,a){bw(b);b.t.innerHTML=a||gf;return b}
function cw(b,a){b.t=a;return b}
function du(){}
_=du.prototype=new kx();_.tI=48;function nu(b,a){b.b=a;return b}
function pu(a){if(!a.a){a.a=$doc.createElement(ad);mq(a.b.d,a.a,0);a.a.appendChild($doc.createElement(bd))}}
function mu(){}
_=mu.prototype=new lD();_.tI=0;_.a=null;_.b=null;function av(a){a.b=vH(new uH());return a}
function cv(d,b){var c,a;c=(a=b[cd],a==null?-1:a);if(c<0){return null}return pm(zH(d.b,c),10)}
function dv(b,c){var a;if(!b.a){a=b.b.b;xH(b.b,c)}else{a=b.a.a;DH(b.b,a,c);b.a=b.a.b}c.D()[cd]=a}
function fv(d,b){var c,a;c=(a=b[cd],a==null?-1:a);b[cd]=null;DH(d.b,c,null);d.a=Du(new Cu(),c,d.a)}
function tu(){}
_=tu.prototype=new lD();_.tI=0;_.a=null;function wu(b,a){b.c=a;yu(b);return b}
function yu(a){while(++a.b<a.c.b.b){if(zH(a.c.b,a.b)!=null){return}}}
function zu(){return this.b<this.c.b.b}
function Au(){var a;if(this.b>=this.c.b.b){throw new aJ()}a=pm(zH(this.c.b,this.b),10);this.a=this.b;yu(this);return a}
function Bu(){var a;if(this.a<0){throw new EC()}a=pm(zH(this.c.b,this.a),10);mB(a);this.a=-1}
function uu(){}
_=uu.prototype=new lD();_.bb=zu;_.fb=Au;_.nb=Bu;_.tI=0;_.a=-1;_.b=-1;_.c=null;function Du(c,a,b){c.a=a;c.b=b;return c}
function Cu(){}
_=Cu.prototype=new lD();_.tI=0;_.a=0;_.b=null;function nw(){nw=hJ;lw(new kw(),ed);pw=lw(new kw(),sf);lw(new kw(),fd);ow=pw}
var ow,pw;function lw(b,a){b.a=a;return b}
function kw(){}
_=kw.prototype=new lD();_.tI=0;_.a=null;function uw(){uw=hJ;sw(new rw(),pe);sw(new rw(),oe);vw=sw(new rw(),ig)}
var vw;function sw(a,b){a.a=b;return a}
function rw(){}
_=rw.prototype=new lD();_.tI=0;_.a=null;function Fw(){Fw=hJ;tF(new jI())}
function Ew(a,b){Fw();Cw(new Bw(),a,b);a.t[ab]=gd;return a}
function ax(a){Aq(a)}
function yw(){}
_=yw.prototype=new yA();_.gb=ax;_.tI=49;function zw(){}
_=zw.prototype=new lD();_.tI=0;function Cw(b,a,c){nB(a,$doc.createElement(hd));Do(a.t,229501|(a.t.__eventBits||0));a.t.src=c;return b}
function Bw(){}
_=Bw.prototype=new zw();_.tI=0;function dx(a){a.a=fm(dn,0,0,0,0);a.b=0;return a}
function fx(b){var a;for(a=hG(new fG(),b);a.a<a.c.wb();){pm(kG(a),11)}}
function gx(d,a){var b,c;for(c=hG(new fG(),d);c.a<c.c.wb();){b=pm(kG(c),11);di(b,a)}}
function hx(b){var a;for(a=hG(new fG(),b);a.a<a.c.wb();){pm(kG(a),11)}}
function ix(b,a){(a.shiftKey?1:0)|(a.metaKey?8:0)|(a.ctrlKey?2:0)|(a.altKey?4:0);switch(Aq(a)){case 128:fx(b,(a.which||(a.keyCode||0))&65535);break;case 512:hx(b,(a.which||(a.keyCode||0))&65535);break;case 256:gx(b,(a.which||(a.keyCode||0))&65535);}}
function cx(){}
_=cx.prototype=new uH();_.tI=50;function qx(a){a.a=fm(dn,0,0,0,0);a.b=0;return a}
function sx(c){var a,b;for(b=hG(new fG(),c);b.a<b.c.wb();){a=pm(kG(b),12);hA(a.a,pf)}}
function tx(c){var a,b;for(b=hG(new fG(),c);b.a<b.c.wb();){a=pm(kG(b),12);hA(a.a,of)}}
function ux(e,c,a){var b,d,f;d=ni(c);(a.clientX||0)-Ak(d)+(parseInt(d[id])||0)+(cr(),er).scrollLeft;(a.clientY||0)-Bk(d)+(parseInt(d[jd])||0)+er.scrollTop;switch(Aq(a)){case 4:sx(e);break;case 8:xx(e);break;case 64:wx(e);break;case 16:b=hq(a);if(!b||!(d===b||!!(d.compareDocumentPosition(b)&16))){tx(e)}break;case 32:f=iq(a);if(!f||!(d===f||!!(d.compareDocumentPosition(f)&16))){vx(e)}}}
function vx(c){var a,b;for(b=hG(new fG(),c);b.a<b.c.wb();){a=pm(kG(b),12);kA(a.a,pf);kA(a.a,of)}}
function wx(b){var a;for(a=hG(new fG(),b);a.a<a.c.wb();){pm(kG(a),12)}}
function xx(c){var a,b;for(b=hG(new fG(),c);b.a<b.c.wb();){a=pm(kG(b),12);kA(a.a,pf)}}
function px(){}
_=px.prototype=new uH();_.tI=51;function xC(a){return (this==null?null:this)===(a==null?null:a)}
function yC(){return this.$H||(this.$H=++wk)}
function vC(){}
_=vC.prototype=new lD();_.eQ=xC;_.hC=yC;_.tI=52;function dy(){dy=hJ;ey=(dy(),new by());fy=new by()}
function by(){}
_=by.prototype=new vC();_.tI=53;var ey,fy;function my(b,a){b.a=a;return b}
function oy(a){if(!a.d){mr((jz(),mz(null)),a.a)}cC((vy(),a.a.t),kd);a.a.t.style[tb]=ld}
function py(a){if(a.d){a.a.t.style[oc]=md;if(a.a.o!=-1){yy(a.a,a.a.l,a.a.o)}kr((jz(),mz(null)),a.a)}else{mr((jz(),mz(null)),a.a)}a.a.t.style[tb]=ld}
function ry(f,d){var a,b,c,e,g,h;if(!f.d){d=1-d}g=0;c=0;e=0;a=0;b=~~Math.max(Math.min(d*f.b,2147483647),-2147483648);h=~~Math.max(Math.min(d*f.c,2147483647),-2147483648);if(f.a.h==(dy(),ey)){g=f.b-b>>1;c=f.c-h>>1}else f.a.h==fy;e=c+h;a=g+b;cC((vy(),f.a.t),nd+g+pd+e+pd+a+pd+c+qd)}
function sy(c,b){var a;Cj(c);a=c.a.k;if(c.a.h==(dy(),fy)&&!b){a=false}c.d=b;if(a){if(b){c.a.t.style[oc]=md;if(c.a.o!=-1){yy(c.a,c.a.l,c.a.o)}cC((vy(),c.a.t),rd);kr((jz(),mz(null)),c.a)}ap(iy(new hy(),c))}else{py(c)}}
function gy(){}
_=gy.prototype=new wj();_.tI=54;_.a=null;_.b=0;_.c=-1;_.d=false;function iy(b,a){b.a=a;return b}
function ky(){Fj(this.a,200,(new Date()).getTime())}
function hy(){}
_=hy.prototype=new lD();_.A=ky;_.tI=55;_.a=null;function jz(){jz=hJ;nz=kI(new jI());oz=oI(new nI())}
function iz(b,a){jz();b.f=cB(new zA(),b);b.t=a;kB(b);return b}
function kz(){var b,a;jz();var c,d;for(d=(b=xE(new vE(),mH(oz.a).b.a),BG(new AG(),b));jG(d.a.a);){c=pm((a=zE(d.a),a.E()),10);if(c.q){c.ib()}}}
function mz(b){jz();var a,c;c=pm(yF(nz,b),13);if(c){return c}a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(nz.d==0){vp(new bz())}if(!a){c=gz(new fz())}else{c=iz(new az(),a)}EF(nz,b,c);pI(oz,c);return c}
function az(){}
_=az.prototype=new jr();_.tI=56;var nz,oz;function dz(){kz()}
function ez(){return null}
function bz(){}
_=bz.prototype=new lD();_.lb=dz;_.mb=ez;_.tI=57;function hz(){hz=hJ;jz()}
function gz(a){hz();iz(a,$doc.body);return a}
function fz(){}
_=fz.prototype=new az();_.tI=58;function sz(b,a){b.c=a;b.a=!!b.c.p;return b}
function uz(){return this.a}
function vz(){if(!this.a||!this.c.p){throw new aJ()}this.a=false;return this.b=this.c.p}
function wz(){if(this.b){this.c.pb(this.b)}}
function qz(){}
_=qz.prototype=new lD();_.bb=uz;_.fb=vz;_.nb=wz;_.tI=0;_.b=null;_.c=null;function cB(b,a){b.b=a;b.a=fm(cn,0,10,4,0);return b}
function dB(a,b){gB(a,b,a.c)}
function fB(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]==c){return a}}return -1}
function gB(d,e,a){var b,c;if(a<0||a>d.c){throw new bD()}if(d.c==d.a.length){c=fm(cn,0,10,d.a.length*2,0);for(b=0;b<d.a.length;++b){im(c,b,d.a[b])}d.a=c}++d.c;for(b=d.c-1;b>a;--b){im(d.a,b,d.a[b-1])}im(d.a,a,e)}
function hB(c,b){var a;if(b<0||b>=c.c){throw new bD()}--c.c;for(a=b;a<c.c;++a){im(c.a,a,c.a[a+1])}im(c.a,c.c,null)}
function iB(b,c){var a;a=fB(b,c);if(a==-1){throw new aJ()}hB(b,a)}
function zA(){}
_=zA.prototype=new lD();_.tI=0;_.a=null;_.b=null;_.c=0;function CA(b,a){b.b=a;return b}
function EA(a){if(a.a>=a.b.c){throw new aJ()}return a.b.a[++a.a]}
function FA(){return this.a<this.b.c-1}
function aB(){return EA(this)}
function bB(){if(this.a<0||this.a>=this.b.c){throw new EC()}this.b.b.pb(this.b.a[this.a--])}
function AA(){}
_=AA.prototype=new lD();_.bb=FA;_.fb=aB;_.nb=bB;_.tI=0;_.a=-1;_.b=null;function FB(){FB=hJ;dC=eC()}
function aC(){var a;a=$doc.createElement(tg);if(dC){a.innerHTML=sd;ap(CB(new BB(),a))}return a}
function bC(a){return dC?dl(a):a}
function cC(a,b){a.style[td]=b;a.style[ud]=nf;a.style[ud]=gf}
function eC(){if(navigator.userAgent.indexOf(vd)!=-1){return true}return false}
var dC;function CB(a,b){a.a=b;return a}
function EB(){this.a.style[tb]=yc}
function BB(){}
_=BB.prototype=new lD();_.A=EB;_.tI=59;_.a=null;function iC(){}
_=iC.prototype=new pD();_.tI=61;function pC(c,a){var b;b=new lC();return b}
function lC(){}
_=lC.prototype=new lD();_.tI=0;function mC(){}
_=mC.prototype=new pD();_.tI=64;function BC(){}
_=BC.prototype=new pD();_.tI=65;function EC(){}
_=EC.prototype=new pD();_.tI=66;function cD(b,a){return b}
function bD(){}
_=bD.prototype=new pD();_.tI=67;function iD(){}
_=iD.prototype=new pD();_.tI=68;function DD(b,a){if(!(a!=null&&om(a.tI,1))){return false}return String(b)==a}
function bE(b,a){return b.substr(a,b.length-a)}
function dE(c){if(c.length==0||c[0]>qe&&c[c.length-1]>qe){return c}var a=c.replace(/^(\s*)/,gf);var b=a.replace(/\s*$/,gf);return b}
function fE(a){return DD(this,a)}
function hE(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function iE(){return zD(this)}
_=String.prototype;_.eQ=fE;_.hC=iE;_.tI=2;function uD(){uD=hJ;vD={};yD={}}
function wD(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function zD(c){uD();var a=wd+c;var b=yD[a];if(b!=null){return b}b=vD[a];if(b==null){b=wD(c)}AD();return yD[a]=b}
function AD(){if(xD==256){vD=yD;yD={};xD=0}++xD}
var vD,xD=0,yD;function lE(){}
_=lE.prototype=new pD();_.tI=71;function mH(b){var a;a=EE(new uE(),b);return bH(new zG(),b,a)}
function nH(d,c){var a,b;for(b=xE(new vE(),EE(new uE(),c).a);jG(b.a);){a=b.b=pm(kG(b.a),16);EF(d,a.E(),a.F())}}
function oH(c){var a,b,d,e,f;if((c==null?null:c)===(this==null?null:this)){return true}if(!(c!=null&&om(c.tI,18))){return false}e=pm(c,18);if(pm(this,18).d!=e.d){return false}for(b=xE(new vE(),EE(new uE(),e).a);jG(b.a);){a=b.b=pm(kG(b.a),16);d=a.E();f=a.F();if(!(d==null?pm(this,18).c:d!=null&&om(d.tI,1)?AF(pm(this,18),pm(d,1)):zF(pm(this,18),d,~~qk(d)))){return false}if(!gJ(f,d==null?pm(this,18).b:d!=null&&om(d.tI,1)?pm(this,18).e[wd+pm(d,1)]:wF(pm(this,18),d,~~qk(d)))){return false}}return true}
function pH(){var a,b,c;c=0;for(b=xE(new vE(),EE(new uE(),pm(this,18)).a);jG(b.a);){a=b.b=pm(kG(b.a),16);c+=a.hC();c=~~c}return c}
function yG(){}
_=yG.prototype=new lD();_.eQ=oH;_.hC=pH;_.tI=0;function rF(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.v(a[f])}}}}
function sF(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=pF(e,c.substring(1));a.v(b)}}}
function tF(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function vF(b,a){return a==null?b.c:a!=null&&om(a.tI,1)?AF(b,pm(a,1)):zF(b,a,~~qk(a))}
function yF(b,a){return a==null?b.b:a!=null&&om(a.tI,1)?b.e[wd+pm(a,1)]:wF(b,a,~~qk(a))}
function wF(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.E();if(h.z(g,d)){return c.F()}}}return null}
function zF(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.E();if(h.z(g,d)){return true}}}return false}
function AF(b,a){return wd+a in b.e}
function EF(b,a,c){return a==null?CF(b,c):a!=null&&om(a.tI,1)?DF(b,pm(a,1),c):BF(b,a,c,~~qk(a))}
function BF(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.E();if(i.z(g,d)){var h=c.F();c.tb(j);return h}}}else{a=i.a[e]=[]}var c=zI(new yI(),g,j);a.push(c);++i.d;return null}
function CF(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function DF(d,a,e){var b,c=d.e;a=wd+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function cG(b,a){return a==null?aG(b):a!=null&&om(a.tI,1)?bG(b,pm(a,1)):FF(b,a,~~qk(a))}
function FF(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.E();if(h.z(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.F()}}}return null}
function aG(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function bG(d,a){var b,c=d.e;a=wd+a;if(a in c){b=c[a];--d.d;delete c[a]}return b}
function dG(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ok(a,b)}
function tE(){}
_=tE.prototype=new yG();_.z=dG;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function sH(b){var a,c,d;if((b==null?null:b)===(this==null?null:this)){return true}if(!(b!=null&&om(b.tI,19))){return false}c=pm(b,19);if(c.wb()!=this.wb()){return false}for(a=c.eb();a.bb();){d=a.fb();if(!this.w(d)){return false}}return true}
function tH(){var a,b,c;a=0;for(b=this.eb();b.bb();){c=b.fb();if(c!=null){a+=qk(c);a=~~a}}return a}
function qH(){}
_=qH.prototype=new oE();_.eQ=sH;_.hC=tH;_.tI=72;function EE(b,a){b.a=a;return b}
function aF(d,c){var a,b,e;if(c!=null&&om(c.tI,16)){a=pm(c,16);b=a.E();if(vF(d.a,b)){e=yF(d.a,b);return mI(a.F(),e)}}return false}
function bF(a){return aF(this,a)}
function cF(){return xE(new vE(),this.a)}
function dF(){return this.a.d}
function uE(){}
_=uE.prototype=new qH();_.w=bF;_.eb=cF;_.wb=dF;_.tI=73;_.a=null;function xE(c,b){var a;c.c=b;a=vH(new uH());if(c.c.c){xH(a,fF(new eF(),c.c))}sF(c.c,a);rF(c.c,a);c.a=hG(new fG(),a);return c}
function zE(a){return a.b=pm(kG(a.a),16)}
function AE(a){if(!a.b){throw new EC()}else{lG(a.a);cG(a.c,a.b.E());a.b=null}}
function BE(){return jG(this.a)}
function CE(){return this.b=pm(kG(this.a),16)}
function DE(){AE(this)}
function vE(){}
_=vE.prototype=new lD();_.bb=BE;_.fb=CE;_.nb=DE;_.tI=0;_.a=null;_.b=null;_.c=null;function jH(b){var a;if(b!=null&&om(b.tI,16)){a=pm(b,16);if(gJ(this.E(),a.E())&&gJ(this.F(),a.F())){return true}}return false}
function kH(){var a,b;a=0;b=0;if(this.E()!=null){a=qk(this.E())}if(this.F()!=null){b=qk(this.F())}return a^b}
function hH(){}
_=hH.prototype=new lD();_.eQ=jH;_.hC=kH;_.tI=74;function fF(b,a){b.a=a;return b}
function hF(){return null}
function iF(){return this.a.b}
function jF(a){return CF(this.a,a)}
function eF(){}
_=eF.prototype=new hH();_.E=hF;_.F=iF;_.tb=jF;_.tI=75;_.a=null;function lF(c,a,b){c.b=b;c.a=a;return c}
function nF(){return this.a}
function oF(){return this.b.e[wd+this.a]}
function pF(b,a){return lF(new kF(),a,b)}
function qF(a){return DF(this.b,this.a,a)}
function kF(){}
_=kF.prototype=new hH();_.E=nF;_.F=oF;_.tb=qF;_.tI=76;_.a=null;_.b=null;function hG(b,a){b.c=a;return b}
function jG(a){return a.a<a.c.wb()}
function kG(a){if(a.a>=a.c.wb()){throw new aJ()}return a.c.ab(a.b=a.a++)}
function lG(a){if(a.b<0){throw new EC()}a.c.ob(a.b);a.a=a.b;a.b=-1}
function mG(){return this.a<this.c.wb()}
function nG(){return kG(this)}
function oG(){lG(this)}
function fG(){}
_=fG.prototype=new lD();_.bb=mG;_.fb=nG;_.nb=oG;_.tI=0;_.a=0;_.b=-1;_.c=null;function bH(b,a,c){b.a=a;b.b=c;return b}
function eH(a){return vF(this.a,a)}
function fH(){var a;return a=xE(new vE(),this.b.a),BG(new AG(),a)}
function gH(){return this.b.a.d}
function zG(){}
_=zG.prototype=new qH();_.w=eH;_.eb=fH;_.wb=gH;_.tI=77;_.a=null;_.b=null;function BG(a,b){a.a=b;return a}
function EG(){return jG(this.a.a)}
function FG(){var a;return a=zE(this.a),a.E()}
function aH(){AE(this.a)}
function AG(){}
_=AG.prototype=new lD();_.bb=EG;_.fb=FG;_.nb=aH;_.tI=0;_.a=null;function kI(a){tF(a);return a}
function mI(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ok(a,b)}
function jI(){}
_=jI.prototype=new tE();_.tI=78;function oI(a){a.a=kI(new jI());return a}
function pI(c,a){var b;b=EF(c.a,a,c);return b==null}
function rI(b){var a;return a=EF(this.a,b,this),a==null}
function sI(a){return vF(this.a,a)}
function tI(){var a;return a=xE(new vE(),mH(this.a).b.a),BG(new AG(),a)}
function uI(){return this.a.d}
function nI(){}
_=nI.prototype=new qH();_.v=rI;_.w=sI;_.eb=tI;_.wb=uI;_.tI=79;_.a=null;function zI(b,a,c){b.a=a;b.b=c;return b}
function BI(){return this.a}
function CI(){return this.b}
function EI(b){var a;a=this.b;this.b=b;return a}
function yI(){}
_=yI.prototype=new hH();_.E=BI;_.F=CI;_.tb=EI;_.tI=80;_.a=null;_.b=null;function aJ(){}
_=aJ.prototype=new pD();_.tI=81;function gJ(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ok(a,b)}
function gC(){!!$stats&&$stats({moduleName:$moduleName,subSystem:xd,evtGroup:yd,millis:(new Date()).getTime(),type:Ad,className:Bd});vj(tj(new rj()))}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{gC()}catch(a){b(d)}else{gC()}}
function hJ(){}
var en=pC(Cd,Dd),dn=pC(Cd,Ed),an=pC(Fd,ae),bn=pC(be,ce),cn=pC(be,de);$stats && $stats({moduleName:'com.google.code.p.gwtcsample.GWTCSample',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_google_code_p_gwtcsample_GWTCSample) {  var __gwt_initHandlers = com_google_code_p_gwtcsample_GWTCSample.__gwt_initHandlers;  com_google_code_p_gwtcsample_GWTCSample.onScriptLoad(gwtOnLoad);}})();