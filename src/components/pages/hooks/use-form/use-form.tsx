import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { controllerResult, useFormExample } from './code-examples';

interface IProps {}

const UseForm = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>useForm</h1>
      <div>
        Хук для использования формы внутри функционального компонента. Принимает объект с полем form, meta и
        resetUnmount.
        <ol className="List">
          <li>
            <span className="ListItemName">form</span>: используемая форма.
          </li>
          <li>
            <span className="ListItemName">meta</span>: данные для передачи в{' '}
            <Link to="/api/unit-types/$meta" className="Link">
              $meta
            </Link>{' '}
            формы.
          </li>
          <li>
            <span className="ListItemName">resetUnmount</span>: говорит, нужно ли сбрасывать состояние формы при
            размонтировании компонента. По умолчанию true.
          </li>
        </ol>
        <CodeHighlighter code={useFormExample} className="CodeHighlighter" />
        Принцип работы возвращаемых методов мы уже рассматривали выше, за исключением лишь controller и handleSubmit,
        так что здесь мы поговорим о них.
      </div>
      <ol className="List">
        <li>
          <span className="ListItemName">controller</span>: при вызове принимает объект с полями name, flat и validate и
          возвращает функцию, которая замыкает в себе эти значения.
          <ul className="List">
            <li>
              <span className="ListItemName">name</span>: имя поля. Вложенные поля можно задавать с испльзованием{' '}
              <Link to="/api/unit-types/form/get-name" className="Link">
                getName
              </Link>{' '}
              и{' '}
              <Link to="/api/unit-types/form/get-name-str" className="Link">
                getNameStr
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">flat</span>: в значении true, переданный аргумент name формата 'user.name'
              будет означать доступ к полю в объекте &#123; 'user.name': ' ' &#125;. Если же в flat будет false,
              controller получит доступ к полю вложенного объекта &#123; 'user': &#123; name: ' ' &#125; &#125;. По
              умолчанию false.
            </li>
            <li>
              <span className="ListItemName">validate</span>: принимает функцию валидации для поля формы, которая должна
              возвращать строку с ошибкой либо undefined.
            </li>
          </ul>
          Функция, которую возвращает первый вызов, не принимает никаких аргуметов и возвращает объект с методами для
          управления полем формы и информацией о нём.
          <CodeHighlighter code={controllerResult} className="CodeHighlighter" />
          <ul className="List">
            <li>
              <span className="ListItemName">input</span>:{' '}
              <Link to="/api/unit-types/form/$meta" className="Link">
                {' '}
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">form</span>:{' '}
              <Link to="/api/unit-types/form/$form" className="Link">
                данные о состоянии формы
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">meta</span>:{' '}
              <Link to="/api/unit-types/form/$meta" className="Link">
                мета формы
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">fieldState</span>: данные поля из{' '}
              <Link to="/api/unit-types/form/$fields-inline" className="Link">
                $fieldsInline
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">error</span>: содержит ошибку поля из{' '}
              <Link to="/api/unit-types/form/$meta" className="Link">
                $outerErrorsInline
              </Link>{' '}
              или{' '}
              <Link to="/api/unit-types/form/$errros-inline" className="Link">
                $errorsInline
              </Link>
              . Внешние ошибки из $outerErrorsInline имеют приоритет.
            </li>
            <li>
              <span className="ListItemName">innerError</span>: содержит ошибку поля из{' '}
              <Link to="/api/unit-types/form/$errros-inline" className="Link">
                $errorsInline
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">outerError</span>: содержит ошибку поля из{' '}
              <Link to="/api/unit-types/form/$meta" className="Link">
                $outerErrorsInline
              </Link>
              .
            </li>
            <li>
              <span className="ListItemName">isShowError</span>: булевое значение для условного рендеринга текста с
              ошибкой. Имеет значение true, если в isShowOuterError или isShowInnerError записано true.
            </li>
            <li>
              <span className="ListItemName">isShowOuterError</span>: булевое значение для условного рендеринга текста с
              внешней ошибкой.
            </li>
            <li>
              <span className="ListItemName">isShowInnerError</span>: булевое значение для условного рендеринга текста с
              ошибкой.
            </li>
            <li>
              <span className="ListItemName">validate</span>: содержит функцию валидации, переданную в controller.
            </li>
            <li>
              <span className="ListItemName">setFieldState</span>:
            </li>
            <li>
              <span className="ListItemName">setOrDeleteError</span>:
            </li>
            <li>
              <span className="ListItemName">setOrDeleteOuterError</span>:
            </li>
            <li>
              <span className="ListItemName">setOuterErrorsInlineState</span>:
            </li>
          </ul>
        </li>
        <li>
          <span className="ListItemName">handleSubmit</span>: метод для передачи в обработчик onSubmit формы. Отменяет
          действия по умолчанию события onSubmit.
        </li>
      </ol>
    </div>
  );
};

export default memo(UseForm);
