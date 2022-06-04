const BASE_URL="https://thatcopy.pw/catapi/rest/"; //para não precisar ficar pedindo o link sempre
const botaoCat=document.getElementById('change-cat');
const catImg=document.getElementById('cat');


const getCats = async() =>{
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    } catch (error) {
        console.log(e.message)
    }
}
const loadImg=async()=>{
    catImg.src = await getCats();
}

botaoCat.addEventListener('click', loadImg); //para o botão reagir ao click.