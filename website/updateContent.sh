#!/bin/sh

[ -n "$1" -a -d "$1" ] && D=$1 || D=../GWTChismes
C=`pwd`

[ ! -d "$D" ] && echo "GWTChismes sources don't exist: $D" && exit
cd $D

[ ! -f "build.xml" ] && echo "build.xml don't exist" && exit


V=`grep "property name=\"version" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
[ -z "$V" ] && echo "Unable to get version from buld.xml" && exit


ant clean jar javadoc sample || exit

rm -rf $C/javadoc && mv gwtchismes-$V/doc $C/javadoc

rm -rf $C/com.google.code.p.gwtcsample.GWTCSample && mv gwtchismes-$V/www/com.google.code.p.gwtcsample.GWTCSample $C


mkdir -p $C/mavenrepo/gwtchismes/gwtchismes/$V
cp gwtchismes-$V.jar $C/mavenrepo/gwtchismes/gwtchismes/$V
md5sum gwtchismes-$V.jar | awk '{print $1}' > $C/mavenrepo/gwtchismes/gwtchismes/0.9.0/gwtchismes-$V.jar.md5

cat <<EOF > $C/mavenrepo/gwtchismes/gwtchismes/$V/gwtchismes-$V.pom
<?xml version="1.0" encoding="UTF-8"?><project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>gwtchismes</groupId>
  <artifactId>gwtchismes</artifactId>
  <version>$V</version>
  <description>GWTChismes Library, v$V</description>
</project>
EOF

