(function(){
var $gwt_version = "1.5.3";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
$stats && $stats({moduleName:'jschismes.JsChismes',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var _, N8000000000000000_longLit = [0, -9223372036854775808], P0_longLit = [0, 0], P3c_longLit = [60, 0], P78_longLit = [120, 0], P3e8_longLit = [1000, 0], P36ee80_longLit = [3600000, 0], P1000000_longLit = [16777216, 0], P7fffffffffffffff_longLit = [4294967295, 9223372032559808512];
function equals_2(other){
  return (this == null?null:this) === (other == null?null:other);
}

function getClass_126(){
  return Ljava_lang_Object_2_classLit;
}

function hashCode_3(){
  return this.$H || (this.$H = ++sNextHashId);
}

function toString_7(){
  return (this.typeMarker$ == nullMethod || this.typeId$ == 2?this.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName + '@' + toPowerOfTwoString(this.typeMarker$ == nullMethod || this.typeId$ == 2?this.hashCode$():this.$H || (this.$H = ++sNextHashId), 4);
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = equals_2;
_.getClass$ = getClass_126;
_.hashCode$ = hashCode_3;
_.toString$ = toString_7;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
_.typeId$ = 1;
function $addStyleDependentName_0(this$static, styleSuffix){
  this$static.addStyleName(this$static.getStylePrimaryName() + '-' + styleSuffix);
}

function $addStyleName_4(this$static, style){
  setStyleName_1(this$static.getElement_0(), style, true);
}

function $removeStyleDependentName(this$static, styleSuffix){
  $removeStyleName(this$static, getStylePrimaryName_1(this$static.getElement_0()) + '-' + styleSuffix);
}

function $removeStyleName_0(this$static, style){
  setStyleName_1(this$static.getElement_0(), style, false);
}

function $replaceElement_0(this$static, elem){
  if (this$static.element_0) {
    $replaceNode(this$static.element_0, elem);
  }
  this$static.element_0 = elem;
}

function $replaceNode(node, newNode){
  var p_0 = node.parentNode;
  if (!p_0) {
    return;
  }
  p_0.insertBefore(newNode, node);
  p_0.removeChild(node);
}

function $setStyleName_3(this$static, style){
  this$static.getElement_0()['className'] = style;
}

function $setVisible_0(this$static, visible){
  this$static.getElement_0().style.display = visible?'':'none';
}

function $toString_1(this$static){
  if (!this$static.getElement_0()) {
    return '(null handle)';
  }
  return this$static.getElement_0().outerHTML;
}

function addStyleDependentName_0(styleSuffix){
  this.addStyleName(this.getStylePrimaryName() + '-' + styleSuffix);
}

function addStyleName_1(style){
  setStyleName_1(this.getElement_0(), style, true);
}

function getClass_107(){
  return Lcom_google_gwt_user_client_ui_UIObject_2_classLit;
}

function getElement_1(){
  return this.element_0;
}

function getStylePrimaryName_1(elem){
  var fullClassName, spaceIdx;
  fullClassName = elem['className'] == null?null:String(elem['className']);
  spaceIdx = fullClassName.indexOf(fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx - 0);
  }
  return fullClassName;
}

function getStylePrimaryName_0(){
  return getStylePrimaryName_1(this.getElement_0());
}

function removeStyleName_0(style){
  setStyleName_1(this.getElement_0(), style, false);
}

function setHeight_0(height){
  this.getElement_0().style['height'] = height;
}

function setStyleName_1(elem, style, add){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  if (!elem) {
    throw $RuntimeException(new RuntimeException(), 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw $IllegalArgumentException(new IllegalArgumentException(), 'Style names cannot be empty');
  }
  oldStyle = elem['className'] == null?null:String(elem['className']);
  idx = oldStyle.indexOf(style);
  while (idx != -1) {
    if (idx == 0 || oldStyle.charCodeAt(idx - 1) == 32) {
      last = idx + style.length;
      lastPos = oldStyle.length;
      if (last == lastPos || last < lastPos && oldStyle.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldStyle.indexOf(style, idx + 1);
  }
  if (add) {
    if (idx == -1) {
      if (oldStyle.length > 0) {
        oldStyle += ' ';
      }
      elem['className'] = oldStyle + style;
    }
  }
   else {
    if (idx != -1) {
      begin = $trim(oldStyle.substr(0, idx - 0));
      end = $trim($substring(oldStyle, idx + style.length));
      if (begin.length == 0) {
        newClassName = end;
      }
       else if (end.length == 0) {
        newClassName = begin;
      }
       else {
        newClassName = begin + ' ' + end;
      }
      elem['className'] = newClassName;
    }
  }
}

function setStyleName_2(style){
  this.getElement_0()['className'] = style;
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw $RuntimeException(new RuntimeException(), 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw $IllegalArgumentException(new IllegalArgumentException(), 'Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function setTitle_1(title){
  if (title == null || title.length == 0) {
    this.getElement_0().removeAttribute('title');
  }
   else {
    this.getElement_0().setAttribute('title', title);
  }
}

function setVisible_2(visible){
  this.getElement_0().style.display = visible?'':'none';
}

function setWidth_1(width){
  this.getElement_0().style['width'] = width;
}

function toString_3(){
  return $toString_1(this);
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = elem.className.split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name = classes[i];
    if (name.length > oldPrimaryStyleLen && (name.charAt(oldPrimaryStyleLen) == '-' && name.indexOf(oldPrimaryStyle) == 0)) {
      classes[i] = newPrimaryStyle + name.substring(oldPrimaryStyleLen);
    }
  }
  elem.className = classes.join(' ');
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0();
_.addStyleDependentName = addStyleDependentName_0;
_.addStyleName = addStyleName_1;
_.getClass$ = getClass_107;
_.getElement_0 = getElement_1;
_.getStylePrimaryName = getStylePrimaryName_0;
_.removeStyleName = removeStyleName_0;
_.setHeight = setHeight_0;
_.setStyleName = setStyleName_2;
_.setTitle = setTitle_1;
_.setVisible = setVisible_2;
_.setWidth = setWidth_1;
_.toString$ = toString_3;
_.typeId$ = 3;
_.element_0 = null;
function $onAttach(this$static){
  if (this$static.isAttached()) {
    throw $IllegalStateException(new IllegalStateException(), "Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  this$static.getElement_0().__listener = this$static;
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw $IllegalStateException(new IllegalStateException(), "Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    this$static.doDetachChildren();
    this$static.getElement_0().__listener = null;
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (instanceOf(this$static.parent, 29)) {
    dynamicCast(this$static.parent, 29).remove_1(this$static);
  }
   else if (this$static.parent) {
    throw $IllegalStateException(new IllegalStateException(), "This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement_1(this$static, elem){
  if (this$static.attached) {
    this$static.element_0.__listener = null;
  }
  $replaceElement_0(this$static, elem);
  if (this$static.attached) {
    this$static.element_0.__listener = this$static;
  }
}

function $setParent(this$static, parent){
  var oldParent;
  oldParent = this$static.parent;
  if (!parent) {
    if (!!oldParent && oldParent.isAttached()) {
      this$static.onDetach();
    }
    this$static.parent = null;
  }
   else {
    if (oldParent) {
      throw $IllegalStateException(new IllegalStateException(), 'Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent = parent;
    if (parent.isAttached()) {
      this$static.onAttach();
    }
  }
}

function doAttachChildren_2(){
}

function doDetachChildren_2(){
}

function getClass_111(){
  return Lcom_google_gwt_user_client_ui_Widget_2_classLit;
}

function isAttached_0(){
  return this.attached;
}

function onAttach_1(){
  $onAttach(this);
}

function onBrowserEvent_9(event_0){
}

function onDetach_4(){
  $onDetach(this);
}

function onLoad_0(){
}

function onUnload_0(){
}

function Widget(){
}

_ = Widget.prototype = new UIObject();
_.doAttachChildren = doAttachChildren_2;
_.doDetachChildren = doDetachChildren_2;
_.getClass$ = getClass_111;
_.isAttached = isAttached_0;
_.onAttach = onAttach_1;
_.onBrowserEvent = onBrowserEvent_9;
_.onDetach = onDetach_4;
_.onLoad = onLoad_0;
_.onUnload = onUnload_0;
_.typeId$ = 4;
_.attached = false;
_.layoutData = null;
_.parent = null;
function $adopt(this$static, child){
  $setParent(child, this$static);
}

function $clear_0(this$static){
  var it;
  it = this$static.iterator_0();
  while (it.hasNext()) {
    it.next_0();
    it.remove();
  }
}

function add_10(child){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'This panel does not support no-arg add()');
}

function doAttachChildren_1(){
  var child, it;
  for (it = this.iterator_0(); it.hasNext();) {
    child = dynamicCast(it.next_0(), 2);
    child.onAttach();
  }
}

function doDetachChildren_1(){
  var child, it;
  for (it = this.iterator_0(); it.hasNext();) {
    child = dynamicCast(it.next_0(), 2);
    child.onDetach();
  }
}

function getClass_96(){
  return Lcom_google_gwt_user_client_ui_Panel_2_classLit;
}

function onLoad(){
}

function onUnload(){
}

function Panel(){
}

_ = Panel.prototype = new Widget();
_.add_1 = add_10;
_.doAttachChildren = doAttachChildren_1;
_.doDetachChildren = doDetachChildren_1;
_.getClass$ = getClass_96;
_.onLoad = onLoad;
_.onUnload = onUnload;
_.typeId$ = 5;
function $SimplePanel(this$static){
  this$static.element_0 = $doc.createElement('div');
  return this$static;
}

function $add_5(this$static, w){
  if (this$static.getWidget()) {
    throw $IllegalStateException(new IllegalStateException(), 'SimplePanel can only contain one child widget');
  }
  this$static.setWidget(w);
}

function $setWidget_2(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  if (w) {
    $removeFromParent(w);
  }
  if (this$static.widget) {
    this$static.remove_1(this$static.widget);
  }
  this$static.widget = w;
  if (w) {
    this$static.getContainerElement().appendChild(this$static.widget.getElement_0());
    $setParent(w, this$static);
  }
}

function add_11(w){
  $add_5(this, w);
}

function getClass_106(){
  return Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit;
}

function getContainerElement_1(){
  return this.getElement_0();
}

function getWidget_0(){
  return this.widget;
}

function iterator_3(){
  return $SimplePanel$1(new SimplePanel$1(), this);
}

function remove_9(w){
  if (this.widget != w) {
    return false;
  }
  $setParent(w, null);
  this.getContainerElement().removeChild(w.getElement_0());
  this.widget = null;
  return true;
}

function setWidget_1(w){
  $setWidget_2(this, w);
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel();
_.add_1 = add_11;
_.getClass$ = getClass_106;
_.getContainerElement = getContainerElement_1;
_.getWidget = getWidget_0;
_.iterator_0 = iterator_3;
_.remove_1 = remove_9;
_.setWidget = setWidget_1;
_.typeId$ = 6;
_.widget = null;
function $PopupPanel(this$static){
  this$static.element_0 = $doc.createElement('div');
  this$static.animType = ($clinit_157() , CENTER_0);
  this$static.resizeAnimation = $PopupPanel$ResizeAnimation(new PopupPanel$ResizeAnimation(), this$static);
  this$static.getElement_0().appendChild($doc.createElement('div'));
  $setPopupPosition(this$static, 0, 0);
  this$static.getElement_0()['className'] = 'gwt-PopupPanel';
  $getFirstChildElement(this$static.getElement_0())['className'] = 'popupContent';
  return this$static;
}

function $addPopupListener(this$static, listener){
  if (!this$static.popupListeners) {
    this$static.popupListeners = $PopupListenerCollection(new PopupListenerCollection());
  }
  $add_8(this$static.popupListeners, listener);
}

function $blur(elt){
  if (elt.blur && elt != $doc.body) {
    elt.blur();
  }
}

function $center_0(this$static){
  var initiallyAnimated, initiallyShowing, left, top;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    this$static.getElement_0().style['visibility'] = 'hidden';
    this$static.getElement_0();
    this$static.isAnimationEnabled = false;
    this$static.show_0();
  }
  left = getBodyElement().clientWidth - (parseInt(this$static.getElement_0()['offsetWidth']) || 0) >> 1;
  top = getBodyElement().clientHeight - (parseInt(this$static.getElement_0()['offsetHeight']) || 0) >> 1;
  $setPopupPosition(this$static, ($clinit_85() , documentRoot).scrollLeft + left, documentRoot.scrollTop + top);
  if (!initiallyShowing) {
    this$static.hide_0();
    this$static.getElement_0().style['visibility'] = 'visible';
    this$static.getElement_0();
    this$static.isAnimationEnabled = initiallyAnimated;
    this$static.show_0();
  }
}

function $hide_4(this$static, autoClosed){
  if (!this$static.showing) {
    return;
  }
  this$static.showing = false;
  $setState(this$static.resizeAnimation, false);
  if (this$static.popupListeners) {
    $firePopupClosed(this$static.popupListeners, autoClosed);
  }
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    if (this$static.desiredHeight != null) {
      w.setHeight(this$static.desiredHeight);
    }
    if (this$static.desiredWidth != null) {
      w.setWidth(this$static.desiredWidth);
    }
  }
}

function $onEventPreview(this$static, event_0){
  var allow, eventTargetsPopup, target, type;
  target = event_0.target;
  eventTargetsPopup = !!target && this$static.getElement_0().contains(target);
  type = $eventGetTypeInt(event_0);
  switch (type) {
    case 128:
      {
        allow = ((event_0.which || (event_0.keyCode || 0)) & 65535 , (event_0.shiftKey?1:0) | (event_0.metaKey?8:0) | (event_0.ctrlKey?2:0) | (event_0.altKey?4:0) , true);
        return allow && (eventTargetsPopup || !this$static.modal);
      }

    case 512:
      {
        allow = ((event_0.which || (event_0.keyCode || 0)) & 65535 , (event_0.shiftKey?1:0) | (event_0.metaKey?8:0) | (event_0.ctrlKey?2:0) | (event_0.altKey?4:0) , true);
        return allow && (eventTargetsPopup || !this$static.modal);
      }

    case 256:
      {
        allow = ((event_0.which || (event_0.keyCode || 0)) & 65535 , (event_0.shiftKey?1:0) | (event_0.metaKey?8:0) | (event_0.ctrlKey?2:0) | (event_0.altKey?4:0) , true);
        return allow && (eventTargetsPopup || !this$static.modal);
      }

    case 4:
    case 8:
    case 64:
    case 1:
    case 2:
      {
        if (sCaptureElem) {
          return true;
        }
        if (!eventTargetsPopup && this$static.autoHide && type == 4) {
          $hide_4(this$static, true);
          return true;
        }
        break;
      }

    case 2048:
      {
        if (this$static.modal && !eventTargetsPopup && !!target) {
          $blur(target);
          return false;
        }
      }

  }
  return !this$static.modal || eventTargetsPopup;
}

function $setPopupPosition(this$static, left, top){
  var elem;
  if (left < 0) {
    left = 0;
  }
  if (top < 0) {
    top = 0;
  }
  this$static.leftPosition = left;
  this$static.topPosition = top;
  left -= 0;
  top -= 0;
  elem = this$static.getElement_0();
  elem.style['left'] = left + 'px';
  elem.style['top'] = top + 'px';
}

function $setPopupPositionAndShow(this$static, callback){
  this$static.element_0.style['visibility'] = 'hidden';
  $show_7(this$static);
  $setPosition(callback, (parseInt(this$static.element_0['offsetWidth']) || 0 , parseInt(this$static.element_0['offsetHeight']) || 0));
  this$static.element_0.style['visibility'] = 'visible';
}

function $setWidget_1(this$static, w){
  $setWidget_2(this$static, w);
  $maybeUpdateSize(this$static);
}

function $setWidth(this$static, width){
  this$static.desiredWidth = width;
  $maybeUpdateSize(this$static);
  if (width.length == 0) {
    this$static.desiredWidth = null;
  }
}

function $show_7(this$static){
  if (this$static.showing) {
    return;
  }
  this$static.showing = true;
  addEventPreview(this$static);
  $setState(this$static.resizeAnimation, true);
}

function center_1(){
  $center_0(this);
}

function getClass_101(){
  return Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit;
}

function getContainerElement_0(){
  return $getFirstChildElement(this.getElement_0());
}

function hide_4(){
  $hide_4(this, false);
}

function onDetach_3(){
  removeEventPreview(this);
  $onDetach(this);
}

function onEventPreview_1(event_0){
  return $onEventPreview(this, event_0);
}

function setHeight(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  if (height.length == 0) {
    this.desiredHeight = null;
  }
}

function setTitle_0(title){
  var containerElement;
  containerElement = $getFirstChildElement(this.getElement_0());
  if (title == null || title.length == 0) {
    containerElement.removeAttribute('title');
  }
   else {
    containerElement.setAttribute('title', title);
  }
}

function setVisible_0(visible){
  this.getElement_0().style['visibility'] = visible?'visible':'hidden';
  this.getElement_0();
}

function setWidget_0(w){
  $setWidget_2(this, w);
  $maybeUpdateSize(this);
}

function setWidth_0(width){
  $setWidth(this, width);
}

function show_2(){
  $show_7(this);
}

function PopupPanel(){
}

_ = PopupPanel.prototype = new SimplePanel();
_.center_0 = center_1;
_.getClass$ = getClass_101;
_.getContainerElement = getContainerElement_0;
_.hide_0 = hide_4;
_.onDetach = onDetach_3;
_.onEventPreview = onEventPreview_1;
_.setHeight = setHeight;
_.setTitle = setTitle_0;
_.setVisible = setVisible_0;
_.setWidget = setWidget_0;
_.setWidth = setWidth_0;
_.show_0 = show_2;
_.typeId$ = 7;
_.autoHide = false;
_.desiredHeight = null;
_.desiredWidth = null;
_.isAnimationEnabled = false;
_.leftPosition = -1;
_.modal = false;
_.popupListeners = null;
_.showing = false;
_.topPosition = -1;
function $add(this$static, object, direction){
  var widget;
  widget = objectToWidget(object);
  if (this$static.panelbox)
    this$static.panelbox.add_3(widget, direction);
  else 
    $add_3(this$static.panel, widget, direction);
}

function $hide_2(this$static){
  $hide_4(this$static, false);
  if (this$static.background)
    $hide_0(this$static.background);
}

function $initialize_2(this$static, options){
  $clear_0(this$static);
  if ((options & 4) == 4) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox(), 'GWTCBox-grey');
  }
   else if ((options & 8) == 8) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox(), 'GWTCBox-blue');
    $add_5(this$static, this$static.panelbox);
  }
   else if ((options & 2) == 2) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox(), 'GWTCBox');
    $add_5(this$static, this$static.panelbox);
  }
   else {
    this$static.panel = $DockPanel(new DockPanel());
    $add_5(this$static, this$static.panel);
  }
  this$static.isAnimationEnabled = (options & 32) == 32;
  if ((options & 16) != 16) {
    this$static.background = $GWTCGlassPanel(new GWTCGlassPanel());
    if ((options & 64) != 64) {
      $addClickListener_1(this$static.background, $GWTCPopupBox$1(new GWTCPopupBox$1(), this$static));
    }
  }
  $setZIndex_1(this$static, 999);
  $setWidth(this$static, 'auto');
  this$static.getElement_0()['className'] = 'GWTCPopupBox';
  if (this$static.panelbox)
    $addStyleName_4(this$static, getStylePrimaryName_1(this$static.getElement_0()) + '-' + 'box');
}

function $setZIndex_1(this$static, z){
  this$static.getElement_0().style['zIndex'] = '' + z;
  if (this$static.background) {
    this$static.background.element_0.style['zIndex'] = '998';
  }
}

function $show_4(this$static, timeout){
  var t;
  if (timeout > 0) {
    t = $GWTCPopupBox$2(new GWTCPopupBox$2(), this$static);
    $schedule(t, timeout * 1000);
  }
  $setWidth(this$static, 'auto');
  $center_0(this$static);
}

function $show_3(this$static){
  if (this$static.background)
    $show_1(this$static.background);
  $show_7(this$static);
}

function add_3(w){
  this.add_3(w, ($clinit_107() , NORTH));
}

function add_4(object, direction){
  $add(this, object, direction);
}

function center_0(){
  $setWidth(this, 'auto');
  $center_0(this);
}

function getClass_24(){
  return Lcom_google_code_p_gwtchismes_client_GWTCPopupBox_2_classLit;
}

function hide_2(){
  $hide_2(this);
}

function show_1(){
  $show_3(this);
}

function GWTCPopupBox(){
}

_ = GWTCPopupBox.prototype = new PopupPanel();
_.add_1 = add_3;
_.add_3 = add_4;
_.center_0 = center_0;
_.getClass$ = getClass_24;
_.hide_0 = hide_2;
_.show_0 = show_1;
_.typeId$ = 8;
_.background = null;
_.panel = null;
_.panelbox = null;
function $GWTCAlert(this$static, options){
  $PopupPanel(this$static);
  this$static.autoHide = false;
  $initialize(this$static, 64);
  $initialize(this$static, options);
  return this$static;
}

function $initialize(this$static, options){
  $initialize_2(this$static, options);
  this$static.contentTable = $FlexTable(new FlexTable());
  this$static.txt = $HTML(new HTML());
  this$static.okButton = $GWTCButton_1(new GWTCButton(), 'OK');
  $setImage(this$static.okButton, $Image(new Image_0(), 'images/button/dialog-ok.gif'));
  if ((options & 1) == 1)
    this$static.okButtonDisabled = true;
  this$static.contentTable.getElement_0()['className'] = 'panel';
  $addStyleName_1(this$static.contentTable.cellFormatter, 0, 0, 'msgCell');
  $setWidget_0(this$static.contentTable, 0, 0, this$static.txt);
  $addStyleName_1(this$static.contentTable.cellFormatter, 1, 0, 'btnCell');
  $setWidget_0(this$static.contentTable, 1, 0, this$static.okButton);
  $addStyleName(this$static.okButton, 'okButton');
  $addStyleName(this$static.okButton, 'gwtc-alert-rndbutton');
  $add_8(this$static.okButton.clickListeners, $GWTCAlert$1(new GWTCAlert$1(), this$static));
  $setVisible(this$static.okButton, !this$static.okButtonDisabled);
  this$static.getElement_0()['className'] = 'GWTCAlert';
  if ((options & 4) == 4 || (options & 8) == 8 || (options & 2) == 2) {
    $addStyleName_4(this$static, getStylePrimaryName_1(this$static.getElement_0()) + '-' + 'box');
  }
  $add(this$static, this$static.contentTable, ($clinit_107() , NORTH));
}

function alert(s){
  this.txt.element_0.innerHTML = $replaceAll($replaceAll(s, '\\n', '<br/>'), ' ', '&nbsp;') || '';
  $setWidth(this, 'auto');
  $center_0(this);
}

function getClass_1(){
  return Lcom_google_code_p_gwtchismes_client_GWTCAlert_2_classLit;
}

function hide(){
  $hide_2(this);
}

function show(){
  $show_3(this);
  $setFocus(this.okButton, true);
}

function GWTCAlert(){
}

_ = GWTCAlert.prototype = new GWTCPopupBox();
_.alert_0 = alert;
_.getClass$ = getClass_1;
_.hide_0 = hide;
_.show_0 = show;
_.typeId$ = 9;
_.contentTable = null;
_.okButton = null;
_.okButtonDisabled = false;
_.txt = null;
function $GWTCAlert$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_0(){
  return Lcom_google_code_p_gwtchismes_client_GWTCAlert$1_2_classLit;
}

function onClick(sender){
  this.this$0.hide_0();
}

function GWTCAlert$1(){
}

_ = GWTCAlert$1.prototype = new Object_0();
_.getClass$ = getClass_0;
_.onClick = onClick;
_.typeId$ = 10;
_.this$0 = null;
function $clinit_102(){
  $clinit_102 = nullMethod;
  DEFAULT_ROW_STYLENAMES = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['top', 'middle', 'bottom']);
}

function $DecoratorPanel(this$static, rowStyles, containerIndex){
  var i, row, table, trElem;
  $clinit_102();
  this$static.element_0 = $doc.createElement('table');
  table = this$static.element_0;
  this$static.tbody = $doc.createElement('tbody');
  table.appendChild(this$static.tbody);
  table['cellSpacing'] = 0;
  table['cellPadding'] = 0;
  for (i = 0; i < rowStyles.length; ++i) {
    row = (trElem = $doc.createElement('tr') , (trElem['className'] = rowStyles[i] , undefined) , trElem.appendChild(createTD(rowStyles[i] + 'Left')) , trElem.appendChild(createTD(rowStyles[i] + 'Center')) , trElem.appendChild(createTD(rowStyles[i] + 'Right')) , trElem);
    this$static.tbody.appendChild(row);
    if (i == containerIndex) {
      this$static.containerElem = $getFirstChildElement($getChild(row, 1));
    }
  }
  this$static.element_0['className'] = 'gwt-DecoratorPanel';
  return this$static;
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = $doc.createElement('td');
  inner = $doc.createElement('div');
  tdElem.appendChild(inner);
  tdElem['className'] = styleName;
  inner['className'] = styleName + 'Inner';
  return tdElem;
}

function getClass_60(){
  return Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit;
}

function getContainerElement(){
  return this.containerElem;
}

function DecoratorPanel(){
}

_ = DecoratorPanel.prototype = new SimplePanel();
_.getClass$ = getClass_60;
_.getContainerElement = getContainerElement;
_.typeId$ = 11;
_.containerElem = null;
_.tbody = null;
var DEFAULT_ROW_STYLENAMES;
function $clinit_3(){
  $clinit_3 = nullMethod;
  $clinit_102();
}

function $GWTCBox(this$static){
  $clinit_3();
  $DecoratorPanel(this$static, DEFAULT_ROW_STYLENAMES, 1);
  this$static.title = $HTML(new HTML());
  this$static.text_0 = $HTML(new HTML());
  this$static.panel = $DockPanel(new DockPanel());
  $add_5(this$static, this$static.panel);
  this$static.panel.getElement_0()['className'] = 'panel';
  this$static.element_0['className'] = 'GWTCBox';
  $add_3(this$static.panel, this$static.title, ($clinit_107() , NORTH));
  $add_3(this$static.panel, this$static.text_0, NORTH);
  return this$static;
}

function $GWTCBox_0(this$static, style){
  $clinit_3();
  $GWTCBox(this$static);
  if (style != null && style.length > 0 && style != 'GWTCBox')
    setStyleName_1(this$static.element_0, style, true);
  return this$static;
}

function $adjustSize(this$static, width){
  var topCenter;
  topCenter = $getChild($getChild($getChild(this$static.element_0, 0), 0), 1);
  if ($equals_0(width, 'auto')) {
    topCenter.style['width'] = 'auto';
  }
   else {
    topCenter.style['width'] = '100%';
  }
}

function $setText(this$static, text){
  this$static.text_0.element_0.innerHTML = (text == null?'':'<p class="text">' + text + '<\/p>') || '';
}

function $setTitle(this$static, title){
  this$static.title.element_0.innerHTML = (title == null?'':'<h3 class="title">' + title + '<\/h3>') || '';
}

function add_0(w){
  this.add_3(w, ($clinit_107() , NORTH));
}

function add_1(object, direction){
  $add_3(this.panel, objectToWidget(object), direction);
}

function getClass_4(){
  return Lcom_google_code_p_gwtchismes_client_GWTCBox_2_classLit;
}

function iterator(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator(), this.panel.children);
}

function objectToWidget(object){
  var html;
  $clinit_3();
  var element, html_0;
  if (object == null) {
    html_0 = null;
  }
   else if (object != null && canCast(object.typeId$, 1)) {
    html_0 = $GWTCBox$1(new GWTCBox$1(), dynamicCast(object, 1));
  }
   else if (object != null && canCast(object.typeId$, 2)) {
    html_0 = dynamicCast(object, 2);
  }
   else {
    element = dynamicCastJso(object);
    if ($equalsIgnoreCase(element.tagName, 'div') || $equalsIgnoreCase(element.tagName, 'span')) {
      html_0 = (html = $HTML_0(new HTML(), element) , $onAttach(html) , $clinit_164() , $add_9(widgetsToDetach, html) , html);
    }
     else {
      html_0 = $GWTCBox$2(new GWTCBox$2(), element);
    }
  }
  return html_0;
}

function remove(w){
  return $remove_2(this.panel, w);
}

function setTitle(title){
  this.title.element_0.innerHTML = (title == null?'':'<h3 class="title">' + title + '<\/h3>') || '';
}

function setWidth(width){
  this.element_0.style['width'] = width;
  $adjustSize(this, width);
}

function GWTCBox(){
}

_ = GWTCBox.prototype = new DecoratorPanel();
_.add_1 = add_0;
_.add_3 = add_1;
_.getClass$ = getClass_4;
_.iterator_0 = iterator;
_.remove_1 = remove;
_.setTitle = setTitle;
_.setWidth = setWidth;
_.typeId$ = 12;
function $Label(this$static){
  this$static.element_0 = $doc.createElement('div');
  this$static.element_0['className'] = 'gwt-Label';
  return this$static;
}

function $Label_0(this$static, text){
  $Label(this$static);
  $setInnerText(this$static.element_0, text);
  return this$static;
}

function $addClickListener_3(this$static, listener){
  if (!this$static.clickListeners) {
    this$static.clickListeners = $ClickListenerCollection(new ClickListenerCollection());
    sinkEvents(this$static.element_0, 1 | (this$static.element_0.__eventBits || 0));
  }
  $add_8(this$static.clickListeners, listener);
}

function $addMouseListener_0(this$static, listener){
  if (!this$static.mouseListeners) {
    this$static.mouseListeners = $MouseListenerCollection(new MouseListenerCollection());
    sinkEvents(this$static.element_0, 124 | (this$static.element_0.__eventBits || 0));
  }
  $add_8(this$static.mouseListeners, listener);
}

function addClickListener_2(listener){
  $addClickListener_3(this, listener);
}

function getClass_88(){
  return Lcom_google_gwt_user_client_ui_Label_2_classLit;
}

function onBrowserEvent_6(event_0){
  switch ($eventGetTypeInt(event_0)) {
    case 1:
      if (this.clickListeners) {
        $fireClick(this.clickListeners, this);
      }

      break;
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (this.mouseListeners) {
        $fireMouseEvent(this.mouseListeners, this, event_0);
      }

  }
}

function setText_4(text){
  $setInnerText(this.element_0, text);
}

function Label(){
}

_ = Label.prototype = new Widget();
_.addClickListener = addClickListener_2;
_.getClass$ = getClass_88;
_.onBrowserEvent = onBrowserEvent_6;
_.setText_0 = setText_4;
_.typeId$ = 13;
_.clickListeners = null;
_.mouseListeners = null;
function $HTML(this$static){
  this$static.element_0 = $doc.createElement('div');
  this$static.element_0['className'] = 'gwt-HTML';
  return this$static;
}

function $HTML_1(this$static, html){
  $HTML(this$static);
  this$static.element_0.innerHTML = html || '';
  return this$static;
}

function $HTML_0(this$static, element){
  this$static.element_0 = element;
  return this$static;
}

function getClass_79(){
  return Lcom_google_gwt_user_client_ui_HTML_2_classLit;
}

function HTML(){
}

_ = HTML.prototype = new Label();
_.getClass$ = getClass_79;
_.typeId$ = 14;
function $GWTCBox$1(this$static, $anonymous0){
  $HTML(this$static);
  this$static.element_0.innerHTML = $anonymous0 || '';
  return this$static;
}

function getClass_2(){
  return Lcom_google_code_p_gwtchismes_client_GWTCBox$1_2_classLit;
}

function onDetach(){
  if (this.attached)
    $onDetach(this);
}

function GWTCBox$1(){
}

_ = GWTCBox$1.prototype = new HTML();
_.getClass$ = getClass_2;
_.onDetach = onDetach;
_.typeId$ = 15;
function $GWTCBox$2(this$static, $anonymous0){
  this$static.element_0 = $anonymous0;
  return this$static;
}

function getClass_3(){
  return Lcom_google_code_p_gwtchismes_client_GWTCBox$2_2_classLit;
}

function GWTCBox$2(){
}

_ = GWTCBox$2.prototype = new SimplePanel();
_.getClass$ = getClass_3;
_.typeId$ = 16;
function $FocusWidget(this$static, elem){
  this$static.element_0 = elem;
  this$static.getElement_0().tabIndex = 0;
  return this$static;
}

function $onBrowserEvent_0(this$static, event_0){
  if ($eventGetTypeInt(event_0) == 1) {
    if (this$static.clickListeners_0) {
      $fireClick(this$static.clickListeners_0, this$static);
    }
  }
}

function $setFocus_1(this$static, focused){
  if (focused) {
    this$static.getElement_0().focus();
  }
   else {
    this$static.getElement_0().blur();
  }
}

function addClickListener_1(listener){
  if (!this.clickListeners_0) {
    this.clickListeners_0 = $ClickListenerCollection(new ClickListenerCollection());
    sinkEvents(this.getElement_0(), 1 | (this.getElement_0().__eventBits || 0));
  }
  $add_8(this.clickListeners_0, listener);
}

function getClass_70(){
  return Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit;
}

function onBrowserEvent_2(event_0){
  $onBrowserEvent_0(this, event_0);
}

function setTabIndex_0(index){
  this.getElement_0().tabIndex = index;
}

function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget();
_.addClickListener = addClickListener_1;
_.getClass$ = getClass_70;
_.onBrowserEvent = onBrowserEvent_2;
_.setTabIndex = setTabIndex_0;
_.typeId$ = 17;
_.clickListeners_0 = null;
function $ButtonBase(this$static, elem){
  this$static.element_0 = elem;
  this$static.setTabIndex(0);
  return this$static;
}

function getClass_52(){
  return Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit;
}

function setHTML_0(html){
  this.getElement_0().innerHTML = html || '';
}

function setText_1(text){
  $setInnerText(this.getElement_0(), text);
}

function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget();
_.getClass$ = getClass_52;
_.setHTML = setHTML_0;
_.setText_0 = setText_1;
_.typeId$ = 18;
function $Button(this$static){
  $ButtonBase(this$static, $doc.createElement('button'));
  adjustType(this$static.getElement_0());
  this$static.setStyleName('gwt-Button');
  return this$static;
}

function $Button_0(this$static, html){
  $Button(this$static);
  this$static.setHTML(html);
  return this$static;
}

function adjustType(button){
  if (button.type == 'submit') {
    try {
      button.setAttribute('type', 'button');
    }
     catch (e) {
    }
  }
}

function getClass_53(){
  return Lcom_google_gwt_user_client_ui_Button_2_classLit;
}

function Button(){
}

_ = Button.prototype = new ButtonBase();
_.getClass$ = getClass_53;
_.typeId$ = 19;
function $$init_1(this$static){
  this$static.mouseListeners = $MouseListenerCollection(new MouseListenerCollection());
  this$static.clickListeners = $ClickListenerCollection(new ClickListenerCollection());
  this$static.mouseOverListener = $GWTCButton$1(new GWTCButton$1(), this$static);
  this$static.focusListener = $GWTCButton$2(new GWTCButton$2(), this$static);
  this$static.keyboardListener = $GWTCButton$3(new GWTCButton$3(), this$static);
}

function $GWTCButton(this$static){
  $Button(this$static);
  $$init_1(this$static);
  $setType(this$static, 1);
  return this$static;
}

function $GWTCButton_1(this$static, html){
  $Button(this$static);
  $$init_1(this$static);
  $setType(this$static, 1);
  $setHTML(this$static, html);
  return this$static;
}

function $GWTCButton_0(this$static, type, html){
  $Button(this$static);
  $$init_1(this$static);
  $setType(this$static, type);
  $setHTML(this$static, html);
  return this$static;
}

function $addStyleName(this$static, style){
  setStyleName_1(this$static.getElement_0(), style, true);
  if (this$static.container)
    $addStyleName_4(this$static.container, style);
}

function $assertLeftTD(this$static){
  if (this$static.textPosIdx == 1) {
    $insertCell(this$static.container, 0, this$static.textPosIdx);
    $getElement_0(this$static.container.cellFormatter, 0, 1).className = 'GWTCBtn-ml';
    this$static.textPosIdx = 2;
  }
}

function $click(this$static){
  $fireClick(this$static.clickListeners, this$static);
}

function $getElement(this$static){
  if (!this$static.element)
    this$static.element = this$static.element_0;
  return this$static.element;
}

function $removeStyleName(this$static, style){
  setStyleName_1(this$static.getElement_0(), style, false);
  if (this$static.container)
    $removeStyleName_0(this$static.container, style);
}

function $replaceElement(this$static, element){
  var parent;
  if (this$static.element) {
    parent = $getParentElement(this$static.element);
    if (parent) {
      parent.removeChild(this$static.element);
      parent.appendChild(element);
    }
  }
  this$static.element = element;
}

function $setEnabled(this$static, enabled){
  this$static.enabled = enabled;
  if (enabled) {
    $removeStyleName(this$static, getStylePrimaryName_1(this$static.getElement_0()) + '-' + 'disabled');
  }
   else {
    $addStyleName(this$static, getStylePrimaryName_1(this$static.getElement_0()) + '-' + 'disabled');
  }
}

function $setFocus(this$static, focused){
  if (!this$static.container)
    $setFocus_1(this$static, focused);
  else 
    $setFocus_0(this$static.textPanel, focused);
}

function $setHTML(this$static, html){
  if (!this$static.container) {
    this$static.getElement_0().innerHTML = html || '';
  }
   else {
    $clear_0(this$static.textPanel);
    $setWidget_2(this$static.textPanel, $HTML_1(new HTML(), html));
    this$static.textPanel.widget.setStyleName('GWTCBtn-text');
  }
}

function $setImage(this$static, img){
  img.element_0['className'] = 'GWTCBtn-img';
  $assertLeftTD(this$static);
  $setWidget_0(this$static.container, 0, 1, img);
}

function $setStyleName(this$static, style){
  this$static.getElement_0()['className'] = style;
  if (this$static.container)
    $addStyleName_4(this$static.container, style);
}

function $setText_0(this$static, txt){
  if (!this$static.container)
    $setInnerText(this$static.getElement_0(), txt);
  else {
    $clear_0(this$static.textPanel);
    $setWidget_2(this$static.textPanel, $Label_0(new Label(), txt));
    this$static.textPanel.widget.setStyleName('GWTCBtn-text');
  }
}

function $setType(this$static, type){
  var text;
  text = !this$static.container?this$static.getElement_0().innerHTML:$getElement_0(this$static.container.cellFormatter, 0, this$static.textPosIdx).innerHTML;
  this$static.element = null;
  if (this$static.container) {
    text = null;
    $clear(this$static.container);
  }
  this$static.container = null;
  if (type == 0) {
    $setStyleName(this$static, 'GWTCBtn');
    $addStyleName(this$static, 'gwt-Button');
  }
   else {
    this$static.container = $FlexTable(new FlexTable());
    this$static.container.getElement_0()['className'] = 'GWTCBtn';
    this$static.container.tableElem['cellSpacing'] = 0;
    this$static.container.tableElem['cellPadding'] = 0;
    $setHTML_0(this$static.container, 0, 0, '&nbsp;');
    $setStyleName_1(this$static.container.cellFormatter, 0, 0, 'GWTCBtn-l');
    $setStyleName_1(this$static.container.cellFormatter, 0, 1, 'GWTCBtn-c');
    this$static.textPanel = $FocusPanel(new FocusPanel());
    $addFocusListener(this$static.textPanel, this$static.focusListener);
    $addKeyboardListener(this$static.textPanel, this$static.keyboardListener);
    this$static.textPanel.getElement_0()['className'] = 'GWTCBtn-focus';
    $setWidget_0(this$static.container, 0, 1, this$static.textPanel);
    $setHTML_0(this$static.container, 0, 2, '&nbsp;');
    $setStyleName_1(this$static.container.cellFormatter, 0, 2, 'GWTCBtn-r');
    $replaceElement(this$static, this$static.container.element_0);
    $sinkEvents(this$static.textPanel.element_0, 7164);
  }
  $add_8(this$static.mouseListeners, this$static.mouseOverListener);
  $setHTML(this$static, text);
  $sinkEvents(this$static.getElement_0(), 1021 | (this$static.getElement_0().__eventBits || 0));
}

function $setVisible(this$static, visible){
  this$static.getElement_0().style.display = visible?'':'none';
  if (this$static.container)
    $setVisible_0(this$static.container, visible);
}

function addClickListener(listener){
  $add_8(this.clickListeners, listener);
}

function addStyleName(style){
  $addStyleName(this, style);
}

function getClass_8(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton_2_classLit;
}

function getElement(){
  return $getElement(this);
}

function onBrowserEvent(event_0){
  var mevent;
  mevent = $eventGetTypeInt(event_0);
  $fireMouseEvent(this.mouseListeners, this, event_0);
  if (this.enabled) {
    if (mevent == 1) {
      $removeStyleName(this, getStylePrimaryName_1(this.getElement_0()) + '-' + 'over');
      $fireClick(this.clickListeners, this);
      $removeStyleName(this, getStylePrimaryName_1(this.getElement_0()) + '-' + 'down');
    }
     else if (this.container) {
      $onBrowserEvent(this.textPanel, event_0);
    }
     else {
      $onBrowserEvent_0(this, event_0);
    }
  }
}

function removeStyleName(style){
  $removeStyleName(this, style);
}

function setHTML(html){
  $setHTML(this, html);
}

function setStyleName(style){
  $setStyleName(this, style);
}

function setTabIndex(index){
  if (!this.container) {
    this.getElement_0().tabIndex = index;
  }
   else {
    this.textPanel.element_0.tabIndex = index;
  }
}

function setText(txt){
  $setText_0(this, txt);
}

function setVisible(visible){
  $setVisible(this, visible);
}

function toString_0(){
  return !this.container?$toString_1(this):$toString_1(this.container);
}

function GWTCButton(){
}

_ = GWTCButton.prototype = new Button();
_.addClickListener = addClickListener;
_.addStyleName = addStyleName;
_.getClass$ = getClass_8;
_.getElement_0 = getElement;
_.onBrowserEvent = onBrowserEvent;
_.removeStyleName = removeStyleName;
_.setHTML = setHTML;
_.setStyleName = setStyleName;
_.setTabIndex = setTabIndex;
_.setText_0 = setText;
_.setVisible = setVisible;
_.toString$ = toString_0;
_.typeId$ = 20;
_.container = null;
_.element = null;
_.enabled = true;
_.textPanel = null;
_.textPosIdx = 1;
function $GWTCButton$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_5(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$1_2_classLit;
}

function onMouseDown(sender, x, y){
  $addStyleDependentName_0(this.this$0, 'down');
}

function onMouseEnter(sender){
  $addStyleDependentName_0(this.this$0, 'over');
}

function onMouseLeave(sender){
  $removeStyleDependentName(this.this$0, 'down');
  $removeStyleDependentName(this.this$0, 'over');
}

function onMouseMove(sender, x, y){
}

function onMouseUp(sender, x, y){
  $removeStyleDependentName(this.this$0, 'down');
}

function GWTCButton$1(){
}

_ = GWTCButton$1.prototype = new Object_0();
_.getClass$ = getClass_5;
_.onMouseDown = onMouseDown;
_.onMouseEnter = onMouseEnter;
_.onMouseLeave = onMouseLeave;
_.onMouseMove = onMouseMove;
_.onMouseUp = onMouseUp;
_.typeId$ = 21;
_.this$0 = null;
function $GWTCButton$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_6(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$2_2_classLit;
}

function GWTCButton$2(){
}

_ = GWTCButton$2.prototype = new Object_0();
_.getClass$ = getClass_6;
_.typeId$ = 22;
_.this$0 = null;
function $GWTCButton$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $onKeyPress(this$static, keyCode){
  if (keyCode == 13)
    $click(this$static.this$0);
}

function getClass_7(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$3_2_classLit;
}

function GWTCButton$3(){
}

_ = GWTCButton$3.prototype = new Object_0();
_.getClass$ = getClass_7;
_.typeId$ = 23;
_.this$0 = null;
function $initWidget(this$static, widget){
  if (this$static.widget) {
    throw $IllegalStateException(new IllegalStateException(), 'Composite.initWidget() may only be called once.');
  }
  $removeFromParent(widget);
  this$static.element_0 = widget.getElement_0();
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function getClass_58(){
  return Lcom_google_gwt_user_client_ui_Composite_2_classLit;
}

function isAttached(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}

function onAttach_0(){
  $onAttach(this.widget);
  this.getElement_0().__listener = this;
}

function onBrowserEvent_0(event_0){
  this.widget.onBrowserEvent(event_0);
}

function onDetach_1(){
  this.widget.onDetach();
}

function Composite(){
}

_ = Composite.prototype = new Widget();
_.getClass$ = getClass_58;
_.isAttached = isAttached;
_.onAttach = onAttach_0;
_.onBrowserEvent = onBrowserEvent_0;
_.onDetach = onDetach_1;
_.typeId$ = 24;
_.widget = null;
function $clinit_28(){
  $clinit_28 = nullMethod;
  dateTimeConstants_0 = $DateTimeConstants_en(new DateTimeConstants_en());
  weekStart = $Integer(new Integer(), __parseAndValidateInt('1', 10, -2147483648, 2147483647)).value_0 - 1;
  WEEK_DAYS = $shortWeekdays(dateTimeConstants_0);
}

function $$init_7(this$static){
  var ret;
  this$static.minimalDate = setHourToZero($Date(new Date_0()));
  this$static.selectedDate = setHourToZero($Date(new Date_0()));
  this$static.maximalDate = ($clinit_28() , ret = add_5($Date(new Date_0()), 365, 4) , ret);
  this$static.cursorDate = getFirstDayOfMonth($Date(new Date_0()));
  this$static.firstMonthDay = getFirstDayOfMonth(this$static.cursorDate);
  this$static.monthNumber = getMonthNumber(this$static.cursorDate);
  this$static.calendarGrid_0 = $FlexTable(new FlexTable());
  this$static.changeListeners = $ChangeListenerCollection(new ChangeListenerCollection());
}

function $GWTCSimpleDatePicker(this$static, create){
  $clinit_28();
  $$init_7(this$static);
  if (create)
    $initWidget(this$static, this$static.calendarGrid_0);
  return this$static;
}

function $belongsToMonth(this$static, d){
  return eq(this$static.monthNumber, fromInt((d.jsdate.getFullYear() - 1900) * 12 + d.jsdate.getMonth()));
}

function $getSelectedDateStr(this$static, format){
  return formatDate(format, this$static.selectedDate);
}

function $isVisibleMonth(this$static, months){
  var d, max, min;
  d = increaseMonth(this$static.cursorDate, months);
  min = getFirstDayOfMonth(this$static.minimalDate);
  max = getLastDayOfMonth(this$static.maximalDate);
  if (compare_0(fromDouble(d.jsdate.getTime()), fromDouble(min.jsdate.getTime())) >= 0 && compare_0(fromDouble(d.jsdate.getTime()), fromDouble(max.jsdate.getTime())) <= 0)
    return true;
  return false;
}

function $setCursorDate_0(this$static, d){
  d = setHourToZero(d);
  if (eq(fromDouble(d.jsdate.getTime()), fromDouble(this$static.cursorDate.jsdate.getTime())))
    return;
  if (neq(this$static.monthNumber, fromInt((d.jsdate.getFullYear() - 1900) * 12 + d.jsdate.getMonth())))
    this$static.needsRedraw = true;
  this$static.cursorDate = d;
  this$static.firstMonthDay = setHourToZero($Date_0(new Date_0(), d.jsdate.getFullYear() - 1900, d.jsdate.getMonth(), 1));
  this$static.monthNumber = fromInt((d.jsdate.getFullYear() - 1900) * 12 + d.jsdate.getMonth());
}

function $setMaximalDate_1(this$static, d){
  var a, b;
  d = setHourToZero(d);
  if (eq(fromDouble(d.jsdate.getTime()), fromDouble(this$static.maximalDate.jsdate.getTime())))
    return;
  a = $belongsToMonth(this$static, this$static.maximalDate);
  b = eq(this$static.monthNumber, fromInt((d.jsdate.getFullYear() - 1900) * 12 + d.jsdate.getMonth()));
  if (!a && b || a && b)
    this$static.needsRedraw = true;
  this$static.maximalDate = d;
  if (compare_0(fromDouble(this$static.selectedDate.jsdate.getTime()), fromDouble(d.jsdate.getTime())) > 0)
    this$static.selectedDate = d;
  if (compare_0(fromDouble(this$static.minimalDate.jsdate.getTime()), fromDouble(d.jsdate.getTime())) > 0)
    this$static.minimalDate = d;
}

function $setMinimalDate_1(this$static, d){
  var a, b;
  d = setHourToZero(d);
  if (eq(fromDouble(d.jsdate.getTime()), fromDouble(this$static.minimalDate.jsdate.getTime())))
    return;
  a = $belongsToMonth(this$static, this$static.minimalDate);
  b = eq(this$static.monthNumber, fromInt((d.jsdate.getFullYear() - 1900) * 12 + d.jsdate.getMonth()));
  if (!a && b || a && !b || a && b)
    this$static.needsRedraw = true;
  this$static.minimalDate = d;
  if (compare_0(fromDouble(this$static.selectedDate.jsdate.getTime()), fromDouble(d.jsdate.getTime())) < 0)
    this$static.selectedDate = d;
  if (compare_0(fromDouble(this$static.maximalDate.jsdate.getTime()), fromDouble(d.jsdate.getTime())) < 0)
    this$static.maximalDate = d;
}

function $setNumberOfLettersInDayNames(n){
  var i;
  WEEK_DAYS = initDim(_3Ljava_lang_String_2_classLit, 138, 1, 7, 0);
  for (i = 0; i < 7; ++i) {
    WEEK_DAYS[i] = $shortWeekdays(dateTimeConstants_0)[i];
    if (n > 0 && n < WEEK_DAYS[i].length)
      WEEK_DAYS[i] = WEEK_DAYS[i].substr(0, n - 0);
  }
}

function $setSelectedDate_0(this$static, d){
  var a, b;
  d = setHourToZero(d);
  if (eq(fromDouble(d.jsdate.getTime()), fromDouble(this$static.selectedDate.jsdate.getTime())))
    return;
  a = $belongsToMonth(this$static, this$static.selectedDate);
  b = eq(this$static.monthNumber, fromInt((d.jsdate.getFullYear() - 1900) * 12 + d.jsdate.getMonth()));
  if (a && b && neq(fromDouble(this$static.selectedDate.jsdate.getTime()), fromDouble(d.jsdate.getTime())) || !a && b || a && !b)
    this$static.needsRedraw = true;
  this$static.selectedDate = d;
}

function add_5(date, value, type){
  var d;
  d = setHourToZero($Date_1(new Date_0(), fromDouble(date.jsdate.getTime())));
  if (type == 1)
    d.setYear(d.jsdate.getFullYear() - 1900 + value);
  if (type == 2)
    d.setMonth_0(d.jsdate.getMonth() + value);
  if (type == 3)
    $setDate(d, d.jsdate.getDate() + 7 * value);
  if (type == 4)
    $setDate(d, d.jsdate.getDate() + value);
  return d;
}

function add_6(d, s){
  $clinit_28();
  var c, n;
  if (s == null || s.length == 0)
    return d;
  n = $Integer(new Integer(), __parseAndValidateInt($replaceAll(s, '[^\\d\\-]', ''), 10, -2147483648, 2147483647)).value_0;
  if (n < 1)
    return d;
  c = s.toLowerCase().charCodeAt(s.length - 1);
  switch (c) {
    case 100:
      return add_5(d, n, 4);
    case 119:
      return add_5(d, n, 3);
    case 109:
      return add_5(d, n, 2);
    case 121:
      return add_5(d, n, 1);
    default:return d;
  }
}

function addChangeListener_0(listener){
  $add_8(this.changeListeners, listener);
}

function compareDate(a, b){
  $clinit_28();
  var days, diff, hours;
  diff = sub(fromDouble(setHourToZero(b).jsdate.getTime()), fromDouble(setHourToZero(a).jsdate.getTime()));
  hours = Math.ceil(toDouble(div_0(diff, P36ee80_longLit)));
  days = ~~Math.max(Math.min(hours / 24, 2147483647), -2147483648);
  if (hours % 24 > 12)
    days += 1;
  return days;
}

function daysInMonth(d){
  var m, y;
  m = d.jsdate.getMonth();
  switch (m) {
    case 1:
      y = d.jsdate.getFullYear() - 1900 + 1900;
      return y % 4 == 0 && y % 100 != 0?29:28;
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
    default:return 31;
  }
}

function formatDate(format, date){
  $clinit_28();
  if (format == null)
    format = getLongDateFormat().pattern;
  else 
    format = $replaceAll($replaceAll(format, 'dddd', 'EEEE'), 'ddd', 'EEE');
  if (!date)
    return format;
  return $format(($clinit_51() , $DateTimeFormat_0(new DateTimeFormat(), format, defaultDateTimeConstants)), date);
}

function getClass_28(){
  return Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker_2_classLit;
}

function getCursorDate_0(){
  return this.cursorDate;
}

function getFirstDayOfMonth(date){
  return setHourToZero($Date_0(new Date_0(), date.jsdate.getFullYear() - 1900, date.jsdate.getMonth(), 1));
}

function getLastDayOfMonth(date){
  var ret;
  return $clinit_28() , ret = add_5(setHourToZero($Date_0(new Date_0(), date.jsdate.getFullYear() - 1900, date.jsdate.getMonth(), 1)), daysInMonth(date) - 1, 4) , ret;
}

function getMonthNumber(d){
  return fromInt((d.jsdate.getFullYear() - 1900) * 12 + d.jsdate.getMonth());
}

function getSelectedDate_0(){
  return this.selectedDate;
}

function increaseMonth(date, n){
  var currentMonthDays, currentMonthFirstDay, finalMonthDays;
  if (date.jsdate.getDate() > 28) {
    currentMonthFirstDay = setHourToZero($Date_0(new Date_0(), date.jsdate.getFullYear() - 1900, date.jsdate.getMonth(), 1));
    add_5(currentMonthFirstDay, n, 2);
    currentMonthDays = daysInMonth(date);
    finalMonthDays = daysInMonth(currentMonthFirstDay);
    if (currentMonthDays > finalMonthDays) {
      return add_5(currentMonthFirstDay, n, 2);
    }
  }
  return add_5(date, n, 2);
}

function onClick_4(sender){
  var cell;
  if (sender != null && canCast(sender.typeId$, 8)) {
    cell = dynamicCast(sender, 8);
    if (cell.enabled) {
      this.setSelectedDate($Date_0(new Date_0(), this.cursorDate.jsdate.getFullYear() - 1900, this.cursorDate.jsdate.getMonth(), cell.day));
      $fireChange(this.changeListeners, this);
    }
  }
   else {
  }
}

function parseDate(format, dateStr){
  $clinit_28();
  var $e0;
  try {
    return $parse_0(($clinit_51() , $DateTimeFormat_0(new DateTimeFormat(), format, defaultDateTimeConstants)), dateStr, false);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 9)) {
      return null;
    }
     else 
      throw $e0;
  }
}

function refresh_0(){
  var displayNum, enabled, firstWDay, html, i, j, k, l, maximalNum, minimalNum, numOfDays, saturday, selectedNum, styles, sunday, todayNum;
  if (!this.needsRedraw)
    return;
  this.needsRedraw = false;
  if (!this.initialized) {
    this.initialized = true;
    $clear(this.calendarGrid_0);
    this.calendarGrid_0.getElement_0()['className'] = 'panelDays';
    this.calendarGrid_0.tableElem['cellSpacing'] = 0;
    $setStyleName_2(this.calendarGrid_0.rowFormatter, 0, 'weekHeader');
    l = 0;
    for (i = weekStart; i < 7; ++i) {
      $setStyleName_1(this.calendarGrid_0.cellFormatter, 0, l, 'cellDayNames');
      $setText_3(this.calendarGrid_0, 0, l++, WEEK_DAYS[i]);
    }
    while (l < 7) {
      $setStyleName_1(this.calendarGrid_0.cellFormatter, 0, l, 'cellDayNames');
      $setText_3(this.calendarGrid_0, 0, l++, WEEK_DAYS[0]);
    }
    for (i = 1; i < 7; ++i) {
      for (k = 0; k < 7; ++k) {
        html = $GWTCSimpleDatePicker$CellHTML(new GWTCSimpleDatePicker$CellHTML());
        $setWidget_0(this.calendarGrid_0, i, k, html);
        $addClickListener_3(html, this);
        $addMouseListener_0(html, ($clinit_27() , mouseOverListener));
      }
    }
  }
  todayNum = fromInt(1 + compareDate(this.firstMonthDay, $Date(new Date_0())));
  minimalNum = fromInt(1 + compareDate(this.firstMonthDay, this.minimalDate));
  maximalNum = fromInt(1 + compareDate(this.firstMonthDay, this.maximalDate));
  numOfDays = daysInMonth(this.cursorDate);
  selectedNum = fromInt(this.selectedDate?1 + compareDate(this.firstMonthDay, this.selectedDate):-1);
  firstWDay = this.firstMonthDay.jsdate.getDay();
  sunday = (7 - weekStart) % 7;
  saturday = 6 - weekStart;
  j = weekStart;
  for (i = 1; i < 7; ++i) {
    for (k = 0; k < 7; ++k , ++j) {
      displayNum = firstWDay < weekStart?j - firstWDay - 6:j - firstWDay + 1;
      styles = '';
      enabled = true;
      if (j < firstWDay || displayNum > numOfDays || displayNum < 1) {
        styles = 'cellEmpty';
        enabled = false;
        displayNum = 0;
      }
       else {
        if (compare_0(fromInt(displayNum), minimalNum) < 0 || compare_0(fromInt(displayNum), maximalNum) > 0) {
          styles = 'invalidDay';
          enabled = false;
        }
         else if (eq(fromInt(displayNum), selectedNum)) {
          styles = 'validDay selectedDay';
        }
         else if (compare_0(fromInt(displayNum), selectedNum) >= 0) {
          styles = 'validDay afterSelected';
        }
         else {
          styles = 'validDay beforeSelected';
        }
        if (eq(fromInt(displayNum), todayNum)) {
          styles += ' today';
        }
        if (k == sunday || k == saturday) {
          styles += ' weekend';
        }
        styles += ' cellDays';
      }
      html = dynamicCast($getWidget_0(this.calendarGrid_0, i, k), 8);
      html.enabled = enabled;
      $setDay(html, displayNum);
      html.element_0['className'] = styles;
    }
  }
}

function setCursorDate_0(d){
  $setCursorDate_0(this, d);
}

function setHourToZero(date){
  var d, t;
  d = $Date_1(new Date_0(), fromDouble(date.jsdate.getTime()));
  d.setHours_0(0);
  d.setMinutes_0(0);
  d.setSeconds_0(0);
  t = div_0(fromDouble(d.jsdate.getTime()), P3e8_longLit);
  t = mul(t, P3e8_longLit);
  return $Date_1(new Date_0(), t);
}

function setMaximalDate_0(d){
  $setMaximalDate_1(this, d);
}

function setMinimalDate_0(d){
  $setMinimalDate_1(this, d);
}

function setSelectedDate_0(d){
  $setSelectedDate_0(this, d);
}

function GWTCSimpleDatePicker(){
}

_ = GWTCSimpleDatePicker.prototype = new Composite();
_.addChangeListener = addChangeListener_0;
_.getClass$ = getClass_28;
_.getCursorDate = getCursorDate_0;
_.getSelectedDate = getSelectedDate_0;
_.onClick = onClick_4;
_.refresh = refresh_0;
_.setCursorDate = setCursorDate_0;
_.setMaximalDate = setMaximalDate_0;
_.setMinimalDate = setMinimalDate_0;
_.setSelectedDate = setSelectedDate_0;
_.typeId$ = 25;
_.initialized = false;
_.needsRedraw = true;
var WEEK_DAYS, dateTimeConstants_0, weekStart;
function $clinit_10(){
  $clinit_10 = nullMethod;
  $clinit_28();
  CONFIG_DEFAULT = constant_cont;
  CONFIG_DIALOG = round_int(Math.pow(2, constant_cont++));
  CONFIG_ROUNDED_BOX = round_int(Math.pow(2, constant_cont++));
  CONFIG_NO_AUTOHIDE = round_int(Math.pow(2, constant_cont++));
  CONFIG_NO_ANIMATION = round_int(Math.pow(2, constant_cont++));
  CONFIG_BACKGROUND = round_int(Math.pow(2, constant_cont++));
  CONFIG_FLAT_BUTTONS = round_int(Math.pow(2, constant_cont++));
  CONFIG_STANDARD_BUTTONS = round_int(Math.pow(2, constant_cont++));
}

function $GWTCDatePickerAbstract(this$static){
  $clinit_10();
  $$init_7(this$static);
  this$static.helpDlg = $GWTCAlert(new GWTCAlert(), 8);
  this$static.calendarGrid = $FlexTable(new FlexTable());
  this$static.navButtonsTop = $DockPanel(new DockPanel());
  this$static.navButtonsBottom = $DockPanel(new DockPanel());
  this$static.topButtonsRow1 = $DockPanel(new DockPanel());
  this$static.topButtonsRow0 = $DockPanel(new DockPanel());
  this$static.topButtonsRow2 = $DockPanel(new DockPanel());
  this$static.bottomButtonsRow0 = $DockPanel(new DockPanel());
  this$static.bottomButtonsRow1 = $DockPanel(new DockPanel());
  this$static.bottomButtonsRow2 = $DockPanel(new DockPanel());
  this$static.monthSelectorHeader = $MenuBar(new MenuBar());
  this$static.monthHeaders = $Vector(new Vector());
  this$static.monthMenu = $MenuBar_0(new MenuBar(), true);
  this$static.simpleDatePickers = $Vector(new Vector());
  this$static.onDaySelected = $GWTCDatePickerAbstract$1(new GWTCDatePickerAbstract$1(), this$static);
  return this$static;
}

function $addChangeListener(this$static, listener){
  var i;
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i) {
    dynamicCast($get_1(this$static.simpleDatePickers.arrayList, i), 3).addChangeListener(listener);
  }
}

function $addStyleDependentName(this$static, s){
  if (this$static.calendarDlg)
    $addStyleDependentName_0(this$static.calendarDlg, s);
  else 
    $addStyleDependentName_0(this$static.outer, s);
}

function $addStyleName_0(this$static, s){
  var i;
  if (this$static.calendarDlg) {
    $addStyleName_4(this$static.calendarDlg, s);
  }
   else {
    $addStyleName_4(this$static.outer, s);
  }
  $addStyleName_4(this$static.monthSelectorHeader, s + '-MenuBar');
  $addStyleName_4(this$static.monthMenu, s + '-MenuBar');
  $addStyleName_4(this$static.monthSelectorHeader, s + '-MenuBar-horizontal');
  $addStyleName_4(this$static.monthMenu, s + '-MenuBar-vertical');
  for (i = 0; i < this$static.monthHeaders.arrayList.size; ++i) {
    $addStyleName_4(dynamicCast($get_1(this$static.monthHeaders.arrayList, i), 4), s + '-MenuBar');
  }
}

function $configure(this$static, buttonsLayout, months, monthsPerRow, monthsStep, monthsInSelector){
  this$static.monthColumns = monthsPerRow;
  this$static.monthSelector = monthsInSelector;
  this$static.monthStep = monthsStep;
  $setNumberOfMonths(this$static, months);
  $removeFromParent(this$static.monthSelectorHeader);
  $layoutButtons(this$static, buttonsLayout);
  $layoutCalendar(this$static);
  $refresh(this$static);
}

function $createButton(buttonsType, text, listener){
  var b;
  if (buttonsType == CONFIG_DEFAULT)
    b = $GWTCButton(new GWTCButton());
  else 
    b = $GWTCButton_0(new GWTCButton(), 0, '');
  if (buttonsType == CONFIG_FLAT_BUTTONS)
    $addStyleName(b, getStylePrimaryName_1(b.getElement_0()) + '-' + 'flat');
  if (listener)
    $add_8(b.clickListeners, listener);
  $setText_0(b, text);
  return b;
}

function $fillMenuItems(this$static){
  var c, d, i, md, n, t;
  $clearItems(this$static.monthSelectorHeader);
  $clearItems(this$static.monthMenu);
  $addItem(this$static.monthSelectorHeader, $MenuItem_0(new MenuItem(), formatDate('MMMM, yyyy', dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).getCursorDate()), this$static.monthMenu));
  n = -~~(this$static.monthSelector / 2);
  d = $Date_1(new Date_0(), fromDouble(getFirstDayOfMonth(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).getCursorDate()).jsdate.getTime()));
  md = $Date_1(new Date_0(), fromDouble(getFirstDayOfMonth(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).minimalDate).jsdate.getTime()));
  d = increaseMonth(d, n);
  while (compareDate(md, d) < 0) {
    d = increaseMonth(d, 1);
    ++n;
  }
  n += this$static.monthSelector;
  d = increaseMonth(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).getCursorDate(), n);
  while (compareDate(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).maximalDate, d) > 0) {
    d = increaseMonth(d, -1);
    --n;
  }
  n -= this$static.monthSelector;
  d = increaseMonth(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).getCursorDate(), n);
  for (i = n; i < this$static.monthSelector; ++i) {
    t = formatDate('MMMM, yyyy', d);
    c = $GWTCDatePickerAbstract$MenuCommand(new GWTCDatePickerAbstract$MenuCommand(), d, this$static);
    d = increaseMonth(d, 1);
    if (compareDate(d, dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).maximalDate) >= 0 && compareDate(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).minimalDate, d) > 0) {
      $addItem(this$static.monthMenu, $MenuItem(new MenuItem(), t, c));
    }
  }
}

function $getButton(this$static, s, pos){
  var c;
  if (pos < s.length) {
    c = s.charCodeAt(pos);
    if (c == 95 || c == 32)
      return $Label_0(new Label(), ' ');
    if (c == 120)
      return this$static.closeBtn;
    if (c == 63)
      return this$static.helpBtn;
    if (c == 45)
      return this$static.todayBtn;
    if (c == 62)
      return this$static.nextMBtn;
    if (c == 60)
      return this$static.prevMBtn;
    if (c == 110)
      return this$static.nextYBtn;
    if (c == 112)
      return this$static.prevYBtn;
    if (c == 109)
      return this$static.monthSelectorHeader;
  }
  return null;
}

function $hide(this$static){
  if (this$static.calendarDlg) {
    $hide_1(this$static.calendarDlg);
  }
   else 
    this$static.outer.setVisible(false);
}

function $initialize_0(this$static, config){
  var buttonsType, opt, s;
  buttonsType = config & CONFIG_FLAT_BUTTONS | config & CONFIG_STANDARD_BUTTONS;
  this$static.helpBtn = $createButton(buttonsType, '?', this$static);
  this$static.closeBtn = $createButton(buttonsType, 'x', this$static);
  this$static.todayBtn = $createButton(buttonsType, '-', this$static);
  this$static.prevMBtn = $createButton(buttonsType, '<', this$static);
  this$static.prevYBtn = $createButton(buttonsType, '\xAB', this$static);
  this$static.nextMBtn = $createButton(buttonsType, '>', this$static);
  this$static.nextYBtn = $createButton(buttonsType, '\xBB', this$static);
  if ((config & CONFIG_DIALOG) == CONFIG_DIALOG) {
    opt = 0;
    if ((config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX) {
      opt |= 2;
    }
    if ((config & CONFIG_BACKGROUND) != CONFIG_BACKGROUND) {
      opt |= 16;
      if ((config & CONFIG_NO_AUTOHIDE) == CONFIG_NO_AUTOHIDE) {
        opt |= 64;
      }
    }
    this$static.calendarDlg = $GWTCModalBox(new GWTCModalBox(), opt);
    this$static.calendarDlg.isAnimationEnabled = (config & CONFIG_NO_ANIMATION) != CONFIG_NO_ANIMATION;
    this$static.outer = this$static.calendarDlg;
    $initWidget(this$static, $DockPanel(new DockPanel()));
    $setStyleName_0(this$static, 'GWTCDatePicker');
    $addStyleDependentName(this$static, 'dialog');
    $setZIndex(this$static, 999);
  }
   else {
    if ((config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX) {
      this$static.outer = $GWTCBox_0(new GWTCBox(), 'GWTCBox');
    }
     else {
      this$static.outer = $VerticalPanel(new VerticalPanel());
    }
    s = $getPropertyString(this$static.outer.getElement_0(), 'className');
    $initWidget(this$static, this$static.outer);
    $setStyleName_0(this$static, 'GWTCDatePicker');
    $addStyleDependentName(this$static, 'embeded');
    if (s != null && s.length > 0)
      $addStyleName_0(this$static, s);
  }
  setStyleName_1(this$static.helpDlg.getElement_0(), 'GWTCDatePicker-help', true);
  this$static.navButtonsTop.getElement_0()['className'] = 'panelButtons';
  this$static.navButtonsBottom.getElement_0()['className'] = 'panelButtonsBottom';
  this$static.calendarGrid.getElement_0()['className'] = 'panelMonths';
  this$static.navButtonsTop.getElement_0().style['width'] = '100%';
  this$static.calendarGrid.getElement_0().style['width'] = '100%';
  this$static.navButtonsBottom.getElement_0().style['width'] = '100%';
  if ((config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX)
    $addStyleDependentName(this$static, 'box');
  else 
    $addStyleDependentName(this$static, 'no-box');
  if ((config & CONFIG_DIALOG) != CONFIG_DIALOG)
    $setVisible(this$static.closeBtn, false);
  this$static.monthSelectorHeader.isAnimationEnabled = true;
  this$static.outer.add_1(this$static.navButtonsTop);
  this$static.outer.add_1(this$static.calendarGrid);
  this$static.outer.add_1(this$static.navButtonsBottom);
  this$static.drawDatePickerWidget_0();
  $refresh(this$static);
  $sinkEvents(this$static.outer.getElement_0(), 1020);
  this$static.outer.getElement_0().style['cursor'] = 'default';
}

function $isMonthInRange(this$static, incr){
  while (incr != 0 && !$isVisibleMonth(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3), incr))
    incr = incr < 0?incr + 1:incr - 1;
  return incr;
}

function $layoutButtons(this$static, distribution){
  var i, j, m, p_0, panels, s, w;
  $clear_0(this$static.navButtonsBottom);
  $clear_0(this$static.navButtonsTop);
  panels = initValues(_3Lcom_google_gwt_user_client_ui_DockPanel_2_classLit, 0, 32, [this$static.topButtonsRow0, this$static.topButtonsRow1, this$static.topButtonsRow2, this$static.bottomButtonsRow0, this$static.bottomButtonsRow1, this$static.bottomButtonsRow2]);
  s = $split(distribution, '[;:,]', 0);
  w = null;
  m = null;
  for (i = 0; i < panels.length && i < s.length; ++i) {
    p_0 = panels[i];
    $clear_0(p_0);
    if (s[i].length == 0)
      continue;
    for (j = 0; j < s[i].length; ++j) {
      if (w = $getButton(this$static, s[i], j)) {
        $add_3(p_0, w, ($clinit_107() , WEST));
      }
      if (j == ~~(s[i].length / 2))
        m = w;
    }
    p_0.element_0.style['width'] = '100%';
    if (m) {
      $setCellWidth(m, '100%');
      m.setWidth('100%');
    }
    if (i < 3)
      $add_3(this$static.navButtonsTop, p_0, ($clinit_107() , NORTH));
    else 
      $add_3(this$static.navButtonsBottom, p_0, ($clinit_107() , NORTH));
    setStyleName_1(p_0.element_0, 'buttonsRow_' + i % 3, true);
  }
}

function $layoutCalendar(this$static){
  var col, i, row;
  $clear(this$static.calendarGrid);
  this$static.calendarGrid.tableElem['cellSpacing'] = 0;
  i = 0;
  row = -2;
  col = 0;
  for (; i < this$static.simpleDatePickers.arrayList.size; ++i) {
    if (i % this$static.monthColumns == 0) {
      col = 0;
      row += 2;
    }
     else if (i > 0) {
      $setHTML_0(this$static.calendarGrid, row, col, '&nbsp;');
      $setHTML_0(this$static.calendarGrid, row + 1, col, '&nbsp;');
      $addStyleName_1(this$static.calendarGrid.cellFormatter, row, col, 'monthSeparator');
      $addStyleName_1(this$static.calendarGrid.cellFormatter, row + 1, col, 'monthSeparator');
      col += 1;
    }
    if (!this$static.monthSelectorHeader.parent || this$static.simpleDatePickers.arrayList.size > 1) {
      if (i == 0 || i % this$static.monthColumns == 0) {
        $addStyleName_3(this$static.calendarGrid.rowFormatter, row, 'monthLabels');
        $addStyleName_3(this$static.calendarGrid.rowFormatter, row + 1, 'monthCells');
      }
      if (i == 0 && !$getParentElement(this$static.monthSelectorHeader.element_0))
        $setWidget_0(this$static.calendarGrid, row, col, this$static.monthSelectorHeader);
      else 
        $setWidget_0(this$static.calendarGrid, row, col, dynamicCast($get_1(this$static.monthHeaders.arrayList, i), 2));
    }
    $setWidget_0(this$static.calendarGrid, row + 1, col, dynamicCast($get_1(this$static.simpleDatePickers.arrayList, i), 2));
    $addStyleName_2(this$static.calendarGrid.columnFormatter, i, 'Month-' + i);
    dynamicCast($get_1(this$static.simpleDatePickers.arrayList, i), 3).addChangeListener(this$static.onDaySelected);
    ++col;
  }
}

function $moveIntoVisibleArea(this$static){
  var h, hd, w, wd, xd, yd;
  if (this$static.calendarDlg) {
    w = getBodyElement().clientWidth + ($clinit_85() , documentRoot).scrollLeft;
    xd = $getAbsoluteLeft(this$static.calendarDlg.element_0);
    wd = (parseInt(this$static.calendarGrid.getElement_0()['offsetWidth']) || 0) + 40;
    if (xd + wd > w) {
      xd = xd - (xd + wd - w);
    }
    h = getBodyElement().clientHeight + documentRoot.scrollTop;
    yd = $getAbsoluteTop(this$static.calendarDlg.element_0);
    hd = (parseInt(this$static.calendarDlg.getElement_0()['offsetHeight']) || 0) + 20;
    if (yd + hd > h) {
      yd = yd - (yd + hd - h);
    }
    $setPopupPosition(this$static.calendarDlg, xd, yd);
  }
}

function $refresh(this$static){
  var i;
  this$static.needsRedraw = false;
  $setEnabled(this$static.prevMBtn, $isVisibleMonth(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3), -1));
  $setEnabled(this$static.nextMBtn, $isVisibleMonth(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3), 1));
  $setEnabled(this$static.prevYBtn, $isVisibleMonth(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3), -1));
  $setEnabled(this$static.nextYBtn, $isVisibleMonth(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3), 1));
  $setEnabled(this$static.todayBtn, neq(getMonthNumber(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).getCursorDate()), getMonthNumber($Date(new Date_0()))));
  $fillMenuItems(this$static);
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i) {
    dynamicCast($get_1(this$static.simpleDatePickers.arrayList, i), 3).setCursorDate(increaseMonth(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).getCursorDate(), i));
    dynamicCast($get_1(this$static.simpleDatePickers.arrayList, i), 3).refresh();
    $setInnerText(dynamicCast($get_1(this$static.monthHeaders.arrayList, i), 4).element_0, formatDate('MMMM, yyyy', dynamicCast($get_1(this$static.simpleDatePickers.arrayList, i), 3).getCursorDate()));
  }
}

function $setCaptionText(this$static, t){
  if (this$static.calendarDlg) {
    $setInnerText(this$static.calendarDlg.caption.element_0, t);
  }
}

function $setCursorDate(this$static, d){
  $setCursorDate_0(this$static, d);
  dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).setCursorDate(d);
}

function $setI18nMessages(this$static, strs){
  var caption, help;
  internationalize(this$static.nextMBtn, strs, 'key.next.month');
  internationalize(this$static.prevMBtn, strs, 'key.prev.month');
  internationalize(this$static.nextYBtn, strs, 'key.next.year');
  internationalize(this$static.prevYBtn, strs, 'key.prev.year');
  internationalize(this$static.todayBtn, strs, 'key.today');
  internationalize(this$static.helpBtn, strs, 'key.help');
  internationalize(this$static.closeBtn, strs, 'key.close');
  help = dynamicCast('key.calendar.help' == null?strs.nullSlot:'key.calendar.help' != null?strs.stringMap[':' + 'key.calendar.help']:$getHashValue(strs, 'key.calendar.help', ~~'key.calendar.help'.hashCode$()), 1);
  if (help != null && help.length > 0)
    this$static.helpStr = help;
  caption = dynamicCast('key.caption' == null?strs.nullSlot:'key.caption' != null?strs.stringMap[':' + 'key.caption']:$getHashValue(strs, 'key.caption', ~~'key.caption'.hashCode$()), 1);
  if (caption != null)
    $setCaptionText(this$static, caption);
}

function $setMaximalDate(this$static, d){
  var i;
  $setMaximalDate_1(this$static, d);
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i)
    dynamicCast($get_1(this$static.simpleDatePickers.arrayList, i), 3).setMaximalDate(d);
}

function $setMinimalDate(this$static, d){
  var i;
  $setMinimalDate_1(this$static, d);
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i)
    dynamicCast($get_1(this$static.simpleDatePickers.arrayList, i), 3).setMinimalDate(d);
}

function $setNumberOfMonths(this$static, months){
  var i;
  this$static.monthColumns = min_0(this$static.monthColumns, months);
  this$static.monthStep = min_0(this$static.monthStep, months);
  this$static.simpleDatePickers = $Vector(new Vector());
  for (i = 0; i < (1 > months?1:months); ++i) {
    $add_8(this$static.simpleDatePickers.arrayList, $GWTCSimpleDatePicker(new GWTCSimpleDatePicker(), true));
    $add_8(this$static.monthHeaders.arrayList, $Label(new Label()));
  }
  $setMinimalDate(this$static, this$static.minimalDate);
  $setMaximalDate(this$static, this$static.maximalDate);
  $setSelectedDate(this$static, this$static.selectedDate);
}

function $setSelectedDate(this$static, d){
  var i;
  $setSelectedDate_0(this$static, d);
  if (!d)
    return;
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i) {
    dynamicCast($get_1(this$static.simpleDatePickers.arrayList, i), 3).setSelectedDate(d);
    dynamicCast($get_1(this$static.simpleDatePickers.arrayList, i), 3).refresh();
  }
}

function $setStyleName_0(this$static, s){
  var i;
  if (this$static.calendarDlg)
    $setStyleName_3(this$static.calendarDlg, s);
  else 
    $setStyleName_3(this$static.outer, s);
  $setStyleName_3(this$static.monthSelectorHeader, s + '-MenuBar');
  $setStyleName_3(this$static.monthMenu, s + '-MenuBar');
  $addStyleName_4(this$static.monthSelectorHeader, s + '-MenuBar-horizontal');
  $addStyleName_4(this$static.monthMenu, s + '-MenuBar-vertical');
  for (i = 0; i < this$static.monthHeaders.arrayList.size; ++i) {
    dynamicCast($get_1(this$static.monthHeaders.arrayList, i), 4).getElement_0()['className'] = 'monthLabel';
    $addStyleName_4(dynamicCast($get_1(this$static.monthHeaders.arrayList, i), 4), s + '-MenuBar');
    $addStyleName_4(this$static.monthSelectorHeader, s + '-MenuBar-horizontal');
  }
  if (!$equals_0(s, 'GWTCDatePicker')) {
    $addStyleName_0(this$static, 'GWTCDatePicker');
  }
}

function $setZIndex(this$static, z){
  if (this$static.calendarDlg) {
    this$static.calendarDlg.element_0.style['zIndex'] = '' + z;
    $setZIndex_1(this$static.helpDlg, z + 1);
  }
}

function $show_0(this$static, w){
  if (w)
    $show(this$static, $getAbsoluteLeft(w.getElement_0()), $getAbsoluteTop(w.getElement_0()));
  else 
    $show(this$static, -1, -1);
}

function $show(this$static, left, top){
  if (this$static.needsRedraw)
    $refresh(this$static);
  if (!this$static.calendarDlg) {
    this$static.outer.setVisible(true);
  }
   else {
    if (top >= 0 && left >= 0) {
      $setPopupPosition(this$static.calendarDlg, left, top);
      $show_2(this$static.calendarDlg);
      $moveIntoVisibleArea(this$static);
      this$static.calendarGrid.element_0.scrollIntoView();
    }
     else {
      $center(this$static.calendarDlg);
    }
  }
  $setFocus(this$static.todayBtn, true);
}

function $showByElement(this$static, e){
  if (e)
    $show(this$static, $getAbsoluteLeft(e), $getAbsoluteTop(e));
  else 
    $show(this$static, -1, -1);
}

function addChangeListener(listener){
  $addChangeListener(this, listener);
}

function addStyleDependentName(s){
  $addStyleDependentName(this, s);
}

function addStyleName_0(s){
  $addStyleName_0(this, s);
}

function getClass_11(){
  return Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract_2_classLit;
}

function getCursorDate(){
  return dynamicCast($get_1(this.simpleDatePickers.arrayList, 0), 3).getCursorDate();
}

function getElement_0(){
  return this.calendarDlg?this.calendarDlg.element_0:this.outer.getElement_0();
}

function getSelectedDate(){
  return dynamicCast($get_1(this.simpleDatePickers.arrayList, 0), 3).getSelectedDate();
}

function getStylePrimaryName(){
  return this.calendarDlg?getStylePrimaryName_1(this.calendarDlg.element_0):getStylePrimaryName_1(this.outer.getElement_0());
}

function hide_0(){
  $hide(this);
}

function internationalize(b, strs, ktext){
  $clinit_10();
  var text, title;
  if (!strs)
    return;
  text = dynamicCast(ktext == null?strs.nullSlot:ktext != null?strs.stringMap[':' + ktext]:$getHashValue(strs, ktext, ~~ktext.hashCode$()), 1);
  title = dynamicCast(ktext + '.title' == null?strs.nullSlot:ktext + '.title' != null?strs.stringMap[':' + (ktext + '.title')]:$getHashValue(strs, ktext + '.title', ~~(ktext + '.title').hashCode$()), 1);
  if (text != null && text.length > 0) {
    if (b != null && canCast(b.typeId$, 5))
      dynamicCast(b, 5).setText_0(text);
    else if (b != null && canCast(b.typeId$, 6))
      $setCaptionText(dynamicCast(b, 6), text);
  }
  if (title != null && title.length > 0)
    b.setTitle(title);
}

function onAttach(){
  $onAttach(this.widget);
  (this.calendarDlg?this.calendarDlg.element_0:this.outer.getElement_0()).__listener = this;
}

function onClick_0(sender){
  if (this.prevMBtn == sender) {
    $setCursorDate(this, increaseMonth(dynamicCast($get_1(this.simpleDatePickers.arrayList, 0), 3).getCursorDate(), $isMonthInRange(this, -this.monthStep)));
  }
   else if (this.nextMBtn == sender) {
    $setCursorDate(this, increaseMonth(dynamicCast($get_1(this.simpleDatePickers.arrayList, 0), 3).getCursorDate(), $isMonthInRange(this, this.monthStep)));
  }
   else if (this.prevYBtn == sender) {
    $setCursorDate(this, increaseMonth(dynamicCast($get_1(this.simpleDatePickers.arrayList, 0), 3).getCursorDate(), $isMonthInRange(this, -12)));
  }
   else if (this.nextYBtn == sender) {
    $setCursorDate(this, increaseMonth(dynamicCast($get_1(this.simpleDatePickers.arrayList, 0), 3).getCursorDate(), $isMonthInRange(this, 12)));
  }
   else if (this.todayBtn == sender) {
    $setCursorDate(this, $Date(new Date_0()));
  }
   else if (this.helpBtn == sender) {
    this.helpDlg.alert_0($replaceAll(this.helpStr, '\\n', '<br/>'));
  }
   else if (this.closeBtn == sender) {
    this.hide_0();
  }
   else {
  }
  $refresh(this);
}

function refresh(){
  $refresh(this);
}

function setCursorDate(d){
  $setCursorDate_0(this, d);
  dynamicCast($get_1(this.simpleDatePickers.arrayList, 0), 3).setCursorDate(d);
}

function setMaximalDate(d){
  $setMaximalDate(this, d);
}

function setMinimalDate(d){
  $setMinimalDate(this, d);
}

function setSelectedDate(d){
  $setSelectedDate(this, d);
}

function setStyleName_0(s){
  $setStyleName_0(this, s);
}

function GWTCDatePickerAbstract(){
}

_ = GWTCDatePickerAbstract.prototype = new GWTCSimpleDatePicker();
_.addChangeListener = addChangeListener;
_.addStyleDependentName = addStyleDependentName;
_.addStyleName = addStyleName_0;
_.getClass$ = getClass_11;
_.getCursorDate = getCursorDate;
_.getElement_0 = getElement_0;
_.getSelectedDate = getSelectedDate;
_.getStylePrimaryName = getStylePrimaryName;
_.hide_0 = hide_0;
_.onAttach = onAttach;
_.onClick = onClick_0;
_.refresh = refresh;
_.setCursorDate = setCursorDate;
_.setMaximalDate = setMaximalDate;
_.setMinimalDate = setMinimalDate;
_.setSelectedDate = setSelectedDate;
_.setStyleName = setStyleName_0;
_.typeId$ = 26;
_.calendarDlg = null;
_.closeBtn = null;
_.helpBtn = null;
_.helpStr = 'Calendar-Picker is a component of GWTChismes library.\n(c) Manuel Carrasco 2007\nhttp://code.google.com/p/gwtchismes\n\nNavigation buttons:\n< Previous Month\n> Next Month\n\xAB Previous Year\n\xBB Next Year\n- Actual Month\nx Close\n ';
_.monthColumns = 3;
_.monthSelector = 12;
_.monthStep = 1;
_.nextMBtn = null;
_.nextYBtn = null;
_.outer = null;
_.prevMBtn = null;
_.prevYBtn = null;
_.todayBtn = null;
var CONFIG_BACKGROUND, CONFIG_DEFAULT, CONFIG_DIALOG, CONFIG_FLAT_BUTTONS, CONFIG_NO_ANIMATION, CONFIG_NO_AUTOHIDE, CONFIG_ROUNDED_BOX, CONFIG_STANDARD_BUTTONS, constant_cont = 0;
function $clinit_11(){
  $clinit_11 = nullMethod;
  $clinit_10();
  CONFIG_NO_CLOSE_BUTTON = round_int(Math.pow(2, constant_cont++));
  CONFIG_NO_YEAR_BUTTON = round_int(Math.pow(2, constant_cont++));
  CONFIG_NO_HELP_BUTTON = round_int(Math.pow(2, constant_cont++));
  CONFIG_LAYOUT_2 = round_int(Math.pow(2, constant_cont++));
  CONFIG_LAYOUT_3 = round_int(Math.pow(2, constant_cont++));
  CONFIG_LAYOUT_4 = round_int(Math.pow(2, constant_cont++));
  round_int(Math.pow(2, constant_cont++));
  layouts = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['?mx;p<->n', '? x;p<m>n', '? x;p< >n; m ', '? x;p< >n']);
}

function $GWTCDatePicker_0(this$static, config, layout){
  var ret;
  $clinit_11();
  $GWTCDatePicker_1(this$static, config, 1, (ret = layout < 0 || layout > layouts.length?layouts[0]:layouts[layout] , ret));
  $addStyleDependentName(this$static, 'layout' + layout);
  return this$static;
}

function $GWTCDatePicker_1(this$static, config, months, layout){
  $clinit_11();
  $GWTCDatePickerAbstract(this$static);
  this$static.layoutButtons = layouts[0];
  this$static.layoutButtons = layout != null?layout:layouts[0];
  if ((config & CONFIG_DIALOG) != CONFIG_DIALOG || (config & CONFIG_NO_CLOSE_BUTTON) == CONFIG_NO_CLOSE_BUTTON)
    this$static.layoutButtons = $replaceAll(this$static.layoutButtons, 'x', ' ');
  if ((config & CONFIG_NO_HELP_BUTTON) == CONFIG_NO_HELP_BUTTON)
    this$static.layoutButtons = $replaceAll(this$static.layoutButtons, '\\?', ' ');
  if ((config & CONFIG_NO_YEAR_BUTTON) == CONFIG_NO_YEAR_BUTTON)
    this$static.layoutButtons = $replaceAll(this$static.layoutButtons, '[pn]', '');
  this$static.layoutButtons = $replaceAll(this$static.layoutButtons, '(^ +;)|(; +;)', ';');
  this$static.numberOfMonths = months;
  this$static.monthColumns = 3;
  $initialize_0(this$static, config);
  return this$static;
}

function $GWTCDatePicker(this$static, config){
  $clinit_11();
  $GWTCDatePicker_0(this$static, config, getLayoutIndex(config));
  return this$static;
}

function drawDatePickerWidget(){
  $setNumberOfMonths(this, this.numberOfMonths);
  $layoutButtons(this, this.layoutButtons);
  $layoutCalendar(this);
}

function getClass_12(){
  return Lcom_google_code_p_gwtchismes_client_GWTCDatePicker_2_classLit;
}

function getLayoutIndex(config){
  if ((config & CONFIG_LAYOUT_2) == CONFIG_LAYOUT_2)
    return 1;
  else if ((config & CONFIG_LAYOUT_3) == CONFIG_LAYOUT_3)
    return 2;
  else if ((config & CONFIG_LAYOUT_4) == CONFIG_LAYOUT_4)
    return 3;
  else 
    return 0;
}

function GWTCDatePicker(){
}

_ = GWTCDatePicker.prototype = new GWTCDatePickerAbstract();
_.drawDatePickerWidget_0 = drawDatePickerWidget;
_.getClass$ = getClass_12;
_.typeId$ = 27;
_.numberOfMonths = 1;
var CONFIG_LAYOUT_2, CONFIG_LAYOUT_3, CONFIG_LAYOUT_4, CONFIG_NO_CLOSE_BUTTON, CONFIG_NO_HELP_BUTTON, CONFIG_NO_YEAR_BUTTON, layouts;
function $GWTCDatePickerAbstract$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_9(){
  return Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract$1_2_classLit;
}

function onChange(sender){
  $setSelectedDate(this.this$0, dynamicCast(sender, 3).getSelectedDate());
}

function GWTCDatePickerAbstract$1(){
}

_ = GWTCDatePickerAbstract$1.prototype = new Object_0();
_.getClass$ = getClass_9;
_.onChange_0 = onChange;
_.typeId$ = 28;
_.this$0 = null;
function $GWTCDatePickerAbstract$MenuCommand(this$static, d, this$0){
  this$static.this$0 = this$0;
  this$static.date = d;
  return this$static;
}

function execute(){
  $setCursorDate(this.this$0, this.date);
  $refresh(this.this$0);
}

function getClass_10(){
  return Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract$MenuCommand_2_classLit;
}

function GWTCDatePickerAbstract$MenuCommand(){
}

_ = GWTCDatePickerAbstract$MenuCommand.prototype = new Object_0();
_.execute = execute;
_.getClass$ = getClass_10;
_.typeId$ = 29;
_.date = null;
_.this$0 = null;
function $FocusPanel(this$static){
  this$static.element_0 = $createFocusable();
  sinkEvents(this$static.element_0, 138237 | (this$static.element_0.__eventBits || 0));
  return this$static;
}

function $addClickListener_1(this$static, listener){
  if (!this$static.clickListeners) {
    this$static.clickListeners = $ClickListenerCollection(new ClickListenerCollection());
  }
  $add_8(this$static.clickListeners, listener);
}

function $addFocusListener(this$static, listener){
  if (!this$static.focusListeners) {
    this$static.focusListeners = $FocusListenerCollection(new FocusListenerCollection());
  }
  $add_8(this$static.focusListeners, listener);
}

function $addKeyboardListener(this$static, listener){
  if (!this$static.keyboardListeners) {
    this$static.keyboardListeners = $KeyboardListenerCollection(new KeyboardListenerCollection());
  }
  $add_8(this$static.keyboardListeners, listener);
}

function $onBrowserEvent(this$static, event_0){
  switch ($eventGetTypeInt(event_0)) {
    case 1:
      if (this$static.clickListeners) {
        $fireClick(this$static.clickListeners, this$static);
      }

      break;
    case 4096:
    case 2048:
      if (this$static.focusListeners) {
        $fireFocusEvent(this$static.focusListeners, event_0);
      }

      break;
    case 128:
    case 512:
    case 256:
      if (this$static.keyboardListeners) {
        $fireKeyboardEvent(this$static.keyboardListeners, event_0);
      }

  }
}

function $setFocus_0(this$static, focused){
  if (focused) {
    this$static.element_0.focus();
  }
   else {
    this$static.element_0.blur();
  }
}

function getClass_69(){
  return Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit;
}

function onBrowserEvent_1(event_0){
  $onBrowserEvent(this, event_0);
}

function FocusPanel(){
}

_ = FocusPanel.prototype = new SimplePanel();
_.getClass$ = getClass_69;
_.onBrowserEvent = onBrowserEvent_1;
_.typeId$ = 30;
_.clickListeners = null;
_.focusListeners = null;
_.keyboardListeners = null;
function $GWTCGlassPanel(this$static){
  $FocusPanel(this$static);
  setStyleName_1(this$static.element_0, 'GWTCGlassPanel', true);
  this$static.element_0.style['zIndex'] = '998';
  return this$static;
}

function $hide_0(this$static){
  this$static.getElement_0().style['width'] = '0px';
  this$static.getElement_0().style['height'] = '0px';
  this$static.element_0.style.display = 'none';
}

function $show_1(this$static){
  if (!this$static.attached) {
    $add_1(($clinit_164() , get_0(null)), this$static, 0, 0);
  }
  this$static.element_0.style.display = '';
  maximizeWidget(this$static);
}

function getClass_13(){
  return Lcom_google_code_p_gwtchismes_client_GWTCGlassPanel_2_classLit;
}

function GWTCGlassPanel(){
}

_ = GWTCGlassPanel.prototype = new FocusPanel();
_.getClass$ = getClass_13;
_.typeId$ = 31;
function internationalize_1(s, os){
  var c, i, o, pos, trail;
  for (i = 0; i < os.length; ++i) {
    o = '' + (os[i] != null?os[i]:'');
    c = '{' + i + '}';
    for (;;) {
      pos = s.indexOf(c);
      if (pos < 0)
        break;
      trail = '';
      if (pos + c.length < s.length)
        trail = $substring(s, pos + c.length);
      s = s.substr(0, pos - 0) + o + trail;
    }
  }
  return s;
}

function internationalize_0(s, o){
  var os;
  os = initValues(_3Ljava_lang_Object_2_classLit, 0, 0, [o]);
  return internationalize_1(s, os);
}

function maximizeWidget(widget){
  var h, w;
  if (!widget)
    return;
  w = max_0($doc.documentElement.clientWidth || $doc.body.clientWidth, max_0($doc.compatMode == 'CSS1Compat'?$doc.documentElement.scrollWidth:$doc.body.scrollWidth, parseInt(($clinit_164() , get_0(null)).getElement_0()['offsetWidth']) || 0));
  h = max_0($doc.documentElement.clientHeight || $doc.body.clientHeight, max_0($doc.compatMode == 'CSS1Compat'?$doc.documentElement.scrollHeight:$doc.body.scrollHeight, parseInt(get_0(null).getElement_0()['offsetHeight']) || 0));
  widget.getElement_0().style['width'] = w + 'px';
  widget.getElement_0().style['height'] = h + 'px';
}

function $addChangeListener_0(this$static, listener){
  if (listener)
    $add_8(this$static.changeListeners, listener);
}

function $configureDatePickers(this$static, options, buttonsLayout, months, monthsPerRow, increment, monthsInSelector){
  options |= ($clinit_10() , CONFIG_DIALOG);
  this$static.checkinCalendar = $GWTCDatePicker(new GWTCDatePicker(), options);
  this$static.checkoutCalendar = $GWTCDatePicker(new GWTCDatePicker(), options);
  $addStyleName_0(this$static.checkinCalendar, 'checkinPicker');
  $addStyleName_0(this$static.checkoutCalendar, 'checkoutPicker');
  $configure(this$static.checkinCalendar, buttonsLayout, months, monthsPerRow, increment, monthsInSelector);
  $configure(this$static.checkoutCalendar, buttonsLayout, months, monthsPerRow, increment, monthsInSelector);
  $initListeners(this$static);
  $setMaxdays(this$static, this$static.maxdays);
}

function $drawIntervalWidget(this$static){
  var checkinInfo, checkoutInfo, idx, nightsInfo, checkinInfo_0, idx_0, nightsInfo_0, checkinInfo_1, idx_1, nightsInfo_1, checkinInfo_2, idx_2, nightsInfo_2, checkinInfo_3, idx_3, nightsInfo_3;
  switch (this$static.layoutType) {
    case 1:
      $drawLayout1(this$static);
      break;
    case 2:
      idx = 0;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx, 'checkinRow');
      checkinInfo = $HorizontalPanel(new HorizontalPanel());
      $setWidget_0(this$static.mainGrid, idx, 0, this$static.checkinLabel);
      $add_4(checkinInfo, this$static.checkinDateValue);
      $add_4(checkinInfo, this$static.checkinWeekValue);
      $add_4(checkinInfo, this$static.checkinButton);
      $setWidget_0(this$static.mainGrid, idx, 1, checkinInfo);
      ++idx;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx, 'checkoutRow');
      checkoutInfo = $HorizontalPanel(new HorizontalPanel());
      $setWidget_0(this$static.mainGrid, idx, 0, this$static.checkoutLabel);
      $add_4(checkoutInfo, this$static.checkoutDateValue);
      $add_4(checkoutInfo, this$static.checkoutWeekValue);
      $add_4(checkoutInfo, this$static.checkoutButton);
      $setWidget_0(this$static.mainGrid, idx, 1, checkoutInfo);
      this$static.checkoutDateValue.addClickListener(this$static.clickListener);
      this$static.checkoutWeekValue.addClickListener(this$static.clickListener);
      ++idx;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx, 'nightsRow');
      nightsInfo = $HorizontalPanel(new HorizontalPanel());
      $setWidget_0(this$static.mainGrid, idx, 0, this$static.intervalLabel);
      $setWidget_0(this$static.mainGrid, idx, 1, nightsInfo);
      $add_4(nightsInfo, this$static.nightsValue);
      $add_4(nightsInfo, this$static.nightsLabel);
      break;
    case 3:
      idx_0 = 0;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_0, 'checkinRow');
      checkinInfo_0 = $HorizontalPanel(new HorizontalPanel());
      $setWidget_0(this$static.mainGrid, idx_0, 0, this$static.checkinLabel);
      $add_4(checkinInfo_0, this$static.checkinDateValue);
      $add_4(checkinInfo_0, this$static.checkinWeekValue);
      $add_4(checkinInfo_0, this$static.checkinButton);
      $setWidget_0(this$static.mainGrid, idx_0, 1, checkinInfo_0);
      ++idx_0;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_0, 'nightsRow');
      nightsInfo_0 = $HorizontalPanel(new HorizontalPanel());
      $setWidget_0(this$static.mainGrid, idx_0, 1, nightsInfo_0);
      $add_4(nightsInfo_0, this$static.nightsListBox);
      $setWidget_0(this$static.mainGrid, idx_0, 0, this$static.intervalLabel);
      $add_4(nightsInfo_0, this$static.nightsLabel);
      break;
    case 4:
      idx_1 = 0;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_1, 'checkinRow');
      checkinInfo_1 = $HorizontalPanel(new HorizontalPanel());
      $setWidget_0(this$static.mainGrid, idx_1, 0, this$static.checkinLabel);
      $add_4(checkinInfo_1, this$static.checkinDateValue);
      $add_4(checkinInfo_1, this$static.checkinWeekValue);
      $add_4(checkinInfo_1, this$static.checkinButton);
      $setWidget_0(this$static.mainGrid, idx_1, 1, checkinInfo_1);
      ++idx_1;
      $addStyleName_1(this$static.mainGrid.cellFormatter, idx_1, 0, 'nightsRow');
      $setWidget_0(this$static.mainGrid, idx_1, 0, this$static.nightsLabel);
      setStyleName_1(this$static.nightsLabel.getElement_0(), 'labels', true);
      nightsInfo_1 = $FlexTable(new FlexTable());
      $setWidget_0(this$static.mainGrid, idx_1, 1, nightsInfo_1);
      $setWidget_0(nightsInfo_1, 0, 0, this$static.nightsListBox);
      $addStyleName_1(nightsInfo_1.cellFormatter, 0, 0, 'nightsRow');
      $setWidget_0(nightsInfo_1, 0, 1, this$static.checkoutLabel);
      $addStyleName_1(nightsInfo_1.cellFormatter, 0, 1, 'checkoutRow');
      $setWidget_0(nightsInfo_1, 0, 2, this$static.checkoutDateValue);
      $addStyleName_1(nightsInfo_1.cellFormatter, 0, 2, 'checkoutRow');
      break;
    case 5:
      idx_2 = 0;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_2, 'checkinRow');
      $setWidget_0(this$static.mainGrid, idx_2, 0, this$static.checkinLabel);
      ++idx_2;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_2, 'checkinRow');
      checkinInfo_2 = $HorizontalPanel(new HorizontalPanel());
      $add_4(checkinInfo_2, this$static.checkinDateValue);
      $add_4(checkinInfo_2, this$static.checkinWeekValue);
      $add_4(checkinInfo_2, this$static.checkinButton);
      $setWidget_0(this$static.mainGrid, idx_2, 0, checkinInfo_2);
      ++idx_2;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_2, 'nightsRow');
      $setWidget_0(this$static.mainGrid, idx_2, 0, this$static.nightsLabel);
      setStyleName_1(this$static.nightsLabel.getElement_0(), 'labels', true);
      ++idx_2;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_2, 'nightsRow');
      $setWidget_0(this$static.mainGrid, idx_2, 0, this$static.nightsListBox);
      ++idx_2;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_2, 'checkoutRow');
      nightsInfo_2 = $HorizontalPanel(new HorizontalPanel());
      $add_4(nightsInfo_2, this$static.checkoutLabel);
      $add_4(nightsInfo_2, this$static.checkoutDateValue);
      $setWidget_0(this$static.mainGrid, idx_2, 0, nightsInfo_2);
      break;
    case 6:
      idx_3 = 0;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_3, 'checkinRow');
      checkinInfo_3 = $HorizontalPanel(new HorizontalPanel());
      $setWidget_0(this$static.mainGrid, idx_3, 0, this$static.checkinLabel);
      $add_4(checkinInfo_3, this$static.checkinDateValue);
      $add_4(checkinInfo_3, this$static.checkinWeekValue);
      $add_4(checkinInfo_3, this$static.checkinButton);
      $setWidget_0(this$static.mainGrid, idx_3, 1, checkinInfo_3);
      ++idx_3;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_3, 'nightsRow');
      nightsInfo_3 = $HorizontalPanel(new HorizontalPanel());
      $setWidget_0(this$static.mainGrid, idx_3, 1, nightsInfo_3);
      $add_4(nightsInfo_3, this$static.nightsListBox);
      $setWidget_0(this$static.mainGrid, idx_3, 0, this$static.nightsLabel);
      setStyleName_1(this$static.nightsLabel.getElement_0(), 'labels', true);
      ++idx_3;
      $addStyleName_3(this$static.mainGrid.rowFormatter, idx_3, 'checkoutRow');
      $setWidget_0(this$static.mainGrid, idx_3, 0, this$static.checkoutLabel);
      $setWidget_0(this$static.mainGrid, idx_3, 1, this$static.checkoutDateValue);
      break;
    default:$drawLayout1(this$static);
  }
}

function $drawLayout1(this$static){
  var tInfo, tSelector;
  $addStyleName_3(this$static.mainGrid.rowFormatter, 1, 'InfoContainer');
  tSelector = $FlexTable(new FlexTable());
  $setWidget_0(tSelector, 0, 0, this$static.changeCheckinLink);
  $setWidget_0(tSelector, 0, 1, this$static.nightsLabel);
  $setWidget_0(tSelector, 0, 2, this$static.nightsListBox);
  $setWidget_0(this$static.mainGrid, 0, 0, tSelector);
  tInfo = $FlexTable(new FlexTable());
  $addStyleName_3(tInfo.rowFormatter, 0, 'checkinRow');
  $addStyleName_3(tInfo.rowFormatter, 1, 'checkoutRow');
  $setWidget_0(tInfo, 0, 0, this$static.checkinLabel);
  $setWidget_0(tInfo, 0, 1, this$static.checkinDateValue);
  $setWidget_0(tInfo, 0, 2, this$static.checkinWeekValue);
  $setWidget_0(tInfo, 1, 0, this$static.checkoutLabel);
  $setWidget_0(tInfo, 1, 1, this$static.checkoutDateValue);
  $setWidget_0(tInfo, 1, 2, this$static.checkoutWeekValue);
  $setWidget_0(this$static.mainGrid, 1, 0, tInfo);
}

function $initListeners(this$static){
  $addChangeListener(this$static.checkinCalendar, $GWTCIntervalSelector$3(new GWTCIntervalSelector$3(), this$static));
  $addChangeListener(this$static.checkoutCalendar, $GWTCIntervalSelector$4(new GWTCIntervalSelector$4(), this$static));
  $addChangeListener_1(this$static.nightsListBox, $GWTCIntervalSelector$5(new GWTCIntervalSelector$5(), this$static));
  this$static.checkinButton.addClickListener(this$static.clickListener);
  this$static.checkinDateValue.addClickListener(this$static.clickListener);
  this$static.checkinWeekValue.addClickListener(this$static.clickListener);
  $addClickListener_2(this$static.changeCheckinLink, this$static.clickListener);
  $setTargetHistoryToken(this$static.changeCheckinLink, '');
  this$static.checkoutButton.addClickListener(this$static.clickListener);
}

function $setDatePickerOptions(this$static, options){
  options |= ($clinit_10() , CONFIG_DIALOG);
  this$static.checkinCalendar = $GWTCDatePicker(new GWTCDatePicker(), options);
  this$static.checkoutCalendar = $GWTCDatePicker(new GWTCDatePicker(), options);
  $addStyleName_0(this$static.checkoutCalendar, 'checkoutPicker');
  $addStyleName_0(this$static.checkinCalendar, 'checkinPicker');
  $initListeners(this$static);
  $setMaxdays(this$static, this$static.maxdays);
}

function $setI18nMessages_0(this$static, keys){
  internationalize(this$static.checkinLabel, keys, 'key.checkin');
  internationalize(this$static.checkoutLabel, keys, 'key.checkout');
  internationalize(this$static.nightsLabel, keys, 'key.nights');
  internationalize(this$static.intervalLabel, keys, 'key.interval');
  internationalize(this$static.changeCheckinLink, keys, 'key.change');
  internationalize(this$static.checkinButton, keys, 'key.checkin.button');
  internationalize(this$static.checkoutButton, keys, 'key.checkout.button');
  $setI18nMessages(this$static.checkinCalendar, keys);
  $setI18nMessages(this$static.checkoutCalendar, keys);
  internationalize(this$static.checkinCalendar, keys, 'key.calendar.checkin.caption');
  internationalize(this$static.checkoutCalendar, keys, 'key.calendar.checkout.caption');
  internationalize(this$static.checkinCalendar, keys, 'key.calendar.checkin.title');
  internationalize(this$static.checkoutCalendar, keys, 'key.calendar.checkout.title');
  $updateTextElements(this$static);
}

function $setMaxdays(this$static, d){
  var i;
  this$static.maxdays = d;
  this$static.nightsListBox.element_0.options.length = 0;
  $addChangeListener_1(this$static.nightsListBox, $GWTCIntervalSelector$2(new GWTCIntervalSelector$2(), this$static));
  for (i = 0; i <= this$static.maxdays; ++i)
    $insertItem(this$static.nightsListBox, '' + i, -1);
  $updateTextElements(this$static);
}

function $setMaximalDate_0(this$static, d){
  $setMaximalDate(this$static.checkinCalendar, d);
  if (!!dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate() && compareDate(d, dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate()) > 0) {
    $setSelectedDate(this$static.checkinCalendar, d);
  }
  $updateTextElementsFromCheckin(this$static);
}

function $setMinimalDate_0(this$static, d){
  $setMinimalDate(this$static.checkinCalendar, d);
  if (!!dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate() && compareDate(d, dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate()) < 0) {
    $setSelectedDate(this$static.checkinCalendar, d);
  }
  $updateTextElementsFromCheckin(this$static);
}

function $updateInputsFromNights(this$static){
  var ret;
  $setSelectedDate(this$static.checkoutCalendar, ($clinit_28() , ret = add_5(dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate(), this$static.nightsListBox.element_0.selectedIndex, 4) , ret));
  $setInnerText(this$static.checkoutDateValue.element_0, $getSelectedDateStr(this$static.checkoutCalendar, this$static.dateFormat));
  $setInnerText(this$static.checkoutWeekValue.element_0, formatDate('(EEE)', this$static.checkoutCalendar.selectedDate));
  $setInnerText(this$static.nightsValue.element_0, '' + compareDate(dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate(), dynamicCast($get_1(this$static.checkoutCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate()));
  $updateTextElements(this$static);
}

function $updateTextElements(this$static){
  $setInnerText(this$static.checkinDateValue.element_0, $getSelectedDateStr(this$static.checkinCalendar, this$static.dateFormat));
  $setInnerText(this$static.checkinWeekValue.element_0, formatDate('(EEE)', this$static.checkinCalendar.selectedDate));
  $setInnerText(this$static.checkoutDateValue.element_0, $getSelectedDateStr(this$static.checkoutCalendar, this$static.dateFormat));
  $setInnerText(this$static.checkoutWeekValue.element_0, formatDate('(EEE)', this$static.checkoutCalendar.selectedDate));
  $setInnerText(this$static.nightsValue.element_0, '' + compareDate(dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate(), dynamicCast($get_1(this$static.checkoutCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate()));
}

function $updateTextElementsFromCheckin(this$static){
  var nights, nightsFromBox, ret, ret_0;
  $setMinimalDate(this$static.checkoutCalendar, dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate());
  $setMaximalDate(this$static.checkoutCalendar, ($clinit_28() , ret = add_5(dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate(), this$static.maxdays, 4) , ret));
  nightsFromBox = this$static.nightsListBox.element_0.selectedIndex;
  if (nightsFromBox == 0 || this$static.layoutType != 2)
    $setSelectedDate(this$static.checkoutCalendar, (ret_0 = add_5(dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate(), nightsFromBox, 4) , ret_0));
  nights = compareDate(dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate(), dynamicCast($get_1(this$static.checkoutCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate());
  if (nights >= 0)
    $setItemSelected(this$static.nightsListBox, nights, true);
  $updateTextElements(this$static);
}

function $updateTextElementsFromCheckout(this$static){
  var nights;
  nights = compareDate(dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate(), dynamicCast($get_1(this$static.checkoutCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate());
  if (nights >= 0)
    $setItemSelected(this$static.nightsListBox, nights, true);
  $updateTextElements(this$static);
}

function getClass_19(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector_2_classLit;
}

function GWTCIntervalSelector(){
}

_ = GWTCIntervalSelector.prototype = new Composite();
_.getClass$ = getClass_19;
_.typeId$ = 32;
_.checkinCalendar = null;
_.checkoutCalendar = null;
_.layoutType = 1;
_.maxdays = 730;
function $GWTCIntervalSelector$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_14(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$1_2_classLit;
}

function onClick_1(sender){
  if (sender == this.this$0.checkinButton || sender == this.this$0.checkinDateValue || sender == this.this$0.checkinWeekValue || sender == this.this$0.changeCheckinLink) {
    $show_0(this.this$0.checkinCalendar, sender);
    $hide(this.this$0.checkoutCalendar);
  }
   else if (sender == this.this$0.checkoutButton || sender == this.this$0.checkoutDateValue || sender == this.this$0.checkoutWeekValue) {
    $show_0(this.this$0.checkoutCalendar, sender);
    $hide(this.this$0.checkinCalendar);
  }
   else {
    return;
  }
}

function GWTCIntervalSelector$1(){
}

_ = GWTCIntervalSelector$1.prototype = new Object_0();
_.getClass$ = getClass_14;
_.onClick = onClick_1;
_.typeId$ = 33;
_.this$0 = null;
function $GWTCIntervalSelector$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_15(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$2_2_classLit;
}

function onChange_0(sender){
  $updateInputsFromNights(this.this$0);
}

function GWTCIntervalSelector$2(){
}

_ = GWTCIntervalSelector$2.prototype = new Object_0();
_.getClass$ = getClass_15;
_.onChange_0 = onChange_0;
_.typeId$ = 34;
_.this$0 = null;
function $GWTCIntervalSelector$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_16(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$3_2_classLit;
}

function onChange_1(sender){
  $hide(this.this$0.checkinCalendar);
  $updateTextElementsFromCheckin(this.this$0);
  $fireChange(this.this$0.changeListeners, sender);
}

function GWTCIntervalSelector$3(){
}

_ = GWTCIntervalSelector$3.prototype = new Object_0();
_.getClass$ = getClass_16;
_.onChange_0 = onChange_1;
_.typeId$ = 35;
_.this$0 = null;
function $GWTCIntervalSelector$4(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_17(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$4_2_classLit;
}

function onChange_2(sender){
  $hide(this.this$0.checkoutCalendar);
  $updateTextElementsFromCheckout(this.this$0);
  $fireChange(this.this$0.changeListeners, sender);
}

function GWTCIntervalSelector$4(){
}

_ = GWTCIntervalSelector$4.prototype = new Object_0();
_.getClass$ = getClass_17;
_.onChange_0 = onChange_2;
_.typeId$ = 36;
_.this$0 = null;
function $GWTCIntervalSelector$5(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_18(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$5_2_classLit;
}

function onChange_3(sender){
  $fireChange(this.this$0.changeListeners, sender);
}

function GWTCIntervalSelector$5(){
}

_ = GWTCIntervalSelector$5.prototype = new Object_0();
_.getClass$ = getClass_18;
_.onChange_0 = onChange_3;
_.typeId$ = 37;
_.this$0 = null;
function $DecoratedPopupPanel(this$static, autoHide, modal, prefix){
  var rowStyles;
  $PopupPanel(this$static);
  this$static.autoHide = autoHide;
  this$static.modal = modal;
  rowStyles = initValues(_3Ljava_lang_String_2_classLit, 138, 1, [prefix + 'Top', prefix + 'Middle', prefix + 'Bottom']);
  this$static.decPanel = $DecoratorPanel(new DecoratorPanel(), rowStyles, 1);
  this$static.decPanel.getElement_0()['className'] = '';
  setStylePrimaryName(this$static.element_0, 'gwt-DecoratedPopupPanel');
  $setWidget_1(this$static, this$static.decPanel);
  setStyleName_1($getFirstChildElement(this$static.element_0), 'popupContent', false);
  setStyleName_1(this$static.decPanel.containerElem, prefix + 'Content', true);
  return this$static;
}

function $setWidget(this$static, w){
  $setWidget_2(this$static.decPanel, w);
  $maybeUpdateSize(this$static);
}

function doAttachChildren(){
  $onAttach(this.decPanel);
}

function doDetachChildren(){
  $onDetach(this.decPanel);
}

function getClass_59(){
  return Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit;
}

function getWidget(){
  return this.decPanel.widget;
}

function iterator_1(){
  return this.decPanel.iterator_0();
}

function remove_3(w){
  return this.decPanel.remove_1(w);
}

function setWidget(w){
  $setWidget_2(this.decPanel, w);
  $maybeUpdateSize(this);
}

function DecoratedPopupPanel(){
}

_ = DecoratedPopupPanel.prototype = new PopupPanel();
_.doAttachChildren = doAttachChildren;
_.doDetachChildren = doDetachChildren;
_.getClass$ = getClass_59;
_.getWidget = getWidget;
_.iterator_0 = iterator_1;
_.remove_1 = remove_3;
_.setWidget = setWidget;
_.typeId$ = 38;
_.decPanel = null;
function $DialogBox(this$static){
  $DialogBox_0(this$static, false, true);
  return this$static;
}

function $DialogBox_0(this$static, autoHide, modal){
  var td_0, td, tr;
  $DecoratedPopupPanel(this$static, autoHide, modal, 'dialog');
  this$static.caption = $HTML(new HTML());
  td_0 = (tr = $getChild(this$static.decPanel.tbody, 0) , td = $getChild(tr, 1) , $getFirstChildElement(td));
  td_0.appendChild(this$static.caption.element_0);
  $adopt(this$static, this$static.caption);
  this$static.caption.getElement_0()['className'] = 'Caption';
  $addMouseListener_0(this$static.caption, this$static);
  this$static.element_0['className'] = 'gwt-DialogBox';
  return this$static;
}

function doAttachChildren_0(){
  $onAttach(this.decPanel);
  $onAttach(this.caption);
}

function doDetachChildren_0(){
  $onDetach(this.decPanel);
  this.caption.onDetach();
}

function getClass_61(){
  return Lcom_google_gwt_user_client_ui_DialogBox_2_classLit;
}

function onEventPreview(event_0){
  if ($eventGetTypeInt(event_0) == 4) {
    if (this.caption.element_0.contains(event_0.target)) {
      event_0.preventDefault();
    }
  }
  return $onEventPreview(this, event_0);
}

function onMouseDown_1(sender, x, y){
  this.dragging = true;
  setCapture(this.caption.element_0);
  this.dragStartX = x;
  this.dragStartY = y;
}

function onMouseEnter_1(sender){
}

function onMouseLeave_1(sender){
}

function onMouseMove_1(sender, x, y){
  var absX, absY;
  if (this.dragging) {
    absX = x + $getAbsoluteLeft(this.element_0);
    absY = y + $getAbsoluteTop(this.element_0);
    $setPopupPosition(this, absX - this.dragStartX, absY - this.dragStartY);
  }
}

function onMouseUp_1(sender, x, y){
  this.dragging = false;
  releaseCapture(this.caption.element_0);
}

function setText_2(text){
  $setInnerText(this.caption.element_0, text);
}

function DialogBox(){
}

_ = DialogBox.prototype = new DecoratedPopupPanel();
_.doAttachChildren = doAttachChildren_0;
_.doDetachChildren = doDetachChildren_0;
_.getClass$ = getClass_61;
_.onEventPreview = onEventPreview;
_.onMouseDown = onMouseDown_1;
_.onMouseEnter = onMouseEnter_1;
_.onMouseLeave = onMouseLeave_1;
_.onMouseMove = onMouseMove_1;
_.onMouseUp = onMouseUp_1;
_.setText_0 = setText_2;
_.typeId$ = 39;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
function $GWTCModalBox(this$static, options){
  $DialogBox_0(this$static, (options & 64) != 64, true);
  if ((options & 4) == 4) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox(), 'GWTCBox-grey');
  }
   else if ((options & 8) == 8) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox(), 'GWTCBox-blue');
  }
   else if ((options & 2) == 2) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox(), 'GWTCBox');
  }
   else {
    this$static.panel = $DockPanel(new DockPanel());
  }
  $add_5(this$static, this$static.panel?this$static.panel:this$static.panelbox);
  this$static.isAnimationEnabled = (options & 32) == 32;
  if ((options & 16) != 16) {
    this$static.background = $GWTCGlassPanel(new GWTCGlassPanel());
    if ((options & 64) != 64) {
      $addClickListener_1(this$static.background, $GWTCModalBox$1(new GWTCModalBox$1(), this$static));
    }
  }
  $setZIndex_0(this$static, 999);
  $setWidth(this$static, 'auto');
  setStyleName_1(this$static.element_0, 'GWTCModal', true);
  return this$static;
}

function $center(this$static){
  $setWidth(this$static, 'auto');
  $center_0(this$static);
}

function $hide_1(this$static){
  $hide_4(this$static, false);
  if (this$static.background)
    $hide_0(this$static.background);
}

function $setZIndex_0(this$static, z){
  this$static.element_0.style['zIndex'] = '' + z;
  if (this$static.background) {
    this$static.background.element_0.style['zIndex'] = '998';
  }
}

function $show_2(this$static){
  if (this$static.background)
    $show_1(this$static.background);
  $show_7(this$static);
}

function add_2(w){
  if (this.panelbox)
    this.panelbox.add_3(w, ($clinit_107() , NORTH));
  else 
    $add_3(this.panel, w, ($clinit_107() , NORTH));
}

function center(){
  $setWidth(this, 'auto');
  $center_0(this);
}

function getClass_21(){
  return Lcom_google_code_p_gwtchismes_client_GWTCModalBox_2_classLit;
}

function hide_1(){
  $hide_1(this);
}

function onDetach_0(){
  removeEventPreview(this);
  $onDetach(this);
  if (this.background)
    $hide_0(this.background);
}

function setText_0(t){
  $setInnerText(this.caption.element_0, t);
}

function show_0(){
  $show_2(this);
}

function GWTCModalBox(){
}

_ = GWTCModalBox.prototype = new DialogBox();
_.add_1 = add_2;
_.center_0 = center;
_.getClass$ = getClass_21;
_.hide_0 = hide_1;
_.onDetach = onDetach_0;
_.setText_0 = setText_0;
_.show_0 = show_0;
_.typeId$ = 40;
_.background = null;
_.panel = null;
_.panelbox = null;
function $GWTCModalBox$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_20(){
  return Lcom_google_code_p_gwtchismes_client_GWTCModalBox$1_2_classLit;
}

function onClick_2(sender){
  $hide_1(this.this$0);
}

function GWTCModalBox$1(){
}

_ = GWTCModalBox$1.prototype = new Object_0();
_.getClass$ = getClass_20;
_.onClick = onClick_2;
_.typeId$ = 41;
_.this$0 = null;
function $GWTCPopupBox$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_22(){
  return Lcom_google_code_p_gwtchismes_client_GWTCPopupBox$1_2_classLit;
}

function onClick_3(sender){
  this.this$0.hide_0();
}

function GWTCPopupBox$1(){
}

_ = GWTCPopupBox$1.prototype = new Object_0();
_.getClass$ = getClass_22;
_.onClick = onClick_3;
_.typeId$ = 42;
_.this$0 = null;
function $clinit_79(){
  $clinit_79 = nullMethod;
  timers = $ArrayList(new ArrayList());
  addWindowCloseListener(new Timer$1());
}

function $cancel_0(this$static){
  if (this$static.isRepeating) {
    $wnd.clearInterval(this$static.timerId);
  }
   else {
    $wnd.clearTimeout(this$static.timerId);
  }
  $remove_10(timers, this$static);
}

function $fireImpl(this$static){
  if (!this$static.isRepeating) {
    $remove_10(timers, this$static);
  }
  this$static.run();
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw $IllegalArgumentException(new IllegalArgumentException(), 'must be positive');
  }
  $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_8(timers, this$static);
}

function $scheduleRepeating(this$static, periodMillis){
  if (periodMillis <= 0) {
    throw $IllegalArgumentException(new IllegalArgumentException(), 'must be positive');
  }
  $cancel_0(this$static);
  this$static.isRepeating = true;
  this$static.timerId = createInterval(this$static, periodMillis);
  $add_8(timers, this$static);
}

function createInterval(timer, period){
  return $wnd.setInterval(function(){
    timer.fire();
  }
  , period);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout(function(){
    timer.fire();
  }
  , delay);
}

function fire(){
  $fireImpl(this);
}

function getClass_46(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}

function Timer(){
}

_ = Timer.prototype = new Object_0();
_.fire = fire;
_.getClass$ = getClass_46;
_.typeId$ = 43;
_.isRepeating = false;
_.timerId = 0;
var timers;
function $clinit_23(){
  $clinit_23 = nullMethod;
  $clinit_79();
}

function $GWTCPopupBox$2(this$static, this$0){
  $clinit_23();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_23(){
  return Lcom_google_code_p_gwtchismes_client_GWTCPopupBox$2_2_classLit;
}

function run(){
  this.this$0.hide_0();
}

function GWTCPopupBox$2(){
}

_ = GWTCPopupBox$2.prototype = new Timer();
_.getClass$ = getClass_23;
_.run = run;
_.typeId$ = 44;
_.this$0 = null;
function $hide_3(this$static){
  this$static.contentTable.getElement_0().style.display = 'none';
  if (!this$static.showAsDialog)
    return;
  if (this$static.background)
    $hide_0(this$static.background);
  this$static.progressDlg.hide_0();
}

function $initialize_3(this$static, options, elements){
  var col, containerElementGrid, elm, loop, row;
  if ((options & 1) == 1)
    this$static.showRemaining = true;
  if ((options & 2) == 2)
    this$static.showText = true;
  if ((options & 4) == 4)
    this$static.showNumbers = true;
  if ((options & 8) == 8)
    this$static.showAsDialog = true;
  if ((options & 16) == 16)
    this$static.showText = this$static.showLeftText = true;
  this$static.elements = elements;
  this$static.contentTable.getElement_0()['className'] = 'GWTCProgress';
  this$static.numberLabel.getElement_0()['className'] = 'prg-numbers';
  this$static.remainLabel.getElement_0()['className'] = 'prg-time';
  this$static.textLabel.getElement_0()['className'] = 'prg-title';
  containerElementGrid = $Grid_0(new Grid(), 1, 1);
  containerElementGrid.element_0['className'] = 'prg-bar-outer';
  containerElementGrid.tableElem['cellPadding'] = 0;
  containerElementGrid.tableElem['cellSpacing'] = 0;
  this$static.elementGrid = $Grid_0(new Grid(), 1, elements);
  this$static.elementGrid.getElement_0()['className'] = 'prg-bar-inner';
  this$static.elementGrid.tableElem['cellPadding'] = 0;
  this$static.elementGrid.tableElem['cellSpacing'] = 0;
  $setWidget_0(containerElementGrid, 0, 0, this$static.elementGrid);
  for (loop = 0; loop < elements; ++loop) {
    elm = $Grid_0(new Grid(), 1, 1);
    $setHTML_0(elm, 0, 0, '');
    elm.element_0['className'] = 'prg-bar-done';
    setStyleName_1(elm.element_0, 'prg-bar-element', true);
    $setWidget_0(this$static.elementGrid, 0, loop, elm);
  }
  row = 0;
  col = 0;
  if (this$static.showLeftText)
    $setWidget_0(this$static.contentTable, row, col++, this$static.textLabel);
  else if (this$static.showText)
    $setWidget_0(this$static.contentTable, row++, col, this$static.textLabel);
  if (this$static.showNumbers)
    $setWidget_0(this$static.contentTable, row, col + 1, this$static.numberLabel);
  $setWidget_0(this$static.contentTable, row++, col, containerElementGrid);
  $setWidget_0(this$static.contentTable, row++, col, this$static.remainLabel);
  $setProgress_0(this$static, 0, 0, 0);
  if (this$static.showAsDialog) {
    this$static.background = $GWTCGlassPanel(new GWTCGlassPanel());
    this$static.progressDlg = $DialogBox(new DialogBox());
    $setWidget(this$static.progressDlg, this$static.contentTable);
    this$static.progressDlg.getElement_0()['className'] = 'GWTCProgress';
    $addStyleDependentName_0(this$static.progressDlg, 'dialog');
    this$static.progressDlg.center_0();
    $hide_3(this$static);
    $initWidget(this$static, $SimplePanel(new SimplePanel()));
  }
   else {
    $initWidget(this$static, this$static.contentTable);
  }
}

function $setProgress(this$static, done, total){
  var percent;
  percent = total > 0?~~(done * 100 / total):0;
  $setProgress_0(this$static, percent, done, total);
}

function $setProgress_0(this$static, percentage, done, total){
  var completed, elm, loop, message, os, remainText, remaining, soFar, velocity;
  percentage = (percentage > 0?percentage:0) < 100?percentage > 0?percentage:0:100;
  completed = ~~(this$static.elements * percentage / 100);
  for (loop = 0; loop < this$static.elements; ++loop) {
    elm = dynamicCast($getWidget_0(this$static.elementGrid, 0, loop), 7);
    if (loop < completed) {
      elm.element_0['className'] = 'prg-bar-done';
      setStyleName_1(elm.element_0, 'prg-bar-element', true);
    }
     else {
      elm.element_0['className'] = 'prg-bar-blank';
      setStyleName_1(elm.element_0, 'prg-bar-element', true);
    }
  }
  this$static.remainLabel.element_0.innerHTML = '&nbsp;';
  this$static.numberLabel.element_0.innerHTML = '&nbsp;';
  soFar = sub(fromDouble((new Date()).getTime()), this$static.startTime);
  if (percentage > 0) {
    if (this$static.showRemaining) {
      remaining = div_0(div_0(mul(soFar, fromInt(100 - percentage)), fromInt(percentage)), P3e8_longLit);
      remainText = 'Time remaining: {0} Seconds';
      if (compare_0(remaining, P78_longLit) > 0) {
        remaining = div_0(remaining, P3c_longLit);
        remainText = 'Time remaining: {0} Minutes';
        if (compare_0(remaining, P78_longLit) > 0) {
          remaining = div_0(remaining, P3c_longLit);
          remainText = this$static.hoursMessage;
        }
      }
      $setInnerText(this$static.remainLabel.element_0, internationalize_0(remainText, '' + toString_2(remaining)));
    }
  }
   else {
    this$static.startTime = fromDouble((new Date()).getTime());
  }
  if (this$static.showNumbers) {
    message = total > 0?this$static.totalMessage:this$static.percentMessage;
    velocity = compare_0(soFar, P0_longLit) > 0?div_0(fromInt(done * 1000), soFar):P0_longLit;
    os = initValues(_3Ljava_lang_Object_2_classLit, 0, 0, ['' + percentage, '' + done, '' + total, '' + toString_2(velocity)]);
    $setInnerText(this$static.numberLabel.element_0, internationalize_1(message, os));
  }
}

function $show_5(this$static){
  this$static.contentTable.getElement_0().style.display = '';
  if (!this$static.showAsDialog)
    return;
  if (this$static.background)
    $show_1(this$static.background);
  this$static.progressDlg.center_0();
}

function getClass_25(){
  return Lcom_google_code_p_gwtchismes_client_GWTCProgress_2_classLit;
}

function GWTCProgress(){
}

_ = GWTCProgress.prototype = new Composite();
_.getClass$ = getClass_25;
_.typeId$ = 45;
_.background = null;
_.elementGrid = null;
_.elements = 20;
_.hoursMessage = 'Time remaining: {0} Hours';
_.percentMessage = '{0}%';
_.progressDlg = null;
_.showAsDialog = false;
_.showLeftText = false;
_.showNumbers = false;
_.showRemaining = false;
_.showText = false;
_.totalMessage = '{0}% {1}/{2} ';
function $clinit_27(){
  $clinit_27 = nullMethod;
  mouseOverListener = new GWTCSimpleDatePicker$CellHTML$1();
}

function $GWTCSimpleDatePicker$CellHTML(this$static){
  $clinit_27();
  $HTML(this$static);
  return this$static;
}

function $setDay(this$static, d){
  if (this$static.day != d) {
    this$static.day = d;
    this$static.element_0.innerHTML = (this$static.day < 1 || this$static.day > 31?'&nbsp;':'' + this$static.day) || '';
  }
}

function addClickListener_0(pickListener){
  $addClickListener_3(this, pickListener);
  $addMouseListener_0(this, mouseOverListener);
}

function getClass_27(){
  return Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$CellHTML_2_classLit;
}

function GWTCSimpleDatePicker$CellHTML(){
}

_ = GWTCSimpleDatePicker$CellHTML.prototype = new HTML();
_.addClickListener = addClickListener_0;
_.getClass$ = getClass_27;
_.typeId$ = 46;
_.day = -1;
_.enabled = true;
var mouseOverListener;
function getClass_26(){
  return Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$CellHTML$1_2_classLit;
}

function onMouseDown_0(sender, x, y){
}

function onMouseEnter_0(sender){
  sender.addStyleDependentName('over');
}

function onMouseLeave_0(sender){
  sender.removeStyleName(sender.getStylePrimaryName() + '-' + 'over');
}

function onMouseMove_0(sender, x, y){
}

function onMouseUp_0(sender, x, y){
}

function GWTCSimpleDatePicker$CellHTML$1(){
}

_ = GWTCSimpleDatePicker$CellHTML$1.prototype = new Object_0();
_.getClass$ = getClass_26;
_.onMouseDown = onMouseDown_0;
_.onMouseEnter = onMouseEnter_0;
_.onMouseLeave = onMouseLeave_0;
_.onMouseMove = onMouseMove_0;
_.onMouseUp = onMouseUp_0;
_.typeId$ = 47;
function $GWTCWait(this$static){
  $PopupPanel(this$static);
  this$static.autoHide = false;
  $initialize_2(this$static, 64);
  this$static.txt = $Label_0(new Label(), '');
  this$static.img = $Image(new Image_0(), 'images/gwtc-wait-loading.gif');
  this$static.mainPanel = $FlexTable(new FlexTable());
  if (get_0('GWTCWait')) {
    get_0('GWTCWait').getElement_0().style.display = 'none';
  }
  this$static.element_0['className'] = 'GWTCWait';
  this$static.mainPanel.getElement_0()['className'] = 'panel';
  $addStyleName_1(this$static.mainPanel.cellFormatter, 0, 0, 'msgCell');
  $setWidget_0(this$static.mainPanel, 0, 0, this$static.txt);
  $addStyleName_1(this$static.mainPanel.cellFormatter, 1, 0, 'imgCell');
  $setWidget_0(this$static.mainPanel, 1, 0, this$static.img);
  setStyleName_1(this$static.img.getElement_0(), 'image', true);
  $setWidget_1(this$static, this$static.mainPanel);
  return this$static;
}

function $setImg(this$static, i){
  if (i == null)
    $removeFromParent(this$static.img);
  else {
    this$static.img.element_0.src = i;
  }
}

function $show_6(this$static, timeout){
  var t;
  if (timeout > 0) {
    t = $GWTCWait$1(new GWTCWait$1(), this$static);
    $schedule(t, timeout * 1000);
  }
  this$static.element_0.style['visibility'] = 'visible';
  $setWidth(this$static, 'auto');
  $center_0(this$static);
}

function getClass_30(){
  return Lcom_google_code_p_gwtchismes_client_GWTCWait_2_classLit;
}

function hide_3(){
  $hide_2(this);
  this.getElement_0().style['visibility'] = 'hidden';
  this.getElement_0();
}

function GWTCWait(){
}

_ = GWTCWait.prototype = new GWTCPopupBox();
_.getClass$ = getClass_30;
_.hide_0 = hide_3;
_.typeId$ = 48;
function $clinit_29(){
  $clinit_29 = nullMethod;
  $clinit_79();
}

function $GWTCWait$1(this$static, this$0){
  $clinit_29();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_29(){
  return Lcom_google_code_p_gwtchismes_client_GWTCWait$1_2_classLit;
}

function run_0(){
  $hide_5(this.this$0);
}

function GWTCWait$1(){
}

_ = GWTCWait$1.prototype = new Timer();
_.getClass$ = getClass_29;
_.run = run_0;
_.typeId$ = 49;
_.this$0 = null;
function $cancel(this$static){
  if (!this$static.running) {
    return;
  }
  $remove_10(animations, this$static);
  $onCancel(this$static);
  this$static.started = false;
  this$static.running = false;
}

function $onCancel(this$static){
  if (this$static.started) {
    $onComplete(this$static);
  }
}

function $run(this$static, duration, startTime){
  $cancel(this$static);
  this$static.running = true;
  this$static.duration = duration;
  this$static.startTime = startTime;
  if ($update(this$static, (new Date()).getTime())) {
    return;
  }
  if (!animations) {
    animations = $ArrayList(new ArrayList());
    animationTimer = ($clinit_31() , $clinit_79() , new Animation$1());
  }
  $add_8(animations, this$static);
  if (animations.size == 1) {
    $schedule(animationTimer, 25);
  }
}

function $update(this$static, curTime){
  var finished, progress;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.started && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + Math.cos(3.141592653589793 + progress * 3.141592653589793)) / 2);
    return false;
  }
  if (!this$static.started && curTime >= this$static.startTime) {
    this$static.started = true;
    this$static.offsetHeight = parseInt(this$static.curPanel.getElement_0()['offsetHeight']) || 0;
    this$static.offsetWidth = parseInt(this$static.curPanel.getElement_0()['offsetWidth']) || 0;
    this$static.curPanel.getElement_0().style['overflow'] = 'hidden';
    $onUpdate(this$static, (1 + Math.cos(3.141592653589793)) / 2);
  }
  if (finished) {
    $onComplete(this$static);
    this$static.started = false;
    this$static.running = false;
    return true;
  }
  return false;
}

function getClass_32(){
  return Lcom_google_gwt_animation_client_Animation_2_classLit;
}

function updateAnimations(){
  var animation, animation$array, animation$index, animation$max, curAnimations, curTime;
  curAnimations = initDim(_3Lcom_google_gwt_animation_client_Animation_2_classLit, 135, 46, animations.size, 0);
  curAnimations = dynamicCast($toArray(animations, curAnimations), 10);
  curTime = (new Date()).getTime();
  for (animation$array = curAnimations , animation$index = 0 , animation$max = animation$array.length; animation$index < animation$max; ++animation$index) {
    animation = animation$array[animation$index];
    if (animation.running && $update(animation, curTime)) {
      $remove_10(animations, animation);
    }
  }
  if (animations.size > 0) {
    $schedule(animationTimer, 25);
  }
}

function Animation(){
}

_ = Animation.prototype = new Object_0();
_.getClass$ = getClass_32;
_.typeId$ = 50;
_.duration = -1;
_.running = false;
_.startTime = -1;
_.started = false;
var animationTimer = null, animations = null;
function $clinit_31(){
  $clinit_31 = nullMethod;
  $clinit_79();
}

function getClass_31(){
  return Lcom_google_gwt_animation_client_Animation$1_2_classLit;
}

function run_1(){
  updateAnimations();
}

function Animation$1(){
}

_ = Animation$1.prototype = new Timer();
_.getClass$ = getClass_31;
_.run = run_1;
_.typeId$ = 51;
function getTypeName(o){
  return o == null?null:(o.typeMarker$ == nullMethod || o.typeId$ == 2?o.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
}

function getClass_131(){
  return Ljava_lang_Throwable_2_classLit;
}

function toString_11(){
  var className, msg;
  className = this.getClass$().typeName;
  msg = this.detailMessage;
  if (msg != null) {
    return className + ': ' + msg;
  }
   else {
    return className;
  }
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0();
_.getClass$ = getClass_131;
_.toString$ = toString_11;
_.typeId$ = 52;
_.detailMessage = null;
function $Exception(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_118(){
  return Ljava_lang_Exception_2_classLit;
}

function Exception(){
}

_ = Exception.prototype = new Throwable();
_.getClass$ = getClass_118;
_.typeId$ = 53;
function $RuntimeException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_127(){
  return Ljava_lang_RuntimeException_2_classLit;
}

function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception();
_.getClass$ = getClass_127;
_.typeId$ = 54;
function $JavaScriptException(this$static, e){
  $Exception(this$static, '(' + getName(e) + '): ' + getDescription(e) + (e != null && (e.typeMarker$ != nullMethod && e.typeId$ != 2)?getProperties0(dynamicCastJso(e)):''));
  getName(e);
  getDescription(e);
  getException(e);
  return this$static;
}

function getClass_33(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}

function getDescription(e){
  if (e != null && (e.typeMarker$ != nullMethod && e.typeId$ != 2)) {
    return getDescription0(dynamicCastJso(e));
  }
   else {
    return e + '';
  }
}

function getDescription0(e){
  return e == null?null:e.message;
}

function getException(e){
  if (e != null && (e.typeMarker$ != nullMethod && e.typeId$ != 2)) {
    return dynamicCastJso(e);
  }
   else {
    return null;
  }
}

function getName(e){
  if (e == null) {
    return 'null';
  }
   else if (e != null && (e.typeMarker$ != nullMethod && e.typeId$ != 2)) {
    return getName0(dynamicCastJso(e));
  }
   else if (e != null && canCast(e.typeId$, 1)) {
    return 'String';
  }
   else {
    return (e.typeMarker$ == nullMethod || e.typeId$ == 2?e.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
  }
}

function getName0(e){
  return e == null?null:e.name;
}

function getProperties0(e){
  var result = '';
  try {
    for (prop in e) {
      if (prop != 'name' && (prop != 'message' && prop != 'toString')) {
        try {
          result += '\n ' + prop + ': ' + e[prop];
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function JavaScriptException(){
}

_ = JavaScriptException.prototype = new RuntimeException();
_.getClass$ = getClass_33;
_.typeId$ = 55;
function equals__devirtual$(this$static, other){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.equals$(other):(this$static == null?null:this$static) === (other == null?null:other);
}

function hashCode__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.hashCode$():this$static.$H || (this$static.$H = ++sNextHashId);
}

var sNextHashId = 0;
function $createSelectElement(multiple){
  var select;
  select = $doc.createElement('select');
  if (multiple) {
    select.multiple = true;
  }
  return select;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(elem){
  var parent = elem.parentNode;
  if (parent == null) {
    return null;
  }
  if (parent.nodeType != 1)
    parent = null;
  return parent;
}

function $setInnerText(elem, text){
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  if (text != null) {
    elem.appendChild($doc.createTextNode(text));
  }
}

function $getAbsoluteLeft(elem){
  var left = 0;
  var curr = elem.parentNode;
  while (curr && curr.offsetParent) {
    if (curr.tagName != 'TR' && curr.tagName != 'TBODY') {
      left -= curr.scrollLeft;
    }
    curr = curr.parentNode;
  }
  while (elem) {
    left += elem.offsetLeft;
    elem = elem.offsetParent;
  }
  return left;
}

function $getAbsoluteTop(elem){
  var top = 0;
  var curr = elem.parentNode;
  while (curr && curr.offsetParent) {
    if (curr.tagName != 'TR' && curr.tagName != 'TBODY') {
      top -= curr.scrollTop;
    }
    curr = curr.parentNode;
  }
  while (elem) {
    top += elem.offsetTop;
    elem = elem.offsetParent;
  }
  return top;
}

function $createUniqueId(this$static){
  if (!this$static.gwt_uid) {
    this$static.gwt_uid = 1;
  }
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getPropertyString(this$static, name){
  return this$static[name] == null?null:String(this$static[name]);
}

function $clinit_51(){
  $clinit_51 = nullMethod;
  defaultDateTimeConstants = $DateTimeConstants_en(new DateTimeConstants_en());
}

function $DateTimeFormat(this$static, pattern){
  $clinit_51();
  $DateTimeFormat_0(this$static, pattern, defaultDateTimeConstants);
  return this$static;
}

function $DateTimeFormat_0(this$static, pattern, dateTimeConstants){
  $clinit_51();
  this$static.patternParts = $ArrayList(new ArrayList());
  this$static.pattern = pattern;
  this$static.dateTimeConstants = dateTimeConstants;
  $parsePattern(this$static, pattern);
  return this$static;
}

function $addPart(this$static, buf, count){
  if (buf.builder.stringLength > 0) {
    $add_8(this$static.patternParts, $DateTimeFormat$PatternPart(new DateTimeFormat$PatternPart(), $toString_2(buf.builder), count));
    $setLength(buf.builder, 0);
  }
}

function $appendGMT(buf, date){
  var value;
  value = -date.jsdate.getTimezoneOffset();
  if (value < 0) {
    $append_0(buf.builder, 'GMT-');
    value = -value;
  }
   else {
    $append_0(buf.builder, 'GMT+');
  }
  $zeroPaddingNumber(buf, ~~(value / 60), 2);
  $append_0(buf.builder, ':');
  $zeroPaddingNumber(buf, value % 60, 2);
}

function $format(this$static, date){
  var ch, i, j, n, toAppendTo, trailQuote;
  toAppendTo = $StringBuffer_0(new StringBuffer());
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch = this$static.pattern.charCodeAt(i);
    if (ch >= 97 && ch <= 122 || ch >= 65 && ch <= 90) {
      for (j = i + 1; j < n && this$static.pattern.charCodeAt(j) == ch; ++j) {
      }
      $subFormat(this$static, toAppendTo, ch, j - i, date);
      i = j;
    }
     else if (ch == 39) {
      ++i;
      if (i < n && this$static.pattern.charCodeAt(i) == 39) {
        $append_0(toAppendTo.builder, "'");
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && this$static.pattern.charCodeAt(j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw $IllegalArgumentException(new IllegalArgumentException(), "Missing trailing '");
        }
        if (j + 1 < n && this$static.pattern.charCodeAt(j + 1) == 39) {
          ++j;
        }
         else {
          trailQuote = true;
        }
        $append(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      $append_0(toAppendTo.builder, String.fromCharCode(ch));
      ++i;
    }
  }
  return $toString_2(toAppendTo.builder);
}

function $format1To12Hours(buf, count, date){
  var value;
  value = date.jsdate.getHours() % 12;
  if (value == 0) {
    $zeroPaddingNumber(buf, 12, count);
  }
   else {
    $zeroPaddingNumber(buf, value, count);
  }
}

function $format24Hours(buf, count, date){
  var value;
  value = date.jsdate.getHours();
  if (value == 0) {
    $zeroPaddingNumber(buf, 24, count);
  }
   else {
    $zeroPaddingNumber(buf, value, count);
  }
}

function $formatAmPm(this$static, buf, date){
  if (date.jsdate.getHours() >= 12 && date.jsdate.getHours() < 24) {
    $append(buf, $ampms(this$static.dateTimeConstants)[1]);
  }
   else {
    $append(buf, $ampms(this$static.dateTimeConstants)[0]);
  }
}

function $formatDayOfWeek(this$static, buf, count, date){
  var value;
  value = date.jsdate.getDay();
  if (count >= 4) {
    $append(buf, $weekdays(this$static.dateTimeConstants)[value]);
  }
   else {
    $append(buf, $shortWeekdays(this$static.dateTimeConstants)[value]);
  }
}

function $formatEra(this$static, buf, count, date){
  var value;
  value = date.jsdate.getFullYear() - 1900 >= -1900?1:0;
  if (count >= 4) {
    $append(buf, $eraNames(this$static.dateTimeConstants)[value]);
  }
   else {
    $append(buf, $eras(this$static.dateTimeConstants)[value]);
  }
}

function $formatFractionalSeconds(buf, count, date){
  var value;
  value = lowBits_0(mod(fromDouble(date.jsdate.getTime()), P3e8_longLit));
  if (count == 1) {
    value = ~~((value + 50) / 100);
    $append_0(buf.builder, '' + value);
  }
   else if (count == 2) {
    value = ~~((value + 5) / 10);
    $zeroPaddingNumber(buf, value, 2);
  }
   else {
    $zeroPaddingNumber(buf, value, 3);
    if (count > 3) {
      $zeroPaddingNumber(buf, 0, count - 3);
    }
  }
}

function $formatMonth(this$static, buf, count, date){
  var value;
  value = date.jsdate.getMonth();
  switch (count) {
    case 5:
      $append(buf, $narrowMonths(this$static.dateTimeConstants)[value]);
      break;
    case 4:
      $append(buf, $standaloneMonths(this$static.dateTimeConstants)[value]);
      break;
    case 3:
      $append(buf, $shortMonths(this$static.dateTimeConstants)[value]);
      break;
    default:$zeroPaddingNumber(buf, value + 1, count);
  }
}

function $formatQuarter(this$static, buf, count, date){
  var value;
  value = ~~(date.jsdate.getMonth() / 3);
  if (count < 4) {
    $append(buf, $shortQuarters(this$static.dateTimeConstants)[value]);
  }
   else {
    $append(buf, $quarters(this$static.dateTimeConstants)[value]);
  }
}

function $formatStandaloneDay(this$static, buf, count, date){
  var value;
  value = date.jsdate.getDay();
  if (count == 5) {
    $append(buf, $standaloneNarrowWeekdays(this$static.dateTimeConstants)[value]);
  }
   else if (count == 4) {
    $append(buf, $standaloneWeekdays(this$static.dateTimeConstants)[value]);
  }
   else if (count == 3) {
    $append(buf, $standaloneShortWeekdays(this$static.dateTimeConstants)[value]);
  }
   else {
    $zeroPaddingNumber(buf, value, 1);
  }
}

function $formatStandaloneMonth(this$static, buf, count, date){
  var value;
  value = date.jsdate.getMonth();
  if (count == 5) {
    $append(buf, $standaloneNarrowMonths(this$static.dateTimeConstants)[value]);
  }
   else if (count == 4) {
    $append(buf, $standaloneMonths(this$static.dateTimeConstants)[value]);
  }
   else if (count == 3) {
    $append(buf, $standaloneShortMonths(this$static.dateTimeConstants)[value]);
  }
   else {
    $zeroPaddingNumber(buf, value + 1, count);
  }
}

function $formatTimeZoneRFC(buf, count, date){
  var sign, val;
  if (count < 4) {
    val = date.jsdate.getTimezoneOffset();
    sign = 45;
    if (val < 0) {
      val = -val;
      sign = 43;
    }
    val = ~~(val / 3) * 5 + val % 60;
    $append_0(buf.builder, String.fromCharCode(sign));
    $zeroPaddingNumber(buf, val, 4);
  }
   else {
    $appendGMT(buf, date);
  }
}

function $formatYear(buf, count, date){
  var value;
  value = date.jsdate.getFullYear() - 1900 + 1900;
  if (value < 0) {
    value = -value;
  }
  if (count == 2) {
    $zeroPaddingNumber(buf, value % 100, 2);
  }
   else {
    $append_0(buf.builder, '' + value);
  }
}

function $getNextCharCountInPattern(pattern, start){
  var ch, next;
  ch = pattern.charCodeAt(start);
  next = start + 1;
  while (next < pattern.length && pattern.charCodeAt(next) == ch) {
    ++next;
  }
  return next - start;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.size;
  for (i = 0; i < len; ++i) {
    if ($isNumeric(dynamicCast($get_1(this$static.patternParts, i), 11))) {
      if (!abut && i + 1 < len && $isNumeric(dynamicCast($get_1(this$static.patternParts, i + 1), 11))) {
        abut = true;
        dynamicCast($get_1(this$static.patternParts, i), 11).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = 'MydhHmsSDkK'.indexOf(fromCodePoint(part.text_0.charCodeAt(0)));
  return i > 0 || i == 0 && part.count < 3;
}

function $matchString(text, start, data, pos){
  var bestMatch, bestMatchLength, count, i, length, textInLowerCase;
  count = data.length;
  bestMatchLength = 0;
  bestMatch = -1;
  textInLowerCase = text.substr(start, text.length - start).toLowerCase();
  for (i = 0; i < count; ++i) {
    length = data[i].length;
    if (length > bestMatchLength && textInLowerCase.indexOf(data[i].toLowerCase()) == 0) {
      bestMatch = i;
      bestMatchLength = length;
    }
  }
  if (bestMatch >= 0) {
    pos[0] = start + bestMatchLength;
  }
  return bestMatch;
}

function $parse_0(this$static, text, strict){
  var charsConsumed, curDate, date;
  curDate = $Date(new Date_0());
  date = $Date_0(new Date_0(), curDate.jsdate.getFullYear() - 1900, curDate.jsdate.getMonth(), curDate.jsdate.getDate());
  charsConsumed = $parse(this$static, text, 0, date, strict);
  if (charsConsumed == 0 || charsConsumed < text.length) {
    throw $IllegalArgumentException(new IllegalArgumentException(), text);
  }
  return date;
}

function $parse(this$static, text, start, date, strict){
  var abutPass, abutPat, abutStart, cal, count, i, parsePos, part, s;
  cal = $DateRecord(new DateRecord());
  parsePos = initValues(_3I_classLit, 0, -1, [start]);
  abutPat = -1;
  abutStart = 0;
  abutPass = 0;
  for (i = 0; i < this$static.patternParts.size; ++i) {
    part = dynamicCast($get_1(this$static.patternParts, i), 11);
    if (part.count > 0) {
      if (abutPat < 0 && part.abutStart) {
        abutPat = i;
        abutStart = start;
        abutPass = 0;
      }
      if (abutPat >= 0) {
        count = part.count;
        if (i == abutPat) {
          count -= abutPass++;
          if (count == 0) {
            return 0;
          }
        }
        if (!$subParse(this$static, text, parsePos, part, count, cal)) {
          i = abutPat - 1;
          parsePos[0] = abutStart;
          continue;
        }
      }
       else {
        abutPat = -1;
        if (!$subParse(this$static, text, parsePos, part, 0, cal)) {
          return 0;
        }
      }
    }
     else {
      abutPat = -1;
      if (part.text_0.charCodeAt(0) == 32) {
        s = parsePos[0];
        $skipSpace(text, parsePos);
        if (parsePos[0] > s) {
          continue;
        }
      }
       else if ($startsWith(text, part.text_0, parsePos[0])) {
        parsePos[0] += part.text_0.length;
        continue;
      }
      return 0;
    }
  }
  if (!$calcDate(cal, date, strict)) {
    return 0;
  }
  return parsePos[0] - start;
}

function $parseInt(text, pos){
  var ch, ind, ret;
  ret = 0;
  ind = pos[0];
  ch = text.charCodeAt(ind);
  while (ch >= 48 && ch <= 57) {
    ret = ret * 10 + (ch - 48);
    ++ind;
    if (ind >= text.length) {
      break;
    }
    ch = text.charCodeAt(ind);
  }
  if (ind > pos[0]) {
    pos[0] = ind;
  }
   else {
    ret = -1;
  }
  return ret;
}

function $parsePattern(this$static, pattern){
  var buf, ch, count, i, inQuote;
  buf = $StringBuffer_0(new StringBuffer());
  inQuote = false;
  for (i = 0; i < pattern.length; ++i) {
    ch = pattern.charCodeAt(i);
    if (ch == 32) {
      $addPart(this$static, buf, 0);
      $append_0(buf.builder, ' ');
      $addPart(this$static, buf, 0);
      while (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch == 39) {
        if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
          $append_0(buf.builder, String.fromCharCode(ch));
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        $append_0(buf.builder, String.fromCharCode(ch));
      }
      continue;
    }
    if ('GyMdkHmsSEDahKzZv'.indexOf(fromCodePoint(ch)) > 0) {
      $addPart(this$static, buf, 0);
      $append_0(buf.builder, String.fromCharCode(ch));
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch == 39) {
      if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
        $append_0(buf.builder, "'");
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      $append_0(buf.builder, String.fromCharCode(ch));
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $parseTimeZoneOffset(text, pos, cal){
  var offset, sign, st, value;
  if (pos[0] >= text.length) {
    cal.tzOffset = 0;
    return true;
  }
  switch (text.charCodeAt(pos[0])) {
    case 43:
      sign = 1;
      break;
    case 45:
      sign = -1;
      break;
    default:cal.tzOffset = 0;
      return true;
  }
  ++pos[0];
  st = pos[0];
  value = $parseInt(text, pos);
  if (value == 0 && pos[0] == st) {
    return false;
  }
  if (pos[0] < text.length && text.charCodeAt(pos[0]) == 58) {
    offset = value * 60;
    ++pos[0];
    st = pos[0];
    value = $parseInt(text, pos);
    if (value == 0 && pos[0] == st) {
      return false;
    }
    offset += value;
  }
   else {
    offset = value;
    if (offset < 24 && pos[0] - st <= 2) {
      offset *= 60;
    }
     else {
      offset = offset % 100 + ~~(offset / 100) * 60;
    }
  }
  offset *= sign;
  cal.tzOffset = -offset;
  return true;
}

function $skipSpace(text, pos){
  while (pos[0] < text.length && ' \t\r\n'.indexOf(fromCodePoint(text.charCodeAt(pos[0]))) >= 0) {
    ++pos[0];
  }
}

function $subFormat(this$static, buf, ch, count, date){
  var value, value_0, value_1, value_2, value_3;
  switch (ch) {
    case 71:
      $formatEra(this$static, buf, count, date);
      break;
    case 121:
      $formatYear(buf, count, date);
      break;
    case 77:
      $formatMonth(this$static, buf, count, date);
      break;
    case 107:
      $format24Hours(buf, count, date);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, date);
      break;
    case 69:
      $formatDayOfWeek(this$static, buf, count, date);
      break;
    case 97:
      $formatAmPm(this$static, buf, date);
      break;
    case 104:
      $format1To12Hours(buf, count, date);
      break;
    case 75:
      value = date.jsdate.getHours() % 12;
      $zeroPaddingNumber(buf, value, count);
      break;
    case 72:
      value_0 = date.jsdate.getHours();
      $zeroPaddingNumber(buf, value_0, count);
      break;
    case 99:
      $formatStandaloneDay(this$static, buf, count, date);
      break;
    case 76:
      $formatStandaloneMonth(this$static, buf, count, date);
      break;
    case 81:
      $formatQuarter(this$static, buf, count, date);
      break;
    case 100:
      value_1 = date.jsdate.getDate();
      $zeroPaddingNumber(buf, value_1, count);
      break;
    case 109:
      value_2 = date.jsdate.getMinutes();
      $zeroPaddingNumber(buf, value_2, count);
      break;
    case 115:
      value_3 = date.jsdate.getSeconds();
      $zeroPaddingNumber(buf, value_3, count);
      break;
    case 122:
    case 118:
      $appendGMT(buf, date);
      break;
    case 90:
      $formatTimeZoneRFC(buf, count, date);
      break;
    default:return false;
  }
  return true;
}

function $subParse(this$static, text, pos, part, digitCount, cal){
  var ch, start, value;
  $skipSpace(text, pos);
  start = pos[0];
  ch = part.text_0.charCodeAt(0);
  value = -1;
  if ($isNumeric(part)) {
    if (digitCount > 0) {
      if (start + digitCount > text.length) {
        return false;
      }
      value = $parseInt(text.substr(0, start + digitCount - 0), pos);
    }
     else {
      value = $parseInt(text, pos);
    }
  }
  switch (ch) {
    case 71:
      value = $matchString(text, start, $eras(this$static.dateTimeConstants), pos);
      cal.era = value;
      return true;
    case 77:
      return $subParseMonth(this$static, text, pos, cal, value, start);
    case 69:
      return $subParseDayOfWeek(this$static, text, pos, start, cal);
    case 97:
      value = $matchString(text, start, $ampms(this$static.dateTimeConstants), pos);
      cal.ampm = value;
      return true;
    case 121:
      return $subParseYear(text, pos, start, value, part, cal);
    case 100:
      cal.dayOfMonth = value;
      return true;
    case 83:
      return $subParseFractionalSeconds(value, start, pos[0], cal);
    case 104:
      if (value == 12) {
        value = 0;
      }

    case 75:
    case 72:
      cal.hours = value;
      return true;
    case 107:
      cal.hours = value;
      return true;
    case 109:
      cal.minutes = value;
      return true;
    case 115:
      cal.seconds = value;
      return true;
    case 122:
    case 90:
    case 118:
      return $subParseTimeZoneInGMT(text, start, pos, cal);
    default:return false;
  }
}

function $subParseDayOfWeek(this$static, text, pos, start, cal){
  var value;
  value = $matchString(text, start, $weekdays(this$static.dateTimeConstants), pos);
  if (value < 0) {
    value = $matchString(text, start, $shortWeekdays(this$static.dateTimeConstants), pos);
  }
  if (value < 0) {
    return false;
  }
  cal.dayOfWeek = value;
  return true;
}

function $subParseFractionalSeconds(value, start, end, cal){
  var a, i;
  i = end - start;
  if (i < 3) {
    while (i < 3) {
      value *= 10;
      ++i;
    }
  }
   else {
    a = 1;
    while (i > 3) {
      a *= 10;
      --i;
    }
    value = ~~((value + (a >> 1)) / a);
  }
  cal.milliseconds = value;
  return true;
}

function $subParseMonth(this$static, text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, $months(this$static.dateTimeConstants), pos);
    if (value < 0) {
      value = $matchString(text, start, $shortMonths(this$static.dateTimeConstants), pos);
    }
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else {
    cal.month = value - 1;
    return true;
  }
}

function $subParseTimeZoneInGMT(text, start, pos, cal){
  if ($startsWith(text, 'GMT', start)) {
    pos[0] = start + 3;
    return $parseTimeZoneOffset(text, pos, cal);
  }
  return $parseTimeZoneOffset(text, pos, cal);
}

function $subParseYear(text, pos, start, value, part, cal){
  var ambiguousTwoDigitYear, ch, date, defaultCenturyStartYear;
  ch = 32;
  if (value < 0) {
    ch = text.charCodeAt(pos[0]);
    if (ch != 43 && ch != 45) {
      return false;
    }
    ++pos[0];
    value = $parseInt(text, pos);
    if (value < 0) {
      return false;
    }
    if (ch == 45) {
      value = -value;
    }
  }
  if (ch == 32 && pos[0] - start == 2 && part.count == 2) {
    date = $Date(new Date_0());
    defaultCenturyStartYear = date.jsdate.getFullYear() - 1900 + 1900 - 80;
    ambiguousTwoDigitYear = defaultCenturyStartYear % 100;
    cal.ambiguousYear = value == ambiguousTwoDigitYear;
    value += ~~(defaultCenturyStartYear / 100) * 100 + (value < ambiguousTwoDigitYear?100:0);
  }
  cal.year = value;
  return true;
}

function $zeroPaddingNumber(buf, value, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; ++i) {
    if (value < b) {
      $append_0(buf.builder, '0');
    }
    b *= 10;
  }
  $append_0(buf.builder, '' + value);
}

function getClass_36(){
  return Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit;
}

function getLongDateFormat(){
  $clinit_51();
  var pattern;
  if (!cachedLongDateFormat) {
    pattern = $dateFormats(defaultDateTimeConstants)[1];
    cachedLongDateFormat = $DateTimeFormat(new DateTimeFormat(), pattern);
  }
  return cachedLongDateFormat;
}

function getShortDateFormat(){
  $clinit_51();
  var pattern;
  if (!cachedShortDateFormat) {
    pattern = $dateFormats(defaultDateTimeConstants)[3];
    cachedShortDateFormat = $DateTimeFormat(new DateTimeFormat(), pattern);
  }
  return cachedShortDateFormat;
}

function DateTimeFormat(){
}

_ = DateTimeFormat.prototype = new Object_0();
_.getClass$ = getClass_36;
_.typeId$ = 0;
_.dateTimeConstants = null;
_.pattern = null;
var cachedLongDateFormat = null, cachedShortDateFormat = null, defaultDateTimeConstants;
function $DateTimeFormat$PatternPart(this$static, txt, cnt){
  this$static.text_0 = txt;
  this$static.count = cnt;
  this$static.abutStart = false;
  return this$static;
}

function getClass_35(){
  return Lcom_google_gwt_i18n_client_DateTimeFormat$PatternPart_2_classLit;
}

function DateTimeFormat$PatternPart(){
}

_ = DateTimeFormat$PatternPart.prototype = new Object_0();
_.getClass$ = getClass_35;
_.typeId$ = 56;
_.abutStart = false;
_.count = 0;
_.text_0 = null;
function $DateTimeConstants_en(this$static){
  this$static.cache = $HashMap(new HashMap());
  return this$static;
}

function $ampms(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'ampms'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['AM', 'PM']);
    $put(this$static.cache, 'ampms', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $dateFormats(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'dateFormats'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['EEEE, MMMM d, yyyy', 'MMMM d, yyyy', 'MMM d, yyyy', 'M/d/yy']);
    $put(this$static.cache, 'dateFormats', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $eraNames(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'eraNames'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['Before Christ', 'Anno Domini']);
    $put(this$static.cache, 'eraNames', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $eras(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'eras'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['BC', 'AD']);
    $put(this$static.cache, 'eras', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $months(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'months'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    $put(this$static.cache, 'months', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $narrowMonths(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'narrowMonths'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']);
    $put(this$static.cache, 'narrowMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $quarters(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'quarters'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']);
    $put(this$static.cache, 'quarters', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $shortMonths(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'shortMonths'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    $put(this$static.cache, 'shortMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $shortQuarters(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'shortQuarters'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['Q1', 'Q2', 'Q3', 'Q4']);
    $put(this$static.cache, 'shortQuarters', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $shortWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'shortWeekdays'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    $put(this$static.cache, 'shortWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneMonths(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'standaloneMonths'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    $put(this$static.cache, 'standaloneMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneNarrowMonths(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'standaloneNarrowMonths'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']);
    $put(this$static.cache, 'standaloneNarrowMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneNarrowWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'standaloneNarrowWeekdays'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['S', 'M', 'T', 'W', 'T', 'F', 'S']);
    $put(this$static.cache, 'standaloneNarrowWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneShortMonths(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'standaloneShortMonths'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    $put(this$static.cache, 'standaloneShortMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneShortWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'standaloneShortWeekdays'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    $put(this$static.cache, 'standaloneShortWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'standaloneWeekdays'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    $put(this$static.cache, 'standaloneWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $weekdays(this$static){
  var args, writer;
  args = dynamicCast($get_0(this$static.cache, 'weekdays'), 12);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    $put(this$static.cache, 'weekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function getClass_37(){
  return Lcom_google_gwt_i18n_client_constants_DateTimeConstants_1en_2_classLit;
}

function DateTimeConstants_en(){
}

_ = DateTimeConstants_en.prototype = new Object_0();
_.getClass$ = getClass_37;
_.typeId$ = 0;
function $clinit_231(){
  $clinit_231 = nullMethod;
  DAYS = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(_3Ljava_lang_String_2_classLit, 138, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

function $Date(this$static){
  $clinit_231();
  this$static.jsdate = new Date();
  return this$static;
}

function $Date_0(this$static, year, month, date){
  $clinit_231();
  this$static.jsdate = new Date();
  this$static.jsdate.setFullYear(year + 1900, month, date);
  this$static.jsdate.setHours(0, 0, 0, 0);
  return this$static;
}

function $Date_1(this$static, date){
  $clinit_231();
  this$static.jsdate = new Date(date[1] + date[0]);
  return this$static;
}

function $setDate(this$static, date){
  this$static.jsdate.setDate(date);
}

function $setTime0(this$static, time){
  this$static.jsdate.setTime(time);
}

function equals_8(obj){
  return obj != null && canCast(obj.typeId$, 52) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, 52).jsdate.getTime()));
}

function getClass_147(){
  return Ljava_util_Date_2_classLit;
}

function hashCode_9(){
  return lowBits_0(xor(fromDouble(this.jsdate.getTime()), shru(fromDouble(this.jsdate.getTime()), 32)));
}

function padTwo_0(number){
  if (number < 10) {
    return '0' + number;
  }
   else {
    return '' + number;
  }
}

function setHours_0(hours){
  this.jsdate.setHours(hours);
}

function setMinutes_0(minutes){
  this.jsdate.setMinutes(minutes);
}

function setMonth_0(month){
  this.jsdate.setMonth(month);
}

function setSeconds_0(seconds){
  this.jsdate.setSeconds(seconds);
}

function setYear_0(year){
  this.jsdate.setFullYear(year + 1900);
}

function toString_15(){
  var d = this.jsdate;
  var padTwo = padTwo_0;
  var day = DAYS[this.jsdate.getDay()];
  var month = MONTHS[this.jsdate.getMonth()];
  var offset = -d.getTimezoneOffset();
  var hourOffset = String(offset >= 0?'+' + Math.floor(offset / 60):Math.ceil(offset / 60));
  var minuteOffset = padTwo(Math.abs(offset) % 60);
  return day + ' ' + month + ' ' + padTwo(d.getDate()) + ' ' + padTwo(d.getHours()) + ':' + padTwo(d.getMinutes()) + ':' + padTwo(d.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + d.getFullYear();
}

function Date_0(){
}

_ = Date_0.prototype = new Object_0();
_.equals$ = equals_8;
_.getClass$ = getClass_147;
_.hashCode$ = hashCode_9;
_.setHours_0 = setHours_0;
_.setMinutes_0 = setMinutes_0;
_.setMonth_0 = setMonth_0;
_.setSeconds_0 = setSeconds_0;
_.setYear = setYear_0;
_.toString$ = toString_15;
_.typeId$ = 57;
var DAYS, MONTHS;
function $clinit_57(){
  $clinit_57 = nullMethod;
  $clinit_231();
}

function $DateRecord(this$static){
  $clinit_57();
  this$static.jsdate = new Date();
  this$static.era = -1;
  this$static.ambiguousYear = false;
  this$static.year = -2147483648;
  this$static.month = -1;
  this$static.dayOfMonth = -1;
  this$static.ampm = -1;
  this$static.hours = -1;
  this$static.minutes = -1;
  this$static.seconds = -1;
  this$static.milliseconds = -1;
  this$static.dayOfWeek = -1;
  this$static.tzOffset = -2147483648;
  return this$static;
}

function $calcDate(this$static, date, strict){
  var adjustment, defaultCenturyStart, offset, orgDayOfMonth, orgMonth;
  if (this$static.era == 0 && this$static.year > 0) {
    this$static.year = -(this$static.year - 1);
  }
  if (this$static.year > -2147483648) {
    date.setYear(this$static.year - 1900);
  }
  orgDayOfMonth = date.jsdate.getDate();
  date.jsdate.setDate(1);
  if (this$static.month >= 0) {
    date.setMonth_0(this$static.month);
  }
  if (this$static.dayOfMonth >= 0) {
    date.jsdate.setDate(this$static.dayOfMonth);
  }
   else {
    date.jsdate.setDate(orgDayOfMonth);
  }
  if (this$static.hours < 0) {
    this$static.hours = date.jsdate.getHours();
  }
  if (this$static.ampm > 0) {
    if (this$static.hours < 12) {
      this$static.hours += 12;
    }
  }
  date.setHours_0(this$static.hours);
  if (this$static.minutes >= 0) {
    date.setMinutes_0(this$static.minutes);
  }
  if (this$static.seconds >= 0) {
    date.setSeconds_0(this$static.seconds);
  }
  if (this$static.milliseconds >= 0) {
    $setTime0(date, toDouble(add_7(mul(div_0(fromDouble(date.jsdate.getTime()), P3e8_longLit), P3e8_longLit), fromInt(this$static.milliseconds))));
  }
  if (strict) {
    if (this$static.year > -2147483648 && this$static.year - 1900 != date.jsdate.getFullYear() - 1900) {
      return false;
    }
    if (this$static.month >= 0 && this$static.month != date.jsdate.getMonth()) {
      return false;
    }
    if (this$static.dayOfMonth >= 0 && this$static.dayOfMonth != date.jsdate.getDate()) {
      return false;
    }
    if (this$static.hours >= 24) {
      return false;
    }
    if (this$static.minutes >= 60) {
      return false;
    }
    if (this$static.seconds >= 60) {
      return false;
    }
    if (this$static.milliseconds >= 1000) {
      return false;
    }
  }
  if (this$static.tzOffset > -2147483648) {
    offset = date.jsdate.getTimezoneOffset();
    $setTime0(date, toDouble(add_7(fromDouble(date.jsdate.getTime()), fromInt((this$static.tzOffset - offset) * 60 * 1000))));
  }
  if (this$static.ambiguousYear) {
    defaultCenturyStart = $Date(new Date_0());
    defaultCenturyStart.setYear(defaultCenturyStart.jsdate.getFullYear() - 1900 - 80);
    if (compare_0(fromDouble(date.jsdate.getTime()), fromDouble(defaultCenturyStart.jsdate.getTime())) < 0) {
      date.setYear(defaultCenturyStart.jsdate.getFullYear() - 1900 + 100);
    }
  }
  if (this$static.dayOfWeek >= 0) {
    if (this$static.dayOfMonth == -1) {
      adjustment = (7 + this$static.dayOfWeek - date.jsdate.getDay()) % 7;
      if (adjustment > 3) {
        adjustment -= 7;
      }
      orgMonth = date.jsdate.getMonth();
      $setDate(date, date.jsdate.getDate() + adjustment);
      if (date.jsdate.getMonth() != orgMonth) {
        $setDate(date, date.jsdate.getDate() + (adjustment > 0?-7:7));
      }
    }
     else {
      if (date.jsdate.getDay() != this$static.dayOfWeek) {
        return false;
      }
    }
  }
  return true;
}

function getClass_38(){
  return Lcom_google_gwt_i18n_client_impl_DateRecord_2_classLit;
}

function setHours(hours){
  this.hours = hours;
}

function setMinutes(minutes){
  this.minutes = minutes;
}

function setMonth(month){
  this.month = month;
}

function setSeconds(seconds){
  this.seconds = seconds;
}

function setYear(value){
  this.year = value;
}

function DateRecord(){
}

_ = DateRecord.prototype = new Date_0();
_.getClass$ = getClass_38;
_.setHours_0 = setHours;
_.setMinutes_0 = setMinutes;
_.setMonth_0 = setMonth;
_.setSeconds_0 = setSeconds;
_.setYear = setYear;
_.typeId$ = 58;
_.ambiguousYear = false;
_.ampm = 0;
_.dayOfMonth = 0;
_.dayOfWeek = 0;
_.era = 0;
_.hours = 0;
_.milliseconds = 0;
_.minutes = 0;
_.month = 0;
_.seconds = 0;
_.tzOffset = 0;
_.year = 0;
function createFromSeed(seedType, length){
  var seedArray = [null, 0, false, [0, 0]];
  var value = seedArray[seedType];
  var array = new Array(length);
  for (var i = 0; i < length; ++i) {
    array[i] = value;
  }
  return array;
}

function getClass_39(){
  return this.arrayClass$;
}

function initDim(arrayClass, typeId, queryId, length, seedType){
  var result;
  result = createFromSeed(seedType, length);
  initValues(arrayClass, typeId, queryId, result);
  return result;
}

function initValues(arrayClass, typeId, queryId, array){
  if (!protoTypeArray_0) {
    protoTypeArray_0 = new Array_0();
  }
  wrapArray(array, protoTypeArray_0);
  array.arrayClass$ = arrayClass;
  array.typeId$ = typeId;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value.typeId$, array.queryId$)) {
      throw new ArrayStoreException();
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.typeId$ == 2)) {
      throw new ArrayStoreException();
    }
  }
  return array[index] = value;
}

function wrapArray(array, protoTypeArray){
  for (var i in protoTypeArray) {
    var toCopy = protoTypeArray[i];
    if (toCopy) {
      array[i] = toCopy;
    }
  }
  return array;
}

function Array_0(){
}

_ = Array_0.prototype = new Object_0();
_.getClass$ = getClass_39;
_.typeId$ = 0;
_.arrayClass$ = null;
_.length = 0;
_.queryId$ = 0;
var protoTypeArray_0 = null;
function canCast(srcId, dstId){
  return srcId && !!typeIdArray[srcId][dstId];
}

function canCastUnsafe(srcId, dstId){
  return srcId && typeIdArray[srcId][dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !canCastUnsafe(src.typeId$, dstId)) {
    throw new ClassCastException();
  }
  return src;
}

function dynamicCastJso(src){
  if (src != null && (src.typeMarker$ == nullMethod || src.typeId$ == 2)) {
    throw new ClassCastException();
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && canCast(src.typeId$, dstId);
}

function round_int(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

var typeIdArray = [{}, {}, {1:1, 49:1, 50:1, 51:1}, {24:1}, {2:1, 18:1, 24:1}, {2:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 15:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 15:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 15:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {21:1, 39:1}, {2:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 4:1, 18:1, 24:1, 34:1}, {2:1, 4:1, 5:1, 18:1, 24:1, 34:1}, {2:1, 4:1, 5:1, 18:1, 24:1, 34:1}, {2:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 18:1, 24:1}, {2:1, 5:1, 18:1, 24:1}, {2:1, 5:1, 18:1, 24:1}, {2:1, 5:1, 18:1, 24:1}, {26:1, 39:1}, {22:1, 39:1}, {23:1, 39:1}, {2:1, 18:1, 24:1}, {2:1, 3:1, 18:1, 21:1, 24:1, 39:1}, {2:1, 3:1, 6:1, 18:1, 21:1, 24:1, 39:1}, {2:1, 3:1, 6:1, 18:1, 21:1, 24:1, 39:1}, {20:1, 39:1}, {14:1}, {2:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 18:1, 24:1}, {21:1, 39:1}, {20:1, 39:1}, {20:1, 39:1}, {20:1, 39:1}, {20:1, 39:1}, {2:1, 15:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 5:1, 15:1, 18:1, 24:1, 26:1, 29:1, 37:1, 38:1, 39:1}, {2:1, 5:1, 15:1, 18:1, 24:1, 26:1, 29:1, 37:1, 38:1, 39:1}, {21:1, 39:1}, {21:1, 39:1}, {16:1}, {16:1}, {2:1, 18:1, 24:1}, {2:1, 4:1, 5:1, 8:1, 18:1, 24:1, 34:1}, {26:1, 39:1}, {2:1, 15:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {16:1}, {46:1}, {16:1}, {13:1, 49:1}, {9:1, 13:1, 49:1}, {9:1, 13:1, 49:1}, {9:1, 13:1, 49:1}, {11:1}, {49:1, 51:1, 52:1}, {49:1, 51:1, 52:1}, {9:1, 13:1, 49:1}, {16:1}, {16:1}, {17:1, 39:1}, {2:1, 18:1, 24:1, 29:1, 31:1, 36:1, 37:1, 38:1}, {2:1, 18:1, 24:1, 29:1, 31:1, 36:1, 37:1, 38:1}, {2:1, 18:1, 24:1, 29:1, 30:1, 31:1, 36:1, 37:1, 38:1}, {38:1}, {38:1, 43:1}, {38:1, 43:1, 49:1}, {38:1, 43:1, 49:1}, {38:1, 43:1, 49:1}, {2:1, 18:1, 24:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1}, {48:1}, {2:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {38:1, 43:1, 49:1}, {2:1, 7:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 18:1, 24:1, 29:1, 30:1, 31:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1}, {2:1, 5:1, 18:1, 24:1}, {2:1, 18:1, 24:1}, {38:1, 43:1, 49:1}, {2:1, 18:1, 24:1}, {2:1, 18:1, 24:1, 27:1, 39:1}, {2:1, 15:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {24:1, 25:1}, {38:1, 43:1, 49:1}, {38:1, 43:1, 49:1}, {49:1, 51:1}, {49:1, 51:1}, {46:1}, {14:1}, {2:1, 18:1, 24:1, 28:1, 29:1, 31:1, 36:1, 37:1, 38:1}, {17:1, 39:1}, {2:1, 18:1, 24:1, 28:1, 29:1, 31:1, 36:1, 37:1, 38:1}, {2:1, 18:1, 24:1, 29:1, 30:1, 31:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1}, {38:1}, {9:1, 13:1, 49:1}, {9:1, 13:1, 49:1}, {13:1, 49:1}, {13:1, 49:1}, {9:1, 13:1, 49:1}, {49:1}, {9:1, 13:1, 49:1}, {9:1, 13:1, 49:1}, {9:1, 13:1, 49:1}, {41:1, 49:1, 51:1}, {9:1, 13:1, 49:1}, {9:1, 13:1, 49:1}, {50:1}, {50:1}, {9:1, 13:1, 49:1}, {38:1, 45:1}, {38:1, 45:1}, {42:1}, {42:1}, {42:1}, {38:1, 45:1}, {44:1, 49:1}, {38:1, 45:1, 49:1}, {42:1}, {9:1, 13:1, 49:1}, {38:1, 43:1, 49:1}, {2:1, 15:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {21:1, 39:1}, {2:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 5:1, 18:1, 24:1}, {21:1, 39:1}, {2:1, 3:1, 6:1, 18:1, 21:1, 24:1, 39:1}, {20:1, 39:1}, {2:1, 18:1, 24:1}, {20:1, 39:1}, {2:1, 15:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {2:1, 18:1, 24:1}, {16:1}, {2:1, 15:1, 18:1, 24:1, 29:1, 37:1, 38:1}, {10:1}, {19:1}, {40:1}, {12:1}];
function caught(e){
  if (e != null && canCast(e.typeId$, 13)) {
    return e;
  }
  return $JavaScriptException(new JavaScriptException(), e);
}

function add_7(a, b){
  var newHigh, newLow;
  newHigh = a[1] + b[1];
  newLow = a[0] + b[0];
  return create_0(newLow, newHigh);
}

function addTimes(accum, a, b){
  if (a == 0) {
    return accum;
  }
  if (b == 0) {
    return accum;
  }
  return add_7(accum, create_0(a * b, 0));
}

function compare_0(a, b){
  var nega, negb;
  if (a[0] == b[0] && a[1] == b[1]) {
    return 0;
  }
  nega = a[1] < 0;
  negb = b[1] < 0;
  if (nega && !negb) {
    return -1;
  }
  if (!nega && negb) {
    return 1;
  }
  if (sub(a, b)[1] < 0) {
    return -1;
  }
   else {
    return 1;
  }
}

function create_0(valueLow, valueHigh){
  var diffHigh, diffLow;
  valueHigh %= 1.8446744073709552E19;
  valueLow %= 1.8446744073709552E19;
  diffHigh = valueHigh % 4294967296;
  diffLow = Math.floor(valueLow / 4294967296) * 4294967296;
  valueHigh = valueHigh - diffHigh + diffLow;
  valueLow = valueLow - diffLow + diffHigh;
  while (valueLow < 0) {
    valueLow += 4294967296;
    valueHigh -= 4294967296;
  }
  while (valueLow > 4294967295) {
    valueLow -= 4294967296;
    valueHigh += 4294967296;
  }
  valueHigh = valueHigh % 1.8446744073709552E19;
  while (valueHigh > 9223372032559808512) {
    valueHigh -= 1.8446744073709552E19;
  }
  while (valueHigh < -9223372036854775808) {
    valueHigh += 1.8446744073709552E19;
  }
  return [valueLow, valueHigh];
}

function div_0(a, b){
  var approx, deltaRem, deltaResult, halfa, rem, result;
  if (b[0] == 0 && b[1] == 0) {
    throw $ArithmeticException(new ArithmeticException(), '/ by zero');
  }
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_63() , ZERO;
  }
  if (eq(a, ($clinit_63() , MIN_VALUE))) {
    if (eq(b, ONE) || eq(b, NEG_ONE)) {
      return MIN_VALUE;
    }
    halfa = shr(a, 1);
    approx = shl(div_0(halfa, b), 1);
    rem = sub(a, mul(b, approx));
    return add_7(approx, div_0(rem, b));
  }
  if (eq(b, MIN_VALUE)) {
    return ZERO;
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return div_0(neg(a), neg(b));
    }
     else {
      return neg(div_0(neg(a), b));
    }
  }
  if (b[1] < 0) {
    return neg(div_0(a, neg(b)));
  }
  result = ZERO;
  rem = a;
  while (compare_0(rem, b) >= 0) {
    deltaResult = fromDouble(Math.floor(toDoubleRoundDown(rem) / toDoubleRoundUp(b)));
    if (deltaResult[0] == 0 && deltaResult[1] == 0) {
      deltaResult = ONE;
    }
    deltaRem = mul(deltaResult, b);
    result = add_7(result, deltaResult);
    rem = sub(rem, deltaRem);
  }
  return result;
}

function eq(a, b){
  return a[0] == b[0] && a[1] == b[1];
}

function fromDouble(value){
  if (isNaN(value)) {
    return $clinit_63() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_63() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_63() , MAX_VALUE;
  }
  if (value > 0) {
    return create_0(Math.floor(value), 0);
  }
   else {
    return create_0(Math.ceil(value), 0);
  }
}

function fromInt(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    result = ($clinit_62() , boxedValues)[rebase];
    if (result == null) {
      result = boxedValues[rebase] = internalFromInt(value);
    }
    return result;
  }
  return internalFromInt(value);
}

function internalFromInt(value){
  if (value >= 0) {
    return [value, 0];
  }
   else {
    return [value + 4294967296, -4294967296];
  }
}

function lowBits_0(a){
  if (a[0] >= 2147483648) {
    return ~~Math.max(Math.min(a[0] - 4294967296, 2147483647), -2147483648);
  }
   else {
    return ~~Math.max(Math.min(a[0], 2147483647), -2147483648);
  }
}

function makeFromBits(highBits, lowBits){
  var high, low;
  high = highBits * 4294967296;
  low = lowBits;
  if (lowBits < 0) {
    low += 4294967296;
  }
  return [low, high];
}

function mod(a, b){
  return sub(a, mul(div_0(a, b), b));
}

function mul(a, b){
  var a1, a2, a3, a4, b1, b2, b3, b4, res;
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_63() , ZERO;
  }
  if (b[0] == 0 && b[1] == 0) {
    return $clinit_63() , ZERO;
  }
  if (eq(a, ($clinit_63() , MIN_VALUE))) {
    return multByMinValue(b);
  }
  if (eq(b, MIN_VALUE)) {
    return multByMinValue(a);
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return mul(neg(a), neg(b));
    }
     else {
      return neg(mul(neg(a), b));
    }
  }
  if (b[1] < 0) {
    return neg(mul(a, neg(b)));
  }
  if (compare_0(a, TWO_PWR_24) < 0 && compare_0(b, TWO_PWR_24) < 0) {
    return create_0((a[1] + a[0]) * (b[1] + b[0]), 0);
  }
  a3 = a[1] % 281474976710656;
  a4 = a[1] - a3;
  a1 = a[0] % 65536;
  a2 = a[0] - a1;
  b3 = b[1] % 281474976710656;
  b4 = b[1] - b3;
  b1 = b[0] % 65536;
  b2 = b[0] - b1;
  res = ZERO;
  res = addTimes(res, a4, b1);
  res = addTimes(res, a3, b2);
  res = addTimes(res, a3, b1);
  res = addTimes(res, a2, b3);
  res = addTimes(res, a2, b2);
  res = addTimes(res, a2, b1);
  res = addTimes(res, a1, b4);
  res = addTimes(res, a1, b3);
  res = addTimes(res, a1, b2);
  res = addTimes(res, a1, b1);
  return res;
}

function multByMinValue(a){
  if ((lowBits_0(a) & 1) == 1) {
    return $clinit_63() , MIN_VALUE;
  }
   else {
    return $clinit_63() , ZERO;
  }
}

function neg(a){
  var newHigh, newLow;
  if (eq(a, ($clinit_63() , MIN_VALUE))) {
    return MIN_VALUE;
  }
  newHigh = -a[1];
  newLow = -a[0];
  if (newLow > 4294967295) {
    newLow -= 4294967296;
    newHigh += 4294967296;
  }
  if (newLow < 0) {
    newLow += 4294967296;
    newHigh -= 4294967296;
  }
  return [newLow, newHigh];
}

function neq(a, b){
  return a[0] != b[0] || a[1] != b[1];
}

function pwrAsDouble(n){
  if (n <= 30) {
    return 1 << n;
  }
   else {
    return pwrAsDouble(30) * pwrAsDouble(n - 30);
  }
}

function shl(a, n){
  var diff, newHigh, newLow, twoToN;
  n &= 63;
  if (eq(a, ($clinit_63() , MIN_VALUE))) {
    if (n == 0) {
      return a;
    }
     else {
      return ZERO;
    }
  }
  if (a[1] < 0) {
    return neg(shl(neg(a), n));
  }
  twoToN = pwrAsDouble(n);
  newHigh = a[1] * twoToN % 1.8446744073709552E19;
  newLow = a[0] * twoToN;
  diff = newLow - newLow % 4294967296;
  newHigh += diff;
  newLow -= diff;
  if (newHigh >= 9223372036854775807) {
    newHigh -= 1.8446744073709552E19;
  }
  return [newLow, newHigh];
}

function shr(a, n){
  var newHigh, newLow, shiftFact;
  n &= 63;
  shiftFact = pwrAsDouble(n);
  newHigh = a[1] / shiftFact;
  newLow = Math.floor(a[0] / shiftFact);
  return create_0(newLow, newHigh);
}

function shru(a, n){
  var sr;
  n &= 63;
  sr = shr(a, n);
  if (a[1] < 0) {
    sr = add_7(sr, shl(($clinit_63() , TWO), 63 - n));
  }
  return sr;
}

function sub(a, b){
  var newHigh, newLow;
  newHigh = a[1] - b[1];
  newLow = a[0] - b[0];
  return create_0(newLow, newHigh);
}

function toDouble(a){
  return a[1] + a[0];
}

function toDoubleRoundDown(a){
  var diff, magnitute, toSubtract;
  magnitute = round_int(Math.log(a[1]) / ($clinit_63() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toSubtract = (1 << diff) - 1;
    return a[1] + (a[0] - toSubtract);
  }
}

function toDoubleRoundUp(a){
  var diff, magnitute, toAdd;
  magnitute = round_int(Math.log(a[1]) / ($clinit_63() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toAdd = (1 << diff) - 1;
    return a[1] + (a[0] + toAdd);
  }
}

function toString_2(a){
  var digits, rem, res, zeroesNeeded;
  if (a[0] == 0 && a[1] == 0) {
    return '0';
  }
  if (eq(a, ($clinit_63() , MIN_VALUE))) {
    return '-9223372036854775808';
  }
  if (a[1] < 0) {
    return '-' + toString_2(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem[0] == 0 && rem[1] == 0)) {
    digits = '' + lowBits_0(mod(rem, fromInt(1000000000)));
    rem = div_0(rem, fromInt(1000000000));
    if (!(rem[0] == 0 && rem[1] == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; --zeroesNeeded) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return makeFromBits(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) ^ ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), lowBits_0(a) ^ lowBits_0(b));
}

function $clinit_62(){
  $clinit_62 = nullMethod;
  boxedValues = initDim(_3_3D_classLit, 0, 40, 256, 0);
}

var boxedValues;
function $clinit_63(){
  $clinit_63 = nullMethod;
  LN_2 = Math.log(2);
  MAX_VALUE = P7fffffffffffffff_longLit;
  MIN_VALUE = N8000000000000000_longLit;
  NEG_ONE = fromInt(-1);
  ONE = fromInt(1);
  TWO = fromInt(2);
  TWO_PWR_24 = P1000000_longLit;
  ZERO = fromInt(0);
}

var LN_2, MAX_VALUE, MIN_VALUE, NEG_ONE, ONE, TWO, TWO_PWR_24, ZERO;
function $CommandCanceledException(this$static){
  return this$static;
}

function getClass_40(){
  return Lcom_google_gwt_user_client_CommandCanceledException_2_classLit;
}

function CommandCanceledException(){
}

_ = CommandCanceledException.prototype = new RuntimeException();
_.getClass$ = getClass_40;
_.typeId$ = 59;
function $CommandExecutor(this$static){
  this$static.cancellationTimer = $CommandExecutor$1(new CommandExecutor$1(), this$static);
  this$static.commands = $ArrayList(new ArrayList());
  this$static.executionTimer = $CommandExecutor$2(new CommandExecutor$2(), this$static);
  this$static.iterator = $CommandExecutor$CircularIterator(new CommandExecutor$CircularIterator(), this$static);
  return this$static;
}

function $doCommandCanceled(this$static){
  var cmd;
  cmd = $getLast(this$static.iterator);
  $remove(this$static.iterator);
  if (cmd != null && canCast(cmd.typeId$, 14)) {
    $CommandCanceledException(new CommandCanceledException(), dynamicCast(cmd, 14));
  }
   else {
  }
  this$static.executing = false;
  $maybeStartExecutionTimer(this$static);
}

function $doExecuteCommands(this$static, startTimeMillis){
  var command, element, wasCanceled;
  wasCanceled = false;
  try {
    this$static.executing = true;
    this$static.iterator.end = this$static.commands.size;
    $schedule(this$static.cancellationTimer, 10000);
    while ($hasNext(this$static.iterator)) {
      element = $next(this$static.iterator);
      try {
        if (element == null) {
          return;
        }
        if (element != null && canCast(element.typeId$, 14)) {
          command = dynamicCast(element, 14);
          command.execute();
        }
         else {
        }
      }
       finally {
        wasCanceled = this$static.iterator.last == -1;
        if (wasCanceled) {
          return;
        }
        $remove(this$static.iterator);
      }
      if ((new Date()).getTime() - startTimeMillis >= 100) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel_0(this$static.cancellationTimer);
      this$static.executing = false;
      $maybeStartExecutionTimer(this$static);
    }
  }
}

function $maybeStartExecutionTimer(this$static){
  if (this$static.commands.size != 0 && !this$static.executionTimerPending && !this$static.executing) {
    this$static.executionTimerPending = true;
    $schedule(this$static.executionTimer, 1);
  }
}

function $submit(this$static, command){
  $add_8(this$static.commands, command);
  $maybeStartExecutionTimer(this$static);
}

function getClass_44(){
  return Lcom_google_gwt_user_client_CommandExecutor_2_classLit;
}

function CommandExecutor(){
}

_ = CommandExecutor.prototype = new Object_0();
_.getClass$ = getClass_44;
_.typeId$ = 0;
_.executing = false;
_.executionTimerPending = false;
function $clinit_68(){
  $clinit_68 = nullMethod;
  $clinit_79();
}

function $CommandExecutor$1(this$static, this$0){
  $clinit_68();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_41(){
  return Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit;
}

function run_2(){
  if (!this.this$0.executing) {
    return;
  }
  $doCommandCanceled(this.this$0);
}

function CommandExecutor$1(){
}

_ = CommandExecutor$1.prototype = new Timer();
_.getClass$ = getClass_41;
_.run = run_2;
_.typeId$ = 60;
_.this$0 = null;
function $clinit_69(){
  $clinit_69 = nullMethod;
  $clinit_79();
}

function $CommandExecutor$2(this$static, this$0){
  $clinit_69();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_42(){
  return Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit;
}

function run_3(){
  this.this$0.executionTimerPending = false;
  $doExecuteCommands(this.this$0, (new Date()).getTime());
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2.prototype = new Timer();
_.getClass$ = getClass_42;
_.run = run_3;
_.typeId$ = 61;
_.this$0 = null;
function $CommandExecutor$CircularIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $getLast(this$static){
  return $get_1(this$static.this$0.commands, this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = $get_1(this$static.this$0.commands, this$static.next++);
  if (this$static.next >= this$static.end) {
    this$static.next = 0;
  }
  return command;
}

function $remove(this$static){
  $remove_9(this$static.this$0.commands, this$static.last);
  --this$static.end;
  if (this$static.last <= this$static.next) {
    if (--this$static.next < 0) {
      this$static.next = 0;
    }
  }
  this$static.last = -1;
}

function getClass_43(){
  return Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit;
}

function hasNext(){
  return this.next < this.end;
}

function next_0(){
  return $next(this);
}

function remove_0(){
  $remove(this);
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator.prototype = new Object_0();
_.getClass$ = getClass_43;
_.hasNext = hasNext;
_.next_0 = next_0;
_.remove = remove_0;
_.typeId$ = 0;
_.end = 0;
_.last = -1;
_.next = 0;
_.this$0 = null;
function addEventPreview(preview){
  $maybeInitializeEventSystem();
  if (!sEventPreviewStack) {
    sEventPreviewStack = $ArrayList(new ArrayList());
  }
  $add_8(sEventPreviewStack, preview);
}

function dispatchEventImpl(evt, elem, listener){
  var prevCurrentEvent;
  if (elem == sCaptureElem) {
    if ($eventGetTypeInt(evt) == 8192) {
      sCaptureElem = null;
    }
  }
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  try {
    listener.onBrowserEvent(evt);
  }
   finally {
    currentEvent = prevCurrentEvent;
  }
}

function previewEvent(evt){
  var preview, ret;
  ret = true;
  if (!!sEventPreviewStack && sEventPreviewStack.size > 0) {
    preview = dynamicCast($get_1(sEventPreviewStack, sEventPreviewStack.size - 1), 15);
    if (!(ret = preview.onEventPreview(evt))) {
      evt.cancelBubble = true;
      evt.preventDefault();
    }
  }
  return ret;
}

function releaseCapture(elem){
  if (!!sCaptureElem && elem == sCaptureElem) {
    sCaptureElem = null;
  }
  $maybeInitializeEventSystem();
  $releaseCaptureImpl(elem);
}

function removeEventPreview(preview){
  if (sEventPreviewStack) {
    $remove_10(sEventPreviewStack, preview);
  }
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  captureElem = elem;
}

function sinkEvents(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem = null, sEventPreviewStack = null;
function $clinit_74(){
  $clinit_74 = nullMethod;
  commandExecutor = $CommandExecutor(new CommandExecutor());
}

function addCommand(cmd){
  $clinit_74();
  if (!cmd) {
    throw $NullPointerException(new NullPointerException(), 'cmd cannot be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function $clinit_77(){
  $clinit_77 = nullMethod;
  impl = ($clinit_86() , $clinit_87() , new HistoryImplStandard());
  if (!$init(impl)) {
    impl = null;
  }
}

function newItem(historyToken, issueEvent){
  $clinit_77();
  if (impl) {
    $newItem(impl, historyToken, issueEvent);
  }
}

var impl = null;
function getClass_45(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}

function onWindowClosed(){
  while (($clinit_79() , timers).size > 0) {
    $cancel_0(dynamicCast($get_1(timers, 0), 16));
  }
}

function onWindowClosing(){
  return null;
}

function Timer$1(){
}

_ = Timer$1.prototype = new Object_0();
_.getClass$ = getClass_45;
_.onWindowClosed = onWindowClosed;
_.onWindowClosing = onWindowClosing;
_.typeId$ = 62;
function addWindowCloseListener(listener){
  maybeInitializeHandlers();
  if (!closingListeners) {
    closingListeners = $ArrayList(new ArrayList());
  }
  $add_8(closingListeners, listener);
}

function fireClosedImpl(){
  var listener, listener$iterator;
  if (closingListeners) {
    for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), closingListeners); listener$iterator.i < listener$iterator.this$0.size_0();) {
      listener = dynamicCast($next_2(listener$iterator), 17);
      listener.onWindowClosed();
    }
  }
}

function fireClosingImpl(){
  var listener, listener$iterator, msg, ret;
  ret = null;
  if (closingListeners) {
    for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), closingListeners); listener$iterator.i < listener$iterator.this$0.size_0();) {
      listener = dynamicCast($next_2(listener$iterator), 17);
      msg = listener.onWindowClosing();
      ret = msg;
    }
  }
  return ret;
}

function init_0(){
  __gwt_initHandlers(function(){
  }
  , function(){
    return fireClosingImpl();
  }
  , function(){
    fireClosedImpl();
  }
  );
}

function maybeInitializeHandlers(){
  if (!handlersAreInitialized) {
    init_0();
    handlersAreInitialized = true;
  }
}

var closingListeners = null, handlersAreInitialized = false;
function $eventGetTypeInt(evt){
  switch (evt.type) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
    case 'contextmenu':
      return 262144;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function isMyListener(object){
  return object != null && canCast(object.typeId$, 18) && !(object != null && (object.typeMarker$ != nullMethod && object.typeId$ != 2));
}

var eventSystemIsInitialized = false;
function $eventGetFromElement(evt){
  if (evt.type == 'mouseover')
    return evt.relatedTarget;
  if (evt.type == 'mouseout')
    return evt.target;
  return null;
}

function $eventGetToElement(evt){
  if (evt.type == 'mouseover')
    return evt.target;
  if (evt.type == 'mouseout')
    return evt.relatedTarget;
  return null;
}

function $getChild(elem, index){
  var count = 0, child = elem.firstChild;
  while (child) {
    var next = child.nextSibling;
    if (child.nodeType == 1) {
      if (index == count)
        return child;
      ++count;
    }
    child = next;
  }
  return null;
}

function $getChildCount(elem){
  var count = 0, child = elem.firstChild;
  while (child) {
    if (child.nodeType == 1)
      ++count;
    child = child.nextSibling;
  }
  return count;
}

function $initEventSystem(){
  dispatchCapturedMouseEvent = function(evt){
    if (dispatchCapturedEvent(evt)) {
      var cap = captureElem;
      if (cap && cap.__listener) {
        if (isMyListener(cap.__listener)) {
          dispatchEventImpl(evt, cap, cap.__listener);
          evt.stopPropagation();
        }
      }
    }
  }
  ;
  dispatchCapturedEvent = function(evt){
    if (!previewEvent(evt)) {
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }
  ;
  dispatchEvent_0 = function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentNode;
    }
    if (curElem && curElem.nodeType != 1) {
      curElem = null;
    }
    if (listener) {
      if (isMyListener(listener)) {
        dispatchEventImpl(evt, curElem, listener);
      }
    }
  }
  ;
  $wnd.addEventListener('click', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('dblclick', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousedown', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseup', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousemove', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseover', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseout', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousewheel', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('keydown', dispatchCapturedEvent, true);
  $wnd.addEventListener('keyup', dispatchCapturedEvent, true);
  $wnd.addEventListener('keypress', dispatchCapturedEvent, true);
}

function $insertChild(parent, toAdd, index){
  var count = 0, child = parent.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent.insertBefore(toAdd, before);
}

function $releaseCaptureImpl(elem){
  if (elem === captureElem) {
    captureElem = null;
  }
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

var captureElem = null, dispatchCapturedEvent = null, dispatchCapturedMouseEvent = null, dispatchEvent_0 = null;
function $sinkEventsImpl(elem, bits){
  elem.__eventBits = bits;
  elem.onclick = bits & 1?dispatchEvent_0:null;
  elem.ondblclick = bits & 2?dispatchEvent_0:null;
  elem.onmousedown = bits & 4?dispatchEvent_0:null;
  elem.onmouseup = bits & 8?dispatchEvent_0:null;
  elem.onmouseover = bits & 16?dispatchEvent_0:null;
  elem.onmouseout = bits & 32?dispatchEvent_0:null;
  elem.onmousemove = bits & 64?dispatchEvent_0:null;
  elem.onkeydown = bits & 128?dispatchEvent_0:null;
  elem.onkeypress = bits & 256?dispatchEvent_0:null;
  elem.onkeyup = bits & 512?dispatchEvent_0:null;
  elem.onchange = bits & 1024?dispatchEvent_0:null;
  elem.onfocus = bits & 2048?dispatchEvent_0:null;
  elem.onblur = bits & 4096?dispatchEvent_0:null;
  elem.onlosecapture = bits & 8192?dispatchEvent_0:null;
  elem.onscroll = bits & 16384?dispatchEvent_0:null;
  elem.onload = bits & 32768?dispatchEvent_0:null;
  elem.onerror = bits & 65536?dispatchEvent_0:null;
  elem.onmousewheel = bits & 131072?dispatchEvent_0:null;
  elem.oncontextmenu = bits & 262144?dispatchEvent_0:null;
}

function $clinit_85(){
  $clinit_85 = nullMethod;
  documentRoot = $getDocumentRoot(($clinit_85() , new DocumentRootImpl()));
}

function $getDocumentRoot(){
  return $doc.compatMode == 'CSS1Compat'?$doc.documentElement:$doc.body;
}

function getClass_47(){
  return Lcom_google_gwt_user_client_impl_DocumentRootImpl_2_classLit;
}

function DocumentRootImpl(){
}

_ = DocumentRootImpl.prototype = new Object_0();
_.getClass$ = getClass_47;
_.typeId$ = 0;
var documentRoot;
function $clinit_87(){
  $clinit_87 = nullMethod;
  historyListeners = $ArrayList(new ArrayList());
}

function $newItem(this$static, historyToken, issueEvent){
  historyToken = historyToken == null?'':historyToken;
  if (!$equals_0(historyToken, $wnd.__gwt_historyToken || '')) {
    $wnd.__gwt_historyToken = historyToken;
    $wnd.location.hash = this$static.encodeFragment(historyToken);
    if (issueEvent) {
      fireHistoryChangedImpl();
    }
  }
}

function decodeFragment(encodedFragment){
  return decodeURI(encodedFragment.replace('%23', '#'));
}

function encodeFragment(fragment){
  return encodeURI(fragment).replace('#', '%23');
}

function fireHistoryChangedImpl(){
  var listener$array, listener$index, listener$max, listenersToInvoke;
  listenersToInvoke = dynamicCast($toArray(historyListeners, initDim(_3Lcom_google_gwt_user_client_HistoryListener_2_classLit, 136, 47, historyListeners.size, 0)), 19);
  for (listener$array = listenersToInvoke , listener$index = 0 , listener$max = listener$array.length; listener$index < listener$max; ++listener$index) {
    null.nullMethod();
  }
}

function getClass_49(){
  return Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit;
}

function newItemOnEvent(historyToken){
  historyToken = historyToken == null?'':historyToken;
  if (!$equals_0(historyToken, $wnd.__gwt_historyToken || '')) {
    $wnd.__gwt_historyToken = historyToken;
    fireHistoryChangedImpl();
  }
}

function HistoryImpl(){
}

_ = HistoryImpl.prototype = new Object_0();
_.decodeFragment = decodeFragment;
_.encodeFragment = encodeFragment;
_.getClass$ = getClass_49;
_.newItemOnEvent = newItemOnEvent;
_.typeId$ = 0;
var historyListeners;
function $clinit_86(){
  $clinit_86 = nullMethod;
  $clinit_87();
}

function $init(this$static){
  var token_0 = '';
  var hash_0 = $wnd.location.hash;
  if (hash_0.length > 0) {
    token_0 = this$static.decodeFragment(hash_0.substring(1));
  }
  $wnd.__gwt_historyToken = token_0;
  var historyImpl = this$static;
  $wnd.__checkHistory = function(){
    $wnd.setTimeout($wnd.__checkHistory, 250);
    var token = '', hash = $wnd.location.hash;
    if (hash.length > 0) {
      token = historyImpl.decodeFragment(hash.substring(1));
    }
    historyImpl.newItemOnEvent(token);
  }
  ;
  $wnd.__checkHistory();
  return true;
}

function getClass_48(){
  return Lcom_google_gwt_user_client_impl_HistoryImplStandard_2_classLit;
}

function HistoryImplStandard(){
}

_ = HistoryImplStandard.prototype = new HistoryImpl();
_.getClass$ = getClass_48;
_.typeId$ = 0;
function getBodyElement(){
  if (body == null) {
    body = $doc.compatMode == 'CSS1Compat' && opera.version() >= 9.5?$doc.documentElement:$doc.body;
  }
  return body;
}

var body = null;
function $add_2(this$static, child, container){
  $removeFromParent(child);
  $add_6(this$static.children, child);
  container.appendChild(child.getElement_0());
  $setParent(child, this$static);
}

function $remove_1(this$static, w){
  var elem;
  if (w.parent != this$static) {
    return false;
  }
  $setParent(w, null);
  elem = w.getElement_0();
  $getParentElement(elem).removeChild(elem);
  $remove_5(this$static.children, w);
  return true;
}

function getClass_57(){
  return Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit;
}

function iterator_0(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator(), this.children);
}

function remove_2(w){
  return $remove_1(this, w);
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel();
_.getClass$ = getClass_57;
_.iterator_0 = iterator_0;
_.remove_1 = remove_2;
_.typeId$ = 63;
function $add_0(this$static, w){
  $add_2(this$static, w, this$static.element_0);
}

function $add_1(this$static, w, left, top){
  $removeFromParent(w);
  this$static.setWidgetPositionImpl(w, left, top);
  $add_2(this$static, w, this$static.element_0);
}

function $remove_0(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  if (removed) {
    changeToStaticPositioning(w.getElement_0());
  }
  return removed;
}

function $setWidgetPositionImpl(w, left, top){
  var h;
  h = w.element_0;
  if (left == -1 && top == -1) {
    changeToStaticPositioning(h);
  }
   else {
    h.style['position'] = 'absolute';
    h.style['left'] = left + 'px';
    h.style['top'] = top + 'px';
  }
}

function add_8(w){
  $add_2(this, w, this.element_0);
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

function getClass_50(){
  return Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit;
}

function remove_1(w){
  return $remove_0(this, w);
}

function setWidgetPositionImpl(w, left, top){
  $setWidgetPositionImpl(w, left, top);
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel();
_.add_1 = add_8;
_.getClass$ = getClass_50;
_.remove_1 = remove_1;
_.setWidgetPositionImpl = setWidgetPositionImpl;
_.typeId$ = 64;
function getClass_51(){
  return Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit;
}

function AbstractImagePrototype(){
}

_ = AbstractImagePrototype.prototype = new Object_0();
_.getClass$ = getClass_51;
_.typeId$ = 0;
function $CellPanel(this$static){
  this$static.children = $WidgetCollection(new WidgetCollection(), this$static);
  this$static.table = $doc.createElement('table');
  this$static.body_0 = $doc.createElement('tbody');
  this$static.table.appendChild(this$static.body_0);
  this$static.element_0 = this$static.table;
  return this$static;
}

function getClass_54(){
  return Lcom_google_gwt_user_client_ui_CellPanel_2_classLit;
}

function CellPanel(){
}

_ = CellPanel.prototype = new ComplexPanel();
_.getClass$ = getClass_54;
_.typeId$ = 65;
_.body_0 = null;
_.table = null;
function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next_0();
    if (o == null?t == null:equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function $toString_3(this$static){
  var comma, iter, sb;
  sb = $StringBuffer(new StringBuffer());
  comma = null;
  $append_0(sb.builder, '[');
  iter = this$static.iterator_0();
  while (iter.hasNext()) {
    if (comma != null) {
      $append_0(sb.builder, comma);
    }
     else {
      comma = ', ';
    }
    $append(sb, '' + iter.next_0());
  }
  $append_0(sb.builder, ']');
  return $toString_2(sb.builder);
}

function add_13(o){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'Add not supported on this collection');
}

function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator_0(), o);
  return !!iter;
}

function getClass_133(){
  return Ljava_util_AbstractCollection_2_classLit;
}

function toString_12(){
  return $toString_3(this);
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0();
_.add_2 = add_13;
_.contains_0 = contains;
_.getClass$ = getClass_133;
_.toString$ = toString_12;
_.typeId$ = 66;
function add_15(obj){
  this.add_0(this.size_0(), obj);
  return true;
}

function add_14(index, element){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'Add not supported on this list');
}

function checkIndex(index, size){
  if (index < 0 || index >= size) {
    indexOutOfBounds(index, size);
  }
}

function equals_4(o){
  var elem, elemOther, iter, iterOther, other;
  if ((o == null?null:o) === (this == null?null:this)) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 43))) {
    return false;
  }
  other = dynamicCast(o, 43);
  if (this.size_0() != other.size_0()) {
    return false;
  }
  iter = this.iterator_0();
  iterOther = other.iterator_0();
  while (iter.i < iter.this$0.size_0()) {
    elem = $next_2(iter);
    elemOther = $next_2(iterOther);
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function getClass_140(){
  return Ljava_util_AbstractList_2_classLit;
}

function hashCode_5(){
  var iter, k, obj;
  k = 1;
  iter = this.iterator_0();
  while (iter.i < iter.this$0.size_0()) {
    obj = $next_2(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}

function indexOutOfBounds(index, size){
  throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Index: ' + index + ', Size: ' + size);
}

function iterator_5(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this);
}

function remove_14(index){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'Remove not supported on this list');
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection();
_.add_2 = add_15;
_.add_0 = add_14;
_.equals$ = equals_4;
_.getClass$ = getClass_140;
_.hashCode$ = hashCode_5;
_.iterator_0 = iterator_5;
_.remove_0 = remove_14;
_.typeId$ = 67;
function $ArrayList(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
  return this$static;
}

function $add_8(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $add_7(this$static, index, o){
  if (index < 0 || index > this$static.size) {
    indexOutOfBounds(index, this$static.size);
  }
  this$static.array.splice(index, 0, o);
  ++this$static.size;
}

function $clearImpl_0(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
}

function $get_1(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $indexOf_2(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function $remove_9(this$static, index){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  this$static.array.splice(index, 1);
  --this$static.size;
  return previous;
}

function $remove_10(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  $remove_9(this$static, i);
  return true;
}

function $set(this$static, index, o){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  setCheck(this$static.array, index, o);
  return previous;
}

function $toArray(this$static, out){
  var i, a, result;
  if (out.length < this$static.size) {
    out = (a = out , result = createFromSeed(0, this$static.size) , initValues(a.arrayClass$, a.typeId$, a.queryId$, result) , result);
  }
  for (i = 0; i < this$static.size; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  if (out.length > this$static.size) {
    setCheck(out, this$static.size, null);
  }
  return out;
}

function add_17(o){
  return setCheck(this.array, this.size++, o) , true;
}

function add_16(index, o){
  $add_7(this, index, o);
}

function contains_2(o){
  return $indexOf_2(this, o, 0) != -1;
}

function get_1(index){
  return checkIndex(index, this.size) , this.array[index];
}

function getClass_146(){
  return Ljava_util_ArrayList_2_classLit;
}

function remove_16(index){
  return $remove_9(this, index);
}

function size_2(){
  return this.size;
}

function ArrayList(){
}

_ = ArrayList.prototype = new AbstractList();
_.add_2 = add_17;
_.add_0 = add_16;
_.contains_0 = contains_2;
_.get = get_1;
_.getClass$ = getClass_146;
_.remove_0 = remove_16;
_.size_0 = size_2;
_.typeId$ = 68;
_.array = null;
_.size = 0;
function $ChangeListenerCollection(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
  return this$static;
}

function $fireChange(this$static, sender){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 20);
    listener.onChange_0(sender);
  }
}

function getClass_55(){
  return Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit;
}

function ChangeListenerCollection(){
}

_ = ChangeListenerCollection.prototype = new ArrayList();
_.getClass$ = getClass_55;
_.typeId$ = 69;
function $ClickListenerCollection(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
  return this$static;
}

function $fireClick(this$static, sender){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 21);
    listener.onClick(sender);
  }
}

function getClass_56(){
  return Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit;
}

function ClickListenerCollection(){
}

_ = ClickListenerCollection.prototype = new ArrayList();
_.getClass$ = getClass_56;
_.typeId$ = 70;
function $clinit_107(){
  $clinit_107 = nullMethod;
  CENTER = new DockPanel$DockLayoutConstant();
  LINE_START = new DockPanel$DockLayoutConstant();
  LINE_END = new DockPanel$DockLayoutConstant();
  EAST = new DockPanel$DockLayoutConstant();
  NORTH = new DockPanel$DockLayoutConstant();
  SOUTH = new DockPanel$DockLayoutConstant();
  WEST = new DockPanel$DockLayoutConstant();
}

function $DockPanel(this$static){
  $clinit_107();
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_128() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_132() , ALIGN_TOP);
  this$static.table['cellSpacing'] = 0;
  this$static.table['cellPadding'] = 0;
  return this$static;
}

function $add_3(this$static, widget, direction){
  var layout;
  if (direction == CENTER) {
    if (widget == this$static.center) {
      return;
    }
     else if (this$static.center) {
      throw $IllegalArgumentException(new IllegalArgumentException(), 'Only one CENTER widget may be added');
    }
  }
  $removeFromParent(widget);
  $add_6(this$static.children, widget);
  if (direction == CENTER) {
    this$static.center = widget;
  }
  layout = $DockPanel$LayoutData(new DockPanel$LayoutData(), direction);
  widget.layoutData = layout;
  $setCellHorizontalAlignment(widget, this$static.horzAlign);
  $setCellVerticalAlignment(widget, this$static.vertAlign);
  $realizeTable(this$static);
  $setParent(widget, this$static);
}

function $realizeTable(this$static){
  var bodyElem, centerTd, child, colCount, dir, i, it, layout, logicalLeftCol, logicalRightCol, northRow, row, rowCount, rows, southRow, td;
  bodyElem = this$static.body_0;
  while ($getChildCount(bodyElem) > 0) {
    bodyElem.removeChild($getChild(bodyElem, 0));
  }
  rowCount = 1;
  colCount = 1;
  for (it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator(), this$static.children); it.index_0 < it.this$0.size - 1;) {
    child = $next_0(it);
    dir = child.layoutData.direction;
    if (dir == NORTH || dir == SOUTH) {
      ++rowCount;
    }
     else if (dir == EAST || dir == WEST || dir == LINE_START || dir == LINE_END) {
      ++colCount;
    }
  }
  rows = initDim(_3Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit, 0, 48, rowCount, 0);
  for (i = 0; i < rowCount; ++i) {
    rows[i] = new DockPanel$TmpRow();
    rows[i].tr = $doc.createElement('tr');
    bodyElem.appendChild(rows[i].tr);
  }
  logicalLeftCol = 0;
  logicalRightCol = colCount - 1;
  northRow = 0;
  southRow = rowCount - 1;
  centerTd = null;
  for (it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator(), this$static.children); it.index_0 < it.this$0.size - 1;) {
    child = $next_0(it);
    layout = child.layoutData;
    td = $doc.createElement('td');
    layout.td = td;
    layout.td['align'] = layout.hAlign;
    layout.td.style['verticalAlign'] = layout.vAlign;
    layout.td['width'] = layout.width;
    layout.td['height'] = '';
    if (layout.direction == NORTH) {
      $insertChild(rows[northRow].tr, td, rows[northRow].center);
      td.appendChild(child.getElement_0());
      td['colSpan'] = logicalRightCol - logicalLeftCol + 1;
      ++northRow;
    }
     else if (layout.direction == SOUTH) {
      $insertChild(rows[southRow].tr, td, rows[southRow].center);
      td.appendChild(child.getElement_0());
      td['colSpan'] = logicalRightCol - logicalLeftCol + 1;
      --southRow;
    }
     else if (layout.direction == CENTER) {
      centerTd = td;
    }
     else if ($shouldAddToLogicalLeftOfTable(layout.direction)) {
      row = rows[northRow];
      $insertChild(row.tr, td, row.center++);
      td.appendChild(child.getElement_0());
      td['rowSpan'] = southRow - northRow + 1;
      ++logicalLeftCol;
    }
     else if ($shouldAddToLogicalRightOfTable(layout.direction)) {
      row = rows[northRow];
      $insertChild(row.tr, td, row.center);
      td.appendChild(child.getElement_0());
      td['rowSpan'] = southRow - northRow + 1;
      --logicalRightCol;
    }
  }
  if (this$static.center) {
    row = rows[northRow];
    $insertChild(row.tr, centerTd, row.center);
    centerTd.appendChild(this$static.center.getElement_0());
  }
}

function $remove_2(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  if (removed) {
    if (w == this$static.center) {
      this$static.center = null;
    }
    $realizeTable(this$static);
  }
  return removed;
}

function $setCellHorizontalAlignment(w, align){
  var data;
  data = w.layoutData;
  data.hAlign = align.textAlignString;
  if (data.td) {
    data.td['align'] = align.textAlignString;
  }
}

function $setCellVerticalAlignment(w, align){
  var data;
  data = w.layoutData;
  data.vAlign = align.verticalAlignString;
  if (data.td) {
    data.td.style['verticalAlign'] = align.verticalAlignString;
  }
}

function $setCellWidth(w, width){
  var data;
  data = w.layoutData;
  data.width = width;
  if (data.td) {
    data.td.style['width'] = data.width;
  }
}

function $shouldAddToLogicalLeftOfTable(widgetDirection){
  if (widgetDirection == LINE_START) {
    return true;
  }
  return widgetDirection == WEST;
}

function $shouldAddToLogicalRightOfTable(widgetDirection){
  if (widgetDirection == LINE_END) {
    return true;
  }
  return widgetDirection == EAST;
}

function getClass_65(){
  return Lcom_google_gwt_user_client_ui_DockPanel_2_classLit;
}

function remove_4(w){
  return $remove_2(this, w);
}

function DockPanel(){
}

_ = DockPanel.prototype = new CellPanel();
_.getClass$ = getClass_65;
_.remove_1 = remove_4;
_.typeId$ = 71;
_.center = null;
var CENTER, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
function getClass_62(){
  return Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit;
}

function DockPanel$DockLayoutConstant(){
}

_ = DockPanel$DockLayoutConstant.prototype = new Object_0();
_.getClass$ = getClass_62;
_.typeId$ = 0;
function $DockPanel$LayoutData(this$static, dir){
  this$static.hAlign = ($clinit_128() , ALIGN_DEFAULT).textAlignString;
  this$static.vAlign = ($clinit_132() , ALIGN_TOP).verticalAlignString;
  this$static.direction = dir;
  return this$static;
}

function getClass_63(){
  return Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit;
}

function DockPanel$LayoutData(){
}

_ = DockPanel$LayoutData.prototype = new Object_0();
_.getClass$ = getClass_63;
_.typeId$ = 0;
_.direction = null;
_.td = null;
_.width = '';
function getClass_64(){
  return Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit;
}

function DockPanel$TmpRow(){
}

_ = DockPanel$TmpRow.prototype = new Object_0();
_.getClass$ = getClass_64;
_.typeId$ = 72;
_.center = 0;
_.tr = null;
function $HTMLTable(this$static){
  this$static.widgetMap = $HTMLTable$WidgetMapper(new HTMLTable$WidgetMapper());
  this$static.tableElem = $doc.createElement('table');
  this$static.bodyElem = $doc.createElement('tbody');
  this$static.tableElem.appendChild(this$static.bodyElem);
  this$static.element_0 = this$static.tableElem;
  return this$static;
}

function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = this$static.getCellCount(row);
  if (cellSize <= column) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Column index: ' + column + ', Column size: ' + this$static.getCellCount(row));
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.getRowCount();
  if (row >= rowSize || row < 0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $clear(this$static){
  var child, col, row;
  for (row = 0; row < this$static.bodyElem.rows.length; ++row) {
    for (col = 0; col < ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length); ++col) {
      child = $getWidgetImpl(this$static, row, col);
      if (child) {
        $remove_3(this$static, child);
      }
    }
  }
}

function $getWidget_0(this$static, row, column){
  $checkCellBounds(this$static, row, column);
  return $getWidgetImpl(this$static, row, column);
}

function $getWidgetImpl(this$static, row, column){
  var child, e;
  e = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column];
  child = $getFirstChildElement(e);
  if (!child) {
    return null;
  }
   else {
    return $getWidget(this$static.widgetMap, child);
  }
}

function $insertCell(this$static, row, column){
  var td, tr;
  tr = this$static.bodyElem.rows[row];
  td = this$static.createCell();
  $insertChild(tr, td, column);
}

function $insertRow(this$static, beforeRow){
  var tr;
  if (beforeRow != this$static.bodyElem.rows.length) {
    $checkRowBounds(this$static, beforeRow);
  }
  tr = $doc.createElement('tr');
  $insertChild(this$static.bodyElem, tr, beforeRow);
  return beforeRow;
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = $getFirstChildElement(td);
  widget = null;
  if (maybeChild) {
    widget = $getWidget(this$static.widgetMap, maybeChild);
  }
  if (widget) {
    $remove_3(this$static, widget);
    return true;
  }
   else {
    if (clearInnerHTML) {
      td.innerHTML = '';
    }
    return false;
  }
}

function $remove_3(this$static, widget){
  var elem;
  if (widget.parent != this$static) {
    return false;
  }
  $setParent(widget, null);
  elem = widget.getElement_0();
  $getParentElement(elem).removeChild(elem);
  $removeWidgetByElement(this$static.widgetMap, elem);
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount, td;
  columnCount = this$static.numColumns;
  for (column = 0; column < columnCount; ++column) {
    td = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column];
    $internalClearCell(this$static, td, false);
  }
  this$static.bodyElem.removeChild(this$static.bodyElem.rows[row]);
}

function $setColumnFormatter(this$static, formatter){
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setHTML_0(this$static, row, column, html){
  var td_0, td;
  this$static.prepareCell(row, column);
  td_0 = (td = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td, html == null) , td);
  if (html != null) {
    td_0.innerHTML = html || '';
  }
}

function $setText_3(this$static, row, column, text){
  var td_0, td;
  $prepareCell(this$static, row, column);
  td_0 = (td = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td, text == null) , td);
  if (text != null) {
    $setInnerText(td_0, text);
  }
}

function $setWidget_0(this$static, row, column, widget){
  var td_0, td;
  this$static.prepareCell(row, column);
  if (widget) {
    $removeFromParent(widget);
    td_0 = (td = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td, true) , td);
    $putWidget(this$static.widgetMap, widget);
    td_0.appendChild(widget.getElement_0());
    $setParent(widget, this$static);
  }
}

function createCell_0(){
  return $doc.createElement('td');
}

function getClass_78(){
  return Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit;
}

function iterator_2(){
  return $HTMLTable$WidgetMapper$1(new HTMLTable$WidgetMapper$1(), this.widgetMap);
}

function onBrowserEvent_3(event_0){
  $eventGetTypeInt(event_0);
}

function prepareColumn_0(column){
}

function remove_6(widget){
  return $remove_3(this, widget);
}

function HTMLTable(){
}

_ = HTMLTable.prototype = new Panel();
_.createCell = createCell_0;
_.getClass$ = getClass_78;
_.iterator_0 = iterator_2;
_.onBrowserEvent = onBrowserEvent_3;
_.prepareColumn = prepareColumn_0;
_.remove_1 = remove_6;
_.typeId$ = 73;
_.bodyElem = null;
_.cellFormatter = null;
_.columnFormatter = null;
_.rowFormatter = null;
_.tableElem = null;
function $FlexTable(this$static){
  $HTMLTable(this$static);
  this$static.cellFormatter = $FlexTable$FlexCellFormatter(new FlexTable$FlexCellFormatter(), this$static);
  this$static.rowFormatter = $HTMLTable$RowFormatter(new HTMLTable$RowFormatter(), this$static);
  $setColumnFormatter(this$static, $HTMLTable$ColumnFormatter(new HTMLTable$ColumnFormatter(), this$static));
  return this$static;
}

function $prepareCell(this$static, row, column){
  var cellCount, required;
  $prepareRow(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Cannot create a column with a negative index: ' + column);
  }
  cellCount = ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length);
  required = column + 1 - cellCount;
  if (required > 0) {
    addCells(this$static.bodyElem, row, required);
  }
}

function $prepareRow(this$static, row){
  var i, rowCount;
  if (row < 0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Cannot create a row with a negative index: ' + row);
  }
  rowCount = this$static.bodyElem.rows.length;
  for (i = rowCount; i <= row; ++i) {
    $insertRow(this$static, i);
  }
}

function addCells(table, row, num){
  var rowElem = table.rows[row];
  for (var i = 0; i < num; i++) {
    var cell = $doc.createElement('td');
    rowElem.appendChild(cell);
  }
}

function getCellCount(row){
  return $checkRowBounds(this, row) , this.bodyElem.rows[row].cells.length;
}

function getClass_67(){
  return Lcom_google_gwt_user_client_ui_FlexTable_2_classLit;
}

function getRowCount(){
  return this.bodyElem.rows.length;
}

function prepareCell(row, column){
  $prepareCell(this, row, column);
}

function prepareRow(row){
  $prepareRow(this, row);
}

function FlexTable(){
}

_ = FlexTable.prototype = new HTMLTable();
_.getCellCount = getCellCount;
_.getClass$ = getClass_67;
_.getRowCount = getRowCount;
_.prepareCell = prepareCell;
_.prepareRow = prepareRow;
_.typeId$ = 74;
function $HTMLTable$CellFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $addStyleName_1(this$static, row, column, styleName){
  var td;
  this$static.this$0.prepareCell(row, column);
  td = this$static.this$0.bodyElem.rows[row].cells[column];
  setStyleName_1(td, styleName, true);
}

function $getElement_0(this$static, row, column){
  $checkCellBounds(this$static.this$0, row, column);
  return this$static.this$0.bodyElem.rows[row].cells[column];
}

function $setStyleName_1(this$static, row, column, styleName){
  this$static.this$0.prepareCell(row, column);
  this$static.this$0.bodyElem.rows[row].cells[column]['className'] = styleName;
}

function getClass_72(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit;
}

function HTMLTable$CellFormatter(){
}

_ = HTMLTable$CellFormatter.prototype = new Object_0();
_.getClass$ = getClass_72;
_.typeId$ = 0;
_.this$0 = null;
function $FlexTable$FlexCellFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_66(){
  return Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit;
}

function FlexTable$FlexCellFormatter(){
}

_ = FlexTable$FlexCellFormatter.prototype = new HTMLTable$CellFormatter();
_.getClass$ = getClass_66;
_.typeId$ = 0;
function $FocusListenerCollection(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
  return this$static;
}

function $fireFocus(this$static){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 22);
    $addStyleDependentName_0(listener.this$0, 'focus');
  }
}

function $fireFocusEvent(this$static, event_0){
  switch ($eventGetTypeInt(event_0)) {
    case 2048:
      $fireFocus(this$static);
      break;
    case 4096:
      $fireLostFocus(this$static);
  }
}

function $fireLostFocus(this$static){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 22);
    $removeStyleDependentName(listener.this$0, 'focus');
  }
}

function getClass_68(){
  return Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit;
}

function FocusListenerCollection(){
}

_ = FocusListenerCollection.prototype = new ArrayList();
_.getClass$ = getClass_68;
_.typeId$ = 75;
function $Grid_0(this$static, rows, columns){
  $HTMLTable(this$static);
  this$static.cellFormatter = $HTMLTable$CellFormatter(new HTMLTable$CellFormatter(), this$static);
  this$static.rowFormatter = $HTMLTable$RowFormatter(new HTMLTable$RowFormatter(), this$static);
  $setColumnFormatter(this$static, $HTMLTable$ColumnFormatter(new HTMLTable$ColumnFormatter(), this$static));
  $resizeColumns(this$static, columns);
  $resizeRows(this$static, rows);
  return this$static;
}

function $prepareRow_0(this$static, row){
  if (row < 0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Cannot access a row with a negative index: ' + row);
  }
  if (row >= this$static.numRows) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Row index: ' + row + ', Row size: ' + this$static.numRows);
  }
}

function $resizeColumns(this$static, columns){
  var i, j, td_1, tr_0, td_0, td, tr;
  if (this$static.numColumns == columns) {
    return;
  }
  if (columns < 0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Cannot set number of columns to ' + columns);
  }
  if (this$static.numColumns > columns) {
    for (i = 0; i < this$static.numRows; ++i) {
      for (j = this$static.numColumns - 1; j >= columns; --j) {
        $checkCellBounds(this$static, i, j);
        td_1 = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[i].cells[j] , $internalClearCell(this$static, td_0, false) , td_0);
        tr_0 = this$static.bodyElem.rows[i];
        tr_0.removeChild(td_1);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; ++i) {
      for (j = this$static.numColumns; j < columns; ++j) {
        tr = this$static.bodyElem.rows[i];
        td = this$static.createCell();
        $insertChild(tr, td, j);
      }
    }
  }
  this$static.numColumns = columns;
}

function $resizeRows(this$static, rows){
  if (this$static.numRows == rows) {
    return;
  }
  if (rows < 0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Cannot set number of rows to ' + rows);
  }
  if (this$static.numRows < rows) {
    addRows(this$static.bodyElem, rows - this$static.numRows, this$static.numColumns);
    this$static.numRows = rows;
  }
   else {
    while (this$static.numRows > rows) {
      $removeRow(this$static, --this$static.numRows);
    }
  }
}

function addRows(table, rows, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

function createCell(){
  var td;
  td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  return td;
}

function getCellCount_0(row){
  return this.numColumns;
}

function getClass_71(){
  return Lcom_google_gwt_user_client_ui_Grid_2_classLit;
}

function getRowCount_0(){
  return this.numRows;
}

function prepareCell_0(row, column){
  $prepareRow_0(this, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Cannot access a column with a negative index: ' + column);
  }
  if (column >= this.numColumns) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Column index: ' + column + ', Column size: ' + this.numColumns);
  }
}

function prepareColumn(column){
  if (column < 0) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Cannot access a column with a negative index: ' + column);
  }
  if (column >= this.numColumns) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Column index: ' + column + ', Column size: ' + this.numColumns);
  }
}

function prepareRow_0(row){
  $prepareRow_0(this, row);
}

function Grid(){
}

_ = Grid.prototype = new HTMLTable();
_.createCell = createCell;
_.getCellCount = getCellCount_0;
_.getClass$ = getClass_71;
_.getRowCount = getRowCount_0;
_.prepareCell = prepareCell_0;
_.prepareColumn = prepareColumn;
_.prepareRow = prepareRow_0;
_.typeId$ = 76;
_.numColumns = 0;
_.numRows = 0;
function $HTMLTable$ColumnFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $addStyleName_2(this$static, col, styleName){
  setStyleName_1($ensureColumn(this$static, col), styleName, true);
}

function $ensureColumn(this$static, col){
  var colElement, i, num;
  this$static.this$0.prepareColumn(col);
  $prepareColumnGroup(this$static);
  num = $getChildCount(this$static.columnGroup);
  if (num <= col) {
    colElement = null;
    for (i = num; i <= col; ++i) {
      colElement = $doc.createElement('col');
      this$static.columnGroup.appendChild(colElement);
    }
    return colElement;
  }
  return $getChild(this$static.columnGroup, col);
}

function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = $doc.createElement('colgroup');
    $insertChild(this$static.this$0.tableElem, this$static.columnGroup, 0);
    this$static.columnGroup.appendChild($doc.createElement('col'));
  }
}

function getClass_73(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit;
}

function HTMLTable$ColumnFormatter(){
}

_ = HTMLTable$ColumnFormatter.prototype = new Object_0();
_.getClass$ = getClass_73;
_.typeId$ = 0;
_.columnGroup = null;
_.this$0 = null;
function $HTMLTable$RowFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $addStyleName_3(this$static, row, styleName){
  setStyleName_1((this$static.this$0.prepareRow(row) , this$static.this$0.bodyElem.rows[row]), styleName, true);
}

function $setStyleName_2(this$static, row, styleName){
  (this$static.this$0.prepareRow(row) , this$static.this$0.bodyElem.rows[row])['className'] = styleName;
}

function getClass_74(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2_classLit;
}

function HTMLTable$RowFormatter(){
}

_ = HTMLTable$RowFormatter.prototype = new Object_0();
_.getClass$ = getClass_74;
_.typeId$ = 0;
_.this$0 = null;
function $HTMLTable$WidgetMapper(this$static){
  this$static.widgetList = $ArrayList(new ArrayList());
  return this$static;
}

function $getWidget(this$static, elem){
  var index_0, index;
  index_0 = (index = elem['__widgetID'] , index == null?-1:index);
  if (index_0 < 0) {
    return null;
  }
  return dynamicCast($get_1(this$static.widgetList, index_0), 2);
}

function $putWidget(this$static, widget){
  var index;
  if (!this$static.freeList) {
    index = this$static.widgetList.size;
    $add_8(this$static.widgetList, widget);
  }
   else {
    index = this$static.freeList.index_0;
    $set(this$static.widgetList, index, widget);
    this$static.freeList = this$static.freeList.next;
  }
  widget.getElement_0()['__widgetID'] = index;
}

function $removeWidgetByElement(this$static, elem){
  var index_0, index;
  index_0 = (index = elem['__widgetID'] , index == null?-1:index);
  elem['__widgetID'] = null;
  $set(this$static.widgetList, index_0, null);
  this$static.freeList = $HTMLTable$WidgetMapper$FreeNode(new HTMLTable$WidgetMapper$FreeNode(), index_0, this$static.freeList);
}

function getClass_77(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$WidgetMapper_2_classLit;
}

function HTMLTable$WidgetMapper(){
}

_ = HTMLTable$WidgetMapper.prototype = new Object_0();
_.getClass$ = getClass_77;
_.typeId$ = 0;
_.freeList = null;
function $HTMLTable$WidgetMapper$1(this$static, this$1){
  this$static.this$1 = this$1;
  $findNext(this$static);
  return this$static;
}

function $findNext(this$static){
  while (++this$static.nextIndex < this$static.this$1.widgetList.size) {
    if ($get_1(this$static.this$1.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function getClass_75(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$WidgetMapper$1_2_classLit;
}

function hasNext_0(){
  return this.nextIndex < this.this$1.widgetList.size;
}

function next_1(){
  var result;
  if (this.nextIndex >= this.this$1.widgetList.size) {
    throw new NoSuchElementException();
  }
  result = dynamicCast($get_1(this.this$1.widgetList, this.nextIndex), 2);
  this.lastIndex_0 = this.nextIndex;
  $findNext(this);
  return result;
}

function remove_5(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw new IllegalStateException();
  }
  w = dynamicCast($get_1(this.this$1.widgetList, this.lastIndex_0), 2);
  $removeFromParent(w);
  this.lastIndex_0 = -1;
}

function HTMLTable$WidgetMapper$1(){
}

_ = HTMLTable$WidgetMapper$1.prototype = new Object_0();
_.getClass$ = getClass_75;
_.hasNext = hasNext_0;
_.next_0 = next_1;
_.remove = remove_5;
_.typeId$ = 0;
_.lastIndex_0 = -1;
_.nextIndex = -1;
_.this$1 = null;
function $HTMLTable$WidgetMapper$FreeNode(this$static, index, next){
  this$static.index_0 = index;
  this$static.next = next;
  return this$static;
}

function getClass_76(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$WidgetMapper$FreeNode_2_classLit;
}

function HTMLTable$WidgetMapper$FreeNode(){
}

_ = HTMLTable$WidgetMapper$FreeNode.prototype = new Object_0();
_.getClass$ = getClass_76;
_.typeId$ = 0;
_.index_0 = 0;
_.next = null;
function $clinit_128(){
  $clinit_128 = nullMethod;
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'center');
  ALIGN_LEFT = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'left');
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'right');
  ALIGN_DEFAULT = ALIGN_LEFT;
}

var ALIGN_DEFAULT, ALIGN_LEFT;
function $HasHorizontalAlignment$HorizontalAlignmentConstant(this$static, textAlignString){
  this$static.textAlignString = textAlignString;
  return this$static;
}

function getClass_80(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new Object_0();
_.getClass$ = getClass_80;
_.typeId$ = 0;
_.textAlignString = null;
function $clinit_132(){
  $clinit_132 = nullMethod;
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'bottom');
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'middle');
  ALIGN_TOP = $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'top');
}

var ALIGN_TOP;
function $HasVerticalAlignment$VerticalAlignmentConstant(this$static, verticalAlignString){
  this$static.verticalAlignString = verticalAlignString;
  return this$static;
}

function getClass_81(){
  return Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit;
}

function HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = HasVerticalAlignment$VerticalAlignmentConstant.prototype = new Object_0();
_.getClass$ = getClass_81;
_.typeId$ = 0;
_.verticalAlignString = null;
function $HorizontalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_128() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_132() , ALIGN_TOP);
  this$static.tableRow = $doc.createElement('tr');
  this$static.body_0.appendChild(this$static.tableRow);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_4(this$static, w){
  var td_0, td;
  td_0 = (td = $doc.createElement('td') , (td['align'] = this$static.horzAlign.textAlignString , undefined) , (td.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , undefined) , td);
  this$static.tableRow.appendChild(td_0);
  $removeFromParent(w);
  $add_6(this$static.children, w);
  td_0.appendChild(w.getElement_0());
  $setParent(w, this$static);
}

function add_9(w){
  $add_4(this, w);
}

function getClass_82(){
  return Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit;
}

function remove_7(w){
  var removed, td;
  td = $getParentElement(w.getElement_0());
  removed = $remove_1(this, w);
  if (removed) {
    this.tableRow.removeChild(td);
  }
  return removed;
}

function HorizontalPanel(){
}

_ = HorizontalPanel.prototype = new CellPanel();
_.add_1 = add_9;
_.getClass$ = getClass_82;
_.remove_1 = remove_7;
_.typeId$ = 77;
_.tableRow = null;
function $Hyperlink(this$static){
  this$static.element_0 = $doc.createElement('div');
  this$static.element_0.appendChild(this$static.anchorElem = $doc.createElement('a'));
  sinkEvents(this$static.element_0, 1 | (this$static.element_0.__eventBits || 0));
  this$static.element_0['className'] = 'gwt-Hyperlink';
  return this$static;
}

function $addClickListener_2(this$static, listener){
  if (!this$static.clickListeners) {
    this$static.clickListeners = $ClickListenerCollection(new ClickListenerCollection());
  }
  $add_8(this$static.clickListeners, listener);
}

function $setTargetHistoryToken(this$static, targetHistoryToken){
  this$static.targetHistoryToken = targetHistoryToken;
  this$static.anchorElem['href'] = '#' + targetHistoryToken;
}

function getClass_83(){
  return Lcom_google_gwt_user_client_ui_Hyperlink_2_classLit;
}

function onBrowserEvent_4(event_0){
  if ($eventGetTypeInt(event_0) == 1) {
    if (this.clickListeners) {
      $fireClick(this.clickListeners, this);
    }
    $clinit_77();
    newItem(this.targetHistoryToken, true);
    event_0.preventDefault();
  }
}

function setText_3(text){
  $setInnerText(this.anchorElem, text);
}

function Hyperlink(){
}

_ = Hyperlink.prototype = new Widget();
_.getClass$ = getClass_83;
_.onBrowserEvent = onBrowserEvent_4;
_.setText_0 = setText_3;
_.typeId$ = 78;
_.anchorElem = null;
_.clickListeners = null;
_.targetHistoryToken = null;
function $clinit_140(){
  $clinit_140 = nullMethod;
  $clearImpl(new HashMap());
}

function $Image(this$static, url){
  $clinit_140();
  $Image$UnclippedState(new Image$UnclippedState(), this$static, url);
  this$static.element_0['className'] = 'gwt-Image';
  return this$static;
}

function getClass_86(){
  return Lcom_google_gwt_user_client_ui_Image_2_classLit;
}

function onBrowserEvent_5(event_0){
  $eventGetTypeInt(event_0);
}

function Image_0(){
}

_ = Image_0.prototype = new Widget();
_.getClass$ = getClass_86;
_.onBrowserEvent = onBrowserEvent_5;
_.typeId$ = 79;
function getClass_84(){
  return Lcom_google_gwt_user_client_ui_Image$State_2_classLit;
}

function Image$State(){
}

_ = Image$State.prototype = new Object_0();
_.getClass$ = getClass_84;
_.typeId$ = 0;
function $Image$UnclippedState(this$static, image, url){
  $replaceElement_1(image, $doc.createElement('img'));
  sinkEvents(image.element_0, 229501 | (image.element_0.__eventBits || 0));
  image.element_0.src = url;
  return this$static;
}

function getClass_85(){
  return Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit;
}

function Image$UnclippedState(){
}

_ = Image$UnclippedState.prototype = new Image$State();
_.getClass$ = getClass_85;
_.typeId$ = 0;
function $KeyboardListenerCollection(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
  return this$static;
}

function $fireKeyDown(this$static){
  var listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    dynamicCast($next_2(listener$iterator), 23);
  }
}

function $fireKeyPress(this$static, key){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 23);
    $onKeyPress(listener, key);
  }
}

function $fireKeyUp(this$static){
  var listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    dynamicCast($next_2(listener$iterator), 23);
  }
}

function $fireKeyboardEvent(this$static, event_0){
  (event_0.shiftKey?1:0) | (event_0.metaKey?8:0) | (event_0.ctrlKey?2:0) | (event_0.altKey?4:0);
  switch ($eventGetTypeInt(event_0)) {
    case 128:
      $fireKeyDown(this$static, (event_0.which || (event_0.keyCode || 0)) & 65535);
      break;
    case 512:
      $fireKeyUp(this$static, (event_0.which || (event_0.keyCode || 0)) & 65535);
      break;
    case 256:
      $fireKeyPress(this$static, (event_0.which || (event_0.keyCode || 0)) & 65535);
  }
}

function getClass_87(){
  return Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit;
}

function KeyboardListenerCollection(){
}

_ = KeyboardListenerCollection.prototype = new ArrayList();
_.getClass$ = getClass_87;
_.typeId$ = 80;
function $ListBox(this$static){
  $FocusWidget(this$static, $createSelectElement(false));
  this$static.element_0['className'] = 'gwt-ListBox';
  return this$static;
}

function $addChangeListener_1(this$static, listener){
  if (!this$static.changeListeners) {
    this$static.changeListeners = $ChangeListenerCollection(new ChangeListenerCollection());
    sinkEvents(this$static.element_0, 1024 | (this$static.element_0.__eventBits || 0));
  }
  $add_8(this$static.changeListeners, listener);
}

function $checkIndex(this$static, index){
  if (index < 0 || index >= this$static.element_0.options.length) {
    throw new IndexOutOfBoundsException();
  }
}

function $insertItem(this$static, item, index){
  $insertItem_0(this$static, item, item, index);
}

function $insertItem_0(this$static, item, value, index){
  var before, option, select;
  select = this$static.element_0;
  option = $doc.createElement('option');
  option.text = item;
  option.value = value;
  if (index == -1 || index == select.options.length) {
    select.add(option, null);
  }
   else {
    before = select.options[index];
    select.add(option, before);
  }
}

function $setItemSelected(this$static, index, selected){
  $checkIndex(this$static, index);
  this$static.element_0.options[index].selected = selected;
}

function getClass_89(){
  return Lcom_google_gwt_user_client_ui_ListBox_2_classLit;
}

function onBrowserEvent_7(event_0){
  if ($eventGetTypeInt(event_0) == 1024) {
    if (this.changeListeners) {
      $fireChange(this.changeListeners, this);
    }
  }
   else {
    $onBrowserEvent_0(this, event_0);
  }
}

function ListBox(){
}

_ = ListBox.prototype = new FocusWidget();
_.getClass$ = getClass_89;
_.onBrowserEvent = onBrowserEvent_7;
_.typeId$ = 81;
_.changeListeners = null;
function $MenuBar(this$static){
  this$static.allItems = $ArrayList(new ArrayList());
  this$static.items = $ArrayList(new ArrayList());
  $init_0(this$static, false, ($clinit_150() , new MenuBar_MenuBarImages_generatedBundle()));
  return this$static;
}

function $MenuBar_0(this$static, vertical){
  this$static.allItems = $ArrayList(new ArrayList());
  this$static.items = $ArrayList(new ArrayList());
  $init_0(this$static, vertical, ($clinit_150() , new MenuBar_MenuBarImages_generatedBundle()));
  return this$static;
}

function $addItem(this$static, item){
  $addItemElement(this$static, item.element_0);
  item.parentMenu = this$static;
  $setSelectionStyle(item, false);
  $add_8(this$static.items, item);
  $add_8(this$static.allItems, item);
  $updateSubmenuIcon(this$static, item);
  return item;
}

function $addItemElement(this$static, tdElem){
  var tr;
  if (this$static.vertical) {
    tr = $doc.createElement('tr');
    this$static.body_0.appendChild(tr);
  }
   else {
    tr = $getChild(this$static.body_0, 0);
  }
  tr.appendChild(tdElem);
}

function $clearItems(this$static){
  var container, item, item$iterator;
  $selectItem(this$static, null);
  container = $getItemContainerElement(this$static);
  while ($getChildCount(container) > 0) {
    container.removeChild($getChild(container, 0));
  }
  for (item$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static.allItems); item$iterator.i < item$iterator.this$0.size_0();) {
    item = dynamicCast($next_2(item$iterator), 24);
    item.getElement_0()['colSpan'] = 1;
    dynamicCast(item, 25).parentMenu = null;
  }
  $clearImpl_0(this$static.items);
  $clearImpl_0(this$static.allItems);
}

function $close(this$static){
  if (this$static.parentMenu) {
    $hide_4(this$static.parentMenu.popup, false);
  }
}

function $closeAllParents(this$static){
  var curMenu;
  curMenu = this$static;
  while (curMenu.parentMenu) {
    $close(curMenu);
    curMenu = curMenu.parentMenu;
  }
}

function $doItemAction(this$static, item, fireCommand){
  var cmd;
  if (!!this$static.shownChildMenu && item.subMenu == this$static.shownChildMenu) {
    return;
  }
  if (this$static.shownChildMenu) {
    $onHide(this$static.shownChildMenu);
    $hide_4(this$static.popup, false);
  }
  if (!!item && !item.subMenu) {
    if (fireCommand) {
      $closeAllParents(this$static);
      cmd = item.command;
      if (cmd) {
        addCommand(cmd);
      }
    }
    return;
  }
  $selectItem(this$static, item);
  if (!item) {
    return;
  }
  this$static.popup = $MenuBar$1(new MenuBar$1(), true, false, 'menuPopup', item);
  this$static.popup.animType = ($clinit_157() , ONE_WAY_CORNER);
  this$static.popup.isAnimationEnabled = this$static.isAnimationEnabled;
  this$static.popup.getElement_0()['className'] = 'gwt-MenuBarPopup';
  $addPopupListener(this$static.popup, this$static);
  this$static.shownChildMenu = item.subMenu;
  item.subMenu.parentMenu = this$static;
  $setPopupPositionAndShow(this$static.popup, $MenuBar$2(new MenuBar$2(), this$static, item));
  this$static.shownChildMenu.element_0.focus();
}

function $findItem(this$static, hItem){
  var item, item$iterator;
  for (item$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static.items); item$iterator.i < item$iterator.this$0.size_0();) {
    item = dynamicCast($next_2(item$iterator), 25);
    if (item.element_0.contains(hItem)) {
      return item;
    }
  }
  return null;
}

function $getItemContainerElement(this$static){
  if (this$static.vertical) {
    return this$static.body_0;
  }
   else {
    return $getChild(this$static.body_0, 0);
  }
}

function $init_0(this$static, vertical){
  var outer, table, tr;
  table = $doc.createElement('table');
  this$static.body_0 = $doc.createElement('tbody');
  table.appendChild(this$static.body_0);
  if (!vertical) {
    tr = $doc.createElement('tr');
    this$static.body_0.appendChild(tr);
  }
  this$static.vertical = vertical;
  outer = $createFocusable();
  outer.appendChild(table);
  this$static.element_0 = outer;
  this$static.element_0.setAttribute('role', 'menubar');
  sinkEvents(this$static.element_0, 2225 | (this$static.element_0.__eventBits || 0));
  this$static.element_0['className'] = 'gwt-MenuBar';
  if (vertical) {
    $addStyleName_4(this$static, getStylePrimaryName_1(this$static.getElement_0()) + '-' + 'vertical');
  }
   else {
    $addStyleName_4(this$static, getStylePrimaryName_1(this$static.getElement_0()) + '-' + 'horizontal');
  }
  this$static.element_0.style['outline'] = '0px';
  this$static.element_0.setAttribute('hideFocus', 'true');
}

function $itemOver(this$static, item){
  if (!item) {
    if (!!this$static.selectedItem && this$static.shownChildMenu == this$static.selectedItem.subMenu) {
      return;
    }
  }
  $selectItem(this$static, item);
  if (item) {
    if (!!this$static.shownChildMenu || !!this$static.parentMenu || this$static.autoOpen) {
      $doItemAction(this$static, item, false);
    }
  }
}

function $moveDown(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  if (this$static.vertical) {
    $selectNextItem(this$static);
  }
   else {
    if (this$static.selectedItem.subMenu) {
      $doItemAction(this$static, this$static.selectedItem, false);
    }
     else if (this$static.parentMenu) {
      if (this$static.parentMenu.vertical) {
        $selectNextItem(this$static.parentMenu);
      }
       else {
        $moveDown(this$static.parentMenu);
      }
    }
  }
}

function $moveToNextItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  if (this$static.vertical) {
    if (!this$static.shownChildMenu && !!this$static.selectedItem.subMenu) {
      $doItemAction(this$static, this$static.selectedItem, false);
    }
     else if (this$static.parentMenu) {
      if (this$static.parentMenu.vertical) {
        $moveToNextItem(this$static.parentMenu);
      }
       else {
        $selectNextItem(this$static.parentMenu);
      }
    }
  }
   else {
    $selectNextItem(this$static);
  }
}

function $moveToPrevItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  if (this$static.vertical) {
    if (!!this$static.parentMenu && !this$static.parentMenu.vertical) {
      $selectPrevItem(this$static.parentMenu);
    }
     else {
      $close(this$static);
    }
  }
   else {
    $selectPrevItem(this$static);
  }
}

function $moveUp(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  if (!this$static.shownChildMenu && this$static.vertical) {
    $selectPrevItem(this$static);
  }
   else if (!!this$static.parentMenu && this$static.parentMenu.vertical) {
    $selectPrevItem(this$static.parentMenu);
  }
   else {
    $close(this$static);
  }
}

function $onHide(this$static){
  if (this$static.shownChildMenu) {
    $onHide(this$static.shownChildMenu);
    $hide_4(this$static.popup, false);
    this$static.element_0.focus();
  }
}

function $onPopupClosed(this$static, autoClosed){
  if (autoClosed) {
    $closeAllParents(this$static);
  }
  $onHide(this$static);
  this$static.shownChildMenu = null;
  this$static.popup = null;
}

function $onShow(this$static){
  if (this$static.items.size > 0) {
    $selectItem(this$static, dynamicCast($get_1(this$static.items, 0), 25));
  }
}

function $selectFirstItemIfNoneSelected(this$static){
  var nextItem;
  if (!this$static.selectedItem) {
    nextItem = dynamicCast($get_1(this$static.items, 0), 25);
    $selectItem(this$static, nextItem);
    return true;
  }
  return false;
}

function $selectItem(this$static, item){
  var td, tr;
  if (item == this$static.selectedItem) {
    return;
  }
  if (this$static.selectedItem) {
    $setSelectionStyle(this$static.selectedItem, false);
    if (this$static.vertical) {
      tr = $getParentElement(this$static.selectedItem.element_0);
      if ($getChildCount(tr) == 2) {
        td = $getChild(tr, 1);
        setStyleName_1(td, 'subMenuIcon-selected', false);
      }
    }
  }
  if (item) {
    $setSelectionStyle(item, true);
    if (this$static.vertical) {
      tr = $getParentElement(item.element_0);
      if ($getChildCount(tr) == 2) {
        td = $getChild(tr, 1);
        setStyleName_1(td, 'subMenuIcon-selected', true);
      }
    }
    this$static.element_0.setAttribute('aria-activedescendant', item.element_0.getAttribute('id') || '');
  }
  this$static.selectedItem = item;
}

function $selectNextItem(this$static){
  var index, itemToBeSelected;
  if (!this$static.selectedItem) {
    return;
  }
  index = $indexOf_2(this$static.items, this$static.selectedItem, 0);
  if (index < this$static.items.size - 1) {
    itemToBeSelected = dynamicCast($get_1(this$static.items, index + 1), 25);
  }
   else {
    itemToBeSelected = dynamicCast($get_1(this$static.items, 0), 25);
  }
  $selectItem(this$static, itemToBeSelected);
  if (this$static.shownChildMenu) {
    $doItemAction(this$static, itemToBeSelected, false);
  }
}

function $selectPrevItem(this$static){
  var index, itemToBeSelected;
  if (!this$static.selectedItem) {
    return;
  }
  index = $indexOf_2(this$static.items, this$static.selectedItem, 0);
  if (index > 0) {
    itemToBeSelected = dynamicCast($get_1(this$static.items, index - 1), 25);
  }
   else {
    itemToBeSelected = dynamicCast($get_1(this$static.items, this$static.items.size - 1), 25);
  }
  $selectItem(this$static, itemToBeSelected);
  if (this$static.shownChildMenu) {
    $doItemAction(this$static, itemToBeSelected, false);
  }
}

function $updateSubmenuIcon(this$static, item){
  var container, idx, submenu, td, tdCount, tr;
  if (!this$static.vertical) {
    return;
  }
  idx = $indexOf_2(this$static.allItems, item, 0);
  if (idx == -1) {
    return;
  }
  container = $getItemContainerElement(this$static);
  tr = $getChild(container, idx);
  tdCount = $getChildCount(tr);
  submenu = item.subMenu;
  if (!submenu) {
    if (tdCount == 2) {
      tr.removeChild($getChild(tr, 1));
    }
    item.element_0['colSpan'] = 2;
  }
   else if (tdCount == 1) {
    item.element_0['colSpan'] = 1;
    td = $doc.createElement('td');
    td['vAlign'] = 'middle';
    td.innerHTML = $getHTML_1(($clinit_150() , menuBarSubMenuIcon_SINGLETON)) || '';
    td['className'] = 'subMenuIcon';
    tr.appendChild(td);
  }
}

function getClass_93(){
  return Lcom_google_gwt_user_client_ui_MenuBar_2_classLit;
}

function onBrowserEvent_8(event_0){
  var item, keyCode;
  item = $findItem(this, event_0.target);
  switch ($eventGetTypeInt(event_0)) {
    case 1:
      {
        this.element_0.focus();
        if (item) {
          $doItemAction(this, item, true);
        }
        break;
      }

    case 16:
      {
        if (item) {
          $itemOver(this, item);
        }
        break;
      }

    case 32:
      {
        if (item) {
          $itemOver(this, null);
        }
        break;
      }

    case 2048:
      {
        $selectFirstItemIfNoneSelected(this);
        break;
      }

    case 128:
      {
        keyCode = event_0.which || (event_0.keyCode || 0);
        switch (keyCode) {
          case 37:
            {
              $moveToPrevItem(this);
            }

            event_0.cancelBubble = true;
            event_0.preventDefault();
            break;
          case 39:
            {
              $moveToNextItem(this);
            }

            event_0.cancelBubble = true;
            event_0.preventDefault();
            break;
          case 38:
            $moveUp(this);
            event_0.cancelBubble = true;
            event_0.preventDefault();
            break;
          case 40:
            $moveDown(this);
            event_0.cancelBubble = true;
            event_0.preventDefault();
            break;
          case 27:
            $closeAllParents(this);
            event_0.cancelBubble = true;
            event_0.preventDefault();
            break;
          case 13:
            if (!$selectFirstItemIfNoneSelected(this)) {
              $doItemAction(this, this.selectedItem, true);
              event_0.cancelBubble = true;
              event_0.preventDefault();
            }

        }
        break;
      }

  }
}

function onDetach_2(){
  if (this.popup) {
    $hide_4(this.popup, false);
  }
  $onDetach(this);
}

function MenuBar(){
}

_ = MenuBar.prototype = new Widget();
_.getClass$ = getClass_93;
_.onBrowserEvent = onBrowserEvent_8;
_.onDetach = onDetach_2;
_.typeId$ = 82;
_.autoOpen = false;
_.body_0 = null;
_.isAnimationEnabled = false;
_.parentMenu = null;
_.popup = null;
_.selectedItem = null;
_.shownChildMenu = null;
_.vertical = false;
function $MenuBar$1(this$static, $anonymous0, $anonymous1, $anonymous2, val$item){
  this$static.val$item = val$item;
  $DecoratedPopupPanel(this$static, $anonymous0, $anonymous1, $anonymous2);
  $setWidget(this$static, this$static.val$item.subMenu);
  $onShow(this$static.val$item.subMenu);
  return this$static;
}

function getClass_90(){
  return Lcom_google_gwt_user_client_ui_MenuBar$1_2_classLit;
}

function onEventPreview_0(event_0){
  var parentMenuElement, target;
  switch ($eventGetTypeInt(event_0)) {
    case 1:
      target = event_0.target;
      parentMenuElement = this.val$item.parentMenu.element_0;
      if (parentMenuElement.contains(target)) {
        return false;
      }

  }
  return $onEventPreview(this, event_0);
}

function MenuBar$1(){
}

_ = MenuBar$1.prototype = new DecoratedPopupPanel();
_.getClass$ = getClass_90;
_.onEventPreview = onEventPreview_0;
_.typeId$ = 83;
_.val$item = null;
function $MenuBar$2(this$static, this$0, val$item){
  this$static.this$0 = this$0;
  this$static.val$item = val$item;
  return this$static;
}

function $setPosition(this$static){
  if (this$static.this$0.vertical) {
    $setPopupPosition(this$static.this$0.popup, $getAbsoluteLeft(this$static.this$0.element_0) + (parseInt(this$static.this$0.getElement_0()['offsetWidth']) || 0) - 1, $getAbsoluteTop(this$static.val$item.element_0));
  }
   else {
    $setPopupPosition(this$static.this$0.popup, $getAbsoluteLeft(this$static.val$item.element_0), $getAbsoluteTop(this$static.this$0.element_0) + (parseInt(this$static.this$0.getElement_0()['offsetHeight']) || 0) - 1);
  }
}

function getClass_91(){
  return Lcom_google_gwt_user_client_ui_MenuBar$2_2_classLit;
}

function MenuBar$2(){
}

_ = MenuBar$2.prototype = new Object_0();
_.getClass$ = getClass_91;
_.typeId$ = 0;
_.this$0 = null;
_.val$item = null;
function $clinit_150(){
  $clinit_150 = nullMethod;
  IMAGE_BUNDLE_URL = $moduleBase + 'file_1.cache.png';
  menuBarSubMenuIcon_SINGLETON = $ClippedImagePrototype(new ClippedImagePrototype(), IMAGE_BUNDLE_URL, 0, 0, 5, 9);
}

function getClass_92(){
  return Lcom_google_gwt_user_client_ui_MenuBar_1MenuBarImages_1generatedBundle_2_classLit;
}

function MenuBar_MenuBarImages_generatedBundle(){
}

_ = MenuBar_MenuBarImages_generatedBundle.prototype = new Object_0();
_.getClass$ = getClass_92;
_.typeId$ = 0;
var IMAGE_BUNDLE_URL, menuBarSubMenuIcon_SINGLETON;
function $MenuItem(this$static, text, cmd){
  $MenuItem_1(this$static, text, false);
  this$static.command = cmd;
  return this$static;
}

function $MenuItem_0(this$static, text, subMenu){
  $MenuItem_1(this$static, text, false);
  $setSubMenu(this$static, subMenu);
  return this$static;
}

function $MenuItem_1(this$static, text, asHTML){
  this$static.element_0 = $doc.createElement('td');
  $setSelectionStyle(this$static, false);
  if (asHTML) {
    this$static.element_0.innerHTML = text || '';
  }
   else {
    $setInnerText(this$static.element_0, text);
  }
  this$static.element_0['className'] = 'gwt-MenuItem';
  this$static.element_0.setAttribute('id', $createUniqueId($doc));
  this$static.element_0.setAttribute('role', 'menuitem');
  return this$static;
}

function $setSelectionStyle(this$static, selected){
  if (selected) {
    $addStyleName_4(this$static, getStylePrimaryName_1(this$static.getElement_0()) + '-' + 'selected');
  }
   else {
    $removeStyleName_0(this$static, getStylePrimaryName_1(this$static.element_0) + '-' + 'selected');
  }
}

function $setSubMenu(this$static, subMenu){
  this$static.subMenu = subMenu;
  if (this$static.parentMenu) {
    $updateSubmenuIcon(this$static.parentMenu, this$static);
  }
  subMenu.element_0.tabIndex = -1;
  this$static.element_0.setAttribute('aria-haspopup', 'true');
}

function getClass_94(){
  return Lcom_google_gwt_user_client_ui_MenuItem_2_classLit;
}

function setText_5(text){
  $setInnerText(this.element_0, text);
}

function MenuItem(){
}

_ = MenuItem.prototype = new UIObject();
_.getClass$ = getClass_94;
_.setText_0 = setText_5;
_.typeId$ = 84;
_.command = null;
_.parentMenu = null;
_.subMenu = null;
function $MouseListenerCollection(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
  return this$static;
}

function $fireMouseDown(this$static, sender, x, y){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 26);
    listener.onMouseDown(sender, x, y);
  }
}

function $fireMouseEnter(this$static, sender){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 26);
    listener.onMouseEnter(sender);
  }
}

function $fireMouseEvent(this$static, sender, event_0){
  var from, senderElem, to, x, y;
  senderElem = sender.getElement_0();
  x = (event_0.clientX || 0) - $getAbsoluteLeft(senderElem) + (parseInt(senderElem['scrollLeft']) || 0) + ($clinit_85() , documentRoot).scrollLeft;
  y = (event_0.clientY || 0) - $getAbsoluteTop(senderElem) + (parseInt(senderElem['scrollTop']) || 0) + documentRoot.scrollTop;
  switch ($eventGetTypeInt(event_0)) {
    case 4:
      $fireMouseDown(this$static, sender, x, y);
      break;
    case 8:
      $fireMouseUp(this$static, sender, x, y);
      break;
    case 64:
      $fireMouseMove(this$static, sender, x, y);
      break;
    case 16:
      from = $eventGetFromElement(event_0);
      if (!from || !senderElem.contains(from)) {
        $fireMouseEnter(this$static, sender);
      }

      break;
    case 32:
      to = $eventGetToElement(event_0);
      if (!to || !senderElem.contains(to)) {
        $fireMouseLeave(this$static, sender);
      }

  }
}

function $fireMouseLeave(this$static, sender){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 26);
    listener.onMouseLeave(sender);
  }
}

function $fireMouseMove(this$static, sender, x, y){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 26);
    listener.onMouseMove(sender, x, y);
  }
}

function $fireMouseUp(this$static, sender, x, y){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 26);
    listener.onMouseUp(sender, x, y);
  }
}

function getClass_95(){
  return Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit;
}

function MouseListenerCollection(){
}

_ = MouseListenerCollection.prototype = new ArrayList();
_.getClass$ = getClass_95;
_.typeId$ = 85;
function $PopupListenerCollection(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
  return this$static;
}

function $firePopupClosed(this$static, autoClosed){
  var listener, listener$iterator;
  for (listener$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static); listener$iterator.i < listener$iterator.this$0.size_0();) {
    listener = dynamicCast($next_2(listener$iterator), 27);
    $onPopupClosed(listener, autoClosed);
  }
}

function getClass_97(){
  return Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit;
}

function PopupListenerCollection(){
}

_ = PopupListenerCollection.prototype = new ArrayList();
_.getClass$ = getClass_97;
_.typeId$ = 86;
function equals_0(other){
  return (this == null?null:this) === (other == null?null:other);
}

function getClass_117(){
  return Ljava_lang_Enum_2_classLit;
}

function hashCode_1(){
  return this.$H || (this.$H = ++sNextHashId);
}

function toString_5(){
  return this.name_0;
}

function Enum(){
}

_ = Enum.prototype = new Object_0();
_.equals$ = equals_0;
_.getClass$ = getClass_117;
_.hashCode$ = hashCode_1;
_.toString$ = toString_5;
_.typeId$ = 87;
_.name_0 = null;
function $clinit_157(){
  $clinit_157 = nullMethod;
  CENTER_0 = $PopupPanel$AnimationType(new PopupPanel$AnimationType(), 'CENTER');
  ONE_WAY_CORNER = $PopupPanel$AnimationType(new PopupPanel$AnimationType(), 'ONE_WAY_CORNER');
}

function $PopupPanel$AnimationType(this$static, enum$name){
  $clinit_157();
  this$static.name_0 = enum$name;
  return this$static;
}

function getClass_98(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit;
}

function PopupPanel$AnimationType(){
}

_ = PopupPanel$AnimationType.prototype = new Enum();
_.getClass$ = getClass_98;
_.typeId$ = 88;
var CENTER_0, ONE_WAY_CORNER;
function $PopupPanel$ResizeAnimation(this$static, panel){
  this$static.curPanel = panel;
  return this$static;
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $remove_0(($clinit_164() , get_0(null)), this$static.curPanel);
    this$static.curPanel.getElement_0();
  }
  this$static.curPanel.getElement_0().style['clip'] = 'rect(auto, auto, auto, auto)';
  this$static.curPanel.getElement_0().style['overflow'] = 'visible';
}

function $onInstantaneousRun(this$static){
  if (this$static.showing) {
    this$static.curPanel.getElement_0().style['position'] = 'absolute';
    if (this$static.curPanel.topPosition != -1) {
      $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    }
    $add_0(($clinit_164() , get_0(null)), this$static.curPanel);
    this$static.curPanel.getElement_0();
  }
   else {
    $remove_0(($clinit_164() , get_0(null)), this$static.curPanel);
    this$static.curPanel.getElement_0();
  }
  this$static.curPanel.getElement_0().style['overflow'] = 'visible';
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top, width;
  if (!this$static.showing) {
    progress = 1 - progress;
  }
  top = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = ~~Math.max(Math.min(progress * this$static.offsetHeight, 2147483647), -2147483648);
  width = ~~Math.max(Math.min(progress * this$static.offsetWidth, 2147483647), -2147483648);
  if (this$static.curPanel.animType == ($clinit_157() , CENTER_0)) {
    top = this$static.offsetHeight - height >> 1;
    left = this$static.offsetWidth - width >> 1;
  }
   else 
    this$static.curPanel.animType == ONE_WAY_CORNER;
  right = left + width;
  bottom = top + height;
  this$static.curPanel.getElement_0().style['clip'] = 'rect(' + top + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)';
}

function $setState(this$static, showing){
  var animate;
  $cancel(this$static);
  animate = this$static.curPanel.isAnimationEnabled;
  if (this$static.curPanel.animType == ($clinit_157() , ONE_WAY_CORNER) && !showing) {
    animate = false;
  }
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      this$static.curPanel.getElement_0().style['position'] = 'absolute';
      if (this$static.curPanel.topPosition != -1) {
        $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      }
      this$static.curPanel.getElement_0().style['clip'] = 'rect(0px, 0px, 0px, 0px)';
      $add_0(($clinit_164() , get_0(null)), this$static.curPanel);
      this$static.curPanel.getElement_0();
    }
    addCommand($PopupPanel$ResizeAnimation$1(new PopupPanel$ResizeAnimation$1(), this$static));
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function getClass_100(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit;
}

function PopupPanel$ResizeAnimation(){
}

_ = PopupPanel$ResizeAnimation.prototype = new Animation();
_.getClass$ = getClass_100;
_.typeId$ = 89;
_.curPanel = null;
_.offsetHeight = 0;
_.offsetWidth = -1;
_.showing = false;
function $PopupPanel$ResizeAnimation$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function execute_0(){
  $run(this.this$1, 200, (new Date()).getTime());
}

function getClass_99(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit;
}

function PopupPanel$ResizeAnimation$1(){
}

_ = PopupPanel$ResizeAnimation$1.prototype = new Object_0();
_.execute = execute_0;
_.getClass$ = getClass_99;
_.typeId$ = 90;
_.this$1 = null;
function $clinit_164(){
  $clinit_164 = nullMethod;
  rootPanels = $HashMap(new HashMap());
  widgetsToDetach = $HashSet(new HashSet());
}

function $RootPanel(this$static, elem){
  $clinit_164();
  this$static.children = $WidgetCollection(new WidgetCollection(), this$static);
  this$static.element_0 = elem;
  $onAttach(this$static);
  return this$static;
}

function detachWidgets(){
  var outerIter, entry;
  $clinit_164();
  var widget, widget$iterator;
  for (widget$iterator = (outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $keySet(widgetsToDetach.map).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1(), outerIter)); $hasNext_0(widget$iterator.val$outerIter.iter);) {
    widget = dynamicCast((entry = $next_1(widget$iterator.val$outerIter) , entry.getKey()), 2);
    if (widget.isAttached()) {
      widget.onDetach();
    }
  }
}

function get_0(id){
  $clinit_164();
  var elem, rp;
  rp = dynamicCast($get_0(rootPanels, id), 28);
  if (rp) {
    return rp;
  }
  elem = null;
  if (id != null) {
    if (!(elem = $doc.getElementById(id))) {
      return null;
    }
  }
  if (rootPanels.size == 0) {
    addWindowCloseListener(new RootPanel$1());
  }
  if (!elem) {
    rp = $RootPanel$DefaultRootPanel(new RootPanel$DefaultRootPanel());
  }
   else {
    rp = $RootPanel(new RootPanel(), elem);
  }
  $put(rootPanels, id, rp);
  $add_9(widgetsToDetach, rp);
  return rp;
}

function getClass_104(){
  return Lcom_google_gwt_user_client_ui_RootPanel_2_classLit;
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel();
_.getClass$ = getClass_104;
_.typeId$ = 91;
var rootPanels, widgetsToDetach;
function getClass_102(){
  return Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit;
}

function onWindowClosed_0(){
  detachWidgets();
}

function onWindowClosing_0(){
  return null;
}

function RootPanel$1(){
}

_ = RootPanel$1.prototype = new Object_0();
_.getClass$ = getClass_102;
_.onWindowClosed = onWindowClosed_0;
_.onWindowClosing = onWindowClosing_0;
_.typeId$ = 92;
function $clinit_163(){
  $clinit_163 = nullMethod;
  $clinit_164();
}

function $RootPanel$DefaultRootPanel(this$static){
  $clinit_163();
  $RootPanel(this$static, $doc.body);
  return this$static;
}

function getClass_103(){
  return Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit;
}

function setWidgetPositionImpl_0(w, left, top){
  left -= 0;
  top -= 0;
  $setWidgetPositionImpl(w, left, top);
}

function RootPanel$DefaultRootPanel(){
}

_ = RootPanel$DefaultRootPanel.prototype = new RootPanel();
_.getClass$ = getClass_103;
_.setWidgetPositionImpl = setWidgetPositionImpl_0;
_.typeId$ = 93;
function $SimplePanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  this$static.hasElement = !!this$static.this$0.widget;
  return this$static;
}

function getClass_105(){
  return Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit;
}

function hasNext_1(){
  return this.hasElement;
}

function next_2(){
  if (!this.hasElement || !this.this$0.widget) {
    throw new NoSuchElementException();
  }
  this.hasElement = false;
  return this.returned = this.this$0.widget;
}

function remove_8(){
  if (this.returned) {
    this.this$0.remove_1(this.returned);
  }
}

function SimplePanel$1(){
}

_ = SimplePanel$1.prototype = new Object_0();
_.getClass$ = getClass_105;
_.hasNext = hasNext_1;
_.next_0 = next_2;
_.remove = remove_8;
_.typeId$ = 0;
_.returned = null;
_.this$0 = null;
function $VerticalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_128() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_132() , ALIGN_TOP);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function add_12(w){
  var td_0, tr, td;
  tr = $doc.createElement('tr');
  td_0 = (td = $doc.createElement('td') , td['align'] = this.horzAlign.textAlignString , td.style['verticalAlign'] = this.vertAlign.verticalAlignString , td);
  tr.appendChild(td_0);
  this.body_0.appendChild(tr);
  $removeFromParent(w);
  $add_6(this.children, w);
  td_0.appendChild(w.getElement_0());
  $setParent(w, this);
}

function getClass_108(){
  return Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit;
}

function remove_10(w){
  var removed, td;
  td = $getParentElement(w.getElement_0());
  removed = $remove_1(this, w);
  if (removed) {
    this.body_0.removeChild($getParentElement(td));
  }
  return removed;
}

function VerticalPanel(){
}

_ = VerticalPanel.prototype = new CellPanel();
_.add_1 = add_12;
_.getClass$ = getClass_108;
_.remove_1 = remove_10;
_.typeId$ = 94;
function $WidgetCollection(this$static, parent){
  this$static.parent = parent;
  this$static.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 0, 2, 4, 0);
  return this$static;
}

function $add_6(this$static, w){
  $insert(this$static, w, this$static.size);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw new IndexOutOfBoundsException();
  }
  if (this$static.size == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 0, 2, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_4(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw new IndexOutOfBoundsException();
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_5(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == -1) {
    throw new NoSuchElementException();
  }
  $remove_4(this$static, index);
}

function getClass_110(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit;
}

function WidgetCollection(){
}

_ = WidgetCollection.prototype = new Object_0();
_.getClass$ = getClass_110;
_.typeId$ = 95;
_.array = null;
_.parent = null;
_.size = 0;
function $WidgetCollection$WidgetIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$0.size) {
    throw new NoSuchElementException();
  }
  return this$static.this$0.array[++this$static.index_0];
}

function getClass_109(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit;
}

function hasNext_2(){
  return this.index_0 < this.this$0.size - 1;
}

function next_3(){
  return $next_0(this);
}

function remove_11(){
  if (this.index_0 < 0 || this.index_0 >= this.this$0.size) {
    throw new IllegalStateException();
  }
  this.this$0.parent.remove_1(this.this$0.array[this.index_0--]);
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator.prototype = new Object_0();
_.getClass$ = getClass_109;
_.hasNext = hasNext_2;
_.next_0 = next_3;
_.remove = remove_11;
_.typeId$ = 0;
_.index_0 = -1;
_.this$0 = null;
function $getHTML_0(url, left, top, width, height){
  var clippedImgHtml, style;
  style = 'width: ' + width + 'px; height: ' + height + 'px; background: url(' + url + ') no-repeat ' + (-left + 'px ') + (-top + 'px');
  clippedImgHtml = "<img src='" + $moduleBase + "clear.cache.gif' style='" + style + "' border='0'>";
  return clippedImgHtml;
}

function $ClippedImagePrototype(this$static, url, left, top, width, height){
  this$static.url = url;
  this$static.left = left;
  this$static.top = top;
  this$static.width = width;
  this$static.height = height;
  return this$static;
}

function $getHTML_1(this$static){
  return $getHTML_0(this$static.url, this$static.left, this$static.top, this$static.width, this$static.height);
}

function getClass_112(){
  return Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit;
}

function ClippedImagePrototype(){
}

_ = ClippedImagePrototype.prototype = new AbstractImagePrototype();
_.getClass$ = getClass_112;
_.typeId$ = 0;
_.height = 0;
_.left = 0;
_.top = 0;
_.url = null;
_.width = 0;
function $createFocusable(){
  var e = $doc.createElement('DIV');
  e.tabIndex = 0;
  return e;
}

function $ArithmeticException(this$static, explanation){
  this$static.detailMessage = explanation;
  return this$static;
}

function getClass_113(){
  return Ljava_lang_ArithmeticException_2_classLit;
}

function ArithmeticException(){
}

_ = ArithmeticException.prototype = new RuntimeException();
_.getClass$ = getClass_113;
_.typeId$ = 96;
function getClass_114(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}

function ArrayStoreException(){
}

_ = ArrayStoreException.prototype = new RuntimeException();
_.getClass$ = getClass_114;
_.typeId$ = 97;
function digit(c, radix){
  if (radix < 2 || radix > 36) {
    return -1;
  }
  if (c >= 48 && c < 48 + (radix < 10?radix:10)) {
    return c - 48;
  }
  if (c >= 97 && c < radix + 97 - 10) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < radix + 65 - 10) {
    return c - 65 + 10;
  }
  return -1;
}

function createForArray(packageName, className){
  var clazz;
  clazz = new Class();
  clazz.typeName = packageName + className;
  clazz.modifiers = 4;
  return clazz;
}

function createForClass(packageName, className){
  var clazz;
  clazz = new Class();
  clazz.typeName = packageName + className;
  return clazz;
}

function createForEnum(packageName, className){
  var clazz;
  clazz = new Class();
  clazz.typeName = packageName + className;
  clazz.modifiers = 8;
  return clazz;
}

function getClass_116(){
  return Ljava_lang_Class_2_classLit;
}

function toString_4(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + this.typeName;
}

function Class(){
}

_ = Class.prototype = new Object_0();
_.getClass$ = getClass_116;
_.toString$ = toString_4;
_.typeId$ = 0;
_.modifiers = 0;
_.typeName = null;
function getClass_115(){
  return Ljava_lang_ClassCastException_2_classLit;
}

function ClassCastException(){
}

_ = ClassCastException.prototype = new RuntimeException();
_.getClass$ = getClass_115;
_.typeId$ = 100;
function __parseAndValidateInt(s, radix, lowerBound, upperBound){
  var i, length, startIndex, toReturn;
  if (s == null) {
    throw $NumberFormatException(new NumberFormatException(), 'null');
  }
  if (radix < 2 || radix > 36) {
    throw $NumberFormatException(new NumberFormatException(), 'radix ' + radix + ' out of range');
  }
  length = s.length;
  startIndex = length > 0 && s.charCodeAt(0) == 45?1:0;
  for (i = startIndex; i < length; ++i) {
    if (digit(s.charCodeAt(i), radix) == -1) {
      throw $NumberFormatException(new NumberFormatException(), 'For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, radix);
  if (isNaN(toReturn)) {
    throw $NumberFormatException(new NumberFormatException(), 'For input string: "' + s + '"');
  }
   else if (toReturn < lowerBound || toReturn > upperBound) {
    throw $NumberFormatException(new NumberFormatException(), 'For input string: "' + s + '"');
  }
  return toReturn;
}

function getClass_125(){
  return Ljava_lang_Number_2_classLit;
}

function Number_0(){
}

_ = Number_0.prototype = new Object_0();
_.getClass$ = getClass_125;
_.typeId$ = 101;
function $IllegalArgumentException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_119(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException.prototype = new RuntimeException();
_.getClass$ = getClass_119;
_.typeId$ = 102;
function $IllegalStateException(this$static, s){
  this$static.detailMessage = s;
  return this$static;
}

function getClass_120(){
  return Ljava_lang_IllegalStateException_2_classLit;
}

function IllegalStateException(){
}

_ = IllegalStateException.prototype = new RuntimeException();
_.getClass$ = getClass_120;
_.typeId$ = 103;
function $IndexOutOfBoundsException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_121(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException.prototype = new RuntimeException();
_.getClass$ = getClass_121;
_.typeId$ = 104;
function $Integer(this$static, value){
  this$static.value_0 = value;
  return this$static;
}

function equals_1(o){
  return o != null && canCast(o.typeId$, 41) && dynamicCast(o, 41).value_0 == this.value_0;
}

function getClass_122(){
  return Ljava_lang_Integer_2_classLit;
}

function hashCode_2(){
  return this.value_0;
}

function toPowerOfTwoString(value, shift){
  var bitMask, buf, bufSize, digits, pos;
  bufSize = ~~(32 / shift);
  bitMask = (1 << shift) - 1;
  buf = initDim(_3C_classLit, 0, -1, bufSize, 1);
  digits = ($clinit_204() , digits_0);
  pos = bufSize - 1;
  if (value >= 0) {
    while (value > bitMask) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
  buf[pos] = digits[value & bitMask];
  return __valueOf(buf, pos, bufSize);
}

function toString_6(){
  return '' + this.value_0;
}

function Integer(){
}

_ = Integer.prototype = new Number_0();
_.equals$ = equals_1;
_.getClass$ = getClass_122;
_.hashCode$ = hashCode_2;
_.toString$ = toString_6;
_.typeId$ = 105;
_.value_0 = 0;
function max_0(x, y){
  return x > y?x:y;
}

function min_0(x, y){
  return x < y?x:y;
}

function $NullPointerException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_123(){
  return Ljava_lang_NullPointerException_2_classLit;
}

function NullPointerException(){
}

_ = NullPointerException.prototype = new RuntimeException();
_.getClass$ = getClass_123;
_.typeId$ = 106;
function $clinit_204(){
  $clinit_204 = nullMethod;
  digits_0 = initValues(_3C_classLit, 0, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function $NumberFormatException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_124(){
  return Ljava_lang_NumberFormatException_2_classLit;
}

function NumberFormatException(){
}

_ = NumberFormatException.prototype = new IllegalArgumentException();
_.getClass$ = getClass_124;
_.typeId$ = 107;
function $equals_0(this$static, other){
  if (!(other != null && canCast(other.typeId$, 1))) {
    return false;
  }
  return String(this$static) == other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $replaceFirst(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || (trail == '' || count == maxMatch - 1 && maxMatch > 0)) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    if (lastNonEmpty < out.length) {
      out.splice(lastNonEmpty, out.length - lastNonEmpty);
    }
  }
  var jr = initDim(_3Ljava_lang_String_2_classLit, 138, 1, out.length, 0);
  var i = 0;
  for (i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $startsWith(this$static, prefix, toffset){
  if (toffset < 0 || toffset >= this$static.length) {
    return false;
  }
   else {
    return this$static.indexOf(prefix, toffset) == toffset;
  }
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    if (replaceStr.charCodeAt(pos + 1) == 36) {
      replaceStr = replaceStr.substr(0, pos - 0) + '$' + $substring(replaceStr, ++pos);
    }
     else {
      replaceStr = replaceStr.substr(0, pos - 0) + $substring(replaceStr, ++pos);
    }
  }
  return replaceStr;
}

function __valueOf(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

function equals_3(other){
  return $equals_0(this, other);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + String.fromCharCode(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function getClass_130(){
  return Ljava_lang_String_2_classLit;
}

function hashCode_4(){
  return getHashCode_0(this);
}

function toString_10(){
  return this;
}

_ = String.prototype;
_.equals$ = equals_3;
_.getClass$ = getClass_130;
_.hashCode$ = hashCode_4;
_.toString$ = toString_10;
_.typeId$ = 2;
function $clinit_209(){
  $clinit_209 = nullMethod;
  back = {};
  front = {};
}

function compute(str){
  var hashCode, i, inc, n;
  n = str.length;
  inc = n < 64?1:~~(n / 32);
  hashCode = 0;
  for (i = 0; i < n; i += inc) {
    hashCode <<= 1;
    hashCode += str.charCodeAt(i);
  }
  hashCode |= 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_209();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back[key];
  if (result == null) {
    result = compute(str);
  }
  increment_0();
  return front[key] = result;
}

function increment_0(){
  if (count_0 == 256) {
    back = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back, count_0 = 0, front;
function $StringBuffer(this$static){
  this$static.builder = $StringBuilder(new StringBuilder());
  return this$static;
}

function $StringBuffer_0(this$static){
  this$static.builder = $StringBuilder(new StringBuilder());
  return this$static;
}

function $append(this$static, toAppend){
  $append_0(this$static.builder, toAppend);
  return this$static;
}

function getClass_128(){
  return Ljava_lang_StringBuffer_2_classLit;
}

function toString_8(){
  return $toString_2(this.builder);
}

function StringBuffer(){
}

_ = StringBuffer.prototype = new Object_0();
_.getClass$ = getClass_128;
_.toString$ = toString_8;
_.typeId$ = 108;
function $StringBuilder(this$static){
  this$static.stringArray = initDim(_3Ljava_lang_String_2_classLit, 138, 1, 0, 0);
  return this$static;
}

function $append_0(this$static, toAppend){
  var appendLength;
  if (toAppend == null) {
    toAppend = 'null';
  }
  appendLength = toAppend.length;
  if (appendLength > 0) {
    this$static.stringArray[this$static.arrayLen++] = toAppend;
    this$static.stringLength += appendLength;
    if (this$static.arrayLen > 1024) {
      $toString_2(this$static);
      this$static.stringArray.length = 1024;
    }
  }
  return this$static;
}

function $setLength(this$static, newLength){
  var oldLength, s;
  oldLength = this$static.stringLength;
  if (newLength < oldLength) {
    s = $toString_2(this$static);
    this$static.stringArray = initValues(_3Ljava_lang_String_2_classLit, 138, 1, [s.substr(0, newLength - 0), '', s.substr(oldLength, s.length - oldLength)]);
    this$static.arrayLen = 3;
    this$static.stringLength += ''.length - (oldLength - newLength);
  }
   else if (newLength > oldLength) {
    $append_0(this$static, String.fromCharCode.apply(null, initDim(_3C_classLit, 0, -1, newLength - oldLength, 1)));
  }
}

function $toString_2(this$static){
  var s;
  if (this$static.arrayLen != 1) {
    this$static.stringArray.length = this$static.arrayLen;
    s = this$static.stringArray.join('');
    this$static.stringArray = initValues(_3Ljava_lang_String_2_classLit, 138, 1, [s]);
    this$static.arrayLen = 1;
  }
  return this$static.stringArray[0];
}

function getClass_129(){
  return Ljava_lang_StringBuilder_2_classLit;
}

function toString_9(){
  return $toString_2(this);
}

function StringBuilder(){
}

_ = StringBuilder.prototype = new Object_0();
_.getClass$ = getClass_129;
_.toString$ = toString_9;
_.typeId$ = 109;
_.arrayLen = 0;
_.stringLength = 0;
function $UnsupportedOperationException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_132(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException.prototype = new RuntimeException();
_.getClass$ = getClass_132;
_.typeId$ = 110;
function $keySet(this$static){
  var entrySet;
  entrySet = $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), this$static);
  return $AbstractMap$1(new AbstractMap$1(), this$static, entrySet);
}

function equals_6(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if ((obj == null?null:obj) === (this == null?null:this)) {
    return true;
  }
  if (!(obj != null && canCast(obj.typeId$, 44))) {
    return false;
  }
  otherMap = dynamicCast(obj, 44);
  if (dynamicCast(this, 44).size != otherMap.size) {
    return false;
  }
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), otherMap).this$0); $hasNext_0(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_2(entry$iterator.iter), 42);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(otherKey == null?dynamicCast(this, 44).nullSlotLive:otherKey != null && canCast(otherKey.typeId$, 1)?$hasStringValue(dynamicCast(this, 44), dynamicCast(otherKey, 1)):$hasHashValue(dynamicCast(this, 44), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, otherKey == null?dynamicCast(this, 44).nullSlot:otherKey != null && canCast(otherKey.typeId$, 1)?dynamicCast(this, 44).stringMap[':' + dynamicCast(otherKey, 1)]:$getHashValue(dynamicCast(this, 44), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
  }
  return true;
}

function getClass_144(){
  return Ljava_util_AbstractMap_2_classLit;
}

function hashCode_7(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), dynamicCast(this, 44)).this$0); $hasNext_0(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_2(entry$iterator.iter), 42);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function toString_14(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), dynamicCast(this, 44)).this$0); $hasNext_0(iter.iter);) {
    entry = iter.last = dynamicCast($next_2(iter.iter), 42);
    if (comma) {
      s += ', ';
    }
     else {
      comma = true;
    }
    s += '' + entry.getKey();
    s += '=';
    s += '' + entry.getValue();
  }
  return s + '}';
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0();
_.equals$ = equals_6;
_.getClass$ = getClass_144;
_.hashCode$ = hashCode_7;
_.toString$ = toString_14;
_.typeId$ = 0;
function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add_2(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new_$(this$static, key.substring(1));
      dest.add_2(entry);
    }
  }
}

function $clearImpl(this$static){
  this$static.hashCodeMap = [];
  this$static.stringMap = {};
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
}

function $containsKey(this$static, key){
  return key == null?this$static.nullSlotLive:key != null && canCast(key.typeId$, 1)?$hasStringValue(this$static, dynamicCast(key, 1)):$hasHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $get_0(this$static, key){
  return key == null?this$static.nullSlot:key != null && canCast(key.typeId$, 1)?this$static.stringMap[':' + dynamicCast(key, 1)]:$getHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $put(this$static, key, value){
  return key == null?$putNullSlot(this$static, value):key != null && canCast(key.typeId$, 1)?$putStringValue(this$static, dynamicCast(key, 1), value):$putHashValue(this$static, key, value, ~~hashCode__devirtual$(key));
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = $MapEntryImpl(new MapEntryImpl(), key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
  }
   else {
    ++this$static.size;
  }
  stringMap[key] = value;
  return result;
}

function $remove_7(this$static, key){
  return key == null?$removeNullSlot(this$static):key != null && canCast(key.typeId$, 1)?$removeStringValue(this$static, dynamicCast(key, 1)):$removeHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        if (array.length == 1) {
          delete this$static.hashCodeMap[hashCode];
        }
         else {
          array.splice(i, 1);
        }
        --this$static.size;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size;
  }
  return result;
}

function $removeStringValue(this$static, key){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
    --this$static.size;
    delete stringMap[key];
  }
  return result;
}

function equalsBridge(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function getClass_138(){
  return Ljava_util_AbstractHashMap_2_classLit;
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap();
_.equalsBridge = equalsBridge;
_.getClass$ = getClass_138;
_.typeId$ = 0;
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function equals_7(o){
  var iter, other, otherItem;
  if ((o == null?null:o) === (this == null?null:this)) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 45))) {
    return false;
  }
  other = dynamicCast(o, 45);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator_0(); iter.hasNext();) {
    otherItem = iter.next_0();
    if (!this.contains_0(otherItem)) {
      return false;
    }
  }
  return true;
}

function getClass_145(){
  return Ljava_util_AbstractSet_2_classLit;
}

function hashCode_8(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator_0(); iter.hasNext();) {
    next = iter.next_0();
    if (next != null) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}

function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection();
_.equals$ = equals_7;
_.getClass$ = getClass_145;
_.hashCode$ = hashCode_8;
_.typeId$ = 111;
function $AbstractHashMap$EntrySet(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $contains(this$static, o){
  var entry, key, value;
  if (o != null && canCast(o.typeId$, 42)) {
    entry = dynamicCast(o, 42);
    key = entry.getKey();
    if ($containsKey(this$static.this$0, key)) {
      value = $get_0(this$static.this$0, key);
      return $equals_1(entry.getValue(), value);
    }
  }
  return false;
}

function contains_0(o){
  return $contains(this, o);
}

function getClass_135(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}

function iterator_4(){
  return $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), this.this$0);
}

function size_0(){
  return this.this$0.size;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet.prototype = new AbstractSet();
_.contains_0 = contains_0;
_.getClass$ = getClass_135;
_.iterator_0 = iterator_4;
_.size_0 = size_0;
_.typeId$ = 112;
_.this$0 = null;
function $AbstractHashMap$EntrySetIterator(this$static, this$0){
  var list;
  this$static.this$0 = this$0;
  list = $ArrayList(new ArrayList());
  if (this$static.this$0.nullSlotLive) {
    $add_8(list, $AbstractHashMap$MapEntryNull(new AbstractHashMap$MapEntryNull(), this$static.this$0));
  }
  $addAllStringEntries(this$static.this$0, list);
  $addAllHashEntries(this$static.this$0, list);
  this$static.iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), list);
  return this$static;
}

function $next_1(this$static){
  return this$static.last = dynamicCast($next_2(this$static.iter), 42);
}

function $remove_6(this$static){
  if (!this$static.last) {
    throw $IllegalStateException(new IllegalStateException(), 'Must call next() before remove().');
  }
   else {
    $remove_8(this$static.iter);
    $remove_7(this$static.this$0, this$static.last.getKey());
    this$static.last = null;
  }
}

function getClass_134(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}

function hasNext_3(){
  return $hasNext_0(this.iter);
}

function next_4(){
  return this.last = dynamicCast($next_2(this.iter), 42);
}

function remove_12(){
  $remove_6(this);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator.prototype = new Object_0();
_.getClass$ = getClass_134;
_.hasNext = hasNext_3;
_.next_0 = next_4;
_.remove = remove_12;
_.typeId$ = 0;
_.iter = null;
_.last = null;
_.this$0 = null;
function equals_5(other){
  var entry;
  if (other != null && canCast(other.typeId$, 42)) {
    entry = dynamicCast(other, 42);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}

function getClass_143(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}

function hashCode_6(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  if (this.getKey() != null) {
    keyHash = hashCode__devirtual$(this.getKey());
  }
  if (this.getValue() != null) {
    valueHash = hashCode__devirtual$(this.getValue());
  }
  return keyHash ^ valueHash;
}

function toString_13(){
  return this.getKey() + '=' + this.getValue();
}

function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0();
_.equals$ = equals_5;
_.getClass$ = getClass_143;
_.hashCode$ = hashCode_6;
_.toString$ = toString_13;
_.typeId$ = 113;
function $AbstractHashMap$MapEntryNull(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_136(){
  return Ljava_util_AbstractHashMap$MapEntryNull_2_classLit;
}

function getKey(){
  return null;
}

function getValue(){
  return this.this$0.nullSlot;
}

function setValue(object){
  return $putNullSlot(this.this$0, object);
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry();
_.getClass$ = getClass_136;
_.getKey = getKey;
_.getValue = getValue;
_.setValue = setValue;
_.typeId$ = 114;
_.this$0 = null;
function $AbstractHashMap$MapEntryString(this$static, key, this$0){
  this$static.this$0 = this$0;
  this$static.key = key;
  return this$static;
}

function getClass_137(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}

function getKey_0(){
  return this.key;
}

function getValue_0(){
  return this.this$0.stringMap[':' + this.key];
}

function new_$(this$outer, key){
  return $AbstractHashMap$MapEntryString(new AbstractHashMap$MapEntryString(), key, this$outer);
}

function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry();
_.getClass$ = getClass_137;
_.getKey = getKey_0;
_.getValue = getValue_0;
_.setValue = setValue_0;
_.typeId$ = 115;
_.key = null;
_.this$0 = null;
function $AbstractList$IteratorImpl(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $hasNext_0(this$static){
  return this$static.i < this$static.this$0.size_0();
}

function $next_2(this$static){
  if (this$static.i >= this$static.this$0.size_0()) {
    throw new NoSuchElementException();
  }
  return this$static.this$0.get(this$static.last = this$static.i++);
}

function $remove_8(this$static){
  if (this$static.last < 0) {
    throw new IllegalStateException();
  }
  this$static.this$0.remove_0(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function getClass_139(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}

function hasNext_4(){
  return this.i < this.this$0.size_0();
}

function next_5(){
  return $next_2(this);
}

function remove_13(){
  $remove_8(this);
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl.prototype = new Object_0();
_.getClass$ = getClass_139;
_.hasNext = hasNext_4;
_.next_0 = next_5;
_.remove = remove_13;
_.typeId$ = 0;
_.i = 0;
_.last = -1;
_.this$0 = null;
function $AbstractMap$1(this$static, this$0, val$entrySet){
  this$static.this$0 = this$0;
  this$static.val$entrySet = val$entrySet;
  return this$static;
}

function contains_1(key){
  return $containsKey(this.this$0, key);
}

function getClass_142(){
  return Ljava_util_AbstractMap$1_2_classLit;
}

function iterator_6(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), this.val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1(), outerIter);
}

function size_1(){
  return this.val$entrySet.this$0.size;
}

function AbstractMap$1(){
}

_ = AbstractMap$1.prototype = new AbstractSet();
_.contains_0 = contains_1;
_.getClass$ = getClass_142;
_.iterator_0 = iterator_6;
_.size_0 = size_1;
_.typeId$ = 116;
_.this$0 = null;
_.val$entrySet = null;
function $AbstractMap$1$1(this$static, val$outerIter){
  this$static.val$outerIter = val$outerIter;
  return this$static;
}

function getClass_141(){
  return Ljava_util_AbstractMap$1$1_2_classLit;
}

function hasNext_5(){
  return $hasNext_0(this.val$outerIter.iter);
}

function next_6(){
  var entry;
  return entry = $next_1(this.val$outerIter) , entry.getKey();
}

function remove_15(){
  $remove_6(this.val$outerIter);
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1.prototype = new Object_0();
_.getClass$ = getClass_141;
_.hasNext = hasNext_5;
_.next_0 = next_6;
_.remove = remove_15;
_.typeId$ = 0;
_.val$outerIter = null;
function $HashMap(this$static){
  $clearImpl(this$static);
  return this$static;
}

function $equals_1(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function getClass_148(){
  return Ljava_util_HashMap_2_classLit;
}

function HashMap(){
}

_ = HashMap.prototype = new AbstractHashMap();
_.getClass$ = getClass_148;
_.typeId$ = 117;
function $HashSet(this$static){
  this$static.map = $HashMap(new HashMap());
  return this$static;
}

function $add_9(this$static, o){
  var old;
  old = $put(this$static.map, o, this$static);
  return old == null;
}

function add_18(o){
  var old;
  return old = $put(this.map, o, this) , old == null;
}

function contains_3(o){
  return $containsKey(this.map, o);
}

function getClass_149(){
  return Ljava_util_HashSet_2_classLit;
}

function iterator_7(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $keySet(this.map).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1(), outerIter);
}

function size_3(){
  return this.map.size;
}

function toString_16(){
  return $toString_3($keySet(this.map));
}

function HashSet(){
}

_ = HashSet.prototype = new AbstractSet();
_.add_2 = add_18;
_.contains_0 = contains_3;
_.getClass$ = getClass_149;
_.iterator_0 = iterator_7;
_.size_0 = size_3;
_.toString$ = toString_16;
_.typeId$ = 118;
_.map = null;
function $MapEntryImpl(this$static, key, value){
  this$static.key = key;
  this$static.value_0 = value;
  return this$static;
}

function getClass_150(){
  return Ljava_util_MapEntryImpl_2_classLit;
}

function getKey_1(){
  return this.key;
}

function getValue_1(){
  return this.value_0;
}

function setValue_1(value){
  var old;
  old = this.value_0;
  this.value_0 = value;
  return old;
}

function MapEntryImpl(){
}

_ = MapEntryImpl.prototype = new AbstractMapEntry();
_.getClass$ = getClass_150;
_.getKey = getKey_1;
_.getValue = getValue_1;
_.setValue = setValue_1;
_.typeId$ = 119;
_.key = null;
_.value_0 = null;
function getClass_151(){
  return Ljava_util_NoSuchElementException_2_classLit;
}

function NoSuchElementException(){
}

_ = NoSuchElementException.prototype = new RuntimeException();
_.getClass$ = getClass_151;
_.typeId$ = 120;
function equalsWithNullCheck(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && equals__devirtual$(a, b);
}

function $Vector(this$static){
  this$static.arrayList = $ArrayList(new ArrayList());
  return this$static;
}

function add_20(o){
  return $add_8(this.arrayList, o);
}

function add_19(index, o){
  $add_7(this.arrayList, index, o);
}

function contains_4(elem){
  return $indexOf_2(this.arrayList, elem, 0) != -1;
}

function get_2(index){
  return $get_1(this.arrayList, index);
}

function getClass_152(){
  return Ljava_util_Vector_2_classLit;
}

function iterator_8(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this.arrayList);
}

function remove_17(index){
  return $remove_9(this.arrayList, index);
}

function size_4(){
  return this.arrayList.size;
}

function toString_17(){
  return $toString_3(this.arrayList);
}

function Vector(){
}

_ = Vector.prototype = new AbstractList();
_.add_2 = add_20;
_.add_0 = add_19;
_.contains_0 = contains_4;
_.get = get_2;
_.getClass$ = getClass_152;
_.iterator_0 = iterator_8;
_.remove_0 = remove_17;
_.size_0 = size_4;
_.toString$ = toString_17;
_.typeId$ = 121;
_.arrayList = null;
function $Alert(this$static, prop_0){
  var box, cfg;
  $PopupPanel(this$static);
  this$static.autoHide = false;
  $initialize(this$static, 64);
  $initialize(this$static, 64);
  this$static.jsProp = $JsProperties(new JsProperties(), prop_0);
  cfg = 64;
  box = getImpl(this$static.jsProp.p_0, 'roundedBox', '');
  if ($equals_0('flat', box))
    cfg |= 2;
  if ($equals_0('grey', box))
    cfg |= 4;
  if ($equals_0('blue', box))
    cfg |= 8;
  if (!$getBoolean(this$static.jsProp, 'glassPanel', true))
    cfg |= 16;
  if ($getBoolean(this$static.jsProp, 'animate', false))
    cfg |= 32;
  if (!$getBoolean(this$static.jsProp, 'buttonOk', true))
    cfg |= 1;
  $initialize(this$static, cfg);
  if (this$static.jsProp.p_0['className']?true:false)
    $setStyleName_3(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  if (this$static.jsProp.p_0['onClose']?true:false) {
    this$static.jsClosure = $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl(), getJSObjectImpl(this$static.jsProp.p_0, 'onClose'));
  }
  $add_8(this$static.okButton.clickListeners, $Alert$1(new Alert$1(), this$static));
  return this$static;
}

function addListener(c){
  this.jsClosure = c;
}

function alert_0(msg){
  this.txt.element_0.innerHTML = $replaceAll($replaceAll(msg, '\\n', '<br/>'), ' ', '&nbsp;') || '';
  $setWidth(this, 'auto');
  $center_0(this);
}

function getClass_154(){
  return Ljschismes_client_Alert_2_classLit;
}

function getElement_2(){
  return this.element_0;
}

function hide_5(){
  $hide_2(this);
}

function show_3(seconds){
  $show_4(this, seconds);
}

function Alert(){
}

_ = Alert.prototype = new GWTCAlert();
_.addListener_0 = addListener;
_.alert_0 = alert_0;
_.getClass$ = getClass_154;
_.getElement_0 = getElement_2;
_.hide_0 = hide_5;
_.show_1 = show_3;
_.typeId$ = 122;
_.jsClosure = null;
_.jsProp = null;
function $Alert$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_153(){
  return Ljschismes_client_Alert$1_2_classLit;
}

function onClick_5(sender){
  if (this.this$0.jsClosure)
    this.this$0.jsClosure.onChange_1(sender.getElement_0());
}

function Alert$1(){
}

_ = Alert$1.prototype = new Object_0();
_.getClass$ = getClass_153;
_.onClick = onClick_5;
_.typeId$ = 123;
_.this$0 = null;
function $export0(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.Alert) {
    var pkg = $wnd.jsc.Alert;
  }
  $wnd.jsc.Alert = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Alert')) {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Alert(new Alert(), arguments[0]);
      $clinit_278();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Alert.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Alert[p] = pkg[p];
    }
  }
  __0.addListener = function(arg0){
    this.instance.addListener_0(arg0.constructor == $wnd.jsc.JsChangeClosure?arg0.instance:arg0.hashCode$?arg0:$JsChangeClosureExporterImpl(new JsChangeClosureExporterImpl(), arg0));
  }
  ;
  __0.show = function(arg0){
    this.instance.show_1(arg0);
  }
  ;
  __0.alert = function(arg0){
    this.instance.alert_0(arg0);
  }
  ;
  __0.hide = function(){
    this.instance.hide_0();
  }
  ;
  __0.getElement = function(){
    var x = this.instance.getElement_0();
    return x;
  }
  ;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.Alert', $wnd.jsc.Alert);
}

function $clinit_249(){
  $clinit_249 = nullMethod;
  $clinit_3();
}

function $Box(this$static, prop_0){
  var box;
  $clinit_249();
  $GWTCBox(this$static);
  this$static.jsProp = $JsProperties(new JsProperties(), prop_0);
  box = getImpl(this$static.jsProp.p_0, 'roundedBox', '');
  if ($equals_0('flat', box)) {
    this$static.element_0['className'] = 'GWTCBox';
  }
  if ($equals_0('grey', box)) {
    this$static.element_0['className'] = 'GWTCBox-grey';
  }
  if ($equals_0('blue', box)) {
    this$static.element_0['className'] = 'GWTCBox-blue';
  }
  if (this$static.jsProp.p_0['className']?true:false)
    $addStyleName_4(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  $setTitle(this$static, getImpl(this$static.jsProp.p_0, 'title', ''));
  $setText(this$static, getImpl(this$static.jsProp.p_0, 'text', ''));
  $add_11(this$static, getImpl(this$static.jsProp.p_0, 'html', ''), ($clinit_254() , NORTH_0));
  attachToDocument(this$static, this$static.jsProp);
  return this$static;
}

function $add_11(this$static, object, direction){
  $add_3(this$static.panel, objectToWidget(object), direction);
}

function add_21(object){
  $add_11(this, object, ($clinit_254() , NORTH_0));
}

function add_22(object, direction){
  $add_3(this.panel, objectToWidget(object), direction);
}

function clear(){
  $clear_0(this);
}

function getClass_155(){
  return Ljschismes_client_Box_2_classLit;
}

function Box(){
}

_ = Box.prototype = new GWTCBox();
_.add_2 = add_21;
_.add_3 = add_22;
_.clear_0 = clear;
_.getClass$ = getClass_155;
_.typeId$ = 124;
_.jsProp = null;
function $export0_0(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.Box) {
    var pkg = $wnd.jsc.Box;
  }
  $wnd.jsc.Box = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Box')) {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Box(new Box(), arguments[0]);
      $clinit_278();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Box.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Box[p] = pkg[p];
    }
  }
  __0.clear = function(){
    this.instance.clear_0();
  }
  ;
  __0.add = function(arg0){
    this.instance.add_2(arg0);
  }
  ;
  __0.add = function(arg0, arg1){
    this.instance.add_3(arg0, arg1);
  }
  ;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.Box', $wnd.jsc.Box);
}

function $Button_1(this$static, prop_0){
  var text, type;
  $Button(this$static);
  $$init_1(this$static);
  $setType(this$static, 1);
  this$static.jsProp = $JsProperties(new JsProperties(), prop_0);
  type = (this$static.jsProp.p_0['type']?true:false)?$getInt(this$static.jsProp, 'type', 0):1;
  $setType(this$static, type);
  text = getImpl(this$static.jsProp.p_0, 'text', '');
  $setHTML(this$static, text);
  if (this$static.jsProp.p_0['onClick']?true:false) {
    this$static.jsClosure = $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl(), getJSObjectImpl(this$static.jsProp.p_0, 'onClick'));
  }
  $add_8(this$static.clickListeners, $Button$1(new Button$1(), this$static));
  attachToDocument(this$static, this$static.jsProp);
  return this$static;
}

function addListener_0(c){
  this.jsClosure = c;
}

function getClass_157(){
  return Ljschismes_client_Button_2_classLit;
}

function getElement_3(){
  return $getElement(this);
}

function Button_0(){
}

_ = Button_0.prototype = new GWTCButton();
_.addListener_0 = addListener_0;
_.getClass$ = getClass_157;
_.getElement_0 = getElement_3;
_.typeId$ = 125;
_.jsClosure = null;
_.jsProp = null;
function $Button$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_156(){
  return Ljschismes_client_Button$1_2_classLit;
}

function onClick_6(w){
  if (this.this$0.jsClosure)
    this.this$0.jsClosure.onChange_1(w);
}

function Button$1(){
}

_ = Button$1.prototype = new Object_0();
_.getClass$ = getClass_156;
_.onClick = onClick_6;
_.typeId$ = 126;
_.this$0 = null;
function $export0_1(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.Button) {
    var pkg = $wnd.jsc.Button;
  }
  $wnd.jsc.Button = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Button')) {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Button_1(new Button_0(), arguments[0]);
      $clinit_278();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Button.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Button[p] = pkg[p];
    }
  }
  __0.addListener = function(arg0){
    this.instance.addListener_0(arg0.constructor == $wnd.jsc.JsChangeClosure?arg0.instance:arg0.hashCode$?arg0:$JsChangeClosureExporterImpl(new JsChangeClosureExporterImpl(), arg0));
  }
  ;
  __0.getElement = function(){
    var x = this.instance.getElement_0();
    return x;
  }
  ;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.Button', $wnd.jsc.Button);
}

function $clinit_254(){
  $clinit_254 = nullMethod;
  SHORT_FORMAT = getShortDateFormat().pattern;
  NUMERIC_FORMAT = $replaceFirst(getShortDateFormat().pattern, 'yy', 'yyyy');
  LONG_FORMAT = getLongDateFormat().pattern;
  NORTH_0 = ($clinit_107() , NORTH);
  SOUTH_0 = SOUTH;
  EAST_0 = EAST;
  WEST_0 = WEST;
}

function getClass_158(){
  return Ljschismes_client_Const_2_classLit;
}

function Const(){
}

_ = Const.prototype = new Object_0();
_.getClass$ = getClass_158;
_.typeId$ = 0;
var ANIMATE = 'animate', AUTOHIDE = 'autoHide', BUTTONS = 'buttons', BUTTONS_LAYOUT = 'buttonsLayout', BUTTON_OK = 'buttonOk', CLASS_NAME = 'className', CONT_ID = 'containerId', CURRENT = 'defaultDate', DAYNAME_LETTERS = 'lettersInWeekDayHeaders', DIALOG = 'dialog', EAST_0, ELEMENTS = 'elements', GLASS = 'glassPanel', HOURS_MSG = 'hoursMsg', HTML_0 = 'html', IMAGE = 'image', LONG_FORMAT, MAXIMAL = 'maxDate', MAX_DAYS = 'maxDays', MINIMAL = 'minDate', MINUTES_MSG = 'minutesMsg', MONTH_RANGE = 'monthRange', NORTH_0, NUMBERS = 'numbers', NUMERIC_FORMAT, NUM_COLUMS = 'numberOfColums', NUM_MONTHS = 'numberOfMonths', ON_CLICK = 'onClick', ON_CLOSE = 'onClose', ON_SELECT = 'onSelect', PERCENT_MSG = 'percentMsg', RND_BOX = 'roundedBox', SECONDS_MSG = 'secondsMsg', SHORT_FORMAT, SOUTH_0, STEP_MONTHS = 'stepMonths', TEXT = 'text', TIME_REMAINING = 'timeRemaining', TITLE = 'title', TIT_CLOSE = 'closeTitle', TIT_CURR = 'currentTitle', TIT_HELP = 'helpTitle', TIT_NEXT = 'nextTitle', TIT_NEXT_Y = 'nextYearTitle', TIT_PREV = 'prevTitle', TIT_PREV_Y = 'prevYearTitle', TOTAL_MSG = 'totalMsg', TXT_CLOSE = 'closeText', TXT_CURR = 'currentText', TXT_HELP = 'helpText', TXT_NEXT = 'nextText', TXT_NEXT_Y = 'nextYearText', TXT_PREV = 'prevText', TXT_PREV_Y = 'prevYearText', TYPE = 'type', WEST_0;
function $export0_2(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.Const) {
    var pkg = $wnd.jsc.Const;
  }
  $wnd.jsc.Const = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Const')) {
      this.instance = arguments[0];
    }
     else if (arguments.length == 0) {
      this.instance = ($clinit_254() , new Const());
      $clinit_278();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Const.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Const[p] = pkg[p];
    }
  }
  $wnd.jsc.Const.SHORT_FORMAT = ($clinit_254() , SHORT_FORMAT);
  $wnd.jsc.Const.NUMERIC_FORMAT = NUMERIC_FORMAT;
  $wnd.jsc.Const.LONG_FORMAT = LONG_FORMAT;
  $wnd.jsc.Const.ANIMATE = ANIMATE;
  $wnd.jsc.Const.CURRENT = CURRENT;
  $wnd.jsc.Const.MINIMAL = MINIMAL;
  $wnd.jsc.Const.MAXIMAL = MAXIMAL;
  $wnd.jsc.Const.MAX_DAYS = MAX_DAYS;
  $wnd.jsc.Const.ON_SELECT = ON_SELECT;
  $wnd.jsc.Const.ON_CLOSE = ON_CLOSE;
  $wnd.jsc.Const.ON_CLICK = ON_CLICK;
  $wnd.jsc.Const.NUM_MONTHS = NUM_MONTHS;
  $wnd.jsc.Const.NUM_COLUMS = NUM_COLUMS;
  $wnd.jsc.Const.STEP_MONTHS = STEP_MONTHS;
  $wnd.jsc.Const.MONTH_RANGE = MONTH_RANGE;
  $wnd.jsc.Const.DIALOG = DIALOG;
  $wnd.jsc.Const.CONT_ID = CONT_ID;
  $wnd.jsc.Const.RND_BOX = RND_BOX;
  $wnd.jsc.Const.AUTOHIDE = AUTOHIDE;
  $wnd.jsc.Const.GLASS = GLASS;
  $wnd.jsc.Const.BUTTONS = BUTTONS;
  $wnd.jsc.Const.BUTTONS_LAYOUT = BUTTONS_LAYOUT;
  $wnd.jsc.Const.CLASS_NAME = CLASS_NAME;
  $wnd.jsc.Const.DAYNAME_LETTERS = DAYNAME_LETTERS;
  $wnd.jsc.Const.TXT_HELP = TXT_HELP;
  $wnd.jsc.Const.TXT_CLOSE = TXT_CLOSE;
  $wnd.jsc.Const.TXT_CURR = TXT_CURR;
  $wnd.jsc.Const.TXT_PREV = TXT_PREV;
  $wnd.jsc.Const.TXT_NEXT = TXT_NEXT;
  $wnd.jsc.Const.TXT_PREV_Y = TXT_PREV_Y;
  $wnd.jsc.Const.TXT_NEXT_Y = TXT_NEXT_Y;
  $wnd.jsc.Const.TIT_HELP = TIT_HELP;
  $wnd.jsc.Const.TIT_CLOSE = TIT_CLOSE;
  $wnd.jsc.Const.TIT_CURR = TIT_CURR;
  $wnd.jsc.Const.TIT_PREV = TIT_PREV;
  $wnd.jsc.Const.TIT_NEXT = TIT_NEXT;
  $wnd.jsc.Const.TIT_PREV_Y = TIT_PREV_Y;
  $wnd.jsc.Const.TIT_NEXT_Y = TIT_NEXT_Y;
  $wnd.jsc.Const.TEXT = TEXT;
  $wnd.jsc.Const.HTML = HTML_0;
  $wnd.jsc.Const.TITLE = TITLE;
  $wnd.jsc.Const.BUTTON_OK = BUTTON_OK;
  $wnd.jsc.Const.TYPE = TYPE;
  $wnd.jsc.Const.IMAGE = IMAGE;
  $wnd.jsc.Const.TOTAL_MSG = TOTAL_MSG;
  $wnd.jsc.Const.PERCENT_MSG = PERCENT_MSG;
  $wnd.jsc.Const.SECONDS_MSG = SECONDS_MSG;
  $wnd.jsc.Const.MINUTES_MSG = MINUTES_MSG;
  $wnd.jsc.Const.HOURS_MSG = HOURS_MSG;
  $wnd.jsc.Const.ELEMENTS = ELEMENTS;
  $wnd.jsc.Const.NUMBERS = NUMBERS;
  $wnd.jsc.Const.TIME_REMAINING = TIME_REMAINING;
  $wnd.jsc.Const.NORTH = NORTH_0;
  $wnd.jsc.Const.SOUTH = SOUTH_0;
  $wnd.jsc.Const.EAST = EAST_0;
  $wnd.jsc.Const.WEST = WEST_0;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.Const', $wnd.jsc.Const);
}

function $clinit_257(){
  $clinit_257 = nullMethod;
  $clinit_10();
}

function $DatePicker(this$static, prop_0){
  var cfg;
  $clinit_257();
  $GWTCDatePickerAbstract(this$static);
  this$static.jsProp = $JsProperties(new JsProperties(), prop_0);
  this$static.monthColumns = $getInt(this$static.jsProp, 'numberOfColums', 3);
  this$static.monthSelector = $getInt(this$static.jsProp, 'monthRange', 12);
  this$static.monthStep = $getInt(this$static.jsProp, 'stepMonths', 1);
  $setNumberOfLettersInDayNames($getInt(this$static.jsProp, 'lettersInWeekDayHeaders', 0));
  cfg = 0;
  if (!(this$static.jsProp.p_0['containerId']?true:false) && $getBoolean(this$static.jsProp, 'dialog', true))
    cfg |= CONFIG_DIALOG;
  if ($getBoolean(this$static.jsProp, 'roundedBox', false))
    cfg |= CONFIG_ROUNDED_BOX;
  if (!$getBoolean(this$static.jsProp, 'autoHide', true))
    cfg |= CONFIG_NO_AUTOHIDE;
  if (!$getBoolean(this$static.jsProp, 'animate', true))
    cfg |= CONFIG_NO_ANIMATION;
  if ($getBoolean(this$static.jsProp, 'glassPanel', true))
    cfg |= CONFIG_BACKGROUND;
  if ($equals_0('flat', getImpl(this$static.jsProp.p_0, 'buttons', '')))
    cfg |= CONFIG_FLAT_BUTTONS;
  if ($equals_0('standard', getImpl(this$static.jsProp.p_0, 'buttons', '')))
    cfg |= CONFIG_STANDARD_BUTTONS;
  $initialize_0(this$static, cfg);
  if (this$static.jsProp.p_0['minDate']?true:false)
    $setMinimalDate(this$static, add_6($Date(new Date_0()), getImpl(this$static.jsProp.p_0, 'minDate', '')));
  if (this$static.jsProp.p_0['maxDate']?true:false)
    $setMaximalDate(this$static, add_6($Date(new Date_0()), getImpl(this$static.jsProp.p_0, 'maxDate', '')));
  if (this$static.jsProp.p_0['defaultDate']?true:false)
    $setSelectedDate(this$static, add_6($Date(new Date_0()), getImpl(this$static.jsProp.p_0, 'defaultDate', '')));
  if (this$static.jsProp.p_0['onSelect']?true:false) {
    this$static.jsClosure = $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl(), getJSObjectImpl(this$static.jsProp.p_0, 'onSelect'));
  }
  if (this$static.jsProp.p_0['className']?true:false)
    $setStyleName_0(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  $addChangeListener(this$static, $DatePicker$1(new DatePicker$1(), this$static));
  $setI18nMessages(this$static, regionalToHash(this$static.jsProp));
  attachToDocument(this$static, this$static.jsProp);
  return this$static;
}

function $data(this$static){
  return {selected:new Date(toDouble(fromDouble(dynamicCast($get_1(this$static.simpleDatePickers.arrayList, 0), 3).getSelectedDate().jsdate.getTime()))), minimal:new Date(toDouble(fromDouble(this$static.minimalDate.jsdate.getTime()))), maximal:new Date(toDouble(fromDouble(this$static.maximalDate.jsdate.getTime())))};
}

function addSelectListener(c){
  this.jsClosure = c;
}

function attachToDocument(w, prop_0){
  $clinit_257();
  var p_0;
  p_0 = get_0(getImpl(prop_0.p_0, 'containerId', '__NO_ID__'));
  if (p_0)
    $add_2(p_0, w, p_0.element_0);
}

function data_0(){
  return {selected:new Date(toDouble(fromDouble(dynamicCast($get_1(this.simpleDatePickers.arrayList, 0), 3).getSelectedDate().jsdate.getTime()))), minimal:new Date(toDouble(fromDouble(this.minimalDate.jsdate.getTime()))), maximal:new Date(toDouble(fromDouble(this.maximalDate.jsdate.getTime())))};
}

function drawDatePickerWidget_0(){
  var layoutButtons, numberOfMonths;
  layoutButtons = (this.jsProp.p_0['buttonsLayout']?true:false)?getImpl(this.jsProp.p_0, 'buttonsLayout', ''):'?mx;p<->n';
  numberOfMonths = $getInt(this.jsProp, 'numberOfMonths', 0) > 0?$getInt(this.jsProp, 'numberOfMonths', 0):1;
  $setNumberOfMonths(this, numberOfMonths);
  $layoutButtons(this, layoutButtons);
  $layoutCalendar(this);
}

function getClass_160(){
  return Ljschismes_client_DatePicker_2_classLit;
}

function getSelected(){
  return new Date(toDouble(fromDouble(dynamicCast($get_1(this.simpleDatePickers.arrayList, 0), 3).getSelectedDate().jsdate.getTime())));
}

function hide_6(){
  $hide(this);
}

function regionalToHash(prop_0){
  $clinit_257();
  var k, key, key$array, key$index, key$max, reg, strs, v;
  strs = $HashMap(new HashMap());
  if (prop_0.p_0['regional']?true:false) {
    reg = $JsProperties(new JsProperties(), getJSObjectImpl(prop_0.p_0, 'regional'));
    for (key$array = $keys(reg) , key$index = 0 , key$max = key$array.length; key$index < key$max; ++key$index) {
      key = key$array[key$index];
      v = getImpl(reg.p_0, key, '');
      k = 'key.' + $replaceAll($replaceFirst(key, 'Text$', ''), '([A-Z])', '.$1').toLowerCase();
      k == null?$putNullSlot(strs, v):k != null?$putStringValue(strs, k, v):$putHashValue(strs, k, v, ~~getHashCode_0(k));
    }
  }
  return strs;
}

function setSelected(date){
  $setSelectedDate(this, $Date_1(new Date_0(), fromDouble(date && date.getTime?date.getTime():0)));
}

function show_4(){
  $show(this, -1, -1);
}

function show_5(elem){
  $showByElement(this, elem);
}

function DatePicker(){
}

_ = DatePicker.prototype = new GWTCDatePickerAbstract();
_.addSelectListener_0 = addSelectListener;
_.data_0 = data_0;
_.drawDatePickerWidget_0 = drawDatePickerWidget_0;
_.getClass$ = getClass_160;
_.getSelected_0 = getSelected;
_.hide_0 = hide_6;
_.setSelected_0 = setSelected;
_.show_0 = show_4;
_.show_2 = show_5;
_.typeId$ = 127;
_.jsClosure = null;
_.jsProp = null;
function $DatePicker$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_159(){
  return Ljschismes_client_DatePicker$1_2_classLit;
}

function onChange_4(sender){
  if (this.this$0.jsClosure)
    this.this$0.jsClosure.onChange_1($data(this.this$0));
}

function DatePicker$1(){
}

_ = DatePicker$1.prototype = new Object_0();
_.getClass$ = getClass_159;
_.onChange_0 = onChange_4;
_.typeId$ = 128;
_.this$0 = null;
function $export0_3(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.DatePicker) {
    var pkg = $wnd.jsc.DatePicker;
  }
  $wnd.jsc.DatePicker = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.DatePicker')) {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $DatePicker(new DatePicker(), arguments[0]);
      $clinit_278();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.DatePicker.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.DatePicker[p] = pkg[p];
    }
  }
  __0.drawDatePickerWidget = function(){
    this.instance.drawDatePickerWidget_0();
  }
  ;
  __0.show = function(){
    this.instance.show_0();
  }
  ;
  __0.show = function(arg0){
    this.instance.show_2(arg0);
  }
  ;
  __0.hide = function(){
    this.instance.hide_0();
  }
  ;
  __0.addSelectListener = function(arg0){
    this.instance.addSelectListener_0(arg0.constructor == $wnd.jsc.JsChangeClosure?arg0.instance:arg0.hashCode$?arg0:$JsChangeClosureExporterImpl(new JsChangeClosureExporterImpl(), arg0));
  }
  ;
  __0.getSelected = function(){
    var x = this.instance.getSelected_0();
    return x;
  }
  ;
  __0.setSelected = function(arg0){
    this.instance.setSelected_0(arg0);
  }
  ;
  __0.data = function(){
    var x = this.instance.data_0();
    return x;
  }
  ;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.DatePicker', $wnd.jsc.DatePicker);
}

function $IntervalSelector(this$static, prop_0){
  var cfg, layoutButtons, monthColumns, monthSelector, monthStep, numberOfMonths, type;
  this$static.dateFormat = getLongDateFormat().pattern;
  this$static.outer = $HorizontalPanel(new HorizontalPanel());
  this$static.mainGrid = $FlexTable(new FlexTable());
  this$static.checkinLabel = $Label_0(new Label(), 'Checkin');
  this$static.checkinWeekValue = $Label(new Label());
  this$static.checkinDateValue = $Label(new Label());
  this$static.checkinButton = $Button_0(new Button(), '...');
  this$static.changeCheckinLink = $Hyperlink(new Hyperlink());
  this$static.checkoutLabel = $Label_0(new Label(), 'Checkout');
  this$static.checkoutWeekValue = $Label(new Label());
  this$static.checkoutDateValue = $Label(new Label());
  this$static.checkoutButton = $Button_0(new Button(), '...');
  this$static.intervalLabel = $Label_0(new Label(), 'Duration');
  this$static.nightsLabel = $Label_0(new Label(), 'Nights');
  this$static.nightsValue = $Label(new Label());
  this$static.nightsListBox = $ListBox(new ListBox());
  this$static.changeListeners = $ChangeListenerCollection(new ChangeListenerCollection());
  this$static.clickListener = $GWTCIntervalSelector$1(new GWTCIntervalSelector$1(), this$static);
  this$static.jsProp = $JsProperties(new JsProperties(), prop_0);
  type = $getInt(this$static.jsProp, 'type', 1);
  this$static.outer.getElement_0()['className'] = 'GWTCIntervalSelector';
  $add_4(this$static.outer, this$static.mainGrid);
  $initWidget(this$static, this$static.outer);
  setStyleName_1(this$static.mainGrid.getElement_0(), 'GWTCIntervalGrid', true);
  $addStyleName_4(this$static.mainGrid, 'GWTCIntervalLayout' + type);
  setStyleName_1(this$static.checkinLabel.getElement_0(), 'labels', true);
  setStyleName_1(this$static.checkinDateValue.getElement_0(), 'values', true);
  setStyleName_1(this$static.checkinLabel.getElement_0(), 'checkinLabel', true);
  setStyleName_1(this$static.checkinDateValue.getElement_0(), 'checkinDateValue', true);
  setStyleName_1(this$static.checkinWeekValue.getElement_0(), 'checkinWeekValue', true);
  setStyleName_1(this$static.checkoutLabel.getElement_0(), 'labels', true);
  setStyleName_1(this$static.checkoutDateValue.getElement_0(), 'values', true);
  setStyleName_1(this$static.checkoutLabel.getElement_0(), 'checkoutLabel', true);
  setStyleName_1(this$static.checkoutDateValue.getElement_0(), 'checkoutDateValue', true);
  setStyleName_1(this$static.checkoutWeekValue.getElement_0(), 'checkoutWeekValue', true);
  this$static.checkinButton.addStyleName('checkinButton');
  this$static.checkoutButton.addStyleName('checkoutButton');
  setStyleName_1(this$static.intervalLabel.getElement_0(), 'labels', true);
  setStyleName_1(this$static.intervalLabel.getElement_0(), 'durationLabel', true);
  setStyleName_1(this$static.nightsLabel.getElement_0(), 'nightsLabel', true);
  setStyleName_1(this$static.nightsValue.getElement_0(), 'nightsValue', true);
  setStyleName_1(this$static.nightsListBox.getElement_0(), 'nightsBox', true);
  this$static.layoutType = type;
  $setDatePickerOptions(this$static, ($clinit_10() , CONFIG_DIALOG) | ($clinit_11() , CONFIG_NO_HELP_BUTTON) | CONFIG_NO_YEAR_BUTTON);
  $drawIntervalWidget(this$static);
  numberOfMonths = $getInt(this$static.jsProp, 'numberOfMonths', 0);
  monthColumns = $getInt(this$static.jsProp, 'numberOfColums', 3);
  monthSelector = $getInt(this$static.jsProp, 'monthRange', 12);
  monthStep = $getInt(this$static.jsProp, 'stepMonths', 1);
  layoutButtons = (this$static.jsProp.p_0['buttonsLayout']?true:false)?getImpl(this$static.jsProp.p_0, 'buttonsLayout', ''):'?mx;p<->n';
  cfg = CONFIG_DIALOG;
  if (!$getBoolean(this$static.jsProp, 'autohide', true))
    cfg |= CONFIG_NO_AUTOHIDE;
  if (!$getBoolean(this$static.jsProp, 'animation', true))
    cfg |= CONFIG_NO_ANIMATION;
  if ($getBoolean(this$static.jsProp, 'glassPanel', false))
    cfg |= CONFIG_BACKGROUND;
  if ($getBoolean(this$static.jsProp, 'flatButtons', false))
    cfg |= CONFIG_FLAT_BUTTONS;
  if ($getBoolean(this$static.jsProp, 'standardButtons', false))
    cfg |= CONFIG_STANDARD_BUTTONS;
  $configureDatePickers(this$static, cfg, layoutButtons, numberOfMonths, monthColumns, monthStep, monthSelector);
  $setMinimalDate_0(this$static, add_6($Date(new Date_0()), getImpl(this$static.jsProp.p_0, 'minDate', '')));
  $setMaximalDate_0(this$static, add_6($Date(new Date_0()), getImpl(this$static.jsProp.p_0, 'maxDate', '')));
  $setMaxdays(this$static, $getInt(this$static.jsProp, 'maxDays', 0));
  if (this$static.jsProp.p_0['className']?true:false)
    $setStyleName_3(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  if (this$static.jsProp.p_0['onSelect']?true:false) {
    this$static.jsClosure = $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl(), getJSObjectImpl(this$static.jsProp.p_0, 'onSelect'));
  }
  $addChangeListener_0(this$static, $IntervalSelector$1(new IntervalSelector$1(), this$static));
  $setI18nMessages_0(this$static, regionalToHash(this$static.jsProp));
  attachToDocument(this$static, this$static.jsProp);
  return this$static;
}

function $data_0(this$static){
  return $getDataImpl_0(toDouble(fromDouble(dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate().jsdate.getTime())), toDouble(fromDouble(dynamicCast($get_1(this$static.checkoutCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate().jsdate.getTime())), compareDate(dynamicCast($get_1(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate(), dynamicCast($get_1(this$static.checkoutCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate()), toDouble(fromDouble(this$static.checkinCalendar.minimalDate.jsdate.getTime())), toDouble(fromDouble(this$static.checkinCalendar.maximalDate.jsdate.getTime())), this$static.maxdays);
}

function $getDataImpl_0(init, end, nights, minimal, maximal, max){
  return {init:new Date(init), end:new Date(end), nights:nights, days:nights, minimal:new Date(minimal), maximal:new Date(maximal), maxdays:max};
}

function addSelectListener_0(c){
  this.jsClosure = c;
}

function data_1(){
  return $getDataImpl_0(toDouble(fromDouble(dynamicCast($get_1(this.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate().jsdate.getTime())), toDouble(fromDouble(dynamicCast($get_1(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate().jsdate.getTime())), compareDate(dynamicCast($get_1(this.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate(), dynamicCast($get_1(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate()), toDouble(fromDouble(this.checkinCalendar.minimalDate.jsdate.getTime())), toDouble(fromDouble(this.checkinCalendar.maximalDate.jsdate.getTime())), this.maxdays);
}

function getClass_162(){
  return Ljschismes_client_IntervalSelector_2_classLit;
}

function getDataImpl(init, end, nights, minimal, maximal, max){
  return {init:new Date(init), end:new Date(end), nights:nights, days:nights, minimal:new Date(minimal), maximal:new Date(maximal), maxdays:max};
}

function getEnd(){
  return new Date(toDouble(fromDouble(dynamicCast($get_1(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate().jsdate.getTime())));
}

function getInit(){
  return new Date(toDouble(fromDouble(dynamicCast($get_1(this.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate().jsdate.getTime())));
}

function getNights(){
  return compareDate(dynamicCast($get_1(this.checkinCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate(), dynamicCast($get_1(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 3).getSelectedDate());
}

function IntervalSelector(){
}

_ = IntervalSelector.prototype = new GWTCIntervalSelector();
_.addSelectListener_0 = addSelectListener_0;
_.data_0 = data_1;
_.getClass$ = getClass_162;
_.getDataImpl_0 = getDataImpl;
_.getEnd_0 = getEnd;
_.getInit_0 = getInit;
_.getNights_0 = getNights;
_.typeId$ = 129;
_.jsClosure = null;
_.jsProp = null;
function $IntervalSelector$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_161(){
  return Ljschismes_client_IntervalSelector$1_2_classLit;
}

function onChange_5(sender){
  if (this.this$0.jsClosure)
    this.this$0.jsClosure.onChange_1($data_0(this.this$0));
}

function IntervalSelector$1(){
}

_ = IntervalSelector$1.prototype = new Object_0();
_.getClass$ = getClass_161;
_.onChange_0 = onChange_5;
_.typeId$ = 130;
_.this$0 = null;
function $export0_4(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.IntervalSelector) {
    var pkg = $wnd.jsc.IntervalSelector;
  }
  $wnd.jsc.IntervalSelector = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.IntervalSelector')) {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $IntervalSelector(new IntervalSelector(), arguments[0]);
      $clinit_278();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.IntervalSelector.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.IntervalSelector[p] = pkg[p];
    }
  }
  __0.getInit = function(){
    var x = this.instance.getInit_0();
    return x;
  }
  ;
  __0.getEnd = function(){
    var x = this.instance.getEnd_0();
    return x;
  }
  ;
  __0.getNights = function(){
    var x = this.instance.getNights_0();
    return x;
  }
  ;
  __0.addSelectListener = function(arg0){
    this.instance.addSelectListener_0(arg0.constructor == $wnd.jsc.JsChangeClosure?arg0.instance:arg0.hashCode$?arg0:$JsChangeClosureExporterImpl(new JsChangeClosureExporterImpl(), arg0));
  }
  ;
  __0.data = function(){
    var x = this.instance.data_0();
    return x;
  }
  ;
  __0.getDataImpl = function(arg0, arg1, arg2, arg3, arg4, arg5){
    var x = this.instance.getDataImpl_0(arg0, arg1, arg2, arg3, arg4, arg5);
    return x;
  }
  ;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.IntervalSelector', $wnd.jsc.IntervalSelector);
}

function $JsChangeClosureExporterImpl(this$static, jso){
  this$static.jso = jso;
  return this$static;
}

function $export0_5(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.JsChangeClosure) {
    var pkg = $wnd.jsc.JsChangeClosure;
  }
  $wnd.jsc.JsChangeClosure = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.JsChangeClosure')) {
      this.instance = arguments[0];
    }
  }
  ;
  var __0 = $wnd.jsc.JsChangeClosure.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.JsChangeClosure[p] = pkg[p];
    }
  }
  __0.onChange = function(arg0){
    this.instance.onChange_1(arg0);
  }
  ;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.JsChangeClosure', $wnd.jsc.JsChangeClosure);
}

function getClass_163(){
  return Ljschismes_client_JsChangeClosureExporterImpl_2_classLit;
}

function onChange_6(arg0){
  this.jso(arg0);
}

function JsChangeClosureExporterImpl(){
}

_ = JsChangeClosureExporterImpl.prototype = new Object_0();
_.getClass$ = getClass_163;
_.onChange_1 = onChange_6;
_.typeId$ = 0;
_.jso = null;
function $onLoadImpl(){
  if ($wnd.gwtcOnLoad)
    $wnd.gwtcOnLoad();
}

function $JsProperties(this$static, p_0){
  this$static.p_0 = p_0;
  return this$static;
}

function $getBoolean(this$static, name, deFault){
  var val;
  val = getImpl(this$static.p_0, name, '').toLowerCase();
  if ($equals_0('true', val))
    return true;
  if ($equals_0('false', val))
    return true;
  if ($equals_0('on', val))
    return true;
  if ($equals_0('off', val))
    return false;
  if ($equals_0('1', val))
    return true;
  if ($equals_0('0', val))
    return false;
  return deFault;
}

function $getInt(this$static, name, deFault){
  var val;
  val = (this$static.p_0[name]?true:false)?$replaceAll(getImpl(this$static.p_0, name, ''), '[^\\d]', ''):'';
  if (val.length == 0)
    return deFault;
  return $Integer(new Integer(), __parseAndValidateInt(val, 10, -2147483648, 2147483647)).value_0;
}

function $keys(this$static){
  var a, i, ret;
  a = keysImpl(this$static.p_0);
  ret = initDim(_3Ljava_lang_String_2_classLit, 138, 1, a.length, 0);
  for (i = 0; i < a.length; ++i) {
    ret[i] = '' + a[i];
  }
  return ret;
}

function getClass_165(){
  return Ljschismes_client_JsProperties_2_classLit;
}

function getImpl(p_0, name, defa){
  return p_0[name]?'' + p_0[name]:p_0[name] === false?'false':defa;
}

function getJSObjectImpl(p_0, name){
  return p_0[name]?p_0[name]:null;
}

function keysImpl(p_0){
  var key, keys = [];
  for (key in p_0)
    keys.push('' + key);
  return keys;
}

function JsProperties(){
}

_ = JsProperties.prototype = new Object_0();
_.getClass$ = getClass_165;
_.typeId$ = 0;
_.p_0 = null;
function $JsProperties$JSChangeClosureImpl(this$static, o){
  this$static.jsobject = o;
  return this$static;
}

function $onChangeImpl(f, o){
  if (f && (o && typeof f == 'function'))
    f(o);
}

function getClass_164(){
  return Ljschismes_client_JsProperties$JSChangeClosureImpl_2_classLit;
}

function onChange_7(object){
  $onChangeImpl(this.jsobject, object);
}

function JsProperties$JSChangeClosureImpl(){
}

_ = JsProperties$JSChangeClosureImpl.prototype = new Object_0();
_.getClass$ = getClass_164;
_.onChange_1 = onChange_7;
_.typeId$ = 0;
_.jsobject = null;
function $Popup(this$static, prop_0){
  var box, cfg;
  $PopupPanel(this$static);
  this$static.autoHide = false;
  $initialize_2(this$static, 64);
  this$static.jsProp = $JsProperties(new JsProperties(), prop_0);
  cfg = 64;
  box = getImpl(this$static.jsProp.p_0, 'roundedBox', '');
  if ($equals_0('flat', box))
    cfg |= 2;
  if ($equals_0('grey', box))
    cfg |= 4;
  if ($equals_0('blue', box))
    cfg |= 8;
  if (!$getBoolean(this$static.jsProp, 'glassPanel', true))
    cfg |= 16;
  if ($getBoolean(this$static.jsProp, 'animate', false))
    cfg |= 32;
  $initialize_2(this$static, cfg);
  if (this$static.jsProp.p_0['className']?true:false)
    $setStyleName_3(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  if (this$static.jsProp.p_0['text']?true:false)
    $add(this$static, getImpl(this$static.jsProp.p_0, 'text', ''), ($clinit_254() , NORTH_0));
  return this$static;
}

function add_23(object){
  $add(this, object, ($clinit_254() , NORTH_0));
}

function add_24(object, direction){
  $add(this, object, direction);
}

function clear_0(){
  $clear_0(this);
}

function getClass_166(){
  return Ljschismes_client_Popup_2_classLit;
}

function hide_7(){
  $hide_2(this);
}

function show_6(seconds){
  $show_4(this, seconds);
}

function Popup(){
}

_ = Popup.prototype = new GWTCPopupBox();
_.add_2 = add_23;
_.add_3 = add_24;
_.clear_0 = clear_0;
_.getClass$ = getClass_166;
_.hide_0 = hide_7;
_.show_1 = show_6;
_.typeId$ = 131;
_.jsProp = null;
function $export0_6(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.Popup) {
    var pkg = $wnd.jsc.Popup;
  }
  $wnd.jsc.Popup = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Popup')) {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Popup(new Popup(), arguments[0]);
      $clinit_278();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Popup.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Popup[p] = pkg[p];
    }
  }
  __0.show = function(arg0){
    this.instance.show_1(arg0);
  }
  ;
  __0.hide = function(){
    this.instance.hide_0();
  }
  ;
  __0.clear = function(){
    this.instance.clear_0();
  }
  ;
  __0.add = function(arg0){
    this.instance.add_2(arg0);
  }
  ;
  __0.add = function(arg0, arg1){
    this.instance.add_3(arg0, arg1);
  }
  ;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.Popup', $wnd.jsc.Popup);
}

function $Progress(this$static, prop_0){
  var cfg, elements;
  this$static.contentTable = $FlexTable(new FlexTable());
  this$static.remainLabel = $Label(new Label());
  this$static.textLabel = $Label(new Label());
  this$static.numberLabel = $Label(new Label());
  this$static.startTime = fromDouble((new Date()).getTime());
  this$static.jsProp = $JsProperties(new JsProperties(), prop_0);
  cfg = ($clinit_10() , CONFIG_DIALOG);
  if ($getBoolean(this$static.jsProp, 'timeRemaining', true))
    cfg |= 1;
  if ($getBoolean(this$static.jsProp, 'text', false))
    cfg |= 2;
  if ($equals_0('left', getImpl(this$static.jsProp.p_0, 'text', '')))
    cfg |= 16;
  if ($getBoolean(this$static.jsProp, 'numbers', false))
    cfg |= 4;
  if ($getBoolean(this$static.jsProp, 'dialog', false))
    cfg |= 8;
  elements = $getInt(this$static.jsProp, 'elements', 30);
  $initialize_3(this$static, cfg, elements);
  if (!$getBoolean(this$static.jsProp, 'dialog', false))
    attachToDocument(this$static, this$static.jsProp);
  if (this$static.jsProp.p_0['hoursMsg']?true:false) {
    this$static.hoursMessage = getImpl(this$static.jsProp.p_0, 'hoursMsg', '');
  }
  if (this$static.jsProp.p_0['minutesMsg']?true:false) {
    this$static.hoursMessage = getImpl(this$static.jsProp.p_0, 'minutesMsg', '');
  }
  if (this$static.jsProp.p_0['secondsMsg']?true:false) {
    this$static.hoursMessage = getImpl(this$static.jsProp.p_0, 'secondsMsg', '');
  }
  if (this$static.jsProp.p_0['percentMsg']?true:false) {
    this$static.percentMessage = getImpl(this$static.jsProp.p_0, 'percentMsg', '');
  }
  if (this$static.jsProp.p_0['totalMsg']?true:false) {
    this$static.totalMessage = getImpl(this$static.jsProp.p_0, 'totalMsg', '');
  }
  if (this$static.jsProp.p_0['className']?true:false)
    $setStyleName_3(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  return this$static;
}

function getClass_168(){
  return Ljschismes_client_Progress_2_classLit;
}

function getElement_4(){
  return this.element_0;
}

function hide_8(){
  $hide_3(this);
}

function setProgress(done, total){
  var percent;
  percent = total > 0?~~(done * 100 / total):0;
  $setProgress_0(this, percent, done, total);
}

function setText_6(text){
  $setInnerText(this.textLabel.element_0, text);
}

function show_7(){
  $show_5(this);
}

function show_8(seconds){
  var periodMillis, t;
  periodMillis = ~~(seconds * 1000 / 15);
  t = $Progress$pTimer(new Progress$pTimer(), this);
  $scheduleRepeating(t, periodMillis);
}

function Progress(){
}

_ = Progress.prototype = new GWTCProgress();
_.getClass$ = getClass_168;
_.getElement_0 = getElement_4;
_.hide_0 = hide_8;
_.setProgress_0 = setProgress;
_.setText_0 = setText_6;
_.show_0 = show_7;
_.show_1 = show_8;
_.typeId$ = 132;
_.jsProp = null;
function $clinit_268(){
  $clinit_268 = nullMethod;
  $clinit_79();
}

function $Progress$pTimer(this$static, p_0){
  $clinit_268();
  this$static.prgBar = p_0;
  $run_0(this$static);
  return this$static;
}

function $run_0(this$static){
  if (this$static.done == 0) {
    $show_5(this$static.prgBar);
  }
  if (this$static.done >= 100) {
    this$static.done = 0;
    $cancel_0(this$static);
    $hide_3(this$static.prgBar);
  }
  $setProgress(this$static.prgBar, this$static.done, 100);
  this$static.done += 6;
}

function getClass_167(){
  return Ljschismes_client_Progress$pTimer_2_classLit;
}

function run_4(){
  $run_0(this);
}

function Progress$pTimer(){
}

_ = Progress$pTimer.prototype = new Timer();
_.getClass$ = getClass_167;
_.run = run_4;
_.typeId$ = 133;
_.done = 0;
_.prgBar = null;
function $export0_7(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.Progress) {
    var pkg = $wnd.jsc.Progress;
  }
  $wnd.jsc.Progress = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Progress')) {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Progress(new Progress(), arguments[0]);
      $clinit_278();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Progress.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Progress[p] = pkg[p];
    }
  }
  __0.setText = function(arg0){
    this.instance.setText_0(arg0);
  }
  ;
  __0.show = function(){
    this.instance.show_0();
  }
  ;
  __0.show = function(arg0){
    this.instance.show_1(arg0);
  }
  ;
  __0.hide = function(){
    this.instance.hide_0();
  }
  ;
  __0.setProgress = function(arg0, arg1){
    this.instance.setProgress_0(arg0, arg1);
  }
  ;
  __0.getElement = function(){
    var x = this.instance.getElement_0();
    return x;
  }
  ;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.Progress', $wnd.jsc.Progress);
}

function camelize(s){
  return s.toLowerCase().replace(/-([a-z])/ig, function(a, c){
    return c.toUpperCase();
  }
  );
}

function getClass_169(){
  return Ljschismes_client_Utils_2_classLit;
}

function Utils(){
}

_ = Utils.prototype = new Object_0();
_.getClass$ = getClass_169;
_.typeId$ = 0;
function $export0_8(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.Utils) {
    var pkg = $wnd.jsc.Utils;
  }
  $wnd.jsc.Utils = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Utils')) {
      this.instance = arguments[0];
    }
     else if (arguments.length == 0) {
      this.instance = new Utils();
      $clinit_278();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Utils.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Utils[p] = pkg[p];
    }
  }
  $wnd.jsc.Utils.formatDate = function(arg0, arg1){
    var x = formatDate(arg0, $Date_1(new Date_0(), fromDouble(arg1 && arg1.getTime?arg1.getTime():0)));
    return x;
  }
  ;
  $wnd.jsc.Utils.camelize = function(arg0){
    var x = camelize(arg0);
    return x;
  }
  ;
  $wnd.jsc.Utils.parseDate = function(arg0, arg1){
    var x = new Date(toDouble(fromDouble(parseDate(arg0, arg1).jsdate.getTime())));
    return x;
  }
  ;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.Utils', $wnd.jsc.Utils);
}

function $Wait(this$static, prop_0){
  $GWTCWait(this$static);
  this$static.jsProp = $JsProperties(new JsProperties(), prop_0);
  if (this$static.jsProp.p_0['text']?true:false) {
    $setInnerText(this$static.txt.element_0, getImpl(this$static.jsProp.p_0, 'text', ''));
  }
  if (this$static.jsProp.p_0['className']?true:false)
    $setStyleName_3(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  if (this$static.jsProp.p_0['image']?true:false)
    $setImg(this$static, getImpl(this$static.jsProp.p_0, 'image', ''));
  return this$static;
}

function $hide_5(this$static){
  $hide_2(this$static);
  this$static.element_0.style['visibility'] = 'hidden';
}

function getClass_170(){
  return Ljschismes_client_Wait_2_classLit;
}

function getElement_5(){
  return this.element_0;
}

function hide_9(){
  $hide_2(this);
  this.element_0.style['visibility'] = 'hidden';
}

function show_9(seconds){
  $show_6(this, seconds);
}

function Wait(){
}

_ = Wait.prototype = new GWTCWait();
_.getClass$ = getClass_170;
_.getElement_0 = getElement_5;
_.hide_0 = hide_9;
_.show_1 = show_9;
_.typeId$ = 134;
_.jsProp = null;
function $export0_9(){
  if (!$wnd.jsc)
    $wnd.jsc = {};
  if ($wnd.jsc.Wait) {
    var pkg = $wnd.jsc.Wait;
  }
  $wnd.jsc.Wait = function(){
    if (arguments.length == 1 && (arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Wait')) {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Wait(new Wait(), arguments[0]);
      $clinit_278();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Wait.prototype = new Object();
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Wait[p] = pkg[p];
    }
  }
  __0.show = function(arg0){
    this.instance.show_1(arg0);
  }
  ;
  __0.hide = function(){
    this.instance.hide_0();
  }
  ;
  __0.getElement = function(){
    var x = this.instance.getElement_0();
    return x;
  }
  ;
  $clinit_278();
  $put(impl_0.typeMap, 'jschismes.client.Wait', $wnd.jsc.Wait);
}

function getClass_172(){
  return Lorg_timepedia_exporter_client_ExporterBaseImpl_2_classLit;
}

function ExporterBaseImpl(){
}

_ = ExporterBaseImpl.prototype = new Object_0();
_.getClass$ = getClass_172;
_.typeId$ = 0;
function $ExporterBaseActual(this$static){
  this$static.typeMap = $HashMap(new HashMap());
  return this$static;
}

function getClass_171(){
  return Lorg_timepedia_exporter_client_ExporterBaseActual_2_classLit;
}

function ExporterBaseActual(){
}

_ = ExporterBaseActual.prototype = new ExporterBaseImpl();
_.getClass$ = getClass_171;
_.typeId$ = 0;
function $clinit_278(){
  $clinit_278 = nullMethod;
  impl_0 = $ExporterBaseActual(new ExporterBaseActual());
}

var impl_0;
function init_1(){
  !!$stats && $stats({moduleName:$moduleName, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date()).getTime(), type:'onModuleLoadStart', className:'jschismes.client.JsChismes'});
  $export0_2();
  $export0_8();
  $export0_5();
  $export0_3();
  $export0_5();
  $export0_4();
  $export0_5();
  $export0_1();
  $export0_9();
  $export0_5();
  $export0();
  $export0_6();
  $export0_0();
  $export0_7();
  $onLoadImpl();
}

function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      init_1();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    init_1();
  }
}

function nullMethod(){
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject'), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget'), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel'), Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel'), Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel'), Lcom_google_code_p_gwtchismes_client_GWTCPopupBox_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCPopupBox'), Lcom_google_code_p_gwtchismes_client_GWTCAlert_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCAlert'), Lcom_google_code_p_gwtchismes_client_GWTCAlert$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCAlert$1'), Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratorPanel'), Lcom_google_code_p_gwtchismes_client_GWTCBox_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCBox'), Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Label'), Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTML'), Lcom_google_code_p_gwtchismes_client_GWTCBox$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCBox$1'), Lcom_google_code_p_gwtchismes_client_GWTCBox$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCBox$2'), Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusWidget'), Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ButtonBase'), Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Button'), Lcom_google_code_p_gwtchismes_client_GWTCButton_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton'), Lcom_google_code_p_gwtchismes_client_GWTCButton$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$1'), Lcom_google_code_p_gwtchismes_client_GWTCButton$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$2'), Lcom_google_code_p_gwtchismes_client_GWTCButton$3_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$3'), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;'), Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Composite'), Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCSimpleDatePicker'), Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCDatePickerAbstract'), Lcom_google_code_p_gwtchismes_client_GWTCDatePicker_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCDatePicker'), _3Lcom_google_gwt_user_client_ui_DockPanel_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'DockPanel;'), Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract$MenuCommand_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCDatePickerAbstract$MenuCommand'), Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCDatePickerAbstract$1'), Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusPanel'), Lcom_google_code_p_gwtchismes_client_GWTCGlassPanel_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCGlassPanel'), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$1'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$2'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$3_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$3'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$4_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$4'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$5_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$5'), Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedPopupPanel'), Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox'), Lcom_google_code_p_gwtchismes_client_GWTCModalBox_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCModalBox'), Lcom_google_code_p_gwtchismes_client_GWTCModalBox$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCModalBox$1'), Lcom_google_code_p_gwtchismes_client_GWTCPopupBox$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCPopupBox$1'), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer'), Lcom_google_code_p_gwtchismes_client_GWTCPopupBox$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCPopupBox$2'), Lcom_google_code_p_gwtchismes_client_GWTCProgress_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCProgress'), Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$CellHTML_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCSimpleDatePicker$CellHTML'), Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$CellHTML$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCSimpleDatePicker$CellHTML$1'), Lcom_google_code_p_gwtchismes_client_GWTCWait_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCWait'), Lcom_google_code_p_gwtchismes_client_GWTCWait$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCWait$1'), _3Lcom_google_gwt_animation_client_Animation_2_classLit = createForArray('[Lcom.google.gwt.animation.client.', 'Animation;'), Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation'), Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation$1'), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), Lcom_google_gwt_i18n_client_constants_DateTimeConstants_1en_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'DateTimeConstants_en'), Ljava_util_Date_2_classLit = createForClass('java.util.', 'Date'), Lcom_google_gwt_i18n_client_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'DateRecord'), _3I_classLit = createForArray('', '[I'), Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat'), Lcom_google_gwt_i18n_client_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat$PatternPart'), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum'), _3_3D_classLit = createForArray('', '[[D'), Lcom_google_gwt_user_client_impl_DocumentRootImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'DocumentRootImpl'), _3Lcom_google_gwt_user_client_HistoryListener_2_classLit = createForArray('[Lcom.google.gwt.user.client.', 'HistoryListener;'), Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImpl'), Lcom_google_gwt_user_client_impl_HistoryImplStandard_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImplStandard'), Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbstractImagePrototype'), Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'ClippedImagePrototype'), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel'), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel'), Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CellPanel'), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection'), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList'), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList'), Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ChangeListenerCollection'), Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ClickListenerCollection'), _3Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'DockPanel$TmpRow;'), Lcom_google_gwt_user_client_ui_DockPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel'), Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$DockLayoutConstant'), Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$LayoutData'), Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$TmpRow'), Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable'), Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable'), Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$CellFormatter'), Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable$FlexCellFormatter'), Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusListenerCollection'), Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Grid'), Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$ColumnFormatter'), Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$RowFormatter'), Lcom_google_gwt_user_client_ui_HTMLTable$WidgetMapper_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$WidgetMapper'), Lcom_google_gwt_user_client_ui_HTMLTable$WidgetMapper$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$WidgetMapper$FreeNode'), Lcom_google_gwt_user_client_ui_HTMLTable$WidgetMapper$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$WidgetMapper$1'), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasVerticalAlignment$VerticalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalPanel'), Lcom_google_gwt_user_client_ui_Hyperlink_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Hyperlink'), Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image'), Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$State'), Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$UnclippedState'), Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'KeyboardListenerCollection'), Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListBox'), Lcom_google_gwt_user_client_ui_MenuBar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar'), Lcom_google_gwt_user_client_ui_MenuBar$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar$1'), Lcom_google_gwt_user_client_ui_MenuBar$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar$2'), Lcom_google_gwt_user_client_ui_MenuBar_1MenuBarImages_1generatedBundle_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar_MenuBarImages_generatedBundle'), Lcom_google_gwt_user_client_ui_MenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuItem'), Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MouseListenerCollection'), Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupListenerCollection'), Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'PopupPanel$AnimationType'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation$1'), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1'), Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel$1'), Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalPanel'), _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;'), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection'), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator'), Lcom_google_gwt_user_client_CommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandCanceledException'), Lcom_google_gwt_user_client_CommandExecutor_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor'), Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$CircularIterator'), Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$1'), Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$2'), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1'), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException'), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number'), _3C_classLit = createForArray('', '[C'), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'), Ljava_lang_Integer_2_classLit = createForClass('java.lang.', 'Integer'), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'), Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang.', 'NumberFormatException'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer'), Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder'), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException'), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap'), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap'), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet'), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet'), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator'), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry'), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull'), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString'), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl'), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1'), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1'), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap'), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet'), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl'), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException'), Ljava_util_Vector_2_classLit = createForClass('java.util.', 'Vector'), Ljschismes_client_Alert_2_classLit = createForClass('jschismes.client.', 'Alert'), Ljschismes_client_Alert$1_2_classLit = createForClass('jschismes.client.', 'Alert$1'), Ljschismes_client_Box_2_classLit = createForClass('jschismes.client.', 'Box'), Ljschismes_client_Button_2_classLit = createForClass('jschismes.client.', 'Button'), Ljschismes_client_Button$1_2_classLit = createForClass('jschismes.client.', 'Button$1'), Ljschismes_client_Const_2_classLit = createForClass('jschismes.client.', 'Const'), Ljschismes_client_DatePicker_2_classLit = createForClass('jschismes.client.', 'DatePicker'), Ljschismes_client_DatePicker$1_2_classLit = createForClass('jschismes.client.', 'DatePicker$1'), Ljschismes_client_IntervalSelector_2_classLit = createForClass('jschismes.client.', 'IntervalSelector'), Ljschismes_client_IntervalSelector$1_2_classLit = createForClass('jschismes.client.', 'IntervalSelector$1'), Ljschismes_client_JsChangeClosureExporterImpl_2_classLit = createForClass('jschismes.client.', 'JsChangeClosureExporterImpl'), Ljschismes_client_Utils_2_classLit = createForClass('jschismes.client.', 'Utils'), Ljschismes_client_Wait_2_classLit = createForClass('jschismes.client.', 'Wait'), Ljschismes_client_Popup_2_classLit = createForClass('jschismes.client.', 'Popup'), Ljschismes_client_Progress_2_classLit = createForClass('jschismes.client.', 'Progress'), Ljschismes_client_JsProperties_2_classLit = createForClass('jschismes.client.', 'JsProperties'), Ljschismes_client_JsProperties$JSChangeClosureImpl_2_classLit = createForClass('jschismes.client.', 'JsProperties$JSChangeClosureImpl'), Ljschismes_client_Progress$pTimer_2_classLit = createForClass('jschismes.client.', 'Progress$pTimer'), Lorg_timepedia_exporter_client_ExporterBaseImpl_2_classLit = createForClass('org.timepedia.exporter.client.', 'ExporterBaseImpl'), Lorg_timepedia_exporter_client_ExporterBaseActual_2_classLit = createForClass('org.timepedia.exporter.client.', 'ExporterBaseActual');
$stats && $stats({moduleName:'jschismes.JsChismes',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (jschismes_JsChismes) {
  var __gwt_initHandlers = jschismes_JsChismes.__gwt_initHandlers;  jschismes_JsChismes.onScriptLoad(gwtOnLoad);
}
})();
