let materials = localStorage.getItem('materialList')
materials = materials ? JSON.parse(materials) : []
showMaterial()



function addMaterial() {
    let nameMaterial    = document.getElementById('material').value
    let descripMaterial= document.getElementById('descrip').value
    let valueMaterial   = document.getElementById('value').value

    if(nameMaterial && descripMaterial && valueMaterial){
        materials.push({ 'nombreArticulo': nameMaterial, 'descripArticulo': descripMaterial, 'valorArticulo': valueMaterial })
        showMaterial()
    }}
    function showMaterial() {
        document.getElementById('material').value       = ''
        document.getElementById('descrip').value    = ''
        document.getElementById('value').value      = ''
    
        let html = ''
        materials.forEach((elemt, index) => {
            html += `<div class="col-4 mb-3"> ${elemt.nombreArticulo} </div>`
            html += `<div class="col-4 mb-3"> ${elemt.descripArticulo} </div>`
            html += `<div class="col-2 mb-3">   ${elemt.valorArticulo} </div>`
            html += `<div class="col-2"> <a href="#" class="btn btn-primary" onclick="deleteMaterial(${index})"> X </a> </div>`
        });
        localStorage.setItem('materialList', JSON.stringify(materials))
        document.getElementById('materials').innerHTML = html
    }
    function deleteMaterial(material) {     
        materials.splice(material, 1)
        showMaterial()
    }