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


renameFile() {
     f=$1; n=$2
     h=`echo "$f" | sed -e 's/^.*\///g' -e 's/\.cache.*$//'`
     new=`echo "$f" | sed -e "s/$h/file_$n/"`
     ## Rename file
     echo "$f $new"
     mv $f $new
     ## Change files which reference this hash
     perl -pi -e "s#$h#file_$n#g" $D/*cache*
}


## Look for hash-named files
renameFiles() {
   D=$1
   ext=$2
   a=1
   for f in $D/????????????????????????????????.cache.$ext
   do
     if [ -f "$f" ]
     then
        renameFile $f $a
        a=`expr $a + 1`
     fi
   done
}


## Folder with the compiled files (ie. gwtchismes-0.4/www/com.google.code.p.gwtcsample.GWTCSample)
PS=$DD/$M/com.google.code.p.gwtcsample.GWTCSample
[ ! -d "$PS" ] && echo "Folder $PS doesn't exists" && exit 1
DS=gwtchismes-$V/gsample

PJ=$DD/$M/jschismes.JsChismes
[ ! -d "$PJ" ] && echo "Folder $PJ doesn't exists" && exit 1
DJ=gwtchismes-$V/jslib

## Copy Original content to final folder
rm -rf  $DS $DJ
mkdir -p $DS
mkdir -p $DJ
cp -r $PS/* $DS
cp -r $PJ/* $DJ
cp -r ${PJ}Pretty/* $DJ

for e in js html png
do
  renameFiles $DS $e
  renameFiles $DJ $e
done

cd $DD/$M/ 
rm -rf jschismes
cp -r jschismes.JsChismes jschismes
rm -rf jschismes/*.css jschismes/*Pretty* jschismes/images/shell jschismes/images/basic-dialog
cp jschismes.JsChismes/GWTC-compressed.css jschismes
rm -f ../../jschismes-$V.zip
zip -q -r ../../jschismes-$V.zip jschismes

exit

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
