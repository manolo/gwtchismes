#!/bin/sh
C=../GWTChismes-website
M=../GWTChismes-mavenrepo
W=../GWTChismes-wiki

[ ! -d "$C" ] && echo "project doesn't exist: $C" && exit
[ ! -d "$M" ] && echo "project doesn't exist: $M" && exit
[ ! -d "$W" ] && echo "project doesn't exist: $W" && exit

[ ! -f "build.xml" ] && echo "build.xml don't exist" && exit

V=`grep "property name=\"version" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
[ -z "$V" ] && echo "Unable to get version from buld.xml" && exit

cat src/jschismes/public/JsChismes.html | sed -e 's/JsChismes.nocache/JsChismesPretty.nocache/g' > src/jschismes/public/JsChismesPretty.html

ant clean zip || exit

#echo "Executing gdoc"
sh gdoc.sh
#echo "Executing gsample"
sh gsample.sh

find $C/javadoc -name "*.html" -exec rm '{}' ';'
find $C/sample -name "*.html" -exec rm '{}' ';'
find $C/jslib -name "*.html" -exec rm '{}' ';'
find $C/jslib -name "*.js" -exec rm '{}' ';'

cmd="cp -r gwtchismes-$V/gdocs/*   $C/javadoc/"
echo "Executing: $cmd" && $cmd
cmd="cp -r gwtchismes-$V/gsample/* $C/sample/"
echo "Executing: $cmd" && $cmd
cmd="cp -r gwtchismes-$V/jslib/* $C/jslib"
echo "Executing: $cmd" && $cmd

for i in `find $C/javadoc $C/sample $C/jslib -name "*js"`
do
   JS="$JS $i"
done
for i in `find $C/javadoc $C/sample $C/jslib -name "*html"`
do
   HT="$HT $i"
done

if [ -n "$JS$HT" ]
then
   svn add $JS $HT
fi
if [ -n "$HT" ]
then
   svn propset svn:mime-type text/html $HT
fi

perl gjslib.pl > $W/JsChismes_Documentation.wiki

mkdir -p $M/gwtchismes/gwtchismes/$V
cp gwtchismes-$V.jar $M/gwtchismes/gwtchismes/$V
md5sum gwtchismes-$V.jar | awk '{print $1}' > $M/gwtchismes/gwtchismes/$V/gwtchismes-$V.jar.md5

cat <<EOF > $M/gwtchismes/gwtchismes/$V/gwtchismes-$V.pom
<?xml version="1.0" encoding="UTF-8"?><project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>gwtchismes</groupId>
  <artifactId>gwtchismes</artifactId>
  <version>$V</version>
  <description>GWTChismes Library, v$V</description>
</project>
EOF

