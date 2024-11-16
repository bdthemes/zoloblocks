import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import TemplatePicker from './template-picker';
const StartingScreen = ({ attributes, setAttributes }) => {
    const { saveEntityRecord } = useDispatch('core');
    const [openTemplateModal, setOpenTemplateModal] = useState(false);
    const {
        onNavigateToEntityRecord,
    } = useSelect(
        (select) => {
            const { getSettings } = select('core/block-editor');
            return {
                onNavigateToEntityRecord: getSettings().onNavigateToEntityRecord
            };
        },
        []
    );

    const createLoopTemplate = async () => {
        try {
            const newTemplate = await saveEntityRecord('postType', 'loop-template', {
                status: 'publish',
                title: `Loop Template ${Date.now()}`,
            });

            if (newTemplate?.id) {
                setAttributes({ ref: newTemplate?.id });
                onNavigateToEntityRecord({ postId: newTemplate?.id, postType: 'loop-template' })
            } else {
                console.error('Failed to create the loop template');
            }

        } catch (error) {
            console.error('Error while creating the loop template:', error);
        }
    };

    return (
        <>
            <div className='zolo-loop-starting-screen'>
                <h3 className="zolo-loop-starting-screen-title">{__('Choose an option', 'zoloblocks')}</h3>
                <div className="zolo-loop-starting-screen-content">
                    <Button onClick={() => { setOpenTemplateModal(true) }} variant='primary'>{__('Select Template', 'zoloblocks')}</Button>
                    <Button onClick={createLoopTemplate} variant='primary'>{__('Create New', 'zoloblocks')}</Button>
                </div>
            </div>
            {openTemplateModal && <TemplatePicker openTemplateModal={openTemplateModal} setOpenTemplateModal={setOpenTemplateModal} />}
        </>
    )
}

export default StartingScreen;