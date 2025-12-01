export LOGIN=danilo10queiroz10
#insta=danilo10.queiroz10

clear
cd /home/element/contatos/callAPI/scrapper-api
export CONTACTS=/home/element/contatos/contacts
export SHARED=/home/element/contatos/shared

export TYPE_CONTACTS=FOLLOWERS
export TYPE=followers

#export SCAN_CONTACTS=true
export LISTS=mocidade
#export INSTAS=veus

export VERSION=$(echo "$0" | sed 's/.sh//' | sed 's/.\///')
echo $VERSION

npm run scan --login="$LOGIN"