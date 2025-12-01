export LOGIN=danilo511330
#insta=danilo511330

clear;
cd /home/element/contatos/callAPI/scrapper-api
export CONTACTS=/home/element/contatos/contacts
export SHARED=/home/element/contatos/shared

export TYPE_CONTACTS=FOLLOWERS
export TYPE=followers

#export INSTAS=mocidadejdsaolourenco
#export SCAN_CONTACTS=true
export LISTS=ccb-sp

export VERSION=$(echo "$0" | sed 's/.sh//' | sed 's/.\///')
echo $VERSION

npm run scan --login="$LOGIN"