const normalizeVideoSchema = data => {
  if (!Array.isArray(data)) {
    throw new Error('The parameter data should be an array.');
  }

  return data.reduce(
    ({ entities, keys }, { id, ...rest }) => {
      return { entities: { ...entities, [id]: rest }, keys: [...keys, id] };
    },
    { entities: {}, keys: [] },
  );
};

export default normalizeVideoSchema;
