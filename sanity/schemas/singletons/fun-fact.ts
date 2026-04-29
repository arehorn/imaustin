// schemas/proofOfLife.js
export default {
  name: 'proofOfLife',
  title: 'Proof of Life',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt text', type: 'string' }
      ],
    },
  ],
}
