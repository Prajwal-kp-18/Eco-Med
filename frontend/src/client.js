import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'hvuwdj1u',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token:
    'sk7FxUFlBrZXbt4I23E2u9D0k3iZTno3WOJ76cpD8BGf691is9QLLujbjvSwEWn9ac6Sw0poD09TNGThu8lXFwKVw5YR5tBFnGLRzBItGk7VGKyCmCQzeNpc6je0IoSwlZ1iCwnFISuurpFWtALVRgNTpezJFDZ7o4CExSjNBHhB6QBrqkmb',
});

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);
