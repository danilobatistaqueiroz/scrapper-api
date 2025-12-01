clear;
cd /home/element/contatos/callAPI/converter-json-html;
export CONTACTS=/home/element/contatos/contacts
export SHARED=/home/element/contatos/shared
export TYPE_CONTACTS=FOLLOWERS
echo "converter";
pwd
npm run convert -- false $1