import React, { useState } from 'react';

const TitleResult = ({ careeries }) => {
  const [carreras, setCarreras] = useState(careeries[0].area);
  console.log(carreras);

  return (
    <div className='descriptionResult'>
      {carreras === 'c' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center '>
          <h2 className='descrip'>'Administrativas y Contables'</h2>
          <p className=''>
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
      ) : carreras === 'h' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'>' Humanísticas y Sociales '</h2>
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
      ) : carreras === 'a' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'>'Artísticas'</h2>
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
      ) : carreras === 's' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'>'Medicina y Cs. de la Salud '</h2>
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
      ) : carreras === 'i' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'>'Ingeniería y Computación'</h2>
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
      ) : carreras === 'd' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'> 'Defensa y Seguridad'</h2>
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
      ) : carreras === 'e' ? (
        <div className='d-flex flex-column justify-content-center mx-auto text-center'>
          <h2 className='descrip'> 'Ciencias Exactas y Agrarias'</h2>
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
