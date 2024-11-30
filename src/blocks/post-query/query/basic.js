import {__} from "@wordpress/i18n";
import Select2 from "react-select";
import AsyncSelect from 'react-select/async';
import {loadPostsOptions, orderByOptions, postStatusOptions, usePostTypes} from "../utils";
import {
  BaseControl,
  __experimentalInputControl as InputControl,
  SelectControl,
  ToggleControl
} from "@wordpress/components";

const {TabDynamicControl} = window.zoloModule;
const BasicQuery = ({query, setQuery, attributes, setAttributes}) => {
  const {postTypesSelectOptions} = usePostTypes();

  return (
    <>
      <TabDynamicControl
        names={['post', 'order', 'pagination']}
        post={
            <>
              <BaseControl label={__('Post Type', 'zoloblocks')} className="zolo-flex-col-control">
                <Select2
                  classNamePrefix="zolo-select"
                  options={postTypesSelectOptions}
                  value={query?.postType}
                  onChange={(value) => setQuery({ ...query, postType: value })}
                  isMulti={true}
                  key='postType'
                />
              </BaseControl>
              <BaseControl label={__('Post Status', 'zoloblocks')} className="zolo-flex-col-control">
                <Select2
                  classNamePrefix="zolo-select"
                  options={postStatusOptions}
                  value={query?.postStatus}
                  onChange={(value) => setQuery({ ...query, postStatus: value })}
                  isMulti={true}
                  key='postStatus'
                />
              </BaseControl>
              <BaseControl label={__('Post In', 'zoloblocks')} className="zolo-flex-col-control">
                <AsyncSelect
                  classNamePrefix="zolo-select"
                  cacheOptions
                  defaultOptions
                  loadOptions={loadPostsOptions}
                  value={query?.postIn}
                  onChange={(value) => setQuery({ ...query, postIn: value })}
                  isMulti={true}
                  key='postIn'
                />
              </BaseControl>
              <BaseControl label={__('Parent In', 'zoloblocks')} className="zolo-flex-col-control">
                <AsyncSelect
                  classNamePrefix="zolo-select"
                  cacheOptions
                  defaultOptions
                  loadOptions={loadPostsOptions}
                  value={query?.parentIn}
                  onChange={(value) => setQuery({ ...query, parentIn: value })}
                  isMulti={true}
                  key='parentIn'
                />
              </BaseControl>
              <BaseControl label={__('Post Not In', 'zoloblocks')} className="zolo-flex-col-control">
                <AsyncSelect
                  classNamePrefix="zolo-select"
                  cacheOptions
                  defaultOptions
                  loadOptions={loadPostsOptions}
                  value={query?.postNotIn}
                  onChange={(value) => setQuery({ ...query, postNotIn: value })}
                  isMulti={true}
                  key='postNotIn'
                />
              </BaseControl>
              <BaseControl label={__('Parent Not In', 'zoloblocks')} className="zolo-flex-col-control">
                <AsyncSelect
                  classNamePrefix="zolo-select"
                  cacheOptions
                  defaultOptions
                  loadOptions={loadPostsOptions}
                  value={query?.parentNotIn}
                  onChange={(value) => setQuery({ ...query, parentNotIn: value })}
                  isMulti={true}
                  key='parentNotIn'
                />
              </BaseControl>
            </>
        }
        order={
        <>
          <SelectControl
            label={__('Order By', 'zoloblocks')}
            value={query?.orderBy}
            onChange={(orderBy) => {
              setQuery({...query, orderBy})
            }}
            options={orderByOptions}
          />

          {
            query?.orderBy && (
              <SelectControl
                label={__('Order', 'zoloblocks')}
                value={query?.order}
                onChange={(order) => {
                  setQuery({...query, order})
                }}
                options={[
                  {value: 'ASC', label: __('ASC', 'zoloblocks')},
                  {value: 'DESC', label: __('DESC', 'zoloblocks')},
                ]}
              />
            )
          }
        </>
        }
        pagination={
        <>
          <ToggleControl
            label={__('Ignore Sticky', 'zoloblocks')}
            checked={query?.ignoreSticky || false}
            onChange={(ignoreSticky) => {
              setQuery({...query, ignoreSticky: ignoreSticky})
            }}
          />
          <InputControl
            label={__('Posts Per Page', 'zoloblocks')}
            value={query?.perPage}
            onChange={(perPage) => {
              setQuery({...query, perPage})
            }}
            type="number"
            min={1}
            max={99}
            labelPosition="edge"
            __unstableInputWidth="64px"
          />
          <InputControl
            label={__('Page', 'zoloblocks')}
            value={query?.page}
            onChange={(page) => {
              setQuery({...query, page})
            }}
            type="number"
            min={1}
            max={99}
            labelPosition="edge"
            __unstableInputWidth="64px"
          />
          <InputControl
            label={__('Offset', 'zoloblocks')}
            value={query?.offset}
            onChange={(offset) => {
              setQuery({...query, offset})
            }}
            type="number"
            min={1}
            max={99}
            labelPosition="edge"
            __unstableInputWidth="64px"
          />
        </>
        }
      />
    </>
  )
}
export default BasicQuery;
