import {
    PanelBody,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Taxonomy from './taxonomy';
import { queryRelationOptions } from '../utils';
import Meta from './meta';
import Date from './date';
import Author from './author';

const { ZoloRepeater } = window.zoloModule;
const Filters = ({ query, setQuery }) => {
    return (
        <>
            <PanelBody
                title={__('Taxonomy', 'zoloblocks')}
                initialOpen={true}
            >
                <ZoloRepeater
                    repeaterItems={query?.taxQuery}
                    onChange={(value) => setQuery({ taxQuery: value })}
                    itemLabelName="taxonomy"
                    defaultLabel="Taxonomy"
                >
                    <Taxonomy
                        name="taxonomies"
                    />
                </ZoloRepeater>
                <ToggleGroupControl
                    label={__('Relation', 'zoloblocks')}
                    value={query?.taxQueryRelation}
                    onChange={(value) => setQuery({ taxQueryRelation: value })}
                    isBlock
                    isDeselectable
                >
                    {
                        queryRelationOptions?.map((option) => (
                            <ToggleGroupControlOption
                                key={option.value}
                                value={option.value}
                                label={option.label}
                            />
                        ))
                    }
                </ToggleGroupControl>
            </PanelBody>
            <PanelBody
                title={__('Meta', 'zoloblocks')}
                initialOpen={false}
            >
                <ZoloRepeater
                    repeaterItems={query?.metaQuery}
                    onChange={(value) => setQuery({ metaQuery: value })}
                    itemLabelName="meta"
                    defaultLabel="Meta"
                >
                    <Meta
                        name="metaQuery"
                    />
                </ZoloRepeater>
                <ToggleGroupControl
                    label={__('Relation', 'zoloblocks')}
                    value={query?.metaQueryRelation}
                    onChange={(value) => setQuery({ metaQueryRelation: value })}
                    isBlock
                    isDeselectable
                >
                    {
                        queryRelationOptions?.map((option) => (
                            <ToggleGroupControlOption
                                key={option.value}
                                value={option.value}
                                label={option.label}
                            />
                        ))
                    }
                </ToggleGroupControl>
            </PanelBody>
            <PanelBody
                title={__('Date', 'zoloblocks')}
                initialOpen={false}
            >
                <ZoloRepeater
                    repeaterItems={query?.dateQuery}
                    onChange={(value) => setQuery({ dateQuery: value })}
                    itemLabelName="date"
                    defaultLabel="Date"
                >
                    <Date
                        name="dateQuery"
                    />
                </ZoloRepeater>
                <ToggleGroupControl
                    label={__('Relation', 'zoloblocks')}
                    value={query?.dateQueryRelation}
                    onChange={(value) => setQuery({ dateQueryRelation: value })}
                    isBlock
                    isDeselectable
                >
                    {
                        queryRelationOptions?.map((option) => (
                            <ToggleGroupControlOption
                                key={option.value}
                                value={option.value}
                                label={option.label}
                            />
                        ))
                    }
                </ToggleGroupControl>
            </PanelBody>
            <PanelBody
                title={__('Author', 'zoloblocks')}
                initialOpen={false}
            >
                <Author
                    query={query}
                    setQuery={setQuery}
                />
            </PanelBody>
        </>
    )
}
export default Filters;