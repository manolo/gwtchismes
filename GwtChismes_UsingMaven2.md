This document describes how to add gwtchismes to a maven project, or how to create a new project using maven.

# Using gwtchismes in an existing maven project #

GWTChismes library is published using a [maven2-repo](http://code.google.com/p/gwtchismes/source/browse/#svn/trunk/mavenrepo) structure in svn.

To setup gwtchismes in a maven project just edit the pom.xml file and add the repository location and the gwtchismes dependency. Update the version tag with the latest.
```
 <project>
   [...]
   <repositories>
      [...]
      <repository>
        <id>gwtchismes</id>
        <url>http://gwtchismes.googlecode.com/svn/mavenrepo/</url>
      </repository>
    </repositories>
    <dependencies>
      [...]
      <dependency>
        <groupId>gwtchismes</groupId>
        <artifactId>gwtchismes</artifactId>
        <version>0.9.4</version>
        <scope>provided</scope>
      </dependency>
   </dependencies>
 </project>
```


# Creating a new gwtchismes project from scratch using maven #

  1. Create a new project using gwt-maven archetype and change to the generated folder
```
 $ mvn archetype:generate  -DarchetypeGroupId=org.codehaus.mojo \
   -DarchetypeArtifactId=gwt-maven-plugin  -DarchetypeVersion=1.1 \
   -DgroupId=com.foo  -DartifactId=myApplication

 $ cd myApplication
```
  1. Modify the generated pom.xml in order to:
    * use the appropriate gwt version.
```
  <properties>
      <gwt.version>2.0.3</gwt.version>
  </properties>
```
    * Maven is able to run GWTestCase (2.0.x) out of the box, so comment all the goals except the compile one, and make compile goal to be executed after the test phase, because you don't need to compile your project to javascript to run tests.
    * Add also your module(s) to the configuration.
```
  <plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>gwt-maven-plugin</artifactId>
    <executions>
       <execution>
        <phase>prepare-package</phase>
        <goals>
           <goal>compile</goal>
        </goals>
       </execution>
    </executions>
    <configuration>
         <runTarget>myGroupId.Application/Application.html</runTarget>
    </configuration>
  </plugin>
```
    * Now you should be able to run the project:
```
$ mvn clean compile test package
```
    * include the gwtchismes repository
```
   <repositories>
      <repository>
        <id>gwtchismes</id>
        <url>http://gwtchismes.googlecode.com/svn/mavenrepo/</url>
      </repository>
    </repositories>
```
    * add gwtchismes' dependency
```
    <dependencies>
     <dependency>
       <groupId>gwtchismes</groupId>
       <artifactId>gwtchismes</artifactId>
       <version>0.9.4</version>
       <scope>provided</scope>
     </dependency>
   </dependencies>
```
  1. Configure your project as an eclipse project (Optional)
```
 $ mvn eclipse:eclipse
```
  1. Edit gwt module file (/src/main/java/com/foo/Application.gwt.xml) and include GwtChismes dependency
```
      <inherits name="com.google.code.p.gwtchismes.GWTChismes"/>
      <stylesheet src='GWTC-compressed.css' />

```
  1. Code your application (./src/main/java/com/foo/client/Application.java)
```
public class Application implements EntryPoint {

  public void onModuleLoad() { 
     
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
  }
}
```
  1. Use maven to test, run in hosted mode, package etc. your application.
```
 $ mvn test
 $ mvn gwt-maven:gwt
 $ mvn  -Dgoogle.webtoolkit.compileSkip=true gwt-maven:gwt
 $ mvn package
```