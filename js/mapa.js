document.addEventListener("DOMContentLoaded", function() {
    // Inicializar el mapa centrado en Colombia
    var map = L.map('map').setView([4.5709, -74.2973], 6); // Coordenadas aproximadas de Colombia

    // Cargar el mapa con el servicio de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Datos de algunos puntos turísticos de Colombia
    var puntosTuristicos = [
        {
            nombre: 'Cartagena',
            lat: 10.3910,
            lon: -75.4796,
            descripcion: 'Cartagena es una ciudad histórica y culturalmente rica, famosa por su puerto colonial, sus imponentes murallas y el casco antiguo amurallado que es Patrimonio de la Humanidad. Es conocida por sus coloridas calles, arquitectura colonial, y su vibrante vida nocturna. El Castillo de San Felipe de Barajas y las playas de Bocagrande son solo algunos de los muchos atractivos que la ciudad ofrece.'
        },
        {
            nombre: 'Bogotá',
            lat: 4.7110,
            lon: -74.0721,
            descripcion: 'Bogotá, la capital de Colombia, es una ciudad dinámica y llena de historia. En el corazón de la ciudad se encuentra la Plaza de Bolívar, rodeada por importantes edificios como la Catedral Primada y el Capitolio Nacional. Además, Bogotá cuenta con varios museos, como el Museo del Oro y el Museo Nacional, y es conocida por su vibrante vida cultural, desde teatros hasta festivales internacionales.'
        },
        {
            nombre: 'Medellín',
            lat: 6.2442,
            lon: -75.5812,
            descripcion: 'Medellín, también conocida como la "Ciudad de la Eterna Primavera", es famosa por su clima agradable y su impresionante transformación urbana. Fue una ciudad que pasó de ser un lugar asociado con la violencia a convertirse en un ejemplo de innovación, sostenibilidad y desarrollo urbano. En la ciudad se encuentran atractivos como el Parque Arví, el Pueblito Paisa y el famoso Museo de Antioquia.'
        },
        {
            nombre: 'Eje Cafetero',
            lat: 4.54,
            lon: -75.77,
            descripcion: 'El Eje Cafetero es una región de Colombia conocida por su paisaje montañoso, donde se producen algunos de los cafés más finos del mundo. Además de las plantaciones de café, esta región ofrece hermosos paisajes naturales, pueblos tradicionales como Salento y Manizales, y actividades como el avistamiento de aves y el senderismo. El Parque Nacional Natural Los Nevados es también uno de los puntos más destacados.'
        },
        {
            nombre: 'San Andrés',
            lat: 12.58333,
            lon: -81.7,
            descripcion: 'San Andrés es una isla caribeña que se caracteriza por su increíble belleza natural. Sus playas de arena blanca y aguas cristalinas hacen que sea un destino popular para quienes buscan relajarse y disfrutar del sol. Además, su mar de siete colores es uno de los principales atractivos, junto con actividades acuáticas como el buceo y el snorkel. La cultura de la isla tiene influencias de los afrodescendientes y es conocida por su música y gastronomía.'
        },
        {
            nombre: 'Villa de Leyva',
            lat: 5.633055,
            lon: -73.52555,
            descripcion: 'Villa de Leyva es uno de los pueblos más pintorescos de Colombia, conocido por su arquitectura colonial y su ambiente tranquilo. Su Plaza Mayor, una de las más grandes del país, está rodeada de edificios blancos con techos de teja roja. La ciudad es famosa por su clima templado, su belleza natural y sitios cercanos como el Museo de Fosiles y el Parque Arqueológico de Monquirá.'
        },
        {
            nombre: 'Isla de Barú',
            lat: 10.143888,
            lon: -75.6825,
            descripcion: 'La Isla de Barú es conocida por sus playas paradisíacas de arena blanca y aguas cristalinas. A pocos minutos en barco de Cartagena, es un lugar perfecto para disfrutar del sol, practicar deportes acuáticos y relajarse en un entorno natural. La playa más famosa es Playa Blanca, ideal para nadar, tomar el sol o disfrutar de un almuerzo fresco frente al mar.'
        },
        {
            nombre: 'Cali',
            lat: 3.4516,
            lon: -76.5320,
            descripcion: 'Cali, conocida como la "Sucursal del Cielo", es la capital de la salsa y uno de los destinos turísticos más importantes del Valle del Cauca. La ciudad es famosa por su música, su gastronomía y su vida nocturna. Entre los puntos más visitados se encuentran el Cristo Rey, la Zona Rosa, el Zoológico de Cali y el Parque de los Gatos.'
        },
        {
            nombre: 'Barranquilla',
            lat: 10.9634,
            lon: -74.7966,
            descripcion: 'Barranquilla es la cuarta ciudad más grande de Colombia y es famosa por su Carnaval, uno de los más grandes y coloridos de América Latina. La ciudad también es conocida por su puerto, su vida cultural y su gastronomía, especialmente el arroz con coco y el pescado frito. Entre sus atractivos destacan el Museo del Oro, el Parque Cultural del Caribe y el Malecón del Río.'
        },
        {
            nombre: 'Santuario de Las Lajas',
            lat: 0.80557,
            lon: -77.58602,
            descripcion: 'El Santuario de Las Lajas es un impresionante santuario católico ubicado en el cañón del río Guáitara, cerca de Ipiales, Nariño. Es famoso por su iglesia construida en un puente colgante entre dos enormes paredes de roca. Este lugar de peregrinaje es conocido por su belleza arquitectónica y natural, siendo uno de los destinos más visitados por los turistas y los devotos.'
        },
        {
            nombre: 'Laguna de Tota',
            lat: 5.5797,
            lon: -72.8839,
            descripcion: 'La Laguna de Tota, ubicada en el departamento de Boyacá, es la laguna más grande de Colombia. Este hermoso cuerpo de agua está rodeado de montañas y es un destino perfecto para quienes disfrutan del ecoturismo, el senderismo y el avistamiento de aves. Sus aguas cristalinas y las vistas panorámicas hacen de la laguna un lugar único para relajarse y conectarse con la naturaleza.'
        },
        {
            nombre: 'Ráquira',
            lat: 5.53889,
            lon: -73.63,
            descripcion: 'Ráquira es un pintoresco pueblo del departamento de Boyacá, conocido por su tradición artesanal y su arquitectura colonial. Es famoso por sus coloridas calles y por ser un centro de producción de cerámica, especialmente en las formas de figuras de animales y utensilios decorativos. Además, Ráquira ofrece una vibrante muestra de la cultura boyacense y es un excelente destino para los amantes de la artesanía.'
        },
        {
            nombre: 'Monguí',
            lat: 5.7225,
            lon: -72.84916666,
            descripcion: 'Monguí es un pequeño y encantador pueblo en Boyacá, famoso por su arquitectura colonial bien preservada y por ser uno de los Pueblos Más Bonitos de Colombia. Se destaca por sus estrechas calles empedradas, la iglesia de Nuestra Señora de los Remedios y sus paisajes montañosos. Monguí también es conocido por la fabricación de balones de fútbol a mano, una tradición que ha perdurado por generaciones.'
        },
        {
            nombre: 'Guatapé',
            lat: 6.2325,
            lon: -75.15861,
            descripcion: 'Guatapé, en el departamento de Antioquia, es un destino turístico muy popular por su impresionante paisaje natural y su vibrante ciudad. El lugar es famoso por la Piedra del Peñol, una formación rocosa gigante desde la cual se pueden observar vistas espectaculares de la región. El pueblo de Guatapé es conocido por sus coloridas fachadas de casas decoradas con zócalos que representan escenas locales y culturales.'
        },
        {
            nombre: 'Santa Marta',
            lat: 11.2408,
            lon: -74.1990,
            descripcion: 'Santa Marta, ubicada en la región caribeña de Colombia, es una ciudad costera conocida por su belleza natural y su rica historia. Además de sus hermosas playas como Playa Blanca y El Rodadero, Santa Marta es la puerta de entrada al Parque Nacional Natural Tayrona, uno de los destinos más visitados del país. También es famosa por ser el lugar donde descansan los restos del libertador Simón Bolívar en la Quinta de San Pedro Alejandrino.'
        },
        {
            nombre: 'Cañon del Chicamocha',
            lat: 6.816,
            lon: -73.01,
            descripcion: 'El Cañón del Chicamocha es uno de los paisajes más impresionantes de Colombia, ubicado en el departamento de Santander. Este cañón se puede explorar a través de un teleférico que ofrece vistas espectaculares de las montañas y el río Chicamocha. El Parque Nacional del Chicamocha es una excelente opción para disfrutar de deportes extremos y actividades de aventura.'
        },
        {
            nombre: 'Barichara',
            lat: 6.63611,
            lon: -73.223611,
            descripcion: 'Barichara es un hermoso pueblo colonial en Santander, conocido por sus calles empedradas y su arquitectura bien conservada. Este pueblo pintoresco es ideal para quienes buscan disfrutar de la tranquilidad, explorar el arte local y practicar caminatas por su paisaje montañoso. Además, es el punto de partida para la famosa "Caminata Real" que lleva a Guane.'
        },
        {
            nombre: 'Nevado del Cocuy',
            lat: 6.4333,
            lon: -72.283333,
            descripcion: 'El Nevado del Cocuy es un parque natural en los Andes, famoso por sus espectaculares paisajes montañosos y sus cumbres cubiertas de nieve. El parque es un destino popular para los amantes del senderismo y la escalada, con rutas que van desde caminatas suaves hasta expediciones más desafiantes para llegar a las cumbres más altas del nevado.'
        },
        {
            nombre: 'Desierto de la Tatacoa',
            lat: 3.23,
            lon: -75.17,
            descripcion: 'El Desierto de la Tatacoa es una vasta extensión de tierra árida que se caracteriza por sus formaciones rocosas y paisajes de tonos rojizos y grises. Este desierto, situado en el departamento del Huila, es un lugar fascinante para quienes disfrutan de la astronomía, ya que su cielo despejado ofrece algunas de las mejores vistas del universo en Colombia.'
        },
        {
            nombre: 'Pasto',
            lat: 1.2136,
            lon: -77.2819,
            descripcion: 'Pasto es la capital del departamento de Nariño y es conocida por su clima frío, su arquitectura colonial y sus hermosos paisajes. La ciudad es famosa por sus celebraciones del Carnaval de Negros y Blancos, y por ser un punto de acceso al volcán Galeras, uno de los volcanes más activos de Colombia. Además, Pasto cuenta con atractivos naturales como la Laguna de la Cocha.'
        },
        {
            nombre: 'La Guajira',
            lat: 11.5291,
            lon: -71.8755,
            descripcion: 'La Guajira es una región en el extremo norte de Colombia, famosa por sus desiertos, playas vírgenes y cultura indígena Wayuu. El Parque Nacional Natural de La Guajira es conocido por sus paisajes áridos, pero también por la belleza de sus playas como Punta Gallinas, la punta más septentrional de Sudamérica. La región es ideal para los aventureros que buscan una experiencia única en contacto con la naturaleza.'
        },
        {
            nombre: 'Catedral de Sal de Zipaquirá',
            lat: 5.0336,
            lon: -74.0254,
            descripcion: 'La Catedral de Sal de Zipaquirá es una maravilla arquitectónica ubicada bajo tierra, en una antigua mina de sal. Esta catedral, situada en Zipaquirá, Cundinamarca, es famosa por su belleza y por ser uno de los sitios religiosos más importantes del país. Los visitantes pueden caminar por sus pasillos y admirar las impresionantes esculturas en sal, además de disfrutar de una experiencia única de paz y espiritualidad.'
        },
        {
            nombre: 'Leticia',
            lat: -4.2170,
            lon: -69.9426,
            descripcion: 'Leticia es la capital del Amazonas colombiano, un destino turístico clave para explorar la selva tropical, los ríos y la biodiversidad de la región amazónica. Desde Leticia se pueden hacer excursiones a la selva, observar fauna exótica y conocer comunidades indígenas que habitan en la zona. Además, Leticia es el punto de entrada al Parque Nacional Natural Amacayacu, que protege gran parte del ecosistema amazónico.'
        },
        {
            nombre: 'Parque Nacional Natural Amacayacu',
            lat: -3.4597,
            lon: -70.3090,
            descripcion: 'Este parque natural está ubicado en la región amazónica y es uno de los mayores atractivos ecológicos de Colombia. En Amacayacu, los visitantes pueden experimentar la biodiversidad única del Amazonas, con bosques lluviosos, ríos caudalosos, fauna como delfines rosados, y una variedad de especies animales y vegetales que hacen de este parque un lugar de increíble belleza natural.'
        },
        {
            nombre: 'Puerto Nariño',
            lat: -3.7732,
            lon: -70.3569,
            descripcion: 'Puerto Nariño es un tranquilo pueblo en el Amazonas colombiano, cerca del río Amazonas, y es conocido por ser un destino ecoturístico ideal. Este pueblo se destaca por su belleza natural y por la oportunidad de observar el delfín rosado en sus aguas, hacer recorridos por la selva y conocer las comunidades indígenas que habitan en la región. Además, es famoso por sus políticas de conservación ambiental.'
        },
        {
            nombre: 'Guaviare',
            lat: 2.5669,
            lon: -72.6362,
            descripcion: 'El departamento de Guaviare es conocido por su paisaje natural único, que incluye formaciones rocosas, ríos, y una exuberante selva. Guaviare es famoso por su turismo de aventura, incluyendo excursiones por el río Inírida, la observación de fauna, y el avistamiento de petroglifos antiguos. En este departamento se pueden encontrar zonas arqueológicas y también es conocido por sus impresionantes caños, como Caño Cristales.'
        },
        {
            nombre: 'Caño Cristales',
            lat: 2.5817,
            lon: -74.1967,
            descripcion: 'Caño Cristales, también conocido como el "río de los cinco colores", es uno de los destinos más sorprendentes de Colombia, ubicado en la región del Guaviare. Durante los meses de lluvias, el río se transforma en un espectáculo visual con aguas de diferentes colores gracias a las plantas acuáticas que crecen en sus lechos. Es un destino para ecoturismo y aventura en medio de la naturaleza selvática del país.'
        },
        {
            nombre: 'San José del Guaviare',
            lat: 2.5772,
            lon: -72.6405,
            descripcion: 'San José del Guaviare es la capital del departamento de Guaviare y es conocido por ser un punto de acceso a los paisajes naturales más impresionantes de la región. Desde aquí, los turistas pueden hacer recorridos por los alrededores, visitar caños, cascadas y formaciones rocosas, así como explorar los parques naturales cercanos y aprender sobre la cultura indígena de la zona.'
        },
        {
            nombre: 'Yopal',
            lat: 5.3351,
            lon: -72.3927,
            descripcion: 'Yopal es la capital del departamento de Casanare, conocida por su cercanía a la llanura del Orinoco. Este destino turístico ofrece una experiencia de ecoturismo en los llanos colombianos, con actividades como paseos en caballo, observación de fauna silvestre, y la práctica de deportes como el rafting en los ríos cercanos. Yopal también es famoso por sus hermosos atardeceres y paisajes abiertos de sabana.'
        },
        {
            nombre: 'Parque Natural El Tuparro',
            lat: 3.1293,
            lon: -69.4075,
            descripcion: 'El Parque Natural El Tuparro es un parque nacional ubicado en el departamento de Vaupés, cerca del Guaviare. Este parque es famoso por sus paisajes naturales, sus formaciones rocosas, y su diversidad de fauna. Es ideal para quienes buscan aventuras en la naturaleza, como el senderismo, y explorar la biodiversidad de la región amazónica, además de disfrutar de las aguas cristalinas de los ríos que lo atraviesan.'
        },
        {
            nombre: 'Fortul',
            lat: 5.6411,
            lon: -71.9190,
            descripcion: 'Fortul es un municipio en el departamento de Arauca, cerca de la región de los llanos, conocido por su belleza natural y su biodiversidad. Este destino ecoturístico es ideal para quienes buscan explorar los Llanos Orientales y sus paisajes únicos, llenos de fauna como caimanes, aves y capibaras, además de disfrutar de actividades como el avistamiento de fauna y paseos por el río.'
        },
        {
            nombre: 'Casanare Llanero',
            lat: 5.3413,
            lon: -71.7153,
            descripcion: 'La región de Casanare es famosa por su inmensa sabana, los llanos, y su cultura llanera. Es ideal para quienes desean vivir la experiencia del campo colombiano y disfrutar de actividades tradicionales como el joropo, las caminatas por la sabana y la observación de fauna silvestre, incluyendo caballos, aves y el ganado típico de la región.'
        },
        {
            nombre: 'Villavicencio',
            lat: 4.1481,
            lon: -73.6379,
            descripcion: 'Villavicencio es la capital del Meta, conocida como la puerta de entrada a los Llanos Orientales. Es famosa por su cultura llanera, su gastronomía, y sus paisajes que combinan las montañas de la cordillera de los Andes con las vastas sabanas llaneras. Es un excelente punto de partida para explorar el Parque Nacional Natural La Macarena.'
        },
        {
            nombre: 'Parque Nacional Natural La Macarena',
            lat: 2.2358,
            lon: -74.2056,
            descripcion: 'Este parque es uno de los más impresionantes de Colombia, conocido por sus espectaculares paisajes naturales, las formaciones rocosas de la Sierra de La Macarena y los hermosos caños de colores, como el Caño Cristales. Es un paraíso para los ecoturistas y los amantes de la naturaleza.'
        },
        {
            nombre: 'Caño Cristales',
            lat: 2.5817,
            lon: -74.1967,
            descripcion: 'Conocido como el "río de los cinco colores", Caño Cristales es uno de los destinos más asombrosos de Colombia, ubicado en el Parque Nacional Natural La Macarena. Durante los meses de lluvia, sus aguas se tiñen de una increíble variedad de colores debido a las plantas acuáticas que crecen en su lecho.'
        },
        {
            nombre: 'Puerto Gaitán',
            lat: 4.2324,
            lon: -71.8006,
            descripcion: 'Puerto Gaitán es un pequeño municipio en el Meta que se encuentra junto al río Meta. Es un destino ideal para quienes buscan un lugar tranquilo para disfrutar de la naturaleza, el ecoturismo y la pesca deportiva. El paisaje se caracteriza por vastos llanos, ríos y fauna típica de la región.'
        },
        {
            nombre: 'Parque Nacional Natural Tinigua',
            lat: 3.4770,
            lon: -73.7340,
            descripcion: 'Este parque natural está en el departamento del Meta y protege una gran biodiversidad de flora y fauna de la región amazónica. Es un excelente destino para quienes buscan el ecoturismo y aventuras en la selva, con recorridos por el río Guaviare, observación de animales y caminatas por la jungla.'
        },
        {
            nombre: 'Guaviare',
            lat: 2.5669,
            lon: -72.6362,
            descripcion: 'El departamento de Guaviare, en la región de la Amazonía, es conocido por sus paisajes naturales únicos, que incluyen formaciones rocosas, ríos y su biodiversidad. Es ideal para el ecoturismo y el turismo de aventura, con recorridos por la selva, avistamiento de fauna y exploración de petroglifos antiguos.'
        },
        {
            nombre: 'Inírida',
            lat: 3.8710,
            lon: -67.9610,
            descripcion: 'Inírida es la capital de Guainía, conocida por su cercanía al río Inírida y la biodiversidad de la región amazónica. Ofrece recorridos en canoa por los ríos, observación de fauna, y una inmersión en las culturas indígenas de la zona, además de paisajes tropicales excepcionales.'
        },
        {
            nombre: 'Parque Natural Nukak',
            lat: 2.0300,
            lon: -70.1670,
            descripcion: 'El Parque Natural Nukak es uno de los parques más remotos de Colombia, ubicado en la región del Guainía, y es hogar de la comunidad indígena Nukak. El parque protege vastas áreas de selva tropical y su biodiversidad, además de ser una excelente opción para los viajeros que buscan ecoturismo en territorios vírgenes.'
        },
        {
            nombre: 'Vaupés',
            lat: 1.5000,
            lon: -70.2000,
            descripcion: 'El Vaupés es un departamento que ofrece una impresionante biodiversidad y cultura indígena. Se caracteriza por sus vastas selvas y ríos. Es un destino ideal para quienes buscan una experiencia auténtica en el corazón de la Amazonía, con comunidades indígenas como los Tucanos y los Cubeos.'
        },
        {
            nombre: 'Pto. Carreño',
            lat: 4.1878,
            lon: -69.1903,
            descripcion: 'Puerto Carreño es la capital de Vichada, situada en la orilla del río Orinoco. Es un punto de conexión con Venezuela y una puerta de entrada a los Llanos Orientales. Su atractivo principal son los paisajes de sabana, la vida silvestre y las actividades acuáticas en el Orinoco, ideal para el ecoturismo y la observación de fauna.'
        }


    ];

    // Agregar los marcadores al mapa
    puntosTuristicos.forEach(function(punto) {
        L.marker([punto.lat, punto.lon])
            .addTo(map)
            .bindPopup('<strong>' + punto.nombre + '</strong><br>' + punto.descripcion);
    });
});