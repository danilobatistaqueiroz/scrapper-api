export LOGIN=next
#insta=next.dj.yes

clear;
cd /home/element/contatos/callAPI/scrapper-api
export CONTACTS=/home/element/contatos/contacts
export SHARED=/home/element/contatos/shared

export TYPE_CONTACTS=FOLLOWING
export TYPE=following

#export INSTAS=sil_veus
#export SCAN_CONTACTS=true
export LISTS=ccb-sp

export VERSION=$(echo "$0" | sed 's/.sh//' | sed 's/.\///')
echo $VERSION

npm run scan --login="$LOGIN"