const utility = (primaryState, updatedState) => {
  return { ...primaryState, ...updatedState };
};

export default utility;
