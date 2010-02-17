#!/usr/bin/perl

use Data::Dumper;
use strict;


###
###  This 'ugly' perl script creates the wiki page for JsChismes
###  It inspects the java classes looking for comments and put them in the wiki page.
###
###
###


# Folder with source java files
my $path = "src/jschismes/client/";
# Java classes to inspect
my @classes = ('Utils', 'DatePicker', 'IntervalSelector', 'WeekSelector', 'Progress', 'Wait', 'Alert', 'Box', 'Button', 'Popup', 'Editor');
# Class with static constants
my $constants = 'Const';
# Html file with javascript sample code
my $htmlsample = "src/jschismes/public/JsChismes.html";


my %const;


######## MAIN
%const = processConst($constants);

my $txt = "";

$txt .= docheader();
$txt .= printConst("Const");
foreach my $cl (@classes) {
   $txt .= printClass($cl, processFile($cl));
}
$txt .= docsample();
$txt .= "*Author:* _Manolo Carrasco Moñino_\n\n";
my $date = `date`;
$date =~ s/[\r\n]+//g;
$txt .= "*Date:* _${date}_\n\n";
$txt .= "This documentation has been generated automatically parsing comments in java files, if you realise any error, please report it\n\n";

$txt =~ s/,(\s*\/\/[^\n]*\n\s*\})/$1/sg;

print $txt;
exit;
########



sub processConst {
  my $class = shift;
  my %c;
  $c{class} = $class;

  my %c;
  my $file=$path . $class . ".java";
  open(F, "$file") || die $!;
  my $on = 0;
  my $com = "";
  while(<F>) {
   if (/\s*\/\*\*/) {
      $on = 1;
      $com = "";
   }
   if ($on && /\s*\*\s+(.*)$/) {
      $com .= $1 . "\n";
   }
   $on = 0 if (/\s*\*\//);
   if (/^\s*public\s+class\s+$class/) {
      $c{desc} = $com;
      $com = "";
   }
   if ( /(protected|private)\s+.*String.*\s+(T[XI]T_[A-Z]+).*\s+=\s+"([^\"]+).*$/ ) {
      my ($nam, $def) = ($3);
      if ($com eq '' && /\/\/\s*\((.+)\)\s*\[(.+)\]\s*(.*)$/) {
          $def = $2;
          $com = $3;
          my $c = $1;
          foreach (split(/[ ,]+/, $c)) {
            $c{const}{$_}{regional} .= "        $nam = $def, // $com\n";
          }
      }
      $com = "";
   }
   elsif (/^\s*(public|protected)\s+.*static\s+.*\s+([A-Z_]+)\s*=/) {

      my ($type, $const, $nam, $def) = ($1, $2, "", "");

      if ( /\s*=\s*\"([^"]+)/ ) {
         $nam = $1;
      }
      if ($com eq '' && /^.*\/\/(.+)$/){
         $com=$1;
      }
      $com =~ s/^[\s\r\n]+//g;
      $com =~ s/[\s\r\n]+$//g;
      if ($com =~ /^ *\[(.+)\] *(.+)/s){
         $com=$2;
         $def=$1;
         $com =~ s/\n/\n                                \/\/  /sg;
      }
      next if ($com =~ /\@not/);
      $c{const}{$const}{nam}=$nam;
      $c{const}{$const}{def}=$def;
      $c{const}{$const}{com}=$com;
      $c{const}{$const}{type}=$type;
      $com="";
   }
  }
  close(F);
  return %c;
}


sub processFile {
  my $class = shift;
  my %c;
  my $file=$path . $class . ".java";
  open(F, "$file") || die $!;
  my $on = 0;
  my $com = "";
  while(<F>) {
   if ($on && /\s*\*\s+(.*)$/) {
      $com .= $1 . "\n";
   }
   if (/\s*\/\*\*/) {
      $on = 1;
      $com = "";
   }
   $on = 0 if (/\s*\*\//);
   if (/^\s*public\s+class\s+$class\s*/) {
      $c{desc} = $com;
      $com = "";
   }
   if (/^\s*public\s$class\s*\(\s*JavaScriptObject/) {
      $c{hasconstructor} = 1;
      $c{desc} = $com if (! $c{desc});
      $com = "";
   }
   elsif (/\s*public\s+(.+)\s+(\w+)\s*\((.*)\)/) {
      my ($ret, $func, $arg) = ($1, $2, $3);
      my $set = ($ret =~ s/static\s+// ) ? "static" : "public";
      next if ($com =~ /\@not/);
      next if ($func =~ /^(onChange|onClick|run)$/);
      my $idx = "$func . $arg";
      $c{$set}{$idx}{func} = $func;
      $c{$set}{$idx}{ret} = $ret;
      $c{$set}{$idx}{arg} = $arg;
      $com =~ s/[\r\n]+$//;
      $com =~ s/^[\r\n]+//;
      $c{$set}{$idx}{com} = $com;
      $com="";
   } #public static native String
   if (/Const\.([A-Z_]+)/) {
       next if (defined $c{const} && $c{const} =~ / $1 /);
       #$c{const} .= " " if (defined $c{const});
       $c{const} .=  " $1 ";
   }
  }
  close(F);
  return %c;
}

sub printConst {
  my ($class) = @_;
  my $ret = "";
  my $tmp = $const{const};
  foreach (keys %$tmp) {
     if ($const{const}{$_}{type} eq 'public') {
        $ret .= "jsc.$class.$_ //" . $const{const}{$_}{com} . "\n";
     }
  }
  return ($ret ne '') ? "\n== $class ==\n_$const{desc}_\n   * Public static constants\n{{{\n$ret}}}\n" : "";
}

sub printClass {
  my ($name, %c) = @_;
  my $desc = $c{desc};
  $desc =~ s/^[\r\n]+//g;
  $desc =~ s/[\r\n]+/\n    /g;

  my $ret = unc("\n== $name ==\n_${desc}_\n");

  $ret .= printConstructor($name, %c) if ($c{hasconstructor});

  my $a = $c{public};
  my $t = "";
  foreach my $idx (keys %$a) {
     $t .= printMethod(1, $name, $idx, %c);
  }
  $ret .= "   * Instance methods\n{{{\n$t}}}\n" if ($t ne '');

  $a = $c{static};
  $t = "";
  foreach my $idx (keys %$a) {
     $t .= printMethod(0, $name, $idx, %c);
  }

  $ret .=  "   * Static methods\n{{{\n$t}}}\n" if ($t ne '');
  return $ret;
}

sub printConstructor {
  my ($name, %c) = @_;

  my $var = lc($name);
  my $ret = "";

  $ret .=  "   * Constructor\n";
  $ret .=  "{{{\nvar $var = new jsc.$name ({\n";

  foreach (split(/\s+/, $c{const})) {
   my $d = $_;
   next if ($d eq '' || $d =~ /^\s+$/);
   if ($d =~ /regional/i) {
     $ret .=  "   " . $const{const}{$d}{nam} . ": {     // " . $const{const}{$d}{com} . "\n" . $const{const}{$name}{regional} . "   },\n"
   } else {
     $ret .=  "   " . $const{const}{$d}{nam} . ": " . $const{const}{$d}{def} . ",  // " . $const{const}{$d}{com} . "\n";
   }
  }

  $ret .=  "});\n}}}\n";
  return $ret;
}

sub unc {
  my $w = shift;
  $w =~ s/([a-z])([A-Z])/"$1 ".uc($2)/eg;
  return $w
}

sub printMethod {
      my ($public, $name, $idx, %c) = @_;
      my $var = $public ? lc($name) : "jsc.$name";
      my $set = $public ? "public": "static";
      my $func = $c{$set}{$idx}{func};
      my $ret = $c{$set}{$idx}{ret};
      my $arg = $c{$set}{$idx}{arg};
      my $com = $c{$set}{$idx}{com};
      my $args = "";
      if ($arg && $arg ne '') {
         foreach my $a (split(/\s*,\s*/, $arg)) {
             if ($a =~ /^\w+\s+(.+)$/) {
                $args .= "$1, ";
             }
         }
         $args =~ s/[, ]+$//;
      }
      $ret =~ s/^.*\s+(\w+)\s*$/$1/g;
      my $rets = "";
      if ($ret ne 'void') {
         my $vname = lc($ret);
         $vname = "date" if ($vname eq 'javascriptobject' && $func !~ /data/i);
         $rets = "var " . $vname . " = ";
      }
     if ($com =~ /\n/) {
        $com = "/* $com */"
     } else {
        $com = "/* $com */"
     }
     return "\n$com\n$rets$var.$func($args);\n";
}


sub docheader {
  return <<EOF

_JSChismes is the exported version of the GWTChismes collection._

_The library has been developed using java and exported to javascript using gwt-compiler and [http://code.google.com/p/gwt-exporter/ gwt-exporter] library._

<wiki:toc max_depth="3" />

= Goals =

The set of widgets can be used directly in html pages without the need of knowing anything about gwt and java.
The generated javascript code is minimized, optimized and obfuscated and works fine in Gwt supported browsers.

= Setup instructions =

 # Download last version of the library: jschismes-x.x.x.jar and uncompress it in a folder.
 # Include either the obfuscated or the readable version of the javascript library in your html file.  You can use relative paths or full qualified ones because the library has been compiled using cross-site linker. The library takes care loading dynamically the needed images and css.
 # Define the function jscOnLoad() wich is called once the library is loaded, and create the widgets using native javascript in your page.
{{{
<html>
 <head>
  <script language="javascript" src="http://gwtchismes.googlecode.com/svn/trunk/website/jslib/jschismes.JsChismes.nocache.js"></script>
  <!--
   <script language="javascript" src="http://gwtchismes.googlecode.com/svn/trunk/website/jslib/jschismes.JsChismesPretty.nocache.js"></script>
  -->
 </head>
 <body>
  <script>
      var calendar;
      function jscOnLoad() {
        calendar = new jsc.DatePicker({
          dialog: true,
          className: "GWTCDatePicker-custom",
          buttons: "flat",
          onSelect: function(data) {
            alert("Selected: " + jsc.Utils.formatDate(jsc.Const.LONG_FORMAT, data.selected) );
          }
        });
      }
  </script>
  <button onClick="calendar.show()">Click Here</button>
 </body>
</html>
}}}

= Library API =

EOF
}

sub docsample {
   my $ret = "";
   open(F, $htmlsample) || die $! . " $htmlsample" ;
   my $on = 0;
   while(<F>) {
      $on = 0 if (/<\/script>/);
      $ret .= $_ if ($on);
      $on = 1 if (/<script / && !/<\/script>/);
   }
   close(F);
   $ret = "= Sample Code =\nYou can view this example  [http://gwtchismes.googlecode.com/svn/trunk/website/jslib/JsChismes.html here]\n{{{\n$ret\n}}}\n";
   return $ret;
}
exit;

