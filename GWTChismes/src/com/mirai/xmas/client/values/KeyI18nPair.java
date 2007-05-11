/*
 * KeyI18nPair.java
 *
 * Created on October 3, 2006, 12:38 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package com.mirai.xmas.client.values;

/**
 *
 * @author jmanuel
 */
public class KeyI18nPair {
    private String id;
    private String i18nKey;
    
    /** Creates a new instance of KeyI18nPair */
    public KeyI18nPair(String id, String i18nKey) {
        this.setId(id);
        this.setI18nKey(i18nKey);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getI18nKey() {
        return i18nKey;
    }

    public void setI18nKey(String i18nKey) {
        this.i18nKey = i18nKey;
    }
}
