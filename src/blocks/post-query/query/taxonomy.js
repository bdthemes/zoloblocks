import AsyncSelect from "react-select/async";
import Select from "react-select";
import { BaseControl, ToggleControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import apiFetch from "@wordpress/api-fetch";
import { useState, useEffect } from "@wordpress/element";
import { taxOperatorOptions } from "../utils";

const Taxonomy = ({ onChange, value }) => {
    const excludes = ['nav_menu', 'wp_pattern_category'];
    const [terms, setTerms] = useState([]);
    const getTaxonomyOptions = async (input) => {
        const response = await apiFetch({
            path: '/wp/v2/taxonomies',
        })

        const taxonomies = [];

        for (const key in response) {
            const taxonomy = response[key];
            if (!excludes.includes(taxonomy.slug)) {
                taxonomies.push({
                    label: taxonomy?.name,
                    value: taxonomy?.slug,
                    rest_base: taxonomy?.rest_base
                })
            }
        }

        if (input) {
            return taxonomies.filter(taxonomy => taxonomy.label.toLowerCase().includes(input.toLowerCase()))
        }

        return taxonomies;
    }

    const getTermOptions = async (taxonomy) => {
        const response = await apiFetch({
            path: `/wp/v2/${taxonomy}`,
        });

        const terms = response.map((term) => {
            return {
                label: term?.name,
                value: term?.id
            }
        })

        if (terms) {
            setTerms(terms);
        }
    }

    useEffect(() => {
        if (value?.taxonomy?.rest_base) {
            getTermOptions(value?.taxonomy?.rest_base);
        }
    }, [value?.taxonomy?.rest_base])

    return (
        <>
            <ToggleControl
                label={__('Include Children', 'zoloblocks')}
                checked={value?.includeChildren || false}
                onChange={(includeChildren) => {
                    onChange({ ...value, includeChildren });
                }}
            />
            <BaseControl label={__('Taxonomies', 'zoloblocks')} className="zolo-flex-col-control">
                <AsyncSelect
                    classNamePrefix="zolo-select"
                    defaultOptions
                    cacheOptions
                    loadOptions={getTaxonomyOptions}
                    value={value?.taxonomy}
                    onChange={(newValue) => onChange({ ...value, taxonomy: newValue, terms: [] })}
                    isMulti={false}
                    isClearable
                    key='taxonomies'
                />
            </BaseControl>
            {
                value?.taxonomy?.value && terms.length > 0 && (
                    <BaseControl label={__('Terms', 'zoloblocks')} className="zolo-flex-col-control">
                        <Select
                            classNamePrefix="zolo-select"
                            options={terms}
                            value={value?.terms}
                            onChange={(newValue) => onChange({ ...value, terms: newValue })}
                            isMulti={true}
                            isClearable
                            key='terms'
                        />
                    </BaseControl>
                )
            }

            <SelectControl 
                label={__('Operator', 'zoloblocks')}
                options={taxOperatorOptions}
                value={value?.operator}
                onChange={(operator) => onChange({ ...value, operator })}
            />
        </>
    )
};

export default Taxonomy;