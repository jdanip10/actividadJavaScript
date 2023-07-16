let materials = localStorage.getItem('materialList')
materials = materials ? materials.split(',') :[]
showMaterial()

function addMaterial(){
    let material = document.getElementById('material').value
    material = material.split(',')
    for (let i = 0; i < material.length; i++) {
        if(material[i]){
            materials.push(material[i])
            showMaterial()
        }
    } 
    }
    function showMaterial(){
       document.getElementById('material').value= ''
       let html = ''
for (let i = 0; i < materials.length; i++) {
  // html = html + '<div class"col-10 mb-3"> ' + materials[i]+ '</div>'
   //html = html + '<div class"col-2">  <a href="#" class="btn btn-danger" onclick="deleteMaterial(' + i + ')"> X </a> </div>' 

   html += `<div class="col-10 mb-3"> ${materials[i]} </div>`
   html += `<div class="col"> <a href="#" class="btn btn-warning" onclick="deleteMaterial(${i})"> X </a> </div>`
}


localStorage.setItem('materialList', materials)
document.getElementById('materials').innerHTML = html

    }
function deleteMaterial(material){
materials.splice(material, 1)
showMaterial()

    }


