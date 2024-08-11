import { BaseControl } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import AsyncSelect from "react-select/async";
import apiFetch from "@wordpress/api-fetch";
export default function Select2AjaxControl(props) {
  const {
    label,
    value,
    onChange,
    sourceName,
    sourceType,
    placeholder,
    isMulti
  } = props;
  const [defaultData, setDefaultData] = useState([]);
  const fetchData = async (searchText = '') => {
    const formData = new FormData();
    formData.append('action', 'zolo_select2_search');
    formData.append('source_name', sourceName);
    formData.append('source_type', sourceType);
    formData.append('per_page', 10);
    formData.append('search', searchText);
    formData.append('zolo_nonce', zoloParams.zolo_nonce);

    try {
      const data = await apiFetch({
        url: zoloParams?.ajaxurl,
        method: 'POST',
        body: formData,
      })
      const results = data?.results || [];
      return results.map((item) => ({
        value: item.id,
        label: item.text
      }));

    } catch (error) {
      console.error('fetch data error', error);
      return [];
    }

  }

  //set default options
  useEffect(() => {
    fetchData().then((defaultOptions) => {
      setDefaultData(defaultOptions);
    });
  }, [sourceType]);

  return (
    <BaseControl label={label || ''}>
      <AsyncSelect
        isMulti={isMulti || false}
        closeMenuOnSelect={true}
        defaultOptions={defaultData}
        placeholder={placeholder || ''}
        value={value || ''}
        onChange={(val) => onChange(val)}
        loadOptions={fetchData}
        classNamePrefix="zolo-select"
      />
    </BaseControl>
  )
}
