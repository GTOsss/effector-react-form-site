import { Link } from 'gatsby-plugin-intl';
import React from 'react';

const Form = () => {
  return (
    <div className="ComponentRoot">
      <h1>Unit type - Form</h1>
      <div>
        Форма - это совокупность сторов и ивентов, предназначенная для комфортной синхронизации данных html-форм и
        effector стейтом вашего приложения. При{' '}
        <Link to="/api/unit-creators/create-form" className="Link">
          инициализации
        </Link>
        , возвращается объект с совокупностью взаимосвязанных юнитов API effector и утилит. Как и во всех объектах, они
        доступны через ".", но, иногда, в примерах ниже мы будем использовать их через хук useForm для большего
        удобства. Более подробно, какие поля доступны через этот хук, мы описали{' '}
        <Link to="/api/hooks/use-form" className="Link">
          здесь
        </Link>
        .
      </div>
    </div>
  );
};

export default Form;
