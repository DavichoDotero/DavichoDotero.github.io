
                var preguntas = [
                    "¿Cuanto es 2 + 2?",
                    "¿Cuanto es 5 + 5?",
                    "¿Cuál fue el primer país en aprobar el sufragio femenino?",
                    "¿En qué año llegó el hombre a la Luna?",
                    "¿Qué importante batalla tuvo lugar en 1815?",
                    "¿Cuál era la ciudad hogar de Marco Polo?",
                    "¿En qué año tuvo lugar el genocidio de Ruanda?",
                    "¿Quién fue el primer presidente de la democracia española después del franquismo?",
                    "¿Qué reina británica fue hija de los Reyes Católicos?",
                    "¿Por qué nombre se conocía a la traductora e intérprete del conquistador Hernán Cortés en tierras aztecas?",
                    "¿En qué año se disolvió la Unión Soviética?",
                    "¿Cómo se llaman los deportistas que practican Judo?",
                    "¿Cuáles son los colores de los cinco anillos olímpicos?",
                    "¿En qué deporte destacó Carl Lewis?",
                    "¿Dónde se inventó el Ping-Pong?",
                    "¿Qué atleta ostenta el récord de los 100 metros lisos?",
                    "¿Qué jugador de fútbol inventó un movimiento conocido como la “Gravesinha”?",
                    "¿Cómo se llamaba Muhammad Ali antes de adoptar este nombre?",
                    "¿Quién fue el campeón del mundo de Moto GP en 2017?",
                    "¿En qué equipo de béisbol jugó el famoso Derek Jeter?"
        
                ];
                var respuestas = [
                    ["4", "5", "7", "3"],
                    ["10", "5", "3", "1"],
                    ["Nueva Zelanda", "Estados Unidos", "Mexico", "brasil"],
                    ["1969", "1880", "1790", "2000"],
                    ["La batalla de waterloo", "ninguna", "Primera guerra mundial", "Segunda guerra mundial"],
                    ["Estados Unidos", "Nueva Zelanda", "Venecia", "brasil"],
                    ["1880", "2000", "1994", "1790"],
                    ["Adolfo Suárez", "Keith Highet", "Eduardo Vío Grossi", "ninguna"],
                    ["Catalina de Aragón", "Carla de Aragón", "Stefany de Aragón", "Dennis de Aragón"],
                    ["Malinche", "Carla", "Marta", "Maritza"],
                    ["1991", "2000", "1700", "1890"],
                    ["Judokas", "Boxeadores", "Peleadores", "ninguna"],
                    ["Amarillo, azul, negro, rojo y verde.", "Amarillo, azul, negro, rojo y violeta.", "Amarillo, azul, negro, rojo y gris", "azul, negro, rojo y gris"],
                    ["Atletismo", "Futbol", "Basketball", "Gimnasia"],
                    ["Inglaterra", "España", "Estados Unidos", "Rusia"],
                    ["Usain Bolt", "Phil Mickelson", "Neymar", "Leonel Messi"],
                    ["Thomas Gravessen", "Leonel Messi", "Cristiano Ronaldo", "Neymar"],
                    ["Cassius Clay", "Cassius Cloy", "Cassius Cluy", "ninguna"],
                    ["Marc Márquez", "Sebastian Márquez", "Juan Márquez", "ninguna"],
                    ["New York Yankees", "New Yankees", "Yankees", "ninguna"]
        
                ];
        jugar();
        
                var indicie_respuesta_correcta;
        
        function jugar(){
                    var indice_aleatorio = Math.floor(Math.random()*preguntas.length);
        
        
                var respuestas_posibles = respuestas[indice_aleatorio];
        
        
                var posiciones = [0,1,2,3];
                var respuestas_reordenadas = [];
        
                var bandera = false;
                for(i in respuestas_posibles){
                    var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
                    if(posicion_aleatoria==0 && bandera == false){
                        indicie_respuesta_correcta =i;
                        bandera = true;
                    }
                    respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
                    posiciones.splice(posicion_aleatoria, 1);
                }
        
                var txt_respuestas="";
                for(i in respuestas_reordenadas){
                    txt_respuestas += '<input type="radio" name="pp" value="'+i+'"><label>'+respuestas_reordenadas[i]+'</label><br>';
                }
        
                document.getElementById("respuestas").innerHTML = txt_respuestas;
                document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];
        
        }
        function comprobar(){
            var respuesta = $("input[type=radio]:checked").val();
        
            //alert(respuesta);
            //alert(indicie_respuesta_correcta);
            if(respuesta ==indicie_respuesta_correcta){
                document.getElementById("bien").play()
            }else{
                document.getElementById("mal").play()
            }
            setTimeout(()=>{
                jugar()
            },4000)
        
        }
            
        function getImage() {
            var imagen = document.getElementById('imagen')
            var url = "https://picsum.photos/800/400"
            fetch(url).then(response => {
                imagen.src = response.url
            }).catch(error => {
                alert("Ha ocurrido un error")
            })

        }