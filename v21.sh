clear;
cd /home/element/contatos/callAPI/scrapper-api
export CONTACTS=/home/element/contatos/contacts
export SHARED=/home/element/contatos/shared

export TYPE_CONTACTS=FOLLOWERS
export TYPE=followers

#export INSTAS=casamento.com.cristo
#export SCAN_CONTACTS=true
export LISTS=contacts

export VERSION=$(echo "$0" | sed 's/.sh//' | sed 's/.\///')
echo $VERSION

export LOGIN=draklack
npm run scan --login="$LOGIN"