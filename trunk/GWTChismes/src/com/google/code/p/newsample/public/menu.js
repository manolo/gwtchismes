/*
 * Mirai Menu Library.
 * 
 * Library for handling menus in mirai pages. 
 * It needs basic conventions in the html structure shown below.
 * It uses prototype.js and effects.js
 * 
 *  
   <ul class="menuContainer">
     <li>
       <a href="#section-A" />    <-- getRelatedMenuLink(c)
     </li>
     <li>                         <-- getSuperContainer(b)
       <a href="#"/>              
       <ul class="submenu">       <-- getSubmenuContainer(b)
         <li>                     <-- getContainer(b)
          <a href="section-B"/>   <-- b
         </li>
       </ul>
       <a href="#"/>              <-- a
       <ul class="submenu">       <-- getChildContainer(a)
       </ul>
     </li>
     <li>
       <a href="#section-C" />    <-- getRelatedMenuLink(c)
     </li>
   </ul>
   
   <div id="content">
      <div id="section-A"> </div>
      <div id="section-B">        <-- getContentSection('c')
         <a href="#section-C" />  <-- c
      </div>
      <div id="section-C"> </div>
   </div>     
   
 */

var ID_DEFAULT_SECTION = "id1";

document.observe("dom:loaded", function() {
  addEventsToLinks();
  menuClickListener(null);
});

function getMenuContainer(a) {
  return $(a).up('.menuContainer');
}
function getContainer(a) {
  return $(a).up('li');
}
function getSubmenuContainer(a) {
  return $(a).up('.submenu');
}
function getSuperContainer(a) {
  var s = getSubmenuContainer(a);
  return s ? s.up('li') : null;
}
function getChildContainer(a) {
  var s = $(a).adjacent('.submenu');
  return s ? s[0] : null;
}
function getHashId(a) {
  return (a && a.hash) ? a.hash.gsub('#', '') : '';
}
function getRelatedMenuLink(a) {
  if (!window.cacheMnu) {
    window.cacheMnu = new Array();
    $$(".menuContainer a").each( function(s) {
      window.cacheMnu[getHashId(s)] = s;
    });
  }
  var id = (typeof a == 'string') ? a : getHashId(a);
  return id.length ? window.cacheMnu[id] : $(a);
}
function getContentSection(id) {
  var elm = $(id);
  if (elm) {
    var ret;
    $('content').childElements().each( function(s) {
      if (!ret && (elm == s || elm.descendantOf(s)))
        ret = s;
    });
    return ret;
  }
}

function isSubmenu(a) {
  return (a && getSubmenuContainer(a) != null);
}
function hasSubmenu(a) {
  return (a && getChildContainer(a) != null);
}
function isMenu(a) {
  return (a && getMenuContainer(a) != null);
}
function isInternalLink(a) {
  return (window.location.pathname.gsub('^/+', '') == a.pathname.gsub('^/+', ''));
}

function addEventsToLinks() {
  $$('a').each( function(a) {
    if (isInternalLink(a))
      Event.observe(a, 'click', menuClickListener);
  });
}

function menuClickListener(event) {
  var clickedLink = (event) ? Event.findElement(event, 'a') : getRelatedMenuLink(ID_DEFAULT_SECTION);
  var menuLink = getRelatedMenuLink(clickedLink);
  var relMnuLnk = showSection(clickedLink);
  if (relMnuLnk) {
    menuLink = relMnuLnk;
  }
  if (menuLink) {
    showSubmenu(menuLink);
    selectCurrentmenu(menuLink);
  }
  if (event && !relMnuLnk) {
    event.stop();
  }
}

function showSubmenu(link) {
  $$('.submenu').each( function(e) {
    e.hide();
  });
  if (hasSubmenu(link))
    getChildContainer(link).show();
  else if (isSubmenu(link))
    getSubmenuContainer(link).show();
}

function selectCurrentmenu(link) {
  $$('.current').each( function(e) {
    e.removeClassName('current');
  });

  getContainer(link).className = 'current';

  if (isSubmenu(link))
    getSuperContainer(link).className = 'current';
}

function showSection(a) {
  var id = getHashId(a)
  var section = getContentSection(id);
  if (section) {
    var ret;
    $('content').childElements().each( function(s) {
      if (s.id == id) {
        s.appear( {
          duration :1.0
        });
      } else if (s.id == section.id) {
        s.show();
        ret = getRelatedMenuLink(section.id);
      } else
        s.hide();
    });
    return ret;
  }
}
