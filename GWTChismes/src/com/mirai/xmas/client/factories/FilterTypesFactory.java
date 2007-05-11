/*
 * FilterTypesFactory.java
 *
 * Created on October 3, 2006, 12:39 PM
 *
 */

package com.mirai.xmas.client.factories;

import java.util.Vector;
import com.mirai.xmas.client.values.KeyI18nPair;

/**
 *
 * @author jmanuel
 */
public class FilterTypesFactory {
    private static FilterTypesFactory instance;
    private Vector filterDateTypes;
    private KeyI18nPair anyDayTag;
    private KeyI18nPair anyMonthTag;
    
    /**
     * Creates a new instance of FilterTypesFactory
     */
    private FilterTypesFactory() {
        loadFilterDateTypes();
        
        anyDayTag = new KeyI18nPair("0", "key.allmonthdays");
        anyMonthTag = new KeyI18nPair("0", "key.allyearmonths");
    }
    
    public static FilterTypesFactory getInstance() {
        if (instance == null) {
            instance = new FilterTypesFactory();
        }
        return instance;
    }
    
    public Vector getFilterDateTypes() {
        if (filterDateTypes == null || filterDateTypes.size() == 0) {
            loadFilterDateTypes();
        }
        return filterDateTypes;
    }
    
    public KeyI18nPair getAnyDayTag() {
        return anyDayTag;
    }
    
    public KeyI18nPair getAnyMonthTag() {
        return anyMonthTag;
    }
    
    private void loadFilterDateTypes() {
        filterDateTypes = new Vector();
        
        KeyI18nPair checkinPair = new KeyI18nPair("1", "key.checkindate");
        KeyI18nPair checkoutPair = new KeyI18nPair("2", "key.checkoutdate");
        KeyI18nPair reservationPair = new KeyI18nPair("3", "key.reservdate");
        KeyI18nPair cancelPair = new KeyI18nPair("4", "key.canceldate");
        
        filterDateTypes.add(checkinPair);
        filterDateTypes.add(checkoutPair);
        filterDateTypes.add(reservationPair);
        filterDateTypes.add(cancelPair);
    }
}
