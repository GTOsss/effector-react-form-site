import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { hookMeta, initMeta } from './code-examples';

interface IProps {}

const Meta = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$meta</h1>
      <div>
        Стор с метаданными формы, которые могут быть использованы для запуска различных сценариев по событию onSubmit.
        Их можно передать как при{' '}
        <Link to="/api/unit-creators/create-form" className="Link">
          инициализации формы
        </Link>
        :
      </div>
      <CodeHighlighter code={initMeta} className="CodeHighlighter" />
      <div>
        Так и динамически через hook{' '}
        <Link to="/api/hooks/use-form" className="Link">
          useForm
        </Link>
        :
      </div>
      <CodeHighlighter code={hookMeta} className="CodeHighlighter" />
    </div>
  );
};

export default memo(Meta);
