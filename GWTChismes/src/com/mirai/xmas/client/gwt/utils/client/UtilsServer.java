package com.mirai.xmas.client.gwt.utils.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.ServiceDefTarget;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;

public interface UtilsServer extends RemoteService {
	/**
	 * Utility class for simplifing access to the instance of async service.
	 */
	public static class Util {
		private static UtilsServerAsync instance;
		public static UtilsServerAsync getInstance(){
			if (instance == null) {
				instance = (UtilsServerAsync) GWT.create(UtilsServer.class);
				ServiceDefTarget target = (ServiceDefTarget) instance;
                String prefix = HelperClientGwt.isHostedMode() ? GWT.getModuleBaseURL() : "";
                target.setServiceEntryPoint(prefix + "/XMAS/utils");
			}
			return instance;
		}
	}
    public I18nGWT getI18n(String interfazName, String language);
}
