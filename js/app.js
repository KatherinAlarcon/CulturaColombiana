// Función para la linea de Tiempo
function mostrarDetalles(evento) {
    let detallesTexto = "";
    let nombreEvento = "";
    let imagenEvento="";
    let urlLeerMas = "";

    document.getElementById('imagen-evento').style.display = 'none';
    document.getElementById('leer-mas').style.display = 'none';

    if (evento === 'evento1') {
        nombreEvento = "Descubrimiento de América";
        detallesTexto =
            "Se conoce como “el descubrimiento de América” al momento histórico en el cual, por primera vez," +
            " exploradores navegantes europeos llegaron al continente americano. " +
            "Esto ocurrió el 12 de octubre de 1492, cuando una expedición española, comandada por Cristóbal Colón, llegó a la isla de Guanahani," +
            " perteneciente al archipiélago de las Antillas.\n" +
            "A partir de entonces, España y otros reinos europeos comenzaron a enviar expediciones de exploración y conquista de territorios que" +
            " estaban habitados por diferentes culturas y sociedades americanas. \n" +
            "\n" +
            "Estos eventos tuvieron profundas consecuencias que transformaron a las sociedades tanto de América, como de Europa, África y Asia. Por eso," +
            " muchos historiadores consideran al descubrimiento de América como el hito que divide a la Edad Media (476-1492) de la Edad Moderna (1492-1789).\n" ;
        imagenEvento= "img/Descubrimiento.jpg"
        urlLeerMas = "https://www.eafit.edu.co/biblioteca/sala-patrimonio-documental/Documents/Decubrimiento-america-oct-2020.pdf";
    } else if (evento === 'evento2') {
        nombreEvento = "Independencia de Colombia";
        detallesTexto = "La Independencia de Colombia o de Nueva Granada fue el proceso " +
            "histórico que dio por terminada la etapa regentada por el Imperio español en el actual" +
            " territorio del país. Dicho proceso se libró en medio de un conflicto militar desarrollado entre 1810 y 1819, conflicto que " +
            "se libró para emancipar los territorios que entonces comprendían el Virreinato de la Nueva Granada.\n" +
            "\n" +
            "El proceso hizo parte de las Guerras de independencia hispanoamericanas, una serie de luchas surgidas en América del Sur, " +
            "motivadas por la invasión francesa de España en 1808, que a su vez hizo parte de las Guerras napoleónicas en Europa.\n" +
            "\n" +
            "Los movimientos de la independencia comenzaron con la proclamación de las juntas de gobierno (sistemas de gobierno autónomo " +
            "en las colonias americanas) en 1810, que luego se agruparon en dos bandos liderados el uno por Antonio Nariño y el otro por Camilo" +
            " Torres Tenorio los cuales promovían gobiernos centralistas y federalistas respectivamente.";
        imagenEvento= "img/Independencia.jpg"
        urlLeerMas = "https://biblat.unam.mx/hevila/Trashumante/2015/no6/11.pdf";
    }  else if (evento === 'evento3') {
        nombreEvento = "La Gran Colombia";
        detallesTexto = "La creación de la Gran Colombia fue un proceso histórico que tuvo lugar a principios del siglo XIX y que marcó un " +
            "hito importante en la historia de América Latina. La Gran Colombia fue creada en 1819 por el líder político y militar Simón Bolívar " +
            "y unió a los territorios de Colombia, Venezuela, Ecuador y Panamá en una sola nación.\n" +
            "\n" +
            "La creación de la Gran Colombia fue el resultado de la lucha por la independencia de estos territorios del dominio español. Después" +
            " de la independencia, Bolívar se dio cuenta de que estos territorios eran más fuertes juntos que separados y comenzó a trabajar en " +
            "la creación de una nación unida.\n"+
            "\n" + "La Gran Colombia fue creada con el objetivo de unir a los territorios recién independizados en una sola" +
            " nación y de promover la cooperación y la solidaridad entre ellos. Bolívar creía que una nación unida sería más fuerte y más capaz de " +
            "resistir las amenazas internas y externas.";
        imagenEvento = "img/La-gran-colombia.jpg"
        urlLeerMas = "https://editorial.ucatolica.edu.co/index.php/RevClat/article/view/2744/2523";
    }else if (evento === 'evento4') {
        nombreEvento = "El Bogotazo";
        detallesTexto = "Corría el 9 de abril de 1948. En la ciudad de Bogotá comienzan graves disturbios tras conocerse la trágica noticia de que el" +
            " líder izquierdista del Partido Liberal, Jorge Eliécer Gaitán, había sido asesinado. Considerado uno de los acontecimientos más importantes" +
            " de la moderna Colombia, este episodio de violencia y frustración pasaría a los anales de la historia como “El Bogotazo”.\n" +
            "\n" +
            "Los colombianos recuerdan a Jorge Eliécer Gaitán como un gran político, bueno y dedicado a su país cuyo activismo fue detenido mediante" +
            " tres balas que acabarían con su vida. Con el paso del tiempo, surgirían guerrillas en el país latinoamericano que marcarían el resto del siglo XX " +
            "y parte del XXI..";
        imagenEvento= "img/El-bogotazo.jpg"
        urlLeerMas = "https://revistasojs.ucaldas.edu.co/index.php/eleuthera/article/view/2224";
    }

    document.getElementById('nombre-evento').innerText = nombreEvento;
    document.getElementById('detalles-text').innerText = detallesTexto;
    document.getElementById('imagen-evento').src = imagenEvento;
    document.getElementById('imagen-evento').style.display = 'block';
    document.getElementById('leer-mas').href = urlLeerMas;
    document.getElementById('leer-mas').style.display = 'inline-block';
    document.getElementById('detalles-evento').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('detalles').style.display = 'block';

}
// Seccion danza
document.addEventListener("DOMContentLoaded", () => {
    const playlistButtons = document.querySelectorAll(".play-btn");
    const audioPlayer = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");

    playlistButtons.forEach(button => {
        button.addEventListener("click", () => {
            const audioFile = button.getAttribute("data-audio");
            audioSource.src = audioFile;
            audioPlayer.load();
            audioPlayer.play();
        });
    });
});

//Seccion Musica
document.addEventListener("DOMContentLoaded", () => {
    const playlistButtons = document.querySelectorAll(".play-btn");
    const spotifyPlayer = document.getElementById("spotify-player");

    playlistButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const playlistId = button.getAttribute("data-playlist");
            // Cambia la URL del iframe al ID de la nueva lista de reproducción
            spotifyPlayer.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
        });
    });
});
