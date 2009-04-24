package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportClosure;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

@Export
@ExportPackage("jsc")
@ExportClosure
public interface JsChangeClosure extends Exportable {

  @Export
  public void onChange(Object object);
  
}


