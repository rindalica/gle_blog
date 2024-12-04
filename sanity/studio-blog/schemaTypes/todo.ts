export default {
  title: 'Todo',
  name: 'todo', //백엔드에서 접근하는 키
  type: 'document',
  fields: [
    {
      title: 'Contents',
      name: 'contents',
      type: 'string',
    },
    {
      title: 'Completed',
      name: 'completed',
      type: 'boolean',
    },
  ],
}
