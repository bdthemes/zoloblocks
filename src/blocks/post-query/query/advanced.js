
import {
    __experimentalInputControl as InputControl,
    SelectControl,
    PanelBody,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    BaseControl
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { commentsCompareOptions, passwordOptions } from "../utils";
import { useSelect } from "@wordpress/data";
import Select2 from "react-select";

const AdvancedQuery = ({ query, setQuery }) => {
    const { mimeTypes } = useSelect((select) => {
        const { getSettings } = select('core/block-editor');
        const allowedMimeTypes = getSettings()?.allowedMimeTypes;
        const options = Object.keys(allowedMimeTypes)?.map((key) => {
            const label = key;
            const value = allowedMimeTypes[key];
            return {
                label,
                value
            }
        })

        return {
            mimeTypes: options
        }
    }, []);
    return (
        <>
            <PanelBody title={__('Comments', 'zoloblocks')} initialOpen={true}>
                <InputControl
                    label={__('Number of comments', 'zoloblocks')}
                    type="number"
                    value={query?.commentsNumber}
                    onChange={(value) => setQuery({ ...query, commentsNumber: value })}
                />
                {
                    query?.commentsNumber && (
                        <SelectControl
                            label={__('Comment Compare', 'zoloblocks')}
                            value={query?.commentsCompare}
                            onChange={(value) => setQuery({ ...query, commentsCompare: value })}
                            options={commentsCompareOptions}
                        />
                    )
                }
            </PanelBody>
            <PanelBody title={__('Password', 'zoloblocks')} initialOpen={false}>
                <ToggleGroupControl
                    value={query?.password}
                    onChange={(value) => setQuery({ ...query, password: value })}
                    isBlock
                    isDeselectable
                >
                    {
                        passwordOptions?.map((option) => (
                            <ToggleGroupControlOption
                                key={option.value}
                                value={option.value}
                                label={option.label}
                            />
                        ))
                    }
                </ToggleGroupControl>

                {
                    query?.password === 'password' && (
                        <InputControl
                            label={__('Specify Password', 'zoloblocks')}
                            type="text"
                            value={query?.passwordValue}
                            onChange={(value) => setQuery({ ...query, passwordValue: value })}
                        />
                    )
                }
            </PanelBody>
            <PanelBody title={__('Search', 'zoloblocks')} initialOpen={false}>
                <InputControl
                    label={__('Search Term', 'zoloblocks')}
                    type="text"
                    value={query?.searchValue}
                    onChange={(value) => setQuery({ ...query, searchValue: value })}
                />
            </PanelBody>
            <PanelBody title={__('Mime Types', 'zoloblocks')} initialOpen={false}>
                <BaseControl label={__('Media Types', 'zoloblocks')} className="zolo-flex-col-control">
                    <Select2
                        classNamePrefix="zolo-select"
                        options={mimeTypes}
                        value={query?.mimeTypes}
                        onChange={(value) => setQuery({ ...query, mimeTypes: value })}
                        isMulti={true}
                        key='mimeTypes'
                    />
                </BaseControl>
            </PanelBody>
        </>
    )
}
export default AdvancedQuery;