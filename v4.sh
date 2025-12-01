export LOGIN=clarkmorgaro
#insta=clark.morgaro

clear;
cd /home/element/contatos/callAPI/scrapper-api
export CONTACTS=/home/element/contatos/contacts
export SHARED=/home/element/contatos/shared

export TYPE_CONTACTS=FOLLOWERS
export TYPE=followers

export INSTAS=colabsjorgeccb
#export SCAN_CONTACTS=true
#export LISTS=veus

export VERSION=$(echo "$0" | sed 's/.sh//' | sed 's/.\///')
echo $VERSION

npm run scan --login="$LOGIN"


#curl -X PATCH -H "Content-Type: application/json" -d '{"scrapper":"v4"}' http://127.0.0.1:3000/followers/colabsjorgeccb;