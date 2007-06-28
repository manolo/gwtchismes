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

for i in `find $PD`
do
	if [ -f "$i" ]
	then
		   # -e 's#'$P'#CCC#g' \
		   # -e 's#'$S'#SSS#g' \
		n=`basename $i | sed  \
		   -e 's#'$P'#GWTCC#g' \
		   -e 's#'$M'#GWTCMA#g' \
		   -e 's#'$S'#GWTCS#g' \
		   -e 's#EAF4040D8384E24D8796F3E82DCF48E0#GWTC-BR-gecko#g' \
		   -e 's#1ED28EE27FBB87B90EE5B5848DA2C2B7#GWTC-BR-gecko1_8#g' \
		   -e 's#481ECDDD695CEF888EF16BE45FD2A256#GWTC-BR-ie6#g' \
		   -e 's#49ECB4391D5E2C4291AD3A7D2366C43C#GWTC-BR-opera#g' \
		   -e 's#623FEE299B731455D9425EA337191171#GWTC-BR-safari#g' \
		  `
		echo "$i > $n"
		cat $i | sed \
		   -e 's#'$P'#GWTCC#g' \
		   -e 's#'$M'#GWTCMA#g' \
		   -e 's#'$S'#GWTCS#g' \
		   -e 's#EAF4040D8384E24D8796F3E82DCF48E0#GWTC-BR-gecko#g' \
		   -e 's#1ED28EE27FBB87B90EE5B5848DA2C2B7#GWTC-BR-gecko1_8#g' \
		   -e 's#481ECDDD695CEF888EF16BE45FD2A256#GWTC-BR-ie6#g' \
		   -e 's#49ECB4391D5E2C4291AD3A7D2366C43C#GWTC-BR-opera#g' \
		   -e 's#623FEE299B731455D9425EA337191171#GWTC-BR-safari#g' \
		   > $D/$n
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
