import React, { useContext } from 'react'
import profileContext from '../context/ProfileContext'

const AboutMeSpanish = () => {
    const {lightMode} = useContext(profileContext)


  return (
    <div className={lightMode ? 'bg-white mt-4 2xl:mt-10 rounded p-6 2xl:p-10 text-[#002259] max-h-[65vh] md:max-h-[70vh] overflow-y-scroll scrollbar-hide' : 'bg-[#223343] border-2 mt-4 2xl:mt-10 rounded p-6 2xl:p-10 text-white max-h-[65vh] md:max-h-[70vh] overflow-y-scroll scrollbar-hide' }>
                <p className='2xl:text-xl font-bold'>¡Hola, mi nombre es Víctor! Encantado de saludarte &#128075;</p>
                <br></br>
                <p className='2xl:text-lg'>En primer lugar, quiero darte las gracias por el simple hecho que estés aquí leyendo sobre mi, creeme que para mi es muy importante. </p>
                <br></br>
                <p className='2xl:text-lg'>Nací en la encantadora localidad de La Palma del Condado, un pueblecito de Huelva. Desde temprana edad, mi pasión por los deportes se hizo evidente, lo que me llevó a decidir estudiar Ciencias de la Actividad Física y del Deporte. Durante mi formación académica, debido a mi pasión por este deporte, me sumergí en el fascinante mundo del fútbol y me convertí en preparador físico.</p>
                <br></br>
                <p className='2xl:text-lg'>Tras concluir mis estudios universitarios, inicié mi camino hacia la profesionalización. Fue ahí cuando me di cuenta que había un vacío de información entre la preparación física en fútbol y el ámbito táctico. Es por ello que en el año 2016 (como pasa el tiempo...), en colaboración con un buen amigo, dimos vida a una empresa centrada en entrenamientos de fútbol, donde buscamos inspirar y guiar a presentes y futuros entrenadores de fútbol.</p>
                <br></br>
                <p className='2xl:text-lg'>Ahora viene lo interesante... &#128516;</p>
                <br></br>
                <p className='2xl:text-lg'>Fue entonces cuando comencé a desarrollar, junto con mi hermano (desarrollador web) de forma autodidacta una plataforma para entrenadores de futbol para la empresa, utilizando React y Node JS entre otras herramientas.  La experiencia fue tan gratificante que decidí dar un paso más allá para seguir formándome y me embarqué en un máster tecnológico de casi un año de duración en Assembler Institute of Technology.</p>
                <br></br>
                <p className='2xl:text-lg'>El viaje que me ha llevado desde mi pasión por el deporte hasta el mundo de la programación ha sido una aventura enriquecedora, y estoy convencido de que cada paso dado me ha preparado para afrontar con éxito las oportunidades que el futuro tiene reservadas para mí. ¡Estoy listo para hacer realidad mis sueños y dejar mi huella en el mundo de la tecnología!</p>
                <br></br>
                <p>PD: Además del deporte, me encanta viajar, una buena charla con amigos y la cerveza. Y lo que más me gusta, es juntar todo esto al menos una vez al año.  </p>
            </div>
  )
}

export default AboutMeSpanish