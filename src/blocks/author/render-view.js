import {useEffect, useState} from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import {Spinner} from '@wordpress/components';
import AuthorItem from './author-item';

export default function RenderView({attributes}) {
  const {
    authorQuery,
  } = attributes;
  const [isLoading, setIsLoading] = useState(true);
  const [authorList, setAuthorList] = useState([]);

  const dataFetch = async () => {
    const formData = new FormData();
    formData.append('action', 'zolo_author_ajax');
    formData.append('zolo_nonce', zoloParams.zolo_nonce);
    formData.append('authorQuery', JSON.stringify(authorQuery));

    try {
      const response = await apiFetch({
        url: zoloParams?.ajaxurl,
        method: 'POST',
        body: formData,
      });
      if (response.success) {
        setAuthorList(response.data.results);
      } else {
        setAuthorList([]);
      }
    } catch (error) {
      console.error('Error:', error);
      setAuthorList([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    dataFetch();
  }, [authorQuery]);

  useEffect(() => {

  }, []);

  return (
    <>
      {isLoading ? (
        <div className="preloader">
          <Spinner/>
        </div>
      ) : (
        authorList.length > 0 ? (
          authorList.map((author, index) => <AuthorItem key={index} author={author} attributes={attributes}/>)
        ) : (
          <p>No Author found.</p>
        )
      )}
    </>
  );
}
