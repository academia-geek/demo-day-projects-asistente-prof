import React, { useState } from 'react';

const TitleResult = ({ careeries }) => {
  const [carreras] = useState(careeries[0].area);
  console.log(carreras);

  return (
    <div className='descriptionResult' style={{ marginTop: '100px' }}>
      {carreras === 'c' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center '>
          <h2 className='descrip'>Administrativas y Contables</h2>
          <p className=''>
            La ciencia y la técnica cuyo propósito es proporcionar información
            para la toma de decisiones económicas se llama contabilidad. Los
            contadores se encargan de las cuentas contables de las empresas,
            entidades o personas y reflejan los resultados en un estado contable
            o financiero. En el aspecto administrativo, por otra parte, es un
            adjetivo que se refiere a lo que pertenece o pertenece a la
            administración. Este concepto (administración) está vinculado al
            funcionamiento, la estructura y el rendimiento de una organización.
          </p>
        </div>
      ) : carreras === 'h' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'>Humanísticas y Sociales</h2>
          <p className='descipP'>
            Las humanidades y las ciencias sociales En pocas palabras, para
            aquellos que no saben qué son las humanidades, definimos humanidades
            como la voluntad de conocer el pasado y el presente mediante sus
            expresiones artísticas (arte, música y literatura), sus corrientes
            de pensamiento y la historia.
          </p>
        </div>
      ) : carreras === 'a' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'>Artísticas</h2>
          <p className='descipP'>
            Artística es todo lo que tiene que ver con el arte, es todo lo
            relativo o concerniente a las artes es sus diversas expresiones. La
            Artística se puede entender como una forma de comunicación a través
            de los sentidos, es decir, sensorial, donde está presente lo visual
            a través de la luz, las sombras, los colores y las imágenes, lo
            auditivo a través del sonido, lo sensorial en cuanto a las texturas,
            el lenguaje escrito y hablado, y lo gustativo y olfativo en cuanto a
            olores y sabores.
          </p>
        </div>
      ) : carreras === 's' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'>Medicina y Cs. de la Salud</h2>
          <p className='descipP'>
            La ciencia de la salud abarca una variedad de subdisciplinas, todas
            ellas relacionadas con la aplicación de la ciencia a la salud. Tanto
            la medicina tradicional occidental como la medicina alternativa
            pueden considerarse ciencias de la salud. Debido a que los humanos
            siempre han necesitado lidiar con la enfermedad, podría decirse que
            la ciencia de la salud ha existido desde hace tanto tiempo como los
            humanos.
          </p>
        </div>
      ) : carreras === 'i' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'>Ingeniería y Computación</h2>
          <p className='descipP'>
            Mundialmente/computer engineering. [ editar datos en Wikidata]
            Ingeniería en computadores, ingeniería en computación o ingeniería
            eléctrica y ciencias de la computación es una rama de ingeniería que
            integra varios campos de ciencias de la computación e ingeniería
            electrónica requeridos para desarrollar hardware y software.
          </p>
        </div>
      ) : carreras === 'd' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'>'Defensa y Seguridad'</h2>
          <p className='descipP'>
            La Carrera de Seguridad consiste en formar profesionales para asumir
            roles de asesoramiento, planificación, dirección y ejecución de
            tareas dirigidas a la seguridad pública o privada y a la defensa
            civil.
          </p>
        </div>
      ) : carreras === 'e' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'>Ciencias Exactas y Agrarias</h2>
          <p className='descipP'>
            Las Ciencias Agrarias se agrupan dentro de las carreras
            universitarias que se encargan del estudio de la ganadería y la
            agricultura. Esta rama de estudio se encarga de formar a
            profesionales en el mejoramiento de la calidad de los procesos de
            producción de la tierra y en el terreno de la ganadería. Se trabaja
            sobre la materia prima que genera los alimentos y sobre ésta se
            aplican conocimientos científicos, de investigación y tecnológicos.
            Las personas que decidan iniciar sus estudios universitarios en este
            ámbito deben ser capaces de desarrollar principios físicos, químicos
            y biológicos; además deben saber gestionar los recursos naturales,
            sociales y económicos que influyen sobre el proceso productivo.
          </p>
        </div>
      ) : null}
      <hr />
    </div>
  );
};

export default TitleResult;
