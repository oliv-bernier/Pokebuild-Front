import slugify from 'slugify';

const slugifyText = (text: string): string => (slugify(text, { lower: true, remove: /[*+~()!'":@]/g }));

export default slugifyText;
