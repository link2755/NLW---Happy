

//create map
const map = L.map("mapid").setView([-23.4984164,-47.456044], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    icoSize: [58, 68],
    iconAnchor: [29, 68],
})

//create and add marker

let marker;

map.on('click', function(event) {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    // remover icon

    marker && map.removeLayer(marker)

    //add icon iconLayer


    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})



//adicionar o campo de fotos

function addPhotoField(){
    //pegar o container de fotos #images

    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-image

    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo esta vazio se sim nao adicionar ao container de imagens
    const input = newFieldContainer.children[0]; 
    if(input.value ==""){
        return
    } 
    //limpar o campo antes de adicionar ao container
    newFieldContainer.children[0].value = ""
    //adicionar o clone ao container de #imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""

        return
    }

    //deletar o campo
    span.parentNode.remove();

}


//select yes or no
function toggleSelect(event){

    //pegar o botao clicado



    //retirar a classe active dos botoes
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active')
    })
    //adicionara class active nesse botao
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se sim ou nao
    input.value = button.dataset.value

}

function validate(event) {

    
    const lat = document.querySelector('[name = lat]')
    console.log(lat)
    const lng = document.querySelector('[name = lng]')
    console.log(lng)
    const needsLatAndLng = (lat == '' && lng == '')
    
    if(needsLatAndLng){
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }else{
        return
    }
    


}