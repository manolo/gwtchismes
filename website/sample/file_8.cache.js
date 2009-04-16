(function(){var $gwt_version = "1.5.3";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.google.code.p.gwtcsample.GWTCSample',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var zd='',bf=' ',cd=' must be non-negative: ',zf='&nbsp;',fd=', Column size: ',hd=', Row size: ',Cc=', Size: ',F='-',xg='...',eg='0px',pf='100%',ee='998',je=':',fh='Actual month',ue='Animation;',ub='BackgroundImageCache',zc='CSS1Compat',id='Cannot create a column with a negative index: ',jd='Cannot create a row with a negative index: ',jf='Center',vg='Change',mg='Checkin',pg='Checkout',pb='Close',nh='Close dialog',bd='Column ',ed='Column index: ',bg='DIV',jc='DOMMouseScroll',we='DockPanel$TmpRow;',Ee='GWTCAlert',cc='GWTCBox',xb='GWTCBox-blue',mb='GWTCBox-grey',xf='GWTCBtn',Bf='GWTCBtn-c',Cf='GWTCBtn-focus',wf='GWTCBtn-img',Af='GWTCBtn-l',uf='GWTCBtn-ml',Df='GWTCBtn-r',vf='GWTCBtn-text',cg='GWTCGlassPanel',yc='GWTCPopupBox',gg='GWTCWait',nb='Help',lh='Help dialog',Bc='Index: ',of='Inner',tg='Interval',hf='Left',cb='Next',ah='Next month',hh='Next year',ib='Next-Y',rg='Nights',qe='OK',se='Object;',qb='Please wait ...',eb='Prev',kb='Prev-Y',ch='Previous month',jh='Previous year',kf='Right',gd='Row index: ',Bg='Select your checkin date',Dg='Select your checkout date',re='String;',gb='Today',xe='Widget;',te='[Lcom.google.gwt.animation.client.',ve='[Lcom.google.gwt.user.client.ui.',oe='[Ljava.lang.',pd='__widgetID',Ad='absolute',Dc='align',ce='alpha(opacity=0)',nc='auto',vb='blur',af='bottom',dd='box',Be='btnCell',sf='button',ff='cellPadding',ef='cellSpacing',qd='center',wb='change',ab='className',yb='click',wd='clip',nd='col',Fc='colSpan',md='colgroup',ne='com.google.code.p.gwtcsample.client.GWTCSample',kc='contextmenu',zb='dblclick',yf='div',ag='down',hc='error',Ab='focus',tf='gwt-Button',lf='gwt-DecoratorPanel',ld='gwt-HTML',sd='gwt-Image',kd='gwt-Label',dg='gwt-PopupPanel',De='gwtc-alert-rndbutton',pe='height',kg='hidden',Fd='iframe',ig='image',ye='images/button/dialog-ok.gif',fg='images/gwtc-wait-loading.gif',td='img',hg='imgCell',ae="javascript:''",Ag='key.calendar.checkin.title',Cg='key.calendar.checkout.title',Eg='key.calendar.help',ug='key.change',lg='key.checkin',wg='key.checkin.button',ng='key.checkout',yg='key.checkout.button',ob='key.close',mh='key.close.title',lb='key.help',kh='key.help.title',sg='key.interval',oh='key.next.month',Fg='key.next.month.title',hb='key.next.year',gh='key.next.year.title',qg='key.nights',db='key.prev.month',bh='key.prev.month.title',jb='key.prev.year',ih='key.prev.year.title',fb='key.today',dh='key.today.title',Bb='keydown',Cb='keypress',Db='keyup',zg='left',Eb='load',Fb='losecapture',Fe='middle',le='moduleStartup',ac='mousedown',bc='mousemove',dc='mouseout',ec='mouseover',fc='mouseup',ic='mousewheel',Ae='msgCell',be='no',Ef='none',rb='offsetHeight',sb='offsetWidth',Ce='okButton',me='onModuleLoadStart',vc='onblur',lc='onclick',xc='oncontextmenu',wc='ondblclick',uc='onfocus',rc='onkeydown',sc='onkeypress',tc='onkeyup',mc='onmousedown',pc='onmousemove',oc='onmouseup',qc='onmousewheel',Ff='over',tb='overflow',ze='panel',og='popupContent',Ac='position',eh='px',Dd='px)',Cd='px, ',Bd='rect(',Ed='rect(0px, 0px, 0px, 0px)',xd='rect(auto, auto, auto, auto)',rd='right',ad='rowSpan',gc='scroll',ud='scrollLeft',vd='scrollTop',ke='startup',qf='submit',cf='table',df='tbody',mf='td',he='this.__popup.offsetHeight',de='this.__popup.offsetLeft',fe='this.__popup.offsetTop',ge='this.__popup.offsetWidth',ie='this.__popup.style.zIndex',bb='top',gf='tr',rf='type',Ec='verticalAlign',jg='visibility',yd='visible',nf='width',od='zIndex';var _;function AD(a){return (this==null?null:this)===(a==null?null:a)}
function BD(){return this.$H||(this.$H=++fl)}
function yD(){}
_=yD.prototype={};_.eQ=AD;_.hC=BD;_.tM=uJ;_.tI=1;function zA(b,a){zi(b,eB(Di(b))+F+a)}
function AA(b,a){gB(b.C(),a,true)}
function CA(b,a){Ei(b,eB(Di(b))+F+a)}
function EA(b,a){if(b.t){FA(b.t,a)}b.t=a}
function FA(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function dB(){return this.t}
function eB(a){var b,c;b=a[ab]==null?null:String(a[ab]);c=b.indexOf(uE(32));if(c>=0){return b.substr(0,c-0)}return b}
function fB(a){this.C().style[pe]=a}
function gB(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new CD()}j=qE(j);if(j.length==0){throw new iD()}i=c[ab]==null?null:String(c[ab]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=bf}c[ab]=i+j}}else{if(e!=-1){b=qE(i.substr(0,e-0));d=qE(oE(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+bf+d}c[ab]=h}}}
function hB(a){this.C()[ab]=a}
function jB(a){this.C().style[nf]=a}
function yA(){}
_=yA.prototype=new yD();_.C=dB;_.qb=fB;_.rb=hB;_.ub=jB;_.tI=3;_.t=null;function CB(a){if(a.q){throw new lD()}a.q=true;a.C().__listener=a;a.x();a.ib()}
function DB(a){if(!a.q){throw new lD()}try{a.jb()}finally{a.y();a.C().__listener=null;a.q=false}}
function EB(a){if(a.s){a.s.ob(a)}else if(a.s){throw new lD()}}
function FB(b,a){if(b.q){b.t.__listener=null}EA(b,a);if(b.q){b.t.__listener=b}}
function aC(c,b){var a;a=c.s;if(!b){if(!!a&&a.q){c.hb()}c.s=null}else{if(a){throw new lD()}c.s=b;if(b.q){CB(c)}}}
function bC(){}
function cC(){}
function dC(a){}
function eC(){DB(this)}
function fC(){}
function gC(){}
function kB(){}
_=kB.prototype=new yA();_.x=bC;_.y=cC;_.fb=dC;_.hb=eC;_.ib=fC;_.jb=gC;_.tI=4;_.q=false;_.r=null;_.s=null;function ny(b){var a;a=b.db();while(a.ab()){a.eb();a.mb()}}
function py(){var a,b;for(b=this.db();b.ab();){a=hn(b.eb(),10);CB(a)}}
function qy(){var a,b;for(b=this.db();b.ab();){a=hn(b.eb(),10);a.hb()}}
function ry(){}
function sy(){}
function my(){}
_=my.prototype=new kB();_.x=py;_.y=qy;_.ib=ry;_.jb=sy;_.tI=5;function jA(a,b){if(a.p){throw new lD()}a.tb(b)}
function lA(a,b){if(b==a.p){return}if(b){EB(b)}if(a.p){a.ob(a.p)}a.p=b;if(b){a.B().appendChild(a.p.C());aC(b,a)}}
function mA(){return this.t}
function nA(){return eA(new cA(),this)}
function oA(a){if(this.p!=a){return false}aC(a,null);this.B().removeChild(a.C());this.p=null;return true}
function pA(a){lA(this,a)}
function bA(){}
_=bA.prototype=new my();_.B=mA;_.db=nA;_.ob=oA;_.tb=pA;_.tI=6;_.p=null;function gz(a){a.t=$doc.createElement(yf);a.h=(wy(),xy);a.m=Ey(new zy(),a);a.t.appendChild($doc.createElement(yf));kz(a,0,0);a.t[ab]=dg;sl(a.t)[ab]=og;return a}
function iz(a){if(!a.n){return}a.n=false;ez(a.m,false)}
function jz(a){var b;b=a.p;if(b){if(a.i!=null){b.qb(a.i)}if(a.j!=null){b.ub(a.j)}}}
function kz(c,b,d){var a;if(b<0){b=0}if(d<0){d=0}c.l=b;c.o=d;b-=(vr(),xr).clientLeft;d-=xr.clientTop;a=c.t;a.style[zg]=b+eh;a.style[bb]=d+eh}
function lz(a,b){lA(a,b);jz(a)}
function mz(a,b){a.j=b;jz(a);if(b.length==0){a.j=null}}
function nz(){return sl(this.t)}
function oz(){DB(this)}
function pz(a){this.i=a;jz(this);if(a.length==0){this.i=null}}
function qz(a){lA(this,a);jz(this)}
function rz(a){mz(this,a)}
function ty(){}
_=ty.prototype=new bA();_.B=nz;_.hb=oz;_.qb=pz;_.tb=qz;_.ub=rz;_.tI=7;_.i=null;_.j=null;_.k=false;_.l=-1;_.n=false;_.o=-1;function tj(c,b,a){var d;d=gi(b);if(c.g)ci(c.g,d,a);else kt(c.f,d,a)}
function vj(a){iz(a);if(a.e)nj(a.e)}
function wj(b,a){ny(b);if((a&4)==4){b.g=bi(new Bh(),mb)}else if((a&8)==8){b.g=bi(new Bh(),xb);jA(b,b.g)}else if((a&2)==2){b.g=bi(new Bh(),cc);jA(b,b.g)}else{b.f=jt(new Fs());jA(b,b.f)}b.k=(a&32)==32;if((a&16)!=16){b.e=lj(new kj());if((a&64)!=64){mu(b.e,qj(new pj(),b))}}xj(b,999);mz(b,nc);b.t[ab]=yc;if(b.g)AA(b,eB(b.t)+F+dd)}
function xj(a,b){a.t.style[od]=zd+b;if(a.e){a.e.t.style[od]=ee}}
function yj(){vj(this)}
function zj(a){wj(this,a)}
function oj(){}
_=oj.prototype=new ty();_.bb=yj;_.cb=zj;_.tI=8;_.e=null;_.f=null;_.g=null;function vh(b,a){gz(b);b.cb(64);yh(b,a);return b}
function yh(b,a){wj(b,a);b.a=Et(new At());b.d=uw(new wu());b.b=wi(new ji(),qe);bj(b.b,rx(new lx(),ye));if((a&1)==1)b.c=true;b.a.C()[ab]=ze;zu(b.a.b,0,0,Ae);qw(b.a,0,0,b.d);zu(b.a.b,1,0,Be);qw(b.a,1,0,b.b);zi(b.b,Ce);zi(b.b,De);eI(b.b.a,rh(new qh(),b));gj(b.b,!b.c);b.t[ab]=Ee;if((a&4)==4||(a&8)==8||(a&2)==2){AA(b,eB(b.t)+F+dd)}tj(b,b.a,(lt(),wt))}
function zh(){vj(this)}
function Ah(a){yh(this,a)}
function ph(){}
_=ph.prototype=new oj();_.bb=zh;_.cb=Ah;_.tI=9;_.a=null;_.b=null;_.c=false;_.d=null;function rh(b,a){b.a=a;return b}
function th(a){vj(this.a)}
function qh(){}
_=qh.prototype=new yD();_.gb=th;_.tI=10;_.a=null;function As(){As=uJ;Bs=Em(Dn,0,1,[bb,Fe,af])}
function zs(E,C,z){var A,B,D,y;As();E.t=$doc.createElement(cf);D=E.t;E.e=$doc.createElement(df);D.appendChild(E.e);D[ef]=0;D[ff]=0;for(A=0;A<C.length;++A){B=(y=$doc.createElement(gf),(y[ab]=C[A],undefined),y.appendChild(Cs(C[A]+hf)),y.appendChild(Cs(C[A]+jf)),y.appendChild(Cs(C[A]+kf)),y);E.e.appendChild(B);if(A==z){E.d=sl(B.children[1])}}E.t[ab]=lf;return E}
function Cs(b){var a,c;c=$doc.createElement(mf);a=$doc.createElement(yf);c.appendChild(a);c[ab]=b;a[ab]=b+of;return c}
function Es(){return this.d}
function ys(){}
_=ys.prototype=new bA();_.B=Es;_.tI=11;_.d=null;_.e=null;var Bs;function ei(){ei=uJ;As()}
function bi(b,a){ei();zs(b,Bs,1);b.c=uw(new wu());b.b=uw(new wu());b.a=jt(new Fs());jA(b,b.a);b.a.C()[ab]=ze;b.t[ab]=cc;kt(b.a,b.c,(lt(),wt));kt(b.a,b.b,wt);if(a!=null&&a.length>0&&a!=cc)gB(b.t,a,true);return b}
function ci(c,b,a){kt(c.a,gi(b),a)}
function di(a,c){var b;b=Dq(Dq(a.t.children[0],0),1);if(kE(c,nc)){b.style[nf]=nc}else{b.style[nf]=pf}}
function fi(){return oB(new mB(),this.a.f)}
function gi(d){var a;ei();var b,c;if(!d){c=null}else if(d){c=d}else{b=vn(d);if(null.xb().xb()||null.xb().xb()){c=(a=vw(new wu(),b),CB(a),Bz(),CI(aA,a),a)}else{c=Dh(new Ch(),b)}}return c}
function hi(a){return nt(this.a,a)}
function ii(a){this.t.style[nf]=a;di(this,a)}
function Bh(){}
_=Bh.prototype=new ys();_.db=fi;_.ob=hi;_.ub=ii;_.tI=12;function Dh(b,a){b.t=a;return b}
function Ch(){}
_=Ch.prototype=new bA();_.tI=13;function vu(a){nr(a)==1}
function tu(){}
_=tu.prototype=new kB();_.fb=vu;_.tI=14;function es(b,a){b.t=a;dj(b,0);return b}
function ds(){}
_=ds.prototype=new tu();_.tI=15;function is(b){if(b.type==qf){try{b.setAttribute(rf,sf)}catch(a){}}}
function cs(){}
_=cs.prototype=new ds();_.tI=16;function wi(b,a){es(b,$doc.createElement(sf));is(Di(b));cj(b,tf);b.f=dy(new cy());b.a=ns(new ms());b.g=li(new ki(),b);b.d=oi(new ni(),b);b.e=ri(new qi(),b);ej(b,1);aj(b,a);return b}
function zi(b,a){gB(Di(b),a,true);if(b.b)AA(b.b,a)}
function Ai(a){if(a.i==1){hw(a.b,0,a.i);Cu(a.b.b,0,1).className=uf;a.i=2}}
function Bi(a){ps(a.a,a)}
function Di(a){if(!a.c)a.c=a.t;return a.c}
function Ei(b,a){gB(Di(b),a,false);if(b.b){gB(b.b.t,a,false)}}
function Fi(c,a){var b;if(c.c){b=c.c.parentElement;if(b){b.removeChild(c.c);b.appendChild(a)}}c.c=a}
function aj(b,a){if(!b.b){Di(b).innerHTML=a||zd}else{ny(b.h);lA(b.h,ww(new wu(),a));b.h.p.rb(vf)}}
function bj(b,a){a.t[ab]=wf;Ai(b);qw(b.b,0,1,a)}
function cj(b,a){Di(b)[ab]=a;if(b.b)AA(b.b,a)}
function dj(b,a){if(!b.b){Di(b).tabIndex=a}else{b.h.t.tabIndex=a}}
function ej(b,c){var a;a=!b.b?Di(b).innerHTML:Cu(b.b.b,0,b.i).innerHTML;b.c=null;if(b.b){a=null;bw(b.b)}b.b=null;if(c==0){cj(b,xf);zi(b,tf)}else{b.b=Et(new At());b.b.C()[ab]=xf;b.b.d[ef]=0;b.b.d[ff]=0;pw(b.b,0,0,zf);Eu(b.b.b,0,0,Af);Eu(b.b.b,0,1,Bf);b.h=lu(new ku());nu(b.h,b.d);ou(b.h,b.e);b.h.C()[ab]=Cf;qw(b.b,0,1,b.h);pw(b.b,0,2,zf);Eu(b.b.b,0,2,Df);Fi(b,b.b.t);br(b.h.t,7164)}eI(b.f,b.g);aj(b,a);br(Di(b),1021|(Di(b).__eventBits||0))}
function gj(a,b){Di(a).style.display=b?zd:Ef;if(a.b){a.b.t.style.display=b?zd:Ef}}
function hj(){return Di(this)}
function ij(a){var b;b=nr(a);hy(this.f,this,a);if(b==1){Ei(this,eB(Di(this))+F+Ff);ps(this.a,this);Ei(this,eB(Di(this))+F+ag)}else if(this.b){qu(this.h,a)}else{nr(a)==1}}
function jj(a){cj(this,a)}
function ji(){}
_=ji.prototype=new cs();_.C=hj;_.fb=ij;_.rb=jj;_.tI=17;_.b=null;_.c=null;_.h=null;_.i=1;function li(b,a){b.a=a;return b}
function ki(){}
_=ki.prototype=new yD();_.tI=18;_.a=null;function oi(b,a){b.a=a;return b}
function ni(){}
_=ni.prototype=new yD();_.tI=19;_.a=null;function ri(b,a){b.a=a;return b}
function ti(b,a){if(a==13)Bi(b.a)}
function qi(){}
_=qi.prototype=new yD();_.tI=20;_.a=null;function lu(b){var a;b.t=(a=$doc.createElement(bg),a.tabIndex=0,a);vp(b.t,138237|(b.t.__eventBits||0));return b}
function mu(b,a){if(!b.a){b.a=ns(new ms())}eI(b.a,a)}
function nu(b,a){if(!b.b){b.b=eu(new du())}eI(b.b,a)}
function ou(b,a){if(!b.c){b.c=wx(new vx())}eI(b.c,a)}
function qu(b,a){switch(nr(a)){case 1:if(b.a){ps(b.a,b)}break;case 4096:case 2048:if(b.b){gu(b.b,a)}break;case 128:case 512:case 256:if(b.c){Bx(b.c,a)}}}
function su(a){qu(this,a)}
function ku(){}
_=ku.prototype=new bA();_.fb=su;_.tI=21;_.a=null;_.b=null;_.c=null;function lj(d){lu(d);gB(d.t,cg,true);d.t.style[od]=ee;return d}
function nj(a){a.C().style[nf]=eg;a.C().style[pe]=eg;a.t.style.display=Ef}
function kj(){}
_=kj.prototype=new ku();_.tI=22;function qj(b,a){b.a=a;return b}
function sj(a){this.a.bb()}
function pj(){}
_=pj.prototype=new yD();_.gb=sj;_.tI=23;_.a=null;function Cj(a){gz(a);a.cb(64);a.c=Ex(new Dx(),zd);a.a=rx(new lx(),fg);a.b=Et(new At());if(Ez(gg)){Ez(gg).t.style.display=Ef}a.t[ab]=gg;a.b.C()[ab]=ze;zu(a.b.b,0,0,Ae);qw(a.b,0,0,a.c);zu(a.b.b,1,0,hg);qw(a.b,1,0,a.a);gB(a.a.C(),ig,true);lz(a,a.b);return a}
function Fj(){vj(this);this.t.style[jg]=kg;qC(this.t,false)}
function Aj(){}
_=Aj.prototype=new oj();_.bb=Fj;_.tI=24;function ck(a){a.a=xI(new wI());a.b=xI(new wI());a.c=xI(new wI());vh(new ph(),64);vh(new ph(),8);a.d=Cj(new Aj());lG(a.a,lg,mg);lG(a.a,ng,pg);lG(a.a,qg,rg);lG(a.a,sg,tg);lG(a.a,ug,vg);lG(a.a,wg,xg);lG(a.a,yg,xg);lG(a.a,Ag,Bg);lG(a.a,Cg,Dg);lG(a.a,Eg,zd);lG(a.c,Fg,ah);lG(a.c,bh,ch);lG(a.c,dh,fh);lG(a.c,gh,hh);lG(a.c,ih,jh);lG(a.c,kh,lh);lG(a.c,mh,nh);lG(a.b,oh,cb);lG(a.b,db,eb);lG(a.b,fb,gb);lG(a.b,hb,ib);lG(a.b,jb,kb);lG(a.b,lb,nb);lG(a.b,ob,pb);AH(a.b,a.c);a.d.c.t.innerText=qb;return a}
function ek(){return}
function ak(){}
_=ak.prototype=new yD();_.tI=0;function lk(a){if(!a.f){return}jI(rk,a);nk(a);a.h=false;a.f=false}
function nk(a){if(a.h){az(a)}}
function ok(c,a,b){lk(c);c.f=true;c.e=a;c.g=b;if(pk(c,(new Date()).getTime())){return}if(!rk){rk=cI(new bI());qk=(ik(),cq(),new gk())}eI(rk,c);if(rk.b==1){eq(qk,25)}}
function pk(d,a){var b,c;b=a>=d.g+d.e;if(d.h&&!b){c=(a-d.g)/d.e;dz(d,(1+Math.cos(3.141592653589793+c*3.141592653589793))/2);return false}if(!d.h&&a>=d.g){d.h=true;d.b=parseInt(d.a.t[rb])||0;d.c=parseInt(d.a.t[sb])||0;d.a.t.style[tb]=kg;dz(d,(1+Math.cos(3.141592653589793))/2)}if(b){az(d);d.h=false;d.f=false;return true}return false}
function sk(){var a,b,c,d,e,f;e=Dm(zn,81,20,rk.b,0);e=hn(lI(rk,e),2);f=(new Date()).getTime();for(b=e,c=0,d=b.length;c<d;++c){a=b[c];if(a.f&&pk(a,f)){jI(rk,a)}}if(rk.b>0){eq(qk,25)}}
function fk(){}
_=fk.prototype=new yD();_.tI=25;_.e=-1;_.f=false;_.g=-1;_.h=false;var qk=null,rk=null;function cq(){cq=uJ;jq=cI(new bI());nq(new Dp())}
function bq(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}jI(jq,a)}
function dq(a){if(!a.b){jI(jq,a)}a.pb()}
function eq(b,a){if(a<=0){throw new iD()}bq(b);b.b=false;b.c=hq(b,a);eI(jq,b)}
function hq(b,a){return $wnd.setTimeout(function(){b.A()},a)}
function iq(){dq(this)}
function Cp(){}
_=Cp.prototype=new yD();_.A=iq;_.tI=26;_.b=false;_.c=0;var jq;function ik(){ik=uJ;cq()}
function jk(){sk()}
function gk(){}
_=gk.prototype=new Cp();_.pb=jk;_.tI=27;function Dk(b,a){return b.tM==uJ||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function Fk(a){return a.tM==uJ||a.tI==2?a.hC():a.$H||(a.$H=++fl)}
var fl=0;function sl(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function cm(){cm=uJ;fm()}
function em(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function fm(){try{$doc.execCommand(ub,false,true)}catch(a){}}
function jm(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function km(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;em(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function lm(a,c){cm();var b,d;if(kE(a.__pendingSrc||a.src,c)){return}if(!mm){mm={}}b=a.__pendingSrc;if(b!=null){d=mm[b];if(d==a){km(mm,d)}else{jm(d,a)}}d=mm[c];if(!d){em(mm,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var mm=null;function Bm(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function Dm(a,f,c,b,e){var d;d=Bm(e,b);Em(a,f,c,d);return d}
function Em(b,d,c,a){if(!Fm){Fm=new vm()}cn(a,Fm);a.aC=b;a.tI=d;a.qI=c;return a}
function an(a,b,c){if(c!=null){if(a.qI>0&&!fn(c.tI,a.qI)){throw new vC()}if(a.qI<0&&(c.tM==uJ||c.tI==2)){throw new vC()}}return a[b]=c}
function cn(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function vm(){}
_=vm.prototype=new yD();_.tI=0;_.aC=null;_.length=0;_.qI=0;var Fm=null;function gn(b,a){return b&&!!wn[b][a]}
function fn(b,a){return b&&wn[b][a]}
function hn(b,a){if(b!=null&&!fn(b.tI,a)){throw new zC()}return b}
function vn(a){if(a!=null){throw new zC()}return a}
var wn=[{},{},{1:1,22:1,23:1,24:1},{14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{8:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{12:1},{9:1},{11:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{8:1},{7:1,10:1,14:1},{20:1},{5:1},{5:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{5:1},{5:1},{6:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1},{17:1,22:1},{17:1,22:1},{7:1,10:1,14:1},{21:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1,22:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{7:1,10:1,14:1},{17:1,22:1},{17:1,22:1},{22:1,24:1},{22:1,24:1},{20:1},{4:1},{7:1,10:1,13:1,14:1},{6:1},{7:1,10:1,13:1,14:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{3:1,22:1},{23:1},{23:1},{3:1,22:1},{19:1},{19:1},{16:1},{16:1},{16:1},{19:1},{18:1,22:1},{19:1,22:1},{16:1},{3:1,22:1},{2:1},{15:1}];function wE(){}
_=wE.prototype=new yD();_.tI=28;function gD(){}
_=gD.prototype=new wE();_.tI=29;function CD(){}
_=CD.prototype=new gD();_.tI=30;function no(a){return a}
function mo(){}
_=mo.prototype=new CD();_.tI=32;function fp(a){a.a=ro(new qo(),a);a.b=cI(new bI());a.d=vo(new uo(),a);a.f=Ao(new yo(),a);return a}
function hp(b){var a;a=Co(b.f);Fo(b.f);if(a!=null&&gn(a.tI,4)){no(new mo(),hn(a,4))}else{}b.c=false;jp(b)}
function ip(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;eq(d.a,10000);while(Do(d.f)){b=Eo(d.f);try{if(b==null){return}if(b!=null&&gn(b.tI,4)){a=hn(b,4);ok(a.a,200,(new Date()).getTime())}else{}}finally{e=d.f.b==-1;if(e){return}Fo(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){bq(d.a);d.c=false;jp(d)}}}
function jp(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;eq(a.d,1)}}
function lp(b,a){eI(b.b,a);jp(b)}
function po(){}
_=po.prototype=new yD();_.tI=0;_.c=false;_.e=false;function so(){so=uJ;cq()}
function ro(b,a){so();b.a=a;return b}
function to(){if(!this.a.c){return}hp(this.a)}
function qo(){}
_=qo.prototype=new Cp();_.pb=to;_.tI=33;_.a=null;function wo(){wo=uJ;cq()}
function vo(b,a){wo();b.a=a;return b}
function xo(){this.a.e=false;ip(this.a,(new Date()).getTime())}
function uo(){}
_=uo.prototype=new Cp();_.pb=xo;_.tI=34;_.a=null;function Ao(b,a){b.d=a;return b}
function Co(a){return gI(a.d.b,a.b)}
function Do(a){return a.c<a.a}
function Eo(b){var a;b.b=b.c;a=gI(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function Fo(a){iI(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function bp(){return this.c<this.a}
function cp(){return Eo(this)}
function dp(){Fo(this)}
function yo(){}
_=yo.prototype=new yD();_.ab=bp;_.eb=cp;_.mb=dp;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function qp(b,a,c){var d;if(a==tp){if(nr(b)==8192){tp=null}}d=pp;pp=b;try{c.fb(b)}finally{pp=d}}
function sp(a){return true}
function vp(a,b){pr();ar(a,b)}
var pp=null,tp=null;function xp(){xp=uJ;zp=fp(new po())}
function yp(a){xp();if(!a){throw new vD()}lp(zp,a)}
var zp;function Fp(){while((cq(),jq).b>0){bq(hn(gI(jq,0),5))}}
function aq(){return null}
function Dp(){}
_=Dp.prototype=new yD();_.kb=Fp;_.lb=aq;_.tI=35;function nq(a){tq();if(!oq){oq=cI(new bI())}eI(oq,a)}
function pq(){var a,b;if(oq){for(b=uG(new sG(),oq);b.a<b.c.vb();){a=hn(xG(b),6);a.kb()}}}
function qq(){var a,b,c,d;d=null;if(oq){for(b=uG(new sG(),oq);b.a<b.c.vb();){a=hn(xG(b),6);c=a.lb();d=c}}return d}
function sq(){__gwt_initHandlers(function(){},function(){return qq()},function(){pq()})}
function tq(){if(!rq){sq();rq=true}}
var oq=null,rq=false;function nr(a){switch(a.type){case vb:return 4096;case wb:return 1024;case yb:return 1;case zb:return 2;case Ab:return 2048;case Bb:return 128;case Cb:return 256;case Db:return 512;case Eb:return 32768;case Fb:return 8192;case ac:return 4;case bc:return 64;case dc:return 32;case ec:return 16;case fc:return 8;case gc:return 16384;case hc:return 65536;case ic:return 131072;case jc:return 131072;case kc:return 262144;}}
function pr(){if(!rr){Eq();rr=true}}
var rr=false;function Dq(a,b){return a.children[b]}
function Eq(){er=function(){var c=cr;cr=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!sp($wnd.event)){cr=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&gn(b.tI,7)&&!(b!=null&&(b.tM!=uJ&&b.tI!=2))){qp($wnd.event,a,b)}}cr=c};dr=function(){var a=$doc.createEventObject();this.fireEvent(lc,a);if(this.__eventBits&2){er.call(this)}};var e=function(){er.call($doc.body)};var d=function(){dr.call($doc.body)};$doc.body.attachEvent(lc,e);$doc.body.attachEvent(mc,e);$doc.body.attachEvent(oc,e);$doc.body.attachEvent(pc,e);$doc.body.attachEvent(qc,e);$doc.body.attachEvent(rc,e);$doc.body.attachEvent(sc,e);$doc.body.attachEvent(tc,e);$doc.body.attachEvent(uc,e);$doc.body.attachEvent(vc,e);$doc.body.attachEvent(wc,d);$doc.body.attachEvent(xc,e)}
function Fq(c,a,b){if(b>=c.children.length)c.appendChild(a);else c.insertBefore(a,c.children[b])}
function br(b,a){pr();ar(b,a)}
function ar(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?er:null;if(b&3)c.ondblclick=a&3?dr:null;if(b&4)c.onmousedown=a&4?er:null;if(b&8)c.onmouseup=a&8?er:null;if(b&16)c.onmouseover=a&16?er:null;if(b&32)c.onmouseout=a&32?er:null;if(b&64)c.onmousemove=a&64?er:null;if(b&128)c.onkeydown=a&128?er:null;if(b&256)c.onkeypress=a&256?er:null;if(b&512)c.onkeyup=a&512?er:null;if(b&1024)c.onchange=a&1024?er:null;if(b&2048)c.onfocus=a&2048?er:null;if(b&4096)c.onblur=a&4096?er:null;if(b&8192)c.onlosecapture=a&8192?er:null;if(b&16384)c.onscroll=a&16384?er:null;if(b&32768)c.onload=a&32768?er:null;if(b&65536)c.onerror=a&65536?er:null;if(b&131072)c.onmousewheel=a&131072?er:null;if(b&262144)c.oncontextmenu=a&262144?er:null}
var cr=null,dr=null,er=null;function vr(){vr=uJ;xr=wr((vr(),new tr()))}
function wr(){return $doc.compatMode==zc?$doc.documentElement:$doc.body}
function tr(){}
_=tr.prototype=new yD();_.tI=0;var xr;function ts(c,a,b){EB(a);vB(c.f,a);b.appendChild(a.t);aC(a,c)}
function vs(b,c){var a;if(c.s!=b){return false}aC(c,null);a=c.C();a.parentElement.removeChild(a);AB(b.f,c);return true}
function ws(){return oB(new mB(),this.f)}
function xs(a){return vs(this,a)}
function rs(){}
_=rs.prototype=new my();_.db=ws;_.ob=xs;_.tI=36;function Dr(a,b){ts(a,b,a.t)}
function Fr(b,c){var a;a=vs(b,c);if(a){as(c.C())}return a}
function as(a){a.style[zg]=zd;a.style[bb]=zd;a.style[Ac]=zd}
function bs(a){return Fr(this,a)}
function Cr(){}
_=Cr.prototype=new rs();_.ob=bs;_.tI=37;function js(){}
_=js.prototype=new rs();_.tI=38;_.d=null;_.e=null;function CE(a,b){var c;while(a.ab()){c=a.eb();if(b==null?c==null:Dk(b,c)){return a}}return null}
function EE(a){throw new yE()}
function FE(b){var a;a=CE(this.db(),b);return !!a}
function BE(){}
_=BE.prototype=new yD();_.v=EE;_.w=FE;_.tI=0;function EG(a){this.u(this.vb(),a);return true}
function DG(b,a){throw new yE()}
function FG(a,b){if(a<0||a>=b){cH(a,b)}}
function aH(e){var a,b,c,d,f;if((e==null?null:e)===(this==null?null:this)){return true}if(!(e!=null&&gn(e.tI,17))){return false}f=hn(e,17);if(this.vb()!=f.vb()){return false}c=uG(new sG(),this);d=f.db();while(c.a<c.c.vb()){a=xG(c);b=xG(d);if(!(a==null?b==null:Dk(a,b))){return false}}return true}
function bH(){var a,b,c;b=1;a=uG(new sG(),this);while(a.a<a.c.vb()){c=xG(a);b=31*b+(c==null?0:Fk(c));b=~~b}return b}
function cH(a,b){throw pD(new oD(),Bc+a+Cc+b)}
function dH(){return uG(new sG(),this)}
function eH(a){throw new yE()}
function rG(){}
_=rG.prototype=new BE();_.v=EG;_.u=DG;_.eQ=aH;_.hC=bH;_.db=dH;_.nb=eH;_.tI=39;function cI(a){a.a=Dm(Cn,0,0,0,0);a.b=0;return a}
function eI(b,a){an(b.a,b.b++,a);return true}
function dI(c,a,b){if(a<0||a>c.b){cH(a,c.b)}c.a.splice(a,0,b);++c.b}
function gI(b,a){FG(a,b.b);return b.a[a]}
function hI(c,b,a){for(;a<c.b;++a){if(tJ(b,c.a[a])){return a}}return -1}
function iI(c,a){var b;b=(FG(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function jI(f,e){var a;a=hI(f,e,0);if(a==-1){return false}iI(f,a);return true}
function kI(d,a,b){var c;c=(FG(a,d.b),d.a[a]);an(d.a,a,b);return c}
function lI(e,d){var c,a,b;if(d.length<e.b){d=(a=d,b=Bm(0,e.b),Em(a.aC,a.tI,a.qI,b),b)}for(c=0;c<e.b;++c){an(d,c,e.a[c])}if(d.length>e.b){an(d,e.b,null)}return d}
function nI(a){return an(this.a,this.b++,a),true}
function mI(a,b){dI(this,a,b)}
function oI(a){return hI(this,a,0)!=-1}
function pI(a){return FG(a,this.b),this.a[a]}
function qI(a){return iI(this,a)}
function rI(){return this.b}
function bI(){}
_=bI.prototype=new rG();_.v=nI;_.u=mI;_.w=oI;_.F=pI;_.nb=qI;_.vb=rI;_.tI=40;_.a=null;_.b=0;function ns(a){a.a=Dm(Cn,0,0,0,0);a.b=0;return a}
function ps(d,c){var a,b;for(b=uG(new sG(),d);b.a<b.c.vb();){a=hn(xG(b),8);a.gb(c)}}
function ms(){}
_=ms.prototype=new bI();_.tI=41;function lt(){lt=uJ;st=new at();vt=new at();ut=new at();tt=new at();wt=new at();xt=new at();yt=new at()}
function jt(a){lt();a.f=uB(new lB(),a);a.e=$doc.createElement(cf);a.d=$doc.createElement(df);a.e.appendChild(a.d);a.t=a.e;a.b=(ax(),bx);a.c=(hx(),ix);a.e[ef]=0;a.e[ff]=0;return a}
function kt(c,d,a){var b;if(a==st){if(d==c.a){return}else if(c.a){throw new iD()}}EB(d);vB(c.f,d);if(a==st){c.a=d}b=et(new ct(),a);d.r=b;ot(d,c.b);pt(d,c.c);mt(c);aC(d,c)}
function mt(q){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;a=q.d;while(a.children.length>0){a.removeChild(a.children[0])}m=1;d=1;for(g=oB(new mB(),q.f);g.a<g.b.c-1;){c=qB(g);e=c.r.a;if(e==wt||e==xt){++m}else if(e==tt||e==yt||e==vt||e==ut){++d}}n=Dm(An,0,21,m,0);for(f=0;f<m;++f){n[f]=new gt();n[f].b=$doc.createElement(gf);a.appendChild(n[f].b)}i=0;j=d-1;k=0;o=m-1;b=null;for(g=oB(new mB(),q.f);g.a<g.b.c-1;){c=qB(g);h=c.r;p=$doc.createElement(mf);h.c=p;h.c[Dc]=h.b;h.c.style[Ec]=h.d;h.c[nf]=zd;h.c[pe]=zd;if(h.a==wt){Fq(n[k].b,p,n[k].a);p.appendChild(c.C());p[Fc]=j-i+1;++k}else if(h.a==xt){Fq(n[o].b,p,n[o].a);p.appendChild(c.C());p[Fc]=j-i+1;--o}else if(h.a==st){b=p}else if(qt(h.a)){l=n[k];Fq(l.b,p,l.a++);p.appendChild(c.C());p[ad]=o-k+1;++i}else if(rt(h.a)){l=n[k];Fq(l.b,p,l.a);p.appendChild(c.C());p[ad]=o-k+1;--j}}if(q.a){l=n[k];Fq(l.b,b,l.a);b.appendChild(q.a.C())}}
function nt(b,c){var a;a=vs(b,c);if(a){if(c==b.a){b.a=null}mt(b)}return a}
function ot(c,a){var b;b=c.r;b.b=a.a;if(b.c){b.c[Dc]=a.a}}
function pt(c,a){var b;b=c.r;b.d=a.a;if(b.c){b.c.style[Ec]=a.a}}
function qt(a){if(a==vt){return true}return a==yt}
function rt(a){if(a==ut){return true}return a==tt}
function zt(a){return nt(this,a)}
function Fs(){}
_=Fs.prototype=new js();_.ob=zt;_.tI=42;_.a=null;var st,tt,ut,vt,wt,xt,yt;function at(){}
_=at.prototype=new yD();_.tI=0;function et(b,a){b.b=(ax(),bx).a;b.d=(hx(),ix).a;b.a=a;return b}
function ct(){}
_=ct.prototype=new yD();_.tI=0;_.a=null;_.c=null;function gt(){}
_=gt.prototype=new yD();_.tI=43;_.a=0;_.b=null;function Ev(d,c,b){var a;Fv(d,c);if(b<0){throw pD(new oD(),bd+b+cd+b)}a=(Fv(d,c),d.a.rows[c].cells.length);if(a<=b){throw pD(new oD(),ed+b+fd+(Fv(d,c),d.a.rows[c].cells.length))}}
function Fv(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw pD(new oD(),gd+a+hd+b)}}
function bw(d){var a,b,c;for(c=0;c<d.a.rows.length;++c){for(b=0;b<(Fv(d,c),d.a.rows[c].cells.length);++b){a=gw(d,c,b);if(a){kw(d,a)}}}}
function gw(e,d,b){var a,c;c=e.b.a.a.rows[d].cells[b];a=sl(c);if(!a){return null}else{return vv(e.e,a)}}
function hw(d,b,a){var c,e;e=d.a.rows[b];c=$doc.createElement(mf);Fq(e,c,a)}
function iw(b,a){var c;if(a!=b.a.rows.length){Fv(b,a)}c=$doc.createElement(gf);Fq(b.a,c,a);return a}
function jw(d,c,a){var b,e;b=sl(c);e=null;if(b){e=vv(d.e,b)}if(e){kw(d,e);return true}else{if(a){c.innerHTML=zd}return false}}
function kw(b,c){var a;if(c.s!=b){return false}aC(c,null);a=c.C();a.parentElement.removeChild(a);yv(b.e,a);return true}
function ow(b,a){b.c=a;cv(b.c)}
function pw(f,d,a,c){var e,b;au(f,d,a);e=(b=f.b.a.a.rows[d].cells[a],jw(f,b,c==null),b);if(c!=null){e.innerHTML=c||zd}}
function qw(e,c,a,f){var d,b;au(e,c,a);if(f){EB(f);d=(b=e.b.a.a.rows[c].cells[a],jw(e,b,true),b);wv(e.e,f);d.appendChild(f.C());aC(f,e)}}
function rw(){return jv(new hv(),this.e)}
function sw(a){nr(a)}
function tw(a){return kw(this,a)}
function xu(){}
_=xu.prototype=new my();_.db=rw;_.fb=sw;_.ob=tw;_.tI=44;_.a=null;_.b=null;_.c=null;_.d=null;function Et(a){a.e=tv(new gv());a.d=$doc.createElement(cf);a.a=$doc.createElement(df);a.d.appendChild(a.a);a.t=a.d;a.b=Ct(new Bt(),a);ow(a,av(new Fu(),a));return a}
function au(e,d,b){var a,c;bu(e,d);if(b<0){throw pD(new oD(),id+b)}a=(Fv(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){cu(e.a,d,c)}}
function bu(d,b){var a,c;if(b<0){throw pD(new oD(),jd+b)}c=d.a.rows.length;for(a=c;a<=b;++a){iw(d,a)}}
function cu(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(mf);e.appendChild(a)}}
function At(){}
_=At.prototype=new xu();_.tI=45;function zu(e,b,a,c){var d;au(e.a,b,a);d=e.a.a.rows[b].cells[a];gB(d,c,true)}
function Cu(c,b,a){Ev(c.a,b,a);return c.a.a.rows[b].cells[a]}
function Eu(d,b,a,c){au(d.a,b,a);d.a.a.rows[b].cells[a][ab]=c}
function yu(){}
_=yu.prototype=new yD();_.tI=0;_.a=null;function Ct(b,a){b.a=a;return b}
function Bt(){}
_=Bt.prototype=new yu();_.tI=0;function eu(a){a.a=Dm(Cn,0,0,0,0);a.b=0;return a}
function hu(c){var a,b;for(b=uG(new sG(),c);b.a<b.c.vb();){a=hn(xG(b),9);zA(a.a,Ab)}}
function gu(b,a){switch(nr(a)){case 2048:hu(b);break;case 4096:iu(b);}}
function iu(c){var a,b;for(b=uG(new sG(),c);b.a<b.c.vb();){a=hn(xG(b),9);CA(a.a,Ab)}}
function du(){}
_=du.prototype=new bI();_.tI=46;function Ex(b,a){b.t=$doc.createElement(yf);b.t[ab]=kd;b.t.innerText=a||zd;return b}
function by(a){nr(a)}
function Dx(){}
_=Dx.prototype=new kB();_.fb=by;_.tI=47;function uw(a){a.t=$doc.createElement(yf);a.t[ab]=ld;return a}
function ww(b,a){uw(b);b.t.innerHTML=a||zd;return b}
function vw(b,a){b.t=a;return b}
function wu(){}
_=wu.prototype=new Dx();_.tI=48;function av(b,a){b.b=a;return b}
function cv(a){if(!a.a){a.a=$doc.createElement(md);Fq(a.b.d,a.a,0);a.a.appendChild($doc.createElement(nd))}}
function Fu(){}
_=Fu.prototype=new yD();_.tI=0;_.a=null;_.b=null;function tv(a){a.b=cI(new bI());return a}
function vv(d,b){var c,a;c=(a=b[pd],a==null?-1:a);if(c<0){return null}return hn(gI(d.b,c),10)}
function wv(b,c){var a;if(!b.a){a=b.b.b;eI(b.b,c)}else{a=b.a.a;kI(b.b,a,c);b.a=b.a.b}c.C()[pd]=a}
function yv(d,b){var c,a;c=(a=b[pd],a==null?-1:a);b[pd]=null;kI(d.b,c,null);d.a=qv(new pv(),c,d.a)}
function gv(){}
_=gv.prototype=new yD();_.tI=0;_.a=null;function jv(b,a){b.c=a;lv(b);return b}
function lv(a){while(++a.b<a.c.b.b){if(gI(a.c.b,a.b)!=null){return}}}
function mv(){return this.b<this.c.b.b}
function nv(){var a;if(this.b>=this.c.b.b){throw new nJ()}a=hn(gI(this.c.b,this.b),10);this.a=this.b;lv(this);return a}
function ov(){var a;if(this.a<0){throw new lD()}a=hn(gI(this.c.b,this.a),10);EB(a);this.a=-1}
function hv(){}
_=hv.prototype=new yD();_.ab=mv;_.eb=nv;_.mb=ov;_.tI=0;_.a=-1;_.b=-1;_.c=null;function qv(c,a,b){c.a=a;c.b=b;return c}
function pv(){}
_=pv.prototype=new yD();_.tI=0;_.a=0;_.b=null;function ax(){ax=uJ;Ew(new Dw(),qd);cx=Ew(new Dw(),zg);Ew(new Dw(),rd);bx=cx}
var bx,cx;function Ew(b,a){b.a=a;return b}
function Dw(){}
_=Dw.prototype=new yD();_.tI=0;_.a=null;function hx(){hx=uJ;fx(new ex(),af);fx(new ex(),Fe);ix=fx(new ex(),bb)}
var ix;function fx(a,b){a.a=b;return a}
function ex(){}
_=ex.prototype=new yD();_.tI=0;_.a=null;function sx(){sx=uJ;aG(new wI())}
function rx(a,b){sx();px(new ox(),a,b);a.t[ab]=sd;return a}
function tx(a){nr(a)}
function lx(){}
_=lx.prototype=new kB();_.fb=tx;_.tI=49;function mx(){}
_=mx.prototype=new yD();_.tI=0;function px(b,a,c){FB(a,$doc.createElement(td));vp(a.t,229501|(a.t.__eventBits||0));lm(a.t,c);return b}
function ox(){}
_=ox.prototype=new mx();_.tI=0;function wx(a){a.a=Dm(Cn,0,0,0,0);a.b=0;return a}
function yx(b){var a;for(a=uG(new sG(),b);a.a<a.c.vb();){hn(xG(a),11)}}
function zx(d,a){var b,c;for(c=uG(new sG(),d);c.a<c.c.vb();){b=hn(xG(c),11);ti(b,a)}}
function Ax(b){var a;for(a=uG(new sG(),b);a.a<a.c.vb();){hn(xG(a),11)}}
function Bx(b,a){(a.shiftKey?1:0)|(a.metaKey?8:0)|(a.ctrlKey?2:0)|(a.altKey?4:0);switch(nr(a)){case 128:yx(b,(a.which||(a.keyCode||0))&65535);break;case 512:Ax(b,(a.which||(a.keyCode||0))&65535);break;case 256:zx(b,(a.which||(a.keyCode||0))&65535);}}
function vx(){}
_=vx.prototype=new bI();_.tI=50;function dy(a){a.a=Dm(Cn,0,0,0,0);a.b=0;return a}
function fy(c){var a,b;for(b=uG(new sG(),c);b.a<b.c.vb();){a=hn(xG(b),12);zA(a.a,ag)}}
function gy(c){var a,b;for(b=uG(new sG(),c);b.a<b.c.vb();){a=hn(xG(b),12);zA(a.a,Ff)}}
function hy(e,c,a){var b,d,f;d=Di(c);(a.clientX||0)-(d.getBoundingClientRect().left+(vr(),xr).scrollLeft)+(parseInt(d[ud])||0)+xr.scrollLeft;(a.clientY||0)-(d.getBoundingClientRect().top+xr.scrollTop)+(parseInt(d[vd])||0)+xr.scrollTop;switch(nr(a)){case 4:fy(e);break;case 8:ky(e);break;case 64:jy(e);break;case 16:b=a.fromElement;if(!b||!(d===b||d.contains(b))){gy(e)}break;case 32:f=a.toElement;if(!f||!(d===f||d.contains(f))){iy(e)}}}
function iy(c){var a,b;for(b=uG(new sG(),c);b.a<b.c.vb();){a=hn(xG(b),12);CA(a.a,ag);CA(a.a,Ff)}}
function jy(b){var a;for(a=uG(new sG(),b);a.a<a.c.vb();){hn(xG(a),12)}}
function ky(c){var a,b;for(b=uG(new sG(),c);b.a<b.c.vb();){a=hn(xG(b),12);CA(a.a,ag)}}
function cy(){}
_=cy.prototype=new bI();_.tI=51;function eD(a){return (this==null?null:this)===(a==null?null:a)}
function fD(){return this.$H||(this.$H=++fl)}
function cD(){}
_=cD.prototype=new yD();_.eQ=eD;_.hC=fD;_.tI=52;function wy(){wy=uJ;xy=(wy(),new uy());yy=new uy()}
function uy(){}
_=uy.prototype=new cD();_.tI=53;var xy,yy;function Ey(b,a){b.a=a;return b}
function az(a){if(!a.d){Fr((Bz(),Ez(null)),a.a);oC(a.a.t)}a.a.t.style[wd]=xd;a.a.t.style[tb]=yd}
function bz(a){if(a.d){a.a.t.style[Ac]=Ad;if(a.a.o!=-1){kz(a.a,a.a.l,a.a.o)}Dr((Bz(),Ez(null)),a.a);pC(a.a.t)}else{Fr((Bz(),Ez(null)),a.a);oC(a.a.t)}a.a.t.style[tb]=yd}
function dz(f,d){var a,b,c,e,g,h;if(!f.d){d=1-d}g=0;c=0;e=0;a=0;b=~~Math.max(Math.min(d*f.b,2147483647),-2147483648);h=~~Math.max(Math.min(d*f.c,2147483647),-2147483648);if(f.a.h==(wy(),xy)){g=f.b-b>>1;c=f.c-h>>1}else f.a.h==yy;e=c+h;a=g+b;f.a.t.style[wd]=Bd+g+Cd+e+Cd+a+Cd+c+Dd}
function ez(c,b){var a;lk(c);a=c.a.k;if(c.a.h==(wy(),yy)&&!b){a=false}c.d=b;if(a){if(b){c.a.t.style[Ac]=Ad;if(c.a.o!=-1){kz(c.a,c.a.l,c.a.o)}c.a.t.style[wd]=Ed;Dr((Bz(),Ez(null)),c.a);pC(c.a.t)}yp(By(new Ay(),c))}else{bz(c)}}
function zy(){}
_=zy.prototype=new fk();_.tI=54;_.a=null;_.b=0;_.c=-1;_.d=false;function By(b,a){b.a=a;return b}
function Ay(){}
_=Ay.prototype=new yD();_.tI=55;_.a=null;function Bz(){Bz=uJ;Fz=xI(new wI());aA=BI(new AI())}
function Az(b,a){Bz();b.f=uB(new lB(),b);b.t=a;CB(b);return b}
function Cz(){var b,a;Bz();var c,d;for(d=(b=eF(new cF(),zH(aA.a).b.a),iH(new hH(),b));wG(d.a.a);){c=hn((a=gF(d.a),a.D()),10);if(c.q){c.hb()}}}
function Ez(b){Bz();var a,c;c=hn(fG(Fz,b),13);if(c){return c}a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(Fz.d==0){nq(new tz())}if(!a){c=yz(new xz())}else{c=Az(new sz(),a)}lG(Fz,b,c);CI(aA,c);return c}
function sz(){}
_=sz.prototype=new Cr();_.tI=56;var Fz,aA;function vz(){Cz()}
function wz(){return null}
function tz(){}
_=tz.prototype=new yD();_.kb=vz;_.lb=wz;_.tI=57;function zz(){zz=uJ;Bz()}
function yz(a){zz();Az(a,$doc.body);return a}
function xz(){}
_=xz.prototype=new sz();_.tI=58;function eA(b,a){b.c=a;b.a=!!b.c.p;return b}
function gA(){return this.a}
function hA(){if(!this.a||!this.c.p){throw new nJ()}this.a=false;return this.b=this.c.p}
function iA(){if(this.b){this.c.ob(this.b)}}
function cA(){}
_=cA.prototype=new yD();_.ab=gA;_.eb=hA;_.mb=iA;_.tI=0;_.b=null;_.c=null;function uB(b,a){b.b=a;b.a=Dm(Bn,0,10,4,0);return b}
function vB(a,b){yB(a,b,a.c)}
function xB(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]==c){return a}}return -1}
function yB(d,e,a){var b,c;if(a<0||a>d.c){throw new oD()}if(d.c==d.a.length){c=Dm(Bn,0,10,d.a.length*2,0);for(b=0;b<d.a.length;++b){an(c,b,d.a[b])}d.a=c}++d.c;for(b=d.c-1;b>a;--b){an(d.a,b,d.a[b-1])}an(d.a,a,e)}
function zB(c,b){var a;if(b<0||b>=c.c){throw new oD()}--c.c;for(a=b;a<c.c;++a){an(c.a,a,c.a[a+1])}an(c.a,c.c,null)}
function AB(b,c){var a;a=xB(b,c);if(a==-1){throw new nJ()}zB(b,a)}
function lB(){}
_=lB.prototype=new yD();_.tI=0;_.a=null;_.b=null;_.c=0;function oB(b,a){b.b=a;return b}
function qB(a){if(a.a>=a.b.c){throw new nJ()}return a.b.a[++a.a]}
function rB(){return this.a<this.b.c-1}
function sB(){return qB(this)}
function tB(){if(this.a<0||this.a>=this.b.c){throw new lD()}this.b.b.ob(this.b.a[this.a--])}
function mB(){}
_=mB.prototype=new yD();_.ab=rB;_.eb=sB;_.mb=tB;_.tI=0;_.a=-1;_.b=null;function oC(b){var a=b.__frame;if(a){a.parentElement.removeChild(a);a.__popup=null;b.__frame=null}}
function pC(b){var a=$doc.createElement(Fd);a.src=ae;a.scrolling=be;a.frameBorder=0;b.__frame=a;a.__popup=b;var c=a.style;c.position=Ad;c.filter=ce;c.visibility=b.style.visibility;c.border=0;c.padding=0;c.margin=0;c.left=b.offsetLeft;c.top=b.offsetTop;c.width=b.offsetWidth;c.height=b.offsetHeight;c.zIndex=b.style.zIndex;c.setExpression(zg,de);c.setExpression(bb,fe);c.setExpression(nf,ge);c.setExpression(pe,he);c.setExpression(od,ie);b.parentElement.insertBefore(a,b)}
function qC(a,c){if(a.__frame){a.__frame.style.visibility=c?yd:kg}}
function vC(){}
_=vC.prototype=new CD();_.tI=60;function CC(c,a){var b;b=new yC();return b}
function yC(){}
_=yC.prototype=new yD();_.tI=0;function zC(){}
_=zC.prototype=new CD();_.tI=63;function iD(){}
_=iD.prototype=new CD();_.tI=64;function lD(){}
_=lD.prototype=new CD();_.tI=65;function pD(b,a){return b}
function oD(){}
_=oD.prototype=new CD();_.tI=66;function vD(){}
_=vD.prototype=new CD();_.tI=67;function kE(b,a){if(!(a!=null&&gn(a.tI,1))){return false}return String(b)==a}
function oE(b,a){return b.substr(a,b.length-a)}
function qE(c){if(c.length==0||c[0]>bf&&c[c.length-1]>bf){return c}var a=c.replace(/^(\s*)/,zd);var b=a.replace(/\s*$/,zd);return b}
function sE(a){return kE(this,a)}
function uE(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function vE(){return gE(this)}
_=String.prototype;_.eQ=sE;_.hC=vE;_.tI=2;function bE(){bE=uJ;cE={};fE={}}
function dE(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function gE(c){bE();var a=je+c;var b=fE[a];if(b!=null){return b}b=cE[a];if(b==null){b=dE(c)}hE();return fE[a]=b}
function hE(){if(eE==256){cE=fE;fE={};eE=0}++eE}
var cE,eE=0,fE;function yE(){}
_=yE.prototype=new CD();_.tI=70;function zH(b){var a;a=lF(new bF(),b);return oH(new gH(),b,a)}
function AH(d,c){var a,b;for(b=eF(new cF(),lF(new bF(),c).a);wG(b.a);){a=b.b=hn(xG(b.a),16);lG(d,a.D(),a.E())}}
function BH(c){var a,b,d,e,f;if((c==null?null:c)===(this==null?null:this)){return true}if(!(c!=null&&gn(c.tI,18))){return false}e=hn(c,18);if(hn(this,18).d!=e.d){return false}for(b=eF(new cF(),lF(new bF(),e).a);wG(b.a);){a=b.b=hn(xG(b.a),16);d=a.D();f=a.E();if(!(d==null?hn(this,18).c:d!=null&&gn(d.tI,1)?hG(hn(this,18),hn(d,1)):gG(hn(this,18),d,~~Fk(d)))){return false}if(!tJ(f,d==null?hn(this,18).b:d!=null&&gn(d.tI,1)?hn(this,18).e[je+hn(d,1)]:dG(hn(this,18),d,~~Fk(d)))){return false}}return true}
function CH(){var a,b,c;c=0;for(b=eF(new cF(),lF(new bF(),hn(this,18)).a);wG(b.a);){a=b.b=hn(xG(b.a),16);c+=a.hC();c=~~c}return c}
function fH(){}
_=fH.prototype=new yD();_.eQ=BH;_.hC=CH;_.tI=0;function EF(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.v(a[f])}}}}
function FF(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=CF(e,c.substring(1));a.v(b)}}}
function aG(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function cG(b,a){return a==null?b.c:a!=null&&gn(a.tI,1)?hG(b,hn(a,1)):gG(b,a,~~Fk(a))}
function fG(b,a){return a==null?b.b:a!=null&&gn(a.tI,1)?b.e[je+hn(a,1)]:dG(b,a,~~Fk(a))}
function dG(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.D();if(h.z(g,d)){return c.E()}}}return null}
function gG(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.D();if(h.z(g,d)){return true}}}return false}
function hG(b,a){return je+a in b.e}
function lG(b,a,c){return a==null?jG(b,c):a!=null&&gn(a.tI,1)?kG(b,hn(a,1),c):iG(b,a,c,~~Fk(a))}
function iG(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.D();if(i.z(g,d)){var h=c.E();c.sb(j);return h}}}else{a=i.a[e]=[]}var c=gJ(new fJ(),g,j);a.push(c);++i.d;return null}
function jG(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function kG(d,a,e){var b,c=d.e;a=je+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function pG(b,a){return a==null?nG(b):a!=null&&gn(a.tI,1)?oG(b,hn(a,1)):mG(b,a,~~Fk(a))}
function mG(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.D();if(h.z(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.E()}}}return null}
function nG(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function oG(d,a){var b,c=d.e;a=je+a;if(a in c){b=c[a];--d.d;delete c[a]}return b}
function qG(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&Dk(a,b)}
function aF(){}
_=aF.prototype=new fH();_.z=qG;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function FH(b){var a,c,d;if((b==null?null:b)===(this==null?null:this)){return true}if(!(b!=null&&gn(b.tI,19))){return false}c=hn(b,19);if(c.vb()!=this.vb()){return false}for(a=c.db();a.ab();){d=a.eb();if(!this.w(d)){return false}}return true}
function aI(){var a,b,c;a=0;for(b=this.db();b.ab();){c=b.eb();if(c!=null){a+=Fk(c);a=~~a}}return a}
function DH(){}
_=DH.prototype=new BE();_.eQ=FH;_.hC=aI;_.tI=71;function lF(b,a){b.a=a;return b}
function nF(d,c){var a,b,e;if(c!=null&&gn(c.tI,16)){a=hn(c,16);b=a.D();if(cG(d.a,b)){e=fG(d.a,b);return zI(a.E(),e)}}return false}
function oF(a){return nF(this,a)}
function pF(){return eF(new cF(),this.a)}
function qF(){return this.a.d}
function bF(){}
_=bF.prototype=new DH();_.w=oF;_.db=pF;_.vb=qF;_.tI=72;_.a=null;function eF(c,b){var a;c.c=b;a=cI(new bI());if(c.c.c){eI(a,sF(new rF(),c.c))}FF(c.c,a);EF(c.c,a);c.a=uG(new sG(),a);return c}
function gF(a){return a.b=hn(xG(a.a),16)}
function hF(a){if(!a.b){throw new lD()}else{yG(a.a);pG(a.c,a.b.D());a.b=null}}
function iF(){return wG(this.a)}
function jF(){return this.b=hn(xG(this.a),16)}
function kF(){hF(this)}
function cF(){}
_=cF.prototype=new yD();_.ab=iF;_.eb=jF;_.mb=kF;_.tI=0;_.a=null;_.b=null;_.c=null;function wH(b){var a;if(b!=null&&gn(b.tI,16)){a=hn(b,16);if(tJ(this.D(),a.D())&&tJ(this.E(),a.E())){return true}}return false}
function xH(){var a,b;a=0;b=0;if(this.D()!=null){a=Fk(this.D())}if(this.E()!=null){b=Fk(this.E())}return a^b}
function uH(){}
_=uH.prototype=new yD();_.eQ=wH;_.hC=xH;_.tI=73;function sF(b,a){b.a=a;return b}
function uF(){return null}
function vF(){return this.a.b}
function wF(a){return jG(this.a,a)}
function rF(){}
_=rF.prototype=new uH();_.D=uF;_.E=vF;_.sb=wF;_.tI=74;_.a=null;function yF(c,a,b){c.b=b;c.a=a;return c}
function AF(){return this.a}
function BF(){return this.b.e[je+this.a]}
function CF(b,a){return yF(new xF(),a,b)}
function DF(a){return kG(this.b,this.a,a)}
function xF(){}
_=xF.prototype=new uH();_.D=AF;_.E=BF;_.sb=DF;_.tI=75;_.a=null;_.b=null;function uG(b,a){b.c=a;return b}
function wG(a){return a.a<a.c.vb()}
function xG(a){if(a.a>=a.c.vb()){throw new nJ()}return a.c.F(a.b=a.a++)}
function yG(a){if(a.b<0){throw new lD()}a.c.nb(a.b);a.a=a.b;a.b=-1}
function zG(){return this.a<this.c.vb()}
function AG(){return xG(this)}
function BG(){yG(this)}
function sG(){}
_=sG.prototype=new yD();_.ab=zG;_.eb=AG;_.mb=BG;_.tI=0;_.a=0;_.b=-1;_.c=null;function oH(b,a,c){b.a=a;b.b=c;return b}
function rH(a){return cG(this.a,a)}
function sH(){var a;return a=eF(new cF(),this.b.a),iH(new hH(),a)}
function tH(){return this.b.a.d}
function gH(){}
_=gH.prototype=new DH();_.w=rH;_.db=sH;_.vb=tH;_.tI=76;_.a=null;_.b=null;function iH(a,b){a.a=b;return a}
function lH(){return wG(this.a.a)}
function mH(){var a;return a=gF(this.a),a.D()}
function nH(){hF(this.a)}
function hH(){}
_=hH.prototype=new yD();_.ab=lH;_.eb=mH;_.mb=nH;_.tI=0;_.a=null;function xI(a){aG(a);return a}
function zI(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&Dk(a,b)}
function wI(){}
_=wI.prototype=new aF();_.tI=77;function BI(a){a.a=xI(new wI());return a}
function CI(c,a){var b;b=lG(c.a,a,c);return b==null}
function EI(b){var a;return a=lG(this.a,b,this),a==null}
function FI(a){return cG(this.a,a)}
function aJ(){var a;return a=eF(new cF(),zH(this.a).b.a),iH(new hH(),a)}
function bJ(){return this.a.d}
function AI(){}
_=AI.prototype=new DH();_.v=EI;_.w=FI;_.db=aJ;_.vb=bJ;_.tI=78;_.a=null;function gJ(b,a,c){b.a=a;b.b=c;return b}
function iJ(){return this.a}
function jJ(){return this.b}
function lJ(b){var a;a=this.b;this.b=b;return a}
function fJ(){}
_=fJ.prototype=new uH();_.D=iJ;_.E=jJ;_.sb=lJ;_.tI=79;_.a=null;_.b=null;function nJ(){}
_=nJ.prototype=new CD();_.tI=80;function tJ(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&Dk(a,b)}
function tC(){!!$stats&&$stats({moduleName:$moduleName,subSystem:ke,evtGroup:le,millis:(new Date()).getTime(),type:me,className:ne});ek(ck(new ak()))}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{tC()}catch(a){b(d)}else{tC()}}
function uJ(){}
var Dn=CC(oe,re),Cn=CC(oe,se),zn=CC(te,ue),An=CC(ve,we),Bn=CC(ve,xe);$stats && $stats({moduleName:'com.google.code.p.gwtcsample.GWTCSample',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_google_code_p_gwtcsample_GWTCSample) {  var __gwt_initHandlers = com_google_code_p_gwtcsample_GWTCSample.__gwt_initHandlers;  com_google_code_p_gwtcsample_GWTCSample.onScriptLoad(gwtOnLoad);}})();