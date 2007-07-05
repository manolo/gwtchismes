#!/bin/sh
# 
# GWTChismes utilities
#
# This script is designed to change long names in GWT compiled files 
# to short ones, so is possible to publish it in a google hosted domain.
#
# The scrip rename the files and change references into files.
#
#                  Manuel Carrasco (2007)
#

## You must to do an 'ant sample' before run this script

## Look for the correct library version  
V=`grep "property name=\"version" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
## Folder with the compiled sample (ie. gwtchismes-0.4/www)
DD=gwtchismes-$V/www
[ ! -d "$DD" ] && exit

## Out folder for modified sample
D=gwtchismes-$V/gwww

## Look for package and sample module names
P=`grep "property name=\"package.name" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
M=`grep "property name=\"sample.module" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
S=`echo "$M" | sed -e 's#\.GWTCSample##'`

## Folder whit compiled files (ie. gwtchismes-0.4/www/com.google.code.p.gwtcsample.GWTCSample)
PD=$DD/$M
[ ! -d "$PD" ] && exit

## Main Javascript sample file (ie. gwtchismes-0.4/www/com.google.code.p.gwtcsample.GWTCSample/com.google.code.p.gwtcsample.GWTCSample.nocache.js)
JSF="$PD/$M.nocache.js"

## Create out folder
rm -rf  $D
mkdir -p $D

## calculate the egrep expression
MGR="sed -e 's#$P#GWTCC#g' -e 's#$M#GWTCMA#g' -e 's#$S#GWTCS#g' "
for i in `grep unflattenKeylistIntoAnswers $PD/$M.nocache.js | grep "\[" | grep "\]" | cut -d "'" -f 2,4`
do
	br=`echo "$i" | cut -d "'" -f1`
	ha=`echo "$i" | cut -d "'" -f2`
	MGR="$MGR -e 's#$ha#GWTC-BR-$br#g'"
done

## rename files and change its content
for i in `find $PD`
do
	if [ -f "$i" ]
	then
		n=`eval "basename $i | $MGR"`
		echo "$i > $n"
		eval "cat $i | $MGR" > $D/$n
	fi
done

## Adds google analytics code to index file
cat <<EOF >> $D/GWTCSample.html
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-645641-4";
urchinTracker();
</script>
EOF
