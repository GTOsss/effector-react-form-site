import { Link } from 'gatsby-plugin-intl';
import React from 'react';

const index = () => {
  return (
    <div className="ComponentRoot">
      <h1>fieldArray</h1>
      <div>
        Позволяет работать напрямую с полями формы, являющимися массивом. Предоставляет объект с методами push и remove
        для комфортной работы с массивами в формах. Предоставляет метод map через хук{' '}
        <Link to="/api/hooks/use-field-array" className="Link">
          useFieldArray
        </Link>
        .
      </div>
    </div>
  );
};

export default index;
