import JsonExample from '@components/json-example';
import cn from 'classnames';
import { Store } from 'effector';
import { Form } from 'effector-react-form';
import React, { memo, useState } from 'react';
import Settings from '../../assets/images/Settings.svg';
import styles from './styles.module.scss';

interface IProps {
  form: Form;
  $formSnapshot?: Store<any>;
}

const StoresContainer = ({ form, $formSnapshot }: IProps) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showedStores, setShowedStores] = useState({
    $values: true,
    $fieldsInline: true,
    $form: true,
    $errorsInline: false,
    $outerErrorsInline: false,
    $meta: false,
    $allFormState: false,
    $formSnapshot: Boolean($formSnapshot),
  });

  return (
    <div className={styles.root}>
      <div className={styles.filterWrapper}>
        <button className={styles.settingButton} onClick={() => setShowFilter((prev) => !prev)}>
          <Settings className={styles.settingsIcon} />
        </button>
        <div className={cn(styles.filter, { [styles.visible]: showFilter })}>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="filter"
              id="$values"
              checked={showedStores.$values}
              onClick={() => setShowedStores((prev) => ({ ...prev, $values: !prev.$values }))}
              className={cn(styles.checkbox, { [styles.checked]: showedStores.$values })}
            />
            <label htmlFor="$values">$values</label>
          </div>

          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="filter"
              id="$fieldsInline"
              checked={showedStores.$fieldsInline}
              onClick={() => setShowedStores((prev) => ({ ...prev, $fieldsInline: !prev.$fieldsInline }))}
              className={cn(styles.checkbox, { [styles.checked]: showedStores.$fieldsInline })}
            />
            <label htmlFor="$fieldsInline">$fieldsInline</label>
          </div>

          {$formSnapshot && (
            <div className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                name="filter"
                id="$form"
                checked={showedStores.$formSnapshot}
                onClick={() => setShowedStores((prev) => ({ ...prev, $formSnapshot: !prev.$formSnapshot }))}
                className={cn(styles.checkbox, { [styles.checked]: showedStores.$formSnapshot })}
              />
              <label htmlFor="$form">$formSnapshot</label>
            </div>
          )}

          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="filter"
              id="$form"
              checked={showedStores.$form}
              onClick={() => setShowedStores((prev) => ({ ...prev, $form: !prev.$form }))}
              className={cn(styles.checkbox, { [styles.checked]: showedStores.$form })}
            />
            <label htmlFor="$form">$form</label>
          </div>

          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="filter"
              id="$errorsInline"
              checked={showedStores.$errorsInline}
              onClick={() => setShowedStores((prev) => ({ ...prev, $errorsInline: !prev.$errorsInline }))}
              className={cn(styles.checkbox, { [styles.checked]: showedStores.$errorsInline })}
            />
            <label htmlFor="$errorsInline">$errorsInline</label>
          </div>

          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="filter"
              id="$outerErrorsInline"
              checked={showedStores.$outerErrorsInline}
              onClick={() => setShowedStores((prev) => ({ ...prev, $outerErrorsInline: !prev.$outerErrorsInline }))}
              className={cn(styles.checkbox, { [styles.checked]: showedStores.$outerErrorsInline })}
            />
            <label htmlFor="$outerErrorsInline">$outerErrorsInline</label>
          </div>

          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="filter"
              id="$meta"
              checked={showedStores.$meta}
              onClick={() => setShowedStores((prev) => ({ ...prev, $meta: !prev.$meta }))}
              className={cn(styles.checkbox, { [styles.checked]: showedStores.$meta })}
            />
            <label htmlFor="$meta">$meta</label>
          </div>

          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="filter"
              id="$allFormState"
              checked={showedStores.$allFormState}
              onClick={() => setShowedStores((prev) => ({ ...prev, $allFormState: !prev.$allFormState }))}
              className={cn(styles.checkbox, { [styles.checked]: showedStores.$allFormState })}
            />
            <label htmlFor="$allFormState">$allFormState</label>
          </div>
        </div>
      </div>
      <div className={cn('row flex-wrap', styles.jsonWrapper)}>
        {showedStores.$values && <JsonExample source={form.$values} className={styles.jsonExample} title="$values" />}
        {showedStores.$fieldsInline && (
          <JsonExample source={form.$fieldsInline} className={styles.jsonExample} title="$fieldsInline" />
        )}
        {$formSnapshot && showedStores.$formSnapshot && (
          <JsonExample source={$formSnapshot} className={styles.jsonExample} title="$formSnapshot" />
        )}
        {showedStores.$form && <JsonExample source={form.$form} className={styles.jsonExample} title="$form" />}
        {showedStores.$errorsInline && (
          <JsonExample source={form.$errorsInline} className={styles.jsonExample} title="$errorsInline" />
        )}
        {showedStores.$outerErrorsInline && (
          <JsonExample source={form.$outerErrorsInline} className={styles.jsonExample} title="$outerErrorsInline" />
        )}
        {showedStores.$meta && <JsonExample source={form.$meta} className={styles.jsonExample} title="$meta" />}
        {showedStores.$allFormState && (
          <JsonExample source={form.$allFormState} className={styles.jsonExample} title="$allFormState" />
        )}
      </div>
    </div>
  );
};

export default memo(StoresContainer);
