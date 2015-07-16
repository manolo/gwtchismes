## Usage of GWTChismes library. ##

  1. Download last version of the library: gwtchimes-x.x.x.jar and include it in your classpath.
  1. Configure your module file: Xxx.gwt.xml
```
<module>

  <!-- Include GWTChismes library -->
  <inherits name="com.google.code.p.gwtchismes.GWTChismes"/>
  <!-- Load dinamically GWTC Style sheets when the application starts -->
  <stylesheet src="GWTC-compressed.css"/>
  <!-- Include the locales you want in your application -->  
  <extend-property name="locale" values="es"/>
  <extend-property name="locale" values="en"/>
  <extend-property name="locale" values="ja"/>
   
  <!-- Change this line with your project's entry-point -->
  <entry-point class="package.Xxx"/>

</module>
```
  1. Use the widgets in your application
```
     // Alert
     final GWTCAlert alert = new GWTCAlert(); 
     alert.alert("Hello, you can put here any message");

     // Rounded Box
     GWTCBox box = new GWTCBox(GWTCBox.STYLE_BLUE);
     box.setTitle("A Title");
     box.setText("Sample text");
     RootPanel.get().add(box);

     // Modal DatePicker
     int options = GWTCDatePicker.CONFIG_DIALOG 
                 | GWTCDatePicker.CONFIG_ROUNDED_BOX 
                 | GWTCDatePicker.CONFIG_BACKGROUND;
     final GWTCDatePicker picker = new GWTCDatePicker(options);
     picker.addValueChangeHandler(new ValueChangeHandler<GWTCSimpleDatePicker>() {
       public void onValueChange(ValueChangeEvent<GWTCSimpleDatePicker> event) {
         alert.alert(event.getValue().getSelectedDateStr("MMMM dd, yyyy (dddd)"));
       }
     });

     // Button to show the datepicker
     Button button = new GWTCButton("Clickme to show a modal datepicker", new ClickHandler() {
        public void onClick(ClickEvent arg0) {
          picker.show();
        }
     });
     RootPanel.get().add(button);

     // ProgressBar
     GWTCProgress prgBar = new GWTCProgress(20, GWTCProgress.SHOW_TIME_REMAINING |
                                                GWTCProgress.SHOW_NUMBERS);
     RootPanel.get().add(prgBar);
     prgBar.setText("gwt-file.jar");
     prgBar.setProgress(50); // percent     

```