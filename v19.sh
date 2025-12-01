clear;
cd /home/element/contatos/callAPI/scrapper-api
export CONTACTS=/home/element/contatos/contacts
export SHARED=/home/element/contatos/shared

export TYPE_CONTACTS=FOLLOWERS
export TYPE=followers

#export INSTAS=namoro_com_proposito025
export SCAN_CONTACTS=true
#export LISTS=namoro

export VERSION=v19
echo $VERSION

export LOGIN=ryuhadouken9
npm run scan --login="$LOGIN"