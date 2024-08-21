import {
  SelectControl,
  __experimentalInputControl as InputControl,
  BaseControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {SORT_ORDER} from '../../../src/global/constants';
import {ORDER_BY,USER_ROLE} from "./constants";
import Select2 from 'react-select';

const {
  Select2AjaxControl
} = window.zoloModule;

const QuerySettings = ({attributes, setAttributes}) => {
  const {authorQuery} = attributes;

  return (
    <>
      <InputControl
        label={__('Item Limit', 'zoloblocks')}
        value={authorQuery.itemLimit}
        onChange={(itemLimit) => {
          setAttributes({authorQuery: {...authorQuery, itemLimit}});
        }}
        type="number"
        min={1}
        max={99}
        labelPosition="edge"
        __unstableInputWidth="64px"
      />

      <BaseControl label={__('Role', 'zoloblocks')}>
        <Select2
          classNamePrefix="zolo-select"
          options={USER_ROLE}
          value={authorQuery.role}
          onChange={(role) => setAttributes({ authorQuery: { ...authorQuery, role } })}
          isMulti={true}
          closeMenuOnSelect={false}
        />
      </BaseControl>

      <Select2AjaxControl
        label={__('Exclude', 'zoloblocks')}
        placeholder={__('Search...', 'zoloblocks')}
        sourceName='user'
        sourceType=''
        isMulti={true}
        value={authorQuery?.exclude || []}
        onChange={(exclude) => setAttributes({authorQuery: {...authorQuery, exclude}})}
      />

      <SelectControl
        label={__('Order By', 'zoloblocks')}
        value={authorQuery.orderby}
        onChange={(orderby) => {
          setAttributes({authorQuery: {...authorQuery, orderby}});
        }}
        options={ORDER_BY}
      />

      <SelectControl
        label={__('Sort Order', 'zoloblocks')}
        value={authorQuery.order}
        onChange={(order) => {
          setAttributes({authorQuery: {...authorQuery, order}});
        }}
        options={SORT_ORDER}
      />
    </>
  );
};

export default QuerySettings;
