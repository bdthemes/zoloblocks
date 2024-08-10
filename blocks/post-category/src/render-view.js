import {useEffect, useState} from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import {Spinner} from '@wordpress/components';
import CategoryItem from './category-item';
const {isEmpty, strToHex} = window.zoloModule;
export default function RenderView({attributes}) {
  const {
    catQuery,
    singleBG,
    multipleBG
  } = attributes;
  const [isLoading, setIsLoading] = useState(true);
  const [catResults, setCatResults] = useState([]);
  const [multipleBgArray,setMultipleBgArray]=useState([]);

  const dataFetch = async () => {
    const formData = new FormData();
    formData.append('action', 'zolo_post_category');
    formData.append('zolo_nonce', zoloParams.zolo_nonce);
    formData.append('catQuery', JSON.stringify(catQuery));

    try {
      const response = await apiFetch({
        url: zoloParams?.ajaxurl,
        method: 'POST',
        body: formData,
      });
      if (response.success) {
        setCatResults(response.data.results);
      } else {
        setCatResults([]);
      }
    } catch (error) {
      console.error('Error:', error);
      setCatResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    dataFetch();
  }, [catQuery]);

  useEffect(() => {
    //multiple background setup
    let bgArray = [];
    if ( !singleBG && !isEmpty(multipleBG) &&  catResults.length > 0 ) {
      const bgColorsArray = multipleBG.slice(0, -1).split(',');
      const totalCategory = catResults.length;
      // Re-creating array for the multiple colors.
      const jCount = bgColorsArray.length;
      let j = 0;
      for (let i = 0; i < totalCategory; i++) {
        if (j === jCount) {
          j = 0;
        }
        bgArray[i] = bgColorsArray[j];
        j++;
      }
    }
    setMultipleBgArray(bgArray);
  }, [multipleBG,catResults,singleBG]);


  return (
    <>
      {isLoading ? (
        <div className="preloader">
          <Spinner/>
        </div>
      ) : (
        catResults.length > 0 ? (
          catResults.map((cat,index) => <CategoryItem key={index} index={index} cat={cat} attributes={attributes} multipleBgArray={multipleBgArray} />)
        ) : (
          <p>No categories found.</p>
        )
      )}
    </>
  );
}
