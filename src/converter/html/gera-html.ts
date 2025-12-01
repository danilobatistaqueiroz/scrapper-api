import { User } from "../../types/contacts";

//** TODO: colocar checkers, um botão, gerar um xml, txt, html, seja o que for, para depois um script copiar as photos em outra pasta, e gerar outro hmtl só com os contatos selecionados */
async function createHeaderHtml() {
  const html = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color:black;
          color:white;
        }
        .contact {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .photo-contact {
          margin: 10px;
          text-align: center;
        }
        .photo {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .description {
          font-size: 16px;
          font-weight: bold;
        }
        .subtitle {
          font-size: 14px;
          color: #303030;
        }
      </style>
    </head>
    <body>
    `;
  return html;
}

async function createFooterHtml(html:string) {
  html = html+`
    </body>
    </html>`;
  return html;
}


export async function generateHtml(users:User[]) {
  //console.log('generateHtml');
  let html = await createHeaderHtml();
  let cnt = 0;
  html+= `<div>total de contatos: ${users.length}</div>`;
      users.forEach( (u:User) => {
        cnt++;
      html +=
      `
      <div class="contact" id="${u.username}" cnt="${cnt}">
        <div class="photo">
          <img src="${u.profile_pic_url}" />
        </div>
        <div class="description">
          <div><a href="https://www.instagram.com/${u.username}/" target="_blank">${u.username}</a></div>
          <div class="subtitle">${u.full_name}</div>
          <div class="private">Private: ${u.is_private}</div>
        </div>
      </div>
      <hr/>
      `;
    })
  html = await createFooterHtml(html);
  return html;
}