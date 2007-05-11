package com.mirai.xmas.client.utils;

import java.io.File;
import java.io.StringWriter;
import javax.xml.transform.Source;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.Templates;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.TransformerConfigurationException;
import com.saxonica.SchemaAwareTransformerFactory;
import net.sf.saxon.FeatureKeys;

public class XSLHotelAvaTransform {
    private Templates templates;
    
    public void prepare(String filename) {
        try {
            TransformerFactory transFactory = new SchemaAwareTransformerFactory();
            
            // 1 means Validation = Strict
            transFactory.setAttribute(FeatureKeys.SCHEMA_VALIDATION , Integer.valueOf(1));
            
            templates = transFactory.newTemplates(new StreamSource(new File(filename)));
        } catch (TransformerConfigurationException e) {
            e.printStackTrace();
        }
    }
    
    public String transform(String xmlFilename) {
        return transform(new StreamSource(new File(xmlFilename)));
    }
    
    public String transform(Source xmlSource) {
        StringWriter strWriter = new StringWriter(); 
        StreamResult outputTarget = new StreamResult(strWriter);
        
        try {
            templates.newTransformer().transform(xmlSource, outputTarget);
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return strWriter.toString();
    }
}
