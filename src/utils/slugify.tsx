import slugify from 'slugify';

/**
 * This function return a slugified version of the input text
 * @param {string} text - the value you want to slugify
 * @return {string} - slugified text
 */
const slugifyText = (text: string): string => (slugify(text, { lower: true, remove: /[*+~()!'":@]/g }));

export default slugifyText;
