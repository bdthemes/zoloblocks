import { select, subscribe } from '@wordpress/data';
import { getCategories, updateCategory } from '@wordpress/blocks';

// This function checks the template name and updates categories accordingly
const reorderCategories2 = (isSingleTemplate) => {
  const categories = getCategories();

  // Find the specific categories
  const categorySingle = categories.find(cat => cat.slug === 'zoloblocks-single');
  const categoryDefault = categories.find(cat => cat.slug === 'zoloblocks');

  // If either category is missing, log a warning
  if (!categorySingle || !categoryDefault) {
    console.warn('One or both of the Zolo Blocks categories are missing!');
    return;
  }

  // Filter out the specific categories and keep the rest
  const otherCategories = categories.filter(cat =>
    cat.slug !== 'zoloblocks-single' && cat.slug !== 'zoloblocks'
  );

  // Conditionally reorder categories based on isSingleTemplate
  const reorderedCategories = isSingleTemplate
    ? [categorySingle, categoryDefault, ...otherCategories]  // "zoloblocks-single" first if single template
    : [categoryDefault, categorySingle, ...otherCategories]; // "zoloblocks" first otherwise

  // Update the block categories in Gutenberg
  reorderedCategories.forEach(category => {
    updateCategory(category.slug, category);
  });

  console.log(`Block categories reordered (isSingleTemplate: ${isSingleTemplate}):`, reorderedCategories);
};


console.log("hellodddd");

// Subscribe to changes and run the reorderCategories2 function
//const unsubscribe = subscribe(() => {
  // Get current post template name (or template id) from the editor
  const currentPostTemplateName = select('core/editor').getCurrentPostId();

  console.log(currentPostTemplateName); // Log the template name to check if it's correct

  // If the template includes 'single', reorder categories
  if (currentPostTemplateName && currentPostTemplateName.includes('single')) {
    console.log('single')
    reorderCategories2(true);  // Call function for single template
  } else {
    reorderCategories2(true); // Call function for non-single template
  }
  //
  // // Unsubscribe after running once
  // unsubscribe();
//});
