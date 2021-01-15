export default `import React, { useRef, useState } from 'react';
import { useStore } from 'effector-react';
import { List, ListRowProps } from 'react-virtualized';
import { useForm, makeNested, createForm, createNameHelper } from 'effector-react-form';
import cn from 'classnames';

const INPUT_HEIGHT = 50;

const fields = new Array(1000).fill(null).map((el, i) => ({ value: '', id: i }));

type FieldItem = {
  id: string | number;
  value: string;
};

type Values = {
  fields: FieldItem[];
};

const nameHelper = createNameHelper<Values>();

const form = createForm<Values>({
  initialValues: { fields },
  validate: ({ values }) => {
    const errors = {};
    values.fields.forEach((field, i) => {
      if (!field.value) {
        errors[nameHelper.getStr('fields', i, 'value')] = 'Field is required';
      }
    });

    return errors;
  },
  onSubmit: ({ values, form, errorsInline, meta }) => {
    if (form.hasError) {
      const errors = makeNested(errorsInline);
      errors.fields.some((field, i) => {
        if (field.value) {
          meta.setScrollTop(i * INPUT_HEIGHT);
          return true;
        }
      });
    } else {
      alert(JSON.stringify(values, null, '  '));
    }
  },
});

const Input = ({ controller, label }) => {
  const { input, isShowError, error } = controller();

  return (
    <div className="input-wrap" title={error}>
      <label>{label}</label>
      <input {...input} value={input.value || ''} className={cn('input', { 'input-error': isShowError })} />
    </div>
  );
};

const Form = () => {
  const refList = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const { handleSubmit, controller } = useForm({ form, meta: { setScrollTop } });

  const values = useStore(form.\$values);

  const renderRow = ({ key, index, style }: ListRowProps) => (
    <div key={key} style={style}>
      <Input
        label={\`Field \${values.fields[index].id}\`}
        controller={controller({ name: \`fields.\${values.fields[index].id}.value\` })}
      />
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <List
          ref={refList}
          height={350}
          width={420}
          rowCount={values.fields.length}
          rowHeight={INPUT_HEIGHT}
          rowRenderer={renderRow}
          scrollTop={scrollTop}
          onScroll={({ scrollTop }) => setScrollTop(scrollTop)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

`;
