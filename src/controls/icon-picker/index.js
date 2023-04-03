import { __ } from '@wordpress/i18n';
import {
    PanelRow,
    Dashicon,
    SearchControl
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

import "../scss/componets/_icon-picker.scss"


//Import Dashicon list
import { dashIcon } from "./icons/dashicon"

const IconPicker = (props) => {

    const [selectedIcon, setSelectedIcon] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [icons, setIcons] = useState("");

    useEffect(() => {
        if (typeof dashIcon === 'object' && Object.keys(dashIcon).length > 0) {
            setIcons(dashIcon);
        }
        // let icons = {}
        // Object.keys(dashIcon).map((item, index) => {
        //     icons = {
        //         ...icons,
        //         [item]: {
        //             name: item.replace(/-/g, " "),
        //             source: 'dashicon',
        //             type: ""
        //         }
        //     }
        // })
        // console.log("Icons:", icons)
    }, [])


    const searchIcon = (text) => {
        setSearchInput(text)

        //Filter search result
        const filteredIcons = Object.keys(dashIcon)
        .filter((item) => item.includes(text))
        .reduce((obj, key) => {
            return Object.assign(obj, {
                [key]: dashIcon[key]
            })
        }, {})

        //set Icons list from search result
        setIcons(filteredIcons)
    }

    return (
        <>
            <PanelRow>Select Icon</PanelRow>
            <SearchControl
                value={searchInput}
                onChange={(text) => searchIcon(text)}
            />
            <div className='zolo-icon-area'>
                {Object.keys(icons).map((item, index) => (
                    <div className='zolo-icon-box'>
                        <div className='zolo-icon-content'>
                            <Dashicon icon={item} />
                            <PanelRow>{dashIcon[item].name}</PanelRow>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default IconPicker;
