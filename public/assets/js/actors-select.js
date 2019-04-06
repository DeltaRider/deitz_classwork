function getAnimals(){
	$('div').empty();

	$.ajax({
		url: '/animals.json',
		method: 'GET'
	}).then(function(animals){
		for (var animalIndex in animals){
			// console.log(actorIndex);
			// console.log(actors[actorIndex]);
			// console.log(actors);

			var p = $('<p>'); // <p></p>

			//one way
				// p.text(JSON.stringify(actors[actorIndex]))

			//another way
				// p.text("id: " + actors[actorIndex].id + ", actor name: " + actors[actorIndex].actor_name)

			//another way
				p.text(`id: ${animals[animalIndex].id}, animal name: ${animals[animalIndex].animal_name}`)


			$('div').prepend(p);
		}
	})
}
