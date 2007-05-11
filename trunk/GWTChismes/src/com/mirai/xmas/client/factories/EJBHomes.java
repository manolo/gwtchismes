package com.mirai.xmas.client.factories;


import java.util.HashMap;
import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;


public class EJBHomes {
	
	static final String INITIAL_CONTEXT_FACTORY = "org.jnp.interfaces.NamingContextFactory";
	static final String URL_PKG_PREFIXES = "org.jboss.naming:org.jnp.interfaces";
	static final String DEFAULT_PROVIDER_URL = "jnp://xmas-jboss:1099";

	private HashMap ejbHomes = new HashMap();;
	private Hashtable env= new Hashtable();
	private InitialContext ctx;

	public EJBHomes(String provider) {
		try {
			env.put(Context.INITIAL_CONTEXT_FACTORY, INITIAL_CONTEXT_FACTORY);
			env.put(Context.URL_PKG_PREFIXES, URL_PKG_PREFIXES);
            env.put(Context.PROVIDER_URL,provider);
			ctx= new InitialContext(env);
			System.out.println("EJBHome Factory created instance with PROVIDER_URL:  "  + provider);
		} catch (NamingException ex) {
			System.out.println("EJBFactory NamingException Singleton: " + ex.getMessage());
		}
	}

	public Object getHome(String aJndiName) {
		Object home= null;
		try {
			if (ejbHomes.containsKey(aJndiName)) {
				home= ejbHomes.get(aJndiName);
			} else {
				home= ctx.lookup(aJndiName);
				ejbHomes.put(aJndiName, home);
			}
		} catch (javax.naming.NamingException ne) {
            System.out.println("Pete por namingException: " + ne.getMessage());
            ne.printStackTrace();
			System.out.println("EJBFactory NamingException getHome: " + aJndiName + " " + ne.getMessage() + " env: " + env);
		}
		return home;
	}
}
