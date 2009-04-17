package jschismes.client;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArrayString;

public class JsProperties  {

    JavaScriptObject p = null;

    JsProperties(JavaScriptObject p) {
        this.p = p;
    }

    public boolean defined(String name){
      return definedImpl(p, name);    
    }
    public String get(String name) {
        return getImpl(p, name);
    }
    public int getInt(String name, int deFault) {
        String val = defined(name) ? get(name).replaceAll("[^\\d]", "") : "";
        if (val.length() == 0)
            return deFault;
        return Integer.valueOf(val);
    }
    public int getInt(String name) {
        return getInt(name, 0);
    }
    public float getFloat(String name) {
        return getFloatImpl(p, name);
    }
    public boolean getBoolean(String name) {
        return getBoolean(name, false);
    }
    public boolean getBoolean(String name, boolean deFault) {
        String val = get(name).toLowerCase();
        if ("true".equals(val)) return true;
        if ("false".equals(val)) return true;
        if ("on".equals(val)) return true;
        if ("off".equals(val)) return false;
        if ("1".equals(val)) return true;
        if ("0".equals(val)) return false;
        return deFault;
    }

    
    public static native boolean definedImpl(JavaScriptObject p, String name) /*-{
      return p[name] ? true : false;
    }-*/;
    
    public static native String getImpl(JavaScriptObject p, String name) /*-{
       return p[name] ? ("" + p[name]) : p[name] === false ? "false" : "";
    }-*/;
    
    public static native float getFloatImpl(JavaScriptObject p, String name) /*-{
      return p[name] ? p[name]: 0;
    }-*/;

    public static native JavaScriptObject getJSObjectImpl(JavaScriptObject p, String name) /*-{
      return p[name] ? p[name] : null ;
    }-*/;
    
    public final String[] keys() {
      JsArrayString a = keysImpl(p);
      String[] ret = new String[a.length()];
      for (int i=0; i < a.length(); i++) {
          ret[i] = "" + a.get(i);
      }
      return ret;
    }
    public final native JsArrayString keysImpl(JavaScriptObject p) /*-{
      var key, keys=[];
      for(key in p) {
        keys.push("" + key); 
      }
      return keys;
    }-*/;
    
    
    public JsChangeClosure getClosure(String name) {
        return new JSChangeClosureImpl(getJSObjectImpl(p, name));
    }
    
    class JSChangeClosureImpl implements JsChangeClosure {
        JavaScriptObject jsobject;

        JSChangeClosureImpl(JavaScriptObject o) {
            jsobject = o;
        }

        public void onChange(Object object) {
            onChangeImpl(jsobject, object);
        }
        
        public native void onChangeImpl(JavaScriptObject f, Object o)/*-{
           if (f && o && typeof f == 'function')
               f(o);
        }-*/;
        
    }
  }
