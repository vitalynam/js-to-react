// ---------------------------------ФУНКЦИИ----------------
const app = document.querySelector('.app');
const myName = `Vitaly Nam`;
const videoSrc = "https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4"
const imageProps = {
    src: './3d-cartoon-style-character.jpg',
    width: `300px`,
    height: `300px`,
    name: 'Anna'
}

function GetName(myName){
    return `${myName}`;
}

function GetButton(text, style){
    return `<button style = "${style}">${text}</button>`
}
function GetTitleVideo(title){
    return `<h2>${title}</h2>`;
}
function CreateVideo(link, style = `width:350px; height: 350px`){
    return `<video controls src="${link}" style = "${style}"></video>`
}

function CreateProfile({src, width, height, name}){
    return `<img src="${src}" 
            width="${width}" 
            height="${height}" 
            style = object-fit:cover;>
        <br>
            <h2>${name}</h2>`
}

app.innerHTML = `<h1>hello ${GetName(myName)}</h1> 
${GetButton(`update`, `background-color: navy; color: white;`)}
${GetButton(`like`, `background-color: maroon; color: white;`)}
${GetTitleVideo('Видео с кроликом')}
${CreateVideo(videoSrc, `width: 300px; height: 200px`)}
<br>
${CreateProfile(imageProps)}
`;

// -----------------------------------УСЛОВИЯ--------------

const container = document.querySelector('.container');
const defaultAvatar = "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png";
const profileAnna = {
    src: './3d-cartoon-style-character.jpg',
    name: 'Anna Lorayne',
    width: '300px'
};
const profileAlex = {
    src: null,
    name: null,
    width: '300px'
};

function MyApp(auth){
    let isAuth = auth;

    return `${isAuth ? '<span>welcome</span>' : '<span>please log-in</span>'}`
}
function CreateProfile2(props){
    return `
        <h2>Welcome, ${props.name || "what is your name?"}</h2>
        <img src = "${props.src || defaultAvatar}" width = ${props.width}>
    `
}

function DownloadButton (props){
    return`
        <button>
            <span> ${props.isPaid ? 'Download' : 'Buy now'} </span>
        </button>
    `
}


container.innerHTML = `
    ${MyApp(true)}
    <br>
    ${MyApp(false)}
    ${CreateProfile2(profileAnna)}
    ${CreateProfile2(profileAlex)}
    <br>
    ${DownloadButton({isPaid: false})}
`;