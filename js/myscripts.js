const recData = [
      {
         "rid":"101",
         "rname":"Nitish Yadav",
         "rdesg":"Software Developer Engineer 1",
         "rcompany":"Innostax Software Labs",
         "rrel":"Nitish and Bibhu worked in the same project.",
         "recomnd":"I wholeheartedly endorse Bibhu Kishan as a software engineer. His outstanding problem-solving skills not only played a pivotal role in overcoming project challenges but also consistently demonstrated his analytical prowess. Bibhu's dedication to finding efficient solutions showcases not only his technical expertise but also his commitment to excellence. His collaborative nature and strong communication skills make him a valuable team player. Bibhu would undoubtedly be an asset to any software development team, bringing both technical proficiency and a positive, proactive approach to the table."
      }
   ];

function clientTemplate(person){
	return `
		<div class="client row">
	        <div class="col-lg-4 col-md-12 client-img">
	            <img src="./img/testimonials/${person.rid}.jpg" alt="${person.rname}" class="img-fluid">
	            <h6>${person.rrel}</h6>
	        </div>
	        <div class="col-lg-8 col-md-12 about-client">
	            <h4 class="text-uppercase">${person.rname}</h4>
	             <h6>${person.rdesg}, ${person.rcompany}</h6>
	            <p class="para">${person.recomnd}</p>
	        </div>
    	</div>
		`
}

function myFunction(){
	document.getElementById('gp').innerHTML = `
	${recData.map(clientTemplate).join("")}
	`
}
