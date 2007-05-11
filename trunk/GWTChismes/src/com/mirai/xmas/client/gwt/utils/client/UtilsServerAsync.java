package com.mirai.xmas.client.gwt.utils.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface UtilsServerAsync {
    public void getI18n(String interfazName, String language, AsyncCallback callback);
}
