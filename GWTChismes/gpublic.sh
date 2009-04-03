#!/bin/sh
C=../GWTChismes-public

[ ! -d "$C" ] && echo "GWTChismes-public project don't exist: $C" && exit

[ ! -f "build.xml" ] && echo "build.xml don't exist" && exit


V=`grep "property name=\"version" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
[ -z "$V" ] && echo "Unable to get version from buld.xml" && exit


ant clean zip || exit

sh gdoc.sh
sh gsample.sh

find $C/javadoc -name "*.html" -exec rm '{}' ';'
find $C/sample -name "*.html" -exec rm '{}' ';'
find $C/sample -name "*.js" -exec rm '{}' ';'

cp -r gwtchismes-$V/gdocs/*   $C/javadoc/
cp -r gwtchismes-$V/gsample/* $C/sample/


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

