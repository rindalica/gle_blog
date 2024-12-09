export default {
  title: 'Post',
  name: 'post', //백엔드에서 접근하는 키
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'string',
    },
  ],
}
