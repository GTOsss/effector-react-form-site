import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { getNameStrCode } from './code-examples';

interface IProps {}

const GetNameStr = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>getNameStr</h1>
      <div>
        Утилита, которая конкатенирует переданные строки через точку. Поддерживает подсветку полей состояния в
        тайпскрипте, что позволяет легче ориентироваться в больших объектах. В примере ниже, после открытия кавычек в
        form.getNameStr(), предложит варианты полей и подсветит ошибку, если будет указано несуществующее поле.
        {/* Применимо для указания пути в плоских(инлайн) объектах формата &#123;'user.name': &#123;...&#125;, serverId:
        &#123;...&#125; &#125; */}
        <br />
        <br />
        При навигации по полоским объектам, важно не забывать указывать флаг flat: true. Подробнее об этом флаге будет
        рассказано{' '}
        <Link to="/api/hooks/use-form" className="Link">
          здесь
        </Link>
        .
      </div>
      <CodeHighlighter code={getNameStrCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(GetNameStr);
