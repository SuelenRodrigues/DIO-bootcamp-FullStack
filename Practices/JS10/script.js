// let button = document.getElementById('btn');
// let img = document.getElementById('pictures');

// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// button.addEventListener('click', loading);

// async function showCat(){
    

//     try{
//         const DATA = await fetch(BASE_URL);
//         const JSON = await data.json(); 
//         return json.webpur1;
//     } catch(e){
//         console.log(e.message);
//     }

//     //ALTERNATIVE CODE
//     // const DATA = await fetch(BASE_URL)
//     // .then((res) => res.json())
//     // .catch((e) => console.log(e));
//     // return DATA.webpur1;


// }

// async function loading(){
//     button.classList.add('clicked');
//     button.innerHTML = 'Change cat';
//     img.src = await showCat();
// }

// loading();

// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// const getCats = async () => {
// 	try {
// 		const data = await fetch(BASE_URL);
// 		const json = await data.json();
// 		return json.webpurl;
// 	} catch (e) {
// 		console.log(e.message);
// 	}
// };

// const loadImg = async () => {
// 	const img = document.getElementsByTagName('img')[0];
// 	img.src = await getCats();
// };

// loadImg();

// const btn = document.getElementById('change-cat');
// btn.addEventListener('click', loadImg);';


const BASE_URL = 'https://source.unsplash.com/random/500x400/?cats';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
        console.log(typeof data);
		const json = await data.url;
        console.log(json);
 		return json;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
    console.log(img);
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('btn');
btn.addEventListener('click', loadImg);

