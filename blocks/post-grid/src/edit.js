import {
    useBlockProps
} from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from "@wordpress/api-fetch";
import classnames from 'classnames';
import {
    BLOCK_PREFIX
} from './constants';
import Inspector from './inspector';
import styles from './styles';
const {
    handleUniqueId,
    softMinifyCssStrings,
} = window.zoloModule;

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, postQuery } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    //generate all style
    const allStyle = styles({
        attributes,
        setAttributes
    })

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${'zolo-post-grid-' + styles}`),
    });

    //query change effect
    // const [queryEffect, setQueryEffect] = useState(false);
    // const changeQuery = () => {
    //   setQueryEffect(!queryEffect);
    // }

    useEffect(() => {
        if (typeof (postQuery) === 'undefined') {
            setAttributes({
                postQuery: {
                    postType: 'post',
                    postInclude: '',
                    postExclude: '',
                    postAuthors: [],
                    postTaxonomies: {},
                    postPerPage: 6,
                    postOffset: 0,
                    postOrderby: 'date',
                    postOrder: 'desc',
                }
            })
        }
    }, []);

    const [postResults, setPostResults] = useState([]);
    const [dataSuccess, setDataSuccess] = useState(true);
    const [pageTotal, setPageTotal] = useState(0);

    useEffect(() => {
        let paginationLimit = 0;
        paginationLimit = postQuery?.postPerPage;

        const apiData = {
            zolo_nonce: zoloParams.zolo_nonce,
            attributes: attributes,
            postQuery: postQuery
        }

        apiFetch({
            path: '/zolo/v1/posts',
            method: 'POST',
            data: apiData,
        }).then((response) => {
            if (response.success) {
                setPostResults([...response.data.posts]);
                setPageTotal(response.data.total_page);
                setDataSuccess(response.success);
            } else {
                setPostResults([]);
                setPageTotal(0);
                setDataSuccess(response.success);
            }
        })
            .catch((error) => console.log(error));;
    }, [postQuery]);

    console.log({
        postResults,
        dataSuccess,
        pageTotal,
    })


    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <style>{`${softMinifyCssStrings(allStyle)}`}</style>

            <div {...blockProps}>

                <h1>Post Grid</h1>

            </div>
        </>
    );
}
