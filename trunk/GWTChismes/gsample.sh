#!/bin/sh
# 
# GWTChismes utilities
#
# This script is designed to change long names in GWT compiled files to short ones, 
# so it is possible to publish it in a google hosted domain webspace,
# or manage them in a svn repository like code.google.com
#
# The script rename the files and change references into files.
#
#                  Manuel Carrasco (2007)
#

## You must to execute 'ant sample' before run this script

## Look for the correct library version  
V=`grep "property name=\"version" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`

## Folder with the compiled sample (ie. gwtchismes-0.4/www)
DD=gwtchismes-$V/www
[ ! -d "$DD" ] && echo "Folder $DD doesn't exists" && exit 1

## Folder with the compiled files (ie. gwtchismes-0.4/www/com.google.code.p.gwtcsample.GWTCSample)
PD=$DD/$M/com.google.code.p.gwtcsample.GWTCSample
[ ! -d "$PD" ] && echo "Folder $PD doesn't exists" && exit 1

## Copy Original content to final folder
D=gwtchismes-$V/gsample
rm -rf  $D
cp -r $PD $D

## Look for hash-named files
a=1
for f in $D/????????????????????????????????.cache.*
do
     n=`echo "$f" | sed -e 's/^.*\///g' -e 's/\.cache.*$//'`
     new=`echo "$f" | sed -e "s/$n/file_$a/"`
     ## Rename file
     mv $f $new
     ## Change files which reference this hash
     perl -pi -e "s#$n#file_$a#g" $D/*cache*
     a=`expr $a + 1`
done

## Adds google analytics code to index file
# analitics="UA-645641-4"
analitics="UA-645641-6"

cat <<EOF >> $D/GWTCSample.html
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "$analitics";
urchinTracker();
</script>
EOF
