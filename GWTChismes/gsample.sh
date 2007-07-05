#!/bin/sh


V=`grep "property name=\"version" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
DD=gwtchismes-$V/www
[ ! -d "$DD" ] && exit

D=gwtchismes-$V/gwww

P=`grep "property name=\"package.name" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
M=`grep "property name=\"sample.module" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
S=`echo "$M" | sed -e 's#\.GWTCSample##'`
echo $V $P $M $S


PD=$DD/$M
[ ! -d "$PD" ] && exit
echo $DD $PD

rm -rf  $D
mkdir -p $D

echo $PD
echo $PD/$M.nocache.js
grep unflattenKeylistIntoAnswers $PD/$M.nocache.js

# -e 's#'$P'#CCC#g' \
# -e 's#'$S'#SSS#g' \
MGR="sed -e 's#$P#GWTCC#g' -e 's#$M#GWTCMA#g' -e 's#$S#GWTCS#g' "
for i in `grep unflattenKeylistIntoAnswers $PD/$M.nocache.js | grep "\[" | grep "\]" | cut -d "'" -f 2,4`
do
	br=`echo "$i" | cut -d "'" -f1`
	ha=`echo "$i" | cut -d "'" -f2`
	MGR="$MGR -e 's#$ha#GWTC-BR-$br#g'"
done

for i in `find $PD`
do
	if [ -f "$i" ]
	then
		n=`eval "basename $i | $MGR"`
		echo "$i > $n"
		eval "cat $i | $MGR" > $D/$n
	fi
done

cat <<EOF >> $D/GWTCSample.html
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-645641-4";
urchinTracker();
</script>
EOF
