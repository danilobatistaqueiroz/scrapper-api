export LOGIN=danfantonelli08
#insta=danfantonelli08

clear
cd /home/element/contatos/callAPI/scrapper-api
export CONTACTS=/home/element/contatos/contacts
export SHARED=/home/element/contatos/shared

export TYPE_CONTACTS=FOLLOWERS
export TYPE=followers

#export SCAN_CONTACTS=true
#export LISTS=namoro
export INSTAS=modas_branez

export VERSION=$(echo "$0" | sed 's/.sh//' | sed 's/.\///')
echo $VERSION

npm run scan --login="$LOGIN"