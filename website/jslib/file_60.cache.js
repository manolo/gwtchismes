(function(){
var $gwt_version = "2.0.1";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $strongName = 'file_60';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'jschismes.JsChismesPretty',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var _, N8000000000000000_longLit = [0, -9223372036854775808], P0_longLit = [0, 0], P3c_longLit = [60, 0], P65_longLit = [101, 0], P78_longLit = [120, 0], P98_longLit = [152, 0], P3e8_longLit = [1000, 0], P3200_longLit = [12800, 0], P3232_longLit = [12850, 0], P6500_longLit = [25856, 0], P9800_longLit = [38912, 0], Pcbcb_longLit = [52171, 0], P320032_longLit = [3276850, 0], P320098_longLit = [3276952, 0], P323200_longLit = [3289600, 0], P323298_longLit = [3289752, 0], P3232fd_longLit = [3289853, 0], P326565_longLit = [3302757, 0], P3265fd_longLit = [3302909, 0], P329898_longLit = [3315864, 0], P32cb00_longLit = [3328768, 0], P330000_longLit = [3342336, 0], P333333_longLit = [3355443, 0], P33ccff_longLit = [3394815, 0], P33ff33_longLit = [3407667, 0], P33ffff_longLit = [3407871, 0], P6500cb_longLit = [6619339, 0], P653200_longLit = [6631936, 0], P653232_longLit = [6631986, 0], P653265_longLit = [6632037, 0], P6532fd_longLit = [6632189, 0], P656500_longLit = [6644992, 0], P660000_longLit = [6684672, 0], P666666_longLit = [6710886, 0], P6666cc_longLit = [6710988, 0], P66cccc_longLit = [6737100, 0], P66ff99_longLit = [6750105, 0], P66ffff_longLit = [6750207, 0], P983200_longLit = [9974272, 0], P983298_longLit = [9974424, 0], P986532_longLit = [9987378, 0], P989800_longLit = [10000384, 0], P990000_longLit = [10027008, 0], P999999_longLit = [10066329, 0], P9999ff_longLit = [10066431, 0], P99ff99_longLit = [10092441, 0], P99ffff_longLit = [10092543, 0], Pc0c0c0_longLit = [12632256, 0], Pcb32cb_longLit = [13316811, 0], Pcb6500_longLit = [13329664, 0], Pcb9832_longLit = [13342770, 0], Pcc0000_longLit = [13369344, 0], Pcc66cc_longLit = [13395660, 0], Pcccccc_longLit = [13421772, 0], Pccccff_longLit = [13421823, 0], Pccffff_longLit = [13434879, 0], Pfd6500_longLit = [16606464, 0], Pfdcb00_longLit = [16632576, 0], Pfdcb32_longLit = [16632626, 0], Pff0000_longLit = [16711680, 0], Pff6666_longLit = [16737894, 0], Pff9900_longLit = [16750848, 0], Pff9966_longLit = [16750950, 0], Pff99ff_longLit = [16751103, 0], Pffcc66_longLit = [16764006, 0], Pffcc99_longLit = [16764057, 0], Pffcccc_longLit = [16764108, 0], Pffccff_longLit = [16764159, 0], Pffff00_longLit = [16776960, 0], Pffff33_longLit = [16777011, 0], Pffff66_longLit = [16777062, 0], Pffff99_longLit = [16777113, 0], Pffffcc_longLit = [16777164, 0], Pffffff_longLit = [16777215, 0], P1000000_longLit = [16777216, 0], P7fffffffffffffff_longLit = [4294967295, 9223372032559808512];
function nullMethod(){
}

function equals(other){
  return this === (other == null?null:other);
}

function getClass_0(){
  return Ljava_lang_Object_2_classLit;
}

function hashCode_0(){
  return this.$H || (this.$H = ++sNextHashId);
}

function toString_0(){
  return (this.typeMarker$ == nullMethod || this.typeId$ == 2?this.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName + '@' + toPowerOfTwoString(this.typeMarker$ == nullMethod || this.typeId$ == 2?this.hashCode$():this.$H || (this.$H = ++sNextHashId), 4);
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = equals;
_.getClass$ = getClass_0;
_.hashCode$ = hashCode_0;
_.toString$ = toString_0;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
_.typeId$ = 1;
function $addStyleDependentName(this$static, styleSuffix){
  this$static.addStyleName(this$static.getStylePrimaryName() + '-' + styleSuffix);
}

function $addStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style, true);
}

function $removeStyleDependentName(this$static, styleSuffix){
  this$static.removeStyleName(this$static.getStylePrimaryName() + '-' + styleSuffix);
}

function $removeStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style, false);
}

function $replaceNode(node, newNode){
  var p_0 = node.parentNode;
  if (!p_0) {
    return;
  }
  p_0.insertBefore(newNode, node);
  p_0.removeChild(node);
}

function $setElement(this$static, elem){
  this$static.element_0 = elem;
}

function $setHeight(this$static, height){
  this$static.getElement_0().style['height'] = height;
}

function $setSize(this$static, width, height){
  this$static.element_0.style['width'] = width;
  this$static.element_0.style['height'] = height;
}

function $setStyleName(this$static, style){
  this$static.getStyleElement()['className'] = style;
}

function $setTitle(this$static, title){
  title == null || title.length == 0?(this$static.getElement_0().removeAttribute('title') , undefined):(this$static.getElement_0().setAttribute('title', title) , undefined);
}

function $setVisible(this$static, visible){
  this$static.getElement_0().style.display = visible?'':'none';
}

function $setWidth(this$static, width){
  this$static.getElement_0().style['width'] = width;
}

function $toString(this$static){
  if (!this$static.element_0) {
    return '(null handle)';
  }
  return $toString_1(($clinit_116() , this$static.getElement_0()));
}

function addStyleDependentName(styleSuffix){
  this.addStyleName(this.getStylePrimaryName() + '-' + styleSuffix);
}

function addStyleName(style){
  setStyleName(this.getStyleElement(), style, true);
}

function getClass_1(){
  return Lcom_google_gwt_user_client_ui_UIObject_2_classLit;
}

function getElement(){
  return this.element_0;
}

function getStyleElement(){
  return this.getElement_0();
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = elem['className'] == null?null:String(elem['className']);
  spaceIdx = fullClassName.indexOf(fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx - 0);
  }
  return fullClassName;
}

function getStylePrimaryName_0(){
  return getStylePrimaryName(this.getStyleElement());
}

function removeStyleName(style){
  setStyleName(this.getStyleElement(), style, false);
}

function setHeight(height){
  this.getElement_0().style['height'] = height;
}

function setStyleName(elem, style, add){
  if (!elem) {
    throw $RuntimeException(new RuntimeException, 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw $IllegalArgumentException(new IllegalArgumentException, 'Style names cannot be empty');
  }
  add?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStyleName_0(style){
  this.getStyleElement()['className'] = style;
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw $RuntimeException(new RuntimeException, 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw $IllegalArgumentException(new IllegalArgumentException, 'Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function setTitle(title){
  $setTitle(this, title);
}

function setVisible_0(visible){
  this.getElement_0().style.display = visible?'':'none';
}

function setWidth(width){
  this.getElement_0().style['width'] = width;
}

function toString_1(){
  return $toString(this);
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
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0;
_.addStyleDependentName = addStyleDependentName;
_.addStyleName = addStyleName;
_.getClass$ = getClass_1;
_.getElement_0 = getElement;
_.getStyleElement = getStyleElement;
_.getStylePrimaryName = getStylePrimaryName_0;
_.removeStyleName = removeStyleName;
_.setHeight = setHeight;
_.setStyleName = setStyleName_0;
_.setTitle = setTitle;
_.setVisible = setVisible_0;
_.setWidth = setWidth;
_.toString$ = toString_1;
_.typeId$ = 3;
_.element_0 = null;
function $addDomHandler(this$static, handler, type){
  $sinkEvents(this$static, $eventGetTypeInt(type.name_0));
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = $HandlerManager(new HandlerManager, this$static)):this$static.handlerManager, type, handler);
}

function $addHandler(this$static, handler, type){
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = $HandlerManager(new HandlerManager, this$static)):this$static.handlerManager, type, handler);
}

function $fireEvent(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw $IllegalStateException_0(new IllegalStateException, "Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  this$static.getElement_0().__listener = this$static;
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && $sinkEvents(this$static, bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(($clinit_116() , event_0).type)) {
    case 16:
    case 32:
      related = $eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild_0(this$static.getElement_0(), related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.getElement_0());
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw $IllegalStateException_0(new IllegalStateException, "Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      this$static.getElement_0().__listener = null;
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_341();
    $containsKey(widgetsToDetach.map, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 51)) {
    dynamicCast(this$static.parent_0, 51).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw $IllegalStateException_0(new IllegalStateException, "This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement_0(this$static, elem){
  this$static.attached && (this$static.element_0.__listener = null , undefined);
  !!this$static.element_0 && $replaceNode(this$static.element_0, elem);
  this$static.element_0 = elem;
  this$static.attached && (this$static.element_0.__listener = this$static , undefined);
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw $IllegalStateException_0(new IllegalStateException, 'Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?$sinkEvents_0(this$static.getElement_0(), eventBitsToAdd | (this$static.getElement_0().__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);
}

function doAttachChildren(){
}

function doDetachChildren(){
}

function fireEvent(event_0){
  !!this.handlerManager && $fireEvent_0(this.handlerManager, event_0);
}

function getClass_2(){
  return Lcom_google_gwt_user_client_ui_Widget_2_classLit;
}

function isAttached(){
  return this.attached;
}

function onAttach(){
  $onAttach(this);
}

function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}

function onDetach(){
  $onDetach(this);
}

function onLoad(){
}

function onUnload(){
}

function Widget(){
}

_ = Widget.prototype = new UIObject;
_.doAttachChildren = doAttachChildren;
_.doDetachChildren = doDetachChildren;
_.fireEvent = fireEvent;
_.getClass$ = getClass_2;
_.isAttached = isAttached;
_.onAttach = onAttach;
_.onBrowserEvent = onBrowserEvent;
_.onDetach = onDetach;
_.onLoad = onLoad;
_.onUnload = onUnload;
_.typeId$ = 4;
_.attached = false;
_.eventsToSink = 0;
_.handlerManager = null;
_.layoutData = null;
_.parent_0 = null;
function $adopt(this$static, child){
  $setParent(child, this$static);
}

function $clear(this$static){
  var it;
  it = this$static.iterator_0();
  while (it.hasNext()) {
    it.next_0();
    it.remove_0();
  }
}

function add_0(child){
  throw $UnsupportedOperationException(new UnsupportedOperationException, 'This panel does not support no-arg add()');
}

function doAttachChildren_0(){
  tryCommand(this, ($clinit_275() , attachCommand));
}

function doDetachChildren_0(){
  tryCommand(this, ($clinit_275() , detachCommand));
}

function getClass_3(){
  return Lcom_google_gwt_user_client_ui_Panel_2_classLit;
}

function onLoad_0(){
}

function onUnload_0(){
}

function Panel(){
}

_ = Panel.prototype = new Widget;
_.add_0 = add_0;
_.doAttachChildren = doAttachChildren_0;
_.doDetachChildren = doDetachChildren_0;
_.getClass$ = getClass_3;
_.onLoad = onLoad_0;
_.onUnload = onUnload_0;
_.typeId$ = 5;
function $SimplePanel(this$static){
  this$static.element_0 = ($clinit_116() , $doc).createElement('div');
  return this$static;
}

function $add(this$static, w){
  if (this$static.getWidget()) {
    throw $IllegalStateException_0(new IllegalStateException, 'SimplePanel can only contain one child widget');
  }
  this$static.setWidget(w);
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && this$static.remove(this$static.widget);
  this$static.widget = w;
  if (w) {
    this$static.getContainerElement().appendChild(this$static.widget.getElement_0());
    $setParent(w, this$static);
  }
}

function add_1(w){
  $add(this, w);
}

function getClass_4(){
  return Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit;
}

function getContainerElement(){
  return this.element_0;
}

function getWidget(){
  return this.widget;
}

function iterator(){
  return $SimplePanel$1(new SimplePanel$1, this);
}

function remove(w){
  if (this.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    this.getContainerElement().removeChild(w.getElement_0());
    this.widget = null;
  }
  return true;
}

function setWidget(w){
  $setWidget(this, w);
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel;
_.add_0 = add_1;
_.getClass$ = getClass_4;
_.getContainerElement = getContainerElement;
_.getWidget = getWidget;
_.iterator_0 = iterator;
_.remove = remove;
_.setWidget = setWidget;
_.typeId$ = 6;
_.widget = null;
function $clinit_4(){
  $clinit_4 = nullMethod;
  $clinit_364();
}

function $PopupPanel_0(this$static, autoHide){
  $clinit_4();
  this$static.element_0 = ($clinit_116() , $doc).createElement('div');
  this$static.glassResizer = new PopupPanel$1;
  this$static.animType = ($clinit_330() , CENTER_0);
  this$static.resizeAnimation = $PopupPanel$ResizeAnimation(new PopupPanel$ResizeAnimation, this$static);
  this$static.element_0.appendChild($createElement_1());
  $setPopupPosition(this$static, 0, 0);
  $getStyleElement_1($getFirstChildElement(this$static.element_0))['className'] = 'gwt-PopupPanel';
  $getContainerElement_2($getFirstChildElement(this$static.element_0))['className'] = 'popupContent';
  this$static.autoHide = autoHide;
  this$static.autoHideOnHistoryEvents = autoHide;
  return this$static;
}

function $center(this$static){
  var initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    this$static.element_0.style['visibility'] = 'hidden';
    this$static.isAnimationEnabled = false;
    this$static.show_0();
  }
  left = $getClientWidth_0($doc) - (parseInt(this$static.element_0['offsetWidth']) || 0) >> 1;
  top_0 = $getClientHeight_0($doc) - (parseInt(this$static.element_0['offsetHeight']) || 0) >> 1;
  $setPopupPosition(this$static, max_0($getScrollLeft_0(($clinit_116() , $doc)) + left, 0), max_0($getScrollTop_0($doc) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      $setClip(this$static.element_0, 'rect(0px, 0px, 0px, 0px)');
      this$static.element_0.style['visibility'] = 'visible';
      $run(this$static.resizeAnimation, 200, (new Date).getTime());
    }
     else {
      this$static.element_0.style['visibility'] = 'visible';
    }
  }
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = ($clinit_116() , event_0).target;
  if (is_0(target)) {
    return $isOrHasChild_0(this$static.element_0, target);
  }
  return false;
}

function $hide_0(this$static, autoClosed){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static, false, true);
  fire_1(this$static, autoClosed);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent(event_0);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type = $eventGetTypeInt(($clinit_116() , nativeEvent).type);
  switch (type) {
    case 128:
      {
        (nativeEvent.which || nativeEvent.keyCode || 0) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 512:
      {
        (nativeEvent.which || nativeEvent.keyCode || 0) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 256:
      {
        (nativeEvent.which || nativeEvent.keyCode || 0) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 4:
      if (sCaptureElem) {
        event_0.isConsumed = true;
        return;
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        $hide_0(this$static, true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.target;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setPopupPosition(this$static, left, top_0){
  var elem, style, style_0;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= (style = $wnd.getComputedStyle(($clinit_116() , $doc).documentElement, '') , parseInt(style.marginLeft) + parseInt(style.borderLeftWidth));
  top_0 -= (style_0 = $wnd.getComputedStyle($doc.documentElement, '') , parseInt(style_0.marginTop) + parseInt(style_0.borderTopWidth));
  elem = this$static.element_0;
  elem.style['left'] = left + ($clinit_137() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setPopupPositionAndShow(this$static, callback){
  this$static.element_0.style['visibility'] = 'hidden';
  $show(this$static);
  $setPosition(callback, (parseInt(this$static.element_0['offsetWidth']) || 0 , parseInt(this$static.element_0['offsetHeight']) || 0));
  this$static.element_0.style['visibility'] = 'visible';
}

function $setState(this$static, showing, maybeAnimate){
  maybeAnimate?$setState_0(this$static.resizeAnimation, showing):$cancel_0(this$static.resizeAnimation);
  this$static.showing = showing;
  if (showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler($PopupPanel$3(new PopupPanel$3, this$static));
    this$static.historyHandlerRegistration = ($clinit_258() , $addValueChangeHandler_3(impl_0, $PopupPanel$4(new PopupPanel$4, this$static)));
  }
   else if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration);
    this$static.nativePreviewHandlerRegistration = null;
    $removeHandler(this$static.historyHandlerRegistration);
    this$static.historyHandlerRegistration = null;
  }
}

function $setWidget_0(this$static, w){
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
  $setState(this$static, true, true);
}

function center(){
  $center(this);
}

function getClass_5(){
  return Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit;
}

function getContainerElement_0(){
  return $getContainerElement_2($getFirstChildElement(($clinit_116() , this.element_0)));
}

function getStyleElement_0(){
  return $getStyleElement_1($getFirstChildElement(($clinit_116() , this.element_0)));
}

function hide(){
  $hide_0(this, false);
}

function onPreviewNativeEvent(event_0){
}

function onUnload_1(){
  this.showing && $setState(this, false, false);
}

function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}

function setTitle_0(title){
  var containerElement;
  containerElement = $getContainerElement_2($getFirstChildElement(($clinit_116() , this.element_0)));
  title == null || title.length == 0?(containerElement.removeAttribute('title') , undefined):(containerElement.setAttribute('title', title) , undefined);
}

function setVisible_1(visible){
  this.element_0.style['visibility'] = visible?'visible':'hidden';
}

function setWidget_0(w){
  $setWidget(this, w);
  $maybeUpdateSize(this);
}

function setWidth_0(width){
  this.desiredWidth = width;
  $maybeUpdateSize(this);
  width.length == 0 && (this.desiredWidth = null);
}

function show(){
  $show(this);
}

function PopupPanel(){
}

_ = PopupPanel.prototype = new SimplePanel;
_.center_0 = center;
_.getClass$ = getClass_5;
_.getContainerElement = getContainerElement_0;
_.getStyleElement = getStyleElement_0;
_.hide_0 = hide;
_.onPreviewNativeEvent = onPreviewNativeEvent;
_.onUnload = onUnload_1;
_.setHeight = setHeight_0;
_.setTitle = setTitle_0;
_.setVisible = setVisible_1;
_.setWidget = setWidget_0;
_.setWidth = setWidth_0;
_.show_0 = show;
_.typeId$ = 7;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.desiredHeight = null;
_.desiredWidth = null;
_.glass = null;
_.historyHandlerRegistration = null;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = -1;
_.modal = false;
_.nativePreviewHandlerRegistration = null;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = -1;
function $clinit_5(){
  $clinit_5 = nullMethod;
  $clinit_4();
}

function $add_1(this$static, object, direction){
  var widget;
  widget = objectToWidget(object);
  this$static.panelbox?this$static.panelbox.add_1(widget, direction):$add_8(this$static.panel, widget, direction);
}

function $hide_1(this$static){
  $hide_0(this$static, false);
  !!this$static.background && $hide_4(this$static.background);
}

function $initialize(this$static, options){
  $clear(this$static);
  if ((options & 4) == 4) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox, 'GWTCBox-grey');
  }
   else if ((options & 8) == 8) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox, 'GWTCBox-blue');
    $add(this$static, this$static.panelbox);
  }
   else if ((options & 2) == 2) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox, 'GWTCBox');
    $add(this$static, this$static.panelbox);
  }
   else {
    this$static.panel = $DockPanel(new DockPanel);
    $add(this$static, this$static.panel);
  }
  this$static.isAnimationEnabled = (options & 32) == 32;
  if ((options & 16) != 16) {
    this$static.background = $GWTCGlassPanel(new GWTCGlassPanel);
    (options & 64) != 64 && $addDomHandler(this$static.background, $GWTCPopupBox$1(new GWTCPopupBox$1, this$static), ($clinit_26() , $clinit_26() , TYPE));
  }
  $setZIndex(this$static, 999);
  this$static.desiredWidth = 'auto';
  $maybeUpdateSize(this$static);
  'auto'.length == 0 && (this$static.desiredWidth = null);
  $getStyleElement_1($getFirstChildElement(($clinit_116() , this$static.element_0)))['className'] = 'GWTCPopupBox';
  !!this$static.panelbox && $addStyleName(this$static, getStylePrimaryName($getStyleElement_1($getFirstChildElement(this$static.element_0))) + '-box');
}

function $setZIndex(this$static, z){
  this$static.element_0.style['zIndex'] = '' + z;
  !!this$static.background && (this$static.background.element_0.style['zIndex'] = '998' , undefined);
}

function $show_0(this$static, timeout){
  var t;
  if (timeout > 0) {
    t = $GWTCPopupBox$2(new GWTCPopupBox$2, this$static);
    $schedule(t, timeout * 1000);
  }
  this$static.desiredWidth = 'auto';
  $maybeUpdateSize(this$static);
  'auto'.length == 0 && (this$static.desiredWidth = null);
  $center(this$static);
}

function add_2(w){
  this.add_1(w, ($clinit_286() , NORTH));
}

function add_3(object, direction){
  var widget;
  widget = objectToWidget(object);
  this.panelbox?this.panelbox.add_1(widget, direction):$add_8(this.panel, widget, direction);
}

function center_0(){
  this.desiredWidth = 'auto';
  $maybeUpdateSize(this);
  'auto'.length == 0 && (this.desiredWidth = null);
  $center(this);
}

function getClass_6(){
  return Lcom_google_code_p_gwtchismes_client_GWTCPopupBox_2_classLit;
}

function hide_0(){
  $hide_1(this);
}

function initialize(options){
  $initialize(this, options);
}

function show_0(){
  !!this.background && $show_4(this.background);
  $show(this);
}

function GWTCPopupBox(){
}

_ = GWTCPopupBox.prototype = new PopupPanel;
_.add_0 = add_2;
_.add_1 = add_3;
_.center_0 = center_0;
_.getClass$ = getClass_6;
_.hide_0 = hide_0;
_.initialize = initialize;
_.show_0 = show_0;
_.typeId$ = 8;
_.background = null;
_.panel = null;
_.panelbox = null;
function $clinit_6(){
  $clinit_6 = nullMethod;
  $clinit_5();
}

function $GWTCAlert(this$static, options){
  $clinit_6();
  $PopupPanel_0(this$static, (64 & 64) != 64);
  this$static.initialize(64);
  $initialize_0(this$static, options);
  return this$static;
}

function $initialize_0(this$static, options){
  $initialize(this$static, options);
  this$static.contentTable = $FlexTable(new FlexTable);
  this$static.txt = $HTML(new HTML);
  this$static.okButton = $GWTCButton_0(new GWTCButton, 'OK');
  $setImage(this$static.okButton, $Image(new Image_0, (!dialogOk && (dialogOk = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACKUlEQVR42u3UX0hTURwH8DFXWUks2p/r3JbN0u7u3XSOTbLEoj1ETp0tXypyaRhUNkZ/oLHdubm7JcmCIKu1gdVD+CwS0UMU9NJbIP23iHoxEx/qad38du4Jersyews6cPlxued++J77O+eqVP+HZp8Kmg41VvnVtMr3K0YquyqgO1aJ2sha8AkDmtM14AUDLOHV0B6twJpOdXloVVAD69A6NI2Y4MluhjtrQbNohje9Bb3XfOjLd4GNGFEVLAO0hbVwZywUoZVcDbGNOF7sxddv85B+SAjdCsB6ev3y2LaTJjgSRrhIqoaYFvywAc4Ug10ZFo9fPoQ87j26jXaRByfoUX/KpAxy5wiUNmPv5SaM3U8iVAhg64UNuPogS6G3n16h+1I72JiOJLaCO88oY85oNU0yUAzSl5/NPkV0cgifFz6iVCohUhiEPaonkJkuX56viLWJHBpT1ejIteLFhxlISxIWvy9QePLJXXjjdWgkn0CGXKTDbaJdGQte8cGRZOBKmHEm34+f0hKFZt4/R/fobrDxTb+bIpJUZF5Pbo8ydvbOCbSINprOE7dhfCqH+cUviBQHwV7U/VmenMqbtiE80b98R/tuBkhHGTiGGbQKLA5kfGhJ1FFATiRXnjw/fN1f3sYdKByEZ6QW9rgeXExPtkoNRRxJI9wpK0L5npUdq7HpJI7c8GOnuB1OgcGOdD0Oje/H6JSAvz7ss3Nv8G7uNeT67/6yfgGjBjkSX8KaRgAAAABJRU5ErkJggg==', 0, 0, 19, 19)) , dialogOk)));
  (options & 1) == 1 && (this$static.okButtonDisabled = true);
  this$static.contentTable.getStyleElement()['className'] = 'panel';
  $addStyleName_2(this$static.contentTable.cellFormatter, 0, 0, 'msgCell');
  $setWidget_2(this$static.contentTable, 0, 0, this$static.txt);
  $addStyleName_2(this$static.contentTable.cellFormatter, 1, 0, 'btnCell');
  $setWidget_2(this$static.contentTable, 1, 0, this$static.okButton);
  $addStyleName_0(this$static.okButton, 'okButton');
  $addStyleName_0(this$static.okButton, 'gwtc-alert-rndbutton');
  $addDomHandler(this$static.okButton, $GWTCAlert$1(new GWTCAlert$1, this$static), ($clinit_26() , $clinit_26() , TYPE));
  $setVisible_1(this$static.okButton, !this$static.okButtonDisabled);
  $getStyleElement_1($getFirstChildElement(($clinit_116() , this$static.element_0)))['className'] = 'GWTCAlert';
  ((options & 4) == 4 || (options & 8) == 8 || (options & 2) == 2) && $addStyleName(this$static, getStylePrimaryName($getStyleElement_1($getFirstChildElement(this$static.element_0))) + '-box');
  $add_1(this$static, this$static.contentTable, ($clinit_286() , NORTH));
}

function alert_0(s){
  this.txt.element_0.innerHTML = $replaceAll($replaceAll(s, '\\n', '<br/>'), ' ', '&nbsp;') || '';
  this.desiredWidth = 'auto';
  $maybeUpdateSize(this);
  'auto'.length == 0 && (this.desiredWidth = null);
  $center(this);
}

function getClass_7(){
  return Lcom_google_code_p_gwtchismes_client_GWTCAlert_2_classLit;
}

function hide_1(){
  $hide_1(this);
}

function initialize_0(options){
  $initialize_0(this, options);
}

function show_1(){
  !!this.background && $show_4(this.background);
  $show(this);
  $setFocus_0(this.okButton, true);
}

function GWTCAlert(){
}

_ = GWTCAlert.prototype = new GWTCPopupBox;
_.alert_0 = alert_0;
_.getClass$ = getClass_7;
_.hide_0 = hide_1;
_.initialize = initialize_0;
_.show_0 = show_1;
_.typeId$ = 9;
_.contentTable = null;
_.okButton = null;
_.okButtonDisabled = false;
_.txt = null;
function $GWTCAlert$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_8(){
  return Lcom_google_code_p_gwtchismes_client_GWTCAlert$1_2_classLit;
}

function onClick(event_0){
  this.this$0.hide_0();
}

function GWTCAlert$1(){
}

_ = GWTCAlert$1.prototype = new Object_0;
_.getClass$ = getClass_8;
_.onClick = onClick;
_.typeId$ = 10;
_.this$0 = null;
function $clinit_8(){
  $clinit_8 = nullMethod;
  DEFAULT_ROW_STYLENAMES = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['top', 'middle', 'bottom']);
}

function $DecoratorPanel(this$static, rowStyles, containerIndex){
  var i, row, table, trElem;
  $clinit_8();
  this$static.element_0 = ($clinit_116() , $doc).createElement('table');
  table = this$static.element_0;
  this$static.tbody = $doc.createElement('tbody');
  table.appendChild(this$static.tbody);
  table['cellSpacing'] = 0;
  table['cellPadding'] = 0;
  for (i = 0; i < rowStyles.length; ++i) {
    row = (trElem = $doc.createElement('tr') , trElem['className'] = rowStyles[i] , $clinit_221() , trElem.appendChild(createTD(rowStyles[i] + 'Left')) , trElem.appendChild(createTD(rowStyles[i] + 'Center')) , trElem.appendChild(createTD(rowStyles[i] + 'Right')) , trElem);
    this$static.tbody.appendChild(row);
    i == containerIndex && (this$static.containerElem = $getFirstChildElement($getChild(row, 1)));
  }
  this$static.element_0['className'] = 'gwt-DecoratorPanel';
  return this$static;
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = ($clinit_116() , $doc).createElement('td');
  inner = $doc.createElement('div');
  tdElem.appendChild(inner);
  tdElem['className'] = styleName;
  inner['className'] = styleName + 'Inner';
  return tdElem;
}

function getClass_9(){
  return Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit;
}

function getContainerElement_1(){
  return this.containerElem;
}

function DecoratorPanel(){
}

_ = DecoratorPanel.prototype = new SimplePanel;
_.getClass$ = getClass_9;
_.getContainerElement = getContainerElement_1;
_.typeId$ = 11;
_.containerElem = null;
_.tbody = null;
var DEFAULT_ROW_STYLENAMES;
function $clinit_9(){
  $clinit_9 = nullMethod;
  $clinit_8();
}

function $GWTCBox(this$static){
  $clinit_9();
  $DecoratorPanel(this$static, DEFAULT_ROW_STYLENAMES, 1);
  this$static.title = $HTML(new HTML);
  this$static.text_0 = $HTML(new HTML);
  this$static.panel = $DockPanel(new DockPanel);
  $add(this$static, this$static.panel);
  this$static.panel.getStyleElement()['className'] = 'panel';
  this$static.element_0['className'] = 'GWTCBox';
  $add_8(this$static.panel, this$static.title, ($clinit_286() , NORTH));
  $add_8(this$static.panel, this$static.text_0, NORTH);
  return this$static;
}

function $GWTCBox_0(this$static, style){
  $clinit_9();
  $GWTCBox(this$static);
  !$equals_1('GWTCBox', style) && setStyleName(this$static.element_0, style, true);
  return this$static;
}

function $setText(this$static, text){
  this$static.text_0.element_0.innerHTML = (text == null?'':'<p class="text">' + text + '<\/p>') || '';
}

function $setTitle_0(this$static, title){
  this$static.title.element_0.innerHTML = (title == null?'':'<h3 class="title">' + title + '<\/h3>') || '';
}

function add_4(w){
  this.add_1(w, ($clinit_286() , NORTH));
}

function add_5(object, direction){
  $add_8(this.panel, objectToWidget(object), direction);
}

function getClass_10(){
  return Lcom_google_code_p_gwtchismes_client_GWTCBox_2_classLit;
}

function iterator_0(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this.panel.children);
}

function objectToWidget(object){
  var html_0;
  $clinit_9();
  var element, html;
  if (object == null) {
    html = null;
  }
   else if (object != null && canCast(object.typeId$, 1)) {
    html = $GWTCBox$1(new GWTCBox$1, dynamicCast(object, 1));
  }
   else if (object != null && canCast(object.typeId$, 2)) {
    html = dynamicCast(object, 2);
  }
   else {
    element = dynamicCastJso(object);
    $equalsIgnoreCase(($clinit_116() , element).tagName, 'div') || $equalsIgnoreCase(element.tagName, 'span')?(html = (html_0 = $HTML_1(new HTML, element) , $onAttach(html_0) , $clinit_341() , $add_13(widgetsToDetach, html_0) , html_0)):(html = $GWTCBox$2(new GWTCBox$2, element));
  }
  return html;
}

function remove_0(w){
  return $remove_2(this.panel, w);
}

function setTitle_1(title){
  this.title.element_0.innerHTML = (title == null?'':'<h3 class="title">' + title + '<\/h3>') || '';
}

function setWidth_1(width){
  var topCenter;
  this.element_0.style['width'] = width;
  topCenter = $getChild($getChild($getChild(this.element_0, 0), 0), 1);
  $equals_1(width, 'auto')?(topCenter.style['width'] = 'auto' , undefined):(topCenter.style['width'] = '100%' , undefined);
}

function GWTCBox(){
}

_ = GWTCBox.prototype = new DecoratorPanel;
_.add_0 = add_4;
_.add_1 = add_5;
_.getClass$ = getClass_10;
_.iterator_0 = iterator_0;
_.remove = remove_0;
_.setTitle = setTitle_1;
_.setWidth = setWidth_1;
_.typeId$ = 12;
function $Label(this$static){
  this$static.element_0 = ($clinit_116() , $doc).createElement('div');
  this$static.element_0['className'] = 'gwt-Label';
  return this$static;
}

function $Label_0(this$static, text){
  $Label(this$static);
  ($clinit_116() , this$static.element_0).textContent = text || '';
  return this$static;
}

function addClickHandler(handler){
  return $addDomHandler(this, handler, ($clinit_26() , $clinit_26() , TYPE));
}

function getClass_11(){
  return Lcom_google_gwt_user_client_ui_Label_2_classLit;
}

function setText(text){
  ($clinit_116() , this.element_0).textContent = text || '';
}

function Label(){
}

_ = Label.prototype = new Widget;
_.addClickHandler = addClickHandler;
_.getClass$ = getClass_11;
_.setText_0 = setText;
_.typeId$ = 13;
function $HTML(this$static){
  this$static.element_0 = ($clinit_116() , $doc).createElement('div');
  this$static.element_0['className'] = 'gwt-HTML';
  return this$static;
}

function $HTML_0(this$static, html){
  $HTML(this$static);
  this$static.element_0.innerHTML = html || '';
  return this$static;
}

function $HTML_1(this$static, element){
  this$static.element_0 = element;
  return this$static;
}

function getClass_12(){
  return Lcom_google_gwt_user_client_ui_HTML_2_classLit;
}

function HTML(){
}

_ = HTML.prototype = new Label;
_.getClass$ = getClass_12;
_.typeId$ = 14;
function $GWTCBox$1(this$static, $anonymous0){
  $HTML(this$static);
  this$static.element_0.innerHTML = $anonymous0 || '';
  return this$static;
}

function getClass_13(){
  return Lcom_google_code_p_gwtchismes_client_GWTCBox$1_2_classLit;
}

function onDetach_0(){
  this.attached && $onDetach(this);
}

function GWTCBox$1(){
}

_ = GWTCBox$1.prototype = new HTML;
_.getClass$ = getClass_13;
_.onDetach = onDetach_0;
_.typeId$ = 15;
function $GWTCBox$2(this$static, $anonymous0){
  this$static.element_0 = $anonymous0;
  return this$static;
}

function getClass_14(){
  return Lcom_google_code_p_gwtchismes_client_GWTCBox$2_2_classLit;
}

function GWTCBox$2(){
}

_ = GWTCBox$2.prototype = new SimplePanel;
_.getClass$ = getClass_14;
_.typeId$ = 16;
function $clinit_14(){
  $clinit_14 = nullMethod;
  $clinit_361();
}

function $FocusWidget(this$static, elem){
  $clinit_14();
  this$static.element_0 = elem;
  this$static.element_0.tabIndex = 0;
  return this$static;
}

function $setElement_0(this$static, elem){
  this$static.element_0 = elem;
  this$static.setTabIndex(0);
}

function addClickHandler_0(handler){
  return $addDomHandler(this, handler, ($clinit_26() , $clinit_26() , TYPE));
}

function getClass_15(){
  return Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit;
}

function setTabIndex(index){
  this.getElement_0().tabIndex = index;
}

function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget;
_.addClickHandler = addClickHandler_0;
_.getClass$ = getClass_15;
_.setTabIndex = setTabIndex;
_.typeId$ = 17;
function $clinit_15(){
  $clinit_15 = nullMethod;
  $clinit_14();
}

function $ButtonBase(this$static, elem){
  $clinit_15();
  this$static.element_0 = elem;
  this$static.setTabIndex(0);
  return this$static;
}

function getClass_16(){
  return Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit;
}

function setHTML(html){
  this.getElement_0().innerHTML = html || '';
}

function setText_0(text){
  ($clinit_116() , this.getElement_0()).textContent = text || '';
}

function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget;
_.getClass$ = getClass_16;
_.setHTML = setHTML;
_.setText_0 = setText_0;
_.typeId$ = 18;
function $clinit_16(){
  $clinit_16 = nullMethod;
  $clinit_15();
}

function $Button(this$static){
  var e;
  $clinit_16();
  $ButtonBase(this$static, (e = ($clinit_116() , $doc).createElement('BUTTON') , e.type = 'button' , e));
  this$static.setStyleName('gwt-Button');
  return this$static;
}

function $Button_0(this$static, html){
  $clinit_16();
  $Button(this$static);
  this$static.setHTML(html);
  return this$static;
}

function click(){
  $buttonClick(($clinit_116() , this.getElement_0()));
}

function getClass_17(){
  return Lcom_google_gwt_user_client_ui_Button_2_classLit;
}

function Button(){
}

_ = Button.prototype = new ButtonBase;
_.click = click;
_.getClass$ = getClass_17;
_.typeId$ = 19;
function $clinit_17(){
  $clinit_17 = nullMethod;
  $clinit_16();
}

function $$init_2(this$static){
  this$static.mouseOverHandler = $GWTCButton$1(new GWTCButton$1, this$static);
  this$static.mouseOutHandler = $GWTCButton$2(new GWTCButton$2, this$static);
  this$static.mouseDownHandler = $GWTCButton$3(new GWTCButton$3, this$static);
  this$static.focusHandler = $GWTCButton$4(new GWTCButton$4, this$static);
  this$static.blurHandler = $GWTCButton$5(new GWTCButton$5, this$static);
  this$static.keyPressHandler = $GWTCButton$6(new GWTCButton$6, this$static);
}

function $GWTCButton(this$static){
  $clinit_17();
  $Button(this$static);
  $$init_2(this$static);
  $setType(this$static, 1);
  return this$static;
}

function $GWTCButton_0(this$static, html){
  $clinit_17();
  $GWTCButton(this$static);
  $setHTML_1(this$static, html);
  return this$static;
}

function $GWTCButton_1(this$static, type, html){
  $clinit_17();
  $Button(this$static);
  $$init_2(this$static);
  $setType(this$static, type);
  $setHTML_1(this$static, html);
  return this$static;
}

function $addMouseDownHandler(this$static, handler){
  return this$static.container?$addDomHandler(this$static.textPanel, handler, ($clinit_184() , $clinit_184() , TYPE_7)):$addDomHandler(this$static, handler, ($clinit_184() , $clinit_184() , TYPE_7));
}

function $addMouseOutHandler(this$static, handler){
  return this$static.container?$addDomHandler(this$static.textPanel, handler, ($clinit_188() , $clinit_188() , TYPE_9)):$addDomHandler(this$static, handler, ($clinit_188() , $clinit_188() , TYPE_9));
}

function $addMouseOverHandler(this$static, handler){
  return this$static.container?$addDomHandler(this$static.textPanel, handler, ($clinit_190() , $clinit_190() , TYPE_10)):$addDomHandler(this$static, handler, ($clinit_190() , $clinit_190() , TYPE_10));
}

function $addStyleName_0(this$static, style){
  setStyleName(this$static.getElement_0(), style, true);
  !!this$static.container && $addStyleName(this$static.container, style);
}

function $assertLeftTD(this$static){
  if (this$static.textPosIdx == 1) {
    $insertCell(this$static.container, 0, this$static.textPosIdx);
    $getElement_1(this$static.container.cellFormatter, 0, 1).className = 'GWTCBtn-ml';
    this$static.textPosIdx = 2;
  }
}

function $removeStyleName_0(this$static, style){
  setStyleName(this$static.getElement_0(), style, false);
  !!this$static.container && $removeStyleName(this$static.container, style);
}

function $replaceElement_1(this$static, element){
  var parent_0, parent_1;
  if (this$static.element) {
    parent_0 = (parent_1 = ($clinit_116() , this$static.element).parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1);
    if (parent_0) {
      parent_0.removeChild(this$static.element);
      parent_0.appendChild(element);
    }
  }
  this$static.element = element;
}

function $setEnabled(this$static, enabled){
  this$static.enabled = enabled;
  enabled?$removeStyleName_0(this$static, getStylePrimaryName(this$static.getElement_0()) + '-disabled'):$addStyleName_0(this$static, getStylePrimaryName(this$static.getElement_0()) + '-disabled');
}

function $setFocus_0(this$static, focused){
  var $e0, e;
  try {
    !this$static.container?(focused?(this$static.getElement_0().focus() , undefined):(this$static.getElement_0().blur() , undefined) , undefined):$setFocus_1(this$static.textPanel, focused);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 3)) {
      e = $e0;
      'Error, (hosted mode & GWT 1.5.3 make this fail) ' + e.getMessage();
    }
     else 
      throw $e0;
  }
}

function $setHTML_1(this$static, html){
  if (!this$static.container) {
    this$static.getElement_0().innerHTML = html || '';
  }
   else {
    $clear(this$static.textPanel);
    $setWidget(this$static.textPanel, $HTML_0(new HTML, html));
    this$static.textPanel.widget.setStyleName('GWTCBtn-text');
  }
}

function $setImage(this$static, img){
  img.element_0['className'] = 'GWTCBtn-img';
  $assertLeftTD(this$static);
  $setWidget_2(this$static.container, 0, 1, img);
}

function $setText_2(this$static, txt){
  if (!this$static.container) {
    ($clinit_116() , this$static.getElement_0()).textContent = txt || '';
  }
   else {
    $clear(this$static.textPanel);
    $setWidget(this$static.textPanel, $Label_0(new Label, txt));
    this$static.textPanel.widget.setStyleName('GWTCBtn-text');
  }
}

function $setType(this$static, type){
  var text;
  text = !this$static.container?($clinit_116() , this$static.getElement_0()).innerHTML:($clinit_116() , $getElement_1(this$static.container.cellFormatter, 0, this$static.textPosIdx)).innerHTML;
  this$static.element = null;
  if (this$static.container) {
    text = null;
    $clear_1(this$static.container, false);
  }
  this$static.container = null;
  if (type == 0) {
    this$static.getElement_0()['className'] = 'GWTCBtn';
    !!this$static.container && (setStyleName(this$static.container.getStyleElement(), 'GWTCBtn', true) , undefined);
    setStyleName(this$static.getElement_0(), 'gwt-Button', true);
    !!this$static.container && (setStyleName(this$static.container.getStyleElement(), 'gwt-Button', true) , undefined);
  }
   else {
    this$static.container = $FlexTable(new FlexTable);
    this$static.container.getStyleElement()['className'] = 'GWTCBtn';
    this$static.container.tableElem['cellSpacing'] = 0;
    this$static.container.tableElem['cellPadding'] = 0;
    $setHTML_4(this$static.container, 0, 0, '&nbsp;');
    $setStyleName_2(this$static.container.cellFormatter, 0, 0, 'GWTCBtn-l');
    $setStyleName_2(this$static.container.cellFormatter, 0, 1, 'GWTCBtn-c');
    this$static.textPanel = $FocusPanel(new FocusPanel);
    $addDomHandler(this$static.textPanel, this$static.focusHandler, ($clinit_154() , $clinit_154() , TYPE_3));
    $addDomHandler(this$static.textPanel, this$static.blurHandler, ($clinit_147() , $clinit_147() , TYPE_1));
    $addDomHandler(this$static.textPanel, this$static.keyPressHandler, ($clinit_179() , $clinit_179() , TYPE_5));
    $addDomHandler(this$static.textPanel, this$static.mouseDownHandler, ($clinit_184() , $clinit_184() , TYPE_7));
    $addDomHandler(this$static.textPanel, this$static.mouseOverHandler, ($clinit_190() , $clinit_190() , TYPE_10));
    $addDomHandler(this$static.textPanel, this$static.mouseOutHandler, ($clinit_188() , $clinit_188() , TYPE_9));
    this$static.textPanel.getStyleElement()['className'] = 'GWTCBtn-focus';
    $setWidget_2(this$static.container, 0, 1, this$static.textPanel);
    $setHTML_4(this$static.container, 0, 2, '&nbsp;');
    $setStyleName_2(this$static.container.cellFormatter, 0, 2, 'GWTCBtn-r');
    $replaceElement_1(this$static, this$static.container.element_0);
  }
  $addMouseDownHandler(this$static, this$static.mouseDownHandler);
  $addMouseOverHandler(this$static, this$static.mouseOverHandler);
  $addMouseOutHandler(this$static, this$static.mouseOutHandler);
  $setHTML_1(this$static, text);
}

function $setVisible_1(this$static, visible){
  this$static.getElement_0().style.display = visible?'':'none';
  !!this$static.container && $setVisible(this$static.container, visible);
}

function addClickHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_26() , $clinit_26() , TYPE));
}

function addStyleName_0(style){
  setStyleName(this.getElement_0(), style, true);
  !!this.container && $addStyleName(this.container, style);
}

function click_0(){
  $fireEvent(this, ($clinit_27() , $clinit_26() , new GWTCButton$7));
}

function getClass_18(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton_2_classLit;
}

function getElement_0(){
  return !this.element && (this.element = this.element_0) , this.element;
}

function onBrowserEvent_0(event_0){
  var mevent;
  mevent = $eventGetTypeInt(($clinit_116() , event_0).type);
  if (this.enabled) {
    if (mevent == 1) {
      $removeStyleName_0(this, getStylePrimaryName(this.getElement_0()) + '-over');
      $fireEvent(this, ($clinit_27() , $clinit_26() , new GWTCButton$7));
      $removeStyleName_0(this, getStylePrimaryName(this.getElement_0()) + '-down');
    }
     else 
      this.container?$onBrowserEvent(this.textPanel, event_0):$onBrowserEvent(this, event_0);
  }
   else {
    $onBrowserEvent(this, event_0);
  }
}

function removeStyleName_0(style){
  setStyleName(this.getElement_0(), style, false);
  !!this.container && $removeStyleName(this.container, style);
}

function setHTML_0(html){
  $setHTML_1(this, html);
}

function setStyleName_1(style){
  this.getElement_0()['className'] = style;
  !!this.container && $addStyleName(this.container, style);
}

function setTabIndex_0(index){
  !this.container?(this.getElement_0().tabIndex = index , undefined):(this.textPanel.element_0.tabIndex = index , undefined);
}

function setText_1(txt){
  $setText_2(this, txt);
}

function setVisible_2(visible){
  $setVisible_1(this, visible);
}

function toString_2(){
  return !this.container?$toString(this):$toString(this.container);
}

function GWTCButton(){
}

_ = GWTCButton.prototype = new Button;
_.addClickHandler = addClickHandler_1;
_.addStyleName = addStyleName_0;
_.click = click_0;
_.getClass$ = getClass_18;
_.getElement_0 = getElement_0;
_.onBrowserEvent = onBrowserEvent_0;
_.removeStyleName = removeStyleName_0;
_.setHTML = setHTML_0;
_.setStyleName = setStyleName_1;
_.setTabIndex = setTabIndex_0;
_.setText_0 = setText_1;
_.setVisible = setVisible_2;
_.toString$ = toString_2;
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

function getClass_19(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$1_2_classLit;
}

function onMouseOver(event_0){
  $addStyleDependentName(this.this$0, 'over');
}

function GWTCButton$1(){
}

_ = GWTCButton$1.prototype = new Object_0;
_.getClass$ = getClass_19;
_.onMouseOver = onMouseOver;
_.typeId$ = 21;
_.this$0 = null;
function $GWTCButton$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_20(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$2_2_classLit;
}

function onMouseOut(event_0){
  $removeStyleDependentName(this.this$0, 'down');
  $removeStyleDependentName(this.this$0, 'over');
}

function GWTCButton$2(){
}

_ = GWTCButton$2.prototype = new Object_0;
_.getClass$ = getClass_20;
_.onMouseOut = onMouseOut;
_.typeId$ = 22;
_.this$0 = null;
function $GWTCButton$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_21(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$3_2_classLit;
}

function onMouseDown(event_0){
  $addStyleDependentName(this.this$0, 'down');
}

function GWTCButton$3(){
}

_ = GWTCButton$3.prototype = new Object_0;
_.getClass$ = getClass_21;
_.onMouseDown = onMouseDown;
_.typeId$ = 23;
_.this$0 = null;
function $GWTCButton$4(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_22(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$4_2_classLit;
}

function GWTCButton$4(){
}

_ = GWTCButton$4.prototype = new Object_0;
_.getClass$ = getClass_22;
_.typeId$ = 24;
_.this$0 = null;
function $GWTCButton$5(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_23(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$5_2_classLit;
}

function GWTCButton$5(){
}

_ = GWTCButton$5.prototype = new Object_0;
_.getClass$ = getClass_23;
_.typeId$ = 25;
_.this$0 = null;
function $GWTCButton$6(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_24(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$6_2_classLit;
}

function GWTCButton$6(){
}

_ = GWTCButton$6.prototype = new Object_0;
_.getClass$ = getClass_24;
_.typeId$ = 26;
_.this$0 = null;
function getClass_25(){
  return Lcom_google_gwt_event_shared_GwtEvent_2_classLit;
}

function revive(){
  this.dead = false;
  this.source = null;
}

function toString_3(){
  return 'An event type';
}

function GwtEvent(){
}

_ = GwtEvent.prototype = new Object_0;
_.getClass$ = getClass_25;
_.revive = revive;
_.toString$ = toString_3;
_.typeId$ = 0;
_.dead = false;
_.source = null;
function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (registered) {
    typeKey = dynamicCast(registered.map[($clinit_116() , nativeEvent).type], 23);
    if (typeKey) {
      currentNative = typeKey.flyweight.nativeEvent;
      currentRelativeElem = typeKey.flyweight.relativeElem;
      typeKey.flyweight.nativeEvent = nativeEvent;
      typeKey.flyweight.relativeElem = relativeElem;
      $fireEvent(handlerSource, typeKey.flyweight);
      typeKey.flyweight.nativeEvent = currentNative;
      typeKey.flyweight.relativeElem = currentRelativeElem;
    }
  }
}

function getAssociatedType(){
  return this.getAssociatedType_0();
}

function getClass_26(){
  return Lcom_google_gwt_event_dom_client_DomEvent_2_classLit;
}

function DomEvent(){
}

_ = DomEvent.prototype = new GwtEvent;
_.getAssociatedType = getAssociatedType;
_.getClass$ = getClass_26;
_.typeId$ = 0;
_.nativeEvent = null;
_.relativeElem = null;
var registered = null;
function $clinit_26(){
  $clinit_26 = nullMethod;
  TYPE = $DomEvent$Type(new DomEvent$Type, 'click', ($clinit_26() , new ClickEvent));
}

function dispatch(p0){
  dynamicCast(p0, 22).onClick(this);
}

function getAssociatedType_0(){
  return TYPE;
}

function getClass_27(){
  return Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit;
}

function ClickEvent(){
}

_ = ClickEvent.prototype = new DomEvent;
_.dispatch = dispatch;
_.getAssociatedType_0 = getAssociatedType_0;
_.getClass$ = getClass_27;
_.typeId$ = 0;
var TYPE;
function $clinit_27(){
  $clinit_27 = nullMethod;
  $clinit_26();
}

function getClass_28(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$7_2_classLit;
}

function GWTCButton$7(){
}

_ = GWTCButton$7.prototype = new ClickEvent;
_.getClass$ = getClass_28;
_.typeId$ = 0;
function $initWidget(this$static, widget){
  if (this$static.widget) {
    throw $IllegalStateException_0(new IllegalStateException, 'Composite.initWidget() may only be called once.');
  }
  $removeFromParent(widget);
  $setElement(this$static, widget.element_0);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function $onAttach_0(this$static){
  if (this$static.eventsToSink != -1) {
    $sinkEvents(this$static.widget, this$static.eventsToSink);
    this$static.eventsToSink = -1;
  }
  $onAttach(this$static.widget);
  this$static.getElement_0().__listener = this$static;
}

function getClass_29(){
  return Lcom_google_gwt_user_client_ui_Composite_2_classLit;
}

function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}

function onAttach_0(){
  $onAttach_0(this);
}

function onBrowserEvent_1(event_0){
  $onBrowserEvent(this, event_0);
  this.widget.onBrowserEvent(event_0);
}

function onDetach_1(){
  this.widget.onDetach();
}

function Composite(){
}

_ = Composite.prototype = new Widget;
_.getClass$ = getClass_29;
_.isAttached = isAttached_0;
_.onAttach = onAttach_0;
_.onBrowserEvent = onBrowserEvent_1;
_.onDetach = onDetach_1;
_.typeId$ = 27;
_.widget = null;
function $clinit_29(){
  $clinit_29 = nullMethod;
  dateTimeConstants_0 = $getDateTimeConstants(($clinit_221() , $clinit_221() , instance_0));
  weekStart = valueOf(__parseAndValidateInt('2', 10, -2147483648, 2147483647)).value_0 - 1;
}

function $$init_3(this$static){
  this$static.minimalDate = setHourToZero($Date(new Date_0));
  this$static.selectedDate = setHourToZero($Date(new Date_0));
  this$static.maximalDate = ($clinit_29() , add_6($Date(new Date_0), 365, 4));
  this$static.cursorDate = getFirstDayOfMonth($Date(new Date_0));
  this$static.firstMonthDay = getFirstDayOfMonth(this$static.cursorDate);
  this$static.monthNumber = getMonthNumber(this$static.cursorDate);
  this$static.WEEK_DAYS = $shortWeekdays(dateTimeConstants_0);
  this$static.calendarGrid_0 = $FlexTable(new FlexTable);
  this$static.valueChangeEvent = $GWTCSimpleDatePicker$1(new GWTCSimpleDatePicker$1, this$static);
  this$static.valueChanges = $Vector(new Vector);
}

function $GWTCSimpleDatePicker(this$static, create){
  $clinit_29();
  $$init_3(this$static);
  create && $initWidget(this$static, this$static.calendarGrid_0);
  return this$static;
}

function $belongsToMonth(this$static, d){
  return eq(this$static.monthNumber, fromInt((d.checkJsDate() , d.jsdate.getFullYear() - 1900) * 12 + (d.checkJsDate() , d.jsdate.getMonth())));
}

function $getSelectedDateStr(this$static, format){
  return formatDate(format, this$static.selectedDate);
}

function $isVisibleMonth(this$static, months){
  var d, max, min;
  d = increaseMonth(this$static.cursorDate, months);
  min = getFirstDayOfMonth(this$static.minimalDate);
  max = getLastDayOfMonth(this$static.maximalDate);
  if (compare_0(fromDouble((d.checkJsDate() , d.jsdate.getTime())), fromDouble((min.checkJsDate() , min.jsdate.getTime()))) >= 0 && compare_0(fromDouble((d.checkJsDate() , d.jsdate.getTime())), fromDouble((max.checkJsDate() , max.jsdate.getTime()))) <= 0)
    return true;
  return false;
}

function $onClick(this$static, event_0){
  var cell, change, change$iterator, d;
  if (instanceOf(event_0.source, 11)) {
    cell = dynamicCast(event_0.source, 11);
    if (cell.enabled) {
      d = cell.date?cell.date:$Date_0(new Date_0, $getYear(this$static.cursorDate), $getMonth(this$static.cursorDate), cell.day);
      this$static.setSelectedDate(d);
      for (change$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.valueChanges.arrayList); change$iterator.i < change$iterator.this$0.size_0();) {
        change = dynamicCast($next_5(change$iterator), 9);
        change.onValueChange(this$static.valueChangeEvent);
      }
    }
  }
   else 
    instanceOf(event_0.source, 12)?dynamicCast(event_0.source, 12).fireEvent(event_0):'GWTCSimpleDatePicker.onClidk, unkown type: ' + getClass__devirtual$(event_0.source);
}

function $putWeekNumber(this$static, i, displayNum, week){
  var diff, enabled, weekDate, weekHtml;
  if (this$static.clickOnWeekNumbers_0) {
    enabled = true;
    weekDate = getFirstDayOfWeek($Date_0(new Date_0, $getYear(this$static.cursorDate), $getMonth(this$static.cursorDate), displayNum));
    diff = compareDate(this$static.minimalDate, weekDate);
    diff < 0 && diff + 7 < 0 && (enabled = false);
    diff = compareDate(this$static.maximalDate, weekDate);
    diff > 0 && diff + 7 > 0 && (enabled = false);
    if (enabled) {
      weekHtml = dynamicCast($getWidget_0(this$static.calendarGrid_0, i, 0), 11);
      if (!weekHtml) {
        weekHtml = $GWTCSimpleDatePicker$CellHTML(new GWTCSimpleDatePicker$CellHTML);
        $addClickHandler_3(weekHtml, this$static);
      }
      weekHtml.enabled = true;
      $setDay(weekHtml, week);
      weekHtml.date = weekDate;
      weekHtml.enabled = true;
      $setWidget_2(this$static.calendarGrid_0, i, 0, weekHtml);
      return;
    }
  }
  $setHTML_4(this$static.calendarGrid_0, i, 0, '<div class="disabled">' + week + '<\/div>');
}

function $setCursorDate(this$static, d){
  d = setHourToZero(d);
  if (eq(fromDouble((d.checkJsDate() , d.jsdate.getTime())), fromDouble($getTime0(this$static.cursorDate))))
    return;
  neq(this$static.monthNumber, fromInt((d.checkJsDate() , d.jsdate.getFullYear() - 1900) * 12 + (d.checkJsDate() , d.jsdate.getMonth()))) && (this$static.needsRedraw = true);
  this$static.cursorDate = d;
  this$static.firstMonthDay = setHourToZero($Date_0(new Date_0, (d.checkJsDate() , d.jsdate.getFullYear() - 1900), (d.checkJsDate() , d.jsdate.getMonth()), 1));
  this$static.monthNumber = fromInt((d.checkJsDate() , d.jsdate.getFullYear() - 1900) * 12 + (d.checkJsDate() , d.jsdate.getMonth()));
}

function $setMaximalDate(this$static, d){
  var a, b;
  d = setHourToZero(d);
  if (eq(fromDouble((d.checkJsDate() , d.jsdate.getTime())), fromDouble($getTime0(this$static.maximalDate))))
    return;
  a = $belongsToMonth(this$static, this$static.maximalDate);
  b = eq(this$static.monthNumber, fromInt((d.checkJsDate() , d.jsdate.getFullYear() - 1900) * 12 + (d.checkJsDate() , d.jsdate.getMonth())));
  (!a && b || a && b) && (this$static.needsRedraw = true);
  this$static.maximalDate = d;
  compare_0(fromDouble($getTime0(this$static.selectedDate)), fromDouble((d.checkJsDate() , d.jsdate.getTime()))) > 0 && (this$static.selectedDate = d);
  compare_0(fromDouble($getTime0(this$static.minimalDate)), fromDouble((d.checkJsDate() , d.jsdate.getTime()))) > 0 && (this$static.minimalDate = d);
}

function $setMinimalDate(this$static, d){
  var a, b;
  d = setHourToZero(d);
  if (eq(fromDouble((d.checkJsDate() , d.jsdate.getTime())), fromDouble($getTime0(this$static.minimalDate))))
    return;
  a = $belongsToMonth(this$static, this$static.minimalDate);
  b = eq(this$static.monthNumber, fromInt((d.checkJsDate() , d.jsdate.getFullYear() - 1900) * 12 + (d.checkJsDate() , d.jsdate.getMonth())));
  (!a && b || a && !b || a && b) && (this$static.needsRedraw = true);
  this$static.minimalDate = d;
  compare_0(fromDouble($getTime0(this$static.selectedDate)), fromDouble((d.checkJsDate() , d.jsdate.getTime()))) < 0 && (this$static.selectedDate = d);
  compare_0(fromDouble($getTime0(this$static.maximalDate)), fromDouble((d.checkJsDate() , d.jsdate.getTime()))) < 0 && (this$static.maximalDate = d);
}

function $setNumberOfLettersInDayNames(this$static, n){
  var i;
  this$static.WEEK_DAYS = initDim(_3Ljava_lang_String_2_classLit, 233, 1, 7, 0);
  for (i = 0; i < 7; ++i) {
    this$static.WEEK_DAYS[i] = $shortWeekdays(dateTimeConstants_0)[i];
    n > 0 && n < this$static.WEEK_DAYS[i].length && (this$static.WEEK_DAYS[i] = this$static.WEEK_DAYS[i].substr(0, n - 0));
  }
}

function $setSelectedDate(this$static, d){
  var a, b;
  d = setHourToZero(d);
  if (eq(fromDouble((d.checkJsDate() , d.jsdate.getTime())), fromDouble($getTime0(this$static.selectedDate))))
    return;
  a = $belongsToMonth(this$static, this$static.selectedDate);
  b = eq(this$static.monthNumber, fromInt((d.checkJsDate() , d.jsdate.getFullYear() - 1900) * 12 + (d.checkJsDate() , d.jsdate.getMonth())));
  (a && b && neq(fromDouble($getTime0(this$static.selectedDate)), fromDouble((d.checkJsDate() , d.jsdate.getTime()))) || !a && b || a && !b) && (this$static.needsRedraw = true);
  this$static.selectedDate = d;
}

function add_6(date, value, type){
  var d;
  d = setHourToZero($Date_1(new Date_0, fromDouble((date.checkJsDate() , date.jsdate.getTime()))));
  type == 1 && d.setYear((d.checkJsDate() , d.jsdate.getFullYear() - 1900) + value);
  type == 2 && d.setMonth_0((d.checkJsDate() , d.jsdate.getMonth()) + value);
  type == 3 && $setDate(d, (d.checkJsDate() , d.jsdate.getDate()) + 7 * value);
  type == 4 && $setDate(d, (d.checkJsDate() , d.jsdate.getDate()) + value);
  return d;
}

function add_7(d, s){
  $clinit_29();
  var c, n;
  if (s == null || s.length == 0)
    return d;
  n = valueOf(__parseAndValidateInt($replaceAll(s, '[^\\d\\-]', ''), 10, -2147483648, 2147483647)).value_0;
  if (n == 0)
    return d;
  c = s.toLowerCase().charCodeAt(s.length - 1);
  switch (c) {
    case 100:
      return add_6(d, n, 4);
    case 119:
      return add_6(d, n, 3);
    case 109:
      return add_6(d, n, 2);
    case 121:
      return add_6(d, n, 1);
    default:return d;
  }
}

function addValueChangeHandler(handler){
  $add_11(this.valueChanges.arrayList, handler);
  return new GWTCSimpleDatePicker$2;
}

function clickOnWeekNumbers(b){
  b != this.clickOnWeekNumbers_0 && (this.needsRedraw = true);
  this.clickOnWeekNumbers_0 = b;
}

function compareDate(a, b){
  $clinit_29();
  var days, diff, hours;
  diff = sub(fromDouble($getTime0(setHourToZero(b))), fromDouble($getTime0(setHourToZero(a))));
  hours = Math.ceil((diff[1] + diff[0]) / 3600000);
  days = ~~Math.max(Math.min(hours / 24, 2147483647), -2147483648);
  hours % 24 > 12 && (days += 1);
  return days;
}

function daysInMonth(d){
  var m, y;
  m = (d.checkJsDate() , d.jsdate.getMonth());
  switch (m) {
    case 1:
      y = (d.checkJsDate() , d.jsdate.getFullYear() - 1900) + 1900;
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
  $clinit_29();
  format == null?(format = getLongDateFormat().pattern):(format = $replaceAll($replaceAll(format, 'dddd', 'EEEE'), 'ddd', 'EEE'));
  if (!date)
    return format;
  return $format($DateTimeFormat_0(new DateTimeFormat, format, $getDateTimeConstants(($clinit_221() , $clinit_221() , instance_0))), date);
}

function getClass_30(){
  return Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker_2_classLit;
}

function getCursorDate(){
  return this.cursorDate;
}

function getFirstDayOfMonth(date){
  return setHourToZero($Date_0(new Date_0, (date.checkJsDate() , date.jsdate.getFullYear() - 1900), (date.checkJsDate() , date.jsdate.getMonth()), 1));
}

function getFirstDayOfWeek(date){
  $clinit_29();
  var diff, n;
  n = (date.checkJsDate() , date.jsdate.getDay());
  n < weekStart && (n += 7);
  diff = n - weekStart;
  return add_6(date, -diff, 4);
}

function getLastDayOfMonth(date){
  return $clinit_29() , add_6(setHourToZero($Date_0(new Date_0, (date.checkJsDate() , date.jsdate.getFullYear() - 1900), (date.checkJsDate() , date.jsdate.getMonth()), 1)), daysInMonth(date) - 1, 4);
}

function getMonthNumber(d){
  return fromInt((d.checkJsDate() , d.jsdate.getFullYear() - 1900) * 12 + (d.checkJsDate() , d.jsdate.getMonth()));
}

function getSelectedDate(){
  return this.selectedDate;
}

function getWeekOfYear(date){
  $clinit_29();
  var baseDay, baseSun, dec31, diff, incr, jan01_Date, jan01_wDay, n, ret;
  jan01_Date = $Date_0(new Date_0, (date.checkJsDate() , date.jsdate.getFullYear() - 1900), 0, 1);
  jan01_wDay = (jan01_Date.checkJsDate() , jan01_Date.jsdate.getDay());
  incr = jan01_wDay <= 4?4 - jan01_wDay:11 - jan01_wDay;
  baseDay = add_6(jan01_Date, incr, 4);
  baseSun = add_6(baseDay, -4, 4);
  if (jan01_wDay > 4) {
    n = compareDate(baseSun, date);
    if (n < 0) {
      dec31 = $Date_0(new Date_0, (date.checkJsDate() , date.jsdate.getFullYear() - 1900) - 1, 11, 31);
      return getWeekOfYear(dec31);
    }
  }
  diff = compareDate(baseSun, date);
  ret = round_int(Math.ceil(1 + ~~(diff / 7)));
  return ret;
}

function increaseMonth(date, n){
  var currentMonthDays, currentMonthFirstDay, finalMonthDays;
  if ((date.checkJsDate() , date.jsdate.getDate()) > 28) {
    currentMonthFirstDay = setHourToZero($Date_0(new Date_0, (date.checkJsDate() , date.jsdate.getFullYear() - 1900), (date.checkJsDate() , date.jsdate.getMonth()), 1));
    add_6(currentMonthFirstDay, n, 2);
    currentMonthDays = daysInMonth(date);
    finalMonthDays = daysInMonth(currentMonthFirstDay);
    if (currentMonthDays > finalMonthDays) {
      return add_6(currentMonthFirstDay, n, 2);
    }
  }
  return add_6(date, n, 2);
}

function onClick_0(event_0){
  $onClick(this, event_0);
}

function parseDate(format, dateStr){
  $clinit_29();
  var $e0;
  try {
    return $parse($DateTimeFormat_0(new DateTimeFormat, format, $getDateTimeConstants(($clinit_221() , $clinit_221() , instance_0))), dateStr, false);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 3)) {
      return null;
    }
     else 
      throw $e0;
  }
}

function refresh(){
  var displayNum, enabled, firstNum, firstWDay, html, i, j, k, l, maximalNum, minimalNum, numOfDays, refDate, saturday, selectedNum, styles, sunday, todayNum, week;
  if (!this.needsRedraw)
    return;
  this.needsRedraw = false;
  if (!this.initialized) {
    this.initialized = true;
    $clear_1(this.calendarGrid_0, false);
    this.calendarGrid_0.getStyleElement()['className'] = 'panelDays';
    this.calendarGrid_0.tableElem['cellSpacing'] = 0;
    $setStyleName_3(this.calendarGrid_0.rowFormatter, 0, 'weekHeader');
    l = 0;
    for (i = weekStart; i < 7; ++i) {
      $setStyleName_2(this.calendarGrid_0.cellFormatter, 0, this.showWeekNumbers_0 + l, 'cellDayNames');
      $setText_7(this.calendarGrid_0, 0, this.showWeekNumbers_0 + l++, this.WEEK_DAYS[i]);
    }
    while (l < 7) {
      $setStyleName_2(this.calendarGrid_0.cellFormatter, 0, this.showWeekNumbers_0 + l, 'cellDayNames');
      $setText_7(this.calendarGrid_0, 0, this.showWeekNumbers_0 + l++, this.WEEK_DAYS[0]);
    }
    for (i = 1; i < 7; ++i) {
      for (k = 0; k < 7; ++k) {
        html = $GWTCSimpleDatePicker$CellHTML(new GWTCSimpleDatePicker$CellHTML);
        $setWidget_2(this.calendarGrid_0, i, this.showWeekNumbers_0 + k, html);
        $addClickHandler_3(html, this);
      }
    }
    if (this.showWeekNumbers_0 == 1) {
      for (i = 0; i < 7; ++i) {
        $setText_7(this.calendarGrid_0, i, 0, '');
        $setStyleName_2(this.calendarGrid_0.cellFormatter, i, 0, 'cellWeekNumbers');
      }
    }
  }
  todayNum = fromInt(1 + compareDate(this.firstMonthDay, $Date(new Date_0)));
  minimalNum = fromInt(1 + compareDate(this.firstMonthDay, this.minimalDate));
  maximalNum = fromInt(1 + compareDate(this.firstMonthDay, this.maximalDate));
  numOfDays = daysInMonth(this.cursorDate);
  selectedNum = fromInt(this.selectedDate?1 + compareDate(this.firstMonthDay, this.selectedDate):-1);
  firstWDay = $getDay(this.firstMonthDay);
  sunday = (7 - weekStart) % 7;
  saturday = 6 - weekStart;
  j = weekStart;
  for (i = 1; i < 7; ++i) {
    for (k = 0; k < 7; ++k , ++j) {
      displayNum = firstWDay < weekStart?j - firstWDay - 6:j - firstWDay + 1;
      if (this.showWeekNumbers_0 == 1 && k == 6 - weekStart) {
        firstNum = displayNum - (i == 1?0:6 - weekStart);
        if (firstNum > numOfDays) {
          $setText_7(this.calendarGrid_0, i, 0, '');
        }
         else {
          refDate = $Date_0(new Date_0, $getYear(this.cursorDate), $getMonth(this.cursorDate), firstNum);
          week = getWeekOfYear(refDate);
          $putWeekNumber(this, i, displayNum, week);
        }
      }
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
         else 
          eq(fromInt(displayNum), selectedNum)?(styles = 'validDay selectedDay'):compare_0(fromInt(displayNum), selectedNum) >= 0?(styles = 'validDay afterSelected'):(styles = 'validDay beforeSelected');
        eq(fromInt(displayNum), todayNum) && (styles += ' today');
        (k == sunday || k == saturday) && (styles += ' weekend');
        styles += ' cellDays';
      }
      html = dynamicCast($getWidget_0(this.calendarGrid_0, i, this.showWeekNumbers_0 + k), 11);
      html.enabled = enabled;
      $setDay(html, displayNum);
      html.element_0['className'] = styles;
    }
  }
}

function setCursorDate(d){
  $setCursorDate(this, d);
}

function setHourToZero(date){
  var d, t;
  d = $Date_1(new Date_0, fromDouble((date.checkJsDate() , date.jsdate.getTime())));
  d.setHours_0(0);
  d.setMinutes_0(0);
  d.setSeconds_0(0);
  t = div_0(fromDouble((d.checkJsDate() , d.jsdate.getTime())), P3e8_longLit);
  t = mul(t, P3e8_longLit);
  return $Date_1(new Date_0, t);
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

function showWeekNumbers(b){
  if (b != (this.showWeekNumbers_0 == 1)) {
    this.initialized = false;
    this.needsRedraw = true;
  }
  this.showWeekNumbers_0 = b?1:0;
}

function GWTCSimpleDatePicker(){
}

_ = GWTCSimpleDatePicker.prototype = new Composite;
_.addValueChangeHandler = addValueChangeHandler;
_.clickOnWeekNumbers_1 = clickOnWeekNumbers;
_.getClass$ = getClass_30;
_.getCursorDate = getCursorDate;
_.getSelectedDate = getSelectedDate;
_.onClick = onClick_0;
_.refresh = refresh;
_.setCursorDate = setCursorDate;
_.setMaximalDate = setMaximalDate;
_.setMinimalDate = setMinimalDate;
_.setSelectedDate = setSelectedDate;
_.showWeekNumbers_1 = showWeekNumbers;
_.typeId$ = 28;
_.clickOnWeekNumbers_0 = false;
_.initialized = false;
_.needsRedraw = true;
_.showWeekNumbers_0 = 0;
var dateTimeConstants_0, weekStart;
function $clinit_30(){
  $clinit_30 = nullMethod;
  $clinit_29();
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
  $clinit_30();
  $$init_3(this$static);
  this$static.helpDlg = $GWTCAlert(new GWTCAlert, 8);
  this$static.calendarGrid = $FlexTable(new FlexTable);
  this$static.navButtonsTop = $DockPanel(new DockPanel);
  this$static.navButtonsBottom = $DockPanel(new DockPanel);
  this$static.topButtonsRow1 = $DockPanel(new DockPanel);
  this$static.topButtonsRow0 = $DockPanel(new DockPanel);
  this$static.topButtonsRow2 = $DockPanel(new DockPanel);
  this$static.bottomButtonsRow0 = $DockPanel(new DockPanel);
  this$static.bottomButtonsRow1 = $DockPanel(new DockPanel);
  this$static.bottomButtonsRow2 = $DockPanel(new DockPanel);
  this$static.leftButtons = $DockPanel(new DockPanel);
  this$static.rightButtons = $DockPanel(new DockPanel);
  this$static.monthSelectorHeader = $MenuBar(new MenuBar);
  this$static.monthHeaders = $Vector(new Vector);
  this$static.monthMenu = $MenuBar_0(new MenuBar, true);
  this$static.simpleDatePickers = $Vector(new Vector);
  this$static.onDaySelected = $GWTCDatePickerAbstract$1(new GWTCDatePickerAbstract$1, this$static);
  return this$static;
}

function $addStyleDependentName_0(this$static, s){
  this$static.calendarDlg?$addStyleDependentName(this$static.calendarDlg, s):$addStyleDependentName(this$static.outer_0, s);
  $addStyleToMonthMenu(this$static, (this$static.calendarDlg?getStylePrimaryName($getStyleElement_1($getFirstChildElement(($clinit_116() , this$static.calendarDlg.element_0)))):getStylePrimaryName(this$static.outer_0.getStyleElement())) + '-' + s);
}

function $addStyleName_1(this$static, s){
  this$static.calendarDlg?$addStyleName(this$static.calendarDlg, s):$addStyleName(this$static.outer_0, s);
  $addStyleToMonthMenu(this$static, s);
}

function $addStyleToMonthMenu(this$static, s){
  var i;
  $addStyleName(this$static.monthSelectorHeader, s + '-MenuBar');
  $addStyleName(this$static.monthMenu, s + '-MenuBar');
  $addStyleName(this$static.monthSelectorHeader, s + '-MenuBar-horizontal');
  $addStyleName(this$static.monthMenu, s + '-MenuBar-vertical');
  for (i = 0; i < this$static.monthHeaders.arrayList.size; ++i) {
    $addStyleName(dynamicCast($get_3(this$static.monthHeaders.arrayList, i), 5), s + '-MenuBar');
  }
}

function $addValueChangeHandler(this$static, handler){
  var i;
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i) {
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).addValueChangeHandler(handler);
  }
  return new GWTCDatePickerAbstract$2;
}

function $clickOnWeekNumbers(this$static, b){
  var i;
  this$static.clickOnWeekNumbers = b;
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i) {
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).clickOnWeekNumbers_1(b);
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

function $createButton(buttonsType, text, clickHandler){
  var b;
  buttonsType == CONFIG_DEFAULT?(b = $GWTCButton(new GWTCButton)):(b = $GWTCButton_1(new GWTCButton, 0, ''));
  buttonsType == CONFIG_FLAT_BUTTONS && $addStyleName_0(b, getStylePrimaryName(b.getElement_0()) + '-flat');
  !!clickHandler && $addDomHandler(b, clickHandler, ($clinit_26() , $clinit_26() , TYPE));
  $setText_2(b, text);
  return b;
}

function $fillMenuItems(this$static){
  var c, d, i, md, n, t;
  $clearItems(this$static.monthSelectorHeader);
  $clearItems(this$static.monthMenu);
  $addItem(this$static.monthSelectorHeader, $MenuItem_0(new MenuItem, formatDate('MMMM, yyyy', dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).getCursorDate()), this$static.monthMenu));
  n = -~~(this$static.monthSelector / 2);
  d = $Date_1(new Date_0, fromDouble($getTime0(getFirstDayOfMonth(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).getCursorDate()))));
  md = $Date_1(new Date_0, fromDouble($getTime0(getFirstDayOfMonth(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).minimalDate))));
  d = increaseMonth(d, n);
  while (compareDate(md, d) < 0) {
    d = increaseMonth(d, 1);
    ++n;
  }
  n += this$static.monthSelector;
  d = increaseMonth(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).getCursorDate(), n);
  while (compareDate(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).maximalDate, d) > 0) {
    d = increaseMonth(d, -1);
    --n;
  }
  n -= this$static.monthSelector;
  d = increaseMonth(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).getCursorDate(), n);
  for (i = n; i < this$static.monthSelector; ++i) {
    t = formatDate('MMMM, yyyy', d);
    c = $GWTCDatePickerAbstract$MenuCommand(new GWTCDatePickerAbstract$MenuCommand, d, this$static);
    d = increaseMonth(d, 1);
    compareDate(d, dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).maximalDate) >= 0 && compareDate(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).minimalDate, d) > 0 && $addItem(this$static.monthMenu, $MenuItem(new MenuItem, t, c));
  }
}

function $getButton(this$static, s, pos){
  var c;
  if (pos < s.length) {
    c = s.charCodeAt(pos);
    if (c == 95 || c == 32)
      return $Label_0(new Label, ' ');
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

function $hide_3(this$static){
  this$static.calendarDlg?$hide_6(this$static.calendarDlg):this$static.outer_0.setVisible(false);
}

function $initialize_1(this$static, config){
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
    (config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX && (opt |= ($clinit_49() , 2));
    if ((config & CONFIG_BACKGROUND) != CONFIG_BACKGROUND) {
      opt |= ($clinit_49() , 16);
      (config & CONFIG_NO_AUTOHIDE) == CONFIG_NO_AUTOHIDE && (opt |= 64);
    }
    this$static.calendarDlg = $GWTCModalBox(new GWTCModalBox, opt);
    this$static.calendarDlg.isAnimationEnabled = (config & CONFIG_NO_ANIMATION) != CONFIG_NO_ANIMATION;
    this$static.outer_0 = this$static.calendarDlg;
    $initWidget(this$static, $DockPanel(new DockPanel));
    $setStyleName_1(this$static, 'GWTCDatePicker');
    $addStyleDependentName_0(this$static, 'dialog');
    $setZIndex_0(this$static, 999);
  }
   else {
    (config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX?(this$static.outer_0 = $GWTCBox_0(new GWTCBox, 'GWTCBox')):(this$static.outer_0 = $VerticalPanel(new VerticalPanel));
    s = $getPropertyString(this$static.outer_0.getStyleElement(), 'className');
    $initWidget(this$static, this$static.outer_0);
    $setStyleName_1(this$static, 'GWTCDatePicker');
    $addStyleDependentName_0(this$static, 'embeded');
    s != null && s.length > 0 && (this$static.calendarDlg?$addStyleName(this$static.calendarDlg, s):$addStyleName(this$static.outer_0, s) , $addStyleToMonthMenu(this$static, s) , undefined);
  }
  setStyleName(this$static.helpDlg.getStyleElement(), 'GWTCDatePicker-help', true);
  this$static.navButtonsTop.getStyleElement()['className'] = 'panelButtons';
  this$static.navButtonsBottom.getStyleElement()['className'] = 'panelButtonsBottom';
  this$static.calendarGrid.getStyleElement()['className'] = 'panelMonths';
  this$static.navButtonsTop.getElement_0().style['width'] = '100%';
  this$static.calendarGrid.getElement_0().style['width'] = '100%';
  this$static.navButtonsBottom.getElement_0().style['width'] = '100%';
  (config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX?$addStyleDependentName_0(this$static, 'box'):$addStyleDependentName_0(this$static, 'no-box');
  (config & CONFIG_DIALOG) != CONFIG_DIALOG && $setVisible_1(this$static.closeBtn, false);
  this$static.monthSelectorHeader.isAnimationEnabled = true;
  this$static.outer_0.add_0(this$static.navButtonsTop);
  this$static.outer_0.add_0(this$static.calendarGrid);
  this$static.outer_0.add_0(this$static.navButtonsBottom);
  this$static.drawDatePickerWidget();
  $refresh(this$static);
  $sinkEvents_0(this$static.outer_0.element_0, 49);
  this$static.outer_0.element_0.style['cursor'] = 'default';
  this$static.monthMenu.element_0.setAttribute('align', 'center');
}

function $isMonthInRange(this$static, incr){
  while (incr != 0 && !$isVisibleMonth(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4), incr))
    incr = incr < 0?incr + 1:incr - 1;
  return incr;
}

function $layoutButtons(this$static, distribution){
  var i, j, m, p_0, panels, s, w;
  $clear(this$static.navButtonsBottom);
  $clear(this$static.navButtonsTop);
  panels = initValues(_3Lcom_google_gwt_user_client_ui_DockPanel_2_classLit, 212, 47, [this$static.topButtonsRow0, this$static.topButtonsRow1, this$static.topButtonsRow2, this$static.bottomButtonsRow0, this$static.bottomButtonsRow1, this$static.bottomButtonsRow2, this$static.leftButtons, this$static.rightButtons]);
  s = $split(distribution, '[;:,]', 0);
  w = null;
  m = null;
  for (i = 0; i < panels.length && i < s.length; ++i) {
    p_0 = panels[i];
    $clear(p_0);
    if (s[i].length == 0)
      continue;
    for (j = 0; j < s[i].length; ++j) {
      !!(w = $getButton(this$static, s[i], j)) && $add_8(p_0, w, p_0 != this$static.rightButtons?($clinit_286() , WEST):($clinit_286() , EAST));
      j == ~~(s[i].length / 2) && (m = w);
    }
    if (!$hasNext_1($WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, p_0.children)))
      continue;
    p_0.element_0.style['width'] = '100%';
    if (p_0 != this$static.leftButtons && p_0 != this$static.rightButtons) {
      if (m) {
        $setCellWidth_0(m, '100%');
        m.setWidth('100%');
      }
    }
    i < 3?$add_8(this$static.navButtonsTop, p_0, ($clinit_286() , NORTH)):i < 6 && $add_8(this$static.navButtonsBottom, p_0, ($clinit_286() , NORTH));
    i < 6 && setStyleName(p_0.element_0, 'buttonsRow_' + i % 3, true);
  }
}

function $layoutCalendar(this$static){
  var col, i, it, p_0, row, w, parent_0;
  $clear_1(this$static.calendarGrid, false);
  this$static.calendarGrid.tableElem['cellSpacing'] = 0;
  for (i = 0 , row = -2 , col = 0; i < this$static.simpleDatePickers.arrayList.size; ++i) {
    if (i % this$static.monthColumns == 0) {
      col = 0;
      row += 2;
    }
     else if (i > 0) {
      $setHTML_4(this$static.calendarGrid, row, col, '&nbsp;');
      $setHTML_4(this$static.calendarGrid, row + 1, col, '&nbsp;');
      $addStyleName_2(this$static.calendarGrid.cellFormatter, row, col, 'monthSeparator');
      $addStyleName_2(this$static.calendarGrid.cellFormatter, row + 1, col, 'monthSeparator');
      col += 1;
    }
    if (!this$static.monthSelectorHeader.parent_0 || this$static.simpleDatePickers.arrayList.size > 1) {
      if (i == 0 || i % this$static.monthColumns == 0) {
        $addStyleName_4(this$static.calendarGrid.rowFormatter, row, 'monthLabels');
        $addStyleName_4(this$static.calendarGrid.rowFormatter, row + 1, 'monthCells');
      }
      w = null;
      i == 0 && !(parent_0 = ($clinit_116() , this$static.monthSelectorHeader.element_0).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)?(w = this$static.monthSelectorHeader):(w = dynamicCast($get_3(this$static.monthHeaders.arrayList, i), 2));
      p_0 = null;
      if ($hasNext_1($WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static.leftButtons.children)) && !this$static.leftButtons.parent_0 && col == 0) {
        p_0 = this$static.leftButtons;
        $add_8(p_0, w, ($clinit_286() , WEST));
        $setCellWidth_0(w, '100%');
        w = p_0;
        if (this$static.simpleDatePickers.arrayList.size == 1) {
          it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, p_0.children);
          while (it.index_0 < it.this$0.size - 1) {
            $add_8(p_0, $next_2(it), WEST);
          }
        }
      }
      if ($hasNext_1($WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static.rightButtons.children)) && !this$static.rightButtons.parent_0 && (i + 1) % this$static.monthColumns == 0) {
        p_0 = this$static.rightButtons;
        $add_8(p_0, w, ($clinit_286() , WEST));
        $setCellWidth_0(w, '100%');
        w = p_0;
      }
      $setWidget_2(this$static.calendarGrid, row, col, w);
    }
    $setWidget_2(this$static.calendarGrid, row + 1, col, dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 2));
    $addStyleName_3(this$static.calendarGrid.columnFormatter, i, 'Month-' + i);
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).addValueChangeHandler(this$static.onDaySelected);
    ++col;
  }
}

function $moveIntoVisibleArea(this$static){
  var h, hd, w, wd, xd, yd;
  if (this$static.calendarDlg) {
    w = $getClientWidth_0($doc) + $getScrollLeft_0(($clinit_116() , $doc));
    xd = $getAbsoluteLeft_0(this$static.calendarDlg.element_0);
    wd = (parseInt(this$static.calendarGrid.element_0['offsetWidth']) || 0) + 40;
    xd + wd > w && (xd = xd - (xd + wd - w));
    h = $getClientHeight_0($doc) + $getScrollTop_0($doc);
    yd = $getAbsoluteTop_0(this$static.calendarDlg.element_0);
    hd = (parseInt(this$static.calendarDlg.element_0['offsetHeight']) || 0) + 20;
    yd + hd > h && (yd = yd - (yd + hd - h));
    $setPopupPosition(this$static.calendarDlg, xd, yd);
  }
}

function $refresh(this$static){
  var i;
  this$static.needsRedraw = false;
  $setEnabled(this$static.prevMBtn, $isVisibleMonth(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4), -1));
  $setEnabled(this$static.nextMBtn, $isVisibleMonth(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4), 1));
  $setEnabled(this$static.prevYBtn, $isVisibleMonth(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4), -1));
  $setEnabled(this$static.nextYBtn, $isVisibleMonth(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4), 1));
  $setEnabled(this$static.todayBtn, neq(getMonthNumber(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).getCursorDate()), getMonthNumber($Date(new Date_0))));
  $fillMenuItems(this$static);
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i) {
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).setCursorDate(increaseMonth(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).getCursorDate(), i));
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).refresh();
    ($clinit_116() , dynamicCast($get_3(this$static.monthHeaders.arrayList, i), 5).element_0).textContent = formatDate('MMMM, yyyy', dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).getCursorDate()) || '';
  }
}

function $setCaptionText(this$static, t){
  !!this$static.calendarDlg && (($clinit_116() , this$static.calendarDlg.caption.element_0).textContent = t || '' , undefined);
}

function $setCursorDate_0(this$static, d){
  $setCursorDate(this$static, d);
  dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).setCursorDate(d);
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
  help = dynamicCast(strs.stringMap[':key.calendar.help'], 1);
  help != null && help.length > 0 && (this$static.helpStr = help);
  caption = dynamicCast(strs.stringMap[':key.caption'], 1);
  caption != null && $setCaptionText(this$static, caption);
}

function $setMaximalDate_0(this$static, d){
  var i;
  $setMaximalDate(this$static, d);
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i)
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).setMaximalDate(d);
}

function $setMinimalDate_0(this$static, d){
  var i;
  $setMinimalDate(this$static, d);
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i)
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).setMinimalDate(d);
}

function $setNumberOfMonths(this$static, months){
  var i, l, picker;
  this$static.monthColumns = min_0(this$static.monthColumns, months);
  this$static.monthStep = min_0(this$static.monthStep, months);
  this$static.simpleDatePickers = $Vector(new Vector);
  for (i = 0; i < (1 > months?1:months); ++i) {
    picker = $GWTCSimpleDatePicker(new GWTCSimpleDatePicker, true);
    picker.showWeekNumbers_1(this$static.showWeekNumbers);
    picker.clickOnWeekNumbers_1(this$static.clickOnWeekNumbers);
    $add_11(this$static.simpleDatePickers.arrayList, picker);
    l = $Label(new Label);
    l.element_0.setAttribute('align', 'center');
    $add_11(this$static.monthHeaders.arrayList, l);
  }
  $setMinimalDate_0(this$static, this$static.minimalDate);
  $setMaximalDate_0(this$static, this$static.maximalDate);
  $setSelectedDate_0(this$static, this$static.selectedDate);
}

function $setSelectedDate_0(this$static, d){
  var i;
  $setSelectedDate(this$static, d);
  if (!d)
    return;
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i) {
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).setSelectedDate(d);
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).refresh();
  }
}

function $setStyleName_1(this$static, s){
  var i;
  this$static.calendarDlg?$setStyleName(this$static.calendarDlg, s):$setStyleName(this$static.outer_0, s);
  $setStyleName(this$static.monthSelectorHeader, s + '-MenuBar');
  $setStyleName(this$static.monthMenu, s + '-MenuBar');
  $addStyleName(this$static.monthSelectorHeader, s + '-MenuBar-horizontal');
  $addStyleName(this$static.monthMenu, s + '-MenuBar-vertical');
  for (i = 0; i < this$static.monthHeaders.arrayList.size; ++i) {
    dynamicCast($get_3(this$static.monthHeaders.arrayList, i), 5).getStyleElement()['className'] = 'monthLabel';
    $addStyleName(dynamicCast($get_3(this$static.monthHeaders.arrayList, i), 5), s + '-MenuBar');
    $addStyleName(this$static.monthSelectorHeader, s + '-MenuBar-horizontal');
  }
  !$equals_1(s, 'GWTCDatePicker') && (this$static.calendarDlg?(setStyleName(this$static.calendarDlg.getStyleElement(), 'GWTCDatePicker', true) , undefined):(setStyleName(this$static.outer_0.getStyleElement(), 'GWTCDatePicker', true) , undefined) , $addStyleToMonthMenu(this$static, 'GWTCDatePicker') , undefined);
}

function $setZIndex_0(this$static, z){
  if (this$static.calendarDlg) {
    this$static.calendarDlg.element_0.style['zIndex'] = '' + z;
    $setZIndex(this$static.helpDlg, z + 1);
  }
}

function $show_2(this$static, w){
  w?$show_3(this$static, $getAbsoluteLeft_0(($clinit_116() , w.getElement_0())), $getAbsoluteTop_0(w.getElement_0())):$show_3(this$static, -1, -1);
}

function $show_3(this$static, left, top_0){
  this$static.needsRedraw && $refresh(this$static);
  if (!this$static.calendarDlg) {
    this$static.outer_0.setVisible(true);
  }
   else {
    if (top_0 >= 0 && left >= 0) {
      $setPopupPosition(this$static.calendarDlg, left, top_0);
      $show_6(this$static.calendarDlg);
      $moveIntoVisibleArea(this$static);
      $scrollIntoView_0(($clinit_116() , this$static.calendarGrid.element_0));
    }
     else {
      $center_1(this$static.calendarDlg);
    }
  }
  $setFocus_0(this$static.todayBtn, true);
}

function $showWeekNumbers(this$static, b){
  var i;
  this$static.showWeekNumbers = b;
  for (i = 0; i < this$static.simpleDatePickers.arrayList.size; ++i) {
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).showWeekNumbers_1(b);
    dynamicCast($get_3(this$static.simpleDatePickers.arrayList, i), 4).refresh();
  }
}

function addStyleDependentName_0(s){
  $addStyleDependentName_0(this, s);
}

function addStyleName_1(s){
  this.calendarDlg?$addStyleName(this.calendarDlg, s):$addStyleName(this.outer_0, s);
  $addStyleToMonthMenu(this, s);
}

function addValueChangeHandler_0(handler){
  return $addValueChangeHandler(this, handler);
}

function clickOnWeekNumbers_0(b){
  $clickOnWeekNumbers(this, b);
}

function getClass_31(){
  return Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract_2_classLit;
}

function getCursorDate_0(){
  return dynamicCast($get_3(this.simpleDatePickers.arrayList, 0), 4).getCursorDate();
}

function getElement_1(){
  return this.calendarDlg?this.calendarDlg.element_0:this.outer_0.element_0;
}

function getSelectedDate_0(){
  return dynamicCast($get_3(this.simpleDatePickers.arrayList, 0), 4).getSelectedDate();
}

function getStylePrimaryName_1(){
  return this.calendarDlg?getStylePrimaryName($getStyleElement_1($getFirstChildElement(($clinit_116() , this.calendarDlg.element_0)))):getStylePrimaryName(this.outer_0.getStyleElement());
}

function hide_2(){
  this.calendarDlg?$hide_6(this.calendarDlg):this.outer_0.setVisible(false);
}

function internationalize(b, strs, ktext){
  $clinit_30();
  var text, title;
  if (!strs)
    return;
  text = dynamicCast(ktext == null?strs.nullSlot:ktext != null?strs.stringMap[':' + ktext]:$getHashValue(strs, ktext, ~~getHashCode_0(ktext)), 1);
  title = dynamicCast(ktext + '.title' == null?strs.nullSlot:ktext + '.title' != null?strs.stringMap[':' + ktext + '.title']:$getHashValue(strs, ktext + '.title', ~~getHashCode_0(ktext + '.title')), 1);
  text != null && text.length > 0 && (b != null && canCast(b.typeId$, 6)?dynamicCast(b, 6).setText_0(text):b != null && canCast(b.typeId$, 7)?dynamicCast(b, 7).setText_0(text):b != null && canCast(b.typeId$, 8) && $setCaptionText(dynamicCast(b, 8), text));
  title != null && title.length > 0 && b.setTitle(title);
}

function onAttach_1(){
  $onAttach_0(this);
}

function onClick_1(event_0){
  var sender;
  sender = dynamicCast(event_0.source, 2);
  this.prevMBtn == sender?$setCursorDate_0(this, increaseMonth(dynamicCast($get_3(this.simpleDatePickers.arrayList, 0), 4).getCursorDate(), $isMonthInRange(this, -this.monthStep))):this.nextMBtn == sender?$setCursorDate_0(this, increaseMonth(dynamicCast($get_3(this.simpleDatePickers.arrayList, 0), 4).getCursorDate(), $isMonthInRange(this, this.monthStep))):this.prevYBtn == sender?$setCursorDate_0(this, increaseMonth(dynamicCast($get_3(this.simpleDatePickers.arrayList, 0), 4).getCursorDate(), $isMonthInRange(this, -12))):this.nextYBtn == sender?$setCursorDate_0(this, increaseMonth(dynamicCast($get_3(this.simpleDatePickers.arrayList, 0), 4).getCursorDate(), $isMonthInRange(this, 12))):this.todayBtn == sender?$setCursorDate_0(this, $Date(new Date_0)):this.helpBtn == sender?this.helpDlg.alert_0($replaceAll(this.helpStr, '\\n', '<br/>')):this.closeBtn == sender?this.hide_0():$onClick(this, event_0);
  $refresh(this);
}

function refresh_0(){
  $refresh(this);
}

function setCursorDate_0(d){
  $setCursorDate(this, d);
  dynamicCast($get_3(this.simpleDatePickers.arrayList, 0), 4).setCursorDate(d);
}

function setMaximalDate_0(d){
  $setMaximalDate_0(this, d);
}

function setMinimalDate_0(d){
  $setMinimalDate_0(this, d);
}

function setSelectedDate_0(d){
  $setSelectedDate_0(this, d);
}

function setStyleName_2(s){
  $setStyleName_1(this, s);
}

function showWeekNumbers_0(b){
  $showWeekNumbers(this, b);
}

function GWTCDatePickerAbstract(){
}

_ = GWTCDatePickerAbstract.prototype = new GWTCSimpleDatePicker;
_.addStyleDependentName = addStyleDependentName_0;
_.addStyleName = addStyleName_1;
_.addValueChangeHandler = addValueChangeHandler_0;
_.clickOnWeekNumbers_1 = clickOnWeekNumbers_0;
_.getClass$ = getClass_31;
_.getCursorDate = getCursorDate_0;
_.getElement_0 = getElement_1;
_.getSelectedDate = getSelectedDate_0;
_.getStylePrimaryName = getStylePrimaryName_1;
_.hide_0 = hide_2;
_.onAttach = onAttach_1;
_.onClick = onClick_1;
_.refresh = refresh_0;
_.setCursorDate = setCursorDate_0;
_.setMaximalDate = setMaximalDate_0;
_.setMinimalDate = setMinimalDate_0;
_.setSelectedDate = setSelectedDate_0;
_.setStyleName = setStyleName_2;
_.showWeekNumbers_1 = showWeekNumbers_0;
_.typeId$ = 29;
_.calendarDlg = null;
_.clickOnWeekNumbers = false;
_.closeBtn = null;
_.helpBtn = null;
_.helpStr = 'Calendar-Picker is a component of GWTChismes library.\n(c) Manuel Carrasco 2007\nhttp://code.google.com/p/gwtchismes\n\nNavigation buttons:\n< Previous Month\n> Next Month\n\xAB Previous Year\n\xBB Next Year\n- Actual Month\nx Close\n ';
_.monthColumns = 3;
_.monthSelector = 12;
_.monthStep = 1;
_.nextMBtn = null;
_.nextYBtn = null;
_.outer_0 = null;
_.prevMBtn = null;
_.prevYBtn = null;
_.showWeekNumbers = false;
_.todayBtn = null;
var CONFIG_BACKGROUND, CONFIG_DEFAULT, CONFIG_DIALOG, CONFIG_FLAT_BUTTONS, CONFIG_NO_ANIMATION, CONFIG_NO_AUTOHIDE, CONFIG_ROUNDED_BOX, CONFIG_STANDARD_BUTTONS, constant_cont = 0;
function $clinit_31(){
  $clinit_31 = nullMethod;
  $clinit_30();
  CONFIG_NO_CLOSE_BUTTON = round_int(Math.pow(2, constant_cont++));
  CONFIG_NO_YEAR_BUTTON = round_int(Math.pow(2, constant_cont++));
  CONFIG_NO_HELP_BUTTON = round_int(Math.pow(2, constant_cont++));
  CONFIG_LAYOUT_2 = round_int(Math.pow(2, constant_cont++));
  CONFIG_LAYOUT_3 = round_int(Math.pow(2, constant_cont++));
  CONFIG_LAYOUT_4 = round_int(Math.pow(2, constant_cont++));
  round_int(Math.pow(2, constant_cont++));
  layouts = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['?mx;p<->n', '? x;p<m>n', '? x;p< >n; m ', '? x;p< >n']);
}

function $GWTCDatePicker(this$static, config, layout){
  $clinit_31();
  $GWTCDatePicker_0(this$static, config, 1, layout < 0 || layout > layouts.length?layouts[0]:layouts[layout]);
  $addStyleDependentName_0(this$static, 'layout' + layout);
  return this$static;
}

function $GWTCDatePicker_0(this$static, config, months, layout){
  $clinit_31();
  $GWTCDatePickerAbstract(this$static);
  this$static.layoutButtons = layouts[0];
  this$static.layoutButtons = layout != null?layout:layouts[0];
  ((config & CONFIG_DIALOG) != CONFIG_DIALOG || (config & CONFIG_NO_CLOSE_BUTTON) == CONFIG_NO_CLOSE_BUTTON) && (this$static.layoutButtons = $replaceAll(this$static.layoutButtons, 'x', ' '));
  (config & CONFIG_NO_HELP_BUTTON) == CONFIG_NO_HELP_BUTTON && (this$static.layoutButtons = $replaceAll(this$static.layoutButtons, '\\?', ' '));
  (config & CONFIG_NO_YEAR_BUTTON) == CONFIG_NO_YEAR_BUTTON && (this$static.layoutButtons = $replaceAll(this$static.layoutButtons, '[pn]', ''));
  this$static.layoutButtons = $replaceAll(this$static.layoutButtons, '(^ +;)|(; +;)', ';');
  this$static.numberOfMonths = months;
  this$static.monthColumns = 3;
  $initialize_1(this$static, config);
  return this$static;
}

function $GWTCDatePicker_1(this$static, config){
  $clinit_31();
  $GWTCDatePicker(this$static, config, getLayoutIndex(config));
  return this$static;
}

function drawDatePickerWidget(){
  $setNumberOfMonths(this, this.numberOfMonths);
  $layoutButtons(this, this.layoutButtons);
  $layoutCalendar(this);
}

function getClass_32(){
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

_ = GWTCDatePicker.prototype = new GWTCDatePickerAbstract;
_.drawDatePickerWidget = drawDatePickerWidget;
_.getClass$ = getClass_32;
_.typeId$ = 30;
_.numberOfMonths = 1;
var CONFIG_LAYOUT_2, CONFIG_LAYOUT_3, CONFIG_LAYOUT_4, CONFIG_NO_CLOSE_BUTTON, CONFIG_NO_HELP_BUTTON, CONFIG_NO_YEAR_BUTTON, layouts;
function $GWTCDatePickerAbstract$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_33(){
  return Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract$1_2_classLit;
}

function onValueChange(event_0){
  $setSelectedDate_0(this.this$0, dynamicCast(event_0.value_0, 4).getSelectedDate());
}

function GWTCDatePickerAbstract$1(){
}

_ = GWTCDatePickerAbstract$1.prototype = new Object_0;
_.getClass$ = getClass_33;
_.onValueChange = onValueChange;
_.typeId$ = 31;
_.this$0 = null;
function getClass_34(){
  return Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract$2_2_classLit;
}

function GWTCDatePickerAbstract$2(){
}

_ = GWTCDatePickerAbstract$2.prototype = new Object_0;
_.getClass$ = getClass_34;
_.typeId$ = 0;
function $GWTCDatePickerAbstract$MenuCommand(this$static, d, this$0){
  this$static.this$0 = this$0;
  this$static.date = d;
  return this$static;
}

function execute(){
  $setCursorDate_0(this.this$0, this.date);
  $refresh(this.this$0);
}

function getClass_35(){
  return Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract$MenuCommand_2_classLit;
}

function GWTCDatePickerAbstract$MenuCommand(){
}

_ = GWTCDatePickerAbstract$MenuCommand.prototype = new Object_0;
_.execute = execute;
_.getClass$ = getClass_35;
_.typeId$ = 32;
_.date = null;
_.this$0 = null;
function $clinit_35(){
  $clinit_35 = nullMethod;
  impl = ($clinit_361() , $clinit_361() , implPanel);
}

function $FocusPanel(this$static){
  $clinit_35();
  this$static.element_0 = $createFocusable(impl);
  return this$static;
}

function $setFocus_1(this$static, focused){
  focused?(this$static.element_0.focus() , undefined):(this$static.element_0.blur() , undefined);
}

function getClass_36(){
  return Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit;
}

function FocusPanel(){
}

_ = FocusPanel.prototype = new SimplePanel;
_.getClass$ = getClass_36;
_.typeId$ = 33;
var impl;
function $clinit_36(){
  $clinit_36 = nullMethod;
  $clinit_35();
}

function $GWTCGlassPanel(this$static){
  $clinit_36();
  this$static.element_0 = $createFocusable(impl);
  setStyleName(this$static.element_0, 'GWTCGlassPanel', true);
  this$static.element_0.style['zIndex'] = '998';
  return this$static;
}

function $hide_4(this$static){
  this$static.element_0.style['width'] = '0px';
  this$static.element_0.style['height'] = '0px';
  this$static.element_0.style.display = 'none';
}

function $show_4(this$static){
  !this$static.attached && $add_7(($clinit_341() , get_0(null)), this$static, 0, 0);
  this$static.element_0.style.display = '';
  maximizeWidget(this$static);
}

function getClass_37(){
  return Lcom_google_code_p_gwtchismes_client_GWTCGlassPanel_2_classLit;
}

function GWTCGlassPanel(){
}

_ = GWTCGlassPanel.prototype = new FocusPanel;
_.getClass$ = getClass_37;
_.typeId$ = 34;
function getWindowScrollHeight(){
  try {
    return $doc.compatMode == 'CSS1Compat'?$doc.documentElement.scrollHeight:$doc.body.scrollHeight;
  }
   catch (e) {
    alert('getWindowScrollHeight ' + $doc.compatMode + ' ' + e);
    return 100;
  }
}

function getWindowScrollWidth(){
  try {
    return $doc.compatMode == 'CSS1Compat'?$doc.documentElement.scrollWidth:$doc.body.scrollWidth;
  }
   catch (e) {
    alert('getWindowScrollWidth ' + $doc.compatMode + ' ' + e);
    return 100;
  }
}

function internationalize_0(s, os){
  var c, i, o, pos, trail;
  for (i = 0; i < os.length; ++i) {
    o = '' + (os[i] != null?os[i]:'');
    c = '{' + i + '}';
    for (;;) {
      pos = s.indexOf(c);
      if (pos < 0)
        break;
      trail = '';
      pos + c.length < s.length && (trail = $substring(s, pos + c.length));
      s = s.substr(0, pos - 0) + o + trail;
    }
  }
  return s;
}

function internationalize_1(s, o){
  var os;
  os = initValues(_3Ljava_lang_Object_2_classLit, 231, 0, [o]);
  return internationalize_0(s, os);
}

function maximizeWidget(widget){
  var h, w;
  if (!widget)
    return;
  w = max_0($doc.documentElement.clientWidth || $doc.body.clientWidth, max_0(getWindowScrollWidth(), ($clinit_341() , parseInt(get_0(null).element_0['offsetWidth']) || 0)));
  h = max_0($doc.documentElement.clientHeight || $doc.body.clientHeight, max_0(getWindowScrollHeight(), parseInt(get_0(null).element_0['offsetHeight']) || 0));
  widget.element_0.style['width'] = w + 'px';
  widget.element_0.style['height'] = h + 'px';
}

function $$init_6(this$static){
  this$static.dateFormat = getLongDateFormat().pattern;
  this$static.outer_0 = $HorizontalPanel(new HorizontalPanel);
  this$static.mainGrid = $FlexTable(new FlexTable);
  this$static.checkinLabel = $Label_0(new Label, 'Checkin');
  this$static.checkinWeekValue = $Label(new Label);
  this$static.checkinDateValue = $Label(new Label);
  this$static.checkinButton = $Button_0(new Button, '...');
  this$static.changeCheckinLink = $Anchor(new Anchor);
  this$static.checkoutLabel = $Label_0(new Label, 'Checkout');
  this$static.checkoutWeekValue = $Label(new Label);
  this$static.checkoutDateValue = $Label(new Label);
  this$static.checkoutButton = $Button_0(new Button, '...');
  this$static.intervalLabel = $Label_0(new Label, 'Duration');
  this$static.nightsLabel = $Label_0(new Label, 'Nights');
  this$static.nightsValue = $Label(new Label);
  this$static.nightsListBox = $ListBox(new ListBox);
  this$static.changeHandlers = $Vector(new Vector);
  this$static.changeEvent = $GWTCIntervalSelector$1(new GWTCIntervalSelector$1, this$static);
  this$static.clickListener = $GWTCIntervalSelector$2(new GWTCIntervalSelector$2, this$static);
}

function $configureDatePickers_0(this$static, options){
  $setDatePickerOptions(this$static, options);
  $initListeners(this$static);
}

function $drawLayout1(this$static){
  var tInfo, tSelector;
  $addStyleName_4(this$static.mainGrid.rowFormatter, 1, 'InfoContainer');
  tSelector = $FlexTable(new FlexTable);
  $setWidget_2(tSelector, 0, 0, this$static.changeCheckinLink);
  $setWidget_2(tSelector, 0, 1, this$static.nightsLabel);
  $setWidget_2(tSelector, 0, 2, this$static.nightsListBox);
  $setWidget_2(this$static.mainGrid, 0, 0, tSelector);
  tInfo = $FlexTable(new FlexTable);
  $addStyleName_4(tInfo.rowFormatter, 0, 'checkinRow');
  $addStyleName_4(tInfo.rowFormatter, 1, 'checkoutRow');
  $setWidget_2(tInfo, 0, 0, this$static.checkinLabel);
  $setWidget_2(tInfo, 0, 1, this$static.checkinDateValue);
  $setWidget_2(tInfo, 0, 2, this$static.checkinWeekValue);
  $setWidget_2(tInfo, 1, 0, this$static.checkoutLabel);
  $setWidget_2(tInfo, 1, 1, this$static.checkoutDateValue);
  $setWidget_2(tInfo, 1, 2, this$static.checkoutWeekValue);
  $setWidget_2(this$static.mainGrid, 1, 0, tInfo);
}

function $initListeners(this$static){
  $addValueChangeHandler(this$static.checkinCalendar, $GWTCIntervalSelector$5(new GWTCIntervalSelector$5, this$static));
  $addValueChangeHandler(this$static.checkoutCalendar, $GWTCIntervalSelector$6(new GWTCIntervalSelector$6, this$static));
  $addDomHandler(this$static.nightsListBox, $GWTCIntervalSelector$7(new GWTCIntervalSelector$7, this$static), ($clinit_149() , $clinit_149() , TYPE_2));
  this$static.checkinButton.addClickHandler(this$static.clickListener);
  this$static.checkinDateValue.addClickHandler(this$static.clickListener);
  this$static.checkinWeekValue.addClickHandler(this$static.clickListener);
  $addDomHandler(this$static.changeCheckinLink, this$static.clickListener, ($clinit_26() , $clinit_26() , TYPE));
  this$static.checkoutButton.addClickHandler(this$static.clickListener);
}

function $initialize_2(this$static, layout){
  this$static.outer_0.getStyleElement()['className'] = 'GWTCIntervalSelector';
  $add_9(this$static.outer_0, this$static.mainGrid);
  $initWidget(this$static, this$static.outer_0);
  setStyleName(this$static.mainGrid.getStyleElement(), 'GWTCIntervalGrid', true);
  layout != 0 && $addStyleName(this$static.mainGrid, 'GWTCIntervalLayout' + layout);
  setStyleName(this$static.checkinLabel.getStyleElement(), 'labels', true);
  setStyleName(this$static.checkinDateValue.getStyleElement(), 'values', true);
  setStyleName(this$static.checkinLabel.getStyleElement(), 'checkinLabel', true);
  setStyleName(this$static.checkinDateValue.getStyleElement(), 'checkinDateValue', true);
  setStyleName(this$static.checkinWeekValue.getStyleElement(), 'checkinWeekValue', true);
  setStyleName(this$static.checkoutLabel.getStyleElement(), 'labels', true);
  setStyleName(this$static.checkoutDateValue.getStyleElement(), 'values', true);
  setStyleName(this$static.checkoutLabel.getStyleElement(), 'checkoutLabel', true);
  setStyleName(this$static.checkoutDateValue.getStyleElement(), 'checkoutDateValue', true);
  setStyleName(this$static.checkoutWeekValue.getStyleElement(), 'checkoutWeekValue', true);
  this$static.checkinButton.addStyleName('checkinButton');
  this$static.checkoutButton.addStyleName('checkoutButton');
  setStyleName(this$static.intervalLabel.getStyleElement(), 'labels', true);
  setStyleName(this$static.intervalLabel.getStyleElement(), 'durationLabel', true);
  setStyleName(this$static.nightsLabel.getStyleElement(), 'nightsLabel', true);
  setStyleName(this$static.nightsValue.getStyleElement(), 'nightsValue', true);
  setStyleName(this$static.nightsListBox.getStyleElement(), 'nightsBox', true);
  this$static.layoutType = layout;
  $configureDatePickers_0(this$static, ($clinit_30() , CONFIG_DIALOG) | ($clinit_31() , CONFIG_NO_HELP_BUTTON) | CONFIG_NO_YEAR_BUTTON);
  this$static.drawIntervalWidget();
}

function $setDatePickerOptions(this$static, options){
  options |= ($clinit_30() , CONFIG_DIALOG);
  this$static.checkinCalendar = $GWTCDatePicker_1(new GWTCDatePicker, options);
  this$static.checkoutCalendar = $GWTCDatePicker_1(new GWTCDatePicker, options);
  $addStyleName_1(this$static.checkinCalendar, 'checkinPicker');
  $addStyleName_1(this$static.checkoutCalendar, 'checkoutPicker');
  $showWeekNumbers(this$static.checkinCalendar, false);
  $showWeekNumbers(this$static.checkoutCalendar, false);
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

function $setInitDate(this$static, d){
  $setSelectedDate_0(this$static.checkinCalendar, d);
  $setCursorDate_0(this$static.checkinCalendar, d);
  $updateTextElementsFromCheckin(this$static);
}

function $setMaxdays(this$static, d){
  var i;
  this$static.maxdays = d;
  ($clinit_116() , this$static.nightsListBox.element_0).options.length = 0;
  $addDomHandler(this$static.nightsListBox, $GWTCIntervalSelector$3(new GWTCIntervalSelector$3, this$static), ($clinit_149() , $clinit_149() , TYPE_2));
  for (i = 0; i <= this$static.maxdays; ++i)
    $insertItem(this$static.nightsListBox, '' + i, -1);
  $updateTextElements(this$static);
}

function $setMaximalDate_1(this$static, d){
  $setMaximalDate_0(this$static.checkinCalendar, d);
  !!dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate() && compareDate(d, dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()) > 0 && $setSelectedDate_0(this$static.checkinCalendar, d);
  $updateTextElementsFromCheckin(this$static);
}

function $setMinimalDate_1(this$static, d){
  $setMinimalDate_0(this$static.checkinCalendar, d);
  !!dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate() && compareDate(d, dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()) < 0 && $setSelectedDate_0(this$static.checkinCalendar, d);
  $updateTextElementsFromCheckin(this$static);
}

function $setNights(this$static, n){
  !!this$static.nightsListBox && ($clinit_116() , this$static.nightsListBox.element_0).options.length >= n && $setItemSelected(this$static.nightsListBox, n, true);
  $updateInputsFromNights(this$static);
}

function $showCheckinCalendar(this$static, sender){
  (this$static.calendarPosition & 1) == 1?$show_2(this$static.checkinCalendar, this$static.checkinDateValue):(this$static.calendarPosition & 2) == 2?$show_3(this$static.checkinCalendar, -1, -1):$show_2(this$static.checkinCalendar, sender);
  $hide_3(this$static.checkoutCalendar);
}

function $showCheckoutCalendar(this$static, sender){
  (this$static.calendarPosition & 1) == 1?$show_2(this$static.checkoutCalendar, this$static.checkoutDateValue):(this$static.calendarPosition & 2) == 2?$show_3(this$static.checkoutCalendar, -1, -1):$show_2(this$static.checkoutCalendar, sender);
  $hide_3(this$static.checkinCalendar);
}

function $updateInputsFromNights(this$static){
  var checkout;
  checkout = ($clinit_29() , add_6(dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate(), this$static.nightsListBox.element_0.selectedIndex, 4));
  $setSelectedDate_0(this$static.checkoutCalendar, checkout);
  $setCursorDate_0(this$static.checkoutCalendar, checkout);
  ($clinit_116() , this$static.checkoutDateValue.element_0).textContent = $getSelectedDateStr(this$static.checkoutCalendar, this$static.dateFormat) || '';
  this$static.checkoutWeekValue.element_0.textContent = formatDate('(EEE)', this$static.checkoutCalendar.selectedDate) || '';
  this$static.nightsValue.element_0.textContent = '' + this$static.getNights_0() || '';
  $updateTextElements(this$static);
}

function $updateTextElements(this$static){
  ($clinit_116() , this$static.checkinDateValue.element_0).textContent = $getSelectedDateStr(this$static.checkinCalendar, this$static.dateFormat) || '';
  this$static.checkinWeekValue.element_0.textContent = formatDate('(EEE)', this$static.checkinCalendar.selectedDate) || '';
  this$static.checkoutDateValue.element_0.textContent = $getSelectedDateStr(this$static.checkoutCalendar, this$static.dateFormat) || '';
  this$static.checkoutWeekValue.element_0.textContent = formatDate('(EEE)', this$static.checkoutCalendar.selectedDate) || '';
  this$static.nightsValue.element_0.textContent = '' + this$static.getNights_0() || '';
}

function $updateTextElementsFromCheckin(this$static){
  var nights, nightsFromBox;
  $setMinimalDate_0(this$static.checkoutCalendar, dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate());
  $setMaximalDate_0(this$static.checkoutCalendar, ($clinit_29() , add_6(dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate(), this$static.maxdays, 4)));
  nightsFromBox = this$static.nightsListBox.element_0.selectedIndex;
  (nightsFromBox == 0 || this$static.layoutType != 2) && $setSelectedDate_0(this$static.checkoutCalendar, add_6(dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate(), nightsFromBox, 4));
  nights = this$static.getNights_0();
  nights >= 0 && nights < ($clinit_116() , this$static.nightsListBox.element_0).options.length && $setItemSelected(this$static.nightsListBox, nights, true);
  $updateTextElements(this$static);
}

function $updateTextElementsFromCheckout(this$static){
  var nights;
  nights = this$static.getNights_0();
  nights >= 0 && nights < ($clinit_116() , this$static.nightsListBox.element_0).options.length && $setItemSelected(this$static.nightsListBox, nights, true);
  $updateTextElements(this$static);
}

function drawIntervalWidget(){
  var checkinInfo, checkoutInfo, idx, nightsInfo, checkinInfo_0, idx_0, nightsInfo_0, checkinInfo_1, idx_1, nightsInfo_1, checkinInfo_2, idx_2, nightsInfo_2, checkinInfo_3, idx_3, nightsInfo_3;
  switch (this.layoutType) {
    case 1:
      $drawLayout1(this);
      break;
    case 2:
      idx = 0;
      $addStyleName_4(this.mainGrid.rowFormatter, idx, 'checkinRow');
      checkinInfo = $HorizontalPanel(new HorizontalPanel);
      $setWidget_2(this.mainGrid, idx, 0, this.checkinLabel);
      $add_9(checkinInfo, this.checkinDateValue);
      $add_9(checkinInfo, this.checkinWeekValue);
      $add_9(checkinInfo, this.checkinButton);
      $setWidget_2(this.mainGrid, idx, 1, checkinInfo);
      ++idx;
      $addStyleName_4(this.mainGrid.rowFormatter, idx, 'checkoutRow');
      checkoutInfo = $HorizontalPanel(new HorizontalPanel);
      $setWidget_2(this.mainGrid, idx, 0, this.checkoutLabel);
      $add_9(checkoutInfo, this.checkoutDateValue);
      $add_9(checkoutInfo, this.checkoutWeekValue);
      $add_9(checkoutInfo, this.checkoutButton);
      $setWidget_2(this.mainGrid, idx, 1, checkoutInfo);
      this.checkoutDateValue.addClickHandler(this.clickListener);
      this.checkoutWeekValue.addClickHandler(this.clickListener);
      ++idx;
      $addStyleName_4(this.mainGrid.rowFormatter, idx, 'nightsRow');
      nightsInfo = $HorizontalPanel(new HorizontalPanel);
      $setWidget_2(this.mainGrid, idx, 0, this.intervalLabel);
      $setWidget_2(this.mainGrid, idx, 1, nightsInfo);
      $add_9(nightsInfo, this.nightsValue);
      $add_9(nightsInfo, this.nightsLabel);
      break;
    case 3:
      idx_0 = 0;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_0, 'checkinRow');
      checkinInfo_0 = $HorizontalPanel(new HorizontalPanel);
      $setWidget_2(this.mainGrid, idx_0, 0, this.checkinLabel);
      $add_9(checkinInfo_0, this.checkinDateValue);
      $add_9(checkinInfo_0, this.checkinWeekValue);
      $add_9(checkinInfo_0, this.checkinButton);
      $setWidget_2(this.mainGrid, idx_0, 1, checkinInfo_0);
      ++idx_0;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_0, 'nightsRow');
      nightsInfo_0 = $HorizontalPanel(new HorizontalPanel);
      $setWidget_2(this.mainGrid, idx_0, 1, nightsInfo_0);
      $add_9(nightsInfo_0, this.nightsListBox);
      $setWidget_2(this.mainGrid, idx_0, 0, this.intervalLabel);
      $add_9(nightsInfo_0, this.nightsLabel);
      break;
    case 4:
      idx_1 = 0;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_1, 'checkinRow');
      checkinInfo_1 = $HorizontalPanel(new HorizontalPanel);
      $setWidget_2(this.mainGrid, idx_1, 0, this.checkinLabel);
      $add_9(checkinInfo_1, this.checkinDateValue);
      $add_9(checkinInfo_1, this.checkinWeekValue);
      $add_9(checkinInfo_1, this.checkinButton);
      $setWidget_2(this.mainGrid, idx_1, 1, checkinInfo_1);
      ++idx_1;
      $addStyleName_2(this.mainGrid.cellFormatter, idx_1, 0, 'nightsRow');
      $setWidget_2(this.mainGrid, idx_1, 0, this.nightsLabel);
      setStyleName(this.nightsLabel.getStyleElement(), 'labels', true);
      nightsInfo_1 = $FlexTable(new FlexTable);
      $setWidget_2(this.mainGrid, idx_1, 1, nightsInfo_1);
      $setWidget_2(nightsInfo_1, 0, 0, this.nightsListBox);
      $addStyleName_2(nightsInfo_1.cellFormatter, 0, 0, 'nightsRow');
      $setWidget_2(nightsInfo_1, 0, 1, this.checkoutLabel);
      $addStyleName_2(nightsInfo_1.cellFormatter, 0, 1, 'checkoutRow');
      $setWidget_2(nightsInfo_1, 0, 2, this.checkoutDateValue);
      $addStyleName_2(nightsInfo_1.cellFormatter, 0, 2, 'checkoutRow');
      break;
    case 5:
      idx_2 = 0;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_2, 'checkinRow');
      $setWidget_2(this.mainGrid, idx_2, 0, this.checkinLabel);
      ++idx_2;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_2, 'checkinRow');
      checkinInfo_2 = $HorizontalPanel(new HorizontalPanel);
      $add_9(checkinInfo_2, this.checkinDateValue);
      $add_9(checkinInfo_2, this.checkinWeekValue);
      $add_9(checkinInfo_2, this.checkinButton);
      $setWidget_2(this.mainGrid, idx_2, 0, checkinInfo_2);
      ++idx_2;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_2, 'nightsRow');
      $setWidget_2(this.mainGrid, idx_2, 0, this.nightsLabel);
      setStyleName(this.nightsLabel.getStyleElement(), 'labels', true);
      ++idx_2;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_2, 'nightsRow');
      $setWidget_2(this.mainGrid, idx_2, 0, this.nightsListBox);
      ++idx_2;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_2, 'checkoutRow');
      nightsInfo_2 = $HorizontalPanel(new HorizontalPanel);
      $add_9(nightsInfo_2, this.checkoutLabel);
      $add_9(nightsInfo_2, this.checkoutDateValue);
      $setWidget_2(this.mainGrid, idx_2, 0, nightsInfo_2);
      break;
    case 6:
      idx_3 = 0;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_3, 'checkinRow');
      checkinInfo_3 = $HorizontalPanel(new HorizontalPanel);
      $setWidget_2(this.mainGrid, idx_3, 0, this.checkinLabel);
      $add_9(checkinInfo_3, this.checkinDateValue);
      $add_9(checkinInfo_3, this.checkinWeekValue);
      $add_9(checkinInfo_3, this.checkinButton);
      $setWidget_2(this.mainGrid, idx_3, 1, checkinInfo_3);
      ++idx_3;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_3, 'nightsRow');
      nightsInfo_3 = $HorizontalPanel(new HorizontalPanel);
      $setWidget_2(this.mainGrid, idx_3, 1, nightsInfo_3);
      $add_9(nightsInfo_3, this.nightsListBox);
      $setWidget_2(this.mainGrid, idx_3, 0, this.nightsLabel);
      setStyleName(this.nightsLabel.getStyleElement(), 'labels', true);
      ++idx_3;
      $addStyleName_4(this.mainGrid.rowFormatter, idx_3, 'checkoutRow');
      $setWidget_2(this.mainGrid, idx_3, 0, this.checkoutLabel);
      $setWidget_2(this.mainGrid, idx_3, 1, this.checkoutDateValue);
      break;
    default:$drawLayout1(this);
  }
}

function getClass_38(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector_2_classLit;
}

function getNights(){
  return compareDate(dynamicCast($get_3(this.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate(), dynamicCast($get_3(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate());
}

function GWTCIntervalSelector(){
}

_ = GWTCIntervalSelector.prototype = new Composite;
_.drawIntervalWidget = drawIntervalWidget;
_.getClass$ = getClass_38;
_.getNights_0 = getNights;
_.typeId$ = 35;
_.calendarPosition = 0;
_.checkinCalendar = null;
_.checkoutCalendar = null;
_.layoutType = 1;
_.maxdays = 730;
function $ValueChangeEvent(this$static, value){
  this$static.value_0 = value;
  return this$static;
}

function dispatch_0(p0){
  dynamicCast(p0, 9).onValueChange(this);
}

function fire(source, value){
  var event_0;
  if (TYPE_0) {
    event_0 = $ValueChangeEvent(new ValueChangeEvent, value);
    $fireEvent_0(source.handlers, event_0);
  }
}

function getAssociatedType_1(){
  return TYPE_0;
}

function getClass_39(){
  return Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit;
}

function ValueChangeEvent(){
}

_ = ValueChangeEvent.prototype = new GwtEvent;
_.dispatch = dispatch_0;
_.getAssociatedType = getAssociatedType_1;
_.getClass$ = getClass_39;
_.typeId$ = 0;
_.value_0 = null;
var TYPE_0 = null;
function $GWTCIntervalSelector$1(this$static, $anonymous0){
  this$static.value_0 = $anonymous0;
  return this$static;
}

function getClass_40(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$1_2_classLit;
}

function GWTCIntervalSelector$1(){
}

_ = GWTCIntervalSelector$1.prototype = new ValueChangeEvent;
_.getClass$ = getClass_40;
_.typeId$ = 0;
function $GWTCIntervalSelector$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_41(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$2_2_classLit;
}

function onClick_2(event_0){
  var sender;
  sender = dynamicCast(event_0.source, 2);
  if (sender == this.this$0.checkinButton || sender == this.this$0.checkinDateValue || sender == this.this$0.checkinWeekValue || sender == this.this$0.changeCheckinLink) {
    $showCheckinCalendar(this.this$0, sender);
  }
   else if (sender == this.this$0.checkoutButton || sender == this.this$0.checkoutDateValue || sender == this.this$0.checkoutWeekValue) {
    $showCheckoutCalendar(this.this$0, sender);
  }
   else {
    return;
  }
}

function GWTCIntervalSelector$2(){
}

_ = GWTCIntervalSelector$2.prototype = new Object_0;
_.getClass$ = getClass_41;
_.onClick = onClick_2;
_.typeId$ = 36;
_.this$0 = null;
function $GWTCIntervalSelector$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_42(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$3_2_classLit;
}

function onChange(event_0){
  $updateInputsFromNights(this.this$0);
}

function GWTCIntervalSelector$3(){
}

_ = GWTCIntervalSelector$3.prototype = new Object_0;
_.getClass$ = getClass_42;
_.onChange_0 = onChange;
_.typeId$ = 37;
_.this$0 = null;
function getClass_43(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$4_2_classLit;
}

function GWTCIntervalSelector$4(){
}

_ = GWTCIntervalSelector$4.prototype = new Object_0;
_.getClass$ = getClass_43;
_.typeId$ = 0;
function $GWTCIntervalSelector$5(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_44(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$5_2_classLit;
}

function onValueChange_0(event_0){
  var change, change$iterator;
  $hide_3(this.this$0.checkinCalendar);
  $updateTextElementsFromCheckin(this.this$0);
  for (change$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this.this$0.changeHandlers.arrayList); change$iterator.i < change$iterator.this$0.size_0();) {
    change = dynamicCast($next_5(change$iterator), 9);
    change.onValueChange(this.this$0.changeEvent);
  }
}

function GWTCIntervalSelector$5(){
}

_ = GWTCIntervalSelector$5.prototype = new Object_0;
_.getClass$ = getClass_44;
_.onValueChange = onValueChange_0;
_.typeId$ = 38;
_.this$0 = null;
function $GWTCIntervalSelector$6(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_45(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$6_2_classLit;
}

function onValueChange_1(event_0){
  var change, change$iterator;
  $hide_3(this.this$0.checkoutCalendar);
  $updateTextElementsFromCheckout(this.this$0);
  for (change$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this.this$0.changeHandlers.arrayList); change$iterator.i < change$iterator.this$0.size_0();) {
    change = dynamicCast($next_5(change$iterator), 9);
    change.onValueChange(this.this$0.changeEvent);
  }
}

function GWTCIntervalSelector$6(){
}

_ = GWTCIntervalSelector$6.prototype = new Object_0;
_.getClass$ = getClass_45;
_.onValueChange = onValueChange_1;
_.typeId$ = 39;
_.this$0 = null;
function $GWTCIntervalSelector$7(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_46(){
  return Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$7_2_classLit;
}

function onChange_0(event_0){
  var change, change$iterator;
  for (change$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this.this$0.changeHandlers.arrayList); change$iterator.i < change$iterator.this$0.size_0();) {
    change = dynamicCast($next_5(change$iterator), 9);
    change.onValueChange(this.this$0.changeEvent);
  }
}

function GWTCIntervalSelector$7(){
}

_ = GWTCIntervalSelector$7.prototype = new Object_0;
_.getClass$ = getClass_46;
_.onChange_0 = onChange_0;
_.typeId$ = 40;
_.this$0 = null;
function $clinit_47(){
  $clinit_47 = nullMethod;
  $clinit_4();
}

function $DecoratedPopupPanel(this$static, autoHide, modal, prefix){
  var rowStyles;
  $clinit_47();
  $PopupPanel_0(this$static, autoHide);
  this$static.modal = modal;
  rowStyles = initValues(_3Ljava_lang_String_2_classLit, 233, 1, [prefix + 'Top', prefix + 'Middle', prefix + 'Bottom']);
  this$static.decPanel = $DecoratorPanel(new DecoratorPanel, rowStyles, 1);
  this$static.decPanel.getStyleElement()['className'] = '';
  setStylePrimaryName($getStyleElement_1($getFirstChildElement(($clinit_116() , this$static.element_0))), 'gwt-DecoratedPopupPanel');
  $setWidget_0(this$static, this$static.decPanel);
  setStyleName($getContainerElement_2($getFirstChildElement(this$static.element_0)), 'popupContent', false);
  setStyleName(this$static.decPanel.containerElem, prefix + 'Content', true);
  return this$static;
}

function $setWidget_1(this$static, w){
  $setWidget(this$static.decPanel, w);
  $maybeUpdateSize(this$static);
}

function doAttachChildren_1(){
  $onAttach(this.decPanel);
}

function doDetachChildren_1(){
  $onDetach(this.decPanel);
}

function getClass_47(){
  return Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit;
}

function getWidget_0(){
  return this.decPanel.widget;
}

function iterator_1(){
  return this.decPanel.iterator_0();
}

function remove_1(w){
  return this.decPanel.remove(w);
}

function setWidget_1(w){
  $setWidget(this.decPanel, w);
  $maybeUpdateSize(this);
}

function DecoratedPopupPanel(){
}

_ = DecoratedPopupPanel.prototype = new PopupPanel;
_.doAttachChildren = doAttachChildren_1;
_.doDetachChildren = doDetachChildren_1;
_.getClass$ = getClass_47;
_.getWidget = getWidget_0;
_.iterator_0 = iterator_1;
_.remove = remove_1;
_.setWidget = setWidget_1;
_.typeId$ = 41;
_.decPanel = null;
function $clinit_48(){
  $clinit_48 = nullMethod;
  $clinit_47();
}

function $DialogBox(this$static){
  $clinit_48();
  $DialogBox_0(this$static, false, true);
  return this$static;
}

function $DialogBox_0(this$static, autoHide, modal){
  var mouseHandler, td, td_0, tr, style, style_0;
  $clinit_48();
  $DecoratedPopupPanel(this$static, autoHide, modal, 'dialog');
  this$static.caption = $DialogBox$CaptionImpl(new DialogBox$CaptionImpl);
  td = (tr = $getChild(this$static.decPanel.tbody, 0) , td_0 = $getChild(tr, 1) , $getFirstChildElement(($clinit_116() , td_0)));
  td.appendChild(this$static.caption.element_0);
  $adopt(this$static, this$static.caption);
  this$static.caption.getStyleElement()['className'] = 'Caption';
  $getStyleElement_1($getFirstChildElement(this$static.element_0))['className'] = 'gwt-DialogBox';
  this$static.windowWidth = $getClientWidth_0($doc);
  this$static.clientLeft = (style = $wnd.getComputedStyle($doc.documentElement, '') , parseInt(style.marginLeft) + parseInt(style.borderLeftWidth));
  this$static.clientTop = (style_0 = $wnd.getComputedStyle($doc.documentElement, '') , parseInt(style_0.marginTop) + parseInt(style_0.borderTopWidth));
  mouseHandler = $DialogBox$MouseHandler(new DialogBox$MouseHandler, this$static);
  $addDomHandler(this$static, mouseHandler, ($clinit_184() , $clinit_184() , TYPE_7));
  $addDomHandler(this$static, mouseHandler, ($clinit_192() , $clinit_192() , TYPE_11));
  $addDomHandler(this$static, mouseHandler, ($clinit_186() , $clinit_186() , TYPE_8));
  $addDomHandler(this$static, mouseHandler, ($clinit_190() , $clinit_190() , TYPE_10));
  $addDomHandler(this$static, mouseHandler, ($clinit_188() , $clinit_188() , TYPE_9));
  return this$static;
}

function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, $getX(event_0), $getY(event_0));
}

function $hide_5(this$static){
  if (this$static.resizeHandlerRegistration) {
    $removeHandler(this$static.resizeHandlerRegistration);
    this$static.resizeHandlerRegistration = null;
  }
  $hide_0(this$static, false);
}

function $isCaptionEvent(this$static, event_0){
  var target, td, tr, parent_0;
  target = ($clinit_116() , event_0).target;
  if (is_0(target)) {
    return $isOrHasChild_0((parent_0 = (tr = $getChild(this$static.decPanel.tbody, 0) , td = $getChild(tr, 1) , $getFirstChildElement(td)).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0), target);
  }
  return false;
}

function $onMouseDown(this$static, x, y){
  this$static.dragging = true;
  setCapture(this$static.element_0);
  this$static.dragStartX = x;
  this$static.dragStartY = y;
}

function $onMouseMove(this$static, x, y){
  var absX, absY;
  if (this$static.dragging) {
    absX = x + $getAbsoluteLeft_0(($clinit_116() , this$static.element_0));
    absY = y + $getAbsoluteTop_0(this$static.element_0);
    if (absX < this$static.clientLeft || absX >= this$static.windowWidth || absY < this$static.clientTop) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(this$static.element_0);
}

function $show_5(this$static){
  !this$static.resizeHandlerRegistration && (this$static.resizeHandlerRegistration = addResizeHandler($DialogBox$1(new DialogBox$1, this$static)));
  $show(this$static);
}

function doAttachChildren_2(){
  try {
    $onAttach(this.decPanel);
  }
   finally {
    $onAttach(this.caption);
  }
}

function doDetachChildren_2(){
  try {
    $onDetach(this.decPanel);
  }
   finally {
    $onDetach(this.caption);
  }
}

function getClass_48(){
  return Lcom_google_gwt_user_client_ui_DialogBox_2_classLit;
}

function hide_3(){
  $hide_5(this);
}

function onBrowserEvent_2(event_0){
  switch ($eventGetTypeInt(($clinit_116() , event_0).type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent(this, event_0);
}

function onPreviewNativeEvent_0(event_0){
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled && $eventGetTypeInt(($clinit_116() , event_0.nativeEvent).type) == 4 && $isCaptionEvent(this, nativeEvent) && (($clinit_116() , nativeEvent).preventDefault() , undefined);
}

function setText_2(text){
  ($clinit_116() , this.caption.element_0).textContent = text || '';
}

function show_2(){
  $show_5(this);
}

function DialogBox(){
}

_ = DialogBox.prototype = new DecoratedPopupPanel;
_.doAttachChildren = doAttachChildren_2;
_.doDetachChildren = doDetachChildren_2;
_.getClass$ = getClass_48;
_.hide_0 = hide_3;
_.onBrowserEvent = onBrowserEvent_2;
_.onPreviewNativeEvent = onPreviewNativeEvent_0;
_.setText_0 = setText_2;
_.show_0 = show_2;
_.typeId$ = 42;
_.clientLeft = 0;
_.clientTop = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.resizeHandlerRegistration = null;
_.windowWidth = 0;
function $clinit_49(){
  $clinit_49 = nullMethod;
  $clinit_48();
}

function $GWTCModalBox(this$static, options){
  $clinit_49();
  $DialogBox_0(this$static, (options & 64) != 64, true);
  (options & 4) == 4?(this$static.panelbox = $GWTCBox_0(new GWTCBox, 'GWTCBox-grey')):(options & 8) == 8?(this$static.panelbox = $GWTCBox_0(new GWTCBox, 'GWTCBox-blue')):(options & 2) == 2?(this$static.panelbox = $GWTCBox_0(new GWTCBox, 'GWTCBox')):(this$static.panel = $DockPanel(new DockPanel));
  $add(this$static, this$static.panel?this$static.panel:this$static.panelbox);
  this$static.isAnimationEnabled = (options & 32) == 32;
  if ((options & 16) != 16) {
    this$static.background = $GWTCGlassPanel(new GWTCGlassPanel);
    (options & 64) != 64 && $addDomHandler(this$static.background, $GWTCModalBox$1(new GWTCModalBox$1, this$static), ($clinit_26() , $clinit_26() , TYPE));
  }
  this$static.element_0.style['zIndex'] = '999';
  !!this$static.background && (this$static.background.element_0.style['zIndex'] = '998' , undefined);
  this$static.desiredWidth = 'auto';
  $maybeUpdateSize(this$static);
  'auto'.length == 0 && (this$static.desiredWidth = null);
  setStyleName($getStyleElement_1($getFirstChildElement(($clinit_116() , this$static.element_0))), 'GWTCModal', true);
  return this$static;
}

function $center_1(this$static){
  this$static.desiredWidth = 'auto';
  $maybeUpdateSize(this$static);
  'auto'.length == 0 && (this$static.desiredWidth = null);
  $center(this$static);
}

function $hide_6(this$static){
  $hide_5(this$static);
  !!this$static.background && $hide_4(this$static.background);
}

function $show_6(this$static){
  !!this$static.background && $show_4(this$static.background);
  $show_5(this$static);
}

function add_8(w){
  this.panelbox?this.panelbox.add_1(w, ($clinit_286() , NORTH)):$add_8(this.panel, w, ($clinit_286() , NORTH));
}

function center_1(){
  this.desiredWidth = 'auto';
  $maybeUpdateSize(this);
  'auto'.length == 0 && (this.desiredWidth = null);
  $center(this);
}

function getClass_49(){
  return Lcom_google_code_p_gwtchismes_client_GWTCModalBox_2_classLit;
}

function hide_4(){
  $hide_5(this);
  !!this.background && $hide_4(this.background);
}

function onDetach_2(){
  $onDetach(this);
  !!this.background && $hide_4(this.background);
}

function setText_3(t){
  ($clinit_116() , this.caption.element_0).textContent = t || '';
}

function show_3(){
  !!this.background && $show_4(this.background);
  $show_5(this);
}

function GWTCModalBox(){
}

_ = GWTCModalBox.prototype = new DialogBox;
_.add_0 = add_8;
_.center_0 = center_1;
_.getClass$ = getClass_49;
_.hide_0 = hide_4;
_.onDetach = onDetach_2;
_.setText_0 = setText_3;
_.show_0 = show_3;
_.typeId$ = 43;
_.background = null;
_.panel = null;
_.panelbox = null;
function $GWTCModalBox$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_50(){
  return Lcom_google_code_p_gwtchismes_client_GWTCModalBox$1_2_classLit;
}

function onClick_3(event_0){
  $hide_6(this.this$0);
}

function GWTCModalBox$1(){
}

_ = GWTCModalBox$1.prototype = new Object_0;
_.getClass$ = getClass_50;
_.onClick = onClick_3;
_.typeId$ = 44;
_.this$0 = null;
function $GWTCPopupBox$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_51(){
  return Lcom_google_code_p_gwtchismes_client_GWTCPopupBox$1_2_classLit;
}

function onClick_4(event_0){
  this.this$0.hide_0();
}

function GWTCPopupBox$1(){
}

_ = GWTCPopupBox$1.prototype = new Object_0;
_.getClass$ = getClass_51;
_.onClick = onClick_4;
_.typeId$ = 45;
_.this$0 = null;
function $clinit_52(){
  $clinit_52 = nullMethod;
  timers = $ArrayList(new ArrayList);
  addCloseHandler(new Timer$1);
}

function $cancel(this$static){
  this$static.isRepeating?($wnd.clearInterval(this$static.timerId) , undefined):($wnd.clearTimeout(this$static.timerId) , undefined);
  $remove_10(timers, this$static);
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw $IllegalArgumentException(new IllegalArgumentException, 'must be positive');
  }
  $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_11(timers, this$static);
}

function $scheduleRepeating(this$static, periodMillis){
  if (periodMillis <= 0) {
    throw $IllegalArgumentException(new IllegalArgumentException, 'must be positive');
  }
  $cancel(this$static);
  this$static.isRepeating = true;
  this$static.timerId = createInterval(this$static, periodMillis);
  $add_11(timers, this$static);
}

function createInterval(timer, period){
  return $wnd.setInterval($entry(function(){
    timer.fire();
  }
  ), period);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout($entry(function(){
    timer.fire();
  }
  ), delay);
}

function fire_0(){
  !this.isRepeating && $remove_10(timers, this);
  this.run();
}

function getClass_52(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}

function Timer(){
}

_ = Timer.prototype = new Object_0;
_.fire = fire_0;
_.getClass$ = getClass_52;
_.typeId$ = 46;
_.isRepeating = false;
_.timerId = 0;
var timers;
function $clinit_53(){
  $clinit_53 = nullMethod;
  $clinit_52();
}

function $GWTCPopupBox$2(this$static, this$0){
  $clinit_53();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_53(){
  return Lcom_google_code_p_gwtchismes_client_GWTCPopupBox$2_2_classLit;
}

function run(){
  this.this$0.hide_0();
}

function GWTCPopupBox$2(){
}

_ = GWTCPopupBox$2.prototype = new Timer;
_.getClass$ = getClass_53;
_.run = run;
_.typeId$ = 47;
_.this$0 = null;
function $hide_7(this$static){
  this$static.contentTable.getElement_0().style.display = 'none';
  if (!this$static.showAsDialog)
    return;
  !!this$static.background && $hide_4(this$static.background);
  this$static.progressDlg.hide_0();
}

function $initialize_3(this$static, options, elements){
  var col, containerElementGrid, elm, loop, row, td, td_0;
  (options & 1) == 1 && (this$static.showRemaining = true);
  (options & 2) == 2 && (this$static.showText = true);
  (options & 4) == 4 && (this$static.showNumbers = true);
  (options & 8) == 8 && (this$static.showAsDialog = true);
  (options & 16) == 16 && (this$static.showText = this$static.showLeftText = true);
  this$static.elements = elements;
  this$static.contentTable.getStyleElement()['className'] = 'GWTCProgress';
  this$static.numberLabel.getStyleElement()['className'] = 'prg-numbers';
  this$static.remainLabel.getStyleElement()['className'] = 'prg-time';
  this$static.textLabel.getStyleElement()['className'] = 'prg-title';
  containerElementGrid = $Grid_0(new Grid, 1, 1);
  containerElementGrid.element_0['className'] = 'prg-bar-outer';
  containerElementGrid.tableElem['cellPadding'] = 0;
  containerElementGrid.tableElem['cellSpacing'] = 0;
  this$static.elementGrid = $Grid_0(new Grid, 1, elements);
  this$static.elementGrid.getStyleElement()['className'] = 'prg-bar-inner';
  this$static.elementGrid.tableElem['cellPadding'] = 0;
  this$static.elementGrid.tableElem['cellSpacing'] = 0;
  $setWidget_2(containerElementGrid, 0, 0, this$static.elementGrid);
  for (loop = 0; loop < elements; ++loop) {
    elm = $Grid_0(new Grid, 1, 1);
    elm.prepareCell(0, 0);
    td = (td_0 = elm.cellFormatter.this$0.bodyElem.rows[0].cells[0] , $internalClearCell(elm, td_0, false) , td_0);
    td.innerHTML = '';
    elm.element_0['className'] = 'prg-bar-done';
    setStyleName(elm.element_0, 'prg-bar-element', true);
    $setWidget_2(this$static.elementGrid, 0, loop, elm);
  }
  row = 0;
  col = 0;
  this$static.showLeftText?$setWidget_2(this$static.contentTable, row, col++, this$static.textLabel):this$static.showText && $setWidget_2(this$static.contentTable, row++, col, this$static.textLabel);
  this$static.showNumbers && $setWidget_2(this$static.contentTable, row, col + 1, this$static.numberLabel);
  $setWidget_2(this$static.contentTable, row++, col, containerElementGrid);
  $setWidget_2(this$static.contentTable, row++, col, this$static.remainLabel);
  $setProgress_0(this$static, 0, 0, 0);
  if (this$static.showAsDialog) {
    this$static.background = $GWTCGlassPanel(new GWTCGlassPanel);
    this$static.progressDlg = $DialogBox(new DialogBox);
    $setWidget_1(this$static.progressDlg, this$static.contentTable);
    this$static.progressDlg.getStyleElement()['className'] = 'GWTCProgress';
    $addStyleDependentName(this$static.progressDlg, 'dialog');
    this$static.progressDlg.center_0();
    $hide_7(this$static);
    $initWidget(this$static, $SimplePanel(new SimplePanel));
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
    elm = dynamicCast($getWidget_0(this$static.elementGrid, 0, loop), 10);
    if (loop < completed) {
      elm.element_0['className'] = 'prg-bar-done';
      setStyleName(elm.element_0, 'prg-bar-element', true);
    }
     else {
      elm.element_0['className'] = 'prg-bar-blank';
      setStyleName(elm.element_0, 'prg-bar-element', true);
    }
  }
  this$static.remainLabel.element_0.innerHTML = '&nbsp;';
  this$static.numberLabel.element_0.innerHTML = '&nbsp;';
  soFar = sub(fromDouble((new Date).getTime()), this$static.startTime);
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
      ($clinit_116() , this$static.remainLabel.element_0).textContent = internationalize_1(remainText, '' + toString_9(remaining)) || '';
    }
  }
   else {
    this$static.startTime = fromDouble((new Date).getTime());
  }
  if (this$static.showNumbers) {
    message = total > 0?this$static.totalMessage:this$static.percentMessage;
    velocity = compare_0(soFar, P0_longLit) > 0?div_0(fromInt(done * 1000), soFar):P0_longLit;
    os = initValues(_3Ljava_lang_Object_2_classLit, 231, 0, ['' + percentage, '' + done, '' + total, '' + toString_9(velocity)]);
    ($clinit_116() , this$static.numberLabel.element_0).textContent = internationalize_0(message, os) || '';
  }
}

function $show_7(this$static){
  this$static.contentTable.getElement_0().style.display = '';
  if (!this$static.showAsDialog)
    return;
  !!this$static.background && $show_4(this$static.background);
  this$static.progressDlg.center_0();
}

function getClass_54(){
  return Lcom_google_code_p_gwtchismes_client_GWTCProgress_2_classLit;
}

function GWTCProgress(){
}

_ = GWTCProgress.prototype = new Composite;
_.getClass$ = getClass_54;
_.typeId$ = 48;
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
function $GWTCSimpleDatePicker$1(this$static, $anonymous0){
  this$static.value_0 = $anonymous0;
  return this$static;
}

function getClass_55(){
  return Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$1_2_classLit;
}

function GWTCSimpleDatePicker$1(){
}

_ = GWTCSimpleDatePicker$1.prototype = new ValueChangeEvent;
_.getClass$ = getClass_55;
_.typeId$ = 0;
function getClass_56(){
  return Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$2_2_classLit;
}

function GWTCSimpleDatePicker$2(){
}

_ = GWTCSimpleDatePicker$2.prototype = new Object_0;
_.getClass$ = getClass_56;
_.typeId$ = 0;
function $GWTCSimpleDatePicker$CellHTML(this$static){
  $HTML(this$static);
  this$static.mouseOverHandler = new GWTCSimpleDatePicker$CellHTML$1;
  this$static.mouseOutHandler = new GWTCSimpleDatePicker$CellHTML$2;
  return this$static;
}

function $addClickHandler_3(this$static, handler){
  $addDomHandler(this$static, this$static.mouseOverHandler, ($clinit_190() , $clinit_190() , TYPE_10));
  $addDomHandler(this$static, this$static.mouseOutHandler, ($clinit_188() , $clinit_188() , TYPE_9));
  return $addDomHandler(this$static, handler, ($clinit_26() , $clinit_26() , TYPE));
}

function $setDay(this$static, d){
  if (this$static.day != d) {
    this$static.day = d;
    this$static.element_0.innerHTML = (this$static.day < 1?'&nbsp;':'' + this$static.day) || '';
  }
}

function addClickHandler_2(handler){
  return $addClickHandler_3(this, handler);
}

function getClass_57(){
  return Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$CellHTML_2_classLit;
}

function GWTCSimpleDatePicker$CellHTML(){
}

_ = GWTCSimpleDatePicker$CellHTML.prototype = new HTML;
_.addClickHandler = addClickHandler_2;
_.getClass$ = getClass_57;
_.typeId$ = 49;
_.date = null;
_.day = -1;
_.enabled = true;
function getClass_58(){
  return Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$CellHTML$1_2_classLit;
}

function onMouseOver_0(event_0){
  dynamicCast(event_0.source, 2).addStyleDependentName('over');
}

function GWTCSimpleDatePicker$CellHTML$1(){
}

_ = GWTCSimpleDatePicker$CellHTML$1.prototype = new Object_0;
_.getClass$ = getClass_58;
_.onMouseOver = onMouseOver_0;
_.typeId$ = 50;
function getClass_59(){
  return Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$CellHTML$2_2_classLit;
}

function onMouseOut_0(event_0){
  $removeStyleDependentName(dynamicCast(event_0.source, 2), 'over');
}

function GWTCSimpleDatePicker$CellHTML$2(){
}

_ = GWTCSimpleDatePicker$CellHTML$2.prototype = new Object_0;
_.getClass$ = getClass_59;
_.onMouseOut = onMouseOut_0;
_.typeId$ = 51;
function $clinit_60(){
  $clinit_60 = nullMethod;
  $clinit_5();
}

function $setImg(this$static, i){
  i == null?$removeFromParent(this$static.img):$setUrl(this$static.img, i);
}

function $show_8(this$static, timeout){
  var t;
  if (timeout > 0) {
    t = $GWTCWait$1(new GWTCWait$1, this$static);
    $schedule(t, timeout * 1000);
  }
  this$static.element_0.style['visibility'] = 'visible';
  this$static.desiredWidth = 'auto';
  $maybeUpdateSize(this$static);
  'auto'.length == 0 && (this$static.desiredWidth = null);
  $center(this$static);
}

function getClass_60(){
  return Lcom_google_code_p_gwtchismes_client_GWTCWait_2_classLit;
}

function hide_5(){
  $hide_1(this);
  this.element_0.style['visibility'] = 'hidden';
}

function GWTCWait(){
}

_ = GWTCWait.prototype = new GWTCPopupBox;
_.getClass$ = getClass_60;
_.hide_0 = hide_5;
_.typeId$ = 52;
function $clinit_61(){
  $clinit_61 = nullMethod;
  $clinit_52();
}

function $GWTCWait$1(this$static, this$0){
  $clinit_61();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_61(){
  return Lcom_google_code_p_gwtchismes_client_GWTCWait$1_2_classLit;
}

function run_0(){
  $hide_10(this.this$0);
}

function GWTCWait$1(){
}

_ = GWTCWait$1.prototype = new Timer;
_.getClass$ = getClass_61;
_.run = run_0;
_.typeId$ = 53;
_.this$0 = null;
function $adjustSelectedDateToWeekStart(this$static){
  $setInitDate(this$static, getFirstDayOfWeek(dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()));
  $setNights(this$static, 6);
}

function $setI18nMessages_1(this$static, keys){
  $setI18nMessages_0(this$static, keys);
  keys.stringMap[':key.select.week'] != null && $setText_7(this$static.mainGrid, 0, 0, dynamicCast(keys.stringMap[':key.select.week'], 1));
  keys.stringMap[':key.from'] != null && $setText_7(this$static.mainGrid, 1, 0, dynamicCast(keys.stringMap[':key.from'], 1));
  keys.stringMap[':key.to'] != null && $setText_7(this$static.mainGrid, 1, 2, dynamicCast(keys.stringMap[':key.to'], 1));
}

function drawIntervalWidget_0(){
  $setDatePickerOptions(this, ($clinit_30() , CONFIG_BACKGROUND));
  $initListeners(this);
  $configure(this.checkinCalendar, ';;;- x;;;p<;n>', 2, 2, 2, 24);
  $configure(this.checkoutCalendar, ';;;- x;;;p<;n>', 2, 2, 2, 24);
  $initListeners(this);
  $showWeekNumbers(this.checkinCalendar, true);
  $clickOnWeekNumbers(this.checkinCalendar, true);
  $refresh(this.checkinCalendar);
  $setMaxdays(this, 4);
  $addStyleName(this, getStylePrimaryName(this.element_0) + '-week');
  $add_11(this.changeHandlers.arrayList, $GWTCWeekSelector$1(new GWTCWeekSelector$1, this));
  new GWTCIntervalSelector$4;
  $setText_7(this.mainGrid, 0, 0, 'Select week');
  $setColSpan(dynamicCast(this.mainGrid.cellFormatter, 13), 0, 0, 5);
  $setText_7(this.mainGrid, 1, 0, 'From:');
  $setWidget_2(this.mainGrid, 1, 1, this.checkinDateValue);
  setStyleName(this.checkinDateValue.getStyleElement(), 'checkinRow', true);
  $setText_7(this.mainGrid, 1, 2, 'To:');
  $setWidget_2(this.mainGrid, 1, 3, this.checkoutDateValue);
  setStyleName(this.checkoutDateValue.getStyleElement(), 'checkinRow', true);
  this.checkoutDateValue.addClickHandler($GWTCWeekSelector$2(new GWTCWeekSelector$2, this));
  $setWidget_2(this.mainGrid, 1, 4, this.checkinButton);
  this.dateFormat = 'MMM dd, yyyy (ddd)';
  $updateTextElements(this);
  this.calendarPosition = 1;
  $setInitDate(this, getFirstDayOfWeek(dynamicCast($get_3(this.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()));
  $setNights(this, 6);
}

function getClass_62(){
  return Lcom_google_code_p_gwtchismes_client_GWTCWeekSelector_2_classLit;
}

function GWTCWeekSelector(){
}

_ = GWTCWeekSelector.prototype = new GWTCIntervalSelector;
_.drawIntervalWidget = drawIntervalWidget_0;
_.getClass$ = getClass_62;
_.typeId$ = 54;
function $GWTCWeekSelector$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_63(){
  return Lcom_google_code_p_gwtchismes_client_GWTCWeekSelector$1_2_classLit;
}

function onValueChange_2(event_0){
  $adjustSelectedDateToWeekStart(this.this$0);
}

function GWTCWeekSelector$1(){
}

_ = GWTCWeekSelector$1.prototype = new Object_0;
_.getClass$ = getClass_63;
_.onValueChange = onValueChange_2;
_.typeId$ = 55;
_.this$0 = null;
function $GWTCWeekSelector$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_64(){
  return Lcom_google_code_p_gwtchismes_client_GWTCWeekSelector$2_2_classLit;
}

function onClick_5(event_0){
  this.this$0.checkinButton.click();
}

function GWTCWeekSelector$2(){
}

_ = GWTCWeekSelector$2.prototype = new Object_0;
_.getClass$ = getClass_64;
_.onClick = onClick_5;
_.typeId$ = 56;
_.this$0 = null;
var dialogOk = null;
function $clinit_66(){
  $clinit_66 = nullMethod;
  $clinit_4();
}

function $GWTCColorPicker(this$static){
  var c, cell, i, r, t;
  $clinit_66();
  $PopupPanel_0(this$static, true);
  this$static.colors = initValues(_3J_classLit, 235, -1, [Pffffff_longLit, Pcccccc_longLit, Pc0c0c0_longLit, P999999_longLit, P666666_longLit, P333333_longLit, P0_longLit, Pffcccc_longLit, Pff6666_longLit, Pff0000_longLit, Pcc0000_longLit, P990000_longLit, P660000_longLit, P330000_longLit, Pffcc99_longLit, Pff9966_longLit, Pff9900_longLit, Pfd6500_longLit, Pcb6500_longLit, P983200_longLit, P653200_longLit, Pffff99_longLit, Pffff66_longLit, Pffcc66_longLit, Pfdcb32_longLit, Pcb9832_longLit, P986532_longLit, P653232_longLit, Pffffcc_longLit, Pffff33_longLit, Pffff00_longLit, Pfdcb00_longLit, P989800_longLit, P656500_longLit, P323200_longLit, P99ff99_longLit, P66ff99_longLit, P33ff33_longLit, P32cb00_longLit, P9800_longLit, P6500_longLit, P3200_longLit, P99ffff_longLit, P33ffff_longLit, P66cccc_longLit, Pcbcb_longLit, P329898_longLit, P326565_longLit, P3232_longLit, Pccffff_longLit, P66ffff_longLit, P33ccff_longLit, P3265fd_longLit, P3232fd_longLit, P98_longLit, P65_longLit, Pccccff_longLit, P9999ff_longLit, P6666cc_longLit, P6532fd_longLit, P6500cb_longLit, P323298_longLit, P320098_longLit, Pffccff_longLit, Pff99ff_longLit, Pcc66cc_longLit, Pcb32cb_longLit, P983298_longLit, P653265_longLit, P320032_longLit]);
  t = $FlexTable(new FlexTable);
  t.tableElem['cellPadding'] = 0;
  t.tableElem['cellSpacing'] = 0;
  t.element_0.style['border'] = '1px solid #cccccc';
  i = 0;
  for (r = 0; i < this$static.colors.length; ++r) {
    for (c = 0; c < 7 && i < this$static.colors.length; ++c , ++i) {
      cell = $GWTCColorPicker$ColorCell(new GWTCColorPicker$ColorCell, this$static.colors[i]);
      $addDomHandler(cell, this$static, ($clinit_26() , $clinit_26() , TYPE));
      $setWidget_2(t, r, c, cell);
    }
  }
  $add(this$static, t);
  this$static.isAnimationEnabled = true;
  $getStyleElement_1($getFirstChildElement(($clinit_116() , this$static.element_0)))['className'] = 'hupa-color-picker';
  return this$static;
}

function getClass_65(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker_2_classLit;
}

function getColor(){
  return this.color;
}

function onClick_6(event_0){
  var cell;
  cell = dynamicCast(event_0.source, 14);
  this.color = cell.rgbColor;
  !!this.changeHandler && this.changeHandler.onValueChange($GWTCColorPicker$2(new GWTCColorPicker$2, this));
}

function GWTCColorPicker(){
}

_ = GWTCColorPicker.prototype = new PopupPanel;
_.getClass$ = getClass_65;
_.getColor_0 = getColor;
_.onClick = onClick_6;
_.typeId$ = 57;
_.changeHandler = null;
_.color = '';
function getClass_66(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker$1_2_classLit;
}

function GWTCColorPicker$1(){
}

_ = GWTCColorPicker$1.prototype = new Object_0;
_.getClass$ = getClass_66;
_.typeId$ = 0;
function $GWTCColorPicker$2(this$static, $anonymous0){
  this$static.value_0 = $anonymous0;
  return this$static;
}

function getClass_67(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker$2_2_classLit;
}

function GWTCColorPicker$2(){
}

_ = GWTCColorPicker$2.prototype = new ValueChangeEvent;
_.getClass$ = getClass_67;
_.typeId$ = 0;
function $GWTCColorPicker$ColorCell(this$static, color){
  $GWTCColorPicker$ColorCell_0(this$static, toPowerOfTwoString_0(color, 4));
  return this$static;
}

function $GWTCColorPicker$ColorCell_0(this$static, color){
  $Label(this$static);
  $setColor(this$static, color);
  $setTitle(this$static, this$static.rgbColor);
  this$static.element_0.style['width'] = '14px';
  this$static.element_0.style['height'] = '12px';
  this$static.element_0.style['backgroundColor'] = this$static.rgbColor;
  this$static.element_0.style['border'] = '1px solid #cccccc';
  $addDomHandler(this$static, $GWTCColorPicker$ColorCell$1(new GWTCColorPicker$ColorCell$1, this$static), ($clinit_190() , $clinit_190() , TYPE_10));
  $addDomHandler(this$static, $GWTCColorPicker$ColorCell$2(new GWTCColorPicker$ColorCell$2, this$static), ($clinit_188() , $clinit_188() , TYPE_9));
  return this$static;
}

function $setColor(this$static, s){
  while (s.length < 6)
    s = '0' + s;
  this$static.rgbColor = '#' + s;
}

function getClass_68(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker$ColorCell_2_classLit;
}

function GWTCColorPicker$ColorCell(){
}

_ = GWTCColorPicker$ColorCell.prototype = new Label;
_.getClass$ = getClass_68;
_.typeId$ = 58;
_.rgbColor = null;
function $GWTCColorPicker$ColorCell$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_69(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker$ColorCell$1_2_classLit;
}

function onMouseOver_1(event_0){
  this.this$1.element_0.style['border'] = '1px solid #ffffff';
}

function GWTCColorPicker$ColorCell$1(){
}

_ = GWTCColorPicker$ColorCell$1.prototype = new Object_0;
_.getClass$ = getClass_69;
_.onMouseOver = onMouseOver_1;
_.typeId$ = 59;
_.this$1 = null;
function $GWTCColorPicker$ColorCell$2(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_70(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker$ColorCell$2_2_classLit;
}

function onMouseOut_1(event_0){
  this.this$1.element_0.style['border'] = '1px solid #cccccc';
}

function GWTCColorPicker$ColorCell$2(){
}

_ = GWTCColorPicker$ColorCell$2.prototype = new Object_0;
_.getClass$ = getClass_70;
_.onMouseOut = onMouseOut_1;
_.typeId$ = 60;
_.this$1 = null;
function $add_4(this$static, child, container){
  $removeFromParent(child);
  $add_10(this$static.children, child);
  container.appendChild(child.getElement_0());
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForInsertion(this$static, index){
  if (index < 0 || index > this$static.children.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
}

function $insert(this$static, child, container, beforeIndex, domInsert){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_0(this$static.children, child, beforeIndex);
  domInsert?$insertChild(container, child.element_0, beforeIndex):container.appendChild(child.element_0);
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.getElement_0();
    (parent_0 = ($clinit_116() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(elem);
    $remove_5(this$static.children, w);
  }
  return true;
}

function getClass_71(){
  return Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit;
}

function iterator_2(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this.children);
}

function remove_2(w){
  return $remove(this, w);
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel;
_.getClass$ = getClass_71;
_.iterator_0 = iterator_2;
_.remove = remove_2;
_.typeId$ = 61;
function $CellPanel(this$static){
  this$static.children = $WidgetCollection(new WidgetCollection, this$static);
  this$static.table = ($clinit_116() , $doc).createElement('table');
  this$static.body_0 = $doc.createElement('tbody');
  this$static.table.appendChild(this$static.body_0);
  this$static.element_0 = this$static.table;
  return this$static;
}

function $getWidgetTd(this$static, w){
  var parent_0;
  if (w.parent_0 != this$static) {
    return null;
  }
  return parent_0 = ($clinit_116() , w.element_0).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0;
}

function getClass_72(){
  return Lcom_google_gwt_user_client_ui_CellPanel_2_classLit;
}

function CellPanel(){
}

_ = CellPanel.prototype = new ComplexPanel;
_.getClass$ = getClass_72;
_.typeId$ = 62;
_.body_0 = null;
_.table = null;
function $VerticalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_303() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_307() , ALIGN_TOP);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_5(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_116() , $doc).createElement('tr');
  td = (td_0 = $doc.createElement('td') , td_0['align'] = this$static.horzAlign.textAlignString , td_0.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , td_0);
  tr.appendChild(td);
  this$static.body_0.appendChild(tr);
  $removeFromParent(w);
  $add_10(this$static.children, w);
  td.appendChild(w.getElement_0());
  $setParent(w, this$static);
}

function add_9(w){
  $add_5(this, w);
}

function getClass_73(){
  return Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit;
}

function remove_3(w){
  var removed, td, parent_0, parent_1;
  td = (parent_0 = ($clinit_116() , w.getElement_0()).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  removed = $remove(this, w);
  removed && this.body_0.removeChild((parent_1 = td.parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1));
  return removed;
}

function VerticalPanel(){
}

_ = VerticalPanel.prototype = new CellPanel;
_.add_0 = add_9;
_.getClass$ = getClass_73;
_.remove = remove_3;
_.typeId$ = 63;
function $setEnabled_0(iframe, b){
  var doc = iframe.contentWindow.document;
  doc.body.contentEditable?(doc.body.contentEditable = b):(doc.designMode = b?'On':'Off');
}

function $setHTML_2(this$static, html){
  !html.length;
  $setHTML_6(this$static.area.impl, "<font size=2 style='font-family: arial'><br/>" + html + '<\/font>');
}

function getClass_74(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCEditor_2_classLit;
}

function setHeight_1(height){
  $setHeight(this.area, height);
}

function setText_4(text){
  $setText_10(this.area.impl, text);
}

function setWidth_2(width){
  $setWidth(this.area, width);
}

function GWTCEditor(){
}

_ = GWTCEditor.prototype = new VerticalPanel;
_.getClass$ = getClass_74;
_.setHeight = setHeight_1;
_.setText_0 = setText_4;
_.setWidth = setWidth_2;
_.typeId$ = 64;
function $GWTCEditor$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_75(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCEditor$1_2_classLit;
}

function GWTCEditor$1(){
}

_ = GWTCEditor$1.prototype = new Object_0;
_.getClass$ = getClass_75;
_.typeId$ = 65;
_.this$0 = null;
function $clinit_77(){
  $clinit_77 = nullMethod;
  $clinit_4();
  fontFamilies = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['Times New Roman', 'Arial', 'Courier New', 'Georgia', 'Trebuchet', 'Verdana', 'Comic Sans MS']);
  fontSizes = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large']);
}

function $GWTCFontPicker(this$static, type){
  var cell, container, fonts, i;
  $clinit_77();
  $PopupPanel_0(this$static, true);
  container = $VerticalPanel(new VerticalPanel);
  container.element_0.style['border'] = '1px solid  #7FAAFF';
  container.element_0.style['backgroundColor'] = '#D8ECFD';
  container.element_0.style['cursor'] = 'pointer';
  fonts = type == ($clinit_84() , FONT_SIZE)?fontSizes:fontFamilies;
  for (i = 0; i < fonts.length; ++i) {
    if (type == FONT_SIZE) {
      cell = $GWTCFontPicker$FontCell(new GWTCFontPicker$FontCell, '' + (i + 1));
      cell.element_0.style['fontSize'] = fonts[i];
    }
     else {
      cell = $GWTCFontPicker$FontCell(new GWTCFontPicker$FontCell, fonts[i]);
      cell.element_0.style['fontFamily'] = fonts[i];
    }
    $addDomHandler(cell, this$static, ($clinit_26() , $clinit_26() , TYPE));
    $add_5(container, cell);
  }
  $add(this$static, container);
  this$static.isAnimationEnabled = true;
  $getStyleElement_1($getFirstChildElement(($clinit_116() , this$static.element_0)))['className'] = 'hupa-color-picker';
  return this$static;
}

function $getFontSize(this$static){
  switch (valueOf(__parseAndValidateInt(this$static.font, 10, -2147483648, 2147483647)).value_0) {
    case 1:
      return $clinit_338() , XX_SMALL;
    case 2:
      return $clinit_338() , X_SMALL;
    case 4:
      return $clinit_338() , MEDIUM;
    case 5:
      return $clinit_338() , LARGE;
    case 6:
      return $clinit_338() , X_LARGE;
    case 7:
      return $clinit_338() , XX_LARGE;
    case 3:
    default:return $clinit_338() , SMALL;
  }
}

function getClass_76(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker_2_classLit;
}

function onClick_7(event_0){
  var cell;
  cell = dynamicCast(event_0.source, 15);
  this.font = cell.theFont;
  !!this.changeHandler && $onValueChange(this.changeHandler, $GWTCFontPicker$2(new GWTCFontPicker$2, this));
}

function GWTCFontPicker(){
}

_ = GWTCFontPicker.prototype = new PopupPanel;
_.getClass$ = getClass_76;
_.onClick = onClick_7;
_.typeId$ = 66;
_.changeHandler = null;
_.font = '';
var fontFamilies, fontSizes;
function getClass_77(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$1_2_classLit;
}

function GWTCFontPicker$1(){
}

_ = GWTCFontPicker$1.prototype = new Object_0;
_.getClass$ = getClass_77;
_.typeId$ = 0;
function $GWTCFontPicker$2(this$static, $anonymous0){
  this$static.value_0 = $anonymous0;
  return this$static;
}

function getClass_78(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$2_2_classLit;
}

function GWTCFontPicker$2(){
}

_ = GWTCFontPicker$2.prototype = new ValueChangeEvent;
_.getClass$ = getClass_78;
_.typeId$ = 0;
function $GWTCFontPicker$FontCell(this$static, font){
  $HTML(this$static);
  this$static.element_0.innerHTML = font || '';
  this$static.theFont = font;
  this$static.element_0.style['backgroundColor'] = '#D8ECFD';
  this$static.element_0.style['padding'] = '2px 4px 2px 8px';
  $addDomHandler(this$static, $GWTCFontPicker$FontCell$1(new GWTCFontPicker$FontCell$1, this$static), ($clinit_190() , $clinit_190() , TYPE_10));
  $addDomHandler(this$static, $GWTCFontPicker$FontCell$2(new GWTCFontPicker$FontCell$2, this$static), ($clinit_188() , $clinit_188() , TYPE_9));
  return this$static;
}

function getClass_79(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$FontCell_2_classLit;
}

function GWTCFontPicker$FontCell(){
}

_ = GWTCFontPicker$FontCell.prototype = new HTML;
_.getClass$ = getClass_79;
_.typeId$ = 67;
_.theFont = null;
function $GWTCFontPicker$FontCell$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_80(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$FontCell$1_2_classLit;
}

function onMouseOver_2(event_0){
  this.this$1.element_0.style['backgroundColor'] = '#7FAAFF';
}

function GWTCFontPicker$FontCell$1(){
}

_ = GWTCFontPicker$FontCell$1.prototype = new Object_0;
_.getClass$ = getClass_80;
_.onMouseOver = onMouseOver_2;
_.typeId$ = 68;
_.this$1 = null;
function $GWTCFontPicker$FontCell$2(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_81(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$FontCell$2_2_classLit;
}

function onMouseOut_2(event_0){
  this.this$1.element_0.style['backgroundColor'] = '#D8ECFD';
}

function GWTCFontPicker$FontCell$2(){
}

_ = GWTCFontPicker$FontCell$2.prototype = new Object_0;
_.getClass$ = getClass_81;
_.onMouseOut = onMouseOut_2;
_.typeId$ = 69;
_.this$1 = null;
function equals_0(other){
  return this === (other == null?null:other);
}

function getClass_82(){
  return Ljava_lang_Enum_2_classLit;
}

function hashCode_1(){
  return this.$H || (this.$H = ++sNextHashId);
}

function toString_4(){
  return this.name_0;
}

function Enum(){
}

_ = Enum.prototype = new Object_0;
_.equals$ = equals_0;
_.getClass$ = getClass_82;
_.hashCode$ = hashCode_1;
_.toString$ = toString_4;
_.typeId$ = 70;
_.name_0 = null;
_.ordinal = 0;
function $clinit_84(){
  $clinit_84 = nullMethod;
  FONT_FAMILY = $GWTCFontPicker$FontPickerType(new GWTCFontPicker$FontPickerType, 'FONT_FAMILY', 0);
  FONT_SIZE = $GWTCFontPicker$FontPickerType(new GWTCFontPicker$FontPickerType, 'FONT_SIZE', 1);
}

function $GWTCFontPicker$FontPickerType(this$static, enum$name, enum$ordinal){
  $clinit_84();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_83(){
  return Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$FontPickerType_2_classLit;
}

function values_0(){
  $clinit_84();
  return initValues(_3Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$FontPickerType_2_classLit, 201, 36, [FONT_FAMILY, FONT_SIZE]);
}

function GWTCFontPicker$FontPickerType(){
}

_ = GWTCFontPicker$FontPickerType.prototype = new Enum;
_.getClass$ = getClass_83;
_.typeId$ = 71;
var FONT_FAMILY, FONT_SIZE;
function $Toolbar(this$static, richText){
  $Toolbar_0(this$static, richText);
  return this$static;
}

function $Toolbar_0(this$static, richText){
  var topEmtyCell, td;
  this$static.colorHandler = $Toolbar$1(new Toolbar$1, this$static);
  this$static.fontHandler = $Toolbar$2(new Toolbar$2, this$static);
  this$static.handler = $Toolbar$EventHandler(new Toolbar$EventHandler, this$static);
  this$static.topPanel = $HorizontalPanel(new HorizontalPanel);
  this$static.fontFamilyPicker = $GWTCFontPicker(new GWTCFontPicker, ($clinit_84() , FONT_FAMILY));
  this$static.fontSizePicker = $GWTCFontPicker(new GWTCFontPicker, FONT_SIZE);
  this$static.backColorsPicker = $GWTCColorPicker(new GWTCColorPicker);
  this$static.foreColorsPicker = $GWTCColorPicker(new GWTCColorPicker);
  this$static.richText = richText;
  this$static.basic = $getFormatter(richText);
  this$static.extended = $getFormatter(richText);
  this$static.topPanel.getElement_0().style['width'] = '100%';
  $initWidget(this$static, this$static.topPanel);
  this$static.element_0['className'] = 'gwt-RichTextToolbar';
  setStyleName(richText.element_0, 'hasRichTextToolbar', true);
  if (this$static.basic) {
    $add_9(this$static.topPanel, this$static.bold = $createToggleButton(this$static, (!bold && (bold = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAJElEQVR42mNgGAVDBvwngCk2FJ/YMDVwNAxJN5Am6XAUDBcAAEbIOsY2U3mTAAAAAElFTkSuQmCC', 0, 0, 20, 20)) , bold), 'Toggle Bold'));
    $add_9(this$static.topPanel, this$static.italic = $createToggleButton(this$static, (!italic && (italic = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAMElEQVR42mNgGAVDFvzHgqljaEtLC+WGVVdXU9VlcNdBDR513QC57j+t0t4oGA4AAKUVKhOV88RGAAAAAElFTkSuQmCC', 0, 0, 20, 20)) , italic), 'Toggle Italic'));
    $add_9(this$static.topPanel, this$static.underline = $createToggleButton(this$static, (!underline && (underline = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAM0lEQVR42mNgGAW0Av/RMC4xsgwlJDZq4JA3sLq6GmwAlKbIQGxp7/+gzSmD16WjgDAAAErVNq+bleVlAAAAAElFTkSuQmCC', 0, 0, 20, 20)) , underline), 'Toggle Underline'));
    $add_9(this$static.topPanel, this$static.backColors = $createPushButton(this$static, (!backColors && (backColors = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAANUlEQVR42mNgGAW0Av+JxNjB39/s/5ExSDE6H5sYFn10MhCbBdgMGDVw1EBqGkhGFhwFNAQAQy76sGFjx7gAAAAASUVORK5CYII=', 0, 0, 20, 20)) , backColors), 'Background color'));
    $add_9(this$static.topPanel, this$static.foreColors = $createPushButton(this$static, (!foreColors && (foreColors = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAgElEQVR42t2S4QqAMAiEfW//+t42XW4SozQhKuFQaH2duwC+VBxUCrj6wNmZZ4EQAMI7gYjIV0oD2zCkAOahMpCI6kCBiGxFm62nfnB5iZ0ndYjtGYH2qMNRurIDKmCHSb8F9Cuv5jTQZcI9pGk67bA7mEC90wrQJ3tMN5Lyz2sDT5T/KC/lAxMAAAAASUVORK5CYII=', 0, 0, 20, 20)) , foreColors), 'Foreground color'));
    $add_9(this$static.topPanel, this$static.fontFamily = $createPushButton(this$static, (!fonts_0 && (fonts_0 = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkElEQVR42mNgGAUwkFHS8R9I4cTq2sb/STEPrGnlnrv/56w7A2ZDLQCD0qaZKHy8IDq1HOYKFJdCDSYdgGzH5lqqhKOUrBJG2PmFp5FvOLbww+F64nwB9f7//vm7/xOKQKJcCPUeOLaplRz/m1i5UMcwqKuIT2+kpkeSQNPEVSiJF8anyEXQsPpP1YQ8CsgCABqwZhJElblkAAAAAElFTkSuQmCC', 0, 0, 20, 20)) , fonts_0), 'Font name'));
    $add_9(this$static.topPanel, this$static.fontSize = $createPushButton(this$static, (!fontSizes_0 && (fontSizes_0 = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAASElEQVR42mNgGAW0BP+JxCQZiM0CfGroayADEQaSFV5kG8jQMX0TNkMIeRl3BGExkBgv49ZDpoG4weA2EMkwXLFLdg4ZBQMMAKuJTaQs8xo6AAAAAElFTkSuQmCC', 0, 0, 20, 20)) , fontSizes_0), 'Font size'));
    $add_9(this$static.topPanel, this$static.subscript = $createToggleButton(this$static, (!subscript && (subscript = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAQUlEQVR42mNgGAVA8B+KCYmRbSBFhmEz5D+1vf6flmFJFdf9p7brKDaUqrGMSzMuS6gWHAzUTlKD3zCqJ/pRgAAA25Aq1vSpbcYAAAAASUVORK5CYII=', 0, 0, 20, 20)) , subscript), 'Toggle Subscript'));
    $add_9(this$static.topPanel, this$static.superscript = $createToggleButton(this$static, (!superscript && (superscript = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAR0lEQVR42mNgGAVEgv9ImCqGYWNT1WD6GoYtbJDF/pMahv+xhNN/asUiVcOKqkmDgVaGUTXx/qeWS6kay7g0/6d2zhgFuAEAP4Qq1pLsimkAAAAASUVORK5CYII=', 0, 0, 20, 20)) , superscript), 'Toggle Superscript'));
    $add_9(this$static.topPanel, this$static.justifyLeft = $createPushButton(this$static, (!justifyLeft && (justifyLeft = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAH0lEQVR42mNgGAXUBv/JxIPPhaNhOBqGIzsMRwHpAACk/ke5B2guPwAAAABJRU5ErkJggg==', 0, 0, 20, 20)) , justifyLeft), 'Left Justify'));
    $add_9(this$static.topPanel, this$static.justifyCenter = $createPushButton(this$static, (!justifyCenter && (justifyCenter = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAH0lEQVR42mNgGAXUBv/JxIPXpaNhOBqGIzMMRwHpAAC130e5KyRN6AAAAABJRU5ErkJggg==', 0, 0, 20, 20)) , justifyCenter), 'Center'));
    $add_9(this$static.topPanel, this$static.justifyRight = $createPushButton(this$static, (!justifyRight && (justifyRight = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAH0lEQVR42mNgGAXUBv/JxIPfxaNhOBqGIysMRwHpAADGwEe5v4tWjAAAAABJRU5ErkJggg==', 0, 0, 20, 20)) , justifyRight), 'Right Justify'));
  }
  if (this$static.extended) {
    $add_9(this$static.topPanel, this$static.strikethrough = $createToggleButton(this$static, (!strikeThrough && (strikeThrough = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAPUlEQVR42mNgGAW0B4wM/1EwTIwiwwiJUWQgVVyIzZVUCUOqRAIhPHAuxRZWVPE+sTE/cOkQV24ZBUMHAACWYzIBInwtbwAAAABJRU5ErkJggg==', 0, 0, 20, 20)) , strikeThrough), 'Toggle Strikethrough'));
    $add_9(this$static.topPanel, this$static.indent = $createPushButton(this$static, (!indent && (indent = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAALklEQVR42mNgGAUjD/zHwicG4zXwP7Vchs9Wkl1Islfo7kKqhyHNYnkUjAIiAABycjnHMpImtQAAAABJRU5ErkJggg==', 0, 0, 20, 20)) , indent), 'Indent Right'));
    $add_9(this$static.topPanel, this$static.outdent = $createPushButton(this$static, (!outdent && (outdent = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAALklEQVR42mNgGAUjE/xHYxOD8Rr2n5ouw2UzyS4k2St0dyFNwpAmsTwKRgERAABCojnHWU6H/gAAAABJRU5ErkJggg==', 0, 0, 20, 20)) , outdent), 'Indent Left'));
    $add_9(this$static.topPanel, this$static.hr = $createPushButton(this$static, (!hr && (hr = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAG0lEQVR42mNgGAWjYPCB/2TiIWzgKBgFwwIAAM0gKdePp3jVAAAAAElFTkSuQmCC', 0, 0, 20, 20)) , hr), 'Insert Horizontal Rule'));
    $add_9(this$static.topPanel, this$static.ol = $createPushButton(this$static, (!ol && (ol = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAMklEQVR42mNgGPHgPxRT3VBsluDDJBlIFS//H/SRQtOIGY2UQeBCqucUqkbM4I+UwQcAdqwxz5oujfsAAAAASUVORK5CYII=', 0, 0, 20, 20)) , ol), 'Insert Ordered List'));
    $add_9(this$static.topPanel, this$static.ul = $createPushButton(this$static, (!ul && (ul = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAIklEQVR42mNgGPHgPxKmmYH/icD0c+FopIxGymikjALaAAC2dzXLcl5hjgAAAABJRU5ErkJggg==', 0, 0, 20, 20)) , ul), 'Insert Unordered List'));
    $add_9(this$static.topPanel, this$static.insertImage = $createPushButton(this$static, (!insertImage && (insertImage = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABSklEQVR42t2Uv0oDQRCH8zR5FhvfJOADpEplpWBhY6cgNgrqA0RTRDHNxWgjCF7jHyxyIaggyTHyrfyOgejuYRcPfuze7sw3szN712j8u+fxeWxo0B/YnwGvWWY32TeEudYYa0XH2DujybSwl4nZ2UNpb5/zav1XGAAk5+LDgq5zs8MLs81eae3tXhhZw4aA0ezIAGOywNFDvNgvbR6vI8Dsrlhw9rp/mtnRVV4BsU/W76dsEHvnt++2ezoMUOqYbAwROTaZCAQEwMb+yLYOumGkDEog2RgikxmOgpCV3ldbewFIIBoTrSObGAmEI/OdkzxAeV9bP66gSaCOoCPihHRUwRBzyhO9Oioy9847+8yk5konBI7WUZs0xzsLoMzIloZx8WsB6bKHUUPWuPQEQ/4nkWwMhrpv3cthALDO6L/v5M/BA2s7LN3zBYNzlFWuneZLAAAAAElFTkSuQmCC', 0, 0, 20, 20)) , insertImage), 'Insert Image'));
    $add_9(this$static.topPanel, this$static.createLink = $createPushButton(this$static, (!createLink && (createLink = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAVUlEQVR42mNgGAWDGyTmPP3PwHAGC4YBTDmIHjyGYQMwzbjkcBh6BsMAQhhVPQ4DEZLYXYRNDV4DqeZCXGFYX4+IKBCbhDCkciwPBXDmP2V4FAxaAACg/yeCaO8p1AAAAABJRU5ErkJggg==', 0, 0, 20, 20)) , createLink), 'Create Link'));
    $add_9(this$static.topPanel, this$static.removeLink = $createPushButton(this$static, (!removeLink && (removeLink = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAVklEQVR42mNgGAWDGyTmPP3PwHAGDaMDVHmIHjyGoQNUQ7HL4zD0DJohhF2I3VI0A3FI4gBnCBtINRdiC8P6+qcYYQgSIzIMqRzLQwGc+U8ZHgWDFgAAXRvmgdN64GsAAAAASUVORK5CYII=', 0, 0, 20, 20)) , removeLink), 'Remove Link'));
    $add_9(this$static.topPanel, this$static.removeFormat = $createPushButton(this$static, (!removeFormat && (removeFormat = $ImageResourcePrototype(new ImageResourcePrototype, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABB0lEQVR42tWUsQ2DMBBFyQSICShCTwEdlijooECiCR0jMAIjMAIjMAILINHSMQIj/OTAJpAQTEApctKXsDk9f9+drCh/G03ToKoqqXYDVVWl5E3xHHnwk5GmKbquQxiGE4T+kXtd18W+PAiUJMk8+c1RnucoigK76ye+y7Kc3M0d9X0P0tfNIbcCuNvRVlCtBJDqeQrGAYNM0zzvjgovgPzq5+J1XE7BeAdXBxjj/nNtGPLDsiybgK7rYg4TEjBYFuA4+NgIDlhoCb0AmoYRZq/D2rZFXde7tQmjYIxJHwMhGFfApmsywPMAPzjucHBmP5yx0RkCH4gi4BYfnwJytljHMX72MN8BS744G4gNMaUAAAAASUVORK5CYII=', 0, 0, 20, 20)) , removeFormat), 'Remove Formatting'));
  }
  topEmtyCell = $HTML_0(new HTML, '');
  $add_9(this$static.topPanel, topEmtyCell);
  td = $getWidgetTd(this$static.topPanel, topEmtyCell);
  !!td && (td['width'] = '100%' , undefined);
  $addDomHandler(richText, this$static.handler, ($clinit_177() , $clinit_177() , TYPE_4));
  $addDomHandler(richText, this$static.handler, ($clinit_181() , $clinit_181() , TYPE_6));
  $addDomHandler(richText, this$static.handler, ($clinit_26() , $clinit_26() , TYPE));
  this$static.backColorsPicker.changeHandler = this$static.colorHandler;
  new GWTCColorPicker$1;
  this$static.foreColorsPicker.changeHandler = this$static.colorHandler;
  new GWTCColorPicker$1;
  this$static.fontFamilyPicker.changeHandler = this$static.fontHandler;
  new GWTCFontPicker$1;
  this$static.fontSizePicker.changeHandler = this$static.fontHandler;
  new GWTCFontPicker$1;
  return this$static;
}

function $createPushButton(this$static, img, tip){
  var pb;
  pb = $PushButton(new PushButton, $Image(new Image_0, img));
  $addDomHandler(pb, this$static.handler, ($clinit_26() , $clinit_26() , TYPE));
  $setTitle(pb, tip);
  return pb;
}

function $createToggleButton(this$static, img, tip){
  var tb;
  tb = $ToggleButton(new ToggleButton, $Image(new Image_0, img));
  $addDomHandler(tb, this$static.handler, ($clinit_26() , $clinit_26() , TYPE));
  $setTitle(tb, tip);
  return tb;
}

function $updateStatus(this$static){
  if (this$static.basic) {
    $setDown(this$static.bold, $queryCommandState(this$static.basic, 'Bold'));
    $setDown(this$static.italic, $queryCommandState(this$static.basic, 'Italic'));
    $setDown(this$static.underline, $queryCommandState(this$static.basic, 'Underline'));
    $setDown(this$static.subscript, $queryCommandState(this$static.basic, 'Subscript'));
    $setDown(this$static.superscript, $queryCommandState(this$static.basic, 'Superscript'));
    this$static.foreColorsPicker.hide_0();
    this$static.backColorsPicker.hide_0();
    $hide_0(this$static.fontFamilyPicker, false);
    $hide_0(this$static.fontSizePicker, false);
  }
  !!this$static.extended && $setDown(this$static.strikethrough, $queryCommandState(this$static.extended, 'Strikethrough'));
}

function getClass_84(){
  return Lcom_google_code_p_gwtchismes_client_editor_Toolbar_2_classLit;
}

function Toolbar(){
}

_ = Toolbar.prototype = new Composite;
_.getClass$ = getClass_84;
_.typeId$ = 72;
_.backColors = null;
_.basic = null;
_.bold = null;
_.createLink = null;
_.extended = null;
_.fontFamily = null;
_.fontSize = null;
_.foreColors = null;
_.hr = null;
_.indent = null;
_.insertImage = null;
_.italic = null;
_.justifyCenter = null;
_.justifyLeft = null;
_.justifyRight = null;
_.ol = null;
_.outdent = null;
_.removeFormat = null;
_.removeLink = null;
_.richText = null;
_.strikethrough = null;
_.subscript = null;
_.superscript = null;
_.ul = null;
_.underline = null;
function $Toolbar$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_85(){
  return Lcom_google_code_p_gwtchismes_client_editor_Toolbar$1_2_classLit;
}

function onValueChange_3(event_0){
  var sender;
  sender = dynamicCast(event_0.value_0, 16);
  sender == this.this$0.backColorsPicker?$execCommand(this.this$0.basic, 'HiliteColor', sender.getColor_0()):sender == this.this$0.foreColorsPicker && $execCommand(this.this$0.basic, 'ForeColor', sender.getColor_0());
  sender.hide_0();
}

function Toolbar$1(){
}

_ = Toolbar$1.prototype = new Object_0;
_.getClass$ = getClass_85;
_.onValueChange = onValueChange_3;
_.typeId$ = 73;
_.this$0 = null;
function $Toolbar$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $onValueChange(this$static, event_0){
  var sender;
  sender = dynamicCast(event_0.value_0, 17);
  sender == this$static.this$0.fontFamilyPicker?$execCommand(this$static.this$0.basic, 'FontName', sender.font):sender == this$static.this$0.fontSizePicker && $execCommand(this$static.this$0.basic, 'FontSize', '' + $getFontSize(sender).number);
  $hide_0(sender, false);
}

function getClass_86(){
  return Lcom_google_code_p_gwtchismes_client_editor_Toolbar$2_2_classLit;
}

function onValueChange_4(event_0){
  $onValueChange(this, event_0);
}

function Toolbar$2(){
}

_ = Toolbar$2.prototype = new Object_0;
_.getClass$ = getClass_86;
_.onValueChange = onValueChange_4;
_.typeId$ = 74;
_.this$0 = null;
function $Toolbar$EventHandler(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_87(){
  return Lcom_google_code_p_gwtchismes_client_editor_Toolbar$EventHandler_2_classLit;
}

function onClick_8(event_0){
  var sender, url;
  sender = dynamicCast(event_0.source, 2);
  if (sender == this.this$0.bold) {
    $execCommand(this.this$0.basic, 'Bold', 'false');
  }
   else if (sender == this.this$0.italic) {
    $execCommand(this.this$0.basic, 'Italic', 'false');
  }
   else if (sender == this.this$0.underline) {
    $execCommand(this.this$0.basic, 'Underline', 'False');
  }
   else if (sender == this.this$0.subscript) {
    $execCommand(this.this$0.basic, 'Subscript', 'false');
  }
   else if (sender == this.this$0.superscript) {
    $execCommand(this.this$0.basic, 'Superscript', 'false');
  }
   else if (sender == this.this$0.strikethrough) {
    $execCommand(this.this$0.extended, 'Strikethrough', 'false');
  }
   else if (sender == this.this$0.indent) {
    $execCommand(this.this$0.extended, 'Indent', null);
  }
   else if (sender == this.this$0.outdent) {
    $execCommand(this.this$0.extended, 'Outdent', null);
  }
   else if (sender == this.this$0.justifyLeft) {
    $setJustification(this.this$0.basic, ($clinit_340() , LEFT));
  }
   else if (sender == this.this$0.justifyCenter) {
    $setJustification(this.this$0.basic, ($clinit_340() , CENTER_1));
  }
   else if (sender == this.this$0.justifyRight) {
    $setJustification(this.this$0.basic, ($clinit_340() , RIGHT));
  }
   else if (sender == this.this$0.insertImage) {
    url = $wnd.prompt('Enter an image URL:', 'http://');
    url != null && $execCommand(this.this$0.extended, 'InsertImage', url);
  }
   else if (sender == this.this$0.createLink) {
    url = $wnd.prompt('Enter a link URL:', 'http://');
    url != null && $execCommand(this.this$0.extended, 'CreateLink', url);
  }
   else if (sender == this.this$0.removeLink) {
    $execCommand(this.this$0.extended, 'Unlink', 'false');
  }
   else if (sender == this.this$0.hr) {
    $execCommand(this.this$0.extended, 'InsertHorizontalRule', null);
  }
   else if (sender == this.this$0.ol) {
    $execCommand(this.this$0.extended, 'InsertOrderedList', null);
  }
   else if (sender == this.this$0.ul) {
    $execCommand(this.this$0.extended, 'InsertUnorderedList', null);
  }
   else if (sender == this.this$0.removeFormat) {
    $execCommand(this.this$0.extended, 'RemoveFormat', null);
  }
   else if (sender == this.this$0.richText) {
    $updateStatus(this.this$0);
  }
   else if (sender == this.this$0.backColors) {
    $setPopupPosition(this.this$0.backColorsPicker, $getAbsoluteLeft_0(($clinit_116() , sender.getElement_0())), $getAbsoluteTop_0(sender.getElement_0()) + 20);
    this.this$0.backColorsPicker.show_0();
  }
   else if (sender == this.this$0.foreColors) {
    $setPopupPosition(this.this$0.foreColorsPicker, $getAbsoluteLeft_0(($clinit_116() , sender.getElement_0())), $getAbsoluteTop_0(sender.getElement_0()) + 20);
    this.this$0.foreColorsPicker.show_0();
  }
   else if (sender == this.this$0.fontFamily) {
    $setPopupPosition(this.this$0.fontFamilyPicker, $getAbsoluteLeft_0(($clinit_116() , sender.getElement_0())), $getAbsoluteTop_0(sender.getElement_0()) + 20);
    $show(this.this$0.fontFamilyPicker);
  }
   else if (sender == this.this$0.fontSize) {
    $setPopupPosition(this.this$0.fontSizePicker, $getAbsoluteLeft_0(($clinit_116() , sender.getElement_0())), $getAbsoluteTop_0(sender.getElement_0()) + 20);
    $show(this.this$0.fontSizePicker);
  }
}

function Toolbar$EventHandler(){
}

_ = Toolbar$EventHandler.prototype = new Object_0;
_.getClass$ = getClass_87;
_.onClick = onClick_8;
_.typeId$ = 75;
_.this$0 = null;
var backColors = null, bold = null, createLink = null, fontSizes_0 = null, fonts_0 = null, foreColors = null, hr = null, indent = null, insertImage = null, italic = null, justifyCenter = null, justifyLeft = null, justifyRight = null, ol = null, outdent = null, removeFormat = null, removeLink = null, strikeThrough = null, subscript = null, superscript = null, ul = null, underline = null;
function $cancel_0(this$static){
  if (!this$static.running) {
    return;
  }
  $remove_10(animations, this$static);
  this$static.started && $onComplete(this$static);
  this$static.started = false;
  this$static.running = false;
}

function $run(this$static, duration, startTime){
  $cancel_0(this$static);
  this$static.running = true;
  this$static.duration = duration;
  this$static.startTime = startTime;
  if ($update(this$static, (new Date).getTime())) {
    return;
  }
  if (!animations) {
    animations = $ArrayList(new ArrayList);
    animationTimer = ($clinit_91() , $clinit_52() , new Animation$1);
  }
  $add_11(animations, this$static);
  animations.size == 1 && $schedule(animationTimer, 25);
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
    this$static.offsetHeight_0 = parseInt(this$static.curPanel.element_0['offsetHeight']) || 0;
    this$static.offsetWidth_0 = parseInt(this$static.curPanel.element_0['offsetWidth']) || 0;
    this$static.curPanel.element_0.style['overflow'] = 'hidden';
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

function getClass_88(){
  return Lcom_google_gwt_animation_client_Animation_2_classLit;
}

function updateAnimations(){
  var animation, animation$array, animation$index, animation$max, curAnimations, curTime;
  curAnimations = initDim(_3Lcom_google_gwt_animation_client_Animation_2_classLit, 202, 37, animations.size, 0);
  curAnimations = dynamicCast($toArray(animations, curAnimations), 18);
  curTime = (new Date).getTime();
  for (animation$array = curAnimations , animation$index = 0 , animation$max = animation$array.length; animation$index < animation$max; ++animation$index) {
    animation = animation$array[animation$index];
    animation.running && $update(animation, curTime) && $remove_10(animations, animation);
  }
  animations.size > 0 && $schedule(animationTimer, 25);
}

function Animation(){
}

_ = Animation.prototype = new Object_0;
_.getClass$ = getClass_88;
_.typeId$ = 76;
_.duration = -1;
_.running = false;
_.startTime = -1;
_.started = false;
var animationTimer = null, animations = null;
function $clinit_91(){
  $clinit_91 = nullMethod;
  $clinit_52();
}

function getClass_89(){
  return Lcom_google_gwt_animation_client_Animation$1_2_classLit;
}

function run_1(){
  updateAnimations();
}

function Animation$1(){
}

_ = Animation$1.prototype = new Timer;
_.getClass$ = getClass_89;
_.run = run_1;
_.typeId$ = 77;
function getTypeName(o){
  return o == null?null:(o.typeMarker$ == nullMethod || o.typeId$ == 2?o.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
}

function $setStackTrace(stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 232, 63, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw $NullPointerException(new NullPointerException);
    }
    copy[i] = stackTrace[i];
  }
}

function getClass_90(){
  return Ljava_lang_Throwable_2_classLit;
}

function getMessage(){
  return this.detailMessage;
}

function toString_5(){
  var className, msg;
  className = this.getClass$().typeName;
  msg = this.getMessage();
  if (msg != null) {
    return className + ': ' + msg;
  }
   else {
    return className;
  }
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0;
_.getClass$ = getClass_90;
_.getMessage = getMessage;
_.toString$ = toString_5;
_.typeId$ = 78;
_.detailMessage = null;
function $Exception(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_91(){
  return Ljava_lang_Exception_2_classLit;
}

function Exception(){
}

_ = Exception.prototype = new Throwable;
_.getClass$ = getClass_91;
_.typeId$ = 79;
function $RuntimeException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_92(){
  return Ljava_lang_RuntimeException_2_classLit;
}

function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception;
_.getClass$ = getClass_92;
_.typeId$ = 80;
function $JavaScriptException(this$static, e){
  $fillInStackTrace();
  this$static.e = e;
  $createStackTrace(this$static);
  return this$static;
}

function getClass_93(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}

function getDescription(e){
  if (e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2) {
    return getDescription0(dynamicCastJso(e));
  }
   else {
    return e + '';
  }
}

function getDescription0(e){
  return e == null?null:e.message;
}

function getMessage_0(){
  this.message_0 == null && (this.name_0 = getName(this.e) , this.description = getDescription(this.e) , this.message_0 = '(' + this.name_0 + '): ' + this.description + getProperties(this.e) , undefined);
  return this.message_0;
}

function getName(e){
  if (e == null) {
    return 'null';
  }
   else if (e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2) {
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

function getProperties(e){
  return e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2?getProperties0(dynamicCastJso(e)):'';
}

function getProperties0(e){
  var result = '';
  try {
    for (prop in e) {
      if (prop != 'name' && prop != 'message' && prop != 'toString') {
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

_ = JavaScriptException.prototype = new RuntimeException;
_.getClass$ = getClass_93;
_.getMessage = getMessage_0;
_.typeId$ = 81;
_.description = null;
_.e = null;
_.message_0 = null;
_.name_0 = null;
function equals__devirtual$(this$static, other){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.equals$(other):(this$static == null?null:this$static) === (other == null?null:other);
}

function getClass__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.hashCode$():this$static.$H || (this$static.$H = ++sNextHashId);
}

function getClass_95(){
  return Lcom_google_gwt_core_client_Scheduler_2_classLit;
}

function Scheduler(){
}

_ = Scheduler.prototype = new Object_0;
_.getClass$ = getClass_95;
_.typeId$ = 0;
function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
  }
  ;
}

function entry0(jsFunction, thisObj, arguments_0){
  var initialEntry;
  initialEntry = entryDepth++ == 0;
  try {
    return jsFunction.apply(thisObj, arguments_0);
  }
   finally {
    initialEntry && $flushFinallyCommands(($clinit_104() , INSTANCE));
    --entryDepth;
  }
}

var entryDepth = 0, sNextHashId = 0;
function $clinit_104(){
  $clinit_104 = nullMethod;
  INSTANCE = $SchedulerImpl(new SchedulerImpl);
}

function $SchedulerImpl(this$static){
  $clinit_104();
  this$static.flusher = $SchedulerImpl$1(new SchedulerImpl$1, this$static);
  $SchedulerImpl$2(new SchedulerImpl$2, this$static);
  this$static.deferredCommands = [];
  this$static.incrementalCommands = [];
  this$static.finallyCommands = [];
  return this$static;
}

function $flushFinallyCommands(this$static){
  var oldFinally;
  oldFinally = this$static.finallyCommands;
  this$static.finallyCommands = [];
  runScheduledTasks(oldFinally, this$static.finallyCommands);
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  oldDeferred = this$static.deferredCommands;
  this$static.deferredCommands = [];
  runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  this$static.incrementalCommands = runRepeatingTasks(this$static.incrementalCommands);
}

function $isWorkQueued(this$static){
  return this$static.deferredCommands.length > 0 || this$static.incrementalCommands.length > 0;
}

function execute_0(cmd){
  return cmd.execute_0();
}

function getClass_96(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit;
}

function runRepeatingTasks(tasks){
  var canceledSomeTasks, i, length_0, newTasks, start, t;
  canceledSomeTasks = false;
  length_0 = tasks.length;
  start = (new Date).getTime();
  while ((new Date).getTime() - start < 100) {
    for (i = 0; i < length_0; ++i) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; ++i) {
      if (!tasks[i]) {
        continue;
      }
      newTasks[newTasks.length] = tasks[i];
    }
    return newTasks;
  }
   else {
    return tasks;
  }
}

function runScheduledTasks(tasks, rescheduled){
  var $e0, i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled[rescheduled.length] = t , undefined):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 19))
        throw $e0;
    }
  }
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_104();
  $wnd.setTimeout(function(){
    var ret = $entry(execute_0)(cmd);
    ret && $wnd.setTimeout(arguments.callee, delayMs);
  }
  , delayMs);
}

function SchedulerImpl(){
}

_ = SchedulerImpl.prototype = new Scheduler;
_.getClass$ = getClass_96;
_.typeId$ = 0;
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
function $SchedulerImpl$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute_1(){
  this.this$0.flushRunning = true;
  $flushPostEventPumpCommands(this.this$0);
  this.this$0.flushRunning = false;
  return this.this$0.shouldBeRunning = $isWorkQueued(this.this$0);
}

function getClass_97(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2_classLit;
}

function SchedulerImpl$1(){
}

_ = SchedulerImpl$1.prototype = new Object_0;
_.execute_0 = execute_1;
_.getClass$ = getClass_97;
_.typeId$ = 0;
_.this$0 = null;
function $SchedulerImpl$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute_2(){
  this.this$0.flushRunning && scheduleFixedDelayImpl(this.this$0.flusher, 1);
  return this.this$0.shouldBeRunning;
}

function getClass_98(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2_classLit;
}

function SchedulerImpl$2(){
}

_ = SchedulerImpl$2.prototype = new Object_0;
_.execute_0 = execute_2;
_.getClass$ = getClass_98;
_.typeId$ = 0;
_.this$0 = null;
function extractNameFromToString(fnToString){
  var index, start, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index = fnToString.indexOf('(');
  if (index != -1) {
    start = fnToString.indexOf('function') == 0?8:0;
    toReturn = $trim(fnToString.substr(start, index - start));
  }
  return toReturn.length > 0?toReturn:'anonymous';
}

function splice(arr, length_0){
  arr.length >= length_0 && arr.splice(0, length_0);
  return arr;
}

function $createStackTrace(e){
  var i, j, stack, stackTrace;
  stack = $inferFrom(instanceOfJso(e.e)?dynamicCastJso(e.e):null);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 232, 63, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = $StackTraceElement(new StackTraceElement, 'Unknown', stack[i], 'Unknown source', 0);
  }
  $setStackTrace(stackTrace);
}

function $fillInStackTrace(){
  var i, j, stack, stackTrace;
  stack = splice($inferFrom($makeException()), 2);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 232, 63, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = $StackTraceElement(new StackTraceElement, 'Unknown', stack[i], 'Unknown source', 0);
  }
  $setStackTrace(stackTrace);
}

function $makeException(){
  try {
    null.a();
  }
   catch (e) {
    return e;
  }
}

function $inferFrom(e){
  var i, j, stack;
  stack = e && e.stack?e.stack.split('\n'):[];
  for (i = 0 , j = stack.length; i < j; ++i) {
    stack[i] = extractNameFromToString(stack[i]);
  }
  return stack;
}

function getClass_99(){
  return Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit;
}

function StringBufferImpl(){
}

_ = StringBufferImpl.prototype = new Object_0;
_.getClass$ = getClass_99;
_.typeId$ = 0;
function $replace(this$static, start, end, toInsert){
  this$static.string = this$static.string.substr(0, start - 0) + toInsert + $substring(this$static.string, end);
}

function getClass_100(){
  return Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit;
}

function StringBufferImplAppend(){
}

_ = StringBufferImplAppend.prototype = new StringBufferImpl;
_.getClass$ = getClass_100;
_.typeId$ = 0;
_.string = '';
function $addClassName(this$static, className){
  var idx, last, lastPos, oldClassName;
  className = $trim(className);
  oldClassName = this$static.className;
  idx = oldClassName.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldClassName.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldClassName.length;
      if (last == lastPos || last < lastPos && oldClassName.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldClassName.indexOf(className, idx + 1);
  }
  if (idx == -1) {
    oldClassName.length > 0 && (oldClassName += ' ');
    this$static.className = oldClassName + className;
  }
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  className = $trim(className);
  oldStyle = this$static.className;
  idx = oldStyle.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldStyle.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldStyle.length;
      if (last == lastPos || last < lastPos && oldStyle.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldStyle.indexOf(className, idx + 1);
  }
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx - 0));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName;
  }
}

function is_0(o){
  if (!!o && !!o.nodeType) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function $clinit_116(){
  $clinit_116 = nullMethod;
  $clinit_118();
  new DOMImplMozilla;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getScrollLeft_0(doc){
  return $getScrollLeft_2(($clinit_116() , $equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body));
}

function $getScrollTop_0(doc){
  return ($equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).scrollTop || 0;
}

function $scrollIntoView_0(elem){
  var left = elem.offsetLeft, top_0 = elem.offsetTop;
  var width = elem.offsetWidth, height = elem.offsetHeight;
  if (elem.parentNode != elem.offsetParent) {
    left -= elem.parentNode.offsetLeft;
    top_0 -= elem.parentNode.offsetTop;
  }
  var cur = elem.parentNode;
  while (cur && cur.nodeType == 1) {
    left < cur.scrollLeft && (cur.scrollLeft = left);
    left + width > cur.scrollLeft + cur.clientWidth && (cur.scrollLeft = left + width - cur.clientWidth);
    top_0 < cur.scrollTop && (cur.scrollTop = top_0);
    top_0 + height > cur.scrollTop + cur.clientHeight && (cur.scrollTop = top_0 + height - cur.clientHeight);
    var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
    if (cur.parentNode != cur.offsetParent) {
      offsetLeft -= cur.parentNode.offsetLeft;
      offsetTop -= cur.parentNode.offsetTop;
    }
    left += offsetLeft - cur.scrollLeft;
    top_0 += offsetTop - cur.scrollTop;
    cur = cur.parentNode;
  }
}

function getClass_101(){
  return Lcom_google_gwt_dom_client_DOMImpl_2_classLit;
}

function DOMImpl(){
}

_ = DOMImpl.prototype = new Object_0;
_.getClass$ = getClass_101;
_.typeId$ = 0;
function $clinit_117(){
  $clinit_117 = nullMethod;
  $clinit_116();
}

function $createMouseEvent(doc, type, canBubble, cancelable, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
  button == 1?(button = 0):button == 4?(button = 1):(button = 2);
  var evt = doc.createEvent('MouseEvents');
  evt.initMouseEvent(type, canBubble, cancelable, null, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget);
  return evt;
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function getClass_102(){
  return Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit;
}

function DOMImplStandard(){
}

_ = DOMImplStandard.prototype = new DOMImpl;
_.getClass$ = getClass_102;
_.typeId$ = 0;
function $clinit_118(){
  $clinit_118 = nullMethod;
  $clinit_117();
}

function $buttonClick(button){
  var doc = button.ownerDocument;
  if (doc != null) {
    var evt = doc.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, null, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    button.dispatchEvent(evt);
  }
}

function $eventGetRelatedTarget(evt){
  var relatedTarget = evt.relatedTarget;
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}

function $getAbsoluteLeft_0(elem){
  return $getAbsoluteLeftImpl($getViewportElement(elem.ownerDocument), elem);
}

function $getAbsoluteLeftImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().left + viewport.scrollLeft | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenX - doc.getBoxObjectFor(doc.documentElement).screenX;
  }
}

function $getAbsoluteTop_0(elem){
  return $getAbsoluteTopImpl($getViewportElement(elem.ownerDocument), elem);
}

function $getAbsoluteTopImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().top + viewport.scrollTop | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenY - doc.getBoxObjectFor(doc.documentElement).screenY;
  }
}

function $getScrollLeft_2(elem){
  var style;
  if (!$isGecko19() && (style = elem.ownerDocument.defaultView.getComputedStyle(elem, null) , style.direction == 'rtl')) {
    return (elem.scrollLeft || 0) - ((elem.scrollWidth || 0) - elem.clientWidth);
  }
  return elem.scrollLeft || 0;
}

function $isGecko19(){
  var result = /rv:([0-9]+)\.([0-9]+)/.exec(navigator.userAgent.toLowerCase());
  if (result && result.length == 3) {
    var version = parseInt(result[1]) * 1000 + parseInt(result[2]);
    if (version >= 1009) {
      return true;
    }
  }
  return false;
}

function $isOrHasChild_0(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function $toString_1(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}

function getClass_103(){
  return Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit;
}

function DOMImplMozilla(){
}

_ = DOMImplMozilla.prototype = new DOMImplStandard;
_.getClass$ = getClass_103;
_.typeId$ = 0;
function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getClientHeight_0(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight;
}

function $getClientWidth_0(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth;
}

function $getScrollHeight_0(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0;
}

function $getScrollWidth_0(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0;
}

function $getViewportElement(this$static){
  return $equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body;
}

function $clinit_126(){
  $clinit_126 = nullMethod;
  NONE = $Style$Display$1(new Style$Display$1, 'NONE', 0);
  BLOCK = $Style$Display$2(new Style$Display$2, 'BLOCK', 1);
  INLINE = $Style$Display$3(new Style$Display$3, 'INLINE', 2);
  INLINE_BLOCK = $Style$Display$4(new Style$Display$4, 'INLINE_BLOCK', 3);
}

function getClass_104(){
  return Lcom_google_gwt_dom_client_Style$Display_2_classLit;
}

function values_1(){
  $clinit_126();
  return initValues(_3Lcom_google_gwt_dom_client_Style$Display_2_classLit, 203, 38, [NONE, BLOCK, INLINE, INLINE_BLOCK]);
}

function Style$Display(){
}

_ = Style$Display.prototype = new Enum;
_.getClass$ = getClass_104;
_.typeId$ = 82;
var BLOCK, INLINE, INLINE_BLOCK, NONE;
function $clinit_127(){
  $clinit_127 = nullMethod;
  $clinit_126();
}

function $Style$Display$1(this$static, enum$name, enum$ordinal){
  $clinit_127();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_105(){
  return Lcom_google_gwt_dom_client_Style$Display$1_2_classLit;
}

function Style$Display$1(){
}

_ = Style$Display$1.prototype = new Style$Display;
_.getClass$ = getClass_105;
_.typeId$ = 83;
function $clinit_128(){
  $clinit_128 = nullMethod;
  $clinit_126();
}

function $Style$Display$2(this$static, enum$name, enum$ordinal){
  $clinit_128();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_106(){
  return Lcom_google_gwt_dom_client_Style$Display$2_2_classLit;
}

function Style$Display$2(){
}

_ = Style$Display$2.prototype = new Style$Display;
_.getClass$ = getClass_106;
_.typeId$ = 84;
function $clinit_129(){
  $clinit_129 = nullMethod;
  $clinit_126();
}

function $Style$Display$3(this$static, enum$name, enum$ordinal){
  $clinit_129();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_107(){
  return Lcom_google_gwt_dom_client_Style$Display$3_2_classLit;
}

function Style$Display$3(){
}

_ = Style$Display$3.prototype = new Style$Display;
_.getClass$ = getClass_107;
_.typeId$ = 85;
function $clinit_130(){
  $clinit_130 = nullMethod;
  $clinit_126();
}

function $Style$Display$4(this$static, enum$name, enum$ordinal){
  $clinit_130();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_108(){
  return Lcom_google_gwt_dom_client_Style$Display$4_2_classLit;
}

function Style$Display$4(){
}

_ = Style$Display$4.prototype = new Style$Display;
_.getClass$ = getClass_108;
_.typeId$ = 86;
function $clinit_132(){
  $clinit_132 = nullMethod;
  VISIBLE = $Style$Overflow$1(new Style$Overflow$1, 'VISIBLE', 0);
  HIDDEN = $Style$Overflow$2(new Style$Overflow$2, 'HIDDEN', 1);
  SCROLL = $Style$Overflow$3(new Style$Overflow$3, 'SCROLL', 2);
  AUTO = $Style$Overflow$4(new Style$Overflow$4, 'AUTO', 3);
}

function getClass_109(){
  return Lcom_google_gwt_dom_client_Style$Overflow_2_classLit;
}

function values_2(){
  $clinit_132();
  return initValues(_3Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 205, 40, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

function Style$Overflow(){
}

_ = Style$Overflow.prototype = new Enum;
_.getClass$ = getClass_109;
_.typeId$ = 87;
var AUTO, HIDDEN, SCROLL, VISIBLE;
function $clinit_133(){
  $clinit_133 = nullMethod;
  $clinit_132();
}

function $Style$Overflow$1(this$static, enum$name, enum$ordinal){
  $clinit_133();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_110(){
  return Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit;
}

function Style$Overflow$1(){
}

_ = Style$Overflow$1.prototype = new Style$Overflow;
_.getClass$ = getClass_110;
_.typeId$ = 88;
function $clinit_134(){
  $clinit_134 = nullMethod;
  $clinit_132();
}

function $Style$Overflow$2(this$static, enum$name, enum$ordinal){
  $clinit_134();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_111(){
  return Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit;
}

function Style$Overflow$2(){
}

_ = Style$Overflow$2.prototype = new Style$Overflow;
_.getClass$ = getClass_111;
_.typeId$ = 89;
function $clinit_135(){
  $clinit_135 = nullMethod;
  $clinit_132();
}

function $Style$Overflow$3(this$static, enum$name, enum$ordinal){
  $clinit_135();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_112(){
  return Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit;
}

function Style$Overflow$3(){
}

_ = Style$Overflow$3.prototype = new Style$Overflow;
_.getClass$ = getClass_112;
_.typeId$ = 90;
function $clinit_136(){
  $clinit_136 = nullMethod;
  $clinit_132();
}

function $Style$Overflow$4(this$static, enum$name, enum$ordinal){
  $clinit_136();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_113(){
  return Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit;
}

function Style$Overflow$4(){
}

_ = Style$Overflow$4.prototype = new Style$Overflow;
_.getClass$ = getClass_113;
_.typeId$ = 91;
function $clinit_137(){
  $clinit_137 = nullMethod;
  PX = $Style$Unit$1(new Style$Unit$1, 'PX', 0);
  PCT = $Style$Unit$2(new Style$Unit$2, 'PCT', 1);
  EM = $Style$Unit$3(new Style$Unit$3, 'EM', 2);
  EX = $Style$Unit$4(new Style$Unit$4, 'EX', 3);
  PT = $Style$Unit$5(new Style$Unit$5, 'PT', 4);
  PC = $Style$Unit$6(new Style$Unit$6, 'PC', 5);
  IN = $Style$Unit$7(new Style$Unit$7, 'IN', 6);
  CM = $Style$Unit$8(new Style$Unit$8, 'CM', 7);
  MM = $Style$Unit$9(new Style$Unit$9, 'MM', 8);
}

function getClass_114(){
  return Lcom_google_gwt_dom_client_Style$Unit_2_classLit;
}

function values_3(){
  $clinit_137();
  return initValues(_3Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 206, 41, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

function Style$Unit(){
}

_ = Style$Unit.prototype = new Enum;
_.getClass$ = getClass_114;
_.typeId$ = 92;
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
function $clinit_138(){
  $clinit_138 = nullMethod;
  $clinit_137();
}

function $Style$Unit$1(this$static, enum$name, enum$ordinal){
  $clinit_138();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_115(){
  return Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit;
}

function Style$Unit$1(){
}

_ = Style$Unit$1.prototype = new Style$Unit;
_.getClass$ = getClass_115;
_.typeId$ = 93;
function $clinit_139(){
  $clinit_139 = nullMethod;
  $clinit_137();
}

function $Style$Unit$2(this$static, enum$name, enum$ordinal){
  $clinit_139();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_116(){
  return Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit;
}

function Style$Unit$2(){
}

_ = Style$Unit$2.prototype = new Style$Unit;
_.getClass$ = getClass_116;
_.typeId$ = 94;
function $clinit_140(){
  $clinit_140 = nullMethod;
  $clinit_137();
}

function $Style$Unit$3(this$static, enum$name, enum$ordinal){
  $clinit_140();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_117(){
  return Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit;
}

function Style$Unit$3(){
}

_ = Style$Unit$3.prototype = new Style$Unit;
_.getClass$ = getClass_117;
_.typeId$ = 95;
function $clinit_141(){
  $clinit_141 = nullMethod;
  $clinit_137();
}

function $Style$Unit$4(this$static, enum$name, enum$ordinal){
  $clinit_141();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_118(){
  return Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit;
}

function Style$Unit$4(){
}

_ = Style$Unit$4.prototype = new Style$Unit;
_.getClass$ = getClass_118;
_.typeId$ = 96;
function $clinit_142(){
  $clinit_142 = nullMethod;
  $clinit_137();
}

function $Style$Unit$5(this$static, enum$name, enum$ordinal){
  $clinit_142();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_119(){
  return Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit;
}

function Style$Unit$5(){
}

_ = Style$Unit$5.prototype = new Style$Unit;
_.getClass$ = getClass_119;
_.typeId$ = 97;
function $clinit_143(){
  $clinit_143 = nullMethod;
  $clinit_137();
}

function $Style$Unit$6(this$static, enum$name, enum$ordinal){
  $clinit_143();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_120(){
  return Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit;
}

function Style$Unit$6(){
}

_ = Style$Unit$6.prototype = new Style$Unit;
_.getClass$ = getClass_120;
_.typeId$ = 98;
function $clinit_144(){
  $clinit_144 = nullMethod;
  $clinit_137();
}

function $Style$Unit$7(this$static, enum$name, enum$ordinal){
  $clinit_144();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_121(){
  return Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit;
}

function Style$Unit$7(){
}

_ = Style$Unit$7.prototype = new Style$Unit;
_.getClass$ = getClass_121;
_.typeId$ = 99;
function $clinit_145(){
  $clinit_145 = nullMethod;
  $clinit_137();
}

function $Style$Unit$8(this$static, enum$name, enum$ordinal){
  $clinit_145();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_122(){
  return Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit;
}

function Style$Unit$8(){
}

_ = Style$Unit$8.prototype = new Style$Unit;
_.getClass$ = getClass_122;
_.typeId$ = 100;
function $clinit_146(){
  $clinit_146 = nullMethod;
  $clinit_137();
}

function $Style$Unit$9(this$static, enum$name, enum$ordinal){
  $clinit_146();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_123(){
  return Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit;
}

function Style$Unit$9(){
}

_ = Style$Unit$9.prototype = new Style$Unit;
_.getClass$ = getClass_123;
_.typeId$ = 101;
function $clinit_147(){
  $clinit_147 = nullMethod;
  TYPE_1 = $DomEvent$Type(new DomEvent$Type, 'blur', ($clinit_147() , new BlurEvent));
}

function dispatch_1(p0){
  $removeStyleDependentName(dynamicCast(p0, 20).this$0, 'focus');
}

function getAssociatedType_2(){
  return TYPE_1;
}

function getClass_124(){
  return Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit;
}

function BlurEvent(){
}

_ = BlurEvent.prototype = new DomEvent;
_.dispatch = dispatch_1;
_.getAssociatedType_0 = getAssociatedType_2;
_.getClass$ = getClass_124;
_.typeId$ = 0;
var TYPE_1;
function $clinit_149(){
  $clinit_149 = nullMethod;
  TYPE_2 = $DomEvent$Type(new DomEvent$Type, 'change', ($clinit_149() , new ChangeEvent));
}

function dispatch_2(p0){
  dynamicCast(p0, 21).onChange_0(this);
}

function getAssociatedType_3(){
  return TYPE_2;
}

function getClass_125(){
  return Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit;
}

function ChangeEvent(){
}

_ = ChangeEvent.prototype = new DomEvent;
_.dispatch = dispatch_2;
_.getAssociatedType_0 = getAssociatedType_3;
_.getClass$ = getClass_125;
_.typeId$ = 0;
var TYPE_2;
function $GwtEvent$Type(this$static){
  this$static.index_0 = ++nextHashCode;
  return this$static;
}

function getClass_126(){
  return Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit;
}

function hashCode_3(){
  return this.index_0;
}

function toString_7(){
  return 'Event type';
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type.prototype = new Object_0;
_.getClass$ = getClass_126;
_.hashCode$ = hashCode_3;
_.toString$ = toString_7;
_.typeId$ = 0;
_.index_0 = 0;
var nextHashCode = 0;
function $DomEvent$Type(this$static, eventName, flyweight){
  this$static.index_0 = ++nextHashCode;
  this$static.flyweight = flyweight;
  !registered && (registered = $PrivateMap(new PrivateMap));
  registered.map[eventName] = this$static;
  this$static.name_0 = eventName;
  return this$static;
}

function getClass_127(){
  return Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit;
}

function DomEvent$Type(){
}

_ = DomEvent$Type.prototype = new GwtEvent$Type;
_.getClass$ = getClass_127;
_.typeId$ = 102;
_.flyweight = null;
_.name_0 = null;
function $clinit_154(){
  $clinit_154 = nullMethod;
  TYPE_3 = $DomEvent$Type(new DomEvent$Type, 'focus', ($clinit_154() , new FocusEvent));
}

function dispatch_3(p0){
  $addStyleDependentName(dynamicCast(p0, 24).this$0, 'focus');
}

function getAssociatedType_4(){
  return TYPE_3;
}

function getClass_128(){
  return Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit;
}

function FocusEvent(){
}

_ = FocusEvent.prototype = new DomEvent;
_.dispatch = dispatch_3;
_.getAssociatedType_0 = getAssociatedType_4;
_.getClass$ = getClass_128;
_.typeId$ = 0;
var TYPE_3;
function getClass_129(){
  return Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit;
}

function KeyEvent(){
}

_ = KeyEvent.prototype = new DomEvent;
_.getClass$ = getClass_129;
_.typeId$ = 0;
function getClass_130(){
  return Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit;
}

function KeyCodeEvent(){
}

_ = KeyCodeEvent.prototype = new KeyEvent;
_.getClass$ = getClass_130;
_.typeId$ = 0;
function $clinit_177(){
  $clinit_177 = nullMethod;
  TYPE_4 = $DomEvent$Type(new DomEvent$Type, 'keydown', ($clinit_177() , new KeyDownEvent));
}

function dispatch_4(p0){
  dynamicCast(p0, 25);
}

function getAssociatedType_5(){
  return TYPE_4;
}

function getClass_131(){
  return Lcom_google_gwt_event_dom_client_KeyDownEvent_2_classLit;
}

function KeyDownEvent(){
}

_ = KeyDownEvent.prototype = new KeyCodeEvent;
_.dispatch = dispatch_4;
_.getAssociatedType_0 = getAssociatedType_5;
_.getClass$ = getClass_131;
_.typeId$ = 0;
var TYPE_4;
function $clinit_179(){
  $clinit_179 = nullMethod;
  TYPE_5 = $DomEvent$Type(new DomEvent$Type, 'keypress', ($clinit_179() , new KeyPressEvent));
}

function $dispatch_2(this$static, handler){
  $getCharCode(this$static.nativeEvent) == 13 && $fireEvent(handler.this$0, ($clinit_27() , $clinit_26() , new GWTCButton$7));
}

function $getCharCode(e){
  return e.charCode || e.keyCode;
}

function dispatch_5(p0){
  $dispatch_2(this, dynamicCast(p0, 26));
}

function getAssociatedType_6(){
  return TYPE_5;
}

function getClass_132(){
  return Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit;
}

function KeyPressEvent(){
}

_ = KeyPressEvent.prototype = new KeyEvent;
_.dispatch = dispatch_5;
_.getAssociatedType_0 = getAssociatedType_6;
_.getClass$ = getClass_132;
_.typeId$ = 0;
var TYPE_5;
function $clinit_181(){
  $clinit_181 = nullMethod;
  TYPE_6 = $DomEvent$Type(new DomEvent$Type, 'keyup', ($clinit_181() , new KeyUpEvent));
}

function $dispatch_3(this$static, handler){
  var sender;
  sender = dynamicCast(this$static.source, 2);
  sender == handler.this$0.richText && $updateStatus(handler.this$0);
}

function dispatch_6(p0){
  $dispatch_3(this, dynamicCast(p0, 25));
}

function getAssociatedType_7(){
  return TYPE_6;
}

function getClass_133(){
  return Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit;
}

function KeyUpEvent(){
}

_ = KeyUpEvent.prototype = new KeyCodeEvent;
_.dispatch = dispatch_6;
_.getAssociatedType_0 = getAssociatedType_7;
_.getClass$ = getClass_133;
_.typeId$ = 0;
var TYPE_6;
function $getX(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , (($clinit_116() , e).clientX || 0) - $getAbsoluteLeftImpl($getViewportElement(relativeElem.ownerDocument), relativeElem) + $getScrollLeft_2(relativeElem) + $getScrollLeft_0(relativeElem.ownerDocument);
  }
  return ($clinit_116() , this$static.nativeEvent).clientX || 0;
}

function $getY(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , (($clinit_116() , e).clientY || 0) - $getAbsoluteTopImpl($getViewportElement(relativeElem.ownerDocument), relativeElem) + (relativeElem.scrollTop || 0) + $getScrollTop_0(relativeElem.ownerDocument);
  }
  return ($clinit_116() , this$static.nativeEvent).clientY || 0;
}

function getClass_134(){
  return Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit;
}

function MouseEvent(){
}

_ = MouseEvent.prototype = new DomEvent;
_.getClass$ = getClass_134;
_.typeId$ = 0;
function $clinit_184(){
  $clinit_184 = nullMethod;
  TYPE_7 = $DomEvent$Type(new DomEvent$Type, 'mousedown', ($clinit_184() , new MouseDownEvent));
}

function dispatch_7(p0){
  dynamicCast(p0, 27).onMouseDown(this);
}

function getAssociatedType_8(){
  return TYPE_7;
}

function getClass_135(){
  return Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit;
}

function MouseDownEvent(){
}

_ = MouseDownEvent.prototype = new MouseEvent;
_.dispatch = dispatch_7;
_.getAssociatedType_0 = getAssociatedType_8;
_.getClass$ = getClass_135;
_.typeId$ = 0;
var TYPE_7;
function $clinit_186(){
  $clinit_186 = nullMethod;
  TYPE_8 = $DomEvent$Type(new DomEvent$Type, 'mousemove', ($clinit_186() , new MouseMoveEvent));
}

function dispatch_8(p0){
  $onMouseMove(dynamicCast(p0, 28).this$0, $getX(this), $getY(this));
}

function getAssociatedType_9(){
  return TYPE_8;
}

function getClass_136(){
  return Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit;
}

function MouseMoveEvent(){
}

_ = MouseMoveEvent.prototype = new MouseEvent;
_.dispatch = dispatch_8;
_.getAssociatedType_0 = getAssociatedType_9;
_.getClass$ = getClass_136;
_.typeId$ = 0;
var TYPE_8;
function $clinit_188(){
  $clinit_188 = nullMethod;
  TYPE_9 = $DomEvent$Type(new DomEvent$Type, 'mouseout', ($clinit_188() , new MouseOutEvent));
}

function dispatch_9(p0){
  dynamicCast(p0, 29).onMouseOut(this);
}

function getAssociatedType_10(){
  return TYPE_9;
}

function getClass_137(){
  return Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit;
}

function MouseOutEvent(){
}

_ = MouseOutEvent.prototype = new MouseEvent;
_.dispatch = dispatch_9;
_.getAssociatedType_0 = getAssociatedType_10;
_.getClass$ = getClass_137;
_.typeId$ = 0;
var TYPE_9;
function $clinit_190(){
  $clinit_190 = nullMethod;
  TYPE_10 = $DomEvent$Type(new DomEvent$Type, 'mouseover', ($clinit_190() , new MouseOverEvent));
}

function dispatch_10(p0){
  dynamicCast(p0, 30).onMouseOver(this);
}

function getAssociatedType_11(){
  return TYPE_10;
}

function getClass_138(){
  return Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit;
}

function MouseOverEvent(){
}

_ = MouseOverEvent.prototype = new MouseEvent;
_.dispatch = dispatch_10;
_.getAssociatedType_0 = getAssociatedType_11;
_.getClass$ = getClass_138;
_.typeId$ = 0;
var TYPE_10;
function $clinit_192(){
  $clinit_192 = nullMethod;
  TYPE_11 = $DomEvent$Type(new DomEvent$Type, 'mouseup', ($clinit_192() , new MouseUpEvent));
}

function dispatch_11(p0){
  $onMouseUp(dynamicCast(p0, 28).this$0, ($getX(this) , $getY(this)));
}

function getAssociatedType_12(){
  return TYPE_11;
}

function getClass_139(){
  return Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit;
}

function MouseUpEvent(){
}

_ = MouseUpEvent.prototype = new MouseEvent;
_.dispatch = dispatch_11;
_.getAssociatedType_0 = getAssociatedType_12;
_.getClass$ = getClass_139;
_.typeId$ = 0;
var TYPE_11;
function $PrivateMap(this$static){
  this$static.map = {};
  return this$static;
}

function getClass_140(){
  return Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit;
}

function PrivateMap(){
}

_ = PrivateMap.prototype = new Object_0;
_.getClass$ = getClass_140;
_.typeId$ = 0;
_.map = null;
function $CloseEvent(this$static, autoClosed){
  this$static.autoClosed = autoClosed;
  return this$static;
}

function dispatch_12(p0){
  dynamicCast(p0, 31).onClose(this);
}

function fire_1(source, autoClosed){
  var event_0;
  if (TYPE_12) {
    event_0 = $CloseEvent(new CloseEvent, autoClosed);
    source.fireEvent(event_0);
  }
}

function getAssociatedType_13(){
  return TYPE_12;
}

function getClass_141(){
  return Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit;
}

function CloseEvent(){
}

_ = CloseEvent.prototype = new GwtEvent;
_.dispatch = dispatch_12;
_.getAssociatedType = getAssociatedType_13;
_.getClass$ = getClass_141;
_.typeId$ = 0;
_.autoClosed = false;
var TYPE_12 = null;
function $dispatch_10(handler){
  handler.this$0.area.element_0.contentWindow.document.body.style['fontFamily'] = 'arial';
  handler.this$0.area.element_0.contentWindow.document.body.style['fontSize'] = '80%';
}

function dispatch_13(p0){
  $dispatch_10(dynamicCast(p0, 32));
}

function fire_2(source){
  var event_0;
  if (TYPE_13) {
    event_0 = new InitializeEvent;
    !!source.handlerManager && $fireEvent_0(source.handlerManager, event_0);
  }
}

function getAssociatedType_14(){
  return TYPE_13;
}

function getClass_142(){
  return Lcom_google_gwt_event_logical_shared_InitializeEvent_2_classLit;
}

function InitializeEvent(){
}

_ = InitializeEvent.prototype = new GwtEvent;
_.dispatch = dispatch_13;
_.getAssociatedType = getAssociatedType_14;
_.getClass$ = getClass_142;
_.typeId$ = 0;
var TYPE_13 = null;
function $ResizeEvent(this$static, width){
  this$static.width_0 = width;
  return this$static;
}

function dispatch_14(p0){
  dynamicCast(p0, 33).onResize(this);
}

function fire_3(source, width){
  var event_0;
  if (TYPE_14) {
    event_0 = $ResizeEvent(new ResizeEvent, width);
    $fireEvent_0(source, event_0);
  }
}

function getAssociatedType_15(){
  return TYPE_14;
}

function getClass_143(){
  return Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit;
}

function ResizeEvent(){
}

_ = ResizeEvent.prototype = new GwtEvent;
_.dispatch = dispatch_14;
_.getAssociatedType = getAssociatedType_15;
_.getClass$ = getClass_143;
_.typeId$ = 0;
_.width_0 = 0;
var TYPE_14 = null;
function $DefaultHandlerRegistration(this$static, manager, type, handler){
  this$static.manager = manager;
  this$static.handler = handler;
  this$static.type_0 = type;
  return this$static;
}

function $removeHandler(this$static){
  $removeHandler_0(this$static.manager, this$static.type_0, this$static.handler);
}

function getClass_144(){
  return Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit;
}

function DefaultHandlerRegistration(){
}

_ = DefaultHandlerRegistration.prototype = new Object_0;
_.getClass$ = getClass_144;
_.typeId$ = 0;
_.handler = null;
_.manager = null;
_.type_0 = null;
function $HandlerManager(this$static, source){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry);
  this$static.source = source;
  this$static.isReverseOrder = false;
  return this$static;
}

function $HandlerManager_0(this$static, source, fireInReverseOrder){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry);
  this$static.source = source;
  this$static.isReverseOrder = fireInReverseOrder;
  return this$static;
}

function $addHandler_0(this$static, type, handler){
  this$static.firingDepth > 0?$defer(this$static, $HandlerManager$1(new HandlerManager$1, this$static, type, handler)):$addHandler_1(this$static.registry, type, handler);
  return $DefaultHandlerRegistration(new DefaultHandlerRegistration, this$static, type, handler);
}

function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = $ArrayList(new ArrayList));
  $add_11(this$static.deferredDeltas, command);
}

function $fireEvent_0(this$static, event_0){
  var oldSource;
  event_0.dead && event_0.revive();
  oldSource = event_0.source;
  event_0.source = this$static.source;
  try {
    ++this$static.firingDepth;
    $fireEvent_1(this$static.registry, event_0, this$static.isReverseOrder);
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
  if (oldSource == null) {
    event_0.dead = true;
    event_0.source = null;
  }
   else {
    event_0.source = oldSource;
  }
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.deferredDeltas); c$iterator.i < c$iterator.this$0.size_0();) {
        c = dynamicCast($next_5(c$iterator), 34);
        c.execute();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $removeHandler_0(this$static, type, handler){
  this$static.firingDepth > 0?$defer(this$static, $HandlerManager$2(new HandlerManager$2, this$static, type, handler)):$removeHandler_1(this$static.registry, type, handler);
}

function fireEvent_0(event_0){
  $fireEvent_0(this, event_0);
}

function getClass_145(){
  return Lcom_google_gwt_event_shared_HandlerManager_2_classLit;
}

function HandlerManager(){
}

_ = HandlerManager.prototype = new Object_0;
_.fireEvent = fireEvent_0;
_.getClass$ = getClass_145;
_.typeId$ = 0;
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
_.registry = null;
_.source = null;
function $HandlerManager$1(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  return this$static;
}

function execute_3(){
  $addHandler_1(this.this$0.registry, this.val$type, this.val$handler);
}

function getClass_146(){
  return Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit;
}

function HandlerManager$1(){
}

_ = HandlerManager$1.prototype = new Object_0;
_.execute = execute_3;
_.getClass$ = getClass_146;
_.typeId$ = 103;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $HandlerManager$2(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  return this$static;
}

function execute_4(){
  $removeHandler_1(this.this$0.registry, this.val$type, this.val$handler);
}

function getClass_147(){
  return Lcom_google_gwt_event_shared_HandlerManager$2_2_classLit;
}

function HandlerManager$2(){
}

_ = HandlerManager$2.prototype = new Object_0;
_.execute = execute_4;
_.getClass$ = getClass_147;
_.typeId$ = 104;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $HandlerManager$HandlerRegistry(this$static){
  this$static.map = $HashMap(new HashMap);
  return this$static;
}

function $addHandler_1(this$static, type, handler){
  var l;
  l = dynamicCast($get_2(this$static.map, type), 35);
  if (!l) {
    l = $ArrayList(new ArrayList);
    $put_0(this$static.map, type, l);
  }
  setCheck(l.array, l.size++, handler);
}

function $fireEvent_1(this$static, event_0, isReverseOrder){
  var count, handler, i, type, l, l_0, l_1;
  type = event_0.getAssociatedType();
  count = (l = dynamicCast($get_2(this$static.map, type), 35) , !l?0:l.size);
  if (isReverseOrder) {
    for (i = count - 1; i >= 0; --i) {
      handler = (l_0 = dynamicCast($get_2(this$static.map, type), 35) , dynamicCast((checkIndex(i, l_0.size) , l_0.array[i]), 66));
      event_0.dispatch(handler);
    }
  }
   else {
    for (i = 0; i < count; ++i) {
      handler = (l_1 = dynamicCast($get_2(this$static.map, type), 35) , dynamicCast((checkIndex(i, l_1.size) , l_1.array[i]), 66));
      event_0.dispatch(handler);
    }
  }
}

function $removeHandler_1(this$static, eventKey, handler){
  var l, result;
  l = dynamicCast($get_2(this$static.map, eventKey), 35);
  result = !!l && $remove_10(l, handler);
  result && l.size == 0 && $remove_6(this$static.map, eventKey);
}

function getClass_148(){
  return Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit;
}

function HandlerManager$HandlerRegistry(){
}

_ = HandlerManager$HandlerRegistry.prototype = new Object_0;
_.getClass$ = getClass_148;
_.typeId$ = 0;
function $DateTimeFormat(this$static, pattern){
  $DateTimeFormat_0(this$static, pattern, $getDateTimeConstants(($clinit_221() , $clinit_221() , instance_0)));
  return this$static;
}

function $DateTimeFormat_0(this$static, pattern, dateTimeConstants){
  this$static.patternParts = $ArrayList(new ArrayList);
  this$static.pattern = pattern;
  this$static.dateTimeConstants = dateTimeConstants;
  $parsePattern(this$static, pattern);
  return this$static;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.impl.string.length > 0) {
    $add_11(this$static.patternParts, $DateTimeFormat$PatternPart(new DateTimeFormat$PatternPart, buf.impl.string, count));
    oldLength = buf.impl.string.length;
    0 < oldLength?$replace(buf.impl, 0, oldLength, ''):0 > oldLength && $append_2(buf, initDim(_3C_classLit, 200, -1, 0 - oldLength, 1));
  }
}

function $format(this$static, date){
  var timeZone;
  timeZone = createTimeZone((date.checkJsDate() , date.jsdate.getTimezoneOffset()));
  return $format_0(this$static, date, timeZone);
}

function $format_0(this$static, date, timeZone){
  var ch, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  diff = ((date.checkJsDate() , date.jsdate.getTimezoneOffset()) - timeZone.standardOffset) * 60000;
  keepDate = $Date_1(new Date_0, add_10(fromDouble((date.checkJsDate() , date.jsdate.getTime())), fromInt(diff)));
  keepTime = keepDate;
  if ((keepDate.checkJsDate() , keepDate.jsdate.getTimezoneOffset()) != (date.checkJsDate() , date.jsdate.getTimezoneOffset())) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = $Date_1(new Date_0, add_10(fromDouble((date.checkJsDate() , date.jsdate.getTime())), fromInt(diff)));
  }
  toAppendTo = $StringBuffer_0(new StringBuffer);
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch = this$static.pattern.charCodeAt(i);
    if (ch >= 97 && ch <= 122 || ch >= 65 && ch <= 90) {
      for (j = i + 1; j < n && this$static.pattern.charCodeAt(j) == ch; ++j) {
      }
      $subFormat(this$static, toAppendTo, ch, j - i, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch == 39) {
      ++i;
      if (i < n && this$static.pattern.charCodeAt(i) == 39) {
        toAppendTo.impl.string += "'";
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
          throw $IllegalArgumentException(new IllegalArgumentException, "Missing trailing '");
        }
        j + 1 < n && this$static.pattern.charCodeAt(j + 1) == 39?++j:(trailQuote = true);
        $append_3(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      toAppendTo.impl.string += String.fromCharCode(ch);
      ++i;
    }
  }
  return toAppendTo.impl.string;
}

function $formatFractionalSeconds(buf, count, date){
  var time, value;
  time = fromDouble((date.checkJsDate() , date.jsdate.getTime()));
  compare_0(time, P0_longLit) < 0?(value = 1000 - lowBits_0(mod(neg(time), P3e8_longLit))):(value = lowBits_0(mod(time, P3e8_longLit)));
  if (count == 1) {
    value = ~~((value + 50) / 100) < 9?~~((value + 50) / 100):9;
    buf.impl.string += String.fromCharCode(48 + value & 65535);
  }
   else if (count == 2) {
    value = ~~((value + 5) / 10) < 99?~~((value + 5) / 10):99;
    $zeroPaddingNumber(buf, value, 2);
  }
   else {
    $zeroPaddingNumber(buf, value, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMonth(this$static, buf, count, date){
  var value;
  value = (date.checkJsDate() , date.jsdate.getMonth());
  switch (count) {
    case 5:
      $append_3(buf, $narrowMonths(this$static.dateTimeConstants)[value]);
      break;
    case 4:
      $append_3(buf, $months(this$static.dateTimeConstants)[value]);
      break;
    case 3:
      $append_3(buf, $shortMonths(this$static.dateTimeConstants)[value]);
      break;
    default:$zeroPaddingNumber(buf, value + 1, count);
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
    if ($isNumeric(dynamicCast($get_3(this$static.patternParts, i), 67))) {
      if (!abut && i + 1 < len && $isNumeric(dynamicCast($get_3(this$static.patternParts, i + 1), 67))) {
        abut = true;
        dynamicCast($get_3(this$static.patternParts, i), 67).abutStart = true;
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
  i = 'MLydhHmsSDkK'.indexOf(fromCodePoint(part.text_0.charCodeAt(0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $matchString(text, start, data, pos){
  var bestMatch, bestMatchLength, count, i, length_0, textInLowerCase;
  count = data.length;
  bestMatchLength = 0;
  bestMatch = -1;
  textInLowerCase = text.substr(start, text.length - start).toLowerCase();
  for (i = 0; i < count; ++i) {
    length_0 = data[i].length;
    if (length_0 > bestMatchLength && textInLowerCase.indexOf(data[i].toLowerCase()) == 0) {
      bestMatch = i;
      bestMatchLength = length_0;
    }
  }
  bestMatch >= 0 && (pos[0] = start + bestMatchLength);
  return bestMatch;
}

function $parse(this$static, text, strict){
  var charsConsumed, curDate, date;
  curDate = $Date(new Date_0);
  date = $Date_0(new Date_0, (curDate.checkJsDate() , curDate.jsdate.getFullYear() - 1900), (curDate.checkJsDate() , curDate.jsdate.getMonth()), (curDate.checkJsDate() , curDate.jsdate.getDate()));
  charsConsumed = $parse_0(this$static, text, 0, date, strict);
  if (charsConsumed == 0 || charsConsumed < text.length) {
    throw $IllegalArgumentException(new IllegalArgumentException, text);
  }
  return date;
}

function $parse_0(this$static, text, start, date, strict){
  var abutPass, abutPat, abutStart, cal, count, i, parsePos, part, s;
  cal = $DateRecord(new DateRecord);
  parsePos = initValues(_3I_classLit, 223, -1, [start]);
  abutPat = -1;
  abutStart = 0;
  abutPass = 0;
  for (i = 0; i < this$static.patternParts.size; ++i) {
    part = dynamicCast($get_3(this$static.patternParts, i), 67);
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
  ind > pos[0]?(pos[0] = ind):(ret = -1);
  return ret;
}

function $parsePattern(this$static, pattern){
  var buf, ch, count, i, inQuote;
  buf = $StringBuffer_0(new StringBuffer);
  inQuote = false;
  for (i = 0; i < pattern.length; ++i) {
    ch = pattern.charCodeAt(i);
    if (ch == 32) {
      $addPart(this$static, buf, 0);
      buf.impl.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch == 39) {
        if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
          buf.impl.string += String.fromCharCode(ch);
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.impl.string += String.fromCharCode(ch);
      }
      continue;
    }
    if ('GyMLdkHmsSEcDahKzZv'.indexOf(fromCodePoint(ch)) > 0) {
      $addPart(this$static, buf, 0);
      buf.impl.string += String.fromCharCode(ch);
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch == 39) {
      if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
        buf.impl.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.impl.string += String.fromCharCode(ch);
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
    offset < 24 && pos[0] - st <= 2?(offset *= 60):(offset = offset % 100 + ~~(offset / 100) * 60);
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

function $subFormat(this$static, buf, ch, count, adjustedDate, adjustedTime, timezone){
  var value, value_0, value_1, value_2, value_3, value_4, value_5, value_6, value_7, value_8, value_9, value_10, value_11;
  switch (ch) {
    case 71:
      value = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getFullYear() - 1900) >= -1900?1:0;
      count >= 4?$append_3(buf, $eraNames(this$static.dateTimeConstants)[value]):$append_3(buf, $eras(this$static.dateTimeConstants)[value]);
      break;
    case 121:
      value_0 = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getFullYear() - 1900) + 1900;
      value_0 < 0 && (value_0 = -value_0);
      count == 2?$zeroPaddingNumber(buf, value_0 % 100, 2):(buf.impl.string += value_0 , undefined);
      break;
    case 77:
      $formatMonth(this$static, buf, count, adjustedDate);
      break;
    case 107:
      value_1 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours());
      value_1 == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value_1, count);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, adjustedTime);
      break;
    case 69:
      value_2 = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getDay());
      count == 5?$append_3(buf, $narrowWeekdays(this$static.dateTimeConstants)[value_2]):count == 4?$append_3(buf, $weekdays(this$static.dateTimeConstants)[value_2]):$append_3(buf, $shortWeekdays(this$static.dateTimeConstants)[value_2]);
      break;
    case 97:
      (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours()) >= 12 && (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours()) < 24?$append_3(buf, $ampms(this$static.dateTimeConstants)[1]):$append_3(buf, $ampms(this$static.dateTimeConstants)[0]);
      break;
    case 104:
      value_3 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours()) % 12;
      value_3 == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value_3, count);
      break;
    case 75:
      value_4 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours()) % 12;
      $zeroPaddingNumber(buf, value_4, count);
      break;
    case 72:
      value_5 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours());
      $zeroPaddingNumber(buf, value_5, count);
      break;
    case 99:
      value_6 = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getDay());
      count == 5?$append_3(buf, $standaloneNarrowWeekdays(this$static.dateTimeConstants)[value_6]):count == 4?$append_3(buf, $standaloneWeekdays(this$static.dateTimeConstants)[value_6]):count == 3?$append_3(buf, $standaloneShortWeekdays(this$static.dateTimeConstants)[value_6]):$zeroPaddingNumber(buf, value_6, 1);
      break;
    case 76:
      value_7 = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getMonth());
      count == 5?$append_3(buf, $standaloneNarrowMonths(this$static.dateTimeConstants)[value_7]):count == 4?$append_3(buf, $standaloneMonths(this$static.dateTimeConstants)[value_7]):count == 3?$append_3(buf, $standaloneShortMonths(this$static.dateTimeConstants)[value_7]):$zeroPaddingNumber(buf, value_7 + 1, count);
      break;
    case 81:
      value_8 = ~~((adjustedDate.checkJsDate() , adjustedDate.jsdate.getMonth()) / 3);
      count < 4?$append_3(buf, $shortQuarters(this$static.dateTimeConstants)[value_8]):$append_3(buf, $quarters(this$static.dateTimeConstants)[value_8]);
      break;
    case 100:
      value_9 = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getDate());
      $zeroPaddingNumber(buf, value_9, count);
      break;
    case 109:
      value_10 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getMinutes());
      $zeroPaddingNumber(buf, value_10, count);
      break;
    case 115:
      value_11 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getSeconds());
      $zeroPaddingNumber(buf, value_11, count);
      break;
    case 122:
      count < 4?$append_3(buf, timezone.tzNames[0]):$append_3(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_3(buf, timezone.timezoneID);
      break;
    case 90:
      count < 4?$append_3(buf, $getRFCTimeZoneString(timezone)):$append_3(buf, composeGMTString(timezone.standardOffset));
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
    case 76:
      return $subParseStandaloneMonth(this$static, text, pos, cal, value, start);
    case 69:
      return $subParseDayOfWeek(this$static, text, pos, start, cal);
    case 99:
      return $subParseStandaloneDay(this$static, text, pos, start, cal);
    case 97:
      value = $matchString(text, start, $ampms(this$static.dateTimeConstants), pos);
      cal.ampm = value;
      return true;
    case 121:
      return $subParseYear(text, pos, start, value, part, cal);
    case 100:
      if (value <= 0) {
        return false;
      }

      cal.dayOfMonth = value;
      return true;
    case 83:
      return $subParseFractionalSeconds(value, start, pos[0], cal);
    case 104:
      value == 12 && (value = 0);
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
  value < 0 && (value = $matchString(text, start, $shortWeekdays(this$static.dateTimeConstants), pos));
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
    value < 0 && (value = $matchString(text, start, $shortMonths(this$static.dateTimeConstants), pos));
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else if (value > 0) {
    cal.month = value - 1;
    return true;
  }
  return false;
}

function $subParseStandaloneDay(this$static, text, pos, start, cal){
  var value;
  value = $matchString(text, start, $standaloneWeekdays(this$static.dateTimeConstants), pos);
  value < 0 && (value = $matchString(text, start, $standaloneShortWeekdays(this$static.dateTimeConstants), pos));
  if (value < 0) {
    return false;
  }
  cal.dayOfWeek = value;
  return true;
}

function $subParseStandaloneMonth(this$static, text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, $standaloneMonths(this$static.dateTimeConstants), pos);
    value < 0 && (value = $matchString(text, start, $standaloneShortMonths(this$static.dateTimeConstants), pos));
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else if (value > 0) {
    cal.month = value - 1;
    return true;
  }
  return false;
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
    ch == 45 && (value = -value);
  }
  if (ch == 32 && pos[0] - start == 2 && part.count == 2) {
    date = $Date(new Date_0);
    defaultCenturyStartYear = (date.checkJsDate() , date.jsdate.getFullYear() - 1900) + 1900 - 80;
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
    value < b && (buf.impl.string += '0' , undefined);
    b *= 10;
  }
  buf.impl.string += value;
}

function getClass_149(){
  return Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit;
}

function getLongDateFormat(){
  var pattern;
  if (!cachedLongDateFormat) {
    pattern = $dateFormats($getDateTimeConstants(($clinit_221() , $clinit_221() , instance_0)))[1];
    cachedLongDateFormat = $DateTimeFormat(new DateTimeFormat, pattern);
  }
  return cachedLongDateFormat;
}

function getShortDateFormat(){
  var pattern;
  if (!cachedShortDateFormat) {
    pattern = $dateFormats($getDateTimeConstants(($clinit_221() , $clinit_221() , instance_0)))[3];
    cachedShortDateFormat = $DateTimeFormat(new DateTimeFormat, pattern);
  }
  return cachedShortDateFormat;
}

function DateTimeFormat(){
}

_ = DateTimeFormat.prototype = new Object_0;
_.getClass$ = getClass_149;
_.typeId$ = 0;
_.dateTimeConstants = null;
_.pattern = null;
var cachedLongDateFormat = null, cachedShortDateFormat = null;
function $DateTimeFormat$PatternPart(this$static, txt, cnt){
  this$static.text_0 = txt;
  this$static.count = cnt;
  this$static.abutStart = false;
  return this$static;
}

function getClass_150(){
  return Lcom_google_gwt_i18n_client_DateTimeFormat$PatternPart_2_classLit;
}

function DateTimeFormat$PatternPart(){
}

_ = DateTimeFormat$PatternPart.prototype = new Object_0;
_.getClass$ = getClass_150;
_.typeId$ = 105;
_.abutStart = false;
_.count = 0;
_.text_0 = null;
function $clinit_221(){
  $clinit_221 = nullMethod;
  instance_0 = ($clinit_221() , new LocaleInfo);
}

function $getDateTimeConstants(this$static){
  !this$static.dateTimeConstants && (this$static.dateTimeConstants = $DateTimeConstantsImpl_es(new DateTimeConstantsImpl_es));
  return this$static.dateTimeConstants;
}

function getClass_151(){
  return Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit;
}

function LocaleInfo(){
}

_ = LocaleInfo.prototype = new Object_0;
_.getClass$ = getClass_151;
_.typeId$ = 0;
_.dateTimeConstants = null;
var instance_0;
function $getRFCTimeZoneString(this$static){
  var data, offset;
  offset = -this$static.standardOffset;
  data = initValues(_3C_classLit, 200, -1, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data[0] = 45;
    offset = -offset;
  }
  data[1] += ~~(~~(offset / 60) / 10);
  data[2] += ~~(offset / 60) % 10;
  data[3] += ~~(offset % 60 / 10);
  data[4] += offset % 10;
  return String.fromCharCode.apply(null, data);
}

function composeGMTString(offset){
  var data;
  data = initValues(_3C_classLit, 200, -1, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data[3] = 43;
    offset = -offset;
  }
  data[4] += ~~(~~(offset / 60) / 10);
  data[5] += ~~(offset / 60) % 10;
  data[7] += ~~(offset % 60 / 10);
  data[8] += offset % 10;
  return String.fromCharCode.apply(null, data);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initDim(_3Ljava_lang_String_2_classLit, 233, 1, 2, 0);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  return tz;
}

function getClass_152(){
  return Lcom_google_gwt_i18n_client_TimeZone_2_classLit;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = ~~(offset / 60);
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + mins;
}

function TimeZone(){
}

_ = TimeZone.prototype = new Object_0;
_.getClass$ = getClass_152;
_.typeId$ = 0;
_.standardOffset = 0;
_.timezoneID = null;
_.tzNames = null;
function $DateTimeConstantsImpl_es(this$static){
  this$static.cache = $HashMap(new HashMap);
  return this$static;
}

function $ampms(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'ampms'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['a.m.', 'p.m.']);
    $put_0(this$static.cache, 'ampms', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $dateFormats(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'dateFormats'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ["EEEE d 'de' MMMM 'de' yyyy", "d 'de' MMMM 'de' yyyy", 'dd/MM/yyyy', 'dd/MM/yy']);
    $put_0(this$static.cache, 'dateFormats', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $eraNames(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'eraNames'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['antes de Cristo', 'anno D\xF3mini']);
    $put_0(this$static.cache, 'eraNames', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $eras(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'eras'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['a.C.', 'd.C.']);
    $put_0(this$static.cache, 'eras', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $months(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'months'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']);
    $put_0(this$static.cache, 'months', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $narrowMonths(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'narrowMonths'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']);
    $put_0(this$static.cache, 'narrowMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $narrowWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'narrowWeekdays'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['D', 'L', 'M', 'M', 'J', 'V', 'S']);
    $put_0(this$static.cache, 'narrowWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $quarters(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'quarters'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['1er trimestre', '2\xBA trimestre', '3er trimestre', '4\xBA trimestre']);
    $put_0(this$static.cache, 'quarters', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $shortMonths(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'shortMonths'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']);
    $put_0(this$static.cache, 'shortMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $shortQuarters(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'shortQuarters'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['T1', 'T2', 'T3', 'T4']);
    $put_0(this$static.cache, 'shortQuarters', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $shortWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'shortWeekdays'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['dom', 'lun', 'mar', 'mi\xE9', 'jue', 'vie', 's\xE1b']);
    $put_0(this$static.cache, 'shortWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneMonths(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'standaloneMonths'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']);
    $put_0(this$static.cache, 'standaloneMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneNarrowMonths(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'standaloneNarrowMonths'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']);
    $put_0(this$static.cache, 'standaloneNarrowMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneNarrowWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'standaloneNarrowWeekdays'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['D', 'L', 'M', 'M', 'J', 'V', 'S']);
    $put_0(this$static.cache, 'standaloneNarrowWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneShortMonths(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'standaloneShortMonths'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']);
    $put_0(this$static.cache, 'standaloneShortMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneShortWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'standaloneShortWeekdays'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['dom', 'lun', 'mar', 'mi\xE9', 'jue', 'vie', 's\xE1b']);
    $put_0(this$static.cache, 'standaloneShortWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'standaloneWeekdays'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['domingo', 'lunes', 'martes', 'mi\xE9rcoles', 'jueves', 'viernes', 's\xE1bado']);
    $put_0(this$static.cache, 'standaloneWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $weekdays(this$static){
  var args, writer;
  args = dynamicCast($get_2(this$static.cache, 'weekdays'), 68);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['domingo', 'lunes', 'martes', 'mi\xE9rcoles', 'jueves', 'viernes', 's\xE1bado']);
    $put_0(this$static.cache, 'weekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function getClass_153(){
  return Lcom_google_gwt_i18n_client_constants_DateTimeConstantsImpl_1es_2_classLit;
}

function DateTimeConstantsImpl_es(){
}

_ = DateTimeConstantsImpl_es.prototype = new Object_0;
_.getClass$ = getClass_153;
_.typeId$ = 0;
function $clinit_228(){
  $clinit_228 = nullMethod;
  DAYS = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(_3Ljava_lang_String_2_classLit, 233, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

function $Date(this$static){
  $clinit_228();
  this$static.jsdate = new Date;
  return this$static;
}

function $Date_0(this$static, year, month, date){
  $clinit_228();
  this$static.jsdate = new Date;
  this$static.checkJsDate();
  this$static.jsdate.setFullYear(year + 1900, month, date);
  this$static.jsdate.setHours(0, 0, 0, 0);
  this$static.fixDaylightSavings(0);
  return this$static;
}

function $Date_1(this$static, date){
  $clinit_228();
  this$static.jsdate = new Date(date[1] + date[0]);
  return this$static;
}

function $getDay(this$static){
  this$static.checkJsDate();
  return this$static.jsdate.getDay();
}

function $getMonth(this$static){
  this$static.checkJsDate();
  return this$static.jsdate.getMonth();
}

function $getTime0(this$static){
  this$static.checkJsDate();
  return this$static.jsdate.getTime();
}

function $getYear(this$static){
  this$static.checkJsDate();
  return this$static.jsdate.getFullYear() - 1900;
}

function $setDate(this$static, date){
  this$static.checkJsDate();
  var hours = this$static.jsdate.getHours();
  this$static.jsdate.setDate(date);
  this$static.fixDaylightSavings(hours);
}

function $setTime0(this$static, time){
  this$static.checkJsDate();
  this$static.jsdate.setTime(time);
}

function checkJsDate(){
  (!this.jsdate || typeof this.jsdate != 'object') && throwJsDateException('' + this.jsdate);
}

function equals_2(obj){
  return obj != null && canCast(obj.typeId$, 82) && eq(fromDouble((this.checkJsDate() , this.jsdate.getTime())), fromDouble($getTime0(dynamicCast(obj, 82))));
}

function fixDaylightSavings(hours){
  if (this.jsdate.getHours() % 24 != hours % 24) {
    var d = new Date;
    d.setTime(this.jsdate.getTime());
    var noff = d.getTimezoneOffset();
    d.setDate(d.getDate() + 1);
    var loff = d.getTimezoneOffset();
    var timeDiff = noff - loff;
    if (timeDiff > 0) {
      var year = this.jsdate.getYear() + 1900;
      var month = this.jsdate.getMonth();
      var day = this.jsdate.getDate();
      var badHours = this.jsdate.getHours();
      var minute = this.jsdate.getMinutes();
      var second = this.jsdate.getSeconds();
      badHours + timeDiff / 60 >= 24 && day++;
      var newTime = new Date(year, month, day, hours + timeDiff / 60, minute + timeDiff % 60, second);
      this.jsdate.setTime(newTime.getTime());
    }
  }
}

function getClass_154(){
  return Ljava_util_Date_2_classLit;
}

function hashCode_4(){
  return lowBits_0(xor(fromDouble((this.checkJsDate() , this.jsdate.getTime())), shru(fromDouble((this.checkJsDate() , this.jsdate.getTime())), 32)));
}

function padTwo_0(number){
  if (number < 10) {
    return '0' + number;
  }
   else {
    return '' + number;
  }
}

function setHours(hours){
  this.checkJsDate();
  this.jsdate.setHours(hours);
  this.fixDaylightSavings(hours);
}

function setMinutes(minutes){
  this.checkJsDate();
  var hours = this.jsdate.getHours() + minutes / 60;
  this.jsdate.setMinutes(minutes);
  this.fixDaylightSavings(hours);
}

function setMonth(month){
  this.checkJsDate();
  var hours = this.jsdate.getHours();
  this.jsdate.setMonth(month);
  this.fixDaylightSavings(hours);
}

function setSeconds(seconds){
  this.checkJsDate();
  var hours = this.jsdate.getHours() + seconds / (60 * 60);
  this.jsdate.setSeconds(seconds);
  this.fixDaylightSavings(hours);
}

function setYear(year){
  this.checkJsDate();
  var hours = this.jsdate.getHours();
  this.jsdate.setFullYear(year + 1900);
  this.fixDaylightSavings(hours);
}

function throwJsDateException(val){
  throw $IllegalStateException_0(new IllegalStateException, 'jsdate is ' + val);
}

function toString_8(){
  this.checkJsDate();
  var d = this.jsdate;
  var padTwo = padTwo_0;
  var day = DAYS[d.getDay()];
  var month = MONTHS[d.getMonth()];
  var offset = -d.getTimezoneOffset();
  var hourOffset = String(offset >= 0?'+' + Math.floor(offset / 60):Math.ceil(offset / 60));
  var minuteOffset = padTwo(Math.abs(offset) % 60);
  return day + ' ' + month + ' ' + padTwo(d.getDate()) + ' ' + padTwo(d.getHours()) + ':' + padTwo(d.getMinutes()) + ':' + padTwo(d.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + d.getFullYear();
}

function Date_0(){
}

_ = Date_0.prototype = new Object_0;
_.checkJsDate = checkJsDate;
_.equals$ = equals_2;
_.fixDaylightSavings = fixDaylightSavings;
_.getClass$ = getClass_154;
_.hashCode$ = hashCode_4;
_.setHours_0 = setHours;
_.setMinutes_0 = setMinutes;
_.setMonth_0 = setMonth;
_.setSeconds_0 = setSeconds;
_.setYear = setYear;
_.toString$ = toString_8;
_.typeId$ = 106;
_.jsdate = null;
var DAYS, MONTHS;
function $clinit_229(){
  $clinit_229 = nullMethod;
  $clinit_228();
}

function $DateRecord(this$static){
  $clinit_229();
  this$static.jsdate = new Date;
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
  this$static.era == 0 && this$static.year > 0 && (this$static.year = -(this$static.year - 1));
  this$static.year > -2147483648 && date.setYear(this$static.year - 1900);
  orgDayOfMonth = (date.checkJsDate() , date.jsdate.getDate());
  $setDate(date, 1);
  this$static.month >= 0 && date.setMonth_0(this$static.month);
  this$static.dayOfMonth >= 0?$setDate(date, this$static.dayOfMonth):$setDate(date, orgDayOfMonth);
  this$static.hours < 0 && (this$static.hours = (date.checkJsDate() , date.jsdate.getHours()));
  this$static.ampm > 0 && this$static.hours < 12 && (this$static.hours += 12);
  date.setHours_0(this$static.hours);
  this$static.minutes >= 0 && date.setMinutes_0(this$static.minutes);
  this$static.seconds >= 0 && date.setSeconds_0(this$static.seconds);
  this$static.milliseconds >= 0 && $setTime0(date, toDouble(add_10(mul(div_0(fromDouble((date.checkJsDate() , date.jsdate.getTime())), P3e8_longLit), P3e8_longLit), fromInt(this$static.milliseconds))));
  if (strict) {
    if (this$static.year > -2147483648 && this$static.year - 1900 != (date.checkJsDate() , date.jsdate.getFullYear() - 1900)) {
      return false;
    }
    if (this$static.month >= 0 && this$static.month != (date.checkJsDate() , date.jsdate.getMonth())) {
      return false;
    }
    if (this$static.dayOfMonth >= 0 && this$static.dayOfMonth != (date.checkJsDate() , date.jsdate.getDate())) {
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
    offset = (date.checkJsDate() , date.jsdate.getTimezoneOffset());
    $setTime0(date, toDouble(add_10(fromDouble((date.checkJsDate() , date.jsdate.getTime())), fromInt((this$static.tzOffset - offset) * 60 * 1000))));
  }
  if (this$static.ambiguousYear) {
    defaultCenturyStart = $Date(new Date_0);
    defaultCenturyStart.setYear((defaultCenturyStart.checkJsDate() , defaultCenturyStart.jsdate.getFullYear() - 1900) - 80);
    compare_0(fromDouble((date.checkJsDate() , date.jsdate.getTime())), fromDouble((defaultCenturyStart.checkJsDate() , defaultCenturyStart.jsdate.getTime()))) < 0 && date.setYear((defaultCenturyStart.checkJsDate() , defaultCenturyStart.jsdate.getFullYear() - 1900) + 100);
  }
  if (this$static.dayOfWeek >= 0) {
    if (this$static.dayOfMonth == -1) {
      adjustment = (7 + this$static.dayOfWeek - (date.checkJsDate() , date.jsdate.getDay())) % 7;
      adjustment > 3 && (adjustment -= 7);
      orgMonth = (date.checkJsDate() , date.jsdate.getMonth());
      $setDate(date, (date.checkJsDate() , date.jsdate.getDate()) + adjustment);
      (date.checkJsDate() , date.jsdate.getMonth()) != orgMonth && $setDate(date, (date.checkJsDate() , date.jsdate.getDate()) + (adjustment > 0?-7:7));
    }
     else {
      if ((date.checkJsDate() , date.jsdate.getDay()) != this$static.dayOfWeek) {
        return false;
      }
    }
  }
  return true;
}

function getClass_155(){
  return Lcom_google_gwt_i18n_client_impl_DateRecord_2_classLit;
}

function setHours_0(hours){
  this.hours = hours;
}

function setMinutes_0(minutes){
  this.minutes = minutes;
}

function setMonth_0(month){
  this.month = month;
}

function setSeconds_0(seconds){
  this.seconds = seconds;
}

function setYear_0(value){
  this.year = value;
}

function DateRecord(){
}

_ = DateRecord.prototype = new Date_0;
_.getClass$ = getClass_155;
_.setHours_0 = setHours_0;
_.setMinutes_0 = setMinutes_0;
_.setMonth_0 = setMonth_0;
_.setSeconds_0 = setSeconds_0;
_.setYear = setYear_0;
_.typeId$ = 107;
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
function createFrom(array, length_0){
  var a, result;
  a = array;
  result = createFromSeed(0, length_0);
  initValues(a.arrayClass$, a.typeId$, a.queryId$, result);
  return result;
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType > 0) {
    var value = [null, 0, false, [0, 0]][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function getClass_156(){
  return this.arrayClass$;
}

function initDim(arrayClass, typeId, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  $clinit_231();
  wrapArray(result, expandoNames_0, expandoValues_0);
  result.arrayClass$ = arrayClass;
  result.typeId$ = typeId;
  result.queryId$ = queryId;
  return result;
}

function initValues(arrayClass, typeId, queryId, array){
  $clinit_231();
  wrapArray(array, expandoNames_0, expandoValues_0);
  array.arrayClass$ = arrayClass;
  array.typeId$ = typeId;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value.typeId$, array.queryId$)) {
      throw $ArrayStoreException(new ArrayStoreException);
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.typeId$ == 2)) {
      throw $ArrayStoreException(new ArrayStoreException);
    }
  }
  return array[index] = value;
}

function Array_0(){
}

_ = Array_0.prototype = new Object_0;
_.getClass$ = getClass_156;
_.typeId$ = 0;
_.arrayClass$ = null;
_.length = 0;
_.queryId$ = 0;
function $clinit_231(){
  $clinit_231 = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_0, expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_231();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(srcId, dstId){
  return srcId && !!typeIdArray[srcId][dstId];
}

function canCastUnsafe(srcId, dstId){
  return srcId && typeIdArray[srcId][dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !canCastUnsafe(src.typeId$, dstId)) {
    throw $ClassCastException(new ClassCastException);
  }
  return src;
}

function dynamicCastJso(src){
  if (src != null && (src.typeMarker$ == nullMethod || src.typeId$ == 2)) {
    throw $ClassCastException(new ClassCastException);
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && canCast(src.typeId$, dstId);
}

function instanceOfJso(src){
  return src != null && src.typeMarker$ != nullMethod && src.typeId$ != 2;
}

function round_int(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw $ClassCastException(new ClassCastException);
  }
  return o;
}

var typeIdArray = [{}, {}, {1:1, 56:1, 57:1, 58:1}, {55:1}, {2:1, 42:1, 43:1, 55:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {2:1, 12:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {22:1, 66:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {2:1, 5:1, 7:1, 12:1, 42:1, 43:1, 49:1, 55:1}, {2:1, 5:1, 6:1, 7:1, 12:1, 42:1, 43:1, 49:1, 55:1}, {2:1, 5:1, 6:1, 7:1, 12:1, 42:1, 43:1, 49:1, 55:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {2:1, 12:1, 42:1, 43:1, 55:1}, {2:1, 6:1, 7:1, 12:1, 42:1, 43:1, 55:1}, {2:1, 6:1, 7:1, 12:1, 42:1, 43:1, 55:1}, {2:1, 6:1, 7:1, 12:1, 42:1, 43:1, 55:1}, {30:1, 66:1}, {29:1, 66:1}, {27:1, 66:1}, {24:1, 66:1}, {20:1, 66:1}, {26:1, 66:1}, {2:1, 42:1, 43:1, 55:1}, {2:1, 4:1, 22:1, 42:1, 43:1, 55:1, 66:1}, {2:1, 4:1, 8:1, 22:1, 42:1, 43:1, 55:1, 66:1}, {2:1, 4:1, 8:1, 22:1, 42:1, 43:1, 55:1, 66:1}, {9:1, 66:1}, {69:1}, {2:1, 12:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {2:1, 12:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {2:1, 42:1, 43:1, 55:1}, {22:1, 66:1}, {21:1, 66:1}, {9:1, 66:1}, {9:1, 66:1}, {21:1, 66:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {2:1, 6:1, 7:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {2:1, 6:1, 7:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {22:1, 66:1}, {22:1, 66:1}, {71:1}, {71:1}, {2:1, 42:1, 43:1, 55:1}, {2:1, 5:1, 6:1, 7:1, 11:1, 12:1, 42:1, 43:1, 49:1, 55:1}, {30:1, 66:1}, {29:1, 66:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {71:1}, {2:1, 42:1, 43:1, 55:1}, {9:1, 66:1}, {22:1, 66:1}, {2:1, 16:1, 22:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 66:1, 74:1}, {2:1, 5:1, 7:1, 12:1, 14:1, 42:1, 43:1, 49:1, 55:1}, {30:1, 66:1}, {29:1, 66:1}, {2:1, 42:1, 43:1, 45:1, 51:1, 52:1, 53:1, 55:1, 61:1}, {2:1, 42:1, 43:1, 44:1, 45:1, 51:1, 52:1, 53:1, 55:1, 61:1}, {2:1, 42:1, 43:1, 44:1, 45:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 55:1, 61:1}, {2:1, 6:1, 7:1, 42:1, 43:1, 44:1, 45:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 55:1, 61:1}, {32:1, 66:1}, {2:1, 17:1, 22:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 66:1, 74:1}, {2:1, 5:1, 6:1, 7:1, 12:1, 15:1, 42:1, 43:1, 49:1, 55:1}, {30:1, 66:1}, {29:1, 66:1}, {56:1, 58:1, 59:1}, {36:1, 56:1, 58:1, 59:1}, {2:1, 42:1, 43:1, 55:1}, {9:1, 66:1}, {9:1, 66:1}, {22:1, 25:1, 66:1}, {37:1}, {71:1}, {56:1, 64:1}, {3:1, 56:1, 64:1}, {3:1, 19:1, 56:1, 64:1}, {3:1, 19:1, 56:1, 64:1, 77:1}, {38:1, 39:1, 56:1, 58:1, 59:1}, {38:1, 39:1, 56:1, 58:1, 59:1}, {38:1, 39:1, 56:1, 58:1, 59:1}, {38:1, 39:1, 56:1, 58:1, 59:1}, {38:1, 39:1, 56:1, 58:1, 59:1}, {39:1, 40:1, 56:1, 58:1, 59:1}, {39:1, 40:1, 56:1, 58:1, 59:1}, {39:1, 40:1, 56:1, 58:1, 59:1}, {39:1, 40:1, 56:1, 58:1, 59:1}, {39:1, 40:1, 56:1, 58:1, 59:1}, {41:1, 56:1, 58:1, 59:1}, {41:1, 56:1, 58:1, 59:1}, {41:1, 56:1, 58:1, 59:1}, {41:1, 56:1, 58:1, 59:1}, {41:1, 56:1, 58:1, 59:1}, {41:1, 56:1, 58:1, 59:1}, {41:1, 56:1, 58:1, 59:1}, {41:1, 56:1, 58:1, 59:1}, {41:1, 56:1, 58:1, 59:1}, {41:1, 56:1, 58:1, 59:1}, {23:1}, {34:1}, {34:1}, {67:1}, {56:1, 58:1, 82:1}, {56:1, 58:1, 82:1}, {66:1}, {3:1, 19:1, 56:1, 64:1}, {71:1}, {71:1}, {31:1, 66:1}, {42:1}, {42:1}, {42:1}, {42:1}, {2:1, 42:1, 43:1, 45:1, 51:1, 52:1, 53:1, 55:1, 61:1}, {2:1, 6:1, 7:1, 12:1, 42:1, 43:1, 49:1, 55:1}, {3:1, 19:1, 56:1, 64:1}, {2:1, 6:1, 7:1, 12:1, 42:1, 43:1, 55:1}, {73:1}, {33:1, 66:1}, {2:1, 5:1, 6:1, 7:1, 12:1, 42:1, 43:1, 49:1, 55:1}, {27:1, 28:1, 29:1, 30:1, 66:1}, {2:1, 42:1, 43:1, 44:1, 45:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 55:1, 61:1}, {46:1}, {2:1, 12:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {2:1, 12:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {13:1}, {2:1, 10:1, 12:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {2:1, 42:1, 43:1, 44:1, 45:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 55:1, 61:1}, {2:1, 12:1, 42:1, 43:1, 55:1}, {2:1, 12:1, 42:1, 43:1, 55:1}, {66:1}, {31:1, 66:1}, {2:1, 42:1, 43:1, 55:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {55:1, 75:1}, {33:1, 66:1}, {66:1, 70:1}, {9:1, 66:1}, {54:1, 56:1, 58:1, 59:1}, {37:1}, {69:1}, {2:1, 6:1, 7:1, 12:1, 42:1, 43:1, 55:1}, {2:1, 6:1, 7:1, 12:1, 42:1, 43:1, 55:1}, {2:1, 42:1, 43:1, 45:1, 51:1, 52:1, 53:1, 55:1, 61:1, 76:1}, {31:1, 66:1}, {2:1, 42:1, 43:1, 45:1, 51:1, 52:1, 53:1, 55:1, 61:1, 76:1}, {2:1, 6:1, 7:1, 12:1, 42:1, 43:1, 55:1}, {61:1}, {69:1}, {3:1, 19:1, 56:1, 64:1}, {3:1, 19:1, 56:1, 64:1}, {56:1, 64:1}, {56:1, 64:1}, {3:1, 19:1, 56:1, 64:1}, {56:1, 62:1}, {3:1, 19:1, 56:1, 64:1}, {3:1, 19:1, 56:1, 64:1}, {3:1, 19:1, 56:1, 64:1}, {56:1, 58:1, 60:1, 62:1}, {3:1, 19:1, 56:1, 64:1}, {3:1, 19:1, 56:1, 64:1}, {56:1, 63:1}, {57:1}, {3:1, 19:1, 56:1, 64:1}, {61:1}, {61:1, 81:1}, {61:1, 81:1}, {78:1}, {78:1}, {78:1}, {61:1, 79:1}, {61:1, 81:1}, {35:1, 56:1, 61:1, 79:1}, {56:1, 80:1}, {56:1, 61:1, 81:1}, {78:1}, {3:1, 19:1, 56:1, 64:1}, {56:1, 61:1, 79:1}, {2:1, 12:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {22:1, 66:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1}, {2:1, 6:1, 7:1, 12:1, 42:1, 43:1, 55:1}, {22:1, 66:1}, {2:1, 16:1, 22:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 66:1, 74:1}, {9:1, 66:1}, {2:1, 4:1, 8:1, 22:1, 42:1, 43:1, 55:1, 66:1}, {9:1, 66:1}, {2:1, 6:1, 7:1, 42:1, 43:1, 44:1, 45:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 55:1, 61:1}, {2:1, 42:1, 43:1, 55:1}, {9:1, 66:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {2:1, 42:1, 43:1, 55:1}, {71:1}, {2:1, 42:1, 43:1, 51:1, 53:1, 55:1, 61:1, 74:1}, {2:1, 42:1, 43:1, 55:1}, {9:1, 66:1}, {56:1}, {56:1}, {18:1, 56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1, 65:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1}, {56:1, 68:1}, {56:1, 72:1}, {56:1}, {56:1}];
function init_0(){
  !!$stats && $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:'jschismes.client.JsChismes'});
  $export0_3();
  $export0_10();
  $export0_7();
  $export0_4();
  $export0_7();
  $export0_6();
  $export0_7();
  $export0_12();
  $export0_7();
  $export0_1();
  $export0_11();
  $export0_7();
  $export0();
  $export0_8();
  $export0_0();
  $export0_9();
  $export0_5();
  $export0_7();
  $export0_2();
  $wnd.jscOnLoad && typeof $wnd.jscOnLoad == 'function' && $wnd.jscOnLoad();
}

function caught_0(e){
  if (e != null && canCast(e.typeId$, 64)) {
    return e;
  }
  return $JavaScriptException(new JavaScriptException, e);
}

function add_10(a, b){
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
  return add_10(accum, create_0(a * b, 0));
}

function and(a, b){
  return makeFromBits(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) & ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), lowBits_0(a) & lowBits_0(b));
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
    throw $ArithmeticException(new ArithmeticException, '/ by zero');
  }
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_238() , ZERO;
  }
  if (eq(a, ($clinit_238() , MIN_VALUE))) {
    if (eq(b, ONE) || eq(b, NEG_ONE)) {
      return MIN_VALUE;
    }
    halfa = shr(a, 1);
    approx = shl(div_0(halfa, b), 1);
    rem = sub(a, mul(b, approx));
    return add_10(approx, div_0(rem, b));
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
    deltaResult[0] == 0 && deltaResult[1] == 0 && (deltaResult = ONE);
    deltaRem = mul(deltaResult, b);
    result = add_10(result, deltaResult);
    rem = sub(rem, deltaRem);
  }
  return result;
}

function eq(a, b){
  return a[0] == b[0] && a[1] == b[1];
}

function fromDouble(value){
  if (isNaN(value)) {
    return $clinit_238() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_238() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_238() , MAX_VALUE;
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
    result = ($clinit_237() , boxedValues)[rebase];
    result == null && (result = boxedValues[rebase] = internalFromInt(value));
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
  lowBits < 0 && (low += 4294967296);
  return [low, high];
}

function mod(a, b){
  return sub(a, mul(div_0(a, b), b));
}

function mul(a, b){
  var a1, a2, a3, a4, b1, b2, b3, b4, res;
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_238() , ZERO;
  }
  if (b[0] == 0 && b[1] == 0) {
    return $clinit_238() , ZERO;
  }
  if (eq(a, ($clinit_238() , MIN_VALUE))) {
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
    return $clinit_238() , MIN_VALUE;
  }
   else {
    return $clinit_238() , ZERO;
  }
}

function neg(a){
  var newHigh, newLow;
  if (eq(a, ($clinit_238() , MIN_VALUE))) {
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
  if (eq(a, ($clinit_238() , MIN_VALUE))) {
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
  newHigh >= 9223372036854775807 && (newHigh -= 1.8446744073709552E19);
  return [newLow, newHigh];
}

function shr(a, n){
  var newHigh, newLow, shiftFact;
  n &= 63;
  shiftFact = pwrAsDouble(n);
  newHigh = Math.floor(a[1] / shiftFact);
  newLow = Math.floor(a[0] / shiftFact);
  return create_0(newLow, newHigh);
}

function shru(a, n){
  var sr;
  n &= 63;
  sr = shr(a, n);
  a[1] < 0 && (sr = add_10(sr, shl(($clinit_238() , TWO), 63 - n)));
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
  magnitute = round_int(Math.log(a[1]) / ($clinit_238() , LN_2));
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
  magnitute = round_int(Math.log(a[1]) / ($clinit_238() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toAdd = (1 << diff) - 1;
    return a[1] + (a[0] + toAdd);
  }
}

function toString_9(a){
  var digits, rem, remDivTenPower, res, tenPowerLong, zeroesNeeded;
  if (a[0] == 0 && a[1] == 0) {
    return '0';
  }
  if (eq(a, ($clinit_238() , MIN_VALUE))) {
    return '-9223372036854775808';
  }
  if (a[1] < 0) {
    return '-' + toString_9(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem[0] == 0 && rem[1] == 0)) {
    tenPowerLong = fromInt(1000000000);
    remDivTenPower = div_0(rem, tenPowerLong);
    digits = '' + lowBits_0(sub(rem, mul(remDivTenPower, tenPowerLong)));
    rem = remDivTenPower;
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

function $clinit_237(){
  $clinit_237 = nullMethod;
  boxedValues = initDim(_3_3D_classLit, 236, 65, 256, 0);
}

var boxedValues;
function $clinit_238(){
  $clinit_238 = nullMethod;
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
function $ImageResourcePrototype(this$static, url, left, top_0, width, height){
  this$static.left_0 = left;
  this$static.top_0 = top_0;
  this$static.height_0 = height;
  this$static.width_0 = width;
  this$static.url = url;
  return this$static;
}

function getClass_157(){
  return Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit;
}

function ImageResourcePrototype(){
}

_ = ImageResourcePrototype.prototype = new Object_0;
_.getClass$ = getClass_157;
_.typeId$ = 0;
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.url = null;
_.width_0 = 0;
function getClass_158(){
  return Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit;
}

function BaseListenerWrapper(){
}

_ = BaseListenerWrapper.prototype = new Object_0;
_.getClass$ = getClass_158;
_.typeId$ = 108;
_.listener = null;
function $CommandCanceledException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_159(){
  return Lcom_google_gwt_user_client_CommandCanceledException_2_classLit;
}

function CommandCanceledException(){
}

_ = CommandCanceledException.prototype = new RuntimeException;
_.getClass$ = getClass_159;
_.typeId$ = 109;
function $CommandExecutor(this$static){
  this$static.cancellationTimer = $CommandExecutor$1(new CommandExecutor$1, this$static);
  this$static.commands = $ArrayList(new ArrayList);
  this$static.executionTimer = $CommandExecutor$2(new CommandExecutor$2, this$static);
  this$static.iterator = $CommandExecutor$CircularIterator(new CommandExecutor$CircularIterator, this$static);
  return this$static;
}

function $doCommandCanceled(this$static){
  var cmd;
  cmd = $getLast(this$static.iterator);
  $remove_0(this$static.iterator);
  cmd != null && canCast(cmd.typeId$, 69) && $CommandCanceledException(new CommandCanceledException, dynamicCast(cmd, 69));
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
        if (element != null && canCast(element.typeId$, 69)) {
          command = dynamicCast(element, 69);
          command.execute();
        }
      }
       finally {
        wasCanceled = this$static.iterator.last == -1;
        if (wasCanceled) {
          return;
        }
        $remove_0(this$static.iterator);
      }
      if ((new Date).getTime() - startTimeMillis >= 100) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel(this$static.cancellationTimer);
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
  $add_11(this$static.commands, command);
  $maybeStartExecutionTimer(this$static);
}

function getClass_160(){
  return Lcom_google_gwt_user_client_CommandExecutor_2_classLit;
}

function CommandExecutor(){
}

_ = CommandExecutor.prototype = new Object_0;
_.getClass$ = getClass_160;
_.typeId$ = 0;
_.executing = false;
_.executionTimerPending = false;
function $clinit_248(){
  $clinit_248 = nullMethod;
  $clinit_52();
}

function $CommandExecutor$1(this$static, this$0){
  $clinit_248();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_161(){
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

_ = CommandExecutor$1.prototype = new Timer;
_.getClass$ = getClass_161;
_.run = run_2;
_.typeId$ = 110;
_.this$0 = null;
function $clinit_249(){
  $clinit_249 = nullMethod;
  $clinit_52();
}

function $CommandExecutor$2(this$static, this$0){
  $clinit_249();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_162(){
  return Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit;
}

function run_3(){
  this.this$0.executionTimerPending = false;
  $doExecuteCommands(this.this$0, (new Date).getTime());
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2.prototype = new Timer;
_.getClass$ = getClass_162;
_.run = run_3;
_.typeId$ = 111;
_.this$0 = null;
function $CommandExecutor$CircularIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $getLast(this$static){
  return $get_3(this$static.this$0.commands, this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = $get_3(this$static.this$0.commands, this$static.next++);
  this$static.next >= this$static.end && (this$static.next = 0);
  return command;
}

function $remove_0(this$static){
  $remove_9(this$static.this$0.commands, this$static.last);
  --this$static.end;
  this$static.last <= this$static.next && --this$static.next < 0 && (this$static.next = 0);
  this$static.last = -1;
}

function getClass_163(){
  return Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit;
}

function hasNext(){
  return this.next < this.end;
}

function next_0(){
  return $next(this);
}

function remove_4(){
  $remove_0(this);
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator.prototype = new Object_0;
_.getClass$ = getClass_163;
_.hasNext = hasNext;
_.next_0 = next_0;
_.remove_0 = remove_4;
_.typeId$ = 0;
_.end = 0;
_.last = -1;
_.next = 0;
_.this$0 = null;
function dispatchEvent_0(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(($clinit_116() , evt).type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  var ret;
  ret = fire_4(handlers_0, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    ($clinit_116() , evt).preventDefault();
  }
  return ret;
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem === captureElem && (captureElem = null);
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  captureElem = elem;
}

var currentEvent = null, sCaptureElem = null;
function $clinit_252(){
  $clinit_252 = nullMethod;
  commandExecutor = $CommandExecutor(new CommandExecutor);
}

function addCommand(cmd){
  $clinit_252();
  if (!cmd) {
    throw $NullPointerException_0(new NullPointerException, 'cmd cannot be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_15 && (TYPE_15 = $GwtEvent$Type(new GwtEvent$Type));
  if (!handlers_0) {
    handlers_0 = $HandlerManager_0(new HandlerManager, null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler_0(handlers_0, TYPE_15, handler);
}

var handlers_0 = null;
function $revive_0(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function dispatch_15(p0){
  $previewNativeEvent(dynamicCast(p0, 70).this$0, this);
  singleton.isFirstHandler = false;
}

function fire_4(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_15 && !!handlers && $containsKey(handlers.registry.map, TYPE_15)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive_0(singleton);
    singleton.nativeEvent = nativeEvent;
    $fireEvent_0(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

function getAssociatedType_16(){
  return TYPE_15;
}

function getClass_164(){
  return Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit;
}

function revive_0(){
  $revive_0(this);
}

function Event$NativePreviewEvent(){
}

_ = Event$NativePreviewEvent.prototype = new GwtEvent;
_.dispatch = dispatch_15;
_.getAssociatedType = getAssociatedType_16;
_.getClass$ = getClass_164;
_.revive = revive_0;
_.typeId$ = 0;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
_.nativeEvent = null;
var TYPE_15 = null, singleton = null;
function $clinit_258(){
  $clinit_258 = nullMethod;
  impl_0 = $HistoryImplMozilla(new HistoryImplMozilla);
  !$init_3(impl_0) && (impl_0 = null);
}

var impl_0 = null;
function getClass_165(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}

function onClose(event_0){
  while (($clinit_52() , timers).size > 0) {
    $cancel(dynamicCast($get_3(timers, 0), 71));
  }
}

function Timer$1(){
}

_ = Timer$1.prototype = new Object_0;
_.getClass$ = getClass_165;
_.onClose = onClose;
_.typeId$ = 112;
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_12?TYPE_12:(TYPE_12 = $GwtEvent$Type(new GwtEvent$Type)), handler);
}

function addHandler(type, handler){
  return $addHandler_0(getHandlers(), type, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_14 && (TYPE_14 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_14), handler);
}

function getHandlers(){
  !handlers_1 && (handlers_1 = $Window$WindowHandlers(new Window$WindowHandlers));
  return handlers_1;
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = ($clinit_261() , new Window$ClosingEvent);
    !!handlers_1 && $fireEvent_0(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width;
  if (resizeHandlersInitialized) {
    width = $getClientWidth_0($doc);
    height = $getClientHeight_0($doc);
    if (lastResizeWidth != width || lastResizeHeight != height) {
      lastResizeWidth = width;
      lastResizeHeight = height;
      fire_3(getHandlers(), width);
    }
  }
}

var closeHandlersInitialized = false, handlers_1 = null, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_261(){
  $clinit_261 = nullMethod;
  TYPE_16 = $GwtEvent$Type(new GwtEvent$Type);
}

function dispatch_16(p0){
  throwClassCastExceptionUnlessNull(p0);
  null.nullMethod();
}

function getAssociatedType_17(){
  return TYPE_16;
}

function getClass_166(){
  return Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit;
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent.prototype = new GwtEvent;
_.dispatch = dispatch_16;
_.getAssociatedType = getAssociatedType_17;
_.getClass$ = getClass_166;
_.typeId$ = 0;
var TYPE_16;
function $Window$WindowHandlers(this$static){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry);
  this$static.source = null;
  this$static.isReverseOrder = false;
  return this$static;
}

function getClass_167(){
  return Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit;
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers.prototype = new HandlerManager;
_.getClass$ = getClass_167;
_.typeId$ = 113;
function $eventGetTypeInt(eventType){
  switch (eventType) {
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
    case 'paste':
      return 524288;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    $initSyntheticMouseUpEvents();
    eventSystemIsInitialized = true;
  }
}

function isMyListener(object){
  return !(object != null && object.typeMarker$ != nullMethod && object.typeId$ != 2) && object != null && canCast(object.typeId$, 43);
}

var eventSystemIsInitialized = false;
function $eventGetToElement(evt){
  if ($equals_1(($clinit_116() , evt).type, 'mouseover')) {
    return evt.target;
  }
  if ($equals_1(evt.type, 'mouseout')) {
    return $eventGetRelatedTarget(evt);
  }
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
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return count;
}

function $initEventSystem(){
  dispatchCapturedMouseEvent = $entry(function(evt){
    if (dispatchCapturedEvent(evt)) {
      var cap = captureElem;
      if (cap && cap.__listener) {
        if (isMyListener(cap.__listener)) {
          dispatchEvent_0(evt, cap, cap.__listener);
          evt.stopPropagation();
        }
      }
    }
  }
  );
  dispatchCapturedEvent = $entry(function(evt){
    if (!previewEvent(evt)) {
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }
  );
  dispatchEvent_1 = $entry(function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentNode;
    }
    curElem && curElem.nodeType != 1 && (curElem = null);
    listener && isMyListener(listener) && dispatchEvent_0(evt, curElem, listener);
  }
  );
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

function $insertChild(parent_0, toAdd, index){
  var count = 0, child = parent_0.firstChild, before = null;
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
  parent_0.insertBefore(toAdd, before);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchEvent_1:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?dispatchEvent_1:null);
}

var captureElem = null, dispatchCapturedEvent = null, dispatchCapturedMouseEvent = null, dispatchEvent_1 = null;
function $initSyntheticMouseUpEvents(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = $wnd.__captureElem;
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
  $wnd.addEventListener('DOMMouseScroll', dispatchCapturedMouseEvent, true);
}

function $sinkEvents_0(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
  bits & 131072 && elem.addEventListener('DOMMouseScroll', dispatchEvent_1, false);
}

function $ElementMapperImpl(this$static){
  this$static.uiObjectList = $ArrayList(new ArrayList);
  return this$static;
}

function $get_1(this$static, elem){
  var index, index_0;
  index = (index_0 = elem['__uiObjectID'] , index_0 == null?-1:index_0);
  if (index < 0) {
    return null;
  }
  return dynamicCast($get_3(this$static.uiObjectList, index), 55);
}

function $put(this$static, uiObject){
  var index;
  if (!this$static.freeList) {
    index = this$static.uiObjectList.size;
    $add_11(this$static.uiObjectList, uiObject);
  }
   else {
    index = this$static.freeList.index_0;
    $set_1(this$static.uiObjectList, index, uiObject);
    this$static.freeList = this$static.freeList.next;
  }
  uiObject.getElement_0()['__uiObjectID'] = index;
}

function $removeByElement(this$static, elem){
  var index, index_0;
  index = (index_0 = elem['__uiObjectID'] , index_0 == null?-1:index_0);
  elem['__uiObjectID'] = null;
  $set_1(this$static.uiObjectList, index, null);
  this$static.freeList = $ElementMapperImpl$FreeNode(new ElementMapperImpl$FreeNode, index, this$static.freeList);
}

function getClass_168(){
  return Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit;
}

function ElementMapperImpl(){
}

_ = ElementMapperImpl.prototype = new Object_0;
_.getClass$ = getClass_168;
_.typeId$ = 0;
_.freeList = null;
function $ElementMapperImpl$FreeNode(this$static, index, next){
  this$static.index_0 = index;
  this$static.next = next;
  return this$static;
}

function getClass_169(){
  return Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit;
}

function ElementMapperImpl$FreeNode(){
}

_ = ElementMapperImpl$FreeNode.prototype = new Object_0;
_.getClass$ = getClass_169;
_.typeId$ = 0;
_.index_0 = 0;
_.next = null;
function $addValueChangeHandler_3(this$static, handler){
  return $addHandler_0(this$static.handlers, (!TYPE_0 && (TYPE_0 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_0), handler);
}

function decodeFragment(encodedFragment){
  return decodeURI(encodedFragment.replace('%23', '#'));
}

function fireEvent_2(event_0){
  $fireEvent_0(this.handlers, event_0);
}

function getClass_170(){
  return Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit;
}

function newItemOnEvent(historyToken){
  historyToken = historyToken == null?'':historyToken;
  if (!$equals_1(historyToken, $wnd.__gwt_historyToken || '')) {
    $wnd.__gwt_historyToken = historyToken;
    fire(this, historyToken);
  }
}

function HistoryImpl(){
}

_ = HistoryImpl.prototype = new Object_0;
_.decodeFragment = decodeFragment;
_.fireEvent = fireEvent_2;
_.getClass$ = getClass_170;
_.newItemOnEvent = newItemOnEvent;
_.typeId$ = 114;
function $init_3(this$static){
  var token_0 = '';
  var hash_0 = $wnd.location.hash;
  hash_0.length > 0 && (token_0 = this$static.decodeFragment(hash_0.substring(1)));
  $wnd.__gwt_historyToken = token_0;
  var historyImpl = this$static;
  $wnd.__checkHistory = $entry(function(){
    $wnd.setTimeout($wnd.__checkHistory, 250);
    var token = '', hash = $wnd.location.hash;
    hash.length > 0 && (token = historyImpl.decodeFragment(hash.substring(1)));
    historyImpl.newItemOnEvent(token);
  }
  );
  $wnd.__checkHistory();
  return true;
}

function getClass_171(){
  return Lcom_google_gwt_user_client_impl_HistoryImplTimer_2_classLit;
}

function HistoryImplTimer(){
}

_ = HistoryImplTimer.prototype = new HistoryImpl;
_.getClass$ = getClass_171;
_.typeId$ = 115;
function $HistoryImplMozilla(this$static){
  this$static.handlers = $HandlerManager(new HandlerManager, null);
  return this$static;
}

function decodeFragment_0(encodedFragment){
  return encodedFragment;
}

function getClass_172(){
  return Lcom_google_gwt_user_client_impl_HistoryImplMozilla_2_classLit;
}

function HistoryImplMozilla(){
}

_ = HistoryImplMozilla.prototype = new HistoryImplTimer;
_.decodeFragment = decodeFragment_0;
_.getClass$ = getClass_172;
_.typeId$ = 116;
function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_1(getHandlers(), false);
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function $add_6(this$static, w){
  $add_4(this$static, w, this$static.element_0);
}

function $add_7(this$static, w, left, top_0){
  var beforeIndex;
  $removeFromParent(w);
  beforeIndex = this$static.children.size;
  this$static.setWidgetPositionImpl(w, left, top_0);
  $insert(this$static, w, this$static.element_0, beforeIndex, true);
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove(this$static, w);
  removed && changeToStaticPositioning(w.getElement_0());
  return removed;
}

function $setWidgetPositionImpl(w, left, top_0){
  var h;
  h = w.element_0;
  if (left == -1 && top_0 == -1) {
    changeToStaticPositioning(h);
  }
   else {
    h.style['position'] = 'absolute';
    h.style['left'] = left + 'px';
    h.style['top'] = top_0 + 'px';
  }
}

function add_11(w){
  $add_4(this, w, this.element_0);
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

function getClass_173(){
  return Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit;
}

function remove_5(w){
  var removed;
  return removed = $remove(this, w) , removed && changeToStaticPositioning(w.getElement_0()) , removed;
}

function setWidgetPositionImpl(w, left, top_0){
  $setWidgetPositionImpl(w, left, top_0);
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel;
_.add_0 = add_11;
_.getClass$ = getClass_173;
_.remove = remove_5;
_.setWidgetPositionImpl = setWidgetPositionImpl;
_.typeId$ = 117;
function create_1(resource){
  return $ClippedImagePrototype(new ClippedImagePrototype, resource.url, resource.left_0, resource.top_0, resource.width_0, resource.height_0);
}

function getClass_174(){
  return Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit;
}

function AbstractImagePrototype(){
}

_ = AbstractImagePrototype.prototype = new Object_0;
_.getClass$ = getClass_174;
_.typeId$ = 0;
function $clinit_274(){
  $clinit_274 = nullMethod;
  $clinit_14();
}

function $Anchor(this$static){
  $clinit_274();
  $setElement_0(this$static, ($clinit_116() , $doc).createElement('a'));
  this$static.element_0['className'] = 'gwt-Anchor';
  return this$static;
}

function getClass_175(){
  return Lcom_google_gwt_user_client_ui_Anchor_2_classLit;
}

function setTabIndex_1(index){
  this.element_0.tabIndex = index;
}

function setText_5(text){
  ($clinit_116() , this.element_0).textContent = text || '';
}

function Anchor(){
}

_ = Anchor.prototype = new FocusWidget;
_.getClass$ = getClass_175;
_.setTabIndex = setTabIndex_1;
_.setText_0 = setText_5;
_.typeId$ = 118;
function $clinit_275(){
  $clinit_275 = nullMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function $AttachDetachException(this$static, causes){
  $clinit_275();
  $Exception(this$static, 'One or more exceptions caught, see full set in AttachDetachException#getCauses', causes.map.size == 0?null:dynamicCast(causes.toArray(initDim(_3Ljava_lang_Throwable_2_classLit, 234, 64, 0, 0)), 72)[0]);
  return this$static;
}

function getClass_176(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit;
}

function tryCommand(hasWidgets, c){
  var old;
  $clinit_275();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator_0(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 2);
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 64)) {
        e = $e0;
        !caught && (caught = $HashSet(new HashSet));
        old = $put_0(caught.map, e, caught);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw $AttachDetachException(new AttachDetachException, caught);
  }
}

function AttachDetachException(){
}

_ = AttachDetachException.prototype = new RuntimeException;
_.getClass$ = getClass_176;
_.typeId$ = 119;
var attachCommand, detachCommand;
function execute_5(w){
  w.onAttach();
}

function getClass_177(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit;
}

function AttachDetachException$1(){
}

_ = AttachDetachException$1.prototype = new Object_0;
_.execute_1 = execute_5;
_.getClass$ = getClass_177;
_.typeId$ = 0;
function execute_6(w){
  w.onDetach();
}

function getClass_178(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit;
}

function AttachDetachException$2(){
}

_ = AttachDetachException$2.prototype = new Object_0;
_.execute_1 = execute_6;
_.getClass$ = getClass_178;
_.typeId$ = 0;
function $clinit_279(){
  $clinit_279 = nullMethod;
  $clinit_15();
}

function $CustomButton(this$static, upImage){
  $clinit_279();
  $ButtonBase(this$static, $createFocusable(($clinit_35() , impl)));
  $sinkEvents(this$static, 7165);
  this$static.up = $CustomButton$2(new CustomButton$2, null, this$static, 'up', 0);
  this$static.element_0['className'] = 'gwt-CustomButton';
  this$static.element_0.setAttribute('role', 'button');
  $setImage_0(this$static.up, upImage);
  return this$static;
}

function $cleanupCaptureState(this$static){
  if (this$static.isCapturing || this$static.isFocusing) {
    releaseCapture(this$static.element_0);
    this$static.isCapturing = false;
    this$static.isFocusing = false;
    this$static.onClickCancel();
  }
}

function $createFace(this$static, delegateTo, name_0, faceID){
  return $CustomButton$2(new CustomButton$2, delegateTo, this$static, name_0, faceID);
}

function $getDownFace(this$static){
  !this$static.down && (this$static.down = $createFace(this$static, this$static.up, 'down', 1) , undefined);
  return this$static.down;
}

function $getFaceFromID(this$static, id){
  switch (id) {
    case 1:
      return $getDownFace(this$static);
    case 0:
      return this$static.up;
    case 3:
      return !this$static.downHovering && (this$static.downHovering = $createFace(this$static, $getDownFace(this$static), 'down-hovering', 3) , undefined) , this$static.downHovering;
    case 2:
      return !this$static.upHovering && (this$static.upHovering = $createFace(this$static, this$static.up, 'up-hovering', 2) , undefined) , this$static.upHovering;
    case 4:
      return !this$static.upDisabled && (this$static.upDisabled = $createFace(this$static, this$static.up, 'up-disabled', 4) , undefined) , this$static.upDisabled;
    case 5:
      return !this$static.downDisabled && (this$static.downDisabled = $createFace(this$static, $getDownFace(this$static), 'down-disabled', 5) , undefined) , this$static.downDisabled;
    default:throw $IllegalStateException_0(new IllegalStateException, id + ' is not a known face id.');
  }
}

function $onClick_0(this$static){
  var evt;
  this$static.allowClick = true;
  evt = $createMouseEvent(($clinit_116() , $doc), 'click', true, true, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  this$static.element_0.dispatchEvent(evt);
  this$static.allowClick = false;
}

function $setCurrentFace(this$static, newFace){
  var pressed;
  if (this$static.curFace != newFace) {
    !!this$static.curFace && $removeStyleDependentName(this$static, this$static.curFace.val$name);
    this$static.curFace = newFace;
    $setCurrentFaceElement(this$static, $getFace(newFace));
    $addStyleDependentName(this$static, this$static.curFace.val$name);
    !this$static.element_0['disabled'] && (pressed = (newFace.val$faceID & 1) == 1 , this$static.element_0.setAttribute('aria-pressed', pressed?'true':'false') , undefined);
  }
}

function $setCurrentFaceElement(this$static, newFaceElement){
  if (this$static.curFaceElement != newFaceElement) {
    !!this$static.curFaceElement && this$static.element_0.removeChild(this$static.curFaceElement);
    this$static.curFaceElement = newFaceElement;
    this$static.element_0.appendChild(this$static.curFaceElement);
  }
}

function $setDown(this$static, down){
  down != this$static.isDown() && $toggleDown(this$static);
}

function $setHovering(this$static, hovering){
  var newFaceID, newFace;
  hovering != (2 & (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID)) > 0 && (newFaceID = (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID) ^ 2 , newFaceID &= -5 , newFace = $getFaceFromID(this$static, newFaceID) , $setCurrentFace(this$static, newFace) , undefined);
}

function $toggleDown(this$static){
  var newFaceID, newFace;
  newFaceID = (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID) ^ 1;
  newFace = $getFaceFromID(this$static, newFaceID);
  $setCurrentFace(this$static, newFace);
}

function getClass_179(){
  return Lcom_google_gwt_user_client_ui_CustomButton_2_classLit;
}

function isDown(){
  return (1 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) > 0;
}

function onAttach_2(){
  !this.curFace && $setCurrentFace(this, this.up);
  $onAttach(this);
}

function onBrowserEvent_3(event_0){
  var keyCode, to, type;
  if (this.element_0['disabled']) {
    return;
  }
  type = $eventGetTypeInt(($clinit_116() , event_0).type);
  switch (type) {
    case 1:
      if (!this.allowClick) {
        event_0.stopPropagation();
        return;
      }

      break;
    case 4:
      if ($eventGetButton(event_0) == 1) {
        ($clinit_35() , this.element_0).focus();
        this.onClickStart();
        setCapture(this.element_0);
        this.isCapturing = true;
        event_0.preventDefault();
      }

      break;
    case 8:
      if (this.isCapturing) {
        this.isCapturing = false;
        releaseCapture(this.element_0);
        (2 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) > 0 && $eventGetButton(event_0) == 1 && this.onClick_0();
      }

      break;
    case 64:
      this.isCapturing && (event_0.preventDefault() , undefined);
      break;
    case 32:
      to = $eventGetToElement(event_0);
      if ($isOrHasChild_0(this.element_0, event_0.target) && (!to || !$isOrHasChild_0(this.element_0, to))) {
        this.isCapturing && this.onClickCancel();
        $setHovering(this, false);
      }

      break;
    case 16:
      if ($isOrHasChild_0(this.element_0, event_0.target)) {
        $setHovering(this, true);
        this.isCapturing && this.onClickStart();
      }

      break;
    case 4096:
      if (this.isFocusing) {
        this.isFocusing = false;
        this.onClickCancel();
      }

      break;
    case 8192:
      if (this.isCapturing) {
        this.isCapturing = false;
        this.onClickCancel();
      }

  }
  $onBrowserEvent(this, event_0);
  if (($eventGetTypeInt(event_0.type) & 896) != 0) {
    keyCode = (event_0.which || event_0.keyCode || 0) & 65535;
    switch (type) {
      case 128:
        if (keyCode == 32) {
          this.isFocusing = true;
          this.onClickStart();
        }

        break;
      case 512:
        if (this.isFocusing && keyCode == 32) {
          this.isFocusing = false;
          this.onClick_0();
        }

        break;
      case 256:
        if (keyCode == 10 || keyCode == 13) {
          this.onClickStart();
          this.onClick_0();
        }

    }
  }
}

function onClick_9(){
  $onClick_0(this);
}

function onClickCancel(){
}

function onClickStart(){
}

function onDetach_3(){
  $onDetach(this);
  $cleanupCaptureState(this);
  $setHovering(this, false);
}

function setHTML_1(html){
  $setHTML_3((!this.curFace && $setCurrentFace(this, this.up) , this.curFace), html);
}

function setTabIndex_2(index){
  ($clinit_35() , this.element_0).tabIndex = index;
}

function setText_6(text){
  $setText_6((!this.curFace && $setCurrentFace(this, this.up) , this.curFace), text);
}

function CustomButton(){
}

_ = CustomButton.prototype = new ButtonBase;
_.getClass$ = getClass_179;
_.isDown = isDown;
_.onAttach = onAttach_2;
_.onBrowserEvent = onBrowserEvent_3;
_.onClick_0 = onClick_9;
_.onClickCancel = onClickCancel;
_.onClickStart = onClickStart;
_.onDetach = onDetach_3;
_.setHTML = setHTML_1;
_.setTabIndex = setTabIndex_2;
_.setText_0 = setText_6;
_.typeId$ = 120;
_.allowClick = false;
_.curFace = null;
_.curFaceElement = null;
_.down = null;
_.downDisabled = null;
_.downHovering = null;
_.isCapturing = false;
_.isFocusing = false;
_.up = null;
_.upDisabled = null;
_.upHovering = null;
function $getFace(this$static){
  if (!this$static.face) {
    if (!this$static.delegateTo) {
      this$static.face = ($clinit_116() , $doc).createElement('div');
      return this$static.face;
    }
     else {
      return $getFace(this$static.delegateTo);
    }
  }
   else {
    return this$static.face;
  }
}

function $setHTML_3(this$static, html){
  this$static.face = ($clinit_116() , $doc).createElement('div');
  setStyleName(this$static.face, 'html-face', true);
  this$static.face.innerHTML = html || '';
  $updateButtonFace(this$static);
}

function $setImage_0(this$static, image){
  this$static.face = image.element_0;
  $updateButtonFace(this$static);
}

function $setText_6(this$static, text){
  this$static.face = ($clinit_116() , $doc).createElement('div');
  setStyleName(this$static.face, 'html-face', true);
  this$static.face.textContent = text || '';
  $updateButtonFace(this$static);
}

function $updateButtonFace(this$static){
  !!this$static.this$0.curFace && $getFace(this$static.this$0.curFace) == $getFace(this$static) && $setCurrentFaceElement(this$static.this$0, this$static.face);
}

function getClass_180(){
  return Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit;
}

function setText_7(text){
  $setText_6(this, text);
}

function toString_11(){
  return dynamicCast(this, 73).val$name;
}

function CustomButton$Face(){
}

_ = CustomButton$Face.prototype = new Object_0;
_.getClass$ = getClass_180;
_.setText_0 = setText_7;
_.toString$ = toString_11;
_.typeId$ = 0;
_.delegateTo = null;
_.face = null;
_.this$0 = null;
function $CustomButton$2(this$static, $anonymous0, this$0, val$name, val$faceID){
  this$static.val$name = val$name;
  this$static.val$faceID = val$faceID;
  this$static.this$0 = this$0;
  this$static.delegateTo = $anonymous0;
  return this$static;
}

function getClass_181(){
  return Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit;
}

function CustomButton$2(){
}

_ = CustomButton$2.prototype = new CustomButton$Face;
_.getClass$ = getClass_181;
_.typeId$ = 121;
_.val$faceID = 0;
_.val$name = null;
function $DialogBox$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_182(){
  return Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit;
}

function onResize_0(event_0){
  this.this$0.windowWidth = event_0.width_0;
}

function DialogBox$1(){
}

_ = DialogBox$1.prototype = new Object_0;
_.getClass$ = getClass_182;
_.onResize = onResize_0;
_.typeId$ = 122;
_.this$0 = null;
function $DialogBox$CaptionImpl(this$static){
  $HTML(this$static);
  return this$static;
}

function getClass_183(){
  return Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit;
}

function DialogBox$CaptionImpl(){
}

_ = DialogBox$CaptionImpl.prototype = new HTML;
_.getClass$ = getClass_183;
_.typeId$ = 123;
function $DialogBox$MouseHandler(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_184(){
  return Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit;
}

function onMouseDown_0(event_0){
  $beginDragging(this.this$0, event_0);
}

function onMouseOut_3(event_0){
}

function onMouseOver_3(event_0){
}

function DialogBox$MouseHandler(){
}

_ = DialogBox$MouseHandler.prototype = new Object_0;
_.getClass$ = getClass_184;
_.onMouseDown = onMouseDown_0;
_.onMouseOut = onMouseOut_3;
_.onMouseOver = onMouseOver_3;
_.typeId$ = 124;
_.this$0 = null;
function $clinit_286(){
  $clinit_286 = nullMethod;
  CENTER = new DockPanel$DockLayoutConstant;
  LINE_START = new DockPanel$DockLayoutConstant;
  LINE_END = new DockPanel$DockLayoutConstant;
  EAST = new DockPanel$DockLayoutConstant;
  NORTH = new DockPanel$DockLayoutConstant;
  SOUTH = new DockPanel$DockLayoutConstant;
  WEST = new DockPanel$DockLayoutConstant;
}

function $DockPanel(this$static){
  $clinit_286();
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_303() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_307() , ALIGN_TOP);
  this$static.table['cellSpacing'] = 0;
  this$static.table['cellPadding'] = 0;
  return this$static;
}

function $add_8(this$static, widget, direction){
  var layout;
  if (direction == CENTER) {
    if (widget == this$static.center) {
      return;
    }
     else if (this$static.center) {
      throw $IllegalArgumentException(new IllegalArgumentException, 'Only one CENTER widget may be added');
    }
  }
  $removeFromParent(widget);
  $add_10(this$static.children, widget);
  direction == CENTER && (this$static.center = widget);
  layout = $DockPanel$LayoutData(new DockPanel$LayoutData, direction);
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
  for (it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static.children); it.index_0 < it.this$0.size - 1;) {
    child = $next_2(it);
    dir = child.layoutData.direction_0;
    dir == NORTH || dir == SOUTH?++rowCount:(dir == EAST || dir == WEST || dir == LINE_START || dir == LINE_END) && ++colCount;
  }
  rows = initDim(_3Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit, 211, 46, rowCount, 0);
  for (i = 0; i < rowCount; ++i) {
    rows[i] = new DockPanel$TmpRow;
    rows[i].tr = ($clinit_116() , $doc).createElement('tr');
    bodyElem.appendChild(rows[i].tr);
  }
  logicalLeftCol = 0;
  logicalRightCol = colCount - 1;
  northRow = 0;
  southRow = rowCount - 1;
  centerTd = null;
  for (it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static.children); it.index_0 < it.this$0.size - 1;) {
    child = $next_2(it);
    layout = child.layoutData;
    td = ($clinit_116() , $doc).createElement('td');
    layout.td = td;
    layout.td['align'] = layout.hAlign;
    layout.td.style['verticalAlign'] = layout.vAlign;
    layout.td['width'] = layout.width_0;
    layout.td['height'] = '';
    if (layout.direction_0 == NORTH) {
      $insertChild(rows[northRow].tr, td, rows[northRow].center);
      td.appendChild(child.getElement_0());
      td['colSpan'] = logicalRightCol - logicalLeftCol + 1;
      ++northRow;
    }
     else if (layout.direction_0 == SOUTH) {
      $insertChild(rows[southRow].tr, td, rows[southRow].center);
      td.appendChild(child.getElement_0());
      td['colSpan'] = logicalRightCol - logicalLeftCol + 1;
      --southRow;
    }
     else if (layout.direction_0 == CENTER) {
      centerTd = td;
    }
     else if ($shouldAddToLogicalLeftOfTable(layout.direction_0)) {
      row = rows[northRow];
      $insertChild(row.tr, td, row.center++);
      td.appendChild(child.getElement_0());
      td['rowSpan'] = southRow - northRow + 1;
      ++logicalLeftCol;
    }
     else if ($shouldAddToLogicalRightOfTable(layout.direction_0)) {
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
  removed = $remove(this$static, w);
  if (removed) {
    w == this$static.center && (this$static.center = null);
    $realizeTable(this$static);
  }
  return removed;
}

function $setCellHorizontalAlignment(w, align){
  var data;
  data = w.layoutData;
  data.hAlign = align.textAlignString;
  !!data.td && (data.td['align'] = align.textAlignString , undefined);
}

function $setCellVerticalAlignment(w, align){
  var data;
  data = w.layoutData;
  data.vAlign = align.verticalAlignString;
  !!data.td && (data.td.style['verticalAlign'] = align.verticalAlignString , undefined);
}

function $setCellWidth_0(w, width){
  var data;
  data = w.layoutData;
  data.width_0 = width;
  !!data.td && (data.td.style['width'] = data.width_0 , undefined);
}

function $shouldAddToLogicalLeftOfTable(widgetDirection){
  if (widgetDirection == LINE_START) {
    return true;
  }
  $clinit_221();
  return widgetDirection == WEST;
}

function $shouldAddToLogicalRightOfTable(widgetDirection){
  if (widgetDirection == LINE_END) {
    return true;
  }
  $clinit_221();
  return widgetDirection == EAST;
}

function getClass_185(){
  return Lcom_google_gwt_user_client_ui_DockPanel_2_classLit;
}

function remove_6(w){
  return $remove_2(this, w);
}

function DockPanel(){
}

_ = DockPanel.prototype = new CellPanel;
_.getClass$ = getClass_185;
_.remove = remove_6;
_.typeId$ = 125;
_.center = null;
var CENTER, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
function getClass_186(){
  return Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit;
}

function DockPanel$DockLayoutConstant(){
}

_ = DockPanel$DockLayoutConstant.prototype = new Object_0;
_.getClass$ = getClass_186;
_.typeId$ = 0;
function $DockPanel$LayoutData(this$static, dir){
  this$static.hAlign = ($clinit_303() , ALIGN_DEFAULT).textAlignString;
  this$static.vAlign = ($clinit_307() , ALIGN_TOP).verticalAlignString;
  this$static.direction_0 = dir;
  return this$static;
}

function getClass_187(){
  return Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit;
}

function DockPanel$LayoutData(){
}

_ = DockPanel$LayoutData.prototype = new Object_0;
_.getClass$ = getClass_187;
_.typeId$ = 0;
_.direction_0 = null;
_.td = null;
_.width_0 = '';
function getClass_188(){
  return Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit;
}

function DockPanel$TmpRow(){
}

_ = DockPanel$TmpRow.prototype = new Object_0;
_.getClass$ = getClass_188;
_.typeId$ = 126;
_.center = 0;
_.tr = null;
function $HTMLTable(this$static){
  this$static.widgetMap = $ElementMapperImpl(new ElementMapperImpl);
  this$static.tableElem = ($clinit_116() , $doc).createElement('table');
  this$static.bodyElem = $doc.createElement('tbody');
  this$static.tableElem.appendChild(this$static.bodyElem);
  this$static.element_0 = this$static.tableElem;
  return this$static;
}

function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = this$static.getCellCount(row);
  if (cellSize <= column) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Column index: ' + column + ', Column size: ' + this$static.getCellCount(row));
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.getRowCount();
  if (row >= rowSize || row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $clear_1(this$static, clearInnerHTML){
  var col, row, td;
  for (row = 0; row < this$static.bodyElem.rows.length; ++row) {
    for (col = 0; col < ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length); ++col) {
      td = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[col];
      $internalClearCell(this$static, td, clearInnerHTML);
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
  child = $getFirstChildElement(($clinit_116() , e));
  if (!child) {
    return null;
  }
   else {
    return dynamicCast($get_1(this$static.widgetMap, child), 2);
  }
}

function $insertCell(this$static, row, column){
  var td, tr;
  tr = this$static.bodyElem.rows[row];
  td = this$static.createCell();
  $insertChild(tr, td, column);
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = $getFirstChildElement(($clinit_116() , td));
  widget = null;
  !!maybeChild && (widget = dynamicCast($get_1(this$static.widgetMap, maybeChild), 2));
  if (widget) {
    $remove_3(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && (td.innerHTML = '' , undefined);
    return false;
  }
}

function $remove_3(this$static, widget){
  var elem, parent_0;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = widget.getElement_0();
    (parent_0 = ($clinit_116() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(elem);
    $removeByElement(this$static.widgetMap, elem);
  }
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

function $setHTML_4(this$static, row, column, html){
  var td, td_0;
  this$static.prepareCell(row, column);
  td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, html == null) , td_0);
  html != null && (td.innerHTML = html || '' , undefined);
}

function $setText_7(this$static, row, column, text){
  var td, td_0;
  $prepareCell(this$static, row, column);
  td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, text == null) , td_0);
  text != null && (($clinit_116() , td).textContent = text || '' , undefined);
}

function $setWidget_2(this$static, row, column, widget){
  var td, td_0;
  this$static.prepareCell(row, column);
  if (widget) {
    $removeFromParent(widget);
    td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, true) , td_0);
    $put(this$static.widgetMap, widget);
    td.appendChild(widget.getElement_0());
    $setParent(widget, this$static);
  }
}

function createCell(){
  return ($clinit_116() , $doc).createElement('td');
}

function getClass_189(){
  return Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit;
}

function iterator_3(){
  return $HTMLTable$1(new HTMLTable$1, this);
}

function prepareColumn(column){
}

function remove_7(widget){
  return $remove_3(this, widget);
}

function HTMLTable(){
}

_ = HTMLTable.prototype = new Panel;
_.createCell = createCell;
_.getClass$ = getClass_189;
_.iterator_0 = iterator_3;
_.prepareColumn = prepareColumn;
_.remove = remove_7;
_.typeId$ = 127;
_.bodyElem = null;
_.cellFormatter = null;
_.columnFormatter = null;
_.rowFormatter = null;
_.tableElem = null;
function $FlexTable(this$static){
  $HTMLTable(this$static);
  this$static.cellFormatter = $FlexTable$FlexCellFormatter(new FlexTable$FlexCellFormatter, this$static);
  this$static.rowFormatter = $HTMLTable$RowFormatter(new HTMLTable$RowFormatter, this$static);
  $setColumnFormatter(this$static, $HTMLTable$ColumnFormatter(new HTMLTable$ColumnFormatter, this$static));
  return this$static;
}

function $prepareCell(this$static, row, column){
  var cellCount, required;
  $prepareRow(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot create a column with a negative index: ' + column);
  }
  cellCount = ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length);
  required = column + 1 - cellCount;
  required > 0 && addCells(this$static.bodyElem, row, required);
}

function $prepareRow(this$static, row){
  var i, rowCount, tr;
  if (row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot create a row with a negative index: ' + row);
  }
  rowCount = this$static.bodyElem.rows.length;
  for (i = rowCount; i <= row; ++i) {
    i != this$static.bodyElem.rows.length && $checkRowBounds(this$static, i);
    tr = ($clinit_116() , $doc).createElement('tr');
    $insertChild(this$static.bodyElem, tr, i);
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

function getClass_190(){
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

_ = FlexTable.prototype = new HTMLTable;
_.getCellCount = getCellCount;
_.getClass$ = getClass_190;
_.getRowCount = getRowCount;
_.prepareCell = prepareCell;
_.prepareRow = prepareRow;
_.typeId$ = 128;
function $HTMLTable$CellFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $addStyleName_2(this$static, row, column, styleName){
  var td;
  this$static.this$0.prepareCell(row, column);
  td = this$static.this$0.bodyElem.rows[row].cells[column];
  setStyleName(td, styleName, true);
}

function $getElement_1(this$static, row, column){
  $checkCellBounds(this$static.this$0, row, column);
  return this$static.this$0.bodyElem.rows[row].cells[column];
}

function $setStyleName_2(this$static, row, column, styleName){
  this$static.this$0.prepareCell(row, column);
  this$static.this$0.bodyElem.rows[row].cells[column]['className'] = styleName;
}

function getClass_191(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit;
}

function HTMLTable$CellFormatter(){
}

_ = HTMLTable$CellFormatter.prototype = new Object_0;
_.getClass$ = getClass_191;
_.typeId$ = 0;
_.this$0 = null;
function $FlexTable$FlexCellFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $setColSpan(this$static, row, column, colSpan){
  (this$static.this$0.prepareCell(row, column) , this$static.this$0.bodyElem.rows[row].cells[column])['colSpan'] = colSpan;
}

function getClass_192(){
  return Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit;
}

function FlexTable$FlexCellFormatter(){
}

_ = FlexTable$FlexCellFormatter.prototype = new HTMLTable$CellFormatter;
_.getClass$ = getClass_192;
_.typeId$ = 129;
function $Grid_0(this$static, rows, columns){
  $HTMLTable(this$static);
  this$static.cellFormatter = $HTMLTable$CellFormatter(new HTMLTable$CellFormatter, this$static);
  this$static.rowFormatter = $HTMLTable$RowFormatter(new HTMLTable$RowFormatter, this$static);
  $setColumnFormatter(this$static, $HTMLTable$ColumnFormatter(new HTMLTable$ColumnFormatter, this$static));
  $resizeColumns(this$static, columns);
  $resizeRows(this$static, rows);
  return this$static;
}

function $prepareRow_0(this$static, row){
  if (row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot access a row with a negative index: ' + row);
  }
  if (row >= this$static.numRows) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Row index: ' + row + ', Row size: ' + this$static.numRows);
  }
}

function $removeRow_0(this$static, row){
  $removeRow(this$static, row);
  --this$static.numRows;
}

function $resizeColumns(this$static, columns){
  var i, j, td, tr, td_0, td_1, tr_0;
  if (this$static.numColumns == columns) {
    return;
  }
  if (columns < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot set number of columns to ' + columns);
  }
  if (this$static.numColumns > columns) {
    for (i = 0; i < this$static.numRows; ++i) {
      for (j = this$static.numColumns - 1; j >= columns; --j) {
        $checkCellBounds(this$static, i, j);
        td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[i].cells[j] , $internalClearCell(this$static, td_0, false) , td_0);
        tr = this$static.bodyElem.rows[i];
        tr.removeChild(td);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; ++i) {
      for (j = this$static.numColumns; j < columns; ++j) {
        tr_0 = this$static.bodyElem.rows[i];
        td_1 = this$static.createCell();
        $insertChild(tr_0, td_1, j);
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
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot set number of rows to ' + rows);
  }
  if (this$static.numRows < rows) {
    addRows(this$static.bodyElem, rows - this$static.numRows, this$static.numColumns);
    this$static.numRows = rows;
  }
   else {
    while (this$static.numRows > rows) {
      $removeRow_0(this$static, this$static.numRows - 1);
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

function createCell_0(){
  var td;
  td = ($clinit_116() , $doc).createElement('td');
  td.innerHTML = '&nbsp;';
  return td;
}

function getCellCount_0(row){
  return this.numColumns;
}

function getClass_193(){
  return Lcom_google_gwt_user_client_ui_Grid_2_classLit;
}

function getRowCount_0(){
  return this.numRows;
}

function prepareCell_0(row, column){
  $prepareRow_0(this, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot access a column with a negative index: ' + column);
  }
  if (column >= this.numColumns) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Column index: ' + column + ', Column size: ' + this.numColumns);
  }
}

function prepareColumn_0(column){
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot access a column with a negative index: ' + column);
  }
  if (column >= this.numColumns) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Column index: ' + column + ', Column size: ' + this.numColumns);
  }
}

function prepareRow_0(row){
  $prepareRow_0(this, row);
}

function Grid(){
}

_ = Grid.prototype = new HTMLTable;
_.createCell = createCell_0;
_.getCellCount = getCellCount_0;
_.getClass$ = getClass_193;
_.getRowCount = getRowCount_0;
_.prepareCell = prepareCell_0;
_.prepareColumn = prepareColumn_0;
_.prepareRow = prepareRow_0;
_.typeId$ = 130;
_.numColumns = 0;
_.numRows = 0;
function $HTMLTable$1(this$static, this$0){
  this$static.this$0 = this$0;
  this$static.widgetList = this$static.this$0.widgetMap.uiObjectList;
  $findNext(this$static);
  return this$static;
}

function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.size) {
    if ($get_3(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next_0(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.size) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  result = dynamicCast($get_3(this$static.widgetList, this$static.nextIndex), 2);
  this$static.lastIndex_0 = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function getClass_194(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit;
}

function hasNext_0(){
  return this.nextIndex < this.widgetList.size;
}

function next_1(){
  return $next_0(this);
}

function remove_8(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw $IllegalStateException(new IllegalStateException);
  }
  w = dynamicCast($get_3(this.widgetList, this.lastIndex_0), 2);
  $removeFromParent(w);
  this.lastIndex_0 = -1;
}

function HTMLTable$1(){
}

_ = HTMLTable$1.prototype = new Object_0;
_.getClass$ = getClass_194;
_.hasNext = hasNext_0;
_.next_0 = next_1;
_.remove_0 = remove_8;
_.typeId$ = 0;
_.lastIndex_0 = -1;
_.nextIndex = -1;
_.this$0 = null;
function $HTMLTable$ColumnFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $addStyleName_3(this$static, col, styleName){
  setStyleName($ensureColumn(this$static, col), styleName, true);
}

function $ensureColumn(this$static, col){
  var colElement, i, num;
  this$static.this$0.prepareColumn(col);
  $prepareColumnGroup(this$static);
  num = $getChildCount(this$static.columnGroup);
  if (num <= col) {
    colElement = null;
    for (i = num; i <= col; ++i) {
      colElement = ($clinit_116() , $doc).createElement('col');
      this$static.columnGroup.appendChild(colElement);
    }
    return colElement;
  }
  return $getChild(this$static.columnGroup, col);
}

function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = ($clinit_116() , $doc).createElement('colgroup');
    $insertChild(this$static.this$0.tableElem, this$static.columnGroup, 0);
    this$static.columnGroup.appendChild($doc.createElement('col'));
  }
}

function getClass_195(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit;
}

function HTMLTable$ColumnFormatter(){
}

_ = HTMLTable$ColumnFormatter.prototype = new Object_0;
_.getClass$ = getClass_195;
_.typeId$ = 0;
_.columnGroup = null;
_.this$0 = null;
function $HTMLTable$RowFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $addStyleName_4(this$static, row, styleName){
  setStyleName((this$static.this$0.prepareRow(row) , this$static.this$0.bodyElem.rows[row]), styleName, true);
}

function $setStyleName_3(this$static, row, styleName){
  (this$static.this$0.prepareRow(row) , this$static.this$0.bodyElem.rows[row])['className'] = styleName;
}

function getClass_196(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2_classLit;
}

function HTMLTable$RowFormatter(){
}

_ = HTMLTable$RowFormatter.prototype = new Object_0;
_.getClass$ = getClass_196;
_.typeId$ = 0;
_.this$0 = null;
function $clinit_303(){
  $clinit_303 = nullMethod;
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'center');
  ALIGN_LEFT = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'left');
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'right');
  ALIGN_DEFAULT = ($clinit_221() , ALIGN_LEFT);
}

var ALIGN_DEFAULT, ALIGN_LEFT;
function $HasHorizontalAlignment$HorizontalAlignmentConstant(this$static, textAlignString){
  this$static.textAlignString = textAlignString;
  return this$static;
}

function getClass_197(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new Object_0;
_.getClass$ = getClass_197;
_.typeId$ = 0;
_.textAlignString = null;
function $clinit_307(){
  $clinit_307 = nullMethod;
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'bottom');
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'middle');
  ALIGN_TOP = $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'top');
}

var ALIGN_TOP;
function $HasVerticalAlignment$VerticalAlignmentConstant(this$static, verticalAlignString){
  this$static.verticalAlignString = verticalAlignString;
  return this$static;
}

function getClass_198(){
  return Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit;
}

function HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = HasVerticalAlignment$VerticalAlignmentConstant.prototype = new Object_0;
_.getClass$ = getClass_198;
_.typeId$ = 0;
_.verticalAlignString = null;
function $HorizontalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_303() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_307() , ALIGN_TOP);
  this$static.tableRow = ($clinit_116() , $doc).createElement('tr');
  this$static.body_0.appendChild(this$static.tableRow);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_9(this$static, w){
  var td, td_0;
  td = (td_0 = ($clinit_116() , $doc).createElement('td') , td_0['align'] = this$static.horzAlign.textAlignString , td_0.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , td_0);
  this$static.tableRow.appendChild(td);
  $removeFromParent(w);
  $add_10(this$static.children, w);
  td.appendChild(w.getElement_0());
  $setParent(w, this$static);
}

function add_12(w){
  $add_9(this, w);
}

function getClass_199(){
  return Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit;
}

function remove_9(w){
  var removed, td, parent_0;
  td = (parent_0 = ($clinit_116() , w.getElement_0()).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  removed = $remove(this, w);
  removed && this.tableRow.removeChild(td);
  return removed;
}

function HorizontalPanel(){
}

_ = HorizontalPanel.prototype = new CellPanel;
_.add_0 = add_12;
_.getClass$ = getClass_199;
_.remove = remove_9;
_.typeId$ = 131;
_.tableRow = null;
function $clinit_312(){
  $clinit_312 = nullMethod;
  $clearImpl(new HashMap);
}

function $Image(this$static, resource){
  $clinit_312();
  $Image_1(this$static, resource.url, resource.left_0, resource.top_0, resource.width_0, resource.height_0);
  return this$static;
}

function $Image_0(this$static, url){
  $clinit_312();
  this$static.state = $Image$UnclippedState_0(new Image$UnclippedState, this$static, url);
  this$static.element_0['className'] = 'gwt-Image';
  return this$static;
}

function $Image_1(this$static, url, left, top_0, width, height){
  $clinit_312();
  this$static.state = $Image$ClippedState(new Image$ClippedState, this$static, url, left, top_0, width, height);
  this$static.element_0['className'] = 'gwt-Image';
  return this$static;
}

function $setUrl(this$static, url){
  this$static.state.setUrl(this$static, url);
}

function getClass_200(){
  return Lcom_google_gwt_user_client_ui_Image_2_classLit;
}

function Image_0(){
}

_ = Image_0.prototype = new Widget;
_.getClass$ = getClass_200;
_.typeId$ = 132;
_.state = null;
function getClass_201(){
  return Lcom_google_gwt_user_client_ui_Image$State_2_classLit;
}

function Image$State(){
}

_ = Image$State.prototype = new Object_0;
_.getClass$ = getClass_201;
_.typeId$ = 0;
function $Image$ClippedState(this$static, image, url, left, top_0, width, height){
  var tmp, style_1;
  $replaceElement_0(image, (tmp = ($clinit_116() , $doc).createElement('span') , tmp.innerHTML = (style_1 = 'width: ' + width + 'px; height: ' + height + 'px; background: url(' + url + ') no-repeat ' + -left + 'px ' + -top_0 + 'px' , "<img src='" + $moduleBase + "clear.cache.gif' style='" + style_1 + "' border='0'>") || '' , $getFirstChildElement(tmp)));
  $sinkEvents(image, 163965);
  return this$static;
}

function getClass_202(){
  return Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit;
}

function setUrl(image, url){
  image.state = $Image$UnclippedState_0(new Image$UnclippedState, image, url);
}

function Image$ClippedState(){
}

_ = Image$ClippedState.prototype = new Image$State;
_.getClass$ = getClass_202;
_.setUrl = setUrl;
_.typeId$ = 0;
function $Image$UnclippedState_0(this$static, image, url){
  $replaceElement_0(image, ($clinit_116() , $doc).createElement('img'));
  $sinkEvents_0(image.element_0, 32768);
  $sinkEvents(image, 229501);
  image.element_0.src = url;
  return this$static;
}

function getClass_203(){
  return Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit;
}

function setUrl_0(image, url){
  ($clinit_116() , image.element_0).src = url;
}

function Image$UnclippedState(){
}

_ = Image$UnclippedState.prototype = new Image$State;
_.getClass$ = getClass_203;
_.setUrl = setUrl_0;
_.typeId$ = 0;
function $clinit_318(){
  $clinit_318 = nullMethod;
  $clinit_14();
}

function $ListBox(this$static){
  var select;
  $clinit_318();
  $FocusWidget(this$static, (select = ($clinit_116() , $doc).createElement('select') , select));
  this$static.element_0['className'] = 'gwt-ListBox';
  return this$static;
}

function $checkIndex(this$static, index){
  if (index < 0 || index >= ($clinit_116() , this$static.element_0).options.length) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
}

function $insertItem(this$static, item, index){
  $insertItem_0(this$static, item, item, index);
}

function $insertItem_0(this$static, item, value, index){
  var before, option, select;
  select = this$static.element_0;
  option = ($clinit_116() , $doc).createElement('option');
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
  ($clinit_116() , this$static.element_0).options[index].selected = selected;
}

function getClass_204(){
  return Lcom_google_gwt_user_client_ui_ListBox_2_classLit;
}

function ListBox(){
}

_ = ListBox.prototype = new FocusWidget;
_.getClass$ = getClass_204;
_.typeId$ = 133;
function getClass_205(){
  return Lcom_google_gwt_user_client_ui_ListenerWrapper_2_classLit;
}

function ListenerWrapper(){
}

_ = ListenerWrapper.prototype = new BaseListenerWrapper;
_.getClass$ = getClass_205;
_.typeId$ = 134;
function $ListenerWrapper$WrappedPopupListener(this$static, listener){
  this$static.listener = listener;
  return this$static;
}

function getClass_206(){
  return Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedPopupListener_2_classLit;
}

function onClose_0(event_0){
  $onPopupClosed(this.listener, (dynamicCast(event_0.source, 74) , event_0.autoClosed));
}

function ListenerWrapper$WrappedPopupListener(){
}

_ = ListenerWrapper$WrappedPopupListener.prototype = new ListenerWrapper;
_.getClass$ = getClass_206;
_.onClose = onClose_0;
_.typeId$ = 135;
function $$init_35(this$static){
  this$static.allItems = $ArrayList(new ArrayList);
  this$static.items = $ArrayList(new ArrayList);
}

function $MenuBar(this$static){
  $$init_35(this$static);
  $init_4(this$static, false, create_1($menuBarSubMenuIcon()));
  return this$static;
}

function $MenuBar_0(this$static, vertical){
  $$init_35(this$static);
  $init_4(this$static, vertical, create_1($menuBarSubMenuIcon()));
  return this$static;
}

function $addItem(this$static, item){
  return $insertItem_1(this$static, item, this$static.allItems.size);
}

function $addItemElement(this$static, beforeIndex, tdElem){
  var tr;
  if (this$static.vertical) {
    tr = ($clinit_116() , $doc).createElement('tr');
    $insertChild(this$static.body_0, tr, beforeIndex);
    tr.appendChild(tdElem);
  }
   else {
    tr = $getChild(this$static.body_0, 0);
    $insertChild(tr, tdElem, beforeIndex);
  }
}

function $clearItems(this$static){
  var container, item, item$iterator;
  $selectItem(this$static, null);
  container = $getItemContainerElement(this$static);
  while ($getChildCount(container) > 0) {
    container.removeChild($getChild(container, 0));
  }
  for (item$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.allItems); item$iterator.i < item$iterator.this$0.size_0();) {
    item = dynamicCast($next_5(item$iterator), 55);
    item.getElement_0()['colSpan'] = 1;
    dynamicCast(item, 75).parentMenu = null;
  }
  $clear_2(this$static.items);
  $clear_2(this$static.allItems);
}

function $close(this$static){
  if (this$static.parentMenu) {
    $hide_0(this$static.parentMenu.popup, false);
    ($clinit_35() , this$static.parentMenu.element_0).focus();
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

function $doItemAction(this$static, item, fireCommand, focus_0){
  var cmd;
  $selectItem(this$static, item);
  if (item) {
    if (fireCommand && !!item.command) {
      $closeAllParents(this$static);
      cmd = item.command;
      addCommand(cmd);
      if (this$static.shownChildMenu) {
        $onHide(this$static.shownChildMenu, focus_0);
        $hide_0(this$static.popup, false);
        this$static.shownChildMenu = null;
        $selectItem(this$static, null);
      }
    }
     else if (item.subMenu) {
      if (!this$static.shownChildMenu) {
        $openPopup(this$static, item);
      }
       else if (item.subMenu != this$static.shownChildMenu) {
        $onHide(this$static.shownChildMenu, focus_0);
        $hide_0(this$static.popup, false);
        $openPopup(this$static, item);
      }
       else if (fireCommand && !this$static.autoOpen) {
        $onHide(this$static.shownChildMenu, focus_0);
        $hide_0(this$static.popup, false);
        this$static.shownChildMenu = null;
        $selectItem(this$static, item);
      }
    }
     else if (this$static.autoOpen && !!this$static.shownChildMenu) {
      $onHide(this$static.shownChildMenu, focus_0);
      $hide_0(this$static.popup, false);
      this$static.shownChildMenu = null;
    }
  }
}

function $findItem(this$static, hItem){
  var item, item$iterator;
  for (item$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.items); item$iterator.i < item$iterator.this$0.size_0();) {
    item = dynamicCast($next_5(item$iterator), 75);
    if ($isOrHasChild_0(($clinit_116() , item.element_0), hItem)) {
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

function $init_4(this$static, vertical, subMenuIcon){
  var outer_0, table, tr;
  this$static.subMenuIcon = subMenuIcon;
  table = ($clinit_116() , $doc).createElement('table');
  this$static.body_0 = $doc.createElement('tbody');
  table.appendChild(this$static.body_0);
  if (!vertical) {
    tr = $doc.createElement('tr');
    this$static.body_0.appendChild(tr);
  }
  this$static.vertical = vertical;
  outer_0 = $createFocusable(($clinit_35() , impl));
  outer_0.appendChild(table);
  this$static.element_0 = outer_0;
  this$static.element_0.setAttribute('role', 'menubar');
  $sinkEvents(this$static, 2225);
  this$static.element_0['className'] = 'gwt-MenuBar';
  vertical?$addStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-vertical'):$addStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-horizontal');
  this$static.element_0.style['outline'] = '0px';
  this$static.element_0.setAttribute('hideFocus', 'true');
}

function $insertItem_1(this$static, item, beforeIndex){
  var i, itemsIndex;
  if (beforeIndex < 0 || beforeIndex > this$static.allItems.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
  $add_12(this$static.allItems, beforeIndex, item);
  itemsIndex = 0;
  for (i = 0; i < beforeIndex; ++i) {
    instanceOf($get_3(this$static.allItems, i), 75) && ++itemsIndex;
  }
  $add_12(this$static.items, itemsIndex, item);
  $addItemElement(this$static, beforeIndex, item.element_0);
  item.parentMenu = this$static;
  $setSelectionStyle(item, false);
  $updateSubmenuIcon(this$static, item);
  return item;
}

function $itemOver(this$static, item, focus_0){
  if (!item) {
    if (!!this$static.selectedItem && this$static.shownChildMenu == this$static.selectedItem.subMenu) {
      return;
    }
  }
  $selectItem(this$static, item);
  focus_0 && (($clinit_35() , this$static.element_0).focus() , undefined);
  !!item && (!!this$static.shownChildMenu || !!this$static.parentMenu || this$static.autoOpen) && $doItemAction(this$static, item, false, true);
}

function $moveSelectionDown(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  if (this$static.vertical) {
    $selectNextItem(this$static);
  }
   else {
    if (!!this$static.selectedItem.subMenu && this$static.selectedItem.subMenu.items.size != 0 && (!this$static.shownChildMenu || !this$static.shownChildMenu.selectedItem)) {
      !this$static.shownChildMenu && $doItemAction(this$static, this$static.selectedItem, false, true);
      ($clinit_35() , this$static.selectedItem.subMenu.element_0).focus();
    }
     else 
      !!this$static.parentMenu && (this$static.parentMenu.vertical?$selectNextItem(this$static.parentMenu):$moveSelectionDown(this$static.parentMenu));
  }
}

function $moveSelectionUp(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  !this$static.shownChildMenu && this$static.vertical?$selectPrevItem(this$static):!!this$static.parentMenu && this$static.parentMenu.vertical?$selectPrevItem(this$static.parentMenu):$close(this$static);
}

function $moveToNextItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  if (this$static.vertical) {
    if (!!this$static.selectedItem.subMenu && this$static.selectedItem.subMenu.items.size != 0 && (!this$static.shownChildMenu || !this$static.shownChildMenu.selectedItem)) {
      !this$static.shownChildMenu && $doItemAction(this$static, this$static.selectedItem, false, true);
      ($clinit_35() , this$static.selectedItem.subMenu.element_0).focus();
    }
     else 
      !!this$static.parentMenu && (this$static.parentMenu.vertical?$moveToNextItem(this$static.parentMenu):$selectNextItem(this$static.parentMenu));
  }
   else {
    $selectNextItem(this$static);
  }
}

function $moveToPrevItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  this$static.vertical?!!this$static.parentMenu && !this$static.parentMenu.vertical?$selectPrevItem(this$static.parentMenu):$close(this$static):$selectPrevItem(this$static);
}

function $onHide(this$static, focus_0){
  if (this$static.shownChildMenu) {
    $onHide(this$static.shownChildMenu, focus_0);
    $hide_0(this$static.popup, false);
    focus_0 && (($clinit_35() , this$static.element_0).focus() , undefined);
  }
}

function $onPopupClosed(this$static, autoClosed){
  autoClosed && $closeAllParents(this$static);
  $onHide(this$static, !autoClosed);
  fire_1(this$static, false);
  this$static.shownChildMenu = null;
  this$static.popup = null;
  !!this$static.parentMenu && !!this$static.parentMenu.popup && (this$static.parentMenu.popup.previewAllNativeEvents = true , undefined);
}

function $openPopup(this$static, item){
  var primaryStyleName;
  !!this$static.parentMenu && !!this$static.parentMenu.popup && (this$static.parentMenu.popup.previewAllNativeEvents = false , undefined);
  this$static.popup = $MenuBar$1(new MenuBar$1, true, false, 'menuPopup', this$static, item);
  this$static.popup.animType = ($clinit_330() , ONE_WAY_CORNER);
  this$static.popup.isAnimationEnabled = this$static.isAnimationEnabled;
  this$static.popup.getStyleElement()['className'] = 'gwt-MenuBarPopup';
  primaryStyleName = getStylePrimaryName(this$static.element_0);
  !$equals_1('gwt-MenuBar', primaryStyleName) && $addStyleName(this$static.popup, primaryStyleName + 'Popup');
  $addHandler(this$static.popup, $ListenerWrapper$WrappedPopupListener(new ListenerWrapper$WrappedPopupListener, this$static), TYPE_12?TYPE_12:(TYPE_12 = $GwtEvent$Type(new GwtEvent$Type)));
  this$static.shownChildMenu = item.subMenu;
  item.subMenu.parentMenu = this$static;
  $setPopupPositionAndShow(this$static.popup, $MenuBar$2(new MenuBar$2, this$static, item));
}

function $selectFirstItemIfNoneSelected(this$static){
  var nextItem;
  if (!this$static.selectedItem) {
    if (this$static.items.size > 0) {
      nextItem = dynamicCast($get_3(this$static.items, 0), 75);
      $selectItem(this$static, nextItem);
    }
    return true;
  }
  return false;
}

function $selectItem(this$static, item){
  var td, tr, parent_0, parent_1;
  if (item == this$static.selectedItem) {
    return;
  }
  if (this$static.selectedItem) {
    $setSelectionStyle(this$static.selectedItem, false);
    if (this$static.vertical) {
      tr = (parent_0 = ($clinit_116() , this$static.selectedItem.element_0).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
      if ($getChildCount(tr) == 2) {
        td = $getChild(tr, 1);
        setStyleName(td, 'subMenuIcon-selected', false);
      }
    }
  }
  if (item) {
    $setSelectionStyle(item, true);
    if (this$static.vertical) {
      tr = (parent_1 = ($clinit_116() , item.element_0).parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1);
      if ($getChildCount(tr) == 2) {
        td = $getChild(tr, 1);
        setStyleName(td, 'subMenuIcon-selected', true);
      }
    }
    this$static.element_0.setAttribute('aria-activedescendant', ($clinit_116() , item.element_0).getAttribute('id') || '');
  }
  this$static.selectedItem = item;
}

function $selectNextItem(this$static){
  var index, itemToBeSelected;
  if (!this$static.selectedItem) {
    return;
  }
  index = $indexOf_2(this$static.items, this$static.selectedItem, 0);
  index < this$static.items.size - 1?(itemToBeSelected = dynamicCast($get_3(this$static.items, index + 1), 75)):(itemToBeSelected = dynamicCast($get_3(this$static.items, 0), 75));
  $selectItem(this$static, itemToBeSelected);
  !!this$static.shownChildMenu && $doItemAction(this$static, itemToBeSelected, false, true);
}

function $selectPrevItem(this$static){
  var index, itemToBeSelected;
  if (!this$static.selectedItem) {
    return;
  }
  index = $indexOf_2(this$static.items, this$static.selectedItem, 0);
  index > 0?(itemToBeSelected = dynamicCast($get_3(this$static.items, index - 1), 75)):(itemToBeSelected = dynamicCast($get_3(this$static.items, this$static.items.size - 1), 75));
  $selectItem(this$static, itemToBeSelected);
  !!this$static.shownChildMenu && $doItemAction(this$static, itemToBeSelected, false, true);
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
    tdCount == 2 && tr.removeChild($getChild(tr, 1));
    item.element_0['colSpan'] = 2;
  }
   else if (tdCount == 1) {
    item.element_0['colSpan'] = 1;
    td = ($clinit_116() , $doc).createElement('td');
    td['vAlign'] = 'middle';
    td.innerHTML = $getHTML_1(this$static.subMenuIcon) || '';
    td['className'] = 'subMenuIcon';
    tr.appendChild(td);
  }
}

function getClass_207(){
  return Lcom_google_gwt_user_client_ui_MenuBar_2_classLit;
}

function onBrowserEvent_4(event_0){
  var item, keyCode;
  item = $findItem(this, ($clinit_116() , event_0).target);
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      {
        ($clinit_35() , this.element_0).focus();
        !!item && $doItemAction(this, item, true, true);
        break;
      }

    case 16:
      {
        !!item && $itemOver(this, item, true);
        break;
      }

    case 32:
      {
        !!item && $itemOver(this, null, true);
        break;
      }

    case 2048:
      {
        $selectFirstItemIfNoneSelected(this);
        break;
      }

    case 128:
      {
        keyCode = event_0.which || event_0.keyCode || 0;
        switch (keyCode) {
          case 37:
            {
              $clinit_221();
              $moveToPrevItem(this);
            }

            event_0.cancelBubble = true;
            event_0.preventDefault();
            break;
          case 39:
            {
              $clinit_221();
              $moveToNextItem(this);
            }

            event_0.cancelBubble = true;
            event_0.preventDefault();
            break;
          case 38:
            $moveSelectionUp(this);
            event_0.cancelBubble = true;
            event_0.preventDefault();
            break;
          case 40:
            $moveSelectionDown(this);
            event_0.cancelBubble = true;
            event_0.preventDefault();
            break;
          case 27:
            $closeAllParents(this);
            !this.parentMenu && !!this.popup && $hide_0(this.popup, false);
            event_0.cancelBubble = true;
            event_0.preventDefault();
            break;
          case 13:
            if (!$selectFirstItemIfNoneSelected(this)) {
              $doItemAction(this, this.selectedItem, true, true);
              event_0.cancelBubble = true;
              event_0.preventDefault();
            }

        }
        break;
      }

  }
  $onBrowserEvent(this, event_0);
}

function onDetach_4(){
  !!this.popup && $hide_0(this.popup, false);
  $onDetach(this);
}

function MenuBar(){
}

_ = MenuBar.prototype = new Widget;
_.getClass$ = getClass_207;
_.onBrowserEvent = onBrowserEvent_4;
_.onDetach = onDetach_4;
_.typeId$ = 136;
_.autoOpen = false;
_.body_0 = null;
_.isAnimationEnabled = false;
_.parentMenu = null;
_.popup = null;
_.selectedItem = null;
_.shownChildMenu = null;
_.subMenuIcon = null;
_.vertical = false;
function $clinit_322(){
  $clinit_322 = nullMethod;
  $clinit_47();
}

function $MenuBar$1(this$static, $anonymous0, $anonymous1, $anonymous2, this$0, val$item){
  $clinit_322();
  this$static.this$0 = this$0;
  this$static.val$item = val$item;
  $DecoratedPopupPanel(this$static, $anonymous0, $anonymous1, $anonymous2);
  $setWidget_1(this$static, this$static.val$item.subMenu);
  this$static.previewAllNativeEvents = true;
  $selectItem(this$static.val$item.subMenu, null);
  return this$static;
}

function getClass_208(){
  return Lcom_google_gwt_user_client_ui_MenuBar$1_2_classLit;
}

function onPreviewNativeEvent_1(event_0){
  var parentMenuElement, target;
  if (!event_0.isCanceled) {
    switch ($eventGetTypeInt(($clinit_116() , event_0.nativeEvent).type)) {
      case 4:
        target = event_0.nativeEvent.target;
        parentMenuElement = this.val$item.parentMenu.element_0;
        if (parentMenuElement === target || !!(parentMenuElement.compareDocumentPosition(target) & 16)) {
          event_0.isCanceled = true;
          return;
        }

        event_0.isCanceled && $selectItem(this.this$0, null);
        return;
    }
  }
}

function MenuBar$1(){
}

_ = MenuBar$1.prototype = new DecoratedPopupPanel;
_.getClass$ = getClass_208;
_.onPreviewNativeEvent = onPreviewNativeEvent_1;
_.typeId$ = 137;
_.this$0 = null;
_.val$item = null;
function $MenuBar$2(this$static, this$0, val$item){
  this$static.this$0 = this$0;
  this$static.val$item = val$item;
  return this$static;
}

function $setPosition(this$static){
  $clinit_221();
  this$static.this$0.vertical?$setPopupPosition(this$static.this$0.popup, $getAbsoluteLeft_0(($clinit_116() , this$static.this$0.element_0)) + (parseInt(this$static.this$0.element_0['offsetWidth']) || 0) - 1, $getAbsoluteTop_0(this$static.val$item.element_0)):$setPopupPosition(this$static.this$0.popup, $getAbsoluteLeft_0(($clinit_116() , this$static.val$item.element_0)), $getAbsoluteTop_0(this$static.this$0.element_0) + (parseInt(this$static.this$0.element_0['offsetHeight']) || 0) - 1);
}

function getClass_209(){
  return Lcom_google_gwt_user_client_ui_MenuBar$2_2_classLit;
}

function MenuBar$2(){
}

_ = MenuBar$2.prototype = new Object_0;
_.getClass$ = getClass_209;
_.typeId$ = 0;
_.this$0 = null;
_.val$item = null;
function $MenuItem(this$static, text, cmd){
  $MenuItem_1(this$static, text, false);
  this$static.command = cmd;
  return this$static;
}

function $MenuItem_0(this$static, text, subMenu){
  $MenuItem_1(this$static, text, false);
  this$static.subMenu = subMenu;
  !!this$static.parentMenu && $updateSubmenuIcon(this$static.parentMenu, this$static);
  ($clinit_35() , subMenu.element_0).tabIndex = -1;
  this$static.element_0.setAttribute('aria-haspopup', 'true');
  return this$static;
}

function $MenuItem_1(this$static, text, asHTML){
  this$static.element_0 = ($clinit_116() , $doc).createElement('td');
  $setSelectionStyle(this$static, false);
  asHTML?(this$static.element_0.innerHTML = text || '' , undefined):(this$static.element_0.textContent = text || '' , undefined);
  this$static.element_0['className'] = 'gwt-MenuItem';
  this$static.element_0.setAttribute('id', $createUniqueId($doc));
  this$static.element_0.setAttribute('role', 'menuitem');
  return this$static;
}

function $setSelectionStyle(this$static, selected){
  selected?$addStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected'):$removeStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected');
}

function getClass_210(){
  return Lcom_google_gwt_user_client_ui_MenuItem_2_classLit;
}

function setText_8(text){
  ($clinit_116() , this.element_0).textContent = text || '';
}

function MenuItem(){
}

_ = MenuItem.prototype = new UIObject;
_.getClass$ = getClass_210;
_.setText_0 = setText_8;
_.typeId$ = 138;
_.command = null;
_.parentMenu = null;
_.subMenu = null;
function $onResize(){
  var height, width, winHeight, winWidth;
  null.nullMethod();
  winWidth = $getClientWidth_0($doc);
  winHeight = $getClientHeight_0($doc);
  null.nullMethod($clinit_126());
  null.nullMethod(0 + ($clinit_137() , 'px'));
  null.nullMethod('0px');
  width = $getScrollWidth_0($doc);
  height = $getScrollHeight_0($doc);
  null.nullMethod((width > winWidth?width:winWidth) + 'px');
  null.nullMethod((height > winHeight?height:winHeight) + 'px');
  null.nullMethod($clinit_126());
}

function getClass_211(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit;
}

function onResize_1(event_0){
  $onResize();
}

function PopupPanel$1(){
}

_ = PopupPanel$1.prototype = new Object_0;
_.getClass$ = getClass_211;
_.onResize = onResize_1;
_.typeId$ = 139;
function $PopupPanel$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_212(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit;
}

function PopupPanel$3(){
}

_ = PopupPanel$3.prototype = new Object_0;
_.getClass$ = getClass_212;
_.typeId$ = 140;
_.this$0 = null;
function $PopupPanel$4(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_213(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit;
}

function onValueChange_5(event_0){
  this.this$0.autoHideOnHistoryEvents && this.this$0.hide_0();
}

function PopupPanel$4(){
}

_ = PopupPanel$4.prototype = new Object_0;
_.getClass$ = getClass_213;
_.onValueChange = onValueChange_5;
_.typeId$ = 141;
_.this$0 = null;
function $clinit_330(){
  $clinit_330 = nullMethod;
  CENTER_0 = $PopupPanel$AnimationType(new PopupPanel$AnimationType, 'CENTER', 0);
  ONE_WAY_CORNER = $PopupPanel$AnimationType(new PopupPanel$AnimationType, 'ONE_WAY_CORNER', 1);
  ROLL_DOWN = $PopupPanel$AnimationType(new PopupPanel$AnimationType, 'ROLL_DOWN', 2);
}

function $PopupPanel$AnimationType(this$static, enum$name, enum$ordinal){
  $clinit_330();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_214(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit;
}

function values_4(){
  $clinit_330();
  return initValues(_3Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit, 219, 54, [CENTER_0, ONE_WAY_CORNER, ROLL_DOWN]);
}

function PopupPanel$AnimationType(){
}

_ = PopupPanel$AnimationType.prototype = new Enum;
_.getClass$ = getClass_214;
_.typeId$ = 142;
var CENTER_0, ONE_WAY_CORNER, ROLL_DOWN;
function $PopupPanel$ResizeAnimation(this$static, panel){
  this$static.curPanel = panel;
  return this$static;
}

function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $doc.body.appendChild(this$static.curPanel.glass);
      $clinit_4();
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $doc.body.removeChild(this$static.curPanel.glass);
    $clinit_4();
    $removeHandler(this$static.resizeRegistration);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    $remove_1(($clinit_341() , get_0(null)), this$static.curPanel);
    $clinit_4();
  }
  $setClip(($clinit_4() , this$static.curPanel.element_0), 'rect(auto, auto, auto, auto)');
  this$static.curPanel.element_0.style['overflow'] = 'visible';
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    this$static.curPanel.element_0.style['position'] = 'absolute';
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_6(($clinit_341() , get_0(null)), this$static.curPanel);
    $clinit_4();
  }
   else {
    $remove_1(($clinit_341() , get_0(null)), this$static.curPanel);
    $clinit_4();
  }
  this$static.curPanel.element_0.style['overflow'] = 'visible';
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width;
  !this$static.showing && (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = ~~Math.max(Math.min(progress * this$static.offsetHeight_0, 2147483647), -2147483648);
  width = ~~Math.max(Math.min(progress * this$static.offsetWidth_0, 2147483647), -2147483648);
  switch (this$static.curPanel.animType.ordinal) {
    case 2:
      right = this$static.offsetWidth_0;
      bottom = height;
      break;
    case 0:
      top_0 = this$static.offsetHeight_0 - height >> 1;
      left = this$static.offsetWidth_0 - width >> 1;
      right = left + width;
      bottom = top_0 + height;
      break;
    case 1:
      {
        $clinit_221();
      }

      right = left + width;
      bottom = top_0 + height;
  }
  $setClip(($clinit_4() , this$static.curPanel.element_0), 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState_0(this$static, showing){
  var animate;
  $cancel_0(this$static);
  animate = this$static.curPanel.isAnimationEnabled;
  this$static.curPanel.animType != ($clinit_330() , CENTER_0) && !showing && (animate = false);
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      this$static.curPanel.element_0.style['position'] = 'absolute';
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      $setClip(($clinit_4() , this$static.curPanel.element_0), 'rect(0px, 0px, 0px, 0px)');
      $add_6(($clinit_341() , get_0(null)), this$static.curPanel);
    }
    addCommand($PopupPanel$ResizeAnimation$1(new PopupPanel$ResizeAnimation$1, this$static));
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function getClass_215(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit;
}

function PopupPanel$ResizeAnimation(){
}

_ = PopupPanel$ResizeAnimation.prototype = new Animation;
_.getClass$ = getClass_215;
_.typeId$ = 143;
_.curPanel = null;
_.glassShowing = false;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = -1;
_.resizeRegistration = null;
_.showing = false;
function $PopupPanel$ResizeAnimation$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function execute_7(){
  $run(this.this$1, 200, (new Date).getTime());
}

function getClass_216(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit;
}

function PopupPanel$ResizeAnimation$1(){
}

_ = PopupPanel$ResizeAnimation$1.prototype = new Object_0;
_.execute = execute_7;
_.getClass$ = getClass_216;
_.typeId$ = 144;
_.this$1 = null;
function $clinit_334(){
  $clinit_334 = nullMethod;
  $clinit_279();
}

function $PushButton(this$static, upImage){
  $clinit_334();
  $CustomButton(this$static, upImage);
  this$static.element_0['className'] = 'gwt-PushButton';
  return this$static;
}

function getClass_217(){
  return Lcom_google_gwt_user_client_ui_PushButton_2_classLit;
}

function onClick_10(){
  false != this.isDown() && $toggleDown(this);
  $onClick_0(this);
}

function onClickCancel_0(){
  false != this.isDown() && $toggleDown(this);
}

function onClickStart_0(){
  true != this.isDown() && $toggleDown(this);
}

function PushButton(){
}

_ = PushButton.prototype = new CustomButton;
_.getClass$ = getClass_217;
_.onClick_0 = onClick_10;
_.onClickCancel = onClickCancel_0;
_.onClickStart = onClickStart_0;
_.typeId$ = 145;
function $clinit_335(){
  $clinit_335 = nullMethod;
  $clinit_14();
}

function $RichTextArea(this$static){
  $clinit_335();
  this$static.impl = $RichTextAreaImplMozilla(new RichTextAreaImplMozilla);
  $setElement_0(this$static, this$static.impl.elem);
  this$static.element_0['className'] = 'gwt-RichTextArea';
  this$static.impl.richTextWidget = this$static;
  return this$static;
}

function $getFormatter(this$static){
  if (this$static.impl) {
    return this$static.impl;
  }
  return null;
}

function getClass_218(){
  return Lcom_google_gwt_user_client_ui_RichTextArea_2_classLit;
}

function onAttach_3(){
  $onAttach(this);
  $initElement(this.impl);
}

function onDetach_5(){
  $onDetach(this);
  $uninitElement(this.impl);
}

function setText_9(text){
  $setText_10(this.impl, text);
}

function RichTextArea(){
}

_ = RichTextArea.prototype = new FocusWidget;
_.getClass$ = getClass_218;
_.onAttach = onAttach_3;
_.onDetach = onDetach_5;
_.setText_0 = setText_9;
_.typeId$ = 146;
function $clinit_338(){
  $clinit_338 = nullMethod;
  LARGE = $RichTextArea$FontSize(new RichTextArea$FontSize, 5);
  MEDIUM = $RichTextArea$FontSize(new RichTextArea$FontSize, 4);
  SMALL = $RichTextArea$FontSize(new RichTextArea$FontSize, 3);
  X_LARGE = $RichTextArea$FontSize(new RichTextArea$FontSize, 6);
  X_SMALL = $RichTextArea$FontSize(new RichTextArea$FontSize, 2);
  XX_LARGE = $RichTextArea$FontSize(new RichTextArea$FontSize, 7);
  XX_SMALL = $RichTextArea$FontSize(new RichTextArea$FontSize, 1);
}

function $RichTextArea$FontSize(this$static, number){
  $clinit_338();
  this$static.number = number;
  return this$static;
}

function getClass_219(){
  return Lcom_google_gwt_user_client_ui_RichTextArea$FontSize_2_classLit;
}

function toString_12(){
  return '' + this.number;
}

function RichTextArea$FontSize(){
}

_ = RichTextArea$FontSize.prototype = new Object_0;
_.getClass$ = getClass_219;
_.toString$ = toString_12;
_.typeId$ = 0;
_.number = 0;
var LARGE, MEDIUM, SMALL, XX_LARGE, XX_SMALL, X_LARGE, X_SMALL;
function $clinit_340(){
  $clinit_340 = nullMethod;
  CENTER_1 = $RichTextArea$Justification(new RichTextArea$Justification, 'Center');
  FULL = $RichTextArea$Justification(new RichTextArea$Justification, 'Full');
  LEFT = $RichTextArea$Justification(new RichTextArea$Justification, 'Left');
  RIGHT = $RichTextArea$Justification(new RichTextArea$Justification, 'Right');
}

function $RichTextArea$Justification(this$static, tag){
  $clinit_340();
  this$static.tag = tag;
  return this$static;
}

function getClass_220(){
  return Lcom_google_gwt_user_client_ui_RichTextArea$Justification_2_classLit;
}

function toString_13(){
  return 'Justify ' + this.tag;
}

function RichTextArea$Justification(){
}

_ = RichTextArea$Justification.prototype = new Object_0;
_.getClass$ = getClass_220;
_.toString$ = toString_13;
_.typeId$ = 0;
_.tag = null;
var CENTER_1, FULL, LEFT, RIGHT;
function $clinit_341(){
  $clinit_341 = nullMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = $HashMap(new HashMap);
  widgetsToDetach = $HashSet(new HashSet);
}

function $RootPanel(this$static, elem){
  $clinit_341();
  this$static.children = $WidgetCollection(new WidgetCollection, this$static);
  this$static.element_0 = elem;
  $onAttach(this$static);
  return this$static;
}

function detachNow(widget){
  $clinit_341();
  try {
    widget.onDetach();
  }
   finally {
    $remove_6(widgetsToDetach.map, widget) != null;
  }
}

function detachWidgets(){
  $clinit_341();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $clearImpl(widgetsToDetach.map);
    $clearImpl(rootPanels);
  }
}

function get_0(id){
  $clinit_341();
  var elem, rp;
  rp = dynamicCast($get_2(rootPanels, id), 76);
  elem = null;
  if (id != null) {
    if (!(elem = $doc.getElementById(id))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || rp.element_0 == elem) {
      return rp;
    }
  }
  if (rootPanels.size == 0) {
    addCloseHandler(new RootPanel$2);
    $clinit_221();
  }
  !elem?(rp = $RootPanel$DefaultRootPanel(new RootPanel$DefaultRootPanel)):(rp = $RootPanel(new RootPanel, elem));
  $put_0(rootPanels, id, rp);
  $add_13(widgetsToDetach, rp);
  return rp;
}

function getClass_221(){
  return Lcom_google_gwt_user_client_ui_RootPanel_2_classLit;
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel;
_.getClass$ = getClass_221;
_.typeId$ = 147;
var maybeDetachCommand, rootPanels, widgetsToDetach;
function execute_8(w){
  w.isAttached() && w.onDetach();
}

function getClass_222(){
  return Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit;
}

function RootPanel$1(){
}

_ = RootPanel$1.prototype = new Object_0;
_.execute_1 = execute_8;
_.getClass$ = getClass_222;
_.typeId$ = 0;
function getClass_223(){
  return Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit;
}

function onClose_1(closeEvent){
  detachWidgets();
}

function RootPanel$2(){
}

_ = RootPanel$2.prototype = new Object_0;
_.getClass$ = getClass_223;
_.onClose = onClose_1;
_.typeId$ = 148;
function $clinit_344(){
  $clinit_344 = nullMethod;
  $clinit_341();
}

function $RootPanel$DefaultRootPanel(this$static){
  $clinit_344();
  $RootPanel(this$static, $doc.body);
  return this$static;
}

function getClass_224(){
  return Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit;
}

function setWidgetPositionImpl_0(w, left, top_0){
  var style, style_0;
  left -= (style = $wnd.getComputedStyle(($clinit_116() , $doc).documentElement, '') , parseInt(style.marginLeft) + parseInt(style.borderLeftWidth));
  top_0 -= (style_0 = $wnd.getComputedStyle($doc.documentElement, '') , parseInt(style_0.marginTop) + parseInt(style_0.borderTopWidth));
  $setWidgetPositionImpl(w, left, top_0);
}

function RootPanel$DefaultRootPanel(){
}

_ = RootPanel$DefaultRootPanel.prototype = new RootPanel;
_.getClass$ = getClass_224;
_.setWidgetPositionImpl = setWidgetPositionImpl_0;
_.typeId$ = 149;
function $SimplePanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  this$static.hasElement = !!this$static.this$0.widget;
  return this$static;
}

function $next_1(this$static){
  if (!this$static.hasElement || !this$static.this$0.widget) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$0.widget;
}

function getClass_225(){
  return Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit;
}

function hasNext_1(){
  return this.hasElement;
}

function next_2(){
  return $next_1(this);
}

function remove_10(){
  !!this.returned && this.this$0.remove(this.returned);
}

function SimplePanel$1(){
}

_ = SimplePanel$1.prototype = new Object_0;
_.getClass$ = getClass_225;
_.hasNext = hasNext_1;
_.next_0 = next_2;
_.remove_0 = remove_10;
_.typeId$ = 0;
_.returned = null;
_.this$0 = null;
function $clinit_355(){
  $clinit_355 = nullMethod;
  $clinit_279();
}

function $ToggleButton(this$static, upImage){
  $clinit_355();
  $CustomButton(this$static, upImage);
  this$static.element_0['className'] = 'gwt-ToggleButton';
  return this$static;
}

function getClass_226(){
  return Lcom_google_gwt_user_client_ui_ToggleButton_2_classLit;
}

function isDown_0(){
  return (1 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) > 0;
}

function onClick_11(){
  $toggleDown(this);
  $onClick_0(this);
}

function ToggleButton(){
}

_ = ToggleButton.prototype = new CustomButton;
_.getClass$ = getClass_226;
_.isDown = isDown_0;
_.onClick_0 = onClick_11;
_.typeId$ = 150;
function $WidgetCollection(this$static, parent_0){
  this$static.parent_0 = parent_0;
  this$static.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 221, 2, 4, 0);
  return this$static;
}

function $add_10(this$static, w){
  $insert_0(this$static, w, this$static.size);
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

function $insert_0(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
  if (this$static.size == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 221, 2, this$static.array.length * 2, 0);
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
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
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
    throw $NoSuchElementException(new NoSuchElementException);
  }
  $remove_4(this$static, index);
}

function getClass_227(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit;
}

function iterator_4(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this);
}

function WidgetCollection(){
}

_ = WidgetCollection.prototype = new Object_0;
_.getClass$ = getClass_227;
_.iterator_0 = iterator_4;
_.typeId$ = 151;
_.array = null;
_.parent_0 = null;
_.size = 0;
function $WidgetCollection$WidgetIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $hasNext_1(this$static){
  return this$static.index_0 < this$static.this$0.size - 1;
}

function $next_2(this$static){
  if (this$static.index_0 >= this$static.this$0.size) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  return this$static.this$0.array[++this$static.index_0];
}

function getClass_228(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit;
}

function hasNext_2(){
  return this.index_0 < this.this$0.size - 1;
}

function next_3(){
  return $next_2(this);
}

function remove_11(){
  if (this.index_0 < 0 || this.index_0 >= this.this$0.size) {
    throw $IllegalStateException(new IllegalStateException);
  }
  this.this$0.parent_0.remove(this.this$0.array[this.index_0--]);
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator.prototype = new Object_0;
_.getClass$ = getClass_228;
_.hasNext = hasNext_2;
_.next_0 = next_3;
_.remove_0 = remove_11;
_.typeId$ = 0;
_.index_0 = -1;
_.this$0 = null;
function $menuBarSubMenuIcon(){
  !menuBarSubMenuIcon && (menuBarSubMenuIcon = $ImageResourcePrototype(new ImageResourcePrototype, ($clinit_221() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAYAAAD6reaeAAAAI0lEQVR42mNgYGD4z4AF/Mcm8R+bxH9sEv+xSRBUSdh2FAAAXN8Y6EbBLKwAAAAASUVORK5CYII='), 0, 0, 5, 9));
  return menuBarSubMenuIcon;
}

var menuBarSubMenuIcon = null;
function $getHTML_0(url, left, top_0, width, height){
  var clippedImgHtml, style;
  style = 'width: ' + width + 'px; height: ' + height + 'px; background: url(' + url + ') no-repeat ' + -left + 'px ' + -top_0 + 'px';
  clippedImgHtml = "<img src='" + $moduleBase + "clear.cache.gif' style='" + style + "' border='0'>";
  return clippedImgHtml;
}

function $ClippedImagePrototype(this$static, url, left, top_0, width, height){
  this$static.url = url;
  this$static.left_0 = left;
  this$static.top_0 = top_0;
  this$static.width_0 = width;
  this$static.height_0 = height;
  return this$static;
}

function $getHTML_1(this$static){
  return $getHTML_0(this$static.url, this$static.left_0, this$static.top_0, this$static.width_0, this$static.height_0);
}

function getClass_229(){
  return Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit;
}

function ClippedImagePrototype(){
}

_ = ClippedImagePrototype.prototype = new AbstractImagePrototype;
_.getClass$ = getClass_229;
_.typeId$ = 0;
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.url = null;
_.width_0 = 0;
function $clinit_361(){
  $clinit_361 = nullMethod;
  implPanel = $FocusImplStandard(new FocusImplStandard);
  implPanel?($clinit_361() , new FocusImpl):implPanel;
}

function getClass_230(){
  return Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit;
}

function FocusImpl(){
}

_ = FocusImpl.prototype = new Object_0;
_.getClass$ = getClass_230;
_.typeId$ = 0;
var implPanel;
function $clinit_362(){
  $clinit_362 = nullMethod;
  $clinit_361();
}

function $FocusImplStandard(this$static){
  $clinit_362();
  this$static.focusHandler = $createFocusHandler();
  return this$static;
}

function $createFocusHandler(){
  return function(evt){
    var div = this.parentNode;
    div.onfocus && $wnd.setTimeout(function(){
      div.focus();
    }
    , 0);
  }
  ;
}

function $createFocusable(this$static){
  var div = $doc.createElement('div');
  div.tabIndex = 0;
  var input = $doc.createElement('input');
  input.type = 'text';
  input.tabIndex = -1;
  input.style.opacity = 0;
  input.style.height = '1px';
  input.style.width = '1px';
  input.style.zIndex = -1;
  input.style.overflow = 'hidden';
  input.style.position = 'absolute';
  input.addEventListener('focus', this$static.focusHandler, false);
  div.appendChild(input);
  return div;
}

function getClass_231(){
  return Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit;
}

function FocusImplStandard(){
}

_ = FocusImplStandard.prototype = new FocusImpl;
_.getClass$ = getClass_231;
_.typeId$ = 0;
function $clinit_364(){
  $clinit_364 = nullMethod;
  isFF2Mac = isFF2Mac_0();
}

function $createElement_1(){
  var outerElem;
  outerElem = ($clinit_116() , $doc).createElement('div');
  if (isFF2Mac) {
    outerElem.innerHTML = '<div><\/div>';
    addCommand($PopupImplMozilla$1(new PopupImplMozilla$1, outerElem));
  }
  return outerElem;
}

function $getContainerElement_2(outerElem){
  return isFF2Mac?$getFirstChildElement(($clinit_116() , outerElem)):outerElem;
}

function $getStyleElement_1(outerElem){
  var parent_0;
  return isFF2Mac?outerElem:(parent_0 = ($clinit_116() , outerElem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
}

function $setClip(popup, rect){
  popup.style['clip'] = rect;
  popup.style['display'] = ($clinit_126() , 'none');
  popup.style['display'] = '';
}

function isFF2Mac_0(){
  function makeVersion(result){
    return parseInt(result[1]) * 1000 + parseInt(result[2]);
  }

  var ua = navigator.userAgent;
  if (ua.indexOf('Macintosh') != -1) {
    var result_0 = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
    if (result_0 && result_0.length == 3) {
      if (makeVersion(result_0) <= 1008) {
        return true;
      }
    }
  }
  return false;
}

var isFF2Mac;
function $PopupImplMozilla$1(this$static, val$outerElem){
  this$static.val$outerElem = val$outerElem;
  return this$static;
}

function execute_9(){
  this.val$outerElem.style['overflow'] = ($clinit_132() , 'auto');
}

function getClass_232(){
  return Lcom_google_gwt_user_client_ui_impl_PopupImplMozilla$1_2_classLit;
}

function PopupImplMozilla$1(){
}

_ = PopupImplMozilla$1.prototype = new Object_0;
_.execute = execute_9;
_.getClass$ = getClass_232;
_.typeId$ = 152;
_.val$outerElem = null;
function getClass_233(){
  return Lcom_google_gwt_user_client_ui_impl_RichTextAreaImpl_2_classLit;
}

function RichTextAreaImpl(){
}

_ = RichTextAreaImpl.prototype = new Object_0;
_.getClass$ = getClass_233;
_.typeId$ = 0;
_.elem = null;
_.richTextWidget = null;
function $execCommand(this$static, cmd, param){
  var $e0;
  if (this$static.isReady) {
    this$static.elem.contentWindow.focus();
    try {
      this$static.elem.contentWindow.document.execCommand(cmd, false, param);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 77))
        throw $e0;
    }
  }
}

function $getHTML_2(this$static){
  return !this$static.beforeInitPlaceholder?this$static.elem.contentWindow.document.body.innerHTML:($clinit_116() , this$static.beforeInitPlaceholder).innerHTML;
}

function $hookEvents(this$static){
  var elem = this$static.elem;
  var wnd = elem.contentWindow;
  elem.__gwt_handler = $entry(function(evt){
    elem.__listener && elem.__listener.onBrowserEvent(evt);
  }
  );
  elem.__gwt_focusHandler = function(evt){
    if (elem.__gwt_isFocused) {
      return;
    }
    elem.__gwt_isFocused = true;
    elem.__gwt_handler(evt);
  }
  ;
  elem.__gwt_blurHandler = function(evt){
    if (!elem.__gwt_isFocused) {
      return;
    }
    elem.__gwt_isFocused = false;
    elem.__gwt_handler(evt);
  }
  ;
  wnd.addEventListener('keydown', elem.__gwt_handler, true);
  wnd.addEventListener('keyup', elem.__gwt_handler, true);
  wnd.addEventListener('keypress', elem.__gwt_handler, true);
  wnd.addEventListener('mousedown', elem.__gwt_handler, true);
  wnd.addEventListener('mouseup', elem.__gwt_handler, true);
  wnd.addEventListener('mousemove', elem.__gwt_handler, true);
  wnd.addEventListener('mouseover', elem.__gwt_handler, true);
  wnd.addEventListener('mouseout', elem.__gwt_handler, true);
  wnd.addEventListener('click', elem.__gwt_handler, true);
  wnd.addEventListener('focus', elem.__gwt_focusHandler, true);
  wnd.addEventListener('blur', elem.__gwt_blurHandler, true);
}

function $queryCommandState(this$static, cmd){
  var $e0;
  if (this$static.isReady) {
    this$static.elem.contentWindow.focus();
    try {
      return !!this$static.elem.contentWindow.document.queryCommandState(cmd);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 77)) {
        return false;
      }
       else 
        throw $e0;
    }
  }
  return false;
}

function $setHTML_6(this$static, html){
  !this$static.beforeInitPlaceholder?(this$static.elem.contentWindow.document.body.innerHTML = html , undefined):(this$static.beforeInitPlaceholder.innerHTML = html || '' , undefined);
}

function $setHTMLImpl(this$static, html){
  this$static.elem.contentWindow.document.body.innerHTML = html;
}

function $setJustification(this$static, justification){
  justification == ($clinit_340() , CENTER_1)?$execCommand(this$static, 'JustifyCenter', null):justification == FULL?$execCommand(this$static, 'JustifyFull', null):justification == LEFT?$execCommand(this$static, 'JustifyLeft', null):justification == RIGHT && $execCommand(this$static, 'JustifyRight', null);
}

function $setText_10(this$static, text){
  !this$static.beforeInitPlaceholder?(this$static.elem.contentWindow.document.body.textContent = text , undefined):(($clinit_116() , this$static.beforeInitPlaceholder).textContent = text || '' , undefined);
}

function $uninitElement(this$static){
  var html, elem, wnd;
  this$static.isReady = false;
  if (this$static.initializing) {
    this$static.initializing = false;
    return;
  }
  elem = this$static.elem;
  wnd = elem.contentWindow;
  wnd.removeEventListener('keydown', elem.__gwt_handler, true);
  wnd.removeEventListener('keyup', elem.__gwt_handler, true);
  wnd.removeEventListener('keypress', elem.__gwt_handler, true);
  wnd.removeEventListener('mousedown', elem.__gwt_handler, true);
  wnd.removeEventListener('mouseup', elem.__gwt_handler, true);
  wnd.removeEventListener('mousemove', elem.__gwt_handler, true);
  wnd.removeEventListener('mouseover', elem.__gwt_handler, true);
  wnd.removeEventListener('mouseout', elem.__gwt_handler, true);
  wnd.removeEventListener('click', elem.__gwt_handler, true);
  wnd.removeEventListener('focus', elem.__gwt_focusHandler, true);
  wnd.removeEventListener('blur', elem.__gwt_blurHandler, true);
  elem.__gwt_handler = null;
  elem.__gwt_focusHandler = null;
  elem.__gwt_blurHandler = null;
  html = !this$static.beforeInitPlaceholder?this$static.elem.contentWindow.document.body.innerHTML:($clinit_116() , this$static.beforeInitPlaceholder).innerHTML;
  this$static.beforeInitPlaceholder = ($clinit_116() , $doc).createElement('div');
  this$static.beforeInitPlaceholder.innerHTML = html || '';
}

function getClass_234(){
  return Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplStandard_2_classLit;
}

function onElementInitialized(){
  if (!this.initializing) {
    return;
  }
  this.initializing = false;
  this.isReady = true;
  if (this.beforeInitPlaceholder) {
    $setHTMLImpl(this, ($clinit_116() , this.beforeInitPlaceholder).innerHTML);
    this.beforeInitPlaceholder = null;
  }
  $hookEvents(this);
  !!this.richTextWidget && fire_2(this.richTextWidget);
}

function RichTextAreaImplStandard(){
}

_ = RichTextAreaImplStandard.prototype = new RichTextAreaImpl;
_.getClass$ = getClass_234;
_.onElementInitialized = onElementInitialized;
_.typeId$ = 0;
_.initializing = false;
_.isReady = false;
function $RichTextAreaImplMozilla(this$static){
  this$static.elem = $doc.createElement('iframe');
  this$static.beforeInitPlaceholder = ($clinit_116() , $doc).createElement('div');
  return this$static;
}

function $initElement(this$static){
  var _this = this$static;
  var iframe = _this.elem;
  _this.initializing = true;
  iframe.onload = $entry(function(){
    iframe.onload = null;
    _this.onElementInitialized();
    iframe.contentWindow.onfocus = function(){
      iframe.contentWindow.onfocus = null;
      iframe.contentWindow.onmouseover = null;
      iframe.contentWindow.document.designMode = 'On';
    }
    ;
    iframe.contentWindow.onmouseover = function(){
      iframe.contentWindow.onfocus = null;
      iframe.contentWindow.onmouseover = null;
      iframe.contentWindow.document.designMode = 'On';
    }
    ;
  }
  );
}

function getClass_235(){
  return Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplMozilla_2_classLit;
}

function RichTextAreaImplMozilla(){
}

_ = RichTextAreaImplMozilla.prototype = new RichTextAreaImplStandard;
_.getClass$ = getClass_235;
_.typeId$ = 0;
function $ArithmeticException(this$static, explanation){
  $fillInStackTrace();
  this$static.detailMessage = explanation;
  return this$static;
}

function getClass_236(){
  return Ljava_lang_ArithmeticException_2_classLit;
}

function ArithmeticException(){
}

_ = ArithmeticException.prototype = new RuntimeException;
_.getClass$ = getClass_236;
_.typeId$ = 153;
function $ArrayStoreException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_237(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}

function ArrayStoreException(){
}

_ = ArrayStoreException.prototype = new RuntimeException;
_.getClass$ = getClass_237;
_.typeId$ = 154;
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
  clazz = new Class;
  clazz.typeName = packageName + className;
  clazz.modifiers = 4;
  return clazz;
}

function createForClass(packageName, className){
  var clazz;
  clazz = new Class;
  clazz.typeName = packageName + className;
  return clazz;
}

function createForEnum(packageName, className, enumConstantsFunc){
  var clazz;
  clazz = new Class;
  clazz.typeName = packageName + className;
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function getClass_238(){
  return Ljava_lang_Class_2_classLit;
}

function toString_14(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + this.typeName;
}

function Class(){
}

_ = Class.prototype = new Object_0;
_.getClass$ = getClass_238;
_.toString$ = toString_14;
_.typeId$ = 0;
_.modifiers = 0;
_.typeName = null;
function $ClassCastException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_239(){
  return Ljava_lang_ClassCastException_2_classLit;
}

function ClassCastException(){
}

_ = ClassCastException.prototype = new RuntimeException;
_.getClass$ = getClass_239;
_.typeId$ = 157;
function __parseAndValidateInt(s, radix, lowerBound, upperBound){
  var i, length_0, startIndex, toReturn;
  if (s == null) {
    throw $NumberFormatException(new NumberFormatException, 'null');
  }
  if (radix < 2 || radix > 36) {
    throw $NumberFormatException(new NumberFormatException, 'radix ' + radix + ' out of range');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && s.charCodeAt(0) == 45?1:0;
  for (i = startIndex; i < length_0; ++i) {
    if (digit(s.charCodeAt(i), radix) == -1) {
      throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, radix);
  if (isNaN(toReturn)) {
    throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
  }
   else if (toReturn < lowerBound || toReturn > upperBound) {
    throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
  }
  return toReturn;
}

function getClass_240(){
  return Ljava_lang_Number_2_classLit;
}

function Number_0(){
}

_ = Number_0.prototype = new Object_0;
_.getClass$ = getClass_240;
_.typeId$ = 158;
function $IllegalArgumentException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_241(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException.prototype = new RuntimeException;
_.getClass$ = getClass_241;
_.typeId$ = 159;
function $IllegalStateException(this$static){
  $fillInStackTrace();
  return this$static;
}

function $IllegalStateException_0(this$static, s){
  $fillInStackTrace();
  this$static.detailMessage = s;
  return this$static;
}

function getClass_242(){
  return Ljava_lang_IllegalStateException_2_classLit;
}

function IllegalStateException(){
}

_ = IllegalStateException.prototype = new RuntimeException;
_.getClass$ = getClass_242;
_.typeId$ = 160;
function $IndexOutOfBoundsException(this$static){
  $fillInStackTrace();
  return this$static;
}

function $IndexOutOfBoundsException_0(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_243(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException.prototype = new RuntimeException;
_.getClass$ = getClass_243;
_.typeId$ = 161;
function $Integer(this$static, value){
  this$static.value_0 = value;
  return this$static;
}

function equals_3(o){
  return o != null && canCast(o.typeId$, 60) && dynamicCast(o, 60).value_0 == this.value_0;
}

function getClass_244(){
  return Ljava_lang_Integer_2_classLit;
}

function hashCode_5(){
  return this.value_0;
}

function toPowerOfTwoString(value, shift){
  var bitMask, buf, bufSize, digits, pos;
  bufSize = ~~(32 / shift);
  bitMask = (1 << shift) - 1;
  buf = initDim(_3C_classLit, 200, -1, bufSize, 1);
  digits = ($clinit_390() , digits_0);
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

function toString_15(){
  return '' + this.value_0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_385() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = $Integer(new Integer, i));
    return result;
  }
  return $Integer(new Integer, i);
}

function Integer(){
}

_ = Integer.prototype = new Number_0;
_.equals$ = equals_3;
_.getClass$ = getClass_244;
_.hashCode$ = hashCode_5;
_.toString$ = toString_15;
_.typeId$ = 162;
_.value_0 = 0;
function $clinit_385(){
  $clinit_385 = nullMethod;
  boxedValues_0 = initDim(_3Ljava_lang_Integer_2_classLit, 228, 60, 256, 0);
}

var boxedValues_0;
function toPowerOfTwoString_0(value, shift){
  var bitMask, buf, bufSize, digits, pos;
  bufSize = ~~(64 / shift);
  bitMask = fromInt((1 << shift) - 1);
  buf = initDim(_3C_classLit, 200, -1, bufSize, 1);
  digits = ($clinit_390() , digits_0);
  pos = bufSize - 1;
  if (compare_0(value, P0_longLit) >= 0) {
    while (compare_0(value, bitMask) > 0) {
      buf[pos--] = digits[lowBits_0(and(value, bitMask))];
      value = shr(value, shift);
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[lowBits_0(and(value, bitMask))];
      value = shr(value, shift);
    }
  }
  buf[pos] = digits[lowBits_0(and(value, bitMask))];
  return __valueOf(buf, pos, bufSize);
}

function max_0(x, y){
  return x > y?x:y;
}

function min_0(x, y){
  return x < y?x:y;
}

function $NullPointerException(this$static){
  $fillInStackTrace();
  return this$static;
}

function $NullPointerException_0(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_245(){
  return Ljava_lang_NullPointerException_2_classLit;
}

function NullPointerException(){
}

_ = NullPointerException.prototype = new RuntimeException;
_.getClass$ = getClass_245;
_.typeId$ = 163;
function $clinit_390(){
  $clinit_390 = nullMethod;
  digits_0 = initValues(_3C_classLit, 200, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function $NumberFormatException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_246(){
  return Ljava_lang_NumberFormatException_2_classLit;
}

function NumberFormatException(){
}

_ = NumberFormatException.prototype = new IllegalArgumentException;
_.getClass$ = getClass_246;
_.typeId$ = 164;
function $StackTraceElement(this$static, className, methodName, fileName, lineNumber){
  this$static.className_0 = className;
  this$static.methodName = methodName;
  this$static.fileName = fileName;
  this$static.lineNumber = lineNumber;
  return this$static;
}

function getClass_247(){
  return Ljava_lang_StackTraceElement_2_classLit;
}

function toString_16(){
  return this.className_0 + '.' + this.methodName + '(' + this.fileName + ':' + this.lineNumber + ')';
}

function StackTraceElement(){
}

_ = StackTraceElement.prototype = new Object_0;
_.getClass$ = getClass_247;
_.toString$ = toString_16;
_.typeId$ = 165;
_.className_0 = null;
_.fileName = null;
_.lineNumber = 0;
_.methodName = null;
function $equals_1(this$static, other){
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
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
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
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = initDim(_3Ljava_lang_String_2_classLit, 233, 1, out.length, 0);
  for (var i = 0; i < out.length; ++i) {
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
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos - 0) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos - 0) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function __valueOf(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

function equals_4(other){
  return $equals_1(this, other);
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

function getClass_248(){
  return Ljava_lang_String_2_classLit;
}

function hashCode_6(){
  return getHashCode_0(this);
}

function toString_17(){
  return this;
}

_ = String.prototype;
_.equals$ = equals_4;
_.getClass$ = getClass_248;
_.hashCode$ = hashCode_6;
_.toString$ = toString_17;
_.typeId$ = 2;
function $clinit_394(){
  $clinit_394 = nullMethod;
  back = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + str.charCodeAt(i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_394();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back[key];
  result == null && (result = compute(str));
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
  this$static.impl = new StringBufferImplAppend;
  return this$static;
}

function $StringBuffer_0(this$static){
  this$static.impl = new StringBufferImplAppend;
  return this$static;
}

function $append_2(this$static, x){
  this$static.impl.string += String.fromCharCode.apply(null, x);
  return this$static;
}

function $append_3(this$static, x){
  this$static.impl.string += x;
  return this$static;
}

function getClass_249(){
  return Ljava_lang_StringBuffer_2_classLit;
}

function toString_18(){
  return this.impl.string;
}

function StringBuffer(){
}

_ = StringBuffer.prototype = new Object_0;
_.getClass$ = getClass_249;
_.toString$ = toString_18;
_.typeId$ = 166;
function $UnsupportedOperationException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_250(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException.prototype = new RuntimeException;
_.getClass$ = getClass_250;
_.typeId$ = 167;
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
  sb = $StringBuffer(new StringBuffer);
  comma = null;
  sb.impl.string += '[';
  iter = this$static.iterator_0();
  while (iter.hasNext()) {
    comma != null?(sb.impl.string += comma , undefined):(comma = ', ');
    $append_3(sb, '' + iter.next_0());
  }
  sb.impl.string += ']';
  return sb.impl.string;
}

function add_13(o){
  throw $UnsupportedOperationException(new UnsupportedOperationException, 'Add not supported on this collection');
}

function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator_0(), o);
  return !!iter;
}

function getClass_251(){
  return Ljava_util_AbstractCollection_2_classLit;
}

function toArray(a){
  var i, it, result, size;
  size = this.size_0();
  a.length < size && (a = createFrom(a, size));
  result = a;
  it = this.iterator_0();
  for (i = 0; i < size; ++i) {
    setCheck(result, i, it.next_0());
  }
  a.length > size && setCheck(a, size, null);
  return a;
}

function toString_19(){
  return $toString_3(this);
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0;
_.add_2 = add_13;
_.contains = contains;
_.getClass$ = getClass_251;
_.toArray = toArray;
_.toString$ = toString_19;
_.typeId$ = 168;
function $keySet(this$static){
  var entrySet;
  entrySet = $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, this$static);
  return $AbstractMap$1(new AbstractMap$1, this$static, entrySet);
}

function equals_5(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if ((obj == null?null:obj) === this) {
    return true;
  }
  if (!(obj != null && canCast(obj.typeId$, 80))) {
    return false;
  }
  otherMap = dynamicCast(obj, 80);
  if (dynamicCast(this, 80).size != otherMap.size) {
    return false;
  }
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, otherMap).this$0); $hasNext_3(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_5(entry$iterator.iter), 78);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(otherKey == null?dynamicCast(this, 80).nullSlotLive:otherKey != null && canCast(otherKey.typeId$, 1)?$hasStringValue(dynamicCast(this, 80), dynamicCast(otherKey, 1)):$hasHashValue(dynamicCast(this, 80), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, otherKey == null?dynamicCast(this, 80).nullSlot:otherKey != null && canCast(otherKey.typeId$, 1)?dynamicCast(this, 80).stringMap[':' + dynamicCast(otherKey, 1)]:$getHashValue(dynamicCast(this, 80), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
  }
  return true;
}

function getClass_252(){
  return Ljava_util_AbstractMap_2_classLit;
}

function hashCode_7(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, dynamicCast(this, 80)).this$0); $hasNext_3(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_5(entry$iterator.iter), 78);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function toString_20(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, dynamicCast(this, 80)).this$0); $hasNext_3(iter.iter);) {
    entry = iter.last = dynamicCast($next_5(iter.iter), 78);
    comma?(s += ', '):(comma = true);
    s += '' + entry.getKey();
    s += '=';
    s += '' + entry.getValue();
  }
  return s + '}';
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0;
_.equals$ = equals_5;
_.getClass$ = getClass_252;
_.hashCode$ = hashCode_7;
_.toString$ = toString_20;
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

function $get_2(this$static, key){
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

function $put_0(this$static, key, value){
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
  var entry = $MapEntryImpl(new MapEntryImpl, key, value);
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
  key in stringMap?(result = stringMap[key]):++this$static.size;
  stringMap[key] = value;
  return result;
}

function $remove_6(this$static, key){
  return key == null?$removeNullSlot(this$static):key != null && canCast(key.typeId$, 1)?$removeStringValue(this$static, dynamicCast(key, 1)):$removeHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        array.length == 1?delete this$static.hashCodeMap[hashCode]:array.splice(i, 1);
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

function getClass_253(){
  return Ljava_util_AbstractHashMap_2_classLit;
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap;
_.equalsBridge = equalsBridge;
_.getClass$ = getClass_253;
_.typeId$ = 0;
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function equals_6(o){
  var iter, other, otherItem;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 81))) {
    return false;
  }
  other = dynamicCast(o, 81);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator_0(); iter.hasNext();) {
    otherItem = iter.next_0();
    if (!this.contains(otherItem)) {
      return false;
    }
  }
  return true;
}

function getClass_254(){
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

_ = AbstractSet.prototype = new AbstractCollection;
_.equals$ = equals_6;
_.getClass$ = getClass_254;
_.hashCode$ = hashCode_8;
_.typeId$ = 169;
function $AbstractHashMap$EntrySet(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $contains(this$static, o){
  var entry, key, value;
  if (o != null && canCast(o.typeId$, 78)) {
    entry = dynamicCast(o, 78);
    key = entry.getKey();
    if ($containsKey(this$static.this$0, key)) {
      value = $get_2(this$static.this$0, key);
      return $equals_2(entry.getValue(), value);
    }
  }
  return false;
}

function contains_0(o){
  return $contains(this, o);
}

function getClass_255(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}

function iterator_5(){
  return $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, this.this$0);
}

function size_0(){
  return this.this$0.size;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet.prototype = new AbstractSet;
_.contains = contains_0;
_.getClass$ = getClass_255;
_.iterator_0 = iterator_5;
_.size_0 = size_0;
_.typeId$ = 170;
_.this$0 = null;
function $AbstractHashMap$EntrySetIterator(this$static, this$0){
  var list;
  this$static.this$0 = this$0;
  list = $ArrayList(new ArrayList);
  this$static.this$0.nullSlotLive && $add_11(list, $AbstractHashMap$MapEntryNull(new AbstractHashMap$MapEntryNull, this$static.this$0));
  $addAllStringEntries(this$static.this$0, list);
  $addAllHashEntries(this$static.this$0, list);
  this$static.iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, list);
  return this$static;
}

function $next_4(this$static){
  return this$static.last = dynamicCast($next_5(this$static.iter), 78);
}

function $remove_7(this$static){
  if (!this$static.last) {
    throw $IllegalStateException_0(new IllegalStateException, 'Must call next() before remove().');
  }
   else {
    $remove_8(this$static.iter);
    $remove_6(this$static.this$0, this$static.last.getKey());
    this$static.last = null;
  }
}

function getClass_256(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}

function hasNext_3(){
  return $hasNext_3(this.iter);
}

function next_4(){
  return this.last = dynamicCast($next_5(this.iter), 78);
}

function remove_12(){
  $remove_7(this);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator.prototype = new Object_0;
_.getClass$ = getClass_256;
_.hasNext = hasNext_3;
_.next_0 = next_4;
_.remove_0 = remove_12;
_.typeId$ = 0;
_.iter = null;
_.last = null;
_.this$0 = null;
function equals_7(other){
  var entry;
  if (other != null && canCast(other.typeId$, 78)) {
    entry = dynamicCast(other, 78);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}

function getClass_257(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}

function hashCode_9(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.getKey() != null && (keyHash = hashCode__devirtual$(this.getKey()));
  this.getValue() != null && (valueHash = hashCode__devirtual$(this.getValue()));
  return keyHash ^ valueHash;
}

function toString_21(){
  return this.getKey() + '=' + this.getValue();
}

function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0;
_.equals$ = equals_7;
_.getClass$ = getClass_257;
_.hashCode$ = hashCode_9;
_.toString$ = toString_21;
_.typeId$ = 171;
function $AbstractHashMap$MapEntryNull(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_258(){
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

_ = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry;
_.getClass$ = getClass_258;
_.getKey = getKey;
_.getValue = getValue;
_.setValue = setValue;
_.typeId$ = 172;
_.this$0 = null;
function $AbstractHashMap$MapEntryString(this$static, key, this$0){
  this$static.this$0 = this$0;
  this$static.key = key;
  return this$static;
}

function getClass_259(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}

function getKey_0(){
  return this.key;
}

function getValue_0(){
  return this.this$0.stringMap[':' + this.key];
}

function new_$(this$outer, key){
  return $AbstractHashMap$MapEntryString(new AbstractHashMap$MapEntryString, key, this$outer);
}

function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry;
_.getClass$ = getClass_259;
_.getKey = getKey_0;
_.getValue = getValue_0;
_.setValue = setValue_0;
_.typeId$ = 173;
_.key = null;
_.this$0 = null;
function add_14(obj){
  this.add_3(this.size_0(), obj);
  return true;
}

function add_15(index, element){
  throw $UnsupportedOperationException(new UnsupportedOperationException, 'Add not supported on this list');
}

function checkIndex(index, size){
  (index < 0 || index >= size) && indexOutOfBounds(index, size);
}

function equals_8(o){
  var elem, elemOther, iter, iterOther, other;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 79))) {
    return false;
  }
  other = dynamicCast(o, 79);
  if (this.size_0() != other.size_0()) {
    return false;
  }
  iter = this.iterator_0();
  iterOther = other.iterator_0();
  while (iter.i < iter.this$0.size_0()) {
    elem = $next_5(iter);
    elemOther = $next_5(iterOther);
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function getClass_260(){
  return Ljava_util_AbstractList_2_classLit;
}

function hashCode_10(){
  var iter, k, obj;
  k = 1;
  iter = this.iterator_0();
  while (iter.i < iter.this$0.size_0()) {
    obj = $next_5(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}

function indexOutOfBounds(index, size){
  throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Index: ' + index + ', Size: ' + size);
}

function iterator_6(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this);
}

function remove_13(index){
  throw $UnsupportedOperationException(new UnsupportedOperationException, 'Remove not supported on this list');
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection;
_.add_2 = add_14;
_.add_3 = add_15;
_.equals$ = equals_8;
_.getClass$ = getClass_260;
_.hashCode$ = hashCode_10;
_.iterator_0 = iterator_6;
_.remove_1 = remove_13;
_.typeId$ = 174;
function $AbstractList$IteratorImpl(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $hasNext_3(this$static){
  return this$static.i < this$static.this$0.size_0();
}

function $next_5(this$static){
  if (this$static.i >= this$static.this$0.size_0()) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  return this$static.this$0.get(this$static.last = this$static.i++);
}

function $remove_8(this$static){
  if (this$static.last < 0) {
    throw $IllegalStateException(new IllegalStateException);
  }
  this$static.this$0.remove_1(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function getClass_261(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}

function hasNext_4(){
  return this.i < this.this$0.size_0();
}

function next_5(){
  return $next_5(this);
}

function remove_14(){
  $remove_8(this);
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl.prototype = new Object_0;
_.getClass$ = getClass_261;
_.hasNext = hasNext_4;
_.next_0 = next_5;
_.remove_0 = remove_14;
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

function getClass_262(){
  return Ljava_util_AbstractMap$1_2_classLit;
}

function iterator_7(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, this.val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1, outerIter);
}

function size_1(){
  return this.val$entrySet.this$0.size;
}

function AbstractMap$1(){
}

_ = AbstractMap$1.prototype = new AbstractSet;
_.contains = contains_1;
_.getClass$ = getClass_262;
_.iterator_0 = iterator_7;
_.size_0 = size_1;
_.typeId$ = 175;
_.this$0 = null;
_.val$entrySet = null;
function $AbstractMap$1$1(this$static, val$outerIter){
  this$static.val$outerIter = val$outerIter;
  return this$static;
}

function getClass_263(){
  return Ljava_util_AbstractMap$1$1_2_classLit;
}

function hasNext_5(){
  return $hasNext_3(this.val$outerIter.iter);
}

function next_6(){
  var entry;
  entry = $next_4(this.val$outerIter);
  return entry.getKey();
}

function remove_15(){
  $remove_7(this.val$outerIter);
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1.prototype = new Object_0;
_.getClass$ = getClass_263;
_.hasNext = hasNext_5;
_.next_0 = next_6;
_.remove_0 = remove_15;
_.typeId$ = 0;
_.val$outerIter = null;
function $ArrayList(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 231, 0, 0, 0);
  return this$static;
}

function $add_11(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $add_12(this$static, index, o){
  (index < 0 || index > this$static.size) && indexOutOfBounds(index, this$static.size);
  this$static.array.splice(index, 0, o);
  ++this$static.size;
}

function $clear_2(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 231, 0, 0, 0);
  this$static.size = 0;
}

function $get_3(this$static, index){
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

function $set_1(this$static, index, o){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  setCheck(this$static.array, index, o);
  return previous;
}

function $toArray(this$static, out){
  var i, a, result;
  out.length < this$static.size && (out = (a = out , result = createFromSeed(0, this$static.size) , initValues(a.arrayClass$, a.typeId$, a.queryId$, result) , result));
  for (i = 0; i < this$static.size; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > this$static.size && setCheck(out, this$static.size, null);
  return out;
}

function add_16(o){
  return setCheck(this.array, this.size++, o) , true;
}

function add_17(index, o){
  $add_12(this, index, o);
}

function contains_2(o){
  return $indexOf_2(this, o, 0) != -1;
}

function get_1(index){
  return checkIndex(index, this.size) , this.array[index];
}

function getClass_264(){
  return Ljava_util_ArrayList_2_classLit;
}

function remove_16(index){
  return $remove_9(this, index);
}

function size_2(){
  return this.size;
}

function toArray_0(out){
  return $toArray(this, out);
}

function ArrayList(){
}

_ = ArrayList.prototype = new AbstractList;
_.add_2 = add_16;
_.add_3 = add_17;
_.contains = contains_2;
_.get = get_1;
_.getClass$ = getClass_264;
_.remove_1 = remove_16;
_.size_0 = size_2;
_.toArray = toArray_0;
_.typeId$ = 176;
_.size = 0;
function $HashMap(this$static){
  $clearImpl(this$static);
  return this$static;
}

function $equals_2(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function getClass_265(){
  return Ljava_util_HashMap_2_classLit;
}

function HashMap(){
}

_ = HashMap.prototype = new AbstractHashMap;
_.getClass$ = getClass_265;
_.typeId$ = 177;
function $HashSet(this$static){
  this$static.map = $HashMap(new HashMap);
  return this$static;
}

function $add_13(this$static, o){
  var old;
  old = $put_0(this$static.map, o, this$static);
  return old == null;
}

function add_18(o){
  var old;
  return old = $put_0(this.map, o, this) , old == null;
}

function contains_3(o){
  return $containsKey(this.map, o);
}

function getClass_266(){
  return Ljava_util_HashSet_2_classLit;
}

function iterator_8(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $keySet(this.map).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1, outerIter);
}

function size_3(){
  return this.map.size;
}

function toString_22(){
  return $toString_3($keySet(this.map));
}

function HashSet(){
}

_ = HashSet.prototype = new AbstractSet;
_.add_2 = add_18;
_.contains = contains_3;
_.getClass$ = getClass_266;
_.iterator_0 = iterator_8;
_.size_0 = size_3;
_.toString$ = toString_22;
_.typeId$ = 178;
_.map = null;
function $MapEntryImpl(this$static, key, value){
  this$static.key = key;
  this$static.value_0 = value;
  return this$static;
}

function getClass_267(){
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

_ = MapEntryImpl.prototype = new AbstractMapEntry;
_.getClass$ = getClass_267;
_.getKey = getKey_1;
_.getValue = getValue_1;
_.setValue = setValue_1;
_.typeId$ = 179;
_.key = null;
_.value_0 = null;
function $NoSuchElementException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_268(){
  return Ljava_util_NoSuchElementException_2_classLit;
}

function NoSuchElementException(){
}

_ = NoSuchElementException.prototype = new RuntimeException;
_.getClass$ = getClass_268;
_.typeId$ = 180;
function equalsWithNullCheck(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && equals__devirtual$(a, b);
}

function $Vector(this$static){
  this$static.arrayList = $ArrayList(new ArrayList);
  return this$static;
}

function add_19(o){
  return $add_11(this.arrayList, o);
}

function add_20(index, o){
  $add_12(this.arrayList, index, o);
}

function contains_4(elem){
  return $indexOf_2(this.arrayList, elem, 0) != -1;
}

function get_2(index){
  return $get_3(this.arrayList, index);
}

function getClass_269(){
  return Ljava_util_Vector_2_classLit;
}

function iterator_9(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this.arrayList);
}

function remove_17(index){
  return $remove_9(this.arrayList, index);
}

function size_4(){
  return this.arrayList.size;
}

function toArray_1(a){
  return $toArray(this.arrayList, a);
}

function toString_23(){
  return $toString_3(this.arrayList);
}

function Vector(){
}

_ = Vector.prototype = new AbstractList;
_.add_2 = add_19;
_.add_3 = add_20;
_.contains = contains_4;
_.get = get_2;
_.getClass$ = getClass_269;
_.iterator_0 = iterator_9;
_.remove_1 = remove_17;
_.size_0 = size_4;
_.toArray = toArray_1;
_.toString$ = toString_23;
_.typeId$ = 181;
_.arrayList = null;
function $clinit_426(){
  $clinit_426 = nullMethod;
  $clinit_6();
}

function $Alert(this$static, prop_0){
  var box, cfg;
  $clinit_426();
  $GWTCAlert(this$static, 64);
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  cfg = 64;
  box = getImpl(this$static.jsProp.p_0, 'roundedBox', '');
  $equals_1('flat', box) && (cfg |= 2);
  $equals_1('grey', box) && (cfg |= 4);
  $equals_1('blue', box) && (cfg |= 8);
  !$getBoolean(this$static.jsProp, 'glassPanel', true) && (cfg |= 16);
  $getBoolean(this$static.jsProp, 'animate', false) && (cfg |= 32);
  !$getBoolean(this$static.jsProp, 'buttonOk', true) && (cfg |= 1);
  $initialize_0(this$static, cfg);
  (this$static.jsProp.p_0['className']?true:false) && $setStyleName(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  (this$static.jsProp.p_0['onClose']?true:false) && (this$static.jsClosure = $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onClose')) , undefined);
  $addDomHandler(this$static.okButton, $Alert$1(new Alert$1, this$static), ($clinit_26() , $clinit_26() , TYPE));
  return this$static;
}

function addListener(c){
  this.jsClosure = c;
}

function alert_1(msg){
  this.txt.element_0.innerHTML = $replaceAll($replaceAll(msg, '\\n', '<br/>'), ' ', '&nbsp;') || '';
  this.desiredWidth = 'auto';
  $maybeUpdateSize(this);
  'auto'.length == 0 && (this.desiredWidth = null);
  $center(this);
}

function getClass_270(){
  return Ljschismes_client_Alert_2_classLit;
}

function hide_6(){
  $hide_1(this);
}

function show_4(seconds){
  $show_0(this, seconds);
}

function Alert(){
}

_ = Alert.prototype = new GWTCAlert;
_.addListener_0 = addListener;
_.alert_0 = alert_1;
_.getClass$ = getClass_270;
_.hide_0 = hide_6;
_.show_1 = show_4;
_.typeId$ = 182;
_.jsClosure = null;
_.jsProp = null;
function $Alert$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_271(){
  return Ljschismes_client_Alert$1_2_classLit;
}

function onClick_12(event_0){
  !!this.this$0.jsClosure && this.this$0.jsClosure.onChange_1(dynamicCast(event_0.source, 2).getElement_0());
}

function Alert$1(){
}

_ = Alert$1.prototype = new Object_0;
_.getClass$ = getClass_271;
_.onClick = onClick_12;
_.typeId$ = 183;
_.this$0 = null;
function $export0(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.Alert) {
    var pkg = $wnd.jsc.Alert;
  }
  $wnd.jsc.Alert = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Alert') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Alert(new Alert, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Alert.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Alert[p] = pkg[p];
    }
  }
  __0.addListener = function(arg0){
    this.instance.addListener_0(arg0.constructor == $wnd.jsc.JsChangeClosure?arg0.instance:arg0.hashCode$?arg0:$JsChangeClosureExporterImpl(new JsChangeClosureExporterImpl, arg0));
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
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.Alert', $wnd.jsc.Alert);
}

function $clinit_429(){
  $clinit_429 = nullMethod;
  $clinit_9();
}

function $Box(this$static, prop_0){
  var box;
  $clinit_429();
  $GWTCBox(this$static);
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  box = getImpl(this$static.jsProp.p_0, 'roundedBoxType', '');
  $equals_1('flat', box)?(this$static.element_0['className'] = 'GWTCBox' , undefined):$equals_1('grey', box)?(this$static.element_0['className'] = 'GWTCBox-grey' , undefined):$equals_1('blue', box) && (this$static.element_0['className'] = 'GWTCBox-blue' , undefined);
  (this$static.jsProp.p_0['className']?true:false) && $addStyleName(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  $setTitle_0(this$static, getImpl(this$static.jsProp.p_0, 'title', ''));
  $setText(this$static, getImpl(this$static.jsProp.p_0, 'text', ''));
  $add_16(this$static, getImpl(this$static.jsProp.p_0, 'html', ''), ($clinit_437() , NORTH_0));
  attachToDocument(this$static, 'containerId', this$static.jsProp);
  return this$static;
}

function $add_16(this$static, object, direction){
  $add_8(this$static.panel, objectToWidget(object), direction);
}

function add_21(object){
  $add_16(this, object, ($clinit_437() , NORTH_0));
}

function add_22(object, direction){
  $add_8(this.panel, objectToWidget(object), direction);
}

function clear(){
  $clear(this);
}

function getClass_272(){
  return Ljschismes_client_Box_2_classLit;
}

function Box(){
}

_ = Box.prototype = new GWTCBox;
_.add_4 = add_21;
_.add_1 = add_22;
_.clear_0 = clear;
_.getClass$ = getClass_272;
_.typeId$ = 184;
_.jsProp = null;
function $export0_0(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.Box) {
    var pkg = $wnd.jsc.Box;
  }
  $wnd.jsc.Box = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Box') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Box(new Box, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Box.prototype = new Object;
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
    this.instance.add_4(arg0);
  }
  ;
  __0.add = function(arg0, arg1){
    this.instance.add_1(arg0, arg1);
  }
  ;
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.Box', $wnd.jsc.Box);
}

function $clinit_431(){
  $clinit_431 = nullMethod;
  $clinit_17();
}

function $Button_1(this$static, prop_0){
  var text, type;
  $clinit_431();
  $GWTCButton(this$static);
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  type = (this$static.jsProp.p_0['type']?true:false)?$getInt(this$static.jsProp, 'type', 0):1;
  $setType(this$static, type);
  text = getImpl(this$static.jsProp.p_0, 'text', '');
  $setHTML_1(this$static, text);
  (this$static.jsProp.p_0['onClick']?true:false) && (this$static.jsClosure = $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onClick')) , undefined);
  $addDomHandler(this$static, $Button$1(new Button$1, this$static), ($clinit_26() , $clinit_26() , TYPE));
  attachToDocument(this$static, 'containerId', this$static.jsProp);
  return this$static;
}

function addListener_0(c){
  this.jsClosure = c;
}

function getClass_273(){
  return Ljschismes_client_Button_2_classLit;
}

function getElement_2(){
  return !this.element && (this.element = this.element_0) , this.element;
}

function Button_0(){
}

_ = Button_0.prototype = new GWTCButton;
_.addListener_0 = addListener_0;
_.getClass$ = getClass_273;
_.getElement_0 = getElement_2;
_.typeId$ = 185;
_.jsClosure = null;
_.jsProp = null;
function $Button$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_274(){
  return Ljschismes_client_Button$1_2_classLit;
}

function onClick_13(event_0){
  !!this.this$0.jsClosure && this.this$0.jsClosure.onChange_1(dynamicCast(event_0.source, 2));
}

function Button$1(){
}

_ = Button$1.prototype = new Object_0;
_.getClass$ = getClass_274;
_.onClick = onClick_13;
_.typeId$ = 186;
_.this$0 = null;
function $export0_1(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.Button) {
    var pkg = $wnd.jsc.Button;
  }
  $wnd.jsc.Button = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Button') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Button_1(new Button_0, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Button.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Button[p] = pkg[p];
    }
  }
  __0.addListener = function(arg0){
    this.instance.addListener_0(arg0.constructor == $wnd.jsc.JsChangeClosure?arg0.instance:arg0.hashCode$?arg0:$JsChangeClosureExporterImpl(new JsChangeClosureExporterImpl, arg0));
  }
  ;
  __0.getElement = function(){
    var x = this.instance.getElement_0();
    return x;
  }
  ;
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.Button', $wnd.jsc.Button);
}

function $clinit_434(){
  $clinit_434 = nullMethod;
  $clinit_66();
}

function $ColorPicker(this$static, prop_0){
  $clinit_434();
  $GWTCColorPicker(this$static);
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  (this$static.jsProp.p_0['onSelect']?true:false) && (this$static.jsClosure = $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onSelect')) , undefined);
  this$static.changeHandler = $ColorPicker$1(new ColorPicker$1, this$static);
  new GWTCColorPicker$1;
  (this$static.jsProp.p_0['className']?true:false) && $setStyleName(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  attachToDocument(this$static, 'containerId', this$static.jsProp);
  return this$static;
}

function addSelectListener(c){
  this.jsClosure = c;
}

function getClass_275(){
  return Ljschismes_client_ColorPicker_2_classLit;
}

function getColor_0(){
  return this.color;
}

function hide_7(){
  $hide_0(this, false);
}

function show_5(){
  $show(this);
}

function show_6(object){
  var $e0, elem;
  if (object) {
    try {
      elem = object;
      $setPopupPosition(this, $getAbsoluteLeft_0(($clinit_116() , elem)), $getAbsoluteTopImpl($getViewportElement(elem.ownerDocument), elem) + (elem.offsetHeight || 0));
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 3))
        throw $e0;
    }
  }
  $show(this);
}

function ColorPicker(){
}

_ = ColorPicker.prototype = new GWTCColorPicker;
_.addSelectListener_0 = addSelectListener;
_.getClass$ = getClass_275;
_.getColor_0 = getColor_0;
_.hide_0 = hide_7;
_.show_0 = show_5;
_.show_2 = show_6;
_.typeId$ = 187;
_.jsClosure = null;
_.jsProp = null;
function $ColorPicker$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_276(){
  return Ljschismes_client_ColorPicker$1_2_classLit;
}

function onValueChange_6(event_0){
  !!this.this$0.jsClosure && this.this$0.jsClosure.onChange_1(this.this$0.color);
}

function ColorPicker$1(){
}

_ = ColorPicker$1.prototype = new Object_0;
_.getClass$ = getClass_276;
_.onValueChange = onValueChange_6;
_.typeId$ = 188;
_.this$0 = null;
function $export0_2(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.ColorPicker) {
    var pkg = $wnd.jsc.ColorPicker;
  }
  $wnd.jsc.ColorPicker = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.ColorPicker') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $ColorPicker(new ColorPicker, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.ColorPicker.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.ColorPicker[p] = pkg[p];
    }
  }
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
    this.instance.addSelectListener_0(arg0.constructor == $wnd.jsc.JsChangeClosure?arg0.instance:arg0.hashCode$?arg0:$JsChangeClosureExporterImpl(new JsChangeClosureExporterImpl, arg0));
  }
  ;
  __0.getColor = function(){
    var x = this.instance.getColor_0();
    return x;
  }
  ;
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.ColorPicker', $wnd.jsc.ColorPicker);
}

function $clinit_437(){
  $clinit_437 = nullMethod;
  SHORT_FORMAT = getShortDateFormat().pattern;
  NUMERIC_FORMAT = $replaceFirst(getShortDateFormat().pattern, 'yy', 'yyyy');
  LONG_FORMAT = getLongDateFormat().pattern;
  NORTH_0 = ($clinit_286() , NORTH);
  SOUTH_0 = SOUTH;
  EAST_0 = EAST;
  WEST_0 = WEST;
}

function getClass_277(){
  return Ljschismes_client_Const_2_classLit;
}

function Const(){
}

_ = Const.prototype = new Object_0;
_.getClass$ = getClass_277;
_.typeId$ = 0;
var EAST_0, LONG_FORMAT, NORTH_0, NUMERIC_FORMAT, SHORT_FORMAT, SOUTH_0, WEST_0;
function $export0_3(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.Const) {
    var pkg = $wnd.jsc.Const;
  }
  $wnd.jsc.Const = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Const') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 0) {
      this.instance = ($clinit_437() , new Const);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Const.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Const[p] = pkg[p];
    }
  }
  $wnd.jsc.Const.SHORT_FORMAT = ($clinit_437() , SHORT_FORMAT);
  $wnd.jsc.Const.NUMERIC_FORMAT = NUMERIC_FORMAT;
  $wnd.jsc.Const.LONG_FORMAT = LONG_FORMAT;
  $wnd.jsc.Const.NORTH = NORTH_0;
  $wnd.jsc.Const.SOUTH = SOUTH_0;
  $wnd.jsc.Const.EAST = EAST_0;
  $wnd.jsc.Const.WEST = WEST_0;
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.Const', $wnd.jsc.Const);
}

function $clinit_439(){
  $clinit_439 = nullMethod;
  $clinit_30();
}

function $DatePicker(this$static, prop_0){
  var cfg;
  $clinit_439();
  $GWTCDatePickerAbstract(this$static);
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  this$static.monthColumns = $getInt(this$static.jsProp, 'numberOfColums', 3);
  this$static.monthSelector = $getInt(this$static.jsProp, 'monthRange', 12);
  this$static.monthStep = $getInt(this$static.jsProp, 'stepMonths', 1);
  $setNumberOfLettersInDayNames(this$static, $getInt(this$static.jsProp, 'lettersInWeekDayHeaders', 0));
  cfg = 0;
  !(this$static.jsProp.p_0['containerId']?true:false) && $getBoolean(this$static.jsProp, 'dialog', true) && (cfg |= CONFIG_DIALOG);
  $getBoolean(this$static.jsProp, 'roundedBox', false) && (cfg |= CONFIG_ROUNDED_BOX);
  !$getBoolean(this$static.jsProp, 'autoHide', true) && (cfg |= CONFIG_NO_AUTOHIDE);
  !$getBoolean(this$static.jsProp, 'animate', true) && (cfg |= CONFIG_NO_ANIMATION);
  $getBoolean(this$static.jsProp, 'glassPanel', true) && (cfg |= CONFIG_BACKGROUND);
  $equals_1('flat', getImpl(this$static.jsProp.p_0, 'buttons', '')) && (cfg |= CONFIG_FLAT_BUTTONS);
  $equals_1('standard', getImpl(this$static.jsProp.p_0, 'buttons', '')) && (cfg |= CONFIG_STANDARD_BUTTONS);
  $initialize_1(this$static, cfg);
  (this$static.jsProp.p_0['minDate']?true:false) && $setMinimalDate_0(this$static, add_7($Date(new Date_0), getImpl(this$static.jsProp.p_0, 'minDate', '')));
  (this$static.jsProp.p_0['maxDate']?true:false) && $setMaximalDate_0(this$static, add_7($Date(new Date_0), getImpl(this$static.jsProp.p_0, 'maxDate', '')));
  (this$static.jsProp.p_0['defaultDate']?true:false) && $setSelectedDate_0(this$static, add_7($Date(new Date_0), getImpl(this$static.jsProp.p_0, 'defaultDate', '')));
  (this$static.jsProp.p_0['onSelect']?true:false) && (this$static.jsClosure = $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onSelect')) , undefined);
  (this$static.jsProp.p_0['className']?true:false) && $setStyleName_1(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  $showWeekNumbers(this$static, $getBoolean(this$static.jsProp, 'showWeekNumbers', false));
  $clickOnWeekNumbers(this$static, $getBoolean(this$static.jsProp, 'weekSelection', false));
  $addValueChangeHandler(this$static, $DatePicker$1(new DatePicker$1, this$static));
  $setI18nMessages(this$static, regionalToHash('regional', this$static.jsProp));
  attachToDocument(this$static, 'containerId', this$static.jsProp);
  return this$static;
}

function $data(this$static){
  return {selected:new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this$static.simpleDatePickers.arrayList, 0), 4).getSelectedDate())))), minimal:new Date(toDouble(fromDouble($getTime0(this$static.minimalDate)))), maximal:new Date(toDouble(fromDouble($getTime0(this$static.maximalDate))))};
}

function addSelectListener_0(c){
  this.jsClosure = c;
}

function attachToDocument(w, id, prop_0){
  $clinit_439();
  var p_0;
  p_0 = get_0(getImpl(prop_0.p_0, id, '__NO_ID__'));
  !!p_0 && $add_4(p_0, w, p_0.element_0);
}

function data_7(){
  return {selected:new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this.simpleDatePickers.arrayList, 0), 4).getSelectedDate())))), minimal:new Date(toDouble(fromDouble($getTime0(this.minimalDate)))), maximal:new Date(toDouble(fromDouble($getTime0(this.maximalDate))))};
}

function drawDatePickerWidget_0(){
  var layoutButtons, numberOfMonths;
  layoutButtons = (this.jsProp.p_0['buttonsLayout']?true:false)?getImpl(this.jsProp.p_0, 'buttonsLayout', ''):'?mx;p<->n';
  numberOfMonths = $getInt(this.jsProp, 'numberOfMonths', 0) > 0?$getInt(this.jsProp, 'numberOfMonths', 0):1;
  $setNumberOfMonths(this, numberOfMonths);
  $layoutButtons(this, layoutButtons);
  $layoutCalendar(this);
}

function getClass_278(){
  return Ljschismes_client_DatePicker_2_classLit;
}

function getSelected(){
  return new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this.simpleDatePickers.arrayList, 0), 4).getSelectedDate()))));
}

function hide_8(){
  this.calendarDlg?$hide_6(this.calendarDlg):this.outer_0.setVisible(false);
}

function regionalToHash(regionalKey, prop_0){
  $clinit_439();
  var k, key, key$array, key$index, key$max, reg, strs, v;
  strs = $HashMap(new HashMap);
  if (prop_0.p_0[regionalKey]?true:false) {
    reg = $JsProperties(new JsProperties, getJSObjectImpl(prop_0.p_0, regionalKey));
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
  $setSelectedDate_0(this, $Date_1(new Date_0, fromDouble(date && date.getTime?date.getTime():0)));
}

function show_7(){
  $show_3(this, -1, -1);
}

function show_8(elem){
  elem?$show_3(this, $getAbsoluteLeft_0(($clinit_116() , elem)), $getAbsoluteTopImpl($getViewportElement(elem.ownerDocument), elem)):$show_3(this, -1, -1);
}

function DatePicker(){
}

_ = DatePicker.prototype = new GWTCDatePickerAbstract;
_.addSelectListener_0 = addSelectListener_0;
_.data_0 = data_7;
_.drawDatePickerWidget = drawDatePickerWidget_0;
_.getClass$ = getClass_278;
_.getSelected_0 = getSelected;
_.hide_0 = hide_8;
_.setSelected_0 = setSelected;
_.show_0 = show_7;
_.show_3 = show_8;
_.typeId$ = 189;
_.jsClosure = null;
_.jsProp = null;
function $DatePicker$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_279(){
  return Ljschismes_client_DatePicker$1_2_classLit;
}

function onValueChange_7(event_0){
  !!this.this$0.jsClosure && this.this$0.jsClosure.onChange_1($data(this.this$0));
}

function DatePicker$1(){
}

_ = DatePicker$1.prototype = new Object_0;
_.getClass$ = getClass_279;
_.onValueChange = onValueChange_7;
_.typeId$ = 190;
_.this$0 = null;
function $export0_4(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.DatePicker) {
    var pkg = $wnd.jsc.DatePicker;
  }
  $wnd.jsc.DatePicker = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.DatePicker') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $DatePicker(new DatePicker, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.DatePicker.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.DatePicker[p] = pkg[p];
    }
  }
  __0.show = function(){
    this.instance.show_0();
  }
  ;
  __0.show = function(arg0){
    this.instance.show_3(arg0);
  }
  ;
  __0.hide = function(){
    this.instance.hide_0();
  }
  ;
  __0.addSelectListener = function(arg0){
    this.instance.addSelectListener_0(arg0.constructor == $wnd.jsc.JsChangeClosure?arg0.instance:arg0.hashCode$?arg0:$JsChangeClosureExporterImpl(new JsChangeClosureExporterImpl, arg0));
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
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.DatePicker', $wnd.jsc.DatePicker);
}

function $Editor(this$static, prop_0){
  var toolbar_0;
  $VerticalPanel(this$static);
  this$static.area = $RichTextArea(new RichTextArea);
  $setSize(this$static.area, '100%', '234px');
  toolbar_0 = $Toolbar(new Toolbar, this$static.area);
  this$static.element_0['className'] = 'GWTCEditor';
  $add_5(this$static, toolbar_0);
  $add_5(this$static, this$static.area);
  this$static.element_0.style['width'] = '100%';
  $addHandler(this$static.area, $GWTCEditor$1(new GWTCEditor$1, this$static), (!TYPE_13 && (TYPE_13 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_13));
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  (this$static.jsProp.p_0['className']?true:false) && $addStyleName(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  (this$static.jsProp.p_0['html']?true:false) && $setHTML_2(this$static, getImpl(this$static.jsProp.p_0, 'html', ''));
  attachToDocument(this$static, 'containerId', this$static.jsProp);
  return this$static;
}

function getClass_280(){
  return Ljschismes_client_Editor_2_classLit;
}

function html_1(){
  return $getHTML_2(this.area.impl);
}

function html_2(html){
  !html.length;
  $setHTML_6(this.area.impl, "<font size=2 style='font-family: arial'><br/>" + html + '<\/font>');
}

function setEnabled(b){
  $setEnabled_0(this.area.element_0, b);
}

function Editor(){
}

_ = Editor.prototype = new GWTCEditor;
_.getClass$ = getClass_280;
_.html_0 = html_1;
_.html_1 = html_2;
_.setEnabled_0 = setEnabled;
_.typeId$ = 191;
_.jsProp = null;
function $export0_5(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.Editor) {
    var pkg = $wnd.jsc.Editor;
  }
  $wnd.jsc.Editor = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Editor') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Editor(new Editor, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Editor.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Editor[p] = pkg[p];
    }
  }
  __0.html = function(){
    var x = this.instance.html_0();
    return x;
  }
  ;
  __0.html = function(arg0){
    this.instance.html_1(arg0);
  }
  ;
  __0.setEnabled = function(arg0){
    this.instance.setEnabled_0(arg0);
  }
  ;
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.Editor', $wnd.jsc.Editor);
}

function $IntervalSelector(this$static, prop_0){
  var cfg, layoutButtons, monthColumns, monthSelector, monthStep, numberOfMonths, type;
  $$init_6(this$static);
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  type = $getInt(this$static.jsProp, 'type', 1);
  $initialize_2(this$static, type);
  numberOfMonths = $getInt(this$static.jsProp, 'numberOfMonths', 0);
  monthColumns = $getInt(this$static.jsProp, 'numberOfColums', 3);
  monthSelector = $getInt(this$static.jsProp, 'monthRange', 12);
  monthStep = $getInt(this$static.jsProp, 'stepMonths', 1);
  layoutButtons = (this$static.jsProp.p_0['buttonsLayout']?true:false)?getImpl(this$static.jsProp.p_0, 'buttonsLayout', ''):'?mx;p<->n';
  cfg = ($clinit_30() , CONFIG_DIALOG);
  !$getBoolean(this$static.jsProp, 'autohide', true) && (cfg |= CONFIG_NO_AUTOHIDE);
  !$getBoolean(this$static.jsProp, 'animation', true) && (cfg |= CONFIG_NO_ANIMATION);
  $getBoolean(this$static.jsProp, 'glassPanel', false) && (cfg |= CONFIG_BACKGROUND);
  $getBoolean(this$static.jsProp, 'flatButtons', false) && (cfg |= CONFIG_FLAT_BUTTONS);
  $getBoolean(this$static.jsProp, 'standardButtons', false) && (cfg |= CONFIG_STANDARD_BUTTONS);
  $setDatePickerOptions(this$static, cfg);
  $initListeners(this$static);
  $configure(this$static.checkinCalendar, layoutButtons, numberOfMonths, monthColumns, monthStep, monthSelector);
  $configure(this$static.checkoutCalendar, layoutButtons, numberOfMonths, monthColumns, monthStep, monthSelector);
  $initListeners(this$static);
  $setMinimalDate_1(this$static, add_7($Date(new Date_0), getImpl(this$static.jsProp.p_0, 'minDate', '')));
  $setMaximalDate_1(this$static, add_7($Date(new Date_0), getImpl(this$static.jsProp.p_0, 'maxDate', '')));
  $setMaxdays(this$static, $getInt(this$static.jsProp, 'maxDays', 0));
  (this$static.jsProp.p_0['className']?true:false) && $setStyleName(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  (this$static.jsProp.p_0['onSelect']?true:false) && (this$static.jsClosure = $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onSelect')) , undefined);
  $add_11(this$static.changeHandlers.arrayList, $IntervalSelector$1(new IntervalSelector$1, this$static));
  new GWTCIntervalSelector$4;
  $setI18nMessages_0(this$static, regionalToHash('regional', this$static.jsProp));
  attachToDocument(this$static, 'containerId', this$static.jsProp);
  return this$static;
}

function $data_0(this$static){
  return $getDataImpl_0(toDouble(fromDouble($getTime0(dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()))), toDouble(fromDouble($getTime0(dynamicCast($get_3(this$static.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()))), compareDate(dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate(), dynamicCast($get_3(this$static.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()), toDouble(fromDouble($getTime0(this$static.checkinCalendar.minimalDate))), toDouble(fromDouble($getTime0(this$static.checkinCalendar.maximalDate))), this$static.maxdays);
}

function $getDataImpl_0(init, end, nights, minimal, maximal, max){
  return {init:new Date(init), end:new Date(end), nights:nights, days:nights, minimal:new Date(minimal), maximal:new Date(maximal), maxdays:max};
}

function addSelectListener_1(c){
  this.jsClosure = c;
}

function data_8(){
  return $getDataImpl_0(toDouble(fromDouble($getTime0(dynamicCast($get_3(this.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()))), toDouble(fromDouble($getTime0(dynamicCast($get_3(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()))), compareDate(dynamicCast($get_3(this.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate(), dynamicCast($get_3(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()), toDouble(fromDouble($getTime0(this.checkinCalendar.minimalDate))), toDouble(fromDouble($getTime0(this.checkinCalendar.maximalDate))), this.maxdays);
}

function getClass_281(){
  return Ljschismes_client_IntervalSelector_2_classLit;
}

function getEnd(){
  return new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()))));
}

function getInit(){
  return new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()))));
}

function getNights_0(){
  return compareDate(dynamicCast($get_3(this.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate(), dynamicCast($get_3(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate());
}

function IntervalSelector(){
}

_ = IntervalSelector.prototype = new GWTCIntervalSelector;
_.addSelectListener_0 = addSelectListener_1;
_.data_0 = data_8;
_.getClass$ = getClass_281;
_.getEnd_0 = getEnd;
_.getInit_0 = getInit;
_.getNights_0 = getNights_0;
_.typeId$ = 192;
_.jsClosure = null;
_.jsProp = null;
function $IntervalSelector$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_282(){
  return Ljschismes_client_IntervalSelector$1_2_classLit;
}

function onValueChange_8(event_0){
  !!this.this$0.jsClosure && this.this$0.jsClosure.onChange_1($data_0(this.this$0));
}

function IntervalSelector$1(){
}

_ = IntervalSelector$1.prototype = new Object_0;
_.getClass$ = getClass_282;
_.onValueChange = onValueChange_8;
_.typeId$ = 193;
_.this$0 = null;
function $export0_6(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.IntervalSelector) {
    var pkg = $wnd.jsc.IntervalSelector;
  }
  $wnd.jsc.IntervalSelector = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.IntervalSelector') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $IntervalSelector(new IntervalSelector, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.IntervalSelector.prototype = new Object;
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
    this.instance.addSelectListener_0(arg0.constructor == $wnd.jsc.JsChangeClosure?arg0.instance:arg0.hashCode$?arg0:$JsChangeClosureExporterImpl(new JsChangeClosureExporterImpl, arg0));
  }
  ;
  __0.data = function(){
    var x = this.instance.data_0();
    return x;
  }
  ;
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.IntervalSelector', $wnd.jsc.IntervalSelector);
}

function $JsChangeClosureExporterImpl(this$static, jso){
  this$static.jso = jso;
  return this$static;
}

function $export0_7(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.JsChangeClosure) {
    var pkg = $wnd.jsc.JsChangeClosure;
  }
  $wnd.jsc.JsChangeClosure = function(){
    arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.JsChangeClosure' && (this.instance = arguments[0]);
  }
  ;
  var __0 = $wnd.jsc.JsChangeClosure.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.JsChangeClosure[p] = pkg[p];
    }
  }
  __0.onChange = function(arg0){
    this.instance.onChange_1(arg0);
  }
  ;
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.JsChangeClosure', $wnd.jsc.JsChangeClosure);
}

function getClass_283(){
  return Ljschismes_client_JsChangeClosureExporterImpl_2_classLit;
}

function onChange_1(arg0){
  this.jso(arg0);
}

function JsChangeClosureExporterImpl(){
}

_ = JsChangeClosureExporterImpl.prototype = new Object_0;
_.getClass$ = getClass_283;
_.onChange_1 = onChange_1;
_.typeId$ = 0;
_.jso = null;
function $JsProperties(this$static, p_0){
  this$static.p_0 = p_0;
  return this$static;
}

function $getBoolean(this$static, name_0, deFault){
  var val;
  val = getImpl(this$static.p_0, name_0, '').toLowerCase();
  if ($equals_1('true', val))
    return true;
  if ($equals_1('false', val))
    return true;
  if ($equals_1('on', val))
    return true;
  if ($equals_1('off', val))
    return false;
  if ($equals_1('1', val))
    return true;
  if ($equals_1('0', val))
    return false;
  return deFault;
}

function $getInt(this$static, name_0, deFault){
  var val;
  val = (this$static.p_0[name_0]?true:false)?$replaceAll(getImpl(this$static.p_0, name_0, ''), '[^\\d]', ''):'';
  if (val.length == 0)
    return deFault;
  return valueOf(__parseAndValidateInt(val, 10, -2147483648, 2147483647)).value_0;
}

function $keys(this$static){
  var a, i, ret;
  a = keysImpl(this$static.p_0);
  ret = initDim(_3Ljava_lang_String_2_classLit, 233, 1, a.length, 0);
  for (i = 0; i < a.length; ++i) {
    ret[i] = '' + a[i];
  }
  return ret;
}

function getClass_284(){
  return Ljschismes_client_JsProperties_2_classLit;
}

function getImpl(p_0, name_0, defa){
  return p_0[name_0]?'' + p_0[name_0]:p_0[name_0] === false?'false':defa;
}

function getJSObjectImpl(p_0, name_0){
  return p_0[name_0]?p_0[name_0]:null;
}

function keysImpl(p_0){
  var key, keys = [];
  for (key in p_0)
    keys.push('' + key);
  return keys;
}

function JsProperties(){
}

_ = JsProperties.prototype = new Object_0;
_.getClass$ = getClass_284;
_.typeId$ = 0;
_.p_0 = null;
function $JsProperties$JSChangeClosureImpl(this$static, o){
  this$static.jsobject = o;
  return this$static;
}

function $onChangeImpl(f, o){
  f && o && typeof f == 'function' && f(o);
}

function getClass_285(){
  return Ljschismes_client_JsProperties$JSChangeClosureImpl_2_classLit;
}

function onChange_2(object){
  $onChangeImpl(this.jsobject, object);
}

function JsProperties$JSChangeClosureImpl(){
}

_ = JsProperties$JSChangeClosureImpl.prototype = new Object_0;
_.getClass$ = getClass_285;
_.onChange_1 = onChange_2;
_.typeId$ = 0;
_.jsobject = null;
function $clinit_452(){
  $clinit_452 = nullMethod;
  $clinit_5();
}

function $Popup(this$static, prop_0){
  var box, cfg;
  $clinit_452();
  $PopupPanel_0(this$static, (64 & 64) != 64);
  this$static.initialize(64);
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  cfg = 64;
  box = getImpl(this$static.jsProp.p_0, 'roundedBox', '');
  $equals_1('flat', box) && (cfg |= 2);
  $equals_1('grey', box) && (cfg |= 4);
  $equals_1('blue', box) && (cfg |= 8);
  !$getBoolean(this$static.jsProp, 'glassPanel', true) && (cfg |= 16);
  $getBoolean(this$static.jsProp, 'animate', false) && (cfg |= 32);
  $initialize(this$static, cfg);
  (this$static.jsProp.p_0['className']?true:false) && $setStyleName(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  (this$static.jsProp.p_0['text']?true:false) && $add_1(this$static, getImpl(this$static.jsProp.p_0, 'text', ''), ($clinit_437() , NORTH_0));
  return this$static;
}

function add_23(object){
  $add_1(this, object, ($clinit_437() , NORTH_0));
}

function add_24(object, direction){
  var widget;
  widget = objectToWidget(object);
  this.panelbox?this.panelbox.add_1(widget, direction):$add_8(this.panel, widget, direction);
}

function clear_0(){
  $clear(this);
}

function getClass_286(){
  return Ljschismes_client_Popup_2_classLit;
}

function hide_9(){
  $hide_1(this);
}

function show_9(seconds){
  $show_0(this, seconds);
}

function Popup(){
}

_ = Popup.prototype = new GWTCPopupBox;
_.add_4 = add_23;
_.add_1 = add_24;
_.clear_0 = clear_0;
_.getClass$ = getClass_286;
_.hide_0 = hide_9;
_.show_1 = show_9;
_.typeId$ = 194;
_.jsProp = null;
function $export0_8(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.Popup) {
    var pkg = $wnd.jsc.Popup;
  }
  $wnd.jsc.Popup = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Popup') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Popup(new Popup, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Popup.prototype = new Object;
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
    this.instance.add_4(arg0);
  }
  ;
  __0.add = function(arg0, arg1){
    this.instance.add_1(arg0, arg1);
  }
  ;
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.Popup', $wnd.jsc.Popup);
}

function $Progress(this$static, prop_0){
  var cfg, elements;
  this$static.contentTable = $FlexTable(new FlexTable);
  this$static.remainLabel = $Label(new Label);
  this$static.textLabel = $Label(new Label);
  this$static.numberLabel = $Label(new Label);
  this$static.startTime = fromDouble((new Date).getTime());
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  cfg = ($clinit_30() , CONFIG_DIALOG);
  $getBoolean(this$static.jsProp, 'timeRemaining', true) && (cfg |= 1);
  $getBoolean(this$static.jsProp, 'text', false) && (cfg |= 2);
  $equals_1('left', getImpl(this$static.jsProp.p_0, 'text', '')) && (cfg |= 16);
  $getBoolean(this$static.jsProp, 'numbers', false) && (cfg |= 4);
  $getBoolean(this$static.jsProp, 'dialog', false) && (cfg |= 8);
  elements = $getInt(this$static.jsProp, 'elements', 30);
  $initialize_3(this$static, cfg, elements);
  !$getBoolean(this$static.jsProp, 'dialog', false) && attachToDocument(this$static, 'containerId', this$static.jsProp);
  (this$static.jsProp.p_0['hoursMsg']?true:false) && (this$static.hoursMessage = getImpl(this$static.jsProp.p_0, 'hoursMsg', '') , undefined);
  (this$static.jsProp.p_0['minutesMsg']?true:false) && (this$static.hoursMessage = getImpl(this$static.jsProp.p_0, 'minutesMsg', '') , undefined);
  (this$static.jsProp.p_0['secondsMsg']?true:false) && (this$static.hoursMessage = getImpl(this$static.jsProp.p_0, 'secondsMsg', '') , undefined);
  (this$static.jsProp.p_0['percentMsg']?true:false) && (this$static.percentMessage = getImpl(this$static.jsProp.p_0, 'percentMsg', '') , undefined);
  (this$static.jsProp.p_0['totalMsg']?true:false) && (this$static.totalMessage = getImpl(this$static.jsProp.p_0, 'totalMsg', '') , undefined);
  (this$static.jsProp.p_0['className']?true:false) && $setStyleName(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  return this$static;
}

function getClass_287(){
  return Ljschismes_client_Progress_2_classLit;
}

function getElement_3(){
  return this.element_0;
}

function hide_10(){
  $hide_7(this);
}

function setProgress(done, total){
  var percent;
  percent = total > 0?~~(done * 100 / total):0;
  $setProgress_0(this, percent, done, total);
}

function setText_10(text){
  ($clinit_116() , this.textLabel.element_0).textContent = text || '';
}

function show_10(){
  $show_7(this);
}

function show_11(seconds){
  var periodMillis, t;
  if (seconds < 1)
    return;
  periodMillis = ~~(seconds * 1000 / 15);
  t = $Progress$pTimer(new Progress$pTimer, this);
  $scheduleRepeating(t, periodMillis);
}

function Progress(){
}

_ = Progress.prototype = new GWTCProgress;
_.getClass$ = getClass_287;
_.getElement_0 = getElement_3;
_.hide_0 = hide_10;
_.setProgress_0 = setProgress;
_.setText_0 = setText_10;
_.show_0 = show_10;
_.show_1 = show_11;
_.typeId$ = 195;
_.jsProp = null;
function $clinit_455(){
  $clinit_455 = nullMethod;
  $clinit_52();
}

function $Progress$pTimer(this$static, p_0){
  $clinit_455();
  this$static.prgBar = p_0;
  $run_0(this$static);
  return this$static;
}

function $run_0(this$static){
  this$static.done == 0 && $show_7(this$static.prgBar);
  if (this$static.done >= 100) {
    this$static.done = 0;
    $cancel(this$static);
    $hide_7(this$static.prgBar);
  }
  $setProgress(this$static.prgBar, this$static.done, 100);
  this$static.done += 6;
}

function getClass_288(){
  return Ljschismes_client_Progress$pTimer_2_classLit;
}

function run_4(){
  $run_0(this);
}

function Progress$pTimer(){
}

_ = Progress$pTimer.prototype = new Timer;
_.getClass$ = getClass_288;
_.run = run_4;
_.typeId$ = 196;
_.done = 0;
_.prgBar = null;
function $export0_9(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.Progress) {
    var pkg = $wnd.jsc.Progress;
  }
  $wnd.jsc.Progress = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Progress') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Progress(new Progress, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Progress.prototype = new Object;
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
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.Progress', $wnd.jsc.Progress);
}

function camelize(s){
  return s.toLowerCase().replace(/-([a-z])/ig, function(a, c){
    return c.toUpperCase();
  }
  );
}

function getClass_289(){
  return Ljschismes_client_Utils_2_classLit;
}

function Utils(){
}

_ = Utils.prototype = new Object_0;
_.getClass$ = getClass_289;
_.typeId$ = 0;
function $export0_10(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.Utils) {
    var pkg = $wnd.jsc.Utils;
  }
  $wnd.jsc.Utils = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Utils') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 0) {
      this.instance = new Utils;
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Utils.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.Utils[p] = pkg[p];
    }
  }
  $wnd.jsc.Utils.formatDate = function(arg0, arg1){
    var x = formatDate(arg0, $Date_1(new Date_0, fromDouble(arg1 && arg1.getTime?arg1.getTime():0)));
    return x;
  }
  ;
  $wnd.jsc.Utils.camelize = function(arg0){
    var x = camelize(arg0);
    return x;
  }
  ;
  $wnd.jsc.Utils.parseDate = function(arg0, arg1){
    var x = new Date(toDouble(fromDouble($getTime0(parseDate(arg0, arg1)))));
    return x;
  }
  ;
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.Utils', $wnd.jsc.Utils);
}

function $clinit_459(){
  $clinit_459 = nullMethod;
  $clinit_60();
}

function $Wait(this$static, prop_0){
  $clinit_459();
  $PopupPanel_0(this$static, (64 & 64) != 64);
  this$static.initialize(64);
  this$static.txt = $Label_0(new Label, '');
  this$static.img = $Image_0(new Image_0, 'images/gwtc-wait-loading.gif');
  this$static.mainPanel = $FlexTable(new FlexTable);
  !!get_0('GWTCWait') && (get_0('GWTCWait').getElement_0().style.display = 'none' , undefined);
  $getStyleElement_1($getFirstChildElement(($clinit_116() , this$static.element_0)))['className'] = 'GWTCWait';
  this$static.mainPanel.getStyleElement()['className'] = 'panel';
  $addStyleName_2(this$static.mainPanel.cellFormatter, 0, 0, 'msgCell');
  $setWidget_2(this$static.mainPanel, 0, 0, this$static.txt);
  $addStyleName_2(this$static.mainPanel.cellFormatter, 1, 0, 'imgCell');
  $setWidget_2(this$static.mainPanel, 1, 0, this$static.img);
  setStyleName(this$static.img.getStyleElement(), 'image', true);
  $setWidget_0(this$static, this$static.mainPanel);
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  (this$static.jsProp.p_0['text']?true:false) && (this$static.txt.element_0.textContent = getImpl(this$static.jsProp.p_0, 'text', '') || '' , undefined);
  (this$static.jsProp.p_0['className']?true:false) && $setStyleName(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  (this$static.jsProp.p_0['image']?true:false) && $setImg(this$static, getImpl(this$static.jsProp.p_0, 'image', ''));
  return this$static;
}

function $hide_10(this$static){
  $hide_1(this$static);
  this$static.element_0.style['visibility'] = 'hidden';
}

function getClass_290(){
  return Ljschismes_client_Wait_2_classLit;
}

function hide_11(){
  $hide_1(this);
  this.element_0.style['visibility'] = 'hidden';
}

function show_12(seconds){
  $show_8(this, seconds);
}

function Wait(){
}

_ = Wait.prototype = new GWTCWait;
_.getClass$ = getClass_290;
_.hide_0 = hide_11;
_.show_1 = show_12;
_.typeId$ = 197;
_.jsProp = null;
function $export0_11(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.Wait) {
    var pkg = $wnd.jsc.Wait;
  }
  $wnd.jsc.Wait = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.Wait') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Wait(new Wait, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.Wait.prototype = new Object;
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
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.Wait', $wnd.jsc.Wait);
}

function $WeekSelector(this$static, prop_0){
  var cfg, layoutButtons, monthColumns, monthSelector, monthStep, numberOfMonths;
  $$init_6(this$static);
  $initialize_2(this$static, 0);
  $setMaxdays(this$static, 15);
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  numberOfMonths = $getInt(this$static.jsProp, 'numberOfMonths', 0);
  monthColumns = $getInt(this$static.jsProp, 'numberOfColums', 3);
  monthSelector = $getInt(this$static.jsProp, 'monthRange', 12);
  monthStep = $getInt(this$static.jsProp, 'stepMonths', 1);
  layoutButtons = (this$static.jsProp.p_0['buttonsLayout']?true:false)?getImpl(this$static.jsProp.p_0, 'buttonsLayout', ''):';;;- x;;;p<;n>';
  cfg = ($clinit_30() , CONFIG_DIALOG);
  !$getBoolean(this$static.jsProp, 'autohide', true) && (cfg |= CONFIG_NO_AUTOHIDE);
  !$getBoolean(this$static.jsProp, 'animation', true) && (cfg |= CONFIG_NO_ANIMATION);
  $getBoolean(this$static.jsProp, 'glassPanel', false) && (cfg |= CONFIG_BACKGROUND);
  $getBoolean(this$static.jsProp, 'flatButtons', false) && (cfg |= CONFIG_FLAT_BUTTONS);
  $getBoolean(this$static.jsProp, 'standardButtons', false) && (cfg |= CONFIG_STANDARD_BUTTONS);
  $setMinimalDate_1(this$static, add_7($Date(new Date_0), getImpl(this$static.jsProp.p_0, 'minDate', '')));
  $setMaximalDate_1(this$static, add_7($Date(new Date_0), getImpl(this$static.jsProp.p_0, 'maxDate', '')));
  $setDatePickerOptions(this$static, cfg);
  $initListeners(this$static);
  $configure(this$static.checkinCalendar, layoutButtons, numberOfMonths, monthColumns, monthStep, monthSelector);
  $configure(this$static.checkoutCalendar, layoutButtons, numberOfMonths, monthColumns, monthStep, monthSelector);
  $initListeners(this$static);
  $showWeekNumbers(this$static.checkinCalendar, true);
  $clickOnWeekNumbers(this$static.checkinCalendar, true);
  $refresh(this$static.checkinCalendar);
  (this$static.jsProp.p_0['className']?true:false) && $setStyleName(this$static, getImpl(this$static.jsProp.p_0, 'className', ''));
  (this$static.jsProp.p_0['onSelect']?true:false) && (this$static.jsClosure = $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onSelect')) , undefined);
  $add_11(this$static.changeHandlers.arrayList, $WeekSelector$1(new WeekSelector$1, this$static));
  new GWTCIntervalSelector$4;
  $setI18nMessages_1(this$static, regionalToHash('regional', this$static.jsProp));
  attachToDocument(this$static, 'containerId', this$static.jsProp);
  return this$static;
}

function $data_1(this$static){
  return {init:new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate())))), end:new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this$static.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate())))), minimal:new Date(toDouble(fromDouble($getTime0(this$static.checkinCalendar.minimalDate)))), maximal:new Date(toDouble(fromDouble($getTime0(this$static.checkinCalendar.maximalDate)))), week:getWeekOfYear(dynamicCast($get_3(this$static.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate())};
}

function addSelectListener_2(c){
  this.jsClosure = c;
}

function data_9(){
  return {init:new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate())))), end:new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate())))), minimal:new Date(toDouble(fromDouble($getTime0(this.checkinCalendar.minimalDate)))), maximal:new Date(toDouble(fromDouble($getTime0(this.checkinCalendar.maximalDate)))), week:getWeekOfYear(dynamicCast($get_3(this.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate())};
}

function getClass_291(){
  return Ljschismes_client_WeekSelector_2_classLit;
}

function getEnd_0(){
  return new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()))));
}

function getInit_0(){
  return new Date(toDouble(fromDouble($getTime0(dynamicCast($get_3(this.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate()))));
}

function getNights_1(){
  return compareDate(dynamicCast($get_3(this.checkinCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate(), dynamicCast($get_3(this.checkoutCalendar.simpleDatePickers.arrayList, 0), 4).getSelectedDate());
}

function WeekSelector(){
}

_ = WeekSelector.prototype = new GWTCWeekSelector;
_.addSelectListener_0 = addSelectListener_2;
_.data_0 = data_9;
_.getClass$ = getClass_291;
_.getEnd_0 = getEnd_0;
_.getInit_0 = getInit_0;
_.getNights_0 = getNights_1;
_.typeId$ = 198;
_.jsClosure = null;
_.jsProp = null;
function $WeekSelector$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_292(){
  return Ljschismes_client_WeekSelector$1_2_classLit;
}

function onValueChange_9(event_0){
  !!this.this$0.jsClosure && this.this$0.jsClosure.onChange_1($data_1(this.this$0));
}

function WeekSelector$1(){
}

_ = WeekSelector$1.prototype = new Object_0;
_.getClass$ = getClass_292;
_.onValueChange = onValueChange_9;
_.typeId$ = 199;
_.this$0 = null;
function $export0_12(){
  !$wnd.jsc && ($wnd.jsc = {});
  if ($wnd.jsc.WeekSelector) {
    var pkg = $wnd.jsc.WeekSelector;
  }
  $wnd.jsc.WeekSelector = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jschismes.client.WeekSelector') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $WeekSelector(new WeekSelector, arguments[0]);
      $clinit_468();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsc.WeekSelector.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsc.WeekSelector[p] = pkg[p];
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
    this.instance.addSelectListener_0(arg0.constructor == $wnd.jsc.JsChangeClosure?arg0.instance:arg0.hashCode$?arg0:$JsChangeClosureExporterImpl(new JsChangeClosureExporterImpl, arg0));
  }
  ;
  __0.data = function(){
    var x = this.instance.data_0();
    return x;
  }
  ;
  $clinit_468();
  $put_0(impl_1.typeMap, 'jschismes.client.WeekSelector', $wnd.jsc.WeekSelector);
}

function getClass_293(){
  return Lorg_timepedia_exporter_client_ExporterBaseImpl_2_classLit;
}

function ExporterBaseImpl(){
}

_ = ExporterBaseImpl.prototype = new Object_0;
_.getClass$ = getClass_293;
_.typeId$ = 0;
function $ExporterBaseActual(this$static){
  this$static.typeMap = $HashMap(new HashMap);
  return this$static;
}

function getClass_294(){
  return Lorg_timepedia_exporter_client_ExporterBaseActual_2_classLit;
}

function ExporterBaseActual(){
}

_ = ExporterBaseActual.prototype = new ExporterBaseImpl;
_.getClass$ = getClass_294;
_.typeId$ = 0;
function $clinit_468(){
  $clinit_468 = nullMethod;
  impl_1 = $ExporterBaseActual(new ExporterBaseActual);
}

var impl_1;
var $entry = entry_0;
function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init_0)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init_0)();
  }
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'), _3J_classLit = createForArray('', '[J'), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject'), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget'), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel'), Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel'), Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel'), Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCColorPicker'), Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Label'), Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker$ColorCell_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCColorPicker$ColorCell'), Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker$ColorCell$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCColorPicker$ColorCell$1'), Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker$ColorCell$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCColorPicker$ColorCell$2'), Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCColorPicker$1'), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent'), Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ValueChangeEvent'), Lcom_google_code_p_gwtchismes_client_editor_GWTCColorPicker$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCColorPicker$2'), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel'), Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CellPanel'), Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalPanel'), Lcom_google_code_p_gwtchismes_client_editor_GWTCEditor_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCEditor'), Lcom_google_code_p_gwtchismes_client_editor_GWTCEditor$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCEditor$1'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;'), Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCFontPicker'), Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTML'), Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$FontCell_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCFontPicker$FontCell'), Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$FontCell$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCFontPicker$FontCell$1'), Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$FontCell$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCFontPicker$FontCell$2'), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum'), Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$FontPickerType_2_classLit = createForEnum('com.google.code.p.gwtchismes.client.editor.', 'GWTCFontPicker$FontPickerType', values_0), _3Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$FontPickerType_2_classLit = createForArray('[Lcom.google.code.p.gwtchismes.client.editor.', 'GWTCFontPicker$FontPickerType;'), Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCFontPicker$1'), Lcom_google_code_p_gwtchismes_client_editor_GWTCFontPicker$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'GWTCFontPicker$2'), Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Composite'), Lcom_google_code_p_gwtchismes_client_editor_Toolbar_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'Toolbar'), Lcom_google_code_p_gwtchismes_client_editor_Toolbar$EventHandler_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'Toolbar$EventHandler'), Lcom_google_code_p_gwtchismes_client_editor_Toolbar$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'Toolbar$1'), Lcom_google_code_p_gwtchismes_client_editor_Toolbar$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.editor.', 'Toolbar$2'), Lcom_google_code_p_gwtchismes_client_GWTCPopupBox_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCPopupBox'), Lcom_google_code_p_gwtchismes_client_GWTCAlert_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCAlert'), Lcom_google_code_p_gwtchismes_client_GWTCAlert$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCAlert$1'), Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratorPanel'), Lcom_google_code_p_gwtchismes_client_GWTCBox_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCBox'), Lcom_google_code_p_gwtchismes_client_GWTCBox$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCBox$1'), Lcom_google_code_p_gwtchismes_client_GWTCBox$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCBox$2'), Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusWidget'), Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ButtonBase'), Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Button'), Lcom_google_code_p_gwtchismes_client_GWTCButton_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton'), Lcom_google_code_p_gwtchismes_client_GWTCButton$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$1'), Lcom_google_code_p_gwtchismes_client_GWTCButton$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$2'), Lcom_google_code_p_gwtchismes_client_GWTCButton$3_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$3'), Lcom_google_code_p_gwtchismes_client_GWTCButton$4_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$4'), Lcom_google_code_p_gwtchismes_client_GWTCButton$5_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$5'), Lcom_google_code_p_gwtchismes_client_GWTCButton$6_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$6'), Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent'), Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ClickEvent'), Lcom_google_code_p_gwtchismes_client_GWTCButton$7_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$7'), Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCSimpleDatePicker'), Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCDatePickerAbstract'), Lcom_google_code_p_gwtchismes_client_GWTCDatePicker_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCDatePicker'), Lcom_google_gwt_user_client_ui_DockPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel'), _3Lcom_google_gwt_user_client_ui_DockPanel_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'DockPanel;'), Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract$MenuCommand_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCDatePickerAbstract$MenuCommand'), Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCDatePickerAbstract$1'), Lcom_google_code_p_gwtchismes_client_GWTCDatePickerAbstract$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCDatePickerAbstract$2'), Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusPanel'), Lcom_google_code_p_gwtchismes_client_GWTCGlassPanel_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCGlassPanel'), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$1'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$2'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$3_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$3'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$4_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$4'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$5_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$5'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$6_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$6'), Lcom_google_code_p_gwtchismes_client_GWTCIntervalSelector$7_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCIntervalSelector$7'), Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedPopupPanel'), Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox'), Lcom_google_code_p_gwtchismes_client_GWTCModalBox_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCModalBox'), Lcom_google_code_p_gwtchismes_client_GWTCModalBox$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCModalBox$1'), Lcom_google_code_p_gwtchismes_client_GWTCPopupBox$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCPopupBox$1'), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer'), Lcom_google_code_p_gwtchismes_client_GWTCPopupBox$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCPopupBox$2'), Lcom_google_code_p_gwtchismes_client_GWTCProgress_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCProgress'), Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$CellHTML_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCSimpleDatePicker$CellHTML'), Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$CellHTML$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCSimpleDatePicker$CellHTML$1'), Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$CellHTML$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCSimpleDatePicker$CellHTML$2'), Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCSimpleDatePicker$1'), Lcom_google_code_p_gwtchismes_client_GWTCSimpleDatePicker$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCSimpleDatePicker$2'), Lcom_google_code_p_gwtchismes_client_GWTCWait_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCWait'), Lcom_google_code_p_gwtchismes_client_GWTCWait$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCWait$1'), Lcom_google_code_p_gwtchismes_client_GWTCWeekSelector_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCWeekSelector'), Lcom_google_code_p_gwtchismes_client_GWTCWeekSelector$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCWeekSelector$1'), Lcom_google_code_p_gwtchismes_client_GWTCWeekSelector$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCWeekSelector$2'), Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation'), _3Lcom_google_gwt_animation_client_Animation_2_classLit = createForArray('[Lcom.google.gwt.animation.client.', 'Animation;'), Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation$1'), _3I_classLit = createForArray('', '[I'), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler'), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl'), Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$1'), Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$2'), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement'), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;'), Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImpl'), Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImplAppend'), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImpl'), Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplStandard'), Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplMozilla'), Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit', values_3), _3Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Unit;'), Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$1', null), Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$2', null), Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$3', null), Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$4', null), Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$5', null), Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$6', null), Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$7', null), Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$8', null), Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$9', null), Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display', values_1), _3Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Display;'), Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$1', null), Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$2', null), Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$3', null), Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$4', null), Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow', values_2), _3Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Overflow;'), Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$1', null), Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$2', null), Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$3', null), Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$4', null), Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'BlurEvent'), Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ChangeEvent'), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type'), Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent$Type'), Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'FocusEvent'), Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyEvent'), Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyCodeEvent'), Lcom_google_gwt_event_dom_client_KeyDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyDownEvent'), Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyPressEvent'), Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyUpEvent'), Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseEvent'), Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseDownEvent'), Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseMoveEvent'), Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOutEvent'), Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOverEvent'), Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseUpEvent'), Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'PrivateMap'), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent'), Lcom_google_gwt_event_logical_shared_InitializeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'InitializeEvent'), Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ResizeEvent'), Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit = createForClass('com.google.gwt.event.shared.', 'DefaultHandlerRegistration'), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager'), Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$HandlerRegistry'), Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$1'), Lcom_google_gwt_event_shared_HandlerManager$2_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$2'), Lcom_google_gwt_i18n_client_constants_DateTimeConstantsImpl_1es_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'DateTimeConstantsImpl_es'), Ljava_util_Date_2_classLit = createForClass('java.util.', 'Date'), Lcom_google_gwt_i18n_client_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'DateRecord'), Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat'), Lcom_google_gwt_i18n_client_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat$PatternPart'), Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client.', 'LocaleInfo'), _3C_classLit = createForArray('', '[C'), Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client.', 'TimeZone'), _3_3D_classLit = createForArray('', '[[D'), Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl.', 'ImageResourcePrototype'), Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl'), Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl$FreeNode'), Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImpl'), Lcom_google_gwt_user_client_impl_HistoryImplTimer_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImplTimer'), Lcom_google_gwt_user_client_impl_HistoryImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImplMozilla'), Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbstractImagePrototype'), Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'ClippedImagePrototype'), Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImpl'), Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImplStandard'), Lcom_google_gwt_user_client_ui_impl_PopupImplMozilla$1_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'PopupImplMozilla$1'), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImpl'), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImplStandard'), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImplMozilla'), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel'), Lcom_google_gwt_user_client_ui_Anchor_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Anchor'), _3Ljava_lang_Throwable_2_classLit = createForArray('[Ljava.lang.', 'Throwable;'), Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException'), Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$1'), Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$2'), Lcom_google_gwt_user_client_ui_CustomButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton'), Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton$Face'), Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton$2'), Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$CaptionImpl'), Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$MouseHandler'), Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$1'), _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;'), Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$TmpRow'), _3Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'DockPanel$TmpRow;'), Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$DockLayoutConstant'), Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$LayoutData'), Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable'), Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable'), Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$CellFormatter'), Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable$FlexCellFormatter'), Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Grid'), Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$ColumnFormatter'), Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$RowFormatter'), Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$1'), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasVerticalAlignment$VerticalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalPanel'), Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image'), Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$State'), Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$ClippedState'), Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$UnclippedState'), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection'), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList'), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList'), Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListBox'), Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client.', 'BaseListenerWrapper'), Lcom_google_gwt_user_client_ui_ListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListenerWrapper'), Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedPopupListener_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListenerWrapper$WrappedPopupListener'), Lcom_google_gwt_user_client_ui_MenuBar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar'), Lcom_google_gwt_user_client_ui_MenuBar$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar$1'), Lcom_google_gwt_user_client_ui_MenuBar$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar$2'), Lcom_google_gwt_user_client_ui_MenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuItem'), Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'PopupPanel$AnimationType', values_4), _3Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'PopupPanel$AnimationType;'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation$1'), Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$1'), Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$3'), Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$4'), Lcom_google_gwt_user_client_ui_PushButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PushButton'), Lcom_google_gwt_user_client_ui_RichTextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea'), Lcom_google_gwt_user_client_ui_RichTextArea$FontSize_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea$FontSize'), Lcom_google_gwt_user_client_ui_RichTextArea$Justification_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea$Justification'), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1'), Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$2'), Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel$1'), Lcom_google_gwt_user_client_ui_ToggleButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ToggleButton'), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection'), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator'), Lcom_google_gwt_user_client_CommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandCanceledException'), Lcom_google_gwt_user_client_CommandExecutor_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor'), Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$CircularIterator'), Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$1'), Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$2'), Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Event$NativePreviewEvent'), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1'), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent'), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers'), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException'), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number'), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'), Ljava_lang_Integer_2_classLit = createForClass('java.lang.', 'Integer'), _3Ljava_lang_Integer_2_classLit = createForArray('[Ljava.lang.', 'Integer;'), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'), Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang.', 'NumberFormatException'), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer'), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException'), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap'), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap'), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet'), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet'), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator'), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry'), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull'), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString'), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl'), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1'), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1'), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap'), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet'), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl'), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException'), Ljava_util_Vector_2_classLit = createForClass('java.util.', 'Vector'), Ljschismes_client_Alert_2_classLit = createForClass('jschismes.client.', 'Alert'), Ljschismes_client_Alert$1_2_classLit = createForClass('jschismes.client.', 'Alert$1'), Ljschismes_client_Box_2_classLit = createForClass('jschismes.client.', 'Box'), Ljschismes_client_Button_2_classLit = createForClass('jschismes.client.', 'Button'), Ljschismes_client_Button$1_2_classLit = createForClass('jschismes.client.', 'Button$1'), Ljschismes_client_ColorPicker_2_classLit = createForClass('jschismes.client.', 'ColorPicker'), Ljschismes_client_ColorPicker$1_2_classLit = createForClass('jschismes.client.', 'ColorPicker$1'), Ljschismes_client_Const_2_classLit = createForClass('jschismes.client.', 'Const'), Ljschismes_client_DatePicker_2_classLit = createForClass('jschismes.client.', 'DatePicker'), Ljschismes_client_DatePicker$1_2_classLit = createForClass('jschismes.client.', 'DatePicker$1'), Ljschismes_client_Editor_2_classLit = createForClass('jschismes.client.', 'Editor'), Ljschismes_client_IntervalSelector_2_classLit = createForClass('jschismes.client.', 'IntervalSelector'), Ljschismes_client_IntervalSelector$1_2_classLit = createForClass('jschismes.client.', 'IntervalSelector$1'), Ljschismes_client_JsChangeClosureExporterImpl_2_classLit = createForClass('jschismes.client.', 'JsChangeClosureExporterImpl'), Ljschismes_client_Utils_2_classLit = createForClass('jschismes.client.', 'Utils'), Ljschismes_client_WeekSelector_2_classLit = createForClass('jschismes.client.', 'WeekSelector'), Ljschismes_client_Wait_2_classLit = createForClass('jschismes.client.', 'Wait'), Ljschismes_client_Popup_2_classLit = createForClass('jschismes.client.', 'Popup'), Ljschismes_client_Progress_2_classLit = createForClass('jschismes.client.', 'Progress'), Ljschismes_client_JsProperties_2_classLit = createForClass('jschismes.client.', 'JsProperties'), Ljschismes_client_JsProperties$JSChangeClosureImpl_2_classLit = createForClass('jschismes.client.', 'JsProperties$JSChangeClosureImpl'), Ljschismes_client_Progress$pTimer_2_classLit = createForClass('jschismes.client.', 'Progress$pTimer'), Ljschismes_client_WeekSelector$1_2_classLit = createForClass('jschismes.client.', 'WeekSelector$1'), Lorg_timepedia_exporter_client_ExporterBaseImpl_2_classLit = createForClass('org.timepedia.exporter.client.', 'ExporterBaseImpl'), Lorg_timepedia_exporter_client_ExporterBaseActual_2_classLit = createForClass('org.timepedia.exporter.client.', 'ExporterBaseActual');
$stats && $stats({moduleName:'jschismes.JsChismesPretty',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (jschismes_JsChismesPretty) jschismes_JsChismesPretty.onScriptLoad(gwtOnLoad);
})();
