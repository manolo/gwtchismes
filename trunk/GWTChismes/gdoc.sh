#!/bin/sh


V=`grep "property name=\"version" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
DD=gwtchismes-$V/doc
[ ! -d "$DD" ] && exit

D=gwtchismes-$V/gdocs

V=`grep "property name=\"package.dir" build.xml | sed -e 's#^.*value="##' -e 's#".*$##'`
PD=$DD/$V/client
[ ! -d "$PD" ] && exit
echo $DD $PD

I=$DD/resources/inherit.gif



rm -rf  $D
mkdir -p $D

for i in $DD/allclasses-frame.html  $DD/index.html `find $PD`
do
	if [ -f "$i" ]
	then
		n=`basename $i`
		echo $i
		cat $i | sed -e 's#"[^"]*'$V'/client/#"#g' -e 's#"[^"]*resources/inherit.gif#"inherit.gif#g' > $D/$n
	fi
done

cp $I $D
echo $D/index.html

cat <<EOF >> $D/index.html
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-645641-4";
urchinTracker();
</script>

