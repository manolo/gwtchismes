#!/usr/bin/perl
use Data::Dumper;


my @classes = ('Utils', 'DatePicker', 'IntervalSelector', 'Progress', 'Wait', 'Alert', 'Box', 'Button', 'Popup');
#my @classes = ('Utils');
#@classes = ('Progress', 'Utils');

my $path = "src/jschismes/client";

my %const;

sub processConst {
  $class = shift;
  my %c;
  $file=$class . ".java";
  open(F, "$file") || die $!;
  my $on = 0;
  my $com = "";
  while(<F>) {
   if (/\s*\/\*\*/) {
      $on = 1;
      $com = "";
   }
   if ($on && /\s*\*\s+(.*)$/) {
      $com .= $1;
   }
   $on = 0 if (/\s*\*\//);
   if (/^\s*(public|protected)\s+.*static\s+.*\s+([A-Z_]+)\s*=\s*"(\w+)"/) {
      my ($const, $nam) = ($2, $3);
      if ($com eq '' && /^.*\/\/ *\[(.+)\] *(.+)$/){
         $com=$2;
         $def=$1;
      }
      $c{$const}{nam}=$nam;
      $c{$const}{def}=$def;
      $c{$const}{com}=$com;
      $com="";
   }
  }
  close(F);
  return %c;
}

sub processFile {
  $class = shift;
  my %c;
  $file=$class . ".java";
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
   if (/^\s*public\s+$class\s*\(\s*JavaScriptObject/) {
      $c{desc} = $com;
      $com = "";
   }
   elsif (/\s*public\s+(.+)\s+(\w+)\s*\((.*)\)/) {
      my ($ret, $func, $arg) = ($1, $2, $3);
      my $set = ($ret =~ s/static\s+// ) ? "static" : "public";
      next if ($func eq "onChange");
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
sub printClass {
  my ($name, %c) = @_;
  my $desc = $c{desc};
  $desc =~ s/^[\r\n]+//g;
  $desc =~ s/[\r\n]+/\n    /g;
  print "\n== $name ==\n_${desc}_\n";

  my $t = printConstructor($name, %c);
  print "$t" if ($t);
  
  my $a = $c{public};
  $t = "";
  foreach my $idx (keys %$a) {
     $t .= printMethod(1, $name, $idx, %c);
  }
  print "   * Instance methods\n{{{\n$t}}}\n" if ($t ne '');

  $a = $c{static};
  $t = "";
  foreach my $idx (keys %$a) {
     $t .= printMethod(0, $name, $idx, %c);
  }
  print "   * Static methods\n{{{\n$t}}}\n" if ($t ne '');
}

sub printConstructor {
  my ($name, %c) = @_;
  my $desc = $c{desc};
  return if (!$desc);

  my $var = lc($name);
  my $ret = "";

  $ret .=  "   * Constructor\n";
  $ret .=  "{{{\nvar $var = new jsc.$name ({\n";

  foreach (split(/\s+/, $c{const})) {
   $d = $_;
   next if ($d eq '' || $d =~ /^\s+$/);
   $ret .=  "   " . $const{$d}{nam} . ": " . $const{$d}{def} . ",  // " . $const{$d}{com} . "\n";
  }

  $ret .=  "});\n}}}\n";
  return $ret;
}

sub printMethod {
      my ($public, $name, $idx, %c) = @_;
      my $var = $public ? lc($name) : "jsc.$name";
      my $set = $public ? "public": "static";
      my $func = $c{$set}{$idx}{func};
      my $ret = $c{$set}{$idx}{ret};
      my $arg = $c{$set}{$idx}{arg};
      my $com = $c{$set}{$idx}{com};
      $args = "";
      if ($arg && $arg ne '') {
         foreach my $a (split(/\s*,\s*/, $arg)) {
             if ($a =~ /^\w+\s+(.+)$/) {
                $args .= "$1, ";
             }
         }
         $args =~ s/[, ]+$//;
      }
      $ret =~ s/^.*\s+(\w+)\s*$/$1/g;
      $rets = "";
      if ($ret ne 'void') {
         $vname = lc($ret);
         $vname = "date" if ($vname eq 'javascriptobject' && $func !~ /data/i);
         $rets = "var " . $vname . " = ";
      }
     if ($com =~ /\n/) {
        $com = "/*\n$com\n*/"
     } else {
        $com = "/* $com */"
     }
     return "\n$com\n$rets$var.$func($args);\n";
}

sub printUtils {
  my ($name, %c) = @_;
  $var = lc($name);
  print "\n * $name\n{{{\n/* \n" . $c{desc} . "*/\n";
  my $a = $c{meth};
  foreach my $idx (keys %$a) {
      my $func = $c{meth}{$idx}{func};
      my $ret = $c{meth}{$idx}{ret};
      my $arg = $c{meth}{$idx}{arg};
      my $com = $c{meth}{$idx}{com};
      $args = "";
      if ($arg && $arg ne '') {
         foreach my $a (split(/\s*,\s*/, $arg)) {
             if ($a =~ /^\w+\s+(.+)$/) {
                $args .= "$1, ";
             }
         }
         $args =~ s/[, ]+$//;
      }
     $rets = "";
      if ($ret ne 'void') {
         $rets = "var " . lc($ret) . " = ";
      }
   }
}


%const = processConst("Const");
print docheader();
foreach my $cl (@classes) {
   my %c = processFile($cl);
   printClass($cl, %c);
}
print docsample();
print "_Manolo Carrasco Moñino_";


sub docheader {
  return <<EOF
_JsChismes is the exported version of the GWTChismes collection._

_The library has been developed using java and exported to javascript using gwt-compiler and [http://code.google.com/p/gwt-exporter/ gwt-exporter] library._

<wiki:toc max_depth="3" />

= Goal =

The set of widgets can be used directly in html pages without the need of knowing anything about gwt and java.

= Setup instructions =

 # Download last version of the library: jschismes-x.x.x.jar and uncompress it in a folder.
 # Include either the obfuscated or the readable version of the javascript library in your html file.  You can use relative paths or full qualified ones because the library has been compiled using cross-site linker. The library takes care loading dynamically the needed css and images.
{{{
<head>
 <script language="javascript" src="http://gwtchismes.googlecode.com/svn/trunk/website/jslib/jschismes.JsChismes.nocache.js"></script> 
 <!-- 
 <script language="javascript" src="http://gwtchismes.googlecode.com/svn/trunk/website/jslib/jschismes.JsChismesPretty.nocache.js"></script> 
 -->
</head>
}}}
 # Define the function jscOnLoad() wich is called once the library is loaded, and create the widgets using native javascript in your page. 
{{{
  <script>
      function jsOnLoad() {
        var calendar = new jsc.DatePicker({
          dialog: true,
          className: "GWTCDatePicker-custom",
          buttons: "flat",
          onSelect: function(data) {
            alert("Selected: " + jsc.Utils.formatDate(jsc.Const.LONG_FORMAT, data.selected) );
          }
        });
      }
  </script>
  <button name="Show datepicker" onClick="calendar.show()"/>
}}}

= Library API =

EOF
}
sub docsample {
   my $ret = "";
   open(F, "../public/JsChismes.html") || return;
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
