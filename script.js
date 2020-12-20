var name = ""
var email = ""
var reflection = ""

function updateReflection(){
	reflection = document.querySelector('#reflection').value;
  // document.querySelector('#reflection').style.background = "green"
  console.log(document.querySelector('#reflection'))
  console.log(refelction)
}

function updateName(){
	name = document.querySelector('#name').value;
}

function updateEmail(){
	email = document.querySelector('#email').value;
}

function printInfo() {
  alert("Successfully updated!\n reflection: " + reflection + "\n Email: " + email + "\n Name: " + name)
}

function getRandomInt(m) {
  return parseInt(Math.random() * parseInt(m));
}

function changeImage() {
  var imgs = [ "https://www.optics4kids.org/osa.o4k/media/optics4kids/siteimages/landing-images/refraction-arrow-animation.gif?ext=.gif","https://www.optics4kids.org/osa.o4k/media/optics4kids/colorblind.gif?ext=.gif", "https://www.optics4kids.org/osa.o4k/media/optics4kids/siteimages/colorillusion.gif?ext=.gif", "https://www.optics4kids.org/osa.o4k/media/optics4kids/hermanngridillusion-2.gif?ext=.gif", "https://www.optics4kids.org/osa.o4k/media/optics4kids/kanizsatriangle.gif?ext=.gif", "https://www.optics4kids.org/osa.o4k/media/optics4kids/muller-lyerillusion.gif?ext=.gif"]
	var imgEl = document.querySelector('#opticsImage');
	imgEl.src = imgs[getRandomInt(imgs.length)];
}

function printSave() {
  tagsHTML=""
  var checkboxEls = document.querySelectorAll('#checkbox');
			for (var checkbox of checkboxEls) {
				if (checkbox.checked === true){
          tagsHTML+="<text>" + (checkbox.value) + "</text><br/>"
        }
			}
  tagsHTML+="<br/><text>Saved!</text><br/><br/>"
  
  document.querySelector('.tags').innerHTML = tagsHTML;
}

function resetCheckbox(event) {
// 	var selectEl = document.querySelector('#coffee');
// 			selectEl.value = "";

	var checkboxEls = document.querySelectorAll('#checkbox');
			for (var checkbox of checkboxEls) {
        if(checkbox.checked === true){
				checkbox.checked = false;
        }
			}
document.querySelector('.tags').innerHTML = "";
}