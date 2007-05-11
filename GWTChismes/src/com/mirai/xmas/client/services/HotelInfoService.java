/*
 * HotelInfoService.java
 *
 * Created on October 20, 2006, 1:57 PM
 *
 */

package com.mirai.xmas.client.services;

import java.util.Vector;
import java.util.Hashtable;
import java.rmi.RemoteException;

import com.mirai.xmas.values.XHotelSearchRQValue;
import com.mirai.xmas.values.XProvider;
import com.hotelebusiness.ReservationSystem.values.MHotelInfoValue;

/**
 *
 * @author jmanuel
 */
public class HotelInfoService {
    
    /** Creates a new instance of HotelInfoService */
    public HotelInfoService() {
    }
    
    public static XProvider getHotelInfoCore(Long idtokenprovider) {
        try {
            return BaseService2.getInstance().getMREHotelInfoManager().getHotelInfoCore(idtokenprovider);
        } catch(RemoteException re) {
            System.out.println("Could not connect to the server side: " + re.getMessage());
            re.printStackTrace();
            return null;
        } catch(Exception e) {
            System.out.println("Error getting the Hotel Core: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }
    
    /**
     * 
     * @param idChainOta
     * @param idHotelOta
     * @return
     */
    public static XProvider getHotelInfoCore(String idChainOta, String idHotelOta) {
        try {
            return BaseService2.getInstance().getMREHotelInfoManager().getHotelInfoCore(idChainOta, idHotelOta);
        } catch(RemoteException re) {
            System.out.println("Could not connect to the server side: " + re.getMessage());
            re.printStackTrace();
            return null;
        } catch (Exception e) {
            System.out.println("Error getting the Hotel Core: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }
    
    public static Hashtable getHotelsInfoCoresTable(Vector idtokenproviders) {
        try {
            return BaseService2.getInstance().getMREHotelInfoManager().getHotelsInfoCoresTable(idtokenproviders);
        } catch(RemoteException re) {
            System.out.println("Could not connect to the server side: " + re.getMessage());
            re.printStackTrace();
            return null;
        } catch (Exception e) {
            System.out.println("Error getting the Hotel Core: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }
    
    public static Vector getHotelInfoCoresOfXidChain(String xidchain) throws Exception {
        return BaseService2.getInstance().getMREHotelInfoManager().getHotelInfoCoreOfXidChain(xidchain);
    }
    
    /**
     * 
     * @param xmasproviders
     * @return
     */
    public static Hashtable getXmasHotelsInfosTable(Vector xmasproviders, String languageCode) throws Exception {
        return BaseService2.getInstance().getMREHotelInfoManager().getXmasHotelsInfosTable(xmasproviders, languageCode);
    }
    
    /**
     * 
     * @param idtokenprovider
     * @param language
     * @return
     * @throws Exception
     */
    public static MHotelInfoValue getHotelInfo(Long idtokenprovider, String language) throws Exception {
        return BaseService2.getInstance().getMREHotelInfoManager().getHotelInfoValue(idtokenprovider, language);
    }
    
    /**
     * Devuelve la lista de XmasProviders clasificados por cadena
     * @param hotelSearchRequestValue
     * @return
     * @throws Exception
     */
    public static Hashtable loadHotelsList(XHotelSearchRQValue hotelSearchRequestValue) throws Exception {
		return BaseService2.getInstance().getMREHotelInfoManager().loadHotelsList(hotelSearchRequestValue);
    }
    
    public static Vector getCommissions(Long idtokenprovider) throws Exception {
    	return BaseService2.getInstance().getMREHotelInfoManager().getCommissions(idtokenprovider);
    }
    
    public static Vector getHotelEmails(Long idtokenprovider) throws Exception {
        return BaseService2.getInstance().getMREHotelInfoManager().getHotelEmails(idtokenprovider);
    }
}
