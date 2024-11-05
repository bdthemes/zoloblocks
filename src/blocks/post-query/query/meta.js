import { __experimentalInputControl as InputControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { compareOptions } from "../utils";
const Meta = ({ value, onChange }) => {
    return (
        <>
            <InputControl
                label={__('Meta Key', 'zoloblocks')}
                placeholder={__('Meta Key', 'zoloblocks')}
                value={value?.metaKey}
                onChange={newValue => onChange({ ...value, metaKey: newValue })}
            />

            {
                value?.metaKey && (
                    <>
                        <InputControl
                            label={__('Meta Value', 'zoloblocks')}
                            placeholder={__('Meta Value', 'zoloblocks')}
                            value={value?.metaValue}
                            onChange={newValue => onChange({ ...value, metaValue: newValue })}
                        />

                        {
                            value?.metaValue && (
                                <SelectControl 
                                    label={__('Meta Comparison', 'zoloblocks')}
                                    value={value?.metaComparison}
                                    onChange={newValue => onChange({ ...value, metaComparison: newValue })}
                                    options={compareOptions}
                                />
                            )
                        }
                    </>
                )
            }
        </>
    )
}
export default Meta;