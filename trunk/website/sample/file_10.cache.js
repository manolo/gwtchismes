(function(){var $gwt_version = "1.5.3";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.google.code.p.gwtcsample.GWTCSample',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var kf='',te=' ',xc=' must be non-negative: ',lf='&nbsp;',Ac=', Column size: ',Cc=', Row size: ',rc=', Size: ',F='-',ig='...',uf='0px',af='100%',ee='998',Ad=':',vd='<div><\/div>',vg='Actual month',de='Animation;',oc='CSS1Compat',Dc='Cannot create a column with a negative index: ',Ec='Cannot create a row with a negative index: ',Ae='Center',gg='Change',Df='Checkin',Ff='Checkout',ob='Close',Eg='Close dialog',wc='Column ',zc='Column index: ',jc='DOMMouseScroll',ge='DockPanel$TmpRow;',qe='GWTCAlert',nc='GWTCBox',cc='GWTCBox-blue',xb='GWTCBox-grey',jf='GWTCBtn',nf='GWTCBtn-c',of='GWTCBtn-focus',hf='GWTCBtn-img',mf='GWTCBtn-l',ff='GWTCBtn-ml',pf='GWTCBtn-r',gf='GWTCBtn-text',tf='GWTCGlassPanel',dd='GWTCPopupBox',xf='GWTCWait',lb='Help',Cg='Help dialog',qc='Index: ',Fe='Inner',eg='Interval',ze='Left',yd='Macintosh',mc='MouseEvents',ah='Next',rg='Next month',yg='Next year',hb='Next-Y',cg='Nights',je='OK',be='Object;',pb='Please wait ...',db='Prev',jb='Prev-Y',tg='Previous month',Ag='Previous year',Be='Right',Bc='Row index: ',mg='Select your checkin date',og='Select your checkout date',ae='String;',fb='Today',he='Widget;',ce='[Lcom.google.gwt.animation.client.',fe='[Lcom.google.gwt.user.client.ui.',Fd='[Ljava.lang.',ed='__widgetID',nd='absolute',sc='align',yc='auto',vb='blur',tb='border-left-width',ub='border-top-width',se='bottom',od='box',ne='btnCell',df='button',xe='cellPadding',we='cellSpacing',fd='center',wb='change',ab='className',yb='click',wd='clip',cd='col',uc='colSpan',bd='colgroup',Ed='com.google.code.p.gwtcsample.client.GWTCSample',kc='contextmenu',zb='dblclick',xd='display',wg='div',sf='down',hc='error',Ab='focus',ef='gwt-Button',Ce='gwt-DecoratorPanel',ad='gwt-HTML',hd='gwt-Image',Fc='gwt-Label',bb='gwt-PopupPanel',pe='gwtc-alert-rndbutton',ie='height',Bf='hidden',lc='html',zf='image',ke='images/button/dialog-ok.gif',wf='images/gwtc-wait-loading.gif',id='img',yf='imgCell',td='input',kg='key.calendar.checkin.title',ng='key.calendar.checkout.title',pg='key.calendar.help',fg='key.change',Cf='key.checkin',hg='key.checkin.button',Ef='key.checkout',jg='key.checkout.button',nb='key.close',Dg='key.close.title',kb='key.help',Bg='key.help.title',dg='key.interval',Fg='key.next.month',qg='key.next.month.title',gb='key.next.year',xg='key.next.year.title',bg='key.nights',cb='key.prev.month',sg='key.prev.month.title',ib='key.prev.year',zg='key.prev.year.title',eb='key.today',ug='key.today.title',Bb='keydown',Cb='keypress',Db='keyup',vf='left',Eb='load',Fb='losecapture',re='middle',Cd='moduleStartup',ac='mousedown',bc='mousemove',dc='mouseout',ec='mouseover',fc='mouseup',ic='mousewheel',me='msgCell',qf='none',qb='offsetHeight',rb='offsetWidth',oe='okButton',Dd='onModuleLoadStart',rf='over',sb='overflow',le='panel',mb='popupContent',pc='position',ag='px',rd='px)',qd='px, ',pd='rect(',sd='rect(0px, 0px, 0px, 0px)',ld='rect(auto, auto, auto, auto)',gd='right',vc='rowSpan',gc='scroll',jd='scrollLeft',kd='scrollTop',Bd='startup',bf='submit',ue='table',ve='tbody',De='td',ud='text',lg='top',ye='tr',cf='type',tc='verticalAlign',Af='visibility',md='visible',Ee='width',zd='zIndex';var _;function bE(a){return (this==null?null:this)===(a==null?null:a)}
function cE(){return this.$H||(this.$H=++zk)}
function FD(){}
_=FD.prototype={};_.eQ=bE;_.hC=cE;_.tM=BJ;_.tI=1;function oA(b,a){mi(b,zA(qi(b))+F+a)}
function pA(b,a){BA(b.ab(),a,true)}
function rA(b,a){ri(b,zA(qi(b))+F+a)}
function tA(b,a){if(b.t){uA(b.t,a)}b.t=a}
function uA(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function yA(){return this.t}
function zA(a){var b,c;b=a[ab]==null?null:String(a[ab]);c=b.indexOf(BE(32));if(c>=0){return b.substr(0,c-0)}return b}
function AA(a){this.ab().style[ie]=a}
function BA(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new dE()}j=xE(j);if(j.length==0){throw new pD()}i=c[ab]==null?null:String(c[ab]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=te}c[ab]=i+j}}else{if(e!=-1){b=xE(i.substr(0,e-0));d=xE(vE(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+te+d}c[ab]=h}}}
function CA(a){this.ab()[ab]=a}
function EA(a){this.ab().style[Ee]=a}
function nA(){}
_=nA.prototype=new FD();_.ab=yA;_.ub=AA;_.vb=CA;_.zb=EA;_.tI=3;_.t=null;function rB(a){if(a.q){throw new sD()}a.q=true;a.ab().__listener=a;a.A();a.mb()}
function sB(a){if(!a.q){throw new sD()}try{a.nb()}finally{a.B();a.ab().__listener=null;a.q=false}}
function tB(a){if(a.s){a.s.sb(a)}else if(a.s){throw new sD()}}
function uB(b,a){if(b.q){b.t.__listener=null}tA(b,a);if(b.q){b.t.__listener=b}}
function vB(c,b){var a;a=c.s;if(!b){if(!!a&&a.q){c.lb()}c.s=null}else{if(a){throw new sD()}c.s=b;if(b.q){rB(c)}}}
function wB(){}
function xB(){}
function yB(a){}
function zB(){sB(this)}
function AB(){}
function BB(){}
function FA(){}
_=FA.prototype=new nA();_.A=wB;_.B=xB;_.jb=yB;_.lb=zB;_.mb=AB;_.nb=BB;_.tI=4;_.q=false;_.r=null;_.s=null;function by(b){var a;a=b.hb();while(a.eb()){a.ib();a.qb()}}
function dy(){var a,b;for(b=this.hb();b.eb();){a=um(b.ib(),10);rB(a)}}
function ey(){var a,b;for(b=this.hb();b.eb();){a=um(b.ib(),10);a.lb()}}
function fy(){}
function gy(){}
function ay(){}
_=ay.prototype=new FA();_.A=dy;_.B=ey;_.mb=fy;_.nb=gy;_.tI=5;function Ez(a,b){if(a.p){throw new sD()}a.yb(b)}
function aA(a,b){if(b==a.p){return}if(b){tB(b)}if(a.p){a.sb(a.p)}a.p=b;if(b){a.F().appendChild(a.p.ab());vB(b,a)}}
function bA(){return this.t}
function cA(){return zz(new xz(),this)}
function dA(a){if(this.p!=a){return false}vB(a,null);this.F().removeChild(a.ab());this.p=null;return true}
function eA(a){aA(this,a)}
function wz(){}
_=wz.prototype=new ay();_.F=bA;_.hb=cA;_.sb=dA;_.yb=eA;_.tI=6;_.p=null;function Cy(){Cy=BJ;tC()}
function Dy(a){if(!a.n){return}a.n=false;zy(a.m,false)}
function Ey(a){var b;b=a.p;if(b){if(a.i!=null){b.ub(a.i)}if(a.j!=null){b.zb(a.j)}}}
function Fy(e,d,f){var c,a,b;if(d<0){d=0}if(f<0){f=0}e.l=d;e.o=f;d-=(a=$wnd.getComputedStyle($doc.documentElement,kf),parseInt(a.marginLeft)+parseInt(a.borderLeftWidth));f-=(b=$wnd.getComputedStyle($doc.documentElement,kf),parseInt(b.marginTop)+parseInt(b.borderTopWidth));c=e.t;c.style[vf]=d+ag;c.style[lg]=f+ag}
function az(a,b){aA(a,b);Ey(a)}
function bz(a,b){a.j=b;Ey(a);if(b.length==0){a.j=null}}
function cz(){return vC(il(this.t))}
function dz(){sB(this)}
function ez(a){this.i=a;Ey(this);if(a.length==0){this.i=null}}
function fz(a){aA(this,a);Ey(this)}
function gz(a){bz(this,a)}
function hy(){}
_=hy.prototype=new wz();_.F=cz;_.lb=dz;_.ub=ez;_.yb=fz;_.zb=gz;_.tI=7;_.i=null;_.j=null;_.k=false;_.l=-1;_.n=false;_.o=-1;function ij(){ij=BJ;Cy()}
function gj(b,a){ij();b.t=$doc.createElement(wg);b.h=(ky(),ly);b.m=ty(new ny(),b);b.t.appendChild(uC());Fy(b,0,0);b.t[ab]=bb;vC(il(b.t))[ab]=mb;b.gb(a);return b}
function hj(c,b,a){var d;d=zh(b);if(c.g)vh(c.g,d,a);else Cs(c.f,d,a)}
function jj(a){Dy(a);if(a.e)aj(a.e)}
function kj(b,a){by(b);if((a&4)==4){b.g=uh(new oh(),xb)}else if((a&8)==8){b.g=uh(new oh(),cc);Ez(b,b.g)}else if((a&2)==2){b.g=uh(new oh(),nc);Ez(b,b.g)}else{b.f=Bs(new rs());Ez(b,b.f)}b.k=(a&32)==32;if((a&16)!=16){b.e=Ei(new Di());if((a&64)!=64){Et(b.e,dj(new cj(),b))}}lj(b,999);bz(b,yc);b.t[ab]=dd;if(b.g)pA(b,zA(b.t)+F+od)}
function lj(a,b){a.t.style[zd]=kf+b;if(a.e){a.e.t.style[zd]=ee}}
function mj(){jj(this)}
function nj(a){kj(this,a)}
function bj(){}
_=bj.prototype=new hy();_.fb=mj;_.gb=nj;_.tI=8;_.e=null;_.f=null;_.g=null;function kh(){kh=BJ;ij()}
function hh(a){kh();gj(a,64);lh(a,64);return a}
function ih(b,a){kh();gj(b,64);lh(b,a);return b}
function lh(b,a){kj(b,a);b.a=qt(new mt());b.d=iw(new ku());b.b=ji(new Ch(),je);ui(b.b,fx(new Fw(),ke));if((a&1)==1)b.c=true;b.a.ab()[ab]=le;nu(b.a.b,0,0,me);ew(b.a,0,0,b.d);nu(b.a.b,1,0,ne);ew(b.a,1,0,b.b);mi(b.b,oe);mi(b.b,pe);lI(b.b.a,dh(new ch(),b));zi(b.b,!b.c);b.t[ab]=qe;if((a&4)==4||(a&8)==8||(a&2)==2){pA(b,zA(b.t)+F+od)}hj(b,b.a,(Ds(),it))}
function mh(){jj(this)}
function nh(a){lh(this,a)}
function bh(){}
_=bh.prototype=new bj();_.fb=mh;_.gb=nh;_.tI=9;_.a=null;_.b=null;_.c=false;_.d=null;function dh(b,a){b.a=a;return b}
function fh(a){jj(this.a)}
function ch(){}
_=ch.prototype=new FD();_.kb=fh;_.tI=10;_.a=null;function ms(){ms=BJ;ns=lm(kn,0,1,[lg,re,se])}
function ls(E,C,z){var A,B,D,y;ms();E.t=$doc.createElement(ue);D=E.t;E.e=$doc.createElement(ve);D.appendChild(E.e);D[we]=0;D[xe]=0;for(A=0;A<C.length;++A){B=(y=$doc.createElement(ye),(y[ab]=C[A],undefined),y.appendChild(os(C[A]+ze)),y.appendChild(os(C[A]+Ae)),y.appendChild(os(C[A]+Be)),y);E.e.appendChild(B);if(A==z){E.d=il(pq(B,1))}}E.t[ab]=Ce;return E}
function os(b){var a,c;c=$doc.createElement(De);a=$doc.createElement(wg);c.appendChild(a);c[ab]=b;a[ab]=b+Fe;return c}
function qs(){return this.d}
function ks(){}
_=ks.prototype=new wz();_.F=qs;_.tI=11;_.d=null;_.e=null;var ns;function xh(){xh=BJ;ms()}
function uh(b,a){xh();ls(b,ns,1);b.c=iw(new ku());b.b=iw(new ku());b.a=Bs(new rs());Ez(b,b.a);b.a.ab()[ab]=le;b.t[ab]=nc;Cs(b.a,b.c,(Ds(),it));Cs(b.a,b.b,it);if(a!=null&&a.length>0&&a!=nc)BA(b.t,a,true);return b}
function vh(c,b,a){Cs(c.a,zh(b),a)}
function wh(a,c){var b;b=pq(pq(pq(a.t,0),0),1);if(rE(c,yc)){b.style[Ee]=yc}else{b.style[Ee]=af}}
function yh(){return dB(new bB(),this.a.f)}
function zh(d){var a;xh();var b,c;if(!d){c=null}else if(d){c=d}else{b=bn(d);if(null.Cb().Cb()||null.Cb().Cb()){c=(a=jw(new ku(),b),rB(a),qz(),dJ(vz,a),a)}else{c=qh(new ph(),b)}}return c}
function Ah(a){return Fs(this.a,a)}
function Bh(a){this.t.style[Ee]=a;wh(this,a)}
function oh(){}
_=oh.prototype=new ks();_.hb=yh;_.sb=Ah;_.zb=Bh;_.tI=12;function qh(b,a){b.t=a;return b}
function ph(){}
_=ph.prototype=new wz();_.tI=13;function hu(){hu=BJ;iu=(jC(),lC)}
function ju(a){Fq(a)==1}
function gu(){}
_=gu.prototype=new FA();_.jb=ju;_.tI=14;var iu;function xr(){xr=BJ;hu()}
function wr(b,a){xr();b.t=a;wi(b,0);return b}
function vr(){}
_=vr.prototype=new gu();_.tI=15;function zr(){zr=BJ;xr()}
function Ar(b){if(b.type==bf){try{b.setAttribute(cf,df)}catch(a){}}}
function ur(){}
_=ur.prototype=new vr();_.tI=16;function pi(){pi=BJ;zr()}
function ji(b,a){pi();wr(b,$doc.createElement(df));Ar(qi(b));vi(b,ef);b.f=xx(new wx());b.a=Fr(new Er());b.g=Eh(new Dh(),b);b.d=bi(new ai(),b);b.e=ei(new di(),b);xi(b,1);ti(b,a);return b}
function mi(b,a){BA(qi(b),a,true);if(b.b)pA(b.b,a)}
function ni(a){if(a.i==1){Bv(a.b,0,a.i);qu(a.b.b,0,1).className=ff;a.i=2}}
function oi(a){bs(a.a,a)}
function qi(a){if(!a.c)a.c=a.t;return a.c}
function ri(b,a){BA(qi(b),a,false);if(b.b){BA(b.b.t,a,false)}}
function si(c,a){var b;if(c.c){b=kl(c.c);if(b){b.removeChild(c.c);b.appendChild(a)}}c.c=a}
function ti(b,a){if(!b.b){qi(b).innerHTML=a||kf}else{by(b.h);aA(b.h,kw(new ku(),a));b.h.p.vb(gf)}}
function ui(b,a){a.t[ab]=hf;ni(b);ew(b.b,0,1,a)}
function vi(b,a){qi(b)[ab]=a;if(b.b)pA(b.b,a)}
function wi(b,a){if(!b.b)iu.wb(qi(b),a);else{b.h.t.firstChild.tabIndex=a}}
function xi(b,c){var a;a=!b.b?qi(b).innerHTML:qu(b.b.b,0,b.i).innerHTML;b.c=null;if(b.b){a=null;vv(b.b)}b.b=null;if(c==0){vi(b,jf);mi(b,ef)}else{b.b=qt(new mt());b.b.ab()[ab]=jf;b.b.d[we]=0;b.b.d[xe]=0;dw(b.b,0,0,lf);su(b.b.b,0,0,mf);su(b.b.b,0,1,nf);b.h=Dt(new Ct());Ft(b.h,b.d);au(b.h,b.e);b.h.ab()[ab]=of;ew(b.b,0,1,b.h);dw(b.b,0,2,lf);su(b.b.b,0,2,pf);si(b,b.b.t);jq(b.h.t,7164)}lI(b.f,b.g);ti(b,a);jq(qi(b),1021|(qi(b).__eventBits||0))}
function zi(a,b){qi(a).style.display=b?kf:qf;if(a.b){a.b.t.style.display=b?kf:qf}}
function Ai(){return qi(this)}
function Bi(a){var b;b=Fq(a);Bx(this.f,this,a);if(b==1){ri(this,zA(qi(this))+F+rf);bs(this.a,this);ri(this,zA(qi(this))+F+sf)}else if(this.b){cu(this.h,a)}else{Fq(a)==1}}
function Ci(a){vi(this,a)}
function Ch(){}
_=Ch.prototype=new ur();_.ab=Ai;_.jb=Bi;_.vb=Ci;_.tI=17;_.b=null;_.c=null;_.h=null;_.i=1;function Eh(b,a){b.a=a;return b}
function Dh(){}
_=Dh.prototype=new FD();_.tI=18;_.a=null;function bi(b,a){b.a=a;return b}
function ai(){}
_=ai.prototype=new FD();_.tI=19;_.a=null;function ei(b,a){b.a=a;return b}
function gi(b,a){if(a==13)oi(b.a)}
function di(){}
_=di.prototype=new FD();_.tI=20;_.a=null;function bu(){bu=BJ;eu=(jC(),kC)}
function Dt(a){bu();a.t=dC(eu);cp(a.t,138237|(a.t.__eventBits||0));return a}
function Et(b,a){if(!b.a){b.a=Fr(new Er())}lI(b.a,a)}
function Ft(b,a){if(!b.b){b.b=wt(new vt())}lI(b.b,a)}
function au(b,a){if(!b.c){b.c=kx(new jx())}lI(b.c,a)}
function cu(b,a){switch(Fq(a)){case 1:if(b.a){bs(b.a,b)}break;case 4096:case 2048:if(b.b){yt(b.b,a)}break;case 128:case 512:case 256:if(b.c){px(b.c,a)}}}
function fu(a){cu(this,a)}
function Ct(){}
_=Ct.prototype=new wz();_.jb=fu;_.tI=21;_.a=null;_.b=null;_.c=null;var eu;function Fi(){Fi=BJ;bu()}
function Ei(a){Fi();Dt(a);BA(a.t,tf,true);a.t.style[zd]=ee;return a}
function aj(a){a.ab().style[Ee]=uf;a.ab().style[ie]=uf;a.t.style.display=qf}
function Di(){}
_=Di.prototype=new Ct();_.tI=22;function dj(b,a){b.a=a;return b}
function fj(a){this.a.fb()}
function cj(){}
_=cj.prototype=new FD();_.kb=fj;_.tI=23;_.a=null;function rj(){rj=BJ;ij()}
function qj(a){rj();gj(a,64);a.c=sx(new rx(),kf);a.a=fx(new Fw(),wf);a.b=qt(new mt());if(tz(xf)){tz(xf).t.style.display=qf}a.t[ab]=xf;a.b.ab()[ab]=le;nu(a.b.b,0,0,me);ew(a.b,0,0,a.c);nu(a.b.b,1,0,yf);ew(a.b,1,0,a.a);BA(a.a.ab(),zf,true);az(a,a.b);return a}
function tj(){jj(this);this.t.style[Af]=Bf}
function oj(){}
_=oj.prototype=new bj();_.fb=tj;_.tI=24;function wj(a){a.a=EI(new DI());a.b=EI(new DI());a.c=EI(new DI());hh(new bh());ih(new bh(),(ij(),8));a.d=qj(new oj());sG(a.a,Cf,Df);sG(a.a,Ef,Ff);sG(a.a,bg,cg);sG(a.a,dg,eg);sG(a.a,fg,gg);sG(a.a,hg,ig);sG(a.a,jg,ig);sG(a.a,kg,mg);sG(a.a,ng,og);sG(a.a,pg,kf);sG(a.c,qg,rg);sG(a.c,sg,tg);sG(a.c,ug,vg);sG(a.c,xg,yg);sG(a.c,zg,Ag);sG(a.c,Bg,Cg);sG(a.c,Dg,Eg);sG(a.b,Fg,ah);sG(a.b,cb,db);sG(a.b,eb,fb);sG(a.b,gb,hb);sG(a.b,ib,jb);sG(a.b,kb,lb);sG(a.b,nb,ob);bI(a.b,a.c);ml(a.d.c.t,pb);return a}
function yj(){return}
function uj(){}
_=uj.prototype=new FD();_.tI=0;function Fj(a){if(!a.f){return}qI(fk,a);bk(a);a.h=false;a.f=false}
function bk(a){if(a.h){vy(a)}}
function ck(c,a,b){Fj(c);c.f=true;c.e=a;c.g=b;if(dk(c,(new Date()).getTime())){return}if(!fk){fk=jI(new iI());ek=(Cj(),pp(),new Aj())}lI(fk,c);if(fk.b==1){rp(ek,25)}}
function dk(d,a){var b,c;b=a>=d.g+d.e;if(d.h&&!b){c=(a-d.g)/d.e;yy(d,(1+Math.cos(3.141592653589793+c*3.141592653589793))/2);return false}if(!d.h&&a>=d.g){d.h=true;d.b=parseInt(d.a.t[qb])||0;d.c=parseInt(d.a.t[rb])||0;d.a.t.style[sb]=Bf;yy(d,(1+Math.cos(3.141592653589793))/2)}if(b){vy(d);d.h=false;d.f=false;return true}return false}
function gk(){var a,b,c,d,e,f;e=km(fn,82,20,fk.b,0);e=um(sI(fk,e),2);f=(new Date()).getTime();for(b=e,c=0,d=b.length;c<d;++c){a=b[c];if(a.f&&dk(a,f)){qI(fk,a)}}if(fk.b>0){rp(ek,25)}}
function zj(){}
_=zj.prototype=new FD();_.tI=25;_.e=-1;_.f=false;_.g=-1;_.h=false;var ek=null,fk=null;function pp(){pp=BJ;wp=jI(new iI());Ap(new kp())}
function op(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}qI(wp,a)}
function qp(a){if(!a.b){qI(wp,a)}a.tb()}
function rp(b,a){if(a<=0){throw new pD()}op(b);b.b=false;b.c=up(b,a);lI(wp,b)}
function up(b,a){return $wnd.setTimeout(function(){b.E()},a)}
function vp(){qp(this)}
function jp(){}
_=jp.prototype=new FD();_.E=vp;_.tI=26;_.b=false;_.c=0;var wp;function Cj(){Cj=BJ;pp()}
function Dj(){gk()}
function Aj(){}
_=Aj.prototype=new jp();_.tb=Dj;_.tI=27;function rk(b,a){return b.tM==BJ||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function tk(a){return a.tM==BJ||a.tI==2?a.hC():a.$H||(a.$H=++zk)}
var zk=0;function il(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function kl(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function ml(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function Ek(a){var d=$doc.defaultView.getComputedStyle(a,null);var b=$doc.getBoxObjectFor(a).x-Math.round(d.getPropertyCSSValue(tb).getFloatValue(CSSPrimitiveValue.CSS_PX));var c=a.parentNode;while(c){if(c.scrollLeft>0){b-=c.scrollLeft}c=c.parentNode}return b+(hr(),jr).scrollLeft}
function Fk(a){var c=$doc.defaultView.getComputedStyle(a,null);var e=$doc.getBoxObjectFor(a).y-Math.round(c.getPropertyCSSValue(ub).getFloatValue(CSSPrimitiveValue.CSS_PX));var b=a.parentNode;while(b){if(b.scrollTop>0){e-=b.scrollTop}b=b.parentNode}return e+(hr(),jr).scrollTop}
function im(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function km(a,f,c,b,e){var d;d=im(e,b);lm(a,f,c,d);return d}
function lm(b,d,c,a){if(!mm){mm=new cm()}pm(a,mm);a.aC=b;a.tI=d;a.qI=c;return a}
function nm(a,b,c){if(c!=null){if(a.qI>0&&!sm(c.tI,a.qI)){throw new CC()}if(a.qI<0&&(c.tM==BJ||c.tI==2)){throw new CC()}}return a[b]=c}
function pm(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function cm(){}
_=cm.prototype=new FD();_.tI=0;_.aC=null;_.length=0;_.qI=0;var mm=null;function tm(b,a){return b&&!!cn[b][a]}
function sm(b,a){return b&&cn[b][a]}
function um(b,a){if(b!=null&&!sm(b.tI,a)){throw new aD()}return b}
function bn(a){if(a!=null){throw new aD()}return a}
var cn=[{},{},{1:1,22:1,23:1,24:1},{14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{8:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{12:1},{9:1},{11:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{8:1},{7:1,10:1,14:1},{20:1},{5:1},{5:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{5:1},{5:1},{6:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1},{17:1,22:1},{17:1,22:1},{7:1,10:1,14:1},{21:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1,22:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1,22:1},{17:1,22:1},{22:1,24:1},{22:1,24:1},{20:1},{4:1},{7:1,10:1,13:1,14:1},{6:1},{7:1,10:1,13:1,14:1},{4:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{23:1},{23:1},{3:1,22:1},{19:1},{19:1},{16:1},{16:1},{16:1},{19:1},{18:1,22:1},{19:1,22:1},{16:1},{3:1,22:1},{2:1},{15:1}];function DE(){}
_=DE.prototype=new FD();_.tI=28;function nD(){}
_=nD.prototype=new DE();_.tI=29;function dE(){}
_=dE.prototype=new nD();_.tI=30;function zn(a){return a}
function yn(){}
_=yn.prototype=new dE();_.tI=32;function so(a){a.a=Dn(new Cn(),a);a.b=jI(new iI());a.d=bo(new ao(),a);a.f=ho(new fo(),a);return a}
function uo(b){var a;a=jo(b.f);mo(b.f);if(a!=null&&tm(a.tI,4)){zn(new yn(),um(a,4))}else{}b.c=false;wo(b)}
function vo(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;rp(d.a,10000);while(ko(d.f)){b=lo(d.f);try{if(b==null){return}if(b!=null&&tm(b.tI,4)){a=um(b,4);a.D()}else{}}finally{e=d.f.b==-1;if(e){return}mo(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){op(d.a);d.c=false;wo(d)}}}
function wo(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;rp(a.d,1)}}
function yo(b,a){lI(b.b,a);wo(b)}
function Bn(){}
_=Bn.prototype=new FD();_.tI=0;_.c=false;_.e=false;function En(){En=BJ;pp()}
function Dn(b,a){En();b.a=a;return b}
function Fn(){if(!this.a.c){return}uo(this.a)}
function Cn(){}
_=Cn.prototype=new jp();_.tb=Fn;_.tI=33;_.a=null;function co(){co=BJ;pp()}
function bo(b,a){co();b.a=a;return b}
function eo(){this.a.e=false;vo(this.a,(new Date()).getTime())}
function ao(){}
_=ao.prototype=new jp();_.tb=eo;_.tI=34;_.a=null;function ho(b,a){b.d=a;return b}
function jo(a){return nI(a.d.b,a.b)}
function ko(a){return a.c<a.a}
function lo(b){var a;b.b=b.c;a=nI(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function mo(a){pI(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function oo(){return this.c<this.a}
function po(){return lo(this)}
function qo(){mo(this)}
function fo(){}
_=fo.prototype=new FD();_.eb=oo;_.ib=po;_.qb=qo;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function Do(b,a,c){var d;if(a==ap){if(Fq(b)==8192){ap=null}}d=Co;Co=b;try{c.jb(b)}finally{Co=d}}
function cp(a,b){br();sq(a,b);iq(a,b)}
var Co=null,ap=null;function ep(){ep=BJ;gp=so(new Bn())}
function fp(a){ep();if(!a){throw new CD()}yo(gp,a)}
var gp;function mp(){while((pp(),wp).b>0){op(um(nI(wp,0),5))}}
function np(){return null}
function kp(){}
_=kp.prototype=new FD();_.ob=mp;_.pb=np;_.tI=35;function Ap(a){aq();if(!Bp){Bp=jI(new iI())}lI(Bp,a)}
function Cp(){var a,b;if(Bp){for(b=BG(new zG(),Bp);b.a<b.c.Ab();){a=um(EG(b),6);a.ob()}}}
function Dp(){var a,b,c,d;d=null;if(Bp){for(b=BG(new zG(),Bp);b.a<b.c.Ab();){a=um(EG(b),6);c=a.pb();d=c}}return d}
function Fp(){__gwt_initHandlers(function(){},function(){return Dp()},function(){Cp()})}
function aq(){if(!Ep){Fp();Ep=true}}
var Bp=null,Ep=false;function Fq(a){switch(a.type){case vb:return 4096;case wb:return 1024;case yb:return 1;case zb:return 2;case Ab:return 2048;case Bb:return 128;case Cb:return 256;case Db:return 512;case Eb:return 32768;case Fb:return 8192;case ac:return 4;case bc:return 64;case dc:return 32;case ec:return 16;case fc:return 8;case gc:return 16384;case hc:return 65536;case ic:return 131072;case jc:return 131072;case kc:return 262144;}}
function br(){if(!dr){qq();hq();dr=true}}
function er(a){return a!=null&&tm(a.tI,7)&&!(a!=null&&(a.tM!=BJ&&a.tI!=2))}
var dr=false;function mq(a){if(a.type==ec)return a.relatedTarget;if(a.type==dc)return a.target;return null}
function nq(a){if(a.type==ec)return a.target;if(a.type==dc)return a.relatedTarget;return null}
function pq(c,d){var b=0,a=c.firstChild;while(a){var e=a.nextSibling;if(a.nodeType==1){if(d==b)return a;++b}a=e}return null}
function oq(c){var b=0,a=c.firstChild;while(a){if(a.nodeType==1)++b;a=a.nextSibling}return b}
function qq(){vq=function(b){if(uq(b)){var a=tq;if(a&&a.__listener){if(er(a.__listener)){Do(b,a,a.__listener);b.stopPropagation()}}}};uq=function(a){return true};wq=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(er(c)){Do(b,a,c)}}};$wnd.addEventListener(yb,vq,true);$wnd.addEventListener(zb,vq,true);$wnd.addEventListener(ac,vq,true);$wnd.addEventListener(fc,vq,true);$wnd.addEventListener(bc,vq,true);$wnd.addEventListener(ec,vq,true);$wnd.addEventListener(dc,vq,true);$wnd.addEventListener(ic,vq,true);$wnd.addEventListener(Bb,uq,true);$wnd.addEventListener(Db,uq,true);$wnd.addEventListener(Cb,uq,true)}
function rq(e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break}++c}b=b.nextSibling}e.insertBefore(g,a)}
function sq(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?wq:null;if(b&2)c.ondblclick=a&2?wq:null;if(b&4)c.onmousedown=a&4?wq:null;if(b&8)c.onmouseup=a&8?wq:null;if(b&16)c.onmouseover=a&16?wq:null;if(b&32)c.onmouseout=a&32?wq:null;if(b&64)c.onmousemove=a&64?wq:null;if(b&128)c.onkeydown=a&128?wq:null;if(b&256)c.onkeypress=a&256?wq:null;if(b&512)c.onkeyup=a&512?wq:null;if(b&1024)c.onchange=a&1024?wq:null;if(b&2048)c.onfocus=a&2048?wq:null;if(b&4096)c.onblur=a&4096?wq:null;if(b&8192)c.onlosecapture=a&8192?wq:null;if(b&16384)c.onscroll=a&16384?wq:null;if(b&32768)c.onload=a&32768?wq:null;if(b&65536)c.onerror=a&65536?wq:null;if(b&131072)c.onmousewheel=a&131072?wq:null;if(b&262144)c.oncontextmenu=a&262144?wq:null}
var tq=null,uq=null,vq=null,wq=null;function hq(){$wnd.addEventListener(dc,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(lc==b.target.tagName.toLowerCase()){var c=$doc.createEvent(mc);c.initMouseEvent(fc,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(jc,vq,true)}
function jq(b,a){br();sq(b,a);iq(b,a)}
function iq(b,a){if(a&131072){b.addEventListener(jc,wq,false)}}
function hr(){hr=BJ;jr=ir((hr(),new fr()))}
function ir(){return $doc.compatMode==oc?$doc.documentElement:$doc.body}
function fr(){}
_=fr.prototype=new FD();_.tI=0;var jr;function fs(c,a,b){tB(a);kB(c.f,a);b.appendChild(a.t);vB(a,c)}
function hs(b,c){var a;if(c.s!=b){return false}vB(c,null);a=c.ab();kl(a).removeChild(a);pB(b.f,c);return true}
function is(){return dB(new bB(),this.f)}
function js(a){return hs(this,a)}
function ds(){}
_=ds.prototype=new ay();_.hb=is;_.sb=js;_.tI=36;function pr(a,b){fs(a,b,a.t)}
function rr(b,c){var a;a=hs(b,c);if(a){sr(c.ab())}return a}
function sr(a){a.style[vf]=kf;a.style[lg]=kf;a.style[pc]=kf}
function tr(a){return rr(this,a)}
function or(){}
_=or.prototype=new ds();_.sb=tr;_.tI=37;function Br(){}
_=Br.prototype=new ds();_.tI=38;_.d=null;_.e=null;function dF(a,b){var c;while(a.eb()){c=a.ib();if(b==null?c==null:rk(b,c)){return a}}return null}
function fF(a){throw new FE()}
function gF(b){var a;a=dF(this.hb(),b);return !!a}
function cF(){}
_=cF.prototype=new FD();_.v=fF;_.w=gF;_.tI=0;function fH(a){this.u(this.Ab(),a);return true}
function eH(b,a){throw new FE()}
function gH(a,b){if(a<0||a>=b){jH(a,b)}}
function hH(e){var a,b,c,d,f;if((e==null?null:e)===(this==null?null:this)){return true}if(!(e!=null&&tm(e.tI,17))){return false}f=um(e,17);if(this.Ab()!=f.Ab()){return false}c=BG(new zG(),this);d=f.hb();while(c.a<c.c.Ab()){a=EG(c);b=EG(d);if(!(a==null?b==null:rk(a,b))){return false}}return true}
function iH(){var a,b,c;b=1;a=BG(new zG(),this);while(a.a<a.c.Ab()){c=EG(a);b=31*b+(c==null?0:tk(c));b=~~b}return b}
function jH(a,b){throw wD(new vD(),qc+a+rc+b)}
function kH(){return BG(new zG(),this)}
function lH(a){throw new FE()}
function yG(){}
_=yG.prototype=new cF();_.v=fH;_.u=eH;_.eQ=hH;_.hC=iH;_.hb=kH;_.rb=lH;_.tI=39;function jI(a){a.a=km(jn,0,0,0,0);a.b=0;return a}
function lI(b,a){nm(b.a,b.b++,a);return true}
function kI(c,a,b){if(a<0||a>c.b){jH(a,c.b)}c.a.splice(a,0,b);++c.b}
function nI(b,a){gH(a,b.b);return b.a[a]}
function oI(c,b,a){for(;a<c.b;++a){if(AJ(b,c.a[a])){return a}}return -1}
function pI(c,a){var b;b=(gH(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function qI(f,e){var a;a=oI(f,e,0);if(a==-1){return false}pI(f,a);return true}
function rI(d,a,b){var c;c=(gH(a,d.b),d.a[a]);nm(d.a,a,b);return c}
function sI(e,d){var c,a,b;if(d.length<e.b){d=(a=d,b=im(0,e.b),lm(a.aC,a.tI,a.qI,b),b)}for(c=0;c<e.b;++c){nm(d,c,e.a[c])}if(d.length>e.b){nm(d,e.b,null)}return d}
function uI(a){return nm(this.a,this.b++,a),true}
function tI(a,b){kI(this,a,b)}
function vI(a){return oI(this,a,0)!=-1}
function wI(a){return gH(a,this.b),this.a[a]}
function xI(a){return pI(this,a)}
function yI(){return this.b}
function iI(){}
_=iI.prototype=new yG();_.v=uI;_.u=tI;_.w=vI;_.db=wI;_.rb=xI;_.Ab=yI;_.tI=40;_.a=null;_.b=0;function Fr(a){a.a=km(jn,0,0,0,0);a.b=0;return a}
function bs(d,c){var a,b;for(b=BG(new zG(),d);b.a<b.c.Ab();){a=um(EG(b),8);a.kb(c)}}
function Er(){}
_=Er.prototype=new iI();_.tI=41;function Ds(){Ds=BJ;et=new ss();ht=new ss();gt=new ss();ft=new ss();it=new ss();jt=new ss();kt=new ss()}
function Bs(a){Ds();a.f=jB(new aB(),a);a.e=$doc.createElement(ue);a.d=$doc.createElement(ve);a.e.appendChild(a.d);a.t=a.e;a.b=(uw(),vw);a.c=(Bw(),Cw);a.e[we]=0;a.e[xe]=0;return a}
function Cs(c,d,a){var b;if(a==et){if(d==c.a){return}else if(c.a){throw new pD()}}tB(d);kB(c.f,d);if(a==et){c.a=d}b=ws(new us(),a);d.r=b;at(d,c.b);bt(d,c.c);Es(c);vB(d,c)}
function Es(q){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;a=q.d;while(oq(a)>0){a.removeChild(pq(a,0))}m=1;d=1;for(g=dB(new bB(),q.f);g.a<g.b.c-1;){c=fB(g);e=c.r.a;if(e==it||e==jt){++m}else if(e==ft||e==kt||e==ht||e==gt){++d}}n=km(gn,0,21,m,0);for(f=0;f<m;++f){n[f]=new ys();n[f].b=$doc.createElement(ye);a.appendChild(n[f].b)}i=0;j=d-1;k=0;o=m-1;b=null;for(g=dB(new bB(),q.f);g.a<g.b.c-1;){c=fB(g);h=c.r;p=$doc.createElement(De);h.c=p;h.c[sc]=h.b;h.c.style[tc]=h.d;h.c[Ee]=kf;h.c[ie]=kf;if(h.a==it){rq(n[k].b,p,n[k].a);p.appendChild(c.ab());p[uc]=j-i+1;++k}else if(h.a==jt){rq(n[o].b,p,n[o].a);p.appendChild(c.ab());p[uc]=j-i+1;--o}else if(h.a==et){b=p}else if(ct(h.a)){l=n[k];rq(l.b,p,l.a++);p.appendChild(c.ab());p[vc]=o-k+1;++i}else if(dt(h.a)){l=n[k];rq(l.b,p,l.a);p.appendChild(c.ab());p[vc]=o-k+1;--j}}if(q.a){l=n[k];rq(l.b,b,l.a);b.appendChild(q.a.ab())}}
function Fs(b,c){var a;a=hs(b,c);if(a){if(c==b.a){b.a=null}Es(b)}return a}
function at(c,a){var b;b=c.r;b.b=a.a;if(b.c){b.c[sc]=a.a}}
function bt(c,a){var b;b=c.r;b.d=a.a;if(b.c){b.c.style[tc]=a.a}}
function ct(a){if(a==ht){return true}return a==kt}
function dt(a){if(a==gt){return true}return a==ft}
function lt(a){return Fs(this,a)}
function rs(){}
_=rs.prototype=new Br();_.sb=lt;_.tI=42;_.a=null;var et,ft,gt,ht,it,jt,kt;function ss(){}
_=ss.prototype=new FD();_.tI=0;function ws(b,a){b.b=(uw(),vw).a;b.d=(Bw(),Cw).a;b.a=a;return b}
function us(){}
_=us.prototype=new FD();_.tI=0;_.a=null;_.c=null;function ys(){}
_=ys.prototype=new FD();_.tI=43;_.a=0;_.b=null;function sv(d,c,b){var a;tv(d,c);if(b<0){throw wD(new vD(),wc+b+xc+b)}a=(tv(d,c),d.a.rows[c].cells.length);if(a<=b){throw wD(new vD(),zc+b+Ac+(tv(d,c),d.a.rows[c].cells.length))}}
function tv(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw wD(new vD(),Bc+a+Cc+b)}}
function vv(d){var a,b,c;for(c=0;c<d.a.rows.length;++c){for(b=0;b<(tv(d,c),d.a.rows[c].cells.length);++b){a=Av(d,c,b);if(a){Ev(d,a)}}}}
function Av(e,d,b){var a,c;c=e.b.a.a.rows[d].cells[b];a=il(c);if(!a){return null}else{return jv(e.e,a)}}
function Bv(d,b,a){var c,e;e=d.a.rows[b];c=$doc.createElement(De);rq(e,c,a)}
function Cv(b,a){var c;if(a!=b.a.rows.length){tv(b,a)}c=$doc.createElement(ye);rq(b.a,c,a);return a}
function Dv(d,c,a){var b,e;b=il(c);e=null;if(b){e=jv(d.e,b)}if(e){Ev(d,e);return true}else{if(a){c.innerHTML=kf}return false}}
function Ev(b,c){var a;if(c.s!=b){return false}vB(c,null);a=c.ab();kl(a).removeChild(a);mv(b.e,a);return true}
function cw(b,a){b.c=a;wu(b.c)}
function dw(f,d,a,c){var e,b;st(f,d,a);e=(b=f.b.a.a.rows[d].cells[a],Dv(f,b,c==null),b);if(c!=null){e.innerHTML=c||kf}}
function ew(e,c,a,f){var d,b;st(e,c,a);if(f){tB(f);d=(b=e.b.a.a.rows[c].cells[a],Dv(e,b,true),b);kv(e.e,f);d.appendChild(f.ab());vB(f,e)}}
function fw(){return Du(new Bu(),this.e)}
function gw(a){Fq(a)}
function hw(a){return Ev(this,a)}
function lu(){}
_=lu.prototype=new ay();_.hb=fw;_.jb=gw;_.sb=hw;_.tI=44;_.a=null;_.b=null;_.c=null;_.d=null;function qt(a){a.e=hv(new Au());a.d=$doc.createElement(ue);a.a=$doc.createElement(ve);a.d.appendChild(a.a);a.t=a.d;a.b=ot(new nt(),a);cw(a,uu(new tu(),a));return a}
function st(e,d,b){var a,c;tt(e,d);if(b<0){throw wD(new vD(),Dc+b)}a=(tv(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){ut(e.a,d,c)}}
function tt(d,b){var a,c;if(b<0){throw wD(new vD(),Ec+b)}c=d.a.rows.length;for(a=c;a<=b;++a){Cv(d,a)}}
function ut(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(De);e.appendChild(a)}}
function mt(){}
_=mt.prototype=new lu();_.tI=45;function nu(e,b,a,c){var d;st(e.a,b,a);d=e.a.a.rows[b].cells[a];BA(d,c,true)}
function qu(c,b,a){sv(c.a,b,a);return c.a.a.rows[b].cells[a]}
function su(d,b,a,c){st(d.a,b,a);d.a.a.rows[b].cells[a][ab]=c}
function mu(){}
_=mu.prototype=new FD();_.tI=0;_.a=null;function ot(b,a){b.a=a;return b}
function nt(){}
_=nt.prototype=new mu();_.tI=0;function wt(a){a.a=km(jn,0,0,0,0);a.b=0;return a}
function zt(c){var a,b;for(b=BG(new zG(),c);b.a<b.c.Ab();){a=um(EG(b),9);oA(a.a,Ab)}}
function yt(b,a){switch(Fq(a)){case 2048:zt(b);break;case 4096:At(b);}}
function At(c){var a,b;for(b=BG(new zG(),c);b.a<b.c.Ab();){a=um(EG(b),9);rA(a.a,Ab)}}
function vt(){}
_=vt.prototype=new iI();_.tI=46;function sx(b,a){b.t=$doc.createElement(wg);b.t[ab]=Fc;ml(b.t,a);return b}
function vx(a){Fq(a)}
function rx(){}
_=rx.prototype=new FA();_.jb=vx;_.tI=47;function iw(a){a.t=$doc.createElement(wg);a.t[ab]=ad;return a}
function kw(b,a){iw(b);b.t.innerHTML=a||kf;return b}
function jw(b,a){b.t=a;return b}
function ku(){}
_=ku.prototype=new rx();_.tI=48;function uu(b,a){b.b=a;return b}
function wu(a){if(!a.a){a.a=$doc.createElement(bd);rq(a.b.d,a.a,0);a.a.appendChild($doc.createElement(cd))}}
function tu(){}
_=tu.prototype=new FD();_.tI=0;_.a=null;_.b=null;function hv(a){a.b=jI(new iI());return a}
function jv(d,b){var c,a;c=(a=b[ed],a==null?-1:a);if(c<0){return null}return um(nI(d.b,c),10)}
function kv(b,c){var a;if(!b.a){a=b.b.b;lI(b.b,c)}else{a=b.a.a;rI(b.b,a,c);b.a=b.a.b}c.ab()[ed]=a}
function mv(d,b){var c,a;c=(a=b[ed],a==null?-1:a);b[ed]=null;rI(d.b,c,null);d.a=ev(new dv(),c,d.a)}
function Au(){}
_=Au.prototype=new FD();_.tI=0;_.a=null;function Du(b,a){b.c=a;Fu(b);return b}
function Fu(a){while(++a.b<a.c.b.b){if(nI(a.c.b,a.b)!=null){return}}}
function av(){return this.b<this.c.b.b}
function bv(){var a;if(this.b>=this.c.b.b){throw new uJ()}a=um(nI(this.c.b,this.b),10);this.a=this.b;Fu(this);return a}
function cv(){var a;if(this.a<0){throw new sD()}a=um(nI(this.c.b,this.a),10);tB(a);this.a=-1}
function Bu(){}
_=Bu.prototype=new FD();_.eb=av;_.ib=bv;_.qb=cv;_.tI=0;_.a=-1;_.b=-1;_.c=null;function ev(c,a,b){c.a=a;c.b=b;return c}
function dv(){}
_=dv.prototype=new FD();_.tI=0;_.a=0;_.b=null;function uw(){uw=BJ;sw(new rw(),fd);ww=sw(new rw(),vf);sw(new rw(),gd);vw=ww}
var vw,ww;function sw(b,a){b.a=a;return b}
function rw(){}
_=rw.prototype=new FD();_.tI=0;_.a=null;function Bw(){Bw=BJ;zw(new yw(),se);zw(new yw(),re);Cw=zw(new yw(),lg)}
var Cw;function zw(a,b){a.a=b;return a}
function yw(){}
_=yw.prototype=new FD();_.tI=0;_.a=null;function gx(){gx=BJ;hG(new DI())}
function fx(a,b){gx();dx(new cx(),a,b);a.t[ab]=hd;return a}
function hx(a){Fq(a)}
function Fw(){}
_=Fw.prototype=new FA();_.jb=hx;_.tI=49;function ax(){}
_=ax.prototype=new FD();_.tI=0;function dx(b,a,c){uB(a,$doc.createElement(id));cp(a.t,229501|(a.t.__eventBits||0));a.t.src=c;return b}
function cx(){}
_=cx.prototype=new ax();_.tI=0;function kx(a){a.a=km(jn,0,0,0,0);a.b=0;return a}
function mx(b){var a;for(a=BG(new zG(),b);a.a<a.c.Ab();){um(EG(a),11)}}
function nx(d,a){var b,c;for(c=BG(new zG(),d);c.a<c.c.Ab();){b=um(EG(c),11);gi(b,a)}}
function ox(b){var a;for(a=BG(new zG(),b);a.a<a.c.Ab();){um(EG(a),11)}}
function px(b,a){(a.shiftKey?1:0)|(a.metaKey?8:0)|(a.ctrlKey?2:0)|(a.altKey?4:0);switch(Fq(a)){case 128:mx(b,(a.which||(a.keyCode||0))&65535);break;case 512:ox(b,(a.which||(a.keyCode||0))&65535);break;case 256:nx(b,(a.which||(a.keyCode||0))&65535);}}
function jx(){}
_=jx.prototype=new iI();_.tI=50;function xx(a){a.a=km(jn,0,0,0,0);a.b=0;return a}
function zx(c){var a,b;for(b=BG(new zG(),c);b.a<b.c.Ab();){a=um(EG(b),12);oA(a.a,sf)}}
function Ax(c){var a,b;for(b=BG(new zG(),c);b.a<b.c.Ab();){a=um(EG(b),12);oA(a.a,rf)}}
function Bx(e,c,a){var b,d,f;d=qi(c);(a.clientX||0)-Ek(d)+(parseInt(d[jd])||0)+(hr(),jr).scrollLeft;(a.clientY||0)-Fk(d)+(parseInt(d[kd])||0)+jr.scrollTop;switch(Fq(a)){case 4:zx(e);break;case 8:Ex(e);break;case 64:Dx(e);break;case 16:b=mq(a);if(!b||!(d===b||!!(d.compareDocumentPosition(b)&16))){Ax(e)}break;case 32:f=nq(a);if(!f||!(d===f||!!(d.compareDocumentPosition(f)&16))){Cx(e)}}}
function Cx(c){var a,b;for(b=BG(new zG(),c);b.a<b.c.Ab();){a=um(EG(b),12);rA(a.a,sf);rA(a.a,rf)}}
function Dx(b){var a;for(a=BG(new zG(),b);a.a<a.c.Ab();){um(EG(a),12)}}
function Ex(c){var a,b;for(b=BG(new zG(),c);b.a<b.c.Ab();){a=um(EG(b),12);rA(a.a,sf)}}
function wx(){}
_=wx.prototype=new iI();_.tI=51;function lD(a){return (this==null?null:this)===(a==null?null:a)}
function mD(){return this.$H||(this.$H=++zk)}
function jD(){}
_=jD.prototype=new FD();_.eQ=lD;_.hC=mD;_.tI=52;function ky(){ky=BJ;ly=(ky(),new iy());my=new iy()}
function iy(){}
_=iy.prototype=new jD();_.tI=53;var ly,my;function ty(b,a){b.a=a;return b}
function vy(a){if(!a.d){rr((qz(),tz(null)),a.a)}wC((Cy(),a.a.t),ld);a.a.t.style[sb]=md}
function wy(a){if(a.d){a.a.t.style[pc]=nd;if(a.a.o!=-1){Fy(a.a,a.a.l,a.a.o)}pr((qz(),tz(null)),a.a)}else{rr((qz(),tz(null)),a.a)}a.a.t.style[sb]=md}
function yy(f,d){var a,b,c,e,g,h;if(!f.d){d=1-d}g=0;c=0;e=0;a=0;b=~~Math.max(Math.min(d*f.b,2147483647),-2147483648);h=~~Math.max(Math.min(d*f.c,2147483647),-2147483648);if(f.a.h==(ky(),ly)){g=f.b-b>>1;c=f.c-h>>1}else f.a.h==my;e=c+h;a=g+b;wC((Cy(),f.a.t),pd+g+qd+e+qd+a+qd+c+rd)}
function zy(c,b){var a;Fj(c);a=c.a.k;if(c.a.h==(ky(),my)&&!b){a=false}c.d=b;if(a){if(b){c.a.t.style[pc]=nd;if(c.a.o!=-1){Fy(c.a,c.a.l,c.a.o)}wC((Cy(),c.a.t),sd);pr((qz(),tz(null)),c.a)}fp(py(new oy(),c))}else{wy(c)}}
function ny(){}
_=ny.prototype=new zj();_.tI=54;_.a=null;_.b=0;_.c=-1;_.d=false;function py(b,a){b.a=a;return b}
function ry(){ck(this.a,200,(new Date()).getTime())}
function oy(){}
_=oy.prototype=new FD();_.D=ry;_.tI=55;_.a=null;function qz(){qz=BJ;uz=EI(new DI());vz=cJ(new bJ())}
function pz(b,a){qz();b.f=jB(new aB(),b);b.t=a;rB(b);return b}
function rz(){var b,a;qz();var c,d;for(d=(b=lF(new jF(),aI(vz.a).b.a),pH(new oH(),b));DG(d.a.a);){c=um((a=nF(d.a),a.bb()),10);if(c.q){c.lb()}}}
function tz(b){qz();var a,c;c=um(mG(uz,b),13);if(c){return c}a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(uz.d==0){Ap(new iz())}if(!a){c=nz(new mz())}else{c=pz(new hz(),a)}sG(uz,b,c);dJ(vz,c);return c}
function hz(){}
_=hz.prototype=new or();_.tI=56;var uz,vz;function kz(){rz()}
function lz(){return null}
function iz(){}
_=iz.prototype=new FD();_.ob=kz;_.pb=lz;_.tI=57;function oz(){oz=BJ;qz()}
function nz(a){oz();pz(a,$doc.body);return a}
function mz(){}
_=mz.prototype=new hz();_.tI=58;function zz(b,a){b.c=a;b.a=!!b.c.p;return b}
function Bz(){return this.a}
function Cz(){if(!this.a||!this.c.p){throw new uJ()}this.a=false;return this.b=this.c.p}
function Dz(){if(this.b){this.c.sb(this.b)}}
function xz(){}
_=xz.prototype=new FD();_.eb=Bz;_.ib=Cz;_.qb=Dz;_.tI=0;_.b=null;_.c=null;function jB(b,a){b.b=a;b.a=km(hn,0,10,4,0);return b}
function kB(a,b){nB(a,b,a.c)}
function mB(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]==c){return a}}return -1}
function nB(d,e,a){var b,c;if(a<0||a>d.c){throw new vD()}if(d.c==d.a.length){c=km(hn,0,10,d.a.length*2,0);for(b=0;b<d.a.length;++b){nm(c,b,d.a[b])}d.a=c}++d.c;for(b=d.c-1;b>a;--b){nm(d.a,b,d.a[b-1])}nm(d.a,a,e)}
function oB(c,b){var a;if(b<0||b>=c.c){throw new vD()}--c.c;for(a=b;a<c.c;++a){nm(c.a,a,c.a[a+1])}nm(c.a,c.c,null)}
function pB(b,c){var a;a=mB(b,c);if(a==-1){throw new uJ()}oB(b,a)}
function aB(){}
_=aB.prototype=new FD();_.tI=0;_.a=null;_.b=null;_.c=0;function dB(b,a){b.b=a;return b}
function fB(a){if(a.a>=a.b.c){throw new uJ()}return a.b.a[++a.a]}
function gB(){return this.a<this.b.c-1}
function hB(){return fB(this)}
function iB(){if(this.a<0||this.a>=this.b.c){throw new sD()}this.b.b.sb(this.b.a[this.a--])}
function bB(){}
_=bB.prototype=new FD();_.eb=gB;_.ib=hB;_.qb=iB;_.tI=0;_.a=-1;_.b=null;function jC(){jC=BJ;kC=FB(new DB());lC=kC?(jC(),new CB()):kC}
function mC(a,b){a.tabIndex=b}
function CB(){}
_=CB.prototype=new FD();_.wb=mC;_.tI=0;var kC,lC;function aC(){aC=BJ;jC()}
function FB(a){aC();a.a=bC();a.b=cC();a.c=eC();return a}
function bC(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function cC(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function dC(c){var a=$doc.createElement(wg);var b=c.z();b.addEventListener(vb,c.a,false);b.addEventListener(Ab,c.b,false);a.addEventListener(ac,c.c,false);a.appendChild(b);return a}
function eC(){return function(){this.firstChild.focus()}}
function gC(){var a=$doc.createElement(td);a.type=ud;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=nd;return a}
function hC(a,b){a.firstChild.tabIndex=b}
function DB(){}
_=DB.prototype=new CB();_.z=gC;_.wb=hC;_.tI=0;function tC(){tC=BJ;xC=yC()}
function uC(){var a;a=$doc.createElement(wg);if(xC){a.innerHTML=vd;fp(qC(new pC(),a))}return a}
function vC(a){return xC?il(a):a}
function wC(a,b){a.style[wd]=b;a.style[xd]=qf;a.style[xd]=kf}
function yC(){if(navigator.userAgent.indexOf(yd)!=-1){return true}return false}
var xC;function qC(a,b){a.a=b;return a}
function sC(){this.a.style[sb]=yc}
function pC(){}
_=pC.prototype=new FD();_.D=sC;_.tI=59;_.a=null;function CC(){}
_=CC.prototype=new dE();_.tI=61;function dD(c,a){var b;b=new FC();return b}
function FC(){}
_=FC.prototype=new FD();_.tI=0;function aD(){}
_=aD.prototype=new dE();_.tI=64;function pD(){}
_=pD.prototype=new dE();_.tI=65;function sD(){}
_=sD.prototype=new dE();_.tI=66;function wD(b,a){return b}
function vD(){}
_=vD.prototype=new dE();_.tI=67;function CD(){}
_=CD.prototype=new dE();_.tI=68;function rE(b,a){if(!(a!=null&&tm(a.tI,1))){return false}return String(b)==a}
function vE(b,a){return b.substr(a,b.length-a)}
function xE(c){if(c.length==0||c[0]>te&&c[c.length-1]>te){return c}var a=c.replace(/^(\s*)/,kf);var b=a.replace(/\s*$/,kf);return b}
function zE(a){return rE(this,a)}
function BE(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function CE(){return nE(this)}
_=String.prototype;_.eQ=zE;_.hC=CE;_.tI=2;function iE(){iE=BJ;jE={};mE={}}
function kE(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function nE(c){iE();var a=Ad+c;var b=mE[a];if(b!=null){return b}b=jE[a];if(b==null){b=kE(c)}oE();return mE[a]=b}
function oE(){if(lE==256){jE=mE;mE={};lE=0}++lE}
var jE,lE=0,mE;function FE(){}
_=FE.prototype=new dE();_.tI=71;function aI(b){var a;a=sF(new iF(),b);return vH(new nH(),b,a)}
function bI(d,c){var a,b;for(b=lF(new jF(),sF(new iF(),c).a);DG(b.a);){a=b.b=um(EG(b.a),16);sG(d,a.bb(),a.cb())}}
function cI(c){var a,b,d,e,f;if((c==null?null:c)===(this==null?null:this)){return true}if(!(c!=null&&tm(c.tI,18))){return false}e=um(c,18);if(um(this,18).d!=e.d){return false}for(b=lF(new jF(),sF(new iF(),e).a);DG(b.a);){a=b.b=um(EG(b.a),16);d=a.bb();f=a.cb();if(!(d==null?um(this,18).c:d!=null&&tm(d.tI,1)?oG(um(this,18),um(d,1)):nG(um(this,18),d,~~tk(d)))){return false}if(!AJ(f,d==null?um(this,18).b:d!=null&&tm(d.tI,1)?um(this,18).e[Ad+um(d,1)]:kG(um(this,18),d,~~tk(d)))){return false}}return true}
function dI(){var a,b,c;c=0;for(b=lF(new jF(),sF(new iF(),um(this,18)).a);DG(b.a);){a=b.b=um(EG(b.a),16);c+=a.hC();c=~~c}return c}
function mH(){}
_=mH.prototype=new FD();_.eQ=cI;_.hC=dI;_.tI=0;function fG(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.v(a[f])}}}}
function gG(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=dG(e,c.substring(1));a.v(b)}}}
function hG(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function jG(b,a){return a==null?b.c:a!=null&&tm(a.tI,1)?oG(b,um(a,1)):nG(b,a,~~tk(a))}
function mG(b,a){return a==null?b.b:a!=null&&tm(a.tI,1)?b.e[Ad+um(a,1)]:kG(b,a,~~tk(a))}
function kG(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.bb();if(h.C(g,d)){return c.cb()}}}return null}
function nG(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.bb();if(h.C(g,d)){return true}}}return false}
function oG(b,a){return Ad+a in b.e}
function sG(b,a,c){return a==null?qG(b,c):a!=null&&tm(a.tI,1)?rG(b,um(a,1),c):pG(b,a,c,~~tk(a))}
function pG(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.bb();if(i.C(g,d)){var h=c.cb();c.xb(j);return h}}}else{a=i.a[e]=[]}var c=nJ(new mJ(),g,j);a.push(c);++i.d;return null}
function qG(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function rG(d,a,e){var b,c=d.e;a=Ad+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function wG(b,a){return a==null?uG(b):a!=null&&tm(a.tI,1)?vG(b,um(a,1)):tG(b,a,~~tk(a))}
function tG(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.bb();if(h.C(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.cb()}}}return null}
function uG(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function vG(d,a){var b,c=d.e;a=Ad+a;if(a in c){b=c[a];--d.d;delete c[a]}return b}
function xG(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rk(a,b)}
function hF(){}
_=hF.prototype=new mH();_.C=xG;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function gI(b){var a,c,d;if((b==null?null:b)===(this==null?null:this)){return true}if(!(b!=null&&tm(b.tI,19))){return false}c=um(b,19);if(c.Ab()!=this.Ab()){return false}for(a=c.hb();a.eb();){d=a.ib();if(!this.w(d)){return false}}return true}
function hI(){var a,b,c;a=0;for(b=this.hb();b.eb();){c=b.ib();if(c!=null){a+=tk(c);a=~~a}}return a}
function eI(){}
_=eI.prototype=new cF();_.eQ=gI;_.hC=hI;_.tI=72;function sF(b,a){b.a=a;return b}
function uF(d,c){var a,b,e;if(c!=null&&tm(c.tI,16)){a=um(c,16);b=a.bb();if(jG(d.a,b)){e=mG(d.a,b);return aJ(a.cb(),e)}}return false}
function vF(a){return uF(this,a)}
function wF(){return lF(new jF(),this.a)}
function xF(){return this.a.d}
function iF(){}
_=iF.prototype=new eI();_.w=vF;_.hb=wF;_.Ab=xF;_.tI=73;_.a=null;function lF(c,b){var a;c.c=b;a=jI(new iI());if(c.c.c){lI(a,zF(new yF(),c.c))}gG(c.c,a);fG(c.c,a);c.a=BG(new zG(),a);return c}
function nF(a){return a.b=um(EG(a.a),16)}
function oF(a){if(!a.b){throw new sD()}else{FG(a.a);wG(a.c,a.b.bb());a.b=null}}
function pF(){return DG(this.a)}
function qF(){return this.b=um(EG(this.a),16)}
function rF(){oF(this)}
function jF(){}
_=jF.prototype=new FD();_.eb=pF;_.ib=qF;_.qb=rF;_.tI=0;_.a=null;_.b=null;_.c=null;function DH(b){var a;if(b!=null&&tm(b.tI,16)){a=um(b,16);if(AJ(this.bb(),a.bb())&&AJ(this.cb(),a.cb())){return true}}return false}
function EH(){var a,b;a=0;b=0;if(this.bb()!=null){a=tk(this.bb())}if(this.cb()!=null){b=tk(this.cb())}return a^b}
function BH(){}
_=BH.prototype=new FD();_.eQ=DH;_.hC=EH;_.tI=74;function zF(b,a){b.a=a;return b}
function BF(){return null}
function CF(){return this.a.b}
function DF(a){return qG(this.a,a)}
function yF(){}
_=yF.prototype=new BH();_.bb=BF;_.cb=CF;_.xb=DF;_.tI=75;_.a=null;function FF(c,a,b){c.b=b;c.a=a;return c}
function bG(){return this.a}
function cG(){return this.b.e[Ad+this.a]}
function dG(b,a){return FF(new EF(),a,b)}
function eG(a){return rG(this.b,this.a,a)}
function EF(){}
_=EF.prototype=new BH();_.bb=bG;_.cb=cG;_.xb=eG;_.tI=76;_.a=null;_.b=null;function BG(b,a){b.c=a;return b}
function DG(a){return a.a<a.c.Ab()}
function EG(a){if(a.a>=a.c.Ab()){throw new uJ()}return a.c.db(a.b=a.a++)}
function FG(a){if(a.b<0){throw new sD()}a.c.rb(a.b);a.a=a.b;a.b=-1}
function aH(){return this.a<this.c.Ab()}
function bH(){return EG(this)}
function cH(){FG(this)}
function zG(){}
_=zG.prototype=new FD();_.eb=aH;_.ib=bH;_.qb=cH;_.tI=0;_.a=0;_.b=-1;_.c=null;function vH(b,a,c){b.a=a;b.b=c;return b}
function yH(a){return jG(this.a,a)}
function zH(){var a;return a=lF(new jF(),this.b.a),pH(new oH(),a)}
function AH(){return this.b.a.d}
function nH(){}
_=nH.prototype=new eI();_.w=yH;_.hb=zH;_.Ab=AH;_.tI=77;_.a=null;_.b=null;function pH(a,b){a.a=b;return a}
function sH(){return DG(this.a.a)}
function tH(){var a;return a=nF(this.a),a.bb()}
function uH(){oF(this.a)}
function oH(){}
_=oH.prototype=new FD();_.eb=sH;_.ib=tH;_.qb=uH;_.tI=0;_.a=null;function EI(a){hG(a);return a}
function aJ(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rk(a,b)}
function DI(){}
_=DI.prototype=new hF();_.tI=78;function cJ(a){a.a=EI(new DI());return a}
function dJ(c,a){var b;b=sG(c.a,a,c);return b==null}
function fJ(b){var a;return a=sG(this.a,b,this),a==null}
function gJ(a){return jG(this.a,a)}
function hJ(){var a;return a=lF(new jF(),aI(this.a).b.a),pH(new oH(),a)}
function iJ(){return this.a.d}
function bJ(){}
_=bJ.prototype=new eI();_.v=fJ;_.w=gJ;_.hb=hJ;_.Ab=iJ;_.tI=79;_.a=null;function nJ(b,a,c){b.a=a;b.b=c;return b}
function pJ(){return this.a}
function qJ(){return this.b}
function sJ(b){var a;a=this.b;this.b=b;return a}
function mJ(){}
_=mJ.prototype=new BH();_.bb=pJ;_.cb=qJ;_.xb=sJ;_.tI=80;_.a=null;_.b=null;function uJ(){}
_=uJ.prototype=new dE();_.tI=81;function AJ(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rk(a,b)}
function AC(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Bd,evtGroup:Cd,millis:(new Date()).getTime(),type:Dd,className:Ed});yj(wj(new uj()))}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{AC()}catch(a){b(d)}else{AC()}}
function BJ(){}
var kn=dD(Fd,ae),jn=dD(Fd,be),fn=dD(ce,de),gn=dD(fe,ge),hn=dD(fe,he);$stats && $stats({moduleName:'com.google.code.p.gwtcsample.GWTCSample',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_google_code_p_gwtcsample_GWTCSample) {  var __gwt_initHandlers = com_google_code_p_gwtcsample_GWTCSample.__gwt_initHandlers;  com_google_code_p_gwtcsample_GWTCSample.onScriptLoad(gwtOnLoad);}})();