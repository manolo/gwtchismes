package com.mirai.xmas.client.factories;


import java.util.HashMap;


public class EJBFactory {
	
	static final String INITIAL_CONTEXT_FACTORY = "org.jnp.interfaces.NamingContextFactory";
	static final String URL_PKG_PREFIXES = "org.jboss.naming:org.jnp.interfaces";

	// Si tenemos jboss en otra direccion, arrancar tomcat con opcion -DPROVIDER_URL="jnp://ip:port"
    // Para ello es necesario tocar el fichero catalina.sh
    //String dns = System.getProperty("DNS_URL","xmas-jboss:1098");
    //env.put(Context.DNS_URL,dns);
	static final String DEFAULT_PROVIDER_URL = "jnp://xmas-jboss:1099";

	static HashMap ejbProviders= new HashMap();
	static EJBFactory aHomeSingleton= new EJBFactory();
	
	private EJBFactory() {
		System.out.println("Instanciando EJBFactory");
	}

	static public EJBHomes getInstance() {
		return getInstance(DEFAULT_PROVIDER_URL);
		
	}

	static public EJBHomes getInstance(String provider) {
		if (!ejbProviders.containsKey(provider)) {
			ejbProviders.put(provider, new EJBHomes(provider));
		}
		return (EJBHomes)ejbProviders.get(provider);
	}

}
