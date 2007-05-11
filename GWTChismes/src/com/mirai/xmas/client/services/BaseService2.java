package com.mirai.xmas.client.services;

import java.rmi.RemoteException;
import java.util.Date;

import javax.ejb.CreateException;

import com.hotelebusiness.ReservationSystem.util.CalendarUtils;
import com.mirai.xmas.client.factories.EJBFactory;
import com.mirai.xmas.managers.HotelInfoMngr;
import com.mirai.xmas.managers.HotelInfoMngrHome;
import com.mirai.xmas.managers.ReservationMngr;
import com.mirai.xmas.managers.ReservationMngrHome;
import com.mirai.xmas.managers.InternationalMngr;
import com.mirai.xmas.managers.InternationalMngrHome;
import com.hotelebusiness.ReservationSystem.CacheReservationMngr;
import com.hotelebusiness.ReservationSystem.CacheReservationMngrHome;
import com.hotelebusiness.ReservationSystem.HotelInventoryMngr;
import com.hotelebusiness.ReservationSystem.HotelInventoryMngrHome;
import com.hotelebusiness.ReservationSystem.ConfigurationMngr;
import com.hotelebusiness.ReservationSystem.ConfigurationMngrHome;

public class BaseService2 {
    private ReservationMngr reservationMngr;
    private HotelInfoMngr hotelInfoMngr;
    private InternationalMngr internationalMngr;
    private CacheReservationMngr mreCacheReservationMngr;
    private HotelInventoryMngr mreHotelInventoryMngr;
    private ConfigurationMngr mreConfigurationMngr;
    
    //EJBFactory factory= EJBFactory.getInstance();
    
    private static BaseService2 hotelInstance= new BaseService2();
    private static final String XMAS_PROVIDER = "jnp://xmas-jboss:1099";
    private static final String MRE_PROVIDER = "jnp://mre-jboss:1099";

    private BaseService2() {
        System.out.println(" INIT: " + this.getClass().getName() + " " + CalendarUtils.date2fullstr(new Date()));
        getAllManagers();
        System.out.println(" END: " + this.getClass().getName() + " " + CalendarUtils.date2fullstr(new Date()));
    }

    public static BaseService2 getInstance() {
        return hotelInstance;
    }

    private void getAllManagers() {
        try {
            this.getXMASReservationManager();
            this.getMREHotelInfoManager();
            this.getMREInternationalManager();
            this.getMRECacheReservationManager();
            this.getMREHotelInventoryManager();
            this.getMREConfigurationManager();
        } catch (Exception e) {
            System.out.println("Exception in getAllManagers: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public ReservationMngr getXMASReservationManager() throws Exception {
        try {
            if (reservationMngr != null)
            	reservationMngr.testConnection();
        } catch (RemoteException e) {
            System.out.println("ReservationlMngr.test_connection Exception: " + e.getMessage());
            reservationMngr= null;
        }
        if (reservationMngr == null) {
        	ReservationMngrHome home= (ReservationMngrHome) EJBFactory.getInstance(XMAS_PROVIDER).getHome(ReservationMngrHome.JNDI_NAME);
            try {
            	reservationMngr = home.create();
            } catch (RemoteException e) {
                System.out.println("ReservationMngr RemoteException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            } catch (CreateException e) {
                System.out.println("ReservationMngr CreateException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            }
        }
        return reservationMngr;
    }

    public HotelInfoMngr getMREHotelInfoManager() throws Exception {
        try {
            if (hotelInfoMngr != null)
            	hotelInfoMngr.testConnection();
        } catch (RemoteException e) {
            System.out.println("HotelInfoMngr.test_connection Exception: " + e.getMessage());
            hotelInfoMngr = null;
        }
        if (hotelInfoMngr == null) {
            HotelInfoMngrHome home= (HotelInfoMngrHome) EJBFactory.getInstance(MRE_PROVIDER).getHome(HotelInfoMngrHome.JNDI_NAME);
            try {
            	hotelInfoMngr= home.create();
            } catch (RemoteException e) {
                System.out.println("HotelInfoMngr RemoteException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            } catch (CreateException e) {
                System.out.println("HotelInfoMngr CreateException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            }
        }
        return hotelInfoMngr;
    }
    
    public InternationalMngr getMREInternationalManager() throws Exception {
        try {
            if (internationalMngr != null)
            	internationalMngr.testConnection();
        } catch (RemoteException e) {
            System.out.println("InternationalMngr.test_connection Exception: " + e.getMessage());
            internationalMngr = null;
        }
        if (internationalMngr == null) {
            InternationalMngrHome home= (InternationalMngrHome) EJBFactory.getInstance(MRE_PROVIDER).getHome(InternationalMngrHome.JNDI_NAME);
            try {
            	internationalMngr= home.create();
            } catch (RemoteException e) {
                System.out.println("InternationalMngr RemoteException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            } catch (CreateException e) {
                System.out.println("InternationalMngr CreateException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            }
        }
        return internationalMngr;
    }
    
    
    public CacheReservationMngr getMRECacheReservationManager() throws Exception {
        try {
            if (mreCacheReservationMngr != null)
                mreCacheReservationMngr.testConnection();
        } catch (RemoteException e) {
            mreCacheReservationMngr = null;
        }
        if (mreCacheReservationMngr == null) {
            CacheReservationMngrHome home= (CacheReservationMngrHome) EJBFactory.getInstance(MRE_PROVIDER).getHome(CacheReservationMngrHome.JNDI_NAME);
            try {
                mreCacheReservationMngr = home.create();
            } catch (RemoteException e) {
                System.out.println("MRECacheReservationMngr RemoteException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            } catch (CreateException e) {
                System.out.println("MRECacheReservationMngr CreateException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            }
            
        }
        return mreCacheReservationMngr;
    }
    
    public HotelInventoryMngr getMREHotelInventoryManager() throws Exception {
        try {
            if (mreHotelInventoryMngr != null)
                mreHotelInventoryMngr.testConnection();
        } catch (RemoteException e) {
            mreHotelInventoryMngr = null;
        }
        if (mreHotelInventoryMngr == null) {
            HotelInventoryMngrHome home = (HotelInventoryMngrHome) EJBFactory.getInstance(MRE_PROVIDER).getHome(HotelInventoryMngrHome.JNDI_NAME);
            try {
                mreHotelInventoryMngr = home.create();
            } catch (RemoteException e) {
                System.out.println("MREHotelInventoryMngr RemoteException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            } catch (CreateException e) {
                System.out.println("MREHotelInventoryMngr CreateException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            }
        }
        return mreHotelInventoryMngr;
    }
    
    public ConfigurationMngr getMREConfigurationManager() throws Exception {
        try {
            if (mreConfigurationMngr != null)
                mreConfigurationMngr.testConnection();
        } catch (RemoteException e) {
            mreConfigurationMngr = null;
        }
        if (mreConfigurationMngr == null) {
            ConfigurationMngrHome home = (ConfigurationMngrHome) EJBFactory.getInstance(MRE_PROVIDER).getHome(ConfigurationMngrHome.JNDI_NAME);
            try {
                mreConfigurationMngr = home.create();
            } catch (RemoteException e) {
                System.out.println("MREConfigurationMngr RemoteException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            } catch (CreateException e) {
                System.out.println("MREConfigurationMngr CreateException: " + e.getMessage());
                e.printStackTrace();
                throw e;
            }
        }
        return mreConfigurationMngr;
    }
}